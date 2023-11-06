'use client';
 
import { MDXRemote } from 'next-mdx-remote';
import { Pre } from './pre';
import { Divider } from '@nextui-org/react';
import Code from './code';
import Strong from './strong';
 
const MdxComponents = {
    pre: (props) => <Pre {...props} />,
    hr: () => <Divider className="my-2" />,
    strong: (props) => <Strong {...props}/>,
    code: (props) => <Code {...props}/>
};

export function MdxContent({ source }) {
  return <MDXRemote {...source} components={MdxComponents} />;
}