import type { NextPage } from 'next';
import Head from 'next/head';
import { MainBody } from '../components/MainBody';
import { Sidebar } from '../components/Sidebar';

const Home: NextPage = () => {
  return (
    <div className="bodyContainer">
      <Head>
        <title>Orchestration Scripting Interface</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen relative">

        <div className="grid grid-cols-25/75">
          <Sidebar />
          <MainBody />  
        </div>

      </main>

    </div>
  );
};

export default Home;
