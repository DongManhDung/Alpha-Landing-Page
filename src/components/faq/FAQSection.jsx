import FAQItem from "./FAQItem";

const FAQS = [
  {
    q: "How is this different from lymphatic drops I saw on TikTok?",
    a: `Lymphatic drops have poor bioavailability—liquid ingredients pass through your digestive system too quickly to be properly absorbed. Most contain only milligrams of herbs (symbolic amounts, not therapeutic doses) and act as basic diuretics that pull water from your bloodstream, not from tissue swelling.
        Sculptique uses capsules with therapeutic doses (100–500mg per ingredient) that are properly absorbed and work at the cellular level to restore vessel function, break down protein clogs, and strengthen vessel walls—not just make you urinate more.`,
  },
  {
    q: "Why didn't my diet changes work?",
    a: `Your diet only addressed what goes INTO your system (inflammation from food). It didn't fix your body's broken ability to drain what's already there. That's why you could eat perfectly clean and still wake up bloated—the backed-up lymphatic waste was still pooling in your tissues.`,
  },
  {
    q: "How long until I see results?",
    a: `Most women notice something within the first week—feeling lighter, less bloated, morning puffiness fading faster. Visible changes happen by weeks 2–3. Transformation becomes undeniable by weeks 4–6. For full restoration, we recommend 90 days.`,
  },
  {
    q: "Is this safe? Any side effects?",
    a: `Sculptique contains 100% natural botanical ingredients used safely for centuries. Increased urination may occur in the first few days (expected). Serious side effects are extremely rare. Consult your healthcare provider if you have medical conditions or take prescriptions.`,
  },
  {
    q: "Can I take this with other supplements?",
    a: `Yes. Sculptique works well with most supplements. If you're taking blood thinners, diuretics, thyroid medication, or immune-suppressing drugs, consult your provider first.`,
  },
  {
    q: "How do I use it?",
    a: `Take 2 capsules daily with water. Any time of day (mornings preferred). With or without food—consistency matters most.`,
  },
  {
    q: "What if it doesn't work for me?",
    a: `You have 60 full days to try it. If you don't feel lighter, less bloated, or more energized—send it back for a full refund. You only keep Sculptique if it works for YOU.`,
  },
  {
    q: "Where is this manufactured?",
    a: `Made in the USA at an FDA-registered, GMP-certified facility. Every batch undergoes infrared spectroscopy, heavy metal testing, and third-party quality control.`,
  },
  {
    q: "Why isn't this in stores?",
    a: `To maintain strict quality control and avoid retail markups. Selling direct lets us deliver therapeutic doses at a fair price.`,
  },
  {
    q: "Is this vegan/gluten-free?",
    a: `Yes. 100% vegan, gluten-free, sugar-free, and free of artificial ingredients.`,
  },
];

export default function FAQSection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* TITLE */}
        <h2 className="text-center text-3xl md:text-4xl font-serif mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ LIST */}
        <div className="rounded-2xl overflow-hidden divide-y divide-white">
          {FAQS.map((question, index) => (
            <FAQItem
              key={index}
              question={question}
              index={index}
              total={FAQS.length}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-black text-white px-10 py-4 rounded-md font-medium hover:opacity-90 transition">
            Try Lymphatic Drainage Risk-Free
          </button>

          {/* GUARANTEE */}
          <div className="flex items-center justify-center gap-3 mt-6 text-sm text-gray-700">
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395"
              alt="60 days guarantee"
              className="w-6 h-6"
            />
            <span>60-Day Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
