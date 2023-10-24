import React, { useState } from 'react';
import Hypothesis from './Hypothesis';

const ROOT_CAUSES = [
    { RC: "Student felt pressure to reach goals/milestones that they set previously, even though it turned out to be unrealistic", context: ["Context A1", "Context A2"], strategy: "Strategy A..." },
    { RC: "Student went for too big a slice and they tried to meet goals when they should have re-scoped", context: ["Context B1", "Context B2"], strategy: "Strategy B..." },
    { RC: "Work was divided unevenly among teammates, causing one student to over-work and another to under-work", context: ["Context C1", "Context C2"], strategy: "Strategy C..." }
  ];

const HypothesisList: React.FC = () => {
  const [hypotheses, setHypotheses] = useState([
    { title: 'First Hunch', content: 'fill in your first hunch here!' },
  ]);

  const addHypothesis = () => {
    const newHypothesis = { title: 'Updated hypothesis', content: 'fill in your updated hypothesis' };
    setHypotheses([newHypothesis, ...hypotheses]);
  };

  const updateHypothesis = (index: number, content: string) => {
    const newHypotheses = [...hypotheses];
    newHypotheses[index].content = content;
    setHypotheses(newHypotheses);
  };

  const [popupVisible, setPopupVisible] = useState(false);
  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="p-2">
      <button onClick={addHypothesis} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-right">
        Add New Hypothesis
      </button>
      {hypotheses.map((hypoData, index) => (
        <Hypothesis
          key={index}
          hypoData={hypoData}
          setHypoContent={(content) => updateHypothesis(index, content)}
        />
      ))}
      <button
        className={`fixed left-4 bottom-4 p-2 bg-blue-500 text-white rounded cursor-pointer ${
          popupVisible ? 'hidden' : ''
        }`}
        onClick={togglePopup}
      >
        Are you stuck? <br /> Take a look at our list of root causes
      </button>
      {popupVisible && (
        <div className="fixed bottom-12 left-4 bg-white p-4 border border-gray-300 rounded shadow-md">
          <button onClick={closePopup} className="absolute top-2 right-2 text-gray-500 cursor-pointer hover:text-red-500">&times;</button>
          <h3 className="text-lg font-semibold mb-2">Root Causes:</h3>
          <ul>
            {ROOT_CAUSES.map((cause, index) => (
              <li key={index}>
                <p><strong>{cause.RC}</strong></p>
                <ul>
                  {cause.context.map((ctx, i) => (
                    <li key={i}>{ctx}</li>
                  ))}
                </ul>
                <p><strong>Strategy:</strong> {cause.strategy}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HypothesisList;
