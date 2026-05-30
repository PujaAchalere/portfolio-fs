import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Work", id: "work" },
  { label: "Process", id: "process" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact", id: "contact" },
];

const WA_LINK = "https://wa.me/918307399295?text=Hi%20Faisal%2C%20I%27d%20like%20to%20discuss%20a%20project.";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <>
      <header
        data-testid="site-navbar"
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          scrolled
            ? "bg-[#07071c]/80 backdrop-blur-xl border-b border-[rgba(255,77,0,0.25)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
          <button
            data-testid="nav-logo"
            onClick={() => go("hero")}
            className="font-bebas text-3xl tracking-wide text-white"
          >
            Faisal Media<span style={{ color: "var(--accent)" }}>.</span>
          </button>

          <nav className="hidden lg:flex items-center gap-9">
            {LINKS.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-link-${l.id}`}
                onClick={() => go(l.id)}
                className="font-syne text-[13px] tracking-[0.18em] uppercase text-white/80 hover:text-[var(--accent)] transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              data-testid="nav-hire-me-btn"
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Hire Me
            </a>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile slide-in */}
      <div
        className={`fixed inset-0 z-[55] lg:hidden transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        data-testid="mobile-menu-overlay"
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <aside
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 right-0 h-full w-[78%] max-w-[340px] glass-strong border-l border-white/10 p-7 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <div className="font-bebas text-2xl">
              Faisal Media<span style={{ color: "var(--accent)" }}>.</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white p-2"
              data-testid="mobile-menu-close"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          <ul className="space-y-5">
            {LINKS.map((l) => (
              <li key={l.id}>
                <button
                  data-testid={`mobile-nav-link-${l.id}`}
                  onClick={() => go(l.id)}
                  className="font-bebas text-3xl tracking-wide text-white/90 hover:text-[var(--accent)]"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            data-testid="mobile-hire-me-btn"
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-10 w-full justify-center"
          >
            Hire Me
          </a>
        </aside>
      </div>
    </>
  );
};
