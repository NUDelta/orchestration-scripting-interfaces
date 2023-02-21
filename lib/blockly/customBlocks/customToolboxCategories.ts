import { communicationToolboxCategories } from './communicationBlocks';
import { functionsToolboxCategories } from './functionBlocks';
import { highLevelToolboxCategories } from './highLevelBlocks';
import { objectsToolboxCategories } from './objectBlocks';
import { resourcesToolboxCategories } from './resourceBlocks';
import { timeToolboxCategories } from './timeBlocks';
import { customToolboxCategories } from './customBlocks';
import { venuesToolboxCategories } from './venuesBlocks';

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
      ],
    },
    {
      kind: 'category',
      name: 'Math',
      colour: '#5CA65C',
      contents: [
        {
          kind: 'block',
          type: 'math_round',
        },
        {
          kind: 'block',
          type: 'math_number',
        },
      ],
    },
    functionsToolboxCategories,
    communicationToolboxCategories,
    highLevelToolboxCategories,
    objectsToolboxCategories,
    resourcesToolboxCategories,
    timeToolboxCategories,
    customToolboxCategories,
    venuesToolboxCategories
  ],
};
