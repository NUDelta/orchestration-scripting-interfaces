import { useState } from "react"
import styles from "./RootCauses.module.css"
import { RootCause } from "./RootCause"

export const RootCauses = () => {

    const [RCs, setRCs] = useState([{id: 1, rootCause: "", context: new Set(), strategy: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="ApplicableSet" x="30" y="30"></block><block type="rootCause" x="200" y="300"></block><block type="Detector" x="30" y="145"></block><block type="StrategiesWrapper" x="30" y="200"></block><block type="Strategies" x="200" y="200"></block></xml>'}]);

    const addRC = () => {
      let copy = [...RCs];
      copy.push({id: copy.length + 1, rootCause: "", context: new Set(), strategy: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="ApplicableSet" x="30" y="30"></block><block type="rootCause" x="200" y="300"></block><block type="Detector" x="30" y="145"></block><block type="StrategiesWrapper" x="30" y="200"></block><block type="Strategies" x="200" y="200"></block></xml>'});
      setRCs(copy);
    };

    return (
        <div className={styles.container}>
            
            <div className={styles.header}>
                <h3>Root Cause</h3>
                <h3>Context</h3>
                <h3>Strategy</h3>
                <button onClick={addRC}>+</button>
            </div>

            {RCs.map((x, i) => <RootCause index={i} key={i} RCs={RCs} setRCs={setRCs} id={x.id}/>)}

        </div>
    )
}