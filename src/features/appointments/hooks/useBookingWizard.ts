import { useState } from 'react';
import { AppointmentFormData, BookingSubmissionResult } from '@/types/clinic.types';
import { appointmentAdapter } from '../adapters/appointment.adapter';
import { appointmentService } from '../api/appointment.service';
import { getStrategyForCategory, TreatmentStrategy } from '../strategies/pricing.strategy';

const INITIAL_FORM: AppointmentFormData = {
  fullName: '',
  phone: '',
  category: 'Dental Implants',
  preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
  preferredTime: '10:00 AM',
  notes: '',
};

/**
 * SADP: Facade Pattern
 * Conceals complexity of multi-field state, validation, strategy resolution,
 * adapter DTO transformation, and service calls behind a single hook interface.
 */
export function useBookingWizard(onSuccessCallback?: (result: BookingSubmissionResult) => void) {
  const [formData, setFormData] = useState<AppointmentFormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastResult, setLastResult] = useState<BookingSubmissionResult | null>(null);

  const activeStrategy: TreatmentStrategy = getStrategyForCategory(formData.category);

  const updateField = <K extends keyof AppointmentFormData>(key: K, value: AppointmentFormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (error) setError(null);
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM);
    setError(null);
    setLastResult(null);
  };

  const submitBooking = async (e?: React.FormEvent): Promise<boolean> => {
    if (e) e.preventDefault();

    if (!formData.fullName.trim()) {
      setError('Please enter your full name');
      return false;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setError('Please enter a valid contact phone number');
      return false;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // 1. Convert to DTO using Adapter Pattern
      const dto = appointmentAdapter.toDTO(formData);

      // 2. Delegate to Service Layer
      const result = await appointmentService.createBooking(dto);
      setLastResult(result);

      if (onSuccessCallback) {
        onSuccessCallback(result);
      }
      return true;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to book appointment. Please call our hotline directly.';
      setError(message);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    updateField,
    submitBooking,
    isSubmitting,
    error,
    lastResult,
    resetForm,
    activeStrategy,
  };
}
