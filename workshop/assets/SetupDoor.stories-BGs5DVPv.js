import{S as a}from"./SetupDoor-r3wUrZ-T.js";import"./iframe-C_4ax-Jm.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Apps/NexFactory/Setup door",component:a,parameters:{ds:"DS-3036",workbench:{ns:"factory",path:"/factory?world=empty"},docs:{description:{component:"The setup door ( · ): Connect first, Build second — two `RadioCard`s (DS-3036), one primary, the hint says what each means today."}}},args:{onConnect:()=>{},onBuild:()=>{}}},e={name:"Connect (default) · Build"},t={name:"Build chosen",play:async({canvasElement:o})=>{if(o.querySelector('[data-testid="setup-build"] input')?.click(),await new Promise(r=>setTimeout(r,20)),!o.querySelector('[data-testid="setup-build-go"]'))throw new globalThis.Error("the primary did not follow the choice")}},d=["Populated","BuildChosen"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Connect (default) · Build"
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Build chosen",
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLInputElement>('[data-testid="setup-build"] input')?.click();
    await new Promise(r => setTimeout(r, 20));
    if (!canvasElement.querySelector('[data-testid="setup-build-go"]')) throw new globalThis.Error("the primary did not follow the choice");
  }
}`,...t.parameters?.docs?.source}}};export{t as BuildChosen,e as Populated,d as __namedExportsOrder,c as default};
