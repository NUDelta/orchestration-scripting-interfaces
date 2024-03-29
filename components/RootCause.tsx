import styles from "./RootCause.module.css"
import React, { useState, useEffect } from 'react';
import { Context } from "./Context"
import { Strategy } from "./Strategy"

export const RootCause = ({ data, index, RCs, setRCs, id} : any) => {
    const workspaceId = `workspace${id+1}`
    let initialRootCause = ''
    let initialStrategy = ''
    if (data[0].RC_C_S[index]){
        initialRootCause = data[0].RC_C_S[index].rootCause;
        initialStrategy = data[0].RC_C_S[index].strategy;
    }
    const updatedRCs = [...RCs];

    const deleteRC = () => {
        let copy = [...RCs]
        copy.splice(index, 1)
        setRCs(copy)
    }

    const updateRC = (val : string, field : string) => {
        let copy = [...RCs]
        // copy[index][field] = val
        copy[index] = { ...copy[index], [field]: val };
        setRCs(copy)
    }

    useEffect(() => {
        // updatedRCs[index].rootCause = initialRootCause;
        // updatedRCs[index].strategy = initialStrategy;
        // updatedRCs[index] = {
        //     ...updatedRCs[index],
        //     rootCause: initialRootCause,
        //     strategy: initialStrategy,
        //   };
        // setRCs(updatedRCs);
        setRCs(prevRCs => {
            const updated = [...prevRCs];
            updated[index] = {
              ...updated[index],
              rootCause: initialRootCause,
              strategy: initialStrategy,
            };
            return updated;
          });
      }, [initialRootCause, initialStrategy, index, setRCs]);
    //   [data, index]

    return (
        <div className={styles.container}>
            <div><textarea name="rootCause" value={RCs[index].rootCause} onChange={(e) => updateRC(e.target.value, e.target.name)} defaultValue={initialRootCause}/></div>
            <div><Context data={data} RCs={RCs} index={index} setRCs={setRCs} /></div>
            <div><textarea name="strategy" value={RCs[index].strategy} onChange={(e) => updateRC(e.target.value, e.target.name)} defaultValue={initialStrategy}/></div>
            {/* <div><Strategy RCs={RCs} index={index} setRCs={setRCs} workspaceId={workspaceId} onStrategyChange={setStrategy}/></div> */}
            <button onClick={deleteRC}>X</button>
        </div>
    )
}