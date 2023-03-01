import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

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
    this.setDeletable(false);
  },
};

javascriptGenerator['ApplicableSet'] = function (block: Blockly.Block) {
  var value = javascriptGenerator.valueToCode(
    block,
    'projects',
    javascriptGenerator.ORDER_ATOMIC
  );

  // Generate the code to perform the calculation using the value
  var code = 'function () { \nreturn ' + value + ';\n}\n';
  return code;
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
  var value = javascriptGenerator.valueToCode(
    block,
    'currentlyIs',
    javascriptGenerator.ORDER_NONE
  );

  // Generate the code to perform the calculation using the value
  var code = 'currentlyIs(' + value + ')'
  return [code, javascriptGenerator.ORDER_LOGICAL_AND];
};

//multiply [Backlog for now]

//Sprint log -- this is to enable the user to pull data from the sprint log (e.g. total points spent, total points available)
// This is equivalent to saying tools.planningTool.totalPoints.spent, tools.planningTool.totalPoints.available
//TODO: change name
Blockly.Blocks['sprintLog'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Sprint log: Total Points')
      .appendField(
        new Blockly.FieldDropdown([
          ['Available', 'Available'],
          ['spent', 'Committed.total'],
          // //TODO: change the value of this field
          // ['Total Points spent on Design in the sprint', 'pointsSpentDesign'], //put this one for now to see what it's like to have more options
        ]),
        'Dropdown'
      )
      .appendField('in the sprint');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

//TODO: change name
javascriptGenerator['sprintLog'] = function (block: Blockly.Block) {
  var selection = block.getFieldValue('Dropdown');

  // Generate the code to perform the calculation using the value
  var code = "project.tools.planningLog.totalPoints.points" + selection;
  return [code, javascriptGenerator.ORDER_RELATIONAL];
};

//endOfSprint -- this is equivalent to saying sprint.endDay, sprint.startDay
Blockly.Blocks['sprintTime'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['Start of Sprint', 'startDay'],
        ['End of Sprint', 'endDay'],
        // //TODO: OS sprintlog process DONT HAVE a mid sprint attribute
        // ['Middle of Sprint', 'midSprint'], //unsure about the wording of this one
      ]),
      'DROPDOWN'
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['sprintTime'] = function (block: Blockly.Block) {
  var selection = block.getFieldValue('DROPDOWN');

  // Generate the code to perform the calculation using the value
  var code = "process.sprint." + selection;
  return [code, javascriptGenerator.ORDER_NONE];
};


export const OvercommittedToolboxCategories = {
  kind: 'category',
  name: 'Example Overcommitted',
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
    {
      kind: 'block',
      type: 'project_people'
    },
    {
      kind: 'block',
      type: 'slackppl',
    },
    { kind: 'block', 
      type: 'time' 
    },
  ],
};
