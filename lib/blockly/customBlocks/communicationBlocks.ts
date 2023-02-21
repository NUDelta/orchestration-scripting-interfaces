import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";

Blockly.Blocks["send"] = {
  init: function () {
    this.appendDummyInput().appendField("send");
    this.appendValueInput("message1")
      .setCheck("String")
      .appendField("         text - suggested actions");
    /*
      this.appendValueInput("message2")
          .setCheck("String")
          .appendField("(input: underlying strategy)");
      this.appendValueInput("recipient")
          .setCheck("recipient")
          .appendField("(input: recipient)");
    */
    this.appendValueInput("medium")
      .setCheck("medium")
      .appendField("         medium - slack or email");
    this.appendValueInput("recipient")
      .setCheck("String")
      .appendField("         text - recipient's name");
    this.appendValueInput("time").appendField("         time block - when to send message");
    this.setOutput(false);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator["send"] = function (block) {
  return "...";
};

Blockly.Blocks["person"] = {
  init: function () {
    this.appendDummyInput().appendField("Recipient: Person");
    this.appendValueInput("name").setCheck("String").appendField("(input: name)");
    this.setOutput(true, "recipient");
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator["person"] = function (block) {
  return "...";
};

Blockly.Blocks["email_address"] = {
  init: function () {
    this.appendDummyInput().appendField("Recipient: Email Address");
    this.appendValueInput("email").setCheck("String").appendField("(input: email)");
    this.setOutput(true, "recipient");
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator["email_address"] = function (block) {
  return "...";
};

Blockly.Blocks["slack_channel"] = {
  init: function () {
    this.appendDummyInput().appendField("Recipient: Slack Channel");
    this.appendValueInput("name").setCheck("String").appendField("(input: channel)");
    this.setOutput(true, "recipient");
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator["slack_channel"] = function (block) {
  return "...";
};

Blockly.Blocks["slack_medium"] = {
  init: function () {
    this.appendDummyInput().appendField("Medium: Slack");
    this.setOutput(true, "medium");
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator["slack_medium"] = function (block) {
  return "...";
};

Blockly.Blocks["email"] = {
  init: function () {
    this.appendDummyInput().appendField("Medium: Email");
    this.setOutput(true, "medium");
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator["email"] = function (block) {
  return "...";
};

export const communicationToolboxCategories = {
  kind: "category",
  name: "Communication",
  colour: "#5CA699",
  contents: [
    {
      kind: "block",
      type: "send",
    },
    {
      kind: "block",
      type: "person",
    },
    {
      kind: "block",
      type: "email_address",
    },
    {
      kind: "block",
      type: "email",
    },
    {
      kind: "block",
      type: "slack_channel",
    },
    {
      kind: "block",
      type: "slack_medium",
    },
  ],
};
