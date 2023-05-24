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

const Home: NextPage = ({description, reasons, gen_context, detector, root_causes, id}) => {

    const [items, setItems] = useState(root_causes);

    const updateResponse = () => {
      let s = JSON.stringify(items)
      fetch(`/api/test/update_response?_id=${id}&rcs=${s}`)
    }

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
                <p>{description}</p>
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

        <button className="bg-gray-200 hover:bg-gray-300 active:bg-gray-400 px-4 py-2 rounded-lg"
          onClick={updateResponse}>Save</button>
      </div>
    );
  };
  
  export default Home;

  export const getServerSideProps: GetServerSideProps = async (context) => {
    let response_id = context.query?.response

    let data = await connectMongo({find: "responses", filter: {_id: new ObjectId(response_id)}})
    data = data[0]
    
    let root_causes = []
    for (let i=0; i < data.rcs.length; i++) {
      let root_cause = data.rcs[i]
      let context = root_cause.context
      if (!Array.isArray(context)) {
        context = [context]
      }
      root_causes.push({id: i, rc: root_cause.rc, context: context, strategy: root_cause.strategy, disabled: root_cause.disabled, checked: root_cause.checked})
    }

    let description = data.description
    let gen_context = data.gen_context
    if (!Array.isArray(gen_context)) {
      gen_context = [gen_context]
    }

    let triggers = data.triggers
    if (!Array.isArray(triggers)) {
      triggers = [triggers]
    }

    return {props: {description: description, reasons: triggers, gen_context: gen_context, detector: data.title, root_causes: root_causes, id: data._id.toString()}}
  };