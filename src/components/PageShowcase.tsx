import React, { useState, createContext, useContext } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { AIAnalysis } from './pages/AIAnalysis';
import { AdminPanel } from './pages/AdminPanel';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { Login } from './pages/Login';
import { Toaster } from './ui/sonner';

interface PageShowcaseProps {
  children: React.ReactNode; // Dashboard content
}

interface NavigationContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NavigationContext = createContext<NavigationContextType | null>(null);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};

export function PageShowcase({ children }: PageShowcaseProps) {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <NavigationContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="min-h-screen">
        <Toaster />
        
        {/* Demo Navigation Banner */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-primary/10 border-b border-primary/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-center gap-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-muted-foreground">
                  SmartPatch AI Demo - Navigate between pages:
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-3 py-1 rounded-lg transition-colors ${
                    activeTab === 'dashboard'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('ai-analysis')}
                  className={`px-3 py-1 rounded-lg transition-colors ${
                    activeTab === 'ai-analysis'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  AI Analysis
                </button>
                <button
                  onClick={() => setActiveTab('admin')}
                  className={`px-3 py-1 rounded-lg transition-colors ${
                    activeTab === 'admin'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Admin
                </button>
                <button
                  onClick={() => setActiveTab('login')}
                  className={`px-3 py-1 rounded-lg transition-colors ${
                    activeTab === 'login'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="pt-12">
          {activeTab === 'dashboard' && children}
          {activeTab === 'ai-analysis' && <AIAnalysis />}
          {activeTab === 'admin' && <AdminPanel />}
          {activeTab === 'reports' && <Reports />}
          {activeTab === 'settings' && <Settings />}
          {activeTab === 'login' && <Login />}
        </div>
      </div>
    </NavigationContext.Provider>
  );
}
