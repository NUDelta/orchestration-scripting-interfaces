import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
  
  export const UseVenuesToolboxCategories = {
    kind: 'category',
    name: '* UseVenues',
    colour: '#5CA699',
    contents: [
      {
        kind: 'block',
        type: 'AllSIGs',
      },
      {
        kind: 'block',
        type: 'sig_attributes',
      },
      {
        kind: 'block',
        type: 'slackchannel',
      },
      {
        kind: 'block',
        type: 'venue',
      },
      {
        kind: 'block',
        type: 'Morningofvenue',
      },
      {
        kind: 'block',
        type: 'Boolean',
      },
      { kind: 'block', type: 'time' },
    ],
  };
  