import { createPortal } from "react-dom";

const MARK_ICON =
  "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285";

export default function NutritionModal({ open, onClose }) {
  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50">
      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* MODAL WRAPPER */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div
          className="
            relative w-full max-w-[380px]
            bg-white rounded-2xl
            shadow-2xl
            animate-fadeIn
          "
          onClick={(e) => e.stopPropagation()}
        >
          {/* CLOSE ICON */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="
              absolute right-3 top-3
              w-8 h-8
              rounded-full
              border border-red-400
              text-red-500
              flex items-center justify-center
              hover:bg-red-50
              transition
            "
          >
            ✕
          </button>

          {/* TITLE */}
          <h2 className="
            text-center text-[22px]
            font-serif font-medium
            pt-6 pb-4
          ">
            Nutritional Information
          </h2>

          {/* SUPPLEMENT IMAGE */}
          <div className="px-5">
            <img
              src="https://trysculptique.com/cdn/shop/files/ingredients-min.png?v=1758713223"
              alt="Supplement Facts"
              className="w-full"
            />
          </div>

          {/* CTA BUTTON */}
          <div className="px-5 mt-6">
            <button
              className="
                w-full bg-black text-white
                rounded-xl py-3.5
                text-sm font-medium
                hover:bg-neutral-900
                transition
              "
            >
              Try Lymphatic Drainage Risk-Free
            </button>
          </div>

          {/* FOOTER MARKS */}
          <div className="px-5 py-5">
            <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs text-gray-800">
              {[
                "Made & produced in the USA",
                "100% Natural Ingredients",
                "60-Day Money-Back Guarantee",
                "Free Shipping",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <img
                    src={MARK_ICON}
                    alt=""
                    className="w-4 h-4"
                  />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
