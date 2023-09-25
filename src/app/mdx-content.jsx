'use client';
 
import { MDXRemote } from 'next-mdx-remote';
import { Pre } from './components/pre';
 
const MdxComponents = {
    pre: (props) => <Pre {...props} />,
  };

export function MdxContent({ source }) {
  return <MDXRemote {...source} components={MdxComponents} />;
}