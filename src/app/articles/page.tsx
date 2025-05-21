'use client';
import Circle from "../components/Circle";
import ColorFooter from "../components/ColorFooter";
import ColorHeader from "../components/ColorHeader";
import DetailPage from "./detail/page";

export default function ArticlePage() {
  const customColors = [
    { color: "#F9CB9C", percent: 15 },
    { color: "#F6B26B", percent: 20 },
    { color: "#E69138", percent: 25 },
    { color: "#B45F06", percent: 40 },
  ];

    return (
      <section>
        <main className="@container grid min-h-[65vh] max-h-auto m-5">
          <div className="flex mx-auto items-center max-w-7xl justify-center gap-10 columns-2xl">
            <div>
              <Circle color="#B45F06" en="Articles" jp="記事" />
            </div>
            <div className="flex items-center">
              <p className="text-2xl @4xl:text-4xl @3xl:text-lg font-outfit text-left font-bold text-gray-600">
                Browse below to see our collection of articles about various language-related topics.<br/>
                <br/>
                Have a question for Ben-sensei about English or language learning?
                Feel free to ask it <a href="/question" className="text-[#B45F06] underline">here!</a>
              </p>
              <p className="text-sm @4xl:text-[26px] @3xl:text-lg font-kleeOne text-left text-gray-600">
                下にスクロールして、さまざまな言語関連の話題についての記事コレクションをご覧ください。<br/>
                <br/>
                英語や語学学習について、ベン先生に聞きたいことがありますか？
                ぜひ<a href="/question" className="underline text-[#B45F06]">こちらから</a>質問してください！
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