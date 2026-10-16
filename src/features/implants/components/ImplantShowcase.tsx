import React from 'react';
import { Calendar, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react';
import { IMPLANT_JOURNEY_STEPS } from '@/features/treatments/data/treatments.data';
import { Button } from '@/components/ui/Button';

interface ImplantShowcaseProps {
  onOpenBooking: (category?: string) => void;
}

export const ImplantShowcase: React.FC<ImplantShowcaseProps> = ({ onOpenBooking }) => {
  return (
    <section id="implants" className="py-14 sm:py-20 bg-slate-950 text-white relative overflow-hidden" aria-labelledby="implants-heading">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-950/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-950/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Surgical Implant Center</span>
          </div>

          <h2 id="implants-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold font-headline text-white tracking-tight leading-tight">
            Replace missing teeth with lifelong precision.
          </h2>

          <div className="text-sm sm:text-base text-slate-300 leading-relaxed font-body pl-4 border-l-2 border-emerald-500 my-6">
            <p>
              “Dental implantology requires precision and dedication. Our practice provides computer-guided 3D implantology to deliver permanent, aesthetically pleasing tooth replacements for life.”
            </p>
            <span className="block mt-2 text-xs sm:text-sm font-semibold text-emerald-400">
              — Dr. Malinda Ekanayaka (Lead Dental Surgeon & Implantologist)
            </span>
          </div>
        </div>

        {/* 5-Step Journey Header */}
        <div className="mt-10 mb-6">
          <h3 className="text-lg sm:text-xl font-bold font-headline text-white flex items-center gap-2">
            <span>Your 5-Step Journey at our Clinic in Galle</span>
            <ChevronRight className="w-5 h-5 text-emerald-400" />
          </h3>
        </div>

        {/* 5 Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {IMPLANT_JOURNEY_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:bg-slate-900 hover:border-emerald-500/50 transition-all duration-200 flex flex-col justify-between shadow-ambient"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="w-8 h-8 rounded-full bg-action-green text-white font-bold text-xs flex items-center justify-center shadow-sm">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-300 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-800/60">
                    {step.timeline}
                  </span>
                </div>

                <h4 className="text-base font-bold font-headline text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{step.details}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/70 border border-emerald-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 shadow-dark-ambient">
          <div>
            <h4 className="text-lg sm:text-xl font-bold font-headline text-white">
              Wondering if you are a candidate for dental implants?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">
              Book a dedicated diagnostic consultation in Galle to inspect bone density, explore treatment alternatives, and receive clear stage-by-stage estimates.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={() => onOpenBooking('Dental Implants')}
            className="shrink-0 w-full sm:w-auto justify-center whitespace-nowrap shadow-md font-bold py-3 sm:py-3.5 px-5 sm:px-7 text-sm sm:text-base"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Book an Implant Consultation</span>
            <span className="sm:hidden">Book Implant Consultation</span>
          </Button>
        </div>

      </div>
    </section>
  );
};
