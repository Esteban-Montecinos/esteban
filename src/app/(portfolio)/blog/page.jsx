import React from "react";
import { getAllFilesMetadata } from "../../../../lib/mdx";
import BlogCard from "@/components/blog-card";

export default function BlogPage() {
  const posts = getAllFilesMetadata();
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <main className="flex flex-col items-center max-w-5xl gap-4 px-8 py-10 mx-auto mni-h-[calc(100vh-100px)]">
      <h1 className="text-3xl font-bold text-black dark:text-zinc-100">
        Los últimos posts de mi blog aquí abajo 😺
      </h1>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            date={post.date}
            slug={post.slug}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </main>
  );
}
