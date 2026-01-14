import HeroSection from "../hero/HeroSection";
import AsSeenInMarquee from "../socialproof/AsSeenInMarquee";
import TrustBadges from "../trustbadges/TrustBadges";
import ScrollArrow from "../common/ScrollArrow";

// This is main layout body component
export default function Body() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Social Proof Section */}
      <AsSeenInMarquee />

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* Scroll Arrow */}
      <ScrollArrow />
    </>
  );
}
