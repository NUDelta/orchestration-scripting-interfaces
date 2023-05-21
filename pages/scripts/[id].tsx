import type { NextPage, GetServerSideProps} from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { MainBody } from '../../components/MainBody';
import { Sidebar } from '../../components/Sidebar';
import Test from '../../models/testModel';
import connectMongo from '../../utils/connectMongo';
 
const ScriptPage = ({ tests }) => {
  return (
    <div className="bodyContainer">
      <Head>
        <title>Orchestration Scripting Interface</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen relative">

        <div className="grid grid-cols-25/75">
          <h1>{tests.title}{tests.sigName}</h1>
          <Sidebar />
          <MainBody />  
        </div>

      </main>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('FETCHING DOCUMENTS');
    const tests = await Test.findById(id);
    console.log('FETCHED DOCUMENTS');
    console.log(tests)

    if (!tests) {
      return {
        notFound: true, // Return a 404 page if script is not found
      };
    }

    return {
      props: {
        tests: JSON.parse(JSON.stringify(tests)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
export default ScriptPage;