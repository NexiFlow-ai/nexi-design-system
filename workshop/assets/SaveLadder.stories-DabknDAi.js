import{S as v}from"./SaveLadder-8DhFuzkV.js";import"./iframe-C_4ax-Jm.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"Apps/NexSales/Save ladder",component:v,parameters:{ds:"DS-6102",workbench:{ns:"sales"},docs:{description:{component:`Save ladder (DS-6102, proposed —  S0): the honest state of one write, in the form's footer. *Saved* is
said only when the source confirmed and returned an id; *not saved* is a sentence, never silence;
a conflict shows mine · theirs and three ways out; a rejection names the field. \`role="status"\`, polite for the
quiet states, assertive for the ones that need a hand.`}}},args:{provider:"BAS",onKeepMine:()=>{},onTakeTheirs:()=>{},onMerge:()=>{},onRetry:()=>{}}},a={args:{state:{kind:"draft"}}},s={args:{state:{kind:"saving"}}},t={name:"Waiting for BAS",args:{state:{kind:"pending_external"}}},o={name:"Pending approval",args:{state:{kind:"pending_approval",approver:"Ihor Savchuk"}}},i={args:{state:{kind:"saved",provider:"BAS"}}},d={name:"Saved (native)",args:{provider:null,state:{kind:"saved",provider:null}}},c={args:{state:{kind:"rejected",errors:[{field:"contact_id",message:"contact is not listed for this counterparty"}]}}},p={args:{state:{kind:"conflict",diff:[{field:"summary",mine:"Asked for LCL rates.",theirs:"Asked for LCL rates; also wants insurance."}]}}},m={args:{state:{kind:"reconciling"}}},e={name:"Conflict (record · keep mine / take theirs)",args:{onMerge:void 0,state:{kind:"conflict",diff:[{field:"city",mine:"Київ",theirs:"Львів"}]}}},r={name:"Kept (still waiting)",args:{state:{kind:"kept",provider:"BAS"}}},n={name:"No operation",args:{state:{kind:"no_operation",provider:"BAS"}}},l={name:"Not saved (unknown)",args:{state:{kind:"not_saved"}}},u={args:{state:{kind:"unavailable",provider:"BAS"}}},g={args:{state:{kind:"denied",provider:"BAS"}}},A=["Draft","Saving","PendingExternal","PendingApproval","Saved","SavedNative","Rejected","Conflict","Reconciling","ConflictRecord","Kept","NoOperation","NotSaved","Unavailable","Denied"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      kind: "draft"
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      kind: "saving"
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Waiting for BAS",
  args: {
    state: {
      kind: "pending_external"
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Pending approval",
  args: {
    state: {
      kind: "pending_approval",
      approver: "Ihor Savchuk"
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      kind: "saved",
      provider: "BAS"
    }
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Saved (native)",
  args: {
    provider: null,
    state: {
      kind: "saved",
      provider: null
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      kind: "rejected",
      errors: [{
        field: "contact_id",
        message: "contact is not listed for this counterparty"
      }]
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      kind: "reconciling"
    }
  }
}`,...m.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Conflict (record · keep mine / take theirs)",
  args: {
    onMerge: undefined,
    state: {
      kind: "conflict",
      diff: [{
        field: "city",
        mine: "Київ",
        theirs: "Львів"
      }]
    }
  }
}`,...e.parameters?.docs?.source},description:{story:"S4-B (): a record's conflict offers the two honest doors only — *merge* is a text's, not a record's",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Kept (still waiting)",
  args: {
    state: {
      kind: "kept",
      provider: "BAS"
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"S4-B ( · ): the answer is still out after the form's patience — the row waits on Today",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "No operation",
  args: {
    state: {
      kind: "no_operation",
      provider: "BAS"
    }
  }
}`,...n.parameters?.docs?.source},description:{story:"S4-B ( · P-50): the source cannot take this write yet — nothing was sent",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Not saved (unknown)",
  args: {
    state: {
      kind: "not_saved"
    }
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      kind: "unavailable",
      provider: "BAS"
    }
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      kind: "denied",
      provider: "BAS"
    }
  }
}`,...g.parameters?.docs?.source}}};export{p as Conflict,e as ConflictRecord,g as Denied,a as Draft,r as Kept,n as NoOperation,l as NotSaved,o as PendingApproval,t as PendingExternal,m as Reconciling,c as Rejected,i as Saved,d as SavedNative,s as Saving,u as Unavailable,A as __namedExportsOrder,h as default};
