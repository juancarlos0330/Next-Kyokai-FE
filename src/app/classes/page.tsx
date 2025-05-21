import Circle from "../components/Circle";
import ColorFooter from "../components/ColorFooter";
import ColorHeader from "../components/ColorHeader";
import CatalogPage from "./catalog/page";

export default function ClassPage() {
  const customFooterColor = [
    { color: "#D5A6BD", percent: 24 },
    { color: "#C27BA0", percent: 34 },
    { color: "#A64D79", percent: 40 },
    { color: "#741B47", percent: 58 },
  ]

  return (
    <section>
      <main className="@container grid min-h-[65vh] max-h-auto m-5">
        <div className="flex mx-auto items-center max-w-7xl justify-center gap-10 columns-2xl">
          <div>
            <Circle color="#741B47" en="Classes" jp="クラス案内" />
          </div>
          <div className="flex items-center gap-5">
            <p className="text-2xl @4xl:text-3xl @3xl:text-lg font-outfit text-left font-bold text-gray-600">
              All BENKYO会 classes meet once a week for 14 weeks. One class is 28 hours of instruction. Please see our catalogue below for class descriptions and meeting times!<br/>
              <br/>
              For questions about classes, feel free to <a href="/contact" className="text-[#741B47] underline">contact us</a>.
            </p>
            <p className="text-sm @4xl:text-2xl @3xl:text-lg font-kleeOne text-left text-gray-600">
              BENKYO会のクラスは、すべて
              週1回・全14週間で開講されます。
              1クラスあたりの授業時間は合計
              28時間です。クラスの詳細や開催時間は、以下のカタログでご覧ください。<br/>
              <br/>
              <br/>
              クラスに関するご質問があれば、お気軽に<a href="/contact" className="text-[#741B47] underline">お問い合わせ</a>ください。
            </p>
          </div>
        </div>
      </main>
      <ColorFooter footerColors={customFooterColor} />
      <div className="mt-[1px]">
        <ColorHeader headerColors={customFooterColor} />
        <CatalogPage />
      </div>
    </section>
  );
}