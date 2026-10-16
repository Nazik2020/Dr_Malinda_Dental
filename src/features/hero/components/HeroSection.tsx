import React from 'react';
import { ArrowRight, MessageSquare, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-10 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clinical Authority & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-action-green shrink-0" />
              <span>Open today until 8 PM • Karapitiya, Galle</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold font-headline text-charcoal leading-[1.18] tracking-tight">
              Advanced dental care and implants in Galle.
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-body-neutral leading-relaxed max-w-2xl font-body">
              15+ years of experience in general, cosmetic and implant dentistry, with gentle care and clear explanations. Centre for Modern Dentistry.
            </p>

            {/* CTAs - Full-width stacked on mobile, row on tablet/desktop */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenBooking}
                className="w-full sm:w-auto justify-center shadow-sm hover:shadow-md font-bold py-3.5 px-7"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <a
                href="https://wa.me/94773168887?text=Hello%20Dr.%20Malinda%20Dental%20Clinic,%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-emerald-300/80 bg-white hover:bg-emerald-50/50 text-slate-800 text-sm sm:text-base font-semibold shadow-subtle transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-green"
              >
                <MessageSquare className="w-4 h-4 text-action-green shrink-0" />
                <span>Or WhatsApp 077 316 8887</span>
              </a>
            </div>

            {/* Trust Indicators & Review Rating Bar */}
            <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-border-crisp flex flex-wrap items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-amber-500" />
                  ))}
                </div>
                <div className="text-xs sm:text-sm font-bold text-charcoal">
                  4.9 <span className="font-normal text-slate-500">· 250+ Google reviews</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-action-green shrink-0" />
                <span>Verified Care</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Photographic Architecture Card (Without orange vertical bar) */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="clinical-card overflow-hidden group shadow-ambient">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                  alt="Dr. Malinda Ekanayaka Dental & Cosmetics Practice in Karapitiya, Galle"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  loading="eager"
                />
                
                {/* Visual architectural badge pill on image */}
                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-action-green shadow-sm border border-slate-200/80 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-action-green shrink-0" />
                  <span>Accepting New Patients</span>
                </div>
              </div>

              {/* Lower Overlay Card Meta matching reference */}
              <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold font-headline text-white truncate">
                    Modern Private Practice
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5 truncate">
                    Karapitiya, Galle • Free Parking on Premise
                  </p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-amber-400 shrink-0 border border-white/15">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
