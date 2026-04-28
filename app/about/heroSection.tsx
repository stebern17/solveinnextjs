export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 container-hero lg:min-h-[80vh] lg:gap-6">
      <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start gap-4 mb-4 lg:mb-0">
        <h1 className="text-4xl sm:text-7xl xl:text-[100px] font-semibold uppercase font-zalando">
          Diagnose,
        </h1>
        <h1 className="text-4xl sm:text-7xl xl:text-[100px] font-semibold uppercase font-zalando">
          Design,
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start gap-4">
        <h1 className="text-4xl sm:text-7xl xl:text-[100px] font-semibold uppercase font-zalando">
          Define,
        </h1>
        <h1 className="text-4xl sm:text-7xl xl:text-[100px] font-semibold uppercase font-zalando">
          Deliver.
        </h1>
      </div>
      <div className="flex flex-col items-start w-[50%] ml-0 lg:ml-auto">
        <p className="text-justify text-sm sm:text-base">
          We don’t believe in jumping straight to execution, we start by
          understanding the problem at its core. Through the 4D approach, we
          turn goals into structured strategies and measurable outcomes.
        </p>
      </div>
    </section>
  );
}
