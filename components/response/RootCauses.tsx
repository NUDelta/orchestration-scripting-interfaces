

import { RootCause } from './RootCause';
import {
    DndContext, 
  } from '@dnd-kit/core';
  import {
    arrayMove,
    SortableContext,
  } from '@dnd-kit/sortable';


export const RootCauses = ({items, setItems}) => {

    return (
        // <Accordion allowMultiple variant="card" defaultIndex={0}>
            <DndContext onDragEnd={handleDragEnd}>
                <SortableContext items={items}>
                    {items.map((item, i) => <RootCause key={item.id} item={item} id={item.id} items={items} setItems={setItems} i={i} />)}
                </SortableContext>
            </DndContext>
        // </Accordion>
    )

    function handleDragEnd(event) {
        const {active, over} = event;
        
        if (active.id !== over.id) {
            const oldIndex = getIndex(active.id)
            const newIndex = getIndex(over.id);

            
            let copy = [...items]
            copy = arrayMove(copy, oldIndex, newIndex)
            setItems(copy)
        }
      }

      function getIndex(id) {
        for (let i=0; i < items.length; i++ ) {
            if (items[i].id === id) {
                return i
            }
        }
      }
}