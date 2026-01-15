export default function WhyNotThis() {
  const items = [
    {
      img: "https://trysculptique.com/cdn/shop/files/X1.jpg?v=1760943360",
      title: "You cut out gluten, dairy, sugar.\nYou ate clean for months.",
      fail: "Your diet only addressed what goes IN. It didn't fix your body's broken ability to drain what's already there.",
    },
    {
      img: "https://trysculptique.com/cdn/shop/files/X2.jpg?v=1760943359",
      title: "You tried viral lymphatic drops\nfrom TikTok.",
      fail: "They're just pricey water with trace herbs. The “active ingredients” are destroyed by stomach acid, and even if absorbed, only act as a mild diuretic. No vessel repair, no protein breakdown—just expensive urine.",
    },
    {
      img: "https://trysculptique.com/cdn/shop/files/X3.jpg?v=1760943359",
      title: "You got lymphatic massage or\nbought compression socks.",
      fail: "Temporary manual movement. Within 24–48 hours, everything backed up again because your vessels still can't pump on their own.",
    },
  ];

  return (
    <section className="w-screen bg-[#F7F2E8] py-3 sm:py-10 lg:py-10 overflow-hidden relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="w-full px-0 sm:px-4">
        {/* Title */}
        <h2 className="text-center font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 px-4 md:px-0">
          Why Nothing Has <span className="text-emerald-600">Worked</span>
        </h2>

        {/* Cards */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="text-center bg-slate-100 rounded-xl p-4 md:p-6 flex flex-col items-center w-full h-full"
            >
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden w-full">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Title */}
              <p className="mt-6 text-sm sm:text-base text-gray-900 whitespace-pre-line text-center px-2">
                {item.title}
              </p>

              {/* Fail box */}
              <div className="mt-5 bg-[#FFE6E6] rounded-xl p-4 md:p-5 text-xs sm:text-sm text-gray-900 flex flex-col w-full flex-1">
                <p className="font-semibold mb-2 flex items-center justify-center gap-1 shrink-0">
                  Why it failed <span className="text-red-600">✕</span>
                </p>

                <p className="leading-relaxed">{item.fail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Illustration */}
        <div>
          {/* Desktop */}
          <img
            src="https://trysculptique.com/cdn/shop/files/Group_7207_1.png?v=1760694176"
            alt=""
            className="hidden md:block h-auto justify-center items-center w-4/5 mx-auto"
          />

          {/* Mobile */}
          <img
            src="https://trysculptique.com/cdn/shop/files/Frame_1000003583_1.png?v=1760694176"
            alt=""
            className="block md:hidden w-full h-auto mx-auto mt-10"
          />
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-4">
          <button className="bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:opacity-90 transition w-full max-w-sm md:w-auto">
            Try Lymphatic Drainage Risk-Free
          </button>

          <p className="text-sm text-gray-700 flex items-center gap-2">
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395"
              alt="60 days guarantee"
              className="w-4 h-4"
            />
            60 day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
