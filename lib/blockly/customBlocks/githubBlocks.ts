import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

Blockly.Blocks['github3'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Github')
      .appendField(
        new Blockly.FieldDropdown([['working on tech', 'working on tech']]),
        'NAME'
      );

    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#0066cc');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['github'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Github')
      .appendField(
        new Blockly.FieldDropdown([
          ['num lines code committed', 'num lines code committed'],
          ['num branches created', 'num branches created'],
        ]),
        'NAME'
      );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['github'] = function (block) {
  return '...';
};

export const githubToolboxCategories = {
  kind: 'category',
  name: 'Github',
  colour: '#5CA699',
  contents: [
    {
      kind: 'block',
      type: 'github3',
    },
    {
      kind: 'block',
      type: 'github',
    },
  ],
};
