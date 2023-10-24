'use client';
 
import { MDXRemote } from 'next-mdx-remote';
import { Pre } from './pre';
import { Divider } from '@nextui-org/react';
 
const MdxComponents = {
    pre: (props) => <Pre {...props} />,
    hr: () => <Divider className="my-2" />
}
  ;

export function MdxContent({ source }) {
  return <MDXRemote {...source} components={MdxComponents} />;
}