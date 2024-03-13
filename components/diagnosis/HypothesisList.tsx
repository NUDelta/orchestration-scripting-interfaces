import React, { useState } from 'react';
import Hypothesis from './Hypothesis';
import styles from './HypothesisList.module.css'

const HypothesisList: React.FC = ({items, hypos, setHypos}) => {
  const addHypothesis = () => {
    const newHypothesis = { title: 'Updated hypothesis', content: 'fill in your updated hypothesis' };
    setHypos([newHypothesis, ...hypos]);
  };

  const updateHypothesis = (index: number, content: string) => {
    const newHypotheses = [...hypos];
    newHypotheses[index].content = content;
    setHypos(newHypotheses);
  };

  const deleteHypothesis = (index: number) => {
    const newHypos = [...hypos];
    newHypos.splice(index, 1); // Remove the hypothesis at the specified index
    setHypos(newHypos);
  };

  return (
    <div className={styles.header}>
      <div className="flex justify-between items-center">
        <h2 className={styles.headerTitle}>Updated Hypothesis</h2>
        <button
          onClick={addHypothesis}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Add New Hypothesis
        </button>
      </div>
      <div className="flex flex-wrap">
        {hypos.map((hypoData, index) => (
          <div key={index} className="w-1/3">
            <Hypothesis
              hypoData={hypoData}
              setHypoContent={(content) => updateHypothesis(index, content)}
              onDelete={() => deleteHypothesis(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HypothesisList;
