# SmartPatch AI - Cybersecurity Dashboard

> **Predictive Patch Management & Compliance Analytics Platform**

A modern, AI-powered cybersecurity dashboard built with **React**, **Tailwind CSS**, and **Recharts**. Designed for Next.js implementation with enterprise-grade UI/UX patterns.

---

## 🎯 Overview

SmartPatch AI is a comprehensive security operations center (SOC) dashboard that provides:

- **Real-time vulnerability monitoring** across your infrastructure
- **AI-driven risk predictions** for proactive patch management  
- **Automated compliance reporting** with visual analytics
- **Intelligent patch prioritization** based on criticality

---

## 🚀 Demo Navigation

This prototype includes **4 complete pages** that you can navigate using the top banner:

1. **📊 Dashboard** - KPI overview with charts and analytics
2. **🧠 AI Risk Analysis** - Upload data, run predictions, auto-remediate
3. **⚙️ Admin Panel** - System inventory, user management, settings
4. **🔐 Login** - Authentication page with split layout

Click the buttons in the top navigation banner to switch between pages.

---

## 📁 Project Structure

```
smartpatch-ai/
├── App.tsx                        # Main entry (Dashboard page)
├── components/
│   ├── Layout.tsx                 # Sidebar + Header layout
│   ├── KPICard.tsx                # Metric cards with trends
│   ├── ChartCard.tsx              # Chart containers
│   ├── SystemTable.tsx            # Data tables
│   ├── UploadCSV.tsx              # File upload component
│   ├── PageShowcase.tsx           # Demo navigation wrapper
│   ├── index.ts                   # Component exports
│   ├── pages/
│   │   ├── AIAnalysis.tsx         # AI Risk Analysis page
│   │   ├── AdminPanel.tsx         # Admin & Settings page
│   │   └── Login.tsx              # Login page
│   └── ui/                        # Shadcn components
├── styles/
│   └── globals.css                # Design tokens & dark theme
├── IMPLEMENTATION_GUIDE.md        # Next.js implementation guide
├── STYLE_TOKENS.md                # Design system reference
└── README.md                      # This file
```

---

## 🎨 Design System

### Visual Style
- **Theme**: Professional dark mode with soft neon blue accents
- **Colors**: Gradient from `#00B4D8` → `#0077B6`
- **Effects**: Frosted glass cards, subtle shadows, backdrop blur
- **Typography**: Inter (headlines) / System fonts (UI)
- **Icons**: Lucide React (minimal flat style)

### UI Patterns
- **Buttons**: `rounded-xl`, gradient background, hover states
- **Cards**: Frosted glass with `backdrop-blur-sm`, gradient overlays
- **Tables**: Hover effects, selectable rows, status badges
- **Layout**: Fixed sidebar (desktop), collapsible menu (mobile)

### Responsive Breakpoints
- **Mobile**: < 768px (stacked layout)
- **Tablet**: 768px - 1024px (2-column grid)
- **Desktop**: ≥ 1024px (sidebar appears, 4-column grid)

---

## 🧩 Component Library

### Core Components

#### `<Layout>`
Main layout wrapper with sidebar navigation and header.

```tsx
<Layout activePage="dashboard">
  {children}
</Layout>
```

#### `<KPICard>`
Displays key metrics with optional trend indicators.

```tsx
<KPICard
  title="Total Systems"
  value="1,247"
  icon={Server}
  trend={{ value: 8.2, isPositive: true }}
/>
```

#### `<ChartCard>`
Container for Recharts with consistent styling.

```tsx
<ChartCard title="Risk Trend" description="Last 7 days">
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>...</LineChart>
  </ResponsiveContainer>
</ChartCard>
```

#### `<SystemTable>`
Data table for system inventory with selection.

```tsx
<SystemTable
  data={systems}
  selectable
  onSelectionChange={(ids) => setSelected(ids)}
/>
```

#### `<UploadCSV>`
Drag & drop file upload with sample download.

```tsx
<UploadCSV 
  onFileSelect={(file) => handleUpload(file)}
  onSampleDownload={() => downloadSample()}
/>
```

---

## 📊 Pages

### 1. Dashboard (Home)
- 4 KPI cards (Systems, Compliance %, Risk, Auto-Remediation)
- Line chart: Patch Risk Trend (7 days)
- Bar chart: Top 5 Unpatched Systems
- Donut chart: Risk Distribution

**Data**: Server-side rendered KPIs + client-side chart updates

---

### 2. AI Risk Analysis
- CSV/JSON upload with drag & drop
- System preview table (selectable)
- "Run AI Prediction" and "Auto-Remediate" actions
- Model parameter controls (threshold, sensitivity sliders)
- Quick stats sidebar

**API Calls**: `/api/ai/predict`, `/api/patches/auto-remediate`

---

### 3. Admin Panel
Tabbed interface with:
- **System Inventory**: CRUD table for managed systems
- **User Management**: Roles (Admin/Operator/Viewer), status
- **Settings**: Email alerts, auto-update policies, maintenance windows

**Authentication**: Protected route, requires admin role

---

### 4. Login Page
Split layout:
- **Left**: Branding, illustration, feature highlights
- **Right**: Login form with email/password, SSO options

**Flow**: POST `/api/auth/login` → Store JWT → Redirect to dashboard

---

## 🔧 Next.js Implementation

### Recommended Structure

```
app/
├── layout.tsx              # Root layout (dark mode, fonts)
├── page.tsx                # Dashboard
├── ai-analysis/
│   └── page.tsx
├── admin/
│   └── settings/
│       └── page.tsx
├── login/
│   └── page.tsx
└── api/
    ├── auth/login/route.ts
    ├── ai/predict/route.ts
    ├── patches/auto-remediate/route.ts
    └── reports/generate/route.ts
```

### Data Fetching

**Server Components (RSC)**:
```tsx
// app/page.tsx
async function getKPIData() {
  const res = await fetch('http://api/kpi', {
    next: { revalidate: 60 } // Cache 60s
  });
  return res.json();
}
```

**Client Components (SWR)**:
```tsx
import useSWR from 'swr';

const { data } = useSWR('/api/charts', fetcher, {
  refreshInterval: 30000 // Refresh every 30s
});
```

### Authentication

```tsx
// middleware.ts
export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token');
  
  if (!token && request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}
```

---

## 🔐 API Endpoints

### POST /api/auth/login
```json
// Request
{ "email": "admin@company.com", "password": "..." }

// Response
{ "token": "jwt...", "user": { "name": "...", "role": "Admin" } }
```

### POST /api/ai/predict
```json
// Request
{ "systems": [...], "threshold": 70, "sensitivity": 50 }

// Response
{ "predictions": [{ "systemId": "1", "riskScore": 87, ... }] }
```

### POST /api/patches/auto-remediate
```json
// Request
{ "systemIds": ["1", "2", "3"] }

// Response
{ "jobId": "abc123", "status": "queued", "systemsQueued": 3 }
```

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "next": "^14.0.0",
    "tailwindcss": "^4.0.0",
    "recharts": "^2.10.0",
    "lucide-react": "latest",
    "sonner": "^2.0.3",
    "@radix-ui/react-*": "latest"
  }
}
```

### Key Libraries
- **Recharts**: Charts and data visualization
- **Lucide React**: Icon library
- **Sonner**: Toast notifications
- **Radix UI**: Headless components (via Shadcn)

---

## 🎯 Key Features

### ✅ Implemented
- [x] Responsive dark theme with neon accents
- [x] Sidebar navigation with mobile support
- [x] KPI cards with trend indicators
- [x] Interactive charts (Line, Bar, Donut)
- [x] Data tables with selection
- [x] File upload with drag & drop
- [x] Toast notifications
- [x] Login form with validation
- [x] Admin panel with tabs
- [x] Frosted glass effects
- [x] Gradient buttons

### 🚧 For Production Implementation
- [ ] Real authentication (JWT, OAuth, SSO)
- [ ] Backend API integration
- [ ] Database (PostgreSQL, MongoDB)
- [ ] WebSocket for real-time updates
- [ ] Role-based access control (RBAC)
- [ ] Advanced search & filtering
- [ ] Export data (CSV, PDF, Excel)
- [ ] Scheduled reports via email
- [ ] Error tracking (Sentry)
- [ ] Analytics (Posthog, Mixpanel)

---

## 📚 Documentation

Comprehensive guides are included:

1. **[IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md)**  
   Complete Next.js implementation specs, API routes, authentication flow

2. **[STYLE_TOKENS.md](./STYLE_TOKENS.md)**  
   Design system reference: colors, spacing, typography, effects

3. **[/components/ComponentMap.tsx](./components/ComponentMap.tsx)**  
   Component architecture and usage examples

---

## 🚀 Getting Started (Next.js)

### 1. Create Next.js App
```bash
npx create-next-app@latest smartpatch-ai
cd smartpatch-ai
```

### 2. Install Dependencies
```bash
npm install recharts lucide-react sonner@2.0.3
npm install @radix-ui/react-*  # Shadcn dependencies
```

### 3. Copy Components
- Copy `/components` folder to your Next.js project
- Copy `/styles/globals.css`
- Copy Shadcn UI components from `/components/ui`

### 4. Set Up Pages
```tsx
// app/page.tsx
import { Layout } from '@/components/Layout';
import { KPICard } from '@/components/KPICard';
// ... rest of dashboard

export default function Dashboard() {
  return <Layout activePage="dashboard">...</Layout>
}
```

### 5. Add API Routes
Create API routes in `app/api/` following the specifications in IMPLEMENTATION_GUIDE.md

---

## 🎨 Customization

### Change Colors
Edit `/styles/globals.css`:
```css
.dark {
  --primary: #00B4D8;     /* Your color */
  --accent: #0077B6;      /* Your accent */
}
```

### Add New KPI Card
```tsx
<KPICard
  title="Your Metric"
  value="123"
  icon={YourIcon}
  trend={{ value: 5.2, isPositive: true }}
/>
```

### Add New Chart
```tsx
<ChartCard title="Your Chart">
  <ResponsiveContainer width="100%" height={300}>
    <YourChart data={data}>...</YourChart>
  </ResponsiveContainer>
</ChartCard>
```

---

## 🔒 Security Notes

⚠️ **Important for Production**:

1. Never expose API keys in client-side code
2. Use httpOnly cookies for JWT tokens (not localStorage)
3. Implement CSRF protection
4. Validate all inputs server-side
5. Rate limit API endpoints
6. Use HTTPS in production
7. Implement proper RBAC
8. Sanitize user inputs (prevent XSS)

---

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Modern mobile browsers

Requires support for:
- CSS Grid & Flexbox
- CSS Custom Properties
- Backdrop Filter
- ES6+ JavaScript

---

## 📞 Support & Resources

### Documentation
- **Implementation Guide**: [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md)
- **Style Tokens**: [STYLE_TOKENS.md](./STYLE_TOKENS.md)
- **Component Map**: [/components/ComponentMap.tsx](./components/ComponentMap.tsx)

### External Resources
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Recharts](https://recharts.org)
- [Shadcn UI](https://ui.shadcn.com)

---

## 📄 License

MIT License - Feel free to use this design system for your projects.

---

## 🙏 Credits

**Built with**:
- Next.js 14+
- React 18+
- Tailwind CSS 4.0
- TypeScript
- Recharts
- Shadcn UI
- Lucide Icons

**Design**: Futuristic SOC-inspired UI with frosted glass effects  
**Version**: 2.4.1  
**Last Updated**: October 21, 2025

---

## 🎉 Demo Features

Navigate between pages using the top banner to explore:
- **Dashboard**: Real-time analytics with charts and KPIs
- **AI Analysis**: Upload CSV, run predictions, auto-remediate
- **Admin Panel**: Manage systems, users, and settings
- **Login**: Split-screen authentication page

Ready for Next.js implementation as a production-ready cybersecurity platform! 🚀
