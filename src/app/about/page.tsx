import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Award, Heart, CheckCircle2, MapPin, Phone, Clock } from 'lucide-react';
import { businessData } from '@/data/business';

export const metadata: Metadata = {
  title: "About Dr. Abhay Shah & Sonodent Centre | Diagnostic Excellence Worli",
  description: "Learn about Dr. Abhay Shah's Sonodent Sonography and Diagnostic Centre in Worli, Mumbai. Over 20 years of dedicated radiology experience and patient-first care.",
};

export default function AboutPage() {
  return (
    <div className="py-12 lg:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008C45]">
            Clinical Heritage &amp; Leadership
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Dr. Abhay Shah&apos;s Sonodent
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A specialized sonography and diagnostic imaging centre founded on the belief that every scan deserves the personal expertise of a senior consultant radiologist.
          </p>
        </div>

        {/* Doctor Spotlight Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 text-center">
              <div className="w-32 h-32 rounded-full bg-[#008C45] text-white flex items-center justify-center font-bold text-4xl mx-auto shadow-lg mb-4">
                <span>AS</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900">{businessData.doctor.name}</h2>
              <p className="text-xs text-[#008C45] font-semibold">{businessData.doctor.title}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                5.0 ★ Rated (499+ Reviews)
              </span>
            </div>

            <div className="md:col-span-8 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                {businessData.doctor.bio}
              </p>
              <p>
                Unlike large franchise chains where scans are frequently performed by transient sonographers and signed off remotely, <strong>Dr. Abhay Shah personally handles the probe</strong> for every ultrasound examination. This ensures acute pathological nuances are identified live during the scan.
              </p>
              <div className="p-4 bg-[#F3F9F5] rounded-xl border border-emerald-100 text-xs text-[#006B35] font-medium">
                &ldquo;Our commitment is simple: rigorous diagnostic accuracy combined with patient empathy, respectful privacy, and zero rushing.&rdquo;
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <ShieldCheck className="w-6 h-6 text-[#008C45]" />
            <h3 className="font-bold text-slate-900 text-base">Direct Doctor Scans</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every ultrasound scan is conducted and interpreted directly by Dr. Abhay Shah, providing clinical confidence to your referring specialist.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <Heart className="w-6 h-6 text-[#008C45]" />
            <h3 className="font-bold text-slate-900 text-base">Female Staff Comfort</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              A trained female attendant is present for all female patients during pelvic, obstetric, or abdominal scans to ensure dignity and peace of mind.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <Award className="w-6 h-6 text-[#008C45]" />
            <h3 className="font-bold text-slate-900 text-base">Punctual Appointments</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We respect your time. Diagnostic appointments are structured to prevent overcrowding and ensure minimal waiting time in our air-conditioned lounge.
            </p>
          </div>
        </div>

        {/* Clinic Info Strip */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base font-bold text-slate-900">
              Visit Dr. Abhay Shah&apos;s Sonodent in Worli
            </h3>
            <p className="text-xs text-slate-500">
              Shop No. 4, Sai Milan Bldg, Ganpatrao Kadam Marg, Worli Naka, Mumbai 400018
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/#book-callback"
              className="px-5 py-2.5 bg-[#008C45] hover:bg-[#006B35] text-white text-xs font-bold rounded-xl shadow-sm transition-colors"
            >
              Book an Appointment
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors"
            >
              Clinic Directions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
