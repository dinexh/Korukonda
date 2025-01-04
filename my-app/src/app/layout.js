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
        {/* Background wrapper */}
        <div className="fixed inset-0 z-[-1]">
          <div className="relative h-full w-full bg-black">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>
        </div>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
