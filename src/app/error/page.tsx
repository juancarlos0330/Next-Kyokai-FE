import ColorFooter from "../components/ColorFooter";

export default function ErrorPage () {
  const customFooterColor = [
    { color: "#A2C4C9", percent: 15 },
    { color: "#76A5AF", percent: 20 },
    { color: "#45818E", percent: 25 },
    { color: "#134F5C", percent: 40 },
  ];
  return (
    <section className="text-center">
      <main className="@container grid min-h-[65vh] max-h-auto m-5">
        <div className="flex flex-col items-center justify-center">
          <p className="self-center text-2xl font-bold">Sorry, there was a network problem. Please try again in a moment.</p>
          <p className="font-kleeOne self-center text-lg">申し訳ありません。ネットワークの問題が発生しました。少し時間をおいてから、もう一度お試しください。</p>
        </div>
        <ColorFooter footerColors={customFooterColor} fixed />
      </main>
    </section>
  )
}