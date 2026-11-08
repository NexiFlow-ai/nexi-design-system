import{S as n}from"./SetupDoor-BOweqHeo.js";import"./iframe-C_4ax-Jm.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Apps/NexSales/Setup door",component:n,parameters:{ds:"DS-6106",workbench:{ns:"sales",path:"/sales"},docs:{description:{component:"Setup door (DS-6106 proposed · one door in): the first screen of an empty organization — start in NEXUS, or connect the system that already holds the customers."}}},args:{onStart:()=>{},onConnect:()=>{}}},t={name:"Start in NEXUS (the default choice)"},e={name:"Connect the system of record",play:async({canvasElement:o})=>{if(o.querySelector('[data-testid="setup-connect"]')?.click(),await new Promise(r=>setTimeout(r,0)),!o.querySelector('[data-testid="setup-connect-go"]'))throw new globalThis.Error("the primary did not follow the choice")}},p=["Default","Connect"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Start in NEXUS (the default choice)"
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Connect the system of record",
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLInputElement>('[data-testid="setup-connect"]')?.click();
    await new Promise(r => setTimeout(r, 0));
    if (!canvasElement.querySelector('[data-testid="setup-connect-go"]')) throw new globalThis.Error("the primary did not follow the choice");
  }
}`,...e.parameters?.docs?.source},description:{story:"The other choice: the primary is named by it — *Connect* — one primary either way (DS-7016).",...e.parameters?.docs?.description}}};export{e as Connect,t as Default,p as __namedExportsOrder,i as default};
