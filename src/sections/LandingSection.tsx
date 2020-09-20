import React from 'react';

import { Link, useTranslation } from '@root/i18n';

import { Box } from '@src/components/Box';
import { Text } from '@src/components/Text';
import { Button } from '@src/components/Button';
import { Section } from '@src/components/Section';
import { SwapLanguageButton } from '@src/components/SwapLanguageButton';
import { styled } from '@src/stitches.config';
import wave from '@src/assets/wave.svg';

const SectionContainer = styled(Section, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  padding: '$4',
  md: {
    padding: '$16',
    paddingTop: '$8',
  },
});

const WaveImg = styled('img', {
  height: 'auto',
  width: '96px',
  mb: '$4',

  sm: {
    width: '128px',
    mb: '$8',
  },
});

export function LandingSection() {
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <SwapLanguageButton />
      <Box css={{ display: 'flex', flex: 1, fd: 'column', jc: 'center', ai: 'center' }}>
        <WaveImg src={wave} aria-hidden />
        <Box css={{ display: 'flex', fd: 'column', ai: 'center', sy: '$2' }}>
          {/* Wrapping text elements in divs prevent the spacing margins from being overriden */}
          <div>
            <Text type="landingTitle" align="center" as="h1">
              {t('landing-title')}
            </Text>
          </div>
          <div>
            <Text type="landingText" align="center" as="p" css={{ maxWidth: 600 }}>
              {t('landing-text')}
            </Text>
          </div>
        </Box>
      </Box>
      <Box css={{ display: 'flex', fd: 'column', ai: 'center', sy: '$3' }}>
        <Link href="#my-projects" passHref>
          <Button variant="contained" color="primary" as="a">
            {t('landing-cta')}
          </Button>
        </Link>
        <Link href="#about-me" passHref>
          <Button variant="text" as="a">
            {t('landing-cta-alt')}
          </Button>
        </Link>
      </Box>
    </SectionContainer>
  );
}
