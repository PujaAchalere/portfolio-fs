import { Reveal } from "../Reveal";
import { ArrowRight } from "lucide-react";

const WA_LINK =
  "https://wa.me/918307399295?text=Hi%20Faisal%2C%20I%27d%20like%20to%20discuss%20a%20project.";

const Stat = ({ value, label, delay }) => (
  <Reveal delay={delay}>
    <div
      data-testid={`hero-stat-${label.replace(/\s+/g, "-").toLowerCase()}`}
      className="glass px-5 py-4 lift"
    >
      <div className="font-bebas text-4xl text-white leading-none">{value}</div>
      <div className="font-syne text-[11px] tracking-[0.2em] uppercase text-white/55 mt-2">
        {label}
      </div>
    </div>
  </Reveal>
);

export const Hero = () => {
  return (
    <section
      id="hero"
      data-testid="section-hero"
      className="relative min-h-[100vh] flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* floating blobs */}
      <div
        className="blob"
        style={{
          width: 420,
          height: 420,
          background: "rgba(255,77,0,0.35)",
          top: "-80px",
          left: "-120px",
          animationDelay: "0s",
        }}
      />
      <div
        className="blob"
        style={{
          width: 360,
          height: 360,
          background: "rgba(120,70,220,0.45)",
          bottom: "-80px",
          right: "-100px",
          animationDelay: "4s",
        }}
      />

      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-10 relative">
        <Reveal>
          <span className="eyebrow" data-testid="hero-availability-tag">
            <span className="dot" /> Available for Projects
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1
            data-testid="hero-headline"
            className="font-bebas text-white mt-6 leading-[0.86] tracking-tight"
            style={{
              fontSize: "clamp(72px, 13vw, 200px)",
            }}
          >
            FAISAL<span style={{ color: "var(--accent)" }}>.</span>
          </h1>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 mt-10 items-end">
          <Reveal delay={200} className="lg:col-span-7">
            <h2
              data-testid="hero-subheading"
              className="font-syne text-xl sm:text-2xl text-white/90 font-medium leading-snug"
            >
              Digital Marketing Executive{" "}
              <span className="text-[var(--accent)]">&</span> Creative Designer
            </h2>
            <p
              data-testid="hero-description"
              className="font-dm text-white/65 text-base sm:text-lg max-w-xl mt-5 leading-relaxed"
            >
              5+ years crafting healthcare brands, social campaigns &
              high-impact visuals that convert.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                data-testid="hero-view-work-btn"
                onClick={() =>
                  document
                    .getElementById("work")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary"
              >
                View My Work <ArrowRight size={16} />
              </button>
            </div>
          </Reveal>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Stat value="50+" label="Projects" delay={120} />
              <Stat value="5+" label="Years Exp" delay={180} />
              <Stat value="15+" label="Clients" delay={240} />
              <Stat value="3" label="Verticals" delay={300} />
            </div>
          </div>
        </div>

        {/* bottom decoration */}
        <Reveal delay={400}>
          <div className="mt-16 flex items-center gap-4 text-white/40 font-syne text-[11px] tracking-[0.3em] uppercase">
            <span className="h-px w-12 bg-white/20" />
            Scroll to explore
          </div>
        </Reveal>
      </div>
    </section>
  );
};
