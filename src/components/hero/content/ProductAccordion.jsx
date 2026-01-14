import { useState } from "react";

const ACCORDION_ITEMS = [
  {
    title: "Ingredients proven by science",
    content: (
      <>
        <p className="font-semibold mb-2 text-left">Sculptique Ingredients:</p>
        <ul className="list-disc pl-10 space-y-2 text-gray-700 text-left">
          <li>
            <strong>Echinacea purpurea Extract</strong> – Known for its
            anti-inflammatory properties, it may support skin health.
          </li>
          <li>
            <strong>Dandelion Extract</strong> – Traditionally used as a
            diuretic, it may help reduce water retention.
          </li>
          <li>
            <strong>Burdock Powder</strong> – Contains antioxidants that may
            promote skin clarity.
          </li>
          <li>
            <strong>Cleavers Extract</strong> – Believed to support lymphatic
            drainage and detoxification.
          </li>
          <li>
            <strong>Rutin</strong> – A flavonoid that may strengthen blood
            vessels and improve circulation.
          </li>
          <li>
            <strong>Bromelain Powder</strong> – An enzyme from pineapple that
            may reduce inflammation and support tissue repair.
          </li>
          <li>
            <strong>Lemon Powder</strong> – Rich in vitamin C, it may aid in
            collagen production and skin rejuvenation.
          </li>
          <li>
            <strong>Kelp Extract</strong> – A source of iodine and minerals that
            may support skin metabolism.
          </li>
        </ul>

        <p className="mt-4 text-gray-700">
          These natural ingredients work together to reduce puffiness, bloating,
          fluid retention.
        </p>
      </>
    ),
  },
  {
    title: "How does it actually work?",
    content: (
      <p className="text-gray-700 leading-relaxed text-left whitespace-pre-line">
        Sculptique works by improving blood flow and supporting lymphatic
        drainage to reduce fluid buildup that causes puffiness, inflammation,
        and water retention. It also reduces inflammation and boosts collagen
        production to help skin become firmer and smoother.
      </p>
    ),
  },
  {
    title: "Shipping and returns",
    content: (
      <p className="text-gray-700 leading-relaxed whitespace-pre-line text-left">
        All of Sculptique orders get FREE shipping straight from our USA
        warehouse. Orders are usually shipped out within 1–2 working days, and
        you should receive the order within 3–7 working days for domestic USA
        orders, and within 10 working days for International orders.
        {"\n\n"}
        We also offer a 60-day money back guarantee — if you are unsatisfied
        with our product, you can take advantage of our guarantee and ship back
        the product to us to get your return within 60 days of receiving your
        order.
      </p>
    ),
  },
];

export default function ProductAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mt-6 space-y-3">
      {ACCORDION_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="border border-gray-300 rounded-3xl overflow-hidden"
          >
            {/* Header */}
            <div
              className={`
            flex items-center justify-between px-5 py-4 cursor-pointer
            transition-colors
            ${isOpen ? "border-b border-gray-200" : ""}
            rounded-full
            `}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-sm font-medium text-gray-900">
                {item.title}
              </span>

              <span
                className={`
                    flex items-center justify-center w-8 h-8 rounded-full
                    transition-transform duration-300 ease-in-out
                    ${isOpen ? "rotate-45" : "rotate-0"}
                `}
              >
                <img
                  src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844"
                  alt="Toggle accordion"
                  className="w-5 h-5 object-contain"
                />
              </span>
            </div>

            {/* Content */}
            <div
              className={`
                transition-all duration-500 ease-in-out overflow-hidden
                ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}
                `}
            >
              <div className="px-5 pb-5 pt-3 text-sm text-gray-700">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
