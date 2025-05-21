import ColorFooter from "../components/ColorFooter";

export default function ThanksPage () {
  const customColors = [
    { color: "#B7B7B7", percent: 15 },
    { color: "#999999", percent: 20 },
    { color: "#666666", percent: 25 },
    { color: "#434343", percent: 40 },
  ];
  return (
    <section className="text-center">
      <main className="@container grid min-h-[65vh] max-h-auto m-5">
        <div className="flex flex-col items-center justify-center">
          <p className="self-center text-5xl font-bold mb-5">Thank you for reaching out! We’ll get back to you as soon as possible.</p>
          <p className="font-kleeOne self-center text-2xl">お問い合わせいただきありがとうございます。できるだけ早くご連絡いたします。</p>
        </div>
        <ColorFooter footerColors={customColors} fixed />
      </main>
    </section>
  )
}