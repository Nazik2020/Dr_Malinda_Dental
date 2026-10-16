import React from 'react';
import { Calendar, Award, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { CLINIC_CONFIG } from '@/config/clinic.config';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

interface DoctorProfileProps {
  onOpenBooking: () => void;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-white border-b border-border-crisp" aria-labelledby="doctor-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Doctor Portrait Image Card */}
          <div className="lg:col-span-5">
            <div className="relative clinical-card overflow-hidden shadow-ambient">
              <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Malinda Ekanayaka, Lead Dental Surgeon and Implantologist in Galle"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Lower Badge Info */}
              <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <h3 className="font-bold font-headline text-base sm:text-lg text-white">
                    {CLINIC_CONFIG.doctor.name}
                  </h3>
                  <p className="text-xs text-emerald-400 font-medium">
                    {CLINIC_CONFIG.doctor.credentials}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-action-green flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Award className="w-5 h-5 text-emerald-200" />
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Bio and Clinical Philosophy */}
          <div className="lg:col-span-7">
            <SectionHeading
              label="Clinical Leadership"
              title={`Meet ${CLINIC_CONFIG.doctor.name}`}
              subtitle={`${CLINIC_CONFIG.doctor.role} • 15+ Years Dedicated to Oral Health & Smile Aesthetics`}
            />

            <div className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed italic bg-emerald-50/70 p-5 rounded-2xl border border-emerald-100 mb-6">
              {CLINIC_CONFIG.doctor.personalNote}
            </div>

            <p className="text-xs sm:text-sm text-body-neutral leading-relaxed mb-6 font-body">
              Dr. Malinda has spent over a decade advancing modern surgical implantology and aesthetic cosmetic dentistry across premier healthcare institutions. He is passionate about eliminating dental anxiety and delivering natural, enduring results for patients across the Southern Province and international visitors.
            </p>

            {/* Credential Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="clinical-card p-4 sm:p-5 flex items-start gap-3.5 bg-surface">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-action-green shrink-0 border border-emerald-100">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-charcoal mb-1">
                    UK & Europe Trained
                  </h4>
                  <p className="text-[11px] sm:text-xs text-body-neutral leading-relaxed">
                    Advanced certifications in bone augmentation, sinus lifts, and 3D computer-guided implantology.
                  </p>
                </div>
              </div>

              <div className="clinical-card p-4 sm:p-5 flex items-start gap-3.5 bg-surface">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-action-green shrink-0 border border-emerald-100">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-charcoal mb-1">
                    Digital Precision Suite
                  </h4>
                  <p className="text-[11px] sm:text-xs text-body-neutral leading-relaxed">
                    Equipped with in-house 3D Cone Beam diagnostics for sub-millimeter surgical accuracy.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4 pt-1">
              <Button
                variant="primary"
                size="md"
                onClick={onOpenBooking}
                className="w-full sm:w-auto justify-center whitespace-nowrap shadow-sm hover:shadow-md font-bold px-6 py-3"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span className="hidden sm:inline">Book Consultation with Dr. Malinda</span>
                <span className="sm:hidden">Book Consultation</span>
              </Button>

              <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100/90 px-3.5 py-2.5 rounded-full border border-slate-200 shadow-2xs whitespace-normal sm:whitespace-nowrap">
                <HeartHandshake className="w-4 h-4 text-action-green shrink-0" />
                <span className="hidden sm:inline">Gentle, anxiety-free bedside manner guaranteed</span>
                <span className="sm:hidden">Gentle, anxiety-free bedside manner</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
