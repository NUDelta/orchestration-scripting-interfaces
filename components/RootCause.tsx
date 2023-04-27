import styles from "./RootCause.module.css"
import { Context } from "./Context"

export const RootCause = ({index, RCs, setRCs} : any) => {

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
            <div><textarea name="strategy" value={RCs[index].strategy} onChange={(e) => updateRC(e.target.value, e.target.name)} /></div>
            <button onClick={deleteRC}>X</button>
        </div>
    )
}