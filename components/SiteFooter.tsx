import Logo from './Logo';
import { getLrrUrl } from '@/config/env';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/ninelm',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ninelmtech/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#E4E8F0] bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-7 px-6 py-11">
        <a href="/" className="flex items-center">
          <Logo height={24} />
        </a>
        <div className="flex flex-wrap gap-[26px]">
          {/* Re-enable at launch. The URL follows NEXT_PUBLIC_APP_ENV via getLrrUrl().
          <a href={getLrrUrl()} target="_blank" rel="noreferrer" className="text-sm font-medium text-[#7B768E] transition-colors hover:text-[#003DB4]">LRR</a>
          */}
          <a href="mailto:hello@ninelm.com" className="text-sm font-medium text-[#7B768E] transition-colors hover:text-[#003DB4]">hello@ninelm.com</a>
          <a href="/privacy" className="text-sm font-medium text-[#7B768E] transition-colors hover:text-[#003DB4]">Privacy</a>
          <a href="/terms" className="text-sm font-medium text-[#7B768E] transition-colors hover:text-[#003DB4]">Terms</a>
        </div>
      </div>
      <div className="border-t border-[#E4E8F0]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-1 px-6 py-5 text-[13px] text-[#7B768E]">
          <span>© 2026 Ninelm Technologies Limited. All rights reserved.</span>
          <span>67 Kofo Abayomi Street, Victoria Island, Lagos, Nigeria</span>
          <div className="mt-2.5 flex gap-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ninelm on ${link.label}`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E4E8F0] bg-[#F6FAFF] text-[#090216] transition-colors hover:border-[#003DB4] hover:text-[#003DB4] [&_svg]:h-4 [&_svg]:w-4"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
