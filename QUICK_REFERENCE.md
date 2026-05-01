# Design System Quick Reference Card

Print this or bookmark for daily use.

## 🎨 Colors (Copy-Paste)

```css
/* Primary Actions */
color: var(--color-primary-700);      /* Buttons, links */
background: var(--color-primary-700); /* CTAs */
border: 1px solid var(--color-primary-200);  /* Input borders */

/* Text */
color: var(--color-text-primary);   /* Headings, body */
color: var(--color-text-secondary); /* Subtitles, captions */
color: var(--color-text-tertiary);  /* Disabled, hints */

/* Backgrounds */
background: var(--color-bg-primary);   /* White */
background: var(--color-bg-secondary); /* Off-white */
background: var(--color-bg-tertiary);  /* Light gray */

/* Semantic */
color: var(--color-success);   /* Success messages */
color: var(--color-error);     /* Error messages */
color: var(--color-warning);   /* Warnings */
```

---

## 📏 Spacing (8px Grid)

```css
/* Use these in order of frequency */
padding: var(--space-md);        /* 16px - Default padding */
margin-bottom: var(--space-lg);  /* 24px - Section gaps */
gap: var(--space-lg);            /* 24px - Grid gaps */

/* Others */
var(--space-xs)   /* 4px  - Micro spacing */
var(--space-sm)   /* 8px  - Small gaps */
var(--space-md)   /* 16px - Default */
var(--space-lg)   /* 24px - Common */
var(--space-xl)   /* 32px - Large */
var(--space-2xl)  /* 48px - Bigger */
var(--space-3xl)  /* 64px - Hero */
var(--space-4xl)  /* 96px - Full screen */
```

---

## 🔤 Typography

```css
/* Font */
font-family: var(--font-family-base);  /* Always */

/* Sizes (responsive with clamp) */
h1: var(--font-size-h1);      /* clamp(48px, 6vw, 56px) */
h2: var(--font-size-h2);      /* clamp(36px, 5vw, 44px) */
h3: var(--font-size-h3);      /* clamp(28px, 4vw, 32px) */
h4: var(--font-size-h4);      /* 24px */
body: var(--font-size-body);  /* 16px */
small: var(--font-size-sm);   /* 14px */
tiny: var(--font-size-xs);    /* 12px */

/* Line Height */
h1-h4: var(--line-height-tight);  /* 1.1-1.3 */
body: var(--line-height-normal);  /* 1.6 */
```

---

## 🪄 Shadows (Elevation)

```css
box-shadow: var(--shadow-none);   /* Flat */
box-shadow: var(--shadow-sm);     /* Subtle */
box-shadow: var(--shadow-md);     /* Default cards */
box-shadow: var(--shadow-lg);     /* Hovered cards */
box-shadow: var(--shadow-xl);     /* Modals/dropdowns */
box-shadow: var(--shadow-2xl);    /* Floating */
```

---

## 🔲 Border Radius

```css
border-radius: var(--radius-none);   /* 0px - Sharp */
border-radius: var(--radius-sm);     /* 4px - Subtle */
border-radius: var(--radius-md);     /* 8px - Inputs */
border-radius: var(--radius-lg);     /* 12px - Components */
border-radius: var(--radius-xl);     /* 16px - Cards */
border-radius: var(--radius-2xl);    /* 24px - Large cards */
border-radius: var(--radius-full);   /* 999px - Pills/circles */
```

---

## ⏱️ Motion

```css
/* Durations */
transition: all var(--duration-fast) var(--ease-in-out);  /* 150ms - hover/focus */
transition: all var(--duration-base) var(--ease-in-out);  /* 300ms - standard */
transition: all var(--duration-slow) var(--ease-out);     /* 500ms - entrance */

/* Easing */
--ease-in-out:   /* Smooth, natural (default) */
--ease-out:      /* Deceleration (entrance) */
--ease-in:       /* Acceleration (exit) */
--ease-elastic:  /* Springy */

/* Common Pattern */
transition: all var(--duration-base) var(--ease-in-out);
```

---

## 🎯 Component Patterns

### Buttons
```css
.btn-primary {
  background: var(--color-primary-700);
  color: white;
  padding: 12px var(--space-lg);
  border-radius: var(--radius-full);
  box-shadow: 0 4px 12px rgba(3, 105, 161, 0.25);
  transition: all var(--duration-fast) var(--ease-in-out);
}

.btn-primary:hover {
  box-shadow: 0 8px 20px rgba(3, 105, 161, 0.35);
  transform: translateY(-2px);
}
```

### Cards
```css
.card {
  background: var(--color-bg-primary);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  transition: all var(--duration-base) var(--ease-in-out);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}
```

### Form Inputs
```css
input, textarea {
  padding: var(--space-md);
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: var(--radius-md);
  font-size: var(--font-size-body);
  transition: all var(--duration-fast) var(--ease-in-out);
}

input:focus {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px rgba(14, 105, 233, 0.1);
}
```

---

## 📱 Responsive

```css
/* Use clamp() for fluid scaling */
font-size: clamp(28px, 4vw, 44px);
padding: clamp(var(--space-md), 3vw, var(--space-xl));

/* Breakpoints */
@media (max-width: 768px) { /* Tablets */ }
@media (max-width: 640px) { /* Mobile */ }
```

---

## ♿ Accessibility

```css
/* Always provide visible focus */
:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

/* Respect motion preferences */
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; }
}
```

---

## 🚫 Anti-Patterns (Avoid)

```css
/* ❌ Don't use hardcoded values */
color: #1d4ed8;                  /* Use --color-primary-700 */
padding: 24px;                   /* Use var(--space-lg) */
box-shadow: 0 4px 6px ...;       /* Use var(--shadow-md) */
border-radius: 16px;             /* Use var(--radius-xl) */
transition: 300ms ease;          /* Use var(--duration-base) var(--ease-in-out) */

/* ❌ Don't use old color names */
color: var(--blue-700);          /* Use --color-primary-700 */
background: var(--bg-50);        /* Use --color-bg-secondary */

/* ❌ Don't use inline styles for layout */
style={{ paddingTop: "80px" }}   /* Use CSS padding/margin-top */
style={{ fontSize: "24px" }}     /* Use var(--font-size-h4) */
```

---

## 📚 Where to Find More

- **Full System:** See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
- **Implementation:** See [IMPLEMENTATION_ROADMAP.md](./IMPLEMENTATION_ROADMAP.md)
- **Components:** See [src/components/ComponentExamples.jsx](./src/components/ComponentExamples.jsx)
- **CSS Variables:** Line 1-120 in [src/index.css](./src/index.css)

---

**TL;DR: Always use CSS variables. Never hardcode colors, spacing, shadows, or timing.**
