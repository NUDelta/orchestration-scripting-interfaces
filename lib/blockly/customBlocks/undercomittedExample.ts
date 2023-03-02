import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
  
export const UndercommittedToolboxCategories = {
    kind: 'category',
    name: '* UnderC',
    colour: '#5CA699',
    contents: [
      {
        kind: 'block',
        type: 'AllProjects',
      },
      {
        kind: 'block',
        type: 'currentlyIs',
      },
      {
        kind: 'block',
        type: 'startofVenue',
      },
      {
        kind: 'block',
        type: 'venue',
      },
      {
        kind: 'block',
        type: 'sprintLog',
      },
      {
        kind: 'block',
        type: 'project_people'
      },
      {
        kind: 'block',
        type: 'slackppl',
      },
    ],
  };
  