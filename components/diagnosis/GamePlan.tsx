import React, { useState, useEffect, ChangeEvent } from 'react';
import styles from './GamePlan.module.css';

interface Props {
  plan: string;
  setPlan: (content: string) => void;
}


const GamePlan: React.FC<Props> = ({plan, setPlan}) => {
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPlan(event.target.value);
  };

  return (
    <div className={styles.sideBySideItem2}>
      <h2 className={styles.headerTitle}>Game Plan</h2>
      <p>Before going into your SIG meeting, write down some questions you plan to ask your students. 
        We have some suggested questions in the root cause list to help you both ask broadly and ask about specific root causes.</p>
        <textarea 
        className={styles.textArea} 
        value={plan} 
        onChange={handleInputChange} 
        placeholder="Enter your questions here...">
      </textarea>
    </div>
  );
};

export default GamePlan;
