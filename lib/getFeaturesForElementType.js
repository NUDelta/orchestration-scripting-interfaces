export function getFeaturesForElementType(p, element, type, table) {
  const elementWidth = 250;
  const elementHeight = 80;
  if (type == 'Sprint log-Summary of Tasks') {
    // Create the table
    table = new p.Table();

    // Add 5 columns and rows to the table
    for (let i = 0; i < 5; i++) {
      table.addColumn('Column ' + i);
      // table.addRow();
    }
  } else if (type == 'PRC-link to PRC') {
    p.fill(255, 0, 0); // Red
    p.text(element.type, element.x, element.y);
    p.rect(element.x, element.y, elementWidth, elementHeight);
  } else if (type == 'Sprint log-Total Points Commited This Sprint') {
    p.fill(255, 0, 0); // Red
    p.text(element.type, element.x, element.y);
    p.rect(element.x, element.y, elementWidth, elementHeight);
  } else if (type == 'Sprint log-D T and R points Breakdown') {
    p.fill(255, 0, 0); // Red
    p.text(element.type, element.x, element.y);
    p.rect(element.x, element.y, elementWidth, elementHeight);
  } else if (type == 'Sprint log-Summary of Stories') {
    p.fill(255, 0, 0); // Red
    p.text(element.type, element.x, element.y);
    p.rect(element.x, element.y, elementWidth, elementHeight);
  } else {
    return 'None';
  }

  // Add more cases for other types as needed
}
