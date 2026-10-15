'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Star, Clock, MapPin, Award, CheckCircle, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { businessData } from '@/data/business';
import { buildWhatsAppLink } from '@/lib/utils';
import { diagnosticTests } from '@/data/tests';

export function Hero() {
  const [quickPhone, setQuickPhone] = useState('');
  const [quickName, setQuickName] = useState('');
  const [quickTest, setQuickTest] = useState('usg-abdomen-pelvis');
  const [quickStatus, setQuickStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const whatsappEnquiryUrl = buildWhatsAppLink(
    businessData.contact.whatsapp,
    "Hello Dr. Abhay Shah's Sonodent Centre, I would like to enquire about test booking."
  );

  const handleQuickCallback = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickPhone || quickPhone.length < 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    setQuickStatus('loading');
    try {
      const res = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: quickName || 'Patient (Quick Callback)',
          phone: quickPhone,
          serviceId: quickTest,
          visitType: 'clinic',
          preferredDate: new Date().toISOString().split('T')[0],
          timeSlot: 'Morning (09:00 AM – 12:00 PM)',
          consent: true,
          honeypot: ''
        })
      });

      if (res.ok) {
        setQuickStatus('success');
      } else {
        setQuickStatus('error');
      }
    } catch {
      setQuickStatus('error');
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F3F9F5] via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
      {/* Background Subtle Geometric Accent */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-20 w-72 h-72 rounded-full bg-teal-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Credibility Badges, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-200 text-xs font-semibold text-slate-800 shadow-sm mx-auto lg:mx-0">
              <span className="flex items-center text-amber-500">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </span>
              <span className="font-bold text-slate-900">5.0 Star Rated</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600">499+ Verified Reviews in Worli Naka</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Accurate Diagnostic <span className="text-[#008C45]">Ultrasound</span> &amp; Pathology in Worli
            </h1>

            {/* Descriptive Body Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Led by <strong className="text-slate-900 font-semibold">Dr. Abhay Shah</strong> with over 20 years of clinical ultrasound experience. Every sonography and Doppler scan is personally performed and reported by Dr. Shah, with dedicated female staff for patient comfort.
            </p>

            {/* Verified Facts Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700 max-w-xl mx-auto lg:mx-0 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#008C45] shrink-0" />
                <span>Personally performed by Dr. Abhay Shah</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#008C45] shrink-0" />
                <span>Female staff present for all female scans</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#008C45] shrink-0" />
                <span>High-resolution color Doppler imaging</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#008C45] shrink-0" />
                <span>Punctual appointments, zero long queues</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <a
                href="#test-explorer"
                className="px-6 py-3.5 rounded-xl bg-[#008C45] hover:bg-[#006B35] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#008C45]"
              >
                <span>Explore All Diagnostic Tests</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/home-collection"
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-sm transition-all flex items-center gap-2"
              >
                <span>Book Home Collection</span>
              </Link>

              <a
                href={whatsappEnquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-sm border border-emerald-200 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Trust Card & Center Highlights */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full pointer-events-none" />

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F3F9F5] text-xs font-semibold text-[#006B35]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#008C45]" />
                  <span>Verified Clinical Facility</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Precision Ultrasound &amp; Diagnostics
                </h3>
                <p className="text-xs text-slate-500">
                  Shop No. 4, Sai Milan Bldg, Ganpatrao Kadam Marg, Worli Naka
                </p>
              </div>

              {/* Verified Trust Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <span className="block text-2xl font-extrabold text-[#008C45]">5.0 ★</span>
                  <span className="text-[11px] font-medium text-slate-600">499+ Authentic Reviews</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <span className="block text-2xl font-extrabold text-[#008C45]">20+</span>
                  <span className="text-[11px] font-medium text-slate-600">Years Clinical Practice</span>
                </div>
              </div>

              {/* Consultation Details */}
              <div className="space-y-2.5 text-xs text-slate-600 border-t border-slate-100 pt-4">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#008C45] shrink-0" />
                  <span><strong>Timings:</strong> 9:00 AM – 9:00 PM (Monday – Saturday)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#008C45] shrink-0" />
                  <span><strong>Direct Line:</strong> +91 98201 27749</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#008C45] shrink-0" />
                  <span><strong>Landmark:</strong> Opp. Shri Ram Mills, Near Shiv Sena Shakha</span>
                </div>
              </div>

              {/* Quick Callback CTA */}
              <div className="pt-2">
                <a
                  href="#book-callback"
                  className="w-full py-3 px-4 rounded-xl bg-[#006B35] hover:bg-[#008C45] text-white font-bold text-sm tracking-wide shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Request Callback / Book Appointment</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Callback Form Strip Beneath Hero */}
        <div id="quick-callback-strip" className="mt-12 lg:mt-16 bg-white rounded-2xl shadow-lg border border-slate-200/80 p-5 sm:p-6">
          <div className="mb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#008C45]">
                Fast-Track Callback Request
              </span>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Need a Test Slot Today? We Will Call You Back
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              No prepayment required • Direct coordination
            </span>
          </div>

          {quickStatus === 'success' ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Thank you! Our front desk coordinator will call you back shortly.</span>
              </div>
              <button
                type="button"
                onClick={() => setQuickStatus('idle')}
                className="text-xs font-semibold underline text-emerald-900"
              >
                Reset
              </button>
            </div>
          ) : (
            <form onSubmit={handleQuickCallback} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <input
                type="text"
                placeholder="Patient Full Name"
                value={quickName}
                onChange={e => setQuickName(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#008C45]"
                required
              />

              <div className="relative">
                <span className="absolute left-3 top-2.5 text-sm text-slate-500 font-medium">+91</span>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  value={quickPhone}
                  onChange={e => setQuickPhone(e.target.value)}
                  className="w-full pl-11 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#008C45]"
                  required
                />
              </div>

              <select
                value={quickTest}
                onChange={e => setQuickTest(e.target.value)}
                className="px-3 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#008C45]"
              >
                {diagnosticTests.slice(0, 8).map(test => (
                  <option key={test.id} value={test.id}>
                    {test.shortName} ({test.priceDisplay})
                  </option>
                ))}
              </select>

              <button
                type="submit"
                disabled={quickStatus === 'loading'}
                className="py-2.5 px-4 rounded-xl bg-[#008C45] hover:bg-[#006B35] text-white font-bold text-sm transition-all shadow-sm flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#008C45]"
              >
                <span>{quickStatus === 'loading' ? 'Sending...' : 'Request Call Back'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
