import { motion } from "motion/react";

const achievements = [
  {
    icon: "🏅",
    title: "ISO 9001:2015 Certified",
    desc: "International quality management standard",
  },
  {
    icon: "🏥",
    title: "NABH Accredited",
    desc: "National Accreditation Board for Hospitals",
  },
  {
    icon: "🦷",
    title: "IDA Member",
    desc: "Indian Dental Association member since 2004",
  },
  {
    icon: "🏆",
    title: "15+ National Awards",
    desc: "Recognized for excellence in dental care",
  },
  {
    icon: "📰",
    title: "Featured in Times of India",
    desc: "Recognized as top dental clinic in India",
  },
  {
    icon: "⭐",
    title: "Best Dentist Award 2023",
    desc: "Dr. Rajesh Sharma — Healthcare Excellence Award",
  },
];

export default function Achievements() {
  return (
    <section className="py-20 bg-dental-navy">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            Recognition & Trust
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Achievements & Certifications
          </h2>
          <p className="text-white/70 mt-3">
            Our commitment to excellence, recognized nationally and
            internationally.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="text-4xl mb-3">{a.icon}</div>
              <h3 className="font-bold text-white text-lg mb-1">{a.title}</h3>
              <p className="text-white/65 text-sm">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
