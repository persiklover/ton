import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}