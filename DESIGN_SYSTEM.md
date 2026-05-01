# Chronosphere Design System v2.0

**Premium, Minimal, High-Performance UI/UX**

---

## 📏 **Spacing Scale (8px Grid)**

All spacing uses an 8px base grid for perfect alignment and rhythm:

```css
--space-xs:   4px    (0.25rem)  /* Micro spacing */
--space-sm:   8px    (0.5rem)   /* Small gaps */
--space-md:   16px   (1rem)     /* Default padding */
--space-lg:   24px   (1.5rem)   /* Section spacing */
--space-xl:   32px   (2rem)     /* Large sections */
--space-2xl:  48px   (3rem)     /* Major sections */
--space-3xl:  64px   (4rem)     /* Hero sections */
--space-4xl:  96px   (6rem)     /* Full-screen sections */
```

**Usage:**
- Padding: `padding: var(--space-md)` instead of hardcoded values
- Gaps: `gap: var(--space-lg)` for consistent grid spacing
- Margins: Use spacing scale for vertical rhythm

---

## 🔤 **Typography System**

### **Font Stack**
- **Headings & Body:** `Inter` 400/500/600/700/800
- **Fallback:** System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI')

### **Font Sizes (Responsive with clamp)**
```
H1 (Display)     clamp(48px, 6vw, 56px)    line-height: 1.1
H2 (Hero)        clamp(36px, 5vw, 44px)    line-height: 1.15
H3 (Section)     clamp(28px, 4vw, 32px)    line-height: 1.2
H4 (Subsection)  24px                       line-height: 1.3
Body             16px                       line-height: 1.6
Small            14px                       line-height: 1.5
Tiny/Label       12px                       line-height: 1.4, letter-spacing: 0.5px
```

**Letter Spacing:**
```
Headings:  -0.03em (H1), -0.02em (H2), -0.01em (H3)
Body:      0 (normal)
Labels:    0.5px (uppercase)
```

### **Implementation**
```html
<!-- ✅ Correct -->
<h1 className="text-h1">Chronosphere</h1>
<p className="text-body">Future-ready programs...</p>

<!-- ❌ Avoid -->
<h1 style={{ fontSize: '56px', fontFamily: 'Arial' }}>Chronosphere</h1>
```

---

## 🎨 **Color Palette (Extended)**

### **Primary Blue (Professional)**
```css
--color-primary-50:   #f0f9ff   /* Very light */
--color-primary-100:  #e0f2fe   /* Light background */
--color-primary-200:  #bae6fd   /* Hover states */
--color-primary-300:  #7dd3fc   /* Interactive */
--color-primary-400:  #38bdf8   /* Accent */
--color-primary-500:  #0ea5e9   /* Brand */
--color-primary-600:  #0284c7   /* Default */
--color-primary-700:  #0369a1   /* Strong (use this) */
--color-primary-800:  #075985   /* Darker */
--color-primary-900:  #0c2d4a   /* Darkest */
```

### **Neutral Grays (Premium)**
```css
--color-neutral-0:    #ffffff   /* Pure white */
--color-neutral-50:   #fafafa   /* Almost white bg */
--color-neutral-100:  #f5f5f5   /* Light bg */
--color-neutral-200:  #e5e5e5   /* Borders */
--color-neutral-300:  #d4d4d4   /* Borders subtle */
--color-neutral-400:  #a3a3a3   /* Disabled text */
--color-neutral-500:  #737373   /* Secondary text */
--color-neutral-600:  #525252   /* Body text dark */
--color-neutral-700:  #404040   /* Strong text */
--color-neutral-800:  #262626   /* Dark text */
--color-neutral-900:  #171717   /* Darkest */
```

### **Semantic Colors**
```css
--color-success:   #10b981   /* Green - success states */
--color-warning:   #f59e0b   /* Amber - warnings */
--color-error:     #ef4444   /* Red - errors */
--color-info:      #3b82f6   /* Blue - info */
```

### **Text Colors (Semantic)**
```css
--color-text-primary:     #111827   /* H1-H4, body copy */
--color-text-secondary:   #6b7280   /* Secondary text, subtitles */
--color-text-tertiary:    #9ca3af   /* Disabled, hints */
--color-text-inverse:     #ffffff   /* On dark backgrounds */
```

### **Usage Examples**
```jsx
// ✅ Correct
<button style={{ color: 'var(--color-primary-700)' }}>Click</button>
<p style={{ color: 'var(--color-text-secondary)' }}>Subtitle</p>

// ❌ Avoid
<button style={{ color: '#1d4ed8' }}>Click</button>
<p style={{ color: '#999' }}>Subtitle</p>
```

---

## 🪄 **Shadow System (Elevation)**

### **Shadow Tokens**
```css
--shadow-none:  none
--shadow-sm:    0 1px 2px rgba(0,0,0,0.05)
--shadow-md:    0 4px 6px rgba(0,0,0,0.07), 0 10px 13px rgba(0,0,0,0.05)
--shadow-lg:    0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)
--shadow-xl:    0 20px 25px rgba(0,0,0,0.1), 0 8px 10px rgba(0,0,0,0.04)
--shadow-2xl:   0 25px 50px rgba(0,0,0,0.15)
```

### **Elevation Guidelines**
| Level | Shadow | Use Case |
|-------|--------|----------|
| 0 | `--shadow-none` | Flat backgrounds |
| 1 | `--shadow-sm` | Subtle borders/lines |
| 2 | `--shadow-md` | Default cards, inputs |
| 3 | `--shadow-lg` | Hovered cards, lifted state |
| 4 | `--shadow-xl` | Dropdowns, modals |
| 5 | `--shadow-2xl` | Floating elements, popovers |

```jsx
// ✅ Correct
<div style={{ boxShadow: 'var(--shadow-md)' }} className="card">
  Content
</div>

// ❌ Avoid
<div style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>Content</div>
```

---

## 🔲 **Border Radius Scale**

```css
--radius-none:   0          /* Sharp corners */
--radius-sm:     4px        /* Subtle rounding */
--radius-md:     8px        /* Default (inputs, small buttons) */
--radius-lg:     12px       /* Larger components */
--radius-xl:     16px       /* Cards, containers */
--radius-2xl:    24px       /* Large cards, sections */
--radius-full:   999px      /* Fully rounded (pills, circles) */
```

**Usage:**
```css
/* ✅ Correct */
.button { border-radius: var(--radius-full); }
.card { border-radius: var(--radius-xl); }
.input { border-radius: var(--radius-md); }

/* ❌ Avoid */
.button { border-radius: 999px; }
.card { border-radius: 16px; }
```

---

## ⏱️ **Motion & Animation System**

### **Durations (Standardized)**
```css
--duration-fast:    150ms   /* Quick feedback (hover, focus) */
--duration-base:    300ms   /* Default transitions */
--duration-slow:    500ms   /* Page transitions, reveals */
```

### **Easing Functions**
```css
--ease-in-out:   cubic-bezier(0.4, 0, 0.2, 1)    /* Smooth natural motion */
--ease-out:      cubic-bezier(0.0, 0, 0.2, 1)    /* Decelerating (entrance) */
--ease-in:       cubic-bezier(0.4, 0, 1, 1)      /* Accelerating (exit) */
--ease-elastic:  cubic-bezier(0.34, 1.56, 0.64, 1) /* Springy (playful) */
```

### **Animation Presets**
```css
/* Fade in (entrance) */
.fade-in {
  animation: fadeIn var(--duration-base) var(--ease-out) forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide up (entrance) */
.slide-up {
  animation: slideUp var(--duration-base) var(--ease-out) forwards;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(var(--space-lg)); }
  to { opacity: 1; transform: translateY(0); }
}

/* Scale (emphasis) */
.scale-in {
  animation: scaleIn var(--duration-base) var(--ease-out) forwards;
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
```

### **Transition Patterns**
```jsx
// ✅ Button hover (fast feedback)
<button style={{
  transition: 'all var(--duration-fast) var(--ease-in-out)',
  ':hover': { transform: 'translateY(-2px)' }
}}>
  Click me
</button>

// ✅ Card entrance (slow reveal)
<div style={{
  animation: 'slideUp var(--duration-slow) var(--ease-out) forwards'
}} className="card">
  Content
</div>

// ❌ Avoid: Inconsistent timing
<button style={{ transition: 'all 0.3s ease' }}>
  Click me
</button>
```

### **Motion Principles**
- **Hover/Focus:** Use `--duration-fast` (150ms) for immediate feedback
- **Page Entry:** Use `--duration-slow` (500ms) for elegant reveals
- **Dismissal:** Use `--ease-in` for quick exits
- **Entrance:** Use `--ease-out` for deceleration
- **Respect:** Always check `prefers-reduced-motion: reduce`

---

## 🎯 **Component Guidelines**

### **Buttons**
```jsx
// Primary (CTA, strong action)
<button className="btn-primary">Get Started</button>

// Outline (secondary action)
<button className="btn-outline">Learn More</button>

// States: hover, active, focus, disabled
// Hover: -2px translateY, enhanced shadow
// Active: (no translateY)
// Focus: 2px blue outline, 2px offset
// Disabled: opacity 0.5, cursor not-allowed
```

**CSS:**
```css
.btn-primary {
  padding: 12px var(--space-lg);
  border-radius: var(--radius-full);
  font-weight: 600;
  background: var(--color-primary-700);
  color: var(--color-text-inverse);
  box-shadow: 0 4px 12px rgba(3, 105, 161, 0.25);
  transition: all var(--duration-fast) var(--ease-in-out);
}

.btn-primary:hover:not(:disabled) {
  box-shadow: 0 8px 20px rgba(3, 105, 161, 0.35);
  transform: translateY(-2px);
}
```

### **Cards**
```jsx
<div className="card-base">
  <img src="..." alt="" />
  <h3>Title</h3>
  <p>Description</p>
</div>
```

**CSS:**
```css
.card-base {
  background: var(--color-bg-primary);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  transition: all var(--duration-base) var(--ease-in-out);
}

.card-base:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}
```

### **Forms**
```css
.input-field {
  padding: var(--space-md);
  border: 1px solid #e5e5e5;
  border-radius: var(--radius-md);
  font-size: var(--font-size-body);
  transition: border-color var(--duration-fast) var(--ease-in-out);
}

.input-field:focus {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px rgba(14, 105, 233, 0.1);
}
```

---

## 📱 **Responsive Design**

### **Breakpoints**
```css
@media (max-width: 1024px) {
  /* Large tablets, small desktops */
}

@media (max-width: 768px) {
  /* Tablets */
}

@media (max-width: 640px) {
  /* Mobile */
}
```

### **Responsive Typography**
Use `clamp()` for fluid scaling:

```css
/* ✅ Correct: scales fluidly between min and max */
font-size: clamp(28px, 4vw, 44px);

/* ❌ Avoid: fixed sizes */
font-size: 44px;
```

### **Responsive Spacing**
```css
/* ✅ Correct: scales with viewport */
padding: clamp(var(--space-lg), 3vw, var(--space-xl));

/* ❌ Avoid: fixed padding */
padding: 24px;
```

---

## ♿ **Accessibility**

### **Color Contrast**
- Primary text on light: ✅ WCAG AAA (contrast ratio > 7:1)
- Secondary text on light: ✅ WCAG AA (contrast ratio > 4.5:1)
- Text on primary color: ✅ White (contrast ratio > 12:1)

### **Focus States**
```css
/* ✅ Always provide visible focus indicators */
:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

/* ❌ Never remove outlines */
/* *:focus { outline: none; } */
```

### **Motion Sensitivity**
```css
/* ✅ Always respect user preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

### **ARIA Labels**
```jsx
// ✅ Correct
<button aria-label="Close dialog">✕</button>
<nav aria-label="Main navigation">...</nav>

// ❌ Avoid
<button>✕</button>
<div>...</div>
```

---

## 🚀 **Performance Checklist**

- [ ] Use CSS variables (avoid inline styles)
- [ ] Lazy load images (add `loading="lazy"`)
- [ ] Optimize images (use WebP with fallbacks)
- [ ] Minimize animations (150-500ms, not constantly)
- [ ] Use `will-change` sparingly on animated elements
- [ ] Prefer transforms over layout shifts
- [ ] Limit shadow depth (max 2-3 levels in view)
- [ ] Use `prefers-reduced-motion` media query

---

## 📋 **Naming Conventions**

### **CSS Classes**
```css
/* ✅ BEM-style naming */
.card { }
.card--featured { }
.card__title { }
.card__image { }

/* ✅ Semantic utilities */
.is-visible { }
.is-loading { }
.is-disabled { }
.has-error { }
```

### **CSS Variables**
```css
/* ✅ Descriptive, semantic names */
--color-primary-700
--shadow-lg
--space-md
--duration-base
--ease-in-out

/* ❌ Avoid generic names */
--color-blue
--shadow-big
--space-m
```

---

## 🔄 **Migration Guide (Old → New)**

| Old | New | Reason |
|-----|-----|--------|
| `padding: 24px` | `padding: var(--space-lg)` | Consistency |
| `color: #1d4ed8` | `color: var(--color-primary-700)` | Theming |
| `box-shadow: 0 12px 28px rgba(...)` | `box-shadow: var(--shadow-md)` | Standardized |
| `border-radius: 999px` | `border-radius: var(--radius-full)` | Predictability |
| `transition: all 0.3s ease` | `transition: all var(--duration-base) var(--ease-in-out)` | Consistency |

---

## 💾 **Files Updated**

✅ `src/index.css` - Core design system & base styles
✅ `src/App.js` - Removed inline padding hacks
✅ All future components should use variables

---

## 📞 **Questions?**

Refer to individual component files or this guide when building new features.

