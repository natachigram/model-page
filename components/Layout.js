import React from 'react';
import Nav from './Nav';
import Head from 'next/head';
function Layout({children}) {
  return (
    <div>
      <Head>
        <title>Cocomill</title>
        <meta name='keyword' content='Fashion/Commercial Model' />
      </Head>
      <Nav />
      {children}
    </div>
  );
}

export default Layout;
