import React from 'react';
import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  isDark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = 'left',
  isDark = false,
  className,
}) => {
  return (
    <div
      className={cn(
        'mb-8 sm:mb-12',
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl',
        className
      )}
    >
      {label && (
        <div
          className={cn(
            'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3',
            isDark
              ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
              : 'bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-subtle'
          )}
        >
          <span
            className={cn(
              'w-1.5 h-1.5 rounded-full',
              isDark ? 'bg-emerald-400' : 'bg-emerald-600'
            )}
          />
          {label}
        </div>
      )}

      <h2
        className={cn(
          'text-2xl sm:text-3xl md:text-4xl font-bold font-headline tracking-tight leading-tight',
          isDark ? 'text-white' : 'text-charcoal'
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            'mt-3.5 text-sm sm:text-base leading-relaxed font-body',
            isDark ? 'text-slate-300' : 'text-body-neutral',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
