// Load project object from json
const projectRaw = require('./response.json');

let slides = projectRaw.slides;
// console.log(slides);

const textRunElements = [];

let Canvas = {
  User_Study_Reflect: {
    id: null,
    col1: null,
    col2: null,
    col3: null,
    col4: null,
  },

  Problem: {
    id: null,
    col1: null,
    col2: null,
    col3: null,
    col4: null,
    col5: null,
  },

  Design: { id: null, col1: null, col2: null, col3: null, col4: null },
  Interface: {
    id: null,
    col1: null,
    col2: null,
    col3: null,
    col4: null,
    col5: null,
  },
};

// Loop through the slides
for (const slide of slides) {
  // Loop through the page elements on the slide
  for (const pageElement of slide.pageElements) {
    // Check if the page element has textElements
    if (
      pageElement.shape &&
      pageElement.shape.text &&
      pageElement.shape.text.textElements
    ) {
      for (const textElement of pageElement.shape.text.textElements) {
        // Filter for specific slides
        // Check if the TextRun exist
        if (textElement.textRun) {
          str = textElement.textRun.content;
          if (
            str.includes('Mysore Template: Reflecting on your User Testing')
          ) {
            Canvas.User_Study_Reflect.id = slide.objectId;
          } else if (str.includes('Mysore Template: Problem Statement {New}')) {
            Canvas.Problem.id = slide.objectId;
          } else if (str.includes('Mysore Template: Design Argument {New}')) {
            Canvas.Design.id = slide.objectId;
          } else if (str.includes('Mysore Template: Interface Model {New}')) {
            Canvas.Interface.id = slide.objectId;
          }
          textRunElements.push(textElement.textRun.content);
        }
      }
    }
  }
}

// Loop through the slides
for (const slide of slides) {
  // Loop through the page elements on the slide
  if (slide.objectId == Canvas.User_Study_Reflect.id) {
    for (pageElement of slide.pageElements) {
      // Access Table
      if (pageElement.table) {
        num_cols = pageElement.table.columns;
        row = 1;
        for (let i = 0; i < num_cols; i++) {
          // Perform the action here
          console.log(`Iteration ${i}`);
        }
      }
    }
  }
}

// Given slide, Access Table Contents

// Now you can use the textRunElements array as needed
console.log(Canvas);
