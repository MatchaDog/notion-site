import * as React from 'react';

import { Layout } from '@/components/layout';

import { NotionAPI } from 'notion-client';

const Blog = async () => {
  const notion = new NotionAPI();

  const recordMap = await notion.getPage('d3775566-17a7-4066-b52b-327b8ae3b19a');
  console.log(recordMap);
  return <Layout>123123</Layout>;
};

export default Blog;
