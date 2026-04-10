import React, { useState } from 'react';
import { Layout } from '../Layout';
import { UploadCSV } from '../UploadCSV';
import { SystemTable, SystemData } from '../SystemTable';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';
import { Label } from '../ui/label';
import { Brain, Zap, Settings2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

// Mock data for the table
const mockSystemData: SystemData[] = [
  {
    id: '1',
    systemName: 'WEB-PROD-01',
    lastPatchDate: '2025-09-15',
    predictedRisk: 'High',
    complianceStatus: 'Non-Compliant',
    osVersion: 'Ubuntu 22.04',
  },
  {
    id: '2',
    systemName: 'DB-SERVER-03',
    lastPatchDate: '2025-10-01',
    predictedRisk: 'High',
    complianceStatus: 'Non-Compliant',
    osVersion: 'Windows Server 2019',
  },
  {
    id: '3',
    systemName: 'APP-NODE-07',
    lastPatchDate: '2025-10-10',
    predictedRisk: 'Medium',
    complianceStatus: 'Pending',
    osVersion: 'CentOS 8',
  },
  {
    id: '4',
    systemName: 'API-GATEWAY-02',
    lastPatchDate: '2025-10-18',
    predictedRisk: 'Low',
    complianceStatus: 'Compliant',
    osVersion: 'Ubuntu 24.04',
  },
  {
    id: '5',
    systemName: 'MAIL-SERVER-01',
    lastPatchDate: '2025-10-12',
    predictedRisk: 'Medium',
    complianceStatus: 'Pending',
    osVersion: 'Debian 12',
  },
  {
    id: '6',
    systemName: 'DNS-PRIMARY',
    lastPatchDate: '2025-10-19',
    predictedRisk: 'Low',
    complianceStatus: 'Compliant',
    osVersion: 'Ubuntu 22.04',
  },
  {
    id: '7',
    systemName: 'BACKUP-SERVER',
    lastPatchDate: '2025-09-20',
    predictedRisk: 'High',
    complianceStatus: 'Non-Compliant',
    osVersion: 'Windows Server 2022',
  },
  {
    id: '8',
    systemName: 'CACHE-NODE-01',
    lastPatchDate: '2025-10-16',
    predictedRisk: 'Low',
    complianceStatus: 'Compliant',
    osVersion: 'Alpine Linux',
  },
];

export function AIAnalysis() {
  const [selectedSystems, setSelectedSystems] = useState<string[]>([]);
  const [riskThreshold, setRiskThreshold] = useState([70]);
  const [sensitivity, setSensitivity] = useState([50]);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [showData, setShowData] = useState(false);

  const handleFileSelect = (file: File) => {
    setUploadedFile(file);
    setShowData(true);
    toast.success('File uploaded successfully', {
      description: `${file.name} is ready for analysis`,
    });
  };

  const handleRunPrediction = () => {
    toast.loading('Running AI prediction model...', { duration: 2000 });
    setTimeout(() => {
      toast.success('AI Prediction Complete', {
        description: `Analyzed ${mockSystemData.length} systems. Found ${mockSystemData.filter(s => s.predictedRisk === 'High').length} high-risk systems.`,
      });
    }, 2000);
  };

  const handleAutoRemediate = () => {
    if (selectedSystems.length === 0) {
      toast.error('No systems selected', {
        description: 'Please select systems to remediate',
      });
      return;
    }

    toast.loading(`Starting auto-remediation for ${selectedSystems.length} systems...`, { duration: 2000 });
    setTimeout(() => {
      toast.success('Auto-Remediation Started', {
        description: `${selectedSystems.length} systems queued for patching`,
      });
      setSelectedSystems([]);
    }, 2000);
  };

  return (
    <Layout activePage="ai-analysis">
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-foreground mb-2">AI Risk Analysis</h1>
          <p className="text-muted-foreground">
            Upload system data and leverage AI to predict patch compliance risks
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upload Area */}
            <UploadCSV onFileSelect={handleFileSelect} />

            {/* Data Table */}
            {showData && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-foreground">System Inventory Preview</h3>
                    <p className="text-sm text-muted-foreground">
                      {mockSystemData.length} systems loaded • {selectedSystems.length} selected
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleRunPrediction}
                      className="gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 rounded-xl"
                    >
                      <Brain className="h-4 w-4" />
                      Run AI Prediction
                    </Button>
                    <Button
                      onClick={handleAutoRemediate}
                      disabled={selectedSystems.length === 0}
                      className="gap-2 rounded-xl"
                      variant="outline"
                    >
                      <Zap className="h-4 w-4" />
                      Auto-Remediate Selected
                    </Button>
                  </div>
                </div>

                <SystemTable
                  data={mockSystemData}
                  selectable
                  onSelectionChange={setSelectedSystems}
                />
              </div>
            )}
          </div>

          {/* Sidebar - Model Parameters */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              
              <div className="relative space-y-6">
                <div className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  <h3 className="text-foreground">Model Parameters</h3>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="risk-threshold">Risk Threshold</Label>
                      <span className="text-sm text-muted-foreground">{riskThreshold[0]}%</span>
                    </div>
                    <Slider
                      id="risk-threshold"
                      value={riskThreshold}
                      onValueChange={setRiskThreshold}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground">
                      Systems above this threshold are flagged as high-risk
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sensitivity">Risk Sensitivity</Label>
                      <span className="text-sm text-muted-foreground">{sensitivity[0]}%</span>
                    </div>
                    <Slider
                      id="sensitivity"
                      value={sensitivity}
                      onValueChange={setSensitivity}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground">
                      Higher sensitivity detects more potential vulnerabilities
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border space-y-2">
                  <h4 className="text-sm text-foreground">Active Model</h4>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">SmartPatch AI v2.4</p>
                    <p className="text-xs text-muted-foreground">Neural Network Architecture</p>
                    <p className="text-xs text-muted-foreground">Trained on 2.3M systems</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="rounded-lg bg-primary/10 p-3 space-y-1">
                    <p className="text-sm text-foreground">Prediction Accuracy</p>
                    <p className="text-2xl text-primary">94.7%</p>
                    <p className="text-xs text-muted-foreground">Based on historical data</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              
              <div className="relative space-y-4">
                <h3 className="text-foreground">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Systems</span>
                    <span className="text-foreground">{mockSystemData.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">High Risk</span>
                    <span className="text-red-500">
                      {mockSystemData.filter(s => s.predictedRisk === 'High').length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Medium Risk</span>
                    <span className="text-yellow-500">
                      {mockSystemData.filter(s => s.predictedRisk === 'Medium').length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Low Risk</span>
                    <span className="text-green-500">
                      {mockSystemData.filter(s => s.predictedRisk === 'Low').length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
