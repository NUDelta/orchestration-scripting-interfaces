import React, { useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import { toolboxCategories } from '../lib/blockly/customBlocks/customToolboxCategories';
import {javascriptGenerator} from 'blockly/javascript';

export default function BlockEditor() {
  const [xml, setXml] = useState('');
  const [javascriptCode, setJavascriptCode] = useState('');

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="ApplicableSet" x="40" y="30"><field name="TEXT"></field></block></xml>';

  function workspaceDidChange(workspace) {
    // console.log(workspace);
    javascriptGenerator.addReservedWords('code');
    var code = javascriptGenerator.workspaceToCode(workspace);
    console.log(code);
  }

  return (
    <>
      <BlocklyWorkspace
        toolboxConfiguration={toolboxCategories}
        initialXml={initialXml}
        className="blocklyWorkspace"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true,
          },
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={setXml}
      />
    </>
  );
}
