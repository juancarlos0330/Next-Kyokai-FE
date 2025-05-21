'use client';

import ColorFooter from "@/app/components/ColorFooter";
import Footer from "@/app/components/Footer";
import GradientButton from "@/app/components/GradientButton";
import SchedulerModal from "@/app/components/SchedulerModal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClassesRegisterPage () {
  const router = useRouter();
  const [modalUrl, setModalUrl] = useState("");
  const [modalType, setModalType] = useState<"free" | "pay" | "">("");

  const closeModal = () => {
    setModalUrl("");
    setModalType("");
  };

  const customColors = [
    { color: "#EA9999", percent: 15 },
    { color: "#E06666", percent: 20 },
    { color: "#CC0000", percent: 25 },
    { color: "#990000", percent: 40 },
  ]

  const handleScheduleClick = (rule: "pay" | "free") => {
    const url =
      rule === "pay"
        ? process.env.NEXT_PUBLIC_ACUITY_PREMIUM_CLASS_URL
        : process.env.NEXT_PUBLIC_ACUITY_FREE_CLASS_URL;
  
    if (!url || url === "#") return;
    setModalUrl(url);
    setModalType(rule);
  };

  useEffect(() => {
    const interval = setInterval(() => {
    const calendlyOverlay = document.querySelector('.calendly-overlay');
    const calendlyModal = document.querySelector('.calendly-popup');
    const footer = document.querySelector('footer');

    if (calendlyOverlay && calendlyModal) {
      (calendlyOverlay as HTMLElement).style.zIndex = '999999';
      (calendlyModal as HTMLElement).style.zIndex = '999999';
      
      if (footer) {
        (footer as HTMLElement).style.zIndex = '0'; // hide or lower footer
      }

      clearInterval(interval);
    }
  }, 300);

  return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
    const calendlyOverlay = document.querySelector('.calendly-overlay');
    const calendlyModal = document.querySelector('.calendly-popup');
    const footer = document.querySelector('footer');

    if (calendlyOverlay && calendlyModal) {
      (calendlyOverlay as HTMLElement).style.zIndex = '999999';
      (calendlyModal as HTMLElement).style.zIndex = '999999';
      
      if (footer) {
        (footer as HTMLElement).style.zIndex = '0'; // hide or lower footer
      }

      clearInterval(interval);
    }
  }, 300);

  return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <main className="px-10 max-w-[1600px] mx-auto header-content flex flex-col justify-around items-center pt-10">
        <div className="flex flex-col justify-center items-center">
          <hr className="w-[460px] border-t-2 border-gray-400" />
          <h1 className="text-[100px] text-center font-bold">
            Class Registration
          </h1>
          <p className="text-4xl font-zenKurenaido text-center">
            クラス登録
          </p>
          <hr className="w-[460px] border-t-2 border-gray-400 mt-10" />
        </div>
        <div className="flex gap-40 px-6 mx-auto items-center p-10">
          <GradientButton onClick={() => handleScheduleClick('pay')} btnClass="w-[470px]" en="Register For a Class Today!" jp="今すぐクラスに申し込む！" divClass="border-1 border-[#FDF4F4]" color="pink" />
          <GradientButton onClick={() => handleScheduleClick('free')} btnClass="w-[470px]" en="First Week Only: Try a free Class" jp="第一週目：無料クラスを試す" divClass="border-1 border-[#E8F0F1]" color="watermelon" />
        </div>
      </main>
      <div className="w-full">
        <ColorFooter footerColors={customColors} margin />
        <div className="w-full mx-auto pt-2">
          <Footer bgColor="#134F5C" />
        </div>
      </div>
      <SchedulerModal url={modalUrl} onClose={closeModal} type={modalType} />
    </section>
  )
}