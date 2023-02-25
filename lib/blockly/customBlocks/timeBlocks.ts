import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

Blockly.Blocks['time'] = {
  init: function () {
    this.appendDummyInput().appendField('time');

    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(
        new Blockly.FieldDropdown([
          ['0', '0'],
          ['1', '1'],
          ['2', '2'],
          ['3', '3'],
          ['4', '4'],
          ['5', '5'],
          ['6', '6'],
        ]),
        'days'
      )
      .appendField('days')
      .appendField(
        new Blockly.FieldDropdown([
          ['0', '0'],
          ['1', '1'],
          ['2', '2'],
          ['3', '3'],
          ['6', '6'],
          ['12', '12'],
        ]),
        'hours'
      )
      .appendField('hours')
      .appendField(
        new Blockly.FieldDropdown([
          ['0', '0'],
          ['5', '5'],
          ['15', '15'],
          ['30', '30'],
          ['45', '45'],
        ]),
        'minutes'
      )
      .appendField('minutes')
      .appendField(
        new Blockly.FieldDropdown([
          ['At', 'At'],
          ['Before', 'Before'],
          ['After', 'After'],
        ]),
        'relation'
      );
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['Beginning of Sprint', 'Beginning of Sprint'],
        ['Middle of Sprint', 'Middle of Sprint'],
        ['Middle of Week', 'Middle of Week'],
        ['End of Sprint', 'End of Sprint'],
        ['SIG', 'SIG'],
        ['Office Hour', 'Office Hour'],
        ['Studio', 'Studio'],
        ['Sunday', 'Sunday'],
        ['Monday', 'Monday'],
        ['Tuesday', 'Tuesday'],
        ['Wednesday', 'Wednesday'],
        ['Thursday', 'Thursday'],
        ['Friday', 'Friday'],
        ['Saturday', 'Saturday'],
      ]),
      'event'
    );
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['time'] = function (block: Blockly.Block) {
  return 'time_in_python';
};

Blockly.Blocks['modifier'] = {
  init: function () {
    this.appendDummyInput().appendField('Modifier: ');
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['0', '0'],
        ['1', '1'],
        ['2', '2'],
        ['3', '3'],
        ['4', '4'],
        ['5', '5'],
        ['6', '6'],
      ]),
      'days'
    );
    this.appendDummyInput().appendField('days');
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['0', '0'],
        ['1', '1'],
        ['2', '2'],
        ['3', '3'],
        ['6', '6'],
        ['12', '12'],
      ]),
      'hours'
    );
    this.appendDummyInput().appendField('hours');
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['0', '0'],
        ['5', '5'],
        ['15', '15'],
        ['30', '30'],
        ['45', '45'],
      ]),
      'minutes'
    );
    this.appendDummyInput().appendField('minutes');
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['after', 'after'],
        ['before', 'before'],
        ['during', 'during'],
        ['at', 'at'],
      ]),
      'which_modifier'
    );
    this.setInputsInline(false);
    this.setOutput(true, 'event');
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['modifier'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['after'] = {
  init: function () {
    this.appendDummyInput().appendField('Modifier: After');
    this.setOutput(true, 'modifier');
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['after'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['before'] = {
  init: function () {
    this.appendDummyInput().appendField('Modifier: Before');
    this.setOutput(true, 'modifier');
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['before'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['during'] = {
  init: function () {
    this.appendDummyInput().appendField('Modifier: During');
    this.setOutput(true, 'modifier');
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['during'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['at'] = {
  init: function () {
    this.appendDummyInput().appendField('Modifier: At');
    this.setOutput(true, 'modifier');
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['at'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['first_sig'] = {
  init: function () {
    this.appendDummyInput().appendField('Event: First SIG');
    this.setOutput(true, 'event');
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['first_sig'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['second_sig'] = {
  init: function () {
    this.appendDummyInput().appendField('Event: Second SIG');
    this.setOutput(true, 'event');
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['second_sig'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['sprint'] = {
  init: function () {
    this.appendDummyInput().appendField('Event: Sprint');
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['current', 'current'],
        ['last', 'last'],
        ['next', 'next'],
      ]),
      'which_sprint'
    );
    this.setInputsInline(true);
    this.setOutput(true, 'event');
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['sprint'] = function (block: Blockly.Block) {
  return null;
};

/*Blockly.Blocks['days_of_the_week'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Event: Days of the week");
    this.setOutput(true, "event");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascriptGenerator['days_of_the_week'] = function (block: Blockly.Block) {
    return null;
};
*/
Blockly.Blocks['mysore'] = {
  init: function () {
    this.appendDummyInput().appendField('Event: Mysore');
    this.setOutput(true, 'event');
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['mysore'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['first_office_hour'] = {
  init: function () {
    this.appendDummyInput().appendField('Event: First Office hours');
    this.setOutput(true, 'event');
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['first_office_hour'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['second_office_hour'] = {
  init: function () {
    this.appendDummyInput().appendField('Event: Second Office hours');
    this.setOutput(true, 'event');
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['second_office_hour'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['first_studio'] = {
  init: function () {
    this.appendDummyInput().appendField('Event: First Studio');
    this.setOutput(true, 'event');
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['first_studio'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['second_studio'] = {
  init: function () {
    this.appendDummyInput().appendField('Event: Second Studio');
    this.setOutput(true, 'event');
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['second_studio'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['week'] = {
  init: function () {
    this.appendDummyInput().appendField('Event: week');
    this.appendValueInput('number_of_week')
      .setCheck('Number')
      .appendField('(input: week number)');
    this.setOutput(true, 'event');
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['week'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['time_elapsed'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['0', '0'],
        ['1', '1'],
        ['2', '2'],
        ['5', '5'],
        ['10', '10'],
      ]),
      'weeks'
    );
    this.appendDummyInput().appendField('weeks');
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['0', '0'],
        ['1', '1'],
        ['2', '2'],
        ['3', '3'],
        ['4', '4'],
        ['5', '5'],
        ['6', '6'],
      ]),
      'days'
    );
    this.appendDummyInput().appendField('days');
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['0', '0'],
        ['1', '1'],
        ['2', '2'],
        ['3', '3'],
        ['6', '6'],
        ['12', '12'],
      ]),
      'hours'
    );
    this.appendDummyInput().appendField('hours');
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['0', '0'],
        ['5', '5'],
        ['15', '15'],
        ['30', '30'],
        ['45', '45'],
      ]),
      'minutes'
    );
    this.appendDummyInput().appendField('minutes');
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setInputsInline(true);
  },
};

javascriptGenerator['time_elapsed'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['time_period'] = {
  init: function () {
    this.appendDummyInput().appendField('Time period');
    this.appendValueInput('start')
      .setCheck(null)
      .appendField('(input: start time)');
    this.appendValueInput('end')
      .setCheck(null)
      .appendField('(input: end time)');
    this.setOutput(true, 'Boolean');
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['time_period'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['midweek'] = {
  init: function () {
    this.appendDummyInput().appendField('Middle of Week');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#cc9900');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['Weekdays'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Weekdays')
      .appendField(
        new Blockly.FieldDropdown([
          ['Monday', 'Monday'],
          ['Tuesday', 'Tuesday'],
          ['Wednesday', 'Wednesday'],
          ['Thursday', 'Thursday'],
          ['Friday', 'Friday'],
        ]),
        'NAME'
      );
    this.setOutput(true, null);
    this.setColour('#cc9900');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['at'] = {
  init: function () {
    this.appendValueInput('At')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('At');
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour('#cc9900');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['before'] = {
  init: function () {
    this.appendValueInput('Before')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('Before');
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour('#cc9900');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['after'] = {
  init: function () {
    this.appendValueInput('After')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('After');
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour('#cc9900');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['amount_time_modifier'] = {
  init: function () {
    this.appendValueInput('amount_time_modifier')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(
        new Blockly.FieldDropdown([
          ['0', '0'],
          ['1', '1'],
          ['2', '2'],
          ['3', '3'],
          ['4', '4'],
          ['5', '5'],
          ['6', '6'],
        ]),
        'days'
      )
      .appendField('days')
      .appendField(
        new Blockly.FieldDropdown([
          ['0', '0'],
          ['1', '1'],
          ['2', '2'],
          ['3', '3'],
          ['6', '6'],
          ['12', '12'],
        ]),
        'hours'
      )
      .appendField('hours')
      .appendField(
        new Blockly.FieldDropdown([
          ['0', '0'],
          ['5', '5'],
          ['15', '15'],
          ['30', '30'],
          ['45', '45'],
        ]),
        'minutes'
      )
      .appendField('minutes')
      .appendField(
        new Blockly.FieldDropdown([
          ['At', 'At'],
          ['Before', 'Before'],
          ['After', 'After'],
        ]),
        'relation'
      );
    this.setOutput(true, null);
    this.setColour('#cc9900');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

//currentlyIs
Blockly.Blocks['currentlyIs'] = {
  init: function () {
    this.appendDummyInput().appendField('Currently is');
    this.appendValueInput('currentlyIs');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
    this.setTooltip('check if the current time is in the specified time block');
    this.setHelpUrl('');
  },
};

export const timeToolboxCategories = {
  kind: 'category',
  name: 'Time',
  colour: '#5CA699',
  contents: [
    { kind: 'block', type: 'time' },
    { kind: 'block', type: 'modifier' },
    { kind: 'block', type: 'midweek' },
    { kind: 'block', type: 'currentlyIs' },
    { kind: 'block', type: 'Weekdays' },
    { kind: 'block', type: 'after' },
    { kind: 'block', type: 'before' },
    { kind: 'block', type: 'during' },
    { kind: 'block', type: 'at' },
    { kind: 'block', type: 'amount_time_modifier' },
    { kind: 'block', type: 'first_sig' },
    { kind: 'block', type: 'second_sig' },
    { kind: 'block', type: 'sprint' },
    { kind: 'block', type: 'mysore' },
    { kind: 'block', type: 'first_office_hour' },
    { kind: 'block', type: 'second_office_hour' },
    { kind: 'block', type: 'first_studio' },
    { kind: 'block', type: 'second_studio' },
    { kind: 'block', type: 'week' },
    { kind: 'block', type: 'time_elapsed' },
    { kind: 'block', type: 'time_period' },
  ],
};
