import { useState } from "react";
import { AccordionPanel} from "@vygruppen/spor-accordion-react";
import styles from "../../pages/response.module.css"

export const Panel = ({item, items, setItems, id}) => {

    const [editedStrategy, setEditedStrategy] = useState(item.strategy);
    const [isEditing, setIsEditing] = useState(false);

    const handleSaveClick = () => {
        let copy = [...items]
        const desiredDictIndex = items.findIndex(item => item.id === id);
        copy[desiredDictIndex].strategy = editedStrategy
        setItems(copy);
        setIsEditing(false);
    };
    
    const handleCancelClick = () => {
        setEditedStrategy(item.strategy);
        setIsEditing(false);
    };

    return (
        <AccordionPanel className={styles.accordionPanel}>
            <div>
                <h4>Context</h4>
                <ul className="list-disc list-inside">
                    {item.context?.map(context => <li key={context}>{context}</li>)}
                </ul>
            </div>
            {item.strategy ? (
                <div>
                    <h4>Strategy</h4>
                    { isEditing ? (
                        <>
                        <textarea value={editedStrategy} onChange={(e) => setEditedStrategy(e.target.value)} />
                        <button onClick={handleSaveClick}>Save</button>
                        <button onClick={handleCancelClick}>Cancel</button>
                        </>
                    ) : (
                        <>
                        <p>{item.strategy}</p>
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                        </>
                    )}
                </div>
            ) : (
                <div>
                <textarea style={{ width: 300 }} placeholder="Enter your Strategy here..." value={editedStrategy} onChange={(e) => setEditedStrategy(e.target.value)} />
                <button onClick={handleSaveClick}>Save</button>
                </div>
            )}
        </AccordionPanel>
    )
}