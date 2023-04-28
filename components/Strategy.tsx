import { useState } from "react";
import styles from "./Strategy.module.css"
import Modal from 'react-modal';
import dynamic from 'next/dynamic';

const BlocklyEditor = dynamic(
    () => import('./BlocklyEditor'),
    { ssr: false, loading: () => <p>Loading BlocklyEditor...</p> }
  );

export const Strategy = ({RCs, index, setRCs, workspaceId} : any) => {

    const [modalIsOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.container}>
            <img src="pencil.png" onClick={() => setIsOpen(true)} />

            <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} style={{ overlay: { zIndex: 100 } }}>
                <BlocklyEditor workspaceId={workspaceId} RCs={RCs} index={index} setRCs={setRCs} modalIsOpen={modalIsOpen} closeModal={() => setIsOpen(false)} />
            </Modal>

            {/* <BlocklyEditor workspaceId={workspaceId} modalIsOpen={modalIsOpen} closeModal={() => setIsOpen(false)} /> */}
        </div>
    )
}