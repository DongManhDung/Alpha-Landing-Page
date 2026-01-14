export default function AsSeenInMarquee() {
  const logos = [
    {
      src: "https://trysculptique.com/cdn/shop/files/WH_Logo_500x.png?v=1752348678",
      alt: "Women's Health",
    },
    {
      src: "https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678",
      alt: "Vogue",
    },
    {
      src: "https://trysculptique.com/cdn/shop/files/Grazia-Logo_1_500x.png?v=1752348678",
      alt: "Grazia",
    },
  ];

  const marqueeLogos = Array(20).fill(logos).flat();

  return (
    <section className="w-screen bg-[#f6f1e7] py-6 overflow-hidden relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* Title */}
      <h2 className="text-center text-lg sm:text-xl font-serif text-gray-900 mb-5">
        As Seen In
      </h2>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 sm:gap-24">
          {marqueeLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[140px] sm:min-w-[180px]"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-6 sm:h-8 object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
