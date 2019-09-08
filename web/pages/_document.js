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
        <Head>
          {this.props.styleTags}
          <script src="https://kit.fontawesome.com/d1bedd9d7d.js"></script>
        </Head>
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
            <script src="/static/assets/js/jquery-1.12.1.min.js"></script>

            <script src="/static/assets/js/popper.min.js"></script>

            <script src="/static/assets/js/bootstrap.min.js"></script>

            <script src="/static/assets/js/jquery.magnific-popup.js"></script>

            <script src="/static/assets/js/swiper.min.js"></script>

            <script src="/static/assets/js/masonry.pkgd.js"></script>

            <script src="/static/assets/js/owl.carousel.min.js"></script>
            <script src="/static/assets/js/jquery.nice-select.min.js"></script>

            <script src="/static/assets/js/slick.min.js"></script>
            <script src="/static/assets/js/jquery.counterup.min.js"></script>
            <script src="/static/assets/js/waypoints.min.js"></script>
            <script src="/static/assets/js/contact.js"></script>
            <script src="/static/assets/js/jquery.ajaxchimp.min.js"></script>
            <script src="/static/assets/js/jquery.form.js"></script>
            <script src="/static/assets/js/jquery.validate.min.js"></script>
            <script src="/static/assets/js/mail-script.js"></script>

            <script src="/static/assets/js/custom.js"></script>
          </Head>
        </body>
      </html>
    )
  }
}

export default MyDocument
