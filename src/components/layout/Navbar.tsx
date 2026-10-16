import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Globe } from 'lucide-react';
import { CLINIC_CONFIG } from '@/config/clinic.config';
import { Button } from '@/components/ui/Button';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('treatments');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Treatments', href: '#treatments', id: 'treatments' },
    { label: 'Implants', href: '#implants', id: 'implants' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Contact', href: '#location', id: 'location' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 bg-[#181C20] border-b border-white/10 ${
        isScrolled
          ? 'bg-[#181C20]/95 backdrop-blur-md shadow-xl py-3'
          : 'py-3.5 sm:py-4 shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-xl"
            aria-label={`${CLINIC_CONFIG.name} Home`}
          >
            {/* Tooth squircle icon */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-action-green flex items-center justify-center text-white shadow-sm group-hover:bg-action-hover transition-colors shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-white" viewBox="0 0 24 24">
                <path d="M12 2C8.5 2 6 4.2 5 6.5c-1 2.3-.5 4.8 0 7.1.8 3.5 1.5 6.5 3.5 7.5 1.2.6 2.3-.3 3-1.8.7 1.5 1.8 2.4 3 1.8 2-1 2.7-4 3.5-7.5.5-2.3 1-4.8 0-7.1C18 4.2 15.5 2 12 2zm-2.2 4.5a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4zm4.4 0a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z"/>
              </svg>
            </div>
            <div>
              <span className="block text-sm sm:text-base lg:text-lg font-bold font-headline text-white leading-tight">
                Dental <span className="text-emerald-400">&</span> Cosmetics
              </span>
              <span className="block text-[10px] sm:text-xs text-slate-400 font-medium leading-none mt-0.5">
                by Dr Malinda Ekanayake
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                    isActive
                      ? 'text-emerald-400 border-b-2 border-emerald-400 rounded-b-none'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Touchpoints */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Selector Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 text-xs font-semibold text-slate-300 hover:text-white hover:border-white/30 transition-colors cursor-pointer">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>EN | සිං</span>
            </div>

            {/* Direct Telephone Pill */}
            <a
              href="tel:+94773168887"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 text-xs sm:text-sm font-semibold text-white hover:text-emerald-300 hover:border-emerald-400/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label="Call Hotline +94 77 316 8887"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+94 77 316 8887</span>
            </a>

            {/* Primary Booking Pill Button */}
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenBooking}
              className="shadow-sm font-bold px-4 py-2 text-xs sm:text-sm"
            >
              <span>Book Appointment</span>
            </Button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenBooking}
              className="sm:hidden px-3.5 py-1.5 text-xs font-bold"
            >
              Book
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#181C20] border-b border-white/10 px-5 pt-3 pb-6 shadow-2xl animate-fadeIn">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className="text-base font-medium text-slate-200 hover:text-emerald-400 hover:bg-white/5 px-3 py-2.5 rounded-lg transition-colors border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-slate-300 py-1 px-1">
              <span>Language:</span>
              <span className="font-semibold text-emerald-400">English / සිංහල</span>
            </div>
            <a
              href="tel:+94773168887"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white py-2.5 bg-white/10 rounded-xl hover:bg-white/15 transition-colors border border-white/15"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call: +94 77 316 8887</span>
            </a>
            <Button
              variant="primary"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 font-bold"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Now</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
