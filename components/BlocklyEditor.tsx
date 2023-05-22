import React, { useEffect, useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import { toolboxCategories } from '../lib/blockly/customBlocks/customToolboxCategories';
import { javascriptGenerator } from 'blockly/javascript';
import Blockly from 'blockly/core';
import 'blockly/blocks';
import 'blockly/javascript';

export default function BlockEditor({ workspaceId, RCs, setRCs, index, onJSChange, onXmlChange } : any) {
  const [xml, setXml] = useState('');
  const [javascriptCode, setJavascriptCode] = useState('');

  // const setXml = (e : any) => {
  //   let copy = [...RCs]
  //   copy[index].strategy = e
  //   setRCs(copy)
  // }

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="ApplicableSet" x="30" y="30"></block><block type="Detector" x="30" y="145"></block></xml>';

  function workspaceDidChange(workspace) {
    // console.log(workspace);
    javascriptGenerator.addReservedWords('code');
    var code = javascriptGenerator.workspaceToCode(workspace);
    setJavascriptCode(code)
    console.log('WORKSPACE CHANGED:', javascriptCode);
    onJSChange(code)
    var curr_xml = convertWorkspaceToXml(workspace)
    onXmlChange(curr_xml)
    console.log('CURR XML:', curr_xml)
  }

  function convertWorkspaceToXml(workspace) {
    const xml = Blockly.Xml.workspaceToDom(workspace);
    const xmlString = Blockly.Xml.domToPrettyText(xml);
    return xmlString;
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
        initialXml={RCs[index].strategy}
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
      {workspaceId === 'workspace3' && (
      <BlocklyWorkspace
        id="workspace3"
        toolboxConfiguration={toolboxCategories}
        initialXml={RCs[index].strategy}
        className="blocklyWorkspace"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: 'blue',
            snap: true,
          },
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={setXml}
      />)}
      {workspaceId === 'workspace4' && (
      <BlocklyWorkspace
        id="workspace4"
        toolboxConfiguration={toolboxCategories}
        initialXml={RCs[index].strategy}
        className="blocklyWorkspace"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: 'green',
            snap: true,
          },
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={setXml}
      />)}
      {workspaceId === 'workspace5' && (
      <BlocklyWorkspace
        id="workspace5"
        toolboxConfiguration={toolboxCategories}
        initialXml={RCs[index].strategy}
        className="blocklyWorkspace"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: 'purple',
            snap: true,
          },
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={setXml}
      />)}
      {workspaceId === 'workspace6' && (
      <BlocklyWorkspace
        id="workspace6"
        toolboxConfiguration={toolboxCategories}
        initialXml={RCs[index].strategy}
        className="blocklyWorkspace"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: 'pink',
            snap: true,
          },
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={setXml}
      />)}
      {workspaceId === 'workspace7' && (
      <BlocklyWorkspace
        id="workspace7"
        toolboxConfiguration={toolboxCategories}
        initialXml={RCs[index].strategy}
        className="blocklyWorkspace"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: 'yellow',
            snap: true,
          },
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={setXml}
      />)}
      {workspaceId === 'workspace8' && (
      <BlocklyWorkspace
        id="workspace8"
        toolboxConfiguration={toolboxCategories}
        initialXml={RCs[index].strategy}
        className="blocklyWorkspace"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: 'orange',
            snap: true,
          },
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={setXml}
      />)}
      {workspaceId === 'workspace9' && (
      <BlocklyWorkspace
        id="workspace9"
        toolboxConfiguration={toolboxCategories}
        initialXml={RCs[index].strategy}
        className="blocklyWorkspace"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: 'lavender',
            snap: true,
          },
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={setXml}
      />)}
      {workspaceId === 'workspace10' && (
      <BlocklyWorkspace
        id="workspace10"
        toolboxConfiguration={toolboxCategories}
        initialXml={RCs[index].strategy}
        className="blocklyWorkspace"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: 'black',
            snap: true,
          },
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={setXml}
      />)}
    </>
  );
}