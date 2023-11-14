import React, { useState, useCallback} from 'react';
import styles from './DiagContext.module.css';
import { options } from '../lib/context/options';
import P5Canvas from './diagnosis/P5Canvas';

const Context: React.FC = React.memo(({ items, setItems, context_lib, canvas, setCanvas}) => {
  const [popupOptions, setPopupOptions] = useState(
    options.filter((option) => !items.some((item) => item.title === option))
  );

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const addOptionToContext = (option: any) => {
    const newItem = { title: option, data: context_lib[option] };
    setItems([...items, newItem]);
    setPopupOptions(popupOptions.filter((popOption) => popOption !== option));
    setCanvas([...canvas, { type: newItem.title, xPos: 50, yPos: 50 }]);
  };

  const removeItem = (index) => {
    const removedItem = items[index];
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    setPopupOptions([...popupOptions, removedItem.title]); // Add the removed item back to popupOptions
  };

  const test = ['Sprint log-Total Points Commited This Sprint', 'PRC-link to PRC']

  return (
    <div className={styles.container}>
      <h2 className="text-lg font-semibold mb-2">Context</h2>
      {/* <div className={styles.context_space}> */}
      {/* <P5Canvas context={items} canvas={canvas} setCanvas={setCanvas}/>
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
            <h3 className="text-lg font-semibold mb-2">
              Select an option to add
            </h3>
            <ul>
              {popupOptions.map((option, index) => (
                <li key={index} className="mb-2">
                  <button
                    className="bg-blue-500 text-white p-2 rounded-md"
                    onClick={() => addOptionToContext(option)}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="bg-red-500 text-white p-2 rounded-md mt-4"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
       */}
      <div className={styles.context_space} style={{ whiteSpace: 'pre-line'}}>
        < div className={styles.context_scrollable} style={{whiteSpace: 'pre-line', overflowY: 'auto'}}>
        {items.map((option, index) => (
          <div
            key={index}
            className="bg-blue-200 p-4 rounded-md mb-2"
            style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '1em'}}
          >
            {option.title}: {option.data}
            <button
              className="bg-red-500 text-white p-2 rounded-md ml-2"
              onClick={() => removeItem(index)}
            >
              X
            </button>
          </div>
        ))}
        </div>
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
            <h3 className="text-lg font-semibold mb-2">
              Select an option to add
            </h3>
            <ul>
              {popupOptions.map((option, index) => (
                <li key={index} className="mb-2">
                  <button
                    className="bg-blue-500 text-white p-2 rounded-md"
                    onClick={() => addOptionToContext(option)}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="bg-red-500 text-white p-2 rounded-md mt-4"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    // </div>
  );
});

export default Context;
