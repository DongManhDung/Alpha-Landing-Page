export default function TrustBadgesSection() {
  const items = [
    {
      img: "https://trysculptique.com/cdn/shop/files/Untitled_design_3.png?v=1760689800",
      text: "Your stomach is flat in the morning, but by evening you look six months pregnant.",
    },
    {
      img: "https://trysculptique.com/cdn/shop/files/Untitled_design_3_1.png?v=1760689799",
      text: 'Your ankles disappear into "kankles" by the end of the day.',
    },
    {
      img: "https://trysculptique.com/cdn/shop/files/Untitled_design_4.png?v=1760689801",
      text: "That dimpled, cottage cheese texture on your thighs won't go away no matter what you try.",
    },
    {
      img: "https://trysculptique.com/cdn/shop/files/Untitled_design_4_1.png?v=1760689799",
      text: "You feel foggy and exhausted even after a full night's sleep.",
    },
    {
      img: "https://trysculptique.com/cdn/shop/files/Untitled_design_3_2.png?v=1760689799",
      text: "You wake up stiff and achy, like your body aged overnight.",
    },
  ];

  return (
    <section className="bg-white py-16">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center font-serif text-3xl sm:text-4xl lg:text-4xl leading-tight text-gray-900">
          Why Your{" "}
          <span className="text-emerald-600">
            Bloating, Brain Fog & Swollen Legs
          </span>{" "}
          Are <br className="hidden sm:block" />
          Actually Connected
        </h2>

        <p className="mt-6 text-center text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
          If you're experiencing more than one of these symptoms, your body is
          trying to tell you something:
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="
              bg-white overflow-hidden
              rounded-xl
              flex sm:flex-col
              border border-gray-100
              h-full
            "
            >
              {/* Image */}
              <div className="w-1/2 sm:w-full flex-shrink-0">
                <img
                  src={item.img}
                  alt=""
                  className="
                  w-full h-full
                  sm:h-44
                  object-cover
                "
                />
              </div>

              {/* Text */}
              <div
                className="
                w-1/2 sm:w-full
                flex items-center sm:items-start
                px-4 py-3
                sm:p-4
                text-sm text-gray-900
                leading-relaxed
                bg-gray-100
                sm:flex-1
              "
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Image */}
        <div className="">
          {/* Desktop image */}
          <img
            src="https://trysculptique.com/cdn/shop/files/Group_7207.png?v=1760690771"
            alt="Root cause explanation"
            className="hidden sm:block w-5/6 object-contain justify-center mx-auto"
          />

          {/* Mobile image */}
          <img
            src="https://trysculptique.com/cdn/shop/files/Frame_1000003583.png?v=1760690769"
            alt="Root cause explanation"
            className="block sm:hidden w-full object-contain mt-5"
          />
        </div>
      </div>
    </section>
  );
}
