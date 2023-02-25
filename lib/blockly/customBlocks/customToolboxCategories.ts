import { communicationToolboxCategories } from './communicationBlocks';
import { timeToolboxCategories } from './timeBlocks';
import { venuesToolboxCategories } from './venuesBlocks';
import { OvercommittedToolboxCategories } from './overcomittedblocks';
import { sprintToolboxCategories } from './sprintBlocks';
import { githubToolboxCategories } from './githubBlocks';
import { otherToolsToolboxCategories } from './otherToolsBlocks';
import { mathToolboxCategories } from './mathBlocks';
import { canvasesToolboxCategories } from './canvasesBlocks';
import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

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
        {
          kind: 'block',
          type: 'controls_if',
        },
        {
          kind: 'block',
          type: 'logic_compare',
        },
        {
          kind: 'block',
          type: 'and',
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
      ],
    },
    {
      kind: 'category',
      name: '',
      colour: 'white',
      contents: [],
    },
    // functionsToolboxCategories,
    communicationToolboxCategories,
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
  ],
};
