import React from 'react';
import styles from './ListofRC.module.css';

const ListofRC: React.FC = ({items}) => {

  return (
    <div className={styles.columnContent}>
        <h2 className={styles.headerTitle}>List of Potential Root Causes:</h2>
        <div className={styles.RCcontainer}>
        <div className={styles.RC_list}>
            < div className={styles.RC_scrollable} style={{ whiteSpace: 'pre-line', overflowY: 'auto'}}>
            <ul>
                {items.map((item, index) => (
                <li key={index}>
                    <p><strong>{item.rc}</strong></p>
                    <p><strong>Strategy:</strong> {item.strategy}</p>
                    <br></br>
                </li>
                ))}
            </ul>
            </div>
            </div>
        </div>
    </div>
  );
};

export default ListofRC;
