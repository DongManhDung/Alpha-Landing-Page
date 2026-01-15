import { useState } from "react";

export default function Ingredient() {
  const INGREDIENTS = [
    {
      title: "Reactivate Lymphatic Pumps",
      name: "Cleavers Extract",
      dose: "100mg",
      img: "https://trysculptique.com/cdn/shop/files/Frame_1484580382.png?v=1760698909",
      desc: `Restores rhythmic vessel contractions that move lymph through your system. Contains iridoids that "wake up" muscle cells in vessel walls. 2024 study showed enhanced immune cell activity for better waste clearance. \n [Study: Enhanced NK cell activity in immunosuppressed models]`,
    },
    {
      title: "Flush Excess Fluid",
      name: "Dandelion Extract",
      dose: "250mg",
      img: "https://trysculptique.com/cdn/shop/files/Frame_1484580382_1.png?v=1760939908",
      desc: `Proven gentle diuretic that increases fluid excretion without harsh side effects. Human trial showed statistically significant increase in urination frequency (p<0.05) and excretion ratio (p<0.001). \n [Study: First human pilot study on diuretic effects]`,
    },
    {
      title: "Break Down Protein Clogs",
      name: "Bromelain Powder",
      dose: "100mg",
      img: "https://trysculptique.com/cdn/shop/files/image_2.png?v=1760939909",
      desc: `Proteolytic enzyme that clears blockages preventing drainage. Breaks down fibrin proteins creating "sludge" in vessels. 2024 RCT showed significantly greater reductions in swelling than placebo. \n [Study: As effective as prescription NSAIDs for inflammation]`,
    },
    {
      title: "Strengthen Vessel Walls",
      name: "Rutin",
      dose: "100mg",
      img: "https://trysculptique.com/cdn/shop/files/image_3.png?v=1760939909",
      desc: `Reduces vessel permeability so fluid doesn't leak back into tissues. Clinical trials showed average 4.2 cm reduction in limb circumference over 6 months in lymphedema patients. \n [Study: Systematic review of 1,643 participants]`,
    },
    {
      title: "Reduce Inflammation",
      name: "Burdock Root Powder",
      dose: "200mg",
      img: "https://trysculptique.com/cdn/shop/files/Frame_1484580382_2.png?v=1760939909",
      desc: `Breaks the inflammation-congestion cycle. RCT showed significantly decreased inflammatory markers IL-6 and C-reactive protein (p<0.001). Also supports hormonal balance. \n [Study: 42-day trial in osteoarthritis patients]`,
    },
    {
      title: "Boost Immune Clearance",
      name: "Echinacea Purpurea Extract",
      dose: "500mg",
      img: "https://trysculptique.com/cdn/shop/files/image_4.png?v=1760939909",
      desc: `Enhances lymphocyte activity for better waste removal. Meta-analysis of 30 trials with 5,600+ participants showed 40% reduction in recurrent infections. \n [Study: Increased NK cell cytotoxic activity]`,
    },
    {
      title: "Support Metabolism",
      name: "Kelp Extract",
      dose: "30mg",
      img: "https://trysculptique.com/cdn/shop/files/Frame_1484580382_3.png?v=1760939909",
      desc: `Provides iodine for thyroid function and healthy metabolic rate. Sluggish thyroid = sluggish lymphatic drainage. Contains fucoxanthin shown to reduce body fat in human trials. \n [Study: Dose-dependent increase in TSH levels]`,
    },
    {
      title: "Antioxidant Protection",
      name: "Lemon Powder",
      dose: "50mg",
      img: "https://trysculptique.com/cdn/shop/files/Frame_1484580382_4.png?v=1760939910",
      desc: `Protects vessels from oxidative damage. RCT showed 145% improvement in vascular function (p<0.001). Supports circulation and metabolic health. \n [Study: Triple-masked trial in 90 participants]`,
    },
  ];

  function IngredientCard({ item }) {
    const [open, setOpen] = useState(false);

    return (
      <div className="border border-black p-4 flex flex-col transition-all duration-300">
        {/* CLICK AREA */}
        <button onClick={() => setOpen(!open)} className="w-full text-left">
          {/* TITLE */}
          <div className="flex items-center gap-2 text-[13px] font-medium text-emerald-700 mb-3 justify-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419"
              alt=""
              className="w-4 h-4"
            />
            {item.title}
          </div>

          {/* MAIN CONTENT */}
          <div className="flex flex-row sm:flex-col items-center sm:items-center gap-3">
            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain shrink-0"
            />

            {/* TEXT + ICON WRAPPER */}
            <div className="flex items-center justify-between w-full">
              {/* Text */}
              <p className="text-sm font-semibold text-gray-900 leading-snug text-left flex-1">
                {item.name} ({item.dose})
              </p>

              {/* Icon */}
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626"
                alt="expand"
                className={`w-6 h-4 sm:w-7 sm:h-5 opacity-60 transition-transform duration-300`}
              />
            </div>
          </div>
        </button>

        {/* ACCORDION CONTENT – ALWAYS FROM TOP */}
        <div
          className={`
                grid transition-all duration-500 ease-in-out
                ${
                  open
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0"
                }
            `}
        >
          <div className="overflow-hidden">
            <div className="text-[13px] leading-relaxed text-gray-700 space-y-2 text-left">
              {item.desc?.split("\n").map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="w-screen bg-[#F7F2E8] py-3 sm:py-10 lg:py-10 overflow-hidden relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center font-serif text-2xl sm:text-3xl md:text-4xl text-emerald-700 mb-4">
          The 8-Ingredient System{" "}
          <span className="text-black">
            That Restores What Hormones Once Maintained
          </span>
        </h2>

        <p className="text-center max-w-3xl mx-auto text-sm sm:text-base text-gray-800 mb-10 leading-relaxed">
          Sculptique is the only formula that addresses <b>ALL 6 mechanisms</b>{" "}
          of lymphatic dysfunction simultaneously—not with symbolic doses, but
          with therapeutic amounts based on clinical research.
          <br />
          Not just moving fluid temporarily. Not just reducing inflammation.
          <b> Complete restoration.</b>
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-black bg-white">
          {INGREDIENTS.map((item, idx) => (
            <IngredientCard key={idx} item={item} />
          ))}
        </div>

        {/* Bottom image */}
        <div className="mt-12">
          <img
            src="https://trysculptique.com/cdn/shop/files/Frame_1000003583_3.png?v=1760697982"
            alt=""
            className="
            w-full
            sm:w-8/12
            lg:w-5/12
            mx-auto
            h-auto
            object-contain
            "
          />
        </div>
      </div>
    </section>
  );
}
