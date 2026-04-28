import EmailForm from "../ui/EmailForm";
import { getClients } from "@/services/client";

export default async function Footer() {
  const clients = await getClients();

  return (
    <footer className="min-h-[40vh] py-10 sm:py-12 px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm text-white bg-[#27272a] relative z-10 mt-6">
      <div className="flex flex-col justify-evenly gap-6">
        <h4 className="font-semibold text-2xl font-zalando uppercase">
          Solvein Creative & Digital Agency
        </h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs tracking-[0.2em]">
            <span className="inline-block size-2 rounded-full bg-white" />
            <span className="font-zalando text-sm">
              Ready to <span className="text-[#ff6f00]">Solve</span> What
              Matters?
            </span>
          </div>
          <EmailForm />
        </div>
      </div>
      <div className="flex flex-col gap-8 sm:gap-10 items-start">
        <div className="flex flex-col gap-2">
          <h3 className="font-zalando text-xl">#SolveWhatMatters</h3>
          <p className="text-base sm:text-lg text-justify font-extralight text-[#ff6f00]">
            hi.solvein@gmail.com
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
                <a href="#" className="hover:underline">
                  Tiktok
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/solvein.id/"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://id.linkedin.com/company/solvein-id"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="flex gap-2 items-center text-base uppercase tracking-widest font-semibold">
              <span className="inline-block size-2 rounded-full bg-white" />
              Office
            </h6>
            <span className="font-zalando text-xs">Sleman - YK</span>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="flex gap-2 items-center text-base uppercase tracking-widest font-semibold">
              <span className="inline-block size-2 rounded-full bg-white" />
              Clients
            </h6>
            <ul className="text-xs font-zalando grid grid-cols-3 sm:grid-cols-4 gap-3">
              {clients?.map(
                (client: { name: string; logo?: string; alt?: string }) => (
                  <li key={client.name}>{client.name}</li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
