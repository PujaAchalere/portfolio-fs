import { Mail, MessageCircle } from "lucide-react";

const WA = "https://wa.me/918630424991";

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="relative border-t border-white/10 py-10 mt-10"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-bebas text-2xl text-white">
          Faisal Media<span style={{ color: "var(--accent)" }}>.</span>
          <span className="ml-2 font-syne text-[11px] tracking-[0.25em] uppercase text-white/45">
            FAISAL MEDIA
          </span>
        </div>
      

        <div className="font-dm text-white/45 text-xs text-center">
          © 2026 Faisal · FAISAL MEDIA · Muradnagar, Ghaziabad
        </div>

        <div className="flex items-center gap-3">
          <a
            data-testid="footer-whatsapp"
            href={WA}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
          >
            <MessageCircle size={16} />
          </a>
          <a
            data-testid="footer-email"
            href="mailto:faisal.media28@gmail.com"
            aria-label="Email"
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};
