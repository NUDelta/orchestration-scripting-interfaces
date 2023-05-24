import { communicationToolboxCategories } from './communicationBlocks';
import { timeToolboxCategories } from './timeBlocks';
import { venuesToolboxCategories } from './venuesBlocks';
import { OvercommittedToolboxCategories } from './overcomittedblocks';
import { sprintToolboxCategories } from './sprintBlocks';
import { githubToolboxCategories } from './githubBlocks';
import { otherToolsToolboxCategories } from './otherToolsBlocks';
import { mathToolboxCategories } from './mathBlocks';
import { canvasesToolboxCategories } from './canvasesBlocks';
import { ProjectToolboxCategories } from './projectBlocks';
import { VariablesToolboxCategories } from './variableBlocks';
import { EOQReminderToolboxCategories } from './EOQReminderExample';
import { EOQChecklistToolboxCategories } from './EOQChecklistExample';
import { PhDProgressToolboxCategories } from './researchPhDExample';
import { UndercommittedToolboxCategories } from './undercomittedExample';
import { statusUpdateStudentToolboxCategories } from './statusUpdateStudent';
import { CompassExampleToolboxCategories } from './statusUpdateStudent';
import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { strategiesToolboxCategories } from './strategiesBlocks';
import { UseVenuesToolboxCategories } from './UseVenuesExampleBlocks';

Blockly.Blocks['and'] = {
  init: function () {
    this.appendValueInput('left');
    this.appendDummyInput().appendField('AND');
    this.appendValueInput('right');
    //.appendField("(output: boolean)");
    this.setInputsInline(false);
    this.setOutput(true, Boolean);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['and'] = function (block: Blockly.Block) {
  var left = javascriptGenerator.valueToCode(
    block,
    'left',
    javascriptGenerator.ORDER_FUNCTION_CALL
  );
  var right = javascriptGenerator.valueToCode(
    block,
    'right',
    javascriptGenerator.ORDER_RELATIONAL
  );
  console.log('LEFT' + left);

  return [left + ' && ' + right, javascriptGenerator.ORDER_ATOMIC];
};

Blockly.Blocks['myor'] = {
  init: function () {
    this.appendValueInput('left');
    this.appendDummyInput().appendField('OR');
    this.appendValueInput('right');
    //.appendField("(output: boolean)");
    this.setInputsInline(false);
    this.setOutput(true, Boolean);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['myor'] = function (block: Blockly.Block) {
  var left = javascriptGenerator.valueToCode(
    block,
    'left',
    javascriptGenerator.ORDER_FUNCTION_CALL
  );
  var right = javascriptGenerator.valueToCode(
    block,
    'right',
    javascriptGenerator.ORDER_RELATIONAL
  );
  console.log('LEFT' + left);

  return [left + ' || ' + right, javascriptGenerator.ORDER_ATOMIC];
};

Blockly.Blocks['mynot'] = {
  init: function () {
    this.appendValueInput('left').appendField('NOT');
    this.setInputsInline(false);
    this.setOutput(true, Boolean);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['mynot'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['contains'] = {
  init: function () {
    this.appendValueInput('left');
    this.appendDummyInput().appendField('contains');
    this.appendValueInput('right');
    //.appendField("(output: boolean)");
    this.setInputsInline(true);
    this.setOutput(true, Boolean);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['contains'] = function (block: Blockly.Block) {
  return null;
};

Blockly.Blocks['myif'] = {
  init: function () {
    this.appendValueInput('if').appendField('if');
    this.appendStatementInput('do').appendField('do');
    this.setInputsInline(false);
    this.setOutput(false, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['myif'] = function (block: Blockly.Block) {
  var ifinput = javascriptGenerator.valueToCode(
    block,
    'if',
    javascriptGenerator.ORDER_ATOMIC
  );
  var doinput = javascriptGenerator.statementToCode(
    block,
    'do',
  );

  var code = 'function () { \nreturn ' + ifinput + '};\n\nfunction(){\nreturn ' + doinput + '};';
  return code;
};

// create a fixed block
Blockly.Blocks['ApplicableSet'] = {
  init: function () {
    //description
    this.appendDummyInput().appendField('I want this script to apply to:');
    //indents
    this.appendValueInput('projects');
    //fixed
    this.setMovable(false);
    //indent and description on same line?
    this.setInputsInline(false);
    //is the block an input to another block
    this.setOutput(false, null);
    this.setColour(110);
    this.setTooltip('Specify the applicable set for this script');
    this.setHelpUrl('');
    this.setDeletable(false);
  },
};

javascriptGenerator['ApplicableSet'] = function (block: Blockly.Block) {
  var value = javascriptGenerator.valueToCode(
    block,
    'projects',
    javascriptGenerator.ORDER_ATOMIC
  );

  // Generate the code to perform the calculation using the value
  var code = 'function () { \nreturn ' + value + ';\n}\n';
  return code;
};

Blockly.Blocks['Detector'] = {
  init: function () {
    this.appendDummyInput().appendField('Detector (="if")');
    this.appendValueInput('Detector')
    // .setCheck(Boolean);
    this.setNextStatement(false);
    this.setInputsInline(false);
    this.setOutput(false, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setDeletable(false);
    this.setMovable(false);
  },
};

javascriptGenerator['Detector'] = function (block: Blockly.Block) {
  var ifinput = javascriptGenerator.valueToCode(
    block,
    'Detector',
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = 'function () { \nreturn ' + ifinput + ';\n}\n\n';
  return code;
};

Blockly.Blocks['contain_text'] = {
  init: function () {
    this.appendValueInput('input');
    this.appendDummyInput().appendField('contains')
    .appendField(
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

javascriptGenerator['contain_text'] = function (block: Blockly.Block) {
  return null;
};

export const toolboxCategories = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'Logic',
      colour: '#5C81A6',
      contents: [
        // {
        //   kind: 'block',
        //   type: 'controls_if',
        // },
        {
          kind: 'block',
          type: 'myif',
        },
        {
          kind: 'block',
          type: 'logic_compare',
        },
        {
          kind: 'block',
          type: 'and',
        },
        {
          kind: 'block',
          type: 'myor',
        },
        {
          kind: 'block',
          type: 'mynot',
        },
        {
          kind: 'block',
          type: 'contains',
        },
      ],
    },
    mathToolboxCategories,
    {
      // need to find a better way  to have input text blocks
      kind: 'category',
      name: 'Text',
      colour: '#68DEC2',
      contents: [
        {
          kind: 'block',
          type: 'text',
        },
        {
          kind: 'block',
          type: 'text_join',
        },
        {
          kind: 'block',
          type: 'contain_text',
        }
      ],
    },
    VariablesToolboxCategories,
    {
      kind: 'category',
      name: '',
      colour: 'white',
      contents: [],
    },
    // functionsToolboxCategories,
    ProjectToolboxCategories,
    communicationToolboxCategories,
    // strategiesToolboxCategories,
    {
      kind: 'category',
      name: '',
      colour: 'white',
      contents: [],
    },
    sprintToolboxCategories,
    canvasesToolboxCategories,
    githubToolboxCategories,
    otherToolsToolboxCategories,
    {
      kind: 'category',
      name: '',
      colour: 'white',
      contents: [],
    },
    // highLevelToolboxCategories, // has github / slack blocks
    // objectsToolboxCategories, // has github / slack blocks
    // resourcesToolboxCategories,
    timeToolboxCategories,
    // customToolboxCategories,
    venuesToolboxCategories,
    {
      kind: 'category',
      name: '',
      colour: 'white',
      contents: [],
    },
    // OvercommittedToolboxCategories,
    // UseVenuesToolboxCategories,
    // EOQReminderToolboxCategories,
    // EOQChecklistToolboxCategories,
    // PhDProgressToolboxCategories,
    // UndercommittedToolboxCategories,
    // statusUpdateStudentToolboxCategories,
    // CompassExampleToolboxCategories,
  ],
};
