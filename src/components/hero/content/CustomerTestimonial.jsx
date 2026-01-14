import RatingStars from "../../common/RatingStars";

export default function CustomerTestimonial() {
  return (
    <div className="mt-6 bg-[#f6f1e7] rounded-2xl p-5">
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        {/* Avatar */}
        <img
          src="https://trysculptique.com/cdn/shop/files/AI_Nurse_Holding_TORC_2_efcbd677-7242-4cb2-9f99-ad1e3726b19b.png?v=1752500889"
          alt="Margaret Ellison"
          className="w-12 h-12 rounded-full object-cover flex-shrink-0 mt-0.5"
        />

        <div className="flex flex-col">
          {/* Name + Verified */}
          <div className="flex items-center gap-2 flex-wrap mt-1">
            <span className="font-semibold text-gray-900 text-sm">
              Margaret Ellison | FL
            </span>

            <img
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_7966.png?v=1752068267"
            alt="Verified Customer"
            className="w-50 h-4  object-cover justify-center items-center"
            />
          </div>

          {/* Stars */}
          <div className="mt-1">
            <RatingStars rating={5} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="text-gray-800 text-sm leading-relaxed space-y-2">
        <p className="font-semibold text-left">
          Even my husband noticed… the spark came back.
        </p>

        <p className="text-left">
          After years of hiding under coverups, picking apart my body, and
          feeling disconnected, I finally feel at ease again. I feel less
          bloated, lighter, like my body is working with me not against me.
          These past months, I’ve been present. Even my marriage feels renewed,
          not just in how I look but in how I feel. It’s hard to explain, but
          once you try it you’ll get it. I’d recommend this to my closest
          friends without question.
        </p>

        <p></p>
      </div>
    </div>
  );
}
