import React from 'react';
import Head from 'next/head';

import { useTranslation } from '@root/i18n';

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

const Button = styled('button', {
  border: 0,
  padding: '0 1rem',
  background: 'transparent',
  fontSize: '0.85rem',
  color: 'hsl(0, 0%, 40%)',

  ':focus': {
    outline: 0,
  },

  ':hover': {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
});

export default function Index() {
  const { t, i18n } = useTranslation();

  const isInPortuguese = i18n.language === 'pt-BR';
  const swapLanguage = () => i18n.changeLanguage(isInPortuguese ? 'en' : 'pt-BR');

  return (
    <div>
      <Head>
        <title>EDXDS</title>
      </Head>
      <Container>
        <Button css={{ marginTop: 16, marginBottom: 16 }} onClick={swapLanguage}>
          {t('swap-language')}
        </Button>
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
