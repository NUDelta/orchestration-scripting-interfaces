import styles from './MainBody.module.css';
import { Detector } from './Detector';
import { RootCauses } from './RootCauses';
import  GeneralContext  from './GeneralContext';
import { useState } from 'react';

export const MainBody = () => {
  const [detectorData, setDetectorData] = useState('');
  const [generalContextData, setGeneralContextData] = useState('');
  const [rootCausesData, setRootCausesData] = useState('');

  return (
    <div className={styles.container}>
      <Detector onDetectorDataChange={setDetectorData} />
      <GeneralContext onGeneralContextDataChange={setGeneralContextData} />
      <RootCauses onRootCausesDataChange={setRootCausesData} />
      <button>Save Script</button>
    </div>
  );
};
