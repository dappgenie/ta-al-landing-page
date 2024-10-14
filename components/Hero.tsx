import Image from 'next/image';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

import { HeroCards } from './HeroCards';
import { Button, buttonVariants } from './ui/button';

export const Hero = () => {
  return (
    <section className='container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10'>
      <div className='text-center lg:text-start space-y-6'>
        <main className='text-4xl md:text-5xl font-bold'>
          <h1 className='inline'>
            Complete gigs, get paid{' '}
            <span className='text-primary'>within hours</span> Start earning
            instantly
          </h1>{' '}
        </main>

        <div className='flex mt-4 justify-start items-center space-x-6'>
          <Image
            src='/images/app-store.png'
            alt='app-store'
            className='rounded-md'
            width={240}
            height={85}
          />
          <Image
            src='/images/google-play.png'
            alt='google-play'
            className='rounded-md'
            width={240}
            height={85}
          />
        </div>
      </div>

      {/* Hero cards sections */}
      <div className='z-10'>
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className='shadow' />
    </section>
  );
};
