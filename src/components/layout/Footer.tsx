import React from 'react';
import { Phone, MessageSquare, MapPin, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { CLINIC_CONFIG } from '@/config/clinic.config';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-12 pb-8 sm:pt-14 sm:pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-10 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-action-green flex items-center justify-center text-white shadow-sm">
                <Sparkles className="w-5 h-5 text-emerald-200" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider font-bold text-emerald-400">
                  Dental & Implantology
                </span>
                <span className="block text-lg font-bold font-headline text-white leading-tight">
                  {CLINIC_CONFIG.name}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mb-6 font-body">
              State-of-the-art dental care and surgical implantology in Karapitiya, Galle. Designed around gentle comfort, 3D digital precision, and lifelong smile aesthetics.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{CLINIC_CONFIG.location.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{CLINIC_CONFIG.hours.weekdays}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ICOI Fellow Certified Surgical Implantology</span>
              </div>
            </div>
          </div>

          {/* Treatments Col */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4 font-headline">
              Treatments
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li><a href="#implants" className="hover:text-emerald-400 transition-colors">3D Dental Implants</a></li>
              <li><a href="#treatments" className="hover:text-emerald-400 transition-colors">Cosmetic Veneers</a></li>
              <li><a href="#treatments" className="hover:text-emerald-400 transition-colors">General Dentistry</a></li>
              <li><a href="#treatments" className="hover:text-emerald-400 transition-colors">Teeth Whitening</a></li>
              <li><a href="#treatments" className="hover:text-emerald-400 transition-colors">Clear Aligners</a></li>
              <li><a href="#treatments" className="hover:text-emerald-400 transition-colors">Root Canal Therapy</a></li>
            </ul>
          </div>

          {/* Practice Col */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4 font-headline">
              Practice
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Dr. Malinda</a></li>
              <li><a href="#why-us" className="hover:text-emerald-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-emerald-400 transition-colors">Patient Stories</a></li>
              <li><a href="#location" className="hover:text-emerald-400 transition-colors">Location & Parking</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Direct Contact Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4 font-headline">
              Direct Contact
            </h4>
            <p className="text-xs text-slate-300 mb-4">
              Speak directly with our clinic coordinator in Galle:
            </p>
            <div className="space-y-2.5">
              <a
                href={`tel:${CLINIC_CONFIG.contact.hotline.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 w-full px-4 py-2.5 rounded-full bg-action-green hover:bg-action-hover text-white text-xs sm:text-sm font-semibold transition-colors justify-center shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <Phone className="w-4 h-4 text-emerald-200" />
                <span>Call Hotline: {CLINIC_CONFIG.contact.hotline}</span>
              </a>

              <a
                href={`https://wa.me/${CLINIC_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Dr.%20Malinda%20Dental%20Clinic,%20I%20have%20an%20inquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full px-4 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-colors justify-center border border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Coordinator</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} {CLINIC_CONFIG.fullBrand}. All rights reserved. Karapitiya, Galle, Sri Lanka.
          </div>
          <div className="flex items-center space-x-6 text-slate-400">
            <span>Medical Privacy Policy</span>
            <span>•</span>
            <span>Clinical Terms of Care</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
