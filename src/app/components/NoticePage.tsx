import Image from "next/image";

export default function NoticePage () {
  return (
    <div className="flex flex-col items-center justify-center px-4 text-center overflow-hidden h-screen">
      <div className='flex flex-col font-outfit text-sm'>
        <h1 className="font-bold text-xl font-outfit">
          Thank you for visiting <span className='text-[#45818E]'>BEN</span>KYO会!
        </h1>
        <p>
          Our mobile site is still under construction,<br/>
          so please visit from an iPad, laptop or desktop computer.
        </p>
        <p>
          If you have any question, please email <a href='#' className='underline text-[#45818E]'>info@benkyokai.com</a>
        </p>
      </div>
      <div className="flex flex-col items-center max-w-base py-10">
        <div className="flex flex-col items-center max-w-base relative">
          <div className="text-[9px] font-funnelDisplay font-bold mb-6">日本語に精通するベン先生の</div>
          <div
            className="absolute left-1/2 transform -translate-x-1/2 z-10 top-6.5 bg-gray-300 rounded-full flex items-center justify-center"
            style={{ width: "110px", height: "70px", borderRadius: '50%' }}
          >
            <Image
              src="/images/Ben.png"
              alt="Ben"
              width={80}
              height={80}
              className="h-auto"
            />
          </div>
          <div className="relative flex bg-gray-200 text-gray-600 rounded-xl py-2 px-2">
            <div className="flex items-center mr-12">
              <p className="text-[7px] font-funnelDisplay font-bold">
                ユーモアたっぷりの、<br />
                本物の言語学者による<br />
                オンライン英語レッスン
              </p>
            </div>
            <div className="w-[50px]"></div>
            <div className="flex items-center ml-12">
              <p className="text-[7px] font-funnelDisplay font-bold">
                英文法から発音、ネイティブ同士<br />
                の会話分析まで、すべてのクラス<br />
                が2時間、$35で受けられます
              </p>
            </div>
          </div>

          <div className="text-center mt-5">
            <p className="text-sm font-funnelDisplay px-5 font-bold">
              英語
              <span className="font-funnelDisplay text-[#467580]">BEN</span>
              <span className="font-funnelDisplay">KYO</span>会
            </p>
            <p className="text-[7px] font-funnelDisplay">ベン先生がいなくては、不ベンです！</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col font-zenKurenaido text-[10px]'>
        <h1 className="font-bold text-lg">
          ご訪問いただきありがとうございます！
        </h1>
        <p>
          <span className='text-[#45818E]'>BEN</span>KYO会のモバイルサイトは現在準備中です。<br/>
          よろしければ、iPad・ノートパソコン・デスクトップからご覧ください。
        </p>
        <p>
          ご質問は、 <a href='#' className='underline text-[#45818E]'>info@benkyokai.com</a>までご連絡ください！
        </p>
      </div>
    </div>
  )
}