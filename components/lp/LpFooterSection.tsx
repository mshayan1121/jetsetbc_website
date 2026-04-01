export default function LpFooterSection() {
  return (
    <section
      className="py-16 sm:py-20"
      style={{ backgroundColor: "#0A1828" }}
      data-testid="awards-section"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* LEFT: Brand block */}
          <div>
            <div className="font-display font-bold text-xl tracking-wide mb-5">
              <span className="text-white">JETSET</span>{" "}
              <span style={{ color: "#D4AF37" }}>BUSINESS CENTER</span>
            </div>
            <div className="flex items-start gap-3 mb-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="shrink-0 mt-0.5"
              >
                <path d="M6 9H4a2 2 0 0 1-2-2V5h4" />
                <path d="M18 9h2a2 2 0 0 0 2-2V5h-4" />
                <path d="M12 17v4" />
                <path d="M8 21h8" />
                <path d="M6 5h12v4a6 6 0 0 1-12 0V5z" />
              </svg>
              <p className="font-accent text-sm text-cream-50/70 leading-relaxed">
                Award-Winning Workspace in Dubai. Providing world-class business environments since
                2003.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mb-4">
              {["BEST BUSINESS CENTER 2024", "BEST NEWCOMER 2023"].map((award) => (
                <span
                  key={award}
                  className="font-accent text-xs font-bold tracking-widest uppercase border border-gold-500/40 rounded px-4 py-2"
                  style={{ color: "#D4AF37" }}
                >
                  {award}
                </span>
              ))}
            </div>
            <p className="font-accent text-xs text-cream-50/40">Recognized by Letswork</p>
          </div>

          {/* RIGHT: CTA */}
          <div className="flex flex-col items-start">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-8">
              Ready to Get Started?
            </h2>
            <a
              href="#enquiry-form"
              className="inline-block px-8 py-4 font-accent font-semibold text-base"
              style={{ backgroundColor: "#D4AF37", color: "#0A1828", borderRadius: "4px" }}
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
