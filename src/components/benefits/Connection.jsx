export default function Connection() {
  return (
    <section className="bg-white py-5 sm:py-10 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-8 mb-5 sm:mb-5 lg:mb-5">
        <h2 className="text-center font-serif text-2xl sm:text-4xl lg:text-5xl text-gray-900">
          The Connection{" "}
          <span className="text-emerald-600">You've Been Missing</span>
        </h2>

        {/* Responsive Image */}
        <picture>
          {/* Desktop */}
          <source
            media="(min-width: 640px)"
            srcSet="https://trysculptique.com/cdn/shop/files/Frame_1000003590.png?v=1760690771"
            className="w-2/4 h-auto object-contain"
          />

          {/* Mobile */}
          <img
            src="https://trysculptique.com/cdn/shop/files/Frame_1000003590_1.png?v=1760690770"
            alt="The connection you've been missing"
            className="w-full h-auto object-contain"
          />
        </picture>
      </div>
    </section>
  );
}
