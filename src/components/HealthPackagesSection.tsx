'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle,
  Search,
  Calendar,
  X,
  Clock,
  Sparkles,
  ArrowRight,
  Info
} from 'lucide-react';
import { healthPackages, HealthPackage } from '@/data/packages';

interface HealthPackagesSectionProps {
  onSelectPackageForBooking?: (packageId: string) => void;
}

export function HealthPackagesSection({ onSelectPackageForBooking }: HealthPackagesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalPackage, setActiveModalPackage] = useState<HealthPackage | null>(null);

  const categories = ['All', 'Full Body', 'Senior Citizens', 'Diabetes & Heart', 'Women\'s Health', 'Essential'];

  const filteredPackages = healthPackages.filter(pkg => {
    const matchesCategory = selectedCategory === 'All' || pkg.category === selectedCategory;
    const matchesSearch =
      pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.targetAudience.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.testsIncluded.some(cat =>
        cat.items.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    return matchesCategory && matchesSearch;
  });

  const handleBookPackage = (pkgId: string) => {
    if (onSelectPackageForBooking) {
      onSelectPackageForBooking(pkgId);
    }
    const formElement = document.getElementById('book-callback');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveModalPackage(null);
  };

  return (
    <section id="health-packages" className="py-16 lg:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3F9F5] text-xs font-semibold text-[#006B35]">
            <Sparkles className="w-3.5 h-3.5 text-[#008C45]" />
            <span>Preventive Wellness Care</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Health Checkup Packages
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Multi-parameter pathology panels engineered to catch subtle hormonal, metabolic, and cardiovascular shifts early. Same-day digital reports.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5" role="tablist">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C45] ${
                  selectedCategory === cat
                    ? 'bg-[#008C45] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search package or test..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 text-xs bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#008C45]"
            />
          </div>
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map(pkg => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              <div>
                {/* Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-[#008C45] uppercase tracking-wider">
                    {pkg.category}
                  </span>
                  {pkg.badge && (
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-[#006B35] font-bold text-[11px]">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2">
                  {pkg.name}
                </h3>

                {/* Target Audience */}
                <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                  {pkg.targetAudience}
                </p>

                {/* Pricing Block */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 mb-5 flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl font-black text-slate-900">{pkg.priceDisplay}</span>
                    <span className="ml-2 text-xs text-slate-400 line-through">{pkg.originalPriceDisplay}</span>
                  </div>
                  <span className="text-xs font-semibold text-[#008C45] bg-[#F3F9F5] px-2 py-0.5 rounded">
                    {pkg.parametersCount} Parameters
                  </span>
                </div>

                {/* Included Highlights */}
                <div className="space-y-2 mb-6">
                  <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Key Profile Breakdown:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {pkg.testsIncluded.slice(0, 4).map((group, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#008C45] shrink-0" />
                        <span className="truncate">{group.categoryName}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setActiveModalPackage(pkg)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs text-center transition-colors"
                >
                  View All Tests
                </button>
                <button
                  type="button"
                  onClick={() => handleBookPackage(pkg.id)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#008C45] hover:bg-[#006B35] text-white font-bold text-xs text-center shadow-sm transition-colors flex items-center justify-center gap-1"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Package</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-sm">No health packages found matching your filter.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-2 text-xs text-[#008C45] font-bold hover:underline"
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Modal: Full Package Details */}
        {activeModalPackage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6 relative">
              <button
                type="button"
                onClick={() => setActiveModalPackage(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-bold text-[#008C45] uppercase tracking-wider">
                  {activeModalPackage.category} Profile
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {activeModalPackage.name}
                </h3>
                <p className="text-xs text-slate-600">
                  {activeModalPackage.shortDescription}
                </p>
              </div>

              {/* Pricing & Prep Summary */}
              <div className="grid grid-cols-2 gap-3 p-4 bg-[#F3F9F5] rounded-2xl border border-emerald-100">
                <div>
                  <span className="block text-xs text-slate-500">Package Fee:</span>
                  <span className="text-2xl font-black text-[#006B35]">
                    {activeModalPackage.priceDisplay}
                  </span>
                  <span className="text-xs text-slate-400 line-through ml-2">
                    {activeModalPackage.originalPriceDisplay}
                  </span>
                </div>
                <div>
                  <span className="block text-xs text-slate-500">Total Parameters:</span>
                  <span className="text-xl font-bold text-slate-900">
                    {activeModalPackage.parametersCount} Tests
                  </span>
                </div>
              </div>

              {/* Fasting & Instructions */}
              <div className="p-3.5 bg-slate-50 rounded-xl text-xs text-slate-600 space-y-1">
                <p><strong>Fasting Instructions:</strong> {activeModalPackage.preparation}</p>
                <p><strong>Report Delivery:</strong> {activeModalPackage.reportTurnaround}</p>
              </div>

              {/* Full Test Breakdown */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm">
                  Complete Test Breakdown:
                </h4>
                <div className="space-y-4 text-xs">
                  {activeModalPackage.testsIncluded.map((group, idx) => (
                    <div key={idx} className="border-b border-slate-100 pb-3">
                      <strong className="block text-[#006B35] font-semibold mb-1">
                        {group.categoryName}
                      </strong>
                      <p className="text-slate-600 leading-relaxed">
                        {group.items.join(' • ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalPackage(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => handleBookPackage(activeModalPackage.id)}
                  className="px-6 py-2.5 rounded-xl bg-[#008C45] hover:bg-[#006B35] text-white font-bold text-xs shadow-md"
                >
                  Book This Package
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
