import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    avatar: "PS",
    img: "/assets/generated/testimonial-1.dim_200x200.jpg",
    treatment: "Smile Makeover",
    review:
      "Dr. Rajesh is truly magical with his hands! I had years of dental anxiety but he made the entire process completely painless. My smile has completely transformed and I feel so confident now.",
  },
  {
    name: "Rahul Mehta",
    location: "Mumbai",
    avatar: "RM",
    img: "/assets/generated/testimonial-2.dim_200x200.jpg",
    treatment: "Invisible Aligners",
    review:
      "Got invisible aligners and the results are fantastic. The clinic is super modern and hygienic. Staff is so friendly. Highly recommend SmileCare to anyone looking for world-class dental care!",
  },
  {
    name: "Anjali Singh",
    location: "Bangalore",
    avatar: "AS",
    img: "/assets/generated/testimonial-3.dim_200x200.jpg",
    treatment: "Root Canal",
    review:
      "Had root canal treatment here and honestly it was painless! I was so scared but the doctor explained everything and made me feel at ease. The modern technology makes all the difference.",
  },
  {
    name: "Vikram Patel",
    location: "Ahmedabad",
    avatar: "VP",
    img: null,
    treatment: "Dental Implants",
    review:
      "Got dental implants done and they look and feel 100% natural. The pricing was transparent, no hidden charges. Best dental experience in my 45 years of life. Forever grateful!",
  },
  {
    name: "Sunita Rao",
    location: "Hyderabad",
    avatar: "SR",
    img: null,
    treatment: "Teeth Whitening",
    review:
      "Teeth whitening results are absolutely stunning — 8 shades brighter is no joke! Friends can't stop complimenting my smile. The procedure was quick and completely comfortable.",
  },
  {
    name: "Arjun Kumar",
    location: "Chennai",
    avatar: "AK",
    img: null,
    treatment: "Braces",
    review:
      "My son got braces here and Dr. Sharma is so patient and gentle with kids. The clinic has a fun waiting area for children. Would 100% recommend for pediatric dental care as well!",
  },
];

const avatarColors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-pink-500",
  "bg-teal-500",
];
const STARS = [1, 2, 3, 4, 5];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-dental-tint">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-white text-dental-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            Patient Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dental-navy">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 mt-3">
            Real stories from real patients who trusted us with their smiles.
          </p>
          <div className="flex items-center justify-center gap-1 mt-3">
            {STARS.map((s) => (
              <Star
                key={s}
                size={20}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="ml-2 font-bold text-dental-navy">4.9/5</span>
            <span className="text-gray-500 ml-1">(1,200+ reviews)</span>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-card border border-dental-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <div className="flex gap-0.5 mb-3">
                {STARS.map((s) => (
                  <Star
                    key={s}
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                "{t.review}"
              </p>
              <div className="flex items-center gap-3">
                {t.img ? (
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                  />
                ) : (
                  <div
                    className={`w-10 h-10 rounded-full ${avatarColors[i]} text-white font-bold text-sm flex items-center justify-center shrink-0`}
                  >
                    {t.avatar}
                  </div>
                )}
                <div>
                  <div className="font-semibold text-dental-navy text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {t.location} · {t.treatment}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
