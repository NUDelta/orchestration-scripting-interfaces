import React, { useState, ChangeEvent } from 'react';
import styles from './GamePlan.module.css';

const GamePlan: React.FC = () => {
  const [gamePlan, setGamePlan] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setGamePlan(event.target.value);
  };

  return (
    <div className={styles.sideBySideItem2}>
      <h2 className={styles.headerTitle}>Game Plan</h2>
      <p>Before going into your SIG meeting, write down some questions you plan to ask your students. 
        We have some suggested questions in the root cause list to help you both ask broadly and ask about specific root causes.</p>
        <textarea 
        className={styles.textArea} 
        value={gamePlan} 
        onChange={handleInputChange} 
        placeholder="Enter your questions here...">
      </textarea>
    </div>
  );
};

export default GamePlan;
