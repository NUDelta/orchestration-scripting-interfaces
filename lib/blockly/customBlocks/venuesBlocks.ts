import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

// create a venue object block
Blockly.Blocks['venue'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Venue')
      .appendField(
        new Blockly.FieldDropdown([
          ['SIG Meeting', 'SigMeeting'],
          ['Office Hours', 'OfficeHours'],
          ['Studio', 'Studio'],
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

// create the code output from the venue object block
javascriptGenerator['venue'] = function (block: Blockly.Block) {
  var venue = block.getFieldValue('NAME');
  var code ="venues.find(where('kind', " + venue + "))"
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

Blockly.Blocks['Morningofvenue'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ['Morning of', 'morningOf'],
          ['Noon of', 'noonOf'],
          ['Afternoon of', 'afternoonOf'],
          ['Evening of', 'eveningOf'],
        ]),
        'dropdown'
      )
    this.appendValueInput('venue');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

// create the code output from the venue object block
javascriptGenerator['Morningofvenue'] = function (block: Blockly.Block) {
  var time = block.getFieldValue('dropdown');
  var venue = javascriptGenerator.valueToCode(
    block,
    'venue',
    javascriptGenerator.ORDER_NONE
  );
  var code = '(function () {\n' + time + 'Venue(' + venue +')})';
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

export const venuesToolboxCategories = {
  kind: 'category',
  name: 'Venues',
  colour: '#5CA699',
  contents: [
    {
      kind: 'block',
      type: 'venue',
    },
    {
      kind: 'block',
      type: 'Morningofvenue',
    },
  ],
};
