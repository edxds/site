import React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

import { i18nPropsFromCtx } from '@root/i18n';

export default class EnhancedDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const i18nProps = i18nPropsFromCtx(ctx);

    return {
      ...initialProps,
      ...i18nProps,
    };
  }

  render() {
    const { lang } = this.props as any;
    return (
      <Html lang={lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
