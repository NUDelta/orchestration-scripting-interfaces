import { Accordion, AccordionItem } from "@vygruppen/spor-accordion-react";
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import styles from "../../pages/response.module.css"
import { TopBar } from "./TopBar";
import { Panel } from "./Panel";


export const RootCause = ({item, id, items, setItems, i}) => {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
      } = useSortable({id: id});

      const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        display: 'flex',
      };

      const ToggleSelected = () => {
        const copy = [...items];
        const desiredDictIndex = items.findIndex(item => item.id === id);
        copy[desiredDictIndex].checked = !copy[desiredDictIndex].checked
        setItems(copy);
    };   
    
    
    const SetDisableStatus = () => {
      const copy = [...items];
      const desiredDictIndex = items.findIndex((item) => item.id === id);
      copy[desiredDictIndex].disabled = !copy[desiredDictIndex].disabled
      setItems(copy);
    }; 


    return (
      <Accordion allowMultiple variant="card" defaultIndex={i==0 ? 0 : undefined}>
        <div style={style} ref={setNodeRef} {...attributes}>
            <button className={styles.selectButton} style={{ opacity: item.checked ? 1 : 0.3}} onClick={ToggleSelected}>✅</button>
            
            <AccordionItem className={styles.accordionItem} style={{ opacity: item.disabled ? 0.45 : 1, width: '100%' }} isDisabled={item.disabled}>
                <TopBar items={items} setItems={setItems} item={item} listeners={listeners} id={id} />
                <Panel items={items} setItems={setItems} item={item} id={id} />
              </AccordionItem>
              <div className={styles.rightElement}>
               <button className={styles.disableButton} onClick={SetDisableStatus}>
                 {item.disabled ? 'Enable' : 'Disable'}
               </button>
             </div>
        </div>
        </Accordion>
    )
}