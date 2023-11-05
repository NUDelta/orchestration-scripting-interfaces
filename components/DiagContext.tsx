import React, { useState } from 'react';
import styles from './DiagContext.module.css';
import { options } from '../lib/context/options';

const Context: React.FC = ({items, setItems, context_lib}) => {
  const [popupOptions, setPopupOptions] = useState(options.filter(option => !items.some(item => item.title === option)));
  const [isPopupOpen, setPopupOpen] = useState(false);
  console.log('context items', items)

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const addOptionToContext = (option: any) => {
    setItems([...items, {title: option, data: context_lib[option]}]);
    setPopupOptions(popupOptions.filter((popOption) => popOption !== option));
  };

  return (
    <div className={styles.container}>
      <h2 className="text-lg font-semibold mb-2">Context</h2>
      <div className={styles.context_space}>
        {items.map((option, index) => (
          <div key={index} className="bg-blue-200 p-4 rounded-md mb-2">
            {option.title}:  {option.data}
          </div>
        ))}
        <button
          className="bg-blue-500 text-white p-2 rounded-md absolute bottom-4 right-4"
          onClick={openPopup}
        >
          Add Context
        </button>
      </div>
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Select an option to add</h3>
            <ul>
              {popupOptions.map((option, index) => (
                <li key={index} className="mb-2">
                  <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => addOptionToContext(option)}>
                    {option}
                  </button>
                </li>
              ))}
            </ul>
            <button className="bg-red-500 text-white p-2 rounded-md mt-4" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Context;