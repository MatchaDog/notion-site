import * as React from 'react';

import { Layout } from '@/components/layout';
import { NotionContent } from '@/components/notion/notion';

import { NotionAPI } from 'notion-client';

const Resume = async () => {
  const notion = new NotionAPI();

  const recordMap = await notion.getPage('d3775566-17a7-4066-b52b-327b8ae3b19a');

  return (
    <Layout>
      <NotionContent recordMap={recordMap} />
    </Layout>
  );
};

export default Resume;
