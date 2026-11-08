import{j as d}from"./iframe-C_4ax-Jm.js";import{p,e as u,a as c,r as l}from"./scene-BIkkuSa8.js";import{R as m}from"./ReadinessPolicyEditor-DYkxE-mE.js";import"./preload-helper-PPVm8Dsz.js";import"./world-D7bs8um4.js";import"./types-CBmIxQfA.js";import"./format-CwKZ7-7k.js";import"./arrow-up-bnIz7tua.js";import"./arrow-down-CEX2ZLRK.js";const g=()=>l(c("olena")),y=()=>{const e=c("olena");return u(e,{gates:l(e).gates.map(t=>t.id==="equipment_status"?{...t,required:!0}:t),note:"Test cell status is mandatory from Q4"}),l(e)},T={title:"Apps/NexFactory/Readiness policy editor",component:m,parameters:{ds:"DS-6705",workbench:{ns:"factory",path:"/factory/settings"}},decorators:[e=>d.jsx("div",{className:"nexus-factory-story-pad",children:d.jsx(e,{})})],args:{policy:g(),canEdit:!0,personName:p,save:async(e,t)=>u(c("olena"),{gates:e,note:t})}},r={name:"The Starter policy · v1, seven gates",play:async({canvasElement:e})=>{const t=e.querySelectorAll('[data-testid^="policy-gate-"]');if(t.length!==7)throw new globalThis.Error(`expected seven gates, saw ${t.length}`);if(e.querySelector('[data-testid="policy-gate-equipment_status"]')?.getAttribute("data-required"))throw new globalThis.Error("the equipment gate is optional in the Starter")}},a={name:"Editing · the switches labelled by gate, the order arrows",args:{initialEditing:!0},play:async({canvasElement:e})=>{const t=e.querySelector('[data-testid="policy-required-equipment_status"]');if(t?.getAttribute("role")!=="switch"||!t.textContent?.includes("Equipment status"))throw new globalThis.Error("the switch is not labelled by its gate");if(!e.querySelector('[data-testid="policy-down-revision_approved"]'))throw new globalThis.Error("the order arrows are missing")}},s={name:"Saving · a new version",args:{initialEditing:!0,initialSaving:!0}},i={name:"Version list · v2 after v1",args:{policy:y()},play:async({canvasElement:e})=>{const t=e.querySelector('[data-testid="policy-versions"]');if(!t?.textContent?.includes("v2")||!t.textContent.includes("v1"))throw new globalThis.Error("the versions are not listed");if(!e.querySelector('[data-testid="policy-gate-equipment_status"]')?.getAttribute("data-required"))throw new globalThis.Error("v2 makes the equipment gate required")}},n={name:"Permission denied · a reader without factory.policy.manage",args:{canEdit:!1},play:async({canvasElement:e})=>{if(e.querySelector('[data-testid="edit"]'))throw new globalThis.Error("a reader must not see Edit");if(!e.querySelector('[data-testid="restriction"]'))throw new globalThis.Error("the restriction line is missing")}},o={name:"Refused on save · the PEP's word",args:{initialEditing:!0,initialError:"Not allowed — a factory administrator saves the policy."}},P=["Populated","Editing","Saving","Versions","ReadOnly","Refused"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "The Starter policy · v1, seven gates",
  play: async ({
    canvasElement
  }) => {
    const gates = canvasElement.querySelectorAll('[data-testid^="policy-gate-"]');
    if (gates.length !== 7) throw new globalThis.Error(\`expected seven gates, saw \${gates.length}\`);
    if (canvasElement.querySelector('[data-testid="policy-gate-equipment_status"]')?.getAttribute("data-required")) throw new globalThis.Error("the equipment gate is optional in the Starter");
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Editing · the switches labelled by gate, the order arrows",
  args: {
    initialEditing: true
  },
  play: async ({
    canvasElement
  }) => {
    const sw = canvasElement.querySelector<HTMLElement>('[data-testid="policy-required-equipment_status"]');
    if (sw?.getAttribute("role") !== "switch" || !sw.textContent?.includes("Equipment status")) throw new globalThis.Error("the switch is not labelled by its gate");
    if (!canvasElement.querySelector('[data-testid="policy-down-revision_approved"]')) throw new globalThis.Error("the order arrows are missing");
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Saving · a new version",
  args: {
    initialEditing: true,
    initialSaving: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Version list · v2 after v1",
  args: {
    policy: v2()
  },
  play: async ({
    canvasElement
  }) => {
    const list = canvasElement.querySelector<HTMLElement>('[data-testid="policy-versions"]');
    if (!list?.textContent?.includes("v2") || !list.textContent.includes("v1")) throw new globalThis.Error("the versions are not listed");
    if (!canvasElement.querySelector('[data-testid="policy-gate-equipment_status"]')?.getAttribute("data-required")) throw new globalThis.Error("v2 makes the equipment gate required");
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Permission denied · a reader without factory.policy.manage",
  args: {
    canEdit: false
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="edit"]')) throw new globalThis.Error("a reader must not see Edit");
    if (!canvasElement.querySelector('[data-testid="restriction"]')) throw new globalThis.Error("the restriction line is missing");
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Refused on save · the PEP's word",
  args: {
    initialEditing: true,
    initialError: "Not allowed — a factory administrator saves the policy."
  }
}`,...o.parameters?.docs?.source}}};export{a as Editing,r as Populated,n as ReadOnly,o as Refused,s as Saving,i as Versions,P as __namedExportsOrder,T as default};
