export default function BigBrandPartner() {
  return (
    <section className="grid grid-cols-3 gap-4 container">
      <div className="flex flex-col gap-2">
        <div className="overflow-hidden">
          <img
            src="/images/brandpartner1.jpg"
            alt="Brand Partner 1"
            className="w-full aspect-square object-cover transition-transform duration-500 ease-out hover:scale-110"
          />
        </div>

        <h3 className="font-zalando uppercase text-2xl text-gray-800  transition-colors duration-500 font-bold tracking-wide">
          Fred Perry
        </h3>

        <p className="text-justify font-extralight text-zinc-700  transition-colors duration-500">
          A legacy brand redefined for the modern audience. We strengthened its
          digital presence while preserving its iconic heritage and identity.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="overflow-hidden">
          <img
            src="/images/brandpartner2.jpg"
            alt="Brand Partner 2"
            className="w-full aspect-square object-cover transition-transform duration-500 ease-out hover:scale-110"
          />
        </div>
        <h3 className="font-zalando uppercase text-2xl text-gray-800  transition-colors duration-500 font-bold tracking-wide">
          Stone Island
        </h3>
        <p className="text-justify font-extralight text-zinc-700  transition-colors duration-500">
          Innovation meets authenticity. We elevated the brand’s visual
          storytelling to reflect its bold character and forward-thinking
          spirit.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <video
          src="/videos/brandpartner3.webm"
          autoPlay
          loop
          muted
          className="w-full aspect-square object-cover"
        ></video>
        <h3 className="font-zalando uppercase text-2xl text-gray-800 transition-colors duration-500 font-bold tracking-wide">
          Vans
        </h3>
        <p className="text-justify font-extralight text-zinc-700 transition-colors duration-500">
          Driven by culture and creativity. We amplified the brand’s identity
          through immersive digital experiences that resonate with its
          community.
        </p>
      </div>
    </section>
  );
}
