import React, { useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import { toolboxCategories } from '../lib/blockly/customBlocks/customToolboxCategories';
import { javascriptGenerator } from 'blockly/javascript';

export default function BlockEditor({ workspaceId }) {
  const [xml, setXml] = useState('');
  const [javascriptCode, setJavascriptCode] = useState('');

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="ApplicableSet" x="30" y="30"></block><block type="rootCause" x="200" y="300"></block><block type="Detector" x="30" y="145"></block><block type="StrategiesWrapper" x="30" y="200"></block><block type="Strategies" x="200" y="200"></block></xml>';

  function workspaceDidChange(workspace) {
    // console.log(workspace);
    javascriptGenerator.addReservedWords('code');
    var code = javascriptGenerator.workspaceToCode(workspace);
    console.log(code);
  }

  return (
    <>
    {workspaceId === 'workspace1' && (
      <BlocklyWorkspace
        id="workspace1"
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
    )}
    {workspaceId === 'workspace2' && (
      <BlocklyWorkspace
        id="workspace2"
        toolboxConfiguration={toolboxCategories}
        initialXml={initialXml}
        className="blocklyWorkspace"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: 'red',
            snap: true,
          },
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={setXml}
      />)}
    </>
  );
}