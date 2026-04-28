export default function SolveinSection() {
  return (
    <section className="min-h-[50vh] w-full mx-auto grid grid-cols-1 items-center lg:grid-cols-2 place-items-center gap-8 px-4 sm:px-8 relative border border-b border-gray-200 container">
      <div className="flex items-center">
        <img
          src="/images/logo/logo_black.png"
          alt=""
          className="w-[80%] mb-0 lg:mb-8 h-auto mx-auto"
        />
      </div>
      <div>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 transition-colors duration-500 text-justify">
          Strategic. Production. Growth. We work alongside our clients to solve
          what matters, turning strategy into measurable progress. From defining
          the roadmap to executing with a target, let’s pave an innovative path
          together as your thinking partner and achieve real improvements.
        </p>
      </div>
    </section>
  );
}
