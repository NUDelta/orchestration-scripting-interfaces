import styles from './MainBody.module.css';
import { Detector } from './Detector';
import { RootCauses } from './RootCauses';
import  GeneralContext  from './GeneralContext';
import { useState } from 'react';
import modifyTest from '../pages/api/test/save'

export const MainBody = ({data, id}) => {
  const [detectorData, setDetectorData] = useState('');
  const [xml, setXml] = useState('');
  const [generalContextData, setGeneralContextData] = useState('');
  // const [rootCausesData, setRootCausesData] = useState('');

  console.log('MANBODY CHANGED:', detectorData)

  const handleSaveScript = async (id, generalContextData, Xml, detectorData) => {
    try {
      console.log('GEN CON: ', generalContextData)
      const updatedData = 
      {
        // title: '',
        // sigName: '',
        // Description: '',
        Detector: [Xml, detectorData],
        GeneralContext: generalContextData,
        // RC_C_S: [{
        //       RC: '',
        //       C: [''],
        //       S: '',
        //     }]
      }

      const response = await fetch(`../api/test/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      console.log('SAVE: ', response)
  
      if (!response.ok) {
        throw new Error('Request failed');
      }
  
      const data = await response.json();
      console.log(data); // Handle the response data as per your requirements
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <Detector onDetectorDataChange={setDetectorData} onXmlChange={setXml} />
      {/* <Detector /> */}
      <GeneralContext onGeneralContextDataChange={setGeneralContextData} />
      {/* <RootCauses onRootCausesDataChange={setRootCausesData} /> */}
      <RootCauses />
      <button onClick={() => handleSaveScript(id, generalContextData,xml, detectorData)}>Save Script</button>
    </div>
  );
};
