import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

const faqs = [
  {
    q: "Is root canal treatment painful?",
    a: "Modern root canal treatment with our advanced rotary systems is completely painless. We use powerful local anesthetics and the procedure typically takes just one session. Most patients are surprised by how comfortable it is!",
  },
  {
    q: "How much does a dental implant cost in India?",
    a: "At SmileCare, single dental implants start from ₹18,000. The cost varies based on the brand, bone condition, and any additional procedures needed. We offer easy EMI plans to make it affordable for everyone.",
  },
  {
    q: "How long does teeth whitening last?",
    a: "Professional teeth whitening results typically last 1-3 years depending on your diet, habits, and oral hygiene. We also provide a take-home maintenance kit to extend your results.",
  },
  {
    q: "At what age should children first visit the dentist?",
    a: "We recommend bringing children for their first dental visit by age 1 or within 6 months of their first tooth appearing. Early visits help establish good habits and prevent dental problems.",
  },
  {
    q: "What is the cost of braces in India?",
    a: "Braces at SmileCare start from ₹15,000 for metal braces, ₹25,000 for ceramic braces, and ₹45,000 for invisible aligners. Treatment duration is typically 12-24 months depending on your case.",
  },
  {
    q: "How often should I visit the dentist?",
    a: "We recommend visiting every 6 months for routine check-ups and cleaning. Regular visits help detect problems early and keep your smile healthy.",
  },
  {
    q: "Do you offer EMI/payment plans?",
    a: "Yes! We offer 0% interest EMI plans starting from ₹299/month through major banks and NBFCs. We also accept all major credit cards, debit cards, UPI, and online transfers.",
  },
  {
    q: "Are your treatments safe during pregnancy?",
    a: "Many dental treatments are safe during pregnancy, especially during the second trimester. We recommend informing us of your pregnancy so we can adjust treatments accordingly. Routine cleaning and fillings are generally safe.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-dental-tint text-dental-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dental-navy">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3">
            Everything you need to know about your dental care.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                className="border border-dental-border rounded-xl px-5 bg-white shadow-xs"
                data-ocid={`faq.item.${i + 1}`}
              >
                <AccordionTrigger className="text-dental-navy font-semibold text-left py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
