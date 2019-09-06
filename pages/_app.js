import '../assets/styles/app.scss';

import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

import theme from '../assets/styles/theme';
import Navbar from '../components/Common/Navbar';

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
    const { Component, pageProps, locale, messages } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <IntlProvider locale={locale} messages={messages}>
          <Navbar />
          <Component {...pageProps} />
        </IntlProvider>
      </ThemeProvider>
    );
  }
}

export default MyApp;
