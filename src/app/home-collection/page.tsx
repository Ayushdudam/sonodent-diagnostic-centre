'use client';

import React from 'react';
import { HomeCollectionSection } from '@/components/HomeCollectionSection';
import { BookingForm } from '@/components/BookingForm';
import { Truck, ShieldCheck, CheckCircle2, Clock, Phone, AlertCircle } from 'lucide-react';
import { businessData } from '@/data/business';

export default function HomeCollectionPage() {
  return (
    <div className="py-12 lg:py-20 bg-white min-h-screen space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-xs font-semibold text-[#006B35]">
            <Truck className="w-3.5 h-3.5 text-[#008C45]" />
            <span>Phlebotomy at Your Doorstep</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Home Sample Collection Service
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Convenient, sterile blood &amp; urine sample collection across Worli, Lower Parel, and Prabhadevi by certified medical technicians.
          </p>
        </div>

        {/* Process & Details */}
        <HomeCollectionSection />

        {/* Dedicated Booking Form for Home Collection */}
        <div className="max-w-3xl mx-auto bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Schedule Your Home Collection Visit
            </h2>
            <p className="text-xs text-slate-500">
              Select your test or package and enter your locality. Our coordinator will call you back to confirm.
            </p>
          </div>

          <BookingForm initialVisitType="home" />
        </div>
      </div>
    </div>
  );
}
