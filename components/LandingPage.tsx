import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import { getLrrUrl } from '@/config/env';

// Ninelm brand colours (this design)
// Blue:   #003DB4 / hover #00287a
// Ink:    #090216
// Muted:  #7B768E
// Bg:     #F6FAFF
// Border: #E4E8F0
// Teal:   #14B8A6 / dark #0F766E

export default function LandingPage() {
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
            <span className="text-[11.5px] font-bold uppercase tracking-[.14em] text-[#003DB4]">LRR is live</span>
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
            <a href={getLrrUrl()} target="_blank" rel="noreferrer" className="rounded-2xl border border-[#E4E8F0] bg-white px-[26px] py-4 text-[15px] font-semibold text-[#090216] transition-colors hover:border-[#003DB4] hover:text-[#003DB4]">
              Try LRR now
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
                    <span className="rounded-full bg-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-[.06em] text-[#003DB4]">En route</span>
                  </div>
                  <div className="mt-1 flex justify-between text-[11px] text-[#7B768E]">
                    <span>Confirmed on WhatsApp</span>
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
            LRR — Local Roadside Rescue — connects stranded motorists with a network of verified roadside operators over WhatsApp. Request help, see the price before you confirm, and get a WhatsApp update the moment your operator arrives.
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
              <h3 className="mt-[18px] text-xl font-extrabold tracking-[-.03em] text-white">Fast, live dispatch</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#DCE6FA]">We match you with a verified operator nearby the moment you request help, and text you as soon as they&apos;re on the way.</p>
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

          <div className="mt-8 rounded-2xl bg-[#003DB4] p-8 sm:p-12">
            <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <div className="text-[11.5px] font-bold uppercase tracking-[.2em] text-[#A9C2F5]">Live now</div>
                <h3 className="mt-3.5 text-[28px] font-extrabold leading-[1.08] tracking-[-.035em] text-white sm:text-[38px]">
                  LRR is <em className="not-italic italic text-[#A9C2F5]">here.</em>
                </h3>
                <p className="mt-3.5 max-w-[46ch] text-base leading-relaxed text-[#DCE6FA]">
                  One WhatsApp message gets a verified operator dispatched to you. Operators can register for the network any time — no setup fee, no long contract.
                </p>
              </div>
              <a
                href={getLrrUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex-none whitespace-nowrap rounded-2xl bg-white px-[26px] py-4 text-[15px] font-semibold text-[#003DB4] transition-colors hover:bg-[#DCE6FA]"
              >
                Try LRR now →
              </a>
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
                { n: '03', title: 'Stay updated automatically', body: "Get a WhatsApp message the moment an operator is dispatched, when they arrive, and when the job's done.", last: true },
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

      {/* Footer */}
      <SiteFooter />
    </main>
  );
}
