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
          ['12', '12'],
          ['15', '15'],
          ['30', '30'],
          ['45', '45'],
        ]),
        'time'
      )
      .appendField(
        new Blockly.FieldDropdown([
          ['days', 'days'],
          ['hours', 'hours'],
          ['minutes', 'minutes'],
        ]),
        'timestep'
      )
      // .appendField('hours')
      // .appendField(
      //   new Blockly.FieldDropdown([
      //     ['0', '0'],
      //     ['5', '5'],
      //     ['15', '15'],
      //     ['30', '30'],
      //     ['45', '45'],
      //   ]),
      //   'minutes'
      // )
      .appendField(
        new Blockly.FieldDropdown([
          // ['At', 'At'],
          ['Before', 'Before'],
          ['After', 'After'],
        ]),
        'relation'
      );
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        // ['Beginning of Sprint', 'Beginning of Sprint'],
        // ['Middle of Sprint', 'Middle of Sprint'],
        // ['Middle of Week', 'Middle of Week'],
        // ['End of Sprint', 'End of Sprint'],
        ['SIG Meeting', 'SIG'],
        ['Office Hour', 'OH'],
        ['Studio', 'Studio'],
        // ['Sunday', 'Sunday'],
        // ['Monday', 'Monday'],
        // ['Tuesday', 'Tuesday'],
        // ['Wednesday', 'Wednesday'],
        // ['Thursday', 'Thursday'],
        // ['Friday', 'Friday'],
        // ['Saturday', 'Saturday'],
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
  //TODO should be able to accept 1 day X minutes X hours
  var time = block.getFieldValue('time');
  var timestep = block.getFieldValue('timestep');
  var beforeAfter = block.getFieldValue('relation');
  var venue = block.getFieldValue('event');
  var venueCode = '';
  if (venue == "SIG"){
    venueCode = 'venues.find(this.where("kind", "SigMeeting"))'
  } else if (venue == "OH"){
    venueCode = 'venues.find(this.where("kind", "OfficeHours"))'
  } else if (venue == "Studio") {
    venueCode = 'venues.find(this.where("kind", "Studio"))'
  }
  var code = timestep + beforeAfter + 'Venue(\n' + venueCode + ', ' + time + ')'
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
  var code = time + 'Venue(' + venue +')';
  return [code, javascriptGenerator.ORDER_ATOMIC];
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

Blockly.Blocks['firstlast_venue'] = {
  init: function () {
    this.appendDummyInput().appendField('Event:')
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['First', 'First'],
        ['Last', 'Last'],
      ]),
      'firstlastmodifier'
    );
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['SIG Meeting', 'SigMeeting'],
        ['Office Hours', 'OfficeHours'],
        ['Studio', 'Studio'],
      ]),
      'venue'
    );
    this.setOutput(true, 'date');
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['firstlast_venue'] = function (block: Blockly.Block) {
  var firstlastmodifier = block.getFieldValue('firstlastmodifier');
  var venue = block.getFieldValue('venue');
  var code = '(get' + firstlastmodifier + "(venues.find(where('kind', '" + venue + "')))).start_time"
  return [code, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['IsDayOf'] = {
  init: function () {
    this.appendValueInput('date')
        .setCheck('date')
        .appendField('Is ')
    .appendField(
      new Blockly.FieldDropdown([
        ['Day of', 'Day'],
        ['Week of', 'Week'],
      ]),
      'time'
    );
    
    this.setOutput(true, Boolean);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['IsDayOf'] = function (block: Blockly.Block) {
  var date =
  javascriptGenerator.valueToCode(
    block,
    'date',
    javascriptGenerator.ORDER_NONE
  );
  var dayWeekModifier = block.getFieldValue('time');
  var code = 'is'+ dayWeekModifier + 'Of(' + date + ')'
  return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
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

javascriptGenerator['currentlyIs'] = function (block: Blockly.Block) {
  // TODO:
  var value = javascriptGenerator.valueToCode(
    block,
    'currentlyIs',
    javascriptGenerator.ORDER_NONE
  );

  // Generate the code to perform the calculation using the value
  var code = 'currentlyIs(' + value + ')'
  return [code, javascriptGenerator.ORDER_LOGICAL_AND];
};


Blockly.Blocks['DaysBefore'] = {
  init: function () {
    this.appendDummyInput()
    .appendField(
      new Blockly.FieldDropdown([
        ['0', '0'],
        ['1', '1'],
        ['2', '2'],
        ['3', '3'],
        ['4', '4'],
        ['5', '5'],
        ['6', '6'],
      ]), 'time'
      ).appendField(
      new Blockly.FieldDropdown([
        ['Day', 'days'],
        ['Week', 'weeks'],
      ]), 'timestep'
      );
    this.appendValueInput('date')
    .setCheck('date')
    .appendField(' Before')
    this.setOutput(true, 'date');
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['DaysBefore'] = function (block: Blockly.Block) {
  var date =
  javascriptGenerator.valueToCode(
    block,
    'date',
    javascriptGenerator.ORDER_NONE
  );
  var dayWeekModifier = block.getFieldValue('timestep');
  var time = block.getFieldValue('time');
  var code = dayWeekModifier + 'Before((' + date + ', ' + time +'))'
  return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

export const timeToolboxCategories = {
  kind: 'category',
  name: 'Time',
  colour: '#5CA699',
  contents: [
    { kind: 'block', type: 'time' },
    { kind: 'block',
    type: 'Morningofvenue',
    },
    { kind: 'block', type: 'modifier' },
    { kind: 'block', type: 'midweek' },
    { kind: 'block', type: 'currentlyIs' },
    { kind: 'block', type: 'Weekdays' },
    { kind: 'block', type: 'after' },
    { kind: 'block', type: 'before' },
    { kind: 'block', type: 'during' },
    { kind: 'block', type: 'at' },
    { kind: 'block', type: 'DaysBefore' },
    { kind: 'block', type: 'firstlast_venue' },
    { kind: 'block', type: 'IsDayOf' },
    { kind: 'block', type: 'sprint' },
    { kind: 'block', type: 'mysore' },
    { kind: 'block', type: 'week' },
    { kind: 'block', type: 'time_elapsed' },
    { kind: 'block', type: 'time_period' },
  ],
};
