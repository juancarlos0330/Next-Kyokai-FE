"use client";
import ColorFooter from "@/app/components/ColorFooter";
import GradientButton from "@/app/components/GradientButton";
import ReturnToTopButton from "@/app/components/ReturnToTopButton";
import SchedulerModal from "@/app/components/SchedulerModal";
import { guides } from "@/app/utils/benkyoData";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import SenseiPage from "../sensei/page";
import ColorHeader from "@/app/components/ColorHeader";

export default function BenkyoPage () {
  const router = useRouter();
  const [modalUrl, setModalUrl] = useState("");
  const [modalType, setModalType] = useState<"free" | "pay" | "">("");

  const handleScheduleClick = (rule: "pay" | "free") => {
    const url =
      rule === "pay"
        ? process.env.NEXT_PUBLIC_ACUITY_PREMIUM_CLASS_URL
        : process.env.NEXT_PUBLIC_ACUITY_FREE_CLASS_URL;
  
    if (!url || url === "#") return;
    setModalUrl(url);
    setModalType(rule);
  };

  const closeModal = () => {
    setModalUrl("");
    setModalType("");
  };

  const customColors = [
    { color: "#A2C4C9", percent: 15 },
    { color: "#76A5AF", percent: 20 },
    { color: "#45818E", percent: 25 },
    { color: "#134F5C", percent: 40 },
  ];

  const handleRegister = () => {
    router.push('/register');
  }

  const handleClass = () => {
    router.push('/classes');
  }

  const currentPath = usePathname();

  return (
    <>
      <div id="benkyo" className="mx-auto flex flex-col">
        <section className="flex flex-col">
          <div className={`${currentPath !== '/about' ? 'hidden' : ''} header-content flex flex-col justify-center items-center p-10`}>
            <hr className="w-[460px] border-t-2 border-gray-400" />
            <h1 className="text-[120px] text-center font-bold">
              About Benkyo
              <span className="font-zenKurenaido font-normal">会</span>
            </h1>
            <p className="text-4xl font-zenKurenaido text-center">
              学校紹介
            </p>
            <hr className="w-[460px] border-t-2 border-gray-400 mt-13" />
          </div>
          {guides.map((guide, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center gap-5 mt-5">
              <section className="about-content flex flex-col justify-center items-center">
                <p className="font-lexend text-3xl font-bold text-center text-gray-600" dangerouslySetInnerHTML={{ __html: guide.en }} />
                <p className="text-xl font-kleeOne py-5" dangerouslySetInnerHTML={{ __html: guide.jp }} />
              </section>
              {guide.underline && guide.quote && (
                <hr className="w-[460px] border-t-2 border-[#A2C4C9] my-5" />
              )}
              {guide.quote?.map((quote, idx) => (
                <section key={idx} className="quote-content flex gap-5 my-3 flex-wrap justify-center items-center h-[100px] whitespace-pre-line pb-10">
                  <Image src="/images/svg-left.png" alt="svg left" width={30} height={30} />
                  <p className="text-center font-kleeOne text-xl" dangerouslySetInnerHTML={{ __html: quote }} />
                  <Image src="/images/svg-right.png" alt="svg right" width={30} height={30} />
                </section>
              ))}
            <hr className="w-[460px] border-t-2 border-[#A2C4C9] my-10" />
            </div>
          ))}
          <div className="quote-content flex gap-5 my-10 flex-wrap justify-center items-center h-[100px] whitespace-pre-line pb-10">
            <Image src="/images/svg-left.png" alt="svg left" width={30} height={30} />
            <p className="text-center font-lexend text-xl">
            “I’m no longer afraid of<br/>speaking in English.”
            </p>
            <Image src="/images/svg-right.png" alt="svg right" width={30} height={30} />
          </div>
          <hr className="flex self-center w-[460px] border-t-2 border-[#A2C4C9] my-12" />
          <div className="flex justify-center items-center px-6 gap-20 pb-20">
            <GradientButton onClick={() => handleScheduleClick('pay')} en="Register For a Class Today!" jp="今すぐクラスに申し込む！" divClass="border-1 border-[#FDF4F4]" color="pink" />
            <GradientButton onClick={() => handleScheduleClick('free')} en="First Week Only: Try a free Class" jp="第一週目：無料クラスを試す" divClass="border-1 border-[#E8F0F1]" color="watermelon" />
          </div>
          <ReturnToTopButton />
          <SchedulerModal url={modalUrl} onClose={closeModal} type={modalType} />
        </section>
        <section className="z-0" style={{ height: "5vh"}}>
        </section>
        <ColorFooter footerColors={customColors} margin />
      </div>
      <div className="pt-[1px]">
        <ColorHeader headerColors={customColors} />
        <SenseiPage />
      </div>
    </>
  );
};
  