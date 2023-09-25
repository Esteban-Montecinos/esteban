import fs, {promises} from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from "rehype-prism-plus/all";
import rehypeCodeTitles from 'rehype-code-titles'
import { postProcess, preProcess } from "./rehype-pre-raw";
const root = process.cwd();

export const getFiles = () => fs.readdirSync(path.join(root, "content"));

export const getFileBySlug = async ( slug ) => {
    const raw = await promises.readFile(path.join(root, "content", `${slug}.mdx`), 'utf-8');

    const serialized = await serialize(raw, {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          preProcess,
          rehypeCodeTitles,
          rehypePrism,
          postProcess,
        ],
      }
    });
   
    const frontmatter = serialized.frontmatter;
   
    return {
      frontmatter,
      serialized,
    };
  }

export const getAllFilesMetadata = () => {
  const files = getFiles();

  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, "content", postSlug),
      "utf-8"
    );
    const { data } = matter(mdxSource);
    return [{ ...data, slug: postSlug.replace(".mdx", "") }, ...allPosts];
  }, []);
};
