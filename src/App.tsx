import React from 'react';
import { Layout } from './components/Layout';
import { KPICard } from './components/KPICard';
import { ChartCard } from './components/ChartCard';
import { PageShowcase } from './components/PageShowcase';
import { Server, Shield, AlertTriangle, Zap, Download } from 'lucide-react';
import { Button } from './components/ui/button';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Mock data for charts
const patchRiskTrendData = [
  { day: 'Mon', high: 12, medium: 23, low: 45 },
  { day: 'Tue', high: 15, medium: 21, low: 43 },
  { day: 'Wed', high: 18, medium: 25, low: 40 },
  { day: 'Thu', high: 14, medium: 22, low: 42 },
  { day: 'Fri', high: 22, medium: 28, low: 38 },
  { day: 'Sat', high: 19, medium: 24, low: 41 },
  { day: 'Sun', high: 16, medium: 20, low: 44 },
];

const topUnpatchedSystemsData = [
  { name: 'WEB-PROD-01', count: 47 },
  { name: 'DB-SERVER-03', count: 38 },
  { name: 'APP-NODE-07', count: 32 },
  { name: 'API-GATEWAY-02', count: 28 },
  { name: 'MAIL-SERVER-01', count: 24 },
];

const riskDistributionData = [
  { name: 'High Risk', value: 156, color: '#ef4444' },
  { name: 'Medium Risk', value: 243, color: '#f59e0b' },
  { name: 'Low Risk', value: 421, color: '#10b981' },
];

function Dashboard() {
  return (
    <Layout activePage="dashboard">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-foreground mb-2">SmartPatch AI – Predictive Patch Compliance Overview</h1>
            <p className="text-muted-foreground">
              Real-time security posture and compliance analytics powered by AI
            </p>
          </div>
          <Button className="gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 rounded-xl">
            <Download className="h-4 w-4" />
            Generate AI Report
          </Button>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <KPICard
            title="Total Systems Scanned"
            value="1,247"
            icon={Server}
            trend={{ value: 8.2, isPositive: true }}
          />
          <KPICard
            title="Compliance Rate"
            value="87.3%"
            icon={Shield}
            trend={{ value: 3.1, isPositive: true }}
          />
          <KPICard
            title="High-Risk Systems"
            value="156"
            icon={AlertTriangle}
            trend={{ value: -12.5, isPositive: true }}
            description="Critical vulnerabilities detected"
          />
          <KPICard
            title="Auto-Remediation Runs"
            value="2,341"
            icon={Zap}
            trend={{ value: 24.7, isPositive: true }}
            description="Last 30 days"
          />
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Patch Risk Trend */}
          <ChartCard
            title="Patch Risk Trend (7 Days)"
            description="System vulnerability levels over time"
          >
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={patchRiskTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
                <XAxis
                  dataKey="day"
                  stroke="#94a3b8"
                  tick={{ fill: '#94a3b8' }}
                />
                <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    borderRadius: '8px',
                    color: '#e8edf5',
                  }}
                />
                <Legend wrapperStyle={{ color: '#94a3b8' }} />
                <Line
                  type="monotone"
                  dataKey="high"
                  stroke="#ef4444"
                  strokeWidth={2}
                  name="High Risk"
                  dot={{ fill: '#ef4444' }}
                />
                <Line
                  type="monotone"
                  dataKey="medium"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  name="Medium Risk"
                  dot={{ fill: '#f59e0b' }}
                />
                <Line
                  type="monotone"
                  dataKey="low"
                  stroke="#10b981"
                  strokeWidth={2}
                  name="Low Risk"
                  dot={{ fill: '#10b981' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Top Unpatched Systems */}
          <ChartCard
            title="Top 5 Unpatched Systems"
            description="Systems with most missing patches"
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topUnpatchedSystemsData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
                <XAxis type="number" stroke="#94a3b8" tick={{ fill: '#94a3b8' }} />
                <YAxis
                  type="category"
                  dataKey="name"
                  stroke="#94a3b8"
                  tick={{ fill: '#94a3b8' }}
                  width={120}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    borderRadius: '8px',
                    color: '#e8edf5',
                  }}
                />
                <Bar dataKey="count" fill="#00B4D8" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Risk Distribution */}
        <ChartCard
          title="Risk Distribution"
          description="Overall system security posture"
        >
          <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-around">
            <ResponsiveContainer width="100%" height={300} className="lg:w-1/2">
              <PieChart>
                <Pie
                  data={riskDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {riskDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    borderRadius: '8px',
                    color: '#e8edf5',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>

            <div className="mt-6 lg:mt-0 space-y-4 lg:w-1/2">
              {riskDistributionData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="h-4 w-4 rounded"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-foreground">{item.name}</span>
                  </div>
                  <span className="text-foreground">{item.value} systems</span>
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <div className="flex justify-between text-muted-foreground">
                  <span>Total Systems</span>
                  <span>{riskDistributionData.reduce((acc, item) => acc + item.value, 0)}</span>
                </div>
              </div>
            </div>
          </div>
        </ChartCard>
      </div>
    </Layout>
  );
}

export default function App() {
  return (
    <PageShowcase>
      <Dashboard />
    </PageShowcase>
  );
}
