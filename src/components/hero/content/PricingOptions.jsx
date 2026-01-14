import { useState } from "react";
import NewYearSaleBadge from "../../common/NewYearBadge";

export default function PricingOptions() {
  const [selectedOption, setSelectedOption] = useState(2); // Option 2 is selected by default

  const options = [
    {
      id: 1,
      title: "1 Bottle",
      subtitle: "1 bottle total | Save $27.99",
      price: "$31.96",
      originalPrice: "$59.95",
      background: "from-blue-50 to-green-50",
      border: "border-gray-200",
      benefits: [
        {
          icon: (
            <img
              src="https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916"
              alt="Delivery truck"
              className="w-6 h-6"
            />
          ),
          text: "Free USA Shipping",
        },
      ],
    },
    {
      id: 2,
      title: "Buy 2 Get 1 Free",
      subtitle: "3 bottles total | Save $115.93",
      price: "$63.92",
      originalPrice: "$179.85",
      background: "from-teal-50 to-green-100",
      border: "border-teal-500",
      hasNewYearBadge: true,
      benefits: [
        {
          icon: (
            <img
              src="https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916"
              alt="Delivery truck"
              className="w-6 h-6"
            />
          ),
          text: "Free USA Shipping",
        },
        {
          icon: (
            <img
              src="https://trysculptique.com/cdn/shop/files/download_5307610.png?v=1749555943"
              alt="Download"
              className="w-6 h-6"
            />
          ),
          text: "Free Anti-Bloating Protocol E-book",
        },
      ],
    },
    {
      id: 3,
      title: "Buy 3 Get 2 Free",
      subtitle: "5 bottles total | Save $203.87",
      price: "$95.88",
      originalPrice: "$299.75",
      background: "from-blue-50 to-green-50",
      border: "border-gray-200",
      benefits: [
        {
          icon: (
            <img
              src="https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916"
              alt="Delivery truck"
              className="w-6 h-6"
            />
          ),
          text: "Free USA Shipping",
        },
        {
          icon: (
            <img
              src="https://trysculptique.com/cdn/shop/files/download_5307610.png?v=1749555943"
              alt="Download"
              className="w-6 h-6"
            />
          ),
          text: "Free Anti-Bloating Protocol E-book",
        },
        {
          icon: (
            <img
              src="https://trysculptique.com/cdn/shop/files/Kaching-Bundles-Kaching-Bundles-Kaching-Bundles-gift-card_18054896_300x300_300x300_72117561-797d-4e48-9491-3bc1748ce974.png?v=1749556309"
              alt="Gift card"
              className="w-6 h-6"
            />
          ),
          text: "$20 Gift Card",
        },
      ],
    },
  ];

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  return (
    <div className="bg-[#f6f1e7] rounded-3xl p-4 sm:p-6">
      <div className="space-y-4">
        {options.map((option) => {
          const isSelected = selectedOption === option.id;
          return (
            <div
              key={option.id}
              className={`relative bg-[#ffffff] ${
                option.background
              } rounded-2xl border-2 border-teal-500 ${
                isSelected ? "" : option.border
              } cursor-pointer transition-all duration-200 hover:shadow-md`}
              onClick={() => handleOptionSelect(option.id)}
            >
              {/* New Year Sale Badge for Option 2 */}
              {option.hasNewYearBadge && (
                <div className="absolute -top-3 -right-3 z-10">
                  <NewYearSaleBadge className="w-[72px] h-auto" />
                </div>
              )}

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Interactive Radio Button */}
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOptionSelect(option.id);
                      }}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition
                                ${
                                  isSelected
                                    ? "border-emerald-600"
                                    : "border-emerald-400"
                                }
                                `}
                    >
                      {isSelected && (
                        <div className="w-3 h-3 rounded-full bg-emerald-600" />
                      )}
                    </div>

                    <div>
                      <div className="text-gray-900 font-bold text-lg text-left">
                        {option.title}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {option.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-gray-900 font-bold text-xl">
                      {option.price}
                    </div>
                    <div className="text-gray-500 line-through text-sm">
                      {option.originalPrice}
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="overflow-hidden rounded-b-xl">
                {option.benefits.map((benefit, index) => {
                  const isLast = index === option.benefits.length - 1;

                  return (
                    <div
                      key={index}
                      className={`
                        flex items-center gap-3 px-4 py-3 text-white
                        ${
                          isSelected
                            ? "bg-emerald-600 opacity-100"
                            : "bg-emerald-500 opacity-60"
                        }
                        ${!isLast ? "border-b border-white/30" : ""}
                        `}
                    >
                      {benefit.icon}
                      <span className="text-sm font-medium">
                        {benefit.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
