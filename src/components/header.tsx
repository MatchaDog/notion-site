'use client';

import * as React from 'react';

import { ModeToggle } from '@/components/theme-mode-toggle';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import Link from 'next/link';

const headerLinks = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
] as const;

export const Header = () => {
  return (
    <header className="xs:px-2 sticky top-0 flex h-14 items-center justify-between backdrop-blur-sm md:px-20">
      <div className="text-xl font-bold">
        <Link href="/" legacyBehavior passHref>
          Hans
        </Link>
      </div>
      <div className="grid grid-flow-col gap-3">
        <NavigationMenu>
          <NavigationMenuList>
            {headerLinks.map((item) => (
              <NavigationMenuItem key={item.label}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.label}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle />
      </div>
    </header>
  );
};
