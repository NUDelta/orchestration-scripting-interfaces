import React from 'react';
import styles from './Hypothesis.module.css';

interface HypothesisProps {
  hypoContent: string;
  setHypoContent: (content: string) => void;
}

const Hypothesis: React.FC<HypothesisProps> = ({ hypoContent, setHypoContent }) => {
  const handleHypoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHypoContent(event.target.value);
  };

  return (
    <div className={styles.hypo_container}>
        <h2 className="text-lg font-semibold mb-2">First hunch of why the situation is occurring</h2>
        <textarea
            className={styles.hypo_textbox}
            value={hypoContent}
            onChange={handleHypoChange}
        />
    </div>
  );
};

export default Hypothesis;
