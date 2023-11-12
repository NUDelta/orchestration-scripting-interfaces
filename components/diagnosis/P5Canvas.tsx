import React, { useEffect, useRef, useState } from 'react';

const P5Canvas: React.FC<any> = ({ context, canvas, setCanvas}) => {
  const canvasRef = useRef(null);
  const elementWidth = 250;
  const elementHeight = 80;

  const elements = context.map((element, index) => ({
    type: element,
    x: canvas.find((item) => item.type === element)?.xPos || 50,
    y: canvas.find((item) => item.type === element)?.yPos || 50,
  }));

  let draggingElementIndex = -1;
  let offsetX = 0;
  let offsetY = 0;

  useEffect(() => {
    import('p5').then((p5) => {
        const sketch = (p: any) => {
          p.setup = () => {
            if (canvasRef.current) {
                const parentWidth = canvasRef.current.offsetWidth;
                const parentHeight = canvasRef.current.offsetHeight;
                p.createCanvas(parentWidth, parentHeight).parent(canvasRef.current);
                console.log('P5 canvas created...');
              }
          };
  
          p.draw = () => {
            p.background(250);
            elements.forEach((element, index) => {
                p.fill(0, 0, 255);
                p.rect(element.x, element.y, elementWidth, elementHeight);
              });
          };

          p.mousePressed = () => {
            for (let i = 0; i < elements.length; i++) {
              const element = elements[i];
              // Check if the mouse is over the current element
              if (
                p.mouseX > element.x &&
                p.mouseX < element.x + elementWidth &&
                p.mouseY > element.y &&
                p.mouseY < element.y + elementHeight
              ) {
                draggingElementIndex = i;
                offsetX = p.mouseX - element.x;
                offsetY = p.mouseY - element.y;
                break;
              }
            }
          };
  
          p.mouseDragged = () => {
            if (draggingElementIndex !== -1) {
              // Update the position of the dragging element
              elements[draggingElementIndex].x = p.mouseX - offsetX;
              elements[draggingElementIndex].y = p.mouseY - offsetY;
            }
          };
  
          p.mouseReleased = () => {
            if (draggingElementIndex !== -1) {
                // Update the position of the dragging element
                elements[draggingElementIndex].x = p.mouseX - offsetX;
                elements[draggingElementIndex].y = p.mouseY - offsetY;
      
                // Update the canvasState with the new positions
                const updatedCanvasState = canvas.map((item) => {
                  if (item.type === elements[draggingElementIndex].type) {
                    return {
                      type: item.type,
                      xPos: elements[draggingElementIndex].x,
                      yPos: elements[draggingElementIndex].y,
                    };
                  } else {
                    return item;
                  }
                });
      
                // Set the updated canvasState
                console.log('updated canvasState', updatedCanvasState)
                setCanvas(updatedCanvasState);
              }
            // Stop dragging when the mouse is released
            draggingElementIndex = -1;
          };
        };
  
        new p5.default(sketch);
    });
  }, []);

  return <div id="p5canvas" ref={canvasRef} style={{ width: '100%', height: '95%' }}/>;
};

export default P5Canvas;