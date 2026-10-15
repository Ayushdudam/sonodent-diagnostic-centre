export interface HealthPackage {
  id: string;
  slug: string;
  name: string;
  badge?: string;
  category: "Full Body" | "Senior Citizens" | "Diabetes & Heart" | "Women's Health" | "Essential";
  targetAudience: string;
  parametersCount: number;
  price: number;
  originalPrice: number;
  priceDisplay: string;
  originalPriceDisplay: string;
  priceNote: string;
  isPopular?: boolean;
  shortDescription: string;
  includesUltrasound: boolean;
  testsIncluded: {
    categoryName: string;
    items: string[];
  }[];
  preparation: string;
  reportTurnaround: string;
}

export const healthPackages: HealthPackage[] = [
  {
    id: "full-body-comprehensive",
    slug: "comprehensive-full-body-checkup",
    name: "Sonodent Comprehensive Full Body Checkup",
    badge: "Most Popular",
    category: "Full Body",
    targetAudience: "Adults aged 25–65 seeking thorough baseline screening for heart, liver, kidneys, metabolic, and thyroid health.",
    parametersCount: 68,
    price: 2499,
    originalPrice: 4800,
    priceDisplay: "₹2,499",
    originalPriceDisplay: "₹4,800",
    priceNote: "[CONFIRM: Promotional package pricing]",
    isPopular: true,
    includesUltrasound: false,
    shortDescription: "Our most holistic preventative panel covering complete hematology, full lipid fraction, liver & kidney function, diabetic glycemic status, and vital vitamins.",
    testsIncluded: [
      {
        categoryName: "Complete Blood Picture (24 Tests)",
        items: ["Hemoglobin", "RBC Count", "WBC Differential (Neutrophils, Lymphocytes, Eosinophils, Monocytes, Basophils)", "Platelet Count", "PCV / Hematocrit", "MCV, MCH, MCHC", "ESR"]
      },
      {
        categoryName: "Diabetes & Glycemic Screen (2 Tests)",
        items: ["Fasting Blood Sugar (FBS)", "HbA1c (Glycated Hemoglobin with eAG)"]
      },
      {
        categoryName: "Liver Function Profile (11 Tests)",
        items: ["Total Bilirubin", "Direct & Indirect Bilirubin", "SGOT / AST", "SGPT / ALT", "Alkaline Phosphatase (ALP)", "Total Protein", "Albumin & Globulin", "A/G Ratio"]
      },
      {
        categoryName: "Kidney Function & Electrolytes (8 Tests)",
        items: ["Serum Creatinine", "Blood Urea Nitrogen (BUN)", "Uric Acid", "Serum Calcium", "Sodium, Potassium, Chloride", "eGFR calculation"]
      },
      {
        categoryName: "Lipid & Cardiac Risk Profile (7 Tests)",
        items: ["Total Cholesterol", "HDL 'Good' Cholesterol", "LDL 'Bad' Cholesterol", "VLDL Cholesterol", "Triglycerides", "Non-HDL Cholesterol", "TC/HDL Ratio"]
      },
      {
        categoryName: "Vitamins & Thyroid (4 Tests)",
        items: ["Vitamin D (25-OH Total)", "Vitamin B12 Assay", "Total T3, Total T4", "Ultrasensitive TSH"]
      },
      {
        categoryName: "Urine Routine (18 Parameters)",
        items: ["Complete Physical, Chemical & Microscopic Centrifuged Sediment Examination"]
      }
    ],
    preparation: "Overnight fasting (10–12 hours) strictly required. Only plain water is allowed during the fasting interval.",
    reportTurnaround: "Same Day (Digital reports delivered via WhatsApp / Email within 8 hours)"
  },
  {
    id: "senior-citizen-wellness",
    slug: "senior-citizen-health-package",
    name: "Senior Citizen Comprehensive Wellness Profile",
    badge: "Age 60+ Care",
    category: "Senior Citizens",
    targetAudience: "Seniors (men and women aged 60+) needing attentive cardiovascular, joint, bone density, and vital organ monitoring.",
    parametersCount: 72,
    price: 3199,
    originalPrice: 5900,
    priceDisplay: "₹3,199",
    originalPriceDisplay: "₹5,900",
    priceNote: "[CONFIRM: Senior wellness package pricing]",
    isPopular: false,
    includesUltrasound: false,
    shortDescription: "Tailored to senior physiology, evaluating bone mineralization, joint uric acid, renal clearance, cardiac strain, and full metabolic indicators.",
    testsIncluded: [
      {
        categoryName: "Bone, Joint & Micronutrients (5 Tests)",
        items: ["Vitamin D 25-OH", "Vitamin B12", "Serum Calcium", "Inorganic Phosphorus", "Serum Uric Acid (Gout Screen)"]
      },
      {
        categoryName: "Cardiovascular & Metabolic (9 Tests)",
        items: ["Lipid Profile (Full)", "HbA1c Glycated Hemoglobin", "Fasting Blood Glucose", "High-Sensitivity CRP (hs-CRP)"]
      },
      {
        categoryName: "Renal & Hepatic Functional Screen (19 Tests)",
        items: ["Complete Liver Function Panel", "Complete Kidney Function Panel with eGFR and Electrolytes"]
      },
      {
        categoryName: "Hematology & Urinalysis (42 Tests)",
        items: ["CBC with Differential & ESR", "Urine Routine & Microscopic Evaluation"]
      }
    ],
    preparation: "Fasting for 10–12 hours required. Morning medications may be taken with water unless instructed otherwise by your doctor.",
    reportTurnaround: "Same Day (Within 8–10 hours)"
  },
  {
    id: "womens-hormone-wellness",
    slug: "womens-wellness-hormonal-package",
    name: "Women's Wellness & Hormonal Balance Panel",
    badge: "For Women",
    category: "Women's Health",
    targetAudience: "Women experiencing cycle changes, hair thinning, weight resistance, PCOS concerns, or fatigue.",
    parametersCount: 54,
    price: 2899,
    originalPrice: 5200,
    priceDisplay: "₹2,899",
    originalPriceDisplay: "₹5,200",
    priceNote: "[CONFIRM: Women's panel pricing]",
    isPopular: true,
    includesUltrasound: false,
    shortDescription: "In-depth hormonal, thyroid, and hematological screen designed specifically to assess female metabolic and reproductive well-being.",
    testsIncluded: [
      {
        categoryName: "Thyroid & Endocrine Health",
        items: ["Total T3, Total T4", "Ultrasensitive TSH", "Prolactin Serum [CONFIRM]", "HbA1c"]
      },
      {
        categoryName: "Anemia & Energy Metrics",
        items: ["Complete Blood Count (CBC)", "Serum Ferritin & Iron Studies", "Vitamin D3", "Vitamin B12"]
      },
      {
        categoryName: "Vital Organ Safety",
        items: ["Liver Function Test", "Kidney Function Test", "Lipid Profile"]
      }
    ],
    preparation: "Overnight fasting (10 hours) required. Ideally scheduled on day 2 or 3 of cycle if specific reproductive hormones are requested by your physician.",
    reportTurnaround: "24 Hours"
  },
  {
    id: "executive-diabetes-cardiac",
    slug: "executive-diabetes-cardiac-package",
    name: "Executive Cardio-Diabetic Diagnostic Screen",
    badge: "Cardio Focus",
    category: "Diabetes & Heart",
    targetAudience: "Individuals managing diabetes, elevated blood pressure, or a family history of premature heart conditions.",
    parametersCount: 48,
    price: 2199,
    originalPrice: 4100,
    priceDisplay: "₹2,199",
    originalPriceDisplay: "₹4,100",
    priceNote: "[CONFIRM: Cardio-diabetic pricing]",
    isPopular: false,
    includesUltrasound: false,
    shortDescription: "Laser-focused evaluation of arterial lipid plaque risk, glycemic control, kidney protein leakage, and inflammatory markers.",
    testsIncluded: [
      {
        categoryName: "Advanced Glycemic Status",
        items: ["Fasting Blood Glucose", "Post Prandial Blood Glucose (PPBS)", "HbA1c with eAG"]
      },
      {
        categoryName: "Atherogenic Lipid & Cardiac Risk",
        items: ["Total Cholesterol, HDL, LDL, VLDL, Triglycerides", "Cardiac Risk Ratios", "hs-CRP Cardiac Inflammatory Marker"]
      },
      {
        categoryName: "Renal Microvascular Safety",
        items: ["Serum Creatinine with eGFR", "Blood Urea Nitrogen", "Urine Microalbumin / Creatinine Ratio"]
      }
    ],
    preparation: "Overnight fasting (10–12 hours) for fasting draw, followed by post-meal draw exactly 2 hours after a standard meal.",
    reportTurnaround: "Same Day (Within 6 hours)"
  },
  {
    id: "essential-vital-screen",
    slug: "essential-vital-health-screen",
    name: "Essential Baseline Diagnostic Screen",
    badge: "Essential",
    category: "Essential",
    targetAudience: "Annual routine check for young working professionals and students.",
    parametersCount: 38,
    price: 1199,
    originalPrice: 2200,
    priceDisplay: "₹1,199",
    originalPriceDisplay: "₹2,200",
    priceNote: "[CONFIRM: Basic package pricing]",
    isPopular: false,
    includesUltrasound: false,
    shortDescription: "A compact preventative screen tracking basic blood cell health, liver enzymes, kidney filtration, and fasting blood sugar.",
    testsIncluded: [
      {
        categoryName: "Routine Baseline Profiles",
        items: ["Complete Blood Count (CBC + ESR)", "Fasting Blood Glucose", "Serum Creatinine", "SGOT & SGPT (Liver Enzymes)", "Total Cholesterol", "Urine Routine Examination"]
      }
    ],
    preparation: "Fasting for 8–10 hours required. Plain water intake permitted.",
    reportTurnaround: "Same Day (Within 4 hours)"
  }
];
