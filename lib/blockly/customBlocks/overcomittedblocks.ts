import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

// Applicable Set
// “I want this script to apply to:” AllProjects
// Renders with the interface / user can’t remove it

// Detector:
// if
// currentlyIs(endOfSprint(what is process))
// And
// Current (?) Sprint log → different dropdown options
// totalPointsSpent >= 1.1 * pointsAvailable

// create a fixed block
Blockly.Blocks['ApplicableSet'] = {
  init: function () {
    //description
    this.appendDummyInput().appendField('I want this script to apply to:');
    //indents
    this.appendValueInput('allprojects');
    //fixed
    this.setMovable(false);
    //indent and description on same line?
    this.setInputsInline(false);
    //is the block an input to another block
    this.setOutput(false, null);
    this.setColour(110);
    this.setTooltip('Specify the applicable set for this script');
    this.setHelpUrl('');

    //TODO: disable delete for this block
  },
};

// create a venue object block
Blockly.Blocks['AllProjects'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['All Projects', 'AllProject'],
        [
          'Orchestration Scripting Environments',
          'Orchestration Scripting Environments',
        ],
        ['Knowledge Map', 'Knowledge Map'],
        ['Collective Narrative', 'Collective Narrative'],
        ['Q&A Buddy', 'Q&A Buddy'],
        ['Path', 'Path'],
        ['CE for Relationship Development', 'CE for Relationship Development'],
        [
          'Orchestrating Planning and Reflection',
          'Orchestrating Planning and Reflection',
        ],
      ]),
      'NAME'
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

//currentlyIs
Blockly.Blocks['currentlyIs'] = {
  init: function () {
    this.appendDummyInput().appendField('Currently is');
    this.appendValueInput('currentlyIs');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
    this.setTooltip('check if the current time is in the specified time block');
    this.setHelpUrl('');
  },
};

//endOfSprint -- this is equivalent to saying sprint.endDay, sprint.startDay
Blockly.Blocks['sprintTime'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['Start of Sprint', 'startOfSprint'],
        ['End of Sprint', 'endOfSprint'],
        ['Middle of Sprint', 'midSprint'], //unsure about the wording of this one
      ]),
      'NAME'
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

//Sprint log -- this is to enable the user to pull data from the sprint log (e.g. total points spent, total points available)
// This is equivalent to saying tools.planningTool.totalPoints.spent, tools.planningTool.totalPoints.available
Blockly.Blocks['sprintLog'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Check sprint log for')
      .appendField(
        new Blockly.FieldDropdown([
          ['Total Points Available in the sprint', 'pointsAvailable'],
          ['Total Points spent in the sprint', 'pointsSpent'],
          ['Total Points spent on Design in the sprint', 'pointsSpentDesign'], //put this one for now to see what it's like to have more options
        ]),
        'NAME'
      );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

//multiply [Backlog for now]

// // create the code output from the venue object block
// javascriptGenerator['venue'] = function (block) {
//   // TODO: SigMeeting should actually be the value from the selected dropdown
//   return "this.venues.find(this.where('kind', 'SigMeeting'))";
// };

export const OvercommittedToolboxCategories = {
  kind: 'category',
  name: 'OV',
  colour: '#5CA699',
  contents: [
    {
      kind: 'block',
      type: 'AllProjects',
    },
    {
      kind: 'block',
      type: 'ApplicableSet',
    },
    {
      kind: 'block',
      type: 'currentlyIs',
    },
    {
      kind: 'block',
      type: 'sprintTime',
    },
    {
      kind: 'block',
      type: 'sprintLog',
    },
  ],
};
