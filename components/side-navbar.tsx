import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DownloadIcon, Rocket } from 'lucide-react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { RouteProps, routeList } from './Navbar';
import { Button, buttonVariants } from './ui/button';

const SideNavbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent className='py-16' side={'left'}>
        <SheetHeader>
          <SheetTitle className='mb-8 text-xl font-bold'>
            <Image
              src='/images/logo.svg'
              alt='logo'
              className='object-scale-down mx-auto'
              width='180'
              height='60'
            />
          </SheetTitle>
        </SheetHeader>
        <nav className='flex flex-col items-center justify-center gap-2 mt-4'>
          {routeList.map(({ link, name }: RouteProps) => (
            <Link
              key={name}
              href={link}
              className={buttonVariants({ variant: 'ghost' }) + ' outline-none'}
            >
              <SheetClose className='outline-none'>
                <span className='py-4'>{name}</span>
              </SheetClose>
            </Link>
          ))}
        </nav>
        <SheetFooter className='mt-8'>
          <Link href='#' className='mx-auto outline-none'>
            <Button>
              Download App
              <DownloadIcon className='ml-2 size-5' />
            </Button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SideNavbar;
