'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Boxes,
  DownloadIcon,
  HomeIcon,
  Menu,
  MessageCircleQuestion,
  Network,
  Rocket,
  UserSearch,
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
    link: '/#home',
    name: 'Home',
    icon: <HomeIcon className='w-[18px] mr-1.5' />,
  },
  {
    link: '/faq',
    name: 'FAQ',
    icon: <MessageCircleQuestion className='w-[18px] mr-1.5' />,
  },
  {
    link: '/about-us',
    name: 'About Us',
    icon: <UserSearch className='w-[18px] mr-1.5' />,
  },
];

export const Navbar = () => {
  const screenSize = useScreenSize();
  return (
    <>
      <FloatingNav navItems={routeList} />
      <header className='lg:container flex items-center justify-between h-[65px] lg:h-auto py-5 lg:py-10 px-4 lg:px-10 xl:px-16  bg-white/60 backdrop-blur-sm'>
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
                {route.icon}
                {route.name}
              </Link>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        {screenSize.width >= 768 && (
          <Link href='#'>
            <Button>
              Download App
              <DownloadIcon className='ml-2 size-5' />
            </Button>
          </Link>
        )}
        <SideNavbar>
          <Menu className='w-[20px] h-auto md:hidden' />
        </SideNavbar>
      </header>
    </>
  );
};
