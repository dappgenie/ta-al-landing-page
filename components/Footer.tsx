'use client';

import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer id='footer' className='bg-background pt-4 pb-10'>
      <section className='container w-full flex flex-col lg:flex-row justify-between gap-x-12 gap-y-8'>
        <div className='flex flex-col'>
          <Image
            src='/images/footer_logo.png'
            width={130}
            height={160}
            className='w-[130px] h-[160px] object-contain'
            alt='Logo'
          />
          <div className='flex justify-start items-center space-x-6'>
            <Image
              src='/images/app-store.png'
              alt='app-store'
              className='rounded-2xl app-store-bg object-contain max-w-[150px]'
              width={200}
              quality={100}
              height={72}
            />
            <Image
              src='/images/google-play.png'
              alt='google-play'
              className='rounded-2xl app-store-bg object-contain max-w-[150px]'
              width={200}
              quality={100}
              height={72}
            />
          </div>
          <div className='flex gap-x-5 text-sm text-[#0D0D0D] mt-7 flex-wrap'>
            <span>© 2024 EazyGig. All Rights Reserved.</span>
            {/* <span>Terms & Conditions</span>
            <span>Privacy policy</span> */}
          </div>
        </div>

        <div className='flex flex-col justify-center items-start gap-2 lg:col-span-1 text-center lg:text-left justify-self-center lg:justify-self-start'>
          <div>
            <Link href='#home' className='opacity-60 hover:opacity-100'>
              Home
            </Link>
          </div>
          <div>
            <Link href='/faq' className='opacity-60 hover:opacity-100'>
              FAQ
            </Link>
          </div>

          <div>
            <Link href='/about-us' className='opacity-60 hover:opacity-100'>
              About Us
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};
