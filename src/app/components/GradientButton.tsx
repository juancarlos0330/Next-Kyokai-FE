'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

type GradientButtonProps = {
  color: 'orange' | 'purple' | 'melon' | string;
  en?: string;
  jp?: string;
  onClick?: () => void;
  fontSize?: 'sm' | 'base' | 'lg';
  btnClass?: string;
  divClass?: string;
};
const fontSizeMap: Record<'sm' | 'base' | 'lg', { en: string; jp: string }> = {
  sm: { en: 'text-3xl', jp: 'text-lg' },
  base: { en: 'text-4xl', jp: 'text-xl' },
  lg: { en: 'text-[46px]', jp: 'text-[20px]' },
};

export default function GradientButton({
  color = 'orange',
  en = 'Take a Class!',
  jp = '今すぐ登録！',
  onClick,
  fontSize = 'lg',
  btnClass,
  divClass
}: GradientButtonProps) {
  const router = useRouter();
  const fontValue = fontSizeMap[fontSize];

  const handleClick = () => {
    if (onClick) return onClick();
    router.push('/register');
  };

  const gradientMap: Record<string, string> = {
    orange: 'linear-gradient(180deg, #FFFFFF, #EDD9C4)',
    purple: 'linear-gradient(180deg, #FFFFFF, #A78999)',
    melon: 'linear-gradient(180deg, #FFFFFF, #BCD3D8)',
    light: 'linear-gradient(180deg, #FFFFFF, #444343)',
    pink: 'linear-gradient(180deg, #FDF4F4, #f7dfdf)',
    watermelon: 'linear-gradient(180deg, #E8F0F1, #dce9eb)',
    default: 'linear-gradient(180deg, #FFFFFF, #A78999)',
  };

  const boxShadowMap: Record<string, string> = {
    orange: '0 10px 0 #914c03',
    purple: '0 10px 0 #42102b',
    melon: '0 10px 0 #5E848C',
    light: '0 10px 0 #808080',
    pink: '0 10px 0 #F4CCCC',
    watermelon: '0 10px 0 #BCCACD',
    default: '0 10px 0 #914c03',
  };

  const gradient = gradientMap[color] || gradientMap.default;
  const boxShadow = boxShadowMap[color] || boxShadowMap.default;

  return (
    <div
      className={`class-button flex flex-col border border-gray-300 items-center justify-center p-1 rounded-xl ${divClass}`}
      style={{
        backgroundImage: gradient,
        boxShadow,
        borderRadius: '1rem',
      }}
    >
      <button
        onClick={handleClick}
        className={`class-button-inner ${color} ${fontValue.en} font-bold text-2xl px-5 py-1 rounded-xl ${btnClass}`}
        style={{
          textShadow: '0 3px 2px #736e6e',
          border: 'none',
        }}
      >
        {en}
        <span
          className={`tracking-widest ${fontValue.jp} font-zenKurenaido leading-none mt-0 font-normal`}
          style={{ textShadow: 'none' }}
        >
          {jp}
        </span>
      </button>
    </div>
  );
}
