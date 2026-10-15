import React from 'react';
import type { Metadata } from 'next';
import { businessData } from '@/data/business';

export const metadata: Metadata = {
  title: "Patient Data Privacy Policy | Sonodent Diagnostic Centre",
  description: "Learn how Dr. Abhay Shah's Sonodent protects patient medical records, contact data, and diagnostic reports in compliance with healthcare privacy norms.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 lg:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-6 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Patient Privacy &amp; Data Protection Policy
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Effective Date: October 2026 • Dr. Abhay Shah&apos;s Sonodent Diagnostic Centre
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Commitment to Patient Confidentiality</h2>
          <p>
            At Dr. Abhay Shah&apos;s Sonodent - Sonography and Diagnostic Centre, we consider patient confidentiality sacred. We strictly handle your health data, personal identifiers, prescription slips, and diagnostic findings in compliance with the Digital Personal Data Protection (DPDP) Act and Indian healthcare data standards.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Information We Collect</h2>
          <p>When you schedule an appointment or request home sample collection, we collect:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Contact details: Patient name, mobile number, email address, residential locality.</li>
            <li>Clinical requests: The specific diagnostic test, ultrasound study, or health package requested.</li>
            <li>Prescription notes provided by referring doctors to ensure correct investigation parameters.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. Non-Disclosure &amp; Zero Monetization</h2>
          <p>
            We do not sell, rent, monetize, or disclose patient telephone numbers or health information to third-party telemarketers, insurance brokers, or pharmaceutical marketers. Information is strictly utilized for appointment scheduling, phlebotomist logistics, and digital report delivery to you or your designated physician.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">4. Report Delivery Channels</h2>
          <p>
            Diagnostic reports and high-resolution ultrasound printouts are handed over in-person at the clinic, or delivered electronically via encrypted PDF files through verified WhatsApp or email communication initiated by the patient.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">5. Contact Clinic Data Officer</h2>
          <p>
            For any queries concerning your diagnostic records or data correction, please contact our administrative desk at {businessData.contact.phoneDisplay} or in person at Shop No. 4, Sai Milan Building, Worli Naka, Mumbai 400018.
          </p>
        </section>
      </div>
    </div>
  );
}
