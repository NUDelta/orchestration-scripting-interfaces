import styles from './MainBody.module.css';
import { Detector } from './Detector';
import { RootCauses } from './RootCauses';
import  GeneralContext  from './GeneralContext';
import { useState } from 'react';

export const MainBody = ({data, id, onMainBodyChange}) => {
  const [detectorData, setDetectorData] = useState('');
  const [xml, setXml] = useState('');
  const [generalContextData, setGeneralContextData] = useState('');
  // const [rootCausesData, setRootCausesData] = useState('');

  onMainBodyChange[0](detectorData);
  onMainBodyChange[1](xml);
  onMainBodyChange[2](generalContextData)
  console.log('MANBODY CHANGED:', detectorData)

  return (
    <div className={styles.container}>
      <Detector onDetectorDataChange={setDetectorData} onXmlChange={setXml} />
      {/* <Detector /> */}
      <GeneralContext onGeneralContextDataChange={setGeneralContextData} />
      {/* <RootCauses onRootCausesDataChange={setRootCausesData} /> */}
      <RootCauses />
    </div>
  );
};
