import React from 'react';
import { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { FAQ } from '@/components/FAQ';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteConfig.siteUrl}faq`,
  },
};
export default function page() {
  return <FAQ />;
}
