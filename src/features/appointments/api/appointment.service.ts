import { ApiAppointmentDTO, BookingSubmissionResult } from '@/types/clinic.types';

const STORAGE_KEY = 'malinda_clinic_bookings';

/**
 * SADP: Service / Repository Pattern
 * Abstracting external data storage and API network layer.
 */
class AppointmentService {
  async createBooking(dto: ApiAppointmentDTO): Promise<BookingSubmissionResult> {
    // Simulate real network request latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (!dto.patient_name || !dto.contact_number) {
      throw new Error('Please provide both full name and contact telephone number.');
    }

    const bookingReference = `GAL-${Math.floor(100000 + Math.random() * 900000)}`;

    const savedRecord = {
      ...dto,
      bookingReference,
      createdAt: new Date().toISOString(),
      status: 'CONFIRMED',
    };

    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      existing.push(savedRecord);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    } catch {
      // LocalStorage fallback for private browsing
    }

    return {
      success: true,
      bookingReference,
      message: `Your appointment request for ${dto.treatment_key} has been confirmed. Our clinic coordinator will contact ${dto.contact_number} shortly.`,
    };
  }

  getSavedBookings() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
      return [];
    }
  }
}

export const appointmentService = new AppointmentService();
