import{j as m}from"./iframe-C_4ax-Jm.js";/* empty css                */import{o as f,p as y,q as w,r as E}from"./billing-1IaOy8Tp.js";import{K as x}from"./format-DO9OmoTM.js";import{S,R}from"./TraceInspector-CTM_18jk.js";import"./preload-helper-PPVm8Dsz.js";import"./platform-BhtOchBX.js";import"./credential-Ch26UJlM.js";import"./chatApi-DU7mAKQS.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./organizationRequests-CxMYSAGe.js";import"./BillingParts-8YmDY42z.js";import"./ProjectsScreen-C7z5gdcJ.js";import"./link-CXIEul0Q.js";import"./store-C-il-aT_.js";import"./runtime-Cwmke1Hn.js";import"./navigation-BPhnWcXc.js";import"./metrics-XT_i2DSD.js";import"./nav-C8-c-HcF.js";import"./format-CgRB8Fht.js";const W={title:"Apps/NexCore/Platform Operations/Run billing",parameters:{ds:"DS-6805",layout:"fullscreen",docs:{description:{component:" S3 (WP-7) — the billing group of one execution on the Executions detail, at every state: absent (a run\nwithout `billing` — contracts < 1.170.0 or a run that never reached the door), authorized, reduced, denied under\nobserve mode (, ) and a verdict the client does not know. `DS-6805` money parts over the kit's `Facts`;\nthe amounts are Decimal strings (). Fixtures: `fixtures/billing.ts` (synthetic)."}}}},g=e=>m.jsx("div",{className:"nexus-cc-page","data-width":"wide",children:e}),n=e=>{throw new globalThis.Error(e)},N=e=>new Date(Date.UTC(2026,10,14,9,0,e)).toISOString(),b=e=>({id:"frun_1a2b",kind:"flow_run",label:"Resolver flow",status:"completed",startedAt:N(0),durationMs:18e3,ref:"nexus://chat/flow_run/frun_1a2b",parentId:null,record:{run_id:"frun_1a2b",workflow_uri:"nexus://chat/flow/flw_resolver",status:"completed",...e?{billing:e}:{}}}),v=e=>g(m.jsx(S,{node:{record:e,depth:0,children:[]},locale:"en",payloads:{state:"off"},onLoadPayloads:()=>{}})),u=e=>{const r=x({billing:e});return r||n("the fixture is the contract's shape"),g(m.jsx(R,{billing:r}))},t=e=>e.textContent??"",a={name:"Executions detail · no billing block (an older run) — no group drawn",render:()=>v(b()),play:async({canvasElement:e})=>{e.querySelector('[data-testid="span-billing"]')&&n("a run without `billing` draws no billing group — never an empty one"),e.querySelector('[data-testid="span-record"]')||n("the record is still there")}},s={name:"Executions detail · authorized (contracts 1.170.0 `run.billing`)",render:()=>v(b(f)),play:async({canvasElement:e})=>{const r=e.querySelector('[data-testid="span-billing"]');r||n("a run with `billing` gets its group before the record");const p=t(r);for(const h of["Authorized for","Verdict","Price book","Checkpoints"])p.includes(h)||n(`the group names ${h}`);p.includes("12.50")||n("the ceiling is the Decimal string drawn with two decimals (12.500000 → 12.50, S2 F12)"),p.includes("PB-v1")||n("the price book version is named")}},i={name:"Run billing · authorized (enforcing, 3 checkpoints)",render:()=>u(f),play:async({canvasElement:e})=>{t(e.querySelector('[data-testid="run-billing-verdict"]'))!=="Authorized"&&n("the verdict is the word Authorized"),t(e.querySelector('[data-testid="run-billing-checkpoints"]')).includes("3 passed")||n("checkpoints are a count, not money"),e.querySelector('[data-testid="run-billing-reservation"]')||n("the hold is named beside the ceiling")}},o={name:"Run billing · reduced (authorized for less than asked — )",render:()=>u(y),play:async({canvasElement:e})=>{t(e.querySelector('[data-testid="run-billing-verdict"]')).includes("less than asked")||n("a reduced verdict says so in words"),t(e.querySelector('[data-testid="run-billing-max"]')).includes("4.00")||n("the lower ceiling is drawn")}},d={name:"Run billing · denied under observe mode ( — recorded, the run went on)",render:()=>u(w),play:async({canvasElement:e})=>{const r=t(e.querySelector('[data-testid="run-billing-verdict"]'));r.includes("the run went on")||n("an unenforced denial says the run went on (), never that it was stopped"),r.includes("stopped")&&n("observe mode never claims a stop"),t(e.querySelector('[data-testid="run-billing-max"]')).includes("No ceiling")||n("no reservation → no ceiling, said in words"),t(e).includes("enforce")&&n("no mechanism word in the copy")}},l={name:"Run billing · a verdict this client does not know (drawn as not decided)",render:()=>u(E),play:async({canvasElement:e})=>{t(e.querySelector('[data-testid="run-billing-verdict"]'))!=="Not decided"&&n("an unknown verdict word is drawn as Not decided — never dropped, never invented")}},c={...i,name:"Run billing · українською",globals:{locale:"uk"},play:void 0},Z=["Absent","OnDetailAuthorized","Authorized","Reduced","DeniedObserved","Unknown","Ukrainian"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Executions detail · no billing block (an older run) — no group drawn",
  render: () => detail(run()),
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="span-billing"]')) fails("a run without \`billing\` draws no billing group — never an empty one");
    if (!canvasElement.querySelector('[data-testid="span-record"]')) fails("the record is still there");
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Executions detail · authorized (contracts 1.170.0 \`run.billing\`)",
  render: () => detail(run(RUN_BILLING_AUTHORIZED)),
  play: async ({
    canvasElement
  }) => {
    const group = canvasElement.querySelector<HTMLElement>('[data-testid="span-billing"]');
    if (!group) fails("a run with \`billing\` gets its group before the record");
    const t = text(group!);
    for (const label of ["Authorized for", "Verdict", "Price book", "Checkpoints"]) if (!t.includes(label)) fails(\`the group names \${label}\`);
    if (!t.includes("12.50")) fails("the ceiling is the Decimal string drawn with two decimals (12.500000 → 12.50, S2 F12)");
    if (!t.includes("PB-v1")) fails("the price book version is named");
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Run billing · authorized (enforcing, 3 checkpoints)",
  render: () => facts(RUN_BILLING_AUTHORIZED),
  play: async ({
    canvasElement
  }) => {
    if (text(canvasElement.querySelector<HTMLElement>('[data-testid="run-billing-verdict"]')!) !== "Authorized") fails("the verdict is the word Authorized");
    if (!text(canvasElement.querySelector<HTMLElement>('[data-testid="run-billing-checkpoints"]')!).includes("3 passed")) fails("checkpoints are a count, not money");
    if (!canvasElement.querySelector('[data-testid="run-billing-reservation"]')) fails("the hold is named beside the ceiling");
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Run billing · reduced (authorized for less than asked — )",
  render: () => facts(RUN_BILLING_REDUCED),
  play: async ({
    canvasElement
  }) => {
    if (!text(canvasElement.querySelector<HTMLElement>('[data-testid="run-billing-verdict"]')!).includes("less than asked")) fails("a reduced verdict says so in words");
    if (!text(canvasElement.querySelector<HTMLElement>('[data-testid="run-billing-max"]')!).includes("4.00")) fails("the lower ceiling is drawn");
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Run billing · denied under observe mode ( — recorded, the run went on)",
  render: () => facts(RUN_BILLING_DENIED_OBSERVED),
  play: async ({
    canvasElement
  }) => {
    const verdict = text(canvasElement.querySelector<HTMLElement>('[data-testid="run-billing-verdict"]')!);
    if (!verdict.includes("the run went on")) fails("an unenforced denial says the run went on (), never that it was stopped");
    if (verdict.includes("stopped")) fails("observe mode never claims a stop");
    if (!text(canvasElement.querySelector<HTMLElement>('[data-testid="run-billing-max"]')!).includes("No ceiling")) fails("no reservation → no ceiling, said in words");
    if (text(canvasElement).includes("enforce")) fails("no mechanism word in the copy");
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Run billing · a verdict this client does not know (drawn as not decided)",
  render: () => facts(RUN_BILLING_UNKNOWN),
  play: async ({
    canvasElement
  }) => {
    if (text(canvasElement.querySelector<HTMLElement>('[data-testid="run-billing-verdict"]')!) !== "Not decided") fails("an unknown verdict word is drawn as Not decided — never dropped, never invented");
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...Authorized,
  name: "Run billing · українською",
  globals: {
    locale: "uk"
  },
  play: undefined
}`,...c.parameters?.docs?.source}}};export{a as Absent,i as Authorized,d as DeniedObserved,s as OnDetailAuthorized,o as Reduced,c as Ukrainian,l as Unknown,Z as __namedExportsOrder,W as default};
