import { useState } from "react";
import NutritionModal from "./NutritionModal";

export default function HeroImage() {
  const images = [
    "/images/hero-b.jpg", // Default image
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard6.jpg?v=1760103685",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard8.jpg?v=1760103685",
  ];

  const [openNutrition, setOpenNutrition] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative">
      {/* Main image container */}
      <div className="relative h-80 sm:h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
        {/* Images */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Lymphatic Drainage Capsules ${index + 1}`}
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-transform duration-500 ease-in-out
              ${
                index === currentImageIndex
                  ? "translate-x-0"
                  : index < currentImageIndex
                  ? "-translate-x-full"
                  : "translate-x-full"
              }
            `}
          />
        ))}

        {/* Sale badge */}
        {/* Nếu là ảnh đầu tiên: Current index === 0 mới hiện img này */}
        {currentImageIndex === 0 && (
          <img
            src="/images/nysale.png"
            alt="New Years Sale"
            className="
            absolute right-3 top-3 z-10
            w-16 h-16
            sm:w-20 sm:h-20
            md:w-24 md:h-24
            object-contain
          "
          />
        )}

        {/* Mobile navigation buttons */}
        <button
          onClick={prevImage}
          className="
            absolute left-2 top-1/2 -translate-y-1/2 z-10
            bg-white/80 hover:bg-white
            rounded-full p-2 shadow-lg
            transition-all duration-200
            md:hidden
          "
        >
          <svg
            className="w-4 h-4 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextImage}
          className="
            absolute right-2 top-1/2 -translate-y-1/2 z-10
            bg-white/80 hover:bg-white
            rounded-full p-2 shadow-lg
            transition-all duration-200
            md:hidden
          "
        >
          <svg
            className="w-4 h-4 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Nutrition button */}
        {currentImageIndex === 0 && (
          <button
            onClick={() => setOpenNutrition(true)}
            className="
            absolute bottom-4 left-1/2 -translate-x-1/2 z-10
            rounded-full bg-white px-4 py-1.5
            sm:px-6 sm:py-2
            text-xs sm:text-sm font-medium shadow-lg
            hover:bg-gray-100 transition-colors
            flex items-center gap-1.5 sm:gap-2
          "
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1_cf2e7df4-c113-4c3a-be49-f876ec94d873.png?v=1766822629"
              alt="Leaves icon"
              className="w-3 h-3 sm:w-4 sm:h-4"
            />
            <span className="text-gray-500">Nutritional Information</span>
          </button>
        )}
      </div>

      {/* Desktop thumbnail grid */}
      <div className="hidden md:block mt-4">
        <div className="grid grid-cols-3 grid-rows-2 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => selectImage(index)}
              className={`
                relative rounded-lg overflow-hidden
                border-2 transition-all duration-200 
                ${
                  index === currentImageIndex
                    ? "border-green-500 ring-2 ring-green-500/30"
                    : "border-gray-200 hover:border-gray-300"
                }
              `}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover scale-[1.3]"
              />
              {index === currentImageIndex && (
                <div className="absolute inset-0"></div>
              )}
            </button>
          ))}
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 gap-6 mt-4">
          {/* Card 1 - 87% */}
          <div className="bg-gray-100 rounded-2xl p-8 text-center border-gray-300 border-2">
            <div className="relative w-32 h-32 mx-auto mb-6">
              {/* Progress Circle */}
              <svg
                className="w-32 h-32 transform -rotate-90"
                viewBox="0 0 120 120"
              >
                {/* Background circle */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#d1d5db"
                  strokeWidth="10"
                />
                {/* Progress circle (87%) */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${87 * 3.14} ${100 * 3.14}`}
                  strokeDashoffset="0"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              {/* Percentage Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-gray-900">87%</span>
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-4 leading-snug">
              reported less bloating and tiredness in the first 4 weeks*
            </h3>
            <p className="text-sm text-gray-500">
              *Based on a four-week independent customer panel
            </p>
          </div>

          {/* Card 2 - 91% */}
          <div className="bg-gray-100 rounded-2xl p-8 text-center border-gray-300 border-2">
            <div className="relative w-32 h-32 mx-auto mb-6">
              {/* Progress Circle */}
              <svg
                className="w-32 h-32 transform -rotate-90"
                viewBox="0 0 120 120"
              >
                {/* Background circle */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#d1d5db"
                  strokeWidth="10"
                />
                {/* Progress circle (91%) */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${91 * 3.14} ${100 * 3.14}`}
                  strokeDashoffset="0"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              {/* Percentage Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-gray-900">91%</span>
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-4 leading-snug">
              reported less puffiness and firmer skin in the first 4 weeks*
            </h3>
            <p className="text-sm text-gray-500">
              *Based on a four-week independent customer panel
            </p>
          </div>
        </div>
      </div>

      {/* Mobile thumbnail grid */}
      <div className="block md:hidden mt-4">
        <div className="grid grid-cols-3 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => selectImage(index)}
              className={`
                relative rounded-md overflow-hidden
                border-2 transition-all duration-200
                ${
                  index === currentImageIndex
                    ? "border-green-500 ring-1 ring-green-500/30"
                    : "border-gray-200 hover:border-gray-300"
                }
              `}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover scale-[1.75]"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Nutrition Modal */}
      <NutritionModal
        open={openNutrition}
        onClose={() => setOpenNutrition(false)}
      />
    </div>
  );
}
