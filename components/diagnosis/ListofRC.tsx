import React, { useState } from 'react';
import styles from './ListofRC.module.css';

const ListofRC: React.FC = ({ items }) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter(itemIndex => itemIndex !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <div className={styles.columnContent}>
      <h2 className={styles.headerTitle}>List of Potential Root Causes:</h2>
      <div className={styles.RCcontainer}>
        <div className={styles.RC_list}>
          <div className={styles.RC_scrollable} style={{ whiteSpace: 'pre-line', overflowY: 'auto' }}>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <p><strong>{item.rc}</strong></p>
                  <p><strong>Ask:</strong> {item.question}</p>
                  <button 
                    onClick={() => toggleItem(index)}
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 rounded-md"
                    style={{ fontSize: '12px' }}
                  >
                    {expandedItems.includes(index) ? 'Hide Strategy' : 'Show Strategy'}
                  </button>
                  {expandedItems.includes(index) && (
                   <div>
                    <p><strong>Strategy:</strong></p>
                    <ul>
                      {item.strategy.split('\n').map((strategy, strategyIndex) => (
                        <li key={strategyIndex} className={styles.list}>{strategy}</li>
                      ))}
                    </ul>
                  </div>
                  )}
                  <br></br>
                  <br></br>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListofRC;