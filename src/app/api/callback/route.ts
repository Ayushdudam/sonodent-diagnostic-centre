import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const requestSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Must be a valid 10-digit mobile number'),
  email: z.string().email().optional().or(z.literal('')),
  serviceId: z.string().min(1, 'Service ID is required'),
  visitType: z.enum(['clinic', 'home']),
  preferredDate: z.string().min(1, 'Date is required'),
  timeSlot: z.string().min(1, 'Time slot is required'),
  locality: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine(v => v === true, 'Consent is required'),
  honeypot: z.string().max(0, 'Spam rejected')
});

// Simple in-memory rate limiter: max 5 requests per 60 seconds per IP
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'anonymous';
    const now = Date.now();
    const windowMs = 60 * 1000;

    const rateEntry = rateLimitMap.get(ip);
    if (rateEntry) {
      if (now - rateEntry.timestamp < windowMs) {
        if (rateEntry.count >= 5) {
          return NextResponse.json(
            { success: false, message: 'Too many requests. Please wait a minute or call our clinic directly at +91 98201 27749.' },
            { status: 429 }
          );
        }
        rateEntry.count += 1;
      } else {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, timestamp: now });
    }

    const body = await req.json();

    // Check honeypot
    if (body.honeypot && body.honeypot.length > 0) {
      return NextResponse.json({ success: false, message: 'Spam detected' }, { status: 400 });
    }

    const parseResult = requestSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid submission data',
          errors: parseResult.error.format()
        },
        { status: 400 }
      );
    }

    const data = parseResult.data;

    // Generate unique clinical reference ID
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const referenceId = `SD-${randomSuffix}`;

    // Production security note: We do NOT persist sensitive medical or diagnostic details into a plain database.
    // In production with Resend or Supabase, send email notification to clinic coordinator without sensitive health flags.
    console.log(`[Callback Request Received] Ref: ${referenceId} | Service: ${data.serviceId} | Visit: ${data.visitType} | Date: ${data.preferredDate}`);

    return NextResponse.json({
      success: true,
      referenceId,
      message: 'Callback request registered successfully. Our reception coordinator will contact you shortly.',
      details: {
        referenceId,
        service: data.serviceId,
        date: data.preferredDate,
        timeSlot: data.timeSlot
      }
    });
  } catch (error) {
    console.error('Callback error:', error);
    return NextResponse.json(
      { success: false, message: 'Unable to process your request. Please contact our desk directly at +91 98201 27749.' },
      { status: 500 }
    );
  }
}
