export type TreatmentCategory =
  | 'general'
  | 'cosmetics'
  | 'implants'
  | 'orthodontics'
  | 'aesthetics';

export interface TreatmentItem {
  id: string;
  category: TreatmentCategory;
  title: string;
  shortDesc: string;
  isPopular?: boolean;
  features: string[];
  durationEstimate?: string;
  priceNote?: string;
}

export interface ImplantJourneyStep {
  step: number;
  title: string;
  timeline: string;
  description: string;
  details: string;
}

export interface PatientReview {
  id: string;
  name: string;
  location: string;
  treatment: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface ClinicFacility {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  category: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export interface ApiAppointmentDTO {
  patient_name: string;
  contact_number: string;
  treatment_key: string;
  booking_date: string;
  slot_time: string;
  special_requests?: string;
}

export interface BookingSubmissionResult {
  success: boolean;
  bookingReference: string;
  message: string;
}
