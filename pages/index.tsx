import type { NextPage } from 'next'
import Head from 'next/head'
import { MainBody } from '../components/main';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col p-2">
      <Head>
        <title>Orchestration Scripting Interface</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <h1 className="text-xl font-bold text-left">Create an Orchestration Script Below</h1>
      </div>
      <MainBody />
    </div>
  )
}

export default Home
