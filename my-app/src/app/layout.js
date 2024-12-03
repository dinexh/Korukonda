import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: 'Dinesh Korukonda - Full Stack Developer & DevOps Engineer',
  description: 'Portfolio website of Dinesh Korukonda, a Full Stack Developer and DevOps Engineer specializing in web development and cloud infrastructure.',
  keywords: [
    'Dinesh Korukonda',
    'Full Stack Developer',
    'DevOps Engineer',
    'Web Development',
    'Cloud Infrastructure',
    'Software Engineer',
    'React Developer',
    'Node.js Developer'
  ],
  openGraph: {
    title: 'Dinesh Korukonda - Full Stack Developer & DevOps Engineer',
    description: 'Portfolio website of Dinesh Korukonda, a Full Stack Developer and DevOps Engineer specializing in web development and cloud infrastructure.',
    url: 'https://dineshkorukonda.com',
    siteName: 'Dinesh Korukonda Portfolio',
    images: [
      {
        url: '/images/Dinesh.jpg',
        width: 1200,
        height: 630,
        alt: 'Dinesh Korukonda Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
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
  twitter: {
    card: 'summary_large_image',
    title: 'Dinesh Korukonda - Full Stack Developer & DevOps Engineer',
    description: 'Portfolio website of Dinesh Korukonda, a Full Stack Developer and DevOps Engineer specializing in web development and cloud infrastructure.',
    images: ['/images/Dinesh.jpg'],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
