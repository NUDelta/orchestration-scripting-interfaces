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
    this.appendValueInput('projects');
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

javascriptGenerator['ApplicableSet'] = function (block: Blockly.Block) {
  // TODO:
  var value = javascriptGenerator.valueToCode(
    block,
    'projects',
    javascriptGenerator.ORDER_ATOMIC
  );

  // Generate the code to perform the calculation using the value
  var code = 'function () { return ' + value + ';};\n';
  return code;
};

// create a venue object block
Blockly.Blocks['AllProjects'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('PROJ')
      .appendField(
        new Blockly.FieldDropdown([
          ['All Projects', 'projects'],
          [
            'Orchestration Scripting Environments',
            'Orchestration Scripting Environments',
          ],
          ['Knowledge Map', 'Knowledge Map'],
          ['Collective Narrative', 'Collective Narrative'],
          ['Q&A Buddy', 'Q&A Buddy'],
          ['Path', 'Path'],
          [
            'CE for Relationship Development',
            'CE for Relationship Development',
          ],
          [
            'Orchestrating Planning and Reflection',
            'Orchestrating Planning and Reflection',
          ],
        ]),
        'PROJNAME'
      );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
javascriptGenerator['AllProjects'] = function (block: Blockly.Block) {
  // TODO: return the project/projects from the selected dropdown
  var operator = block.getFieldValue('PROJNAME');
  return [operator, javascriptGenerator.ORDER_ATOMIC];
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

javascriptGenerator['currentlyIs'] = function (block: Blockly.Block) {
  // TODO:
  return null;
};

//multiply [Backlog for now]

// // create the code output from the venue object block
// javascriptGenerator['venue'] = function (block: Blockly.Block) {
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
    // {
    //   kind: 'block',
    //   type: 'ApplicableSet',
    // },
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