import React, { useState, useCallback} from 'react';
import styles from './DiagContext.module.css';
import { options } from '../../lib/context/options';
import P5Canvas from './P5Canvas';


const Context_test = {
  "Total Points Committed": 25,
  "Total Points Available": 16,
  "Sprint Log Stories and Tasks": [
      {
          "Task": "Create React DOM object for dynamic page",
          "Description": "Learn how React DOM works",
          "Assigned to": "Mentee"
      },
      {
          "Task": "Write API calls to XXX",
          "Description": "Learn what API calls are and write calls to pull data",
          "Assigned to": "Mentee"
      },
      {
          "Task": "Connect page to MongoDB",
          "Description": "Setup MongoDB account, learn how it works, write calls to pull and save data, learn and write controller functions",
          "Assigned to": "Mentee"
      }
  ],
  "Git Commits Summary": [
      "10/1 Weird bug with dynamic page layout",
      "10/2 Fixed layout bug",
      "10/3 Database response 404 error",
      "10/4 Database response 201 error",
      "10/5 Attempt to fix 201 error but failed",
      "10/6 fixed database errors",
      "10/6 Save controller 50% - save not working",
      "10/7 Attempt to fix save controller but failed",
      "10/8 Second attempt to fix controller"
  ]
};

const Context_test_title = [
  "Total Points Committed",
  "Total Points Available",
  "Sprint Log Stories and Tasks",
  "Git Commits Summary",
];



const Context: React.FC = ({ items, setItems, context_lib, canvas, setCanvas}) => {
  // popupOptions is the list context pieces that are not displayed but is available to display
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



  // addOptionToContext: add Context piece to the display when selected from all context options
  const addOptionToContext = (option:any) => {
    // The title property is the key containing all type of context pieces
    // The data property is retrieved from the context_lib object using option as a key
    const newItem = { title: option, data: context_lib[option] }; // Connects to data from API

    // adding newItem to the existing items array
    // Spread the elements of the current items array and add newItem to the end
    setItems([...items, newItem]);

    // removing option from the existing array
    // Filter popupOptions array to remove any elements that are equal to the option parameter
    setPopupOptions(popupOptions.filter((popOption) => popOption !== option));

    // Update the state variable canvas by adding a new object to the existing canvas array
    // The type property is assigned the value of newItem.title
    setCanvas([...canvas, { type: newItem.title, xPos: 50, yPos: 50 }]);
  };



  const removeItem = (index) => {
    const removedItem = items[index];
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    setPopupOptions([...popupOptions, removedItem.title]); // Add the removed item back to popupOptions
  };

  // const test = ['Sprint log-Total Points Commited This Sprint', 'PRC-link to PRC']

  // Organize and Format Context Pieces
  return (
    <div className={styles.contextDiv}>
    <h2 className={styles.headerTitle}>Context</h2>
      <div className={styles.container}>
        <div className={styles.context_space} style={{ whiteSpace: 'pre-line'}}>
          < div className={styles.context_scrollable} style={{whiteSpace: 'pre-line', overflowY: 'auto'}}>
          {items.map((option, index) => (
            <div
              key={index}
              className="bg-blue-200 p-4 rounded-md mb-2"
              style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '1em'}}
            >
            {(option.title === 'PRC-link to PRC' || option.title === 'Link to Sprint Log') ? (
              <a href={option.data} target="_blank" rel="noopener noreferrer">
                {option.title}: {option.data}
              </a>
            ) : (
              `${option.title}: ${option.data}`
            )}
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
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[2]">
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
      </div>
  );
};

export default Context;
