import type { NextPage, GetServerSideProps} from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { MainBody } from '../../components/MainBody';
import { Sidebar } from '../../components/Sidebar';
import Test from '../../models/testModel';
import connectMongo from '../../utils/connectMongo';
 
const ScriptPage = ({ tests, id }) => {

  return (
    <div className="bodyContainer">
      <Head>
        <title>Orchestration Scripting Interface</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen relative">
        <div className="grid grid-cols-25/75">
          <Sidebar title={tests.title} sigName={tests.sigName} desc={tests.Description}/>
          <MainBody data={tests} id={id}/>  
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo({find: "scripts"});
    console.log('CONNECTED TO MONGO');

    console.log('FETCHING DOCUMENTS');
    const tests = await Test.findById(id);
    console.log('FETCHED DOCUMENTS');
    console.log(tests)

    if (!tests) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        tests: JSON.parse(JSON.stringify(tests)),
        id: id,
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