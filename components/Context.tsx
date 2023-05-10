import styles from "./Context.module.css"
import { Tag } from "./Tag"

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

export const Context = ({index, RCs, setRCs} : any) => {

    const addContext = (val : string) => {
        let copy = [...RCs]
        copy[index].context.add(val)
        setRCs(copy)
    }

    return (
        <div className={styles.container}>
            <select onChange={(e) => addContext(e.target.value)} value="Select context">
                <option>Select context</option>
                {options.map((x) => <option key={x}>{x}</option>)}
            </select>
            <div className={styles.contexts}>
                {[...RCs[index].context].map((x: any) => <Tag name={x} RCs={RCs} index={index} setRCs={setRCs} />)}
            </div>
        </div>
    )
}