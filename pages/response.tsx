import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
// import styles from "./response.module.css"
import { RootCauses } from '../components/response/RootCauses';
import { options } from '../lib/context/options';
import { GetServerSideProps } from 'next';
import connectMongo from '../utils/connectMongo';
import { getContextValue } from '../lib/populateContext';
import { ObjectId } from 'mongodb';
import styles from './diagnosis.module.css';
import Sidebar from '../components/DiagSidebar';
import Context from '../components/DiagContext';
import HypothesisList from '../components/HypothesisList';
import getComputedOrganizationalObjectsForProject from '../pages/api/test/get_OS_project_object.js';
import { itemsEqual } from '@dnd-kit/sortable/dist/utilities';

const Response: NextPage = ({sigName, projName, description, gen_context, detector, root_causes, id, context_lib, hypothesisList, canvasState}) => {
    const [items, setItems] = useState(root_causes);
    const [problemContent, setProblemContent] = useState(
      description
    );
    const [context, setContext] = useState(gen_context);
    const defaultHypothesis = { title: 'First Hunch', content: 'fill in your first hunch here!' };
    const [hypos, setHypos] = useState(hypothesisList || [defaultHypothesis]);
    const [canvas, setCanvas] = useState(canvasState || []);

    const updateResponse = async (desc) => {
      try {
        const response = await fetch('/api/test/update_response', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            _id: id,
            gen_context: JSON.stringify(context),
            hypothesisList: JSON.stringify(hypos),
            description: desc,
            p5Canvas: JSON.stringify(canvas),
            // rcs: JSON.stringify(rclist),
          }),
        });
        if (response.ok) {
          console.log('Database updated successfully.');
        } else {
          console.error('Failed to update Database.');
        }
      } catch (error) {
        console.error('Error updating Database:', error);
      }
    };
    const getScriptByTitle = async () => {
      let title = 'Unbalanced Work Across Partners';
      const res = await fetch('/api/scripts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
      });
      console.log('RESPONSE FETCHED RES', res);
      if (res.ok) {
        const { scriptId } = await res.json();
        let script_root_cause_list = scriptId.RC_C_S;
        return script_root_cause_list;
      } else {
        console.log('Script not found');
      }
    };

    // let rc_list = [];
    // (async () => {
    // rc_list = await getScriptByTitle();
    // console.log('rc_list', rc_list)
    // })();

    useEffect(() => {
      updateResponse(problemContent);
    }, [context, hypos, problemContent, canvas]);
  
    return (
      <div className={styles.container}>
      <div className={styles.column70}>
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>Signal Debrief</h2>
          <p>Your detector for Overcommitted has been triggered for Human-AI Tools for Accounting for Differences. Jiayi and Yiran committed 46 points out of 32 available</p>
        </div>
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>Context</h2>
          <p>Context</p>
        </div>
        <div className={styles.container2}>
          <div className={styles.sideBySide}>
            <div className={styles.sideBySideItem1}>
              <h2 className={styles.headerTitle}>Initial Hunch</h2>
              <p>Based on the signal and contexts, cognitively what is the student doing ineffectively? 
                Metacognitively, what belief might the student have might be causing their ineffective practice?
                Write down your initial hunch of the root cause of this issue. Reference the root cause list for ideas.</p>
              <textarea className={styles.textArea}></textarea>
            </div>
            <div className={styles.sideBySideItem2}>
              <h2 className={styles.headerTitle}>Game Plan</h2>
              <p>Before going into your SIG meeting, write down some questions you plan to ask your students. 
                We have some suggested questions in the root cause list to help you both ask broadly and ask about specific root causes.</p>
              <textarea className={styles.textArea}></textarea>
            </div>
          </div>
        </div>
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>Guidelines for Asking Questions During SIG</h2>
              <p>Here are some guidelines to help you formulate questions to ask during SIG: </p>
                <ul>
                  <li className={styles.list}>Try to scaffold as much as you can by keep asking 'why' to get to the bottom of the issue. 
                    For example, if a student said they didn't reach out for help, ask “why was that? Did you feel a lack of support, 
                    or you didn't know any help-seeking channels?”</li>
                  <li className={styles.list}>Ask metacognitive questions! For the cognitive issues we see, there is usually a metacognitive 
                    cause. Try asking questions like:
                    <ul>
                      <li className={styles.list}>Why did you decide to [action]?</li>
                      <li className={styles.list}>How did you feel when …?</li>
                      <li className={styles.list}>Why did you do one thing over another?</li>
                      <li className={styles.list}>Do you feel like your decision was a mature decision?</li>
                      <li className={styles.list}>Why did you feel compelled to…?</li>
                      <li className={styles.list}>Why is it hard for you to…?</li>
                    </ul>
                  </li>
                </ul>
        </div>
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>Updated Hypothesis</h2>
          <p>updated</p>
        </div>
      </div>
      <div className={styles.column30}>
        <div className={styles.columnContent}>
          <h2 className={styles.headerTitle}>List of Potential Root Causes:</h2>
        </div>
      </div>
    </div>
    );
  };
  
  export default React.memo(Response);

export const getServerSideProps: GetServerSideProps = async (context) => {
  let response_id = context.query?.response;

  let data = await connectMongo({
    find: 'responses',
    filter: { _id: new ObjectId(response_id) },
  });
  data = data[0];

  let root_causes = [];
  for (let i = 0; i < data.rcs.length; i++) {
    let root_cause = data.rcs[i];
    let context = [];
    // let context = root_cause.context
    // if (!Array.isArray(context)) {
    //   context = [context]
    // }
    root_causes.push({
      id: i,
      rc: root_cause.rc,
      context: context,
      strategy: root_cause.strategy,
      disabled: false,
      checked: false,
    });
  }

  let description = data.description;
  let gen_context = data.gen_context;
  if (!Array.isArray(gen_context)) {
    gen_context = [gen_context];
  }

  let triggers = data.triggers;
  if (!Array.isArray(triggers)) {
    triggers = [triggers];
  }

  let sigName = data.sigName;
  let projName = data.projName;

  const project_object = await getComputedOrganizationalObjectsForProject(
    projName
  );

  for (let context of gen_context) {
    context.data = getContextValue(context.title, project_object);
  }

  // creates a library that holds the values of all context options
  const context_lib: Record<string, any> = {};
  options.forEach((option) => {
    context_lib[option] = getContextValue(option, project_object);
  });

  let hypothesisList = data.hypothesisList

  let canvasState: { type: string; xPos: number; yPos: number }[] = [];
  // if canvas isn't initialized properly in DB or canvas is [], use context to initialize it
  if (!Array.isArray(data.p5Canvas) || data.p5Canvas.length == 0) {
    gen_context.forEach((context) => {
      canvasState.push({ type: context.title, xPos: 50, yPos: 50 });
    });
  } else {
    canvasState = data.p5Canvas
  }

  // let canvasState = data.p5Canvas;
  console.log('canvasState', canvasState)

  return {
    props: {
      sigName: sigName,
      projName: projName,
      description: description,
      gen_context: gen_context,
      detector: data.title,
      root_causes: root_causes,
      id: data._id.toString(),
      context_lib: context_lib,
      hypothesisList: hypothesisList,
      canvasState: canvasState,
    }}
  };
