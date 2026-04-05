create extension if not exists pgcrypto;

do $$
begin
  if not exists (select 1 from pg_type where typname = 'user_role') then
    create type public.user_role as enum ('student', 'parent', 'admin');
  end if;

  if not exists (select 1 from pg_type where typname = 'assessment_mode') then
    create type public.assessment_mode as enum ('practice', 'simulation');
  end if;
end $$;

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  role public.user_role not null default 'student',
  full_name text not null,
  grade_level integer not null default 5,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.subjects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.competencies (
  id uuid primary key default gen_random_uuid(),
  subject_id uuid not null references public.subjects (id) on delete cascade,
  code text not null,
  title text not null,
  description text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default timezone('utc', now()),
  unique (subject_id, code)
);

create table if not exists public.questions (
  id uuid primary key default gen_random_uuid(),
  subject_id uuid not null references public.subjects (id) on delete cascade,
  competency_id uuid not null references public.competencies (id) on delete cascade,
  stem text not null,
  explanation text not null,
  correct_choice_key text not null check (correct_choice_key in ('A', 'B', 'C', 'D')),
  difficulty text not null check (difficulty in ('foundation', 'on-track', 'challenge')),
  source_metadata jsonb not null default '{}'::jsonb,
  status text not null default 'published' check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.question_choices (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references public.questions (id) on delete cascade,
  choice_key text not null check (choice_key in ('A', 'B', 'C', 'D')),
  label text not null,
  sort_order integer not null default 0,
  unique (question_id, choice_key)
);

create table if not exists public.assessment_attempts (
  id uuid primary key default gen_random_uuid(),
  client_attempt_id text not null unique,
  user_id uuid not null references public.profiles (id) on delete cascade,
  mode public.assessment_mode not null,
  subject_id uuid references public.subjects (id) on delete set null,
  competency_id uuid references public.competencies (id) on delete set null,
  subject_slug text,
  competency_key text,
  score_percent numeric(5, 2) not null,
  correct_count integer not null,
  total_questions integer not null,
  elapsed_seconds integer not null default 0,
  is_timed boolean not null default false,
  started_at timestamptz not null default timezone('utc', now()),
  completed_at timestamptz not null default timezone('utc', now()),
  summary jsonb not null default '{}'::jsonb
);

create index if not exists assessment_attempts_user_completed_idx
  on public.assessment_attempts (user_id, completed_at desc);

create index if not exists assessment_attempts_client_attempt_idx
  on public.assessment_attempts (client_attempt_id);

create table if not exists public.attempt_responses (
  id uuid primary key default gen_random_uuid(),
  attempt_id uuid not null references public.assessment_attempts (id) on delete cascade,
  question_id uuid not null references public.questions (id) on delete cascade,
  selected_choice_key text check (selected_choice_key in ('A', 'B', 'C', 'D')),
  is_correct boolean not null default false,
  flagged boolean not null default false,
  time_spent_seconds integer not null default 0
);

create or replace view public.student_competency_progress as
select
  aa.user_id,
  c.id as competency_id,
  c.code as competency_code,
  c.title as competency_title,
  s.slug as subject_slug,
  count(ar.id) as responses_count,
  coalesce(sum(case when ar.is_correct then 1 else 0 end), 0) as correct_count,
  round(
    100.0 * coalesce(sum(case when ar.is_correct then 1 else 0 end), 0) / nullif(count(ar.id), 0),
    2
  ) as accuracy_percent,
  coalesce(sum(ar.time_spent_seconds), 0) as total_time_spent_seconds
from public.attempt_responses ar
join public.assessment_attempts aa on aa.id = ar.attempt_id
join public.questions q on q.id = ar.question_id
join public.competencies c on c.id = q.competency_id
join public.subjects s on s.id = q.subject_id
group by aa.user_id, c.id, c.code, c.title, s.slug;

alter table public.profiles enable row level security;
alter table public.subjects enable row level security;
alter table public.competencies enable row level security;
alter table public.questions enable row level security;
alter table public.question_choices enable row level security;
alter table public.assessment_attempts enable row level security;
alter table public.attempt_responses enable row level security;

create policy if not exists "profiles are readable by the owner"
on public.profiles
for select
using (auth.uid() = id);

create policy if not exists "profiles are writable by the owner"
on public.profiles
for update
using (auth.uid() = id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', 'Student'),
    coalesce((new.raw_user_meta_data ->> 'role')::public.user_role, 'student')
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

create policy if not exists "authenticated users can read subjects"
on public.subjects
for select
using (auth.role() = 'authenticated');

create policy if not exists "authenticated users can read competencies"
on public.competencies
for select
using (auth.role() = 'authenticated');

create policy if not exists "authenticated users can read questions"
on public.questions
for select
using (auth.role() = 'authenticated');

create policy if not exists "authenticated users can read question choices"
on public.question_choices
for select
using (auth.role() = 'authenticated');

create policy if not exists "students can read their own attempts"
on public.assessment_attempts
for select
using (auth.uid() = user_id);

create policy if not exists "students can insert their own attempts"
on public.assessment_attempts
for insert
with check (auth.uid() = user_id);

create policy if not exists "students can read their own responses"
on public.attempt_responses
for select
using (
  exists (
    select 1
    from public.assessment_attempts aa
    where aa.id = attempt_id
      and aa.user_id = auth.uid()
  )
);

create policy if not exists "students can insert their own responses"
on public.attempt_responses
for insert
with check (
  exists (
    select 1
    from public.assessment_attempts aa
    where aa.id = attempt_id
      and aa.user_id = auth.uid()
  )
);
