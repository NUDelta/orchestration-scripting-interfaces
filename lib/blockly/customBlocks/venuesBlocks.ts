import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

// create a venue object block
Blockly.Blocks['venue'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Venue Name')
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
  // TODO: SigMeeting should actually be the value from the selected dropdown
  return "this.venues.find(this.where('kind', 'SigMeeting'))";
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
  ],
};
