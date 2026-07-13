import type { MDXComponents } from 'mdx/types';
import type { ReactElement } from 'react';
import * as runtime from 'react/jsx-runtime';
import { evaluate } from '@mdx-js/mdx';
import rehypeSlug from 'rehype-slug';
import { mdxComponents } from '@/components/mdx-components';

type MDXModule = {
  default: (props: { components?: MDXComponents }) => ReactElement;
};

export async function mdxToReact(source: string): Promise<ReactElement> {
  const { default: MDXContent } = (await evaluate(source, {
    ...runtime,
    rehypePlugins: [rehypeSlug],
  })) as MDXModule;

  return <MDXContent components={mdxComponents} />;
}
