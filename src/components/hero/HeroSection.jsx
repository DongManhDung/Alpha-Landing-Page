import HeroImage from "../hero/image/HeroImage";
import HeroContent from "../hero/content/HeroContent";

export default function HeroSection() {
  return (
    <section className="bg-white overflow-x-hidden">
      <div className="mx-auto max-w-8xl px-1 sm:px-4 py-4 sm:py-8 lg:py-16">
        <div className="grid gap-4 sm:gap-6 lg:gap-10 lg:grid-cols-2">
          <HeroImage />
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
