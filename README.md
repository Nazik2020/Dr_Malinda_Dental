# Dr. Malinda Ekanayaka - Dental & Cosmetics Clinic Frontend

> Modern Clinical Warmth Design System • Built with React 19, TypeScript, and Tailwind CSS.
> Structured using **SADP (Software Architecture & Design Patterns / Principles)**.

---

## 🏛️ SADP Architectural Mapping

This project strictly adheres to **Software Architecture and Design Patterns (SADP)** to ensure high cohesion, low coupling, maintainability, and clean separation of concerns:

| SADP Principle / Pattern | Location | Architectural Purpose |
| :--- | :--- | :--- |
| **Separation of Concerns (SoC)** | `src/components/`, `src/features/`, `src/core/`, `src/types/` | Strict separation between Presentation (UI), Application/Domain (Hooks & Logic), and Infrastructure (API & Storage). |
| **Domain-Driven Vertical Slices** | `src/features/*` | High cohesion per clinic domain: `appointments`, `treatments`, `implants`, `doctor`, `reviews`, `location`, `faq`. |
| **Adapter Pattern** | [`appointment.adapter.ts`](file:///src/features/appointments/adapters/appointment.adapter.ts) | Decouples frontend form models from backend API Data Transfer Objects (DTOs). |
| **Facade Pattern** | [`useBookingWizard.ts`](file:///src/features/appointments/hooks/useBookingWizard.ts) | Conceals multi-step state, validations, strategy resolution, and submission behind a unified clean hook API. |
| **Strategy Pattern** | [`pricing.strategy.ts`](file:///src/features/appointments/strategies/pricing.strategy.ts) | Dynamically switches clinical preparation rules, consultation types, and duration estimates depending on procedure category. |
| **Repository / Service Pattern** | [`appointment.service.ts`](file:///src/features/appointments/api/appointment.service.ts) | Encapsulates external data transport, simulated network latency, and fallback persistent storage. |
| **Compound Component & Atomic Primitives** | `src/components/ui/` | Composable, accessible design-system atoms: `Button`, `Badge`, `SectionHeading` (with the signature 4px × 24px Architectural Accent Yellow indicator). |

---

## 🎨 Modern Clinical Warmth Design Tokens

- **Dominant Base (`#FFFFFF`):** High-key, pristine white surface for clinical cards and containers.
- **Surface Variant / Mint Tint (`#F3FAF5`):** Restorative wellness background breaking clinical glare.
- **Deep Charcoal Foundation (`#14181C`):** Authoritative anchor for navigation, implant showcase, and footer.
- **Action Green (`#15803D`):** Interactive touchpoints and primary booking pills.
- **Brand Accent Green (`#22C55E`):** Verification badges and active status indicators.
- **Architectural Accent Yellow (`#F5C400`):** Priority consultations and section title indicator bars.
- **Validation Gold (`#F5B301`):** Patient review stars and accreditations.
- **Typography:** **Nunito Sans** (Headlines & Titles, 800 weight) + **Inter** (Clinical data & body copy).

---

## 🚀 Running the Project

```bash
# Install dependencies (already completed)
npm install

# Start Vite Development Server
npm run dev

# Share with Client via Cloudflare Tunnel (Temporary Live Link)
npm run share

# Production Build
npm run build

# Preview Production Build
npm run preview
```

