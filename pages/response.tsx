import type { NextPage } from 'next';
import React, { useState } from 'react';
import styles from "./response.module.css"
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import { Accordion, AccordionItem, AccordionPanel, AccordionButton, AccordionIcon } from "@vygruppen/spor-accordion-react";

const DETECTOR = "Student is Overcommited"
const REASONS = ["20 points spent by Student A out of 16 points available", "Currently is end of sprint"]
const GEN_CONTEXT = [{title: "Story Title", data: "Building a user interface for diagnosing RCs"}, {title: "Last Canvas Edit", data: "5/9/23 6:12 PM"}]
const ROOT_CAUSES = [{RC: "RC A", context: ["Context A1", "Context A2"], strategy: "Strategy A..."}, {RC: "RC B", context: ["Context B1", "Context B2"], strategy: "Strategy B..."}, {RC: "RC C", context: ["Context C1", "Context C2"], strategy: "Strategy C..."}]

const Home: NextPage = () => {
    const [items, setItems] = useState([
        { id: 1, RC: "RC A", context: ["Context A1", "Context A2"], strategy: "Strategy A...", Disabled:false},
        { id: 2, RC: "RC B", context: ["Context B1", "Context B2"], strategy: "Strategy B...", Disabled:false},
        { id: 3, RC: "RC C", context: ["Context C1", "Context C2"], strategy: "Strategy C...", Disabled:false},
      ]);
    
    const handleSortEnd = ({ oldIndex, newIndex }) => {
        setItems(arrayMove(items, oldIndex, newIndex));
    };

    const SetDisableStatus = ({itemIndex}) => {
        const updatedDisabledItems = [...items];
        const desiredDictIndex = items.findIndex(item => item.id === itemIndex);
        console.log(itemIndex + ' ' + desiredDictIndex)
        console.log(items)

        // Check if the desired dictionary was found
        if (desiredDictIndex !== -1) {
          const updatedDict = { ...items[desiredDictIndex]};
          updatedDict.Disabled = !updatedDict.Disabled;
          const updatedList = [
            ...updatedDisabledItems.slice(0, desiredDictIndex),
            updatedDict,
            ...updatedDisabledItems.slice(desiredDictIndex + 1)
          ];
        setItems(updatedList);
        } else {
            console.log(desiredDictIndex)
        return <p>item with id = 1 not found.</p>;
        }
        console.log(itemIndex + "disabled")
        return null;
    };
    
    const SortableItem = SortableElement(({ item }) => (
        <div className="item">
          <button onClick={() => SetDisableStatus({ itemIndex: item.id })}> Disable</button>
          <AccordionItem className={styles.accordionItem} key={item.RC} isDisabled={item.Disabled}>
                    <AccordionButton style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h3>{item.RC}</h3>
                        <AccordionIcon /> 
                    </ AccordionButton>
                    <AccordionPanel className={styles.accordionPanel}>
                        <div>
                            <h4>Context</h4>
                            <ul className='list-disc list-inside'>
                                {item.context.map((context) => <li key={context}>{context}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h4>Strategy</h4>
                            <p>{item.strategy}</p>
                        </div>
                    </AccordionPanel>
                </ AccordionItem>
        </div>
      ));
    
    const SortableList = SortableContainer(({ items }) => (
        <Accordion>
          {items.map((item, index) => (
            <SortableItem key={item.id} index={index} item={item} />
          ))}
        </Accordion>
    ));


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
        <SortableList items={items} onSortEnd={handleSortEnd} />
        {/* <Accordion allowMultiple variant="card" defaultIndex={0}>  
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
        </ Accordion> */}
        {/* {ROOT_CAUSES.map((x) => <Dropdown key={x.RC} RC={x.RC} context={x.context} strategy={x.strategy} />)} */}
      </div>
    );
  };
  
  export default Home;