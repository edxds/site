import React from 'react';

import { Trans, useTranslation } from '@root/i18n';

import { Box } from './Box';
import { Button, ButtonProps } from './Button';

export function SwapLanguageButton(props: Pick<ButtonProps, 'css'>) {
  const { t, i18n } = useTranslation();

  const isInPortuguese = i18n.language === 'pt-BR';
  const swapLanguage = () => i18n.changeLanguage(isInPortuguese ? 'en' : 'pt-BR');

  return (
    <Button variant="text" onClick={swapLanguage} {...props}>
      <Trans
        t={t}
        i18nKey="swap-language"
        components={{ emoji: <Box css={{ ml: '$1', color: 'black' }} as="span" /> }}
      />
    </Button>
  );
}
