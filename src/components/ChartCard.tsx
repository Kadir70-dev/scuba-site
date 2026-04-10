import React from 'react';

interface ChartCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}

export function ChartCard({ title, description, children, action }: ChartCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-6 transition-all hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-foreground mb-1">{title}</h3>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
          {action && <div>{action}</div>}
        </div>

        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
}
