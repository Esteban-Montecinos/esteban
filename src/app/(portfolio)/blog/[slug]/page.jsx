import Link from "next/link";
import { getFileBySlug } from "../../../../../lib/mdx";
import { MdxContent } from "../../../../components/mdx-content";
import { Divider } from "@nextui-org/divider";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { formatDate } from "../../../../../lib/fecha-format";
export async function generateMetadata({ params: { slug } }) {
  const { frontmatter } = await getFileBySlug(slug);
  return {
    title: frontmatter.title + " | Esteban Montecinos",
  };
}
export default async function page({ params: { slug } }) {
  const { serialized, frontmatter } = await getFileBySlug(slug);
  return (
    <article className="px-4 py-10 mx-auto prose-sm prose md:prose-base prose-zinc dark:prose-invert lg:prose-lg xl:prose-xl">
      <Link
        href="/blog"
        className="inline-flex items-center text-sm no-underline transition-colors dark:hover:text-zinc-100 hover:text-zinc-400 dark:text-zinc-400 text-zinc-700"
      >
        <IconArrowNarrowLeft className="mr-1" /> Volver al Blog
      </Link>
      <p className="text-sm dark:text-zinc-400 text-zinc-700">{formatDate(frontmatter.date)}</p>
      <h1 className="text-5xl text-black dark:text-white">{frontmatter.title}</h1>
      <p>{frontmatter.description}</p>
      <Divider className="my-2" />
      <MdxContent source={serialized} />
    </article>
  );
}
