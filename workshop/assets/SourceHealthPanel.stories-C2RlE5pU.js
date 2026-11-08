import{j as m}from"./iframe-C_4ax-Jm.js";import{s as o,a as w,h as u,i as g}from"./scene-BIkkuSa8.js";import{S as y}from"./SourceHealthPanel-B1DmUQY-.js";import"./preload-helper-PPVm8Dsz.js";import"./world-D7bs8um4.js";import"./types-CBmIxQfA.js";import"./format-CwKZ7-7k.js";const r=()=>w("olena"),T={title:"Apps/NexFactory/Source health",component:y,parameters:{ds:"DS-6707",workbench:{ns:"factory",path:"/factory/settings?section=source"}},decorators:[e=>m.jsx("div",{className:"nexus-factory-story-pad",children:m.jsx(e,{})})],args:{health:o(r()),canAdmin:!0,probe:async()=>g(r()),runSync:async e=>u(r(),e??{}),reconcile:async e=>u(r(),e??{},"reconcile")}},a={name:"Connected · eight checkpoints, the admin's doors",play:async({canvasElement:e})=>{if(e.querySelector('[data-testid="source-health-line"]')?.getAttribute("role")!=="status")throw new globalThis.Error("the health line is a status region");const p=e.querySelectorAll('[data-testid="source-checkpoints"] tbody tr');if(p.length!==8)throw new globalThis.Error(`expected eight checkpoints, saw ${p.length}`);if(!e.querySelector('[data-testid="source-probe"]'))throw new globalThis.Error("the admin sees Check now")}},n={name:"Degraded · one copy behind, the reason code",args:{health:o(r(),"degraded")},play:async({canvasElement:e})=>{if(!e.querySelector('[data-testid="source-stale"]'))throw new globalThis.Error("the behind entities are named");if(e.querySelector('[data-testid="source-health"]')?.getAttribute("data-health")!=="degraded")throw new globalThis.Error("degraded")}},s={name:"Down · unavailable since the health row's clock",args:{health:o(r(),"down")},play:async({canvasElement:e})=>{const t=e.querySelector('[data-testid="source-health-line"]')?.textContent??"";if(!/since|з /.test(t))throw new globalThis.Error(`expected the clock on the line, saw "${t}"`);if(e.querySelector('[data-testid="source-sync"]'))throw new globalThis.Error("no Sync now while the source does not answer ()");if(!e.querySelector('[data-testid="source-probe"]'))throw new globalThis.Error("Check now remains")}},c={name:"Unknown · not checked yet",args:{health:o(r(),"unknown")}},i={name:"Checking…",args:{initialBusy:"probe"}},l={name:"After Sync now · the pass's report, the orders that re-evaluate",args:{initialReport:u(r(),{})},play:async({canvasElement:e})=>{const t=e.querySelector('[data-testid="source-report"]');if(t?.getAttribute("role")!=="status")throw new globalThis.Error("the report is a live region");if((t?.querySelectorAll("li").length??0)<9)throw new globalThis.Error("one line per entity and the orders line")}},d={name:"Refused · the server's word",args:{initialError:"Not allowed — the production administrator runs the source."}},h={name:"A planner reads (Dmytro) · the restriction, no control",args:{health:o(w("dmytro")),canAdmin:!1},play:async({canvasElement:e})=>{if(e.querySelector('[data-testid="source-probe"]'))throw new globalThis.Error("a reader sees no door")}},v=["Populated","Degraded","Down","Unknown","Probing","Report","Refused","Reader"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Connected · eight checkpoints, the admin's doors",
  play: async ({
    canvasElement
  }) => {
    const line = canvasElement.querySelector('[data-testid="source-health-line"]');
    if (line?.getAttribute("role") !== "status") throw new globalThis.Error("the health line is a status region");
    const rows = canvasElement.querySelectorAll('[data-testid="source-checkpoints"] tbody tr');
    if (rows.length !== 8) throw new globalThis.Error(\`expected eight checkpoints, saw \${rows.length}\`);
    if (!canvasElement.querySelector('[data-testid="source-probe"]')) throw new globalThis.Error("the admin sees Check now");
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Degraded · one copy behind, the reason code",
  args: {
    health: store.sourceHealth(admin(), "degraded")
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="source-stale"]')) throw new globalThis.Error("the behind entities are named");
    if (canvasElement.querySelector('[data-testid="source-health"]')?.getAttribute("data-health") !== "degraded") throw new globalThis.Error("degraded");
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Down · unavailable since the health row's clock",
  args: {
    health: store.sourceHealth(admin(), "down")
  },
  play: async ({
    canvasElement
  }) => {
    const text = canvasElement.querySelector('[data-testid="source-health-line"]')?.textContent ?? "";
    if (!/since|з /.test(text)) throw new globalThis.Error(\`expected the clock on the line, saw "\${text}"\`);
    if (canvasElement.querySelector('[data-testid="source-sync"]')) throw new globalThis.Error("no Sync now while the source does not answer ()");
    if (!canvasElement.querySelector('[data-testid="source-probe"]')) throw new globalThis.Error("Check now remains");
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Unknown · not checked yet",
  args: {
    health: store.sourceHealth(admin(), "unknown")
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Checking…",
  args: {
    initialBusy: "probe"
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "After Sync now · the pass's report, the orders that re-evaluate",
  args: {
    initialReport: store.runSync(admin(), {})
  },
  play: async ({
    canvasElement
  }) => {
    const report = canvasElement.querySelector('[data-testid="source-report"]');
    if (report?.getAttribute("role") !== "status") throw new globalThis.Error("the report is a live region");
    if ((report?.querySelectorAll("li").length ?? 0) < 9) throw new globalThis.Error("one line per entity and the orders line");
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Refused · the server's word",
  args: {
    initialError: "Not allowed — the production administrator runs the source."
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "A planner reads (Dmytro) · the restriction, no control",
  args: {
    health: store.sourceHealth(as("dmytro")),
    canAdmin: false
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="source-probe"]')) throw new globalThis.Error("a reader sees no door");
  }
}`,...h.parameters?.docs?.source}}};export{n as Degraded,s as Down,a as Populated,i as Probing,h as Reader,d as Refused,l as Report,c as Unknown,v as __namedExportsOrder,T as default};
