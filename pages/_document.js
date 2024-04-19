import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link
                href="https://fonts.bunny.net/css?family=noto-sans:400,500,700,800"
                rel="stylesheet"
            />
            <link rel="shortcut icon" href="/assets/imgs/page/logo/soff study logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument