import PrimaryButton from "@/components/ui/primaryButton";

export default function HeroSection() {
  return (
    <section className="min-h-screen grid grid-cols-2 items-center place-items-center gap-8 container relative">
      <div>
        <h1 className="text-5xl font-zalando text-gray-800  transition-colors duration-500 font-extrabold mb-6 uppercase">
          We <span className="text-[#ff6f00]"> Solve </span> What Matters
        </h1>
        <p className="text-lg text-gray-600  transition-colors duration-500 mb-8">
          At Solvein Digital Agency, we help businesses solve their problems
          with innovative solutions. From web development to digital marketing,
          we have the expertise to take your business to the next level.
        </p>
        <PrimaryButton>Discover Our Services</PrimaryButton>
      </div>
      <div>
        <img
          src="/images/hero_image.jpg"
          alt="Hero Image"
          className="aspect-square w-200 rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
