import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

Blockly.Blocks['concept_variable'] = {
  init: function () {
    this.appendDummyInput().appendField('Concept Variable');
    this.appendValueInput('set').setCheck('String');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

// javascriptGenerator['concept_variable'] = function (block) {
//   return '';
// };
Blockly.Blocks['ipm'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('ipm')
      .appendField(
        new Blockly.FieldDropdown([
          [
            'module -> topic (output: string)',
            'module -> topic (output: string)',
          ],
          [
            'module -> Type (output: string)',
            'module -> Type (output: string)',
          ],
          [
            'module -> description (output: string)',
            'module -> description (output: string)',
          ],
          [
            'module -> read? (output: boolean)',
            'module -> read? (output: boolean)',
          ],
          [
            'module -> understood? (output: boolean)',
            'module -> understood? (output: boolean)',
          ],
          [
            'module -> applied? (output: boolean)',
            'module -> applied? (output: boolean)',
          ],
          [
            'module -> questions (output: string)',
            'module -> questions (output: string)',
          ],
        ]),
        'NAME'
      );
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['stash'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('stash')
      .appendField(
        new Blockly.FieldDropdown([
          ['riskiest risk', 'riskiest risk'],
          ['blocker', 'blocker'],
          ['why blocker is challenging', 'why blocker is challenging'],
          [
            'Which LIP learning module would be most helpful',
            'Which LIP learning module would be most helpful',
          ],
          [
            'What skill/expertise one looks for',
            'What skill/expertise one looks for',
          ],
          ['Pair Research request', 'Pair Research request'],
          ['New understanding of blocker', 'New understanding of blocker'],
        ]),
        'NAME'
      );
    this.appendDummyInput('output: string').appendField('(output: string)');
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['urg_guide'] = {
  init: function () {
    this.appendDummyInput().appendField('URG Guide');
    this.appendDummyInput('output: string').appendField('(output: string)');
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['lip_signup'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('LIP sign up')
      .appendField(
        new Blockly.FieldDropdown([
          [
            'which learning module they signed up for',
            'which learning module they signed up for',
          ],
        ])
      );
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['first studio', 'first studio'],
        ['second studio', 'second studio'],
      ]),
      'NAME'
    );
    this.setInputsInline(true);
    this.setOutput(true, 'resource');
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['google calendar'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('google calendar')
      .appendField(
        new Blockly.FieldDropdown([
          ['SIG meeting time', 'SIG meeting time'],
          ['OH meeting time', 'OH meeting time'],
          ['studio time', 'studio time'],
          ['status update date', 'status update date'],
        ])
      );
    this.appendDummyInput('output: time').appendField('(output: time)');
    this.setOutput(true, 'resource');
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['dtr_meeting_log'] = {
  init: function () {
    this.appendDummyInput().appendField('DTR Meeting Log');
    this.setOutput(true, 'resource');
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['previous_soap_notes'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Previous SOAP Notes')
      .appendField(
        new Blockly.FieldDropdown([
          ['subjective', 'subjective'],
          ['objective', 'objective'],
          ['assessment', 'assessment'],
          ['plan', 'plan'],
          ['follow up', 'follow up'],
        ]),
        'NAME'
      );
    this.appendDummyInput('output: string').appendField('(output: string)');
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['pr_studio'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('PR (studio)')
      .appendField(
        new Blockly.FieldDropdown([
          ['signed up for studio PR?', 'signed up for studio PR?'],
          ['Content of PR request', 'Content of PR request'],
          ['who they paired with', 'who they paired with'],
        ]),
        'NAME'
      );
    this.setInputsInline(false);
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['first studio', 'first studio'],
        ['second studio', 'second studio'],
      ]),
      'NAME'
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['soap_notes'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('SOAP Notes')
      .appendField(
        new Blockly.FieldDropdown([
          ['subjective', 'subjective'],
          ['objective', 'objective'],
          ['assessment', 'assessment'],
          ['plan', 'plan'],
        ]),
        'NAME'
      );
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['First SIG', 'First SIG'],
        ['Second SIG', 'Second SIG'],
        ['First OH', 'First OH'],
        ['Second OH', 'Second OH'],
        ['All', 'All'],
      ]),
      'NAME'
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

export const otherToolsToolboxCategories = {
  kind: 'category',
  name: 'Other Tools',
  colour: '#5CA699',
  contents: [
    {
      kind: 'block',
      type: 'concept_variable',
    },
    {
      kind: 'block',
      type: 'ipm',
    },
    {
      kind: 'block',
      type: 'stash',
    },
    {
      kind: 'block',
      type: 'urg_guide',
    },
    {
      kind: 'block',
      type: 'lip_signup',
    },
    {
      kind: 'block',
      type: 'google calendar',
    },
    {
      kind: 'block',
      type: 'dtr_meeting_log',
    },
    {
      kind: 'block',
      type: 'previous_soap_notes',
    },
    {
      kind: 'block',
      type: 'pr_studio',
    },
    {
      kind: 'block',
      type: 'soap_notes',
    },
  ],
};
