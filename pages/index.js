import Head from 'next/head';
import homeStyles from '../styles/index.module.css';

export default function Home() {
  return (
    <div className={homeStyles.body}>
      <Head>
        <title>Welcome to Cocomill</title>
        <meta name='keyword' content='Fashion/Commercial Model' />
      </Head>
    </div>
  );
}
