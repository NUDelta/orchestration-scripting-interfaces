import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

// Block for variable getter.
Blockly.Blocks['variables_get'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("VAR_NAME"), "FIELD_NAME");
      this.setOutput(true, null);
    }
  };
  
  // Block for variable setter.
  Blockly.Blocks['variables_set'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("set")
          .appendField(new Blockly.FieldVariable("VAR_NAME"), "FIELD_NAME")
          .appendField("to");
      this.setOutput(true, null);
      this.setNextStatement(true);
    }
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
    ],
  };
  