import styles from "./RootCauses.module.css"

export const RootCauses = () => {

    return (
        <div className={styles.container}>
            
            <div className={styles.header}>
                <h3>Root Cause</h3>
                <h3>Context</h3>
                <h3>Strategy</h3>
                <p>+</p>
            </div>

            <div className={styles.rootcause}>
                <div><textarea /></div>
                <div><textarea /></div>
                <div><textarea /></div>
                <p>X</p>
            </div>

            <div className={styles.rootcause}>
                <div><textarea /></div>
                <div><textarea /></div>
                <div><textarea /></div>
                <p>X</p>
            </div>

        </div>
    )
}