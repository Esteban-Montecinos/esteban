import Link from 'next/link';
import React from 'react'
import { getAllFilesMetadata } from '../../../lib/mdx';

export default function BlogPage() {
    const posts = getAllFilesMetadata();
    return (
      <main className="flex flex-col items-center min-h-screen p-2">
        <h1>Esteban Montecinos</h1>
  
        <div className="flex flex-col">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`blog/${post.slug}`}
              className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>{post.title}</h2>
            </Link>
          ))}
        </div>
      </main>
    );
}
