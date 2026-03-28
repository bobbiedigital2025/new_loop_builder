# GitHub Copilot Instructions for BoDiGi™ Learn & Earn Loop Builder

## Project Overview

This is a gamified, conversion-driven learning platform called BoDiGi™ Learn & Earn Loop Builder. It features a 5-set question journey (15 total questions) with strategic subscribe gates after each set and a rewards system. The project is built with modern web technologies and emphasizes user engagement and conversion optimization.

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components, custom styles in App.css
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **Routing**: React Router v6
- **State Management**: React hooks and context
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives via shadcn/ui

## Project Structure

```
/src
  /components
    /ui                  # shadcn/ui reusable components
    AppLayout.tsx        # Main layout wrapper
    ProgressBar.tsx      # Progress tracking UI
    QuestionCard.tsx     # Question display component
    RewardCard.tsx       # Reward display component
    SubscribeModal.tsx   # Subscribe gate modal
    theme-provider.tsx   # Theme provider component
  App.tsx                # Main application component
  main.tsx               # Application entry point
/public                  # Static assets
```

## Development Commands

- **Start dev server**: `npm run dev` (runs on http://localhost:5173)
- **Build for production**: `npm run build`
- **Build for development**: `npm run build:dev` (creates development build with source maps)
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Coding Standards & Best Practices

### TypeScript
- Use TypeScript for all new files (`.ts`, `.tsx`)
- Define proper types and interfaces instead of using `any`
- Use type inference where appropriate
- Export types alongside components when needed

### React Components
- Use functional components with hooks
- Follow React Hooks rules (no conditional hooks)
- Use descriptive component names in PascalCase
- Keep components focused and single-responsibility
- Prefer composition over complex prop drilling

### Styling
- Use Tailwind CSS utility classes for styling
- Follow mobile-first responsive design
- Use shadcn/ui components from `/src/components/ui`
- Maintain consistent spacing with Tailwind spacing scale
- Use Tailwind's theme configuration for brand colors
- Custom styles can be added to `src/App.css` when necessary

### Code Organization
- Keep files focused and under 300 lines when possible
- Co-locate related components and utilities
- Use descriptive file and variable names
- Avoid deep nesting (max 3-4 levels)

### ESLint Configuration
- Follow the rules defined in `eslint.config.js`
- React Hooks rules are enforced
- Unused variables are allowed (configured as "off")
- Use ES2020 features

## Key Features & Context

### Core Functionality
1. **Question Loop System**: 5 sets of 3 questions (15 total)
2. **Subscribe Gates**: Modal prompts after each set completion
3. **Rewards System**: 5 unlockable rewards based on progress
4. **Admin Dashboard**: Full CRUD for questions, rewards, and app promo
5. **Demo Mode**: Pre-seeded content controlled by `VITE_DEMO_MODE`

### Database Schema (Supabase)
- `users`: User accounts and authentication
- `app_profiles`: Owner app configuration
- `loops`: Question loop definitions
- `questions`: 15 questions organized in 5 sets
- `rewards`: Unlockable rewards with conditions
- `progress`: User progress tracking
- `transactions`: Subscription and payment records

### Environment Variables
All environment variables use `VITE_` prefix for Vite exposure:
- `VITE_SUPABASE_URL`: Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Supabase anonymous key
- `VITE_DEMO_MODE`: Enable/disable demo mode (true/false)
- `VITE_OWNER_CHECKOUT_URL`: External checkout URL
- `VITE_BRAND_PRIMARY`, `VITE_BRAND_SECONDARY`, `VITE_BRAND_ACCENT`: Brand colors
- `VITE_INTERNAL_CHECKOUT`: Use internal vs external checkout

## Best Practices for This Project

### When Adding Features
- Check if a shadcn/ui component exists before creating custom UI
- Maintain the subscribe gate flow after each set of 3 questions
- Ensure demo mode compatibility (fallback data when Supabase unavailable)
- Follow the existing reward unlock condition pattern

### When Modifying Components
- Preserve accessibility features (ARIA labels, keyboard navigation)
- Maintain responsive design across mobile, tablet, and desktop
- Keep the BoDiGi™ brand identity (colors, tone, UX agents: Aura & Boltz)
- Test both authenticated and demo mode flows

### When Working with Supabase
- Use Supabase client from the configured instance
- Implement proper error handling for database operations
- Use Real-time subscriptions for live data updates where appropriate
- Follow Row Level Security (RLS) policies in production

### Documentation
- Update README.md for user-facing feature changes
- Update FEATURES.md for detailed feature documentation
- Update DEPLOYMENT.md for deployment-related changes
- Add comments for complex business logic, not obvious code

## Testing Considerations
- Currently no test framework configured
- Manual testing required for all changes
- Test both demo mode and full auth flow
- Verify responsive design on multiple screen sizes
- Check subscribe gate modal behavior after each set

## Common Patterns in This Codebase

### Subscribe Gate Modal
- Appears after completing each 3-question set
- Two paths: YES (redirect to checkout) or NO (continue)
- Customizable copy from app_profiles table

### Progress Tracking
- Tracks per-user completion by set
- Records score and last subscribe prompt shown
- Enables resume functionality for returning users

### Rewards System
- 5 rewards total (one per set)
- Unlock conditions based on set completion and score
- Types: PDF, feature unlock, tool access, discount, trial

## Security & Privacy
- Never commit `.env` files
- Use environment variables for all secrets and API keys
- Implement Supabase RLS policies for data access control
- Sanitize user inputs before database operations

## Branding & Tone
- **Brand**: BoDiGi™ (Bobbie Digital™)
- **AI Agents**: 
  - Aura™ (Teacher) - Celebratory, encouraging tone
  - Boltz™ (Coach) - Practical, conversion-focused tone
- **Colors**: Maroon/burgundy primary, purple secondary, gold accent
- **Copy Style**: Professional yet approachable, gamified language

## When to Ask for Clarification
- If changes affect the subscribe gate flow or conversion funnel
- If modifying database schema or Supabase configuration
- If adding new dependencies not aligned with the stack
- If uncertain about demo mode vs authenticated mode behavior
- If changes could impact the core learning loop experience

## Additional Resources
- [Supabase Documentation](https://supabase.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Router v6](https://reactrouter.com/)
- [Vite Guide](https://vitejs.dev/guide/)
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
