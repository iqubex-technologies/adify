import Document, { Head, Main, NextScript } from 'next/document'
import { withRouter } from 'next/router'
import { ServerStyleSheet } from 'styled-components'

// To render styles on the server-side (for styled-components)
class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const isProduction = process.env.NODE_ENV === 'production'
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    const router = withRouter(this)
    return { ...page, styleTags, router, isProduction }
  }

  setGoogleTags = () => ({
    __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.GA_TRACKING_ID}');
      `,
  })

  render() {
    return (
      <html lang="en">
        <Head>{this.props.styleTags}</Head>
        <body style={{ padding: 0, margin: 0 }}>
          <noscript>
            <div
              style={{
                width: '900px',
                margin: '20% auto',
                textAlign: 'center',
              }}
            >
              <h2>
                It's pity that you wanna live in a{' '}
                <span style={{ color: 'red' }}>world without JavaScript!</span>{' '}
                🌎
              </h2>
            </div>
          </noscript>

          <Main />
          <NextScript />

          {this.props.isProduction && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
              />
              <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={this.setGoogleTags()}
              />
            </>
          )}

          <Head>
            <script src="/public/assets/js/jquery-1.12.1.min.js"></script>

            <script src="/public/assets/js/popper.min.js"></script>

            <script src="/public/assets/js/bootstrap.min.js"></script>

            <script src="/public/assets/js/jquery.magnific-popup.js"></script>

            <script src="/public/assets/js/swiper.min.js"></script>

            <script src="/public/assets/js/masonry.pkgd.js"></script>

            <script src="/public/assets/js/owl.carousel.min.js"></script>
            <script src="/public/assets/js/jquery.nice-select.min.js"></script>

            <script src="/public/assets/js/slick.min.js"></script>
            <script src="/public/assets/js/jquery.counterup.min.js"></script>
            <script src="/public/assets/js/waypoints.min.js"></script>
            <script src="/public/assets/js/contact.js"></script>
            <script src="/public/assets/js/jquery.ajaxchimp.min.js"></script>
            <script src="/public/assets/js/jquery.form.js"></script>
            <script src="/public/assets/js/jquery.validate.min.js"></script>
            <script src="/public/assets/js/mail-script.js"></script>

            <script src="/public/assets/js/custom.js"></script>
          </Head>
        </body>
      </html>
    )
  }
}

export default MyDocument
