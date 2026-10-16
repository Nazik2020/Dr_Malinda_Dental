import React from 'react';
import { Calendar, Phone, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { CLINIC_CONFIG } from '@/config/clinic.config';
import { useBookingWizard } from '../hooks/useBookingWizard';
import { Button } from '@/components/ui/Button';

interface AppointmentFormCardProps {
  onSuccess?: () => void;
  defaultCategory?: string;
}

export const AppointmentFormCard: React.FC<AppointmentFormCardProps> = ({
  onSuccess,
  defaultCategory,
}) => {
  const {
    formData,
    updateField,
    submitBooking,
    isSubmitting,
    error,
    lastResult,
    resetForm,
    activeStrategy,
  } = useBookingWizard();

  React.useEffect(() => {
    if (defaultCategory) {
      updateField('category', defaultCategory);
    }
  }, [defaultCategory]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitBooking();
    if (success && onSuccess) {
      onSuccess();
    }
  };

  return (
    <section id="book" className="py-12 sm:py-16 bg-white border-t border-border-crisp" aria-labelledby="booking-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="clinical-card p-6 sm:p-10 bg-surface/70 border-emerald-100 shadow-ambient">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2.5 border border-emerald-200/80 shadow-subtle">
              <Calendar className="w-3.5 h-3.5 text-action-green" />
              <span>Easy Appointment Request</span>
            </div>
            <h2 id="booking-heading" className="text-2xl sm:text-3xl font-bold font-headline text-charcoal">
              Book your visit in Galle
            </h2>
            <p className="text-xs sm:text-sm text-body-neutral mt-2">
              Fill in your details and our clinical coordinator will reach out to confirm your dedicated appointment slot.
            </p>
          </div>

          {/* Success Notification */}
          {lastResult?.success ? (
            <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-fadeIn shadow-subtle">
              <div className="w-14 h-14 rounded-full bg-action-green text-white mx-auto flex items-center justify-center mb-4 shadow-sm">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-headline text-charcoal mb-1">
                Appointment Requested!
              </h3>
              <p className="text-xs sm:text-sm text-charcoal mb-2 font-medium">
                Reference ID: <span className="font-mono font-bold text-action-green bg-white px-2 py-0.5 rounded border border-emerald-200">{lastResult.bookingReference}</span>
              </p>
              <p className="text-xs sm:text-sm text-body-neutral max-w-md mx-auto mb-6 leading-relaxed">
                {lastResult.message}
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={resetForm}
                className="bg-white shadow-sm"
              >
                Book Another Appointment
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate={false}>
              
              {/* Error Banner */}
              {error && (
                <div role="alert" className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Full Name */}
              <div>
                <label htmlFor="card-fullname" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="card-fullname"
                  type="text"
                  required
                  placeholder="e.g. Nalaka Silva"
                  value={formData.fullName}
                  onChange={(e) => updateField('fullName', e.target.value)}
                  className="clinical-input"
                  autoComplete="name"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="card-phone" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  Contact Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="card-phone"
                  type="tel"
                  required
                  placeholder="e.g. 077 123 4567"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className="clinical-input"
                  autoComplete="tel"
                />
              </div>

              {/* Treatment Category */}
              <div>
                <label htmlFor="card-treatment" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  Treatment Required
                </label>
                <select
                  id="card-treatment"
                  value={formData.category}
                  onChange={(e) => updateField('category', e.target.value)}
                  className="clinical-input cursor-pointer"
                >
                  <option value="Dental Implants">Dental Implants (3D Surgical Guided)</option>
                  <option value="General Dentistry">General Dental Exam & Routine Cleaning</option>
                  <option value="Cosmetic Dentistry">Cosmetic Dentistry & Porcelain Veneers</option>
                  <option value="Orthodontics">Orthodontics & Clear Aligners</option>
                  <option value="Teeth Whitening">Laser Teeth Whitening</option>
                  <option value="Emergency Relief">Emergency Pain Relief</option>
                </select>

                {/* Strategy insight callout */}
                <div className="mt-2.5 p-2.5 sm:p-3 rounded-xl bg-emerald-50/70 border border-emerald-100/90 text-xs text-slate-700 leading-relaxed shadow-2xs">
                  <div className="font-bold text-action-green text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-action-green shrink-0" />
                    <span>Clinical Note</span>
                  </div>
                  <p className="font-medium text-slate-700 pl-3">
                    {activeStrategy.getConsultationType()} (~{activeStrategy.calculateEstimatedDuration()})
                  </p>
                </div>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="card-date" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    id="card-date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => updateField('preferredDate', e.target.value)}
                    className="clinical-input cursor-pointer"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label htmlFor="card-time" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                    Preferred Time Window
                  </label>
                  <select
                    id="card-time"
                    value={formData.preferredTime}
                    onChange={(e) => updateField('preferredTime', e.target.value)}
                    className="clinical-input cursor-pointer"
                  >
                    <option value="09:00 AM">Morning: 09:00 AM – 11:30 AM</option>
                    <option value="12:00 PM">Midday: 12:00 PM – 02:00 PM</option>
                    <option value="03:00 PM">Afternoon: 03:00 PM – 05:00 PM</option>
                    <option value="05:30 PM">Evening: 05:30 PM – 07:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full justify-center shadow-md text-base"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Confirming Request...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Request Dedicated Slot</span>
                    </>
                  )}
                </Button>
              </div>

              {/* Reassurance Note */}
              <p className="text-center text-xs text-body-neutral">
                🔒 No advance payment required online. Our coordinator will contact you to confirm your exact appointment.
              </p>

              {/* Alternative Quick Contact Options */}
              <div className="pt-4 border-t border-border-crisp flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3">
                <a
                  href={`tel:${CLINIC_CONFIG.contact.hotline.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-border-crisp text-xs font-semibold text-charcoal hover:bg-slate-50 transition-colors shadow-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-green"
                >
                  <Phone className="w-3.5 h-3.5 text-action-green" />
                  <span>Call {CLINIC_CONFIG.contact.hotline}</span>
                </a>

                <a
                  href={`https://wa.me/${CLINIC_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Dr.%20Malinda%20Dental%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 hover:bg-emerald-100/80 transition-colors shadow-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-green"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-action-green" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
