import './index.scss';

import MainPage from './index.tsx';
import Head from 'next/head';
import Portfolio from './portfolio';
import 'react-notifications-component/dist/theme.css';
import { ReactNotifications } from 'react-notifications-component';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ReactNotifications isMobile={true} />
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Elgrow</title>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
