import { SlArrowRight } from "react-icons/sl";

export default function EmailForm() {
  return (
    <div className="flex items-center gap-4 border-b border-white/40 pb-3 w-full max-w-md">
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        id="footer-email"
        className="w-full bg-transparent text-white/90 placeholder:text-white/50 outline-none"
        placeholder="Email Address"
      />
      <button
        type="button"
        aria-label="Submit email"
        className="text-white/90 transition hover:text-white"
      >
        <SlArrowRight className="size-4 hover:scale-120 cursor-pointer transition-transform duration-300" />
      </button>
    </div>
  );
}
