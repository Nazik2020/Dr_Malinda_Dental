import React from 'react';
import { CLINIC_FACILITIES } from '@/features/treatments/data/treatments.data';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const PracticeGallery: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-surface" aria-labelledby="facility-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="Our Facility"
          title="Inside the modern practice"
          subtitle="Designed to maximize patient comfort and surgical precision with hospital-level hygiene protocols in Karapitiya, Galle."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLINIC_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="clinical-card overflow-hidden group bg-white flex flex-col shadow-ambient"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                <img
                  src={facility.imageUrl}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold font-headline text-base text-charcoal mb-1">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-body-neutral leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
