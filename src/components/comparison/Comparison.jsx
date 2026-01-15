const ICONS = {
  CHECK: "url('https://trysculptique.com/cdn/shop/files/check-mark_17013456_2_1.png?v=1760702838')",
  CROSS: "url('https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839')"
};

const POSITIVE_BENEFITS = [
  "Waste gets drained away",
  "Fluid stays balanced.",
  "Your body feels light and energized."
];

const NEGATIVE_EFFECTS = [
  "Vessel pumping weakens.",
  "One-way valves fail.",
  "Protein clogs form.",
  "Vessel walls become leaky."
];

const SYMPTOMS = [
  "That's why you're bloated.",
  "That's why your ankles swell.",
  "That's why you see cellulite.",
  "That's why you feel exhausted and foggy."
];

// Reusable ListItem component
function ListItem({ icon, text, textColor, iconSize = "w-5 h-5" }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className={`${iconSize} mt-1 bg-no-repeat bg-contain flex-shrink-0`}
        style={{ backgroundImage: icon }}
      />
      <span className={textColor}>{text}</span>
    </li>
  );
}

// Reusable List component
function List({ items, icon, textColor, className = "space-y-4", iconSize }) {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <ListItem 
          key={index} 
          icon={icon} 
          text={item} 
          textColor={textColor}
          iconSize={iconSize}
        />
      ))}
    </ul>
  );
}

export default function Comparison() {
  return (
    <section className="bg-white py-10 sm:py-10 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ================= BLOCK 1 ================= */}
        <div>
          {/* Title */}
          <h2 className="text-center font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900">
            Your{" "}
            <span className="text-emerald-600">Hidden Drainage System</span>
          </h2>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="space-y-3 text-gray-900 order-2 lg:order-1">
              <p className="text-lg leading-relaxed text-left">
                Your lymphatic system is your body's internal cleaning crew — a
                network of vessels that processes{" "}
                <strong className="font-semibold">
                  3–4 liters of cellular waste and excess fluid every single
                  day.
                </strong>
              </p>

              <p className="text-lg leading-relaxed text-left">
                When it's working properly, you don't even know it exists.
              </p>

              {/* Positive list */}
              <List 
                items={POSITIVE_BENEFITS}
                icon={ICONS.CHECK}
                textColor="text-green-600"
                className="space-y-4 text-base"
              />

              {/* Warning box */}
              <div className="bg-[#FFE3E3] border border-red-100 rounded-xl p-5 text-base text-left">
                But after age 35, declining estrogen hijacks this system’s
                ability to function.
              </div>

              {/* Negative list */}
              <List 
                items={NEGATIVE_EFFECTS}
                icon={ICONS.CROSS}
                textColor="text-red-700"
                className="space-y-4 text-base"
                iconSize="w-4 h-4"
              />

              <p className="text-lg leading-relaxed">
                Instead of processing and removing waste, it backs up in your
                tissues.
              </p>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <img
                src="https://trysculptique.com/cdn/shop/files/Frame_1484580366_1.png?v=1760701546"
                alt="Lymphatic system breakdown"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* ================= BLOCK 2 ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="https://trysculptique.com/cdn/shop/files/ChatGPT_Image_Oct_10_2025_at_03_26_38_PM_2.png?v=1760702096"
              alt="Fluid buildup comparison"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>

          {/* Text */}
          <div className="space-y-2 text-gray-900">
            <p className="text-xl font-semibold text-left">
              And it accumulates. Day after day. Week after week.
            </p>

            <p className="text-lg leading-relaxed text-left">
              That gallon of fluid your body should be draining every 24 hours?
              It's pooling in your stomach, your legs, your face — anywhere
              gravity and tissue structure allow it to settle.
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl p-5 space-y-3 text-left">
              <p>The metabolic waste your cells produce overnight? It's still sitting there at noon. At dinner. While you're trying to fall asleep.</p>
              <List 
                items={SYMPTOMS}
                icon={ICONS.CROSS}
                textColor="text-red-700"
                className="space-y-2"
                iconSize="w-4 h-4"
              />
            </div>

            <p className="text-lg leading-relaxed text-left font-semibold">
              Your cells are literally sitting in their own waste — and your
              body can’t flush it out.
            </p>

            <p className="text-lg leading-relaxed text-left">
              The longer this goes on, the worse it gets. More congestion. More
              inflammation. More pressure on an already compromised system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
