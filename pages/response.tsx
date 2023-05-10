import type { NextPage } from 'next';
import styles from "./response.module.css"
import { Accordion, AccordionItem, AccordionPanel, AccordionButton, AccordionIcon } from "@vygruppen/spor-accordion-react";

const DETECTOR = "Overcommited"
const REASONS = ["12 points assigned", "10 minutes before SIG"]
const GEN_CONTEXT = [{title: "Story Title", data: "Building a user interface for diagnosing RCs"}, {title: "Last Canvas Edit", data: "5/9/23 6:12 PM"}]
const ROOT_CAUSES = [{RC: "RC A", context: ["Context A1", "Context A2"], strategy: "Strategy A..."}, {RC: "RC B", context: ["Context B1", "Context B2"], strategy: "Strategy B..."}, {RC: "RC C", context: ["Context C1", "Context C2"], strategy: "Strategy C..."}]

const Home: NextPage = () => {
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

        <h2>Root Causes & Strategies</h2>
        <Accordion allowMultiple variant="card" defaultIndex={0}>  
            {ROOT_CAUSES.map((x) => {return (
                <AccordionItem className={styles.accordionItem} key={x.RC}>
                    <AccordionButton style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h3>{x.RC}</h3>
                        <AccordionIcon /> 
                    </ AccordionButton>
                    <AccordionPanel className={styles.accordionPanel}>
                        <div>
                            <h4>Context</h4>
                            <ul className='list-disc list-inside'>
                                {x.context.map((context) => <li key={context}>{context}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h4>Strategy</h4>
                            <p>{x.strategy}</p>
                        </div>
                    </AccordionPanel>
                </ AccordionItem>
            )
            })}
        </ Accordion>
        {/* {ROOT_CAUSES.map((x) => <Dropdown key={x.RC} RC={x.RC} context={x.context} strategy={x.strategy} />)} */}
      </div>
    );
  };
  
  export default Home;