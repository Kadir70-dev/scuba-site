/**
 * SmartPatch AI - Component Map & Architecture Guide
 * 
 * This file documents the component structure for Next.js implementation
 */

/**
 * COMPONENT STRUCTURE
 * ==================
 * 
 * /components/
 *   ├── Layout.tsx                 - Main layout with sidebar and header
 *   ├── KPICard.tsx                - Reusable KPI metric card
 *   ├── ChartCard.tsx              - Container for charts with header
 *   ├── SystemTable.tsx            - Data table for system inventory
 *   ├── UploadCSV.tsx              - File upload with drag & drop
 *   ├── ComponentMap.tsx           - This file (documentation)
 *   ├── pages/
 *   │   ├── AIAnalysis.tsx         - AI Risk Analysis page
 *   │   ├── AdminPanel.tsx         - Admin & Settings page
 *   │   └── Login.tsx              - Authentication page
 *   └── ui/                        - Shadcn UI components
 * 
 * 
 * NEXT.JS PAGE STRUCTURE (Recommended)
 * =====================================
 * 
 * app/ or pages/
 *   ├── page.tsx or index.tsx      - Dashboard (default export from App.tsx)
 *   ├── ai-analysis/
 *   │   └── page.tsx               - AI Risk Analysis
 *   ├── admin/
 *   │   └── settings/
 *   │       └── page.tsx           - Admin Panel
 *   ├── login/
 *   │   └── page.tsx               - Login page
 *   └── api/
 *       ├── auth/
 *       │   └── login/
 *       │       └── route.ts       - POST /api/auth/login
 *       ├── ai/
 *       │   └── predict/
 *       │       └── route.ts       - POST /api/ai/predict
 *       ├── patches/
 *       │   └── auto-remediate/
 *       │       └── route.ts       - POST /api/patches/auto-remediate
 *       └── reports/
 *           └── generate/
 *               └── route.ts       - POST /api/reports/generate
 * 
 * 
 * API ROUTE SPECIFICATIONS
 * ========================
 * 
 * 1. POST /api/auth/login
 *    Request: { email: string, password: string }
 *    Response: { token: string, user: { name, email, role } }
 *    Notes: Use JWT, store in localStorage or httpOnly cookie
 * 
 * 2. POST /api/ai/predict
 *    Request: { systems: SystemData[], threshold: number, sensitivity: number }
 *    Response: { predictions: { systemId, riskScore, recommendation }[] }
 *    Notes: Calls ML model, can be server-side rendered
 * 
 * 3. POST /api/patches/auto-remediate
 *    Request: { systemIds: string[] }
 *    Response: { jobId: string, status: 'queued', systems: number }
 *    Notes: Triggers background job, returns immediately
 * 
 * 4. POST /api/reports/generate
 *    Request: { reportType: 'compliance' | 'risk', format: 'pdf' | 'csv' }
 *    Response: { reportUrl: string, expiresAt: string }
 *    Notes: Generate report asynchronously
 * 
 * 
 * DATA FETCHING RECOMMENDATIONS
 * =============================
 * 
 * Dashboard (index.tsx):
 *   - Use getServerSideProps or RSC for initial KPI data (SSR)
 *   - Use SWR/React Query for chart data (client-side, auto-refresh)
 *   - Revalidate every 30-60 seconds
 * 
 * AI Analysis:
 *   - Client-side only (file upload, interactive)
 *   - Call /api/ai/predict on demand
 *   - Use React state for file management
 * 
 * Admin Panel:
 *   - getServerSideProps for user authentication check (SSR)
 *   - Client-side fetch for CRUD operations
 *   - Optimistic updates with SWR mutations
 * 
 * Login:
 *   - Pure client-side component
 *   - No pre-rendering needed
 *   - Redirect to dashboard on success
 * 
 * 
 * RESPONSIVE BREAKPOINTS
 * ======================
 * 
 * Tailwind breakpoints used:
 *   - sm: 640px   - Small devices
 *   - md: 768px   - Tablets (key breakpoint)
 *   - lg: 1024px  - Desktops (sidebar appears)
 *   - xl: 1280px  - Large desktops
 * 
 * Layout behavior:
 *   - < 1024px: Hamburger menu, mobile sidebar
 *   - >= 1024px: Fixed sidebar, desktop layout
 * 
 * 
 * STYLING TOKENS (Tailwind CSS)
 * ==============================
 * 
 * Colors:
 *   - Primary: #00B4D8 (neon blue)
 *   - Accent: #0077B6 (dark blue)
 *   - Background: #0a0e1a (dark navy)
 *   - Card: rgba(15, 23, 42, 0.6) (frosted glass)
 *   - Border: rgba(148, 163, 184, 0.15) (subtle)
 * 
 * Border Radius:
 *   - rounded-lg: 8px (default cards)
 *   - rounded-xl: 12px (buttons, emphasis)
 *   - rounded-2xl: 16px (large cards)
 * 
 * Spacing:
 *   - gap-4: 1rem (default grid gap)
 *   - gap-6: 1.5rem (section spacing)
 *   - p-4: 1rem (mobile padding)
 *   - p-6: 1.5rem (desktop padding)
 * 
 * Effects:
 *   - backdrop-blur-sm: Frosted glass effect
 *   - bg-gradient-to-r from-primary to-accent: Gradient buttons
 *   - hover:shadow-lg: Elevation on hover
 * 
 * 
 * AUTHENTICATION FLOW
 * ===================
 * 
 * 1. User visits /login
 * 2. Submits email/password → POST /api/auth/login
 * 3. Server validates credentials (check database/LDAP/SSO)
 * 4. Returns JWT token
 * 5. Client stores token in localStorage or cookie
 * 6. Redirect to /dashboard
 * 7. All protected routes check for valid token
 * 8. API calls include: Authorization: Bearer <token>
 * 
 * Protected routes (middleware.ts):
 *   - Check token validity
 *   - Redirect to /login if invalid
 *   - Allow /login and /api/auth/* without token
 * 
 * 
 * STATE MANAGEMENT
 * ================
 * 
 * Recommendations:
 *   - Global: Zustand or React Context (user, theme)
 *   - Server data: SWR or React Query (caching, revalidation)
 *   - Forms: React Hook Form + Zod validation
 *   - Local: useState (file upload, modals)
 * 
 * 
 * PERFORMANCE OPTIMIZATIONS
 * =========================
 * 
 * 1. Use Next.js Image component for images
 * 2. Lazy load charts (dynamic import)
 * 3. Memoize expensive calculations (useMemo)
 * 4. Virtual scrolling for large tables (react-virtual)
 * 5. Debounce search/filter inputs
 * 6. Code splitting by route (automatic in Next.js)
 * 
 * 
 * SECURITY CONSIDERATIONS
 * =======================
 * 
 * 1. Never expose API keys in client code
 * 2. Validate all inputs on server-side
 * 3. Use HTTPS in production
 * 4. Implement CSRF protection
 * 5. Rate limit API endpoints
 * 6. Sanitize user inputs (prevent XSS)
 * 7. Use httpOnly cookies for tokens (if possible)
 * 8. Implement role-based access control (RBAC)
 * 
 */

export const COMPONENT_MAP = {
  layout: {
    path: '/components/Layout.tsx',
    usage: 'Wrap all pages with <Layout activePage="...">',
    props: { activePage: 'string', children: 'ReactNode' },
    notes: 'Includes sidebar navigation, header with notifications, dark mode toggle',
  },
  kpiCard: {
    path: '/components/KPICard.tsx',
    usage: '<KPICard title="..." value="..." icon={Icon} trend={...} />',
    props: { title: 'string', value: 'string | number', icon: 'LucideIcon', trend: 'optional', description: 'optional' },
    notes: 'Displays key metrics with optional trend indicator',
  },
  chartCard: {
    path: '/components/ChartCard.tsx',
    usage: '<ChartCard title="..."><ResponsiveContainer>...</ResponsiveContainer></ChartCard>',
    props: { title: 'string', description: 'optional', action: 'optional ReactNode', children: 'ReactNode' },
    notes: 'Container for Recharts components with consistent styling',
  },
  systemTable: {
    path: '/components/SystemTable.tsx',
    usage: '<SystemTable data={systems} selectable onSelectionChange={fn} />',
    props: { data: 'SystemData[]', selectable: 'boolean', onSelectionChange: 'function' },
    notes: 'Displays system inventory with risk badges and compliance status',
  },
  uploadCSV: {
    path: '/components/UploadCSV.tsx',
    usage: '<UploadCSV onFileSelect={fn} onSampleDownload={fn} />',
    props: { onFileSelect: 'function', onSampleDownload: 'optional function' },
    notes: 'Drag & drop file upload with sample file download',
  },
};

export const PAGE_MAP = {
  dashboard: {
    path: '/App.tsx',
    route: '/',
    component: 'Default export',
    fetching: 'SSR for KPIs, client-side for charts',
    notes: 'Main overview with KPI cards and analytics charts',
  },
  aiAnalysis: {
    path: '/components/pages/AIAnalysis.tsx',
    route: '/ai-analysis',
    component: 'AIAnalysis',
    fetching: 'Client-side only',
    notes: 'Upload CSV, run AI predictions, auto-remediate systems',
  },
  adminPanel: {
    path: '/components/pages/AdminPanel.tsx',
    route: '/admin/settings',
    component: 'AdminPanel',
    fetching: 'SSR for auth check, client-side for CRUD',
    notes: 'System inventory management, user roles, settings',
  },
  login: {
    path: '/components/pages/Login.tsx',
    route: '/login',
    component: 'Login',
    fetching: 'Client-side only',
    notes: 'Authentication with email/password, SSO, Azure AD',
  },
};
