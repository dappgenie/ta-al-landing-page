import Image from 'next/image';

import { Transition } from './Transition';

export const JoinTaal = () => {
  return (
    <section
      id='howItWorks'
      className='container py-16 sm:py-24 bg-gradient-to-br from-white to-[#E3F4EE]'
    >
      <Transition
        animationType='left'
        className='text-3xl font-bold md:text-4xl'
      >
        Join Ta'al Today
      </Transition>

      <div className='w-full p-[60px] flex flex-col items-center justify-center bg-gradient-to-b from-[#0EB295] to-[#000000]/80 rounded-[30px] mt-10'>
        <div className='w-full flex flex-col items-center justify-center'>
          <h1 className='text-4xl font-bold text-white'>
            Scan the QR and get into action !
          </h1>
          <Image
            src='/images/QR.png'
            alt='QR'
            width={150}
            height={150}
            className='my-[25px]'
          />
          <div className='flex mt-4 justify-center items-center space-x-6'>
            <Image
              src='/images/app-store.png'
              alt='app-store'
              className='rounded-md'
              width={140}
              height={50}
            />
            <Image
              src='/images/google-play.png'
              alt='google-play'
              className='rounded-md'
              width={140}
              height={50}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
