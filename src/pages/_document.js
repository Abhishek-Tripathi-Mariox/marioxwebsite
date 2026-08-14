import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T3RJVNV');`
        }} />
        {/* End Google Tag Manager */}

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CWSN20GJ4F"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CWSN20GJ4F');
          `
        }} />
        {/* End Google Analytics */}

        {/* Google Ads Conversion Tracking */}
        <script dangerouslySetInnerHTML={{
          __html: `
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-11065360955/7n7CCLmx7-IZELuEsJwp',
                'event_callback': callback
              });
              return false;
            }
          `
        }} />

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="fNhjAqSUHKGJbu2qiqNIWMSh5TX8GI_fnkSkKOs3M2Y" />
        {/* End Google Search Console Verification */}

        <Script src="/js/tiny-slider.min.js" strategy="beforeInteractive" />

        {/* ClickTrue Tracking */}
         <script async src="https://ob.brilliantchap.com/i/9773024d6129b63139a46920087cb2da.js" className="ct_clicktrue"></script>
        {/* End ClickTrue Tracking */}

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T3RJVNV"
          height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* ClickTrue Tracking (noscript) */}
        <noscript><iframe src="https://ob.brilliantchap.com/ns/9773024d6129b63139a46920087cb2da.html?ch=" width="0" height="0" style={{display: 'none'}}></iframe></noscript>
        {/* End ClickTrue Tracking (noscript) */}

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
