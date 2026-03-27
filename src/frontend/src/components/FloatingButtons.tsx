import { ArrowUp, Calendar } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { SiWhatsapp } from "react-icons/si";

export default function FloatingButtons({
  onBookAppointment,
}: { onBookAppointment: () => void }) {
  const [showScroll, setShowScroll] = useState(false);
  const [showBook, setShowBook] = useState(false);
  useEffect(() => {
    const handler = () => {
      setShowScroll(window.scrollY > 400);
      setShowBook(window.scrollY > 600);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <>
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="floating.primary_button"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:-translate-y-1 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <SiWhatsapp size={26} />
      </a>
      <AnimatePresence>
        {showBook && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={onBookAppointment}
            data-ocid="floating.secondary_button"
            className="fixed bottom-24 right-6 z-50 flex items-center gap-2 bg-dental-navy text-white font-semibold px-5 py-3 rounded-full shadow-xl hover:bg-dental-teal hover:-translate-y-1 transition-all duration-300 text-sm"
          >
            <Calendar size={16} />
            Book Appointment
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-ocid="floating.button"
            className="fixed bottom-6 left-6 z-50 w-11 h-11 bg-white border border-dental-border text-dental-navy rounded-full flex items-center justify-center shadow-card hover:bg-dental-tint hover:-translate-y-1 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
