import Link from "next/link";
import React from "react";
import { getAllFilesMetadata } from "../../../../lib/mdx";
import { formatDate } from "../../../../lib/fecha-format";

export default function BlogPage() {
  const posts = getAllFilesMetadata();
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <main className="flex flex-col items-center max-w-5xl gap-4 px-8 py-10 mx-auto h-[calc(100vh-100px)]">
      <h1 className="text-3xl font-bold text-zinc-100">Los últimos posts de mi blog aquí abajo 😺</h1>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col gap-2 p-3 transition-colors bg-black border rounded-xl border-zinc-800 bg-gradient-to-tl from-black/80 via-zinc-600/20 to-black/80 hover:bg-zinc-950 hover:border-white"
          >
            <div className="flex flex-col h-full gap-2">
              <time dateTime={post.date} className="text-sm text-zinc-400">{formatDate(post.date)}</time>
              <Link href={`blog/${post.slug}`} className="text-lg font-semibold ">{post.title}</Link>
              <p className="mb-2 text-zinc-200">{post.description}</p>
            </div>
            <Link
              href={`blog/${post.slug}`}
              className="flex items-center justify-center w-full p-2 text-sm transition-colors rounded-md justify-self-end text-zinc-400 bg-zinc-800/80 hover:text-zinc-100 hover:bg-zinc-800"
            >
              Leer Más
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
