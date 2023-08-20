'use client';

import * as React from 'react';
import { NotionRenderer } from 'react-notion-x';

import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { ExtendedRecordMap } from 'notion-types';

import { NotFountComponent } from '../404/not-found.component';
import './notion.css';

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then(async (m) => {
    // add / remove any prism syntaxes here
    await Promise.allSettled([
      import('prismjs/components/prism-markup-templating.js'),
      import('prismjs/components/prism-markup.js'),
      import('prismjs/components/prism-bash.js'),
      import('prismjs/components/prism-docker.js'),
      import('prismjs/components/prism-java.js'),
      import('prismjs/components/prism-js-templates.js'),
      import('prismjs/components/prism-javascript'),
      import('prismjs/components/prism-diff.js'),
      import('prismjs/components/prism-git.js'),
      import('prismjs/components/prism-less.js'),
      import('prismjs/components/prism-makefile.js'),
      import('prismjs/components/prism-markdown.js'),
      import('prismjs/components/prism-rust.js'),
      import('prismjs/components/prism-sass.js'),
      import('prismjs/components/prism-scss.js'),
      import('prismjs/components/prism-sql.js'),
      import('prismjs/components/prism-wasm.js'),
      import('prismjs/components/prism-typescript'),
    ]);
    return m.Code;
  }),
);

const Collection = dynamic(() => import('react-notion-x/build/third-party/collection').then((m) => m.Collection));
const Equation = dynamic(() => import('react-notion-x/build/third-party/equation').then((m) => m.Equation));
const Pdf = dynamic(() => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf), {
  ssr: false,
});
const Modal = dynamic(
  () =>
    import('react-notion-x/build/third-party/modal').then((m) => {
      m.Modal.setAppElement('.notion-viewport');
      return m.Modal;
    }),
  {
    ssr: false,
  },
);

export const NotionContent: React.FC<{
  recordMap: ExtendedRecordMap;
}> = ({ recordMap }) => {
  const keys = Object.keys(recordMap?.block || {});
  const block = recordMap?.block?.[keys[0]]?.value;

  // const isRootPage =
  //   parsePageId(block?.id) === parsePageId(site?.rootNotionPageId)
  // const isBlogPost = block?.type === 'page' && block?.parent_table === 'collection';
  if (!block) {
    return <NotFountComponent />;
  }
  const { theme } = useTheme();

  const components = React.useMemo(
    () => ({
      nextImage: Image,
      nextLink: Link,
      Code,
      Collection,
      Equation,
      Pdf,
      Modal,
    }),
    [],
  );

  return <NotionRenderer recordMap={recordMap} components={components} fullPage={true} darkMode={theme === 'dark'} />;
};
