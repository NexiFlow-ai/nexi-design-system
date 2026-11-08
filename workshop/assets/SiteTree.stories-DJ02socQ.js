import{j as c}from"./iframe-C_4ax-Jm.js";import{g as t,a as n}from"./scene-BIkkuSa8.js";import{S as m}from"./SiteTree-Coz_hSMl.js";import"./preload-helper-PPVm8Dsz.js";import"./world-D7bs8um4.js";import"./types-CBmIxQfA.js";import"./SourceChip-ME9pM3wu.js";import"./format-CwKZ7-7k.js";const k={title:"Apps/NexFactory/Site tree",component:m,parameters:{ds:"DS-6704",workbench:{ns:"factory",path:"/factory"},docs:{description:{component:`DS-6704 (proposed · ) · the site tree: site › area › work center with the recorded status in words. A status
nobody recorded reads *unknown* — never a guess ();  records it from the edge.`}}},decorators:[e=>c.jsx("div",{className:"nexus-factory-story-pad",children:c.jsx(e,{})})]},s={name:"Lviv plant · connected",args:{sites:t(n("olena")).sites}},r={name:"Lviv plant · Build mode",args:{sites:t(n("olena","native")).sites}},a={name:"A work center down",args:{sites:t(n("olena")).sites.map(e=>({...e,areas:e.areas.map(i=>({...i,work_centers:i.work_centers.map(o=>o.id==="wc_gimbal"?{...o,status:"down"}:o)}))}))}},f=["Populated","Build","Down"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Lviv plant · connected",
  args: {
    sites: store.overview(as("olena")).sites
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Lviv plant · Build mode",
  args: {
    sites: store.overview(as("olena", "native")).sites
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "A work center down",
  args: {
    sites: store.overview(as("olena")).sites.map(s => ({
      ...s,
      areas: s.areas.map(a => ({
        ...a,
        work_centers: a.work_centers.map(w => w.id === "wc_gimbal" ? {
          ...w,
          status: "down" as const
        } : w)
      }))
    }))
  }
}`,...a.parameters?.docs?.source}}};export{r as Build,a as Down,s as Populated,f as __namedExportsOrder,k as default};
