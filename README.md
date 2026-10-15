# Dr. Abhay Shah's Sonodent - Sonography and Diagnostic Centre

A complete, production-quality, mobile-first website for **Dr. Abhay Shah's Sonodent - Sonography and Diagnostic Centre**, located at Worli Naka, Mumbai.

Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 1. Verified Clinical Facts vs. Placeholders

To maintain strict truth-in-advertising and prevent inaccurate medical claims, all business and diagnostic parameters are structured in `src/data/business.ts`, `src/data/tests.ts`, `src/data/packages.ts`, and `src/data/testimonials.ts`.

### Verified Clinical Facts (From Google Maps & Justdial Listing)
* **Official Business Name**: Dr. Abhay Shah's Sonodent - Sonography and Diagnostic Centre
* **Lead Radiologist**: Dr. Abhay Shah (Consultant Radiologist & Ultrasonologist)
* **Clinic Address**: Shop No. 4, Ground Floor, Sai Milan Building, Ganpatrao Kadam Marg, Worli Naka, Upper Worli, Worli, Mumbai, Maharashtra 400018
* **Landmarks**: Near Worli Naka, Next to Shiv Sena Shakha & Satyanarayan Temple, Directly Opposite Shri Ram Mills
* **Phone Number**: `+91 98201 27749`
* **WhatsApp Number**: `+91 98201 27749`
* **Timings**: Monday to Saturday: 9:00 AM – 9:00 PM | Sunday: Closed (Urgent cases by prior appointment)
* **Patient Rating**: **5.0 ★** across **499+ verified patient reviews** (Top Rated in Worli Naka)
* **Clinical Setup**: All scans personally performed and interpreted by Dr. Abhay Shah; female attendant present during all scans for patient comfort; high-resolution 3D/4D ultrasound & vascular Doppler.

---

### Marked Placeholders Requiring Client Confirmation (`[CONFIRM]`)
All placeholders are centralized in `src/data/business.ts` (and corresponding data files) so they can be updated in one place:

| Item | Location in Code | Current Placeholder Value | Action Required by Client |
|---|---|---|---|
| **Official Email** | `src/data/business.ts` (`contact.email`) | `[CONFIRM: info@sonodentworli.com / care@sonodent.in]` | Supply official clinic email address |
| **Doctor Degrees** | `src/data/business.ts` (`doctor.qualifications`) | `[CONFIRM: MBBS, DMRD / MD Radiology]` | Confirm Dr. Abhay Shah's exact medical degree credentials |
| **Years of Practice**| `src/data/business.ts` (`doctor.experience`) | `[CONFIRM: 20+ years of dedicated clinical radiology practice]` | Confirm founding year or clinical vintage |
| **NABL Certification** | `src/data/business.ts` (`accreditations`) | `[CONFIRM: NABL Accreditation Registration Number & Certificate Date]` | Provide NABL certificate number if applicable, or remove |
| **ISO Quality Standard**| `src/data/business.ts` (`accreditations`) | `[CONFIRM: ISO 9001:2015 Quality Management Certification Details]` | Provide ISO standard number if certified |
| **Home Sample Collection Fee** | `src/data/business.ts` (`homeCollection.serviceFee`) | `[CONFIRM: Free for packages above ₹999, or ₹150 nominal visit charge for standalone tests]` | Set exact doorstep phlebotomy fee policy |
| **Extended Coverage Area** | `src/data/business.ts` (`homeCollection.coverageAreas`) | `[CONFIRM: Extended coverage area e.g. Dadar / Byculla]` | Confirm phlebotomist geographic boundaries |
| **Pathology Test Rates** | `src/data/tests.ts` (`priceNote`) | `[CONFIRM: Clinic blood test pricing]` | Verify pathology blood test rates with laboratory desk |
| **Promotional Package Rates** | `src/data/packages.ts` (`priceNote`) | `[CONFIRM: Promotional package pricing]` | Confirm final pricing for bundled health packages |
| **Sample Testimonial** | `src/data/testimonials.ts` (`review-5`) | `[CONFIRM: Sample Review Placeholder]` | Replace with additional verified patient review quote |

---

## 2. Tech Stack & Architectural Highlights

* **Next.js 16 (App Router)**: Fast, server-driven, static prerendering of all 15+ diagnostic test pages, with partial prefetching.
* **Tailwind CSS 4**: Custom medical theme with tokens:
  * Primary Lab Green: `#008C45`
  * Deep Forest Green: `#006B35`
  * Soft Mint Background: `#F3F9F5`
  * Light Sage Banners: `#E8F4EC`
* **Accessibility**: Meets WCAG AA contrast, explicit visible focus indicators (`:focus-visible`), and prefers-reduced-motion media query handling.
* **Two-Panel Desktop Test Explorer**: Left panel features keyboard navigation (`ArrowDown`, `ArrowUp`, `Home`, `End`, `role="tablist"`), wrapped test names (no truncation), active green indicator; right panel displays preparation guidelines, clinical rationale, and direct pre-fill booking trigger.
* **Mobile-First Accordion**: Fluid accordion layout for mobile screens with zero content overlap.
* **Zero Health Data Persistence**: Callback requests validate mobile phone number format, trap automated bots via honeypot fields, and enforce in-memory IP rate limiting without storing sensitive diagnostic history.

---

## 3. Pages & Routes

* `/`: High-conversion homepage with Hero, Fast-Track Callback Strip, Test Explorer, Home Collection 5-step flow, Interactive Booking Form, Health Packages, Why Choose Us tiles, Quality & Accreditation, Reviews Carousel, and Location Map.
* `/tests`: Comprehensive searchable directory of ultrasound, Doppler, and blood tests with instant category filtering.
* `/tests/[slug]`: 15 individual test deep-dive pages (e.g. `/tests/ultrasound-abdomen-pelvis`, `/tests/complete-blood-count-cbc`, `/tests/pelvic-ultrasound`) with preparation instructions, sample requirements, and `MedicalTest` JSON-LD schema.
* `/packages`: Full comparison table and category cards for preventative checkup packages.
* `/home-collection`: Dedicated home collection protocol, coverage area list, safety standards, and phlebotomy scheduling.
* `/about`: Profile of Dr. Abhay Shah, clinical philosophy, and diagnostic equipment standards.
* `/contact`: Full directions, landmarks (opposite Shri Ram Mills), transit options, hours, and direct inquiry form.
* `/privacy`: DPDP-compliant patient data privacy policy.
* `/terms`: Diagnostic terms of service with Metropolis-inspired clinical disclaimers and strict PCPNDT Act compliance.
* `/api/callback`: Server route handler with Zod validation, honeypot anti-spam, and rate limiting.
* `/sitemap.xml` & `/robots.txt`: Automated SEO indexing endpoints.

---

## 4. Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run production build
npm run build

# Start production server
npm start
```

---

## 5. Deployment to Vercel

1. Push this repository to GitHub or GitLab.
2. In the [Vercel Dashboard](https://vercel.com/new), select **Import Project** and point to the repository.
3. Framework Preset: **Next.js** (auto-detected).
4. Environment Variables:
   * Copy values from `.env.example` if integrating email alerts (e.g. `RESEND_API_KEY`, `CLINIC_NOTIFICATION_EMAIL`).
5. Click **Deploy**. Vercel will build and assign your production URL.

---

## 6. Required Accounts & Manual Steps for Client

1. **WhatsApp Business Setup**:
   * Ensure mobile number `+91 98201 27749` is active on WhatsApp Business with automated greeting messages.
2. **Google Search Console**:
   * Submit `https://your-domain.com/sitemap.xml` for instant indexing.
3. **Google Business Profile**:
   * Add the website URL to the verified Google Maps listing: `https://maps.app.goo.gl/Dg5FvAHNPzDu8eve6`.
4. **Legal Review**:
   * Have legal counsel review `/src/app/terms/page.tsx` and `/src/app/privacy/page.tsx` for jurisdiction-specific compliance.
