import React from 'react';
import TagManager from 'react-gtm-module';
import { Helmet } from 'react-helmet';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import globalEs from '../translations/es/global.json';
import globalEn from '../translations/en/global.json';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

// import i18n (needs to be bundled ;))

const tagManagerArgs = {
  gtmId: 'GTM-PGT7638',
};

TagManager.initialize(tagManagerArgs);

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    es: {
      global: globalEs,
    },
    en: {
      global: globalEn,
    },
  },
});

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Juan Pablo Wazsuk</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Psychotherapist" />
      </Helmet>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </>
  );
};
