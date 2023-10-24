import React, { useState } from 'react';
import Hypothesis from './Hypothesis';

const HypothesisList: React.FC = () => {
  const [hypotheses, setHypotheses] = useState([
    { title: 'First Hunch', content: 'fill in your first hunch here!' },
  ]);

  const addHypothesis = () => {
    setHypotheses([...hypotheses, { title: 'Updated hypothesis', content: 'fill in your updated hypothesis' }]);
  };

  const updateHypothesis = (index: number, content: string) => {
    const newHypotheses = [...hypotheses];
    newHypotheses[index].content = content;
    setHypotheses(newHypotheses);
  };

  return (
    <div className="p-2">
      {hypotheses.map((hypoData, index) => (
        <Hypothesis
          key={index}
          hypoData={hypoData}
          setHypoContent={(content) => updateHypothesis(index, content)}
        />
      ))}
      <button onClick={addHypothesis} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-right">Add New Hypothesis</button>
    </div>
  );
};

export default HypothesisList;
