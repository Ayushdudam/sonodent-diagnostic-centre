/**
 * Dr. Abhay Shah's Sonodent - Sonography and Diagnostic Centre
 * Verified business data and clearly marked placeholders for client confirmation.
 * Source: Google Maps (https://maps.app.goo.gl/Dg5FvAHNPzDu8eve6) & Justdial Verified Listing
 */

export interface BusinessData {
  name: string;
  shortName: string;
  tagline: string;
  doctor: {
    name: string;
    title: string;
    qualifications: string;
    experience: string;
    bio: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappDisplay: string;
    email: string;
  };
  address: {
    shopNo: string;
    building: string;
    street: string;
    landmark: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullFormatted: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    notes: string;
  };
  ratings: {
    score: number;
    reviewCount: number;
    platform: string;
    starsText: string;
  };
  features: {
    title: string;
    description: string;
    verified: boolean;
  }[];
  accreditations: {
    text: string;
    isPlaceholder: boolean;
  }[];
  homeCollection: {
    available: boolean;
    timings: string;
    serviceFee: string;
    coverageAreas: string[];
    disclaimer: string;
  };
  links: {
    googleMapsDirections: string;
    googleMapsShare: string;
    embedMapUrl: string;
  };
}

export const businessData: BusinessData = {
  name: "Dr. Abhay Shah's Sonodent - Sonography and Diagnostic Centre",
  shortName: "Sonodent Diagnostic Centre",
  tagline: "Trusted Precision Sonography & Comprehensive Diagnostics in Worli, Mumbai",
  
  doctor: {
    name: "Dr. Abhay Shah",
    title: "Chief Radiologist & Ultrasonologist",
    qualifications: "[CONFIRM: MBBS, DMRD / MD Radiology]",
    experience: "[CONFIRM: 20+ years of dedicated clinical radiology practice]",
    bio: "Dr. Abhay Shah is an experienced, soft-spoken Consultant Radiologist widely recognized across South Mumbai for high-precision sonography, obstetric ultrasound, and color Doppler diagnostic studies. With an empathetic patient-first bedside manner, Dr. Shah conducts each scan personally to ensure thorough clinical accuracy."
  },

  contact: {
    phone: "+919820127749",
    phoneDisplay: "+91 98201 27749",
    whatsapp: "+919820127749",
    whatsappDisplay: "+91 98201 27749",
    email: "[CONFIRM: info@sonodentworli.com / care@sonodent.in]"
  },

  address: {
    shopNo: "Shop No. 4, Ground Floor",
    building: "Sai Milan Building",
    street: "Ganpatrao Kadam Marg",
    landmark: "Near Worli Naka, Next to Shiv Sena Shakha & Satyanarayan Temple, Opposite Shri Ram Mills",
    locality: "Worli Naka, Upper Worli",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400018",
    country: "India",
    fullFormatted: "Shop No. 4, Ground Floor, Sai Milan Building, Ganpatrao Kadam Marg, near Worli Naka (Next to Shiv Sena Shakha & Satyanarayan Temple, Opposite Shri Ram Mills), Upper Worli, Worli, Mumbai, Maharashtra 400018"
  },

  coordinates: {
    latitude: 18.998334,
    longitude: 72.819826
  },

  hours: {
    weekdays: "9:00 AM – 9:00 PM",
    saturday: "9:00 AM – 9:00 PM",
    sunday: "Closed (Urgent scans by prior appointment only)",
    notes: "Walk-ins welcome for diagnostic blood tests; prior appointment recommended for USG and Doppler scans."
  },

  ratings: {
    score: 5.0,
    reviewCount: 499,
    platform: "Google & Justdial Verified Patient Ratings",
    starsText: "5.0 out of 5 Stars (Top Rated in Worli Naka)"
  },

  features: [
    {
      title: "Scans Personally Performed by Dr. Abhay Shah",
      description: "Unlike high-volume diagnostic chains with rotational technicians, all ultrasound and Doppler scans are personally performed and interpreted by Dr. Abhay Shah.",
      verified: true
    },
    {
      title: "Dedicated Female Attendant Support",
      description: "A professional female staff member is always present during abdominal, pelvic, and sensitive sonography procedures to ensure complete patient comfort and privacy.",
      verified: true
    },
    {
      title: "High-Resolution Sonography & Doppler",
      description: "Equipped with advanced diagnostic ultrasound systems supporting high-frequency abdominal, pelvic, vascular Doppler, and musculoskeletal evaluations.",
      verified: true
    },
    {
      title: "Punctual & Respectful Patient Care",
      description: "Appointments are managed efficiently to minimize waiting times in a clean, hygienic, and air-conditioned clinic environment.",
      verified: true
    },
    {
      title: "Same-Day Digital Reporting",
      description: "Diagnostic reports and high-resolution imaging films are delivered promptly with digital WhatsApp/email copies for seamless consultation with your treating doctor.",
      verified: true
    },
    {
      title: "Central Worli Naka Accessibility",
      description: "Conveniently situated on the ground floor on Ganpatrao Kadam Marg, directly accessible from Worli Naka, Lower Parel, Prabhadevi, and Currey Road.",
      verified: true
    }
  ],

  accreditations: [
    {
      text: "Daily internal calibration and stringent quality-control protocols strictly maintained.",
      isPlaceholder: false
    },
    {
      text: "[CONFIRM: NABL Accreditation Registration Number & Certificate Date]",
      isPlaceholder: true
    },
    {
      text: "[CONFIRM: ISO 9001:2015 Quality Management Certification Details]",
      isPlaceholder: true
    },
    {
      text: "Registered under the Maharashtra Clinical Establishments Act and PCPNDT Act guidelines.",
      isPlaceholder: false
    }
  ],

  homeCollection: {
    available: true,
    timings: "6:30 AM – 1:00 PM Daily",
    serviceFee: "[CONFIRM: Free for packages above ₹999, or ₹150 nominal visit charge for standalone tests]",
    coverageAreas: [
      "Worli & Upper Worli",
      "Worli Sea Face",
      "Lower Parel",
      "Prabhadevi",
      "Mahalaxmi",
      "Currey Road & Parel [CONFIRM: Extended coverage area]"
    ],
    disclaimer: "Home sample collection is provided for blood and urine pathology tests only. Ultrasound and Doppler scans must be conducted at the Worli clinic under Dr. Abhay Shah's direct equipment supervision."
  },

  links: {
    googleMapsDirections: "https://www.google.com/maps/dir/?api=1&destination=18.998334,72.819826",
    googleMapsShare: "https://maps.app.goo.gl/Dg5FvAHNPzDu8eve6",
    embedMapUrl: "https://maps.google.com/maps?q=18.998334,72.819826&hl=en&z=16&output=embed"
  }
};
