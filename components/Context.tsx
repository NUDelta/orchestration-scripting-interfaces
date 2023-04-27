import styles from "./Context.module.css"
import { Tag } from "./Tag"

const options = ["A", "B", "C", "D", "E"]

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
                {options.map((x) => <option>{x}</option>)}
            </select>
            <div className={styles.contexts}>
                {[...RCs[index].context].map((x: any) => <Tag name={x} RCs={RCs} index={index} setRCs={setRCs} />)}
            </div>
        </div>
    )
}