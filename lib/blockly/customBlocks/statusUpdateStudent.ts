import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
  
  export const statusUpdateStudentToolboxCategories = {
    kind: 'category',
    name: '* StaUp Stu',
    colour: '#5CA699',
    contents: [
      {
        kind: 'block',
        type: 'AllProjects',
      },
      {
        kind: 'block',
        type: 'IsDayOf',
      },
      {
        kind: 'block',
        type: 'DaysBefore',
      },
      {
        kind: 'block',
        type: 'statusUpatedate',
      },
      { kind: 'block', type: 'slackproj' },
      { kind: 'block', type: 'project_attributes' },
      { kind: 'block', type: 'startofVenue' },
      { kind: 'block', type: 'venue' },
      { kind: 'block', type: 'time' },

    ],
  };
  