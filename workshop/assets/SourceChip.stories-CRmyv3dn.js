import{N as i}from"./fixtures-CBGdDB98.js";import{S as o}from"./SourceChip-BR7BmiTf.js";import"./iframe-WvhPuRF9.js";import"./preload-helper-PPVm8Dsz.js";import"./format-Djfk7eK9.js";import"./flags--SfV1VDA.js";const t=s=>new Date(new Date(i).getTime()+s*6e4).toISOString(),v={title:"Apps/NexSales/Source chip",component:o,parameters:{ds:"DS-6101",workbench:{ns:"sales"}}},e={args:{source:{kind:"native"}}},a={name:"From BAS · 2 min ago",args:{source:{kind:"external",provider:"BAS",external_id:"00000012",verified_at:t(-2),state:"live"}}},r={name:"Stale · 3 h",args:{source:{kind:"external",provider:"BAS",external_id:"00000012",verified_at:t(-180),state:"stale"}}},n={name:"BAS unavailable",args:{source:{kind:"external",provider:"BAS",external_id:"00000012",verified_at:t(-240),state:"unavailable"}}},S=["Native","Live","Stale","Unavailable"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      kind: "native"
    }
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "From BAS · 2 min ago",
  args: {
    source: {
      kind: "external",
      provider: "BAS",
      external_id: "00000012",
      verified_at: minutes(-2),
      state: "live"
    }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Stale · 3 h",
  args: {
    source: {
      kind: "external",
      provider: "BAS",
      external_id: "00000012",
      verified_at: minutes(-180),
      state: "stale"
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "BAS unavailable",
  args: {
    source: {
      kind: "external",
      provider: "BAS",
      external_id: "00000012",
      verified_at: minutes(-240),
      state: "unavailable"
    }
  }
}`,...n.parameters?.docs?.source}}};export{a as Live,e as Native,r as Stale,n as Unavailable,S as __namedExportsOrder,v as default};
