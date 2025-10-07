# BoDiGi Learn & Earn - Feature Documentation

## Core Features

### 1. Question Loop System
- **5 Sets of 3 Questions**: Total of 15 questions across progressive difficulty
- **Set-Based Progress**: Users complete one set at a time
- **Real-Time Validation**: Immediate feedback on answer correctness
- **Explanations**: Optional explanations for each question
- **Progress Tracking**: Visual progress bar showing completion

### 2. Strategic Subscribe Gate
- **Trigger**: Appears after EACH 3-question set completion
- **Modal Design**: Compelling CTA with app benefits
- **Two-Path Flow**:
  - **YES**: Redirects to checkout (external URL or internal page)
  - **NO**: Continues to next question set
- **Customizable Copy**: Owner can edit all modal text
- **Conversion Tracking**: Records user choices

### 3. Rewards System
- **5 Reward Types**:
  - PDF downloads (templates, worksheets)
  - Feature unlocks (internal app features)
  - Tool access (premium tools)
  - Discount codes
  - Trial periods
- **Unlock Conditions**: Based on set completion and score
- **Visual Status**: Locked/unlocked states with animations
- **Claim Actions**: Download or activate rewards
- **In-App Usability**: All rewards designed for use within owner's app

### 4. Admin Dashboard

#### App Promo Editor
- App name and tagline
- Description and benefits list
- Feature highlights
- Checkout URL configuration
- Free features on subscribe
- Internal vs external checkout toggle

#### Question Builder
- Create/edit questions for all 5 sets
- Multiple choice format (4 options)
- Correct answer selection
- Optional explanations
- Drag-and-drop ordering
- Bulk save functionality

#### Rewards Editor
- Add/edit rewards
- Choose reward type
- Set unlock conditions
- Link files or feature keys
- Preview how rewards appear to users

### 5. Demo Mode
- **Pre-Seeded Content**: Complete example app (SmartBrand Builder)
- **15 Sample Questions**: Brand and marketing fundamentals
- **5 Sample Rewards**: One for each set
- **Toggle On/Off**: Environment variable control
- **No Auth Required**: Users can explore without signing up

### 6. Authentication
- **Email/Password**: Standard auth flow
- **Google OAuth**: One-click sign-in
- **Session Management**: Persistent sessions
- **User Profiles**: Name, email, subscription tier
- **Demo Access**: Optional auth bypass for demo mode

### 7. Progress Tracking
- **Per-User Progress**: Individual tracking for each user
- **Set Completion**: Records which sets are completed
- **Score Tracking**: Total correct answers
- **Last Prompted**: Tracks which subscribe gate was shown
- **Resume Capability**: Users can continue where they left off

### 8. Checkout System
- **Internal Checkout**: Mock Stripe-style flow
- **External Checkout**: Redirect to owner's URL
- **Transaction Records**: All subscriptions logged
- **Status Tracking**: Pending → Success → Failed
- **Subscription Tiers**: Free, Starter, Pro (customizable)

## User Journey

### First-Time User
1. Lands on dashboard
2. Sees demo app promo (if demo mode)
3. Clicks "Try Demo" or "Start Learning"
4. Answers Set 1 (3 questions)
5. Sees subscribe modal
6. Chooses YES (checkout) or NO (continue)
7. Repeats for Sets 2-5
8. Views unlocked rewards in Rewards Hub

### Returning User
1. Lands on dashboard
2. Progress automatically loads
3. Continues from last incomplete set
4. Unlocked rewards visible in Rewards Hub

### Admin User
1. Accesses Admin Panel
2. Edits app promo details
3. Creates/modifies questions
4. Sets up rewards with unlock conditions
5. Previews user experience

## Technical Architecture

### Frontend
- **React 18**: Modern hooks and context
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first styling
- **Lucide Icons**: Consistent iconography
- **TypeScript**: Type-safe development

### Backend
- **Supabase**: PostgreSQL database
- **Auth**: Built-in authentication
- **Real-Time**: Live data updates
- **Storage**: File uploads (future)
- **Edge Functions**: Serverless logic (future)

### Database Schema
- `users`: User accounts
- `app_profiles`: Owner app config
- `loops`: Question loops
- `questions`: 15 questions (5×3)
- `answers`: User responses
- `rewards`: Unlockable rewards
- `transactions`: Payment records
- `progress`: User progress

## AI Agents (UX Copy)

### Aura (Teacher)
- Celebratory tone
- Encourages learning
- Example: "Welcome! Learn a bit, earn a lot. Ready?"

### Boltz (Coach)
- Practical upgrade prompts
- Conversion-focused
- Example: "Each 3-question set unlocks something you can use in your app."

## Customization Options

### Branding
- Primary color (maroon/burgundy)
- Secondary color (purple)
- Accent color (gold)
- Logo and imagery
- Font choices

### Content
- All question text
- Reward titles and descriptions
- App promo copy
- Subscribe modal text
- Success/error messages

### Behavior
- Number of questions per set (default: 3)
- Number of sets (default: 5)
- Unlock conditions for rewards
- Checkout flow (internal vs external)
- Demo mode toggle

## Future Enhancements

- Analytics dashboard
- A/B testing for subscribe modals
- Gamification (badges, leaderboards)
- Social sharing of achievements
- Email notifications
- Mobile app version
- White-label customization
- Multi-language support
