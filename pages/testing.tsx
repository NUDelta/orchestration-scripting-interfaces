import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import styles from "./response.module.css"
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import { Accordion, AccordionItem, AccordionPanel, AccordionButton, AccordionIcon } from "@vygruppen/spor-accordion-react";

const DETECTOR = "Fully Immersed In One Category"
const REASONS = ["Sprint Log: {10} out of {10} points spent are under category {tech}", "Currently is end of sprint 3: 05/01-05/14"]
const GEN_CONTEXT = [{title: "Summary of Sprint Log Stories", data: "Building a user interface for diagnosing RCs"}, {title: "Last Canvas Edit", data: "5/9/23 6:12 PM"}]
const ROOT_CAUSES = [{RC: "Student's riskiest risk requires them to work mostly on a particular category", 
                      context: ["Sprint Log: Riskiest Risk in Planning View: There is a disconnect between our technological progress and conceptual approach (which we cannot test unless we have a working prototype) so we need to build the basic architecture first. We are trying to address the asynchronous approach in an easier way with an MVP which can still show the contributor what the other group's contribution is.  For our deliverable - we want to create an MVP that captures the basic end to end journey"],
                      strategy: "Strategy A..."}, 
                     {RC: "RC B", context: ["Context B1", "Context B2"], strategy: "Strategy B..."}, 
                     {RC: "RC C", context: ["Context C1", "Context C2"], strategy: "Strategy C..."}]

const SPRINTLOG_STORY = 
{ title: "Build MVP features",
  Purpose: "https://www.figma.com/file/dK6peoTAK4yGJvWK20Oapu/DTR?type=design&node-id=205%3A144&t=DCBFLt97av9yWDjP-1",
  Deliverable: "Sprint video; updated design log and GIT",
  Points_required: 10,
  Status: "Incomplete"
}

const SPRINTLOG_TASKs = 
[{ title: "Home Page - Display all scenes for participation",
  Points_required: 0,
  Category: "tech",
  assigned_to: 'everyone',
},{ title: "Prestory template - Show analogous contribution from other group",
Points_required: 0,
Category: "tech",
assigned_to: 'everyone',
},
{ title: "Prestory template - Insert annotation fields",
  Points_required: 0,
  Category: "tech",
  assigned_to: 'everyone',
},{ title: "Results page - show list of contributed scenes",
Points_required: 0,
Category: "tech",
assigned_to: 'everyone',
}]

const Home: NextPage = () => {

    const [items, setItems] = useState([
        // Selected = opacity = 0.3 -> not Selected
        { id: 1, RC: "Student planned to work on different categories, but got stuck working on one of them", 
        context: ["See General Context for Summary of Sprint Log Tasks", "Github-Most Recent Commit Contains 'Error': Commit by oscarddd at 1:53AM 'Some error :<'"], 
        strategy: "Ask students what roadblocks did they encounter and encourage help-seeking", Disabled:false, Selected:0.3},
        { id: 2, RC: "Student's riskiest risk requires them to work mostly on a particular category", 
        context: ["Sprint Log: Riskiest Risk in Planning View: There is a disconnect between our technological progress and conceptual approach (which we cannot test unless we have a working prototype) so we need to build the basic architecture first. We are trying to address the asynchronous approach in an easier way with an MVP which can still show the contributor what the other group's contribution is.  For our deliverable - we want to create an MVP that captures the basic end to end journey"], 
        strategy: "Ask student to reserve 10 - 15% of time to creating a clear 'spec' or knowledge representation for their deliverable", 
        Disabled: false, 
        Selected:0.3},
        { id: 3, RC: "Student didn't recognize the importance of slicing", 
        context: ["See General Context for Summary of Sprint Log Tasks", "See General Context for Summary of Sprint Log Stories"], 
        strategy: "Review student's sprint plan with them to help them recognize how they can advance their understanding by working across the DTR categories", Disabled:false, Selected:0.3},
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
          Selected: 0.3,
        };
        updatedItems.unshift(newRC);
        setItems(updatedItems);
        console.log('Adding RC')
      };
      
    const SetDisableStatus = ({ itemIndex }) => {
        const updatedDisabledItems = [...items];
        const desiredDictIndex = items.findIndex((item) => item.id === itemIndex);
      
        // Check if the desired item was found
        if (desiredDictIndex !== -1) {
          const updatedDict = { ...items[desiredDictIndex] };
          updatedDict.Disabled = !updatedDict.Disabled;
      
          const updatedList = [
            ...updatedDisabledItems.slice(0, desiredDictIndex),
            updatedDict,
            ...updatedDisabledItems.slice(desiredDictIndex + 1)
          ];
      
          setItems(updatedList);
        }
      
        return null;
      };

    const ToggleSelected = ({itemIndex}) => {
        const updatedDisabledItems = [...items];
        const desiredDictIndex = items.findIndex(item => item.id === itemIndex);
        console.log(itemIndex + ' ' + desiredDictIndex)
        console.log(items)

        // Check if the desired item was found
        if (desiredDictIndex !== -1) {
          const updatedDict = { ...items[desiredDictIndex]};
          if (updatedDict.Selected == 0.3) {
            updatedDict.Selected = 1
          } else {
            updatedDict.Selected = 0.3
          }
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
        console.log(itemIndex + "Selected")
        return null;
    };
    
    const [expandedTasks, setExpandedTasks] = useState([]);

    const toggleTask = (title) => {
      if (expandedTasks.includes(title)) {
        setExpandedTasks(expandedTasks.filter((task) => task !== title));
      } else {
        setExpandedTasks([...expandedTasks, title]);
      }
    };

    const SortableItem = SortableElement(({ item }) => {
        const [rootCauseInput, setRootCauseInput] = useState(item.RC);
      
        const handleRootCauseInputChange = (e) => {
          setRootCauseInput(e.target.value);
        };

        const handleRootCauseChange = (itemId) => {
            const updatedItems = items.map((item) => {
              if (item.id === itemId) {
                console.log('Input: ', rootCauseInput)
                return { ...item, RC: rootCauseInput};
              }
              return item;
            });
            console.log(updatedItems)
            setItems(updatedItems);
            return null;
        };

        const [strategyInput, setStrategyInput] = useState(item.RC);
      
        const handleStrategyInputChange = (e) => {
            setStrategyInput(e.target.value);
        };

        const handleStrategyChange = (itemId) => {
            const updatedItems = items.map((item) => {
              if (item.id === itemId) {
                console.log('Input: ', strategyInput)
                return { ...item, strategy: strategyInput};
              }
              return item;
            });
            setItems(updatedItems);
            return null;
        };

        const [editedStrategy, setEditedStrategy] = useState(item.strategy);
        const [isEditing, setIsEditing] = useState(false);
        
        const handleEditClick = () => {
          setIsEditing(true);
        };
      
        const handleSaveClick = (e, itemId) => {
            const updatedItems = items.map((item) => {
                if (item.id === itemId) {
                  return { ...item, strategy: editedStrategy};
                }
                return item;
              });
              setIsEditing(false);
              setItems(updatedItems);
              console.log(updatedItems)
              console.log('Strat', editedStrategy)
              console.log('ISEDITING?:', isEditing)
              return null;
        };
      
        const handleCancelClick = () => {
          setEditedStrategy(item.strategy);
          setIsEditing(false);
        };
      
        return (
          <div className={styles.leftandright}>
            <div className={styles.firstElement}>
              <button
                className={styles.selectButton}
                style={{ opacity: item.Selected }}
                onClick={() => ToggleSelected({ itemIndex: item.id })}
              >
                ✅
              </button>
            </div>
            <div className={styles.leftElement}>
              <AccordionItem
                className={styles.accordionItem}
                style={{ opacity: item.Disabled ? 0.45 : 1 }}
                key={item.RC}
                isDisabled={item.Disabled}
              >
                <AccordionButton style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {item.RC !== '' ? (
                        <>
                        <p style={{marginRight: '10px', marginLeft: '0px',textAlign: 'left'}}>{item.RC}</p>
                        </>
                    ) : (
                        <>
                        <input
                            type="text"
                            style={{ width: 450 }}
                            placeholder="Enter your Root Cause here..."
                            // value={item.RC}
                            onChange={(e) => handleRootCauseInputChange(e)}
                            />
                        <button onClick={() => handleRootCauseChange(item.id)}>Save</button>
                        </>
                    )}
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel className={styles.accordionPanel}>
                  <div style={{marginRight: '10px'}}>
                    <h4>Context</h4>
                    <ul className="list-disc list-inside">
                      {item.context.map((context) => (
                        <li key={context}>{context}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    {item.strategy !== '' ? (
                      <>
                        <h4>Strategy</h4>
                        {isEditing ? (
                            <>
                            <textarea
                                value={editedStrategy}
                                onChange={(e) => setEditedStrategy(e.target.value)}
                            />
                            <button onClick={(e)=> handleSaveClick(e, item.id)}>Save</button>
                            <button onClick={handleCancelClick}>Cancel</button>
                            </>
                        ) : (
                            <>
                            <p>{editedStrategy}</p>
                            <button onClick={handleEditClick}>Edit</button>
                            </>
                        )}
                      </>
                    ) : (
                      <>
                      <textarea
                        type="text"
                        style={{ width: 300 }}
                        placeholder="Enter your Strategy here..."
                        onChange={(e) => handleStrategyInputChange(e)}
                      />
                      <button onClick={() => handleStrategyChange(item.id)}>Save</button>
                      </>
                    )}
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </div>
            <div className={styles.rightElement}>
              <button className={styles.disableButton} onClick={() => SetDisableStatus({ itemIndex: item.id })}>
                {item.Disabled ? 'Enable' : 'Disable'}
              </button>
            </div>
          </div>
        );
      });            
    
    const SortableList = SortableContainer(({ items }) => (
        <Accordion>
          {items.map((item, index) => (
            <SortableItem key={item.id} index={index} item={item} />
          ))}
        </Accordion>
    ));


    return (
      <div className={styles.container}>
        <h1>Your detector called {DETECTOR} has been triggered for Project Collective Narrative.</h1>

        <div className={styles.section}>
            <h2>Detector Debrief</h2>
            <div className={styles.debrief}>
                <p>Detector description: <br></br> At the end of each sprint, check if students dedicated >98% of points to one D T R category</p>
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
                {/* {GEN_CONTEXT.map((reason) => <li key={reason.title}><span style={{fontWeight: 'bold'}}>{reason.title}:</span> {reason.data}</li>)} */}
                <p><b>Summary of Sprint Log Stories [Total Number of Stories: 1]</b></p>
                <ul style={{ marginLeft: '40px' }}>
                  {Object.entries(SPRINTLOG_STORY).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
                <br></br>
                <p><b>Summary of Sprint Log Tasks [Total Number of Tasks: 4]</b><i>CLick to Expand</i></p>
                <ul>
                  {SPRINTLOG_TASKs.map((task) => (
                    <li key={task.title}>
                      <div
                        onClick={() => toggleTask(task.title)}
                        style={{ cursor: 'pointer' }}
                      >
                        <p>{task.title}</p>
                      </div>
                      {expandedTasks.includes(task.title) && (
                        <div style={{ marginLeft: '40px' }}>
                          <p>Points required: {task.Points_required}</p>
                          <p>Category: {task.Category}</p>
                          <p>Assigned to: {task.assigned_to}</p>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
            </ul>
            
        </div>

        <div className={styles.titleContainer}>
            <h2 className={styles.RCtitle}>Root Causes & Strategies</h2>
            <button className={styles.addButton} onClick={() => addRootCause()}>Add Root Cause</button>
        </div>
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