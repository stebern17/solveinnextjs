import HeroSection from "./home/heroSection";
import HeroVideo from "./home/heroVideo";
import SolveinSection from "./home/solveinSection";
import Devider from "../components/ui/Devider";
import BigBrandPartner from "./home/bigBrandPartner";
import SolveinServices from "./home/solveinServices";
import GameSection from "./home/gameSection";
import { CTASection } from "./home/CTASection";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <HeroSection />
      <Devider />
      <SolveinSection />
      <BigBrandPartner />
      <SolveinServices />
      <GameSection />
      <CTASection />
    </>
  );
}
