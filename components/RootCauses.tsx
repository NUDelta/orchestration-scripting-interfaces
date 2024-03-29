import { useState, useEffect } from "react"
import styles from "./RootCauses.module.css"
import { RootCause } from "./RootCause"

export const RootCauses = ({data, onRootCausesChange}) => {

    const [RCs, setRCs] = useState(data[0].RC_C_S||[{id: 1, rootCause: "", context: new Set(), strategy: ''}]);
    console.log('DATA RCS: ', data[0].RC_C_S)
    useEffect(() => {
        onRootCausesChange(RCs);
      }, [RCs, onRootCausesChange]);

    const addRC = () => {
      let copy = [...RCs];
      copy.push({id: copy.length + 1, rootCause: "", context: new Set(), strategy: ''});
      setRCs(copy);
      console.log('RCs: ', RCs)
    };

    return (
        <div className={styles.container}>
            
            <div className={styles.header}>
                <h3>Potential Cause(s)</h3>
                <h3>Context</h3>
                <h3>Strategy</h3>
                <button className={styles.addbutton} onClick={addRC}>+</button>
            </div>

            {RCs.map((x, i) => <RootCause data={data} index={i} key={i} RCs={RCs} setRCs={setRCs} id={x.id}/>)}

        </div>
    )
}