import type { NextPage, GetServerSideProps} from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { MainBody } from '../../components/MainBody';
import { Sidebar } from '../../components/Sidebar';
import Test from '../../models/testModel';
import connectMongo from '../../utils/connectMongo';
import { ObjectId } from 'mongodb'
import { useState } from 'react';
 
const ScriptPage = ({ tests, id }) => {
  const [desc, setDesc] = useState(tests[0].Description||'');
  const [detectorData, setDetectorData] = useState('');
  const [xml, setXml] = useState('');
  const [generalContextData, setGeneralContextData] = useState(tests[0].GeneralContext||'');
  const [RCs, setRCs] = useState([{id: 1, rootCause: "", context: new Set(), strategy: ''}]|| '');

  const handleReadScript = async (title) => {
    try {
      const response = await fetch(`../api/test/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title}),
      });

      console.log('POST: ', response)
  
      if (!response.ok) {
        throw new Error('Request failed');
      }
  
      const data = await response.json();
      console.log(data); // Handle the response data as per your requirements
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveScript = async (id, desc, generalContextData, Xml, detectorData, RCs) => {
    try {
      console.log('GEN CON: ', generalContextData)
      const convertedRCs = RCs.map(item => ({
        ...item,
        context: [...item.context] // Convert Set to array using spread operator
      }));
      
      console.log('LIST RCs', convertedRCs);
      const updatedData = 
      {
        Description: desc,
        Detector: [Xml, detectorData],
        GeneralContext: generalContextData,
        RC_C_S: convertedRCs
      }

      const response = await fetch(`../api/test/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      console.log('SAVE: ', response)
  
      if (!response.ok) {
        throw new Error('Request failed');
      }
  
      const data = await response.json();
      console.log(data); // Handle the response data as per your requirements
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bodyContainer">
      <Head>
        <title>Orchestration Scripting Interface</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen relative">
        <div className="grid grid-cols-25/75">
          <Sidebar title={tests[0].title} sigName={tests[0].sigName} desc={desc} onDescChange={setDesc}/>
          <MainBody data={tests} id={id} onMainBodyChange={[setDetectorData, setXml, setGeneralContextData, setRCs]}/>  
          <button onClick={() => handleSaveScript(id, desc, generalContextData, xml, detectorData, RCs)}>Save Script</button>
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  try {
    console.log('CONNECTING TO MONGO');
    console.log('SCRIPT ID: ', id)
    const tests = await connectMongo({find: "scripts", filter: {_id: new ObjectId(id)}});
    console.log('SCRIPT: ', tests)
    console.log('CONNECTED TO MONGO');

    console.log('FETCHING DOCUMENTS');
    // const tests = await Test.findById(id);
    console.log('FETCHED DOCUMENTS');

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