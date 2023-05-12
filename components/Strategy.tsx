import { useState } from "react";
import styles from "./Strategy.module.css"
import Modal from 'react-modal';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const BlocklyEditor = dynamic(
    () => import('./BlocklyEditor'),
    { ssr: false, loading: () => <p>Loading BlocklyEditor...</p> }
  );

export const Strategy = ({RCs, index, setRCs, workspaceId} : any) => {

    const [modalIsOpen, setIsOpen] = useState(false)
    const [editorMode, setEditorMode] = useState("blockly");

    const switchToText = () => {
      setEditorMode("text");
    };
  
    const switchToBlockly = () => {
      setEditorMode("blockly");
    };

    return (
        <div className={styles.container}>
            {editorMode === "blockly" ? (
            <>
            <button className={styles.textbutton} onClick={switchToText}>
                Switch to Text
            </button>
            <Image src="/pencil.png" onClick={() => setIsOpen(true)} alt="" width={10} height={10}/>

            <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} style={{ overlay: { zIndex: 100 } }}>
                <BlocklyEditor workspaceId={workspaceId} RCs={RCs} index={index} setRCs={setRCs} modalIsOpen={modalIsOpen} closeModal={() => setIsOpen(false)} />
            </Modal>
            </>
            ):(
        <>
        <button className={styles.textbutton} onClick={switchToBlockly}>
            Switch to Blockly
          </button>
          <textarea 
            placeholder="Enter your strategy here" 
            className={styles.textarea} />
          </>
      )}
        </div>
    )
}