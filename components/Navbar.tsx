'use client';

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
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import SideNavbar from './side-navbar';
import { Button, buttonVariants } from './ui/button';
import { FloatingNav } from './ui/floating-navbar';

export interface RouteProps {
  link: string;
  name: string;
  icon?: JSX.Element;
}

export const routeList: RouteProps[] = [
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
  {
    link: '#faq',
    name: 'FAQ',
    icon: <MessageCircleQuestion />,
  },
];

export const Navbar = () => {
  const screenSize = useScreenSize();
  return (
    <>
      <FloatingNav navItems={routeList} />
      <header className='xl:container flex items-center justify-between py-5 lg:py-10 px-4 lg:px-10 xl:px-16  bg-white/60 backdrop-blur-sm'>
        <Link href='/' className='flex ml-2 text-xl font-bold'>
          <Image
            src='/images/logo.svg'
            alt='logo'
            className='w-[70px] h-auto lg:w-[135px] object-contain'
            width='135'
            height='52'
          />
        </Link>
        <NavigationMenu>
          <NavigationMenuList className='hidden gap-2 md:flex'>
            {routeList.map((route: RouteProps) => (
              <Link
                href={route.link}
                key={route.name}
                className={`text-[17px] ${buttonVariants({
                  variant: 'ghost',
                })}`}
              >
                {route.name}
              </Link>
            ))}
            {screenSize.width >= 768 && (
              <Link href='https://app.xnodes.bot' target='_blank'>
                <Button>
                  Launch App
                  <Rocket className='ml-2 size-5' />
                </Button>
              </Link>
            )}
          </NavigationMenuList>
        </NavigationMenu>
        <SideNavbar>
          <Menu className='w-[20px] h-auto md:hidden' />
        </SideNavbar>
      </header>
    </>
  );
};
