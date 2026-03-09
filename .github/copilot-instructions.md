# Copilot Instructions for BoDiGi Learn & Earn Loop Builder

## Project Overview
This is a React + TypeScript gamified learning platform with strategic subscribe gates. Users answer 15 questions (5 sets × 3), encounter subscribe modals after each set, and unlock rewards. Built with Vite, Supabase backend, shadcn/ui components, and React Query.

## Tech Stack
- **Frontend**: React 18 + TypeScript, Vite
- **UI**: shadcn/ui (Radix UI primitives) + Tailwind CSS
- **Routing**: React Router v6
- **Server State**: TanStack React Query v5
- **Backend**: Supabase (auth + database)
- **Theming**: next-themes (dark mode support)

## Development Workflow

### Quick Start Commands
```bash
npm run dev          # Vite dev server on localhost:5173
npm run build        # Production build
npm run lint         # Run ESLint
npm run preview      # Preview production build locally
```

### Pre-Deployment Checklist
Always run `npm run lint` and `npm run build` before deploying. See `DEPLOYMENT.md` for the full production checklist including:
- Supabase schema setup
- Environment variable configuration
- Security header verification

## Environment Variables
All environment variables are prefixed with `VITE_` and accessed via `import.meta.env`. Copy `.env.example` to `.env.local` to get started. Key variables:

| Variable | Purpose |
|---|---|
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `VITE_DEMO_MODE` | `true` to bypass auth and seed demo data |
| `VITE_OWNER_CHECKOUT_URL` | External checkout redirect URL |
| `VITE_BRAND_PRIMARY` | Hex color for primary brand (e.g. `#722f37`) |
| `VITE_BRAND_SECONDARY` | Hex color for secondary brand |
| `VITE_BRAND_ACCENT` | Hex color for accent |
| `VITE_INTERNAL_CHECKOUT` | `true` to use internal mock checkout |
| `VITE_BASE_PATH` | Sub-path for GitHub Pages (e.g. `/new_loop_builder/`) |

When adding new environment variables, always update `.env.example` and `DEPLOYMENT.md`.

## Project Structure
```
src/
  App.tsx              # Root: Router, QueryClient, ThemeProvider setup
  main.tsx             # Entry point
  pages/
    Index.tsx          # Landing / home page
    NotFound.tsx       # 404 page
  components/
    ui/                # shadcn/ui components — never edit manually
    AppLayout.tsx      # Shared layout wrapper
    ProgressBar.tsx    # Question set progress indicator
    QuestionCard.tsx   # Individual question display
    RewardCard.tsx     # Reward unlock display
    SubscribeModal.tsx # Subscribe gate modal (shown after each set)
    theme-provider.tsx # next-themes wrapper
  hooks/
    use-toast.ts       # Toast notification hook
  lib/
    utils.ts           # Tailwind cn() helper and misc utilities
```

## Code Conventions

### Component Patterns
- **UI Components**: All in `src/components/ui/` (shadcn/ui managed). Never manually edit; use `npx shadcn@latest add <component>`
- **Path Aliases**: Use `@/` for imports (resolves to `src/`). Example: `import { Button } from "@/components/ui/button"`
- **Theme Provider**: Uses `next-themes` for dark mode. `ThemeProvider` is set in `App.tsx` with `defaultTheme="light"`

### TypeScript
- Avoid `any` types
- Use explicit `React.FC` or `React.FC<Props>` for component types
- Access env vars via `import.meta.env.VITE_*` (typed as `string | undefined`)

### State Management
- **React Query**: For server state (Supabase queries). `QueryClient` is configured in `App.tsx`
- **useState / useCallback**: For local component state

### Routing
- Routes are defined in `App.tsx` using React Router v6 `<Routes>` / `<Route>`
- `basename` is set from `VITE_BASE_PATH` for GitHub Pages sub-path support
- Add new pages in `src/pages/` and register them in `App.tsx`

## Key Application Logic

### Subscribe Gate Flow
After every 3rd question (end of each set), `SubscribeModal` appears with two outcomes:
- **Subscribe**: Redirect to `VITE_OWNER_CHECKOUT_URL` or internal checkout
- **Skip**: Continue to next question set
Track the last prompted set index to avoid showing the modal twice.

### Reward Unlock Logic
Rewards unlock based on set completion and score thresholds. Display "Claim" buttons only after confirming reward unlock status.

### Brand Customization
Brand colors come from env vars (`VITE_BRAND_PRIMARY`, `VITE_BRAND_SECONDARY`, `VITE_BRAND_ACCENT`). Apply them as inline styles or Tailwind arbitrary values (e.g. `bg-[#722f37]`).

### Demo Mode
When `VITE_DEMO_MODE=true`, the app bypasses Supabase auth and seeds demo data. Check `import.meta.env.VITE_DEMO_MODE` — never hardcode demo logic.

## When Adding Features

1. **New UI Components**: Use `npx shadcn@latest add <component>`, never copy/paste from Radix
2. **New Pages/Routes**: Create in `src/pages/`, register in `App.tsx`
3. **New Environment Variables**: Add to `.env.example` and `DEPLOYMENT.md`
4. **Supabase Queries**: Use React Query (`useQuery`/`useMutation`) to wrap Supabase client calls

## Common Tasks

**Add a shadcn component**: `npx shadcn@latest add dialog`  
**Deploy to Netlify or Vercel**: Push to `main`; workflows in `.github/workflows/` handle it automatically  
**Deploy to GitHub Pages**: Push to `main`; set `VITE_BASE_PATH=/<repo-name>/` in the Pages environment  
**Debug env issues**: Missing `VITE_SUPABASE_URL` or `VITE_SUPABASE_ANON_KEY` will cause Supabase calls to fail silently in demo mode  
**Update Supabase schema**: Run SQL in the Supabase SQL Editor (schema file not committed to repo)
