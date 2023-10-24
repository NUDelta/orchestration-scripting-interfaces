import React from 'react';
import styles from './DiagContext.module.css';

const Context: React.FC = () => {
  return (
    <div className={styles.container}>
        <h2 className="text-lg font-semibold mb-2">Context</h2>
        <div className={styles.context_space}>
            {/* Content for context */}
        </div>
    </div>
  );
};

export default Context;