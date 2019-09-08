import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import Helmet from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        helmet: Helmet.renderStatic(),
        styleTags: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }


  render() {
    const { helmet, styleTags } = this.props;
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();
    const headAttrs = Object.keys(helmet).filter((el) => el !== 'htmlAttributes' && el !== 'bodyAttributes').map((el) => helmet[el].toComponent());

    return (
      <html {...htmlAttrs}>
        <Head>
          {headAttrs}
          {styleTags}
        </Head>
        <body {...bodyAttrs}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
