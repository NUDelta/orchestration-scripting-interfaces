import Blockly, { Options } from "blockly";
// import { Toolbox } from "./blocklytools";
import React, { memo, useEffect, useRef } from "react";

var Toolbox = {
  kind: "flyoutToolbox",
  contents: [
    {
      kind: "block",
      type: "controls_if",
    },
    {
      kind: "block",
      type: "controls_repeat_ext",
    },
    {
      kind: "block",
      type: "logic_compare",
    },
    {
      kind: "block",
      type: "math_number",
    },
    {
      kind: "block",
      type: "math_arithmetic",
    },
    {
      kind: "block",
      type: "text",
    },
    {
      kind: "block",
      type: "text_print",
    },
  ],
};

const BlocklyWorkSpace = (Toolbox) => {
  return new Blockly.WorkspaceSvg(new Blockly.Options(Toolbox));
};

export default BlocklyWorkSpace;
