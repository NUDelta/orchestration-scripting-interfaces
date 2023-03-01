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
    this.setOutput(true, null);
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

Blockly.Blocks['Detector'] = {
  init: function () {
    this.appendValueInput('Detector').appendField('Detector (="if")');
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
  var code = 'function () { \nreturn ' + ifinput + ';\n}\n';
  return code;
};

Blockly.Blocks['Strategies'] = {
  init: function () {
    this.appendStatementInput('Strategy')
        .appendField('Strategy')
        .appendField(new Blockly.FieldNumber(1), 'FIELDNAME');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(false);
    this.setOutput(false, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setDeletable(false);
    // this.setMovable(false);
  },
};

javascriptGenerator['Strategies'] = function (block: Blockly.Block) {
  var doinput = javascriptGenerator.statementToCode(
    block,
    'Strategy',
  );

  var code = 'function(){\nreturn' + doinput + ';\n}\n';
  return code;
};

Blockly.Blocks['StrategiesWrapper'] = {
  init: function () {
    this.appendStatementInput('Strategies').appendField('Set of');
    this.setInputsInline(false);
    this.setOutput(false, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator['StrategiesWrapper'] = function (block: Blockly.Block) {
  var doinput = javascriptGenerator.statementToCode(
    block,
    'Strategies',
  );
  var code = 'strategies: [\n' + doinput + ']';
  return code;
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
          type: 'text_print',
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
    strategiesToolboxCategories,
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
    OvercommittedToolboxCategories,
    UseVenuesToolboxCategories,
  ],
};
