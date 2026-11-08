import{p as u,m as a,g as o,a as s,n as l}from"./scene-BIkkuSa8.js";import{O as v}from"./OverviewScreen-DO4ktneP.js";import"./world-D7bs8um4.js";import"./types-CBmIxQfA.js";import"./iframe-C_4ax-Jm.js";import"./preload-helper-PPVm8Dsz.js";import"./format-CwKZ7-7k.js";import"./routes-CtGbDcx2.js";import"./OrderStateChip-D77petS4.js";import"./SiteTree-Coz_hSMl.js";import"./SourceChip-ME9pM3wu.js";import"./SetupDoor-r3wUrZ-T.js";const j={title:"Apps/NexFactory/Overview",component:v,parameters:{ds:"DS-7006",layout:"fullscreen",workbench:{ns:"factory",path:"/factory"},docs:{description:{component:"Overview (an instance of the Overview page DS-7006, the NexCore cockpit idiom · ): the *Plant pulse* strip,\nthree `Stat`s (can start · needs a person · exceptions open), then two-column `Section`s — needs a person ·\nexceptions · recent evaluations · sites (DS-6704). Monochrome; colour only for state; every row a door."}}},args:{world:"connected",personName:u,onConnect:()=>{},onBuild:()=>{}}},t={name:"Populated · connected (Plant ERP)",args:{view:a(o(s("olena")))}},n={name:"Populated · Build mode (native)",args:{world:"native",view:a(o(s("olena","native")))}},e={name:"Org admin without a relation ()",args:{view:a(o(s("roman")))}},r={name:"Quality lead · one project",args:{view:a(o(s("kateryna")))}},i={name:"Empty · the setup door",args:{world:"empty",view:a(o(s("olena","empty")))}},c={args:{view:l("loading")}},d={args:{view:l("error")}},p={args:{view:l("denied")}},m={args:{view:l("offline")}},k=["Populated","Build","OrgAdmin","QualityLead","SetupDoor","Loading","Error","Denied","Offline"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Populated · connected (Plant ERP)",
  args: {
    view: ready(store.overview(as("olena")))
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Populated · Build mode (native)",
  args: {
    world: "native",
    view: ready(store.overview(as("olena", "native")))
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Org admin without a relation ()",
  args: {
    view: ready(store.overview(as("roman")))
  }
}`,...e.parameters?.docs?.source},description:{story:": an organization admin without a project relation sees the figures of the pulse and nothing else.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Quality lead · one project",
  args: {
    view: ready(store.overview(as("kateryna")))
  }
}`,...r.parameters?.docs?.source},description:{story:"The quality lead reads the avionics project only — the airframe orders are not hers to see.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Empty · the setup door",
  args: {
    world: "empty",
    view: ready(store.overview(as("olena", "empty")))
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("loading")
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("error")
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("denied")
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("offline")
  }
}`,...m.parameters?.docs?.source}}};export{n as Build,p as Denied,d as Error,c as Loading,m as Offline,e as OrgAdmin,t as Populated,r as QualityLead,i as SetupDoor,k as __namedExportsOrder,j as default};
