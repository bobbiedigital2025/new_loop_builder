# Deployment Guide

## Backend — Supabase

The app's backend is fully managed by [Supabase](https://supabase.com) (database,
auth, storage, and real-time). No custom server to deploy.

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up / log in.
2. Click **New Project**, choose an organisation and region, then click **Create
   new project**.
3. Once the project is ready, navigate to **Project Settings → API** and copy:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon / public** key → `VITE_SUPABASE_ANON_KEY`

### 2. Set Up the Database Schema

Open the **SQL Editor** in your Supabase dashboard and run the schema below:

```sql
-- Users / profiles
create table if not exists app_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at timestamptz default now()
);

-- Loops (quiz sets)
create table if not exists loops (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  created_at timestamptz default now()
);

-- Questions
create table if not exists questions (
  id uuid primary key default gen_random_uuid(),
  loop_id uuid references loops(id) on delete cascade,
  prompt text not null,
  options jsonb not null,
  correct_index int not null,
  set_number int not null,
  created_at timestamptz default now()
);

-- Rewards
create table if not exists rewards (
  id uuid primary key default gen_random_uuid(),
  loop_id uuid references loops(id) on delete cascade,
  title text not null,
  description text,
  unlock_set int not null,
  unlock_score int not null default 0,
  created_at timestamptz default now()
);

-- User progress
create table if not exists progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  loop_id uuid references loops(id) on delete cascade,
  current_set int default 0,
  score int default 0,
  completed boolean default false,
  unlocked_rewards jsonb default '[]',
  updated_at timestamptz default now()
);

-- Transactions / subscriptions
create table if not exists transactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  amount numeric,
  status text,
  created_at timestamptz default now()
);
```

### 3. Enable Row Level Security (RLS)

In the Supabase dashboard go to **Authentication → Policies** and enable RLS on
every table, then create policies so users can only read/write their own data.
Example for `progress`:

```sql
alter table progress enable row level security;

create policy "Users can manage their own progress"
  on progress for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
```

### 4. Enable Auth Providers

Under **Authentication → Providers** enable:
- **Email** (enabled by default)
- **Google** (optional — add OAuth credentials from Google Cloud Console)

---

## Frontend — GitHub Pages

The React / Vite frontend is deployed to **GitHub Pages** via a GitHub Actions
workflow (`.github/workflows/pages.yml`).

### One-time Setup

1. **Enable GitHub Pages** in your repo:
   - Go to **Settings → Pages**
   - Under *Source* select **GitHub Actions**
   - Click **Save**

2. **Add repository secrets** (Settings → Secrets and variables → Actions):

   | Secret | Value |
   |---|---|
   | `VITE_SUPABASE_URL` | Your Supabase Project URL |
   | `VITE_SUPABASE_ANON_KEY` | Your Supabase anon key |

3. **Add repository variables** (optional — defaults are shown):

   | Variable | Default |
   |---|---|
   | `VITE_DEMO_MODE` | `true` |
   | `VITE_OWNER_CHECKOUT_URL` | _(empty)_ |
   | `VITE_BRAND_PRIMARY` | `#722f37` |
   | `VITE_BRAND_SECONDARY` | `#8b3a62` |
   | `VITE_BRAND_ACCENT` | `#d4af37` |
   | `VITE_INTERNAL_CHECKOUT` | `false` |

4. **Push to `main`** — the workflow runs automatically and your site will be
   live at:
   ```
   https://<your-github-username>.github.io/<repo-name>/
   ```

### How the Base Path Works

GitHub Pages hosts project pages under `/<repo-name>/`.  The workflow sets
`VITE_BASE_PATH=/<repo-name>/` at build time so both Vite and React Router use
the correct prefix.  `public/404.html` handles SPA deep-links by redirecting
unknown paths back to `index.html`.

### Manual Trigger

You can also trigger a deploy manually from **Actions → Deploy to GitHub Pages
→ Run workflow**.

---

## Other Platforms

### Vercel (Recommended for teams)
1. Connect GitHub repo in [vercel.com](https://vercel.com)
2. Vercel auto-detects Vite — no extra config needed
3. Add the environment variables listed in `.env.example`
4. Leave `VITE_BASE_PATH` **empty** (Vercel hosts at the root)

### Netlify
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables (leave `VITE_BASE_PATH` **empty** — Netlify serves from the root `/`)

**SPA routing** on Netlify is handled by `public/_redirects` (copied to `dist/` automatically
during build).  The file contains a single catch-all rule:

```
/* /index.html 200
```

This ensures client-side routes (e.g. `/admin`, `/quiz/1`) return `index.html` on a hard
refresh instead of a 404.

> **Base path difference**
> | Platform | `VITE_BASE_PATH` | SPA fallback mechanism |
> |---|---|---|
> | GitHub Pages | `/<repo-name>/` (set by the workflow) | `public/404.html` redirect trick |
> | Netlify | _(empty — defaults to `/`)_ | `public/_redirects` catch-all rule |

---

## Custom Domain

1. Add a `CNAME` file to `public/` containing your custom domain, **or** set
   the custom domain in **Settings → Pages** in GitHub.
2. Update DNS records as instructed.
3. SSL is automatic on GitHub Pages.

---

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify Supabase connection works
- [ ] Test authentication flow (email + Google if enabled)
- [ ] Check subscribe modal functionality
- [ ] Verify rewards unlock properly
- [ ] Test admin panel access
- [ ] Confirm demo mode works (set `VITE_DEMO_MODE=true`)
- [ ] Confirm deep-links work (navigate to a sub-page, refresh — should not 404)

---

## Troubleshooting

**Build fails**: Check that all dependencies are in `package.json`.

**Supabase connection fails**: Verify `VITE_SUPABASE_URL` and
`VITE_SUPABASE_ANON_KEY` are set correctly in repository secrets.

**Blank page / 404 on GitHub Pages**: Ensure **Source** is set to *GitHub
Actions* (not a branch) in Settings → Pages.

**Routes show 404 on hard refresh**: Confirm `public/404.html` was committed and
the redirect script is present in `index.html`.

**Images not loading**: Check that image URLs are relative or use `import` so
Vite rewrites them with the correct base path.

---

## Performance Tips

- Enable GitHub Pages CDN caching (automatic).
- Use Supabase Edge Functions for any server-side logic.
- Lazy-load heavy routes with `React.lazy` / `Suspense`.
- Optimise images with WebP format.

## Security

- Never commit `.env` files.
- Use Supabase RLS policies in production.
- Enable CORS only for your domain in Supabase project settings.
- Use environment variables (secrets) for all sensitive values.

