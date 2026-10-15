import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingActionDock } from '@/components/FloatingActionDock';
import { businessData } from '@/data/business';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta'
});

export const viewport: Viewport = {
  themeColor: '#008C45',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://sonodent-diagnostic.vercel.app'),
  title: {
    default: `${businessData.name} | Diagnostic Ultrasound & Lab in Worli, Mumbai`,
    template: `%s | ${businessData.shortName}`
  },
  description: `Dr. Abhay Shah's Sonodent Sonography & Diagnostic Centre in Worli Naka, Mumbai. Expert ultrasound, color Doppler studies, and blood tests personally conducted by Dr. Abhay Shah. 5.0 Star rated, 499+ patient reviews.`,
  keywords: [
    'Dr Abhay Shah',
    'Sonodent Worli',
    'Sonography centre Worli',
    'Ultrasound in Worli Naka',
    'Diagnostic centre Worli',
    'Color Doppler Mumbai',
    'Blood test at home Worli',
    'Pathology lab Lower Parel',
    'Pelvic ultrasound Mumbai',
    'Full body checkup Worli'
  ],
  authors: [{ name: 'Dr. Abhay Shah' }],
  creator: 'Dr. Abhay Shah',
  publisher: "Dr. Abhay Shah's Sonodent Diagnostic Centre",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sonodent-diagnostic.vercel.app',
    siteName: "Dr. Abhay Shah's Sonodent Diagnostic Centre",
    title: "Dr. Abhay Shah's Sonodent | Diagnostic Sonography & Lab in Worli",
    description: "Expert sonography, Doppler imaging, and diagnostic blood tests in Worli Naka, Mumbai. 5.0-star rated clinic led by Dr. Abhay Shah.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dr. Abhay Shah's Sonodent - Diagnostic Centre Worli",
    description: "Trusted ultrasound, vascular Doppler, and pathology checkups at Worli Naka, Mumbai. Scans personally conducted by Dr. Abhay Shah.",
  },
  alternates: {
    canonical: 'https://sonodent-diagnostic.vercel.app',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['MedicalBusiness', 'DiagnosticLab', 'LocalBusiness'],
        '@id': 'https://sonodent-diagnostic.vercel.app/#diagnosticlab',
        name: businessData.name,
        alternateName: businessData.shortName,
        description: businessData.tagline,
        url: 'https://sonodent-diagnostic.vercel.app',
        telephone: businessData.contact.phone,
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Shop No. 4, Ground Floor, Sai Milan Building, Ganpatrao Kadam Marg',
          addressLocality: 'Worli Naka, Upper Worli',
          addressRegion: 'Mumbai',
          postalCode: '400018',
          addressCountry: 'IN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: businessData.coordinates.latitude,
          longitude: businessData.coordinates.longitude
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '21:00'
          }
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '499',
          bestRating: '5',
          worstRating: '1'
        },
        medicalSpecialty: [
          'DiagnosticRadiology',
          'Pathology'
        ],
        availableService: [
          {
            '@type': 'MedicalTest',
            name: 'Ultrasound Abdomen and Pelvis',
            description: 'Non-invasive sonography of abdominal and pelvic visceral organs.'
          },
          {
            '@type': 'MedicalTest',
            name: 'Color Doppler Ultrasound Studies',
            description: 'High-frequency spectral and vascular hemodynamic mapping.'
          },
          {
            '@type': 'MedicalTest',
            name: 'Complete Blood Count (CBC) and Metabolic Profiles',
            description: 'Automated hematology and biochemistry testing.'
          }
        ],
        founder: {
          '@type': 'Physician',
          name: 'Dr. Abhay Shah',
          jobTitle: 'Consultant Radiologist & Ultrasonologist'
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        {/* Main Content with bottom padding to ensure floating dock never overlaps content on mobile */}
        <main className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <FloatingActionDock />
      </body>
    </html>
  );
}
