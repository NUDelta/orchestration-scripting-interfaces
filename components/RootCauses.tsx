import { useState } from "react"
import styles from "./RootCauses.module.css"
import { RootCause } from "./RootCause"

export const RootCauses = () => {

    const [RCs, setRCs] = useState([{rootCause: "", context: "", strategy: ""}])

    const addRC = () => {
        let copy = [...RCs]
        copy.push({rootCause: "", context: "", strategy: ""})
        setRCs(copy)
    }

    return (
        <div className={styles.container}>
            
            <div className={styles.header}>
                <h3>Root Cause</h3>
                <h3>Context</h3>
                <h3>Strategy</h3>
                <button onClick={addRC}>+</button>
            </div>

            {RCs.map((x, i) => <RootCause index={i} key={i} RCs={RCs} setRCs={setRCs} />)}

        </div>
    )
}