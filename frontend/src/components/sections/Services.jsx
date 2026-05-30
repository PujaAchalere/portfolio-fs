import { Reveal } from "../Reveal";
import {
  Stethoscope,
  Share2,
  Palette,
  Target,
  Megaphone,
  Film,
} from "lucide-react";

const SERVICES = [
  {
    icon: Stethoscope,
    title: "Healthcare Digital Marketing",
    desc: "OPD campaigns, doctor branding, patient acquisition that delivers measurable footfall growth.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "Monthly content calendars, scroll-stopping Reels, and engagement strategies that build community.",
  },
  {
    icon: Palette,
    title: "Brand Building & Design",
    desc: "Logos, brand kits and visual identities crafted to feel premium and instantly recognisable.",
  },
  {
    icon: Target,
    title: "Meta & Google Ads",
    desc: "Performance campaigns with retargeting funnels, creative testing and clean ROI tracking.",
  },
  {
    icon: Megaphone,
    title: "Exhibition & Event Design",
    desc: "Standees, hoardings, brochures and event creatives that command attention on the floor.",
  },
  {
    icon: Film,
    title: "Video Editing & Production",
    desc: "Reels, promos and YouTube content edited for retention, branding and conversion.",
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      data-testid="section-services"
      className="py-28 lg:py-36"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="dot" /> What I Do
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h2
                data-testid="services-headline"
                className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] mt-5"
              >
                Services Built for{" "}
                <span className="text-[var(--accent)]">Real Growth</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={180}>
            <p className="font-dm text-white/55 max-w-sm text-sm leading-relaxed">
              End-to-end creative and performance work — from first brief to
              monthly analytics. One operator, full ownership.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal delay={i * 90} key={s.title}>
              <article
                data-testid={`service-card-${i}`}
                className="glass p-7 h-full lift group relative overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,77,0,0.35), transparent 70%)",
                  }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 relative"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,77,0,0.18), rgba(255,77,0,0.04))",
                    border: "1px solid rgba(255,77,0,0.35)",
                  }}
                >
                  <s.icon size={22} color="#ff4d00" strokeWidth={1.7} />
                </div>
                <h3 className="font-bebas text-2xl text-white tracking-wide">
                  {s.title}
                </h3>
                <p className="font-dm text-white/60 text-sm mt-3 leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[11px] font-syne tracking-[0.2em] uppercase text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="h-px w-6 bg-[var(--accent)]" />
                  Explore
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
