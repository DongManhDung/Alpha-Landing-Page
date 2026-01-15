export default function DoctorEndorsement() {
  return (
    <section className="py-14 sm:py-15">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-2xl">
          
          {/* IMAGE */}
          <div className="order-1 lg:order-2">
            <img
              src="https://trysculptique.com/cdn/shop/files/greendeskt-min.png?v=1758713213"
              alt="Doctor endorsement"
              className="w-full h-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="order-2 lg:order-1 bg-slate-50 px-6 sm:px-5 lg:px-5 py-10 sm:py-14">
            {/* Date */}
            <p className="text-sm text-gray-500 mb-4 text-left">
              July 4th, 2025
            </p>

            {/* Heading */}
            <h2 className="font-serif text-2xl sm:text-3xl md:text-3xl text-gray-900 leading-tight mb-6 text-left">
              Expert Advice from Dr. Emily Chen of a Premier New York Skin Clinic
            </h2>

            {/* Quote */}
            <div className="space-y-4 text-gray-800 text-sm sm:text-base leading-relaxed text-left">
              <p>
                “Your nutrition plays a powerful role in your appearance. If
                your body is missing key vitamins and nutrients, it can’t
                process fat and upkeep healthy connective tissue, which is why
                unprocessed fat flows up and starts pushing up against your
                skin, forming bumps you know as cellulite.
              </p>

              <p>
                SmoothSkin by Sculptique™ contains ingredients that are
                scientifically proven to enhance microcirculation, boost
                lymphatic drainage, and reduce inflammation, which restores your
                tissue and breaks down the fat cells in your skin.”
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button className="w-full bg-black text-white px-8 py-4 rounded-md text-sm font-medium hover:bg-gray-900 transition">
                Try Lymphatic Drainage Risk-Free
              </button>
            </div>

            {/* Guarantee */}
            <div className="mt-4 flex justify-center items-center gap-2 text-sm text-gray-700">
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395"
                alt="60 days guarantee"
                className="w-5 h-5"
              />
              <span>60-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
