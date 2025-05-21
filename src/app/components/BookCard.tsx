"use client";

import React from "react";
import Image from "next/image";

type CardProps = {
  key?: number;
  level?: string;
  subtitle?: string;
  imageUrl: string;
  title: string;
  price: string;
  path?: string;
};

export default function BookCard({ key, imageUrl, level, subtitle, path, title, price}: CardProps) {
  return (
    <div key={key} className="flex flex-col justify-center items-center">
      <h2 className="text-center mb-4 text-[34px] font-bold">
        <span className="block">{level}</span>
        <span className="block">{subtitle}</span>
      </h2>
      <div className="rounded-2xl border border-gray-300 shadow-md p-6 flex flex-col items-center h-[390px] w-[260px]">
        <div className="flex mb-4 bg-gray-100 py-2 rounded-2xl h-[350px] items-center">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} width={350} height={400} className="mx-auto" />
        </div>
        <h3 className="text-center text-sm font-outfit font-medium mb-2">{title}</h3>
        <hr className="w-[220px] border-t border-gray-300" />
        <div className="mt-auto font-bold font-outfit py-1">
          <p className="text-center text-[20px]">{price}</p>
        </div>
      </div>
      <a href={path} className="block mt-5 font-outfit text-2xl underline text-center text-blue-800 hover:text-blue-600">
        Buy on Amazon
      </a>
    </div>
  );
}
  