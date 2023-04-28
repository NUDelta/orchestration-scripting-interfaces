import styles from "./RootCause.module.css"
import React, { useState, useEffect } from 'react';
import { Context } from "./Context"
import { Strategy } from "./Strategy"

export const RootCause = ({index, RCs, setRCs, id} : any) => {
    const workspaceId = `workspace${id+1}`

    const deleteRC = () => {
        let copy = [...RCs]
        copy.splice(index, 1)
        console.log(index, copy)
        setRCs(copy)
    }

    const updateRC = (val : string, field : string) => {
        let copy = [...RCs]
        copy[index][field] = val
        setRCs(copy)
    }

    return (
        <div className={styles.container}>
            <div><textarea name="rootCause" value={RCs[index].rootCause} onChange={(e) => updateRC(e.target.value, e.target.name)} /></div>
            <div><Context RCs={RCs} index={index} setRCs={setRCs} /></div>
            <div><Strategy RCs={RCs} index={index} setRCs={setRCs} workspaceId={workspaceId}/></div>
            <button onClick={deleteRC}>X</button>
        </div>
    )
}