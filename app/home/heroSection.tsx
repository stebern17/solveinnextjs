import PrimaryButton from "@/components/ui/primaryButton";

export default function HeroSection() {
  return (
    <section className="md:min-h-screen min-h-[60vh] grid grid-cols-1 lg:grid-cols-2 items-center place-items-center gap-4 md:gap-8 container relative py-10 lg:py-0">
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-zalando text-gray-800 transition-colors duration-500 font-extrabold mt-10 md:mt-0 mb-6 uppercase">
          We <span className="text-[#ff6f00]"> Solve </span> What Matters
        </h1>
        <p className="text-base sm:text-lg text-gray-600 transition-colors duration-500 mb-2 lg:mb-8">
          Every business faces different challenges. That’s why we don’t begin
          with execution, instead understanding. Explore how our services are
          designed to solve what matters and drive measurable growth.
        </p>
        <PrimaryButton href="/services">Let’s SOLVE it!</PrimaryButton>
      </div>
      <div>
        <img
          src="/images/hero_image.webp"
          alt="Solvein Digital & Creative Agency"
          className="aspect-square w-full max-w-md lg:max-w-xl rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
