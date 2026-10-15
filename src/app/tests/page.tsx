'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronRight, Droplets, Clock, ShieldCheck, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { diagnosticTests } from '@/data/tests';

export default function TestsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Ultrasound & Sonography', 'Color Doppler Studies', 'Pathology & Blood Tests'];

  const filteredTests = diagnosticTests.filter(test => {
    const matchesCategory = activeCategory === 'All' || test.category === activeCategory;
    const matchesSearch =
      test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 lg:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-xs font-semibold text-[#006B35]">
            <Sparkles className="w-3.5 h-3.5 text-[#008C45]" />
            <span>Full Diagnostic Test Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Diagnostic Tests &amp; Clinical Sonography
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Search our comprehensive diagnostic index. High-frequency ultrasound, color Doppler hemodynamics, and pathology blood panels. Scans personally conducted by Dr. Abhay Shah.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#008C45] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by test name, organ, or condition..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#008C45] focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Test Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map(test => (
            <div
              key={test.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[11px] font-bold text-[#008C45] uppercase tracking-wider">
                    {test.category}
                  </span>
                  <span className="text-sm font-extrabold text-slate-900">
                    {test.priceDisplay}
                  </span>
                </div>

                <h2 className="text-base font-bold text-slate-900 leading-snug mb-2 hover:text-[#008C45] transition-colors">
                  <Link href={`/tests/${test.slug}`}>
                    {test.name}
                  </Link>
                </h2>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                  {test.shortDescription}
                </p>

                <div className="space-y-1.5 text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl mb-4">
                  <div><strong>Sample:</strong> {test.sampleType}</div>
                  <div><strong>Turnaround:</strong> {test.turnaroundTime}</div>
                  <div><strong>Preparation:</strong> {test.preparation.slice(0, 75)}...</div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <Link
                  href={`/tests/${test.slug}`}
                  className="text-xs font-semibold text-[#008C45] hover:underline flex items-center gap-1"
                >
                  <span>Preparation &amp; FAQs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/#book-callback"
                  className="py-2 px-3.5 bg-[#008C45] hover:bg-[#006B35] text-white text-xs font-bold rounded-xl shadow-sm transition-colors flex items-center gap-1"
                >
                  <Calendar className="w-3 h-3" />
                  <span>Book Test</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredTests.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
            <p className="text-slate-600 text-sm">No diagnostic tests found matching your search term.</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-2 text-xs text-[#008C45] font-bold hover:underline"
            >
              Clear filters and view all tests
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
