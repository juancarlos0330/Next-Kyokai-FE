'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function setupScrollRedirect(redirectUrl: string) {
  const [redirected, setRedirected] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (!redirected && scrollTop + windowHeight >= documentHeight - 10) {
        setRedirected(true);
        setTimeout(() => {
          router.push(redirectUrl);
        }, 1000); // wait 1 second before redirect
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [redirected, redirectUrl, router]);

  return redirected;
}