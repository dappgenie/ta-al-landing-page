'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Boxes,
  Menu,
  MessageCircleQuestion,
  Network,
  Rocket,
} from 'lucide-react';

import useScreenSize from '@/lib/useScreenSize';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Button, buttonVariants } from './ui/button';
import { FloatingNav } from './ui/floating-navbar';

interface RouteProps {
  link: string;
  name: string;
  icon?: JSX.Element;
}

const routeList: RouteProps[] = [
  {
    link: '#about_us',
    name: 'About Us',
    icon: <Boxes />,
  },
  {
    link: '#how_it_works',
    name: 'How It Works',
    icon: <Network />,
  },
  // {
  //   link: "#pricing",
  //   name: "Pricing",
  // },
  {
    link: '#faq',
    name: 'FAQ',
    icon: <MessageCircleQuestion />,
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const screenSize = useScreenSize();
  return (
    <>
      <FloatingNav navItems={routeList} />
      <header className='z-40 w-full py-4 bg-white/60 backdrop-blur-sm w-screen overflow-hidden'>
        <NavigationMenu className='mx-auto'>
          <NavigationMenuList className='container flex items-center justify-between w-screen px-4 h-14'>
            <NavigationMenuItem className='flex font-bold'>
              <a href='/' className='flex ml-2 text-xl font-bold'>
                <Image
                  src='/images/logo.svg'
                  alt='logo'
                  className='object-scale-down '
                  width='135'
                  height='52'
                />
              </a>
            </NavigationMenuItem>

            {/* mobile */}
            <span className='flex md:hidden'>
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger className='px-2'>
                  <Menu
                    className='flex size-5 md:hidden'
                    onClick={() => setIsOpen(true)}
                  />
                </SheetTrigger>

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
                      <a
                        key={name}
                        href={link}
                        onClick={() => setIsOpen(false)}
                        className={buttonVariants({ variant: 'ghost' })}
                      >
                        <span className='py-4'>{name}</span>
                      </a>
                    ))}
                  </nav>
                  <SheetFooter className='mt-8'>
                    <Link
                      href='https://app.xnodes.bot'
                      className='mx-auto'
                      target='_blank'
                    >
                      <Button>
                        Launch App
                        <Rocket className='ml-2 size-5' />
                      </Button>
                    </Link>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </span>

            {/* desktop */}
            <nav className='hidden gap-2 md:flex'>
              {routeList.map((route: RouteProps, i) => (
                <a
                  href={route.link}
                  key={route.name}
                  className={`text-[17px] ${buttonVariants({
                    variant: 'ghost',
                  })}`}
                >
                  {route.name}
                </a>
              ))}
              {screenSize.width >= 1024 && (
                <Link href='https://app.xnodes.bot' target='_blank'>
                  <Button>
                    Launch App
                    <Rocket className='ml-2 size-5' />
                  </Button>
                </Link>
              )}
            </nav>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </>
  );
};
