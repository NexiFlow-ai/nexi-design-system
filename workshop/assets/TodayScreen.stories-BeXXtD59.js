import{p as l,r,t as a,c as o,s as u}from"./scene-CW26D-iP.js";import{T as g}from"./TodayScreen-BfjviNZN.js";import"./customFields-BTLjwQTu.js";import"./fixtures-CBGdDB98.js";import"./personas-BIiIeh3_.js";import"./iframe-WvhPuRF9.js";import"./preload-helper-PPVm8Dsz.js";import"./format-Djfk7eK9.js";import"./flags--SfV1VDA.js";import"./routes-36j8zYvH.js";import"./SetupDoor-CeT04nvf.js";const D={title:"Apps/NexSales/Today",component:g,parameters:{ds:"DS-6103",layout:"fullscreen",workbench:{ns:"sales",path:"/sales"},docs:{description:{component:"Today (DS-6103 · an instance of the Overview page DS-7006, the NexCore cockpit idiom): the *Sales pulse* strip,\nthree `Stat`s (planned today · open pipeline · going quiet), then two-column `Section`s with `StatusList`s —\nplanned today · waiting on me · going quiet · recent. Monochrome; colour only for state; every row is a door."}}},args:{world:"connected",personName:l,canCreate:!1,onNewAccount:()=>{},onStartNative:()=>{},onConnect:()=>{}}},s={name:"Populated · connected (BAS)",args:{view:r(a(o("oksana")))}},t={name:"Populated · native",args:{world:"native",canCreate:!0,view:r(a(o("nazar")))}},e={name:"Eligible for hand-over (head of sales)",args:{view:r(a(o("ihor")))}},n={name:"Empty · the setup door",args:{world:"empty",canCreate:!0,view:r(a(o("nazar","empty")))}},i={name:"Org admin without a relation",args:{view:r(a(o("bob")))}},c={args:{view:u("loading")}},d={args:{view:u("error")}},p={args:{view:u("denied")}},m={args:{view:u("offline")}},E=["Connected","Native","HandOver","SetupDoor","OrgAdmin","Loading","Error","Denied","Offline"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Populated · connected (BAS)",
  args: {
    view: ready(store.today(as("oksana")))
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Populated · native",
  args: {
    world: "native",
    canCreate: true,
    view: ready(store.today(as("nazar")))
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Eligible for hand-over (head of sales)",
  args: {
    view: ready(store.today(as("ihor")))
  }
}`,...e.parameters?.docs?.source},description:{story:" (): a prospect with no touch for 60 days is *eligible for hand-over* — the head of sales sees everyone's; nothing moves by itself.",...e.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Empty · the setup door",
  args: {
    world: "empty",
    canCreate: true,
    view: ready(store.today(as("nazar", "empty")))
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Org admin without a relation",
  args: {
    view: ready(store.today(as("bob")))
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
}`,...m.parameters?.docs?.source}}};export{s as Connected,p as Denied,d as Error,e as HandOver,c as Loading,t as Native,m as Offline,i as OrgAdmin,n as SetupDoor,E as __namedExportsOrder,D as default};
