import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import connectMongo from '../utils/connectMongo';
import Test from '../models/testModel';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Sig } from '../components/dashboard/Sig'


const SIGS = ["HAT", "NOT CAMP", "BBQ", "OSE", "RALE"]

export default function Home({tests, responses}) {
  const [title, setTitle] = useState('');
  const [sigName, setSigName] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const handleScriptCardClick = async (title) => {
    try {
      const res = await fetch('/api/scripts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });
  
      console.log('RES ', res)
      if (res.ok) {
        const { scriptId } = await res.json();
        console.log('ID:', scriptId)
        router.push(`/scripts/${scriptId}`);
      } else {
        console.log('Script not found');
      }
    } catch (error) {
      console.log('Error fetching script:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const res = await fetch('/api/test/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        sigName: sigName,
        script: '',
        Description: 'Test',
        Detector: ['',''],
        GeneralContext: [''],
        RC_C_S: [{
          id: 0,
          rootCause: '',
          context: [''],
          strategy: '',
        }]
      }),
    });

    const data = await res.json();
    console.log(data);
  
    // Reset input fields and hide the pop-up
    setTitle('');
    setSigName('');
    setShowPopup(false);
  };

  const createTest = () => {
    setShowPopup(true);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          My OSE Dashboard
        </h1>

        <p className={styles.description}>
          Get started by creating {' '}
          <code className={styles.code}>a new script</code>
        </p>
        <button onClick={createTest}>Create Script</button>

        <div className={styles.grid}>
        {tests.map((test) => (
            <a
            // href="https://nextjs.org/docs"
            onClick={() => handleScriptCardClick(test.title)}
            key={test.script}
            className={styles.card}
            >
            <h2>{test.title} &rarr;</h2>
            <p>{test.sigName}</p>
            </a>
        ))}
        </div>

        {showPopup && (
          <div className={styles.popup}>
            <form onSubmit={handleSubmit}>
              <label>
                Title:
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
              </label>
              <label>
                SigName:
                <input type='text' value={sigName} onChange={(e) => setSigName(e.target.value)} />
              </label>
              <button type='submit'>Submit</button>
            </form>
          </div>
        )}

        <p className={styles.description}>
                  Address Your {' '}
                  <code className={styles.code}>Active Issues</code>
                </p>        
        {SIGS.map((sig) => <Sig key={sig} name={sig} responses={responses} />)}

      </main>
    </div>
  );
}
export const getServerSideProps = async () => {
    try {
      console.log('CONNECTING TO MONGO');
      let tests = await connectMongo({find: "scripts"});
      tests.forEach((x) => delete x._id)

      console.log('TEST ', tests)

      let responses = await connectMongo({find: "responses"});
      responses.forEach((x) => delete x._id)
      console.log("RESPONSES:", responses)
  
      // console.log('FETCHING DOCUMENTS');
      // const tests = await Test.find();
      // console.log('FETCHED DOCUMENTS');
  
      return {
        props: {
          tests: tests,
          responses: responses
        },
      };
    } catch (error) {
      console.log(error);
      return {
        notFound: true,
      };
    }
  };