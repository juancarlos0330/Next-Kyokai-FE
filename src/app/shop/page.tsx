import Circle from "../components/Circle";
import ColorFooter from "../components/ColorFooter";
import ColorHeader from "../components/ColorHeader";
import DetailPage from "./detail/page";

export default function ShopPage() {
  const customColors = [
    { color: "#9FC5E8", percent: 15 },
    { color: "#6FA8DC", percent: 20 },
    { color: "#3D85C6", percent: 25 },
    { color: "#0B5394", percent: 40 },
  ]
  return (
    <section>
      <main className="@container grid min-h-[65vh] max-h-auto m-5">
        <div className="flex mx-auto items-center max-w-7xl justify-center gap-10 columns-2xl">
          <div>
            <Circle color="#0B5394" en="Shop" jp="ショップ" />
          </div>
          <div className="flex items-center">
            <p className="text-2xl @4xl:text-3xl @3xl:text-lg font-outfit text-left font-bold text-gray-600">
              See below for a list of all materials used in BENKYO会 classes!<br/>
              <br/>
              At BENKYO会, students are not required to purchase any books. Full classes can be taken without textbooks, although workbooks are recommended for completing homework assignments.
            </p>
            <p className="text-sm @4xl:text-[26px] @3xl:text-lg font-kleeOne text-left text-gray-600">
              BENKYO会のクラスで使用する教材は以下をご覧ください！<br/>
              <br/>
              BENKYO会では、生徒の皆さんに特定の本を購入していただく必要はありません。教科書なしでもクラスを受講できますが、宿題を進めるためにワークブックの使用を おすすめしています。
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