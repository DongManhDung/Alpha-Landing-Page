import HeroSection from "../hero/HeroSection";
import AsSeenInMarquee from "../socialproof/AsSeenInMarquee";

// This is main layout body component
export default function Body() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Social Proof Section */}
      <AsSeenInMarquee />
    </>
  );
}
