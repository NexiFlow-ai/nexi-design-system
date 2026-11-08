import{j as s}from"./iframe-C_4ax-Jm.js";import{o as l,a as c}from"./scene-BIkkuSa8.js";import{A as d}from"./AvailabilityRows-BfOnon3-.js";import"./preload-helper-PPVm8Dsz.js";import"./world-D7bs8um4.js";import"./types-CBmIxQfA.js";import"./format-CwKZ7-7k.js";import"./SourceChip-ME9pM3wu.js";const b={title:"Apps/NexFactory/Availability rows",component:d,parameters:{ds:"DS-6702",workbench:{ns:"factory",path:"/factory/orders/wo_1042"},docs:{description:{component:`DS-6702 (proposed) · the availability rows: material · required · available (as of) · the lots with their status —
a quarantined lot is named, never hidden in a total — · the coverage in words · the source chip. A projection of
the ledger (DATA), never the ledger.`}}},decorators:[a=>s.jsx("div",{className:"nexus-factory-story-pad",children:s.jsx(a,{})})]},i=a=>l(c("olena"),a).materials,t={name:"A lot in quarantine (WO-1042)",args:{rows:i("wo_1042")},play:async({canvasElement:a})=>{const e=a.querySelector('.nexus-factory-lots > li[data-status="quarantine"]');if(!e||!e.textContent?.toLowerCase().includes("quarantine"))throw new globalThis.Error("the quarantined lot is not named as such");if(!a.textContent?.includes("in quarantine"))throw new globalThis.Error("the coverage does not say what the quarantine holds back")}},r={name:"Covered (WO-1041)",args:{rows:i("wo_1041")}},n={name:"Stale · unavailable · missing",args:{rows:i("wo_1041").map((a,e)=>e===0&&a.availability?{...a,availability:{...a.availability,source:{kind:"external",provider:"Plant ERP",external_id:"M-2001",verified_at:"2026-10-16T02:00:00+03:00",state:"stale"}}}:e===1&&a.availability?{...a,availability:{...a.availability,source:{kind:"external",provider:"Plant ERP",external_id:"M-2002",verified_at:"2026-10-16T02:00:00+03:00",state:"unavailable"}}}:{...a,availability:null})}},o={args:{rows:[]}},f=["Populated","Covered","Stale","Empty"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "A lot in quarantine (WO-1042)",
  args: {
    rows: rowsOf("wo_1042")
  },
  play: async ({
    canvasElement
  }) => {
    const lot = canvasElement.querySelector<HTMLElement>('.nexus-factory-lots > li[data-status="quarantine"]');
    if (!lot || !lot.textContent?.toLowerCase().includes("quarantine")) throw new globalThis.Error("the quarantined lot is not named as such");
    if (!canvasElement.textContent?.includes("in quarantine")) throw new globalThis.Error("the coverage does not say what the quarantine holds back");
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Covered (WO-1041)",
  args: {
    rows: rowsOf("wo_1041")
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Stale · unavailable · missing",
  args: {
    rows: rowsOf("wo_1041").map((m, i) => i === 0 && m.availability ? {
      ...m,
      availability: {
        ...m.availability,
        source: {
          kind: "external",
          provider: "Plant ERP",
          external_id: "M-2001",
          verified_at: "2026-10-16T02:00:00+03:00",
          state: "stale"
        }
      }
    } : i === 1 && m.availability ? {
      ...m,
      availability: {
        ...m.availability,
        source: {
          kind: "external",
          provider: "Plant ERP",
          external_id: "M-2002",
          verified_at: "2026-10-16T02:00:00+03:00",
          state: "unavailable"
        }
      }
    } : {
      ...m,
      availability: null
    })
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    rows: []
  }
}`,...o.parameters?.docs?.source}}};export{r as Covered,o as Empty,t as Populated,n as Stale,f as __namedExportsOrder,b as default};
