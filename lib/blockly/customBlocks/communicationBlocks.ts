import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

// Blockly.Blocks['send'] = {
//   init: function () {
//     this.appendDummyInput().appendField('Send Slack Message');
//     this.appendValueInput('message1')
//       .setCheck('String')
//       .appendField('         Your Message here:');
//     /*
//       this.appendValueInput("message2")
//           .setCheck("String")
//           .appendField("(input: underlying strategy)");
//       this.appendValueInput("recipient")
//           .setCheck("recipient")
//           .appendField("(input: recipient)");
//     */
//     // this.appendValueInput('medium')
//     //   .setCheck('medium')
//     //   .appendField('         medium - slack or email');
//     this.appendValueInput('recipient')
//       .setCheck('String')
//       .appendField("         Recipient:");
//     this.appendValueInput('time').appendField(
//       '         Send at time:'
//     );
//     this.setPreviousStatement(true);
//     this.setOutput(false);
//     this.setColour(20);
//     this.setTooltip('');
//     this.setHelpUrl('');
//   },
// };

// javascriptGenerator['send'] = function (block: Blockly.Block) {
//   return null;
// };

Blockly.Blocks['person'] = {
  init: function () {
    this.appendDummyInput().appendField('Recipient: Person');
    this.appendValueInput('name')
      .setCheck('String')
      .appendField('(input: name)');
    this.setOutput(true, 'recipient');
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['person'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['email_address'] = {
  init: function () {
    this.appendDummyInput().appendField('Recipient: Email Address');
    this.appendValueInput('email')
      .setCheck('String')
      .appendField('(input: email)');
    this.setOutput(true, 'recipient');
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['email_address'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['slack_channel'] = {
  init: function () {
    this.appendDummyInput().appendField('Recipient: Slack Channel');
    this.appendValueInput('name')
      .setCheck('String')
      .appendField('(input: channel)');
    this.setOutput(true, 'recipient');
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['slack_channel'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['slack_medium'] = {
  init: function () {
    this.appendDummyInput().appendField('Medium: Slack');
    this.setOutput(true, 'medium');
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['slack_medium'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['email'] = {
  init: function () {
    this.appendDummyInput().appendField('Medium: Email');
    this.setOutput(true, 'medium');
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['email'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['slacked_someone'] = {
  init: function () {
    this.appendDummyInput().appendField('Have you slacked ');
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput('type name'),
      'NAME'
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#68A65C');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['slacked_someone'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['slacked_deliverables'] = {
  init: function () {
    this.appendDummyInput().appendField('Have you slacked deliverables to ');
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput('type channel OR thread name'),
      'NAME'
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#68A65C');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['slacked_deliverables'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['high_deliverables'] = {
  init: function () {
    this.appendDummyInput().appendField(
      'No deliverables attached in slack thread'
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['high_deliverables'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['student response to slack bot'] = {
  init: function () {
    this.appendDummyInput().appendField('student response to slack bot');
    this.appendValueInput('message')
      .setCheck('String')
      .appendField('(input: slack bot name)');
    this.appendDummyInput('(output: string)').appendField('(output: string)');
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['student response to slack bot'] = function (
  block: Blockly.Block
) {
  return null;
};

Blockly.Blocks[
  'detection triggered - mentor wants response triggered (true or false)'
] = {
  init: function () {
    this.appendDummyInput().appendField(
      'detection triggered - mentor wants response triggered (true or false'
    );
    this.appendDummyInput('(output: boolean)').appendField('(output: boolean)');
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator[
  'detection triggered - mentor wants response triggered (true or false)'
] = function (block: Blockly.Block) {
  return null;
};

export const communicationToolboxCategories = {
  kind: 'category',
  name: 'Communication',
  colour: '#5CA699',
  contents: [
    {
      kind: 'block',
      type: 'send',
    },
    {
      kind: 'block',
      type: 'slacked_someone',
    },
    {
      kind: 'block',
      type: 'slacked_deliverables',
    },
    {
      kind: 'block',
      type: 'person',
    },
    {
      kind: 'block',
      type: 'email_address',
    },
    {
      kind: 'block',
      type: 'email',
    },
    {
      kind: 'block',
      type: 'slack_channel',
    },
    {
      kind: 'block',
      type: 'slack_medium',
    },
    {
      kind: 'block',
      type: 'high_deliverables',
    },
    {
      kind: 'block',
      type: 'student response to slack bot',
    },
    {
      kind: 'block',
      type: 'detection triggered - mentor wants response triggered (true or false)',
    },
  ],
};
