import { Button } from "@/components/ui/button";
import { Award, CheckCircle, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import type { Language } from "../App";

const qualifications = [
  "BDS - Maulana Azad Institute of Dental Sciences",
  "MDS (Orthodontics) - AIIMS New Delhi",
  "Former HOD, Dept. of Orthodontics, AIIMS Delhi",
  "Indian Dental Association (IDA) Member",
  "International Association of Orthodontists",
  "15+ National & International Awards",
];

export default function AboutDoctor({
  language,
  onBookAppointment,
}: { language: string; onBookAppointment: () => void }) {
  const bookLabel = language === "hi" ? "अपॉइंटमेंट बुक करें" : "Book Appointment";
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/generated/doctor-portrait.dim_600x700.jpg"
                alt="Dr. Rajesh Sharma"
                className="w-full h-auto object-cover"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background:
                    "linear-gradient(to top, rgba(14,58,83,0.95), transparent)",
                }}
              >
                <p className="text-white font-bold text-xl">
                  Dr. Rajesh Sharma
                </p>
                <p className="text-blue-200 text-sm">BDS, MDS (Orthodontics)</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-dental-green text-white rounded-2xl p-4 shadow-xl text-center">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-xs font-medium">Years Exp.</div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <img
                src="/assets/generated/clinic-interior.dim_800x500.jpg"
                alt="Our Clinic"
                className="rounded-xl w-full h-24 object-cover shadow"
              />
              <img
                src="/assets/generated/dental-checkup.dim_800x500.jpg"
                alt="Dental Checkup"
                className="rounded-xl w-full h-24 object-cover shadow"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 bg-dental-tint text-dental-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <GraduationCap size={16} />
              Meet Your Doctor
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dental-navy mb-2">
              Dr. Rajesh Sharma
            </h2>
            <p className="text-dental-accent font-semibold mb-1">
              Chief Dental Officer & Founder, SmileCare
            </p>
            <div className="flex items-center gap-2 mb-5">
              <Award size={16} className="text-yellow-500" />
              <span className="text-sm text-gray-500">
                Best Dentist Award 2023 — Times of India
              </span>
            </div>
            <blockquote className="border-l-4 border-dental-green pl-4 py-2 mb-6 bg-dental-tint rounded-r-xl">
              <p className="text-gray-700 italic leading-relaxed">
                "I believe dentistry should be fear-free and affordable for
                every Indian family. My mission is to transform smiles and
                transform lives — one patient at a time."
              </p>
            </blockquote>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
              {qualifications.map((q) => (
                <div key={q} className="flex items-start gap-2">
                  <CheckCircle
                    size={16}
                    className="text-dental-green mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-gray-700">{q}</span>
                </div>
              ))}
            </div>
            <Button
              onClick={onBookAppointment}
              data-ocid="about.primary_button"
              className="bg-dental-green hover:bg-green-600 text-white rounded-full font-semibold px-8 shadow-lg"
            >
              📅 {bookLabel}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
