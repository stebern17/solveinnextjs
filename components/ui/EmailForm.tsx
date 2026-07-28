"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlArrowRight } from "react-icons/sl";
import { submitEmail } from "@/services/submitedEmail";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const showMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      showMessage("Please enter a valid email");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      await submitEmail({
        email,
      });
      showMessage("Thank you! Our Team will contact you soon.");
      setEmail("");
    } catch (error) {
      showMessage("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-4 border-b border-white/40 pb-3"
      >
        <label htmlFor="footer-email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="footer-email"
          className="w-full bg-transparent text-white/90 placeholder:text-white/50 outline-none disabled:opacity-50"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          suppressHydrationWarning
        />
        <button
          type="submit"
          aria-label="Submit email"
          disabled={isLoading}
          className="text-white/90 transition hover:text-white disabled:opacity-50"
          suppressHydrationWarning
        >
          <SlArrowRight className="size-4 hover:scale-120 cursor-pointer transition-transform duration-300" />
        </button>
      </form>
      <AnimatePresence mode="wait">
        {message && (
          <motion.p
            key={message}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`text-xs mt-2 ${message.includes("Thank") ? "text-green-400" : "text-red-400"}`}
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
