import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Brain, 
  Settings, 
  FileText, 
  Shield,
  Bell,
  User,
  Moon,
  Sun,
  Menu,
  X
} from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { useNavigation } from './PageShowcase';

interface LayoutProps {
  children: React.ReactNode;
  activePage?: string;
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { id: 'ai-analysis', label: 'AI Risk Analysis', icon: Brain, href: '/ai-analysis' },
  { id: 'admin', label: 'Admin Panel', icon: Shield, href: '/admin' },
  { id: 'reports', label: 'Reports', icon: FileText, href: '/reports' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '/settings' },
];

export function Layout({ children, activePage = 'dashboard' }: LayoutProps) {
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { activeTab, setActiveTab } = useNavigation();

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleNavigation = (pageId: string) => {
    setActiveTab(pageId);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar - Desktop */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-sidebar transition-transform lg:translate-x-0 hidden lg:block">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center border-b border-sidebar-border px-6">
            <Shield className="h-8 w-8 text-primary mr-3" />
            <div>
              <h1 className="text-lg text-foreground">SmartPatch AI</h1>
              <p className="text-xs text-muted-foreground">Security Operations</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${
                    isActive
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground border-l-4 border-primary'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="border-t border-sidebar-border p-4">
            <div className="text-xs text-muted-foreground">
              <p>Version 2.4.1</p>
              <p className="mt-1">© 2025 SmartPatch AI</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Sidebar - Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-sidebar">
            <div className="flex h-full flex-col">
              <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-6">
                <div className="flex items-center">
                  <Shield className="h-8 w-8 text-primary mr-3" />
                  <div>
                    <h1 className="text-lg text-foreground">SmartPatch AI</h1>
                    <p className="text-xs text-muted-foreground">Security Operations</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="flex-1 space-y-1 px-3 py-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item.id)}
                      className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${
                        isActive
                          ? 'bg-sidebar-accent text-sidebar-accent-foreground border-l-4 border-primary'
                          : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex-1" />

          {/* Header Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Avatar className="h-9 w-9">
              <AvatarFallback className="bg-primary text-primary-foreground">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
