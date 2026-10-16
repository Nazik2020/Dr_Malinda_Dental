import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StickyBookingBar } from '@/components/layout/StickyBookingBar';
import { HeroSection } from '@/features/hero/components/HeroSection';
import { StatsBar } from '@/features/hero/components/StatsBar';
import { TreatmentsSection } from '@/features/treatments/components/TreatmentsSection';
import { ImplantShowcase } from '@/features/implants/components/ImplantShowcase';
import { DoctorProfile } from '@/features/doctor/components/DoctorProfile';
import { WhyChooseUs } from '@/features/why-us/components/WhyChooseUs';
import { ReviewsSection } from '@/features/reviews/components/ReviewsSection';
import { PracticeGallery } from '@/features/practice/components/PracticeGallery';
import { HowBookingWorks } from '@/features/booking-flow/components/HowBookingWorks';
import { LocationSection } from '@/features/location/components/LocationSection';
import { AppointmentFormCard } from '@/features/appointments/components/AppointmentFormCard';
import { BookingModal } from '@/features/appointments/components/BookingModal';
import { FaqSection } from '@/features/faq/components/FaqSection';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string>('Dental Implants');

  const handleOpenBooking = (treatmentCategory?: string) => {
    if (treatmentCategory) {
      setSelectedTreatment(treatmentCategory);
    }
    setIsBookingModalOpen(true);
  };

  const handleSelectTreatmentCard = (treatmentTitle: string) => {
    setSelectedTreatment(treatmentTitle);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-surface text-charcoal flex flex-col font-body selection:bg-action-green selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Key Clinical Metrics / Stats Bar */}
        <StatsBar />

        {/* 3. Comprehensive Treatments & Services */}
        <TreatmentsSection onSelectTreatment={handleSelectTreatmentCard} />

        {/* 4. Specialized Dark Section: 3D Dental Implants & 5-Step Journey */}
        <ImplantShowcase onOpenBooking={handleOpenBooking} />

        {/* 5. Clinical Leadership & Doctor Profile */}
        <DoctorProfile onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Why Patients Choose Us (4 Principles) */}
        <WhyChooseUs />

        {/* 7. Patient Reviews & Social Proof */}
        <ReviewsSection />

        {/* 8. Modern Facility Showcase */}
        <PracticeGallery />

        {/* 9. 3-Step Booking Timeline */}
        <HowBookingWorks />

        {/* 10. Location, Parking & Accessibility in Galle */}
        <LocationSection />

        {/* 11. Inline Interactive Booking Form */}
        <AppointmentFormCard defaultCategory={selectedTreatment} />

        {/* 12. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Global Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialTreatment={selectedTreatment}
      />

      {/* Scroll-activated Floating Action Bar */}
      <StickyBookingBar onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
