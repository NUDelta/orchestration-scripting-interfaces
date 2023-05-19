import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { MainBody } from '../../components/MainBody';
import { Sidebar } from '../../components/Sidebar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { OSEScript } from '../../models/ScriptModel';


const Home: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState<string | undefined>();

    // GET request to get a script
    useEffect(() => {
      // wait for the useRouter hook to asynchronously get the query id
      if (!id) {
        return;
      }
      console.log('id: ', id)
  
      const fetchUser = async () => {
        const response = await fetch(`/api/script/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });
  
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
  
        console.log('GET', response)
  
        const script: OSEScript = await response.json();
        setName(script?.Name);
      }
  
      fetchUser();
    }, [id]);

  return (
    <div className="bodyContainer">
      <Head>
        <title>Orchestration Scripting Interface</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen relative">

        <div className="grid grid-cols-25/75">
          <Sidebar name={name}/>
          <MainBody />  
        </div>

      </main>
    <Link href="/response">
      Generate report page
    </Link>
    </div>
  );
};

export default Home;