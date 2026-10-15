import React from 'react';
import { UserCheck, ShieldCheck, HeartHandshake, Microscope, Clock, MapPin } from 'lucide-react';
import { businessData } from '@/data/business';

export function WhyChooseUs() {
  const icons = [UserCheck, HeartHandshake, Microscope, Clock, ShieldCheck, MapPin];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008C45]">
            Verified Diagnostic Quality
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Patients &amp; Doctors Trust Dr. Abhay Shah
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every clinical protocol is built around diagnostic accuracy, respectful bedside empathy, and punctual reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessData.features.map((feature, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-[#F3F9F5]/40 rounded-2xl p-6 border border-emerald-100/80 hover:bg-[#F3F9F5] transition-colors space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-emerald-200 text-[#008C45] flex items-center justify-center shadow-sm">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
