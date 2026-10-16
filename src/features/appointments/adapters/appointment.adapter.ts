import { AppointmentFormData, ApiAppointmentDTO } from '@/types/clinic.types';

/**
 * SADP: Adapter Pattern
 * Decouples frontend form presentation models from backend API contract (DTOs).
 */
export const appointmentAdapter = {
  toDTO(form: AppointmentFormData): ApiAppointmentDTO {
    return {
      patient_name: form.fullName.trim(),
      contact_number: form.phone.trim(),
      treatment_key: form.category,
      booking_date: form.preferredDate,
      slot_time: form.preferredTime,
      special_requests: form.notes?.trim() || undefined,
    };
  },

  fromDTO(dto: ApiAppointmentDTO): AppointmentFormData {
    return {
      fullName: dto.patient_name,
      phone: dto.contact_number,
      category: dto.treatment_key,
      preferredDate: dto.booking_date,
      preferredTime: dto.slot_time,
      notes: dto.special_requests || '',
    };
  },
};
