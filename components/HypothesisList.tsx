import React, { useState } from 'react';
import Hypothesis from './Hypothesis';

const HypothesisList: React.FC = ({items}) => {
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
            {items.map((item, index) => (
              <li key={index}>
                <p><strong>{item.rc}</strong></p>
                <ul>
                  {item.context.map((ctx, i) => (
                    <li key={i}><strong>Context:</strong> {ctx.title}</li>
                  ))}
                </ul>
                <p><strong>Strategy:</strong> {item.strategy}</p>
                <br></br>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HypothesisList;
