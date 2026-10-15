import React from 'react';
import type { Metadata } from 'next';
import { businessData } from '@/data/business';

export const metadata: Metadata = {
  title: "Terms & Conditions of Diagnostic Services | Sonodent Worli",
  description: "Terms and conditions governing clinical investigations, sonography scans, reporting turnaround times, and sample collection at Sonodent Diagnostic Centre.",
};

export default function TermsPage() {
  return (
    <div className="py-12 lg:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-6 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Terms of Diagnostic Service &amp; Clinical Disclaimers
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Last Updated: October 2026 • [Marked for Legal Review]
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Nature of Diagnostic Investigations</h2>
          <p>
            Diagnostic ultrasound, color Doppler studies, and laboratory pathology tests provided by Dr. Abhay Shah&apos;s Sonodent Diagnostic Centre represent objective clinical aids. All medical interpretations and definitive therapeutic decisions must be undertaken by your treating registered medical practitioner in conjunction with your complete clinical history.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Strict PCPNDT Act Adherence</h2>
          <p>
            In strict compliance with the Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act, 1994 and the Government of Maharashtra regulations:
          </p>
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-900 font-semibold text-xs">
            Determination or disclosure of the sex of the fetus is strictly forbidden by Indian law. No requests or inquiries of this nature will ever be entertained.
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. Appointment Bookings &amp; Verbal Confirmation</h2>
          <p>
            Submissions made through this website or messaging channels constitute appointment requests. An appointment slot is deemed confirmed only after verbal or WhatsApp schedule confirmation by our clinical reception desk.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">4. Turnaround Times &amp; Reporting</h2>
          <p>
            Turnaround times stated on our website or promotional material represent standard operational estimates. Variations may occasionally occur due to biological sample re-checks, technical calibration, or critical clinical findings requiring confirmatory runs.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">5. Home Sample Collection Terms</h2>
          <p>
            Home sample collection is restricted strictly to blood and urine pathology investigations. All ultrasound and Doppler examinations must be conducted at our Worli Naka clinic premises.
          </p>
        </section>
      </div>
    </div>
  );
}
