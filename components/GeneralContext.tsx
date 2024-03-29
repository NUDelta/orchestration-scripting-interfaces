import styles from "./GeneralContext.module.css"
import { useState, useEffect} from 'react';

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

function getOptionExplanation(option) {
    if (option === "Sprint log-Summary of Stories") {
        return "Title, Purpose, Deliverable, Points Planned, DTR Points Breakdown, and Points Spent";
    } else if (option === "Sprint log-Summary of Tasks") {
        return "Deliverable, Points Planned, DTR Points Breakdown, Person Assigned to, and Points Spent";
    }
}

const GeneralContext = ({ data, generalContextData, onGeneralContextDataChange }) => {
  const InitialSelectedContext = generalContextData
  const [selectedTags, setSelectedTags] = useState(InitialSelectedContext || []);
  const GenConDependency = data[0].GeneralContext;

  useEffect(() => {
    setSelectedTags(InitialSelectedContext || []);
    onGeneralContextDataChange(generalContextData)
  }, [GenConDependency, InitialSelectedContext, generalContextData, onGeneralContextDataChange]);

  // Add tag function
  const addTag = (tag) => {
    setSelectedTags([...selectedTags, tag]);
    onGeneralContextDataChange([...selectedTags, tag])
  };

  // Remove tag function
  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
    onGeneralContextDataChange(selectedTags.filter((t) => t !== tag))
  };

  return (
    <div className={styles.gencontainer}>
      <h1>General Context</h1>
      <select onChange={(e) => addTag(e.target.value)}>
        <option value="">Select context</option>
        {options.map((option, index) => (
          <option key={index} value={option} title={getOptionExplanation(option)}>
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