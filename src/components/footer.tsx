'use client';

import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { Github, Mail, Twitter, Weibo } from '@icon-park/react';
import Link from 'next/link';

export const footerLinks = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Resume',
    href: '/resume',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
] as const;

export const SocialIcons = () => {
  return (
    <>
      <a href="https://twitter.com/HansMatcha" target="_blank">
        <Twitter className="cursor-pointer" theme="outline" size="24" />
      </a>
      <a href="https://weibo.com/u/7382913978" target="_blank">
        <Weibo className="cursor-pointer" theme="outline" size="24" />
      </a>
      <a href="https://github.com/MatchaDog" target="_blank">
        <Github className="cursor-pointer" theme="outline" size="24" />
      </a>
      <a href="mailto:matchahans@163.com">
        <Mail className="cursor-pointer" theme="outline" size="24" />
      </a>
    </>
  );
};

export const Footer = () => {
  return (
    <footer className="xs:text-xs flex flex-col items-center justify-center py-8">
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            {footerLinks.map((item) => {
              return (
                <NavigationMenuItem key={item.label}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.label}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="my-4 flex gap-4">
        <SocialIcons />
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Hans</p>
      </div>
    </footer>
  );
};
