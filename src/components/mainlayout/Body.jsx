import HeroSection from "../hero/HeroSection";
import AsSeenInMarquee from "../socialproof/AsSeenInMarquee";
import TrustBadges from "../trustbadges/TrustBadges";
import ScrollArrow from "../common/ScrollArrow";
import Connection from "../benefits/Connection";
import Comparison from "../comparison/Comparison";
import WhyNotThis from "../whynotthis/WhyNotThis";

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

      {/* Scroll Arrow Section */}
      <ScrollArrow />

      {/* Connection Section */}
      <Connection />

      {/* Scroll Arrow Section */}
      <ScrollArrow />

      {/* Comparison Section */}
      <Comparison />
      
      {/* Why Not This Section */}
      <WhyNotThis />

    </>
  );
}
