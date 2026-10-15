import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, MessageCircle, Clock, Shield, CheckCircle2, AlertCircle } from 'lucide-react';
import { businessData } from '@/data/business';
import { buildWhatsAppLink } from '@/lib/utils';

export function Footer() {
  const whatsappUrl = buildWhatsAppLink(
    businessData.contact.whatsapp,
    "Hello Dr. Abhay Shah's Sonodent Centre, I would like to enquire about diagnostic services."
  );

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-24 md:pb-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#008C45] flex items-center justify-center text-white font-bold shadow-md">
                <span className="text-xl">S</span>
                <span className="text-xs text-emerald-200">D</span>
              </div>
              <div>
                <h3 className="font-bold text-white text-base leading-tight">
                  Dr. Abhay Shah&apos;s Sonodent
                </h3>
                <p className="text-xs text-emerald-400">Sonography &amp; Diagnostic Centre</p>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Serving Upper Worli, Lower Parel, Prabhadevi, and South Mumbai with patient-first sonography, vascular color Doppler studies, and precision pathology checkups.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800 border border-slate-700 text-xs text-emerald-300">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>5.0 ★ Rated (499+ Verified Reviews)</span>
            </div>
          </div>

          {/* Col 2: Diagnostic Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4 text-emerald-400">
              Key Diagnostic Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/tests/ultrasound-abdomen-pelvis" className="hover:text-white transition-colors">
                  Ultrasound Abdomen &amp; Pelvis (USG)
                </Link>
              </li>
              <li>
                <Link href="/tests/pelvic-ultrasound" className="hover:text-white transition-colors">
                  Pelvic &amp; TVS Sonography (PCOS / Ovarian)
                </Link>
              </li>
              <li>
                <Link href="/tests/peripheral-vascular-doppler" className="hover:text-white transition-colors">
                  Limb Arterial &amp; Venous Color Doppler
                </Link>
              </li>
              <li>
                <Link href="/tests/carotid-color-doppler" className="hover:text-white transition-colors">
                  Carotid Color Doppler (Stroke Risk)
                </Link>
              </li>
              <li>
                <Link href="/tests/thyroid-neck-ultrasound" className="hover:text-white transition-colors">
                  Thyroid &amp; Soft Tissue Neck Ultrasound
                </Link>
              </li>
              <li>
                <Link href="/tests/complete-blood-count-cbc" className="hover:text-white transition-colors">
                  Complete Blood Count (CBC + ESR)
                </Link>
              </li>
              <li>
                <Link href="/tests/hba1c-diabetes-test" className="hover:text-white transition-colors">
                  HbA1c &amp; Diabetes Glucose Panel
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-emerald-400 font-medium hover:underline">
                  View All Health Checkup Packages →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4 text-emerald-400">
              Patient Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home Page</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Dr. Abhay Shah</Link>
              </li>
              <li>
                <Link href="/home-collection" className="hover:text-white transition-colors">Home Sample Collection Guide</Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-white transition-colors">Preventive Health Packages</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Clinic Directions &amp; Transit</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">Patient Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Diagnostic Service</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Clinic Hours */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4 text-emerald-400">
              Clinic &amp; Timings
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Shop No. 4, Ground Floor, Sai Milan Bldg, Ganpatrao Kadam Marg, near Worli Naka (Opp. Shri Ram Mills), Mumbai 400018
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Monday – Saturday: 9:00 AM – 9:00 PM</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${businessData.contact.phone}`} className="hover:text-white font-medium">
                  {businessData.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  WhatsApp: {businessData.contact.whatsappDisplay}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={businessData.links.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-white font-medium border border-slate-700 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Diagnostic Terms & Legal Bullets (Metropolis-style rewritten for Sonodent) */}
        <div className="py-8 border-b border-slate-800 text-xs text-slate-400 space-y-3">
          <div className="flex items-center gap-2 text-slate-200 font-semibold">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Important Terms, Conditions &amp; Diagnostic Disclaimers [Marked for Legal Review]:</span>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-[11px] leading-relaxed list-disc list-inside">
            <li>
              Ultrasound and Doppler imaging reports represent diagnostic opinions reflecting anatomical appearances at the specific moment of scan and must be interpreted by your treating physician.
            </li>
            <li>
              PCPNDT Act compliance is strictly enforced: Sex determination of the fetus is strictly prohibited under Indian law and is never conducted under any circumstances.
            </li>
            <li>
              Turnaround times (TAT) stated on this website are estimates based on standard operational parameters. Urgent clinical needs should be notified during appointment scheduling.
            </li>
            <li>
              Home sample collection is provided for blood and urine pathology specimens only; all ultrasound and Doppler investigations must be performed at the clinic premises.
            </li>
            <li>
              Patient data and medical report confidentiality are maintained in compliance with the Digital Personal Data Protection (DPDP) Act and Indian healthcare data standards.
            </li>
            <li>
              Appointments booked online or via callback request constitute booking enquiries until verified and scheduled by our clinic coordination desk.
            </li>
          </ul>
        </div>

        {/* Bottom Copyright & Accreditation Notice */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 Dr. Abhay Shah&apos;s Sonodent - Sonography and Diagnostic Centre. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>•</span>
            <span className="text-slate-500">[CONFIRM: NABL Reg. #]</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
