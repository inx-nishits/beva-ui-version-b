# BEVA Application - Production Deployment Guide

## 🚀 Quick Start (Development)

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation & Running

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser to:
http://localhost:5174
```

## 📍 **IMPORTANT: How to Access the Application**

### The app has authentication. Follow this exact flow:

1. **Navigate to**: `http://localhost:5174/login`
2. **Click** the **"Pro Operator"** button (green button under "Demo Access")
3. **You will be automatically logged in** and redirected to the dashboard

### ⚠️ Common Issues

**Problem**: Blank white screen
**Solution**: 
- Make sure you're at `/login` NOT `/dashboard`
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)
- Check browser console (F12) for errors

**Problem**: "Not authenticated" or redirect loop
**Solution**:
- Clear localStorage: Open console (F12) → Type `localStorage.clear()` → Press Enter
- Refresh page
- Go to `/login` and use demo button

## 🏗️ Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

The production files will be in the `dist/` folder.

## 📁 Project Structure

```
beva/
├── src/
│   ├── components/      # Reusable UI components
│   ├── context/         # React Context (Auth, Competition)
│   ├── layouts/         # Page layouts (Main, Auth)
│   ├── pages/           # Route pages
│   │   ├── admin/       # Admin-only pages
│   │   ├── Dashboard.jsx
│   │   ├── Competitions.jsx
│   │   ├── Venues.jsx
│   │   └── ...
│   ├── mocks/           # Mock data
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
└── index.html           # HTML template
```

## 🎨 Available Pages

### Public Pages
- `/` - Landing page
- `/login` - Login page (**START HERE**)
- `/signup` - Sign up page

### Protected Pages (Require Login)
- `/dashboard` - Main dashboard
- `/competitions` - Browse tournaments
- `/competitions/create` - Create new tournament
- `/competitions/:id` - Tournament details with bracket
- `/venues` - Venue directory
- `/leaderboards` - Global player rankings
- `/my-competitions` - User's registered events

### Admin Pages
- `/admin/manage-players` - Player management
- `/admin/disputes` - Match dispute resolution

## 🔐 Demo Credentials

The app has **instant demo login buttons** on the login page:

1. **Pro Operator** - Standard player access
2. **Admin Council** - Full admin access

No need to type credentials - just click the button!

## 🎯 Key Features

✅ **Tournament Management**
- Create competitions (Single/Double Elimination, Round Robin, 2-Stage)
- Interactive bracket visualization
- Live score entry via modal
- Real-time bracket updates

✅ **Player System**
- Global Glicko-2 rankings
- Player profiles with stats
- Win rate tracking
- Trend indicators

✅ **Venue Network**
- Verified arena directory
- Facility information
- Event scheduling
- Status indicators (Live, Open, Maintenance)

✅ **Admin Tools**
- Player management dashboard
- Match dispute resolution
- Export functionality
- Search and filtering

## 🛠️ Technology Stack

- **Framework**: React 19
- **Routing**: React Router v7
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📦 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Static Hosting
```bash
npm run build
# Upload contents of 'dist/' folder to your hosting
```

## 🔧 Environment Variables

Create a `.env` file for production:

```env
VITE_API_URL=https://your-api.com
VITE_APP_NAME=BEVA
```

## 📝 Notes

- All data is currently **mock data** stored in `src/mocks/data.js`
- Authentication uses **localStorage** for persistence
- No backend required - fully static
- Mobile-responsive design
- Production-ready UI/UX

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 5174
npx kill-port 5174
npm run dev
```

### CSS Not Loading
```bash
# Verify Tailwind is configured
npx tailwindcss init -p
npm run dev
```

## 📞 Support

For issues, check:
1. Browser console (F12)
2. Terminal output
3. Network tab (F12 → Network)

---

**Last Updated**: February 2026
**Version**: 1.0.0
**Status**: Production Ready ✅
