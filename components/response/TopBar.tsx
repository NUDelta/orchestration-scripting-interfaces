
import { AccordionButton, AccordionIcon } from "@vygruppen/spor-accordion-react";
import { useState } from "react";

export const TopBar = ({items, setItems, item, listeners, id}) => {
    const [rootCauseInput, setRootCauseInput] = useState("");

    const handleRootCauseInputChange = (e) => {
        setRootCauseInput(e.target.value);
    };

    const handleRootCauseChange = () => {
        let copy = [...items]
        const desiredDictIndex = items.findIndex(item => item.id === id);
        copy[desiredDictIndex].rc = rootCauseInput
        setItems(copy);
    }; 

    return (
        <AccordionButton style={{ display: 'flex', justifyContent: 'space-between' }}>
            {item.rc ? <h3>{item.rc}</h3>: (
                <>
                <input
                    type="text"
                    style={{ width: 450 }}
                    placeholder="Enter your Root Cause here..."
                    value={rootCauseInput}
                    onChange={(e) => handleRootCauseInputChange(e)}
                    />
                <button onClick={handleRootCauseChange}>Save</button>
                </>
            )}
            <div style={{display: 'flex'}}>
                <AccordionIcon />
                <p {...listeners}>☰</p>
                </div>
        </AccordionButton>
    )
}