import '../assets/styles/app.scss';

import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import Helmet from 'react-helmet';
import theme from '../assets/styles/theme';
import Navbar from '../components/Common/Navbar';

import { NewsStoreProvider } from '../stores/rootStore';
import metaData from '../utilis/metaData';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // Get the `locale` and `messages` from the request object on the server.
    // In the browser, use the same values that the server serialized.
    const { req } = ctx;
    const { locale, messages } = req || window.__NEXT_DATA__.props;

    return { pageProps, locale, messages };
  }


  render() {
    const {
      Component, pageProps, locale, messages,
    } = this.props;

    return (
      <>
        <Helmet
          titleTemplate={`%s | ${metaData[locale].title}`}
          defaultTitle={metaData[locale].title}
        >
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta property="og:site_name" content={metaData[locale].title} />
          <meta property="og:type" content="website" />
          {/* link */}
          <link rel="canonical" href={metaData.url} />
          <meta property="og:url" content={metaData.url} />
          <meta name="twitter:url" content={metaData.url} />
          {/* desc */}
          <meta name="description" content={metaData[locale].desc} />
          <meta property="og:description" content={metaData[locale].desc} />
          <meta name="twitter:description" content={metaData[locale].desc} />
          {/* images */}
          <meta property="og:image" content={metaData[locale].image} />
          <meta name="twitter:image" content={metaData[locale].image} />
          {/* icons */}
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="apple-touch-icon" href={metaData.icon180} />
          <link rel="apple-touch-icon" sizes="76x76" href={metaData.icon76} />
          <link rel="apple-touch-icon" sizes="152x152" href={metaData.icon152} />
          {/* others */}
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="theme-color" content="#3c3b63" />
        </Helmet>
        <ThemeProvider theme={theme}>
          <IntlProvider locale={locale} messages={messages}>
            <NewsStoreProvider>
              <Navbar />
              <div id="__main">
                <Component {...pageProps} />
              </div>
            </NewsStoreProvider>
          </IntlProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
