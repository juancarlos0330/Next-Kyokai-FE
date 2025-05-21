import Circle from "../components/Circle";
import ColorFooter from "../components/ColorFooter";
import ColorHeader from "../components/ColorHeader";
import SenseiQuestionPage from "./sensei/page";

export default function QuestionPage (){
  const customColors = [
    { color: "#B7B7B7", percent: 15 },
    { color: "#999999", percent: 20 },
    { color: "#666666", percent: 25 },
    { color: "#434343", percent: 40 },
  ]
  return (
    <section>
      <main className="@container min-h-[65vh] grid mx-h-auto m-5">
        <div className="flex mx-auto items-center max-w-7xl justify-center gap-10 columns-2xl">
          <div>
            <Circle color="#434343" en="Ask Ben-sensei a Question!" fontSize="sm" jp="ベン先生に聞いてみよう！"/>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-2xl @4xl:text-3xl @3xl:text-lg font-outfit text-left font-bold text-gray-600">
              Have a question about English or language learning that you’d like to ask Ben-sensei? Ask below! It might become <a href="/articles" className="underline text-blue-400">an article</a>!
              <br/><br/>
              If you need to contact BENKYO会 with a practical question about course enrollment or registration, please visit the <a href="/contact" className="underline text-blue-400">Contact Us</a> page.
            </p>
            <p className="text-sm @4xl:text-2xl @3xl:text-lg font-kleeOne text-left text-gray-600">
              英語や言語学習についてベン先生に聞きたいことがありますか？下に質問を
              どうぞ！<a href="/articles" className="underline text-blue-400">記事</a>になるかもしれませんよ〜<br/>
              <br/>
              <br/>
              コースの登録や申し込みに関する質問がある場合は、<a href="/contact" className="underline text-blue-400">お問い合わせページ</a>を
              ご覧ください
            </p>
          </div>
        </div>
      </main>
      <ColorFooter footerColors={customColors}/>
      <div className="mt-[1px]">
        <ColorHeader headerColors={customColors} />
        <SenseiQuestionPage />
      </div>
    </section>
  )
}