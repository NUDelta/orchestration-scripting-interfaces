// Load project object from json
const { json } = require('stream/consumers');
const projectRaw = require('./response.json');

let slides = projectRaw.slides;

let Canvas = {
  User_Study_Reflect: {
    id: null,
    col0: null,
    col1: null,
    col2: null,
    col3: null,
  },

  Problem: {
    id: null,
    col0: null,
    col1: null,
    col2: null,
    col3: null,
    col4: null,
  },

  Design: {
    id: null,
    col0: null,
    col1: null,
    col2: null,
    col3: null,
  },

  Interface: {
    id: null,
    col0: null,
    col1: null,
    col2: null,
    col3: null,
    col4: null,
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
        }
      }
    }
  }
}

let jsonData = [];
let allInput = [];
const textContents = [];

const topLevelCategories = Object.keys(Canvas);
console.log(topLevelCategories);

// Given slide, Access Table Contents
// Loop through the slides
for (cat of topLevelCategories) {
  // console.log(cat);
  for (const slide of slides) {
    // Loop through the page elements on the slide
    if (slide.objectId == Canvas[cat].id) {
      for (pageElement of slide.pageElements) {
        // Access Table
        if (pageElement.table && pageElement.table.tableRows) {
          num_cols = pageElement.table.columns;
          row = 1;

          // Get all cell in row 1 (so the 2nd row in our table, index starts at 0)
          // and iterate through each column
          for (let i = 0; i < num_cols; i++) {
            cell = pageElement.table.tableRows[row].tableCells[i];
            // console.log('COLUMN', i);

            if (cell.text && cell.text.textElements) {
              for (const data of cell.text.textElements) {
                if (data.textRun) {
                  jsonData.push(data.textRun.content);
                }
              }
              allInput.push(jsonData);
              jsonData = [];
            }
            Canvas[cat][`col${i}`] = allInput[0];
            allInput = [];
          }
        }
      }
    }
  }
}

// Now you can use the textRunElements array as needed
console.log(allInput);
console.log(Canvas);
