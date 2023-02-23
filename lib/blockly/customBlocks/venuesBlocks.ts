import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

// Applicable Set
// “I want this script to apply to:” AllProjects 
// Renders with the interface / user can’t remove it

// Detector:
// if
// currentlyIs(endOfSprint(what is process))
// And
// Current (?) Sprint log → different dropdown options
// totalPointsSpent >= 1.1 * pointsAvailable

// create a fixed block
Blockly.Blocks['ApplicableSet'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('I want this script to apply to:')
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

// create a venue object block
Blockly.Blocks['AllProjects'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('All Projects')
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

// // create the code output from the venue object block
// javascriptGenerator['venue'] = function (block) {
//   // TODO: SigMeeting should actually be the value from the selected dropdown
//   return "this.venues.find(this.where('kind', 'SigMeeting'))";
// };

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
