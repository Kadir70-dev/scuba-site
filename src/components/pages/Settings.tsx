import React, { useState } from 'react';
import { Layout } from '../Layout';
import { ChartCard } from '../ChartCard';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Settings as SettingsIcon, Bell, Shield, Database, Mail } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [slackNotifications, setSlackNotifications] = useState(false);
  const [autoPatching, setAutoPatching] = useState(false);
  const [aiPredictions, setAiPredictions] = useState(true);

  const handleSave = () => {
    toast.success('Settings saved successfully');
  };

  return (
    <Layout activePage="settings">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-foreground mb-2">Settings</h1>
            <p className="text-muted-foreground">
              Configure system preferences and integrations
            </p>
          </div>
          <Button onClick={handleSave} className="gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
            <SettingsIcon className="h-4 w-4" />
            Save Changes
          </Button>
        </div>

        {/* Settings Tabs */}
        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:inline-grid lg:grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general" className="space-y-6">
            <ChartCard title="General Settings" description="Basic system configuration">
              <div className="space-y-6 py-4">
                <div className="space-y-2">
                  <Label htmlFor="org-name">Organization Name</Label>
                  <Input id="org-name" defaultValue="SmartPatch AI Security Operations" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="utc">
                    <SelectTrigger id="timezone">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">UTC (GMT+0)</SelectItem>
                      <SelectItem value="est">Eastern Time (GMT-5)</SelectItem>
                      <SelectItem value="pst">Pacific Time (GMT-8)</SelectItem>
                      <SelectItem value="cet">Central European Time (GMT+1)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="scan-frequency">Scan Frequency</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger id="scan-frequency">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Every Hour</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </ChartCard>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications" className="space-y-6">
            <ChartCard title="Notification Preferences" description="Manage alert and notification settings">
              <div className="space-y-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive security alerts via email
                    </p>
                  </div>
                  <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Slack Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Send alerts to Slack channels
                    </p>
                  </div>
                  <Switch checked={slackNotifications} onCheckedChange={setSlackNotifications} />
                </div>
                {emailNotifications && (
                  <div className="space-y-2 pl-4 border-l-2 border-primary">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="admin@smartpatch.ai" />
                  </div>
                )}
              </div>
            </ChartCard>

            <ChartCard title="Alert Thresholds" description="Configure when to receive alerts">
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>High Risk System Threshold</Label>
                  <Input type="number" defaultValue="10" />
                  <p className="text-sm text-muted-foreground">
                    Alert when high-risk systems exceed this number
                  </p>
                </div>
                <div className="space-y-2">
                  <Label>Compliance Rate Threshold</Label>
                  <Input type="number" defaultValue="85" />
                  <p className="text-sm text-muted-foreground">
                    Alert when compliance rate drops below this percentage
                  </p>
                </div>
              </div>
            </ChartCard>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security" className="space-y-6">
            <ChartCard title="Security Settings" description="Manage security and automation features">
              <div className="space-y-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Auto-Patching</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically apply critical patches
                    </p>
                  </div>
                  <Switch checked={autoPatching} onCheckedChange={setAutoPatching} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>AI Risk Predictions</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable machine learning risk analysis
                    </p>
                  </div>
                  <Switch checked={aiPredictions} onCheckedChange={setAiPredictions} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="patch-window">Maintenance Window</Label>
                  <Select defaultValue="night">
                    <SelectTrigger id="patch-window">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="night">Night (12 AM - 6 AM)</SelectItem>
                      <SelectItem value="weekend">Weekends Only</SelectItem>
                      <SelectItem value="manual">Manual Approval</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </ChartCard>
          </TabsContent>

          {/* Integration Settings */}
          <TabsContent value="integrations" className="space-y-6">
            <ChartCard title="Third-Party Integrations" description="Connect external tools and services">
              <div className="space-y-4 py-4">
                <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-card/50">
                  <div className="flex items-center gap-4">
                    <Database className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-foreground">Splunk SIEM</p>
                      <p className="text-muted-foreground text-sm">Log aggregation and analysis</p>
                    </div>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-card/50">
                  <div className="flex items-center gap-4">
                    <Shield className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-foreground">ServiceNow</p>
                      <p className="text-muted-foreground text-sm">Ticket management integration</p>
                    </div>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-card/50">
                  <div className="flex items-center gap-4">
                    <Mail className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-foreground">Microsoft Teams</p>
                      <p className="text-muted-foreground text-sm">Collaboration and notifications</p>
                    </div>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
              </div>
            </ChartCard>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
