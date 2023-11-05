import React, { useState } from 'react';
import styles from './Hypothesis.module.css';

interface HypothesisProps {
  hypoData: { title: string; content: string };
  setHypoContent: (content: string) => void;
  onDelete: () => void;
}

const Hypothesis: React.FC<HypothesisProps> = ({ hypoData, setHypoContent, onDelete}) => {

  const handleHypoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHypoContent(event.target.value);
  };

  return (
    <div className={styles.hypo_container} style={{ position: 'relative' }}>
    <h2 className="text-lg font-semibold mb-2">{hypoData.title}</h2>
    <button
      onClick={onDelete}
      className="absolute top-4 right-4 text-black bg-transparent border-none cursor-pointer"
    >
      ✕
    </button>
    <textarea
      className={styles.hypo_textbox}
      value={hypoData.content}
      onChange={handleHypoChange}
    />
  </div>
  );
};

export default Hypothesis;
