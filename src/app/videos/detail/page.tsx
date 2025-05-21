import ColorFooter from "@/app/components/ColorFooter";
import Footer from "@/app/components/Footer";

export default function DetailPage () {
  const customColors = [
    { color: "#BBAFD9", percent: 15 },
    { color: "#8E7CC3", percent: 20 },
    { color: "#674EA7", percent: 25 },
    { color: "#351C75", percent: 40 },
  ]

  return (
    <section>
      <main className="max-w-[1600px] my-12 mx-auto header-content flex flex-col justify-around items-center gap-10">
        <div className="flex flex-col justify-center items-center">
          <hr className="w-[460px] border-t-2 border-gray-400" />
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-[110px] font-bold">
              Videos
            </h1>
            <p className="text-4xl font-zenKurenaido pb-10">
              動画
            </p>
          </div>
          <hr className="w-[460px] border-t-2 border-gray-400" />
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-5xl font-bold">under Construction</p>
          <p className="font-zenKurenaido text-[28px]">工事中</p>
        </div>
      </main>
      <ColorFooter footerColors={customColors} margin />
      <div className="mx-auto">
        <Footer bgColor="#134F5C" />
      </div>
    </section>
  )
}