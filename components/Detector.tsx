import dynamic from 'next/dynamic';
import styles from './Detector.module.css'
import { useState, useEffect} from 'react';

const BlocklyEditor = dynamic(() => import('./BlocklyEditor'), { ssr: false });

export const Detector = ({onDetectorDataChange, onXmlChange}) => {
    const [detector, setDetector] = useState([]);
    const [xml, setXml] = useState('');
    const [javascriptCode, setJavascriptCode] = useState('');
    
    console.log('DETECTOR CHANGED: ', javascriptCode)
    onDetectorDataChange(javascriptCode);
    onXmlChange(xml);

    return (
        <div className={styles.container}>
            <h2>Detector</h2>

            <div className={styles.blockly}>
                <BlocklyEditor onXmlChange={setXml} onJSChange={setJavascriptCode} workspaceId="workspace1"/>
            </div>
        </div>
    )
}