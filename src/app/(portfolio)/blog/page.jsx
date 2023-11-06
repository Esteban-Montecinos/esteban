import Link from "next/link";
import React from "react";
import { getAllFilesMetadata } from "../../../../lib/mdx";
import { formatDate } from "../../../../lib/fecha-format";

export default function BlogPage() {
  const posts = getAllFilesMetadata();
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <main className="flex flex-col items-center max-w-5xl gap-4 px-8 py-10 mx-auto h-[calc(100vh-100px)]">
      <h1 className="text-3xl font-bold text-black dark:text-zinc-100">Los últimos posts de mi blog aquí abajo 😺</h1>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col gap-2 p-3 transition-colors border dark:bg-black bg-zinc-400 rounded-xl dark:border-zinc-800 border-zinc-400 bg-gradient-to-tl dark:from-black/80 from-zinc-50 dark:via-zinc-600/20 via-zinc-200/60 dark:to-black/80 to-zinc-50 dark:hover:bg-zinc-950 hover:bg-zinc-400/60 dark:hover:border-white hover:border-black"
          >
            <div className="flex flex-col h-full gap-2">
              <time dateTime={post.date} className="text-sm dark:text-zinc-400 text-zinc-700">{formatDate(post.date)}</time>
              <Link href={`blog/${post.slug}`} className="text-lg font-semibold ">{post.title}</Link>
              <p className="mb-2 dark:text-zinc-200 text-zinc-800">{post.description}</p>
            </div>
            <Link
              href={`blog/${post.slug}`}
              className="flex items-center justify-center w-full p-2 text-sm transition-colors rounded-md justify-self-end dark:text-zinc-400 hover:text-black text-zinc-700 dark:bg-zinc-800/80 bg-zinc-400/60 dark:hover:text-zinc-100 dark:hover:bg-zinc-800"
            >
              Leer Más
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
