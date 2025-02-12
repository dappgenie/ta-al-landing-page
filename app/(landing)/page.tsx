import { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { WhyTaal } from '@/components/WhyTaal';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteConfig.siteUrl}`,
  },
};

export default function IndexPage() {
  return (
    <>
      <Hero />
      <WhyTaal />
      <HowItWorks />
    </>
  );
}
