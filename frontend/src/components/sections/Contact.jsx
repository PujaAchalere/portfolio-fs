import { useState } from "react";
import { Reveal } from "../Reveal";
import { Phone, Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const WA = "https://wa.me/918307399295";

const CARDS = [
  { icon: Phone, label: "Call Direct", value: "+91 8630424991", href: "tel:+918630424991" },
  { icon: Mail, label: "Email Me", value: "faisal.media28@gmail.com", href: "mailto:faisal.media28@gmail.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat Instantly", href: `${WA}?text=Hi%20Faisal%21` },
  { icon: MapPin, label: "Location", value: "Muradnagar, Ghaziabad · IN", href: null },
];

const SERVICES = [
  "Healthcare Marketing",
  "Social Media Management",
  "Brand & Graphic Design",
  "Meta & Google Ads",
  "Exhibition / Event Design",
  "Video Editing",
  "Custom / Other",
];

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    service: SERVICES[0],
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim() || !form.message.trim()) {
      toast.error("Please fill in your name, contact and a short message.");
      return;
    }
    const text = `Hi Faisal,%0A%0AI'm ${encodeURIComponent(form.name)}.%0AContact: ${encodeURIComponent(form.contact)}%0AService: ${encodeURIComponent(form.service)}%0A%0A${encodeURIComponent(form.message)}`;
    toast.success("Opening WhatsApp — talk to you soon!", { duration: 2500 });
    window.open(`${WA}?text=${text}`, "_blank");
  };

  const onCardClick = () => {
    toast.success("Opening WhatsApp — talk to you soon!", { duration: 2200 });
  };

  return (
    <section
      id="contact"
      data-testid="section-contact"
      className="py-28 lg:py-36"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-6">
            <Reveal>
              <span className="eyebrow">
                <span className="dot" /> Get In Touch
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2
                data-testid="contact-headline"
                className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.92] mt-5"
              >
                Let's Build Something{" "}
                <span className="text-[var(--accent)]">Great.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="font-dm text-white/55 mt-5 max-w-md">
                Whether it's a new hospital launch, doctor branding, or a full
                social rebrand — I'd love to hear what you're working on.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-3 mt-10">
              {CARDS.map((c, i) => {
                const Inner = (
                  <div
                    data-testid={`contact-card-${c.label.replace(/\s+/g, "-").toLowerCase()}`}
                    className="glass p-5 lift flex items-start gap-4 h-full"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,77,0,0.18), rgba(255,77,0,0.04))",
                        border: "1px solid rgba(255,77,0,0.35)",
                      }}
                    >
                      <c.icon size={18} color="#ff4d00" strokeWidth={1.7} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-syne text-[10px] tracking-[0.25em] uppercase text-white/45">
                        {c.label}
                      </div>
                      <div className="font-dm text-white text-sm mt-1 truncate">
                        {c.value}
                      </div>
                    </div>
                  </div>
                );
                return (
                  <Reveal delay={i * 80} key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        onClick={
                          c.href.includes("wa.me") ? onCardClick : undefined
                        }
                      >
                        {Inner}
                      </a>
                    ) : (
                      Inner
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right form */}
          <Reveal delay={220} className="lg:col-span-6">
            <form
              data-testid="contact-form"
              onSubmit={handleSubmit}
              className="glass-strong rounded-2xl p-7 sm:p-9 border border-white/10"
            >
              <div className="font-bebas text-3xl text-white">
                Send a brief
              </div>
              <p className="font-dm text-white/55 text-sm mt-1">
                Replies hit your WhatsApp within hours.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-7">
                <Field
                  testId="contact-input-name"
                  label="Your name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  placeholder="Faisal"
                />
                <Field
                  testId="contact-input-contact"
                  label="Phone / Email"
                  value={form.contact}
                  onChange={(v) => setForm({ ...form, contact: v })}
                  placeholder="+91 / you@brand.com"
                />
              </div>

              <div className="mt-4">
                <label className="font-syne text-[10px] tracking-[0.25em] uppercase text-white/50">
                  Service
                </label>
                <select
                  data-testid="contact-select-service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="mt-2 w-full bg-white/[0.04] border border-white/10 focus:border-[var(--accent)] outline-none rounded-xl px-4 py-3 text-white font-dm text-sm transition-colors"
                >
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-[#0d0d38]">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-4">
                <label className="font-syne text-[10px] tracking-[0.25em] uppercase text-white/50">
                  Project details
                </label>
                <textarea
                  data-testid="contact-input-message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={5}
                  placeholder="Tell me about your brand, goals & timeline…"
                  className="mt-2 w-full bg-white/[0.04] border border-white/10 focus:border-[var(--accent)] outline-none rounded-xl px-4 py-3 text-white placeholder:text-white/30 font-dm text-sm resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                data-testid="contact-submit-btn"
                className="btn-primary mt-7 w-full justify-center"
              >
                Send Message <Send size={15} />
              </button>
              <p className="font-dm text-white/35 text-[11px] text-center mt-4">
                Submitting opens WhatsApp with your message pre-filled.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, value, onChange, placeholder, testId }) => (
  <div>
    <label className="font-syne text-[10px] tracking-[0.25em] uppercase text-white/50">
      {label}
    </label>
    <input
      data-testid={testId}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="mt-2 w-full bg-white/[0.04] border border-white/10 focus:border-[var(--accent)] outline-none rounded-xl px-4 py-3 text-white placeholder:text-white/30 font-dm text-sm transition-colors"
    />
  </div>
);
