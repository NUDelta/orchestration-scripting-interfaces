import type { NextPage } from 'next';
import Head from 'next/head';
import { MainBody } from '../components/MainBody';

const Home: NextPage = () => {
  return (
    <div className="bodyContainer">
      <Head>
        <title>Orchestration Scripting Interface</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainBody />
    </div>
  );
};

export default Home;
