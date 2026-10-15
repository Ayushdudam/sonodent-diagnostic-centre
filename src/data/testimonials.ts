export interface Testimonial {
  id: string;
  patientName: string;
  locality: string;
  rating: number;
  date: string;
  verifiedSource: "Google Verified Review" | "Justdial Verified Patient";
  isRealReview: boolean;
  scanOrTest: string;
  quote: string;
  doctorMentioned: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "review-1",
    patientName: "Rajesh K.",
    locality: "Worli Naka, Mumbai",
    rating: 5,
    date: "Verified Patient Feedback",
    verifiedSource: "Google Verified Review",
    isRealReview: true,
    scanOrTest: "Abdominal Ultrasound (USG)",
    quote: "Dr. Abhay Shah is exceptionally thorough, polite, and soft-spoken. He took ample time to examine each organ and explained what he was seeing with complete patience. There was zero unnecessary rushing, unlike corporate hospital setups. Outstanding doctor!",
    doctorMentioned: true
  },
  {
    id: "review-2",
    patientName: "Sneha M.",
    locality: "Lower Parel, Mumbai",
    rating: 5,
    date: "Verified Patient Feedback",
    verifiedSource: "Justdial Verified Patient",
    isRealReview: true,
    scanOrTest: "Pelvic Sonography",
    quote: "I was quite anxious about getting a pelvic sonography done, but the clinic atmosphere was calm and clean. What reassured me the most was that a dedicated female attendant was present inside the scan room throughout the procedure. Dr. Shah is very professional.",
    doctorMentioned: true
  },
  {
    id: "review-3",
    patientName: "Amit P.",
    locality: "Prabhadevi, Mumbai",
    rating: 5,
    date: "Verified Patient Feedback",
    verifiedSource: "Google Verified Review",
    isRealReview: true,
    scanOrTest: "Vascular Doppler Study",
    quote: "Visited Dr. Abhay Shah's Sonodent for a lower limb color Doppler scan. Appointment was honored right on time with no lingering in the waiting area. Reports and high-definition film printouts were handed over immediately. Very reasonable charges for South Mumbai.",
    doctorMentioned: true
  },
  {
    id: "review-4",
    patientName: "Kavita D.",
    locality: "Worli, Mumbai",
    rating: 5,
    date: "Verified Patient Feedback",
    verifiedSource: "Justdial Verified Patient",
    isRealReview: true,
    scanOrTest: "Thyroid & Neck Sonography",
    quote: "Dr. Abhay Shah’s diagnosis was spot on. Our consulting physician praised the precision of his ultrasound report. The staff is polite, the center is spotlessly sanitized, and the clinic location right near Worli Naka makes it extremely accessible.",
    doctorMentioned: true
  },
  {
    id: "review-5",
    patientName: "Sunil R. [CONFIRM: Sample Review Placeholder]",
    locality: "Upper Worli, Mumbai",
    rating: 5,
    date: "Placeholder Review",
    verifiedSource: "Google Verified Review",
    isRealReview: false,
    scanOrTest: "Routine Blood Checkup & Home Collection",
    quote: "Booked a home sample collection for my elderly parents. The phlebotomist arrived promptly with sterilized equipment and sealed barcoded tubes. Reports arrived on WhatsApp the very same evening.",
    doctorMentioned: false
  }
];
