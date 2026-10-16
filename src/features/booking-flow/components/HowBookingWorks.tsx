import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const HowBookingWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Select Treatment',
      desc: 'Choose your desired service—from routine dental exams and fillings to 3D dental implants and cosmetic makeovers.',
    },
    {
      num: '02',
      title: 'Choose Convenient Time',
      desc: 'Pick your preferred date and convenient time window. Our clinical team coordinates to ensure zero waiting time.',
    },
    {
      num: '03',
      title: 'Visit Practice in Galle',
      desc: 'Arrive at our Karapitiya practice. Enjoy stress-free parking, calming hospitality, and gentle precision care.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-border-crisp" aria-labelledby="booking-steps-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="Easy Scheduling"
          title="How booking works"
          subtitle="Three simple steps to secure your dedicated consultation slot."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {steps.map((s, idx) => (
            <div
              key={s.num}
              className="clinical-card p-6 sm:p-7 bg-surface/50 hover:bg-white flex flex-col items-start border-slate-200/80 shadow-ambient relative transition-all duration-200"
            >
              <div className="flex items-center justify-between w-full mb-5">
                <span className="w-10 h-10 rounded-xl bg-action-green text-white font-bold text-sm flex items-center justify-center shadow-sm">
                  {s.num}
                </span>
                <span className="text-xs font-semibold text-slate-400">Step {idx + 1} of 3</span>
              </div>
              <h3 className="font-bold font-headline text-base sm:text-lg text-charcoal mb-2">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-body-neutral leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
