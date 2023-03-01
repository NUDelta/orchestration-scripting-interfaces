import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

Blockly.Blocks['Boolean'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Boolean:")
        .appendField(
          new Blockly.FieldDropdown([['true', 'true'],['false', 'false']]),'Dropdown');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
    this.setTooltip('');
    }
  };

javascriptGenerator['Boolean'] = function(block: Blockly.Block) {
  var code = block.getFieldValue('Dropdown');
  return [code, javascriptGenerator.ORDER_ATOMIC];
};


export const VariablesToolboxCategories = {
    kind: 'category',
    name: 'Variables',
    colour: '#5CA699',
    contents: [
      {
        kind: 'block',
        type: 'variables_set',
      },
      {
        kind: 'block',
        type: 'variables_get'
      },
      {
        kind: 'block',
        type: 'Boolean',
      },
    ],
  };
  