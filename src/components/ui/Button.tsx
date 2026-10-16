import React from 'react';
import { cn } from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'highlight' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 select-none';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm sm:text-base px-6 py-2.5 sm:py-3 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  };

  const variantStyles = {
    // Action Green (#047857) with pure crisp white text & emerald glow
    primary:
      'bg-action-green text-white hover:bg-action-hover shadow-sm hover:shadow-md hover:shadow-emerald-900/15 focus-visible:ring-action-green',
    // Warm Amber (#D97706) with crisp white text (WCAG AA compliant contrast)
    highlight:
      'bg-accent-yellow text-white hover:bg-amber-700 shadow-sm hover:shadow-md hover:shadow-amber-900/15 focus-visible:ring-accent-yellow',
    // Ghost secondary with subtle border & hover fill
    ghost:
      'bg-white text-charcoal border border-border-crisp hover:bg-surface-container hover:border-slate-300 shadow-subtle focus-visible:ring-action-green',
    // Dark section contrast button with glass effect
    dark:
      'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30 backdrop-blur-sm focus-visible:ring-white',
  };

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
