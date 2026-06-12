import { useState } from "react";
import { Reveal } from "../Reveal";
import { Phone, Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const WA = "https://wa.me/918630424991";

const CARDS = [
  {
    icon: Phone,
    label: "Call Direct",
    value: "+91 8630424991",
    href: "tel:+918630424991",
  },
  {
    icon: Mail,
    label: "Email Me",
    value: "faisal.media28@gmail.com",
    href: "mailto:faisal.media28@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat Instantly",
    href: `${WA}?text=Hi%20Faisal`,
  },
  {
    icon: MapPin,
    label: "Available For",
    value: "Remote Worldwide",
    href: null,
  },
];

const SERVICES = [
  "Web Development",
  "UI/UX Design",
  "React Application",
  "Portfolio Website",
  "Landing Page",
  "SEO & Optimization",
  "Graphic Design",
  "Video Editing",
  "Other",
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

    if (
      !form.name.trim() ||
      !form.contact.trim() ||
      !form.message.trim()
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    const message = encodeURIComponent(
`Hi Faisal,

Name: ${form.name}
Contact: ${form.contact}
Service: ${form.service}

Project Details:
${form.message}`
    );

    toast.success("Opening WhatsApp...", {
      duration: 2500,
    });

    window.open(`${WA}?text=${message}`, "_blank");
  };

  const onWhatsAppClick = () => {
    toast.success("Opening WhatsApp...", {
      duration: 2200,
    });
  };

  return (
    <section
      id="contact"
      className="py-28 lg:py-36"
      data-testid="section-contact"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Side */}
          <div className="lg:col-span-6">
            <Reveal>
              <span className="eyebrow">
                <span className="dot" />
                Get In Touch
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.92] mt-5">
                Let's Build Something{" "}
                <span className="text-[var(--accent)]">
                  Great.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="font-dm text-white/55 mt-5 max-w-md">
                Have a project, business idea, or creative challenge?
                Send me a message and let's discuss how we can bring
                it to life.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-3 mt-10">
              {CARDS.map((card, index) => {
                const Content = (
                  <div className="glass p-5 lift flex items-start gap-4 h-full">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,77,0,0.18), rgba(255,77,0,0.04))",
                        border:
                          "1px solid rgba(255,77,0,0.35)",
                      }}
                    >
                      <card.icon
                        size={18}
                        color="#ff4d00"
                        strokeWidth={1.7}
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="font-syne text-[10px] tracking-[0.25em] uppercase text-white/45">
                        {card.label}
                      </div>

                      <div className="font-dm text-white text-sm mt-1 truncate">
                        {card.value}
                      </div>
                    </div>
                  </div>
                );

                return (
                  <Reveal key={card.label} delay={index * 80}>
                    {card.href ? (
                      <a
                        href={card.href}
                        target={
                          card.href.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel="noreferrer"
                        onClick={
                          card.href.includes("wa.me")
                            ? onWhatsAppClick
                            : undefined
                        }
                      >
                        {Content}
                      </a>
                    ) : (
                      Content
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right Side Form */}
          <Reveal delay={220} className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              className="glass-strong rounded-2xl p-7 sm:p-9 border border-white/10"
            >
              <div className="font-bebas text-3xl text-white">
                Send a Message
              </div>

              <p className="font-dm text-white/55 text-sm mt-1">
                Your message will open in WhatsApp and be sent
                directly to me.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-7">
                <Field
                  label="Your Name"
                  value={form.name}
                  onChange={(v) =>
                    setForm({ ...form, name: v })
                  }
                  placeholder="John Doe"
                />

                <Field
                  label="Phone / Email"
                  value={form.contact}
                  onChange={(v) =>
                    setForm({ ...form, contact: v })
                  }
                  placeholder="you@example.com"
                />
              </div>

              <div className="mt-4">
                <label className="font-syne text-[10px] tracking-[0.25em] uppercase text-white/50">
                  Service
                </label>

                <select
                  value={form.service}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      service: e.target.value,
                    })
                  }
                  className="mt-2 w-full bg-white/[0.04] border border-white/10 focus:border-[var(--accent)] outline-none rounded-xl px-4 py-3 text-white font-dm text-sm"
                >
                  {SERVICES.map((service) => (
                    <option
                      key={service}
                      value={service}
                      className="bg-[#0d0d38]"
                    >
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-4">
                <label className="font-syne text-[10px] tracking-[0.25em] uppercase text-white/50">
                  Project Details
                </label>

                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  rows={5}
                  placeholder="Tell me about your project, goals, requirements and timeline..."
                  className="mt-2 w-full bg-white/[0.04] border border-white/10 focus:border-[var(--accent)] outline-none rounded-xl px-4 py-3 text-white placeholder:text-white/30 font-dm text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary mt-7 w-full justify-center"
              >
                Send Message
                <Send size={15} />
              </button>

              <p className="font-dm text-white/35 text-[11px] text-center mt-4">
                Clicking send will open WhatsApp with your message
                ready to send.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  value,
  onChange,
  placeholder,
}) => (
  <div>
    <label className="font-syne text-[10px] tracking-[0.25em] uppercase text-white/50">
      {label}
    </label>

    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="mt-2 w-full bg-white/[0.04] border border-white/10 focus:border-[var(--accent)] outline-none rounded-xl px-4 py-3 text-white placeholder:text-white/30 font-dm text-sm"
    />
  </div>
);
