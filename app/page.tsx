'use client';

import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { JoinTaal } from '@/components/JoinTaal';
import { Navbar } from '@/components/Navbar';
import { ScrollToTop } from '@/components/ScrollToTop';
import { WhyTaal } from '@/components/WhyTaal';

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyTaal />
      <HowItWorks />
      <JoinTaal />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}
