import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

Blockly.Blocks['sprintLog'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Sprint log: Total Points')
      .appendField(
        new Blockly.FieldDropdown([
          ['Spent', 'Spent'],
          ['Committed', 'Committed.total'],
          ['Available', 'Available'],
          // //TODO: change the value of this field
          // ['Total Points spent on Design in the sprint', 'pointsSpentDesign'], //put this one for now to see what it's like to have more options
        ]),
        'Dropdown'
      )
      .appendField('in the sprint');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

//TODO: change name
javascriptGenerator['sprintLog'] = function (block: Blockly.Block) {
  var selection = block.getFieldValue('Dropdown');

  // Generate the code to perform the calculation using the value
  var code = "project.tools.planningLog.totalPoints.points" + selection;
  return [code, javascriptGenerator.ORDER_RELATIONAL];
};

Blockly.Blocks['sprint_log3'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Sprint Log')
      .appendField(
        new Blockly.FieldDropdown([
          // ['working on tech', 'working on tech'],
          // ['working on user testing', 'working on user testing'],
          // ['working on argumentation', 'working on argumentation'],
          ['0 points planned', '0 points planned'],
          // ['1/4 points planned', '1/4 points planned'],
          ['1/2 points planned', '1/2 points planned'],
          // ['3/4 points planned', '3/4 points planned'],
          ['all points planned', 'all points planned'],
          ['total points planned', 'total points planned'],
          // ['points planned design', 'points planned design'],
          // ['points planned tech', 'points planned tech'],
          // ['points planned research', 'points planned research'],
          // ['1/4 through points spent', '1/4 through points spent'],
          // ['halfway through points spent', 'halfway through points spent'],
          // ['3/4 through points spent', '3/4 through points spent'],
          ['total points spent', 'total points spent'],
          ['hours spent on tech', 'hours spent on tech'],
          ['hours spent on design', 'hours spent on design'],
          ['hours spent on research', 'hours spent on research'],
          ['hours spent on argumentation', 'hours spent on argumentation'],
          // ['over points on a story', 'over points on a story'],
          // ['at least one task is complete', 'at least one task is complete'],
          // [
          //   'at least one story is incomplete',
          //   'at least one story is incomplete',
          // // ],
          // ['at least one story is complete', 'at least one story is complete'],
          // ['all stories completed', 'all stories completed'],
          // ['has not finished any tasks', 'has not finished any tasks'],
          // ['number of tasks', 'number of tasks'],
          // ['number of stories', 'number of stories'],
        ]),
        'NAME'
      );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#0066cc');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['sprint_log3'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['sprintLogPointDTR'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Points spent on')
      .appendField(
        new Blockly.FieldDropdown([
          ['Tech', 'tech'],
          ['Design', 'design'],
          ['Research', 'research'],
        ]),
        'NAME'
      );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#0066cc');
    this.setTooltip('TAKES IN A STUDENT');
    this.setHelpUrl('');
  },
};

javascriptGenerator['sprintLogPointDTR'] = function (block: Blockly.Block) {
  var attribute = block.getFieldValue('NAME');
  var code = '.sprintLog.totalPoints.pointsCommitted.' + attribute
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

Blockly.Blocks['sprintLogStory'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Sprint Log: Summary of Stories')
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#0066cc');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['sprintLogStory'] = function (block: Blockly.Block) {
  return ['Sprint Log: Summary of Stories', javascriptGenerator.ORDER_ATOMIC];
};

Blockly.Blocks['sprintLogTasks'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Sprint Log: Summary of Tasks')
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#0066cc');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['sprintLogTasks'] = function (block: Blockly.Block) {
  return ['[Summary of Stories]', javascriptGenerator.ORDER_ATOMIC];
};

Blockly.Blocks['sprintLogFocus'] = {
  init: function () {
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([['D', 'Backlogged'],
                                            ['D', 'Completed'],
                                            ['D', 'Incomplete']
                                          ]))
    this.appendDummyInput()
      .appendField('is the Category spent most points on')
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#0066cc');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['sprintLogFocus'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['sprintLogSlice'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Sprint Log: D T R makeup of each stories')
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#0066cc');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['sprintLogSlice'] = function (block: Blockly.Block) {
  return ['[D T R makeup of each stories]', javascriptGenerator.ORDER_ATOMIC];;
};

/*Blockly.Blocks['before_first_sig_of_sprint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("before first SIG of sprint");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#cc9900");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};*/

/*
["Beginning of Sprint", "Beginning of Sprint"],
            ["Middle of Sprint", "Middle of Sprint"],
            ["End of Sprint", "End of Sprint"],*/

Blockly.Blocks['before_next_sig'] = {
  init: function () {
    this.appendDummyInput().appendField('SIG');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#cc9900');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['before_next_sig'] = function (block: Blockly.Block) {
  return null;
};

/*Blockly.Blocks['before_first_studio_of_sprint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("before first Studio of sprint");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#cc9900");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};*/

Blockly.Blocks['before_next_studio'] = {
  init: function () {
    this.appendDummyInput().appendField('Studio');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#cc9900');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['before_next_studio'] = function (block: Blockly.Block) {
  return null;
};

/*Blockly.Blocks['before_first_oh_of_sprint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("before first OH of sprint");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#cc9900");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};*/

Blockly.Blocks['before_next_oh'] = {
  init: function () {
    this.appendDummyInput().appendField('Office Hour');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#cc9900');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['before_next_oh'] = function (block: Blockly.Block) {
  return null;
};

// //endOfSprint -- this is equivalent to saying sprint.endDay, sprint.startDay
// Blockly.Blocks['sprintTime'] = {
//   init: function () {
//     this.appendDummyInput().appendField(
//       new Blockly.FieldDropdown([
//         ['Start of Sprint', 'startOfSprint'],
//         ['End of Sprint', 'endOfSprint'],
//         ['Middle of Sprint', 'midSprint'], //unsure about the wording of this one
//       ]),
//       'NAME'
//     );
//     this.setInputsInline(true);
//     this.setOutput(true, null);
//     this.setColour(110);
//     this.setTooltip('');
//     this.setHelpUrl('');
//   },
// };

// javascriptGenerator['sprintTime'] = function (block: Blockly.Block) {
//   return null;
// };

// Commented out for now
// Blockly.Blocks['sprintlog2'] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField('Sprint Log')
//       .appendField(
//         new Blockly.FieldDropdown([
//           ['points spent', 'points spent'],
//           ['points committed', 'points committed'],
//           ['percent sprint tasks', 'percent sprint tasks'],
//           ['avg num tasks per story', 'avg num tasks per story'],
//           ['num stories', 'num stories'],
//           ['stories', 'stories'],
//           ['num tasks', 'num tasks'],
//           ['tasks', 'tasks'],
//           ['deliverables', 'deliverables'],
//         ]),
//         'NAME'
//       );
//     this.appendDummyInput().appendField(
//       new Blockly.FieldDropdown([
//         ['N/A', 'N/A'],
//         ['all', 'all'],
//         ['tech', 'tech'],
//         ['design', 'design'],
//         ['research', 'research'],
//         ['done', 'done'],
//         ['backlogged', 'backlogged'],
//         ['in progress', 'in progress'],
//         ['unmarked', 'unmarked'],
//         ['roadblocks', 'roadblocks'],
//       ]),
//       'NAME'
//     );
//     this.setInputsInline(true);
//     this.setOutput(true, null);
//     this.setColour(290);
//     this.setTooltip('');
//     this.setHelpUrl('');
//   },
// };

Blockly.Blocks['high_sprint_log_contains'] = {
  init: function () {
    this.appendDummyInput().appendField('Sprint Log Stories that contain');
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput('type here!'),
      'NAME'
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#0066cc');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['high_sprint_log_contains'] = function (
  block: Blockly.Block
) {
  return null;
};

Blockly.Blocks['high_sprint_log_contains_bool'] = {
  init: function () {
    this.appendDummyInput().appendField('Sprint Log Stories contain');
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput('type here!'),
      'NAME'
    );
    this.appendDummyInput().appendField('(bool)');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#0066cc');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['high_sprint_log_contains_bool'] = function (
  block: Blockly.Block
) {
  return null;
};

Blockly.Blocks['high_sprint_log_task_contains'] = {
  init: function () {
    this.appendDummyInput().appendField('Sprint Log Tasks contain');
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput('type here!'),
      'NAME'
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#0066cc');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['high_sprint_log_task_contains'] = function (
  block: Blockly.Block
) {
  return null;
};

Blockly.Blocks['high_sprint_log_tasks_contains_bool'] = {
  init: function () {
    this.appendDummyInput().appendField('Sprint Log Tasks contain');
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput('type here!'),
      'NAME'
    );
    this.appendDummyInput().appendField('(bool)');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#0066cc');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['high_sprint_log_tasks_contains_bool'] = function (
  block: Blockly.Block
) {
  return null;
};

Blockly.Blocks['Backlogged'] = {
  init: function () {
    this.appendValueInput('situationdesc')
    this.appendDummyInput()
      .appendField('is')
      .appendField(new Blockly.FieldDropdown([['Backlogged', 'Backlogged'],
                                              ['Completed', 'Completed'],
                                              ['Incomplete', 'Incomplete']
                                            ]))
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#0066cc');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['Backlogged'] = function (
  block: Blockly.Block
) {
  return null;
};

Blockly.Blocks['high_sprint_updated'] = {
  init: function () {
    this.appendDummyInput().appendField('Sprint Log not updated within')
    .appendField(new Blockly.FieldDropdown([['past week', 'past week'],
                                            ['this sprint', 'this sprint']]));
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#0066cc');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['high_sprint_updated'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['high_sprint_updated2'] = {
  init: function () {
    this.appendDummyInput().appendField('Sprint Log updated within')
    .appendField(new Blockly.FieldDropdown([['past week', 'past week'],
    ['this sprint', 'this sprint']]));
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#0066cc');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

//TODO: change name
javascriptGenerator['high_sprint_updated2'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['datapoint_subcategory'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("-----------For exclusive use in messages---------");
    this.setColour("#000000");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['riskiest_risk'] = {
  init: function () {
    this.appendDummyInput().appendField('Riskiest risk in Planning View contains');
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput('type keyword'),
      'NAME1'
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#0066cc');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['riskiest_risk'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['riskiest_risk_bool'] = {
  init: function () {
    this.appendDummyInput().appendField('Riskiest risk in Planning View contains');
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput('type keyword'),
      'NAME1'
    );
    this.appendDummyInput().appendField('(bool)')
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#0066cc');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['riskiest_risk_bool'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['planning_view_canvas'] = {
  init: function () {
    this.appendDummyInput().appendField('Canvas Deliverables checked in Planning View');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#0066cc');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['planning_view_canvas'] = function (block: Blockly.Block) {
  return null;
};

///////////////////////////

export const sprintToolboxCategories = {
  kind: 'category',
  name: 'Sprint',
  colour: '#5CA699',
  contents: [
    {
      kind: 'block',
      type: 'sprintLog',
    },
    {
      kind: 'block',
      type: 'sprintLogPointDTR',
    },
    // {
    //   kind: 'block',
    //   type: 'sprintTime',
    // },
    // {
    //   kind: 'block',
    //   type: 'before_next_sig',
    // },
    // {
    //   kind: 'block',
    //   type: 'before_next_oh',
    // },
    // {
    //   kind: 'block',
    //   type: 'before_next_studio',
    // },
    {
      kind: 'block',
      type: 'riskiest_risk',
    },
    {
      kind: 'block',
      type: 'riskiest_risk_bool',
    },
    {
      kind: 'block',
      type: 'high_sprint_log_contains',
    },
    {
      kind: 'block',
      type: 'high_sprint_log_contains_bool',
    },
    {
      kind: 'block',
      type: 'high_sprint_log_task_contains',
    },
    {
      kind: 'block',
      type: 'high_sprint_log_tasks_contains_bool',
    },
    {
      kind: 'block',
      type: 'planning_view_canvas',
    },
    {
      kind: 'block',
      type: 'high_sprint_updated',
    },
    {
      kind: 'block',
      type: 'high_sprint_updated2',
    },
    {
      kind: 'block',
      type: 'Backlogged',
    },
    {
      kind: 'block',
      type: 'sprintLogFocus',
    },
    {
      kind: 'block',
      type: 'datapoint_subcategory',
    },
    {
      kind: 'block',
      type: 'sprintLogStory',
    },
    {
      kind: 'block',
      type: 'sprintLogTasks',
    },
    {
      kind: 'block',
      type: 'sprintLogSlice',
    },
    // {
    //   kind: 'block',
    //   type: 'sprintLog2',
    // },
  ],
};
