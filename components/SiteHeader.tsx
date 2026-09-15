import Logo from './Logo';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E4E8F0] bg-[#F6FAFF]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center gap-6 px-6 py-3.5">
        <a href="/" className="flex flex-none items-center">
          <Logo height={28} />
        </a>
        <nav className="hidden flex-1 items-center justify-center gap-8 sm:flex">
          <a href="/#about" className="text-[14.5px] font-medium text-[#7B768E] transition-colors hover:text-[#090216]">About</a>
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 text-[14.5px] font-medium text-[#7B768E] transition-colors hover:text-[#090216]"
            >
              Products
              <svg className="h-3 w-3 transition-transform group-hover:rotate-180" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="flex w-[140px] flex-col rounded-2xl border border-[#E4E8F0] bg-white p-2 shadow-[0_16px_40px_rgba(0,20,60,.12)]">
                <a href="/#lrr" className="rounded-lg px-3 py-2.5 text-[14px] font-medium text-[#090216] transition-colors hover:bg-[#F6FAFF]">LRR</a>
              </div>
            </div>
          </div>
        </nav>
        <a
          href="/#waitlist"
          className="flex-none whitespace-nowrap rounded-2xl bg-[#003DB4] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#00287a]"
        >
          Join Waitlist
        </a>
      </div>
    </header>
  );
}
