import dynamic from 'next/dynamic';
import styles from './Detector.module.css'
import { useState, useEffect} from 'react';

const BlocklyEditor = dynamic(() => import('./BlocklyEditor'), { ssr: false });

export const Detector = ({data, onDetectorDataChange, onXmlChange}) => {
    const [detector, setDetector] = useState([]);
    const [xml, setXml] = useState('');
    const [javascriptCode, setJavascriptCode] = useState('');
    const BlocklyinitialXml = data[0].Detector[0] || '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="ApplicableSet" x="30" y="30"></block><block type="Detector" x="30" y="145"></block></xml>';
    
    console.log('DETECTOR CHANGED: ', javascriptCode)
    onDetectorDataChange(javascriptCode);
    onXmlChange(xml);

    return (
        <div className={styles.container}>
            <h2>Detector</h2>

            <div className={styles.blockly}>
                <BlocklyEditor BlocklyinitialXml={BlocklyinitialXml} onXmlChange={setXml} onJSChange={setJavascriptCode} workspaceId="workspace1"/>
            </div>
        </div>
    )
}