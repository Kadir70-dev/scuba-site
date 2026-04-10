import React from 'react';
import { Layout } from '../Layout';
import { ChartCard } from '../ChartCard';
import { Button } from '../ui/button';
import { FileText, Download, Calendar, Filter } from 'lucide-react';

export function Reports() {
  return (
    <Layout activePage="reports">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-foreground mb-2">Reports & Analytics</h1>
            <p className="text-muted-foreground">
              Generate comprehensive compliance and security reports
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              Date Range
            </Button>
            <Button className="gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Report Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <ChartCard
            title="Compliance Report"
            description="Monthly compliance status and trends"
          >
            <div className="flex flex-col gap-4 py-8">
              <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-card/50">
                <div>
                  <p className="text-muted-foreground text-sm">October 2025</p>
                  <p className="text-foreground text-2xl mt-1">87.3%</p>
                </div>
                <Button size="sm" variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-card/50">
                <div>
                  <p className="text-muted-foreground text-sm">September 2025</p>
                  <p className="text-foreground text-2xl mt-1">84.2%</p>
                </div>
                <Button size="sm" variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-card/50">
                <div>
                  <p className="text-muted-foreground text-sm">August 2025</p>
                  <p className="text-foreground text-2xl mt-1">81.9%</p>
                </div>
                <Button size="sm" variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          </ChartCard>

          <ChartCard
            title="Vulnerability Reports"
            description="Critical security findings and remediation"
          >
            <div className="flex flex-col gap-4 py-8">
              <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-card/50">
                <div>
                  <p className="text-muted-foreground text-sm">High Risk Systems</p>
                  <p className="text-foreground text-2xl mt-1">156 Systems</p>
                </div>
                <Button size="sm" variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  View
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-card/50">
                <div>
                  <p className="text-muted-foreground text-sm">Medium Risk Systems</p>
                  <p className="text-foreground text-2xl mt-1">243 Systems</p>
                </div>
                <Button size="sm" variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  View
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-card/50">
                <div>
                  <p className="text-muted-foreground text-sm">Patched This Month</p>
                  <p className="text-foreground text-2xl mt-1">487 Systems</p>
                </div>
                <Button size="sm" variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  View
                </Button>
              </div>
            </div>
          </ChartCard>
        </div>

        {/* Scheduled Reports */}
        <ChartCard
          title="Scheduled Reports"
          description="Automated report generation and delivery"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-card/50">
              <div className="flex items-center gap-4">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-foreground">Weekly Security Summary</p>
                  <p className="text-muted-foreground text-sm">Every Monday at 9:00 AM</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">Edit</Button>
                <Button size="sm" variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Run Now
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-card/50">
              <div className="flex items-center gap-4">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-foreground">Monthly Compliance Report</p>
                  <p className="text-muted-foreground text-sm">First day of every month at 8:00 AM</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">Edit</Button>
                <Button size="sm" variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Run Now
                </Button>
              </div>
            </div>
          </div>
        </ChartCard>
      </div>
    </Layout>
  );
}
