import { FaCircle } from "react-icons/fa";

export default function VisionMission() {
  return (
    <section className="container grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-16 py-8">
      {/* Vision */}
      <div>
        <h4 className="uppercase font-zalando text-2xl sm:text-3xl">
          Our Vision
        </h4>
        <p className="text-justify text-sm sm:text-base">
          At <span className="font-bold text-[#ff6f00]">Solvein</span>, our
          vision is to be the leading provider of innovative solutions that
          empower businesses to thrive in the digital age. We strive to create a
          future where technology seamlessly integrates with everyday life,
          enhancing productivity, connectivity, and overall well-being.
        </p>
      </div>

      {/* Mission */}
      <div>
        <h4 className="uppercase font-zalando text-2xl sm:text-3xl">
          Our Mission
        </h4>

        <ul className="mt-4 flex flex-col gap-3 text-sm sm:text-base">
          <li className="flex gap-3 items-start">
            <FaCircle className="text-[#ff6f00] text-[6px] mt-2" />
            <span>
              Deliver innovative digital solutions that help businesses grow and
              adapt in an ever-evolving technological landscape.
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <FaCircle className="text-[#ff6f00] text-[6px] mt-2" />
            <span>
              Build strong and long-term partnerships with clients through
              collaboration, transparency, and trust.
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <FaCircle className="text-[#ff6f00] text-[6px] mt-2" />
            <span>
              Encourage continuous learning and innovation within our team to
              stay ahead in the digital industry.
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <FaCircle className="text-[#ff6f00] text-[6px] mt-2" />
            <span>
              Create meaningful digital experiences that bring real value to
              businesses and their audiences.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
