import React, { useState } from 'react';
import styles from './Hypothesis.module.css';

interface HypothesisProps {
  hypoData: { title: string; content: string };
  setHypoContent: (content: string) => void;
}

const Hypothesis: React.FC<HypothesisProps> = ({ hypoData, setHypoContent }) => {

  const handleHypoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHypoContent(event.target.value);
  };

  return (
    <div className={styles.hypo_container}>
      <h2 className="text-lg font-semibold mb-2">{hypoData.title}</h2>
      <textarea
        className={styles.hypo_textbox}
        value={hypoData.content}
        onChange={handleHypoChange}
      />
    </div>
  );
};

export default Hypothesis;
