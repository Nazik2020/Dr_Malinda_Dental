import React from 'react';
import { HeartPulse, Cpu, ShieldCheck, DollarSign } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <HeartPulse className="w-5 h-5 text-action-green" />,
      title: 'Painless & Gentle Care',
      description:
        'Advanced gentle anesthesia techniques and a serene clinical setting designed specifically to eliminate dental anxiety and patient tension.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-action-green" />,
      title: '3D Digital Precision',
      description:
        'Equipped with 3D Cone Beam diagnostics, digital intraoral scanners, and computer-guided implant planning for millimeter accuracy.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-action-green" />,
      title: 'Hospital-Grade Hygiene',
      description:
        'Class-B vacuum autoclave sterilization and single-use protective barriers adhering strictly to European medical hygiene standards.',
    },
    {
      icon: <DollarSign className="w-5 h-5 text-action-green" />,
      title: 'Transparent Treatment Costs',
      description:
        'Clear, itemized treatment plans and fixed quotes provided before starting any procedure. Convenient stage-by-stage payments with no hidden fees.',
    },
  ];

  return (
    <section id="why-us" className="py-12 sm:py-16 bg-surface" aria-labelledby="why-us-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="The Clinic Difference"
          title="Why patients choose our practice"
          subtitle="Integrated dental care focused on gentle delivery, surgical excellence, and complete transparency in Karapitiya, Galle."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="clinical-card p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-300 transition-all duration-200 shadow-ambient"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5 shadow-subtle">
                  {reason.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold font-headline text-charcoal mb-2.5">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-body-neutral leading-relaxed">
                  {reason.description}
                </p>
              </div>

              <div className="mt-6 pt-3.5 border-t border-border-crisp flex items-center justify-between text-xs font-semibold text-action-green">
                <span className="bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                  Standard 0{idx + 1}
                </span>
                <span className="text-[11px] text-slate-400 font-normal">Verified Protocol</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
