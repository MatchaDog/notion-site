import * as React from 'react';

import { Layout } from '@/components/layout';
import { NotionContent } from '@/components/notion/notion';

import { NotionAPI } from 'notion-client';

const About = async () => {
  const notion = new NotionAPI();

  const recordMap = await notion.getPage('7309734d0cec44c592761a6b20b85073');

  return (
    <Layout>
      <NotionContent recordMap={recordMap} />
    </Layout>
  );
};

export default About;
