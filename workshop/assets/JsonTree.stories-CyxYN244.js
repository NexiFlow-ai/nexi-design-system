import{J as n,j as r,t as p}from"./iframe-C_4ax-Jm.js";import"./preload-helper-PPVm8Dsz.js";const d={run_id:"fr_01J9X3",status:"succeeded",attempts:2,budget:{tokens:12840,cost_units:.42,exhausted:!1},steps:[{node:"classify",model:"qwen3-coder",latency_ms:812},{node:"draft",model:"qwen3-235b",latency_ms:2210,tools:["search.web","tasks.create"]}],note:null},l={title:"Kit/JsonTree",component:n,parameters:{ds:"DS-3056",docs:{description:{component:"JsonTree (DS-3056): a collapsible JSON view — types told apart by weight and a monospace face, not by colour."}}},args:{value:d,expandDepth:2},argTypes:{expandDepth:{control:{type:"number",min:0,max:5}}}},s={},a={args:{expandDepth:0}},t={args:{expandDepth:5}},e={name:"With CopyJson",render:o=>r.jsxs("div",{style:{display:"grid",gap:8,justifyItems:"start"},children:[r.jsx(p,{value:o.value,testId:"copy-json"}),r.jsx(n,{...o})]})},m=["Default","Collapsed","Expanded","WithCopy"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    expandDepth: 0
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    expandDepth: 5
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "With CopyJson",
  render: args => <div style={{
    display: "grid",
    gap: 8,
    justifyItems: "start"
  }}>
      <CopyJson value={args.value} testId="copy-json" />
      <JsonTree {...args} />
    </div>
}`,...e.parameters?.docs?.source},description:{story:"`CopyJson`: the copy-to-clipboard button a payload view carries beside the tree.",...e.parameters?.docs?.description}}};export{a as Collapsed,s as Default,t as Expanded,e as WithCopy,m as __namedExportsOrder,l as default};
