import Image from 'next/image';
import HeroIllustration from '@/public/images/hero-illustration.jpg';
import { CheckIcon, Database, MessageSquare } from 'lucide-react';

import IconCont from './highlight-elements/icon-cont';
import PaymentCredited from './highlight-elements/payment-credited';
import TotalIncome from './highlight-elements/total-income';

export const Hero = () => {
  // lg:grid lg:grid-cols-[clamp(27rem,100%,30rem)_auto] xl:grid-cols-[clamp(30rem,50%,35rem)_auto]
  return (
    <section
      id='home'
      className='container relative flex flex-col  lg:flex-row justify-between py-14 lg:pt-10 lg:pb-6'
    >
      <div className='flex flex-col justify-between text-center lg:text-start space-y-6 shrink-0'>
        <h1 className='text-3xl md:text-4xl md:leading-[2.7rem] text-center lg:text-left lg:text-4xl lg:leading-[3.5rem] xl:text-5xl xl:leading-[4rem] font-bold'>
          Start earning <span className='text-primary'>today!</span> <br />{' '}
          Complete gigs, get <br /> paid in no time
        </h1>
        <div className='flex-center mt-4 gap-x-6 md:grid p-2 lg:-ml-2 md:grid-cols-2 w-auto overflow-hidden md:max-w-[25rem] lg:max-w-[25rem] xl:max-w-[29rem] mx-auto'>
          <Image
            src='/images/app-store.png'
            alt='app-store'
            className='rounded-2xl app-store-bg w-[140px] md:w-auto h-auto object-contain cursor-pointer'
            width={200}
            quality={100}
            height={72}
          />
          <Image
            src='/images/google-play.png'
            alt='google-play'
            className='rounded-2xl app-store-bg w-[140px] md:w-auto h-auto object-contain cursor-pointer'
            width={200}
            quality={100}
            height={72}
          />
        </div>
      </div>

      <div className='relative z-20 mt-20 lg:mt-0 max-w-[355px] lg:mr-10 self-center'>
        <Image
          src={HeroIllustration}
          alt='hero-illustration'
          quality={100}
          className='object-contain mx-auto max-h-[430px]'
          priority
        />
        <PaymentCredited className='absolute -top-10 left-[5%] md:left-[-30%] lg:-top-7 lg:left-[-30%] xl:top-[2%] xl:left-[-54%]' />
        <TotalIncome className='absolute -bottom-14 md:bottom-10 md:left-[-25%] left-[5%] lg:bottom-10 lg:left-[-27%]' />
        <IconCont className='bg-[#4535AF] absolute top-[30%] left-[-2%] lg:left-[-20%] -rotate-[20deg]'>
          <CheckIcon className='w-[20px] h-auto text-white' />
        </IconCont>
        <IconCont className='bg-[#FBC75E] absolute top-[10%] right-[-2%] lg:top-10 lg:right-[-5%] rotate-[20deg]'>
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
