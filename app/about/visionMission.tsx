import { FaCircle } from "react-icons/fa";

export default function VisionMission() {
  const missionPoints = [
    "Optimizing human resources for critical long-term solutions while remaining proportionately responsive to client’s urgent needs.",
    "⁠Integrating logical and disciplined thinking methods into all decision-making processes, both creative and digital",
    "⁠Improved company and client growth through clear, intelligent strategies based on long-term objectives",
    "⁠Creating world that is logical, implementable, and free from elements that do not add value to business objectives.",
  ];
  return (
    <section className="container grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-16 py-8">
      {/* Vision */}
      <div>
        <h4 className="uppercase font-zalando text-2xl sm:text-3xl">
          Our Vision
        </h4>
        <p className="text-justify text-sm sm:text-base">
          To be a premier strategic partner that creates real-world{" "}
          <span className="font-bold text-[#ff6f00]">solutions</span> by
          combining disciplined thinking with digital innovation for sustainable
          impact.
        </p>
      </div>

      {/* Mission */}
      <div>
        <h4 className="uppercase font-zalando text-2xl sm:text-3xl">
          Our Mission
        </h4>

        <ul className="mt-4 flex flex-col gap-3 text-sm sm:text-base">
          {missionPoints.map((point, index) => (
            <li key={index} className="flex gap-3 items-start">
              <FaCircle className="text-[#ff6f00] text-[6px] mt-2" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
