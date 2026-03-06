"use client";

import Link from "next/link";
import { useState } from "react";
import { blogPosts } from "./data/blog";

const projects = [
  {
    title: "GitHub Contribution Visualizer",
    description:
      "A web app that fetches and visualizes any GitHub user's contribution history as a heatmap, built with Python, Flask, and BeautifulSoup.",
    tags: ["Python", "Flask", "BeautifulSoup", "HTML/CSS"],
    link: "/projects/github-contribution-visualizer",
  },


  {
    title: "LLM Token Visualizer",
    description:
      "A web app that tokenises any text using OpenAI's tiktoken library, visualising encoded token IDs and decoded chunks with estimated API cost per model.",
    tags: ["Python", "Flask", "tiktoken", "Bootstrap"],
    link: "/projects/token-counter",
  },

  {
    title: "Reddit Pain Miner",
    description:
      "A tool that pulls recent posts from any subreddit and surfaces real user pain signals — showing titles, body text, and direct links to the original Reddit thread.",
    tags: ["Python", "Flask", "Requests", "BeautifulSoup", "HTML/CSS"],
    link: "/projects/reddit-pain-miner",
  },

];

const skills = ["Django", "Java", "Python", "Git", "GitHub"];

const skillsTODO = [
  "APIs & Auth",
  "Docker",
  "Cloud Platforms",
  "Testing & CI/CD",
];

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [mode, setMode] = useState<"dark" | "vibrant">("dark");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const isVibrant = mode === "vibrant";
  const pageBg = isVibrant
    ? "bg-gradient-to-b from-slate-950 via-indigo-900 to-fuchsia-900"
    : "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950";
  const panelSurface = isVibrant
    ? "bg-white/10 ring-1 ring-white/15"
    : "bg-slate-900/70 ring-1 ring-slate-800/80 backdrop-blur-sm";
  const tileSurface = isVibrant
    ? "bg-white/10 ring-1 ring-white/15"
    : "bg-slate-900/80 ring-1 ring-slate-800/80 backdrop-blur-sm";

  return (
    <div
      className={`relative min-h-screen ${pageBg}`}
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >
      {!isVibrant && (
        <div
          className="pointer-events-none fixed inset-0 z-0 opacity-5 mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(1.5px 1.5px at 18% 32%, rgba(255,255,255,0.35), transparent 60%)," +
              "radial-gradient(1.5px 1.5px at 74% 24%, rgba(236,254,255,0.3), transparent 60%)," +
              "radial-gradient(1.5px 1.5px at 52% 68%, rgba(255,255,255,0.28), transparent 60%)",
            backgroundSize: "260px 260px, 320px 320px, 360px 360px",
          }}
        />
      )}
      <div
        className="pointer-events-none fixed inset-0 z-0 mix-blend-screen opacity-80"
        style={{
          background: `radial-gradient(520px at ${mousePos.x}px ${mousePos.y}px, rgba(99,102,241,0.14), transparent 72%)`,
        }}
      />
      <main className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col gap-16 px-6 py-16 sm:px-10">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-cyan-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-[0_8px_30px_rgba(56,189,248,0.35)]">
              <span className="h-2 w-2 rounded-full bg-black/60" aria-hidden />
              <span className="px-1">Ashton Lane</span>
            </span>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-sky-300 via-indigo-200 to-white bg-clip-text text-transparent">
                Software engineer
              </span>
            </h1>
          </div>
          <div className="flex items-center gap-3 text-sm text-zinc-300">
            <button
              onClick={() =>
                setMode((prev) => (prev === "dark" ? "vibrant" : "dark"))
              }
              className="rounded-full border border-zinc-700/70 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-100 transition hover:border-zinc-500 hover:bg-white/10"
            >
              {isVibrant ? "Vibrant" : "Dark"} mode
            </button>
            <button
              onClick={() => setIsContactOpen(true)}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              Contact
            </button>
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,360px)]">
          <div className={`rounded-3xl p-8 ${panelSurface}`}>
            <p className="text-sm text-zinc-400">About me</p>
            <div className="mt-3 text-lg leading-relaxed text-zinc-300 sm:text-xl">
              <div className="relative mb-3 h-36 w-36 float-none overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500/30 via-sky-400/20 to-cyan-300/20 ring-1 ring-white/10 sm:float-right sm:ml-5 sm:mb-3 sm:h-44 sm:w-44">
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-semibold text-white/80 sm:text-4xl">
                  AL
                </div>
                <img
                  src="/portrait2.png"
                  alt="Portrait of Ashton Lane"
                  className="relative z-10 h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Hi, my name is{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-200 bg-clip-text text-transparent">
                  Ashton Lane
                </span>{" "}
  and I'm a graduate software engineer focused on building user friendly applications and continuously growing my skills.
              </h2>
              <p className="mt-4 text-lg text-zinc-300">
                I am passionate about building performant and user friendly
                applications that solve real-world problems, or teach me new skills.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                View projects
              </a>
              <a
                href="/blog"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Blog
              </a>
              <a
                href="#skills"
                className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:text-white"
              >
                Skills
              </a>
            </div>
          </div>

          <div className="grid w-full max-w-[360px] gap-4">
            <div
              className={`relative grid aspect-square content-start gap-3 rounded-2xl p-5 ${tileSurface}`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-zinc-400">Currently</p>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-200 ring-1 ring-white/10">
                  Working On
                </span>
              </div>
              <ul className="space-y-2 text-sm text-zinc-200">
                <li className="flex gap-2">
                  <span
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-300"
                    aria-hidden
                  />
                  <span>
                    Django app releases with user-facing polish and faster
                    delivery.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-300"
                    aria-hidden
                  />
                  <span>
                    Building reusable UI patterns so teams can ship quicker.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-300"
                    aria-hidden
                  />
                  <span>Iterating on UX details to reduce friction.</span>
                </li>
              </ul>
            </div>
            <div
              className={`relative grid aspect-square content-start gap-3 rounded-2xl p-5 ${tileSurface}`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-zinc-400">Personal builds</p>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-200 ring-1 ring-white/10">
                  Highlights
                </span>
              </div>
              <ul className="space-y-2 text-sm text-zinc-200">
                <li className="flex gap-2">
                  <span
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-300"
                    aria-hidden
                  />
                  <span>
                    ML project for pollution-source localisation using
                    quadcopter sensor data.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-300"
                    aria-hidden
                  />
                  <span>
                    Small app collection (including the classic TODO) to
                    practice delivery and testing.
                  </span>
                </li>
                  <li className="flex gap-2">
                    <span
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-300"
                      aria-hidden
                    />
                    <span>
                      GitHub Contribution Visualiser – interactive heatmap of GitHub activity.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-300"
                      aria-hidden
                    />
                    <span>
                      LLM Token Visualiser – OpenAI tokenisation explorer with cost estimation.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-300"
                      aria-hidden
                    />
                    <span>
                      Reddit Pain Miner – surfaces real user pain signals from any subreddit.
                    </span>
                  </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Current Skills</h3>
            <span className="text-sm text-zinc-400">
              Focused on continuous learning
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className={`rounded-2xl px-5 py-4 text-sm font-medium text-zinc-100 ${tileSurface}`}
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">
              Skills I'm working towards
            </h3>
            <span className="text-sm text-zinc-400">
              Currently or in the near future
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skillsTODO.map((skillsTODO) => (
              <div
                key={skillsTODO}
                className={`rounded-2xl px-5 py-4 text-sm font-medium text-zinc-100 ${tileSurface}`}
              >
                {skillsTODO}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Projects</h3>
            <span className="text-sm text-zinc-400">Selected work</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`group relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:ring-amber-200/60 ${tileSurface}`}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-lg font-semibold text-white">
                      {project.title}
                    </h4>
                    <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-wide text-zinc-300">
                      Build
                    </span>
                  </div>
                  <p className="text-sm text-zinc-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-200 ring-1 ring-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-zinc-200">
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-2 transition hover:text-white"
                    >
                      View details
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="blog" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Blog</h3>
            <span className="text-sm text-zinc-400">Thoughts and write-ups</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className={`group relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:ring-sky-300/60 ${tileSurface}`}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-lg font-semibold text-white leading-snug">{post.title}</h4>
                    <span className="shrink-0 rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-wide text-zinc-300">
                      Post
                    </span>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">{post.date}</p>
                  <p className="text-sm text-zinc-300">{post.excerpt}</p>
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
                  <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-zinc-200">
                    <a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 transition hover:text-white"
                    >
                      Read post
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Upcoming posts</h3>
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
              "Cybersecurity",
              "System Design & Trade-off Thinking",
            ].map((topic) => (
              <div
                key={topic}
                className={`flex items-center gap-3 rounded-2xl px-5 py-4 text-sm font-medium text-zinc-400 ${tileSurface}`}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" aria-hidden />
                {topic}
              </div>
            ))}
          </div>
        </section>

        {isContactOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900/90 p-6 shadow-2xl ring-1 ring-white/10">
              <button
                onClick={() => setIsContactOpen(false)}
                className="absolute right-3 top-3 rounded-full bg-white/5 px-2.5 py-1 text-xs font-semibold text-zinc-200 transition hover:bg-white/10"
                aria-label="Close contact modal"
              >
                Close
              </button>
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Contact
                </p>
                <h3 className="text-2xl font-semibold text-white">
                  Let&apos;s connect
                </h3>
                <p className="text-sm text-zinc-300">
                  Pick a channel and I&apos;ll respond soon.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/Ashton321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black ring-1 ring-zinc-300 transition hover:bg-zinc-200 hover:text-black"
                  aria-label="GitHub profile"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.58 2 12.23c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05.8-.23 1.66-.35 2.52-.35.86 0 1.72.12 2.52.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.02 1.63 1.02 2.75 0 3.94-2.33 4.8-4.56 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.48A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/ashtonlane/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black ring-1 ring-zinc-300 transition hover:bg-zinc-200 hover:text-black"
                  aria-label="LinkedIn profile"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 8.5h4.53V23H.24V8.5Zm7.34 0H12v2h.06c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.54 4.78 5.85V23h-4.52v-7.3c0-1.74-.03-3.98-2.43-3.98-2.43 0-2.8 1.9-2.8 3.86V23H7.58V8.5Z" />
                  </svg>
                </a>
                <a
                  href="mailto:ashtonml07@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black ring-1 ring-zinc-300 transition hover:bg-zinc-200 hover:text-black"
                  aria-label="Email Ashton"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M3 4.75A2.75 2.75 0 0 1 5.75 2h12.5A2.75 2.75 0 0 1 21 4.75v14.5A2.75 2.75 0 0 1 18.25 22H5.75A2.75 2.75 0 0 1 3 19.25V4.75Zm2.75-.25a.75.75 0 0 0-.75.75v.26l7 4.38 7-4.38V5.25a.75.75 0 0 0-.75-.75H5.75Zm13.5 3.64-6.41 4.01a.75.75 0 0 1-.78 0L5.65 8.14v11.11c0 .41.34.75.75.75h12.2c.41 0 .75-.34.75-.75V8.14Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}

        <footer
          id="contact"
          className="flex items-center justify-center gap-4 border-t border-zinc-800 pt-10 pb-6"
        >
          <a
            href="https://github.com/Ashton321"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black ring-1 ring-zinc-300 transition hover:bg-zinc-200 hover:text-black"
            aria-label="GitHub profile"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.58 2 12.23c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05.8-.23 1.66-.35 2.52-.35.86 0 1.72.12 2.52.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.02 1.63 1.02 2.75 0 3.94-2.33 4.8-4.56 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.48A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ashtonlane/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black ring-1 ring-zinc-300 transition hover:bg-zinc-200 hover:text-black"
            aria-label="LinkedIn profile"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 8.5h4.53V23H.24V8.5Zm7.34 0H12v2h.06c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.54 4.78 5.85V23h-4.52v-7.3c0-1.74-.03-3.98-2.43-3.98-2.43 0-2.8 1.9-2.8 3.86V23H7.58V8.5Z" />
            </svg>
          </a>
          <a
            href="mailto:ashtonml07@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black ring-1 ring-zinc-300 transition hover:bg-zinc-200 hover:text-black"
            aria-label="Email Ashton"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M3 4.75A2.75 2.75 0 0 1 5.75 2h12.5A2.75 2.75 0 0 1 21 4.75v14.5A2.75 2.75 0 0 1 18.25 22H5.75A2.75 2.75 0 0 1 3 19.25V4.75Zm2.75-.25a.75.75 0 0 0-.75.75v.26l7 4.38 7-4.38V5.25a.75.75 0 0 0-.75-.75H5.75Zm13.5 3.64-6.41 4.01a.75.75 0 0 1-.78 0L5.65 8.14v11.11c0 .41.34.75.75.75h12.2c.41 0 .75-.34.75-.75V8.14Z" />
            </svg>
          </a>
        </footer>
      </main>
    </div>
  );
}
