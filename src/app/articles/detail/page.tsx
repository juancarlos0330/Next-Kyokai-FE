import ColorFooter from "@/app/components/ColorFooter";
import Footer from "@/app/components/Footer";
import PancakeCard from "@/app/components/PancakeCard";
import ReturnToTopButton from "@/app/components/ReturnToTopButton";
import { articleMenuItems } from "@/app/utils/articleMenuItem";
import { PancakeData } from "@/app/utils/articlePancakeData";

export default function DetailPage() {
  const customColors = [
    { color: "#F9CB9C", percent: 15 },
    { color: "#F6B26B", percent: 20 },
    { color: "#E69138", percent: 25 },
    { color: "#B45F06", percent: 40 },
  ]

  return(
    <section>
      <main className="max-w-[1600px] mx-auto">
        <div className="header-content flex justify-around items-center p-10">
          <div>
            <div className="flex flex-col justify-center items-center">
              <hr className="w-[460px] border-t-2 border-gray-400 mt-5" />
              <h1 className="text-[90px] text-center font-bold">
                Article archive
              </h1>
              <p className="text-4xl font-zenKurenaido mt-[-25] mb-5 text-center">
                記事アーカイブ
              </p>
              <hr className="w-[460px] border-t-2 border-gray-400 my-5" />
            </div>
            <div className="flex flex-col justify-start gap-5 p-5">
              <p className="text-[34px] font-bold">1. Articles about English /<span className="font-zenKurenaido font-normal text-[28px]">英語に関する記事</span></p>
              <p className="text-[34px] font-bold">2. Articles about Japanese /<span className="font-zenKurenaido font-normal text-[28px]">日本語に関する記事</span></p>
              <p className="text-[34px] font-bold">3. Articles by topic /<span className="font-zenKurenaido font-normal text-[28px]">話題別の記事</span></p>
            </div>
            <hr className="max-w-7xl w-[460px] border-t-2 border-gray-400 my-5 ml-10" />
            <hr className="max-w-7xl w-[460px] border-t-2 border-gray-400 ml-10" />
          </div>
          <div className="flex flex-col gap-10 self-center">
            <div className="grid grid-cols-3 gap-20">
              {articleMenuItems.map((item, index) => (
                <a
                  key={index}
                  className="flex flex-col items-center text-[#783F04]"
                >
                  <p className="text-4xl -mt-6 mb-5 font-bold text-center">{item.en}</p>
                  <p className="text-2xl font-zenKurenaido -mt-6 mb-5 text-center">{item.jp}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center py-10">
          <div className="grid grid-cols-2 gap-10 w-[80%]">
            {PancakeData.map((_, i) => (
              <PancakeCard
                title={_.title}
                tags={_.tags}
                content={_.content}
                index={i}
                highlighted={i === 2 || i === 3}
              />
            ))}
          </div>
        </div>
      </main>
      <ReturnToTopButton />
      <ColorFooter footerColors={customColors} margin />
      <div>
        <Footer bgColor="#134F5C" />
      </div>
    </section>
  )
}