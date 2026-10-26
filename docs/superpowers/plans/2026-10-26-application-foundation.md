# Application Foundation Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Deliver the approved Phase 1 application foundation without operational modules.

**Architecture:** One Next.js App Router application with server-rendered public placeholders. Keep UI primitives, layout, shared validation, types, and future features separate. PostgreSQL and Prisma are future infrastructure; no database connection or authentication is introduced.

**Tech Stack:** Stable Next.js, React, strict TypeScript, Tailwind, shadcn/Radix, Lucide, Prisma, Zod, React Hook Form, Vitest, Testing Library.

**Spec:** User's Phase 1 request and root AGENTS.md.

## Global Constraints

Preserve AGENTS.md. Work on feat/application-foundation. No operational modules, production database, fake authentication, or automatic merge. Use compatible stable versions and a committed lockfile.

## Review Focus

- Health response must not imply database or authorization readiness.
- Server secrets must never become public configuration or health output.
- Keyboard navigation and small screens must retain usable page content.
- Environment parsing must reject invalid supplied configuration without requiring a database.
- Production builds must not fetch fonts or require infrastructure credentials.

### Task 1: Toolchain and test harness

Files: package.json, package-lock.json, tsconfig.json, eslint.config.mjs, postcss.config.mjs, next.config.ts, vitest.config.ts, src/test/setup.ts.

- [x] Configure pinned stable dependencies and npm scripts; install with a writable cache.
- [x] Configure strict TypeScript, flat ESLint, Tailwind v4, and jsdom Testing Library.
- [x] Write tests for landing navigation, health semantics, button accessibility, and environment parsing; run to observe missing functionality.

### Task 2: Foundation pages and design system

Files: src/app/{layout,page}.tsx, src/app/health/page.tsx, src/app/api/health/route.ts, src/components/{layout,ui}, src/styles/globals.css, src/lib/{utils,env,health}.ts, src/types/health.ts, components.json.

Interfaces: GET /api/health returns only process liveness and explicit unchecked database status. parseServerEnv(input) validates optional DATABASE_URL. Public landing links to /health.

- [x] Implement semantic brand tokens, accessible Button, layout, landing, health page, and route.
- [x] Keep future feature/type directories documented; configure model-free Prisma without database access.
- [x] Run all tests and type checking; expected all pass.

### Task 3: Documentation and verification

Files: README.md, .env.example, .gitignore, prisma/schema.prisma, prisma.config.ts, docs/{architecture,verification}.md, .github/workflows/ci.yml.

- [x] Document setup, boundaries, environment conventions, scripts, and deferred security/database work.
- [x] Run lint, typecheck, tests, Prisma validation, production build, and HTTP smoke checks.
- [x] Review the complete diff; preserve AGENTS.md byte-for-byte.
- [x] Commit, push feature branch, and create a PR to main when GitHub access permits. Do not merge.

## Execution record

Executed inline in the existing isolated cloud checkout on the requested feature branch. No additional worktree was created. Initial test run failed because the implementation modules did not exist; the completed suite passes 13 tests. Used npm instead of the earlier proposed pnpm because no package manager was established and npm is available in the cloud runtime. Optional form resolvers were omitted after upstream peer conflicts; no forms need one yet. ESLint 9 is retained for Next plugin compatibility. Prisma and GitHub API proxy denials were resolved after saving required network destinations. No TLS or checksum verification was disabled. An independent read-only reviewer found no critical or important defects; the suggested browser verification was subsequently completed.
