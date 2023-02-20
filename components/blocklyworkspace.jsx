import Blockly from 'blockly';
import {Toolbox} from "./blocklytools.jsx";
import React, { memo, useEffect, useRef } from "react";

const BlocklyWorkSpace = () => {
    return new Blockly.WorkspaceSvg(new Blockly.Options(options));
}

export default memo(BlocklyWorkSpace);