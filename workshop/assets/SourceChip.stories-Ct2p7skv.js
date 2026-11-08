import{j as d}from"./iframe-C_4ax-Jm.js";import{P as t,N as p}from"./world-D7bs8um4.js";import{S as u}from"./SourceChip-ME9pM3wu.js";import"./preload-helper-PPVm8Dsz.js";import"./format-CwKZ7-7k.js";const a=e=>new Date(new Date(p).getTime()+e*6e4).toISOString(),f={title:"Apps/NexFactory/Source chip",component:u,parameters:{ds:"DS-6101",workbench:{ns:"factory",path:"/factory/orders"},docs:{description:{component:`DS-6101 (adopted from NexSales · ) · the source chip: *Nexi* for a native record; *from ‹provider› · 4 min
ago* · *stale · 3 h* · *‹provider› unavailable* for a record the connected system owns; S3 () adds *waiting*
and *unavailable since*. Text carries the meaning; the provider is the connection's display name, never a
vendor's ().`}}},decorators:[e=>d.jsx("div",{className:"nexus-factory-story-pad",children:d.jsx(e,{})})]},s={name:"Fresh · from Plant ERP",args:{source:{kind:"external",provider:t,external_id:"WO-1041",verified_at:a(-4),state:"live"}}},i={args:{source:{kind:"native"}}},o={args:{source:{kind:"external",provider:t,external_id:"WO-1041",verified_at:a(-190),state:"stale"}}},c={args:{source:{kind:"external",provider:t,external_id:"WO-1041",verified_at:a(-190),state:"unavailable"}}},r={name:"Unavailable since · the health row's clock",args:{source:{kind:"external",provider:t,external_id:"WO-1041",verified_at:a(-190),state:"unavailable",unavailable_since:a(-109)}},play:async({canvasElement:e})=>{const l=e.querySelector('[data-source="unavailable"]')?.textContent??"";if(!/since|з /.test(l))throw new globalThis.Error(`expected the clock on the chip, saw "${l}"`)}},n={name:"Waiting · a live read past 2 s",args:{source:{kind:"external",provider:t,external_id:"WO-1041",verified_at:a(-4),state:"live"},waiting:!0},play:async({canvasElement:e})=>{if(!e.querySelector('[data-source="waiting"][role="status"]'))throw new globalThis.Error("the waiting state is a live region")}},w=["Populated","Native","Stale","Unavailable","UnavailableSince","Waiting"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Fresh · from Plant ERP",
  args: {
    source: {
      kind: "external",
      provider: PROVIDER,
      external_id: "WO-1041",
      verified_at: minutes(-4),
      state: "live"
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      kind: "native"
    }
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      kind: "external",
      provider: PROVIDER,
      external_id: "WO-1041",
      verified_at: minutes(-190),
      state: "stale"
    }
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      kind: "external",
      provider: PROVIDER,
      external_id: "WO-1041",
      verified_at: minutes(-190),
      state: "unavailable"
    }
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Unavailable since · the health row's clock",
  args: {
    source: {
      kind: "external",
      provider: PROVIDER,
      external_id: "WO-1041",
      verified_at: minutes(-190),
      state: "unavailable",
      unavailable_since: minutes(-109)
    }
  },
  play: async ({
    canvasElement
  }) => {
    const text = canvasElement.querySelector('[data-source="unavailable"]')?.textContent ?? "";
    if (!/since|з /.test(text)) throw new globalThis.Error(\`expected the clock on the chip, saw "\${text}"\`);
  }
}`,...r.parameters?.docs?.source},description:{story:"S3 (): the health row's clock — *unavailable since 10:41*, never computed on the screen",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Waiting · a live read past 2 s",
  args: {
    source: {
      kind: "external",
      provider: PROVIDER,
      external_id: "WO-1041",
      verified_at: minutes(-4),
      state: "live"
    },
    waiting: true
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-source="waiting"][role="status"]')) throw new globalThis.Error("the waiting state is a live region");
  }
}`,...n.parameters?.docs?.source},description:{story:"S3 (): a live read past 2 s says so — the copy is not shown as fresh meanwhile",...n.parameters?.docs?.description}}};export{i as Native,s as Populated,o as Stale,c as Unavailable,r as UnavailableSince,n as Waiting,w as __namedExportsOrder,f as default};
