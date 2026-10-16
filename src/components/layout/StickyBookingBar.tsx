import React, { useState, useEffect } from 'react';
import { Calendar, Phone } from 'lucide-react';
import { CLINIC_CONFIG } from '@/config/clinic.config';
import { Button } from '@/components/ui/Button';

interface StickyBookingBarProps {
  onOpenBooking: () => void;
}

export const StickyBookingBar: React.FC<StickyBookingBarProps> = ({ onOpenBooking }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 400px
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick appointment scheduling bar"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-30 animate-fadeIn"
    >
      <div className="bg-slate-900/95 backdrop-blur-md text-white p-2.5 sm:p-3 rounded-full shadow-2xl border border-slate-700/80 flex items-center justify-between sm:justify-start gap-3 sm:gap-4">
        <a
          href={`tel:${CLINIC_CONFIG.contact.hotline.replace(/\s+/g, '')}`}
          className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          aria-label={`Call Hotline ${CLINIC_CONFIG.contact.hotline}`}
        >
          <Phone className="w-3.5 h-3.5 text-emerald-400" />
          <span>{CLINIC_CONFIG.contact.hotline}</span>
        </a>

        <Button
          variant="primary"
          size="sm"
          onClick={onOpenBooking}
          className="shadow-sm px-5 py-2 text-xs sm:text-sm font-semibold w-full sm:w-auto"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Appointment</span>
        </Button>
      </div>
    </aside>
  );
};
