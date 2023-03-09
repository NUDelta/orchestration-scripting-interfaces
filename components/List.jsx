// import React, { useState } from 'react';

// const List = () => {
//   const [listItems, setListItems] = useState([{ id: 1 }]);

//   const addItem = () => {
//     // Get the last item in the list
//     const lastItem = listItems[listItems.length - 1];

//     // Add a new item to the list
//     setListItems([...listItems, { id: lastItem.id + 1 }]);
//   };

//   return (
//     <div className="list">
//       {listItems.map((item) => (
//         <div key={item.id} className="list-item">
//           <span className="item-number">{item.id}</span>
//           <input type="text" className="item-input" />
//           <button onClick={addItem} className="add-item">
//             +
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default List;
