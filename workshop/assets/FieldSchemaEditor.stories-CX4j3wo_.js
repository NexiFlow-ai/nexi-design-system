import{j as p}from"./iframe-C_4ax-Jm.js";import{p as y,c as u,a as l,d as g}from"./scene-BIkkuSa8.js";import{F as w}from"./FieldSchemaEditor-2axlMfp6.js";import"./preload-helper-PPVm8Dsz.js";import"./world-D7bs8um4.js";import"./types-CBmIxQfA.js";import"./format-CwKZ7-7k.js";import"./ReadinessPolicyEditor-DYkxE-mE.js";import"./arrow-up-bnIz7tua.js";import"./arrow-down-CEX2ZLRK.js";import"./trash-2-qQksh-HK.js";const P={title:"Apps/NexFactory/Field schema editor",component:w,parameters:{ds:"DS-6708",workbench:{ns:"factory",path:"/factory/settings?section=fields"},docs:{description:{component:`DS-6708 · Field schema editor (Settings › Fields,  · ): one record type at a time, its custom fields
as rows (key · label en/uk · type · required · financial · options), a new version per save; the reader's Restriction.`}}},args:{view:u(l("olena")),canEdit:!0,personName:y,save:async(e,m)=>g(l("olena"),{record_type:e,fields:m})},decorators:[e=>p.jsx("div",{className:"nexus-factory-story-pad",children:p.jsx(e,{})})]},t={name:"Material · v1 · two fields, one financial",play:async({canvasElement:e})=>{if(e.querySelectorAll('[data-testid="fields-table"] tbody tr').length!==2)throw new globalThis.Error("two fields");if(!e.querySelector('[data-testid="field-row-landed_cost"]')?.textContent?.includes("financial"))throw new globalThis.Error("the financial field is named as such")}},r={name:"Product · no custom field yet (v0)",args:{initialRecordType:"product"}},a={name:"Editing · a row added",args:{initialEditing:!0}},n={name:"Editing · a bad key is said on the row",args:{initialEditing:!0},play:async({canvasElement:e})=>{e.querySelector('[data-testid="field-add"]')?.click(),await new Promise(c=>setTimeout(c,0));const d=e.querySelector('[data-testid="field-key-2"]');if(!d)throw new globalThis.Error("the new row's key field");if(Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value")?.set?.call(d,"9bad"),d.dispatchEvent(new Event("input",{bubbles:!0})),await new Promise(c=>setTimeout(c,0)),!e.querySelector('[data-testid="field-row-2"] [role="alert"]'))throw new globalThis.Error("the row says the key is wrong")}},i={name:"Saving…",args:{initialEditing:!0,initialSaving:!0}},s={name:"Refused · the service's word on the bar",args:{initialEditing:!0,initialError:"Your access does not allow changing the fields."}},o={name:"A planner reads (Dmytro) · Restriction",args:{view:u(l("dmytro")),canEdit:!1}},F=["Populated","EmptyType","Editing","Invalid","Saving","Refused","Reader"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Material · v1 · two fields, one financial",
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelectorAll('[data-testid="fields-table"] tbody tr').length !== 2) throw new globalThis.Error("two fields");
    if (!canvasElement.querySelector('[data-testid="field-row-landed_cost"]')?.textContent?.includes("financial")) throw new globalThis.Error("the financial field is named as such");
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Product · no custom field yet (v0)",
  args: {
    initialRecordType: "product"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Editing · a row added",
  args: {
    initialEditing: true
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Editing · a bad key is said on the row",
  args: {
    initialEditing: true
  },
  play: async ({
    canvasElement
  }) => {
    const add = canvasElement.querySelector<HTMLButtonElement>('[data-testid="field-add"]');
    add?.click();
    await new Promise(r => setTimeout(r, 0));
    const key = canvasElement.querySelector<HTMLInputElement>('[data-testid="field-key-2"]');
    if (!key) throw new globalThis.Error("the new row's key field");
    const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set;
    setter?.call(key, "9bad");
    key.dispatchEvent(new Event("input", {
      bubbles: true
    }));
    await new Promise(r => setTimeout(r, 0));
    if (!canvasElement.querySelector('[data-testid="field-row-2"] [role="alert"]')) throw new globalThis.Error("the row says the key is wrong");
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Saving…",
  args: {
    initialEditing: true,
    initialSaving: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Refused · the service's word on the bar",
  args: {
    initialEditing: true,
    initialError: "Your access does not allow changing the fields."
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "A planner reads (Dmytro) · Restriction",
  args: {
    view: records.fieldSchemas(as("dmytro")),
    canEdit: false
  }
}`,...o.parameters?.docs?.source}}};export{a as Editing,r as EmptyType,n as Invalid,t as Populated,o as Reader,s as Refused,i as Saving,F as __namedExportsOrder,P as default};
