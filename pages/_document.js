import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description"
          content="CodingWebStudio offers free and paid website code solutions for businesses looking to establish a strong online presence. Our Website delivers high-quality, responsive, and user-friendly web solutions. From front-end design to back-end development, we provide comprehensive coding services to help businesses thrive in the digital world." />
        <meta name="keywords"
          content="web development, web studio, website design, responsive websites, innovative websites, user-friendly websites, coding solutions, web design, coding, custom websites, front-end development, back-end development, coding services, web development agency,free website code, paid website code, responsive design, customizable templates, bespoke designs, web development services, digital marketing, UI/UX design, HTML, CSS, JavaScript, React, Next.js, Node.js, PHP, Laravel, WordPress, Shopify" />
        <meta name="author" content="CodingWebStudio" />
        <meta property="og:title" content="CodingWebStudio | Professional Coding Services for Web Development" />
        <meta property="og:description"
          content="CodingWebStudio offers free and paid website code solutions for businesses looking to establish a strong online presence. Our Website delivers high-quality, responsive, and user-friendly web solutions. From front-end design to back-end development, we provide comprehensive coding services to help businesses thrive in the digital world." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.codingwebstudio.com" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&family=Signika+Negative:wght@600&family=Trade+Winds&display=swap"
          rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
