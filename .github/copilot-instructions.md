# Copilot Instructions for BoDiGi Learn & Earn Loop Builder

## Project Overview
This is a React + TypeScript gamified learning platform with strategic subscribe gates. Users answer 15 questions (5 sets × 3), encounter subscribe modals after each set, and unlock rewards. Built with Vite, Supabase backend, shadcn/ui components, and MCP (Model Context Protocol) server integration.

## Architecture & Key Concepts

### Three-Layer MCP Architecture
The app integrates MCP servers for extensible tooling:
- **MCP Servers** (`mcp-servers/src/`): Standalone services with tools for analytics, game config, and user data
- **MCP Client** (`src/lib/mcp-client.ts`): HTTP client communicating with servers
- **React Hooks** (`src/hooks/useMCP.ts`): `useMCPClient`, `useMCPRegistry`, `useMCPTool` for component integration

MCP servers run via stdio transport using `@modelcontextprotocol/sdk`. Tools are prefixed by domain: `analytics_*`, `game_config_*`, `user_data_*`.

### Environment Configuration Pattern
All env vars are validated at app startup in `src/config/env.ts`. The module throws errors for missing/invalid variables before React renders. Always add new env vars to:
1. `src/config/env.ts` (validation logic)
2. `.env.example` (developer template)
3. `DEPLOYMENT.md` (production checklist)

### Security-First Approach
- **CSP Headers**: Set in `index.html` meta tags; only allow same-origin and Supabase domains
- **Input Sanitization**: Use `src/lib/security.ts` functions (`sanitizeHtml`, `isSafeUrl`) for all user-generated content
- **Build Hardening**: Production builds strip console logs, disable source maps, and mangle code (see `vite.config.ts`)
- **ESLint Rules**: Enforce `no-eval`, `no-implied-eval`, ban `any` types, and require `const` over `let`

## Development Wu
orkflould## Quick Start Commands
```bash
npm run dev          # Vite dev server on localhost:5173
npm run build        # Production build with hardening
npm run check        # Type-check + lint + security audit (run before commits)
npm run lint:fix     # Auto-fix linting issues
```

### MCP Server Development
```bash
cd mcp-servers
npm run dev          # Starts MCP server with hot reload
```
Test MCP connections via `src/components/MCPDemoComponent.tsx` or `useMCPRegistry` hook.

### Pre-Deployment Checklist
Always run `npm run check` before deploying. See `DEPLOYMENT.md` for full production checklist including:
- Supabase schema setup (`supabase/schema.sql` - NOTE: file not in repo yet, referenced in README)
- Environment variable validation
- Security header verification

## Code Conventions

### Component Patterns
- **UI Components**: All in `src/components/ui/` (shadcn/ui managed). Never manually edit; use `npx shadcn@latest add <component>`
- **Path Aliases**: Use `@/` for imports (resolves to `src/`). Example: `import { Button } from "@/components/ui/button"`
- **Error Boundaries**: `ErrorBoundary` wraps the entire app in `App.tsx`. Catch-and-display pattern for production errors
- **Theme Provider**: Uses `next-themes` for dark mode. Wrap components needing theme in `ThemeProvider`

### TypeScript Strictness
- No `any` types allowed (ESLint enforces)
- All env vars typed in `src/config/env.ts` via `EnvironmentConfig` interface
- React component return types must be explicit: `(): React.ReactElement`

### State Management
- **React Query**: For server state (Supabase queries). Configure in `App.tsx` with retry=1, no window refocus
- **useState/useCallback**: For local component state
- **MCP Hooks**: For MCP tool calls (`useMCPTool` returns `{ result, loading, error, callTool }`)

## Integration Points

### Supabase
- Client initialized in (implied location, not seen but standard pattern)
- Schema includes: `users`, `app_profiles`, `loops`, `questions`, `rewards`, `progress`, `transactions`
- Auth supports email/password and Google OAuth
- Demo mode bypasses auth when `VITE_DEMO_MODE=true`

### External Services
- **Checkout**: Supports internal mock checkout or external URL redirect via `VITE_OWNER_CHECKOUT_URL`
- **MCP Servers**: Can run locally (dev) or as separate services (production). Configure in `mcp.config.json`

## Project-Specific Gotchas

### Demo Mode Toggle
Demo mode affects auth, data seeding, and subscribe gates. Always check `config.demoMode` from `src/config/env.ts`. Never hardcode demo checks.

### Subscribe Gate Flow
After every 3rd question, modal appears. Two outcomes:
- **YES**: Redirect to `config.ownerCheckoutUrl` or internal checkout
- **NO**: Continue to next set
Track last prompted set to avoid duplicate modals.

### Reward Unlock Logic
Rewards unlock based on set completion + score thresholds. Unlocked state stored in `progress` table. Use reward status checks before displaying "Claim" buttons.

### Brand Customization
Brand colors are env vars (`VITE_BRAND_PRIMARY/SECONDARY/ACCENT`). Colors validated as hex in `src/config/env.ts`. Apply via CSS variables or Tailwind theme extension.

## Testing & Validation

### MCP Tool Testing
Use `src/components/MCPDemoComponent.tsx` to test tools interactively. Registry auto-tests connections on mount via `useMCPRegistry`.

### Build Validation
Production builds must pass:
1. `npm run type-check` (no TypeScript errors)
2. `npm run lint` (no ESLint errors)
3. `npm run audit` (no critical vulnerabilities)
4. Build size should be <500KB for main bundle (check `dist/` output)

### Security Testing
- Run `npm audit` regularly
- Verify CSP headers in browser DevTools (Network tab)
- Test XSS by injecting `<script>` tags in user inputs (should be sanitized)

## Key Files Reference

- `src/config/env.ts` - Environment validation (modify for new env vars)
- `vite.config.ts` - Build config, chunk splitting, security headers
- `src/lib/mcp-client.ts` - MCP HTTP client (extend for new transports)
- `src/hooks/useMCP.ts` - MCP React integration (add hooks for new tool types)
- `mcp-servers/src/index.ts` - MCP server entry point (register new tools here)
- `DEPLOYMENT.md` - Production deployment checklist
- `FEATURES.md` - Complete feature specifications
- `MCP_GUIDE.md` - MCP integration deep dive

## When Adding Features

1. **New Environment Variables**: Add to `env.ts` validation, `.env.example`, and docs
2. **New UI Components**: Use `npx shadcn@latest add <component>`, never copy/paste
3. **New MCP Tools**: Create in `mcp-servers/src/tools/`, register in `index.ts`, add hook to `useMCP.ts`
4. **New Pages/Routes**: Add to `App.tsx` routes, create in `src/pages/`
5. **Security-Sensitive Code**: Use `security.ts` utilities, add CSP exceptions if needed

## Common Tasks

**Add a shadcn component**: `npx shadcn@latest add dialog`  
**Test MCP connection**: Check `MCPDemoComponent` or run `useMCPRegistry().testConnections()`  
**Deploy to Vercel**: Push to GitHub, import in Vercel, add env vars from `.env.example`  
**Debug env issues**: Check browser console on app load; `env.ts` errors appear immediately  
**Update Supabase schema**: Edit `supabase/schema.sql`, run in Supabase SQL Editor (file not committed to repo)
