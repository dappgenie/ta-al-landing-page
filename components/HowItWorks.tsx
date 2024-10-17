import Image from 'next/image';

import {
  HWStep1Icon,
  HWStep2Icon,
  HWStep3Icon,
  HWStep4Icon,
} from '@/lib/index-icons';

import { GiftIcon, MapIcon, MedalIcon, PlaneIcon } from '../components/Icons';
import { Transition } from './Transition';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <HWStep1Icon />,
    title: 'Sign Up',
    description: 'Create your profile and showcase your skills.',
  },
  {
    icon: <HWStep2Icon />,
    title: 'Browse Gigs',
    description: 'Find tasks that match your expertise.',
  },
  {
    icon: <HWStep3Icon />,
    title: 'Apply & Complete',
    description: 'Apply for gigs, complete tasks, and submit your work.',
  },
  {
    icon: <HWStep4Icon />,
    title: 'Get Paid',
    description: 'Receive your payment within hours of task approval.',
  },
];

export const HowItWorks = () => {
  return (
    <section id='howItWorks' className='container py-16 sm:py-24'>
      <Transition
        animationType='left'
        className='text-3xl font-bold md:text-4xl'
      >
        How It Works
      </Transition>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10'>
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            className='!bg-transparent !text-center !border-none shadow-none'
            key={title}
          >
            <CardHeader>
              <CardTitle className='grid gap-4 place-items-center'>
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
      <div className='grid grid-cols-3 w-full gap-8 mt-16 place-items-center'>
        <Image
          src='/images/hw-step1.png'
          alt='hero-illustration'
          quality={100}
          width={324}
          height={636}
          className='object-contain'
          priority
        />
        <Image
          src='/images/hw-step2.png'
          alt='hero-illustration'
          quality={100}
          width={324}
          height={636}
          className='object-contain max-h-[619px]'
          priority
        />
        <Image
          src='/images/hw-step3.png'
          alt='hero-illustration'
          quality={100}
          width={324}
          height={636}
          className='object-contain'
          priority
        />
      </div>
    </section>
  );
};
