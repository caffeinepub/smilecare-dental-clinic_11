import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const cases = [
  {
    label: "Smile Makeover",
    patient: "Priya, 28",
    treatment: "Veneers + Whitening",
    beforeImg: "/assets/generated/before-after-1-before.dim_400x400.jpg",
    afterImg: "/assets/generated/before-after-1-after.dim_400x400.jpg",
  },
  {
    label: "Orthodontic Treatment",
    patient: "Rahul, 22",
    treatment: "Invisible Aligners",
    beforeImg: "/assets/generated/before-after-2-before.dim_400x400.jpg",
    afterImg: "/assets/generated/before-after-2-after.dim_400x400.jpg",
  },
  {
    label: "Braces Treatment",
    patient: "Aditya, 17",
    treatment: "Metal Braces",
    beforeImg: "/assets/generated/before-after-3-before.dim_400x400.jpg",
    afterImg: "/assets/generated/before-after-3-after.dim_400x400.jpg",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visible = 2;
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-dental-tint text-dental-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            Patient Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dental-navy">
            Real Patient Transformations
          </h2>
          <p className="text-gray-600 mt-3">
            See the stunning results our patients have achieved.
          </p>
        </motion.div>
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(calc(-${activeIndex} * (50% + 12px)))`,
            }}
          >
            {cases.map((c, i) => (
              <motion.div
                key={c.label}
                className="min-w-[calc(50%-12px)] flex-shrink-0 rounded-2xl overflow-hidden shadow-card border border-dental-border"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`gallery.item.${i + 1}`}
              >
                <div className="grid grid-cols-2 h-64">
                  <div className="relative overflow-hidden">
                    <img
                      src={c.beforeImg}
                      alt={`${c.patient} before ${c.treatment}`}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-gray-800/75 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                      BEFORE
                    </span>
                  </div>
                  <div className="relative overflow-hidden">
                    <img
                      src={c.afterImg}
                      alt={`${c.patient} after ${c.treatment}`}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 right-3 bg-dental-green text-white text-xs font-bold px-3 py-1 rounded-full">
                      AFTER
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-dental-navy">{c.label}</h3>
                      <p className="text-sm text-gray-500">
                        {c.patient} · {c.treatment}
                      </p>
                    </div>
                    <span className="text-2xl">✨</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
            disabled={activeIndex === 0}
            data-ocid="gallery.button"
            className="w-10 h-10 rounded-full border border-dental-border flex items-center justify-center hover:bg-dental-navy hover:text-white disabled:opacity-30 transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            data-ocid="gallery.primary_button"
            className="bg-dental-navy text-white font-semibold px-6 py-2.5 rounded-full hover:bg-dental-teal transition-all"
          >
            View All Results
          </button>
          <button
            type="button"
            onClick={() =>
              setActiveIndex((i) => Math.min(cases.length - visible, i + 1))
            }
            disabled={activeIndex >= cases.length - visible}
            data-ocid="gallery.button"
            className="w-10 h-10 rounded-full border border-dental-border flex items-center justify-center hover:bg-dental-navy hover:text-white disabled:opacity-30 transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
