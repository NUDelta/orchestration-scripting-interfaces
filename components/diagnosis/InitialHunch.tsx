import React, { useState, ChangeEvent } from 'react';
import styles from './InitialHunchComponent.module.css';

const InitialHunch: React.FC = () => {
  const [initialHunch, setInitialHunch] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInitialHunch(event.target.value);
  };

  return (
    <div className={styles.sideBySideItem1}>
      <h2 className={styles.headerTitle}>Initial Hunch</h2>
      <p>Based on the signal and contexts, cognitively what is the student doing ineffectively? Metacognitively, what belief might the student have might be causing their ineffective practice? Write down your initial hunch of the root cause of this issue. Reference the root cause list for ideas.</p>
      <textarea 
        className={styles.textArea} 
        value={initialHunch} 
        onChange={handleInputChange} 
        placeholder="Enter your initial hunch here...">
      </textarea>
    </div>
  );
};

export default InitialHunch;
