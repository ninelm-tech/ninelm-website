/* eslint-disable @next/next/no-img-element */

// Ninelm brand colours
// Blue:       #1B6FEB
// Dark navy:  #0D1B3E
// Mid navy:   #0a1628
// Font:       Aeonik (substitute: Plus Jakarta Sans)

function LogoMark({ size = 32, white = false }: { size?: number; white?: boolean }) {
  const fill = white ? "#ffffff" : "#1B6FEB";
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill={fill} />
      <path
        d="M10 10h5.5l9 13V10H30v20h-5.5l-9-13V30H10V10z"
        fill="white"
        fillOpacity={white ? "0.15" : "1"}
      />
      {white && (
        <path
          d="M10 10h5.5l9 13V10H30v20h-5.5l-9-13V30H10V10z"
          fill="white"
        />
      )}
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0a1628", color: "#ffffff" }}>

      {/* ── Nav ─────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 inset-x-0 z-50 backdrop-blur-md"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", backgroundColor: "rgba(10,22,40,0.85)" }}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <LogoMark size={28} white />
            <span className="text-base font-semibold tracking-tight text-white">Ninelm</span>
          </div>
          <a
            href="mailto:hello@ninelm.com"
            className="text-sm transition-colors text-white/50 hover:text-white"
          >
            hello@ninelm.com
          </a>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-44 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Blue pill label */}
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-8 text-xs font-semibold tracking-widest uppercase"
            style={{ backgroundColor: "rgba(27,111,235,0.15)", color: "#1B6FEB", border: "1px solid rgba(27,111,235,0.3)" }}>
            Lagos, Nigeria
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-[72px] font-extrabold leading-[1.04] tracking-tight max-w-3xl">
            Building technology
            <br />
            <span style={{ color: "#1B6FEB" }}>for Africa.</span>
          </h1>

          <p className="mt-7 text-lg max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            We build products that solve real, everyday problems for Africans.
            Starting with vehicle recovery — and just getting started.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#1B6FEB" }}
            >
              See our products
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="mailto:hello@ninelm.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-colors"
              style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
      </div>

      {/* ── Products ─────────────────────────────────────────── */}
      <section id="products" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#1B6FEB" }}>
            Products
          </p>
          <h2 className="text-3xl font-bold tracking-tight mb-12" style={{ color: "#ffffff" }}>
            What we&apos;re building
          </h2>

          {/* LRR card */}
          <div
            className="rounded-2xl p-8 sm:p-10 max-w-2xl transition-all duration-300"
            style={{
              backgroundColor: "#0D1B3E",
              border: "1px solid rgba(27,111,235,0.2)",
            }}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span
                  className="inline-block text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  001
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Lagos Roadside Rescue
                </h3>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>
                  lrr.ninelm.com
                </p>
              </div>
              <span
                className="shrink-0 mt-1 inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold"
                style={{ backgroundColor: "rgba(34,197,94,0.12)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.25)" }}
              >
                Live
              </span>
            </div>

            <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              On-demand roadside assistance connecting Nigerian drivers with
              verified service providers — quickly, transparently, and without
              friction. Book via WhatsApp in under two minutes.
            </p>

            <a
              href="https://lrr.ninelm.com"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold transition-colors"
              style={{ color: "#1B6FEB" }}
            >
              Visit LRR
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Next product placeholder */}
          <div
            className="mt-5 rounded-2xl p-8 sm:p-10 max-w-2xl"
            style={{ border: "1px dashed rgba(255,255,255,0.1)" }}
          >
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              002
            </span>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.25)" }}>
              More products in the works.
            </p>
          </div>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
      </div>

      {/* ── Contact ──────────────────────────────────────────── */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#1B6FEB" }}>
            Get in touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Let&apos;s talk.
          </h2>
          <p className="mb-8 max-w-md leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Partnerships, press, or just want to say hello — we&apos;d love to hear from you.
          </p>
          <a
            href="mailto:hello@ninelm.com"
            className="inline-flex items-center gap-2 text-lg font-semibold transition-opacity hover:opacity-80"
            style={{ color: "#1B6FEB" }}
          >
            hello@ninelm.com
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="py-8 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <LogoMark size={20} white />
            <span className="text-sm font-semibold text-white">Ninelm Technologies</span>
          </div>
          <span className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Ninelm Technologies. Lagos, Nigeria.
          </span>
        </div>
      </footer>

    </main>
  );
}
