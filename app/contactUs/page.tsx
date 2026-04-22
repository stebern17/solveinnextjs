"use client";

import { useEffect, useState } from "react";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { SiTiktok } from "react-icons/si";
import { IoShareSocial } from "react-icons/io5";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { submitForm } from "@/services/submitedForm";

export default function ContactUsPage() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [noticeVisible, setNoticeVisible] = useState(false);
  const [noticeTone, setNoticeTone] = useState<"success" | "error" | null>(
    null,
  );
  const [noticeText, setNoticeText] = useState("");

  useEffect(() => {
    if (status !== "success" && status !== "error") return;

    const tone = status === "success" ? "success" : "error";
    const text =
      status === "success"
        ? "Thanks! Your message has been sent."
        : errorMessage || "Submission failed. Please try again.";

    setNoticeTone(tone);
    setNoticeText(text);
    setNoticeVisible(true);

    const hideTimer = setTimeout(() => {
      setNoticeVisible(false);
    }, 3500);

    const resetTimer = setTimeout(() => {
      setStatus("idle");
    }, 4200);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(resetTimer);
    };
  }, [status, errorMessage]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      await submitForm(payload);
      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Failed to submit contact form", error);
      setStatus("error");
      setErrorMessage("Submission failed. Please try again.");
    }
  };

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 container-hero items-start lg:items-center gap-10 lg:gap-20 px-4 sm:px-6 py-10">
      {/* Left Column — Info */}
      <div className="flex flex-col gap-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold uppercase font-zalando leading-tight">
            Want to Solve What Matters?
          </h1>
          <p className="text-justify mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed opacity-80">
            At <span className="font-bold text-[#ff6f00]">Solvein</span>, we are
            passionate about solving the most pressing challenges of our time.
            If you have a problem that needs solving, we want to hear from you.
            Our team of experts is ready to tackle complex issues and provide
            innovative solutions that make a real difference.
          </p>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <HiMail className="mt-0.5 text-[#ff6f00] shrink-0 text-xl" />
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold opacity-50 mb-1">
                Email
              </p>
              <a
                href="mailto:marketing@solvein.com"
                className="text-sm font-zalando hover:text-[#ff6f00] transition-colors duration-200"
              >
                marketing@solvein.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <HiLocationMarker className="mt-0.5 text-[#ff6f00] shrink-0 text-xl" />
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold opacity-50 mb-1">
                Office
              </p>
              <p className="text-sm font-zalando">
                Sleman, Yogyakarta — Indonesia
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-0.5 text-[#ff6f00] shrink-0 text-xl">
              <IoShareSocial />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold opacity-50 mb-2">
                Follow Us
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  aria-label="TikTok"
                  className="flex items-center gap-1.5 text-xs font-zalando uppercase tracking-widest hover:text-[#ff6f00] transition-colors duration-200"
                >
                  <SiTiktok className="text-base" />
                  TikTok
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex items-center gap-1.5 text-xs font-zalando uppercase tracking-widest hover:text-[#ff6f00] transition-colors duration-200"
                >
                  <FaInstagram className="text-base" />
                  Instagram
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex items-center gap-1.5 text-xs font-zalando uppercase tracking-widest hover:text-[#ff6f00] transition-colors duration-200"
                >
                  <FaLinkedinIn className="text-base" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column — Form */}
      <div className="relative">
        {/* Subtle accent border */}
        <div className="absolute -inset-px rounded-2xl bg-linear-to-br from-[#ff6f00]/30 via-transparent to-transparent pointer-events-none" />
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col gap-6 border-t-0 border-s-0 bg-(--foreground)/5 dark:bg-white/5 border border-(--foreground)/10 rounded-2xl p-6 sm:p-10 backdrop-blur-sm"
        >
          <h2 className="text-lg font-semibold uppercase font-zalando tracking-widest mb-2">
            Send a Message
          </h2>

          {/* Name + Email row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-xs uppercase tracking-widest font-semibold opacity-80"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="bg-transparent border border-(--foreground)/20 rounded-lg px-4 py-3 text-sm placeholder:opacity-30 focus:outline-none focus:border-[#ff6f00] focus:ring-1 focus:ring-[#ff6f00] transition-all duration-200"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs uppercase tracking-widest font-semibold opacity-80"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                className="bg-transparent border border-(--foreground)/20 rounded-lg px-4 py-3 text-sm placeholder:opacity-30 focus:outline-none focus:border-[#ff6f00] focus:ring-1 focus:ring-[#ff6f00] transition-all duration-200"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="subject"
              className="text-xs uppercase tracking-widest font-semibold opacity-80"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What can we help you with?"
              required
              className="bg-transparent border border-(--foreground)/20 rounded-lg px-4 py-3 text-sm placeholder:opacity-30 focus:outline-none focus:border-[#ff6f00] focus:ring-1 focus:ring-[#ff6f00] transition-all duration-200"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="text-xs uppercase tracking-widest font-semibold opacity-80"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your challenge..."
              rows={5}
              required
              className="bg-transparent border border-(--foreground)/20 rounded-lg px-4 py-3 text-sm placeholder:opacity-30 focus:outline-none focus:border-[#ff6f00] focus:ring-1 focus:ring-[#ff6f00] transition-all duration-200 resize-none"
            />
          </div>

          <div
            role="status"
            aria-live="polite"
            className={`text-sm rounded-lg px-4 py-3 border transition-all duration-500 ${
              noticeVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            } ${
              noticeTone === "success"
                ? "text-green-700 border-green-200 bg-green-50"
                : noticeTone === "error"
                  ? "text-red-700 border-red-200 bg-red-50"
                  : "text-transparent border-transparent bg-transparent"
            }`}
          >
            {noticeText}
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="group relative overflow-hidden bg-[#ff6f00] text-white rounded-lg py-3.5 font-semibold uppercase cursor-pointer tracking-widest text-sm font-zalando transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,111,0,0.4)]"
          >
            <span className="relative z-10">
              {status === "submitting" ? "Sending..." : "Send Message"}
            </span>
            <span className="absolute inset-0 bg-[#e65c00] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </form>
      </div>
    </section>
  );
}
