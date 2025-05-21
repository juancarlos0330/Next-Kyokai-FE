'use client';

import { useState } from "react";
import Circle from "../components/Circle";
import ColorFooter from "../components/ColorFooter";
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
  const customFooterColor = [
    { color: "#A2C4C9", percent: 15 },
    { color: "#76A5AF", percent: 20 },
    { color: "#45818E", percent: 25 },
    { color: "#134F5C", percent: 40 },
  ];

  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID || "");
  const [formData, setFormData] = useState({
    topic: "",
    firstName: "",
    lastName: "",
    email: "",
    emailConfirm: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Custom validation
    if (formData.email !== formData.emailConfirm) {
      setError("Email addresses do not match.");
      return;
    }
    setError("");
    await handleSubmit({
      ...formData,
      emailConfirm: undefined,
    } as any);
  };

  if (state.succeeded) {
    return (
      <section className="text-center">
        <main className="@container grid min-h-[65vh] max-h-auto m-5">
          <div className="flex flex-col items-center justify-center">
            <p className="self-center text-5xl font-bold mb-5">Thank you for reaching out! We’ll get back to you as soon as possible.</p>
            <p className="font-kleeOne self-center text-2xl">お問い合わせいただきありがとうございます。できるだけ早くご連絡いたします。</p>
          </div>
          <ColorFooter footerColors={customFooterColor} fixed />
        </main>
      </section>
    );
  }

  return (
    <section>
      <main className="@container grid min-h-[65vh] max-h-auto m-5">
        <div className="flex mx-auto items-center max-w-7xl justify-center gap-10 @4xl:gap-60 @3xl:gap-10 columns-2xl">
          <div>
            <Circle color="#45818E" en="Contact Us" jp="お問い合わせ" fontSize="base" />
          </div>
          <div className="flex items-center">
            <form onSubmit={onSubmit} className="grid grid-cols-2 items-center gap-4 text-left">
              <select
                name="topic"
                className="col-span-2 border font-outfit text-[20px] border-gray-300 rounded-md p-2 shadow"
                value={formData.topic}
                onChange={handleChange}
                required
              >
                <option disabled value="">I have a question about...</option>
                <option value="classes">Classes (クラス)</option>
                <option value="media">Media (メディア関連)</option>
                <option value="payment">Payment (お支払・請求)</option>
                <option value="registration">Registration (お申し込み・登録) </option>
                <option value="private_lessons">Private Lessons (個人レッスン) </option>
                <option value="request_class">Request a Class (クラス開講のリクエスト)</option>
                <option value="other">Other Questions (その他のご質問)</option>
              </select>

              <input name="firstName" type="text" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="border font-outfit text-[20px] border-gray-300 rounded-md p-2 shadow" required />
              <input name="lastName" type="text" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="border font-outfit text-[20px] border-gray-300 rounded-md p-2 shadow" required />
              <input name="email" type="email" placeholder="Email address" value={formData.email} onChange={handleChange} className="border font-outfit text-[20px] border-gray-300 rounded-md p-2 shadow" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <input name="emailConfirm" type="email" placeholder="Confirm email address" value={formData.emailConfirm} onChange={handleChange} className="border font-outfit text-[20px] border-gray-300 rounded-md p-2 shadow" required />
              <textarea name="message" placeholder="Type your message..." value={formData.message} onChange={handleChange} className="col-span-2 border font-outfit text-[20px] border-gray-300 rounded-md p-2 shadow resize-none" required />
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              {error && <p className="col-span-2 text-red-500">{error}</p>}

              <div className="col-span-2 flex justify-end">
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
        </div>
      </main>
      <ColorFooter footerColors={customFooterColor} fixed />
    </section>
  );
}
