import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Privacy Policy — Ninelm',
  description:
    'How Ninelm Technologies Limited collects, uses and protects information across our website and our products, including LRR — Local Roadside Rescue.',
};

const SECTIONS = [
  {
    id: 'collect',
    n: '01',
    navLabel: 'What we collect',
    head: ['What we', 'collect.'],
    body: (
      <>
        <p className="mt-4 max-w-[62ch] text-[16.5px] leading-relaxed text-[#7B768E]">
          We collect only what a request needs to be fulfilled and paid for. That falls into four groups:
        </p>
        <ul className="mt-5 flex flex-col gap-3.5">
          {[
            ['Identity and contact.', 'Your name, WhatsApp number, and — for operators — business details, vehicle information and verification documents.'],
            ['Request data.', 'The location you share, what you need help with, the quote you were given, job status and the ratings left afterwards.'],
            ['Payment records.', 'Deposit and balance amounts, timestamps and receipts. Card and bank details are handled by our payment provider, not stored by us.'],
            ['Technical data.', 'Device, browser and approximate location (country or city), and anonymous analytics about how our pages are used — not tied to your identity.'],
          ].map(([label, text]) => (
            <li key={label} className="flex max-w-[62ch] gap-3 text-[16.5px] leading-relaxed text-[#7B768E]">
              <span className="font-bold text-[#003DB4]">—</span>
              <span><strong className="font-bold text-[#090216]">{label}</strong> {text}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: 'use',
    n: '02',
    navLabel: 'How we use it',
    head: ['How we', 'use it.'],
    body: (
      <>
        <p className="mt-4 max-w-[62ch] text-[16.5px] leading-relaxed text-[#7B768E]">
          To dispatch the right operator to you, to keep both sides informed while a job is running, to process deposits and balances, to issue receipts, to verify operators before they join the network, and to investigate disputes or safety reports. We also use aggregate, non-identifying data to improve dispatch times and coverage.
        </p>
        <p className="mt-4 max-w-[62ch] text-[16.5px] leading-relaxed text-[#7B768E]">
          We do not sell your personal data, and we do not use your request history for advertising.
        </p>
      </>
    ),
  },
  {
    id: 'whatsapp',
    n: '03',
    navLabel: 'WhatsApp & location',
    head: ['WhatsApp and', 'location.'],
    body: (
      <>
        <p className="mt-4 max-w-[62ch] text-[16.5px] leading-relaxed text-[#7B768E]">
          LRR runs over WhatsApp, so the messages you exchange with us pass through WhatsApp&apos;s own infrastructure and are subject to its terms as well as ours. By messaging us you&apos;re asking us to reply on that thread — request confirmations, quotes, dispatch notices and completion updates.
        </p>
        <div className="mt-6 rounded-2xl border border-[#E4E8F0] bg-[#F6FAFF] p-7">
          <h3 className="text-[19px] font-extrabold tracking-[-.025em]">Location is shared by you, per request</h3>
          <p className="mt-3 max-w-[58ch] text-base leading-relaxed text-[#7B768E]">
            We do not track your location in the background. A pin is used only for the request you shared it on: to match a nearby operator and to guide them to you. The dispatched operator sees the pin for the duration of that job; their live location link is shared with you for the same window.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 'sharing',
    n: '04',
    navLabel: 'Who we share with',
    head: ['Who we', 'share with.'],
    body: (
      <p className="mt-4 max-w-[62ch] text-[16.5px] leading-relaxed text-[#7B768E]">
        Only the parties a job needs: the operator assigned to your request, our messaging and payment providers, our hosting, analytics and error-monitoring providers, and professional advisers or authorities where the law requires it. Operators receive the minimum needed to reach you and complete the job — not your wider history.
      </p>
    ),
  },
  {
    id: 'retention',
    n: '05',
    navLabel: 'Retention & security',
    head: ['Retention and', 'security.'],
    body: (
      <p className="mt-4 max-w-[62ch] text-[16.5px] leading-relaxed text-[#7B768E]">
        Job and payment records are kept while your account is active and afterwards for as long as tax, accounting and dispute-resolution rules require. Verification documents are kept while an operator is on the network. Website analytics are anonymous and are not kept in a form that identifies a visitor. Access is restricted to staff who need it, transfers are encrypted, and we review who can see what on a regular basis.
      </p>
    ),
  },
  {
    id: 'rights',
    n: '06',
    navLabel: 'Your rights',
    head: ['Your', 'rights.'],
    body: (
      <p className="mt-4 max-w-[62ch] text-[16.5px] leading-relaxed text-[#7B768E]">
        You can ask us for a copy of your data, ask us to correct it, ask us to delete what we&apos;re not required to keep, object to a particular use, or withdraw consent for non-essential messages. Because our website analytics are anonymous and not linked to your identity, there&apos;s no individual record for us to look up or delete. Write to{' '}
        <a href="mailto:hello@ninelm.com" className="text-[#003DB4] hover:text-[#00287a]">hello@ninelm.com</a> and we&apos;ll respond within 30 days.
      </p>
    ),
  },
  {
    id: 'changes',
    n: '07',
    navLabel: 'Changes & contact',
    head: ['Changes and', 'contact.'],
    body: (
      <p className="mt-4 max-w-[62ch] text-[16.5px] leading-relaxed text-[#7B768E]">
        If we change this policy we&apos;ll update the date at the top of this page, and we&apos;ll tell you directly when a change materially affects how your data is used. For anything privacy-related, reach us at{' '}
        <a href="mailto:hello@ninelm.com" className="text-[#003DB4] hover:text-[#00287a]">hello@ninelm.com</a> or by post at 67 Kofo Abayomi Street, Victoria Island, Lagos, Nigeria.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-[#F6FAFF] text-[#090216]" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      <SiteHeader />

      <section className="mx-auto max-w-[1200px] px-6 pt-[72px] pb-14">
        <div className="text-[11.5px] font-bold uppercase tracking-[.2em] text-[#003DB4]">Legal</div>
        <h1 className="mt-[18px] text-[40px] font-extrabold leading-[1.02] tracking-[-.045em] sm:text-[66px]">
          Privacy <em className="italic text-[#003DB4]">policy.</em>
        </h1>
        <p className="mt-[22px] max-w-[60ch] text-[18.5px] leading-relaxed text-[#7B768E]">
          How Ninelm Technologies Limited collects, uses and protects information across our website and our products, including LRR — Local Roadside Rescue.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3.5">
          <span className="text-[13.5px] font-medium text-[#7B768E]">
            Last updated <span className="font-semibold text-[#090216]">September 2026</span>
          </span>
          <span className="text-[13.5px] font-medium text-[#7B768E]">
            Questions? <a href="mailto:hello@ninelm.com" className="text-[#003DB4] hover:text-[#00287a]">hello@ninelm.com</a>
          </span>
        </div>
      </section>

      <section className="border-y border-[#E4E8F0] bg-white">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 px-6 pt-[72px] pb-[88px] md:grid-cols-[260px_1fr]">
          <aside className="min-w-0">
            <div className="sticky top-24">
              <div className="text-[11px] font-bold uppercase tracking-[.2em] text-[#7B768E]">On this page</div>
              <nav className="mt-[18px] flex flex-col gap-3">
                {SECTIONS.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="text-[14.5px] font-medium text-[#7B768E] transition-colors hover:text-[#003DB4]">
                    {s.n} — {s.navLabel}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="flex min-w-0 flex-col">
            {SECTIONS.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                className={`border-t border-[#E4E8F0] py-9 ${i === SECTIONS.length - 1 ? 'border-b' : ''}`}
              >
                <div className="text-[11px] font-bold tabular-nums text-[#003DB4]">{s.n}</div>
                <h2 className="mt-3 text-[26px] font-extrabold leading-[1.1] tracking-[-.035em] sm:text-[34px]">
                  {s.head[0]} <em className="italic text-[#003DB4]">{s.head[1]}</em>
                </h2>
                {s.body}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F6FAFF]">
        <div className="mx-auto max-w-[1200px] px-6 pt-[72px] pb-20">
          <div className="grid grid-cols-1 items-center gap-8 rounded-2xl bg-[#003DB4] p-8 sm:p-12 md:grid-cols-2">
            <div>
              <h3 className="text-[26px] font-extrabold leading-[1.1] tracking-[-.035em] text-white sm:text-[34px]">
                Something unclear?
                <br />
                <em className="italic text-[#A9C2F5]">Ask us directly.</em>
              </h3>
              <p className="mt-3.5 max-w-[44ch] text-base leading-relaxed text-[#DCE6FA]">
                A person reads every message. No ticket queue, no template reply.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:hello@ninelm.com" className="rounded-2xl bg-white px-[26px] py-4 text-[15px] font-bold text-[#003DB4] transition-colors hover:bg-[#DCE6FA]">
                hello@ninelm.com
              </a>
              <a href="/terms" className="rounded-2xl border border-white/40 px-[26px] py-4 text-[15px] font-semibold text-white transition-colors hover:bg-white/10">
                Read the terms →
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
