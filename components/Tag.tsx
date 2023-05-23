import styles from "./Tag.module.css"
import { useState } from "react";

export const Tag = ({name, index, RCs, setRCs, selectedContexts, setTagContexts} : any) => {
    const [tagSelectedContexts, setTagSelectedContexts] = useState(selectedContexts)

    const removeContext = () => {
        const copy = [...RCs];
        console.log('TAG Copy before:', copy)
        // copy[index].context.delete(name);
        console.log('COPY: ', copy[index].context)
        console.log('COPY name: ', name)
        copy[index].context = copy[index].context.filter(item => item !== name);
        console.log('TAG Copy after:', copy)
        setRCs(copy);
        setTagContexts(copy[index].context)
        // const updatedSelectedContexts = selectedContexts.filter(item => item !== name);
        // console.log('TAG Updated:', updatedSelectedContexts)
        // setTagSelectedContexts(updatedSelectedContexts);
    }
    // console.log('TAG:', tagSelectedContexts)
    // setTagContexts(tagSelectedContexts)

    return (
        <div className={styles.container}>
            <p>{name}</p>
            <button onClick={removeContext}>x</button>
        </div>
    )
}