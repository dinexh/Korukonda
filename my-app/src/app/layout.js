import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://dineshkorukonda.in'),
  title: 'Dinesh Korukonda',
  description: 'Personal website and blog',
  openGraph: {
    title: 'Dinesh Korukonda',
    description: 'Personal website and blog',
    url: 'https://dineshkorukonda.com',
    siteName: 'Dinesh Korukonda',
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
    title: 'Dinesh Korukonda',
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
