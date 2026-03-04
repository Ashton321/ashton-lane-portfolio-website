// This file is used by the homepage to render blog preview cards.
// Full post content lives in /posts/*.md — that is where you write.
// When you publish a new post, add a matching entry here so it
// shows up in the homepage blog preview section.

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "llms-and-generative-ai",
    title: "LLMs & Generative AI",
    date: "March 2026",
    excerpt:
      "A mid-level walkthrough of how large language models actually work — from tokenisation and transformers to RAG, alignment, and where they fit inside real software systems.",
    tags: ["LLMs", "AI", "Machine Learning"],
  },
];
