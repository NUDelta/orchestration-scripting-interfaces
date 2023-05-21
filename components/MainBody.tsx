import styles from './MainBody.module.css';
import { Detector } from './Detector';
import { RootCauses } from './RootCauses';
import  GeneralContext  from './GeneralContext';

export const MainBody = () => {

  return (
    <div className={styles.container}>
      <Detector />
      <GeneralContext />
      <RootCauses />
      <button>Save Script</button>
    </div>
  );
};
