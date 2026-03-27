import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useBackend } from "../backend";

const SERVICES = [
  "Teeth Cleaning",
  "Root Canal Treatment",
  "Braces & Aligners",
  "Dental Implants",
  "Teeth Whitening",
  "Smile Makeover",
  "Pediatric Dentistry",
];
const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

export default function BookingModal({
  open,
  onClose,
  preselectedService,
}: { open: boolean; onClose: () => void; preselectedService: string }) {
  const { actor } = useBackend();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: preselectedService,
    date: "",
    time: "",
    whatsapp: true,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setForm((p) => ({ ...p, service: preselectedService }));
      setSuccess(false);
    }
    if (!isOpen) onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.phone ||
      !form.service ||
      !form.date ||
      !form.time
    ) {
      toast.error("Please fill all required fields");
      return;
    }
    setSubmitting(true);
    try {
      await actor?.createAppointment(crypto.randomUUID(), {
        name: form.name,
        phone: form.phone,
        serviceType: form.service,
        preferredDate: form.date,
        preferredTime: form.time,
        whatsappConfirmation: form.whatsapp,
        createdAt: BigInt(Date.now()),
      });
      setSuccess(true);
      toast.success("Appointment booked! We'll confirm via WhatsApp shortly.");
    } catch {
      toast.error("Failed to book appointment. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="max-w-lg max-h-[90vh] overflow-y-auto"
        data-ocid="booking.dialog"
      >
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">🦷</span>
            <DialogTitle className="text-dental-navy text-xl font-bold">
              Book Your Appointment
            </DialogTitle>
          </div>
          {!success && (
            <p className="text-sm text-gray-500">
              ⚡ <strong>Book in 30 seconds</strong> — Instant WhatsApp
              confirmation
            </p>
          )}
        </DialogHeader>
        {success ? (
          <div data-ocid="booking.success_state" className="text-center py-10">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-dental-green font-bold text-xl mb-2">
              Appointment Booked!
            </h3>
            <p className="text-gray-600 mb-2">
              We'll confirm your appointment via WhatsApp shortly.
            </p>
            <p className="text-sm text-gray-500">📞 +91 98765 43210</p>
            <Button
              onClick={() => {
                setSuccess(false);
                onClose();
              }}
              data-ocid="booking.close_button"
              className="mt-6 bg-dental-green text-white hover:bg-green-600 rounded-full px-8"
            >
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div>
              <Label
                htmlFor="b-name"
                className="text-dental-navy font-medium text-sm mb-1.5 block"
              >
                Full Name *
              </Label>
              <Input
                id="b-name"
                placeholder="Your full name"
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                data-ocid="booking.input"
                className="border-dental-border"
              />
            </div>
            <div>
              <Label
                htmlFor="b-phone"
                className="text-dental-navy font-medium text-sm mb-1.5 block"
              >
                Phone Number *
              </Label>
              <Input
                id="b-phone"
                placeholder="+91 XXXXX XXXXX"
                value={form.phone}
                onChange={(e) =>
                  setForm((p) => ({ ...p, phone: e.target.value }))
                }
                data-ocid="booking.input"
                className="border-dental-border"
              />
            </div>
            <div>
              <Label className="text-dental-navy font-medium text-sm mb-1.5 block">
                Service *
              </Label>
              <Select
                value={form.service}
                onValueChange={(v) => setForm((p) => ({ ...p, service: v }))}
              >
                <SelectTrigger
                  data-ocid="booking.select"
                  className="border-dental-border"
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label
                htmlFor="b-date"
                className="text-dental-navy font-medium text-sm mb-1.5 block"
              >
                Preferred Date *
              </Label>
              <Input
                id="b-date"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                value={form.date}
                onChange={(e) =>
                  setForm((p) => ({ ...p, date: e.target.value }))
                }
                data-ocid="booking.input"
                className="border-dental-border"
              />
            </div>
            <div>
              <Label className="text-dental-navy font-medium text-sm mb-1.5 block">
                Preferred Time *
              </Label>
              <div className="grid grid-cols-3 gap-2">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, time: slot }))}
                    data-ocid="booking.toggle"
                    className={`py-2 rounded-lg text-sm font-medium border transition-all ${form.time === slot ? "bg-dental-green text-white border-dental-green" : "bg-white text-dental-navy border-dental-border hover:border-dental-accent"}`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-200">
              <Checkbox
                id="whatsapp"
                checked={form.whatsapp}
                onCheckedChange={(c) =>
                  setForm((p) => ({ ...p, whatsapp: c === true }))
                }
                data-ocid="booking.checkbox"
                className="border-green-400 data-[state=checked]:bg-green-500"
              />
              <Label
                htmlFor="whatsapp"
                className="text-sm text-green-700 font-medium cursor-pointer"
              >
                💬 Send confirmation on WhatsApp
              </Label>
            </div>
            <Button
              type="submit"
              disabled={submitting}
              data-ocid="booking.submit_button"
              className="w-full bg-dental-green hover:bg-green-600 text-white rounded-full font-semibold text-base py-5 shadow-lg"
            >
              {submitting ? (
                <>
                  <Loader2 size={18} className="mr-2 animate-spin" />
                  Booking...
                </>
              ) : (
                "📅 Confirm Appointment"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
