import LogoMarquee from "@/components/ui/LogoMarque";

export default function PartnerSection() {
  return (
    <section className="flex flex-col gap-6 min-h-[50vh] items-center justify-center py-8">
      <h3 className="font-zalando container uppercase font-bold text-4xl">
        Our Clients
      </h3>
      <LogoMarquee />
    </section>
  );
}
