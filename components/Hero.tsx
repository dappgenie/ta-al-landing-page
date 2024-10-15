import Image from 'next/image';
import HeroIllustration from '@/public/images/hero-illustration.png';

export const Hero = () => {
  return (
    <section className='container flex justify-between py-14 lg:py-16'>
      <div className='flex flex-col justify-between text-center lg:text-start space-y-6'>
        <h1 className='text-lg text-left lg:text-5xl lg:leading-[4rem] xl:text-6xl xl:leading-[5rem] font-bold leading-[20px]'>
          Complete gigs, get <br /> paid
          <span className='text-primary mx-2'>within hours</span>
          <br />
          Start earning <br />
          instantly!
        </h1>
        <div className='flex mt-4 justify-start items-center space-x-6 md:ml-[-35px]'>
          <Image
            src='/images/app-store.png'
            alt='app-store'
            className='rounded-md object-contain'
            width={200}
            quality={100}
            height={72}
          />
          <Image
            src='/images/google-play.png'
            alt='google-play'
            className='rounded-md object-contain'
            width={200}
            quality={100}
            height={72}
          />
        </div>
      </div>

      <div className=''>
        <Image
          // fill
          src={HeroIllustration}
          alt='hero-illustration'
          quality={100}
          className='object-contain'
          priority
        />
      </div>

      <div className='shadow' />
    </section>
  );
};
