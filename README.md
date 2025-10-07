# BoDiGi™ Learn & Earn Loop Builder

A gamified, conversion-driven learning platform with strategic subscribe-gates and customizable rewards.

## 🎯 Features

- **5-Set Question Journey**: 15 total questions across progressive difficulty levels
- **Strategic Subscribe Gates**: Modal prompts after each 3-question set
- **Rewards System**: Unlock PDFs, feature unlocks, tool trials, and discounts
- **Admin Dashboard**: Full CRUD for App Promo, Questions, and Rewards
- **Demo Mode**: Pre-seeded example app with complete content
- **Supabase Backend**: Real-time auth, database, and progress tracking

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Supabase account (free tier works)

### Setup

1. **Clone and install dependencies**:
```bash
npm install
```

2. **Set up Supabase**:
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to Project Settings > API to get your URL and anon key
   - Run the schema: Copy contents of `supabase/schema.sql` into SQL Editor
   - Run the seed data: Copy contents of `supabase/seed.sql` into SQL Editor

3. **Configure environment**:
```bash
cp .env.example .env
```

Edit `.env` with your Supabase credentials:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
VITE_DEMO_MODE=true
```

4. **Run locally**:
```bash
npm run dev
```

Visit `http://localhost:5173`

## 📦 Build & Deploy

### Build for production:
```bash
npm run build
```

### Deploy to Vercel:
1. Push to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## 🎮 Demo Mode

Demo mode is enabled by default and includes:
- **Demo App**: SmartBrand Builder (fictional SaaS)
- **15 Questions**: 5 sets covering brand & marketing fundamentals
- **5 Rewards**: PDF, feature unlock, tool access, discount, trial

Toggle demo mode in `.env`:
```
VITE_DEMO_MODE=true  # or false
```

## 🛠️ Admin Features

Access the admin panel at `/admin`:

1. **App Promo Editor**: Configure app name, tagline, benefits, checkout URL
2. **Question Builder**: Create/edit 5 sets of 3 questions each
3. **Rewards Editor**: Set up rewards with unlock conditions

## 🔐 Authentication

Supports:
- Email/password authentication
- Google OAuth
- Demo mode (no auth required)

## 📊 Database Schema

Key tables:
- `users`: User accounts and subscription tiers
- `app_profiles`: Owner app configuration
- `loops`: Question loop definitions
- `questions`: 15 questions (5 sets × 3)
- `rewards`: Unlockable rewards
- `progress`: User progress tracking
- `transactions`: Subscription transactions

## 🎨 Customization

### Brand Colors
Edit in `.env`:
```
VITE_BRAND_PRIMARY=#722f37
VITE_BRAND_SECONDARY=#8b3a62
VITE_BRAND_ACCENT=#d4af37
```

### Subscribe Gate Flow
After each 3-question set:
- Modal appears: "Unlock Free Features in {app_name}?"
- YES → Redirects to `checkout_url` or internal checkout
- NO → Continues to next set

## 📝 License

©2025 Bobbie Gray. BoDiGi™, Aura™, and Boltz™ are trademarks of Bobbie Digital™.

Built with Famous.AI

## 🤝 Support

For issues or questions, please open a GitHub issue.
