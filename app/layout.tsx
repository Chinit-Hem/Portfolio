import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import { profile } from '@/data/profile';
import { getSiteUrl } from '@/lib/site-url';
import type { Metadata, Viewport } from 'next';
import { Kantumruy_Pro } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const kantumruyPro = Kantumruy_Pro({
  subsets: ['khmer', 'latin'],
  display: 'swap',
  variable: '--font-kantumruy-pro',
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: 'Hem Chinit | IT Executive & Full-Stack Developer',
    template: '%s | Hem Chinit',
  },
  description:
    'Portfolio of Hem Chinit, an IT Executive and full-stack developer building practical web systems, dashboards, and enterprise business solutions.',
  keywords: [
    'Hem Chinit',
    'IT Executive',
    'Full-Stack Developer',
    'Future IT Project Manager',
    'Next.js',
    'React',
    'PostgreSQL',
    'Business Web Systems',
    'Cambodia Developer',
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Hem Chinit | IT Executive & Full-Stack Developer',
    description:
      'Practical portfolio for enterprise systems, dashboards, IT operations, and full-stack development.',
    siteName: 'Hem Chinit Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hem Chinit | IT Executive & Full-Stack Developer',
    description:
      'Building practical web systems, dashboards, and enterprise business solutions.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={kantumruyPro.variable}>
        <Providers>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
