import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 bg-white py-8 mt-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md space-y-2">
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
            <p className="text-xs text-neutral-600 leading-relaxed">
              Agile parent holding corporation operating across cinematic music
              publishing, advanced data telemetry systems, and global tournament
              administration (BOTYA league).
            </p>
            <p className="text-xs text-neutral-500">
              Operational Base: Mombasa, Kenya &amp; Global Remote Workspaces.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:items-end">
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-700">
              <a href="/#about" className="hover:text-black transition-colors">
                About
              </a>
              <a href="/#divisions" className="hover:text-black transition-colors">
                Divisions
              </a>
              <Link href="/contact" className="hover:text-black transition-colors">
                Contact
              </Link>
              <a
                href="https://careers.hubani.org"
                className="hover:text-black transition-colors"
              >
                Careers ↗
              </a>
              <a
                href="mailto:info@hubani.org"
                className="hover:text-black transition-colors"
              >
                info@hubani.org
              </a>
            </div>
            <p className="text-xs text-neutral-400 pt-2">
              © 2026 Hubani Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
