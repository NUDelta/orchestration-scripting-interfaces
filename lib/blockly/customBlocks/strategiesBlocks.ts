import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

Blockly.Blocks['strategiesmsg'] = {
  init: function () {
    this.appendDummyInput().appendField('Strategies');
    // input will only accept strings -- was trying to make it accept text only but couldn't figure it out
    this.appendValueInput('strategy0').setCheck('String');
    this.appendValueInput('strategy1').setCheck('String');
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('Use the AND block to add more than 2 strategies');
    this.setHelpUrl('');
  },
};

javascriptGenerator['strategiesmsg'] = function (block: Blockly.Block) {
  var strategy0 =
    javascriptGenerator.valueToCode(
      block,
      'strategy0',
      javascriptGenerator.ORDER_NONE
    ) || '""';
  var strategy1 =
    javascriptGenerator.valueToCode(
      block,
      'strategy1',
      javascriptGenerator.ORDER_NONE
    ) || '""';
  var strategies = [strategy0, strategy1];
  var code = '[' + strategies.join(',') + ']';
  return [code, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['Strategies'] = {
  init: function () {
    this.appendStatementInput('Strategy')
        .appendField('Strategy')
        .appendField(new Blockly.FieldNumber(1), 'FIELDNAME');
    // this.setPreviousStatement(true);
    // this.setNextStatement(true);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setDeletable(true);
    // this.setMovable(false);
  },
};

javascriptGenerator['Strategies'] = function (block: Blockly.Block) {
  var doinput = javascriptGenerator.statementToCode(
    block,
    'Strategy',
  );

  var code = 'function(){\nreturn' + doinput + '}\n';
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

Blockly.Blocks['rootCause'] = {
  init: function () {
    this.appendValueInput('Root Cause')
        .appendField('Root Cause')
        .appendField(new Blockly.FieldNumber(1), 'FIELDNAME');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(false);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setDeletable(false);
    // this.setMovable(false);
  },
};

javascriptGenerator['rootCause'] = function (block: Blockly.Block) {
  var rc = javascriptGenerator.valueToCode(
    block,
    'Root Cause',
    javascriptGenerator.ORDER_NONE
  );
  return rc;
};


Blockly.Blocks['StrategiesWrapper'] = {
  init: function () {
    this.appendStatementInput('Strategies').appendField('Set of');
    this.setPreviousStatement(true);
    this.setInputsInline(false);
    this.setOutput(false, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['StrategiesWrapper'] = function (block: Blockly.Block) {
  var doinput = javascriptGenerator.statementToCode(
    block,
    'Strategies',
  );
  var code = 'strategies: [\n' + doinput + ']';
  return code;
};

Blockly.Blocks['RCMessage'] = {
  init: function () {
    this.appendDummyInput().appendField('Construct Message:');
    this.appendStatementInput("Message")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(false);
    this.setOutput(false, null);
    this.setColour('#cc9900');
    this.setTooltip('');
    this.setHelpUrl('');
    this.setDeletable(true);
    this.setMovable(true);
  },
};

javascriptGenerator['RCMessage'] = function (block: Blockly.Block) {
  var msg = javascriptGenerator.statementToCode(
    block,
    'Message',
  );
  msg = '"' + msg + '"\n\n';
  return msg;
};


// ATTEMPT & TODO: trying to allow for more than 2 strategies
// javascriptGenerator['strategies'] = function (block: Blockly.Block) {
//   var strategies = [];
//   var strategyCount = 0;

//   // Iterate over all the input connections of the AND block
//   var andBlock = block.getInputTargetBlock('AND');
//   while (andBlock) {
//     // Get the code for the current strategy block
//     var strategyCode =
//       Blockly.JavaScript.valueToCode(
//         andBlock,
//         'strategy' + strategyCount,
//         Blockly.JavaScript.ORDER_NONE
//       ) || '""';
//     strategies.push(strategyCode);

//     // Move to the next input connection of the AND block
//     strategyCount++;
//     andBlock = andBlock.getInputTargetBlock('AND');
//   }

//   var code = 'let strategies = [' + strategies.join(',') + '];\n';
//   return code;
// };

// ATTEMPT: trying to make it so that the input only accepts text blocks
// Blockly.Blocks['strategies'] = {
//     init: function () {
//       this.appendDummyInput().appendField('Strategies');
//       this.appendValueInput('strategy')
//           .setCheck(function(block: Blockly.Block ) {
//             // check if the input block matches the name of the block
//             return block.type === 'text';
//           });
//       this.setInputsInline(false);
//       this.setOutput(true, null);
//       this.setColour(230);
//       this.setTooltip('Use the AND block to add more than 2 strategies');
//       this.setHelpUrl('');
//     },
//   };

export const strategiesToolboxCategories = {
  kind: 'category',
  name: 'Strategies',
  colour: '#5CA699',
  contents: [
    // {
    //   kind: 'block',
    //   type: 'strategiesmsg',
    // },
    {
      kind: 'block',
      type: 'Strategies',
    },
    {
      kind: 'block',
      type: 'StrategiesWrapper',
    },
    {
      kind: 'block',
      type: 'rootCause',
    },
    {
      kind: 'block',
      type: 'RCMessage',
    },  
  ],
};
