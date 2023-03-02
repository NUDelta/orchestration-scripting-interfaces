import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

// create a venue object block
Blockly.Blocks['AllProjects'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('PROJ')
      .appendField(
        new Blockly.FieldDropdown([
          ['All Projects', 'projects'],
          [
            'Orchestration Scripting Environments',
            'Orchestration Scripting Environments',
          ],
          ['Knowledge Map', 'Knowledge Map'],
          ['Collective Narrative', 'Collective Narrative'],
          ['Q&A Buddy', 'Q&A Buddy'],
          ['Path', 'Path'],
          [
            'CE for Relationship Development',
            'CE for Relationship Development',
          ],
          [
            'Orchestrating Planning and Reflection',
            'Orchestrating Planning and Reflection',
          ],
        ]),
        'PROJNAME'
      );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
javascriptGenerator['AllProjects'] = function (block: Blockly.Block) {
  // TODO: return the project/projects from the selected dropdown
  var operator = block.getFieldValue('PROJNAME');
  return [operator, javascriptGenerator.ORDER_ATOMIC];
};

// create a venue object block
Blockly.Blocks['project_people'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Project')
        .appendField(
          new Blockly.FieldDropdown([
            ['sigHead','sigHead.name'],
            ['students','students'],
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
Blockly.Blocks['project_attributes'] = {
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
  javascriptGenerator['project_attributes'] = function (block: Blockly.Block) {
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
  
  Blockly.Blocks['SIG_subcategory'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("-----------------SIG----------------");
      this.setColour("#000000");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['PROJ_subcategory'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("---------------PROJECT--------------");
      this.setColour("#000000");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['SoS_subcategory'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("----------SOCIAL STRUCTURE----------");
      this.setColour("#000000");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  // create a venue object block
Blockly.Blocks['AllSIGs'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('SIG')
    this.appendDummyInput()
      .appendField("NOT")
      .appendField(new Blockly.FieldCheckbox(true), 'NOT');
    this.appendDummyInput()
      .appendField("CE")
      .appendField(new Blockly.FieldCheckbox(true), 'CE');
    this.appendDummyInput()
      .appendField("RALE")
      .appendField(new Blockly.FieldCheckbox(true), 'RALE');
    this.appendDummyInput()
      .appendField("CAMP")
      .appendField(new Blockly.FieldCheckbox(true), 'CAMP');
    this.appendDummyInput()
      .appendField("BBQ")
      .appendField(new Blockly.FieldCheckbox(true), 'BBQ');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
javascriptGenerator['AllSIGs'] = function (block: Blockly.Block) {
  var NOT = block.getFieldValue('NOT');
  var CE = block.getFieldValue('CE');
  var RALE = block.getFieldValue('RALE');
  var CAMP = block.getFieldValue('CAMP');
  var BBQ = block.getFieldValue('BBQ');
  var code = 'socialStructures.filter(where("name",\n[';
  if (NOT == "TRUE"){
      code += '"Networked Orchestration Technologies",\n';
  }
  if (CE == "TRUE"){
      code += '"Collective Experiences",\n';
  }
  if (RALE == "TRUE"){
      code += '"Readily Available Learning Experiences",\n';
  }
  if (CAMP == "TRUE"){
      code += '"Contextually-Aware Metacognitive Practice",\n';
  }
  if (BBQ == "TRUE"){
    code += '"SUMMER BBQ"';
  }
  code += '])'
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

    // create a venue object block
Blockly.Blocks['sig_attributes'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('SIG')
      .appendField(
        new Blockly.FieldDropdown([
          ['name', 'name'],
          ['abbreviation', 'abbreviation'],
          ['slackChannel', 'slackChannel'],
          ['sigHead', 'sigHead.name'],
        ]),
        'sig_attributes'
      );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
javascriptGenerator['sig_attributes'] = function (block: Blockly.Block) {
  // TODO: return the project/projects from the selected dropdown
  var operator = block.getFieldValue('sig_attributes');
  var code = "socialStructure." + operator;
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

  export const ProjectToolboxCategories = {
    kind: 'category',
    name: 'Social Structure',
    colour: '#5CA699',
    contents: [
      {
        kind: 'block',
        type: 'PROJ_subcategory',
      },
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
        type: 'project_attributes'
      },
      {
        kind: 'block',
        type: 'projectlistofstudents'
      },
      {
        kind: 'block',
        type: 'SIG_subcategory',
      },
      {
        kind: 'block',
        type: 'AllSIGs',
      },
      {
        kind: 'block',
        type: 'sig_attributes',
      },
      {
        kind: 'block',
        type: 'SoS_subcategory',
      }
    ],
  };
  