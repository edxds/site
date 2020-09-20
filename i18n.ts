import path from 'path';
import { IncomingMessage } from 'http';

import NextI18N from 'next-i18next';
import NextConfig from 'next/config';
import { NextPageContext } from 'next';

interface IncomingMessageWithI18n extends IncomingMessage {
  language?: string;
  i18n: any;
}

export const i18nPropsFromCtx = (ctx: NextPageContext): Partial<{ lang: string; dir: string }> => {
  if (!(ctx && ctx.req && (ctx.req as IncomingMessageWithI18n).language)) return {};
  const req = ctx.req as IncomingMessageWithI18n;
  return {
    lang: req.language,
    dir: req.i18n && req.i18n.dir(req.language),
  };
};

export const {
  i18n,
  useTranslation,
  withTranslation,
  appWithTranslation,
  Trans,
  Link,
} = new NextI18N({
  defaultLanguage: 'pt-BR',
  otherLanguages: ['en'],
  localeSubpaths: NextConfig().publicRuntimeConfig.localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
});
