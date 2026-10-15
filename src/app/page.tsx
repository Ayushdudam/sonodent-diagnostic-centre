'use client';

import React, { useState } from 'react';
import { Hero } from '@/components/Hero';
import { TestExplorer } from '@/components/TestExplorer';
import { HomeCollectionSection } from '@/components/HomeCollectionSection';
import { HealthPackagesSection } from '@/components/HealthPackagesSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { AccreditationSection } from '@/components/AccreditationSection';
import { ReviewsCarousel } from '@/components/ReviewsCarousel';
import { LocationSection } from '@/components/LocationSection';
import { BookingForm } from '@/components/BookingForm';
import { Calendar, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import { businessData } from '@/data/business';
import { buildWhatsAppLink } from '@/lib/utils';

export default function HomePage() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('usg-abdomen-pelvis');

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  const whatsappUrl = buildWhatsAppLink(
    businessData.contact.whatsapp,
    "Hello Dr. Abhay Shah's Sonodent Centre, I would like to enquire about diagnostic testing."
  );

  return (
    <>
      {/* 1. Hero with Credibility Badges & Fast Callback Strip */}
      <Hero />

      {/* 2. Flagship Desktop Two-Panel Test Explorer / Mobile Accordion */}
      <TestExplorer onSelectTestForBooking={handleSelectService} />

      {/* 3. Home Sample Collection 5-Step Visual Protocol */}
      <HomeCollectionSection />

      {/* 4. Dedicated Interactive Booking / Callback Form Anchor */}
      <section id="book-callback" className="py-16 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left info column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-xs font-semibold text-[#006B35]">
                <Calendar className="w-3.5 h-3.5 text-[#008C45]" />
                <span>Priority Clinical Coordination</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Request an Appointment Callback
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether you need a dedicated sonography scan with Dr. Abhay Shah or a doorstep phlebotomy blood collection, leave your details below. Our front desk coordinator will call back to align your preferred time slot.
              </p>

              <div className="p-5 rounded-2xl bg-[#F3F9F5] border border-emerald-100 space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-2 font-bold text-[#006B35] text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#008C45]" />
                  <span>Why do we confirm via callback?</span>
                </div>
                <p className="leading-relaxed">
                  Ultrasound and Doppler studies require specific bladder filling, fasting protocols, or clinical review. A brief verbal alignment ensures you arrive perfectly prepared and experience zero unnecessary delay.
                </p>
                <div className="pt-2 border-t border-emerald-200/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Direct Desk: +91 98201 27749</span>
                  <span>Hours: 9 AM – 9 PM</span>
                </div>
              </div>

              {/* Direct WhatsApp Fallback */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="text-xs font-bold text-slate-800 block">
                  Prefer instant WhatsApp enquiry?
                </span>
                <p className="text-xs text-slate-500">
                  You can chat directly with our clinic desk to ask questions about test availability.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right form card */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-lg">
              <BookingForm initialServiceId={selectedServiceId} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Health Checkup Packages */}
      <HealthPackagesSection onSelectPackageForBooking={handleSelectService} />

      {/* 6. Why Choose Us (Verified Facts Only) */}
      <WhyChooseUs />

      {/* 7. Quality & Accreditation Section */}
      <AccreditationSection />

      {/* 8. Verified Patient Reviews Carousel */}
      <ReviewsCarousel />

      {/* 9. Location & Clinic Directions */}
      <LocationSection />
    </>
  );
}
