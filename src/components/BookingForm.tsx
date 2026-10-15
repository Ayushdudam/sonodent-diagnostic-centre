'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import { Calendar, Clock, MapPin, CheckCircle2, AlertCircle, Loader2, MessageCircle, Phone, Home, Building2 } from 'lucide-react';
import { businessData } from '@/data/business';
import { diagnosticTests } from '@/data/tests';
import { healthPackages } from '@/data/packages';
import { buildWhatsAppLink } from '@/lib/utils';

export const bookingSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name (at least 2 characters)'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
  serviceId: z.string().min(1, 'Please select a test or health package'),
  visitType: z.enum(['clinic', 'home']),
  preferredDate: z.string().min(1, 'Please select a preferred date'),
  timeSlot: z.string().min(1, 'Please choose a preferred time slot'),
  locality: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine(val => val === true, 'Consent is required to proceed'),
  honeypot: z.string().max(0, 'Bot submission rejected')
});

export type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  initialServiceId?: string;
  initialVisitType?: 'clinic' | 'home';
}

export function BookingForm({ initialServiceId = '', initialVisitType = 'clinic' }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceId: initialServiceId || 'usg-abdomen-pelvis',
    visitType: initialVisitType,
    preferredDate: '',
    timeSlot: 'Morning (09:00 AM – 12:00 PM)',
    locality: '',
    message: '',
    consent: true,
    honeypot: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [serverError, setServerError] = useState('');

  const [minDate, setMinDate] = useState<string>('');

  React.useEffect(() => {
    setMinDate(new Date().toISOString().split('T')[0]);
  }, []);

  // Update serviceId if prop changes
  React.useEffect(() => {
    if (initialServiceId) {
      setFormData(prev => ({ ...prev, serviceId: initialServiceId }));
    }
  }, [initialServiceId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear field-specific error
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');
    
    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    // Client-side validation with Zod
    const result = bookingSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[String(err.path[0])] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.message || 'Unable to submit your callback request. Please call our clinic directly.');
      }

      setReferenceId(json.referenceId || `SD-${Date.now().toString().slice(-6)}`);
      setIsSuccess(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'A network error occurred. Please call the clinic directly.';
      setServerError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedService = diagnosticTests.find(t => t.id === formData.serviceId) ||
    healthPackages.find(p => p.id === formData.serviceId);

  const selectedServiceName = selectedService ? selectedService.name : 'Diagnostic Test';

  const whatsappFollowUp = buildWhatsAppLink(
    businessData.contact.whatsapp,
    `Hello Dr. Abhay Shah's Sonodent Centre, I submitted an appointment callback request (Ref: ${referenceId}) for ${selectedServiceName}. Please confirm the timing.`
  );

  if (isSuccess) {
    return (
      <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-16 h-16 bg-[#008C45] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Callback Request Received!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Your enquiry reference number is:
          </p>
          <div className="inline-block bg-white px-4 py-1.5 rounded-lg border border-emerald-300 font-mono font-bold text-[#006B35] text-base tracking-wider shadow-sm">
            {referenceId}
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-emerald-100 max-w-md mx-auto text-left text-xs space-y-2 text-slate-600">
          <p className="font-semibold text-slate-800 text-sm">Appointment Coordination Protocol:</p>
          <p>• Our front desk team will call you at <strong className="text-slate-900">{formData.phone}</strong> during working hours (9 AM – 9 PM) to confirm your exact slot.</p>
          <p>• Note: This enquiry does not guarantee a slot until verbally verified by our coordination desk.</p>
          <p>• Fasting instructions (if applicable) will be briefed during the call.</p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappFollowUp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg text-sm transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Fast-Track on WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setFormData(prev => ({ ...prev, fullName: '', phone: '', email: '', message: '' }));
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 bg-white text-slate-700 hover:bg-slate-50 font-medium rounded-lg text-sm border border-slate-200 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {serverError && (
        <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Honeypot anti-spam field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave blank</label>
        <input
          type="text"
          id="website"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Visit Type Toggle: Clinic Visit vs Home Sample Collection */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
          Service Location Preference <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, visitType: 'clinic' }))}
            className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
              formData.visitType === 'clinic'
                ? 'bg-[#F3F9F5] border-[#008C45] text-[#006B35] ring-1 ring-[#008C45] shadow-sm'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Building2 className="w-4 h-4 text-[#008C45]" />
            <span>Clinic Visit (Worli Naka)</span>
          </button>

          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, visitType: 'home' }))}
            className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
              formData.visitType === 'home'
                ? 'bg-[#F3F9F5] border-[#008C45] text-[#006B35] ring-1 ring-[#008C45] shadow-sm'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Home className="w-4 h-4 text-[#008C45]" />
            <span>Home Sample Collection</span>
          </button>
        </div>
        {formData.visitType === 'home' && (
          <p className="mt-2 text-[11px] text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200">
            Note: Home collection is applicable for blood and urine pathology tests only. Sonography and Doppler scans must be completed in-person at our Worli Naka clinic.
          </p>
        )}
      </div>

      {/* Test / Package Selector */}
      <div>
        <label htmlFor="serviceId" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
          Select Diagnostic Test or Health Package <span className="text-red-500">*</span>
        </label>
        <select
          id="serviceId"
          name="serviceId"
          value={formData.serviceId}
          onChange={handleChange}
          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#008C45] focus:border-transparent transition-colors ${
            errors.serviceId ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
          }`}
        >
          <optgroup label="Ultrasound & Doppler Scans (In-Clinic)">
            {diagnosticTests
              .filter(t => t.category.includes('Ultrasound') || t.category.includes('Doppler'))
              .map(test => (
                <option key={test.id} value={test.id}>
                  {test.name} — {test.priceDisplay}
                </option>
              ))}
          </optgroup>
          <optgroup label="Pathology & Blood Tests (Clinic or Home Collection)">
            {diagnosticTests
              .filter(t => t.category.includes('Pathology'))
              .map(test => (
                <option key={test.id} value={test.id}>
                  {test.name} — {test.priceDisplay}
                </option>
              ))}
          </optgroup>
          <optgroup label="Preventative Health Checkup Packages">
            {healthPackages.map(pkg => (
              <option key={pkg.id} value={pkg.id}>
                {pkg.name} ({pkg.parametersCount} Tests) — {pkg.priceDisplay}
              </option>
            ))}
          </optgroup>
        </select>
        {errors.serviceId && <p className="mt-1 text-xs text-red-500">{errors.serviceId}</p>}
      </div>

      {/* Patient Name & Phone Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Patient Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Ramesh Patel"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#008C45] focus:border-transparent transition-colors ${
              errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
            }`}
            required
          />
          {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            10-Digit Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-2.5 text-sm text-slate-500 font-medium">+91</span>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="9820127749"
              maxLength={10}
              className={`w-full pl-12 pr-3.5 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#008C45] focus:border-transparent transition-colors ${
                errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
              }`}
              required
            />
          </div>
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      {/* Optional Email & Preferred Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="preferredDate" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Preferred Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            min={minDate || undefined}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#008C45] focus:border-transparent transition-colors ${
              errors.preferredDate ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
            }`}
            required
          />
          {errors.preferredDate && <p className="mt-1 text-xs text-red-500">{errors.preferredDate}</p>}
        </div>

        <div>
          <label htmlFor="timeSlot" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Preferred Time Slot <span className="text-red-500">*</span>
          </label>
          <select
            id="timeSlot"
            name="timeSlot"
            value={formData.timeSlot}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#008C45] focus:border-transparent transition-colors"
          >
            <option value="Morning (09:00 AM – 12:00 PM)">Morning (09:00 AM – 12:00 PM)</option>
            <option value="Afternoon (12:00 PM – 04:00 PM)">Afternoon (12:00 PM – 04:00 PM)</option>
            <option value="Evening (04:00 PM – 08:30 PM)">Evening (04:00 PM – 08:30 PM)</option>
          </select>
        </div>
      </div>

      {/* Conditional Locality field for Home Collection */}
      {formData.visitType === 'home' && (
        <div>
          <label htmlFor="locality" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Home Address &amp; Locality (Worli, Lower Parel, Prabhadevi) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="locality"
            name="locality"
            value={formData.locality}
            onChange={handleChange}
            placeholder="Flat no., building, street, landmark"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#008C45] focus:border-transparent transition-colors"
            required={formData.visitType === 'home'}
          />
        </div>
      )}

      {/* Patient Message or Clinical Note */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
          Doctor Prescription Notes / Symptoms (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={2}
          value={formData.message}
          onChange={handleChange}
          placeholder="Mention any referring physician notes or fasting inquiries..."
          className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#008C45] focus:border-transparent transition-colors"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-3 pt-1">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-[#008C45] focus:ring-[#008C45]"
        />
        <label htmlFor="consent" className="text-xs text-slate-600 leading-snug">
          I consent to have Dr. Abhay Shah&apos;s Sonodent clinic contact me via phone call or WhatsApp to confirm slot timing and test preparation instructions. We do not spam or share health data.
        </label>
      </div>
      {errors.consent && <p className="text-xs text-red-500">{errors.consent}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 rounded-xl bg-[#008C45] hover:bg-[#006B35] disabled:bg-slate-300 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008C45] focus-visible:ring-offset-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Submitting Request...</span>
          </>
        ) : (
          <>
            <Calendar className="w-4 h-4" />
            <span>Request an Appointment Callback</span>
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-slate-500">
        Transparent Care Guarantee: Scans are personally performed by Dr. Abhay Shah. No automated booking confirmation without verbal slot alignment.
      </p>
    </form>
  );
}
