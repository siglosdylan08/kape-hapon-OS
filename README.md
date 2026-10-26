# Kape Hapon OS

“Different branches, same Kape Hapon experience.”

Phase 1 establishes the application foundation for a multi-branch café operating system. The public landing and health pages contain no live business data. No operational modules, authentication, database models, or production infrastructure are implemented.

Read [AGENTS.md](AGENTS.md) before contributing. It is the authoritative engineering and frontend design guidance.

## Requirements and installation

- Node.js 24 LTS, at least 24.11 (see `.nvmrc`).
- npm 11.9.0, matching `packageManager`.
- No database, external API, or credentials are required for Phase 1.

```bash
npm ci
npm run dev
```

The development server uses port 3000 and binds to all interfaces for cloud development. For a local-only bind, run `npx next dev --hostname 127.0.0.1` instead. Routes: `/` (placeholder), `/health` (human-readable health), `/api/health` (JSON liveness).

For restricted cloud machines with a non-writable default npm cache, use `npm ci --cache /tmp/kape-npm-cache`.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | ESLint, with warnings treated as failures |
| `npm run typecheck` | Generate Next route types and run strict TypeScript |
| `npm test` | Run all Vitest tests once |
| `npm run test:watch` | Interactive test watch mode |
| `npm run db:validate` | Validate the provider-only Prisma schema; no database access |
| `npm run build` | Build the production application |
| `npm start` | Serve the completed production build |
| `npm run check` | Lint, types, tests, Prisma validation, and production build |

## Project structure

```text
src/
├── app/                 # App Router layout, public pages, health API
├── components/
│   ├── ui/              # Owned shadcn-style primitives composed with Radix
│   └── layout/          # Shared site shell
├── features/            # Reserved for future approved operational modules
├── lib/                 # Utilities, environment validation, health contract
├── styles/              # Tailwind and centralized semantic design tokens
├── test/                # Testing Library setup
└── types/               # Shared TypeScript contracts
prisma/                  # PostgreSQL provider declaration only
public/                  # Future static assets
docs/                   # Architecture, verification, and implementation plan
.github/workflows/       # CI checks
```

## Configuration and secrets

`.env.example` documents optional configuration. Phase 1 works without copying it. If local configuration is needed, copy it to `.env` (ignored by Git). Do not commit credentials, local environment files, production exports, or database dumps. Never use `NEXT_PUBLIC_` for secrets: that prefix makes values available to browsers.

`DATABASE_URL` is optional and must be a valid `postgresql://` or `postgres://` URL when supplied. The Prisma configuration validates it with Zod, but does not connect. Database client generation, adapters, models, migrations, and connection management are deferred until database development is approved. There is deliberately no instantiated Prisma client or fake login.

Health responses disclose only process liveness and explicitly say the database is not checked. They are not authorization or production-readiness checks.

## UI and contribution conventions

Comfortaa branding and Inter operational typography are self-hosted through Fontsource; builds do not fetch Google Fonts. Burgundy, Wine, Beige, Ivory, and Charcoal feed semantic CSS tokens. Use the shared `Button`, visible keyboard focus, adequate touch targets, reduced-motion support, and accessible HTML. Prices and financial values must use tabular numerals when introduced.

`components.json` configures shadcn's New York style, React Server Components, aliases, CSS variables, and Lucide icons. The initial owned Button uses Radix Slot and class-variance-authority. Add only needed primitives using `npx shadcn add <component>`, review generated changes, and preserve the brand tokens. No component library workflow may replace `AGENTS.md`.

Use feature branches and pull requests to `main`. Run `npm run check` before review. Never merge automatically. Future protected workflows require server-side identity, permissions, branch scoping, field filtering, and auditable attribution before exposure.

See [architecture](docs/architecture.md) and [verification results](docs/verification.md). Stop after Phase 1; later modules require approval.
