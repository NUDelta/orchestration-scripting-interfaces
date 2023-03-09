import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
  
  export const PhDProgressToolboxCategories = {
    kind: 'category',
    name: '* PhDProgress',
    colour: '#5CA699',
    contents: [
      {
        kind: 'block',
        type: 'AllSIGs',
      },
      {
        kind: 'block',
        type: 'Boolean',
      },
      { kind: 'block', type: 'slackSIG' },
      {
        kind: 'block',
        type: 'project_attributes'
      },
      { kind: 'block', type: 'DaysBefore' },
      { kind: 'block', type: 'Morningofvenue' },
      {
        kind: 'block',
        type: 'venue',
      },
    ],
  };
  