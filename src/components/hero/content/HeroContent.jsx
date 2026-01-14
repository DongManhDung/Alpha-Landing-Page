import RatingStars from "../../common/RatingStars";
import PricingOptions from "./PricingOptions";
import PurchaseActions from "./PurchaseActions";
import CustomerTestimonial from "./CustomerTestimonial";
import ProductAccordion from "./ProductAccordion";
import Benefits from "./Benefits";
import CliniciansChoice from "./CliniciansChoice";


export default function HeroContent() {
  return (
    <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
      {/* Rating */}
      <div className="flex items-center gap-2 flex-wrap">
        <RatingStars rating={5} />
        <span className="text-xs sm:text-sm text-gray-600">
          4.8/5 Excellent | Based on 2381 Reviews
        </span>
      </div>

      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-2xl leading-tight break-words text-gray-900 text-left w-6/6">
        New Maximum Potency Formula – Lymphatic Drainage Capsules by Sculptique™
      </h1>

      {/* Benefits */}
      <Benefits />

      {/* Clinicians' Choice */}
      <CliniciansChoice />

      {/* Pricing Section */}
      <PricingOptions />

      {/* Purchase Actions */}
      <PurchaseActions />

      {/* Testimonial */}
      <CustomerTestimonial />

      {/* Product Accordion */}
      <ProductAccordion />

    </div>
  );
}
