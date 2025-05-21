'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { menuItems } from '../utils/menuItem';
import Image from 'next/image';
import GradientButton from './GradientButton';

export default function Navbar() {
  const currentPath = usePathname();

  const [isMobile, setIsMobile] = useState(false);
  const [navColor, setNavColor] = useState('#083a46');
  const [buttonColor, setButtonColor] = useState('');

  const colors = menuItems.find(item => currentPath.startsWith(item.href))?.colors || [
    "#083a46", "#083a46", "#175c6a", "#428996", "#74a6ad"
  ];

  useEffect(() => {
    const userAgent = typeof window !== "undefined" ? navigator.userAgent : "";
    const isMobileDevice =
      /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase()) ||
      window.innerWidth < 768;
    setIsMobile(isMobileDevice);
  }, []);

  useEffect(() => {
    const currentItem = menuItems.find(item => currentPath.startsWith(item.href));
    setNavColor(currentItem?.colors[0] || '#083a46');
    setButtonColor(currentItem?.buttonColor || 'orange');
  }, [currentPath]);

  // 👇 Conditional return happens AFTER all hooks
  if (isMobile) return null;

  if (currentPath.split('/').length > 2) {
    return (
      <header className="flex flex-col w-full">
        {colors.map((color, i) => (
          <div key={i} className="h-[6px]" style={{ backgroundColor: color, marginTop: `${i * 3}px` }} />
        ))}
      </header>
    );
  }

  return (
    <nav className="@container w-full px-14 py-5" style={{ backgroundColor: navColor }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center">
          {currentPath !== '/' && (
            <Image src="/images/logo.png" alt="Logo" width={90} height={90} />
          )}
        </a>
        {menuItems.map(({ en, jp, href, hoverColor, hidden }, i) => {
          if (hidden) return null;
          const isActive = currentPath.startsWith(href);
          return (
            <div key={i} className="text-white text-center font-bold">
              <a
                href={href}
                className={`menu-link ${isActive ? 'underline' : ''} text-5xl`}
                style={{ color: isActive ? hoverColor : 'inherit' }}
                suppressHydrationWarning
              >
                {en}
                <span className="text-xl block leading-none font-normal">{jp}</span>
              </a>
            </div>
          );
        })}
        <div className="pb-1">
          <GradientButton color={buttonColor} />
        </div>
      </div>
    </nav>
  );
}
