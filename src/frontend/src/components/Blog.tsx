import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "motion/react";

const posts = [
  {
    title: "How to Prevent Cavities: 10 Expert Tips from Dr. Sharma",
    excerpt:
      "Cavities are the most common dental problem in India. Here are evidence-based tips to keep your teeth cavity-free and maintain optimal oral health throughout your life.",
    category: "Prevention",
    date: "March 15, 2024",
    readTime: "5 min read",
    bgGradient: "from-blue-100 to-cyan-50",
    emoji: "🦷",
  },
  {
    title: "Cost of Root Canal Treatment in India 2024",
    excerpt:
      "A complete guide to RCT costs in India — from government hospitals to premium clinics. Learn what affects the price and how to get the best value for your treatment.",
    category: "Treatment Guide",
    date: "February 28, 2024",
    readTime: "7 min read",
    bgGradient: "from-green-100 to-emerald-50",
    emoji: "🔬",
  },
  {
    title: "Invisible Braces vs Traditional Braces: Which is Better?",
    excerpt:
      "Comparing clear aligners with traditional metal braces — effectiveness, cost, comfort, and aesthetics. Make an informed decision for your smile journey.",
    category: "Orthodontics",
    date: "January 10, 2024",
    readTime: "6 min read",
    bgGradient: "from-purple-100 to-violet-50",
    emoji: "😁",
  },
];

const catColors: Record<string, string> = {
  Prevention: "bg-blue-100 text-blue-700",
  "Treatment Guide": "bg-green-100 text-green-700",
  Orthodontics: "bg-purple-100 text-purple-700",
};

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-dental-tint">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-white text-dental-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            Dental Health Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dental-navy">
            Expert Dental Insights
          </h2>
          <p className="text-gray-600 mt-3">
            Stay informed with our expert guides and tips for better oral
            health.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-ocid={`blog.item.${i + 1}`}
            >
              <div
                className={`h-44 bg-gradient-to-br ${post.bgGradient} flex items-center justify-center relative`}
              >
                <span className="text-7xl opacity-60">{post.emoji}</span>
                <span
                  className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${catColors[post.category]}`}
                >
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-bold text-dental-navy leading-snug mb-2 text-base">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <button
                  type="button"
                  data-ocid={`blog.button.${i + 1}`}
                  className="flex items-center gap-2 text-dental-accent font-semibold text-sm hover:text-dental-navy transition-colors"
                >
                  Read More <ArrowRight size={15} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
