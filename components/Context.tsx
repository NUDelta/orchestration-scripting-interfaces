import styles from "./Context.module.css"
import { Tag } from "./Tag"
import { useState } from "react"

const options = ["Sprint log-Total Points Spent this Sprint",
                 "Sprint log-Total Points Commited this Sprint",
                 "Sprint log-Summary of Stories", 
                 "Sprint log-Summary of Tasks", 
                 "Sprint log-Riskiest Risk specified in Planning View",
                 "PRC-Specific Slides (Under construction)",
                 "PRC-Time Last Edited",
                 "PRC-Slides Updated in this sprint",
                 "Github-Number of Lines Code Committed this sprint",
                 "Github-Number of Branches Created this sprint",
                 "Github-Summary of Commits made this sprint"]

export const Context = ({data, index, RCs, setRCs} : any) => {

    const addContext = (val : string) => {
        let copy = [...RCs]
        copy[index].context.add(val)
        setRCs(copy)
        const updatedSelectedContexts = [...copy[index].context];
        setSelectedContexts(updatedSelectedContexts);
    }

    const [selectedContexts, setSelectedContexts] = useState(
        [...data[0].RC_C_S[index].context] || []
      );
    console.log('INDEX:', index)
    console.log('SELECTED CONTEXT: ', selectedContexts)

    return (
        <div className={styles.container}>
            <select onChange={(e) => addContext(e.target.value)} value="Select context">
                <option>Select context</option>
                {options.map((x) => <option key={x} selected={selectedContexts.includes(x)}>{x}</option>)}
            </select>
            <div className={styles.contexts}>
                {selectedContexts.map((x: any, i: number) => <Tag key={i} name={x} RCs={RCs} index={index} setRCs={setRCs} selectedContexts={selectedContexts} setTagContexts={setSelectedContexts}/>)}
            </div>
        </div>
    )
}