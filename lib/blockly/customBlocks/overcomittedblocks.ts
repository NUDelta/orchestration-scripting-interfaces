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

    //TODO: disable delete for this block
  },
};

javascriptGenerator['ApplicableSet'] = function (block: Blockly.Block) {
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

Blockly.Blocks['send'] = {
  init: function () {
    this.appendDummyInput().appendField('Send Slack Message');
    this.appendValueInput('message1')
      // .setCheck('String')
      .appendField('         Your Message here:');
    /*
      this.appendValueInput("message2")
          .setCheck("String")
          .appendField("(input: underlying strategy)");
      this.appendValueInput("recipient")
          .setCheck("recipient")
          .appendField("(input: recipient)");
    */
    // this.appendValueInput('medium')
    //   .setCheck('medium')
    //   .appendField('         medium - slack or email');
    this.appendValueInput('recipient')
      // .setCheck('String')
      .appendField("         Recipient:");
    this.appendValueInput('time').appendField(
      '         Send at time:'
    );
    this.setPreviousStatement(true);
    this.setOutput(false);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['send'] = function (block: Blockly.Block) {
  var message = javascriptGenerator.valueToCode(
    block,
    'message1',
    javascriptGenerator.ORDER_NONE
  );
  var recipient = javascriptGenerator.valueToCode(
    block,
    'recipient',
    javascriptGenerator.ORDER_NONE
  );
  var time = javascriptGenerator.valueToCode(
    block,
    'time',
    javascriptGenerator.ORDER_NONE
  );
  var code = 'messagePeople({\nmessage: ' + message + ',\n' + 'people: [' + recipient + '],\n' + 'opportunity: ' + time + '});';
  return code;
};

Blockly.Blocks['time'] = {
  init: function () {
    this.appendDummyInput().appendField('time');

    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(
        new Blockly.FieldDropdown([
          ['0', '0'],
          ['1', '1'],
          ['2', '2'],
          ['3', '3'],
          ['4', '4'],
          ['5', '5'],
          ['6', '6'],
        ]),
        'days'
      )
      .appendField('days')
      .appendField(
        new Blockly.FieldDropdown([
          ['0', '0'],
          ['1', '1'],
          ['2', '2'],
          ['3', '3'],
          ['6', '6'],
          ['12', '12'],
        ]),
        'hours'
      )
      .appendField('hours')
      .appendField(
        new Blockly.FieldDropdown([
          ['0', '0'],
          ['5', '5'],
          ['15', '15'],
          ['30', '30'],
          ['45', '45'],
        ]),
        'minutes'
      )
      .appendField('minutes')
      .appendField(
        new Blockly.FieldDropdown([
          ['At', 'At'],
          ['Before', 'Before'],
          ['After', 'After'],
        ]),
        'relation'
      );
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['Beginning of Sprint', 'Beginning of Sprint'],
        ['Middle of Sprint', 'Middle of Sprint'],
        ['Middle of Week', 'Middle of Week'],
        ['End of Sprint', 'End of Sprint'],
        ['SIG', 'SIG'],
        ['Office Hour', 'Office Hour'],
        ['Studio', 'Studio'],
        ['Sunday', 'Sunday'],
        ['Monday', 'Monday'],
        ['Tuesday', 'Tuesday'],
        ['Wednesday', 'Wednesday'],
        ['Thursday', 'Thursday'],
        ['Friday', 'Friday'],
        ['Saturday', 'Saturday'],
      ]),
      'event'
    );
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['time'] = function (block: Blockly.Block) {
  return 'time_in_python';
};

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
    {
      kind: 'block',
      type: 'project_people'
    },
    {
      kind: 'block',
      type: 'send',
    },
    { kind: 'block', 
      type: 'time' 
    },
  ],
};
