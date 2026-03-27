import { motion } from "motion/react";

const services = [
  {
    icon: "🦷",
    title: "Teeth Cleaning",
    desc: "Professional scaling & polishing. Remove plaque, prevent gum disease.",
    benefits: [
      "Removes tartar buildup",
      "Prevents gum disease",
      "Brightens natural teeth",
    ],
    id: "Teeth Cleaning",
  },
  {
    icon: "🔬",
    title: "Root Canal Treatment",
    desc: "Pain-free RCT with latest technology. Save your natural tooth.",
    benefits: [
      "Completely painless",
      "Single session option",
      "Latest rotary systems",
    ],
    id: "Root Canal Treatment",
  },
  {
    icon: "😁",
    title: "Braces & Aligners",
    desc: "Metal braces, ceramic, or invisible aligners. Get your dream smile.",
    benefits: [
      "Metal, ceramic & clear",
      "Invisible aligners available",
      "Expert orthodontist",
    ],
    id: "Braces & Aligners",
  },
  {
    icon: "🦴",
    title: "Dental Implants",
    desc: "Permanent tooth replacement. Looks and feels like natural teeth.",
    benefits: [
      "Lifelong solution",
      "Natural look & feel",
      "Titanium grade quality",
    ],
    id: "Dental Implants",
  },
  {
    icon: "✨",
    title: "Teeth Whitening",
    desc: "Professional whitening up to 8 shades brighter. Safe & effective.",
    benefits: [
      "Up to 8 shades brighter",
      "Safe LED technology",
      "Lasting results",
    ],
    id: "Teeth Whitening",
  },
  {
    icon: "💎",
    title: "Smile Makeover",
    desc: "Complete smile transformation. Veneers, bonding, contouring.",
    benefits: [
      "Custom treatment plan",
      "Veneers & bonding",
      "Celebrity-grade results",
    ],
    id: "Smile Makeover",
  },
  {
    icon: "👶",
    title: "Pediatric Dentistry",
    desc: "Gentle, fun dental care for children. Fear-free environment.",
    benefits: [
      "Child-friendly approach",
      "Fun & colorful space",
      "Gentle techniques",
    ],
    id: "Pediatric Dentistry",
  },
];

type Svc = (typeof services)[0];

function ServiceCard({
  svc,
  i,
  onBook,
}: { svc: Svc; i: number; onBook: (s: string) => void }) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 border border-dental-border transition-all duration-300 cursor-pointer hover:shadow-card-hover hover:-translate-y-1 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.07 }}
      data-ocid={`services.item.${i + 1}`}
    >
      <div className="text-4xl mb-4">{svc.icon}</div>
      <h3 className="text-dental-navy font-bold text-lg mb-2">{svc.title}</h3>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{svc.desc}</p>
      <ul className="space-y-1 mb-5">
        {svc.benefits.map((b) => (
          <li key={b} className="flex items-center gap-2 text-xs text-gray-500">
            <span className="w-1.5 h-1.5 rounded-full bg-dental-green inline-block" />
            {b}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => onBook(svc.id)}
        data-ocid={`services.button.${i + 1}`}
        className="w-full text-center bg-dental-tint text-dental-navy font-semibold text-sm py-2.5 rounded-xl hover:bg-dental-green hover:text-white transition-all duration-300 border border-dental-border group-hover:bg-dental-green group-hover:text-white"
      >
        Book Now →
      </button>
    </motion.div>
  );
}

export default function Services({
  language,
  onBookAppointment,
}: { language: string; onBookAppointment: (service: string) => void }) {
  const sectionTitle =
    language === "hi" ? "हमारी प्रीमियम दंत सेवाएं" : "Our Premium Dental Services";
  return (
    <section id="services" className="py-20 bg-dental-tint">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-dental-navy/10 text-dental-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dental-navy">
            {sectionTitle}
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Comprehensive dental care using cutting-edge technology and
            compassionate touch.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((svc, i) => (
            <ServiceCard
              key={svc.id}
              svc={svc}
              i={i}
              onBook={onBookAppointment}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 lg:max-w-4xl lg:mx-auto">
          {services.slice(4).map((svc, i) => (
            <ServiceCard
              key={svc.id}
              svc={svc}
              i={i + 4}
              onBook={onBookAppointment}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
