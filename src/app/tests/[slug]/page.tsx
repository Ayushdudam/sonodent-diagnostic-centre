import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Clock,
  Droplets,
  Calendar,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  ArrowLeft,
  MessageCircle,
  MapPin,
  AlertCircle
} from 'lucide-react';
import { diagnosticTests, DiagnosticTest } from '@/data/tests';
import { businessData } from '@/data/business';
import { buildWhatsAppLink } from '@/lib/utils';
import { BookingForm } from '@/components/BookingForm';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return diagnosticTests.map(test => ({
    slug: test.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const test = diagnosticTests.find(t => t.slug === slug);

  if (!test) {
    return { title: 'Test Not Found' };
  }

  return {
    title: `${test.name} in Worli, Mumbai | ${test.priceDisplay}`,
    description: `Book ${test.name} at Dr. Abhay Shah's Sonodent Diagnostic Centre, Worli. ${test.shortDescription} Preparation guidelines, fast turnaround & expert reporting.`,
    openGraph: {
      title: `${test.name} - Sonodent Diagnostic Centre Worli`,
      description: test.shortDescription,
    }
  };
}

export default async function TestDetailPage({ params }: Props) {
  const { slug } = await params;
  const test = diagnosticTests.find(t => t.slug === slug);

  if (!test) {
    notFound();
  }

  const whatsappUrl = buildWhatsAppLink(
    businessData.contact.whatsapp,
    `Hello Dr. Abhay Shah's Sonodent Centre, I would like to enquire about the ${test.name} (${test.priceDisplay}).`
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalTest',
    name: test.name,
    description: test.shortDescription,
    usedToDiagnose: test.whyNeeded,
    preparation: test.preparation,
    provider: {
      '@type': 'DiagnosticLab',
      name: businessData.name,
      telephone: businessData.contact.phone,
      address: businessData.address.fullFormatted
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="py-10 lg:py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb / Back Navigation */}
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-slate-900">Home</Link>
            <span>/</span>
            <Link href="/tests" className="hover:text-slate-900">Our Tests</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold truncate">{test.shortName}</span>
          </div>

          {/* Test Title Header Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-block px-3 py-1 rounded-md bg-[#F3F9F5] text-xs font-bold text-[#006B35]">
                {test.category}
              </span>
              <div className="text-right">
                <span className="text-3xl font-black text-[#008C45]">
                  {test.priceDisplay}
                </span>
                <span className="block text-[11px] text-slate-500">
                  {test.priceNote}
                </span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {test.name}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {test.shortDescription}
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#book-form"
                className="py-3 px-6 rounded-xl bg-[#008C45] hover:bg-[#006B35] text-white font-bold text-xs shadow-md transition-colors"
              >
                Book This Test / Request Callback
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs border border-emerald-200 transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

          {/* 3-Column Key Test Specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">Sample / Modality</span>
              <p className="text-sm font-bold text-slate-900">{test.sampleType}</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">Report Turnaround</span>
              <p className="text-sm font-bold text-slate-900">{test.turnaroundTime}</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">Collection Location</span>
              <p className="text-sm font-bold text-slate-900">
                {test.homeCollectionAvailable ? 'Clinic or Home Sample Collection' : 'In-Clinic Only (Worli Naka)'}
              </p>
            </div>
          </div>

          {/* Detailed Clinical Sections */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
            {/* Why Needed */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#008C45]" />
                <span>Why Would I Need This Diagnostic Test?</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed pl-7">
                {test.whyNeeded}
              </p>
            </div>

            {/* Preparation & Fasting */}
            <div className="space-y-3 p-5 rounded-2xl bg-[#F3F9F5] border border-emerald-100">
              <h2 className="text-lg font-bold text-[#006B35] flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#008C45]" />
                <span>Preparation &amp; Patient Fasting Guidelines</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed pl-7">
                {test.preparation}
              </p>
            </div>

            {/* Doctor Note */}
            <div className="space-y-2 text-xs text-slate-600 pl-7 border-l-2 border-[#008C45]">
              <strong className="text-slate-900 block">Clinical Supervision &amp; Reporting:</strong>
              <p>{test.clinicalNote}</p>
            </div>

            {/* Non-diagnostic medical advisory */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Patient Advisory:</strong> This diagnostic test serves as an objective investigation to assist your medical doctor. Normal reference ranges and scan impressions should always be evaluated in correlation with your individual symptoms and medical history.
              </span>
            </div>
          </div>

          {/* Booking Form Integration */}
          <div id="book-form" className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#008C45]">
                Fast Appointment Booking
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Book {test.shortName} at Sonodent Worli
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill the request below. Our clinical front desk will contact you to confirm timing and preparations.
              </p>
            </div>

            <BookingForm initialServiceId={test.id} initialVisitType={test.homeCollectionAvailable ? 'clinic' : 'clinic'} />
          </div>
        </div>
      </div>
    </>
  );
}
