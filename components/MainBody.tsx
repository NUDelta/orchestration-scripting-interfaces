import styles from './MainBody.module.css';
import { Detector } from './Detector';
import { RootCauses } from './RootCauses';

export const MainBody = () => {

  return (
    <div className={styles.container}>
      <Detector />
      <RootCauses />
    </div>
  );
};
