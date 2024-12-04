import Image from 'next/image';
import whyTaalImg from '@/public/images/why_taal.png';

import { CheckIcon } from '@/lib/index-icons';

import { Transition } from './Transition';
import MoneyTransferSuccess from './highlight-elements/money-transfer';
import TotalIncome from './highlight-elements/total-income';

export const WhyTaal = () => {
  return (
    <section id='howItWorks' className='container py-16 sm:py-24 lg:pt-14'>
      <Transition
        animationType='left'
        className='text-3xl font-bold md:text-4xl'
      >
        Why Ta'al?
      </Transition>

      <div className='flex flex-col sm:flex-row items-start justify-between gap-8 mt-10 lg:mt-0'>
        <div className='flex flex-col items-start justify-center space-y-4 lg:mt-9'>
          <div className='flex justify-start items-center gap-4'>
            <CheckIcon className='shrink-0' width={30} height={30} />
            Effortless Application Process: No lengthy paperwork or complex
            processes. Our app is designed for easy navigation and quick
            applications.
          </div>
          <div className='flex justify-start items-center gap-4'>
            <CheckIcon className='shrink-0' width={30} height={30} />
            Real-Time Notifications: Get updates on your application status so
            you're always in the loop.
          </div>
          <div className='flex justify-start items-center gap-4'>
            <CheckIcon className='shrink-0' width={30} height={30} />
            Verified Opportunities: We work with trusted agencies and employers
            to bring you legitimate, safe gig opportunities more flexible.{' '}
          </div>
          <div className='flex justify-start items-center gap-4'>
            <CheckIcon className='shrink-0' width={30} height={30} />A Community
            Focused on Flexibility: We know that time is valuable. Ta'al is
            dedicated to making the job hunt simpler and more flexible.{' '}
          </div>
        </div>

        <div className='relative shrink-0 mt-14 md:mt-0 self-center'>
          <Image
            src={whyTaalImg}
            alt='why-taal'
            quality={100}
            width={450}
            height={500}
            className='object-contain w-full sm:w-[250px] md:w-[250px] md:h-auto lg:w-full max-h-[400px]'
          />
          <TotalIncome className='absolute -top-14 right-2 lg:top-[7%] lg:-right-[5%]' />
          <MoneyTransferSuccess className='absolute -bottom-5 md:-bottom-20 lg:bottom-4 lg:-left-[60%]' />
        </div>
      </div>
    </section>
  );
};
