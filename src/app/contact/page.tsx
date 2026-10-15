import React from 'react';
import type { Metadata } from 'next';
import { LocationSection } from '@/components/LocationSection';
import { BookingForm } from '@/components/BookingForm';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { businessData } from '@/data/business';

export const metadata: Metadata = {
  title: "Contact & Directions | Dr. Abhay Shah's Sonodent Worli",
  description: "Contact Dr. Abhay Shah's Sonodent Sonography and Diagnostic Centre at Worli Naka, Mumbai. Timings, driving directions, phone +91 98201 27749 and appointments.",
};

export default function ContactPage() {
  return (
    <div className="py-12 lg:py-20 bg-white min-h-screen space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008C45]">
            Reach Our Clinic
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact &amp; Clinic Directions
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Conveniently situated at Worli Naka on Ganpatrao Kadam Marg, directly opposite Shri Ram Mills. Wheelchair and senior-friendly ground-floor access.
          </p>
        </div>

        {/* Location Section */}
        <LocationSection />

        {/* Contact & Enquiry Form */}
        <div className="max-w-3xl mx-auto bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Send an Appointment Enquiry
            </h2>
            <p className="text-xs text-slate-500">
              Leave your contact number and our reception desk will assist you promptly.
            </p>
          </div>

          <BookingForm />
        </div>
      </div>
    </div>
  );
}
