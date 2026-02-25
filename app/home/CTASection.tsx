import SecondaryButton from "@/components/ui/secondaryButton";

export function CTASection() {
  return (
    <section className="h-screen w-full mx-auto flex flex-col items-center justify-center gap-6 px-8 relative">
      <div className="container flex flex-col gap-8">
        <h1 className="font-zalando uppercase text-6xl text-[#ff6f00] font-extrabold mb-6 tracking-widest">
          Clarity Drives Results. Strategy Makes the Difference.
        </h1>
        <p className="text-xl text-white text-justify max-w-2xl">
          Solvein isn’t just another digital and creative agency. We are your
          strategic thinking partner — helping your organization move forward
          with precision, direction, and measurable impact.
        </p>
        <SecondaryButton className="self-start">Contact Us</SecondaryButton>
      </div>
    </section>
  );
}
