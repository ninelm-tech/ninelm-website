'use client';

/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';

// Ninelm brand colours
// Blue:       #1B6FEB
// Dark navy:  #0D1B3E
// Mid navy:   #0a1628

function LogoMark({ size = 32, white = false }: { size?: number; white?: boolean }) {
  const fill = white ? '#ffffff' : '#1B6FEB';
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill={fill} />
      <path
        d="M10 10h5.5l9 13V10H30v20h-5.5l-9-13V30H10V10z"
        fill="white"
        fillOpacity={white ? '0.15' : '1'}
      />
      {white && (
        <path d="M10 10h5.5l9 13V10H30v20h-5.5l-9-13V30H10V10z" fill="white" />
      )}
    </svg>
  );
}

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setState('success');
        setEmail('');
      } else {
        const data = await res.json();
        setErrorMsg(data.error ?? 'Something went wrong. Try again.');
        setState('error');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setState('error');
    }
  }

  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: '#0a1628', color: '#ffffff' }}
    >
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50%       { opacity: 0.25; transform: scale(1.08); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .animate-float       { animation: float 6s ease-in-out infinite; }
        .animate-fade-up     { animation: fade-up 0.7s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Ambient glow — top centre */}
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="animate-pulse-glow absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, #1B6FEB 0%, transparent 70%)' }}
        />
      </div>

      {/* Nav */}
      <nav className="relative z-10 px-6 pt-8 flex items-center justify-between max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2.5">
          <LogoMark size={28} white />
          <span className="text-base font-semibold tracking-tight text-white">Ninelm</span>
        </div>
        <a
          href="mailto:hello@ninelm.com"
          className="text-sm transition-colors text-white/40 hover:text-white"
        >
          hello@ninelm.com
        </a>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">

        {/* Logo mark — floating */}
        <div className="animate-float mb-10 opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl"
            style={{ backgroundColor: '#1B6FEB', boxShadow: '0 0 60px rgba(27,111,235,0.4)' }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M5 5h11l18 26V5h6v30H29L11 9V35H5V5z" fill="white" />
            </svg>
          </div>
        </div>

        {/* Pill */}
        <div
          className="opacity-0 animate-fade-up delay-100 inline-flex items-center gap-2 rounded-full px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase"
          style={{
            backgroundColor: 'rgba(27,111,235,0.12)',
            color: '#1B6FEB',
            border: '1px solid rgba(27,111,235,0.3)',
            animationFillMode: 'forwards',
          }}
        >
          Lagos, Nigeria — Coming soon
        </div>

        {/* Headline */}
        <h1
          className="opacity-0 animate-fade-up delay-200 text-5xl sm:text-6xl md:text-[68px] font-extrabold leading-[1.05] tracking-tight max-w-2xl"
          style={{ animationFillMode: 'forwards' }}
        >
          Technology
          <br />
          <span style={{ color: '#1B6FEB' }}>built for Africa.</span>
        </h1>

        {/* Subtext */}
        <p
          className="opacity-0 animate-fade-up delay-300 mt-6 text-lg max-w-md leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.5)', animationFillMode: 'forwards' }}
        >
          We&apos;re building products that solve real, everyday problems for Africans.
          Be the first to know when we launch.
        </p>

        {/* Waitlist form */}
        <div
          className="opacity-0 animate-fade-up delay-400 mt-10 w-full max-w-md"
          style={{ animationFillMode: 'forwards' }}
        >
          {state === 'success' ? (
            <div
              className="flex items-center justify-center gap-3 rounded-2xl px-6 py-4"
              style={{ backgroundColor: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)' }}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#4ade80" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium" style={{ color: '#4ade80' }}>
                You&apos;re on the list — we&apos;ll be in touch.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={state === 'loading'}
                className="flex-1 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(27,111,235,0.6)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
              />
              <button
                type="submit"
                disabled={state === 'loading'}
                className="shrink-0 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: '#1B6FEB' }}
              >
                {state === 'loading' ? 'Joining…' : 'Join the waitlist'}
              </button>
            </form>
          )}

          {state === 'error' && (
            <p className="mt-3 text-xs text-center" style={{ color: 'rgba(248,113,113,0.9)' }}>
              {errorMsg}
            </p>
          )}

          <p
            className="mt-4 text-xs text-center"
            style={{ color: 'rgba(255,255,255,0.25)' }}
          >
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative z-10 py-8 px-6 text-center"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <span className="text-sm" style={{ color: 'rgba(255,255,255,0.2)' }}>
          © {new Date().getFullYear()} Ninelm Technologies. Lagos, Nigeria.
        </span>
      </footer>
    </main>
  );
}
