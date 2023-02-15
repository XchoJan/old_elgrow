import './index.scss';

import MainPage from './index.tsx';
import Head from 'next/head';

export default function MyApp() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </Head>
      <MainPage />
    </>
  );
}
