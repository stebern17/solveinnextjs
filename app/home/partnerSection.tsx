import LogoMarquee from "@/components/ui/LogoMarque";

export default function PartnerSection() {
  return (
    <section className="mt-6 flex flex-col gap-4">
      <h3 className="font-zalando container uppercase font-bold text-2xl">
        Our Clients
      </h3>
      <LogoMarquee />
    </section>
  );
}
