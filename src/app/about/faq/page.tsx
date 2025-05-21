'use client';
import ColorFooter from "@/app/components/ColorFooter";
import Footer from "@/app/components/Footer";
import GradientButton from "@/app/components/GradientButton";
import ReturnToTopButton from "@/app/components/ReturnToTopButton";
import SchedulerModal from "@/app/components/SchedulerModal";
import { questions } from "@/app/utils/faqData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FaqPage () {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [modalUrl, setModalUrl] = useState("");
  const [modalType, setModalType] = useState<"free" | "pay" | "">("");
  const router = useRouter();
  const customColors = [
    { color: "#A2C4C9", percent: 15 },
    { color: "#76A5AF", percent: 20 },
    { color: "#45818E", percent: 25 },
    { color: "#134F5C", percent: 40 },
  ];

  const handleScheduleClick = (rule: "pay" | "free") => {
    const url =
      rule === "pay"
        ? process.env.NEXT_PUBLIC_ACUITY_PREMIUM_CLASS_URL
        : process.env.NEXT_PUBLIC_ACUITY_FREE_CLASS_URL;
  
    if (!url || url === "#") return;
    setModalUrl(url);
    setModalType(rule);
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleRegister = () => {
    router.push('/register');
  };

  const closeModal = () => {
    setModalUrl("");
    setModalType("");
  };

  return (
    <section>
      <div id="faq" className="max-w-[1600px] mx-auto header-content flex justify-around items-center py-10">
        <div className="flex flex-col justify-center items-center">
          <hr className="w-[460px] border-t-2 border-gray-400 mt-5" />
          <h1 className="text-[90px] text-center font-bold">
            F.A.Q
          </h1>
          <p className="text-4xl font-zenKurenaido mt-[-25] mb-5 text-center">
            よくある質問
          </p>
          <hr className="w-[460px] border-t-2 border-gray-400 my-5" />
        </div>
        <div className="flex justify-between items-center">
        </div>
      </div>
      <main className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center w-[80%] gap-10">
          {questions.map((question, index) => (
            <div key={index} className="flex flex-col">
              <div
                className="flex justify-between items-center border border-gray-600 p-4 rounded-md cursor-pointer bg-gray-100 hover:bg-gray-200 transition"
                onClick={() => toggleAccordion(index)}
              >
                <p className="flex flex-row gap-5 items-center">
                  <span className="text-2xl font-amatio font-bold" dangerouslySetInnerHTML={{ __html: question.en }} />
                  <span className="text-base font-zenKurenaido" dangerouslySetInnerHTML={{ __html: question.jp }} />
                </p>
                {openIndex === index ? (
                  <Image src="/images/svg-up.png" alt="drop up" width={16} height={16} />
                ) : (
                  <Image src="/images/svg-down.png" alt="drop down" width={16} height={16} />
                )}
              </div>

              {/* Content */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'grid-rows-[1fr] p-4' : 'grid-rows-[0fr] p-0'
                } bg-white overflow-hidden`}
              >
                <div className="flex flex-col overflow-hidden gap-4 px-5">
                  <p className="text-gray-600 font-notoSerifGeorgian text-xl" dangerouslySetInnerHTML={{ __html: question.answerEn }} />
                  <p className="text-gray-600 font-kleeOne text-lg" dangerouslySetInnerHTML={{ __html: question.answerJp }} />
                  <hr className="w-[460px] border-t-2 self-center border-gray-500 mt-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center px-6 gap-20 py-20">
          <GradientButton onClick={() => handleScheduleClick('pay')} en="Register For a Class Today!" jp="今すぐクラスに申し込む！" divClass="border-1 border-[#FDF4F4]" color="pink" />
          <GradientButton onClick={() => handleScheduleClick('free')} en="First Week Only: Try a free Class" jp="第一週目：無料クラスを試す" divClass="border-1 border-[#E8F0F1]" color="watermelon" />
        </div>
      </main>
      <ReturnToTopButton />
      <SchedulerModal url={modalUrl} onClose={closeModal} type={modalType} />
      <ColorFooter footerColors={customColors} margin />
      <div className="pt-2">
        <Footer bgColor="#134F5C" />
      </div>
    </section>
  );
};
