import{j as m}from"./iframe-C_4ax-Jm.js";import{o as c,a as l,f as g}from"./scene-BIkkuSa8.js";import{E as f}from"./ExceptionFilingForm-CP0heWFI.js";import"./preload-helper-PPVm8Dsz.js";import"./world-D7bs8um4.js";import"./types-CBmIxQfA.js";import"./routes-CtGbDcx2.js";const E={title:"Apps/NexFactory/Exception filing form",component:f,parameters:{ds:"DS-6706",workbench:{ns:"factory",path:"/factory/orders/wo_1042"},docs:{description:{component:`DS-6706 (proposed · S2,  ·  A3) · the exception filing form: kind · severity · the gate (a failed one
offered first) · a note; the answer is the item or the open one that already exists; refusals are the server's
words. The engine's own filings never pass through here.`}}},decorators:[e=>m.jsx("div",{className:"nexus-factory-story-pad",children:m.jsx(e,{})})],args:{orderId:"wo_1042",orderNumber:"WO-1042",gates:c(l("olena"),"wo_1042").readiness.gates,file:async e=>g(l("olena"),e),onFiled:()=>{},onClose:()=>{}}},t={name:"Draft · the failed gate offered first",play:async({canvasElement:e})=>{const n=p=>e.querySelector(`[data-testid="${p}"]`);if(!n("file-exception-gate")?.textContent?.includes("Materials available"))throw new globalThis.Error("the failed gate is not offered first");if(!n("file-exception-kind")?.textContent?.includes("Material shortage"))throw new globalThis.Error("the kind does not follow the gate")}},a={name:"Filing · the board is asked",args:{initialState:{kind:"saving"}}},o={name:"Filed · the new item, a door to the board",args:{initialState:{kind:"saved",outcome:{existing:!1,exception:{...c(l("olena"),"wo_1042").exceptions[0],key:"FAC-18",stage:"open"}}}},play:async({canvasElement:e})=>{if(!e.querySelector('[data-testid="file-exception-done"]')?.textContent?.includes("FAC-18"))throw new globalThis.Error("the filed item is not named")}},r={name:"Already open · the fingerprint rule",args:{initialState:{kind:"saved",outcome:{existing:!0,exception:c(l("olena"),"wo_1042").exceptions[0]}}},play:async({canvasElement:e})=>{const n=e.querySelector('[data-testid="file-exception-done"]');if(n?.getAttribute("data-existing")!=="1"||!n.textContent?.includes("FAC-12"))throw new globalThis.Error("the open item is not named as already existing")}},i={name:"Refused · the PEP's word",args:{initialState:{kind:"error",code:"denied"}}},s={name:"The board is not linked",args:{initialState:{kind:"error",code:"board"}}},d={name:"VibeBan did not answer · nothing filed",args:{initialState:{kind:"error",code:"unavailable"}}},k=["Populated","Filing","Filed","Existing","Denied","BoardNotLinked","Unavailable"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Draft · the failed gate offered first",
  play: async ({
    canvasElement
  }) => {
    const by = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    if (!by("file-exception-gate")?.textContent?.includes("Materials available")) throw new globalThis.Error("the failed gate is not offered first");
    if (!by("file-exception-kind")?.textContent?.includes("Material shortage")) throw new globalThis.Error("the kind does not follow the gate");
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Filing · the board is asked",
  args: {
    initialState: {
      kind: "saving"
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Filed · the new item, a door to the board",
  args: {
    initialState: {
      kind: "saved",
      outcome: {
        existing: false,
        exception: {
          ...store.order(as("olena"), "wo_1042").exceptions[0]!,
          key: "FAC-18",
          stage: "open"
        }
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const done = canvasElement.querySelector<HTMLElement>('[data-testid="file-exception-done"]');
    if (!done?.textContent?.includes("FAC-18")) throw new globalThis.Error("the filed item is not named");
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Already open · the fingerprint rule",
  args: {
    initialState: {
      kind: "saved",
      outcome: {
        existing: true,
        exception: store.order(as("olena"), "wo_1042").exceptions[0]!
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const done = canvasElement.querySelector<HTMLElement>('[data-testid="file-exception-done"]');
    if (done?.getAttribute("data-existing") !== "1" || !done.textContent?.includes("FAC-12")) throw new globalThis.Error("the open item is not named as already existing");
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Refused · the PEP's word",
  args: {
    initialState: {
      kind: "error",
      code: "denied"
    }
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "The board is not linked",
  args: {
    initialState: {
      kind: "error",
      code: "board"
    }
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "VibeBan did not answer · nothing filed",
  args: {
    initialState: {
      kind: "error",
      code: "unavailable"
    }
  }
}`,...d.parameters?.docs?.source}}};export{s as BoardNotLinked,i as Denied,r as Existing,o as Filed,a as Filing,t as Populated,d as Unavailable,k as __namedExportsOrder,E as default};
