import Link from "next/link";
import { getAllPostMeta } from "../../lib/posts";

export const metadata = {
  title: "Blog | Ashton Lane",
  description: "Thoughts, write-ups, and lessons from building software.",
};

export default function BlogPage() {
  const posts = getAllPostMeta();
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <main className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col gap-12 px-6 py-16 sm:px-10">
        <header className="flex items-center justify-between">
          <div className="space-y-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
            >
              <span aria-hidden>←</span> Back to portfolio
            </Link>
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Blog
            </h1>
            <p className="text-zinc-400">Thoughts, write-ups, and lessons from building software.</p>
          </div>
        </header>

        <section className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-3 rounded-3xl bg-slate-900/70 p-6 ring-1 ring-slate-800/80 backdrop-blur-sm transition hover:-translate-y-0.5 hover:ring-sky-300/40"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h2 className="text-lg font-semibold text-white transition group-hover:text-sky-200">
                  {post.title}
                </h2>
                <span className="shrink-0 text-xs font-medium uppercase tracking-widest text-zinc-500">
                  {post.date}
                </span>
              </div>
              <p className="text-sm text-zinc-400">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-200 ring-1 ring-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-300 transition group-hover:text-white">
                Read post <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Upcoming posts</h2>
            <span className="text-sm text-zinc-400">Topics on the list</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Cloud Architecture",
              "Kubernetes & Container Orchestration",
              "DevOps",
              "Observability & Distributed Systems Debugging",
              "Event-Driven Architecture",
              "Microservice Architecture",
              "Data Engineering",
              "Databases",
              "Cybersecurity",
              "System Design & Trade-off Thinking",
            ].map((topic) => (
              <div
                key={topic}
                className="flex items-center gap-3 rounded-2xl bg-slate-900/80 px-5 py-4 text-sm font-medium text-zinc-400 ring-1 ring-slate-800/80 backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" aria-hidden />
                {topic}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
