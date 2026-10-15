import{j as m}from"./iframe-WvhPuRF9.js";import{P as S}from"./fixtures-CBGdDB98.js";import{f as L,a as v,b as f,c as y}from"./scene-CW26D-iP.js";import{L as p,a as h}from"./LogInteractionForm-BILMf9MZ.js";import"./preload-helper-PPVm8Dsz.js";import"./customFields-BTLjwQTu.js";import"./personas-BIiIeh3_.js";import"./format-Djfk7eK9.js";import"./flags--SfV1VDA.js";import"./SaveLadder-C0mlfeTY.js";const u=f(y("oksana"),"acc_agrolan"),B={title:"Apps/NexSales/Log composer",component:p,parameters:{ds:"DS-6107",layout:"fullscreen",workbench:{ns:"sales",path:"/sales/accounts/acc_agrolan"},a11y:{config:{rules:[{id:"heading-order",enabled:!1}]}}},args:{account:u.account,contacts:u.contacts,provider:S,writeMode:"policy_controlled",approverName:"Ihor Savchuk",save:v,reconcile:L,onSaved:()=>{},onClose:()=>{}},render:g=>m.jsx("div",{className:"nexus-sales-stream-body nexus-sales-story-pad",children:m.jsx(p,{...g})})},e={name:"One-line start (closed)",render:()=>m.jsx("div",{className:"nexus-sales-stream-body nexus-sales-story-pad",children:m.jsx(h,{onOpen:()=>{}})})},a={},r={args:{initialSummary:"Called Petro about the LCL quote.",initialLadder:{kind:"saving"}}},n={name:"Waiting for BAS",args:{initialSummary:"Called Petro about the LCL quote.",initialLadder:{kind:"pending_external"}}},s={name:"Saved in BAS",args:{initialSummary:"Called Petro about the LCL quote.",initialLadder:{kind:"saved",provider:"BAS"}}},o={args:{initialSummary:"Meeting at their office.",initialLadder:{kind:"pending_approval",approver:"Ihor Savchuk"}}},i={args:{initialSummary:"Call with the new buyer.",initialLadder:{kind:"rejected",errors:[{field:"contact_id",message:"contact is not listed for this counterparty"}]}}},t={args:{initialSummary:"Asked for LCL rates.",initialLadder:{kind:"conflict",diff:[{field:"summary",mine:"Asked for LCL rates.",theirs:"Asked for LCL rates; also wants insurance."}]}}},d={args:{initialSummary:"Visit to the warehouse.",initialLadder:{kind:"not_saved"}}},c={args:{initialSummary:"Short call.",initialLadder:{kind:"unavailable",provider:"BAS"}}},l={name:"Read-only record type (denied)",args:{writeMode:"read_only"}},O=["Start","Draft","Saving","WaitingForSource","Saved","PendingApproval","Rejected","Conflict","NotSaved","Unavailable","ReadOnly"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "One-line start (closed)",
  render: () => <div className="nexus-sales-stream-body nexus-sales-story-pad"><LogComposerLine onOpen={() => {}} /></div>
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    initialSummary: "Called Petro about the LCL quote.",
    initialLadder: {
      kind: "saving"
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Waiting for BAS",
  args: {
    initialSummary: "Called Petro about the LCL quote.",
    initialLadder: {
      kind: "pending_external"
    }
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Saved in BAS",
  args: {
    initialSummary: "Called Petro about the LCL quote.",
    initialLadder: {
      kind: "saved",
      provider: "BAS"
    }
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    initialSummary: "Meeting at their office.",
    initialLadder: {
      kind: "pending_approval",
      approver: "Ihor Savchuk"
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    initialSummary: "Call with the new buyer.",
    initialLadder: {
      kind: "rejected",
      errors: [{
        field: "contact_id",
        message: "contact is not listed for this counterparty"
      }]
    }
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    initialSummary: "Asked for LCL rates.",
    initialLadder: {
      kind: "conflict",
      diff: [{
        field: "summary",
        mine: "Asked for LCL rates.",
        theirs: "Asked for LCL rates; also wants insurance."
      }]
    }
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    initialSummary: "Visit to the warehouse.",
    initialLadder: {
      kind: "not_saved"
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    initialSummary: "Short call.",
    initialLadder: {
      kind: "unavailable",
      provider: "BAS"
    }
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Read-only record type (denied)",
  args: {
    writeMode: "read_only"
  }
}`,...l.parameters?.docs?.source}}};export{t as Conflict,a as Draft,d as NotSaved,o as PendingApproval,l as ReadOnly,i as Rejected,s as Saved,r as Saving,e as Start,c as Unavailable,n as WaitingForSource,O as __namedExportsOrder,B as default};
