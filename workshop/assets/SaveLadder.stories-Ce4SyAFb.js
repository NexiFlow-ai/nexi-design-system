import{S as l}from"./SaveLadder-C0mlfeTY.js";import"./iframe-WvhPuRF9.js";import"./preload-helper-PPVm8Dsz.js";const S={title:"Apps/NexSales/Save ladder",component:l,parameters:{ds:"DS-6102",workbench:{ns:"sales"},docs:{description:{component:`Save ladder (DS-6102, proposed —  S0): the honest state of one write, in the form's footer. *Saved* is
said only when the source confirmed and returned an id; *not saved* is a sentence, never silence;
a conflict shows mine · theirs and three ways out; a rejection names the field. \`role="status"\`, polite for the
quiet states, assertive for the ones that need a hand.`}}},args:{provider:"BAS",onKeepMine:()=>{},onTakeTheirs:()=>{},onMerge:()=>{},onRetry:()=>{}}},e={args:{state:{kind:"draft"}}},a={args:{state:{kind:"saving"}}},r={name:"Waiting for BAS",args:{state:{kind:"pending_external"}}},n={name:"Pending approval",args:{state:{kind:"pending_approval",approver:"Ihor Savchuk"}}},s={args:{state:{kind:"saved",provider:"BAS"}}},t={name:"Saved (native)",args:{provider:null,state:{kind:"saved",provider:null}}},o={args:{state:{kind:"rejected",errors:[{field:"contact_id",message:"contact is not listed for this counterparty"}]}}},d={args:{state:{kind:"conflict",diff:[{field:"summary",mine:"Asked for LCL rates.",theirs:"Asked for LCL rates; also wants insurance."}]}}},i={args:{state:{kind:"reconciling"}}},c={name:"Not saved (unknown)",args:{state:{kind:"not_saved"}}},p={args:{state:{kind:"unavailable",provider:"BAS"}}},m={args:{state:{kind:"denied",provider:"BAS"}}},f=["Draft","Saving","PendingExternal","PendingApproval","Saved","SavedNative","Rejected","Conflict","Reconciling","NotSaved","Unavailable","Denied"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      kind: "draft"
    }
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      kind: "saving"
    }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Waiting for BAS",
  args: {
    state: {
      kind: "pending_external"
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Pending approval",
  args: {
    state: {
      kind: "pending_approval",
      approver: "Ihor Savchuk"
    }
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      kind: "saved",
      provider: "BAS"
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Saved (native)",
  args: {
    provider: null,
    state: {
      kind: "saved",
      provider: null
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      kind: "rejected",
      errors: [{
        field: "contact_id",
        message: "contact is not listed for this counterparty"
      }]
    }
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      kind: "conflict",
      diff: [{
        field: "summary",
        mine: "Asked for LCL rates.",
        theirs: "Asked for LCL rates; also wants insurance."
      }]
    }
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      kind: "reconciling"
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Not saved (unknown)",
  args: {
    state: {
      kind: "not_saved"
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      kind: "unavailable",
      provider: "BAS"
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      kind: "denied",
      provider: "BAS"
    }
  }
}`,...m.parameters?.docs?.source}}};export{d as Conflict,m as Denied,e as Draft,c as NotSaved,n as PendingApproval,r as PendingExternal,i as Reconciling,o as Rejected,s as Saved,t as SavedNative,a as Saving,p as Unavailable,f as __namedExportsOrder,S as default};
