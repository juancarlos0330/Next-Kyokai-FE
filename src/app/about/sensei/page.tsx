'use client';
import ColorFooter from "@/app/components/ColorFooter";
import ColorHeader from "@/app/components/ColorHeader";
import ReturnToTopButton from "@/app/components/ReturnToTopButton";
import { glances, questionsSensei } from "@/app/utils/faqData";
import Image from "next/image";
import { useState } from "react";
import FaqPage from "../faq/page";

export default function SenseiPage () {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const customColors = [
    { color: "#A2C4C9", percent: 15 },
    { color: "#76A5AF", percent: 20 },
    { color: "#45818E", percent: 25 },
    { color: "#134F5C", percent: 40 },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [showMore, setShowMore] = useState(false);
  
  return (
    <>
      <section>
        <div id="sensei" className="max-w-[1600px] mx-auto header-content flex justify-around items-center py-10">
          <div className="flex flex-col justify-center items-center">
            <hr className="w-[460px] border-t-2 border-gray-400 mt-5" />
            <h1 className="text-[90px] text-center font-bold">
              About Ben-Sensei
            </h1>
            <p className="text-4xl font-zenKurenaido mt-[-25] mb-5 text-center">
              ベン先生ってだーれ？
            </p>
            <hr className="w-[460px] border-t-2 border-gray-400 my-5" />
          </div>
          <div className="flex justify-between items-center">
          </div>
        </div>
        <main className="flex flex-col items-center justify-center px-10">
          <div className="flex flex-col justify-center items-center mb-10">
            <div className="font-outfit text-2xl w-[80%]">
              <p className="indent-15 font-bold">Ben-sensei holds a master’s degree in Applied Linguistics from Columbia University and teaches in the TESOL program at New York University. Before that, he served as head of the English Language Department at the Japan Society in Manhattan. His teaching focuses not just on grammar and pronunciation, but also the real communication patterns and cultural subtleties that shape how native speakers talk.</p>
              {showMore && (
                <>
                  <p className="indent-15 font-bold">
                    Originally trained as a linguist, Ben worked for many years as a professional translator and interpreter, including projects for Japan’s Ministry of Foreign Affairs and appearances on Japanese TV. He even won a national stand-up comedy contest in New York, which probably explains his reputation for informative classes that are surprisingly humorous.
                  </p>
                  <p className="indent-15 font-bold">
                    With years of experience supporting Japanese learners of English, Ben takes pride in creating a relaxed, supportive environment where students can develop their confidence and abilities one step at a time. In Ben’s own words, “If you find a better English teacher than me, please don’t tell anyone. I will pay you.”
                  </p>
                  <p className="indent-15 font-bold">
                    For more information about Ben-sensei, please check out the questions below!
                  </p>
                  <div className="flex justify-center my-10">
                    <hr className="w-[460px] border-t-2 border-gray-400" />
                  </div>
                  <p className="indent-15">
                    ベン先生はコロンビア大学で応用言語学の修士号を取得しており、現在ニューヨーク大学のTESOLプログラムで講師を務めています。それ以前は、マンハッタンのジャパン・ソサエティで英語部門の責任者を務めていました。ベン先生の授業は、文法や発音の基本だけでなく、ネイティブスピーカーが実際に使うコミュニケーションパターンや文化的なニュアンスにも焦点を当てています。
                  </p>
                  <p className="indent-15">
                    もともとは言語学者として訓練を受けたベン先生は、長年にわたりプロの翻訳者・通訳として活躍し、日本の外務省をはじめとするクライアント向けのプロジェクトや、日本のテレビ番組にも出演してきました。さらに、ニューヨークで開催された全国規模のスタンダップ・コメディコンテストで優勝した経験があり、これがベン先生の「情報豊かで驚くほどユーモアのある授業」という評判の一因かもしれません。
                  </p>
                  <p className="indent-15">
                    日本人の英語学習者をサポートしてきた経験を活かし、ベン先生は学生が自信と能力を一歩ずつ高めていける、リラックスしたサポートのある環境づくりを大切にしています。ベン先生の言葉を借りれば、「僕よりいい英語の先生を見つけたら…どうか誰にも言わないでください。謝礼を払いますので。」
                  </p>
                  <p className="indent-15">
                    ベン先生についてさらに詳しく知りたい方は、下記の質問をご覧ください！
                  </p>
                </>
              )}

              <div className="flex justify-center items-center self-center mt-3 text-base">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-[#45818E] underline cursor-pointer"
                >
                  {showMore ? 'Show less' : 'Show more...'}
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-[80%] gap-10">
            {questionsSensei.map((question, index) => (
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
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'grid-rows-[1fr] p-4' : 'grid-rows-[0fr] p-0'
                  } bg-white overflow-hidden`}
                >
                  <div className="flex flex-col overflow-hidden gap-4">
                    <p className="text-gray-600 font-notoSerifGeorgian text-xl px-5" dangerouslySetInnerHTML={{ __html: question.answerEn }} />
                    <p className="text-gray-600 font-kleeOne text-lg px-10" dangerouslySetInnerHTML={{ __html: question.answerJp }} />
                    <hr className="w-[460px] border-t-2 self-center border-gray-500 mt-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="profile">
            <div className="profile flex flex-col justify-center items-center p-5">
              <Image src="/images/divider.png" alt="divider" width={300} height={300} className="py-10" />
              <hr className="w-[460px] border-t-2 border-gray-400 my-5" />
              <h1 className="text-[90px] text-center font-bold">
                Ben-Sensei at a Glance
              </h1>
              <p className="text-4xl font-zenKurenaido mt-[-25] mb-12 text-center">
                ベン先生のプロフィール
              </p>
              <hr className="w-[460px] border-t-2 border-gray-400 mb-5" />
            </div>
            {glances.map((glance, index) => (
              <div className="grid grid-cols-2 gap-2 p-1" key={index}>
                {(["quote", "answer"] as const).map((type) => (
                  <div key={type} className="w-[380px] h-auto bg-gray-200 flex flex-col justify-center items-center p-5">
                    {glance[type]?.en && (
                      <p
                        className="text-center text-4xl font-bold"
                        dangerouslySetInnerHTML={{ __html: glance[type].en }}
                      />
                    )}
                    {glance[type]?.jp && (
                      <p
                        className="text-center text-xl font-zenKurenaido"
                        dangerouslySetInnerHTML={{ __html: glance[type].jp }}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <ReturnToTopButton />
        </main>
        <section className="z-0" style={{ height: "10vh"}}>
        </section>
        <ColorFooter footerColors={customColors} margin />
      </section>
      <div className="pt-[1px]">
        <ColorHeader headerColors={customColors} />
        <FaqPage />
      </div>
    </>
  );
};
