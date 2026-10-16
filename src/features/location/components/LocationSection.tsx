import React from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2 } from 'lucide-react';
import { CLINIC_CONFIG } from '@/config/clinic.config';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-12 sm:py-16 bg-surface border-t border-border-crisp" aria-labelledby="location-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="Location & Accessibility"
          title="Easy to find in Karapitiya, Galle."
          subtitle="Conveniently located with hassle-free patient parking, easy road access, and proximity to central Galle transit."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Details Card */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Parking Banner */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/90 flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 shadow-subtle">
              <span className="w-7 h-7 rounded-lg bg-action-green flex items-center justify-center shrink-0 text-white font-bold text-xs shadow-sm">
                P
              </span>
              <span>Free dedicated patient parking directly in front of the clinic entrance.</span>
            </div>

            <div className="clinical-card p-6 sm:p-7 space-y-6 bg-white shadow-ambient">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-action-green shrink-0 border border-emerald-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal mb-0.5">Clinic Address</h4>
                  <p className="text-xs sm:text-sm text-body-neutral leading-relaxed">
                    {CLINIC_CONFIG.location.address}
                  </p>
                  <p className="text-xs text-action-green font-medium mt-1">
                    {CLINIC_CONFIG.location.landmark}
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-action-green shrink-0 border border-emerald-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal mb-0.5">Direct Telephones</h4>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs sm:text-sm font-semibold text-charcoal">
                    <a href={`tel:${CLINIC_CONFIG.contact.hotline.replace(/\s+/g, '')}`} className="hover:text-action-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-green rounded">
                      Hotline: {CLINIC_CONFIG.contact.hotline}
                    </a>
                    <a href={`tel:${CLINIC_CONFIG.contact.landline.replace(/\s+/g, '')}`} className="hover:text-action-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-green rounded">
                      Clinic: {CLINIC_CONFIG.contact.landline}
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-action-green shrink-0 border border-emerald-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal mb-0.5">Operating Hours</h4>
                  <p className="text-xs sm:text-sm text-body-neutral">
                    {CLINIC_CONFIG.hours.weekdays}
                  </p>
                  <p className="text-xs sm:text-sm text-body-neutral">
                    {CLINIC_CONFIG.hours.saturday}
                  </p>
                  <p className="text-xs text-action-green font-medium mt-0.5">
                    {CLINIC_CONFIG.hours.sunday}
                  </p>
                </div>
              </div>

              {/* Direction Button */}
              <div className="pt-2">
                <a
                  href={CLINIC_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-green rounded-full"
                >
                  <Button variant="primary" className="w-full justify-center shadow-sm">
                    <Navigation className="w-4 h-4 text-emerald-200" />
                    <span>Get Directions on Google Maps</span>
                  </Button>
                </a>
              </div>
            </div>

          </div>

          {/* Right Visual Map Card */}
          <div className="lg:col-span-6">
            <div className="clinical-card overflow-hidden bg-white p-2 shadow-ambient">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-xl overflow-hidden bg-slate-100 border border-border-crisp">
                {/* Styled Map Graphic / Preview */}
                <iframe
                  title="Dr. Malinda Ekanayaka Dental Practice Karapitiya Galle Location"
                  src={CLINIC_CONFIG.location.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-border-crisp shadow-sm text-xs font-bold text-charcoal flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-action-green" />
                  <span>Dental & Cosmetics · Karapitiya, Galle</span>
                </div>
              </div>

              {/* Surrounding Areas Served */}
              <div className="p-4">
                <span className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2.5">
                  Surrounding Southern Coast Areas Served:
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {CLINIC_CONFIG.location.surroundingAreas.map((area) => (
                    <span
                      key={area}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
