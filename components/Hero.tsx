import Image from 'next/image';
import HeroIllustration from '@/public/images/hero-illustration.png';
import { CheckIcon, Database, MessageSquare } from 'lucide-react';

import IconCont from './highlight-elements/icon-cont';
import PaymentCredited from './highlight-elements/payment-credited';
import TotalIncome from './highlight-elements/total-income';

export const Hero = () => {
  return (
    <section
      id='home'
      className='container flex flex-col lg:flex-row justify-between py-14 lg:py-16'
    >
      <div className='flex flex-col justify-between text-center lg:text-start space-y-6'>
        <h1 className='text-3xl md:text-4xl md:leading-[2.7rem] text-center lg:text-left lg:text-5xl lg:leading-[4rem] xl:text-6xl xl:leading-[5rem] font-bold'>
          Complete gigs, get <br /> paid
          <span className='text-primary mx-2'>within hours</span>
          <br />
          Start earning <br />
          instantly!
        </h1>
        <div className='flex mt-4 justify-center gap-x-6 lg:justify-start items-center md:ml-[-35px]'>
          <Image
            src='/images/app-store.png'
            alt='app-store'
            className='rounded-2xl app-store-bg w-[140px] md:w-[200px] h-auto object-contain'
            width={200}
            quality={100}
            height={72}
          />
          <Image
            src='/images/google-play.png'
            alt='google-play'
            className='rounded-2xl app-store-bg w-[140px] md:w-[200px] h-auto object-contain'
            width={200}
            quality={100}
            height={72}
          />
        </div>
      </div>

      <div className='relative mt-20 lg:mt-0 xl:mr-14'>
        <Image
          src={HeroIllustration}
          alt='hero-illustration'
          quality={100}
          className='object-contain mx-auto'
          priority
        />
        <PaymentCredited className='absolute -top-10 left-[5%]  lg:top-4 lg:-right-[10%] 2xl:-left-[40%]' />
        <TotalIncome className='absolute -bottom-10 md:bottom-4 left-[10%] lg:-left-[20%]' />
        <IconCont className='bg-[#4535AF] absolute top-[30%] left-[10%] lg:-left-[20%] -rotate-[20deg]'>
          <CheckIcon className='w-[20px] h-auto text-white' />
        </IconCont>
        <IconCont className='bg-[#FBC75E] absolute top-[30%] right-[10%] lg:-right-[15%] rotate-[20deg]'>
          <Database className='w-[20px] h-auto text-white' />
        </IconCont>
        <IconCont className='bg-[#FFAA94] absolute -bottom-4 right-[10%] rotate-[20deg]'>
          <MessageSquare className='w-[20px] h-auto text-white' />
        </IconCont>
      </div>

      <div className='shadow' />
    </section>
  );
};
