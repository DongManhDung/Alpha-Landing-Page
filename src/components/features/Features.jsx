export default function Features() {
  const FEATURES = [
    {
      icon: "https://trysculptique.com/cdn/shop/files/ship-min.png?v=1758713222",
      title: "Free Shipping from USA",
      desc: "On all orders",
    },
    {
      icon: "https://trysculptique.com/cdn/shop/files/support-min.png?v=175871321",
      title: "Naturally Supports Your Body",
      desc: "Promotes healthy immune cell functions",
    },
    {
      icon: "https://trysculptique.com/cdn/shop/files/natural-min.png?v=1758713216",
      title: "100% Natural Ingredients",
      desc: "8 active, natural ingredients",
    },
    {
      icon: "https://trysculptique.com/cdn/shop/files/60-min.png?v=1758713216",
      title: "Try it Risk Free for 60 Days",
      desc: "60-day money-back guarantee",
    },
  ];

  return (
    <section className="w-screen bg-[#F7F2E8] py-3 sm:py-10 lg:py-10 overflow-hidden relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          {FEATURES.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3"
            >
              {/* Icon */}
              <img
                src={item.icon}
                alt={item.title}
                className="w-7 h-7 md:w-9 md:h-9 object-contain"
              />

              {/* Title */}
              <p className="text-[14px] md:text-[15px] font-semibold text-gray-900">
                {item.title}
              </p>

              {/* Description */}
              <p className="text-[13px] md:text-[14px] text-gray-700 leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
