import Logo from './Logo';
import { getLrrUrl } from '@/config/env';

const socialLinks = [
  {
    label: 'LinkedIn',
    handle: 'NINELM',
    href: 'https://www.linkedin.com/company/ninelm',
  },
  {
    label: 'Instagram',
    handle: '@ninelmtech',
    href: 'https://www.instagram.com/ninelmtech/',
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#E4E8F0] bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-7 px-6 py-11">
        <a href="/" className="flex items-center">
          <Logo height={24} />
        </a>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ninelm on ${link.label}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#E4E8F0] bg-[#F6FAFF] px-3.5 py-2 text-sm font-semibold text-[#090216] transition-colors hover:border-[#003DB4] hover:text-[#003DB4]"
              >
                <span>{link.label}</span>
                <span className="text-[#7B768E]">{link.handle}</span>
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-[26px]">
            {/* Re-enable at launch. The URL follows NEXT_PUBLIC_APP_ENV via getLrrUrl().
            <a href={getLrrUrl()} target="_blank" rel="noreferrer" className="text-sm font-medium text-[#7B768E] transition-colors hover:text-[#003DB4]">LRR</a>
            */}
            <a href="mailto:hello@ninelm.com" className="text-sm font-medium text-[#7B768E] transition-colors hover:text-[#003DB4]">hello@ninelm.com</a>
            <a href="/privacy" className="text-sm font-medium text-[#7B768E] transition-colors hover:text-[#003DB4]">Privacy</a>
            <a href="/terms" className="text-sm font-medium text-[#7B768E] transition-colors hover:text-[#003DB4]">Terms</a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#E4E8F0]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-1 px-6 py-5 text-[13px] text-[#7B768E]">
          <span>© 2026 Ninelm Technologies Limited. All rights reserved.</span>
          <span>67 Kofo Abayomi Street, Victoria Island, Lagos, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
