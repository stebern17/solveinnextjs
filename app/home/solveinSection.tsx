import { getHeroSection } from "@/services/heroSection";

export default async function SolveinSection() {
  const content = await getHeroSection();
  return (
    <section className="min-h-[50vh] w-full mx-auto grid grid-cols-1 items-center lg:grid-cols-2 place-items-center gap-8 px-4 sm:px-8 relative container">
      <div className="flex items-center">
        <img
          src="/images/logo/logo_black.png"
          alt=""
          className="w-[80%] mb-0 lg:mb-8 h-auto mx-auto"
        />
      </div>
      <div>
        {content.about.html ? (
          <div
            className="text-base text-justify sm:text-lg text-gray-600 transition-colors duration-500 mb-2 lg:mb-8 [&_strong]:font-semibold"
            dangerouslySetInnerHTML={{
              __html: content.about.html,
            }}
          />
        ) : content.about.text ? (
          <p className="text-base text-justify sm:text-lg text-gray-600 transition-colors duration-500 mb-2 lg:mb-8">
            {content.about.text}
          </p>
        ) : null}
      </div>
    </section>
  );
}
