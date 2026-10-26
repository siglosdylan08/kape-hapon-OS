# Phase 1 architecture

## Scope and boundaries

A single Next.js App Router application with React Server Components by default. Public pages are `/` and `/health`; `/api/health` is a non-cacheable JSON liveness endpoint. There are no user accounts, permissions, business records, branch selectors, transactions, stock movements, payroll logic, or dashboards with fabricated metrics.

Route entry points compose shared layout and UI components. `src/lib` contains small shared utilities and validation; `src/types` contains cross-layer contracts. Future workflow-specific code belongs in `src/features` only after approval. Future protected server services and database repositories must remain server-only; never place credentials, database access, or authorization decisions in client components.

The future persistence target is PostgreSQL through Prisma. Phase 1 installs matching stable Prisma CLI/client versions and declares only the provider. It does not create models, generate a client, apply migrations, start a database, or claim persistence readiness. Add the appropriate PostgreSQL driver adapter and generated server-only client when a schema is approved.

## Security requirements for later phases

Authentication and branch authorization are pending, not simulated. Every protected server read and mutation must validate the individual actor and permission for the requested branch. Client navigation or hidden controls cannot enforce access. Responses must exclude restricted sales totals, costs, margins, expected cash, payroll, and employee information for unauthorized roles. Sensitive actions require individual actor attribution; no shared staff sessions.

Environment configuration is allowlisted with Zod. Server configuration must never be serialized into page props, endpoint responses, or logs. Database URLs are optional now; production code must explicitly require the prerequisites its operations need. Do not log raw schema validation errors containing supplied secrets.

The Next configuration disables the framework identification header, denies framing, and sends nosniff and referrer-policy headers. These are baseline headers, not a claim of complete production hardening. CSP, identity/session security, rate limiting, database roles, backups, audit retention, idempotency, and deployment controls require later designs and verification.

## Design foundation

`src/styles/globals.css` centralizes brand colors and semantic shadcn/Tailwind tokens, radii, and font families. Tailwind's spacing and breakpoint scale provides the shared layout system. Comfortaa is used for branding and selected headings; Inter is used for operational text. Both are bundled locally. Body numerals are tabular. Use semantic tokens rather than duplicating hex values in components.

The shared shell includes semantic landmarks and a keyboard skip link. The first primitive is a shadcn-style Button with Radix composition, disabled behavior, visible focus, and a minimum 44px touch height. Layouts wrap and use responsive columns. Motion honors user preferences. Add loading, empty, success, error, and validation states alongside the future workflows that need them; do not invent inactive operational controls now.

## Dependency decisions

Versions are pinned in package.json and package-lock.json. Node 24 LTS is the supported runtime. Stable Next 16 and React 19 are mutually compatible. Tailwind 4 uses its PostCSS plugin. Vitest runs browser-oriented component tests in jsdom and health route tests in Node.

Prisma's registry default pointed to an 8.0 release candidate during setup; stable 7.10.1 was selected for both CLI and client. ESLint 10 conflicted with the supported peer ranges of Next's React/import/accessibility plugins, so ESLint 9.39.5 is pinned despite its upstream deprecation notice. Revisit when those plugins support ESLint 10. TypeScript strict mode and noUncheckedIndexedAccess are enabled.

React Hook Form and Zod are installed for future approved forms. An optional resolver package is intentionally omitted: current releases caused optional peer conflicts involving Effect and Zod. No form is implemented in Phase 1, so this does not reduce current functionality. shadcn's CLI is a development dependency; owned primitives remain ordinary application source.

## Next development sequence

After Phase 1 approval: refine the component system, design identity/branch authorization, approve a database schema and development-only database setup, then select one operational workflow with explicit acceptance criteria. Offline operation, payment integrations, receipts, and POS hardware remain undecided. No later phase is authorized by this document.
