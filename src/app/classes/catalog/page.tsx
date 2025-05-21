'use client';

import ColorFooter from "@/app/components/ColorFooter";
import Footer from "@/app/components/Footer";
import GradientButton from "@/app/components/GradientButton";
import ReturnToTopButton from "@/app/components/ReturnToTopButton";
import SchedulerModal from "@/app/components/SchedulerModal";
import { scheduleTable } from "@/app/components/ScheduleTable";
import { catalogs, fallSchedule, guides, summerSchedule } from "@/app/utils/classData";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CatalogPage () {
  const router = useRouter();
  const [modalUrl, setModalUrl] = useState("");
  const [modalType, setModalType] = useState<"free" | "pay" | "">("");
  const handleScheduleClick = (rule: "pay" | "free") => {
    const url =
      rule === "pay"
        ? process.env.NEXT_PUBLIC_ACUITY_PREMIUM_CLASS_URL
        : process.env.NEXT_PUBLIC_ACUITY_FREE_CLASS_URL;
  
    if (!url || url === "#") return;
    setModalUrl(url);
    setModalType(rule);
  };
  const customColors = [
    { color: "#D5A6BD", percent: 24 },
    { color: "#C27BA0", percent: 34 },
    { color: "#A64D79", percent: 40 },
    { color: "#741B47", percent: 58 },
  ]

  const closeModal = () => {
    setModalUrl("");
    setModalType("");
  };

  return (
    <section>
      <main className="flex flex-col max-w-[1600px] mx-auto">
        <div className="header-content flex justify-center py-10 gap-15">
          <div className="flex flex-col self-start">
            <hr className="w-[460px] border-t-2 border-gray-400" />
            <h1 className="text-[110px] text-center font-bold">
              Class Catalog
            </h1>
            <p className="text-[40px] font-zenKurenaido -mt-6 mb-5 text-center">
              クラス案内
            </p>
            <hr className="w-[460px] border-t-2 border-gray-400 my-5" />
          </div>
          <div className="flex flex-col gap-15 self-center">
            <div className="grid grid-cols-3 gap-y-10 pt-20">
              {catalogs.map((catalog, index) => (
                <a
                  href={catalog.path}
                  key={index}
                  className="flex flex-col items-center text-[#741B47]"
                >
                  <p className="text-4xl -mt-6 mb-5 font-bold text-center">{catalog.en}</p>
                  <p className="text-2xl font-zenKurenaido -mt-6 mb-5 text-center">{catalog.jp}</p>
                </a>
              ))}
            </div>
            {/* Guides Section */}
            <div className="grid grid-cols-2 gap-10 text-[#351C75]">
              {guides.map((guide, index) => (
                <a
                  href={guide.path}
                  key={index}
                  className="flex flex-col items-center"
                >
                  <p className="text-4xl -mt-6 mb-5 font-bold text-center">{guide.en}</p>
                  <p className="text-2xl font-zenKurenaido -mt-6 mb-5 text-center">{guide.jp}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="flex flex-col px-20 gap-10">
            <div className="flex justify-around items-center">
              <hr className="w-[450px] border-t-2 border-gray-400" />
              <div className="flex flex-col items-center mt-10">
                <p className="flex justify-center items-center text-[42px] bg-[#4C1130] text-white" style={{ width: '320px', height: '70px', borderRadius: '50%' }}>
                  Class Calendar
                </p>
                <p className="font-kleeOne text-2xl">クラス時間表</p>
              </div>
              <hr className="w-[450px] border-t-2 border-gray-400" />
            </div>
            {/* <div className="flex justify-between gap-20 px-15">
              <div>
                <div className="relative w-[386px] h-[386px]">
                  <Image
                    className="object-cover rounded-md"
                    src="/images/Vector.png"
                    width={400}
                    height={400}
                    alt={"vector image"}
                    />
                  <p className="absolute inset-0 flex items-center justify-center text-white text-center font-bold p-4 text-[40px] leading-snug">
                    SPECIAL CLASSES FOR<br />JET PROGRAM<br />PARTICIPANTS!
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="font-outfit text-[28px]">
                  Concentrated summer classes are now available for outgoing and 
                  current JET Program participants! For more information on the teacher training courses
                  <a href="#english-work" className="text-[#741B47] font-bold"> How Does English Work? </a>and <a href="#teach-english" className="text-[#741B47] font-bold">How Do You Teach English?</a>,
                  please see the descriptions below. Each class meets twice a week for 7 weeks; register for both to receive a 10% discount!
                </p>
                <video className="rounded-2xl mt-10" controls muted loop style={{ width: '840px', height: '400px' }}>
                  <source src="/videos/1.mp4" />
                </video>
              </div>
            </div> */}
            <div className="p-10 mb-20">
              <div className="schedule-header flex gap-10">
                <div className="font-bold text-[80px] text-[#4C1130]">FALL 2025</div>
                <div className="flex flex-col justify-center">
                  <div className="text-4xl font-bold">Monday, September 1st to Monday, December 1st</div>
                  <div className="text-[28px] font-zenKurenaido">日本時間：９月１日（月）〜１２月１日（月）</div>
                </div>
              </div>
              <div className="overflow-x-auto mb-10">
                {scheduleTable(fallSchedule)}
              </div>
              <div>
                <p className="font-outfit text-[26px]"><span className="text-[#741B47]">NOTE:</span> Due to Daylight Saving Time, the Japan-US time difference is 14 hours from Sunday, November 2nd, 2025, to mid-March 2026. During this period, Classes that normally meet 9-11pm or 8-10am Japan time will switch to 10pm-12am and 9-11am Japan time.</p>
                <br/>
                <p className="font-zenKurenaido text-2xl"><span className="text-[#741B47]">お知らせ:</span> アメリカの夏時間 (Daylight Saving Time) の影響により、2025年11月2日 (日) から2026年3月中旬まで、日米の時差は14時間となります。この期間中、通常日本時間の午後9時～11時または午前8時～10時に行われるクラスは、それぞれ午後10時～午前0時および午前9時～11時に変更されます。</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-20 px-30">
            <div id="pronunciation" className="flex flex-col justify-center gap-10">
              <div className="flex gap-10">
                <div className="flex flex-col items-center" >
                  <p className="text-6xl font-bold bg-[#EAD1DC] flex justify-center items-center" style={{ width: '480px', height: '96px', borderRadius: '50%' }}>Pronunciation</p>
                  <p className="font-kleeOne text-2xl">発音</p>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="text-3xl font-bold">1. Level One: Segmental Phonology<span className="font-zenKurenaido font-normal text-2xl">・分節音の音韻論</span></div>
                  <div className="text-3xl font-bold">2. Level Two: Suprasegmental Phonology<span className="font-zenKurenaido font-normal text-2xl">・超分節音の音韻論</span></div>
                </div>
              </div>
              <div className="flex gap-10">
                <div>
                  <p className="text-[24px] font-normal font-outfit"><span className="text-[#741B47]">Pronunciation 1</span> looks at individual speech sounds and consonant clusters. Main topics include English vowels, the two L sounds in English, liaison, and consonant clipping. <span className="underline font-bold font-bold">Strongly recommended for even advanced-level students.</span></p>
                  <br/>
                  <p className="text-[26px] font-outfit"><span className="text-[#741B47]">Pronunciation 2</span> looks at more advanced topics like intonation and rhythm. Topics include the various usages of falling-rising intonation, such as signaling turn-taking within a conversation.</p>
                </div>
                <div>
                  <p className="font-kleeOne font-normal text-xl"><span className="text-[#741B47]">発音 1 では</span>、個々の音や子音の連なりを扱います。主なトピックは、英語の母音、2種類の「L」の音、リエゾン、子音の脱落などです。<span className="underline">上級レベルの方にも強くおすすめします。</span></p>
                  <br/>
                  <br/>
                  <p className="font-kleeOne font-normal text-xl"><span className="text-[#741B47]">発音 2 では</span>、イントネーションやリズムといった、より高度な内容を扱います。例えば、会話の順番を示す際などに使われる「下がって上がるイントネーション」のさまざまな使い方について学びます。</p>
                </div>
              </div>
            </div>
            <hr className="w-[460px] self-center border-t-2 border-[#EAD1DC]"/>
            <div id="grammar" className="flex flex-col justify-center gap-10">
              <div className="flex items-center gap-10">
                <div className="flex flex-col items-center" >
                  <p className="text-6xl font-bold bg-[#EAD1DC] flex justify-center items-center" style={{ width: '480px', height: '96px', borderRadius: '50%' }}>Grammar</p>
                  <p className="font-kleeOne text-2xl">文法</p>
                </div>
                <div className="grid grid-cols-3 items-center">
                  <a className="flex flex-col items-center">
                    <p className="text-3xl font-bold">Beginner</p>
                    <p className="font-zenKurenaido font-normal text-2xl">初級</p>
                  </a>
                  <a className="flex flex-col items-center">
                    <p className="text-3xl font-bold">Intermediate</p>
                    <p className="font-zenKurenaido font-normal text-2xl">中級</p>
                  </a>
                  <a className="flex flex-col items-center text-center">
                    <p className="text-3xl font-bold">Upper Intermediate/Advanced</p>
                    <p className="font-zenKurenaido font-normal text-2xl">中上級・上級</p>
                  </a>
                </div>
              </div>
              <div className="flex gap-10">
                <div>
                  <p className="text-[24px] font-normal font-outfit">All Grammar classes use the Betty Azar textbook series. When needed, the Upper Intermediate/Advanced Grammar may use the National Geographic “Life” textbook series.</p>
                  <br/>
                  <p className="text-[24px] font-normal font-outfit">Attention is given to a thorough understanding of English grammar from a Japanese perspective. Optional homework assignments include level-appropriate reading, writing, and TV shows.</p>
                </div>
                <div>
                  <p className="font-kleeOne font-normal text-xl">全ての文法クラスでBetty Azar の教科書シリーズを使用します。必要に応じて、中上級・上級クラスではナショナルジオグラフィックの 「Life」 シリーズを併用することもあります。</p>
                  <br/>
                  <br/>
                  <p className="font-kleeOne font-normal text-xl">日本語話者の視点から英語の文法を深く理解できるよう指導します。オプショナル宿題として、レベルに合った読解・作文・テレビ番組の視聴を取り入れることもできます。</p>
                </div>
              </div>
            </div>
            <hr className="w-[460px] self-center border-t-2 border-[#EAD1DC]"/>
            <div id="real_live" className="flex flex-col justify-center gap-10">
              <div className="flex gap-10">
                <div className="flex flex-col items-center" >
                  <p className="text-6xl font-bold bg-[#EAD1DC] flex justify-center items-center" style={{ width: '480px', height: '96px', borderRadius: '50%' }}>Real-Life Writing</p>
                  <p className="font-kleeOne text-2xl">実用ライティング</p>
                </div>
              </div>
              <div className="flex gap-10">
                <div>
                  <p className="text-[24px] font-normal font-outfit">Real-life Writing explores topics related to writing in an adult’s daily life, such as text messages, emails, thank-you cards, and announcements. Specific topics include writing emails with requests, apologies, and explanations. Real-life Writing focuses on the “logic formulas” behind American<br/>rhetoric: in other words, if an American wants to write a request, what is the first thing that they write? The second? The third?</p>
                </div>
                <div>
                  <p className="font-kleeOne font-normal text-xl">実用ライティングでは、大人の日常生活で役立つ文章の書き方を学びます。スマホのメッセージやメール、お礼状、告知文などがテーマです。具体的には、依頼・謝罪・説明を含むメールの書き方を取り上げます。</p>
                  <br/>
                  <br/>
                  <p className="font-kleeOne font-normal text-xl">このクラスでは、アメリカの文章の「論理的な型」に注目します。つまり、アメリカ人がお願いごとを書くとき、最初に何を書くのか？次に何を加えるのか？最後にどう締めくくるのか？こうした流れを学びながら、実際のコミュニケーションに役立つスキルを身につけます。</p>
                </div>
              </div>
            </div>
            <hr className="w-[460px] self-center border-t-2 border-[#EAD1DC]"/>
            <div id="communication" className="flex flex-col justify-center gap-10">
              <div className="flex gap-10">
                <div className="flex flex-col items-center" >
                  <p className="text-6xl font-bold bg-[#EAD1DC] flex justify-center items-center" style={{ width: '620px', height: '96px', borderRadius: '50%' }}>Communication Skills</p>
                  <p className="font-kleeOne text-2xl">話し方のコツ</p>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="text-3xl font-bold">1. Level One: Interactional Speech<span className="font-zenKurenaido font-normal text-2xl">・社交的な会話</span></div>
                  <div className="text-3xl font-bold">2. Level Two: Transactional Speech<span className="font-zenKurenaido font-normal text-2xl">・目的達成の会話</span></div>
                </div>
              </div>
              <div className="flex gap-10">
                <div>
                  <p className="text-[24px] font-normal font-outfit">Most textbooks focus on “simple English,” or English that can easily be understood by non-native speakers. In contrast, Communication Skills focuses on communication strategies used when two or more native English speakers are talking to one another. Specific topics from Level 1 include how to introduce yourself natively; how to start, continue, and end a conversation; and how to tell an interesting story. Specific topics from Level 2 include ordering food at different types of restaurant; offering and accepting help; and expressing your opinion.</p>
                  <br/>
                  <p className="text-[26px] font-outfit">If you’ve ever thought, “I can communicate my needs in English just fine, but I have a hard time understanding when two native speakers talk to each other,” this is the course for you!</p>
                </div>
                <div>
                  <p className="font-kleeOne font-normal text-xl">多くの教科書は「シンプルな英語」、つまり非英語話者にも簡単に理解できる英語に焦点を当てています。それに対して、「話し方のコツ」では、二人以上の英語のネイティブスピーカーが互いに話す際に使われるコミュニケーション戦略に注目します。レベル1の具体的なトピックには、ネイティブのように自己紹介をする方法、会話を始める・続ける・終わらせる方法、そして面白い話をする方法が含まれます。レベル2では、さまざまな種類のレストランでの注文方法、助けを申し出る・受け入れる方法、そして意見を表現する方法を取り上げます。</p>
                  <br/>
                  <br/>
                  <p className="font-kleeOne font-normal text-xl">もし「英語で自分の要望はうまく伝えられるけど、二人のネイティブが話しているのを理解するのは難しい」と感じたことがあれば、このコースはあなたにぴったりです！</p>
                </div>
              </div>
            </div>
            <hr className="w-[460px] self-center border-t-2 border-[#EAD1DC]"/>
            <div id="tv_music" className="flex flex-col justify-center gap-10">
              <div className="flex items-center gap-10">
                <div className="flex flex-col items-center" >
                  <p className="text-6xl font-bold bg-[#EAD1DC] flex justify-center items-center" style={{ width: '480px', height: '96px', borderRadius: '50%' }}>TV & Music</p>
                  <p className="font-kleeOne text-2xl">テレビ・音楽</p>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <a className="flex flex-col items-center">
                    <p className="text-3xl font-bold">Intermediate</p>
                    <p className="font-zenKurenaido font-normal text-2xl">中級</p>
                  </a>
                  <a className="flex flex-col items-center">
                    <p className="text-3xl font-bold">Upper Intermediate / advanced</p>
                    <p className="font-zenKurenaido font-normal text-2xl">中上級・上級</p>
                  </a>
                </div>
              </div>
              <div className="flex gap-10">
                <div>
                  <p className="text-[24px] font-normal font-outfit">Drastically increase your English vocabulary through TV shows and music! Each week, watch one episode of a level-appropriate serial TV show for homework, then review key phrases and discuss content in class. Afterwards, analyze lyrics from one song. A variety of songs is presented, including modern hits and culturally significant songs from the past 70 years.</p>
                </div>
                <div>
                  <p className="font-kleeOne font-normal text-xl">テレビ番組や音楽を通じて、英語の語彙力を劇的に向上させましょう！毎週の宿題として、レベルに合った連続ドラマのエピソードを1本視聴し、クラスで重要なフレーズを復習して内容について議論します。その後、1曲の歌詞を分析します。現代のヒット曲から、過去70年の文化的に重要な楽曲まで、さまざまな曲を取り上げます。</p>
                </div>
              </div>
            </div>
            <hr className="w-[460px] self-center border-t-2 border-[#EAD1DC]"/>
            <div id="private_lessons" className="flex flex-col justify-center gap-10">
              <div className="flex gap-10">
                <div className="flex flex-col items-center" >
                  <p className="text-6xl font-bold bg-[#E6B8AF] flex justify-center items-center" style={{ width: '480px', height: '96px', borderRadius: '50%' }}>Private Lessons</p>
                  <p className="font-kleeOne text-2xl">個人レッスン</p>
                </div>
              </div>
              <div className="flex gap-10">
                <div>
                  <p className="text-[24px] font-normal font-outfit">Private lessons are available on a limited basis to both individuals and groups. Possibilities for private lessons include free talk; curriculum-based lessons in conversation, grammar, writing, or pronunciation; and individualized curriculum such as restauraneur English or giving speeches. </p>
                  <br/>
                  <br/>
                  <p className="text-[24px] font-normal font-outfit">If you are interested in the private lessons, please refer to the Private Lesson Questionnaire on our <a href="/contact" className="underline font-bold text-[#741B47]">Contact Us</a> page. Please note that rates start at $100US per hour.</p>
                </div>
                <div>
                  <p className="font-kleeOne font-normal text-xl">プライベートレッスンは、個人またはグループで提供しております。内容としては、フリートーク、会話・文法・ライティング・発音のカリキュラムに基づくレッスン、またはレストランスタッフ向けの英語やスピーチの練習など、個別のカリキュラムをご用意することもできます。</p>
                  <br/>
                  <br/>
                  <p className="font-kleeOne font-normal text-xl">プライベートレッスンに興味のある方は、<br/>「<span className="underline text-[#741B47]">お問い合わせ</span>」ページのプライベートレッスンアンケートをご記入ください。レッスンの料金は、1時間100米ドルからとなります。</p>
                </div>
              </div>
            </div>
            <hr className="w-[460px] self-center border-t-2 border-[#EAD1DC]"/>
          </div>
          <div className="flex flex-col gap-20 px-30">
            <div className="flex flex-col items-center pt-20" >
              <p className="text-[50px] font-bold bg-gray-200 flex justify-center items-center" style={{ width: '1320px', height: '86px', borderRadius: '50%' }}>The following courses are intended for those interested in teaching English.</p>
              <p className="font-kleeOne text-2xl">以下のクラスは、英語を教えることに興味のある方を対象としています</p>
            </div>
            <div id="english-work" className="flex gap-10">
              <div className="flex flex-col items-center" >
                <p className="text-6xl font-bold bg-[#D9D2E9] flex justify-center items-center" style={{ width: '560px', height: '96px', borderRadius: '50%' }}>How Does English Work?</p>
                <p className="font-kleeOne text-2xl">教育英文法</p>
              </div>
            </div>
            <div>
              <p className="text-[24px] font-normal font-outfit">When you teach English, what are you really teaching? A pedagogical grammar course, <span className="underline font-bold text-[#741B47]">How Does English Work?</span> provides a thorough foundation in the grammar of American English as it relates to both teaching and learning, with special focus given to teaching L1 Japanese speakers. Numerous grammatical items are presented in terms of form, meaning, and the novel concept of “usage,” or how English speakers actually use different grammatical items in real-world settings. Practical know-how, including lesson planning, usage-based grammar presentation, and analyzing common errors made by English language learners, is also provided.</p>
              <br/>
              <br/>
              <p className="text-[24px] font-normal font-outfit"><span className="underline font-bold text-[#741B47]">Strongly recommended for anyone interested in teaching English.</span> Also recommended for high-level learners of English.</p>
            </div>
            <div id="teach-english" className="flex gap-10">
              <div className="flex flex-col items-center" >
                <p className="text-6xl font-bold bg-[#D9D2E9] flex justify-center items-center" style={{ width: '560px', height: '96px', borderRadius: '50%' }}>How Do You Teach English?</p>
                <p className="font-kleeOne text-2xl">英語教授法</p>
              </div>
            </div>
            <div>
              <p className="text-[24px] font-normal font-outfit">Many consider languages the most difficult subject a person can teach. With a variety of moving parts, new teachers often get overwhelmed with where to begin. <span className="underline font-bold text-[#741B47]">How Do You Teach English?</span> systematically examines practical teaching techniques for every core aspect of English and select theories behind them, with several demo lessons provided throughout. Specific topics include how to teach listening, speaking, reading, writing, pronunciation, and vocabulary. Special attention is given to writing and executing lesson plans; prepare for hands-on experience!</p>
              <br/>
              <br/>
              <p className="text-[24px] font-normal font-outfit"><span className="underline font-bold text-[#741B47]">Strongly recommended for new/novice teachers.</span></p>
            </div>
            <hr className="w-[460px] self-center border-t-2 border-[#EAD1DC]"/>
          </div>
        </div>
        <div className="flex justify-center items-center px-6 gap-20 p-10">
          <GradientButton onClick={() => handleScheduleClick('pay')} en="Register For a Class Today!" jp="今すぐクラスに申し込む！" divClass="border-1 border-[#FDF4F4]" color="pink" />
          <GradientButton onClick={() => handleScheduleClick('free')} en="First Week Only: Try a free Class" jp="第一週目：無料クラスを試す" divClass="border-1 border-[#E8F0F1]" color="watermelon" />
        </div>
        <ReturnToTopButton />
      </main>
      <SchedulerModal url={modalUrl} onClose={closeModal} type={modalType} />
      <ColorFooter footerColors={customColors} margin />
      <div className="pt-2">
        <Footer bgColor="#134F5C" />
      </div>
    </section>
  )
}
