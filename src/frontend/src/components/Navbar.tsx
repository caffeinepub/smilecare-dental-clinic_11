import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Language } from "../App";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({
  language,
  setLanguage,
  onBookAppointment,
}: {
  language: Language;
  setLanguage: (l: Language) => void;
  onBookAppointment: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  const bookLabel = language === "hi" ? "अपॉइंटमेंट बुक करें" : "Book Appointment";
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-dental-teal text-white text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>Premium Dental Care — SmileCare India</span>
          <div className="flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1 hover:text-green-300 transition-colors"
            >
              <Phone size={12} />
              <span>+91 98765 43210</span>
            </a>
            <span>📧 info@smilecare.in</span>
            <span>Mon-Sat: 9AM-8PM</span>
          </div>
        </div>
      </div>
      <nav
        className={`bg-dental-navy transition-all duration-300 ${scrolled ? "shadow-xl py-2" : "py-3"}`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2"
            data-ocid="nav.link"
          >
            <span className="text-2xl">🦷</span>
            <div className="leading-tight">
              <div className="text-white font-bold text-lg tracking-tight">
                SmileCare
              </div>
              <div
                className="text-xs tracking-widest uppercase"
                style={{ color: "#90c8e0" }}
              >
                DENTAL
              </div>
            </div>
          </a>
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                className="text-white/80 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLanguage(language === "en" ? "hi" : "en")}
              data-ocid="nav.toggle"
              className="hidden md:flex items-center gap-1 text-white/80 hover:text-white border border-white/30 rounded-full px-3 py-1 text-xs font-medium transition-all hover:border-white/60"
            >
              {language === "en" ? "🇮🇳 हि" : "🇬🇧 EN"}
            </button>
            <Button
              onClick={onBookAppointment}
              data-ocid="nav.primary_button"
              className="hidden md:flex bg-dental-green text-white hover:bg-green-600 rounded-full font-semibold text-sm px-5"
            >
              📅 {bookLabel}
            </Button>
            <button
              type="button"
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-ocid="nav.toggle"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="lg:hidden bg-dental-navy border-t border-white/10">
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="nav.link"
                  className="text-white/80 hover:text-white py-2 px-3 rounded-lg hover:bg-white/10 transition-all text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  onBookAppointment();
                  setMobileOpen(false);
                }}
                data-ocid="nav.primary_button"
                className="mt-2 bg-dental-green text-white hover:bg-green-600 rounded-full font-semibold"
              >
                📅 {bookLabel}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
