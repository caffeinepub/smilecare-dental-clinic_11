import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import AboutDoctor from "./components/AboutDoctor";
import Achievements from "./components/Achievements";
import Blog from "./components/Blog";
import BookingModal from "./components/BookingModal";
import Contact from "./components/Contact";
import EmergencyBanner from "./components/EmergencyBanner";
import FAQ from "./components/FAQ";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import StatsStrip from "./components/StatsStrip";
import Testimonials from "./components/Testimonials";

export type Language = "en" | "hi";

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openBooking = (service?: string) => {
    setSelectedService(service || "");
    setBookingOpen(true);
  };

  return (
    <div className="font-poppins">
      <Toaster position="top-right" />
      <Navbar
        language={language}
        setLanguage={setLanguage}
        onBookAppointment={() => openBooking()}
      />
      <main>
        <Hero language={language} onBookAppointment={() => openBooking()} />
        <StatsStrip />
        <AboutDoctor
          language={language}
          onBookAppointment={() => openBooking()}
        />
        <Services language={language} onBookAppointment={openBooking} />
        <Gallery />
        <Testimonials />
        <Achievements />
        <Pricing onBookAppointment={openBooking} />
        <EmergencyBanner />
        <Contact />
        <FAQ />
        <Blog />
      </main>
      <Footer />
      <FloatingButtons onBookAppointment={() => openBooking()} />
      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedService={selectedService}
      />
    </div>
  );
}
