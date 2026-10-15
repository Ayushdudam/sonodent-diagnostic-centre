'use client';

import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { businessData } from '@/data/business';
import { buildWhatsAppLink } from '@/lib/utils';

export function FloatingActionDock() {
  const whatsappUrl = buildWhatsAppLink(
    businessData.contact.whatsapp,
    "Hello Dr. Abhay Shah's Sonodent Centre, I would like to enquire about diagnostic test availability."
  );

  return (
    <>
      {/* Desktop Floating Pill - Bottom Right (Engineered not to cover form buttons) */}
      <aside aria-label="Quick contact options" className="hidden md:flex fixed bottom-6 right-6 z-30 flex-col gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 group"
          aria-label="Enquire on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="text-xs font-bold tracking-wide">WhatsApp Enquiry</span>
        </a>
        <a
          href={`tel:${businessData.contact.phone}`}
          className="flex items-center gap-2.5 bg-[#006B35] hover:bg-[#008C45] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 group"
          aria-label="Call Sonodent clinic directly"
        >
          <Phone className="w-5 h-5 text-white" />
          <span className="text-xs font-bold tracking-wide">Call: {businessData.contact.phoneDisplay}</span>
        </a>
      </aside>

      {/* Mobile Bottom Fixed Action Bar - Accessible, clean, no obstruction */}
      <nav aria-label="Mobile quick actions" className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-slate-200 shadow-2xl px-3 py-2 flex items-center justify-between gap-2">
        <a
          href={`tel:${businessData.contact.phone}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 bg-slate-50 text-slate-800 rounded-lg border border-slate-200 active:bg-slate-100"
          aria-label="Call clinic"
        >
          <Phone className="w-4 h-4 text-[#008C45] mb-0.5" />
          <span className="text-[11px] font-bold">Call Clinic</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 bg-emerald-50 text-emerald-900 rounded-lg border border-emerald-200 active:bg-emerald-100"
          aria-label="WhatsApp Enquiry"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>
        <a
          href="/#book-callback"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 bg-[#008C45] text-white rounded-lg active:bg-[#006B35] shadow-sm"
          aria-label="Request callback"
        >
          <Calendar className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px] font-bold">Book / Callback</span>
        </a>
      </nav>
    </>
  );
}
