import { Facebook, Instagram, Star, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com" },
  { icon: Star, label: "Google Reviews", href: "https://www.google.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dental-navy text-white">
      <div className="max-w-7xl mx-auto px-4 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🦷</span>
              <div>
                <div className="font-bold text-xl">SmileCare</div>
                <div className="text-xs tracking-widest text-white/60 uppercase">
                  DENTAL
                </div>
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-5">
              World-class dental care with a compassionate touch. Trusted by
              5000+ patients across India.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 tracking-wide uppercase text-white/80">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                "Home",
                "About",
                "Services",
                "Gallery",
                "Pricing",
                "Blog",
                "Contact",
              ].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 tracking-wide uppercase text-white/80">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Teeth Cleaning",
                "Root Canal",
                "Dental Implants",
                "Teeth Whitening",
                "Braces & Aligners",
                "Smile Makeover",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 tracking-wide uppercase text-white/80">
              Clinic Hours
            </h4>
            <ul className="space-y-2 text-white/60 text-sm mb-5">
              <li>Mon – Sat: 9:00 AM – 8:00 PM</li>
              <li>Sunday: 10:00 AM – 2:00 PM</li>
              <li className="text-green-400 font-medium">🟢 24/7 Emergency</li>
            </ul>
            <h4 className="font-semibold text-sm mb-3 tracking-wide uppercase text-white/80">
              Contact
            </h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition-colors"
                >
                  📞 +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@smilecare.in"
                  className="hover:text-white transition-colors"
                >
                  📧 info@smilecare.in
                </a>
              </li>
              <li>📍 Connaught Place, New Delhi</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <p>© {year} SmileCare Dental Clinic. All rights reserved.</p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
