import { Reveal } from "../Reveal";

const STEPS = [
  {
    n: "01",
    title: "Discovery",
    desc: "Goals, audience, competitors — we map the entire landscape before a single pixel.",
  },
  {
    n: "02",
    title: "Strategy",
    desc: "Content plan, campaign structure, KPIs. Every move tied to a measurable outcome.",
  },
  {
    n: "03",
    title: "Execution",
    desc: "Design, copy, scheduling and ad rollout — crisp, on-brand and on-time.",
  },
  {
    n: "04",
    title: "Results",
    desc: "Analytics, reporting and refinement. We double down on what works.",
  },
];

export const Process = () => {
  return (
    <section id="process" data-testid="section-process" className="py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <span className="eyebrow">
            <span className="dot" /> How I Work
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2
            data-testid="process-headline"
            className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] mt-5"
          >
            From Brief to <span className="text-[var(--accent)]">Launch</span>
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-9 left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((s, i) => (
              <Reveal delay={i * 140} key={s.n}>
                <div data-testid={`process-step-${i}`} className="relative">
                  <div
                    className="w-[72px] h-[72px] rounded-full glass flex items-center justify-center relative z-10"
                    style={{
                      borderColor: "rgba(255,77,0,0.4)",
                    }}
                  >
                    <span className="font-bebas text-3xl text-[var(--accent)]">
                      {s.n}
                    </span>
                  </div>
                  <div className="font-bebas text-3xl text-white mt-6">
                    {s.title}
                  </div>
                  <p className="font-dm text-white/55 text-sm mt-3 leading-relaxed max-w-[260px]">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
