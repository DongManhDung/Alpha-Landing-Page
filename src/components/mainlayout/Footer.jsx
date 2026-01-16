export default function Footer() {
  return (
    <>
      <section className="w-screen bg-[#F7F2E8] py-3 sm:py-10 lg:py-10 overflow-hidden relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              {/* TRUSTPILOT - DESKTOP */}
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review.png?v=1752480694"
                alt="Trustpilot reviews"
                className="hidden lg:block mb-6 w-[300px]"
              />

              {/* TRUSTPILOT - MOBILE */}
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review_1.png?v=1752480694"
                alt="Trustpilot reviews mobile"
                className="lg:hidden w-[270px] mx-auto mt-0 mb-4"
              />

              {/* TITLE */}
              <h2 className="font-serif text-3xl md:text-3xl leading-snug mb-6 text-left">
                Stop Masking Symptoms. Start Restoring Root Cause.
              </h2>

              {/* DESCRIPTION */}
              <p className="text-sm md:text-base text-gray-800 mb-4 leading-relaxed text-left">
                You deserve to feel like yourself again. To wake up without
                puffiness. To see your ankles. To look in the mirror and
                recognize the vibrant woman staring back. To have energy for the
                people you love.
              </p>

              <p className="text-sm md:text-base text-gray-800 mb-8 leading-relaxed text-left">
                You deserve a solution that actually works. Not temporary
                relief. Not symptom masking. Complete lymphatic restoration.
              </p>

              {/* IMAGE RIGHT – MOBILE (to hơn) */}
              <div className="lg:hidden mb-8">
                <img
                  src="https://trysculptique.com/cdn/shop/files/before-min_png.png?v=1760688928"
                  alt="Before after results"
                  className="w-full max-w-[420px] mx-auto rounded-xl"
                />
              </div>

              {/* CTA */}
              <button className="w-full md:w-auto bg-black text-white px-10 py-4 rounded-md font-medium hover:opacity-90 transition">
                Try Lymphatic Drainage Risk-Free
              </button>

              {/* GUARANTEE */}
              <div className="flex items-center justify-center md:justify-center gap-3 mt-6 text-sm text-gray-800">
                <img
                  src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395"
                  alt="60 day guarantee"
                  className="w-5 h-5"
                />
                <span>60-Day Money-Back Guarantee</span>
              </div>
            </div>

            {/* RIGHT CONTENT – DESKTOP (to hơn) */}
            <div className="hidden lg:flex justify-end">
              <img
                src="https://trysculptique.com/cdn/shop/files/before-min_png.png?v=1760688928"
                alt="Before after results"
                className="w-full max-w-lg rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
