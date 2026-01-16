export default function FinalCTA() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="order-1">
            <h2 className="font-serif text-3xl md:text-2xl leading-snug mb-3 lg:text-left sm:text-center">
              We’re On A Mission To Help 100,000,000 Women Visibly, Naturally
              Get Rid Of Bloating…And Feel Like Themselves Again
            </h2>

            <p className="text-sm text-gray-700 mb-4 lg:text-left sm:text-center">
              Here's where we're at right now:
            </p>

            {/* STATS IMAGE - DESKTOP */}
            <img
              src="https://trysculptique.com/cdn/shop/files/numbdeskt-min_png.png?v=1760942458"
              alt="Statistics desktop"
              className="hidden lg:block w-full"
            />
          </div>

          {/* RIGHT CONTENT (COMPOSITE IMAGE) */}
          <div className="order-2 flex justify-center">
            <img
              src="https://trysculptique.com/cdn/shop/files/Frame_1000003537.jpg?v=1760943777"
              alt="Sculptique product stats"
              className="w-[280px] md:w-[320px] lg:w-[380px]"
            />
          </div>

          {/* STATS IMAGE - MOBILE */}
          <div className="order-3 lg:hidden flex justify-center">
            <img
              src="https://trysculptique.com/cdn/shop/files/numbmob-min_png.png?v=1760942458"
              alt="Statistics mobile"
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
