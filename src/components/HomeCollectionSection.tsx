'use client';

import React from 'react';
import Link from 'next/link';
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  ShieldAlert,
  ShieldCheck,
  Truck,
  FileCheck2,
  Phone,
  MessageCircle,
  AlertCircle
} from 'lucide-react';
import { businessData } from '@/data/business';
import { buildWhatsAppLink } from '@/lib/utils';

export function HomeCollectionSection() {
  const whatsappUrl = buildWhatsAppLink(
    businessData.contact.whatsapp,
    "Hello Dr. Abhay Shah's Sonodent Centre, I would like to schedule a home sample collection."
  );

  const steps = [
    {
      step: '01',
      title: 'Book / Request Callback',
      description: 'Fill in your address and desired test online, or message our team directly on WhatsApp.'
    },
    {
      step: '02',
      title: 'Clinical Slot Confirmation',
      description: 'Our reception desk calls you back within 30 minutes to confirm the appointment slot and fasting instructions.'
    },
    {
      step: '03',
      title: 'Certified Phlebotomist Visit',
      description: 'A trained technician arrives in full PPE with pre-barcoded vacutainer tubes and temperature-controlled sample carriers.'
    },
    {
      step: '04',
      title: 'High-Precision Processing',
      description: 'Samples are transferred directly to the diagnostic centre and analyzed using automated hematology and biochemistry analyzers.'
    },
    {
      step: '05',
      title: 'Digital PDF Report Delivery',
      description: 'Verified test reports are sent straight to your WhatsApp and email the same evening.'
    }
  ];

  return (
    <section id="home-collection" className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#F3F9F5] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-xs font-semibold text-[#006B35]">
            <Truck className="w-3.5 h-3.5 text-[#008C45]" />
            <span>Doorstep Diagnostic Pathology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Home Sample Collection Across South Mumbai
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Hygienic, certified blood and urine sample collection in the comfort of your home. Perfect for senior citizens, expecting mothers, and busy professionals.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm relative flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <span className="text-2xl font-black text-emerald-200 block mb-2 font-mono">
                  {item.step}
                </span>
                <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Service Area & Diagnostic Disclaimers */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Coverage Localities &amp; Collection Protocol
              </h3>

              <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <p>
                  <strong>Active Service Areas:</strong> Worli, Worli Sea Face, Upper Worli, Lower Parel, Prabhadevi, Mahalaxmi, and Currey Road.
                </p>
                <p>
                  <strong>Collection Timings:</strong> 6:30 AM – 1:00 PM (Daily, Monday to Sunday). Morning fasting slots available upon prior booking.
                </p>
                <p>
                  <strong>Service Fee:</strong> {businessData.homeCollection.serviceFee}
                </p>
              </div>

              {/* Crucial Diagnostic Scope Notice */}
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Important Scope Notice:</strong> Home sample collection is strictly for blood and urine pathology tests. Sonography, ultrasound, and Doppler studies require calibrated clinic transducers and are personally conducted at our Worli Naka facility by Dr. Abhay Shah.
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F3F9F5] p-6 rounded-2xl border border-emerald-100 flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#008C45] text-white flex items-center justify-center shadow-md">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">
                  Need a Phlebotomist Tomorrow Morning?
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Book before 8:00 PM for priority early morning fasting slots.
                </p>
              </div>

              <div className="w-full flex flex-col gap-2 pt-1">
                <a
                  href="#book-callback"
                  className="w-full py-2.5 px-4 bg-[#008C45] hover:bg-[#006B35] text-white font-bold text-xs rounded-xl shadow-sm transition-colors text-center"
                >
                  Schedule Home Collection
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-white hover:bg-slate-50 text-emerald-800 font-semibold text-xs rounded-xl border border-emerald-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
