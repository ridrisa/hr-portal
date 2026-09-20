# CONSOLIDATED

## Status: consolidated into Minassa HR

This prototype is **no longer developed**. Its features were merged into the single canonical product:

**https://github.com/ridrisa/ultimate-hr-platform** (Minassa HR, منصة الموارد البشرية)

What moved where is documented in that repository under
`docs/investors/PRODUCT_CONSOLIDATION_PLAN.md`, and the target architecture in
`docs/architecture/ARCHITECTURE.md`.

| From this repository | In Minassa HR |
|---|---|
| Knowledge articles and HTML content | `src/data/knowledgeArticles.ts`, `src/data/htmlContentLibrary.ts` (49 articles, superset) |
| Saudization / Nitaqat calculator | `src/components/calculators/SaudizationCalculator.tsx`, `/tools` |
| Salary, GOSI, end-of-service tools | `src/components/calculators/*`, `/tools` |
| Compliance Center | `/compliance` (`src/pages/modules/compliance`, Supabase-backed) |
| Employee management | `/employees` (`src/pages/modules/people`, Supabase-backed) |
| Surveys and engagement | `/surveys` (`src/pages/modules/engagement`, Supabase-backed) |
| Discussions, chat, profile | `/discussions`, `/chat`, `/profile` |
| Job board, ATS | `/job-board`, `/recruitment/ats` |
| Arabic/English toggle and RTL | i18next with full `en.json` / `ar.json` and RTL layouts |

The complete tracked source of this repository is also archived inside the canonical product at `legacy/hr-portal/`, so nothing depends on this repository any more. No further pull requests should target it; it is kept read-only for history.
