import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
  
  export const EOQChecklistToolboxCategories = {
    kind: 'category',
    name: '* EOQChecklist',
    colour: '#5CA699',
    contents: [
      {
        kind: 'block',
        type: 'AllProjects',
      },
      {
        kind: 'block',
        type: 'DaysBefore',
      },
      {
        kind: 'block',
        type: 'IsDayOf',
      },
      { kind: 'block', type: 'firstlast_venue' },
      { kind: 'block', type: 'slackproj' },
      { kind: 'block', type: 'project_attributes' },
      { kind: 'block', type: 'time' },

    ],
  };
  