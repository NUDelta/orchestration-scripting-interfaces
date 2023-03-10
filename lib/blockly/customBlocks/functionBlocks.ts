import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

Blockly.Blocks['every'] = {
  init: function () {
    this.appendDummyInput().appendField('Every');
    this.appendValueInput('time').setCheck('time').appendField('(input: time)');
    this.appendValueInput('action')
      .setCheck(null)
      .appendField('(input: action)');
    this.setOutput(true, 'recipient');
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['every'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['contains'] = {
  init: function () {
    this.appendValueInput('NAME')
      .setCheck(null)
      .appendField('            Does (resource 1)');
    this.appendDummyInput().appendField('Contain');
    this.appendValueInput('blah')
      .setCheck(null)
      .appendField('                     (text)?');
    this.appendDummyInput('output: true or false').appendField(
      '(output: true or false)'
    );
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['contains'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['was_updated'] = {
  init: function () {
    this.appendValueInput('NAME')
      .setCheck(null)
      .appendField('                      Was (resource)');
    this.appendDummyInput().appendField('Updated?');
    this.appendDummyInput('output: true or false').appendField(
      '(output: true or false)'
    );
    this.setInputsInline(false);
    this.setOutput(true, 'Boolean');
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['was_updated'] = function (block: Blockly.Block) {
  return null;
};

/*
Blockly.Blocks['wasupdatedv1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wasUpdated");
    this.appendValueInput("resource")
        .setCheck(null)
        .appendField("(input: resource)");
    this.appendDummyInput()
        .appendField("(output: boolean)");
    this.setInputsInline(false);
    /*
    this.appendValueInput("time_period")
        .setCheck(null)
        .appendField("(input: time period)");

    this.setOutput(true, "Boolean");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


javascriptGenerator['wasupdatedv1'] = function (block: Blockly.Block) {
    return null;
};
*/

Blockly.Blocks['At'] = {
  init: function () {
    this.appendDummyInput().appendField('At');
    this.appendValueInput('time').setCheck('time').appendField('(input: time)');
    this.appendValueInput('action')
      .setCheck(null)
      .appendField('(input: action)');
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['At'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['tf_slack_message'] = {
  init: function () {
    this.appendDummyInput().appendField('True / False Slack Message');
    this.appendValueInput('message')
      .setCheck(null)
      .appendField('(input: message to send)');
    this.appendValueInput('time')
      .setCheck(null)
      .appendField('(input: time to send)');
    this.appendValueInput('message')
      .setCheck(null)
      .appendField('(input: recipient)');
    this.appendDummyInput(
      'output: recipient responded true or false'
    ).appendField('(output: recipient responded true or false)');
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['tf_slack_message'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['slack_message'] = {
  init: function () {
    this.appendDummyInput().appendField('Send a slack message to ');
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput('type name'),
      'NAME'
    );
    this.appendDummyInput().appendField('asking ');
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput('type question'),
      'NAME1'
    );
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_LEFT)
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
      .appendField('minutes');
    this.appendDummyInput()
      .appendField('')
      .appendField(
        new Blockly.FieldDropdown([
          ['At', 'At'],
          ['Before', 'Before'],
          ['After', 'After'],
        ]),
        'NAME4'
      );
    this.setInputsInline(false);
    this.appendDummyInput()
      .appendField('')
      .appendField(
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
        'NAME5'
      );
    this.setInputsInline(false);
    this.appendDummyInput().appendField(
      ', then check if this message contains: '
    );
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput('type keyword'),
      'NAME2'
    );
    /*
    this.appendValueInput("message")
        .setCheck(null)
        .appendField("         text - question to ask");
    this.appendValueInput("time")
        .setCheck(null)
        .appendField("         time block - when to send");
    this.appendValueInput("message")
        .setCheck(null)
        .appendField("         text - recipient's name");
    this.appendDummyInput("output: text - recipient's response")
        .appendField("(output: text - recipient's response)");
    */
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['slack_message'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['timestamp'] = {
  init: function () {
    this.appendDummyInput().appendField(
      'Timestamps when updated(output: list of timestamps)'
    );
    this.appendDummyInput().appendField('(output: list of timestamps)');
    this.appendValueInput('resource')
      .setCheck(null)
      .appendField('(input: resource)');
    this.appendValueInput('start')
      .setCheck(null)
      .appendField('(input: start time)');
    this.appendValueInput('end')
      .setCheck('time')
      .appendField('(input: end time)');
    this.setOutput(true, 'list');
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
javascriptGenerator['timestamp'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['distinct'] = {
  init: function () {
    this.appendDummyInput().appendField('Count distinct days(output: number)');
    this.appendDummyInput().appendField('(output: number)');
    this.appendValueInput('list')
      .setCheck('list')
      .appendField('(input: list of timestamps)');
    this.setOutput(true, 'Number');
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['distinct'] = function (block: Blockly.Block) {
  return null;
};

// Blockly.Blocks['filled'] = {
//   init: function () {
//     this.appendDummyInput().appendField('Is this filled?');
//     this.appendValueInput('NAME')
//       .setCheck(null)
//       .appendField('(input: resource)');
//     this.appendDummyInput('output: boolean').appendField('(output: boolean)');
//     this.setInputsInline(false);
//     this.setOutput(true, null);
//     this.setColour(120);
//     this.setTooltip('');
//     this.setHelpUrl('');
//   },
// };

javascriptGenerator['filled'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['was_read'] = {
  init: function () {
    this.appendDummyInput().appendField('wasRead');
    this.appendValueInput('NAME')
      .setCheck(null)
      .appendField('(input: resource)');
    this.appendDummyInput('output: boolean').appendField('(output: boolean)');
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['was_read'] = function (block: Blockly.Block) {
  return null;
};

export const functionsToolboxCategories = {
  kind: 'category',
  name: 'Functions',
  colour: '#5CA699',
  contents: [
    {
      kind: 'block',
      type: 'every',
    },
    {
      kind: 'block',
      type: 'contains',
    },
    {
      kind: 'block',
      type: 'was_updated',
    },
    {
      kind: 'block',
      type: 'At',
    },
    {
      kind: 'block',
      type: 'distinct',
    },
    // {
    //   kind: 'block',
    //   type: 'filled',
    // },
    {
      kind: 'block',
      type: 'was_read',
    },
  ],
};
