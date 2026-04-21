import EmailForm from "../ui/EmailForm";

export default function Footer() {
  return (
    <footer className="min-h-[40vh] py-10 sm:py-12 px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm text-white bg-[#27272a] relative z-10 mt-6">
      <div className="flex flex-col justify-evenly gap-6">
        <h4 className="font-semibold text-xl font-zalando uppercase">
          Solvein Digital Agency
        </h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs tracking-[0.2em]">
            <span className="inline-block size-2 rounded-full bg-white" />
            <span className="font-zalando text-sm">
              Wanna <span className="text-[#ff6f00]"> Solve </span> What
              Matters?
            </span>
          </div>
          <EmailForm />
        </div>
      </div>
      <div className="flex flex-col gap-8 sm:gap-10 items-start">
        <div className="flex flex-col gap-2">
          <h3 className="font-zalando text-xl">
            SOLVEIN is more than a Digital & Creative Agency.
          </h3>
          <p className="text-base sm:text-lg text-justify font-extralight">
            We are a strategic thinking partner helping organizations move
            forward with clarity, precision, and measurable results. Ready to
            make the right decisions for your business? Contact us today to
            learn how we can help you achieve your goals.{" "}
            <span className="text-[#ff6f00] underline">
              marketing@solvein.com
            </span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap justify-start gap-10 sm:gap-16">
          <div className="flex flex-col gap-6">
            <h6 className="flex gap-2 items-center text-base uppercase tracking-widest font-semibold">
              <span className="inline-block size-2 rounded-full bg-white" />
              Social
            </h6>
            <ul className="font-zalando flex flex-col gap-2 text-xs">
              <li>
                <a href="" className="hover:underline">
                  Tiktok
                </a>
              </li>
              <li>
                <a href="" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="" className="hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="flex gap-2 items-center text-base uppercase tracking-widest font-semibold">
              <span className="inline-block size-2 rounded-full bg-white" />
              Partners
            </h6>
            <ul className="text-xs font-zalando flex flex-col gap-2">
              <li>Kootin</li>
              <li>Twelve</li>
              <li>Artec</li>
              <li>Inotek</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="flex gap-2 items-center text-base uppercase tracking-widest font-semibold">
              <span className="inline-block size-2 rounded-full bg-white" />
              Office
            </h6>
            <span className="font-zalando text-xs">Sleman - YK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
