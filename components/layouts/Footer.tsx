import {
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
  FaCircle,
} from "react-icons/fa";
import EmailForm from "../ui/EmailForm";

export default async function Footer() {
  return (
    <footer className="min-h-[40vh] py-10 sm:py-12 px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm text-white bg-[#27272a] relative z-10 mt-6">
      <div className="flex flex-col justify-between gap-6">
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-2xl font-zalando uppercase">
            Solvein Digital & Creative Agency
          </h4>
          <div className="flex flex-col gap-2 text-justify">
            <div className="flex gap-2 items-center">
              <FaCircle className="size-2" />
              <h4 className="text-sm">Headquarter Office</h4>
            </div>

            <p className="text-xs">
              69VQ+7R7, Pikgondeng, Condongcatur, Kec. Depok, Kabupaten Sleman,
              Daerah Istimewa Yogyakarta 55281
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs tracking-[0.2em]">
            <FaCircle className="size-2" />
            <span className="font-zalando text-sm">
              Ready to <span className="text-[#ff6f00]">Solve</span> What
              Matters?
            </span>
          </div>
          <EmailForm />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {/* BARIS ATAS */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h3 className="font-zalando text-sm md:text-xl">
              #SolveWhatMatters
            </h3>
            <p className="text-sm sm:text-lg text-justify font-extralight text-[#ff6f00]">
              hi.solvein@gmail.com
            </p>
          </div>

          <ul className="font-zalando flex gap-6">
            <li>
              <a
                href="https://wa.link/03l2gi"
                className=" hover:text-[#ff6f00]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="size-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-[#ff6f00]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="size-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/solvein.id/"
                className=" hover:text-[#ff6f00]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="size-6" />
              </a>
            </li>
            <li>
              <a
                href="https://id.linkedin.com/company/solvein-id"
                className=" hover:text-[#ff6f00]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="size-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
