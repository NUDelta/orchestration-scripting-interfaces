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
//["has not finished deliverables", "student has not finished deliverables"], HOW WOULD THIS BE DETECTED IN sprint log?
//["has spent a lot of time","has spent a lot of time"] ALSO unclear what this means

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

Blockly.Blocks['Weekdays'] = {
  init: function () {
    this.appendDummyInput().appendField('Weekdays')
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

Blockly.Blocks['high_deliverables'] = {
  init: function () {
    this.appendDummyInput().appendField(
      'No deliverables attached in slack thread'
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['end_of_quarter_goal'] = {
  init: function () {
    this.appendDummyInput().appendField('End of quarter goal contains');
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

Blockly.Blocks['high_canvas_update'] = {
  init: function () {
    this.appendDummyInput().appendField('Canvas not updated');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#0066cc');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['high_canvas_update2'] = {
  init: function () {
    this.appendDummyInput().appendField('Canvas updated');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#0066cc');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

//TOO SUBJECTIVE
// Blockly.Blocks['high_learn_nothing'] = {
//   init: function () {
//     this.appendDummyInput().appendField('Student does not learn anything new');
//     this.setInputsInline(true);
//     this.setOutput(true, null);
//     this.setColour(290);
//     this.setTooltip('');
//     this.setHelpUrl('');
//   },
// };

Blockly.Blocks['high_new_argument'] = {
  init: function () {
    this.appendDummyInput().appendField('PRC: Has new');
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['gap in canvas which is risky', 'gap in canvas which is risky'],
        ['focus for sprint', 'focus for sprint'],
        ['problem statement', 'problem statement'],
        ['design argument', 'design argument'],
        ['interface model', 'interface model'],
        ['system model', 'system model'],
        ['study design', 'study design'],
        ['testing takeaways', 'testing takeaways'],
      ]),
      'argumentation'
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#0066cc');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['high_new_argument_rrc'] = {
  init: function () {
    this.appendDummyInput().appendField('RRC: Has new');
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['research audience', 'research audience'],
        ['class of problems', 'class of problems'],
        ['existing approaches', 'existing approaches'],
        ['research question', 'research question'],
        ['conceptual contribution', 'conceptual contribution'],
        ['technical contribution', 'technical contribution'],
        ['synthesis tree', 'synthesis tree'],
        ['study design', 'study design'],
        ['core takeaways', 'core takeaways'],
        [
          'revised understanding of conceptual and technical approach',
          'revised understanding of conceptual and technical approach',
        ],
        ['future work', 'future work'],
      ]),
      'argumentation'
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

/*Blockly.Blocks['before_second_sig_of_sprint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("before second SIG of sprint");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#cc9900");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['before_second_studio_of_sprint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("before second Studio of sprint");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#cc9900");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['before_second_oh_of_sprint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("before second OH of sprint");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#cc9900");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};*/

Blockly.Blocks['slacked_someone'] = {
  init: function () {
    this.appendDummyInput().appendField('Have you slacked ');
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput('type name'),
      'NAME'
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#68A65C');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['slacked_deliverables'] = {
  init: function () {
    this.appendDummyInput().appendField('Have you slacked deliverables to ');
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput('type channel OR thread name'),
      'NAME'
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#68A65C');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

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

///////////////////////////

Blockly.Blocks['time_subcategory'] = {
  init: function () {
    this.appendDummyInput().appendField('-----POINTS IN TIME-----');
    this.setColour('#000000');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['time_modifier_subcategory'] = {
  init: function () {
    this.appendDummyInput().appendField('--OPTIONAL TIME MODIFIERS--');
    this.setColour('#000000');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['studio_subcategory'] = {
  init: function () {
    this.appendDummyInput().appendField(
      '-----------------STUDIO----------------'
    );
    this.setColour('#000000');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['github_subcategory'] = {
  init: function () {
    this.appendDummyInput().appendField(
      '-----------------GITHUB----------------'
    );
    this.setColour('#000000');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['sprint_log_subcategory'] = {
  init: function () {
    this.appendDummyInput().appendField(
      '-----------------SPRINT_LOG----------------'
    );
    this.setColour('#000000');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['canvas_subcategory'] = {
  init: function () {
    this.appendDummyInput().appendField(
      '-----------------CANVAS----------------'
    );
    this.setColour('#000000');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['slack_subcategory'] = {
  init: function () {
    this.appendDummyInput().appendField(
      '-----------------SLACK----------------'
    );
    this.setColour('#000000');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

export const highLevelToolboxCategories = {
  kind: 'category',
  name: 'High-Level Constructs',
  colour: '#5CA699',
  contents: [
    {
      kind: 'block',
      type: 'github_subcategory',
    },
    {
      kind: 'block',
      type: 'github3',
    },
    {
      kind: 'block',
      type: 'sprint_log_subcategory',
    },
    {
      kind: 'block',
      type: 'sprint_log3',
    },
    // {
    //   kind: 'block',
    //   type: 'high_by_beginning_of_sprint',
    // },
    // {
    //   kind: 'block',
    //   type: 'high_by_end_of_sprint',
    // },
    // {
    //   kind: 'block',
    //   type: 'high_halfway_through_sprint',
    // },
    {
      kind: 'block',
      type: 'time_subcategory',
    },
    {
      kind: 'block',
      type: 'Weekdays',
    },
    {
      kind: 'block',
      type: 'high_deliverables',
    },
    {
      kind: 'block',
      type: 'end_of_quarter_goal',
    },
    {
      kind: 'block',
      type: 'high_canvas_update',
    },
    {
      kind: 'block',
      type: 'high_canvas_update2',
    },
    {
      kind: 'block',
      type: 'high_new_argument',
    },
    {
      kind: 'block',
      type: 'high_new_argument_rrc',
    },
    {
      kind: 'block',
      type: 'before_next_sig',
    },
    {
      kind: 'block',
      type: 'midweek',
    },
    {
      kind: 'block',
      type: 'before_next_oh',
    },
    {
      kind: 'block',
      type: 'slacked_someone',
    },
    {
      kind: 'block',
      type: 'slacked_deliverables',
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
      type: 'at',
    },
    {
      kind: 'block',
      type: 'before',
    },
    {
      kind: 'block',
      type: 'after',
    },
    {
      kind: 'block',
      type: 'amount_time_modifier',
    },
    {
      kind: 'block',
      type: 'time_modifier_subcategory',
    },
    {
      kind: 'block',
      type: 'canvas_subcategory',
    },
    {
      kind: 'block',
      type: 'slack_subcategory',
    },
  ],
};
