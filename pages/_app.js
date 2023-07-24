import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>Codingwebstudio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>

}
