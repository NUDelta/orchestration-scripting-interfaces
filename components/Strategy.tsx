import { useState } from "react";
import styles from "./Strategy.module.css"
import Modal from 'react-modal';

export const Strategy = ({RCs, index, setRCS} : any) => {

    const [modalIsOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.container}>
            <img src="pencil.png" onClick={() => setIsOpen(true)} />

            <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)}>
                <p>Blockly here</p>
            </Modal>
        </div>
    )
}