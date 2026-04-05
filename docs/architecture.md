# Architecture Recommendation

## Recommended stack

- Next.js App Router for a durable, scalable web app shell
- React + TypeScript for strongly typed UI and state management
- Tailwind CSS for a fast, consistent design system
- Supabase Auth + Postgres for authentication, content, and progress tracking
- Local seed files for the question bank and a demo auth fallback for frictionless local setup

## Why this is the right upgrade from local HTML prototypes

The older HTML app pattern is useful for experimenting, but it starts to break down when you need user accounts, protected routes, reusable assessment flows, and competency-based analytics. This architecture gives you:

- a single real app shell instead of disconnected pages
- reusable domain models for practice, simulation, results, and progress
- a clean path from seeded local content to Supabase-backed content management
- enough structure for growth without prematurely introducing enterprise complexity

## Project tree

```text
.
|-- app
|   |-- (auth)
|   |   |-- login/page.tsx
|   |   `-- signup/page.tsx
|   |-- (app)
|   |   |-- dashboard/page.tsx
|   |   |-- subjects/page.tsx
|   |   |-- subjects/[slug]/page.tsx
|   |   |-- quiz/[sessionId]/page.tsx
|   |   |-- simulation/[sessionId]/page.tsx
|   |   `-- results/[attemptId]/page.tsx
|   |-- actions/auth.ts
|   |-- globals.css
|   |-- layout.tsx
|   `-- page.tsx
|-- components
|   |-- auth
|   |-- dashboard
|   |-- quiz
|   |-- subjects
|   `-- ui
|-- lib
|   |-- assessment
|   |-- auth
|   |-- seed
|   |-- supabase
|   `-- utils.ts
|-- supabase
|   `-- migrations/202604050001_init.sql
|-- types
|   `-- domain.ts
|-- .env.example
`-- README.md
```

## Database schema summary

Core tables:

- `profiles`: student profile data keyed to `auth.users`
- `subjects`: content domains like Math, ELA, Science, and Social Studies
- `competencies`: standards or skill buckets within a subject
- `questions`: question stem, rationale, difficulty, and metadata
- `question_choices`: normalized answer choices
- `assessment_attempts`: one row per quiz or simulation submission
- `attempt_responses`: one row per answered question

Derived reporting:

- `student_competency_progress` view for accuracy, volume, and time by competency

## Key routes

- `/`: marketing landing page and entry point
- `/login`: student sign in
- `/signup`: student sign up
- `/dashboard`: progress overview, recent activity, and recommendations
- `/subjects`: subject catalog
- `/subjects/[slug]`: competency list, progress, and practice entry points
- `/quiz/[sessionId]`: reusable practice engine
- `/simulation/[sessionId]`: exam-style timed shell
- `/results/[attemptId]`: score summary and answer review
