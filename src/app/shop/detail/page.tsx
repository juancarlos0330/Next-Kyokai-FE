import BookCard from "@/app/components/BookCard";
import ColorFooter from "@/app/components/ColorFooter";
import Footer from "@/app/components/Footer";
import ReturnToTopButton from "@/app/components/ReturnToTopButton";
import { grammarTextbooks, grammarWorkbooks, grammarWorks, guides, pronunciationBooks, recommendedBooks, ShopMenuData } from "@/app/utils/shopData";

export default function DetailPage() {
  const customColors = [
    { color: "#9FC5E8", percent: 15 },
    { color: "#6FA8DC", percent: 20 },
    { color: "#3D85C6", percent: 25 },
    { color: "#0B5394", percent: 40 },
  ]
  return (
    <section>
      <main className="flex flex-col max-w-[1600px] mx-auto">
        <div className="header-content flex justify-center py-10 gap-15">
          <div className="flex flex-col self-start">
            <hr className="w-[460px] border-t-2 border-gray-400" />
            <h1 className="text-[110px] text-center font-bold">
              Shop
            </h1>
            <p className="text-[40px] font-zenKurenaido -mt-6 mb-5 text-center">
              ショップ
            </p>
            <hr className="w-[460px] border-t-2 border-gray-400 my-5" />
          </div>
          <div className="flex flex-col gap-15 self-center">
            <div className="grid grid-cols-3 gap-y-10 pt-20">
              {ShopMenuData.map((menu, index) => (
                <a
                  href={menu.path}
                  key={index}
                  className="flex flex-col items-center text-[#0B5394]"
                >
                  <p className="text-4xl -mt-6 mb-5 font-bold text-center">{menu.en}</p>
                  <p className="text-2xl font-zenKurenaido -mt-6 mb-5 text-center">{menu.jp}</p>
                </a>
              ))}
            </div>
            {/* Guides Section */}
            <div className="grid grid-cols-2 gap-10 text-[#0B5394]">
              {guides.map((guide, index) => (
                <a
                  href={guide.path}
                  key={index}
                  className={`flex flex-col items-center ${index === 0 ? 'text-[#0B5394]' : 'text-[#7F6000]'}`}
                >
                  <p className="text-4xl -mt-6 mb-5 font-bold text-center">{guide.en}</p>
                  <p className="text-2xl font-zenKurenaido -mt-6 mb-5 text-center">{guide.jp}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="main-content flex flex-col gap-10">
          <h1 className="text-[48px] text-center font-bold">If you purchase through the links below, we receive a small commission, <br/>but please purchase the materials through any means that you like.</h1>
          <p className="text-2xl text-center font-zenKurenaido mb-10">以下のリンクからご購入いただくと、ベン先生に紹介手数料が入り、ちょっとリッチになります。<br/>ただし、ご都合のよい方法で自由に教材をご購入ください。</p>
          {/* Pronunciation Textbooks Section */}
          <div id="pronunciation" className="flex flex-col items-center">
            <h2 className="flex justify-center items-center font-bold text-6xl bg-[#CFE2F3]" style={{ width: '680px', height: '70px', borderRadius: '50%' }}>
              Pronunciation Textbooks
            </h2>
            <p className="font-kleeOne text-2xl">発音教科書</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-20">
              {pronunciationBooks.map((bookInfo, index) => (
                <BookCard
                  key={index}
                  level={bookInfo.level}
                  subtitle={bookInfo.subtitle}
                  title={bookInfo.title}
                  imageUrl={bookInfo.imageUrl}
                  price={bookInfo.price}
                  path={bookInfo.path}
                />
              ))}
            </div>
          </div>
          <hr className="w-[460px] self-center border-t-2 border-gray-200"/>
          {/* Grammar Textbooks Section */}
          <div id="grammartext" className="flex flex-col items-center mt-10">
            <h2 className="flex justify-center items-center font-bold text-6xl bg-[#CFE2F3]" style={{ width: '680px', height: '70px', borderRadius: '50%' }}>
              Grammar Textbooks
            </h2>
            <p className="font-kleeOne text-2xl">文法教科書</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 gap-20">
              {grammarTextbooks.map((bookInfo, index) => (
                <BookCard
                  key={index}
                  subtitle={bookInfo.subtitle}
                  title={bookInfo.title}
                  imageUrl={bookInfo.imageUrl}
                  price={bookInfo.price}
                  path={bookInfo.path}
                />
              ))}
            </div>
          </div>
          <hr className="w-[460px] self-center border-t-2 border-gray-200"/>
          {/* Grammar Workbooks Section */}
          <div id="grammarwork" className="flex flex-col items-center mt-10">
            <h2 className="flex justify-center items-center font-bold text-6xl bg-[#CFE2F3]" style={{ width: '680px', height: '70px', borderRadius: '50%' }}>
              Grammar Workbooks
            </h2>
            <p className="font-kleeOne text-2xl">文法ワークブック</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 gap-20">
              {grammarWorkbooks.map((bookInfo, index) => (
                <BookCard
                  key={index}
                  subtitle={bookInfo.subtitle}
                  title={bookInfo.title}
                  imageUrl={bookInfo.imageUrl}
                  price={bookInfo.price}
                  path={bookInfo.path}
                />
              ))}
            </div>
          </div>
          <hr className="w-[460px] self-center border-t-2 border-gray-200"/>
          <div id="howdoeswork" className="flex flex-col items-center mt-10">
            <h2 className="flex justify-center items-center font-bold text-6xl bg-[#CFE2F3]" style={{ width: '680px', height: '70px', borderRadius: '50%' }}>
              How does English work?
            </h2>
            <p className="font-kleeOne text-2xl">教育英文法の教科書</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 gap-20">
              {grammarWorks.map((bookInfo, index) => (
                <BookCard
                  key={index}
                  title={bookInfo.title}
                  imageUrl={bookInfo.imageUrl}
                  price={bookInfo.price}
                  path={bookInfo.path}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <p className="font-outfit text-[26px] w-3xl text-left">
            <span className="font-bold text-[#741B47]">The Grammar Book</span> explanation text will go here, several rows can fit quite well, in a few long and elaborate phrases if needed. We can fit more text , if needed.
            </p>
          </div>
          <hr className="w-[460px] self-center border-t-2 border-gray-200"/>
          <div id="recommendedbooks" className="flex flex-col items-center mt-10">
            <h2 className="flex justify-center items-center font-bold text-6xl bg-[#FFF2CC]" style={{ width: '680px', height: '70px', borderRadius: '50%' }}>
              Recommended Books
            </h2>
            <p className="font-kleeOne text-2xl">文法教科書</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 gap-20">
              {recommendedBooks.map((bookInfo, index) => (
                <BookCard
                  key={index}
                  title={bookInfo.title}
                  imageUrl={bookInfo.imageUrl}
                  price={bookInfo.price}
                  path={bookInfo.path}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <p className="font-outfit text-[26px] w-3xl text-left">
            <span className="font-bold text-[#741B47]">English Vocabulary Elements</span> explanation text will go here, several rows can fit quite well, in a few long and elaborate phrases if needed. We can fit more text below, if needed.
            </p>
          </div>
          <hr className="w-[460px] self-center border-t-2 border-gray-200"/>
          <div className="flex flex-col items-center pb-20">
            <p className="font-outfit text-left text-[26px]">As an Amazon Associate, BENKYO会 earns from qualifying purchases.<br/>
            <span className="font-kleeOne text-left text-2xl">Amazonのアソシエイトとして、BENKYO会は適格販売により収入を得ています。</span>
            </p>
          </div>
        </div>
      </main>
      <ReturnToTopButton />
      <ColorFooter footerColors={customColors} margin />
      <div className="mt-2">
        <Footer bgColor="#134F5C" />
      </div>
    </section>
  )
}