import Image from 'next/image';
import Link from 'next/link';
import { Rocket } from 'lucide-react';

import { Button } from './ui/button';

export const Footer = () => {
  return (
    <footer id='footer' className='bg-background'>
      <hr className='w-full mx-auto' />

      <section className='container py-20 grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-8'>
        <div className='flex col-span-2 flex-col justify-self-center'>
          <Image
            src='/images/footer_logo.png'
            width={130}
            height={160}
            className='w-[130px] m-auto h-[160px] object-scale-down'
            alt='Logo'
          />
        </div>

        <div className='flex flex-col gap-2 lg:col-span-1 text-center lg:text-left justify-self-center lg:justify-self-start'>
          {/* <h3 className='font-bold text-lg'>Community</h3> */}
          <div>
            <Link href='#' className='opacity-60 hover:opacity-100'>
              Home
            </Link>
          </div>

          <div>
            <Link href='#' className='opacity-60 hover:opacity-100'>
              About Us
            </Link>
          </div>

          <div>
            <Link href='#' className='opacity-60 hover:opacity-100'>
              How It Works
            </Link>
          </div>
          <Link href='https://app.xnodes.bot' target='_blank'>
            <Button variant='footer' className='px-4 !py-0.5 w-fit my-3'>
              Launch App
              <Rocket className='ml-2 size-5' />
            </Button>
          </Link>
        </div>
      </section>
    </footer>
  );
};
