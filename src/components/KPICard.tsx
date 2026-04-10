import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  description?: string;
}

export function KPICard({ title, value, icon: Icon, trend, description }: KPICardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-6 transition-all hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
      
      <div className="relative">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-2">{title}</p>
            <p className="text-3xl text-foreground mb-1">{value}</p>
            
            {trend && (
              <div className="flex items-center gap-1 mt-2">
                {trend.isPositive ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
                <span
                  className={`text-sm ${
                    trend.isPositive ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {trend.value > 0 ? '+' : ''}{trend.value}%
                </span>
                <span className="text-xs text-muted-foreground ml-1">vs last week</span>
              </div>
            )}
            
            {description && (
              <p className="text-xs text-muted-foreground mt-2">{description}</p>
            )}
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
