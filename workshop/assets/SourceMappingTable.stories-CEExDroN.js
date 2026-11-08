import{j as v}from"./iframe-C_4ax-Jm.js";import{p as f,j as w,a as h,k as E,l as y}from"./scene-BIkkuSa8.js";import{S as b}from"./SourceMappingTable-BiYM_lcy.js";import"./preload-helper-PPVm8Dsz.js";import"./world-D7bs8um4.js";import"./types-CBmIxQfA.js";import"./format-CwKZ7-7k.js";const m=()=>h("olena"),g=()=>y(m()),B={title:"Apps/NexFactory/Source mapping table",component:b,parameters:{ds:"DS-6707",workbench:{ns:"factory",path:"/factory/settings?section=mapping"}},decorators:[e=>v.jsx("div",{className:"nexus-factory-story-pad",children:v.jsx(e,{})})],args:{view:w(m()),canAdmin:!0,connected:!0,personName:f,discover:async()=>y(m()),approve:async e=>E(m(),e)}},t={name:"Approved v3 · eight entities, every row Unverified",play:async({canvasElement:e})=>{const r=e.querySelectorAll('[data-testid^="mapping-row-"]');if(r.length!==8)throw new globalThis.Error(`expected eight entities, saw ${r.length}`);if(!e.querySelector('[data-testid="mapping-version"]')?.textContent?.match(/Unverified|Не підтверджено/))throw new globalThis.Error("the unverified word");if([...e.querySelectorAll('[data-testid^="mapping-state-"]')].map(u=>u.textContent).some(u=>!u))throw new globalThis.Error("every row's state is a word, never colour alone")}},a={name:"The fields of an entity · canonical · codec · source",args:{initialOpen:["order"]},play:async({canvasElement:e})=>{const r=e.querySelectorAll('[data-testid^="mapping-field-order-"]');if(r.length!==9)throw new globalThis.Error(`expected nine order fields, saw ${r.length}`)}},n={name:"Discovered · partial (the lots set absent) · proposed v4, approval blocked",args:{view:g()},play:async({canvasElement:e})=>{if(e.querySelector('[data-testid="mapping-incomplete"]')?.getAttribute("role")!=="alert")throw new globalThis.Error("the missing rows are an alert");if(e.querySelector('[data-testid="mapping-state-lot"]')?.textContent?.match(/Missing|Відсутнє/)===null)throw new globalThis.Error("the lots row reads Missing — required");if(!e.querySelector('[data-testid="mapping-edit"]'))throw new globalThis.Error("a proposed version may be edited")}},o={name:"Editing · a source field per canonical field, the whole-set word for an absent set",args:{view:g(),initialEditing:!0,initialOpen:["order","lot"]},play:async({canvasElement:e})=>{if(!e.querySelector('[data-testid="mapping-input-order-number"]'))throw new globalThis.Error("a text field per canonical field");if(!e.querySelector('[data-testid="mapping-whole-lot"]'))throw new globalThis.Error("the absent set has the whole-set word");if(!e.querySelector('[data-testid="mapping-approve"]'))throw new globalThis.Error("Approve")}},s={name:"Approve refused · MAPPING_INCOMPLETE, the rows as the service names them",args:{view:g(),initialEditing:!0,initialError:"Not approved — required rows are still missing."}},i={name:"Approving…",args:{view:g(),initialEditing:!0,initialBusy:"approve"}},l={name:"Discovering…",args:{initialBusy:"discover"}},c={name:"No mapping yet · connected, Discover waits",args:{view:{mapping:null,incomplete:[],extra_sets:[],versions:[],discovery:null}},play:async({canvasElement:e})=>{if(!e.querySelector('[data-testid="mapping-none"]'))throw new globalThis.Error("the empty line");if(!e.querySelector('[data-testid="mapping-discover"]'))throw new globalThis.Error("Discover")}},p={name:"Not connected · nothing to discover",args:{view:w(h("olena","native")),connected:!1},play:async({canvasElement:e})=>{if(e.querySelector('[data-testid="mapping-discover"]'))throw new globalThis.Error("no Discover without a connection")}},d={name:"A planner reads (Dmytro) · the restriction, no control",args:{view:w(h("dmytro")),canAdmin:!1},play:async({canvasElement:e})=>{if(e.querySelector('[data-testid="mapping-discover"]')||e.querySelector('[data-testid="mapping-edit"]'))throw new globalThis.Error("a reader sees no door")}},C=["Populated","Fields","Proposed","Editing","RefusedIncomplete","Approving","Discovering","NoMapping","NotConnected","Reader"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Approved v3 · eight entities, every row Unverified",
  play: async ({
    canvasElement
  }) => {
    const rows = canvasElement.querySelectorAll('[data-testid^="mapping-row-"]');
    if (rows.length !== 8) throw new globalThis.Error(\`expected eight entities, saw \${rows.length}\`);
    if (!canvasElement.querySelector('[data-testid="mapping-version"]')?.textContent?.match(/Unverified|Не підтверджено/)) throw new globalThis.Error("the unverified word");
    const words = [...canvasElement.querySelectorAll('[data-testid^="mapping-state-"]')].map(c => c.textContent);
    if (words.some(w => !w)) throw new globalThis.Error("every row's state is a word, never colour alone");
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "The fields of an entity · canonical · codec · source",
  args: {
    initialOpen: ["order"]
  },
  play: async ({
    canvasElement
  }) => {
    const fields = canvasElement.querySelectorAll('[data-testid^="mapping-field-order-"]');
    if (fields.length !== 9) throw new globalThis.Error(\`expected nine order fields, saw \${fields.length}\`);
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Discovered · partial (the lots set absent) · proposed v4, approval blocked",
  args: {
    view: partial()
  },
  play: async ({
    canvasElement
  }) => {
    const alert = canvasElement.querySelector('[data-testid="mapping-incomplete"]');
    if (alert?.getAttribute("role") !== "alert") throw new globalThis.Error("the missing rows are an alert");
    if (canvasElement.querySelector('[data-testid="mapping-state-lot"]')?.textContent?.match(/Missing|Відсутнє/) === null) throw new globalThis.Error("the lots row reads Missing — required");
    if (!canvasElement.querySelector('[data-testid="mapping-edit"]')) throw new globalThis.Error("a proposed version may be edited");
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Editing · a source field per canonical field, the whole-set word for an absent set",
  args: {
    view: partial(),
    initialEditing: true,
    initialOpen: ["order", "lot"]
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="mapping-input-order-number"]')) throw new globalThis.Error("a text field per canonical field");
    if (!canvasElement.querySelector('[data-testid="mapping-whole-lot"]')) throw new globalThis.Error("the absent set has the whole-set word");
    if (!canvasElement.querySelector('[data-testid="mapping-approve"]')) throw new globalThis.Error("Approve");
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Approve refused · MAPPING_INCOMPLETE, the rows as the service names them",
  args: {
    view: partial(),
    initialEditing: true,
    initialError: "Not approved — required rows are still missing."
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Approving…",
  args: {
    view: partial(),
    initialEditing: true,
    initialBusy: "approve"
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Discovering…",
  args: {
    initialBusy: "discover"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "No mapping yet · connected, Discover waits",
  args: {
    view: {
      mapping: null,
      incomplete: [],
      extra_sets: [],
      versions: [],
      discovery: null
    }
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="mapping-none"]')) throw new globalThis.Error("the empty line");
    if (!canvasElement.querySelector('[data-testid="mapping-discover"]')) throw new globalThis.Error("Discover");
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Not connected · nothing to discover",
  args: {
    view: store.sourceMapping(as("olena", "native")),
    connected: false
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="mapping-discover"]')) throw new globalThis.Error("no Discover without a connection");
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "A planner reads (Dmytro) · the restriction, no control",
  args: {
    view: store.sourceMapping(as("dmytro")),
    canAdmin: false
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="mapping-discover"]') || canvasElement.querySelector('[data-testid="mapping-edit"]')) throw new globalThis.Error("a reader sees no door");
  }
}`,...d.parameters?.docs?.source}}};export{i as Approving,l as Discovering,o as Editing,a as Fields,c as NoMapping,p as NotConnected,t as Populated,n as Proposed,d as Reader,s as RefusedIncomplete,C as __namedExportsOrder,B as default};
