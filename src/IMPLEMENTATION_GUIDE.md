# SmartPatch AI - Implementation Guide for Next.js

## 🎯 Overview

This implementation guide provides specifications for building **SmartPatch AI**, a modern cybersecurity dashboard focused on predictive patch management and compliance analytics. The UI is designed for Next.js + Tailwind CSS + Recharts.

---

## 📁 Project Structure

```
smartpatch-ai/
├── app/ (or pages/)
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Dashboard (/)
│   ├── ai-analysis/
│   │   └── page.tsx                  # AI Risk Analysis
│   ├── admin/
│   │   └── settings/
│   │       └── page.tsx              # Admin Panel
│   ├── login/
│   │   └── page.tsx                  # Login page
│   └── api/
│       ├── auth/
│       │   └── login/route.ts        # Authentication
│       ├── ai/
│       │   └── predict/route.ts      # ML predictions
│       ├── patches/
│       │   └── auto-remediate/route.ts
│       └── reports/
│           └── generate/route.ts
│
├── components/
│   ├── Layout.tsx                    # Main layout with sidebar
│   ├── KPICard.tsx                   # Metric cards
│   ├── ChartCard.tsx                 # Chart containers
│   ├── SystemTable.tsx               # Data tables
│   ├── UploadCSV.tsx                 # File upload
│   └── ui/                           # Shadcn components
│
├── lib/
│   ├── api.ts                        # API client functions
│   ├── auth.ts                       # Authentication utilities
│   └── utils.ts                      # Helper functions
│
└── styles/
    └── globals.css                   # Global styles & tokens
```

---

## 🎨 Design System

### Color Palette

```css
/* Dark Theme */
--background: #0a0e1a;           /* Main background */
--card: rgba(15, 23, 42, 0.6);   /* Frosted glass cards */
--foreground: #e8edf5;           /* Text color */
--primary: #00B4D8;              /* Neon blue */
--accent: #0077B6;               /* Dark blue */
--border: rgba(148, 163, 184, 0.15);  /* Subtle borders */
--muted-foreground: #94a3b8;     /* Secondary text */

/* Semantic Colors */
--destructive: #ef4444;          /* Red (high risk) */
--warning: #f59e0b;              /* Orange (medium risk) */
--success: #10b981;              /* Green (low risk) */
```

### Typography

- **Headings**: Inter (or system font fallback)
- **UI Elements**: Poppins (or system font fallback)
- Font sizes controlled by Tailwind's default typography system

### Border Radius

```
rounded-lg:  8px   (default cards)
rounded-xl:  12px  (buttons, emphasis)
rounded-2xl: 16px  (large cards)
```

### Spacing

```
gap-4:  1rem    (default grid gap)
gap-6:  1.5rem  (section spacing)
p-4:    1rem    (mobile padding)
p-6:    1.5rem  (desktop padding)
```

### Effects

- **Frosted Glass**: `backdrop-blur-sm` + `bg-card/60`
- **Gradient Buttons**: `bg-gradient-to-r from-primary to-accent`
- **Hover**: `hover:shadow-lg hover:shadow-primary/5`

---

## 📱 Responsive Design

### Breakpoints

```
sm:  640px   (small devices)
md:  768px   (tablets) ← Key breakpoint for layout changes
lg:  1024px  (desktops) ← Sidebar appears
xl:  1280px  (large desktops)
```

### Layout Behavior

- **< 1024px**: Hamburger menu, collapsible sidebar
- **≥ 1024px**: Fixed sidebar (256px), desktop layout

---

## 🔧 Component Specifications

### 1. Layout Component

**Location**: `/components/Layout.tsx`

**Features**:
- Fixed sidebar navigation (desktop)
- Collapsible mobile menu
- Header with notifications, theme toggle, avatar
- Responsive padding and margins

**Props**:
```typescript
interface LayoutProps {
  children: React.ReactNode;
  activePage?: 'dashboard' | 'ai-analysis' | 'admin' | 'reports' | 'settings';
}
```

**Usage**:
```tsx
<Layout activePage="dashboard">
  {/* Page content */}
</Layout>
```

---

### 2. KPICard Component

**Location**: `/components/KPICard.tsx`

**Features**:
- Displays key metrics with large numbers
- Optional trend indicator (up/down %)
- Icon with colored background
- Frosted glass effect

**Props**:
```typescript
interface KPICardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;        // e.g., 8.2
    isPositive: boolean;  // green up vs red down
  };
  description?: string;
}
```

**Example**:
```tsx
<KPICard
  title="Total Systems Scanned"
  value="1,247"
  icon={Server}
  trend={{ value: 8.2, isPositive: true }}
/>
```

---

### 3. ChartCard Component

**Location**: `/components/ChartCard.tsx`

**Features**:
- Container for Recharts components
- Consistent header with title/description
- Optional action button
- Responsive height

**Props**:
```typescript
interface ChartCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}
```

**Example**:
```tsx
<ChartCard title="Patch Risk Trend" description="Last 7 days">
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      {/* Chart components */}
    </LineChart>
  </ResponsiveContainer>
</ChartCard>
```

---

### 4. SystemTable Component

**Location**: `/components/SystemTable.tsx`

**Features**:
- Data table with sortable columns
- Selectable rows (checkboxes)
- Risk and compliance badges
- Action menu per row

**Props**:
```typescript
interface SystemTableProps {
  data: SystemData[];
  selectable?: boolean;
  onSelectionChange?: (selected: string[]) => void;
}

interface SystemData {
  id: string;
  systemName: string;
  lastPatchDate: string;
  predictedRisk: 'High' | 'Medium' | 'Low';
  complianceStatus: 'Compliant' | 'Non-Compliant' | 'Pending';
  osVersion?: string;
}
```

---

### 5. UploadCSV Component

**Location**: `/components/UploadCSV.tsx`

**Features**:
- Drag & drop file upload
- Browse files button
- File preview with size
- Sample file download
- Accepts CSV and JSON

**Props**:
```typescript
interface UploadCSVProps {
  onFileSelect?: (file: File) => void;
  onSampleDownload?: () => void;
}
```

---

## 📄 Page Implementations

### 1. Dashboard (Home Page)

**Route**: `/` or `/dashboard`  
**Component**: `app/page.tsx`

**Sections**:
1. Page header with title and "Generate AI Report" button
2. 4 KPI cards (Systems Scanned, Compliance Rate, High-Risk Systems, Auto-Remediation Runs)
3. 3 Charts:
   - Line chart: Patch Risk Trend (7 days)
   - Bar chart: Top 5 Unpatched Systems
   - Donut chart: Risk Distribution (High/Medium/Low)

**Data Fetching**:
```typescript
// Server Component (RSC) or getServerSideProps
async function getKPIData() {
  const res = await fetch('http://api/kpi', { 
    next: { revalidate: 60 } // Cache for 60s
  });
  return res.json();
}
```

**Client-side updates**:
```typescript
// Use SWR for real-time chart updates
import useSWR from 'swr';

const { data } = useSWR('/api/charts/risk-trend', fetcher, {
  refreshInterval: 30000 // 30 seconds
});
```

---

### 2. AI Risk Analysis

**Route**: `/ai-analysis`  
**Component**: `app/ai-analysis/page.tsx`

**Sections**:
1. CSV/JSON upload area (drag & drop)
2. System inventory table (selectable)
3. Action buttons: "Run AI Prediction", "Auto-Remediate Selected"
4. Sidebar with model parameters (threshold slider, sensitivity slider)
5. Quick stats panel

**API Calls**:

```typescript
// Run AI Prediction
async function runPrediction(systems: SystemData[], params: ModelParams) {
  const res = await fetch('/api/ai/predict', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ systems, ...params })
  });
  return res.json();
}

// Auto-Remediate
async function autoRemediate(systemIds: string[]) {
  const res = await fetch('/api/patches/auto-remediate', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ systemIds })
  });
  return res.json();
}
```

---

### 3. Admin Panel

**Route**: `/admin/settings`  
**Component**: `app/admin/settings/page.tsx`

**Sections** (Tabs):
1. **System Inventory**: CRUD table for managed systems
2. **User Management**: User roles & permissions (Admin, Operator, Viewer)
3. **Settings**: 
   - Email alerts toggle
   - Auto-update policies toggle
   - Maintenance window time picker
   - Real-time monitoring toggle

**Authentication Check**:
```typescript
// middleware.ts or getServerSideProps
export async function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token');
  
  if (!token && request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}
```

---

### 4. Login Page

**Route**: `/login`  
**Component**: `app/login/page.tsx`

**Layout**:
- Split layout (50/50 on desktop)
- Left: Branding, illustration, feature bullets
- Right: Login form

**Form Fields**:
- Email (required)
- Password (required, toggle visibility)
- Remember Me checkbox
- Forgot Password link
- SSO / Azure AD buttons

**Authentication Flow**:
```typescript
async function handleLogin(email: string, password: string) {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  
  const { token, user } = await res.json();
  
  // Store token
  localStorage.setItem('auth_token', token);
  // or set httpOnly cookie (preferred)
  
  // Redirect to dashboard
  router.push('/');
}
```

---

## 🔐 API Route Specifications

### POST /api/auth/login

**Request**:
```json
{
  "email": "admin@company.com",
  "password": "securepassword123"
}
```

**Response**:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user-123",
    "name": "John Smith",
    "email": "admin@company.com",
    "role": "Admin"
  }
}
```

**Error**:
```json
{
  "error": "Invalid credentials",
  "code": "AUTH_FAILED"
}
```

---

### POST /api/ai/predict

**Request**:
```json
{
  "systems": [
    {
      "id": "1",
      "systemName": "WEB-PROD-01",
      "lastPatchDate": "2025-09-15",
      "osVersion": "Ubuntu 22.04"
    }
  ],
  "threshold": 70,
  "sensitivity": 50
}
```

**Response**:
```json
{
  "predictions": [
    {
      "systemId": "1",
      "riskScore": 87,
      "predictedRisk": "High",
      "recommendation": "Immediate patching required. 12 critical vulnerabilities detected."
    }
  ],
  "modelVersion": "2.4.1",
  "timestamp": "2025-10-21T14:30:00Z"
}
```

---

### POST /api/patches/auto-remediate

**Request**:
```json
{
  "systemIds": ["1", "2", "5"]
}
```

**Response**:
```json
{
  "jobId": "job-abc123",
  "status": "queued",
  "systemsQueued": 3,
  "estimatedCompletionTime": "2025-10-21T16:00:00Z"
}
```

---

### POST /api/reports/generate

**Request**:
```json
{
  "reportType": "compliance",
  "format": "pdf",
  "dateRange": {
    "start": "2025-10-01",
    "end": "2025-10-21"
  }
}
```

**Response**:
```json
{
  "reportId": "report-xyz789",
  "reportUrl": "https://cdn.example.com/reports/compliance-2025-10.pdf",
  "expiresAt": "2025-10-28T00:00:00Z"
}
```

---

## 📊 Mock Data Examples

### KPI Data
```typescript
const kpiData = {
  totalSystems: 1247,
  complianceRate: 87.3,
  highRiskSystems: 156,
  autoRemediationRuns: 2341,
  trends: {
    totalSystems: { value: 8.2, isPositive: true },
    complianceRate: { value: 3.1, isPositive: true },
    highRiskSystems: { value: -12.5, isPositive: true },
    autoRemediationRuns: { value: 24.7, isPositive: true }
  }
};
```

### Chart Data
```typescript
const riskTrendData = [
  { day: 'Mon', high: 12, medium: 23, low: 45 },
  { day: 'Tue', high: 15, medium: 21, low: 43 },
  // ...
];

const riskDistribution = [
  { name: 'High Risk', value: 156, color: '#ef4444' },
  { name: 'Medium Risk', value: 243, color: '#f59e0b' },
  { name: 'Low Risk', value: 421, color: '#10b981' }
];
```

---

## 🚀 Deployment Checklist

### Environment Variables

```env
# .env.local
NEXT_PUBLIC_API_URL=https://api.smartpatch.ai
JWT_SECRET=your-secret-key-here
DATABASE_URL=postgresql://...
SMTP_HOST=smtp.company.com
SMTP_PORT=587
```

### Build & Deploy

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start

# Or deploy to Vercel
vercel --prod
```

### Performance Optimizations

1. Enable Next.js Image Optimization
2. Use dynamic imports for heavy components (charts)
3. Implement ISR (Incremental Static Regeneration) for dashboard
4. Enable Gzip/Brotli compression
5. Optimize Recharts bundle size (tree-shaking)

---

## 🔒 Security Best Practices

1. **Authentication**:
   - Use httpOnly cookies for JWT tokens (not localStorage)
   - Implement refresh token rotation
   - Set short expiration times (15-30 min)

2. **Authorization**:
   - Check user role on every API route
   - Implement RBAC (Role-Based Access Control)
   - Validate permissions server-side

3. **Input Validation**:
   - Use Zod for schema validation
   - Sanitize all user inputs
   - Prevent SQL injection (use ORMs)

4. **API Security**:
   - Rate limiting (express-rate-limit)
   - CORS configuration
   - CSRF protection
   - API key rotation

---

## 📈 Next Steps

1. **Integrate Real Backend**:
   - Replace mock data with actual API calls
   - Implement database (PostgreSQL, MongoDB)
   - Set up authentication provider (Auth0, Clerk, NextAuth)

2. **Add Features**:
   - Real-time WebSocket updates
   - Advanced filtering and search
   - Export data (CSV, Excel, PDF)
   - Scheduled reports via email

3. **Testing**:
   - Unit tests (Jest, React Testing Library)
   - E2E tests (Playwright, Cypress)
   - Performance testing (Lighthouse)

4. **Monitoring**:
   - Error tracking (Sentry)
   - Analytics (Posthog, Mixpanel)
   - Performance monitoring (Vercel Analytics)

---

## 📞 Support

For implementation questions or customization requests, refer to:
- Component source code in `/components`
- API documentation in `/IMPLEMENTATION_GUIDE.md`
- Design tokens in `/styles/globals.css`

---

**Built with**: Next.js 14+ • React 18+ • Tailwind CSS 4.0 • TypeScript • Recharts • Shadcn UI

**License**: MIT  
**Version**: 2.4.1  
**Last Updated**: October 21, 2025
