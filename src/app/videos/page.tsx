import Circle from "../components/Circle";
import ColorFooter from "../components/ColorFooter";
import ColorHeader from "../components/ColorHeader";
import DetailPage from "./detail/page";

export default function VideoPage() {
  const customColors = [
    { color: "#BBAFD9", percent: 15 },
    { color: "#8E7CC3", percent: 20 },
    { color: "#674EA7", percent: 25 },
    { color: "#351C75", percent: 40 },
  ]

  return (
    <section>
      <main className="@container grid min-h-[65vh] max-h-auto m-5">
        <div className="flex mx-auto items-center max-w-7xl justify-center gap-10 columns-2xl">
          <div>
            <Circle color="#351C75" en="Videos" jp="動画" />
          </div>
          <div className="flex items-center">
            <p className="text-2xl @4xl:text-4xl @3xl:text-lg font-outfit text-left font-bold text-gray-600">
              Browse below to see our collection of videos about various language-related topics.<br/>
              <br/>
              Have a question for Ben-sensei about English, Japanese, or language learning? Feel free to ask it <a href="/contact" className="text-[#674EA7] underline">here!</a>
            </p>
            <p className="text-sm @4xl:text-[26px] @3xl:text-lg font-kleeOne text-left text-gray-600">
              以下の動画コレクションでは、さまざまな言語に関するトピックを取り上げています。<br/>
              <br/>
              英語や日本語、語学学習についてベン先生に質問がありますか？お気軽に<a href="/contact" className="underline text-[#674EA7]">こちら</a>からお尋ねください！
            </p>
          </div>
        </div>
      </main>
      <ColorFooter footerColors={customColors} />
      <div className="mt-[1px]">
        <ColorHeader headerColors={customColors} />
        <DetailPage />
      </div>
    </section>
  );
}