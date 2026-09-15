import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Terms of Service — Ninelm',
  description:
    'The agreement between you and Ninelm Technologies Limited when you use our website or our products, including LRR — Local Roadside Rescue.',
};

const SECTIONS = [
  {
    id: 'role',
    n: '01',
    navLabel: 'Our role',
    head: ['Our', 'role.'],
    body: (
      <>
        <p className="mt-4 max-w-[62ch] text-[16.5px] leading-relaxed text-[#7B768E]">
          LRR is a dispatch platform. We connect motorists who need roadside help with independent operators who provide it, and we handle the messaging, quoting, payment and status updates around that job. The roadside work itself is performed by the operator, not by Ninelm.
        </p>
        <div className="mt-6 rounded-2xl border border-[#E4E8F0] bg-[#F6FAFF] p-7">
          <h3 className="text-[19px] font-extrabold tracking-[-.025em]">Not an emergency service</h3>
          <p className="mt-3 max-w-[58ch] text-base leading-relaxed text-[#7B768E]">
            LRR is not a medical, fire, police or ambulance service. If life or safety is at risk, contact the emergency services first. We aim to dispatch quickly, but arrival times depend on traffic, distance and operator availability, and are always estimates.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 'account',
    n: '02',
    navLabel: 'Using the service',
    head: ['Using the', 'service.'],
    body: (
      <p className="mt-4 max-w-[62ch] text-[16.5px] leading-relaxed text-[#7B768E]">
        You must be 18 or older and give accurate information — your real name, a WhatsApp number you control, and the correct location and vehicle details for the request. You&apos;re responsible for what happens on your number. Requests made to test, mislead or abuse the network may be cancelled and the number blocked.
      </p>
    ),
  },
  {
    id: 'pricing',
    n: '03',
    navLabel: 'Quotes and payment',
    head: ['Quotes and', 'payment.'],
    body: (
      <ul className="mt-5 flex flex-col gap-3.5">
        {[
          ['You see the price first.', 'A quote is shown before you confirm. Confirming the quote creates the job.'],
          ['Deposit, then balance.', "A deposit confirms the request; the balance is due once you've been helped. A receipt is issued on payment."],
          ['Scope changes.', 'If the work turns out to be different from what you described, the operator must re-quote and you must approve it before continuing.'],
          ['Cancellations.', 'Cancel before an operator is dispatched and the deposit is refunded. After dispatch, part of the deposit may be retained to cover the trip.'],
        ].map(([label, text]) => (
          <li key={label} className="flex max-w-[62ch] gap-3 text-[16.5px] leading-relaxed text-[#7B768E]">
            <span className="font-bold text-[#003DB4]">—</span>
            <span><strong className="font-bold text-[#090216]">{label}</strong> {text}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: 'operators',
    n: '04',
    navLabel: 'Operator terms',
    head: ['Operator', 'terms.'],
    body: (
      <p className="mt-4 max-w-[62ch] text-[16.5px] leading-relaxed text-[#7B768E]">
        Operators are independent businesses, not employees of Ninelm. To receive dispatch offers you must pass verification, keep your licences, insurance and equipment valid, honour the quotes you accept, and complete work to a competent standard. We may suspend or remove an operator for unsafe work, repeated no-shows, off-platform pricing, or a sustained poor rating.
      </p>
    ),
  },
  {
    id: 'conduct',
    n: '05',
    navLabel: 'Conduct and ratings',
    head: ['Conduct and', 'ratings.'],
    body: (
      <p className="mt-4 max-w-[62ch] text-[16.5px] leading-relaxed text-[#7B768E]">
        Ratings run both ways after every job and exist to build trust, not to punish. Keep them honest and about the job. Harassment, threats, discrimination and fraudulent requests or claims end access to the platform.
      </p>
    ),
  },
  {
    id: 'liability',
    n: '06',
    navLabel: 'Liability',
    head: ['Liability.', ''],
    body: (
      <>
        <p className="mt-4 max-w-[62ch] text-[16.5px] leading-relaxed text-[#7B768E]">
          The operator is responsible for the work they perform and any damage caused by it. Ninelm is responsible for the platform: dispatch, messaging, payment handling and records. We don&apos;t guarantee arrival times or uninterrupted service, and to the extent the law allows, our liability for any single job is limited to the amount paid for it. Nothing here limits liability that cannot be limited by law.
        </p>
        <p className="mt-4 max-w-[62ch] text-[16.5px] leading-relaxed text-[#7B768E]">
          If something goes wrong on a job, report it to us within 7 days and we&apos;ll investigate with both sides.
        </p>
      </>
    ),
  },
  {
    id: 'general',
    n: '07',
    navLabel: 'Changes and law',
    head: ['Changes and', 'law.'],
    body: (
      <p className="mt-4 max-w-[62ch] text-[16.5px] leading-relaxed text-[#7B768E]">
        We may update these terms as the product develops; the date at the top of this page changes with them, and continued use means you accept the current version. These terms are governed by Nigerian law, and disputes go to the courts of Lagos State. Our privacy practices are described in the{' '}
        <a href="/privacy" className="text-[#003DB4] hover:text-[#00287a]">privacy policy</a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="bg-[#F6FAFF] text-[#090216]" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      <SiteHeader />

      <section className="mx-auto max-w-[1200px] px-6 pt-[72px] pb-14">
        <div className="text-[11.5px] font-bold uppercase tracking-[.2em] text-[#003DB4]">Legal</div>
        <h1 className="mt-[18px] text-[40px] font-extrabold leading-[1.02] tracking-[-.045em] sm:text-[66px]">
          Terms of <em className="italic text-[#003DB4]">service.</em>
        </h1>
        <p className="mt-[22px] max-w-[60ch] text-[18.5px] leading-relaxed text-[#7B768E]">
          The agreement between you and Ninelm Technologies Limited when you use our website or our products, including LRR — Local Roadside Rescue.
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
                  {s.head[0]}{s.head[1] && <> <em className="italic text-[#003DB4]">{s.head[1]}</em></>}
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
                Joining as an
                <br />
                <em className="italic text-[#A9C2F5]">operator?</em>
              </h3>
              <p className="mt-3.5 max-w-[44ch] text-base leading-relaxed text-[#DCE6FA]">
                Verification opens before launch. Tell us about your business and we&apos;ll walk you through it.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/#waitlist" className="rounded-2xl bg-white px-[26px] py-4 text-[15px] font-bold text-[#003DB4] transition-colors hover:bg-[#DCE6FA]">
                Join the waitlist →
              </a>
              <a href="/privacy" className="rounded-2xl border border-white/40 px-[26px] py-4 text-[15px] font-semibold text-white transition-colors hover:bg-white/10">
                Read the privacy policy
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
