/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import { ReactElement } from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { GoogleAnalytics } from '@bradtaniguchi-dev/common-react';

export default class CustomDocument extends Document<{
  styleTags: ReactElement[];
  googleAnalytics: string;
}> {
  static async getInitialProps(context: DocumentContext) {
    const { renderPage } = context;

    const initialProps = await Document.getInitialProps(context);

    const sheet = new ServerStyleSheet();

    const page = renderPage(
      (App: any) => (props: any) => sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    const googleAnalytics = process.env.GOOGLE_ANALYTICS;

    return { ...initialProps, ...page, styleTags, googleAnalytics };
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.styleTags}
          <GoogleAnalytics googleAnalyticsKey={this.props.googleAnalytics} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}