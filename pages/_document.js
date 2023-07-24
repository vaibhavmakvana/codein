import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const siteveryficationcode = process.env.GOOGLE_SITE_VERIFY;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="utf-8" />
        <meta name="google-site-verification" content={siteveryficationcode} />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta property="og:image" content="https://codingwebstudio.com/favicon.ico" />
        <meta name="description"
          content="CodingWebStudio offers free and paid website code solutions for businesses looking to establish a strong online presence. Our Website delivers high-quality, responsive, and user-friendly web solutions. From front-end design to back-end development, we provide comprehensive coding services to help businesses thrive in the digital world." />
        <meta name="keywords"
          content="codingwebstudio, codingstudio, coding web studio, web development, web studio, website design, responsive websites, innovative websites, user-friendly websites, coding solutions, web design, coding, custom websites, front-end development, back-end development, coding services, web development agency,free website code, paid website code, responsive design, customizable templates, bespoke designs, web development services, digital marketing, UI/UX design, HTML, CSS, JavaScript, React, Next.js, Node.js, PHP, Laravel, WordPress, Shopify" />
        <meta name="author" content="CodingWebStudio" />
        <meta property="og:title" content="CodingWebStudio | Professional Coding Services for Web Development" title="Codingwebstudio" />
        <meta property="og:description"
          content="CodingWebStudio offers free and paid website code solutions for businesses looking to establish a strong online presence. Our Website delivers high-quality, responsive, and user-friendly web solutions. From front-end design to back-end development, we provide comprehensive coding services to help businesses thrive in the digital world." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.codingwebstudio.com/" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="icon" href="/img/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&family=Signika+Negative:wght@600&family=Trade+Winds&display=swap"
          rel="stylesheet"></link>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-828R6W0BWX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-828R6W0BWX');
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
