import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

// create a venue object block
Blockly.Blocks['project_people'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Project')
        .appendField(
          new Blockly.FieldDropdown([
            ['mentor', 'mentor'],
            ['students','students'],
            ['sigHead','sigHead'],
            ['facultyMentor', 'facultyMentor'],
          ]),
          'PROJPPL'
        );
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };
  javascriptGenerator['project_people'] = function (block: Blockly.Block) {
    // TODO: return the project/projects from the selected dropdown
    var operator = block.getFieldValue('PROJPPL');
    var code = "project." + operator;
    return [code, javascriptGenerator.ORDER_ATOMIC];
  };

  // create a venue object block
Blockly.Blocks['project_utility'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Project')
        .appendField(
          new Blockly.FieldDropdown([
            ['name', 'name'],
          ]),
          'PROJUTILITY'
        );
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };
  javascriptGenerator['project_utility'] = function (block: Blockly.Block) {
    // TODO: return the project/projects from the selected dropdown
    var operator = block.getFieldValue('PROJUTILITY');
    var code = "project." + operator;
    return [code, javascriptGenerator.ORDER_ATOMIC];
  };

    // create a venue object block
Blockly.Blocks['projectlistofstudents'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('List of students')
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };
  javascriptGenerator['projectlistofstudents'] = function (block: Blockly.Block) {
    // TODO: return the project/projects from the selected dropdown
    var code = "this.project.students.map(student => { return student.name.split(' ')[0] }).join(' and ')"
    return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
  };
  
  export const ProjectToolboxCategories = {
    kind: 'category',
    name: 'Project related',
    colour: '#5CA699',
    contents: [
      {
        kind: 'block',
        type: 'AllProjects',
      },
      {
        kind: 'block',
        type: 'project_people'
      },
      {
        kind: 'block',
        type: 'project_utility'
      },
      {
        kind: 'block',
        type: 'projectlistofstudents'
      },
    ],
  };
  