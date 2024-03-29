import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

Blockly.Blocks['or'] = {
  init: function () {
    this.appendValueInput('left').setCheck(null);
    this.appendDummyInput().appendField('OR');
    this.appendValueInput('right').setCheck(null);
    //.appendField("(output: boolean)");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['or'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['addition'] = {
  init: function () {
    this.appendValueInput('left').setCheck(null).appendField('+');
    this.appendValueInput('right').setCheck(null);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['addition'] = function (block: Blockly.Block) {
  var left = javascriptGenerator.valueToCode(
    block,
    'left',
    javascriptGenerator.ORDER_MULTIPLICATION
  );
  var right = javascriptGenerator.valueToCode(
    block,
    'right',
    javascriptGenerator.ORDER_MULTIPLICATION
  );
  var code = left + ' + ' + right;
  return [code, javascriptGenerator.ORDER_MULTIPLICATION];
};

Blockly.Blocks['subtraction'] = {
  init: function () {
    this.appendValueInput('left').setCheck(null).appendField('-');
    this.appendValueInput('right').setCheck(null);

    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['subtraction'] = function (block: Blockly.Block) {
  var left = javascriptGenerator.valueToCode(
    block,
    'left',
    javascriptGenerator.ORDER_SUBTRACTION
  );
  var right = javascriptGenerator.valueToCode(
    block,
    'right',
    javascriptGenerator.ORDER_SUBTRACTION
  );
  var code = left + ' - ' + right;
  return [code, javascriptGenerator.ORDER_SUBTRACTION];
};

Blockly.Blocks['multiplication'] = {
  init: function () {
    this.appendValueInput('left').setCheck(null).appendField('*');
    this.appendValueInput('right').setCheck(null);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['multiplication'] = function (block: Blockly.Block) {
  var left = javascriptGenerator.valueToCode(
    block,
    'left',
    javascriptGenerator.ORDER_MULTIPLICATION
  );
  var right = javascriptGenerator.valueToCode(
    block,
    'right',
    javascriptGenerator.ORDER_MULTIPLICATION
  );
  var code = left + ' * ' + right;
  return [code, javascriptGenerator.ORDER_MULTIPLICATION];
};

Blockly.Blocks['division'] = {
  init: function () {
    this.appendValueInput('left').setCheck(null).appendField('/');
    this.appendValueInput('right').setCheck(null);

    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['division'] = function (block: Blockly.Block) {
  var left = javascriptGenerator.valueToCode(
    block,
    'left',
    javascriptGenerator.ORDER_MULTIPLICATION
  );
  var right = javascriptGenerator.valueToCode(
    block,
    'right',
    javascriptGenerator.ORDER_MULTIPLICATION
  );
  var code = left + ' / ' + right;
  return [code, javascriptGenerator.ORDER_MULTIPLICATION];
};

Blockly.Blocks['greater_than'] = {
  init: function () {
    this.appendValueInput('NAME').setCheck(null);
    this.appendDummyInput().appendField('>');
    this.appendValueInput('NAME').setCheck(null);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['greater_than'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['less_than'] = {
  init: function () {
    this.appendValueInput('NAME').setCheck(null);
    this.appendDummyInput().appendField('<');
    this.appendValueInput('NAME').setCheck(null);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['less_than'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['abs'] = {
  init: function () {
    this.appendValueInput('NAME').setCheck(null).appendField('Abs');
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['abs'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['negative'] = {
  init: function () {
    this.appendValueInput('NAME').setCheck(null).appendField('-');
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['negative'] = function (block: Blockly.Block) {
  return null;
};

export const mathToolboxCategories = {
  kind: 'category',
  name: 'Math',
  colour: '#5CA65C',
  contents: [
    {
      kind: 'block',
      type: 'math_round',
    },
    {
      kind: 'block',
      type: 'math_number',
    },
    {
      kind: 'block',
      type: 'addition',
    },
    {
      kind: 'block',
      type: 'subtraction',
    },
    {
      kind: 'block',
      type: 'multiplication',
    },
    {
      kind: 'block',
      type: 'division',
    },
    // {
    //   kind: 'block',
    //   type: 'greater_than',
    // },
    // {
    //   kind: 'block',
    //   type: 'less_than',
    // },
    {
      kind: 'block',
      type: 'abs',
    },
    {
      kind: 'block',
      type: 'negative',
    },
  ],
};
