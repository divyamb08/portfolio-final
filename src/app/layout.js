import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Divyam Bansal - Software Engineer and Data Scientist",
  description: "Portfolio of Divyam Bansal, showcasing projects in software engineering and data science.",
  keywords: ["Divyam Bansal", "Software Engineer", "Data Scientist", "Portfolio", "Web Development", "Data Analysis"],
  openGraph: {
    title: "Divyam Bansal - Software Engineer and Data Scientist",
    description: "Explore the portfolio of Divyam Bansal, showcasing projects in software engineering and data science.",
    url: "https://divyambansal.com",
    images: [
      {
        url: "/images/Profile-pic.png",
        width: 800,
        height: 600,
        alt: "Profile picture of Divyam Bansal",
      },
    ],
    siteName: "Divyam Bansal Portfolio",
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle', // Replace with your Twitter handle if available
    creator: '@yourtwitterhandle',
    title: "Divyam Bansal - Software Engineer and Data Scientist",
    description: "Explore the portfolio of Divyam Bansal.",
    images: ['/images/Profile-pic.png'],
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Divyam Bansal",
    "url": "https://divyambansal.com",
    "sameAs": [
      "https://linkedin.com/in/divyam-bansal",
      "https://github.com/divyamb08"
    ],
    "jobTitle": "Software Engineer and Data Scientist",
  };

  return (
    <html lang="en">
      <head>
        {/* Existing metadata */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}