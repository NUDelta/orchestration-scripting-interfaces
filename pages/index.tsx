import type { NextPage } from 'next'
import Head from 'next/head'
import Blockly from 'blockly';
import Image from 'next/image'
import {MainBody} from '../components/main.jsx';
import {BlocklyWorkSpace} from '../components/blocklyworkspace.jsx'
import dynamic from "next/dynamic";
import { useState } from "react";

const BlocklySpace = dynamic(() => import("../components/BlocklyWorkSpace"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlocklySpace />
      <MainBody />
    </div>
  )
}

export default Home
