'use client';

import { useForm, ValidationError } from '@formspree/react';
import { useRouter } from 'next/navigation';
import ColorFooter from "@/app/components/ColorFooter";
import Footer from "@/app/components/Footer";

export default function SenseiQuestionPage () {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_QUESTION_ID as string);
  const router = useRouter();

  const customColors = [
    { color: "#B7B7B7", percent: 15 },
    { color: "#999999", percent: 20 },
    { color: "#666666", percent: 25 },
    { color: "#434343", percent: 40 },
  ];

  if (state.succeeded) {
    setTimeout(() => {
      router.push('/thanks');
    }, 500);
  }

  return (
    <section className="flex flex-col">
      <main className="flex py-8 px-4 max-w-6xl mx-auto w-full gap-20 h-[65vh]">
        <div className="flex flex-col justify-start items-center">
          <hr className="w-[460px] border-t-2 mt-10 border-gray-400" />
          <h1 className="text-8xl text-center font-bold">Ask Ben-sensei!</h1>
          <p className="text-4xl font-zenKurenaido mb-5 text-center">ベン先生に聞いてみよう！</p>
          <hr className="w-[460px] border-t-2 border-gray-400 my-5" />
        </div>
        <div className="flex justify-center w-full mt-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 text-left w-full max-w-2xl">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              required
              className="border font-outfit text-[20px] border-gray-300 rounded-md p-2 shadow"
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="border font-outfit text-[20px] border-gray-300 rounded-md p-2 shadow"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <input
              id="emailConfirm"
              type="email"
              name="emailConfirm"
              placeholder="Confirm email address"
              required
              className="border font-outfit text-[20px] border-gray-300 rounded-md p-2 shadow"
            />
            <input
              id="topic"
              type="text"
              name="topic"
              placeholder="Question/Topic"
              className="border font-outfit text-[20px] border-gray-300 rounded-md p-2 shadow"
            />
            <textarea
              id="message"
              name="message"
              placeholder="Type your message..."
              required
              className="border font-outfit text-[20px] border-gray-300 rounded-md p-2 shadow resize-none"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <div className="flex justify-end">
              <div
                className="class-button flex flex-col items-center justify-center p-1 rounded-xl"
                style={{
                  backgroundImage: 'linear-gradient(180deg, #FFFFFF, #BCD3D8)',
                  boxShadow: '0 10px 0 #5E848C',
                  borderRadius: '1rem',
                }}
              >
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="font-bold text-2xl px-5 py-1 rounded-xl melon w-[280px]"
                  style={{ textShadow: "0 3px 2px #736e6e" }}
                >
                  SUBMIT
                  <div className="text-sm font-normal">送信</div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <ColorFooter footerColors={customColors} margin />
      <div className="w-full mx-auto pt-2">
        <Footer bgColor="#134F5C" />
      </div>
    </section>
  );
}
