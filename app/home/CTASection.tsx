import SecondaryButton from "@/components/ui/secondaryButton";

export function CTASection() {
  return (
    <section className="min-h-[70vh] sm:min-h-screen w-full mx-auto flex flex-col items-center justify-center gap-6 px-4 sm:px-8 relative">
      <div className="container flex flex-col gap-8">
        <h1 className="font-zalando uppercase text-3xl sm:text-5xl lg:text-6xl text-[#ff6f00] font-extrabold mb-4 sm:mb-6 tracking-widest">
          Clarify. Think. Solve.
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-white text-justify max-w-2xl">
          Solvein isn’t just another digital and creative agency. We’re your
          strategic thinking partner, helping your business move forward with
          precision, direction, and measurable impact.
        </p>
        <SecondaryButton className="self-start" href="/contactUs">
          Contact Us
        </SecondaryButton>
      </div>
    </section>
  );
}
