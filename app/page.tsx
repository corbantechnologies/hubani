import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16 space-y-16">
      {/* Hero Section */}
      <section className="space-y-4 border-b border-neutral-200 pb-12">
        <div className="inline-flex items-center gap-2 rounded border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-800">
          <span className="h-1.5 w-1.5 rounded-full bg-black" />
          <span>Parent Holding Corporation · Mombasa, Kenya</span>
        </div>

        <h1 className="text-xl font-semibold tracking-tight text-neutral-950">
          Hubani Limited: Building Sovereign Ventures in Culture, Telemetry &amp; Competitive Systems
        </h1>

        <p className="max-w-3xl text-sm leading-relaxed text-neutral-700">
          Hubani Limited is an agile parent holding corporation operating across
          high-velocity sectors, including premium cinematic music publishing,
          advanced data telemetry software systems, and international tournament
          administration. Hubani Limited serves as the sovereign governing entity
          behind <strong className="font-semibold text-black">BOTYA</strong> (Best of
          the Year Awards), a global league spanning four vertical disciplines:
          Chess, Software Development, Orchestral Music, and Film.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 pt-2 text-xs text-neutral-600">
          <span className="flex items-center gap-1.5">
            <span className="font-semibold text-neutral-900">Headquarters:</span> Mombasa, Kenya
          </span>
          <span className="hidden sm:inline text-neutral-300">•</span>
          <span className="flex items-center gap-1.5">
            <span className="font-semibold text-neutral-900">Workspace:</span> Distributed &amp; Remote
          </span>
          <span className="hidden sm:inline text-neutral-300">•</span>
          <span className="flex items-center gap-1.5">
            <span className="font-semibold text-neutral-900">Governance:</span> Companies Act, 2015
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-4">
          <a
            href="https://careers.hubani.org"
            className="inline-flex items-center gap-2 rounded bg-black px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-800 transition-colors shadow-xs"
          >
            <span>Explore Open Careers</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href="#divisions"
            className="inline-flex items-center gap-2 rounded border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold text-neutral-900 hover:bg-neutral-100 transition-colors shadow-xs"
          >
            <span>Corporate Portfolios</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="space-y-4">
        <h2 className="text-base font-semibold tracking-tight text-neutral-950 border-b border-neutral-200 pb-2">
          About Hubani Limited &amp; Operating Culture
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-neutral-700 leading-relaxed">
          <p>
            We are a young, fast-moving holding company led by young directors who
            value innovation, speed, autonomy, and continuous growth. Rather than
            relying on legacy corporate hierarchies, we build lean,
            technology-driven teams designed for rapid iteration and high operational
            cadence.
          </p>
          <p>
            From our strategic base in Mombasa, Kenya, and global remote nodes, we
            incubate, finance, and steer proprietary software platforms, media
            catalogs, and international intellectual competitions.
          </p>
        </div>
      </section>

      {/* Core Operating Divisions */}
      <section id="divisions" className="space-y-6">
        <div>
          <h2 className="text-base font-semibold tracking-tight text-neutral-950 border-b border-neutral-200 pb-2">
            Sovereign Operating Portfolios
          </h2>
          <p className="text-xs text-neutral-600 mt-2">
            Cross-disciplinary vertical assets managed by Hubani Limited.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Portfolio 1 */}
          <div className="rounded border border-neutral-200 bg-white p-5 shadow-xs space-y-2">
            <span className="inline-block rounded bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-800 border border-neutral-200">
              Media &amp; IP
            </span>
            <h3 className="text-sm font-semibold text-neutral-950">
              Cinematic Music Publishing
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Curating and publishing high-fidelity orchestral compositions, film
              scores, and synchronization licensing for global broadcast and
              interactive media.
            </p>
          </div>

          {/* Portfolio 2 */}
          <div className="rounded border border-neutral-200 bg-white p-5 shadow-xs space-y-2">
            <span className="inline-block rounded bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-800 border border-neutral-200">
              Software Systems
            </span>
            <h3 className="text-sm font-semibold text-neutral-950">
              Advanced Data Telemetry
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Architecting real-time telemetry pipelines, scoring algorithms, and
              automated performance measurement systems for high-velocity
              applications.
            </p>
          </div>

          {/* Portfolio 3 */}
          <div className="rounded border border-neutral-200 bg-white p-5 shadow-xs space-y-2">
            <span className="inline-block rounded bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-800 border border-neutral-200">
              Global League
            </span>
            <h3 className="text-sm font-semibold text-neutral-950">
              BOTYA Administration
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Sovereign governing entity of Best of the Year Awards (BOTYA), an
              international competition league spanning Chess, Software, Orchestral
              Music, and Film.
            </p>
          </div>
        </div>
      </section>

      {/* Governance & Leadership */}
      <section id="governance" className="space-y-4 rounded border border-neutral-200 bg-neutral-50/50 p-6 sm:p-8">
        <h2 className="text-base font-semibold tracking-tight text-neutral-950 border-b border-neutral-200 pb-2">
          Corporate Governance &amp; Executive Stewardship
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-700 leading-relaxed">
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-neutral-950">
              Statutory Rigor &amp; Transparency
            </h3>
            <p>
              Hubani Limited maintains strict corporate governance in full compliance
              with the Kenyan Companies Act, 2015. Our corporate secretariat preserves
              rigorous statutory registers, annual filings with the Business
              Registration Service (BRS), and disciplined board oversight.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-neutral-950">
              Mentorship-Driven Autonomy
            </h3>
            <p>
              We believe in unlocking exceptional early talent. We actively mentor
              ambitious individuals directly under executive leadership, pairing
              institutional corporate rigor with agile tech startup execution.
            </p>
          </div>
        </div>
      </section>

      {/* Careers Callout */}
      <section className="rounded border border-neutral-300 bg-white p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="space-y-1">
            <span className="rounded bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-800 border border-neutral-200">
              Careers Portal
            </span>
            <h2 className="text-lg font-semibold text-black tracking-tight">
              Join Our Executive &amp; Engineering Teams
            </h2>
            <p className="text-xs text-neutral-600 max-w-xl">
              We are actively accepting applications for high-impact early-career and
              executive positions, including the Principal Executive Secretary
              (Company Secretary &amp; Chief of Staff).
            </p>
          </div>

          <a
            href="https://careers.hubani.org"
            className="inline-flex items-center justify-center gap-2 rounded bg-black px-4 py-2.5 text-xs font-semibold text-white hover:bg-neutral-800 transition-colors self-start sm:self-auto shadow-xs"
          >
            <span>View Opportunities at Careers Hub</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      {/* Corporate Inquiries */}
      <section id="contact" className="space-y-3 rounded border border-neutral-200 p-6 text-xs text-neutral-600">
        <h2 className="text-sm font-semibold text-neutral-950">
          Corporate Inquiries &amp; Secretariat
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-neutral-100 pt-3">
          <div>
            <span className="font-semibold text-neutral-900 block">Hubani Limited</span>
            <span>Executive Office &amp; Secretariat · Mombasa, Kenya</span>
          </div>
          <div className="space-y-1">
            <div>
              <span className="font-semibold text-neutral-900">Recruitment: </span>
              <a href="mailto:careers@hubani.org" className="underline text-black font-medium">
                careers@hubani.org
              </a>
            </div>
            <div>
              <span className="font-semibold text-neutral-900">Official Portal: </span>
              <a href="https://hubani.org" className="text-black font-medium">
                hubani.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
