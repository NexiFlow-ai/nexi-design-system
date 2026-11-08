import{j as e}from"./iframe-C_4ax-Jm.js";import{A as p}from"./AskSurface-B8PUJCZ9.js";import{H as o}from"./HandOver-BZSm7-D2.js";import{a as c}from"./fixtures-CfJHxPtm.js";import"./preload-helper-PPVm8Dsz.js";import"./AskBar-D6qFedOb.js";import"./VoiceWaves-CVFNr488.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./AskPanel-DKkH7ynl.js";const i="You created Nexiflow in Europe.",n=e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"What is it called? — Nexiflow"}),e.jsx("p",{children:"Does your team share an e-mail domain? — Skip"}),e.jsx("p",{children:"Where should the organization's data live? — Europe"})]}),D={title:"Patterns/Hand-over",component:o,parameters:{ds:"DS-7017",layout:"padded"}},a={args:{state:"waiting",receipt:i,folded:n,line:"Nexi is writing your first message…"}},t={args:{state:"ready",receipt:i,folded:n},render:d=>e.jsx(o,{...d,children:e.jsx(p,{app:"core",layout:"inline",model:c("answered"),draft:"",onDraftChange:()=>{},onSend:()=>{},placeholder:"Ask Nexi"})})},s={args:{state:"late",receipt:i,folded:n,line:"Nexi's first message is on its way — it will be in NexChat.",door:{href:"/chat",label:"Open NexChat"}}},r={args:{state:"waiting",receipt:i,line:"Nexi is writing your first message…"}},O=["Waiting","Ready","Late","ReceiptOnly"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    state: "waiting",
    receipt: RECEIPT,
    folded: FOLDED,
    line: "Nexi is writing your first message…"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    state: "ready",
    receipt: RECEIPT,
    folded: FOLDED
  },
  render: args => <HandOver {...args}>
      <AskSurface app="core" layout="inline" model={askFixture("answered")} draft="" onDraftChange={() => undefined} onSend={() => undefined} placeholder="Ask Nexi" />
    </HandOver>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    state: "late",
    receipt: RECEIPT,
    folded: FOLDED,
    line: "Nexi's first message is on its way — it will be in NexChat.",
    door: {
      href: "/chat",
      label: "Open NexChat"
    }
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    state: "waiting",
    receipt: RECEIPT,
    line: "Nexi is writing your first message…"
  }
}`,...r.parameters?.docs?.source},description:{story:"a host that keeps nothing folded — the receipt is a plain line",...r.parameters?.docs?.description}}};export{s as Late,t as Ready,r as ReceiptOnly,a as Waiting,O as __namedExportsOrder,D as default};
