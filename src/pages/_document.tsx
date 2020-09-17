import React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

import { i18nPropsFromCtx } from '@root/i18n';

import { css } from '@src/stitches.config';

export default class EnhancedDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;
    let extractedStyles: string[] | undefined;

    ctx.renderPage = () => {
      const { styles, result } = css.getStyles(originalRenderPage);
      extractedStyles = styles;
      return result;
    };

    const initialProps = await Document.getInitialProps(ctx);
    const i18nProps = i18nPropsFromCtx(ctx);

    return {
      ...initialProps,
      ...i18nProps,
      styles: (
        <>
          {initialProps.styles}
          {extractedStyles?.map((content, index) => (
            <style key={index} dangerouslySetInnerHTML={{ __html: content }} />
          ))}
        </>
      ),
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
