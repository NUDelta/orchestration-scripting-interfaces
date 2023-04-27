import styles from "./Tag.module.css"

export const Tag = ({name, index, RCs, setRCs} : any) => {

    const removeContext = () => {
        let copy = [...RCs];
        copy[index].context.delete(name)
        setRCs(copy)
    }

    return (
        <div className={styles.container}>
            <p>{name}</p>
            <button onClick={removeContext}>x</button>
        </div>
    )
}