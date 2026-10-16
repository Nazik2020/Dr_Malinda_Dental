import React from 'react';
import { Star, Award, Users, Clock } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 fill-amber-500 shrink-0" />,
      value: '4.9',
      label: 'on Google (250+ reviews)',
    },
    {
      icon: <Award className="w-4 h-4 sm:w-5 sm:h-5 text-action-green shrink-0" />,
      value: '15+ Years',
      label: 'Clinical Experience',
    },
    {
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 text-action-green shrink-0" />,
      value: '11,000+',
      label: 'Facebook Community',
    },
    {
      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-action-green shrink-0" />,
      value: '8:00 PM',
      label: 'Open Late for Convenience',
    },
  ];

  return (
    <section className="border-y border-slate-200/80 bg-slate-100/80 py-4 sm:py-6" aria-label="Clinical Metrics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-2.5 sm:gap-3.5 p-1 sm:p-0"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-subtle">
                {stat.icon}
              </div>
              <div className="min-w-0">
                <div className="text-base sm:text-xl font-bold font-headline text-charcoal tracking-tight leading-none truncate">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 sm:mt-1 truncate">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
