'use client';

import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { WhyTaal } from '@/components/WhyTaal';

export default function IndexPage() {
  return (
    <>
      <Hero />
      <WhyTaal />
      <HowItWorks />
    </>
  );
}
