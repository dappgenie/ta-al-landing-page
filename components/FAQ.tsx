'use client';

import Link from 'next/link';

import { SOCIAL_LINKS } from '@/lib/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { Transition } from './Transition';

interface FAQProps {
  question: string;
  answer: React.ReactNode;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: `What is Ta'al?`,
    answer: (
      <p>
        Ta'al is an app that connects users with part-time gig opportunities.
        Whether you're looking for flexible work or temporary positions, Ta'al
        helps you find and apply for jobs quickly and easily.
      </p>
    ),
    value: 'item-1',
  },
  {
    question: `How do I get started with Ta'al?`,
    answer: (
      <p>
        Simply download the Ta'al app from playstore or appstore, create an
        account, and complete the registration process by uploading your ID,
        photo, and other necessary details. Once verified, you can start
        browsing and applying for available gigs.
      </p>
    ),
    value: 'item-2',
  },
  {
    question: `Is there a registration fee to join Ta'al?`,
    answer: (
      <p>
        No, registering on Ta'al is completely free. We connect you with job
        opportunities without any initial charges.
      </p>
    ),
    value: 'item-3',
  },
  {
    question: 'What documents are required for registration?',
    answer: (
      <p>
        You will need a valid Emirates ID,2-3 recent photos, and some basic
        personal information to complete your profile and start applying for
        gigs.
      </p>
    ),
    value: 'item-4',
  },
  {
    question: 'How do I apply for a gig?',
    answer: (
      <p>
        After setting up your profile, browse the available gigs on the app,
        select the one you're interested in, and click 'Apply.' You'll be
        notified of your application status as soon as there's an update.
      </p>
    ),
    value: 'item-5',
  },
  {
    question: `How will I know if I've been selected for a gig?`,
    answer:
      'You will receive a notification through the app if your application has been accepted or if there’s any further action required. Make sure to keep your notifications turned on..',
    value: 'item-6',
  },
];

export const FAQ = () => {
  return (
    <section id='faq' className='container py-16 sm:py-24'>
      <Transition
        animationType='left'
        className='mb-4 text-3xl font-bold md:text-4xl'
      >
        Frequently Asked{' '}
        <span className='text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text'>
          Questions
        </span>
      </Transition>

      <Transition animationType='bottom'>
        <Accordion type='single' collapsible className='w-full AccordionRoot'>
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className='text-left'>
                {question}
              </AccordionTrigger>

              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {/* <h3 className='mt-4 font-medium px-2 lg:px-4'>
          Still have questions?{' '}
          <Link
            href={SOCIAL_LINKS.telegram}
            className='transition-all text-primary border-primary hover:border-b-2'
          >
            Join Our Community
          </Link>
        </h3> */}
      </Transition>
    </section>
  );
};
