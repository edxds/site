import React from 'react';
import Head from 'next/head';

import { LandingSection } from '@src/sections/LandingSection';

export default function Index() {
  return (
    <div>
      <Head>
        <title>EDXDS</title>
      </Head>
      <LandingSection />
    </div>
  );
}

Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});
