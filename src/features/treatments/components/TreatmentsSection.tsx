import React from 'react';
import { ArrowRight, Check, Sparkles, Smile, ShieldCheck, Clock } from 'lucide-react';
import { TREATMENTS_DATA } from '../data/treatments.data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';

interface TreatmentsSectionProps {
  onSelectTreatment: (treatmentName: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ onSelectTreatment }) => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'implants':
        return <Sparkles className="w-5 h-5 text-action-green" />;
      case 'cosmetics':
        return <Smile className="w-5 h-5 text-action-green" />;
      case 'orthodontics':
        return <Smile className="w-5 h-5 text-action-green" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-action-green" />;
    }
  };

  return (
    <section id="treatments" className="py-12 sm:py-16 bg-surface" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          label="Comprehensive Services"
          title="Complete dental care under one roof."
          subtitle="Specialized implantology, restorative care, and aesthetic cosmetics tailored to your comfort and long-term oral health in Galle."
        />

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TREATMENTS_DATA.map((treatment) => (
            <div
              key={treatment.id}
              className={`clinical-card flex flex-col justify-between p-6 sm:p-7 relative transition-all duration-200 ${
                treatment.isPopular
                  ? 'ring-2 ring-action-green/40 shadow-md bg-gradient-to-b from-white to-emerald-50/30'
                  : 'bg-white'
              }`}
            >
              <div>
                {/* Header row with icon & badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    {getIcon(treatment.category)}
                  </div>
                  {treatment.isPopular && (
                    <Badge variant="mint" className="font-bold text-[11px]">
                      Most Requested
                    </Badge>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold font-headline text-charcoal mb-2.5">
                  {treatment.title}
                </h3>
                <p className="text-xs sm:text-sm text-body-neutral leading-relaxed mb-6 font-body">
                  {treatment.shortDesc}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8">
                  {treatment.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                      <Check className="w-4 h-4 text-action-green shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-border-crisp flex items-center justify-between">
                <span className="text-xs text-body-neutral font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{treatment.durationEstimate}</span>
                </span>
                <button
                  type="button"
                  onClick={() => onSelectTreatment(treatment.title)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-action-green hover:text-action-hover transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-green rounded-md px-1 py-0.5"
                >
                  <span>Book Visit</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance prompt at bottom */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-body-neutral">
            Need an urgent dental consultation or unclear which treatment is right for you?{' '}
            <button
              type="button"
              onClick={() => onSelectTreatment('General Consultation')}
              className="text-action-green font-bold underline hover:text-action-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-green rounded px-1"
            >
              Speak with Dr. Malinda directly
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};
