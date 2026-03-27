import {
  Award,
  Calendar,
  CheckCircle,
  MessageCircle,
  Phone,
  Shield,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import type { Language } from "../App";

export default function Hero({
  language,
  onBookAppointment,
}: { language: Language; onBookAppointment: () => void }) {
  const headline =
    language === "hi"
      ? "विश्वसनीय उन्नत दंत चिकित्सा"
      : "Advanced Dental Care You Can Trust";
  const bookLabel = language === "hi" ? "अपॉइंटमेंट बुक करें" : "Book Appointment";
  const callLabel = language === "hi" ? "अभी कॉल करें" : "Call Now";
  const badges = [
    { icon: Shield, text: "ISO Certified" },
    { icon: Award, text: "NABH Accredited" },
    { icon: CheckCircle, text: "20+ Years Experience" },
    { icon: Users, text: "5000+ Happy Patients" },
  ];
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "108px" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-dental.dim_1400x700.jpg')",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(14,58,83,0.88) 0%, rgba(14,58,83,0.72) 60%, rgba(27,90,115,0.6) 100%)",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 bg-dental-green/20 border border-dental-green/40 text-green-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              ⚡ Limited slots available today — Book now!
            </span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {headline}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            World-class dental treatments in the heart of India. Pain-free,
            affordable, and trusted by 5000+ patients.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <button
              type="button"
              onClick={onBookAppointment}
              data-ocid="hero.primary_button"
              className="flex items-center gap-2 bg-dental-green hover:bg-green-600 text-white font-semibold px-7 py-3.5 rounded-full text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <Calendar size={18} /> 📅 {bookLabel}
            </button>
            <a
              href="tel:+919876543210"
              data-ocid="hero.secondary_button"
              className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-dental-navy font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-300"
            >
              <Phone size={18} /> 📞 {callLabel}
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.secondary_button"
              className="flex items-center gap-2 border-2 border-dental-green text-dental-green hover:bg-dental-green hover:text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-300"
            >
              <MessageCircle size={18} /> 💬 WhatsApp
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="hidden lg:flex gap-3 mb-10 items-center"
          >
            <img
              src="/assets/generated/patient-treatment.dim_800x500.jpg"
              className="w-48 h-28 object-cover rounded-xl opacity-90 shadow-lg"
              alt="Patient treatment"
            />
            <img
              src="/assets/generated/happy-family.dim_800x500.jpg"
              className="w-48 h-28 object-cover rounded-xl opacity-90 shadow-lg"
              alt="Happy family"
            />
            <div className="text-white/80 text-sm ml-2 leading-relaxed">
              Real patients,
              <br />
              real results ✓
            </div>
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            {badges.map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 text-white text-sm font-medium"
              >
                <b.icon size={15} className="text-green-300" />
                {b.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <title>Wave decoration</title>
          <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" />
        </svg>
      </div>
    </section>
  );
}
