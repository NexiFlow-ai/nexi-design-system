import{b as s,j as e,S as t}from"./iframe-WvhPuRF9.js";import"./preload-helper-PPVm8Dsz.js";const c=["neutral","ok","warn","danger","muted"],h={title:"Kit/Chip",component:s,parameters:{ds:"DS-3003",docs:{description:{component:`Chip (DS-3003): a short qualifier next to a title — classification, kind, a count. Five semantic tones; never a
product colour, never an action (a chip is not a button).`}}},args:{children:"internal",tone:"neutral"},argTypes:{tone:{control:"radio",options:c}}},i={},d={render:()=>e.jsx("div",{style:{display:"flex",gap:8},children:c.map(l=>e.jsx(s,{tone:l,children:l},l))})},n={name:"xs · the dense chip",render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",fontSize:13},children:[e.jsx("span",{style:{fontWeight:600},children:"Why logistics margin fell"}),e.jsx(s,{size:"xs",children:"Goal"}),e.jsx(s,{size:"xs",tone:"muted",children:"12"}),e.jsx(s,{size:"xs",tone:"warn",children:"stale"})]})},a={name:"removable · the × is the action",render:()=>e.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:[e.jsx(s,{onRemove:()=>{},removeLabel:"Remove example.com",children:"example.com"}),e.jsx(s,{onRemove:()=>{},removeLabel:"Remove acme.co",children:"acme.co"}),e.jsx(s,{size:"xs",onRemove:()=>{},removeLabel:"Remove the Q3 filter",children:"Q3"}),e.jsx(s,{tone:"danger",onRemove:()=>{},removeLabel:"Remove the blocked label",children:"blocked"})]})},o={name:"StatusDot",parameters:{ds:"DS-3004"},render:()=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(t,{tone:"ok",children:"Ready"}),e.jsx(t,{tone:"warn",children:"Degraded"}),e.jsx(t,{tone:"danger",children:"Offline"}),e.jsx(t,{tone:"neutral",children:"Pending"}),e.jsx(t,{tone:"muted",children:"Disabled"})]})},r={name:"StatusDot · sizes",parameters:{ds:"DS-3004"},render:()=>e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(t,{tone:"ok",children:"Ready"}),e.jsx(t,{tone:"warn",children:"Degraded"})]}),e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(t,{tone:"ok",size:"sm",children:"Ready"}),e.jsx(t,{tone:"warn",size:"sm",children:"Degraded"}),e.jsx(t,{tone:"danger",size:"sm",children:"Offline"})]})]})},u=["Default","Tones","Xs","Removable","Status","StatusSizes"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8
  }}>
      {TONES.map(t => <Chip key={t} tone={t}>{t}</Chip>)}
    </div>
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "xs · the dense chip",
  render: () => <div style={{
    display: "flex",
    gap: 8,
    alignItems: "center",
    fontSize: 13
  }}>
      <span style={{
      fontWeight: 600
    }}>Why logistics margin fell</span>
      <Chip size="xs">Goal</Chip>
      <Chip size="xs" tone="muted">12</Chip>
      <Chip size="xs" tone="warn">stale</Chip>
    </div>
}`,...n.parameters?.docs?.source},description:{story:" — the 18 px chip of a dense line: a kind beside a title, a count in a row.",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "removable · the × is the action",
  render: () => <div style={{
    display: "flex",
    gap: 6,
    flexWrap: "wrap"
  }}>
      <Chip onRemove={() => {}} removeLabel="Remove example.com">example.com</Chip>
      <Chip onRemove={() => {}} removeLabel="Remove acme.co">acme.co</Chip>
      <Chip size="xs" onRemove={() => {}} removeLabel="Remove the Q3 filter">Q3</Chip>
      <Chip tone="danger" onRemove={() => {}} removeLabel="Remove the blocked label">blocked</Chip>
    </div>
}`,...a.parameters?.docs?.source},description:{story:" — the one removable chip: the `×` is the action and carries the accessible name; the chip is not a button.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "StatusDot",
  parameters: {
    ds: "DS-3004"
  },
  render: () => <div style={{
    display: "flex",
    gap: 16
  }}>
      <StatusDot tone="ok">Ready</StatusDot>
      <StatusDot tone="warn">Degraded</StatusDot>
      <StatusDot tone="danger">Offline</StatusDot>
      <StatusDot tone="neutral">Pending</StatusDot>
      <StatusDot tone="muted">Disabled</StatusDot>
    </div>
}`,...o.parameters?.docs?.source},description:{story:"Status (DS-3004) = a semantic dot *and* a visible label: the colour is redundant, the text carries the meaning.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "StatusDot · sizes",
  parameters: {
    ds: "DS-3004"
  },
  render: () => <div style={{
    display: "grid",
    gap: 8
  }}>
      <div style={{
      display: "flex",
      gap: 16
    }}>
        <StatusDot tone="ok">Ready</StatusDot>
        <StatusDot tone="warn">Degraded</StatusDot>
      </div>
      <div style={{
      display: "flex",
      gap: 12
    }}>
        <StatusDot tone="ok" size="sm">Ready</StatusDot>
        <StatusDot tone="warn" size="sm">Degraded</StatusDot>
        <StatusDot tone="danger" size="sm">Offline</StatusDot>
      </div>
    </div>
}`,...r.parameters?.docs?.source},description:{story:" — the 6 px dot of a dense row (12 px label), beside the 8 px default.",...r.parameters?.docs?.description}}};export{i as Default,a as Removable,o as Status,r as StatusSizes,d as Tones,n as Xs,u as __namedExportsOrder,h as default};
