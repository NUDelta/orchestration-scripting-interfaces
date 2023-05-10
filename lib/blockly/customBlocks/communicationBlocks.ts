import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

Blockly.Blocks['slackme'] = {
  init: function () {
    this.appendDummyInput().appendField('Send Slack Message to me when detector triggers');
    this.appendValueInput('situationdesc')
      // .setCheck('String')
      .appendField('    Hey, looks like your detector for : ');
    this.appendValueInput('violation').appendField("    has been triggered! This is what triggered it:");
    this.appendDummyInput().appendField("    Here are the potential root causes that you");
    this.appendDummyInput().appendField("    have identified: ");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(false);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['slackme'] = function (block: Blockly.Block) {
  var situation =
  javascriptGenerator.valueToCode(
    block,
    'situationdesc',
    javascriptGenerator.ORDER_NONE
  );
  var trigger = javascriptGenerator.valueToCode(
    block,
    'violation',
    javascriptGenerator.ORDER_NONE
  );
  var msg = 'Hey, looks like your detector for ' + situation + ' has been triggered! This is what triggered it: ' + trigger + '\nHere are the potential root causes that you have identified: \n';
  return msg;
};

Blockly.Blocks['slackmerc'] = {
  init: function () {
    this.appendValueInput('Root Cause')
    .appendField('RC')
    .appendField(new Blockly.FieldNumber(1), 'FIELDNAME')
    .appendField(':')
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(false);
    this.setColour(70);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['slackmerc'] = function (block: Blockly.Block) {
  var num = block.getFieldValue('FIELDNAME')
  var desc = javascriptGenerator.valueToCode(
    block,
    'Root Cause',
    javascriptGenerator.ORDER_NONE
  );
  var code = 'Root cause ' + num + ': ' + desc + '\n'
  return code;
};


Blockly.Blocks['slackmecontext'] = {
  init: function () {
    this.appendValueInput('Root Cause')
    // .appendField('RC')
    .appendField(new Blockly.FieldNumber(1), 'FIELDNAME')
    .appendField(':')
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(false);
    this.setColour(70);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['slackmecontext'] = function (block: Blockly.Block) {
  var num = block.getFieldValue('FIELDNAME')
  var desc = javascriptGenerator.valueToCode(
    block,
    'Root Cause',
    javascriptGenerator.ORDER_NONE
  );
  var code = num + ': ' + desc + '\n'
  return code;
};

Blockly.Blocks['slackme1/2'] = {
  init: function () {
    this.appendDummyInput().appendField("      Here's some context information too better");
    this.appendDummyInput().appendField("      understand the RCs: ");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(false);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['slackme1/2'] = function (block: Blockly.Block) {
  return "Here's some context information too better understand the RCs:\n";
};


Blockly.Blocks['slackme2'] = {
  init: function () {
    this.appendDummyInput().appendField("      The context information distinctive to each");
    this.appendDummyInput().appendField("      RCs are as such (optional): ");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(false);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['slackme2'] = function (block: Blockly.Block) {
  return "The context information distinctive to each RCs are as such (optional):\n";
};

Blockly.Blocks['slackme3'] = {
  init: function () {
    this.appendDummyInput().appendField("Which root cause do you think is causing this?");
    // this.appendDummyInput().appendField("If you think it's none of these, [TODO]");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(false);
    this.setOutput(false);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['slackme3'] = function (block: Blockly.Block) {
  return "Which root cause do you think is causing this?";
};


Blockly.Blocks['slackppl'] = {
  init: function () {
    this.appendDummyInput().appendField('Send Slack Message to People');
    this.appendValueInput('message1')
      // .setCheck('String')
      .appendField('         Your Message here:');
    this.appendValueInput('recipient')
      // .setCheck('String')
      .appendField("         Recipient:");
    this.appendValueInput('time').appendField(
      '         Send at time:'
    );
    this.setPreviousStatement(true);
    this.setNextStatement(false);
    this.setOutput(false);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['slackppl'] = function (block: Blockly.Block) {
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
  var code = 'messagePeople({\nmessage: ' + message + ',\n' + 'people: [' + recipient + '],\n' + 'opportunity: (function() {return ' + time + '})\n})\n';
  return code;
};

Blockly.Blocks['slackSIG'] = {
  init: function () {
    this.appendDummyInput().appendField('Send Slack Msg to SIG Channel');
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
    this.appendValueInput('channel')
      // .setCheck('String')
      .appendField("         SIG name:");
    this.appendValueInput('time').appendField(
      '         Send at time:'
    );
    this.setPreviousStatement(true);
    this.setNextStatement(false);
    this.setOutput(false);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['slackSIG'] = function (block: Blockly.Block) {
  var message = javascriptGenerator.valueToCode(
    block,
    'message1',
    javascriptGenerator.ORDER_NONE
  );
  var recipient = javascriptGenerator.valueToCode(
    block,
    'channel',
    javascriptGenerator.ORDER_NONE
  );
  var time = javascriptGenerator.valueToCode(
    block,
    'time',
    javascriptGenerator.ORDER_NONE
  );
  var code = 'messageChannel({\nmessage: ' + message + ',\n' + 'sigName: ' + recipient + ',\n' + 'opportunity: (function() {return ' + time + '})\n})\n';
  return code;
};

Blockly.Blocks['slackproj'] = {
  init: function () {
    this.appendDummyInput().appendField('Send Slack Msg to Project Channel');
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
    this.appendValueInput('channel')
      // .setCheck('String')
      .appendField("         Project name:");
    this.appendValueInput('time').appendField(
      '         Send at time:'
    );
    this.setPreviousStatement(true);
    this.setNextStatement(false);
    this.setOutput(false);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['slackproj'] = function (block: Blockly.Block) {
  var message = javascriptGenerator.valueToCode(
    block,
    'message1',
    javascriptGenerator.ORDER_NONE
  );
  var recipient = javascriptGenerator.valueToCode(
    block,
    'channel',
    javascriptGenerator.ORDER_NONE
  );
  var time = javascriptGenerator.valueToCode(
    block,
    'time',
    javascriptGenerator.ORDER_NONE
  );
  var code = 'messageChannel({\nmessage: ' + message + ',\n' + 'projectName: ' + recipient + ',\n' + 'opportunity: ' + time + '\n})';
  return code;
};


// Custom Text Block
Blockly.Blocks['my_text_join'] = {
  init: function () {
    this.appendValueInput('text1').setCheck('String').appendField('join');
    this.appendValueInput('text2').setCheck('String').appendField('with');
    this.setOutput(true, 'String');
    this.setColour(160);
    this.setTooltip('Join two texts with a space in between');
  },
};

javascriptGenerator['my_text_join'] = function (block: Blockly.Block) {
  var text1 =
    javascriptGenerator.valueToCode(
      block,
      'text1',
      javascriptGenerator.ORDER_NONE
    ) || "''";
  var text2 =
    javascriptGenerator.valueToCode(
      block,
      'text2',
      javascriptGenerator.ORDER_NONE
    ) || "''";
  var code = JSON.stringify(text1) + JSON.stringify(text2);
  return [code, javascriptGenerator.ORDER_NONE];
};

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

Blockly.Blocks['TriggerMsgSubCategory'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("------------TriggerMsg------------");
    this.setColour("#000000");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['SendslackSubCategory'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("------------Send Slack------------");
    this.setColour("#000000");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

export const communicationToolboxCategories = {
  kind: 'category',
  name: 'Communication',
  colour: '#5CA699',
  contents: [
    // {
    //   kind: 'block',
    //   type: 'TriggerMsgSubCategory',
    // },
    // {
    //   kind: 'block',
    //   type: 'slackme',
    // },
    // {
    //   kind: 'block',
    //   type: 'slackmerc',
    // },
    // {
    //   kind: 'block',
    //   type: 'slackme1/2',
    // },
    // {
    //   kind: 'block',
    //   type: 'slackmecontext',
    // },
    // {
    //   kind: 'block',
    //   type: 'slackme2',
    // },
    // {
    //   kind: 'block',
    //   type: 'slackme3',
    // },
    {
      kind: 'block',
      type: 'SendslackSubCategory',
    },
    {
      kind: 'block',
      type: 'slackppl',
    },
    {
      kind: 'block',
      type: 'slackSIG',
    },
    {
      kind: 'block',
      type: 'slackproj',
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
      type: 'my_text_join',
    },
    // {
    //   kind: 'block',
    //   type: 'person',
    // },
    // {
    //   kind: 'block',
    //   type: 'email_address',
    // },
    // {
    //   kind: 'block',
    //   type: 'email',
    // },
    // {
    //   kind: 'block',
    //   type: 'slack_medium',
    // },
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
