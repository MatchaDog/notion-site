import * as React from 'react';

import { Layout } from '@/components/layout';
import { NotionContent } from '@/components/notion/notion';

import { NotionAPI } from 'notion-client';

const Home = async () => {
  const notion = new NotionAPI();

  const recordMap = await notion.getPage('36a26b8e3ff247ed97decc1f842132dd');

  return (
    <Layout contentStyle={{ textAlign: 'center' }}>
      <NotionContent recordMap={recordMap} />
    </Layout>
  );
};

export default Home;
