import React from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'mint' | 'yellow' | 'neutral' | 'dark' | 'amber';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'mint',
  className,
  icon,
}) => {
  const variants = {
    mint: 'bg-emerald-50 text-emerald-800 border border-emerald-200/80',
    yellow: 'bg-amber-50 text-amber-800 border border-amber-200/80',
    amber: 'bg-amber-50 text-amber-800 border border-amber-200/80',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200',
    dark: 'bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 backdrop-blur-sm',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide',
        variants[variant],
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
};
