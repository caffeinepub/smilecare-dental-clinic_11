import { CheckCircle, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    name: "Basic",
    price: "₹999",
    highlight: false,
    badge: null as string | null,
    features: [
      "Initial Consultation",
      "Professional Teeth Cleaning",
      "Dental X-Ray",
      "Oral Health Assessment",
      "Treatment Plan",
    ],
    service: "Teeth Cleaning",
    cta: "Book Basic",
  },
  {
    name: "Standard",
    price: "₹2,999",
    highlight: true,
    badge: "Most Popular" as string | null,
    features: [
      "Everything in Basic",
      "Root Canal Treatment",
      "Dental Filling",
      "Professional Polishing",
      "Free Follow-up",
      "WhatsApp Support",
    ],
    service: "Root Canal Treatment",
    cta: "Book Standard",
  },
  {
    name: "Premium",
    price: "₹8,999",
    highlight: false,
    badge: "Best Value" as string | null,
    features: [
      "Complete Smile Makeover",
      "Veneers & Bonding",
      "Teeth Whitening",
      "Contouring & Reshaping",
      "3 Free Follow-ups",
      "Priority Appointments",
      "Aftercare Kit",
    ],
    service: "Smile Makeover",
    cta: "Book Premium",
  },
];

export default function Pricing({
  onBookAppointment,
}: { onBookAppointment: (s: string) => void }) {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-dental-tint text-dental-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dental-navy">
            Affordable Care Packages
          </h2>
          <p className="text-gray-600 mt-3">
            No hidden charges. World-class treatment at accessible prices.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-medium px-5 py-2 rounded-full">
            <Sparkles size={15} />
            Easy EMI starting ₹299/month | 0% interest plans available
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl p-7 border-2 transition-all duration-300 ${plan.highlight ? "border-dental-green shadow-2xl scale-105" : "border-dental-border shadow-card hover:shadow-card-hover"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-ocid={`pricing.item.${i + 1}`}
            >
              {plan.badge && (
                <span
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full ${plan.highlight ? "bg-dental-green text-white" : "bg-dental-navy text-white"}`}
                >
                  {plan.badge}
                </span>
              )}
              <div className="text-center mb-6">
                <h3
                  className={`text-xl font-bold mb-2 ${plan.highlight ? "text-dental-green" : "text-dental-navy"}`}
                >
                  {plan.name}
                </h3>
                <div
                  className={`text-4xl font-bold ${plan.highlight ? "text-dental-green" : "text-dental-navy"}`}
                >
                  {plan.price}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  One-time payment
                </div>
              </div>
              <ul className="space-y-3 mb-7">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle
                      size={16}
                      className="text-dental-green mt-0.5 shrink-0"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => onBookAppointment(plan.service)}
                data-ocid={`pricing.button.${i + 1}`}
                className={`w-full py-3 rounded-full font-semibold text-sm transition-all duration-300 ${plan.highlight ? "bg-dental-green text-white hover:bg-green-600 shadow-lg" : "bg-dental-tint text-dental-navy hover:bg-dental-navy hover:text-white"}`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
