import { getFileBySlug } from "../../../../lib/mdx";
import { MdxContent } from "../../mdx-content";
export async function generateMetadata({ params: { slug } }) {
  const { frontmatter } = await getFileBySlug(slug);
  return {
    title: frontmatter.title + " | Esteban Montecinos",
  };
}
export default async function page({ params: { slug } }) {
  const { serialized, frontmatter } = await getFileBySlug(slug);
  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg xl:prose-xl prose-zinc !prose-invert mx-auto px-4 py-10">
      <h1>{frontmatter.title}</h1>
      <MdxContent source={serialized} />
    </article>
  );
}
