import React from 'react';
import { Star, CheckCircle, ExternalLink, Quote } from 'lucide-react';
import { PATIENT_REVIEWS } from '@/features/treatments/data/treatments.data';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-12 sm:py-16 bg-white border-y border-border-crisp" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header row with rating summary on the right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <SectionHeading
            label="Patient Stories"
            title="Trusted by patients across the South"
            subtitle="Real experiences from Galle residents and international travelers who chose Dr. Malinda for dental health and restorations."
            className="mb-0"
          />

          <div className="clinical-card px-5 py-4 bg-surface flex items-center gap-4 shrink-0 self-start md:self-auto border-emerald-100 shadow-ambient">
            <div className="text-3xl font-bold font-headline text-charcoal">
              4.9
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-amber-500" />
                ))}
              </div>
              <p className="text-xs text-body-neutral font-medium mt-0.5">
                Based on 250+ Verified Reviews
              </p>
            </div>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PATIENT_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="clinical-card p-6 sm:p-7 flex flex-col justify-between bg-surface/40 hover:bg-white transition-all duration-200 shadow-ambient"
            >
              <div>
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-amber-500" />
                    ))}
                  </div>
                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle className="w-3 h-3 text-action-green" />
                      Verified Patient
                    </span>
                  )}
                </div>

                {/* Quote Text */}
                <div className="relative mb-6">
                  <Quote className="w-7 h-7 text-emerald-200/50 absolute -top-2.5 -left-1.5 -z-0" />
                  <p className="relative z-10 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                    "{rev.comment}"
                  </p>
                </div>
              </div>

              {/* Patient Meta */}
              <div className="pt-4 border-t border-border-crisp flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-charcoal">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-body-neutral">
                    {rev.location}
                  </p>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white border border-border-crisp text-action-green shadow-subtle">
                  {rev.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="mt-10 text-center">
          <a
            href="https://maps.google.com/?q=Karapitiya+Galle+Sri+Lanka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-action-green hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-green rounded-md px-2 py-1"
          >
            <span>Read all 120+ patient reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
