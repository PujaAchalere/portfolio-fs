import { Reveal } from "../Reveal";
import { Check, Star } from "lucide-react";
import { toast } from "sonner";

const WA = "https://wa.me/918307399295";

const PACKAGES = [
  {
    name: "Starter",
    price: "₹9,999",
    period: "/mo",
    popular: false,
    features: [
      "8 Social Media Posts",
      "2 Reels",
      "Monthly Performance Report",
    ],
    msg: "Hi%20Faisal%2C%20I%27m%20interested%20in%20the%20Starter%20package%20(%E2%82%B99%2C999%2Fmo).",
  },
  {
    name: "Growth",
    price: "₹17,999",
    period: "/mo",
    popular: true,
    features: [
      "15 Social Media Posts",
      "4 Reels",
      "Meta Ads Management (ad spend billed separately)",
      "Bi-Weekly Report",
      "Event Creative Support",
    ],
    msg: "Hi%20Faisal%2C%20I%27m%20interested%20in%20the%20Growth%20package%20(%E2%82%B917%2C999%2Fmo).",
  },
  {
    name: "Authority",
    price: "₹26,999",
    period: "/mo",
    popular: false,
    features: [
      "Content Calendar",
      "8 Reels + 2 Long Videos",
      "Meta + Google Ads Management (ad spend billed separately)",
      "One Doctor Personal Branding",
      "Bi-Weekly Report",
      "Bi-Weekly Call",
    ],
    msg: "Hi%20Faisal%2C%20I%27m%20interested%20in%20the%20Authority%20package%20(%E2%82%B926%2C999%2Fmo).",
  },
];

export const Pricing = () => {
  const handleClick = (pkg) => {
    toast.success("Opening WhatsApp — talk to you soon!", {
      duration: 2500,
    });
    window.open(`${WA}?text=${pkg.msg}`, "_blank");
  };

  return (
    <section
      id="pricing"
      data-testid="section-pricing"
      className="py-28 lg:py-36"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="eyebrow">
              <span className="dot" /> Packages
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2
              data-testid="pricing-headline"
              className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] mt-5"
            >
              Simple, Transparent{" "}
              <span className="text-[var(--accent)]">Pricing</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="font-dm text-white/55 text-sm mt-5">
              Pick a tier or get a custom proposal. No hidden fees, ever.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-14 items-stretch">
          {PACKAGES.map((p, i) => (
            <Reveal delay={i * 130} key={p.name}>
              <div
                data-testid={`pricing-card-${p.name.toLowerCase()}`}
                className={`relative h-full p-8 rounded-2xl glass lift transition-all ${
                  p.popular
                    ? "border-[var(--accent)] shadow-[0_30px_80px_-30px_rgba(255,77,0,0.55)]"
                    : ""
                }`}
                style={
                  p.popular
                    ? { borderColor: "rgba(255,77,0,0.8)", borderWidth: 1.5 }
                    : {}
                }
              >
                {p.popular && (
                  <div
                    data-testid="pricing-popular-badge"
                    className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-syne tracking-[0.25em] uppercase text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent), #b53600)",
                      boxShadow: "0 8px 24px -8px rgba(255,77,0,0.7)",
                    }}
                  >
                    <Star size={11} fill="#fff" /> Most Popular
                  </div>
                )}

                <div className="font-syne text-[12px] tracking-[0.25em] uppercase text-white/55">
                  {p.name}
                </div>
                <div className="mt-4 flex items-end gap-1">
                  <span className="font-bebas text-6xl text-white leading-none">
                    {p.price}
                  </span>
                  <span className="font-dm text-white/50 pb-2">{p.period}</span>
                </div>

                <div className="h-px bg-white/10 my-7" />

                <ul className="space-y-3.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-white/75 text-sm font-dm"
                    >
                      <span
                        className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "rgba(255,77,0,0.15)",
                          border: "1px solid rgba(255,77,0,0.4)",
                        }}
                      >
                        <Check size={11} color="#ff4d00" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  data-testid={`pricing-cta-${p.name.toLowerCase()}`}
                  onClick={() => handleClick(p)}
                  className={`mt-8 w-full justify-center ${
                    p.popular ? "btn-primary" : "btn-ghost"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div
            data-testid="pricing-disclaimer"
            className="mt-12 max-w-2xl mx-auto rounded-2xl border-2 border-[var(--accent)]/60 bg-[var(--accent)]/[0.08] px-6 py-5 text-center"
            style={{
              boxShadow: "0 10px 40px -20px rgba(255,77,0,0.5)",
            }}
          >
            <p className="font-dm text-white text-sm sm:text-base font-bold leading-relaxed">
              <span className="text-[var(--accent)]">★</span> Ad spend is billed
              separately by the platform (Meta / Google). Custom packages
              available on request.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
