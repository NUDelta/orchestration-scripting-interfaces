import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
// import styles from "./response.module.css"
import { RootCauses } from '../components/response/RootCauses';
import { GetServerSideProps } from 'next';
import connectMongo from "../utils/connectMongo"
import { ObjectId } from 'mongodb'
import styles from './diagnosis.module.css';
import Sidebar from '../components/DiagSidebar';
import Context from '../components/DiagContext';
import HypothesisList from '../components/HypothesisList';


const Home: NextPage = ({description, reasons, gen_context, detector, root_causes, id}) => {

    const [items, setItems] = useState(root_causes);
    const [context, setContext] = useState(gen_context);
    

    const updateResponse = () => {
      let s = JSON.stringify(items)
      fetch(`/api/test/update_response?_id=${id}&rcs=${s}`)
    }

    useEffect(() => {}, []);

    const [problemContent, setProblemContent] = useState(
      description
    );
  
    return (
      <div className={styles.container}>
        <div className={styles.column1}>
          <Sidebar
            content={problemContent}
            setContent={setProblemContent}
            title={detector}
          />
        </div>
        <div className={styles.column2}>
          <Context items={context} setItems={setContext}/>
        </div>
        <div className={styles.column3}>
          <HypothesisList items={items}/>
        </div>
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