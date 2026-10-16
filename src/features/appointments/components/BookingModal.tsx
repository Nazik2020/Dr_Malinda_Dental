import React, { useEffect } from 'react';
import { X, Calendar, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { CLINIC_CONFIG } from '@/config/clinic.config';
import { useBookingWizard } from '../hooks/useBookingWizard';
import { Button } from '@/components/ui/Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTreatment,
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

  useEffect(() => {
    if (initialTreatment) {
      updateField('category', initialTreatment);
    }
  }, [initialTreatment]);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitBooking();
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/65 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative bg-white rounded-2xl max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-border-crisp max-h-[92vh] overflow-y-auto my-auto animate-scaleIn">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-green cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-2 border border-emerald-200/80">
            <Calendar className="w-3.5 h-3.5 text-action-green" />
            <span>Dedicated Consultation</span>
          </div>
          <h2 id="modal-title" className="text-xl sm:text-2xl font-bold font-headline text-charcoal">
            Book an Appointment
          </h2>
          <p id="modal-desc" className="text-xs text-body-neutral mt-1">
            Dr. Malinda Ekanayaka Dental Practice • Karapitiya, Galle
          </p>
        </div>

        {lastResult?.success ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-action-green mx-auto flex items-center justify-center mb-4 border border-emerald-200 shadow-sm">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold font-headline text-charcoal mb-1">
              Appointment Request Received!
            </h3>
            <p className="text-xs font-mono font-bold text-action-green mb-3 bg-emerald-50 inline-block px-2.5 py-1 rounded border border-emerald-200">
              Reference: {lastResult.bookingReference}
            </p>
            <p className="text-xs text-body-neutral mb-6 leading-relaxed max-w-sm mx-auto">
              {lastResult.message}
            </p>
            <Button variant="primary" onClick={handleClose} className="w-full">
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div role="alert" className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label htmlFor="modal-fullname" className="block text-xs font-bold uppercase text-charcoal mb-1 tracking-wider">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="modal-fullname"
                type="text"
                required
                placeholder="e.g. Nalaka Silva"
                value={formData.fullName}
                onChange={(e) => updateField('fullName', e.target.value)}
                className="clinical-input"
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="modal-phone" className="block text-xs font-bold uppercase text-charcoal mb-1 tracking-wider">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="modal-phone"
                type="tel"
                required
                placeholder="e.g. 077 123 4567"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                className="clinical-input"
                autoComplete="tel"
              />
            </div>

            <div>
              <label htmlFor="modal-category" className="block text-xs font-bold uppercase text-charcoal mb-1 tracking-wider">
                Service / Department
              </label>
              <select
                id="modal-category"
                value={formData.category}
                onChange={(e) => updateField('category', e.target.value)}
                className="clinical-input cursor-pointer"
              >
                <option value="Dental Implants">Dental Implants (3D Surgical Guided)</option>
                <option value="General Dentistry">General Checkup & Routine Cleaning</option>
                <option value="Cosmetic Dentistry">Cosmetic Dentistry & Porcelain Veneers</option>
                <option value="Orthodontics">Orthodontics & Clear Aligners</option>
                <option value="Teeth Whitening">Laser Teeth Whitening</option>
                <option value="Emergency Relief">Emergency Pain Relief</option>
              </select>
              <div className="mt-2 p-2 rounded-lg bg-emerald-50/70 border border-emerald-100 text-xs text-slate-700 leading-relaxed">
                <div className="font-bold text-action-green text-[10px] uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-action-green shrink-0" />
                  <span>Clinical Note</span>
                </div>
                <p className="font-medium text-slate-700 pl-3 text-[11px]">
                  {activeStrategy.getConsultationType()} (~{activeStrategy.calculateEstimatedDuration()})
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="modal-date" className="block text-xs font-bold uppercase text-charcoal mb-1 tracking-wider">
                  Preferred Date
                </label>
                <input
                  id="modal-date"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => updateField('preferredDate', e.target.value)}
                  className="clinical-input cursor-pointer"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div>
                <label htmlFor="modal-time" className="block text-xs font-bold uppercase text-charcoal mb-1 tracking-wider">
                  Time Window
                </label>
                <select
                  id="modal-time"
                  value={formData.preferredTime}
                  onChange={(e) => updateField('preferredTime', e.target.value)}
                  className="clinical-input cursor-pointer"
                >
                  <option value="Morning">Morning</option>
                  <option value="Midday">Midday</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
            </div>

            <div className="pt-3">
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={isSubmitting}
                className="w-full justify-center shadow-md"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Confirming...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Confirm Consultation</span>
                  </>
                )}
              </Button>
            </div>

            <div className="text-center pt-2">
              <a
                href={`tel:${CLINIC_CONFIG.contact.hotline.replace(/\s+/g, '')}`}
                className="text-xs text-charcoal hover:text-action-green inline-flex items-center gap-1.5 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-green rounded px-1"
              >
                <Phone className="w-3.5 h-3.5 text-action-green" />
                <span>Prefer to speak? Call {CLINIC_CONFIG.contact.hotline}</span>
              </a>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
