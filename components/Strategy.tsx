import { useState } from "react";
import styles from "./Strategy.module.css"
import Modal from 'react-modal';
import dynamic from 'next/dynamic';

const BlocklyEditor = dynamic(
    () => import('./BlocklyEditor'),
    { ssr: false, loading: () => <p>Loading BlocklyEditor...</p> }
  );

export const Strategy = ({RCs, index, setRCS} : any) => {

    const [modalIsOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.container}>
            <img src="pencil.png" onClick={() => setIsOpen(true)} />

            {/* <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} style={{overlay: {zIndex: 100}}}>
                <div className={styles.blockly} style={{ zIndex: 101 }}>
                    <BlocklyEditor workspaceId="workspace2"/>
                </div>
            </Modal> */}
            <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} style={{overlay: {zIndex: 100}}}>
                <BlocklyEditor workspaceId="workspace2" modalIsOpen={modalIsOpen} closeModal={() => setIsOpen(false)} />
            </Modal>
        </div>
    )
}