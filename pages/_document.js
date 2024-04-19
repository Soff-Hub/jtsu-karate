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
          <link rel="shortcut icon" href="/assets/imgs/page/logo/logo-1.png" />
        </Head>
        <body>
          <Main />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
          <NextScript />

        </body>
      </Html>
    )
  }
}

export default MyDocument