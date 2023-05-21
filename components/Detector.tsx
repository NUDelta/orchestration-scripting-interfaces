import dynamic from 'next/dynamic';
import styles from './Detector.module.css'

const BlocklyEditor = dynamic(() => import('./BlocklyEditor'), { ssr: false });

export const Detector = ({onDetectorDataChange}) => {

    return (
        <div className={styles.container}>
            <h2>Detector</h2>

            <div className={styles.blockly}>
                <BlocklyEditor workspaceId="workspace1"/>
            </div>
        </div>
    )
}