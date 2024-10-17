import Image from 'next/image';
import whyTaalImg from '@/public/images/why_taal.png';

import { Transition } from './Transition';
import MoneyTransferSuccess from './highlight-elements/money-transfer';
import TotalIncome from './highlight-elements/total-income';

export const WhyTaal = () => {
  return (
    <section id='howItWorks' className='container py-16 sm:py-24'>
      <Transition
        animationType='left'
        className='text-3xl font-bold md:text-4xl'
      >
        Why Ta’al?
      </Transition>

      <div className='flex flex-col sm:flex-row items-center justify-between gap-8'>
        <div className='flex flex-col items-start justify-center space-y-4'>
          <div className='flex justify-start items-center gap-4'>
            <Image src='/images/check.svg' alt='check' width={30} height={30} />
            Instant Payments: Get paid within hours of completing gigs.
          </div>
          <div className='flex justify-start items-center gap-4'>
            <Image src='/images/check.svg' alt='check' width={30} height={30} />
            Diverse Opportunities: Browse a wide range of gigs tailored to your
            skills.
          </div>
          <div className='flex justify-start items-center gap-4'>
            <Image src='/images/check.svg' alt='check' width={30} height={30} />
            User-Friendly: Easy navigation and quick application process.
          </div>
          <div className='flex justify-start items-center gap-4'>
            <Image src='/images/check.svg' alt='check' width={30} height={30} />
            Secure Transactions: Safe and reliable payment methods.
          </div>
        </div>
        <div className='relative'>
          <Image
            src={whyTaalImg}
            alt='why-taal'
            quality={100}
            width={450}
            height={500}
            className='object-contain max-h-[450px]'
          />
          <TotalIncome className='absolute top-[7%] -right-[5%]' />
          <MoneyTransferSuccess className='absolute bottom-7 -left-[40%]' />
        </div>
      </div>
    </section>
  );
};
