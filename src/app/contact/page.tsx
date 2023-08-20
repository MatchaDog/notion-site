import * as React from 'react';

import { SocialIcons } from '@/components/footer';
import { Layout } from '@/components/layout';

const Contact = () => {
  return (
    <Layout hideFooter contentStyle={{ height: 'calc(100vh - 64px)' }}>
      <div className="flex h-full flex-col items-center justify-center">
        <div className="text-3xl font-bold italic">
          Contact Hans
        </div>
        <div className='flex gap-6 mt-8'>
          <SocialIcons />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
