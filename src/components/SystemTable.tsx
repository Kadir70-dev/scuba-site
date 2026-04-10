import React from 'react';
import { Badge } from './ui/badge';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';
import { MoreVertical } from 'lucide-react';

export interface SystemData {
  id: string;
  systemName: string;
  lastPatchDate: string;
  predictedRisk: 'High' | 'Medium' | 'Low';
  complianceStatus: 'Compliant' | 'Non-Compliant' | 'Pending';
  osVersion?: string;
}

interface SystemTableProps {
  data: SystemData[];
  selectable?: boolean;
  onSelectionChange?: (selected: string[]) => void;
}

export function SystemTable({ data, selectable = false, onSelectionChange }: SystemTableProps) {
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(new Set());

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIds = new Set(data.map(item => item.id));
      setSelectedRows(allIds);
      onSelectionChange?.(Array.from(allIds));
    } else {
      setSelectedRows(new Set());
      onSelectionChange?.([]);
    }
  };

  const handleSelectRow = (id: string, checked: boolean) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelectedRows(newSelected);
    onSelectionChange?.(Array.from(newSelected));
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'High':
        return 'destructive';
      case 'Medium':
        return 'default';
      case 'Low':
        return 'secondary';
      default:
        return 'default';
    }
  };

  const getComplianceColor = (status: string) => {
    switch (status) {
      case 'Compliant':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Non-Compliant':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      case 'Pending':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      default:
        return 'default';
    }
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-border bg-muted/30">
            <tr>
              {selectable && (
                <th className="px-4 py-3 text-left">
                  <Checkbox
                    checked={selectedRows.size === data.length && data.length > 0}
                    onCheckedChange={handleSelectAll}
                  />
                </th>
              )}
              <th className="px-4 py-3 text-left text-sm text-muted-foreground">System Name</th>
              <th className="px-4 py-3 text-left text-sm text-muted-foreground">Last Patch Date</th>
              <th className="px-4 py-3 text-left text-sm text-muted-foreground">Predicted Risk</th>
              <th className="px-4 py-3 text-left text-sm text-muted-foreground">Compliance Status</th>
              <th className="px-4 py-3 text-left text-sm text-muted-foreground">OS Version</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={row.id}
                className="border-b border-border/50 hover:bg-muted/20 transition-colors"
              >
                {selectable && (
                  <td className="px-4 py-3">
                    <Checkbox
                      checked={selectedRows.has(row.id)}
                      onCheckedChange={(checked) => handleSelectRow(row.id, checked as boolean)}
                    />
                  </td>
                )}
                <td className="px-4 py-3 text-foreground">{row.systemName}</td>
                <td className="px-4 py-3 text-muted-foreground">{row.lastPatchDate}</td>
                <td className="px-4 py-3">
                  <Badge variant={getRiskColor(row.predictedRisk)}>
                    {row.predictedRisk}
                  </Badge>
                </td>
                <td className="px-4 py-3">
                  <Badge className={getComplianceColor(row.complianceStatus)}>
                    {row.complianceStatus}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{row.osVersion || 'N/A'}</td>
                <td className="px-4 py-3">
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
