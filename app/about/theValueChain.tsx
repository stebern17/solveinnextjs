export default function TheValueChain() {
  const valueChainItems = [
    {
      title: "Diagnose",
      subtitle: "The Problem",
      description: "Identify the root cause to understand the problem.",
    },
    {
      title: "Strategy",
      subtitle: "The Plan",
      description:
        "Formulate a clear roadmap to ensure every decision is logical and measurable.",
    },
    {
      title: "Output",
      subtitle: "The Action",
      description:
        "Execute through campaigns, designs, systems, and content as strategic instruments beyond production output.",
    },
    {
      title: "Outcome",
      subtitle: "The Result",
      description:
        "Measure the success through tangible changes in our clients' business conditions.",
    },
  ];

  return (
    <section className="container flex flex-col gap-12 pt-20">
      <h2 className="uppercase font-zalando text-3xl sm:text-4xl font-semibold">
        The Value Chain
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-6">
        {valueChainItems.map((item, index) => {
          const isLast = index === valueChainItems.length - 1;

          return (
            <div
              key={index}
              className="relative flex-1 flex flex-col items-center"
            >
              {/* CARD */}
              <div className="bg-[#ff6f00] flex flex-col gap-3 rounded-2xl text-white px-6 py-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full w-full">
                <div className="flex justify-center mb-2">
                  <span className="bg-white text-[#ff6f00] font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg font-zalando">
                    {index + 1}
                  </span>
                </div>

                <h6 className="font-zalando text-center text-lg sm:text-xl font-semibold leading-tight">
                  {item.title}
                  <br />
                  <span className="text-sm font-normal opacity-90">
                    {item.subtitle}
                  </span>
                </h6>

                <p className="text-sm leading-relaxed text-center flex-grow">
                  {item.description}
                </p>
              </div>

              {/* DESKTOP CONNECTOR (horizontal) */}
              {!isLast && (
                <div className="hidden lg:block absolute top-1/2 right-[-24px] w-6 h-[4px] bg-[#ff6f00]" />
              )}

              {/* MOBILE CONNECTOR (vertical) */}
              {!isLast && (
                <div className="lg:hidden absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[4px] h-10 bg-[#ff6f00]" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
