/**
 * SADP: Strategy Pattern
 * Encapsulates dynamic pricing rules, estimated durations, and deposit policies
 * depending on clinical and cosmetic treatment categories.
 */

export interface TreatmentStrategy {
  calculateEstimatedDuration(): string;
  requiresPriorCTScan(): boolean;
  getPreparationGuidelines(): string[];
  getConsultationType(): string;
}

export const DentalImplantsStrategy: TreatmentStrategy = {
  calculateEstimatedDuration: () => '45 - 60 mins (3D Scan + Surgical Consultation)',
  requiresPriorCTScan: () => true,
  getPreparationGuidelines: () => [
    'Bring previous X-rays if available',
    'List of current medications & health history',
    '3D CBCT scan will be performed on-site',
  ],
  getConsultationType: () => 'Specialized Implantologist Assessment',
};

export const CosmeticVeneersStrategy: TreatmentStrategy = {
  calculateEstimatedDuration: () => '30 - 45 mins (Smile Makeover Analysis)',
  requiresPriorCTScan: () => false,
  getPreparationGuidelines: () => [
    'Photos of desired smile aesthetics are welcome',
    'Comprehensive shade matching and digital mock-up preview',
  ],
  getConsultationType: () => 'Aesthetic Smile Design Consultation',
};

export const GeneralDentistryStrategy: TreatmentStrategy = {
  calculateEstimatedDuration: () => '20 - 30 mins (Routine Exam & Clean)',
  requiresPriorCTScan: () => false,
  getPreparationGuidelines: () => [
    'Standard oral health exam and gentle ultrasonic scaling',
  ],
  getConsultationType: () => 'General Dental Checkup & Hygiene',
};

export const OrthodonticsStrategy: TreatmentStrategy = {
  calculateEstimatedDuration: () => '30 mins (Clear Aligner Assessment)',
  requiresPriorCTScan: () => false,
  getPreparationGuidelines: () => [
    'Digital intraoral 3D scan of tooth alignment',
    'Simulation of expected tooth movement',
  ],
  getConsultationType: () => 'Orthodontic & Clear Aligner Consultation',
};

export function getStrategyForCategory(category: string): TreatmentStrategy {
  switch (category.toLowerCase()) {
    case 'implants':
    case 'dental implants':
      return DentalImplantsStrategy;
    case 'cosmetics':
    case 'cosmetic dentistry':
    case 'veneers':
      return CosmeticVeneersStrategy;
    case 'orthodontics':
    case 'aligners':
      return OrthodonticsStrategy;
    default:
      return GeneralDentistryStrategy;
  }
}
