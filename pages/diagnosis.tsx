import React, { useEffect , useState} from 'react';
import styles from './diagnosis.module.css';
import Sidebar from '../components/DiagSidebar';
import Context from '../components/DiagContext'
import Hypothesis from '../components/Hypothesis'

const DiagnosisPage: React.FC = () => {
  useEffect(() => {
  }, []);

  const [problemContent, setProblemContent] = useState(
    'Students are significantly undercommitted in this sprint'
  );

  const [hypoContent, setHypoContent] = useState('fill in your first hunch here!');

  return (
    <div className={styles.container}>
      <div className={styles.column1}>
        <Sidebar
            content={problemContent}
            setContent={setProblemContent}
            title="Your detector called Undercommitted has been triggered for OSADE."
        />
      </div>
      <div className={styles.column2}>
        <Context/>
      </div>
      <div className={styles.column3}>
        <Hypothesis
            hypoContent = {hypoContent}
            setHypoContent = {setHypoContent}
        />
      </div>
    </div>
  );
};

export default DiagnosisPage;
