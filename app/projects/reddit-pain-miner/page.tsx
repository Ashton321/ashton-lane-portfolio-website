import Link from "next/link";

const screenshots = [
  {
    src: "/project-shots/reddit-pain-miner/home-list.png",
    alt: "Reddit Pain Miner list view",
    caption: "List view — compact browsing of flagged posts",
  },
  {
    src: "/project-shots/reddit-pain-miner/home-grid.png",
    alt: "Reddit Pain Miner grid view of pain signal posts",
    caption: "Grid view — surfaced pain signals across the subreddit",
  },
  {
    src: "/project-shots/reddit-pain-miner/home-open-grid.png",
    alt: "Expanded post detail in grid layout",
    caption: "Expanded post view with body text and Reddit link",
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
              Reddit Pain Miner
            </h1>
            <p className="max-w-3xl text-sm text-zinc-300 sm:text-base">
              A tool that surfaces real user struggles from Reddit by pulling
              recent posts from any subreddit, identifying pain signals, and
              presenting them with direct links back to the original thread.
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
              <li>• Fetches recent posts from any chosen Reddit subreddit.</li>
              <li>
                • Identifies posts that contain real user problems ("pain
                signals").
              </li>
              <li>
                • Displays post titles and optional body text alongside a direct
                link to the original Reddit post.
              </li>
              <li>
                • Supports both grid and list views for browsing flagged posts.
              </li>
            </ul>
          </div>

          <div className="space-y-3 rounded-3xl border border-zinc-800 bg-slate-900/70 p-6 ring-1 ring-slate-800/70">
            <h3 className="text-lg font-semibold text-white">Tech stack</h3>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-zinc-100">
              {["Python", "Flask", "Requests", "BeautifulSoup", "HTML/CSS"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-800 px-3 py-1 text-[11px] uppercase tracking-wide ring-1 ring-zinc-700"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
            <div className="text-sm text-zinc-300">
              <p>Backend: Flask server handling subreddit fetch requests.</p>
              <p>
                HTTP: requests library to pull Reddit&apos;s public JSON feeds.
              </p>
              <p>
                Parsing: Python extracts titles, body text, and post links.
              </p>
              <p>Frontend: HTML templates rendered via Flask render_template.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Screenshots</h3>
          <div className="grid gap-5">
            {screenshots.map((shot) => (
              <figure
                key={shot.src}
                className="overflow-hidden rounded-2xl border border-zinc-800 bg-slate-900/60 ring-1 ring-slate-800/70"
              >
                <div className="flex items-center justify-center w-full h-[28rem] bg-black/10">
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
              <li>• Configurable subreddit target — point it at any community.</li>
              <li>• Pain signal detection filters noise from general discussion.</li>
              <li>• Direct links open the original Reddit thread in a new tab.</li>
              <li>• Grid and list view toggle for different browsing preferences.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-white">Notes</h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• Uses Reddit&apos;s public JSON endpoint — no API key required.</li>
              <li>• Built to identify patterns and potential problems worth solving.</li>
              <li>• Optional BeautifulSoup integration for deeper HTML parsing.</li>
              <li>• Lightweight Flask backend keeps the setup simple and portable.</li>
            </ul>
          </div>
        </section>

        <div className="flex flex-wrap items-center gap-3">
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
