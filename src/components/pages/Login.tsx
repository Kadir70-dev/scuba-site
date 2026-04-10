import React, { useState } from 'react';
import { Shield, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { toast } from 'sonner@2.0.3';

interface LoginProps {
  onLogin?: () => void;
}

export function Login({ onLogin }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Authentication Failed', {
        description: 'Please enter both email and password',
      });
      return;
    }

    // Mock authentication
    toast.loading('Authenticating...', { duration: 1500 });
    
    setTimeout(() => {
      toast.success('Login Successful', {
        description: 'Welcome back to SmartPatch AI',
      });
      
      // Store auth token (mock)
      if (rememberMe) {
        localStorage.setItem('auth_token', 'mock_jwt_token_12345');
      }
      
      onLogin?.();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-background border-r border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,180,216,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,119,182,0.1),transparent_50%)]" />
        
        <div className="relative z-10 flex flex-col justify-center px-12 lg:px-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl text-foreground">SmartPatch AI</h1>
              <p className="text-muted-foreground">Security Operations Center</p>
            </div>
          </div>

          <div className="space-y-6 max-w-md">
            <h2 className="text-4xl text-foreground">
              Predictive Patch Management
            </h2>
            <p className="text-lg text-muted-foreground">
              AI-driven compliance analytics and automated remediation for enterprise security teams
            </p>

            <div className="space-y-4 pt-8">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground">Real-time vulnerability detection</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground">Automated compliance reporting</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground">Intelligent patch prioritization</span>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-12">
            <p className="text-sm text-muted-foreground">
              Trusted by 500+ enterprise security teams worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="flex lg:hidden items-center justify-center gap-3 mb-8">
            <Shield className="h-10 w-10 text-primary" />
            <div>
              <h1 className="text-2xl text-foreground">SmartPatch AI</h1>
              <p className="text-sm text-muted-foreground">Security Operations</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl text-foreground mb-2">
              Welcome Back
            </h2>
            <p className="text-muted-foreground">
              Sign in to access your security dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-muted/20 border-border"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 bg-muted/20 border-border"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-muted-foreground cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Forgot password?
              </button>
            </div>

            <Button
              type="submit"
              className="w-full gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 rounded-xl h-11"
            >
              <Lock className="h-4 w-4" />
              Login to Admin Panel
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                className="rounded-xl"
              >
                SSO
              </Button>
              <Button
                type="button"
                variant="outline"
                className="rounded-xl"
              >
                Azure AD
              </Button>
            </div>
          </form>

          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              Need access?{' '}
              <button className="text-primary hover:text-primary/80 transition-colors">
                Contact your administrator
              </button>
            </p>
          </div>

          <div className="text-center text-xs text-muted-foreground space-y-1">
            <p>Protected by enterprise-grade security</p>
            <p>© 2025 SmartPatch AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
