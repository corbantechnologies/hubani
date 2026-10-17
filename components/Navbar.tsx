import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-xs">
      <div className="flex w-full items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="flex h-7 w-7 items-center justify-center rounded bg-black text-white text-xs font-semibold tracking-wider">
            H
          </span>
          <div className="flex flex-col">
            <span className="text-base font-semibold tracking-tight text-black leading-none">
              HUBANI
            </span>
            <span className="text-xs font-normal text-neutral-500 tracking-wide uppercase">
              Limited
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-3 sm:gap-6">
          <a
            href="#about"
            className="hidden sm:inline text-xs font-medium text-neutral-700 hover:text-black transition-colors"
          >
            About
          </a>
          <a
            href="#divisions"
            className="hidden sm:inline text-xs font-medium text-neutral-700 hover:text-black transition-colors"
          >
            Divisions
          </a>
          <a
            href="/#governance"
            className="hidden sm:inline text-xs font-medium text-neutral-700 hover:text-black transition-colors"
          >
            Governance
          </a>
          <Link
            href="/contact"
            className="text-xs font-medium text-neutral-700 hover:text-black transition-colors"
          >
            Contact
          </Link>
          <a
            href="https://careers.hubani.org"
            className="inline-flex items-center gap-1 rounded bg-black px-3 py-1.5 text-xs font-semibold text-white hover:bg-neutral-800 transition-colors"
          >
            <span>Careers Hub</span>
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
