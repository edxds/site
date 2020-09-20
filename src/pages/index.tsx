import React from 'react';
import Head from 'next/head';

import { useTranslation } from '@root/i18n';

import { SwapLanguageButton } from '@src/components/SwapLanguageButton';
import { styled } from '@src/stitches.config';

const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const TextContainer = styled('div', {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export default function Index() {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>EDXDS</title>
      </Head>
      <Container>
        <SwapLanguageButton css={{ my: '$2' }} />
        <TextContainer css={{ marginBottom: '4rem' }}>
          <h1>{t('hello-world')}</h1>
        </TextContainer>
      </Container>
    </div>
  );
}

Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});
