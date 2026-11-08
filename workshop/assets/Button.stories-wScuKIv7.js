import{aj as h,B as r,j as e,p as m,aC as g}from"./iframe-C_4ax-Jm.js";import{R as y}from"./refresh-cw-A2bjRiiQ.js";import{T as v}from"./trash-2-qQksh-HK.js";import{P as x}from"./plus-Dc-VMSiJ.js";import"./preload-helper-PPVm8Dsz.js";const f=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],D=h("download",f),I={title:"Kit/Button",component:r,parameters:{ds:"DS-3001",docs:{description:{component:'The one button (DS-3001). `primary` is the single most important action on a surface; `ghost` sits in a row of\nsecondary actions; `danger` (filled) is the destructive primary of a confirmation only; `destructive` (outlined)\nis the action that *opens* such a confirmation. Two heights: 36 px and 28 px (`size="sm"`) for row-level actions.'}}},args:{children:"Save",variant:"default"},argTypes:{variant:{control:"radio",options:["default","primary","ghost","danger","destructive"]},size:{control:"radio",options:[void 0,"sm"]},disabled:{control:"boolean"}}},s={},t={args:{variant:"primary"}},o={args:{variant:"ghost"}},i={name:"Danger (confirmation primary only)",args:{variant:"danger",children:"Delete project"}},d={name:"Destructive (opens a confirmation)",args:{variant:"destructive",children:"Delete project…"}},c={args:{size:"sm",children:"Enable"}},l={args:{disabled:!0}},p={args:{variant:"primary",size:"sm"},render:u=>e.jsxs(r,{...u,children:[e.jsx(x,{size:14,"aria-hidden":!0})," Enable model"]})},a={render:()=>e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{children:"Default"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsx(r,{variant:"danger",children:"Danger"}),e.jsx(r,{variant:"destructive",children:"Destructive"}),e.jsx(r,{disabled:!0,children:"Disabled"})]}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(r,{variant:"primary",size:"sm",children:"Primary sm"}),e.jsx(r,{size:"sm",children:"Default sm"}),e.jsxs(r,{size:"sm",children:[e.jsx(D,{size:14,"aria-hidden":!0})," With icon"]})]})]})},n={name:"IconButton",parameters:{ds:"DS-3002"},render:()=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(m,{label:"Copy",children:e.jsx(g,{size:16,"aria-hidden":!0})}),e.jsx(m,{label:"Refresh",children:e.jsx(y,{size:16,"aria-hidden":!0})}),e.jsx(m,{label:"Delete",disabled:!0,children:e.jsx(v,{size:16,"aria-hidden":!0})})]})},w=["Default","Primary","Ghost","Danger","Destructive","Small","Disabled","WithIcon","AllVariants","IconOnly"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Danger (confirmation primary only)",
  args: {
    variant: "danger",
    children: "Delete project"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Destructive (opens a confirmation)",
  args: {
    variant: "destructive",
    children: "Delete project…"
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm",
    children: "Enable"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "sm"
  },
  render: args => <Button {...args}>
      <Plus size={14} aria-hidden /> Enable model
    </Button>
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12
  }}>
      <div style={{
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }}>
        <Button variant="primary">Primary</Button>
        <Button>Default</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="destructive">Destructive</Button>
        <Button disabled>Disabled</Button>
      </div>
      <div style={{
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }}>
        <Button variant="primary" size="sm">Primary sm</Button>
        <Button size="sm">Default sm</Button>
        <Button size="sm"><Download size={14} aria-hidden /> With icon</Button>
      </div>
    </div>
}`,...a.parameters?.docs?.source},description:{story:"Every variant and size on one row — the reference the register points at.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "IconButton",
  parameters: {
    ds: "DS-3002"
  },
  render: () => <div style={{
    display: "flex",
    gap: 8
  }}>
      <IconButton label="Copy"><Copy size={16} aria-hidden /></IconButton>
      <IconButton label="Refresh"><RefreshCw size={16} aria-hidden /></IconButton>
      <IconButton label="Delete" disabled><Trash2 size={16} aria-hidden /></IconButton>
    </div>
}`,...n.parameters?.docs?.source},description:{story:"Icon-only (DS-3002): the label is mandatory and becomes both the accessible name and the tooltip.",...n.parameters?.docs?.description}}};export{a as AllVariants,i as Danger,s as Default,d as Destructive,l as Disabled,o as Ghost,n as IconOnly,t as Primary,c as Small,p as WithIcon,w as __namedExportsOrder,I as default};
