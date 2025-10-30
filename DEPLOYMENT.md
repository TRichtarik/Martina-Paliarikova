# Deployment Guide

This guide provides detailed instructions for deploying your legal portfolio website to various platforms.

## Prerequisites

Before deploying, ensure you have:
- ✅ Replaced the professional photo placeholder with your actual photo
- ✅ Added your CV to `public/cv.pdf`
- ✅ Updated contact information (email, LinkedIn)
- ✅ Added your Google Analytics ID in `components/GoogleAnalytics.tsx`
- ✅ Customized all personal information
- ✅ Tested the site locally (`npm run dev`)

## Vercel Deployment (Recommended)

Vercel is the recommended platform as it's created by the Next.js team and provides zero-config deployment.

### Step 1: Prepare Your Repository

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Legal portfolio website"

# Create a GitHub repository and push
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

**Option A: Using Vercel CLI**

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Option B: Using Vercel Dashboard**

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js configuration
5. Click "Deploy"
6. Your site is live at `your-project.vercel.app`

### Step 3: Configure Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatically provisioned

### Environment Variables on Vercel

1. Go to Project Settings → Environment Variables
2. Add:
   - `NEXT_PUBLIC_GA_ID`: Your Google Analytics ID
   - `NEXT_PUBLIC_SITE_URL`: Your production URL
   - `NEXT_PUBLIC_CONTACT_EMAIL`: Your email

## Netlify Deployment

### Step 1: Build Configuration

Create `netlify.toml` in your project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Step 2: Deploy

**Option A: Using Netlify CLI**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

**Option B: Using Netlify Dashboard**

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

## Docker Deployment

### Create Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Deploy with Docker

```bash
# Build image
docker build -t legal-portfolio .

# Run container
docker run -p 3000:3000 legal-portfolio
```

## Traditional VPS/Server Deployment

### Step 1: Server Setup (Ubuntu/Debian)

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2
sudo npm install -g pm2
```

### Step 2: Deploy Application

```bash
# Clone repository
git clone https://github.com/yourusername/your-repo.git
cd your-repo

# Install dependencies
npm install

# Build for production
npm run build

# Start with PM2
pm2 start npm --name "legal-portfolio" -- start

# Save PM2 process list
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

### Step 3: Configure Nginx

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Step 4: SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal is configured automatically
```

## Environment-Specific Configurations

### Production Environment Variables

Create `.env.production`:

```env
NEXT_PUBLIC_GA_ID=G-YOURREALID
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@your-domain.com
```

### Staging Environment

For a staging environment:

```bash
# Build with staging env
npm run build

# Start on different port
PORT=3001 npm start
```

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test language switcher (CZ/EN)
- [ ] Test contact form submission
- [ ] Verify CV download works
- [ ] Check mobile responsiveness
- [ ] Test blog search functionality
- [ ] Verify Google Analytics is tracking
- [ ] Test all navigation links
- [ ] Check SEO meta tags (view source)
- [ ] Test on multiple browsers
- [ ] Verify SSL certificate (if custom domain)
- [ ] Test performance with Lighthouse
- [ ] Check console for errors

## Performance Optimization

### Enable Caching

Vercel and Netlify handle this automatically. For custom servers:

```nginx
# Add to Nginx config
location /_next/static {
    alias /path/to/app/.next/static;
    expires 365d;
    access_log off;
}
```

### Image Optimization

Next.js automatically optimizes images. Ensure you're using the `next/image` component.

### Monitor Performance

1. Use Vercel Analytics (built-in on Vercel)
2. Google PageSpeed Insights
3. Lighthouse in Chrome DevTools

## Continuous Deployment

### GitHub Actions (for VPS)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy to server
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /path/to/app
            git pull
            npm install
            npm run build
            pm2 restart legal-portfolio
```

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use

```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

### PM2 App Not Starting

```bash
# Check logs
pm2 logs legal-portfolio

# Restart
pm2 restart legal-portfolio

# Delete and recreate
pm2 delete legal-portfolio
pm2 start npm --name "legal-portfolio" -- start
```

## Support

For deployment issues:
- Next.js Documentation: https://nextjs.org/docs/deployment
- Vercel Support: https://vercel.com/support
- Community: https://github.com/vercel/next.js/discussions

---

Happy Deploying! 🚀

