import Link from 'next/link';
import { HandCoins } from 'lucide-react';

import { SOCIAL_LINKS } from '@/lib/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { DocumentationLink } from './DocumentationLink';
import { Transition } from './Transition';
import { Button, buttonVariants } from './ui/button';

interface FAQProps {
  question: string;
  answer: React.ReactNode;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: 'How do I get started with XNodes?',
    answer: (
      <p>
        To join XNodes, you'll need to secure a Base Node with an initial
        investment. Connect your crypto wallet, purchase your Base Node. This
        marks your entry into the network and enables you to participate in its
        earning mechanisms.
      </p>
    ),
    value: 'item-1',
  },
  {
    question: 'Can I create multiple Base Nodes?',
    answer: (
      <p>
        No, each address can only have one Base Node. This ensures a balanced
        network structure and fair earning potential for all participants.
        However, you can strategically expand your network by creating
        additional Sponsor Nodes.
      </p>
    ),
    value: 'item-2',
  },
  {
    question: 'How do I earn rewards on XNodes?',
    answer: (
      <div>
        XNodes offers multiple earning avenues:
        <ul className='list-disc'>
          <li>
            <b>Direct Commissions: </b>Earn by creating Base Nodes and Sponsor
            Nodes within your direct network.
          </li>
          <li>
            <b>Indirect Commissions: </b>Benefit from the growth of your broader
            network, including earnings from Rebirth Nodes.
          </li>
          <li>
            <b>Rebirth Mechanism: </b>When your earnings reach a designated
            threshold, reinvest a portion or automatically trigger the creation
            of a Rebirth Node, further amplifying your earnings potential.
          </li>
        </ul>
      </div>
    ),
    value: 'item-3',
  },
  {
    question: 'What is a Rebirth Node and how does it work?',
    answer: (
      <p>
        A Rebirth Node is a unique feature of XNodes that promotes sustained
        growth. When your earnings reach a specific threshold, a Rebirth Node is
        automatically generated and strategically placed within the network.
        Rebirth Nodes contribute to your overall indirect earnings.
      </p>
    ),
    value: 'item-4',
  },
  {
    question: 'Are my investments on XNodes secure?',
    answer: (
      <p>
        XNodes leverages blockchain technology to provide a secure and
        transparent foundation for transactions and earnings tracking. The
        immutable nature of the blockchain ensures that your investments and
        rewards are protected.
      </p>
    ),
    value: 'item-5',
  },
  {
    question: 'Is there a limit to how much I can earn?',
    answer:
      "XNodes offers unlimited earning potential. Your rewards directly correlate with your network's growth and activity. As you strategically expand your network and reinvest your earnings, you increase your potential for maximizing your passive income.",
    value: 'item-6',
  },
  {
    question: 'Where can I find more information about XNodes?',
    answer: (
      <Link href='https://app.xnodes.bot' target='_blank'>
        <Button className='w-full min-w-[200px] md:mr-4 md:w-52 m-1'>
          Start Earning Today
          <HandCoins className='ml-2 size-5' />
        </Button>
      </Link>
    ),
    value: 'item-7',
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
        <h3 className='mt-4 font-medium'>
          Still have questions?{' '}
          <Link
            href={SOCIAL_LINKS.telegram}
            className='transition-all text-primary border-primary hover:border-b-2'
          >
            Join Our Community
          </Link>
        </h3>
      </Transition>
    </section>
  );
};
