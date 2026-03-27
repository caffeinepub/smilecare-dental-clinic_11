import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useBackend } from "../backend";

export default function Contact() {
  const { actor } = useBackend();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      toast.error("Please fill all fields");
      return;
    }
    setSubmitting(true);
    try {
      await actor?.createContactLead(crypto.randomUUID(), {
        name: form.name,
        phone: form.phone,
        message: form.message,
        createdAt: BigInt(Date.now()),
      });
      setSubmitted(true);
      toast.success("Message sent! We'll get back to you shortly.");
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-dental-tint">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-white text-dental-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dental-navy">
            Contact & Location
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-7 shadow-card mb-6">
              <h3 className="font-bold text-dental-navy text-xl mb-5">
                Clinic Information
              </h3>
              <div className="space-y-4">
                {[
                  {
                    Icon: Phone,
                    color: "text-dental-green",
                    title: "Phone",
                    content: (
                      <a
                        href="tel:+919876543210"
                        className="text-dental-accent hover:underline"
                      >
                        +91 98765 43210
                      </a>
                    ),
                  },
                  {
                    Icon: MessageCircle,
                    color: "text-green-500",
                    title: "WhatsApp",
                    content: (
                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dental-accent hover:underline"
                      >
                        +91 98765 43210
                      </a>
                    ),
                  },
                  {
                    Icon: Mail,
                    color: "text-dental-accent",
                    title: "Email",
                    content: (
                      <a
                        href="mailto:info@smilecare.in"
                        className="text-dental-accent hover:underline"
                      >
                        info@smilecare.in
                      </a>
                    ),
                  },
                  {
                    Icon: MapPin,
                    color: "text-red-500",
                    title: "Address",
                    content: (
                      <p className="text-gray-600 text-sm">
                        B-42, Connaught Place, New Delhi - 110001, India
                      </p>
                    ),
                  },
                  {
                    Icon: Clock,
                    color: "text-dental-navy",
                    title: "Clinic Hours",
                    content: (
                      <>
                        <p className="text-gray-600 text-sm">
                          Mon – Sat: 9:00 AM – 8:00 PM
                        </p>
                        <p className="text-gray-600 text-sm">
                          Sunday: 10:00 AM – 2:00 PM
                        </p>
                      </>
                    ),
                  },
                ].map(({ Icon, color, title, content }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Icon size={18} className={`${color} mt-0.5 shrink-0`} />
                    <div>
                      <div className="font-semibold text-dental-navy text-sm">
                        {title}
                      </div>
                      {content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card h-56">
              <iframe
                title="SmileCare Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4756534264856!2d77.21673491508063!3d28.63273938241734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1641000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl p-7 shadow-card">
              <h3 className="font-bold text-dental-navy text-xl mb-5">
                Send Us a Message
              </h3>
              {submitted ? (
                <div
                  data-ocid="contact.success_state"
                  className="text-center py-10"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <p className="text-dental-green font-semibold text-lg">
                    Message sent successfully!
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    We'll get back to you within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label
                      htmlFor="cn"
                      className="text-dental-navy font-medium text-sm mb-1.5 block"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="cn"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      data-ocid="contact.input"
                      className="border-dental-border"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="cp"
                      className="text-dental-navy font-medium text-sm mb-1.5 block"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="cp"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      data-ocid="contact.input"
                      className="border-dental-border"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="cm"
                      className="text-dental-navy font-medium text-sm mb-1.5 block"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="cm"
                      placeholder="How can we help you?"
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      rows={4}
                      data-ocid="contact.textarea"
                      className="border-dental-border resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={submitting}
                    data-ocid="contact.submit_button"
                    className="w-full bg-dental-navy hover:bg-dental-teal text-white rounded-full font-semibold"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
