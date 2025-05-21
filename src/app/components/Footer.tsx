'use client';

import { useRouter } from "next/navigation";
import GradientButton from "./GradientButton";

type FooterProps = {
  bgColor?: string;
  btnColor?: string;
}
export default function Footer({bgColor, btnColor}: FooterProps) {
  const router = useRouter();
  const handleContact = () => {
    router.push('/contact')
  }
  const handleAsk = () => {
    router.push('/question')
  }
  return (
    <footer className="items-center pt-1 h-[136px]" style={{ backgroundColor: bgColor ?? ''}}>
      <div className="flex justify-center items-center px-6 py-3 gap-80">
        <GradientButton onClick={handleAsk} btnClass="w-[436px] h-22" en="Ask Ben-Sensei a Question!" jp="英語について質問したい方はこちら" color="melon" />
        <GradientButton onClick={handleContact} btnClass="w-[436px] h-22" en="Contact Us" jp="お問い合わせ" color="melon" />
      </div>
    </footer>
  );
}