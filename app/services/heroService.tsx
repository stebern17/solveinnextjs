import Image from "next/image";
import { HiCheckCircle } from "react-icons/hi";

type HeroServiceProps = {
  title: string;
  description: string;
  image: string;
  features?: string[];
};

export default function HeroService({
  title,
  description,
  image,
  features = [],
}: HeroServiceProps) {
  return (
    <section className="w-full">
      <h1 className="font-zalando text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-6">
        {title}
      </h1>

      <div className="relative w-full overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          width={1400}
          height={780}
          className="w-full h-125 object-cover"
          priority
        />
      </div>

      <p className="mt-8 text-foreground/85 text-2xl leading-relaxed text-justify max-w-6xl">
        {description}
      </p>

      <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 max-w-6xl">
        {features.map((feature, index) => (
          <li
            key={index}
            className="text-foreground/85 text-xl font-light leading-relaxed"
          >
            <HiCheckCircle className="inline-block text-foreground/85  mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
}
