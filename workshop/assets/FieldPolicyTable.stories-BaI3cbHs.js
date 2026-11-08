import{j as a}from"./iframe-C_4ax-Jm.js";import{b as n,a as s}from"./scene-BIkkuSa8.js";import{F as r}from"./FieldPolicyTable-DAw2ywZT.js";import"./preload-helper-PPVm8Dsz.js";import"./world-D7bs8um4.js";import"./types-CBmIxQfA.js";const y={title:"Apps/NexFactory/Field policy",component:r,parameters:{ds:"DS-6709",workbench:{ns:"factory",path:"/factory/settings?section=fieldPolicy"},docs:{description:{component:"DS-6709 · Field policy (): read-only — who reads the financial bucket, which fields are in it per record type."}}},args:{view:n(s("olena"))},decorators:[e=>a.jsx("div",{className:"nexus-factory-story-pad",children:a.jsx(e,{})})]},t={name:"Connected · unit_cost built-in · landed_cost custom",play:async({canvasElement:e})=>{const i=e.querySelector('[data-testid="field-policy-material"]');if(!i?.textContent?.includes("unit_cost")||!i?.textContent?.includes("custom.landed_cost"))throw new globalThis.Error("both restricted fields of the material");if(!e.querySelector('[data-testid="field-policy-site"]')?.textContent?.includes("nothing restricted"))throw new globalThis.Error("a site has nothing restricted — said")}},o={name:"Build mode · built-in only",args:{view:n(s("olena","native"))}},h=["Populated","Build"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Connected · unit_cost built-in · landed_cost custom",
  play: async ({
    canvasElement
  }) => {
    const mat = canvasElement.querySelector('[data-testid="field-policy-material"]');
    if (!mat?.textContent?.includes("unit_cost") || !mat?.textContent?.includes("custom.landed_cost")) throw new globalThis.Error("both restricted fields of the material");
    if (!canvasElement.querySelector('[data-testid="field-policy-site"]')?.textContent?.includes("nothing restricted")) throw new globalThis.Error("a site has nothing restricted — said");
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Build mode · built-in only",
  args: {
    view: records.fieldPolicy(as("olena", "native"))
  }
}`,...o.parameters?.docs?.source}}};export{o as Build,t as Populated,h as __namedExportsOrder,y as default};
