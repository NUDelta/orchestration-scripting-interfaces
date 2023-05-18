import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import styles from "./response.module.css"
import { RootCauses } from '../components/response/RootCauses';

const DETECTOR = "Student is Overcommited"
const REASONS = ["20 points spent by Student A out of 16 points available", "Currently is end of sprint"]
const GEN_CONTEXT = [{title: "Story Title", data: "Building a user interface for diagnosing RCs"}, {title: "Last Canvas Edit", data: "5/9/23 6:12 PM"}]
const ROOT_CAUSES = [{RC: "RC A", context: ["Context A1", "Context A2"], strategy: "Strategy A..."}, {RC: "RC B", context: ["Context B1", "Context B2"], strategy: "Strategy B..."}, {RC: "RC C", context: ["Context C1", "Context C2"], strategy: "Strategy C..."}]

const Home: NextPage = () => {
    const [items, setItems] = useState([
        // Selected = opacity = 0.3 -> not Selected
        { id: 1, RC: "RC A", context: ["Context A1", "Context A2"], strategy: "Strategy A...", Disabled:false, Selected: false},
        { id: 2, RC: "RC B", context: ["Context B1", "Context B2"], strategy: "Strategy B...", Disabled:false, Selected: false},
        { id: 3, RC: "RC C", context: ["Context C1", "Context C2"], strategy: "Strategy C...", Disabled:false, Selected: false},
      ]);
    // Disable Button
    const [DisableText, setDisableText] = useState('Disable');
    
    const handleSortEnd = ({ oldIndex, newIndex }) => {
        setItems(arrayMove(items, oldIndex, newIndex));
    };

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
        <h1>Your detector called {DETECTOR} has been triggered.</h1>

        <div className={styles.section}>
            <h2>Detector Debrief</h2>
            <div className={styles.debrief}>
                <p>Detector block will go here</p>
                <div>
                    <p>The detector was triggered because:</p>
                    <ul className='list-disc list-inside'>
                        {REASONS.map((reason) => <li key={reason}>{reason}</li>)}
                    </ul>
                </div>
            </div>
        </div>

        <div className={styles.section}>
            <h2>General Context</h2>
            <ul className='list-disc list-inside'>
                {GEN_CONTEXT.map((reason) => <li key={reason.title}><span style={{fontWeight: 'bold'}}>{reason.title}:</span> {reason.data}</li>)}
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