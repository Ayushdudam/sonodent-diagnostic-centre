'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const review = testimonials[currentIndex];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-xs font-semibold text-[#006B35]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#008C45]" />
            <span>Patient Feedback &amp; Experiences</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Rated 5.0 Stars by Over 499 Patients
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Real feedback from patients across Worli, Lower Parel, and Prabhadevi regarding their sonography and diagnostic experience with Dr. Abhay Shah.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="max-w-3xl mx-auto relative">
          <div className="bg-[#F3F9F5] rounded-3xl border border-emerald-100 p-8 sm:p-12 shadow-sm text-center relative overflow-hidden transition-all duration-300">
            <Quote className="w-12 h-12 text-emerald-200 mx-auto mb-4" />

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium mb-6">
              &ldquo;{review.quote}&rdquo;
            </blockquote>

            {/* Patient Meta */}
            <div className="space-y-1">
              <cite className="not-italic font-bold text-slate-900 text-sm block">
                {review.patientName}
              </cite>
              <span className="text-xs text-slate-500 block">
                {review.locality} • Scan: <span className="text-[#006B35] font-semibold">{review.scanOrTest}</span>
              </span>
              <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-white border border-emerald-200 text-[10px] font-semibold text-slate-600">
                {review.verifiedSource}
              </span>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                type="button"
                onClick={prevReview}
                className="p-2.5 rounded-full bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C45]"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-semibold text-slate-500 font-mono px-2">
                {currentIndex + 1} / {testimonials.length}
              </span>
              <button
                type="button"
                onClick={nextReview}
                className="p-2.5 rounded-full bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C45]"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
