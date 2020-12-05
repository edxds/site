import React from 'react';

import { Trans, useTranslation } from '@root/i18n';

import { Button, BaseButtonProps } from './Button';
import { PolymorphicComponentProps } from './Box';

export function SwapLanguageButton<E extends React.ElementType>(
  props: PolymorphicComponentProps<E, Omit<BaseButtonProps, 'variant'>>,
) {
  const { t, i18n } = useTranslation();

  const isInPortuguese = i18n.language === 'pt-BR';
  const swapLanguage = () => i18n.changeLanguage(isInPortuguese ? 'en' : 'pt-BR');

  return (
    <Button {...props} variant="text" onClick={swapLanguage}>
      <Trans
        t={t}
        i18nKey="swap-language"
        components={{ emoji: <span className="ml-1 text-black" /> }}
      />
    </Button>
  );
}
