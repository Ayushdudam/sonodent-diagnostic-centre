import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation, Bus, Train } from 'lucide-react';
import { businessData } from '@/data/business';
import { buildWhatsAppLink } from '@/lib/utils';

export function LocationSection() {
  const whatsappUrl = buildWhatsAppLink(
    businessData.contact.whatsapp,
    "Hello Dr. Abhay Shah's Sonodent Centre, I am looking for directions to your clinic in Worli."
  );

  return (
    <section id="location-contact" className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008C45]">
            Location &amp; Accessibility
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Convenient Ground Floor Clinic at Worli Naka
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Easily accessible from Ganpatrao Kadam Marg, Lower Parel station, and Currey Road. Ample ground-floor ease for elderly patients and wheelchair accessibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Details Column */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900">
                Clinic Address &amp; Landmarks
              </h3>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#008C45] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block text-sm">Dr. Abhay Shah&apos;s Sonodent</strong>
                    <span>{businessData.address.fullFormatted}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#008C45] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Consultation &amp; Scan Timings</strong>
                    <span>Monday – Saturday: 9:00 AM – 9:00 PM</span>
                    <span className="block text-slate-500 mt-0.5">Sunday: Closed (Urgent cases by prior appointment)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#008C45] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Phone Inquiries</strong>
                    <a href={`tel:${businessData.contact.phone}`} className="text-[#008C45] font-semibold text-sm hover:underline">
                      {businessData.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Transit Landmarks */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
              <span className="font-bold text-slate-900 block">Nearby Transit Landmarks:</span>
              <div className="flex items-center gap-2">
                <Train className="w-4 h-4 text-slate-500 shrink-0" />
                <span><strong>Railway:</strong> Lower Parel Station (1.2 km) &amp; Currey Road Station (1.5 km)</span>
              </div>
              <div className="flex items-center gap-2">
                <Bus className="w-4 h-4 text-slate-500 shrink-0" />
                <span><strong>Bus Stops:</strong> Worli Naka, Poddar Hospital, and Shri Ram Mills</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={businessData.links.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#008C45] hover:bg-[#006B35] text-white font-bold text-xs rounded-xl shadow-sm text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving Directions</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs rounded-xl border border-slate-200 text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Location</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-2 shadow-sm h-[420px] overflow-hidden">
            <iframe
              title="Dr. Abhay Shah's Sonodent Sonography and Diagnostic Centre Map Location"
              src={businessData.links.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1.25rem' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
