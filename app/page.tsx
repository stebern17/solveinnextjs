import { Suspense } from "react";
import HeroSection from "./home/heroSection";
import HeroVideo from "./home/heroVideo";
import SolveinSection from "./home/solveinSection";
import Devider from "../components/ui/Devider";
import BigBrandPartner, {
  BigBrandPartnerSkeleton,
} from "./home/bigBrandPartner";
import SolveinServices from "./home/solveinServices";
import GameSection from "./home/gameSection";
import PartnerSection from "./home/partnerSection";
import { CTASection } from "./home/CTASection";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <HeroSection />
      <Devider />
      <SolveinSection />
      <Suspense fallback={<BigBrandPartnerSkeleton />}>
        <BigBrandPartner />
      </Suspense>
      <PartnerSection />
      <SolveinServices />
      <GameSection />
      <CTASection />
    </>
  );
}
