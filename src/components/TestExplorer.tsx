'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ChevronDown,
  Clock,
  Droplets,
  Calendar,
  AlertCircle,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Info,
  Sparkles
} from 'lucide-react';
import { diagnosticTests, DiagnosticTest } from '@/data/tests';

interface TestExplorerProps {
  onSelectTestForBooking?: (testId: string) => void;
}

export function TestExplorer({ onSelectTestForBooking }: TestExplorerProps) {
  const [activeTestId, setActiveTestId] = useState<string>(diagnosticTests[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(diagnosticTests[0].id);
  const testListRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Ultrasound & Sonography', 'Color Doppler Studies', 'Pathology & Blood Tests'];

  const filteredTests = selectedCategory === 'All'
    ? diagnosticTests
    : diagnosticTests.filter(t => t.category === selectedCategory);

  const activeTest = diagnosticTests.find(t => t.id === activeTestId) || diagnosticTests[0];

  // Handle keyboard navigation for accessible role="tablist"
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % filteredTests.length;
      setActiveTestId(filteredTests[nextIndex].id);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + filteredTests.length) % filteredTests.length;
      setActiveTestId(filteredTests[prevIndex].id);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActiveTestId(filteredTests[0].id);
    } else if (e.key === 'End') {
      e.preventDefault();
      setActiveTestId(filteredTests[filteredTests.length - 1].id);
    }
  };

  const handleBookTest = (testId: string) => {
    if (onSelectTestForBooking) {
      onSelectTestForBooking(testId);
    }
    // Smooth scroll to callback form
    const formElement = document.getElementById('book-callback');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="test-explorer" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3F9F5] text-xs font-semibold text-[#006B35]">
            <Sparkles className="w-3.5 h-3.5 text-[#008C45]" />
            <span>Diagnostic Directory &amp; Ultrasound Explorer</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore Medical Tests &amp; Clinical Sonography
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Select any test to review sample preparation, clinical purpose, fasting guidelines, and confirmed charges. All sonography scans are conducted personally by Dr. Abhay Shah.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8" role="tablist" aria-label="Test Categories">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                const first = cat === 'All' ? diagnosticTests[0] : diagnosticTests.find(t => t.category === cat);
                if (first) {
                  setActiveTestId(first.id);
                  setMobileExpandedId(first.id);
                }
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C45] ${
                selectedCategory === cat
                  ? 'bg-[#008C45] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* DESKTOP TWO-PANEL EXPLORER (Hidden on Mobile) */}
        <div className="hidden lg:grid grid-cols-12 gap-6 bg-slate-50 p-6 rounded-3xl border border-slate-200">
          {/* Left Panel: List with full wrapping test names, active state (green fill + arrow), keyboard-navigable */}
          <div
            ref={testListRef}
            role="tablist"
            aria-orientation="vertical"
            aria-label="Diagnostic test list"
            className="col-span-5 bg-white rounded-2xl border border-slate-200 p-2.5 space-y-1.5 max-h-[640px] overflow-y-auto shadow-sm"
          >
            {filteredTests.map((test, index) => {
              const isActive = test.id === activeTestId;
              return (
                <button
                  key={test.id}
                  id={`tab-${test.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tabpanel-${test.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onKeyDown={e => handleKeyDown(e, index)}
                  onClick={() => setActiveTestId(test.id)}
                  className={`w-full text-left p-3.5 rounded-xl transition-all flex items-center justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C45] ${
                    isActive
                      ? 'bg-[#008C45] text-white shadow-md font-semibold'
                      : 'text-slate-800 hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <div className="flex-1 pr-2">
                    <span className="block text-sm leading-snug break-words">
                      {test.name}
                    </span>
                    <span className={`block text-xs mt-1 ${isActive ? 'text-emerald-100' : 'text-slate-500'}`}>
                      {test.category} • {test.priceDisplay}
                    </span>
                  </div>
                  <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${
                    isActive ? 'text-white translate-x-1' : 'text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Panel: Banner, test details, preparation, price, book now */}
          <div
            id={`tabpanel-${activeTest.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTest.id}`}
            className="col-span-7 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between transition-all duration-300 animate-in fade-in"
          >
            <div className="space-y-6">
              {/* Illustrated Header Badge */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-3 py-1 rounded-md bg-[#F3F9F5] text-xs font-bold text-[#006B35]">
                      {activeTest.category}
                    </span>
                    {activeTest.isPopular && (
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-800 text-xs font-semibold">
                        Frequently Requested
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">
                    {activeTest.name}
                  </h3>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-2xl font-black text-[#008C45]">
                    {activeTest.priceDisplay}
                  </span>
                  <span className="block text-[11px] text-slate-500">
                    {activeTest.priceNote}
                  </span>
                </div>
              </div>

              {/* Short Explanation */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Test Overview
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeTest.shortDescription}
                </p>
              </div>

              {/* Why Would I Need This Test? */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-1.5">
                  <Info className="w-4 h-4 text-[#008C45]" />
                  <span>Why would I need this test?</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeTest.whyNeeded}
                </p>
              </div>

              {/* Preparation & Fasting Guidelines */}
              <div className="p-4 rounded-xl bg-[#F3F9F5] border border-emerald-100">
                <div className="flex items-center gap-2 text-[#006B35] font-bold text-sm mb-1.5">
                  <Clock className="w-4 h-4 text-[#008C45]" />
                  <span>Preparation &amp; Fasting Guidelines</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {activeTest.preparation}
                </p>
              </div>

              {/* Metadata Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-700 pt-1">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="block text-[10px] text-slate-500 font-medium uppercase">Sample / Mode</span>
                  <span className="font-semibold text-slate-900 mt-0.5 block">{activeTest.sampleType}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="block text-[10px] text-slate-500 font-medium uppercase">Report Turnaround</span>
                  <span className="font-semibold text-slate-900 mt-0.5 block">{activeTest.turnaroundTime}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl col-span-2 sm:col-span-1">
                  <span className="block text-[10px] text-slate-500 font-medium uppercase">Home Collection</span>
                  <span className="font-semibold text-slate-900 mt-0.5 block">
                    {activeTest.homeCollectionAvailable ? 'Available at Home' : 'In-Clinic Only'}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#008C45]" />
                <span>{activeTest.clinicalNote}</span>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href={`/tests/${activeTest.slug}`}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                >
                  Full Details &amp; FAQs
                </Link>

                <button
                  type="button"
                  onClick={() => handleBookTest(activeTest.id)}
                  className="px-5 py-2.5 rounded-xl bg-[#008C45] hover:bg-[#006B35] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#008C45]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book This Test</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE ACCORDION EXPLORER (Visible only on mobile/tablet) */}
        <div className="lg:hidden space-y-3">
          {filteredTests.map((test) => {
            const isExpanded = mobileExpandedId === test.id;
            return (
              <div
                key={test.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setMobileExpandedId(isExpanded ? null : test.id)}
                  aria-expanded={isExpanded}
                  className={`w-full text-left p-4 flex items-center justify-between gap-3 transition-colors ${
                    isExpanded ? 'bg-[#F3F9F5] border-b border-emerald-100' : 'bg-white'
                  }`}
                >
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {test.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-bold text-[#008C45]">{test.priceDisplay}</span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs text-slate-500">{test.category}</span>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                    isExpanded ? 'rotate-180 text-[#008C45]' : ''
                  }`} />
                </button>

                {isExpanded && (
                  <div className="p-4 space-y-4 text-xs text-slate-700 bg-white">
                    <p className="leading-relaxed text-slate-600">
                      {test.shortDescription}
                    </p>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Why would I need this?</span>
                      <p className="text-slate-600 leading-relaxed">{test.whyNeeded}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#F3F9F5] border border-emerald-100">
                      <span className="font-bold text-[#006B35] block mb-1">Preparation &amp; Fasting:</span>
                      <p className="text-slate-700 leading-relaxed">{test.preparation}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                      <div className="bg-slate-50 p-2.5 rounded-lg">
                        <span className="text-slate-500 block">Sample:</span>
                        <span className="font-semibold text-slate-900">{test.sampleType}</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-lg">
                        <span className="text-slate-500 block">Report:</span>
                        <span className="font-semibold text-slate-900">{test.turnaroundTime}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleBookTest(test.id)}
                        className="flex-1 py-2.5 px-4 bg-[#008C45] text-white font-bold rounded-xl text-center shadow-sm"
                      >
                        Book Test
                      </button>
                      <Link
                        href={`/tests/${test.slug}`}
                        className="py-2.5 px-3 bg-slate-100 text-slate-800 font-semibold rounded-xl text-center"
                      >
                        FAQs
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
