import { Reveal } from "../Reveal";

const SKILLS = [
  "Healthcare Marketing",
  "Brand Strategy",
  "Social Media",
  "Graphic Design",
  "Video Editing",
  "Meta Ads",
];

const TIMELINE = [
  {
    period: "2026",
    role: "Freelancing",
    org: "Handling Multiple Projects",
  },
  {
    period: "2025",
    role: "Digital Marketing Executive",
    org: "Parida Red Lion Pvt",
  },
  {
    period: "2023",
    role: "Graphic Designer",
    org: "GB Enterprises Pvt. Ltd.",
  },
  {
    period: "2021",
    role: "Graphic Designer",
    org: "DDN Media",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      data-testid="section-about"
      className="py-28 lg:py-36"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <span className="eyebrow">
            <span className="dot" /> About Me
          </span>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mt-10">
          {/* Left: profile card */}
          <Reveal delay={100} className="lg:col-span-5">
            <div className="glass p-8 relative overflow-hidden">
              <div
                className="absolute -top-10 -right-10 w-44 h-44 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,77,0,0.35), transparent 70%)",
                }}
              />
              {/* <div
                className="aspect-[4/5] rounded-2xl flex items-end p-6 relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #1a1750 0%, #2a1a6a 50%, #0f0d2a 100%)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 20%, rgba(255,77,0,0.4), transparent 50%)",
                  }}
                />
                <div className="absolute top-6 right-6 font-bebas text-[110px] text-white/10 leading-none">
                  FS
                </div>
                <div className="relative">
                  <div className="font-bebas text-5xl text-white leading-none">
                    Faisal
                  </div>
                  <div className="font-syne text-[12px] tracking-[0.25em] uppercase text-[var(--accent)] mt-2">
                    Designer × Marketer
                  </div>
                </div>
              </div> */}
              {/* profile  */}

              <div
                className="aspect-[4/5] rounded-2xl flex items-end p-6 relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #1a1750 0%, #2a1a6a 50%, #0f0d2a 100%)",
                }}
              >
                {/* Profile Image */}
                <img
                  src="/faisal.jpg"
                  alt="Faisal"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Background Initials */}
                <div className="absolute top-6 right-6 font-bebas text-[110px] text-white/10 leading-none z-10">
                  FS
                </div>

                {/* Bottom Text */}
                <div className="relative z-10">
                  <div className="font-bebas text-5xl text-white leading-none">
                    Faisal
                  </div>

                  <div className="font-syne text-[12px] tracking-[0.25em] uppercase text-[var(--accent)] mt-2">
                    Designer × Marketer
                  </div>
                </div>
              </div>              {/*  */}

              <div className="flex flex-wrap gap-2 mt-6">
                {SKILLS.map((s) => (
                  <span
                    key={s}
                    data-testid={`about-skill-${s.replace(/\s+/g, "-").toLowerCase()}`}
                    className="px-3 py-1.5 rounded-full text-[11px] font-syne tracking-wider uppercase border border-white/15 text-white/80 bg-white/[0.04]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: bio + timeline */}
          <div className="lg:col-span-7">
            <Reveal delay={140}>
              <h2
                data-testid="about-headline"
                className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95]"
              >
                Design that <span className="text-[var(--accent)]">moves</span>.
                <br />
                Marketing that converts.
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p
                data-testid="about-bio"
                className="font-dm text-white/70 text-base sm:text-lg leading-relaxed mt-6 max-w-2xl"
              >
                I blend creative design with data-driven marketing. From
                hospital OPD growth campaigns to exhibition standees, I build
                brands that people remember and trust.
              </p>
            </Reveal>

            <div className="mt-12 relative">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--accent)]/60 via-white/10 to-transparent" />
              <div className="space-y-7">
                {TIMELINE.map((t, i) => (
                  <Reveal delay={260 + i * 120} key={t.period}>
                    <div
                      data-testid={`timeline-item-${i}`}
                      className="pl-12 relative"
                    >
                      <div
                        className="absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--accent), #b53600)",
                          boxShadow: "0 0 18px rgba(255,77,0,0.55)",
                        }}
                      >
                        <span className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <div className="font-syne text-[11px] tracking-[0.25em] uppercase text-[var(--accent)]">
                        {t.period}
                      </div>
                      <div className="font-bebas text-2xl text-white mt-1.5">
                        {t.role}
                      </div>
                      <div className="font-dm text-white/55 text-sm mt-0.5">
                        {t.org}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
};
