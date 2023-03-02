import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
  
  export const EOQReminderToolboxCategories = {
    kind: 'category',
    name: '* EOQReminder',
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
        type: 'slackppl',
      },
      { kind: 'block', type: 'firstlast_venue' },
      { kind: 'block', type: 'IsDayOf' },
      { kind: 'block', type: 'time' },
    ],
  };
  