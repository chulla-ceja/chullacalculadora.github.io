import Head from 'next/head';
import GlobalStyle from '../components/GlobalStyle.css';

import img_favicon from '../assets/img/favicon.svg';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href={img_favicon} />
        
        <script async src="https://cdn.splitbee.io/sb.js"></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PR31CLCPW1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PR31CLCPW1');`,
          }}
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
