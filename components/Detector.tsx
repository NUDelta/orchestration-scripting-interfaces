import dynamic from 'next/dynamic';
import styles from './Detector.module.css'
import { useState, useEffect} from 'react';

const BlocklyEditor = dynamic(() => import('./BlocklyEditor'), { ssr: false });

export const Detector = ({onDetectorDataChange}) => {
    const [detector, setDetector] = useState([]);

    return (
        <div className={styles.container}>
            <h2>Detector</h2>

            <div className={styles.blockly}>
                <BlocklyEditor workspaceId="workspace1"/>
            </div>
        </div>
    )
}