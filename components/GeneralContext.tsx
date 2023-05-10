import styles from "./GeneralContext.module.css"
import { useState } from 'react';

const options = ["Sprint log-Total Points Spent this Sprint",
                 "Sprint log-Total Points Commited this Sprint",
                 "Sprint log-Summary of Stories", 
                 "Sprint log-Summary of Tasks", 
                 "Sprint log-Riskiest Risk specified in Planning View",
                 "PRC-Specific Slides (Under construction)",
                 "PRC-Time Last Edited",
                 "PRC-Slides Updated in this sprint",
                 "Github-Number of Lines Code Committed this sprint",
                 "Github-Number of Branches Created this sprint",
                 "Github-Summary of Commits made this sprint"]

const GeneralContext = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  // Add tag function
  const addTag = (tag) => {
    setSelectedTags([...selectedTags, tag]);
  };

  // Remove tag function
  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  return (
    <div className={styles.gencontainer}>
      <h1>General Context</h1>
      <select onChange={(e) => addTag(e.target.value)}>
        <option value="">Select context</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Display tags */}
      <div>
        {selectedTags.map((tag, index) => (
          <div key={index} className={styles.gencontexts}>
            {tag}
            <button onClick={() => removeTag(tag)} className="tag-close">
            x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralContext;