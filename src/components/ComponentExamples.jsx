// ============================================================================
// IMPROVED COMPONENT EXAMPLES - Following Design System
// ============================================================================
// Copy these patterns to your components for consistency, accessibility, and
// premium feel. This file demonstrates best practices for buttons, cards, forms,
// and common UI patterns.

import React from 'react';

// ============================================================================
// 1. PREMIUM BUTTON COMPONENT (Replaceable)
// ============================================================================

export const Button = ({ 
  children, 
  variant = 'primary',  // 'primary' | 'outline' | 'ghost'
  size = 'md',          // 'sm' | 'md' | 'lg'
  disabled = false,
  icon,
  className = '',
  ...props 
}) => {
  const baseClasses = 'btn-base';
  const variantClasses = `btn-${variant}`;
  const sizeClasses = `btn-${size}`;
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
};

// CSS for Button component
const ButtonCSS = `
.btn-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  font-weight: 600;
  border: 1px solid transparent;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-in-out);
  font-family: inherit;
  white-space: nowrap;
}

/* Sizes */
.btn-sm {
  padding: 8px 16px;
  font-size: var(--font-size-sm);
}

.btn-md {
  padding: 12px 24px;
  font-size: var(--font-size-sm);
}

.btn-lg {
  padding: 14px 32px;
  font-size: var(--font-size-body);
}

/* Variants */
.btn-primary {
  background: var(--color-primary-700);
  color: var(--color-text-inverse);
  box-shadow: 0 4px 12px rgba(3, 105, 161, 0.25);
}

.btn-primary:hover:not(:disabled) {
  background: var(--color-primary-800);
  box-shadow: 0 8px 20px rgba(3, 105, 161, 0.35);
  transform: translateY(-2px);
}

.btn-primary:active:not(:disabled) {
  transform: translateY(0);
}

.btn-outline {
  background: var(--color-bg-primary);
  color: var(--color-primary-700);
  border-color: var(--color-primary-200);
}

.btn-outline:hover:not(:disabled) {
  background: var(--color-primary-50);
  border-color: var(--color-primary-300);
  transform: translateY(-2px);
}

.btn-ghost {
  background: transparent;
  color: var(--color-text-primary);
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.btn-ghost:hover:not(:disabled) {
  background: var(--color-bg-tertiary);
  transform: translateY(-1px);
}

/* States */
.btn-base:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-base:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

.btn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.2em;
  height: 1.2em;
}
`;

// ============================================================================
// 2. PREMIUM CARD COMPONENT
// ============================================================================

export const Card = ({ 
  children, 
  elevated = false,
  interactive = false,
  className = '',
  onClick,
  ...props 
}) => {
  return (
    <div 
      className={`card-base ${interactive ? 'card--interactive' : ''} ${elevated ? 'card--elevated' : ''} ${className}`}
      onClick={onClick}
      role={interactive ? 'button' : 'article'}
      tabIndex={interactive ? 0 : -1}
      onKeyPress={interactive ? (e) => e.key === 'Enter' && onClick?.(e) : undefined}
      {...props}
    >
      {children}
    </div>
  );
};

// CSS for Card
const CardCSS = `
.card-base {
  background: var(--color-bg-primary);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: all var(--duration-base) var(--ease-in-out);
}

.card--interactive {
  cursor: pointer;
}

.card--interactive:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
  border-color: rgba(0, 0, 0, 0.1);
}

.card--elevated {
  box-shadow: var(--shadow-lg);
}

.card-base:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}
`;

// ============================================================================
// 3. FORM INPUT COMPONENT (Accessible)
// ============================================================================

export const Input = ({ 
  label, 
  error, 
  hint,
  required = false,
  ...props 
}) => {
  const id = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="form-group">
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
          {required && <span className="form-required" aria-label="required">*</span>}
        </label>
      )}
      <input 
        id={id}
        className={`form-input ${error ? 'form-input--error' : ''}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        {...props}
      />
      {error && <span id={`${id}-error`} className="form-error">{error}</span>}
      {hint && !error && <span id={`${id}-hint`} className="form-hint">{hint}</span>}
    </div>
  );
};

// CSS for Input
const InputCSS = `
.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  margin-bottom: var(--space-lg);
}

.form-label {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-primary);
}

.form-required {
  color: var(--color-error);
  margin-left: 2px;
}

.form-input {
  padding: var(--space-md);
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: var(--radius-md);
  font-size: var(--font-size-body);
  font-family: inherit;
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  transition: all var(--duration-fast) var(--ease-in-out);
}

.form-input:focus {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px rgba(14, 105, 233, 0.1);
  background: var(--color-bg-primary);
}

.form-input--error {
  border-color: var(--color-error);
}

.form-input--error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.form-error {
  font-size: var(--font-size-sm);
  color: var(--color-error);
  font-weight: 500;
}

.form-hint {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
}
`;

// ============================================================================
// 4. BADGE/LABEL COMPONENT
// ============================================================================

export const Badge = ({ 
  children, 
  variant = 'primary',  // 'primary' | 'success' | 'warning' | 'error'
  size = 'sm',          // 'sm' | 'md'
  className = '',
  ...props 
}) => {
  return (
    <span 
      className={`badge badge-${variant} badge-${size} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

// CSS for Badge
const BadgeCSS = `
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: var(--radius-full);
  white-space: nowrap;
}

.badge-sm {
  padding: var(--space-xs) var(--space-sm);
  font-size: var(--font-size-xs);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.badge-md {
  padding: var(--space-sm) var(--space-md);
  font-size: var(--font-size-sm);
}

.badge-primary {
  background: var(--color-primary-100);
  color: var(--color-primary-700);
}

.badge-success {
  background: rgba(16, 185, 129, 0.1);
  color: var(--color-success);
}

.badge-warning {
  background: rgba(245, 158, 11, 0.1);
  color: var(--color-warning);
}

.badge-error {
  background: rgba(239, 68, 68, 0.1);
  color: var(--color-error);
}
`;

// ============================================================================
// 5. GRID LAYOUT COMPONENT
// ============================================================================

export const Grid = ({ 
  children, 
  cols = 3,
  gap = 'lg',
  className = '',
  ...props 
}) => {
  const gapValue = `var(--space-${gap})`;
  return (
    <div 
      className={`grid grid-cols-${cols} gap-${gap} ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(calc(100% / ${cols}), 1fr))`,
        gap: gapValue
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// ============================================================================
// 6. STACK LAYOUT COMPONENT (Flexbox with consistent spacing)
// ============================================================================

export const Stack = ({ 
  children, 
  direction = 'column',
  gap = 'md',
  align = 'stretch',
  justify = 'flex-start',
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`stack ${className}`}
      style={{
        display: 'flex',
        flexDirection: direction,
        gap: `var(--space-${gap})`,
        alignItems: align,
        justifyContent: justify
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// ============================================================================
// 7. RESPONSIVE CONTAINER
// ============================================================================

export const Container = ({ 
  children, 
  size = 'md',  // 'sm' | 'md' | 'lg' | 'xl'
  className = '',
  ...props 
}) => {
  const maxWidths = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  };
  
  return (
    <div 
      className={`container container-${size} ${className}`}
      style={{
        maxWidth: maxWidths[size],
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 'clamp(var(--space-md), 3vw, var(--space-xl))',
        paddingRight: 'clamp(var(--space-md), 3vw, var(--space-xl))',
        width: '100%'
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// ============================================================================
// 8. ANIMATION UTILITIES (Entrance animations)
// ============================================================================

export const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 'base',
  ...props 
}) => {
  return (
    <div 
      style={{
        animation: `fadeIn var(--duration-${duration}) var(--ease-out) forwards`,
        animationDelay: `${delay}ms`,
        opacity: 0  // Initial state before animation
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const SlideUp = ({ 
  children, 
  delay = 0, 
  duration = 'base',
  ...props 
}) => {
  return (
    <div 
      style={{
        animation: `slideUp var(--duration-${duration}) var(--ease-out) forwards`,
        animationDelay: `${delay}ms`,
        opacity: 0,  // Initial state before animation
        transform: 'translateY(var(--space-lg))'
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// ============================================================================
// USAGE EXAMPLES
// ============================================================================

export const ComponentShowcase = () => {
  return (
    <div style={{ padding: 'var(--space-2xl)' }}>
      {/* Buttons */}
      <h2>Buttons</h2>
      <Stack direction="row" gap="md">
        <Button variant="primary">Primary Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        <Button variant="primary" disabled>Disabled</Button>
      </Stack>

      {/* Cards */}
      <h2 style={{ marginTop: 'var(--space-2xl)' }}>Cards</h2>
      <Card interactive elevated>
        <img src="/" alt="" style={{ width: '100%', height: '200px', background: '#f0f0f0' }} />
        <div style={{ padding: 'var(--space-lg)' }}>
          <h3 style={{ marginTop: 0 }}>Card Title</h3>
          <p>Card description with premium shadow and hover lift.</p>
          <Button variant="primary" size="sm">Learn More</Button>
        </div>
      </Card>

      {/* Form */}
      <h2 style={{ marginTop: 'var(--space-2xl)' }}>Forms</h2>
      <div style={{ maxWidth: '400px' }}>
        <Input 
          label="Email" 
          type="email" 
          placeholder="you@example.com"
          hint="We'll never share your email"
          required
        />
        <Input 
          label="Password" 
          type="password" 
          required
        />
      </div>

      {/* Badges */}
      <h2 style={{ marginTop: 'var(--space-2xl)' }}>Badges</h2>
      <Stack direction="row" gap="md">
        <Badge variant="primary">New</Badge>
        <Badge variant="success">Active</Badge>
        <Badge variant="warning">Pending</Badge>
        <Badge variant="error">Failed</Badge>
      </Stack>

      {/* Animations */}
      <h2 style={{ marginTop: 'var(--space-2xl)' }}>Animations</h2>
      <SlideUp delay={0}>
        <Card>
          <div style={{ padding: 'var(--space-lg)', textAlign: 'center' }}>
            <p>This card slides up on entrance</p>
          </div>
        </Card>
      </SlideUp>
    </div>
  );
};

export default ComponentShowcase;
