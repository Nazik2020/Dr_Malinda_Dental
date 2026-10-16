import { TreatmentItem, ImplantJourneyStep, PatientReview, ClinicFacility, FaqItem } from '@/types/clinic.types';

export const TREATMENTS_DATA: TreatmentItem[] = [
  {
    id: 'general',
    category: 'general',
    title: 'General Dentistry',
    shortDesc: 'Routine checkups, digital x-rays, gentle ultrasonic cleanings, and tooth-colored composite restorations.',
    features: [
      'Digital Low-Dose Dental X-Rays',
      'Ultrasonic Air Polishing & Tartar Removal',
      'Composite Tooth-Colored Fillings',
      'Root Canal (Endodontic) Therapy',
    ],
    durationEstimate: '30 - 45 mins',
  },
  {
    id: 'cosmetics',
    category: 'cosmetics',
    title: 'Cosmetic Dentistry',
    shortDesc: 'Porcelain veneers, laser teeth whitening, composite bonding, and bespoke digital smile design makeovers.',
    features: [
      'In-Clinic Laser Teeth Whitening',
      'Ultra-Thin Porcelain Veneers',
      'Biomimetic Composite Edge Bonding',
      'Gum Contouring & Aesthetic Reshaping',
    ],
    durationEstimate: '45 - 90 mins',
  },
  {
    id: 'implants',
    category: 'implants',
    title: 'Dental Implants',
    isPopular: true,
    shortDesc: 'Permanent titanium and zirconia tooth replacements using 3D surgical guides for lifelong stability and natural beauty.',
    features: [
      'Single & Multiple Tooth Implants',
      'Full Arch All-on-4 / All-on-6 Solutions',
      'Sinus Lift & Bone Grafting Procedures',
      'Same-Day Temporary Aesthetics',
    ],
    durationEstimate: '60 mins',
  },
  {
    id: 'orthodontics',
    category: 'orthodontics',
    title: 'Orthodontics & Aligners',
    shortDesc: 'Clear aligners and modern low-profile braces for teens and adults to correct crowded teeth and bite alignment.',
    features: [
      'Invisible Clear Aligner Systems',
      'Ceramic Aesthetic Braces',
      'Digital Bite Analysis & Planning',
      'Post-Orthodontic Retainer Systems',
    ],
    durationEstimate: '30 mins',
  },
];

export const IMPLANT_JOURNEY_STEPS: ImplantJourneyStep[] = [
  {
    step: 1,
    title: 'Consultation',
    timeline: 'Day 1',
    description: '3D CBCT scan, comprehensive bone density assessment, and initial smile consultation.',
    details: 'Digital imaging allows millimeter-precise assessment without guesswork.',
  },
  {
    step: 2,
    title: 'Treatment Plan',
    timeline: 'Within 48h',
    description: 'Fully transparent timeline and fixed cost breakdown with personalized 3D surgical plan.',
    details: 'No hidden extras. Clear payment stages aligned with your comfort.',
  },
  {
    step: 3,
    title: 'Placement',
    timeline: 'Treatment Day',
    description: 'Precision implant placement under gentle local anesthesia using custom 3D printed surgical guides.',
    details: 'Minimally invasive keyhole techniques ensure minimal discomfort.',
  },
  {
    step: 4,
    title: 'Healing Phase',
    timeline: '8 - 12 Weeks',
    description: 'Osseointegration period where the biocompatible fixture fuses permanently with jawbone.',
    details: 'Protected with temporary natural-looking tooth so you never leave without a smile.',
  },
  {
    step: 5,
    title: 'Final Crown',
    timeline: 'Completion',
    description: 'Attachment of custom-milled zirconia crown shade-matched to your surrounding teeth.',
    details: 'Restores 100% natural chewing strength, beauty, and confidence for life.',
  },
];

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: 'rev-1',
    name: 'Nalaka Silva',
    location: 'Unawatuna / Galle',
    treatment: 'Dental Implant',
    rating: 5,
    date: '2 weeks ago',
    comment:
      'I was very apprehensive about getting an implant. Dr. Malinda explained every detail using the 3D screen, and the actual procedure was surprisingly comfortable. Truly the best dental clinic in the Southern Province.',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Dilhara Fernando',
    location: 'Galle Fort',
    treatment: 'Porcelain Veneers',
    rating: 5,
    date: '1 month ago',
    comment:
      'Had custom veneers done for my wedding smile. The attention to detail and color matching was remarkable. The clinic ambiance feels more like a modern boutique spa than a sterile hospital.',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Dr. David Martin',
    location: 'Visiting from UK',
    treatment: 'Emergency & Crown',
    rating: 5,
    date: '3 weeks ago',
    comment:
      'Chipped a molar while on holiday in Galle. Got an immediate appointment. The technology, hygiene standards, and Dr. Malinda’s surgical expertise rival the top private practices in London.',
    verified: true,
  },
];

export const CLINIC_FACILITIES: ClinicFacility[] = [
  {
    id: 'fac-1',
    title: 'Treatment Operatory',
    description: 'Ergonomic Japanese Belmont dental chairs with calming garden views.',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fac-2',
    title: 'Digital 3D Diagnostics',
    description: 'Low-radiation Cone Beam CT scanner providing immediate 3D bone mapping.',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fac-3',
    title: 'Sterilization & Hygiene',
    description: 'Hospital-grade Class-B vacuum autoclave sterilization protocols.',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fac-4',
    title: 'Patient Hospitality',
    description: 'Peaceful reception lounge with complimentary Ceylon tea and Wi-Fi.',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Are dental implants painful?',
    answer:
      'No. The procedure is performed under gentle local anesthesia, and patients typically report feeling nothing more than mild vibration. Post-procedure discomfort is minimal and easily managed with standard mild painkillers for 24-48 hours.',
  },
  {
    id: 'faq-2',
    question: 'How long does a complete dental implant take?',
    answer:
      'The initial placement takes about 45 to 60 minutes. The bone integration (osseointegration) takes between 8 to 12 weeks. During this time, a temporary aesthetic tooth is placed so you never leave without a confident smile.',
  },
  {
    id: 'faq-3',
    question: 'How do I reach the clinic from Galle Fort or Unawatuna?',
    answer:
      'Our practice is centrally situated along Main Road in Karapitiya, just 10–12 minutes by car or tuk-tuk from Galle Fort and 15 minutes from Unawatuna. Dedicated on-site patient parking is available.',
  },
  {
    id: 'faq-4',
    question: 'What is the cost of consultations and treatments?',
    answer:
      'Initial diagnostic consultations are transparently priced and include comprehensive digital examination. All treatment plans come with itemized, written quotes before any work begins, with flexible stage-by-stage payments.',
  },
  {
    id: 'faq-5',
    question: 'Do you treat international tourists and expats visiting Galle?',
    answer:
      'Yes! We routinely welcome international travelers and expats. We provide detailed digital clinical notes and receipts suitable for worldwide dental insurance claim reimbursement.',
  },
];
