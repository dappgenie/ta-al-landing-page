import React from 'react';

import { CheckIcon } from '@/lib/index-icons';
import { Transition } from '@/components/Transition';

export default function Page() {
  return (
    <section
      id='aboutUs'
      className='container relative py-14 lg:py-16 before:contents-[*] before:absolute before:right-0 before:-top-10 before:w-1/2 before:h-full before:bg-primary before:rounded-full before:opacity-40 before:blur-[150px] lg:before:blur-[200px]'
    >
      <Transition
        animationType='left'
        className='text-3xl font-bold md:text-4xl'
      >
        About US
      </Transition>
      <h3 className='text-2xl mt-5 font-medium text-[#A6A6A6]'>
        Welcome to Ta'al, your gateway to flexible job opportunities!
      </h3>
      <p className='mt-2 text-base font-light'>
        At Ta'al, we're on a mission to make finding part-time work simple,
        accessible, and hassle-free. Whether you're a student, a freelancer, or
        someone looking for extra income, Ta'al connects you to a variety of
        part-time gigs that fit your schedule and skills.
      </p>
      <h4 className='text-xl mt-12'>Our Vision</h4>
      <p className='mt-2 text-base font-light'>
        Our vision is to empower people by providing quick and convenient access
        to part-time jobs, creating a dynamic workforce that bridges the gap
        between job seekers and employers. We believe in flexibility, freedom,
        and the power of choice.
      </p>
      <h4 className='text-xl mt-12'>What We Offer</h4>
      <p className='mt-2 text-base font-light'>
        Ta'al is a platform where you can browse, apply, and secure part-time
        gigs across different industries—all in one app. With Ta'al, you can go
        through a quick registration process, including identity verification,
        to ensure safety and reliability. Once registered, users can explore a
        wide range of gigs and apply instantly, receiving timely notifications
        on the status of each application.
      </p>
      <h4 className='text-xl mt-12'>Why choose Ta'al?</h4>
      <div className='flex justify-start items-center font-light gap-4 mt-5'>
        <CheckIcon className='shrink-0' width={30} height={30} />
        Effortless Application Process: No lengthy paperwork or complex
        processes. Our app is designed for easy navigation and quick
        applications.
      </div>
      <div className='flex justify-start items-center font-light mt-4 gap-4'>
        <CheckIcon className='shrink-0' width={30} height={30} />
        Real-Time Notifications: Get updates on your application status so
        you're always in the loop.
      </div>
      <div className='flex justify-start items-center font-light mt-4 gap-4'>
        <CheckIcon className='shrink-0' width={30} height={30} />
        Verified Opportunities: We work with trusted agencies and employers to
        bring you legitimate, safe gig opportunities more flexible.{' '}
      </div>
      <div className='flex justify-start items-center font-light mt-4 gap-4'>
        <CheckIcon className='shrink-0' width={30} height={30} />A Community
        Focused on Flexibility: We know that time is valuable. Ta'al is
        dedicated to making the job hunt simpler and more flexible.{' '}
      </div>
    </section>
  );
}
