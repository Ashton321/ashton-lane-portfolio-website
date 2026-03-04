import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostMeta, getPostBySlug } from "../../../lib/posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPostMeta().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} | Ashton Lane`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <main className="relative z-10 mx-auto max-w-2xl px-6 py-16 sm:px-10">
        <nav className="mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <span aria-hidden>←</span> All posts
          </Link>
        </nav>

        <article className="space-y-8">
          <header className="space-y-4 border-b border-zinc-800 pb-8">
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
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              {post.title}
            </h1>
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              {post.date}
            </p>
            <p className="text-base text-zinc-400">{post.excerpt}</p>
          </header>

          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>

        <footer className="mt-16 border-t border-zinc-800 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-white"
          >
            <span aria-hidden>←</span> Back to all posts
          </Link>
        </footer>
      </main>
    </div>
  );
}
