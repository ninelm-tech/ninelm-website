'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';
import SiteHeader from './SiteHeader';

// Ninelm brand colours (this design)
// Blue:   #003DB4 / hover #00287a
// Ink:    #090216
// Muted:  #7B768E
// Bg:     #F6FAFF
// Border: #E4E8F0
// Teal:   #14B8A6 / dark #0F766E

const LAUNCH_DATE = new Date('2026-09-21T09:00:00+01:00').getTime();

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function useCountdown(target: number) {
  const [left, setLeft] = useState(() => Math.max(0, target - Date.now()));

  useEffect(() => {
    const id = setInterval(() => setLeft(Math.max(0, target - Date.now())), 1000);
    return () => clearInterval(id);
  }, [target]);

  const s = Math.floor(left / 1000);
  return {
    days: pad(Math.floor(s / 86400)),
    hours: pad(Math.floor(s / 3600) % 24),
    mins: pad(Math.floor(s / 60) % 60),
    secs: pad(s % 60),
  };
}

function WaitlistForm() {
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

  if (state === 'success') {
    return (
      <div className="mt-8 flex items-center justify-center gap-3 rounded-2xl border border-[#E4E8F0] bg-white px-6 py-5">
        <span className="text-[#0F766E]">✓</span>
        <span className="text-sm font-semibold text-[#0F766E]">You&apos;re on the list — we&apos;ll be in touch.</span>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-8 flex max-w-[520px] flex-wrap gap-2.5 rounded-2xl border border-[#E4E8F0] bg-white p-2"
      >
        <input
          type="email"
          required
          placeholder="your@email.com"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={state === 'loading'}
          className="min-w-0 flex-1 basis-[220px] rounded-lg border-0 bg-transparent px-3.5 py-3 text-[15.5px] text-[#090216] outline-none placeholder:text-[#090216]/30"
        />
        <button
          type="submit"
          disabled={state === 'loading'}
          className="shrink-0 rounded-xl bg-[#003DB4] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#00287a] disabled:opacity-60"
        >
          {state === 'loading' ? 'Joining…' : 'Join Waitlist'}
        </button>
      </form>
      {state === 'error' && <p className="mt-3 text-center text-xs text-red-500">{errorMsg}</p>}
    </>
  );
}

export default function LandingPage() {
  const cd = useCountdown(LAUNCH_DATE);
  const marqueeItems = [
    'Roadside Assistance',
    'Verified Operators',
    'WhatsApp-First Requests',
    'Live Dispatch',
    'Upfront Quotes',
    'Pay Per Job',
    'Instant Receipts',
  ];

  return (
    <main className="bg-[#F6FAFF] font-sans text-[#090216]" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      <style>{`
        @keyframes nl-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes nl-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(20,184,166,.55); }
          70%  { box-shadow: 0 0 0 7px rgba(20,184,166,0); }
          100% { box-shadow: 0 0 0 0 rgba(20,184,166,0); }
        }
        .nl-pulse-dot { animation: nl-pulse 2s infinite; }
        .nl-marquee-track { animation: nl-marquee 34s linear infinite; }
      `}</style>

      <SiteHeader />

      {/* Hero */}
      <section id="top" className="mx-auto grid max-w-[1200px] items-center gap-14 px-6 pt-[72px] pb-[88px] md:grid-cols-2">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#E4E8F0] bg-white py-1.5 pl-3 pr-4">
            <span className="nl-pulse-dot block h-2 w-2 rounded-full bg-[#14B8A6]" />
            <span className="text-[11.5px] font-bold uppercase tracking-[.14em] text-[#003DB4]">LRR launches soon</span>
          </div>

          <h1 className="mt-6 text-[46px] font-extrabold leading-[.98] tracking-[-.045em] sm:text-[64px] md:text-[78px]">
            Built for
            <br />
            <em className="not-italic italic text-[#003DB4]">real life.</em>
          </h1>

          <p className="mt-6 max-w-[34ch] text-[18.5px] leading-relaxed text-[#7B768E]">
            Ninelm builds practical digital solutions that solve real-world everyday problems — for how businesses and people truly live and work.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#lrr" className="rounded-2xl bg-[#003DB4] px-[26px] py-4 text-[15px] font-semibold text-white transition-colors hover:bg-[#00287a]">
              See our first product →
            </a>
            <a href="#waitlist" className="rounded-2xl border border-[#E4E8F0] bg-white px-[26px] py-4 text-[15px] font-semibold text-[#090216] transition-colors hover:border-[#003DB4] hover:text-[#003DB4]">
              Join waitlist
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3.5">
            {['Verified operators', '24/7 coverage', 'No app needed'].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-[13.5px] font-medium text-[#7B768E]">
                <span className="font-bold text-[#003DB4]">✓</span>{t}
              </span>
            ))}
          </div>
        </div>

        <div
          className="relative min-h-[560px] overflow-hidden rounded-[28px] bg-[#003DB4] px-8 pb-14 pt-12 sm:px-10"
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '22px 22px', backgroundPosition: 'center' }}
        >
          <div className="relative flex items-start justify-center pt-2">
            <div className="w-[210px] rotate-[-4deg] rounded-[24px] bg-white p-[18px] shadow-[0_22px_50px_rgba(0,20,60,.28)] sm:w-[246px]">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[9.5px] font-bold uppercase tracking-[.18em] text-[#7B768E]">Live dispatch</span>
                <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[.06em] text-[#0F766E]">
                  <span className="block h-1.5 w-1.5 rounded-full bg-[#14B8A6]" />Live
                </span>
              </div>
              <div className="mt-1.5 text-[19px] font-extrabold tracking-[-.03em]">Help is on the way</div>
              <div className="mt-0.5 text-[11px] text-[#7B768E]">Lekki Phase 1, Lagos</div>

              <div className="mt-4 flex flex-col gap-2.5">
                <div className="rounded-[14px] border border-[#E4E8F0] p-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[13px] font-bold">You reached out</span>
                    <span className="text-[11px] font-bold text-[#0F766E]">✓</span>
                  </div>
                  <div className="mt-1 text-[11px] text-[#7B768E]">&quot;SOS&quot; received on WhatsApp</div>
                </div>
                <div className="rounded-[14px] border border-[#E4E8F0] p-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[13px] font-bold">Operator dispatched</span>
                    <span className="text-[11px] font-bold text-[#0F766E]">✓</span>
                  </div>
                  <div className="mt-1 text-[11px] text-[#7B768E]">Chinedu A. · Verified · ★ 4.9</div>
                </div>
                <div className="rounded-[14px] border border-[#003DB4] bg-[#EAF0FC] p-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[13px] font-bold">Operator en route</span>
                    <span className="rounded-full bg-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-[.06em] text-[#003DB4]">Tracking</span>
                  </div>
                  <div className="mt-1 flex justify-between text-[11px] text-[#7B768E]">
                    <span>Location link shared</span>
                    <span className="font-bold text-[#003DB4]">ETA 12 mins</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-[-104px] w-[170px] translate-x-[-6px] translate-y-[260px] rotate-[5deg] self-start rounded-[22px] bg-white p-4 shadow-[0_26px_60px_rgba(0,20,60,.34)] sm:ml-[-152px] sm:w-[206px] sm:translate-y-[330px]">
              <span className="text-[9.5px] font-bold uppercase tracking-[.18em] text-[#7B768E]">Your quote</span>
              <div className="mt-2.5 rounded-[14px] border border-[#E4E8F0] p-2.5">
                <div className="text-[11px] text-[#7B768E]">Battery jump start</div>
                <div className="mt-1 text-2xl font-extrabold tracking-[-.04em] tabular-nums">₦18,500</div>
                <div className="mt-1.5 flex items-center justify-between gap-2 border-t border-[#E4E8F0] pt-1.5">
                  <span className="text-[10.5px] text-[#7B768E]">Deposit paid</span>
                  <span className="text-[10.5px] font-bold text-[#003DB4]">Balance on completion</span>
                </div>
              </div>
              <div className="mt-2.5 rounded-[14px] border border-[#E4E8F0] p-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold">WhatsApp</span>
                  <span className="text-[10px] font-bold text-[#0F766E]">Updates on</span>
                </div>
                <div className="mt-1 text-[10.5px] text-[#7B768E]">Arrival &amp; completion alerts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-[#E4E8F0] bg-[#EEF2F9] py-4">
        <div className="nl-marquee-track flex w-max">
          {[0, 1].map((g) => (
            <div key={g} className="flex gap-11 pr-11 text-[11.5px] font-bold uppercase tracking-[.2em] text-[#7B768E] whitespace-nowrap" aria-hidden={g === 1}>
              {marqueeItems.map((t) => (
                <span key={t} className="flex items-center gap-11">{t}<span>·</span></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* LRR */}
      <section id="lrr" className="border-b border-[#E4E8F0] bg-white">
        <div className="mx-auto max-w-[1200px] px-6 pt-24 pb-[104px]">
          <div className="text-[11.5px] font-bold uppercase tracking-[.2em] text-[#003DB4]">Our first product</div>
          <h2 className="mt-[18px] text-[34px] font-extrabold leading-[1.04] tracking-[-.04em] sm:text-[54px]">
            Help is <em className="not-italic italic text-[#003DB4]">on the way.</em>
          </h2>
          <p className="mt-5 max-w-[62ch] text-[17.5px] leading-relaxed text-[#7B768E]">
            LRR — Local Roadside Rescue — connects stranded motorists with a network of verified roadside operators over WhatsApp. It goes live shortly. Request help, see the price before you confirm, and track your operator until they arrive.
          </p>

          <div className="mt-[52px] grid grid-cols-1 gap-5 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            <div className="rounded-2xl border border-[#E4E8F0] bg-[#F6FAFF] p-8 sm:col-span-2">
              <div className="text-[26px]">📱</div>
              <h3 className="mt-[18px] text-2xl font-extrabold tracking-[-.03em]">Nothing to install</h3>
              <p className="mt-3 max-w-[52ch] text-[15.5px] leading-relaxed text-[#7B768E]">
                The entire flow — request, quotes, payment, updates — runs over WhatsApp. Send &quot;SOS&quot;, share your location, and help is on its way. No app download, no account to create.
              </p>
            </div>
            <div className="rounded-2xl bg-[#003DB4] p-8">
              <div className="text-[26px]">📍</div>
              <h3 className="mt-[18px] text-xl font-extrabold tracking-[-.03em] text-white">Dispatch &amp; live tracking</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#DCE6FA]">We match you with a verified operator nearby and share their location link the moment they&apos;re dispatched.</p>
            </div>
            <div className="rounded-2xl border border-[#E4E8F0] bg-[#F6FAFF] p-8">
              <div className="text-[26px]">🛡️</div>
              <h3 className="mt-[18px] text-xl font-extrabold tracking-[-.03em]">Verified, rated operators</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#7B768E]">Every operator is vetted before they can receive dispatch offers, and carries a visible rating from real jobs. Ratings run both ways.</p>
            </div>
            <div className="rounded-2xl border border-[#E4E8F0] bg-[#F6FAFF] p-8">
              <div className="text-[26px]">💰</div>
              <h3 className="mt-[18px] text-xl font-extrabold tracking-[-.03em]">Upfront, per-job pricing</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#7B768E]">See the price before you confirm. A small deposit confirms the request; the balance is due once you&apos;ve been helped.</p>
            </div>
            <div className="rounded-2xl border border-[#E4E8F0] bg-[#F6FAFF] p-8">
              <div className="text-[26px]">🧾</div>
              <h3 className="mt-[18px] text-xl font-extrabold tracking-[-.03em]">Instant digital receipts</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#7B768E]">An itemised, printable receipt the moment your balance is paid — deposit, balance, total, all accounted for.</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 rounded-2xl bg-[#003DB4] p-8 sm:p-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-[11.5px] font-bold uppercase tracking-[.2em] text-[#A9C2F5]">Launch countdown</div>
              <h3 className="mt-3.5 text-[28px] font-extrabold leading-[1.08] tracking-[-.035em] text-white sm:text-[38px]">
                LRR is almost
                <br />
                <em className="not-italic italic text-[#A9C2F5]">here.</em>
              </h3>
              <p className="mt-3.5 max-w-[46ch] text-base leading-relaxed text-[#DCE6FA]">
                One WhatsApp message will get a verified operator dispatched to you. Operators can register for the network before day one — no setup fee, no long contract.
              </p>
            </div>
            <div className="flex min-w-0 flex-col items-start gap-5">
              <div className="flex flex-wrap gap-2.5">
                {[['Days', cd.days], ['Hours', cd.hours], ['Minutes', cd.mins], ['Seconds', cd.secs]].map(([label, val]) => (
                  <div key={label} className="min-w-[82px] rounded-2xl border border-white/25 bg-white/10 px-4 py-3.5">
                    <div className="text-[34px] font-extrabold leading-none tracking-[-.04em] tabular-nums text-white">{val}</div>
                    <div className="mt-1.5 text-[9.5px] font-bold uppercase tracking-[.16em] text-[#A9C2F5]">{label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start gap-3">
                <a
                  href="https://staging.lrr.ninelm.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-white px-[26px] py-4 text-[15px] font-bold text-[#003DB4] transition-colors hover:bg-[#DCE6FA]"
                >
                  Preview LRR →
                </a>
                <span className="text-[13px] text-[#A9C2F5]">↳ staging.lrr.ninelm.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-b border-[#E4E8F0] bg-[#F6FAFF]">
        <div className="mx-auto grid max-w-[1200px] gap-16 px-6 pt-24 pb-[104px] md:grid-cols-2">
          <div>
            <div className="text-[11.5px] font-bold uppercase tracking-[.2em] text-[#003DB4]">How it works</div>
            <h2 className="mt-[18px] text-[34px] font-extrabold leading-[1.04] tracking-[-.04em] sm:text-[52px]">
              Help is three simple
              <br />
              <em className="not-italic italic text-[#003DB4]">steps away.</em>
            </h2>
            <p className="mt-5 max-w-[34ch] text-[17.5px] leading-relaxed text-[#7B768E]">Built for speed, clarity and peace of mind from the moment you need help.</p>
          </div>
          <div className="relative pl-3.5">
            <div className="absolute bottom-14 left-[41px] top-[22px] w-px bg-[#E4E8F0]" />
            <div className="relative flex flex-col gap-10">
              {[
                { n: '01', title: 'Send "SOS" on WhatsApp', body: 'Message "SOS" to the LRR WhatsApp line and share your location. We handle everything from there — no app needed.', last: false },
                { n: '02', title: 'We dispatch the right operator', body: 'Our system matches you with a verified operator nearby, based on what you need. You see the quote before you confirm.', last: false },
                { n: '03', title: 'Stay updated automatically', body: "Get your operator's location link when they're dispatched, plus WhatsApp updates when they arrive and when the job's done.", last: true },
              ].map((s) => (
                <div key={s.n} className="flex items-start gap-6">
                  <div
                    className={`flex h-[54px] w-[54px] flex-none items-center justify-center rounded-2xl text-sm font-extrabold tabular-nums ${
                      s.last ? 'bg-[#003DB4] text-white' : 'border border-[#E4E8F0] bg-white text-[#003DB4]'
                    }`}
                  >
                    {s.n}
                  </div>
                  <div className="min-w-0 pt-1">
                    <h3 className="text-xl font-extrabold tracking-[-.03em]">{s.title}</h3>
                    <p className="mt-2 max-w-[44ch] text-[15.5px] leading-relaxed text-[#7B768E]">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b border-[#E4E8F0] bg-white">
        <div className="mx-auto grid max-w-[1200px] gap-16 px-6 pt-24 pb-[104px] md:grid-cols-2">
          <div>
            <div className="text-[11.5px] font-bold uppercase tracking-[.2em] text-[#003DB4]">About Ninelm · Open for work</div>
            <h2 className="mt-[18px] text-[34px] font-extrabold leading-[1.04] tracking-[-.04em] sm:text-[52px]">
              We take on the
              <br />
              <em className="not-italic italic text-[#003DB4]">hard problems.</em>
            </h2>
            <p className="mt-[22px] max-w-[42ch] text-[17.5px] leading-relaxed text-[#7B768E]">
              Ninelm Technologies builds software for how people and institutions actually operate — enterprise platforms, AI-powered products, public-sector systems and fintech infrastructure. LRR is our own first product; the same team is available to build with you.
            </p>
            <p className="mt-[18px] max-w-[42ch] text-[17.5px] leading-relaxed text-[#7B768E]">
              We work in small senior teams, ship in weeks rather than quarters, and stay on after launch.
            </p>
            <div className="mt-[30px] flex flex-wrap gap-3">
              <a href="mailto:hello@ninelm.com?subject=Project%20enquiry" className="whitespace-nowrap rounded-2xl bg-[#003DB4] px-[26px] py-4 text-[15px] font-semibold text-white transition-colors hover:bg-[#00287a]">
                Start a conversation →
              </a>
              <a href="#waitlist" className="whitespace-nowrap rounded-2xl border border-[#E4E8F0] bg-white px-[26px] py-4 text-[15px] font-semibold text-[#090216] transition-colors hover:border-[#003DB4] hover:text-[#003DB4]">
                Stay in the loop
              </a>
            </div>
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[.2em] text-[#7B768E]">What we build</div>
            {[
              ['01', 'Enterprise platforms', 'Operations tooling, internal systems and integrations that carry real workloads and real teams.'],
              ['02', 'AI-powered products', 'Assistants, document intelligence and automation put to work inside existing processes — not demos.'],
              ['03', 'Public sector & government', 'Citizen-facing services, registries and reporting built for scale, accountability and long support lives.'],
              ['04', 'Fintech & payments', 'Collections, disbursements, reconciliation and onboarding flows — money movement that has to balance.'],
              ['05', 'Our own products', "LRR is the first, with more when they're ready. Everything we learn shipping ours goes into yours."],
            ].map(([n, title, desc], i, arr) => (
              <div key={n} className={`border-t border-[#E4E8F0] py-6 ${i === arr.length - 1 ? 'border-b' : ''}`}>
                <div className="flex items-baseline gap-3.5">
                  <span className="text-[11px] font-bold tabular-nums text-[#003DB4]">{n}</span>
                  <div className="min-w-0">
                    <div className="text-[19px] font-bold tracking-[-.02em]">{title}</div>
                    <div className="mt-1.5 text-[14.5px] leading-relaxed text-[#7B768E]">{desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="bg-[#F6FAFF]">
        <div className="mx-auto max-w-[720px] px-6 pt-[104px] pb-[112px] text-center">
          <div className="text-[11.5px] font-bold uppercase tracking-[.2em] text-[#003DB4]">Get early access</div>
          <h2 className="mt-[18px] text-[36px] font-extrabold leading-[1.04] tracking-[-.04em] sm:text-[56px]">
            Be part of <em className="not-italic italic text-[#003DB4]">the pilot.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-[17.5px] leading-relaxed text-[#7B768E]">
            We&apos;re onboarding a small group of motorists and operators for LRR. Leave your email and we&apos;ll reach out directly.
          </p>
          <WaitlistForm />
          <p className="mt-4 text-[13.5px] text-[#7B768E]">No spam. We&apos;ll only contact you when we&apos;re ready to onboard.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E4E8F0] bg-white">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-6 py-11">
          <a href="#top" className="flex items-center">
            <Logo height={24} />
          </a>
          <div className="flex flex-wrap gap-[26px]">
            <a href="mailto:hello@ninelm.com" className="text-sm font-medium text-[#7B768E] transition-colors hover:text-[#003DB4]">hello@ninelm.com</a>
            <a href="https://staging.lrr.ninelm.com" target="_blank" rel="noreferrer" className="text-sm font-medium text-[#7B768E] transition-colors hover:text-[#003DB4]">LRR</a>
            <a href="/privacy" className="text-sm font-medium text-[#7B768E] transition-colors hover:text-[#003DB4]">Privacy</a>
            <a href="/terms" className="text-sm font-medium text-[#7B768E] transition-colors hover:text-[#003DB4]">Terms</a>
          </div>
        </div>
        <div className="border-t border-[#E4E8F0]">
          <div className="mx-auto max-w-[1200px] px-6 py-5 text-[13px] text-[#7B768E]">© 2026 Ninelm Technologies Limited. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
