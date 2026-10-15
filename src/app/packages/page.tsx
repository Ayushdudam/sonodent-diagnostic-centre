'use client';

import React from 'react';
import Link from 'next/link';
import { HealthPackagesSection } from '@/components/HealthPackagesSection';
import { Sparkles, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { healthPackages } from '@/data/packages';

export default function PackagesPage() {
  return (
    <div className="py-12 lg:py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-xs font-semibold text-[#006B35]">
            <Sparkles className="w-3.5 h-3.5 text-[#008C45]" />
            <span>Preventative Healthcare Profiles</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Preventative Health Checkup Packages
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Curated diagnostic packages designed for early detection of metabolic disorders, heart risk, hormonal imbalances, and organ strain. Same-day digital reporting.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">
            Compare Health Checkup Packages at a Glance
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-white">
                  <th className="p-3 font-bold text-slate-900">Package Name</th>
                  <th className="p-3 font-bold text-slate-900">Parameters</th>
                  <th className="p-3 font-bold text-slate-900">Best For</th>
                  <th className="p-3 font-bold text-slate-900">Price</th>
                  <th className="p-3 font-bold text-slate-900">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {healthPackages.map(pkg => (
                  <tr key={pkg.id} className="hover:bg-emerald-50/40 transition-colors">
                    <td className="p-3 font-semibold text-slate-900">
                      {pkg.name}
                      {pkg.badge && (
                        <span className="ml-2 px-2 py-0.5 rounded bg-emerald-100 text-[#006B35] font-bold text-[10px]">
                          {pkg.badge}
                        </span>
                      )}
                    </td>
                    <td className="p-3 text-slate-600 font-semibold">{pkg.parametersCount} Tests</td>
                    <td className="p-3 text-slate-600 max-w-xs">{pkg.targetAudience}</td>
                    <td className="p-3 font-bold text-[#008C45] text-sm">
                      {pkg.priceDisplay}
                      <span className="block text-[10px] text-slate-400 line-through">{pkg.originalPriceDisplay}</span>
                    </td>
                    <td className="p-3">
                      <Link
                        href="/#book-callback"
                        className="inline-block px-3 py-1.5 bg-[#008C45] hover:bg-[#006B35] text-white font-bold rounded-lg transition-colors text-center"
                      >
                        Book Package
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Embed full interactive section with search & details modal */}
        <HealthPackagesSection />
      </div>
    </div>
  );
}
