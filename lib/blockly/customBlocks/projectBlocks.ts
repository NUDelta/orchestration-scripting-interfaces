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
          ['Non-Phd Projects', 'Non-Phd projects'],
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
  var code = '';
  if (operator == 'projects'){
    return [operator, javascriptGenerator.ORDER_ATOMIC];
  }
  if (operator == 'Non-Phd projects'){
    code = 'projects.filter(whereAll("students", "role", "NonPhdStudent"))'
  }
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

  // create a venue object block
  Blockly.Blocks['AllProj2'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Project')
      this.appendDummyInput()
        .appendField("OSE")
        .appendField(new Blockly.FieldCheckbox(true), 'OSE');
      this.appendDummyInput()
        .appendField("OPR")
        .appendField(new Blockly.FieldCheckbox(true), 'OPR');
      this.appendDummyInput()
        .appendField("KM")
        .appendField(new Blockly.FieldCheckbox(true), 'KM');
      this.appendDummyInput()
        .appendField("CN")
        .appendField(new Blockly.FieldCheckbox(true), 'CN');
      this.appendDummyInput()
        .appendField("Q&A")
        .appendField(new Blockly.FieldCheckbox(true), 'Q&A');
      this.appendDummyInput()
        .appendField("Path")
        .appendField(new Blockly.FieldCheckbox(true), 'Path');
      this.appendDummyInput()
        .appendField("CERD")
        .appendField(new Blockly.FieldCheckbox(true), 'CERD');
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };
  javascriptGenerator['AllProj2'] = function (block: Blockly.Block) {
    var OSE = block.getFieldValue('OSE');
    var OPR = block.getFieldValue('OPR');
    var KM = block.getFieldValue('KM');
    var CN = block.getFieldValue('CN');
    var QA = block.getFieldValue('Q&A');
    var Path = block.getFieldValue('Path');
    var CERD = block.getFieldValue('CERD');
    var code = 'projects.filter(where("name",\n[';
    if (OSE == "TRUE"){
        code += '"Orchestration Scripting Environments",\n';
    }
    if (OPR == "TRUE"){
        code += '"Orchestrating Planning and Reflection",\n';
    }
    if (CN == "TRUE"){
        code += '"Collective Narrative",\n';
    }
    if (KM == "TRUE"){
        code += '"Knowledge Map",\n';
    }
    if (QA == "TRUE"){
      code += '"Q&A Buddy",\n';
    }
    if (Path == "TRUE"){
      code += '"Path",\n';
    }
    if (CERD == "TRUE"){
      code += '"CE for Relationship Development"';
    }
    code += '])'
    return [code, javascriptGenerator.ORDER_ATOMIC];
  };

  
// create a venue object block
Blockly.Blocks['project_people'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Project')
        .appendField(
          new Blockly.FieldDropdown([
            ['students','students'],
            ['student 1','student 1'],
            ['student 2','student 2'],
            ['sigHead','sigHead.name'],
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
Blockly.Blocks['project_people_input'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Project')
      .appendField(
        new Blockly.FieldDropdown([
          ['students','students'],
          ['student 1','students[0]'],
          ['student 2','students[1]'],
          ['sigHead','sigHead.name'],
          ['facultyMentor', 'facultyMentor'],
        ]),
        'PROJPPL'
      );
    this.appendValueInput('attribute');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
javascriptGenerator['project_people_input'] = function (block: Blockly.Block) {
  // TODO: return the project/projects from the selected dropdown
  var operator = block.getFieldValue('PROJPPL');
  var dtr = 
  javascriptGenerator.valueToCode(
    block,
    'attribute',
    javascriptGenerator.ORDER_NONE
  );
  var code = operator + dtr
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

  Blockly.Blocks['Applicable_subcategory'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("---------------Scope---------------");
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
    name: 'Social Structures',
    colour: '#5CA699',
    contents: [
      {kind: 'block',
        type: 'Applicable_subcategory'},
        {
          kind: 'block',
          type: 'AllProjects',
        },
        {
          kind: 'block',
          type: 'AllProj2',
        },
        {
          kind: 'block',
          type: 'AllSIGs',
        },
      {
        kind: 'block',
        type: 'PROJ_subcategory',
      },
      {
        kind: 'block',
        type: 'project_people'
      },
      {
        kind: 'block',
        type: 'project_people_input'
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
        type: 'sig_attributes',
      },
      // {
      //   kind: 'block',
      //   type: 'SoS_subcategory',
      // }
    ],
  };
  