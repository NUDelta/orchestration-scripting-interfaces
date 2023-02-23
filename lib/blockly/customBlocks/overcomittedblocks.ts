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
    this.appendDummyInput()
      .appendField('I want this script to apply to:');
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
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ['All Projects', 'AllProject'],
          ['Orchestration Scripting Environments', 'Orchestration Scripting Environments'],
          ['Knowledge Map', 'Knowledge Map'],
          ['Collective Narrative', 'Collective Narrative'],
          ['Q&A Buddy', 'Q&A Buddy'],
          ['Path', 'Path'],
          ['CE for Relationship Development', 'CE for Relationship Development'],
          ['Orchestrating Planning and Reflection', 'Orchestrating Planning and Reflection'],
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

//AND

//currentlyIs

//endOfSprint

//Sprint log

//multiply

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
    }
  ],
};
