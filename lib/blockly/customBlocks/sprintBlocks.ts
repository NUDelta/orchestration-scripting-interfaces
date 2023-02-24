import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

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
          ['points planned design', 'points planned design'],
          ['points planned tech', 'points planned tech'],
          ['points planned research', 'points planned research'],
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

//endOfSprint -- this is equivalent to saying sprint.endDay, sprint.startDay
Blockly.Blocks['sprintTime'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['Start of Sprint', 'startOfSprint'],
        ['End of Sprint', 'endOfSprint'],
        ['Middle of Sprint', 'midSprint'], //unsure about the wording of this one
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

//Sprint log -- this is to enable the user to pull data from the sprint log (e.g. total points spent, total points available)
// This is equivalent to saying tools.planningTool.totalPoints.spent, tools.planningTool.totalPoints.available
Blockly.Blocks['sprintLog'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Check sprint log for')
      .appendField(
        new Blockly.FieldDropdown([
          ['Total Points Available in the sprint', 'pointsAvailable'],
          ['Total Points spent in the sprint', 'pointsSpent'],
          ['Total Points spent on Design in the sprint', 'pointsSpentDesign'], //put this one for now to see what it's like to have more options
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

// Commented for now
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
    this.appendDummyInput().appendField('Sprint Log Stories or Tasks contains');
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

Blockly.Blocks['high_sprint_updated'] = {
  init: function () {
    this.appendDummyInput().appendField('Sprint Log not updated');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#0066cc');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['high_sprint_updated2'] = {
  init: function () {
    this.appendDummyInput().appendField('Sprint Log updated');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#0066cc');
    this.setTooltip('');
    this.setHelpUrl('');
  },
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
      type: 'sprintTime',
    },
    {
      kind: 'block',
      type: 'before_next_sig',
    },
    {
      kind: 'block',
      type: 'before_next_oh',
    },
    {
      kind: 'block',
      type: 'before_next_studio',
    },
    {
      kind: 'block',
      type: 'high_sprint_log_contains',
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
      type: 'high_sprint_log_contains',
    },
    {
      kind: 'block',
      type: 'high_sprint_updated',
    },
    // {
    //   kind: 'block',
    //   type: 'sprintLog2',
    // },
  ],
};
