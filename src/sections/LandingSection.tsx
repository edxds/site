import React from 'react';

import { Link, useTranslation } from '@root/i18n';

import { Text } from '@src/components/Text';
import { Button } from '@src/components/Button';
import { Section } from '@src/components/Section';
import { SwapLanguageButton } from '@src/components/SwapLanguageButton';
import wave from '@src/assets/wave.svg';

export function LandingSection() {
  const { t } = useTranslation();

  return (
    <Section className="flex flex-col items-center p-8 md:p-32 md:pt-16">
      <SwapLanguageButton />
      <div className="flex flex-1 flex-col justify-center items-center my-8 mx-4 sm:my-32 sm:mx-16">
        <img className="h-auto w-24 mb-8 sm:w-32 sm:mb-16" src={wave} aria-hidden />
        <div className="flex flex-col items-center space-y-4">
          {/* Wrapping text elements in divs prevent the spacing margins from being overriden */}
          <div>
            <Text type="landingTitle" align="center" as="h1">
              {t('landing-title')}
            </Text>
          </div>
          <div>
            <Text type="landingText" align="center" style={{ maxWidth: 600 }}>
              {t('landing-text')}
            </Text>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-6">
        <Link href="#my-projects" passHref>
          <Button variant="contained" as="a">
            {t('landing-cta')}
          </Button>
        </Link>
        <Link href="#about-me" passHref>
          <Button variant="text" as="a">
            {t('landing-cta-alt')}
          </Button>
        </Link>
      </div>
    </Section>
  );
}
