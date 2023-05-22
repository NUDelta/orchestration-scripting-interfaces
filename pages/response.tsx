import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import styles from "./response.module.css"
import { RootCauses } from '../components/response/RootCauses';
import { GetServerSideProps } from 'next';
import connectMongo from "../utils/connectMongo"
import { ObjectId } from 'mongodb'


// const DETECTOR = "Student is Overcommited"
// const REASONS = ["20 points spent by Student A out of 16 points available", "Currently is end of sprint"]
// const GEN_CONTEXT = [{title: "Story Title", data: "Building a user interface for diagnosing RCs"}, {title: "Last Canvas Edit", data: "5/9/23 6:12 PM"}]
// const ROOT_CAUSES = [{RC: "RC A", context: ["Context A1", "Context A2"], strategy: "Strategy A..."}, {RC: "RC B", context: ["Context B1", "Context B2"], strategy: "Strategy B..."}, {RC: "RC C", context: ["Context C1", "Context C2"], strategy: "Strategy C..."}]

const Home: NextPage = ({reasons, gen_context, detector, root_causes}) => {

    const [items, setItems] = useState(root_causes);

    const addRootCause = () => {
        const updatedItems = [...items];
        const largestId = updatedItems.reduce((maxId, item) => {
          return item.id > maxId ? item.id : maxId;
        }, 0);
        const newRC = {
          id: largestId + 1,
          RC: '',
          context: [],
          strategy: '',
          Disabled: false,
          Selected: false,
        };
        updatedItems.unshift(newRC);
        setItems(updatedItems);
        console.log('Adding RC')
      };
  


    return (
      <div className={styles.container}>
        <h1>Your detector called {detector} has been triggered.</h1>

        <div className={styles.section}>
            <h2>Detector Debrief</h2>
            <div className={styles.debrief}>
                <p>Detector block will go here</p>
                <div>
                    <p>The detector was triggered because:</p>
                    <ul className='list-disc list-inside'>
                        {reasons.map((reason) => <li key={reason}>{reason}</li>)}
                    </ul>
                </div>
            </div>
        </div>

        <div className={styles.section}>
            <h2>General Context</h2>
            <ul className='list-disc list-inside'>
                {gen_context.map((reason) => <li key={reason.title}><span style={{fontWeight: 'bold'}}>{reason.title}:</span> {reason.data}</li>)}
            </ul>
        </div>

        <div className={styles.titleContainer}>
            <h2 className={styles.RCtitle}>Root Causes & Strategies</h2>
            <button className={styles.addButton} onClick={() => addRootCause()}>Add Root Cause</button>
        </div>
        <RootCauses items={items} setItems={setItems} />
      </div>
    );
  };
  
  export default Home;

  export const getServerSideProps: GetServerSideProps = async (context) => {
    let script_id = context.query?.script

    let response_data = await connectMongo({find: "responses", filter: {script: script_id}})
    response_data = response_data[0]

    let script_data = await connectMongo({find: "scripts", filter: {script: script_id}})
    script_data = script_data[0]
    console.log('SCRIPT DATA:', script_data)
    
    let root_causes = []
    for (let i=0; i < script_data.RC_C_S.length; i++) {
      let root_cause = script_data.RC_C_S[i]
      let context = response_data.rc_context[i]
      if (!Array.isArray(context)) {
        context = [context]
      }
      root_causes.push({id: i, RC: root_cause.RC, context: context, strategy: root_cause.S})
    }

    let gen_context = response_data.gen_context
    if (!Array.isArray(gen_context)) {
      gen_context = [gen_context]
    }

    return {props: {reasons: response_data.triggers, gen_context: gen_context, detector: script_data.title, root_causes: root_causes}}
  };