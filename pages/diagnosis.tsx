import React, { useEffect, useState } from 'react';
import styles from './diagnosis.module.css';
import Sidebar from '../components/DiagSidebar';
import Context from '../components/DiagContext';
import HypothesisList from '../components/HypothesisList';

const DiagnosisPage: React.FC = () => {
  useEffect(() => {}, []);

  const [problemContent, setProblemContent] = useState(
    'Students are significantly undercommitted in this sprint'
  );

  return (
    <div className={styles.container}>
      <div className={styles.column1}>
        <Sidebar
          content={problemContent}
          setContent={setProblemContent}
          title="undercommitted"
        />
      </div>
      <div className={styles.column2}>
        <Context />
      </div>
      <div className={styles.column3}>
        <HypothesisList />
      </div>
    </div>
  );
};

export default DiagnosisPage;