'use client';

import { useEffect, useState } from 'react';
import Footer from "../components/Footer";
import ColorHeader from "../components/ColorHeader";
import BenkyoPage from "../about/benkyo/page";
import Image from 'next/image';
import NoticePage from '../components/NoticePage';

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = typeof window !== "undefined" ? navigator.userAgent : "";
    const isMobileDevice =
      /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase()) ||
      window.innerWidth < 768;

    setIsMobile(isMobileDevice);
  }, []);

  if (isMobile) return <NoticePage />

  return (
    <section>
      <main className='@container grid min-h-[65vh] max-h-auto my-2'>
        <div className="@container flex flex-row items-center justify-center text-center flex-grow overflow-hidden">
          <div className="flex flex-col gap-8 items-center mt-[-30px] max-w-sm">
            <div className="flex items-center max-w-sm">
              <Image src="/images/svg-left-blue.png" width={30} height={30} alt="svg left" className="flex-shrink-0"/>
              <p className="mt-2 text-base text-gray-500" dangerouslySetInnerHTML={{ __html: '“...疑問が残ることが<br />ほとんどないです”' }} />
              <Image src="/images/svg-right-blue.png" width={30} height={30} alt="svg right" className="flex-shrink-0"/>
            </div>
            <div className="text-2xl font-bold rounded-l-2xl ml-5 bg-[#f3f3f3] text-gray-600 w-110">
              <p className="font-notoSansJP text-lg font-bold my-6" dangerouslySetInnerHTML={{ __html: 'ユーモアたっぷりの、<br />本物の言語学者による<br />オンライン英語レッスン' }} />
            </div>
            <div className="flex items-center max-w-sm">
              <Image src="/images/svg-left-blue.png" width={30} height={30} alt="svg left" className="flex-shrink-0"/>
              <p className="mt-2 text-base text-gray-500" dangerouslySetInnerHTML={{ __html: '“今までずっと不思議に思っていたことが<br />解決していきます”' }} />
              <Image src="/images/svg-right-blue.png" width={30} height={30} alt="svg right" className="flex-shrink-0"/>
            </div>
          </div>
          <div className="flex flex-col items-center max-w-base">
            <div className="text-2xl font-funnelDisplay font-bold mb-4">日本語に精通するベン先生の</div>
            <div className="flex justify-center items-center border border-[#d9d9d9] bg-[#f3f3f3] z-10" style={{ width: '360px', height: '220px', borderRadius: '50%' }}>
              <Image
                src="/images/Ben-high.png"
                alt="Ben"
                width={260}
                height={260}
                className="h-auto"
              />
            </div>
            <div className="text-center mt-4">
              <p className="text-4xl font-funnelDisplay px-5 font-bold">
                英語
                <a className="font-funnelDisplay text-[#467580]">BEN</a>
                <span className="font-funnelDisplay">KYO</span>会
              </p>
              <span className="text-base border-b-2 border-blue-500 font-funnelDisplay">ベン先生がいなくては、不ベンです！</span>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center mt-[-30px] max-w-sm">
            <div className="flex items-center max-w-sm">
              <Image src="/images/svg-left-blue.png" width={30} height={30} alt="svg left" className="flex-shrink-0"/>
              <p className="mt-2 text-base text-gray-500" dangerouslySetInnerHTML={{ __html: '“想像もしなかったような英語と<br/>日本語の違いを知ることができました”' }} />
              <Image src="/images/svg-right-blue.png" width={30} height={30} alt="svg Right" className="flex-shrink-0"/>
            </div>
            <div className="text-2xl font-bold rounded-r-2xl mr-3 bg-[#f3f3f3] text-gray-600 w-130">
              <p className="font-notoSansJP text-lg font-bold my-6 ml-5" dangerouslySetInnerHTML={{ __html: '英文法から発音、ネイティブ同士の会話<br/>分析まで。全コース14週間・全28時間、<br/>1回2時間のレッスンが1回$35で受けられます' }} />
            </div>
            <div className="flex items-center max-w-sm">
              <Image src="/images/svg-left-blue.png" width={30} height={30} alt="svg left" className="flex-shrink-0"/>
              <p className="mt-2 text-base text-gray-500" dangerouslySetInnerHTML={{ __html: '“ベン<br/>かわいい”' }} />
              <Image src="/images/svg-right-blue.png" width={30} height={30} alt="svg right" className="flex-shrink-0"/>
            </div>
          </div>
        </div>
      </main>
      <Footer bgColor="#134F5C" />
      <div className='mt-[1px]'>
        <ColorHeader />
        <BenkyoPage />
      </div>
    </section>
  );
}
