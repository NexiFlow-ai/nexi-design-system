import{j as s,ak as f,r as h}from"./iframe-C_4ax-Jm.js";/* empty css                */import{O as S}from"./organizationRequests-CxMYSAGe.js";import{S as g}from"./Segmented-C4lbw349.js";import"./preload-helper-PPVm8Dsz.js";function m({error:e,disabled:r}){const{t:a}=f(),[u,o]=h.useState("51-200");return s.jsx(g,{name:"size",label:a("core.request.size"),required:!0,value:u,onChange:o,options:S.map(p=>({value:p,label:a(`core.request.size.${p}`)})),error:e,disabled:r,testId:"size"})}function x(){const{t:e}=f(),[r,a]=h.useState("pending"),u={pending:3,approved:2,declined:2,all:7};return s.jsx(g,{name:"scope",size:"toolbar",label:e("core.platform.requests.filter"),hideLabel:!0,value:r,onChange:a,options:["pending","approved","declined","all"].map(o=>({value:o,label:e(`core.platform.requests.filter.${o}`),count:u[o]})),testId:"scope"})}const z={title:"Apps/NexCore/Segmented (proposed kit row)",parameters:{ds:"DS-3065",workbench:{ns:"core",path:"/request"}}},t=e=>{throw new globalThis.Error(e)},n={name:"Form · the organization size (34 px)",render:()=>s.jsx(m,{}),play:async({canvasElement:e})=>{const r=e.querySelectorAll('input[type="radio"]');r.length!==5&&t("five segments, five radios"),e.querySelector("fieldset legend")||t("the group is a fieldset with a legend"),e.querySelector('[data-testid="size-51-200"][data-checked="true"]')||t("the chosen segment is marked"),r[0]?.click(),await new Promise(a=>setTimeout(a,0)),e.querySelector('[data-testid="size-1-10"][data-checked="true"]')||t("a click chooses another segment")}},i={...n,name:"Form · українською",globals:{locale:"uk"}},l={name:"Form · error under the group (DS-7014)",render:()=>s.jsx(m,{error:"Fill this in."})},c={name:"Form · disabled while sending",render:()=>s.jsx(m,{disabled:!0})},d={name:"Toolbar · a status scope with counts (32 px)",render:()=>s.jsx(x,{}),play:async({canvasElement:e})=>{e.querySelector("legend.nexus-visually-hidden")||t("a toolbar scope keeps its name for the screen reader"),/3/.test(e.querySelector('[data-testid="scope-pending"] small')?.textContent??"")||t("a count after the label")}},v=["Form","FormUkrainian","FormError","FormDisabled","Toolbar"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Form · the organization size (34 px)",
  render: () => <SizePicker />,
  play: async ({
    canvasElement
  }) => {
    const radios = canvasElement.querySelectorAll<HTMLInputElement>('input[type="radio"]');
    if (radios.length !== 5) fails("five segments, five radios");
    if (!canvasElement.querySelector("fieldset legend")) fails("the group is a fieldset with a legend");
    if (!canvasElement.querySelector('[data-testid="size-51-200"][data-checked="true"]')) fails("the chosen segment is marked");
    radios[0]?.click();
    await new Promise(r => setTimeout(r, 0));
    if (!canvasElement.querySelector('[data-testid="size-1-10"][data-checked="true"]')) fails("a click chooses another segment");
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...Form,
  name: "Form · українською",
  globals: {
    locale: "uk"
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Form · error under the group (DS-7014)",
  render: () => <SizePicker error="Fill this in." />
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Form · disabled while sending",
  render: () => <SizePicker disabled />
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Toolbar · a status scope with counts (32 px)",
  render: () => <Scope />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector("legend.nexus-visually-hidden")) fails("a toolbar scope keeps its name for the screen reader");
    if (!/3/.test(canvasElement.querySelector('[data-testid="scope-pending"] small')?.textContent ?? "")) fails("a count after the label");
  }
}`,...d.parameters?.docs?.source}}};export{n as Form,c as FormDisabled,l as FormError,i as FormUkrainian,d as Toolbar,v as __namedExportsOrder,z as default};
