import Circle from "../components/Circle";
import ColorFooter from "../components/ColorFooter";
import ColorHeader from "../components/ColorHeader";
import ClassesRegisterPage from "./classes/page";

export default function RegisterPage() {
  const customColors = [
    { color: "#EA9999", percent: 15 },
    { color: "#E06666", percent: 20 },
    { color: "#CC0000", percent: 25 },
    { color: "#990000", percent: 40 },
  ]
  return (
    <section>
      <main className="@container grid min-h-[65vh] max-h-auto m-5">
        <div className="flex mx-auto items-center max-w-7xl justify-center gap-10 columns-2xl">
          <div>
            <Circle color="#990000" en="Register For Classes" jp="クラスに申し込む" fontSize="sm" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl @4xl:text-4xl @3xl:text-lg font-outfit text-center font-bold text-gray-600">
              Register for classes today!<br/>
              <br/>
              Follow the instructions below to select the class(es) of your choice and preferred payment option.
            </p>
            <br/>
            <br/>
            <p className="text-sm @4xl:text-[26px] @3xl:text-lg font-kleeOne text-center text-gray-600">
              今すぐクラスに登録！<br/>
              <br/>
              下の手順に従って、<br/>
              希望のクラスと支払い方法を選択してください
            </p>
          </div>
        </div>
      </main>
      <ColorFooter footerColors={customColors} />
      <div className="pt-[1px]">
        <ColorHeader headerColors={customColors} />
        <ClassesRegisterPage />
      </div>
    </section>
  );
}