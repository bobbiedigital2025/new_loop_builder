# Deployment Guide

## Vercel Deployment (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free tier works)
- Supabase project set up

### Steps

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin your-repo-url
git push -u origin main
```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration

3. **Add Environment Variables**:
   In Vercel project settings, add:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   VITE_DEMO_MODE=true
   VITE_OWNER_CHECKOUT_URL=your_checkout_url
   VITE_BRAND_PRIMARY=#722f37
   VITE_BRAND_SECONDARY=#8b3a62
   VITE_BRAND_ACCENT=#d4af37
   VITE_INTERNAL_CHECKOUT=false
   ```

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete
   - Your app is live!

### Automatic Deployments

Every push to `main` branch will automatically deploy.

## Other Platforms

### Netlify
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables

### Railway
1. Connect GitHub repo
2. Add environment variables
3. Railway auto-detects build settings

## Custom Domain

1. Add domain in Vercel/Netlify dashboard
2. Update DNS records as instructed
3. SSL is automatic

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify Supabase connection works
- [ ] Test authentication flow
- [ ] Check subscribe modal functionality
- [ ] Verify rewards unlock properly
- [ ] Test admin panel access
- [ ] Confirm demo mode works

## Troubleshooting

**Build fails**: Check that all dependencies are in `package.json`

**Supabase connection fails**: Verify environment variables are set correctly

**Routes not working**: Ensure `vercel.json` or `_redirects` file is present for SPA routing

**Images not loading**: Check that image URLs are accessible

## Performance Tips

- Enable Vercel Analytics
- Use Vercel Edge Functions for API routes
- Enable caching headers
- Optimize images with next-gen formats

## Security

- Never commit `.env` file
- Use Supabase RLS policies in production
- Enable CORS only for your domain
- Use environment variables for all secrets
