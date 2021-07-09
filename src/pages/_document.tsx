import Document, { Html, Head, Main, NextScript } from 'next/document'

import Meta from '@components/meta'

class CustomDocument extends Document {
  // eslint-disable-next-line
  static async getInitialProps(ctx: any): Promise<any> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <Meta />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
