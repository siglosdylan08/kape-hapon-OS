# Kape Hapon OS — Codex Engineering Instructions

These instructions apply to the entire repository. Follow them for all design, implementation, review, and maintenance tasks. If a task conflicts with these rules, explain the conflict and seek approval before proceeding.

## Product and design principles

- **Product:** Kape Hapon OS — a scalable, multi-branch café operating system.
- **Brand identity:** Premium, minimalist, luxurious, organized, modern, and highly functional.
- **Brand promise:** “Different branches, same Kape Hapon experience.”
- Favor operational clarity, speed, consistency, accessibility, and maintainability over visual decoration.
- Never deliver a generic admin dashboard without adapting it to Kape Hapon's identity and café workflows.

## Brand foundations

| Token | Value | Intended use |
| --- | --- | --- |
| Primary Burgundy | `#641C32` | Primary brand and key actions |
| Muted Wine | `#8C4559` | Supporting accents |
| Natural Beige | `#EDE1CF` | Warm secondary surfaces |
| Warm Ivory | `#FAF7F2` | Light canvas |
| Charcoal | `#252124` | Primary text |

These values are the starting palette; validate contrast in context and use accessible semantic variants when necessary.

- **Brand typography:** Comfortaa for logos and selected headings; preserve legibility.
- **Operational typography:** A highly legible sans-serif for tables, forms, transactions, dense dashboards, and long text.
- Use tabular numerals for prices, quantities, and financial figures.
- Use semantic tokens such as `--color-bg`, `--color-surface`, `--color-text`, `--color-primary`, `--color-border`, `--color-danger`, and `--color-focus`. Avoid repeated hardcoded color values.
- Keep spacing, radii, shadows, typography, and responsive breakpoints centrally defined.

## Frontend and UX rules

1. Inspect existing code and patterns before changing components, styles, or dependencies.
2. Build reusable, composable, accessible components; avoid duplicate implementations.
3. Prioritize visual hierarchy, spacing, readability, consistency, and clear affordances.
4. Support desktop, tablet, mobile, and touchscreen POS layouts; test at realistic viewports.
5. Provide appropriate loading, empty, success, error, disabled, and validation states.
6. Ensure visible keyboard focus, keyboard navigation, appropriate touch targets, and WCAG 2.2 AA contrast where applicable.
7. Use subtle, purposeful animations; respect reduced-motion preferences.
8. Use real café workflow models for interactions, including branch selection, cashier speed, shift accountability, stock movement, and management review.
9. Separate presentation from business logic; use typed interfaces and shared component contracts.
10. Do not expose restricted sales totals, expected drawer cash, costs, margins, payroll, or other confidential information in staff-facing interfaces. Hiding controls is not authorization.

## Engineering and security rules

1. Follow the established project architecture and package manager; avoid unnecessary rewrites.
2. Maintain TypeScript safety where TypeScript is used. Avoid `any` and unsafe casts without justification.
3. Preserve existing business logic, data integrity, APIs, and workflows unless explicitly authorized to change them.
4. Enforce authentication, authorization, and branch-level isolation **on the server**. Treat client-side checks as UX only.
5. Protect sensitive employee, customer, payroll, and financial data. Never commit secrets, API keys, `.env` files, production exports, or credentials.
6. Maintain auditable attribution for sensitive actions. Use individual accounts; do not design shared staff sessions.
7. Do not invent live data; clearly label fixtures, mockups, and demo metrics.
8. Before declaring work complete, run applicable lint, typecheck, tests, and build. Report commands, results, and anything not run.
9. For substantial changes, use a feature branch and pull request; do not force-push or rewrite shared history.
10. Keep changes scoped to the task. Do not add operational modules without approval.

## Working procedure

- **Discover:** Read relevant files and identify constraints, dependencies, and risks.
- **Plan:** State affected files, implementation approach, and acceptance criteria.
- **Implement:** Make focused, reviewable changes consistent with the design system.
- **Verify:** Test functional behavior, responsive states, accessibility, and regressions.
- **Report:** Summarize changed files, verification results, limitations, and decisions needed.

## Design system rollout

1. Establish tokens, typography, and theme foundations.
2. Create and document reusable components and their states.
3. Define responsive application shells and role-specific layouts.
4. Integrate components into approved modules incrementally.
5. Review and approve visual and interaction consistency before expanding scope.

**Current scope:** These are repository-level instructions only. Do not implement or modify application modules as part of creating this file.
