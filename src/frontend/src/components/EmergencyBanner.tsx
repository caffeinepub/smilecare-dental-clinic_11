import { Phone } from "lucide-react";
import { motion } from "motion/react";

export default function EmergencyBanner() {
  return (
    <section
      className="py-14"
      style={{
        background:
          "linear-gradient(135deg, #c0392b 0%, #e74c3c 40%, #e67e22 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-5xl mb-4">🚨</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            24/7 Emergency Dental Care Available
          </h2>
          <p className="text-white/90 text-lg mb-7">
            Toothache? Broken tooth? We're here for you anytime. Don't suffer in
            pain.
          </p>
          <a
            href="tel:+919876543210"
            data-ocid="emergency.primary_button"
            className="inline-flex items-center gap-3 bg-white text-red-600 font-bold px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <Phone size={22} />
            Call Emergency: +91 98765 43210
          </a>
        </motion.div>
      </div>
    </section>
  );
}
