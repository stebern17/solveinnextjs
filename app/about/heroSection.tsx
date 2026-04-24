export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 container-hero lg:min-h-[80vh] lg:gap-6">
      <div>
        <h1 className="text-5xl sm:text-7xl xl:text-[120px] font-semibold uppercase font-zalando">
          We're Fast
        </h1>
      </div>
      <div className="flex flex-col items-start lg:items-end">
        <h1 className="text-5xl sm:text-7xl xl:text-[120px] font-semibold uppercase font-zalando lg:mt-auto">
          We're Capable
        </h1>
        <p className="text-justify text-sm sm:text-base">
          At <span className="font-bold text-[#ff6f00]">Solvein</span>, we pride
          ourselves on our speed and capability. We understand the importance of
          delivering results quickly without compromising on quality. Our team
          is dedicated to providing efficient solutions that meet your needs,
          ensuring that you can achieve your goals faster than ever before. With
          our expertise and commitment to excellence, you can trust us to
          deliver exceptional results in a timely manner.
        </p>
      </div>
    </section>
  );
}
