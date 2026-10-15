'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Clock, MapPin, Calendar, Menu, X, ShieldCheck, MessageCircle } from 'lucide-react';
import { businessData } from '@/data/business';
import { buildWhatsAppLink } from '@/lib/utils';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Our Tests', href: '/tests' },
    { label: 'Health Packages', href: '/packages' },
    { label: 'Home Collection', href: '/home-collection' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const whatsappEnquiryUrl = buildWhatsAppLink(
    businessData.contact.whatsapp,
    "Hello Dr. Abhay Shah's Sonodent Centre, I would like to enquire about test availability and appointments."
  );

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-slate-100">
      {/* Top Notice & Timing Strip */}
      <div className="bg-[#006B35] text-white text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-300" />
              <span>{businessData.hours.weekdays} (Mon–Sat)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-300" />
              <span>Sai Milan Bldg, Worli Naka, Mumbai 400018</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>Scans Personally Conducted by Dr. Abhay Shah</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={whatsappEnquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
              <span>WhatsApp Enquiry</span>
            </a>
            <span className="text-emerald-400">|</span>
            <a
              href={`tel:${businessData.contact.phone}`}
              className="flex items-center gap-1.5 font-semibold hover:text-emerald-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-300" />
              <span>{businessData.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C45] rounded-lg p-1">
            <div className="w-11 h-11 rounded-xl bg-[#008C45] flex items-center justify-center text-white font-bold shadow-md shadow-emerald-900/10 group-hover:bg-[#006B35] transition-colors">
              <span className="text-xl tracking-tighter">S</span>
              <span className="text-sm font-semibold text-emerald-200">D</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight leading-tight group-hover:text-[#008C45] transition-colors">
                Dr. Abhay Shah&apos;s Sonodent
              </span>
              <span className="text-xs text-slate-500 font-medium tracking-wide">
                Sonography &amp; Diagnostic Centre • Worli
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#008C45] ${
                    isActive
                      ? 'text-[#008C45] bg-[#F3F9F5] font-semibold'
                      : 'text-slate-700 hover:text-[#008C45] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${businessData.contact.phone}`}
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors focus-visible:ring-2 focus-visible:ring-[#008C45]"
            >
              <Phone className="w-4 h-4 text-[#008C45]" />
              <span>Call Clinic</span>
            </a>
            <Link
              href="/#book-callback"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#008C45] hover:bg-[#006B35] rounded-lg shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-[#008C45] focus-visible:ring-offset-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book / Callback</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${businessData.contact.phone}`}
              className="p-2 text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 sm:hidden"
              aria-label="Call Sonodent clinic"
            >
              <Phone className="w-5 h-5 text-[#008C45]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C45]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                    isActive
                      ? 'text-[#008C45] bg-[#F3F9F5] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-3">
            <Link
              href="/#book-callback"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#008C45] text-white font-semibold rounded-lg shadow-sm hover:bg-[#006B35]"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Appointment Callback</span>
            </Link>
            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
              <a
                href={`tel:${businessData.contact.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-50 text-slate-800 rounded-lg border border-slate-200"
              >
                <Phone className="w-4 h-4 text-[#008C45]" />
                <span>Call Clinic</span>
              </a>
              <a
                href={whatsappEnquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
            <div className="mt-2 text-xs text-slate-500 text-center">
              Mon–Sat: 9:00 AM – 9:00 PM • Worli Naka, Mumbai
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
