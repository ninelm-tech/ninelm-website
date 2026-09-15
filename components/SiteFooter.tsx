import Logo from './Logo';

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#E4E8F0] bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-6 py-11">
        <a href="/" className="flex items-center">
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
        <div className="mx-auto flex max-w-[1200px] flex-col gap-1 px-6 py-5 text-[13px] text-[#7B768E]">
          <span>© 2026 Ninelm Technologies Limited. All rights reserved.</span>
          <span>67 Kofo Abayomi Street, Victoria Island, Lagos, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
