# Otto's Code Camp: Georgia Milestones 5th Grade Prep

A production-minded MVP for a Georgia Milestones 5th grade study platform built with Next.js, TypeScript, Tailwind CSS, and a Supabase-ready data model.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Supabase Auth + Postgres ready schema
- Local demo auth and local attempt storage fallback for fast local development

## Why this foundation

This project is intentionally set up so it is easy to run locally before Supabase is fully connected, while still preserving the architecture needed for a real hosted product:

- App Router gives us a clean route model and server rendering where it helps.
- Supabase is the long-term auth and database layer.
- The assessment engine is reusable across practice and simulation flows.
- Sample content is seedable and organized by subject and competency.
- Attempt history is stored locally for the MVP, with a matching normalized database schema prepared in `supabase/migrations`.

## Quick start

1. Install dependencies:

```bash
npm install
```

2. Copy the environment template:

```bash
cp .env.example .env.local
```

3. Optional: add Supabase keys to `.env.local`.

4. Start the app:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000).

## Demo auth fallback

If Supabase is not configured and `NEXT_PUBLIC_ENABLE_DEMO_AUTH=true`, the login and signup screens will create a secure demo cookie so the protected app flows can still be exercised locally.

## Database setup

- Schema: [supabase/migrations/202604050001_init.sql](./supabase/migrations/202604050001_init.sql)
- Architecture notes: [docs/architecture.md](./docs/architecture.md)
- Sample question bank: [lib/seed/question-bank.ts](./lib/seed/question-bank.ts)

## Supabase wiring

The app now supports two modes:

- Demo mode: local auth cookie + local attempt storage
- Supabase mode: Supabase auth + persisted quiz attempts in Postgres

To enable Supabase mode:

1. Create a Supabase project.
2. Run the SQL in `supabase/migrations/202604050001_init.sql`.
3. Add these values to `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
NEXT_PUBLIC_ENABLE_DEMO_AUTH=false
```

4. Restart the dev server.

## How to review progress locally

1. Start the app:

```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000).
3. Walk the MVP flow:
   - landing page
   - sign up or log in
   - dashboard
   - subject page
   - quiz
   - simulation
   - results review
4. Check repo status:

```bash
git status
```

5. Re-run verification when needed:

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment path

The easiest deployment path is Vercel + Supabase.

1. Push this repo to GitHub.
2. Import the repo into Vercel.
3. Add the environment variables from `.env.local` in Vercel project settings.
4. Deploy.

If you want, the next step I can take is:

- connect the question bank to Supabase tables and add SQL seed data
- update the current sample standards tags to current Georgia standards
- prepare the repo for a first Git commit and deployment push

## MVP routes

- `/`
- `/login`
- `/signup`
- `/dashboard`
- `/subjects`
- `/subjects/[slug]`
- `/quiz/[sessionId]`
- `/simulation/[sessionId]`
- `/results/[attemptId]`
