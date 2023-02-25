import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator['end_of_quarter_goal'] = function (block: Blockly.Block) {
  return null;
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

javascriptGenerator['high_canvas_update'] = function (block: Blockly.Block) {
  return null;
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

javascriptGenerator['high_canvas_update2'] = function (block: Blockly.Block) {
  return null;
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

javascriptGenerator['high_new_argument'] = function (block: Blockly.Block) {
  return null;
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

javascriptGenerator['high_new_argument_rrc'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['rrc'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('RRC')
      .appendField(
        new Blockly.FieldDropdown([
          ['all', 'all'],
          [
            'Planning view -> gaps in canvas',
            'Planning view -> gaps in canvas',
          ],
          [
            'Planning view -> Focus for sprint',
            'Planning view -> Focus for sprint',
          ],
          [
            'Planning view -> What we learned',
            'Planning view -> What we learned',
          ],

          [
            'section 1: identify your research audience',
            'section 1: identify your research audience',
          ],
          [
            'section 2: define class of problems and desired outcomes',
            'section 2: define class of problems and desired outcomes',
          ],
          [
            'section 3: existing approaches and schools of thought (farther approaches)',
            'section 3: existing approaches and schools of thought (farther approaches)',
          ],
          [
            'section 4: existing approaches and schools of thought (closer approaches)',
            'section 4: existing approaches and schools of thought (closer approaches)',
          ],
          ['section 5: research question', 'section 5: research question'],
          [
            'section 6: conceptual contribution',
            'section 6: conceptual contribution',
          ],
          [
            'section 7: technical contribution',
            'section 7: technical contribution',
          ],
          ['section 8: synthesis tree', 'section 8: synthesis tree'],
          ['section 9: study design', 'section 9: study design'],
          ['section 10: core takeaways', 'section 10: core takeaways'],
          [
            'section 11: revised understanding of conceptual and technical approach',
            'section 11: revised understanding of conceptual and technical approach',
          ],
          ['section 12: future work', 'section 12: future work'],
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

javascriptGenerator['rrc'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['prc'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('PRC')
      .appendField(
        new Blockly.FieldDropdown([
          ['all', 'all'],
          [
            'Planning View -> Gaps in canvas',
            'Planning View -> Gaps in canvas',
          ],
          [
            'Planning view -> Focus for sprint',
            'Planning view -> Focus for sprint',
          ],
          [
            'Planning view -> What we learned',
            'Planning view -> What we learned',
          ],
          [
            'section 1: identify a design situation',
            'section 1: identify a design situation',
          ],
          [
            'section 2: test if a design problem',
            'section 2: test if a design problem',
          ],
          [
            'section 3: describe broader impact',
            'section 3: describe broader impact',
          ],
          ['section 4-7: design arguments', 'section 4-7: design arguments'],
          [
            'section 8-9: check your design arguments',
            'section 8-9: check your design arguments',
          ],
          [
            'section 10: interface arguments',
            'section 10: interface arguments',
          ],
          ['section 11: interface models', 'section 11: interface models'],
          ['section 12: system arguments', 'section 12: system arguments'],
          ['section 13: system models', 'section 13: system models'],
          [
            'section 14a: study aims and expected outcomes',
            'section 14a: study aims and expected outcomes',
          ],
          [
            'section 14b: study aims and expected outcomes',
            'section 14b: study aims and expected outcomes',
          ],
          [
            'section 15a: study setup (participants)',
            'section 15a: study setup (participants)',
          ],
          [
            'section 15b: study setup (scenario)',
            'section 15b: study setup (scenario)',
          ],
          ['section 16: data collection', 'section 16: data collection'],
          ['section 17: core findings', 'section 17: core findings'],
          [
            'section 18: design implications',
            'section 18: design implications',
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

javascriptGenerator['prc'] = function (block: Blockly.Block) {
  return null;
};

export const canvasesToolboxCategories = {
  kind: 'category',
  name: 'Canvases',
  colour: '#5CA699',
  contents: [
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
      type: 'rrc',
    },
    {
      kind: 'block',
      type: 'prc',
    },
  ],
};
