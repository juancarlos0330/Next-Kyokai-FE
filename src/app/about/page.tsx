'use client';

import Circle from '../components/Circle';
import ColorFooter from '../components/ColorFooter';
import BenkyoPage from './benkyo/page';
import ColorHeader from '../components/ColorHeader';

const AboutPage = () => {
  const aboutMenu = [
    {
      button: "About Benkyo",
      path: '#benkyo',
      description: "学校紹介",
      showKai: true,
      url: "/about/benkyo",
    },
    {
      button: "About Ben-Sensei",
      path: '#sensei',
      description: "ベン先生ってだーれ？",
      showKai: false,
      url: "/about/sensei",
    },
    {
      button: "F.A.Q.",
      path: '#faq',
      description: "よくある質問",
      showKai: false,
      url: "/about/faq",
    },
  ];

  return (
    <>
      <div>
        <section className="max-w-7xl mx-auto flex flex-col">
          <main className="flex items-center text-center gap-80 flex-grow overflow-hidden h-[65vh]">
            <div>
              <Circle color="#134F5C" path="/about/benkyo" en="About" jp='学校紹介' />
            </div>
            <div className='flex flex-col gap-10'>
              {aboutMenu.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="flex flex-col items-center">
                    <a 
                      href={item.path}
                      className="flex flex-col justify-center items-center text-[42px] bg-[#D0E0E3]" 
                      style={{ width: '380px', height: '70px', borderRadius: '50%' }}
                    >
                      <p className="font-bold">
                        {item.button}
                        {item.showKai && <span className="font-zenKurenaido font-normal">会</span>}
                      </p>
                    </a>
                    <p className="font-zenKurenaido font-normal text-2xl">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </section>
        <div className=' pt-3 pb-[1px]'>
          <ColorFooter />
        </div>
      </div>
      <div>
        <ColorHeader />
        <BenkyoPage />
      </div>
    </>
  );
};

export default AboutPage;