import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/Footer';
import { JoinTaal } from '@/components/JoinTaal';
import { Navbar } from '@/components/Navbar';
import Preloader from '@/components/Preloader';
import { ScrollToTop } from '@/components/ScrollToTop';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    title: siteConfig.name,
    images: [
      {
        url: siteConfig.imageUrl,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <Head>
        <title>Ta-al</title>
        <meta
          name='description'
          content='Complete gigs, get paid within hours. Start earning instantly!'
        />
        <link rel='icon' href='/favicon.ico' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:site_name' content='Ta-al' />
        <meta
          property='og:description'
          content='Complete gigs, get paid within hours. Start earning instantly!'
        />
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-YZZ6S0QXRP'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-YZZ6S0QXRP');
        `}
        </Script>
        <meta
          name='google-site-verification'
          content='QTacNJN6M5tVYf66N4cJByO_xqog68DJwNQ5T4Vq4Xw'
        />
      </Head>
      <body
        className={cn(
          'min-h-screen bg-background font-inter antialiased relative overflow-x-hidden',
          inter.className,
          inter.variable
        )}
      >
        {
          <>
            <Preloader />
            <Navbar />
            {children}
            <JoinTaal />
            <Footer />
            <ScrollToTop />
          </>
        }
      </body>
    </html>
  );
}
