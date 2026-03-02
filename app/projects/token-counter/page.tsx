import Link from "next/link";


const screenshots = [
  {
    src: "/project-shots/token-counter/example-test-1.png",
    alt: "Example text input with gpt-4o",
    caption: "Input example into gpt-4o",
  },
  {
    src: "/project-shots/token-counter/example-text-2.png",
    alt: "Example text input with text-embedding-3-small",
    caption: "Input example into text-embedding-3-small",
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
              LLM Token Visualizer
            </h1>
            <p className="max-w-3xl text-sm text-zinc-300 sm:text-base">
              A web app that tokenises any input text using OpenAI&apos;s
              tiktoken library, then visualises token IDs, decoded chunks, and
              estimated API cost by model.
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
              <li>• Tokenises free-form text and displays each token ID.</li>
              <li>• Decodes token chunks so users can inspect boundaries.</li>
              <li>
                • Estimates API usage cost for selected LLM pricing models.
              </li>
            </ul>
          </div>

          <div className="space-y-3 rounded-3xl border border-zinc-800 bg-slate-900/70 p-6 ring-1 ring-slate-800/70">
            <h3 className="text-lg font-semibold text-white">Tech stack</h3>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-zinc-100">
              {["Python", "Flask", "tiktoken", "Bootstrap"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-800 px-3 py-1 text-[11px] uppercase tracking-wide ring-1 ring-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-sm text-zinc-300">
              <p>Backend: Flask endpoint handling tokenisation requests.</p>
              <p>Tokeniser: OpenAI tiktoken for model-aware encoding.</p>
              <p>UI: Bootstrap-based responsive components for fast iteration.</p>
              <p>Output: Token IDs, decoded chunks, and estimated token cost.</p>
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
              <li>• Model-specific tokenisation using tiktoken encoders.</li>
              <li>• Side-by-side encoded and decoded token inspection.</li>
              <li>• Cost estimate preview before making API calls.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-white">Notes</h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• Built to improve prompt and budget awareness.</li>
              <li>• Useful for debugging truncation and chunking behavior.</li>
              <li>• Works with arbitrary text input for quick testing.</li>
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
