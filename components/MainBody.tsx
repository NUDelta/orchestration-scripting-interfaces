import styles from './MainBody.module.css';
import { Detector } from './Detector';
import { RootCauses } from './RootCauses';
import  GeneralContext  from './GeneralContext';
import { useState } from 'react';

export const MainBody = ({data, id, onMainBodyChange}) => {
  const [detectorData, setDetectorData] = useState('');
  const [xml, setXml] = useState('');
  const [generalContextData, setGeneralContextData] = useState(data[0].GeneralContext||'');
  const [RCs, setRCs] = useState([{id: 1, rootCause: "", context: new Set(), strategy: ''}]);

  onMainBodyChange[0](detectorData);
  onMainBodyChange[1](xml);
  onMainBodyChange[2](generalContextData)
  onMainBodyChange[3](RCs)
  console.log('MANBODY CHANGED:', generalContextData)

  return (
    <div className={styles.container}>
      <Detector onDetectorDataChange={setDetectorData} onXmlChange={setXml} />
      {/* <Detector /> */}
      <GeneralContext data={data} generalContextData={generalContextData} onGeneralContextDataChange={setGeneralContextData} />
      {/* <RootCauses onRootCausesDataChange={setRootCausesData} /> */}
      <RootCauses data={data} onRootCausesChange={setRCs}/>
    </div>
  );
};
