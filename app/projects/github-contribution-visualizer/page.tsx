import Link from "next/link";

const screenshots = [
  {
    src: "/project-shots/github-visualiser/homepage.png",
    alt: "Contribution heatmap overview",
    caption: "User lookup",
  },
  {
    src: "/project-shots/github-visualiser/contributionheatmap.png",
    alt: "User lookup state",
    caption: "User contribution heat map",
  },
];

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-zinc-100">
      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-14 sm:px-10">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              Project
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              GitHub Contribution Visualizer
            </h1>
            <p className="max-w-3xl text-sm text-zinc-300 sm:text-base">
              A web app that fetches any GitHub user's contributions and renders
              them as a heatmap. Built with Python, Flask, and BeautifulSoup for
              scraping, plus a lightweight frontend for visuals.
            </p>
          </div>
          <Link
            href="/"
            className="hidden rounded-full border border-zinc-700 px-3 py-1 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:text-white sm:inline-flex"
          >
            ← Back
          </Link>
        </div>

        <section className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 rounded-3xl border border-zinc-800 bg-slate-900/70 p-6 ring-1 ring-slate-800/70">
            <h2 className="text-xl font-semibold text-white">What it does</h2>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>
                • Input any GitHub username to fetch public contribution data.
              </li>
              <li>• Render a calendar-style heatmap with daily totals.</li>
            </ul>
          </div>

          <div className="space-y-3 rounded-3xl border border-zinc-800 bg-slate-900/70 p-6 ring-1 ring-slate-800/70">
            <h3 className="text-lg font-semibold text-white">Tech stack</h3>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-zinc-100">
              {[
                "Python",
                "Flask",
                "BeautifulSoup",
                "Requests",
                "HTML/CSS",
                "JavaScript",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-800 px-3 py-1 text-[11px] uppercase tracking-wide ring-1 ring-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-sm text-zinc-300">
              <p>
                Data: Scraped contribution calendar markup from GitHub profiles.
              </p>
              <p>
                Parsing: BeautifulSoup to extract dates and contribution counts.
              </p>
              <p>
                Server: Flask API endpoint serving processed contribution stats.
              </p>
              <p>Frontend: Lightweight client rendering heatmap.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Screenshots</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {screenshots.map((shot) => (
              <figure
                key={shot.src}
                className="overflow-hidden rounded-2xl border border-zinc-800 bg-slate-900/60 ring-1 ring-slate-800/70"
              >
                <div className="flex items-center justify-center w-full h-64 bg-black/10">
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm text-zinc-300">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-zinc-800 bg-slate-900/70 p-6 ring-1 ring-slate-800/70 sm:grid-cols-2">
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-white">Key features</h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• User input with validation and clear error states.</li>
              <li>• Hover tooltips show exact contribution counts per day.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-white">Notes</h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• Search any public GitHub username.</li>
              <li>
                • Scrapes GitHub's contribution graph with no API key required.
              </li>
              <li>• Heatmap grid with colour-coded contribution levels.</li>
              <li>• Hover tooltips show the exact date for each square.</li>
            </ul>
          </div>
        </section>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="https://github.com/Ashton321/github-streak-viz"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            View repository
          </Link>
          <Link
            href="/"
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:text-white"
          >
            ← Back to portfolio
          </Link>
        </div>
      </main>
    </div>
  );
}
