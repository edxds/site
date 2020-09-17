import React, { useEffect } from 'react';
import NApp, { AppContext, AppProps } from 'next/app';

import { appWithTranslation, i18n } from '@root/i18n';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== undefined) {
      i18n.on('languageChanged', (lang) => {
        const html = document.querySelector('html');
        if (html) html.setAttribute('lang', lang);
      });
    }
  }, []);

  return <Component {...pageProps} />;
}

App.getInitialProps = async (appContext: AppContext) => ({
  ...(await NApp.getInitialProps(appContext)),
});

export default appWithTranslation(App);
