import React from 'react';
import { Shield, CheckCircle2, FileCheck, AlertCircle } from 'lucide-react';
import { businessData } from '@/data/business';

export function AccreditationSection() {
  return (
    <section className="py-14 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center lg:text-left space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-100 text-xs font-semibold text-[#006B35]">
                <Shield className="w-3.5 h-3.5 text-[#008C45]" />
                <span>Quality Assurance &amp; Standards</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                Rigorous Diagnostic Protocols
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We maintain uncompromising accuracy standards through standardized sample collection, daily analyzer calibration, and verified medical radiologist supervision.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {businessData.accreditations.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border text-xs leading-relaxed flex items-start gap-3 ${
                      item.isPlaceholder
                        ? 'bg-amber-50/50 border-amber-200 text-amber-900'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    {item.isPlaceholder ? (
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-[#008C45] shrink-0 mt-0.5" />
                    )}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-slate-500 pt-1">
                Notice: We adhere strictly to verified clinical facts. Regulatory documentation, machine calibration logs, and PCPNDT registration certificates are proudly available at our clinic reception.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
