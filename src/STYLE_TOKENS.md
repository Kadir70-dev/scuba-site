# SmartPatch AI - Style Tokens Reference

## 🎨 Color System

### Primary Colors (Neon Blue Gradient)

```css
--neon-blue: #00B4D8;
--neon-blue-dark: #0077B6;
```

**Usage**:
- Primary buttons: `bg-gradient-to-r from-primary to-accent`
- Active states: `text-primary`, `border-primary`
- Icons: `text-primary`
- Accents: `bg-primary/10` (with opacity)

---

### Background Colors (Dark Theme)

```css
--background: #0a0e1a;                    /* Main page background */
--sidebar: #0f172a;                       /* Sidebar background */
--card: rgba(15, 23, 42, 0.6);           /* Frosted glass cards */
--glass-bg: rgba(15, 23, 42, 0.6);       /* Alias for card */
```

**Tailwind Classes**:
```html
<div class="bg-background">              <!-- Main background -->
<div class="bg-sidebar">                 <!-- Sidebar -->
<div class="bg-card/60 backdrop-blur-sm"><!-- Frosted glass card -->
```

---

### Text Colors

```css
--foreground: #e8edf5;              /* Primary text */
--muted-foreground: #94a3b8;        /* Secondary text */
```

**Tailwind Classes**:
```html
<h1 class="text-foreground">        <!-- Headlines -->
<p class="text-muted-foreground">   <!-- Descriptions, labels -->
```

---

### Border Colors

```css
--border: rgba(148, 163, 184, 0.15);        /* Default borders */
--glass-border: rgba(148, 163, 184, 0.15);  /* Glass effect borders */
--sidebar-border: rgba(148, 163, 184, 0.15);
```

**Tailwind Classes**:
```html
<div class="border border-border">
<div class="divide-y divide-border">
```

---

### Semantic Colors

#### Risk Levels
```css
--destructive: #ef4444;    /* High Risk - Red */
--warning: #f59e0b;        /* Medium Risk - Orange */
--success: #10b981;        /* Low Risk - Green */
```

**Badge Examples**:
```html
<!-- High Risk -->
<Badge variant="destructive">High</Badge>

<!-- Medium Risk -->
<Badge class="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">Medium</Badge>

<!-- Low Risk -->
<Badge class="bg-green-500/10 text-green-500 border-green-500/20">Low</Badge>
```

#### Status Colors
```css
--chart-1: #00B4D8;       /* Primary chart color */
--chart-2: #0077B6;       /* Secondary chart color */
--chart-3: #48cae4;       /* Tertiary chart color */
--chart-4: #ef4444;       /* Alert/danger chart color */
--chart-5: #a855f7;       /* Additional chart color */
```

---

## 📐 Spacing Scale

### Gap (Grid & Flex Spacing)

```css
gap-2:  0.5rem  (8px)    /* Tight spacing (icon + text) */
gap-3:  0.75rem (12px)   /* Small spacing */
gap-4:  1rem    (16px)   /* Default grid gap */
gap-6:  1.5rem  (24px)   /* Section spacing */
gap-8:  2rem    (32px)   /* Large section spacing */
```

### Padding

```css
p-3:  0.75rem (12px)   /* Tight padding (small buttons) */
p-4:  1rem    (16px)   /* Mobile padding */
p-6:  1.5rem  (24px)   /* Desktop padding */
p-8:  2rem    (32px)   /* Large card padding */
```

### Margin

```css
mb-2:  0.5rem  (8px)    /* Small bottom margin */
mb-4:  1rem    (16px)   /* Default bottom margin */
mb-6:  1.5rem  (24px)   /* Section bottom margin */
mt-4:  1rem    (16px)   /* Default top margin */
```

---

## 🔤 Typography

### Font Families

```css
/* Headings */
font-family: Inter, system-ui, -apple-system, sans-serif;

/* UI Elements */
font-family: Poppins, system-ui, -apple-system, sans-serif;

/* Code/Monospace */
font-family: 'Courier New', monospace;
```

### Font Sizes (Controlled by default typography)

**Do NOT use these classes unless specifically changing default sizes**:
```css
/* Default sizes from globals.css */
h1: var(--text-2xl)      /* ~24px */
h2: var(--text-xl)       /* ~20px */
h3: var(--text-lg)       /* ~18px */
p:  var(--text-base)     /* 16px */
```

### Font Weights

```css
--font-weight-normal: 400;   /* Body text */
--font-weight-medium: 500;   /* Headings, buttons, labels */
```

**Tailwind Classes** (only when overriding):
```html
<h1 class="font-medium">     <!-- Weight 500 -->
<p class="font-normal">      <!-- Weight 400 -->
```

---

## 🎯 Border Radius

### Standard Radii

```css
rounded-lg:  8px    /* Default cards, inputs */
rounded-xl:  12px   /* Buttons, emphasized elements */
rounded-2xl: 16px   /* Large cards, modals */
rounded-full: 9999px /* Circles, pills */
```

### Component-Specific Usage

```html
<!-- Cards -->
<div class="rounded-xl">

<!-- Buttons -->
<button class="rounded-xl">

<!-- Badges -->
<span class="rounded-lg">

<!-- Icons -->
<div class="rounded-lg">

<!-- Avatars -->
<div class="rounded-full">
```

---

## 💫 Effects & Animations

### Frosted Glass Effect

```html
<div class="bg-card/60 backdrop-blur-sm border border-border">
  <!-- Frosted glass card -->
</div>
```

**Components**:
```css
background: rgba(15, 23, 42, 0.6);
backdrop-filter: blur(8px);
border: 1px solid rgba(148, 163, 184, 0.15);
```

---

### Gradient Backgrounds

#### Primary Gradient (Buttons)
```html
<button class="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
  Click me
</button>
```

**CSS Equivalent**:
```css
background: linear-gradient(to right, #00B4D8, #0077B6);
```

#### Card Overlays
```html
<div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
```

---

### Shadows

```css
/* Default shadow */
shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);

/* Hover shadow (with primary tint) */
hover:shadow-lg hover:shadow-primary/5

/* Card shadow */
shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
```

**Usage**:
```html
<div class="hover:shadow-lg hover:shadow-primary/5 transition-all">
  Hoverable card
</div>
```

---

### Transitions

```html
<!-- All properties -->
<div class="transition-all duration-200">

<!-- Specific properties -->
<div class="transition-colors duration-200">
<div class="transition-transform duration-300">
```

---

## 🎭 Component-Specific Tokens

### Buttons

#### Primary Button
```html
<button class="
  bg-gradient-to-r from-primary to-accent 
  hover:from-primary/90 hover:to-accent/90 
  rounded-xl 
  px-4 py-2 
  text-primary-foreground 
  transition-all
">
  Primary Action
</button>
```

#### Secondary Button
```html
<button class="
  border border-border 
  bg-muted/20 
  hover:bg-muted/30 
  rounded-xl 
  px-4 py-2 
  text-foreground 
  transition-all
">
  Secondary Action
</button>
```

---

### Cards

#### Standard Card
```html
<div class="
  relative overflow-hidden 
  rounded-xl 
  border border-border 
  bg-card/60 
  backdrop-blur-sm 
  p-6 
  hover:bg-card/80 
  hover:shadow-lg hover:shadow-primary/5 
  transition-all
">
  <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
  <div class="relative">
    <!-- Card content -->
  </div>
</div>
```

---

### Badges

#### Risk Badges
```html
<!-- High Risk -->
<span class="inline-flex items-center rounded-lg border px-2.5 py-0.5 
  bg-red-500/10 text-red-500 border-red-500/20">
  High
</span>

<!-- Medium Risk -->
<span class="inline-flex items-center rounded-lg border px-2.5 py-0.5 
  bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
  Medium
</span>

<!-- Low Risk -->
<span class="inline-flex items-center rounded-lg border px-2.5 py-0.5 
  bg-green-500/10 text-green-500 border-green-500/20">
  Low
</span>
```

#### Status Badges
```html
<!-- Active/Compliant -->
<Badge variant="default">Active</Badge>

<!-- Inactive/Non-Compliant -->
<Badge variant="secondary">Inactive</Badge>

<!-- Custom -->
<Badge class="bg-primary/10 text-primary border-primary/20">Custom</Badge>
```

---

### Tables

```html
<table class="w-full">
  <thead class="border-b border-border bg-muted/30">
    <tr>
      <th class="px-4 py-3 text-left text-sm text-muted-foreground">Header</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-border/50 hover:bg-muted/20 transition-colors">
      <td class="px-4 py-3 text-foreground">Cell</td>
    </tr>
  </tbody>
</table>
```

---

### Inputs

```html
<input class="
  w-full 
  rounded-lg 
  border border-border 
  bg-muted/20 
  px-3 py-2 
  text-foreground 
  placeholder:text-muted-foreground 
  focus:border-primary 
  focus:outline-none 
  focus:ring-2 focus:ring-primary/20 
  transition-colors
" />
```

---

## 📱 Responsive Utilities

### Breakpoint-Specific Classes

```html
<!-- Hide on mobile, show on desktop -->
<div class="hidden lg:block">

<!-- Full width on mobile, half on desktop -->
<div class="w-full lg:w-1/2">

<!-- Stack on mobile, grid on desktop -->
<div class="flex flex-col lg:grid lg:grid-cols-2">

<!-- Different padding -->
<div class="p-4 lg:p-6">

<!-- Different text size -->
<h1 class="text-2xl lg:text-3xl">
```

---

## 🎨 Quick Reference: Common Patterns

### Card with Icon
```html
<div class="relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-6">
  <div class="flex items-start gap-4">
    <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
      <Icon class="h-6 w-6 text-primary" />
    </div>
    <div class="flex-1">
      <h3 class="text-foreground mb-1">Title</h3>
      <p class="text-sm text-muted-foreground">Description</p>
    </div>
  </div>
</div>
```

### Split Layout (Login)
```html
<div class="min-h-screen flex">
  <!-- Left side -->
  <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary/20 to-background">
    <!-- Branding -->
  </div>
  
  <!-- Right side -->
  <div class="flex-1 flex items-center justify-center p-8">
    <!-- Form -->
  </div>
</div>
```

### Navigation Item (Active)
```html
<button class="
  w-full flex items-center gap-3 
  rounded-lg px-3 py-2.5 
  bg-sidebar-accent 
  text-sidebar-accent-foreground 
  border-l-4 border-primary 
  transition-all
">
  <Icon class="h-5 w-5" />
  <span>Dashboard</span>
</button>
```

---

## 🔧 Tailwind Config Hints

### Custom Colors (if needed)
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00B4D8',
        'neon-blue-dark': '#0077B6',
      }
    }
  }
}
```

### Custom Animations
```js
animation: {
  'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
```

---

**Last Updated**: October 21, 2025  
**Version**: 2.4.1  
**Tailwind CSS**: 4.0
