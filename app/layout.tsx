import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

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
        <title>XNodes</title>
        <meta
          name='description'
          content='Beyond Blockchain. Beyond Earnings.'
        />
        <link rel='icon' href='/favicon.ico' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:site_name' content='XNodes' />
        <meta
          property='og:description'
          content='Beyond Blockchain. Beyond Earnings.'
        />
        <meta property='og:url' content='https://xnodes.dappgenie.io/' />
        <meta property='og:title' content='XNodes' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dmrxi1emm/image/upload/v1714766008/xnodes_og_image-03_yuyhtm.png'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:alt' content='XNodes OG Image' />
      </Head>
      <body
        className={cn(
          'min-h-screen bg-background font-inter antialiased relative',
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
