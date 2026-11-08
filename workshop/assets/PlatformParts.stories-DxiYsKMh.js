import{j as t}from"./iframe-C_4ax-Jm.js";/* empty css                */import{e as j,F as R,W as M,g as $,C as K,h as I,i as N,U as P,j as H,a as X,k as J,L as Q}from"./platform-BhtOchBX.js";import{F as W,a as T,b as O,W as L,O as Z,C as Y,M as z,U as F,L as G}from"./Parts-BEjhtEyc.js";import"./preload-helper-PPVm8Dsz.js";import"./format-DO9OmoTM.js";import"./credential-Ch26UJlM.js";import"./chatApi-DU7mAKQS.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./organizationRequests-CxMYSAGe.js";const me={title:"Apps/NexCore/Platform parts",parameters:{ds:"DS-6801",layout:"fullscreen",docs:{description:{component:" S0 (UAT-1) — the six app-local parts of Platform Operations, each at its states (DS-7005):\nDS-6801 Fleet KPI strip · DS-6802 Wallet buckets bar · DS-6803 Estimated-vs-reconciled cost card · DS-6804 Usage\ntimeline · DS-6805 Ledger table · DS-6806 Operator scope banner. Fixtures: the synthetic fleet (`fixtures/platform.ts`)."}}}},a=e=>t.jsx("div",{className:"nexus-cc-page","data-width":"wide",children:e}),s=e=>{throw new globalThis.Error(e)},c={name:"DS-6806 · Operator scope banner",parameters:{ds:"DS-6806"},render:()=>a(t.jsx(Z,{contour:"qa"}))},l={name:"DS-6801 · Fleet KPI strip",render:()=>a(t.jsx(T,{summary:j})),play:async({canvasElement:e})=>{e.querySelector('[data-testid="kpi-owed"] abbr')?.getAttribute("title")?.toLowerCase().includes("liability")||s("NXC owed must carry its definition (a liability, not revenue)");const o=e.querySelector('[data-testid="kpi-cost"]')?.textContent??"";(!o.includes("estimated")||!o.includes("reconciled"))&&s("the cost stat must name both numbers");const n=e.querySelector('[data-testid="kpi-incidents"]')?.textContent??"";(!n.includes("1")||!n.includes("3"))&&s("the incidents stat names the open count and the organizations affected")}},i={name:"DS-6801 · incidents withheld (no platform.support.read)",render:()=>a(t.jsx(T,{summary:{...j,support:null}})),play:async({canvasElement:e})=>{const r=e.querySelector('[data-testid="kpi-incidents"]')?.textContent??"";(!r.includes("—")||!/not yet|ще ні/.test(r))&&s("a withheld incidents stat says not yet, never zero")}},d={name:"DS-6801 · empty contour (only the provider)",render:()=>a(t.jsx(T,{summary:$}))},m={name:"DS-6801 · S1 — credits and cost not yet (never a zero)",render:()=>a(t.jsx(T,{summary:R})),play:async({canvasElement:e})=>{for(const r of["kpi-consumed","kpi-reserved","kpi-owed","kpi-cost"]){const o=e.querySelector(`[data-testid="${r}"]`)?.textContent??"";(!o.includes("—")||/\d[.,]\d/.test(o))&&s(`${r} must show *not yet*, not an amount, when the contour does not meter it ()`)}}},p={name:"DS-6801 · sources and freshness (ok · unavailable · not yet)",render:()=>a(t.jsx(O,{sources:R.sources??[]})),play:async({canvasElement:e})=>{e.querySelector('[data-testid="fleet-sources"]')||s("the sources list renders when the server names its sources")}},u={name:"DS-6801 · sources · none named (renders nothing)",render:()=>a(t.jsx(O,{sources:[]}))},S={name:"DS-6801 · alerts",render:()=>a(t.jsx(W,{alerts:j.alerts}))},h={name:"DS-6801 · alerts · from a text_key with params",render:()=>a(t.jsx(W,{alerts:R.alerts}))},y={name:"DS-6801 · nothing needs attention",render:()=>a(t.jsx(W,{alerts:[]}))},f={name:"DS-6802 · Wallet · trial at 20 % with an expiring promo lot (ACME)",parameters:{ds:"DS-6802"},render:()=>a(t.jsx(L,{wallet:M.org_acme})),play:async({canvasElement:e})=>{e.querySelector('[data-bucket="promo"]')?.querySelector("small")||s("an expiring promo lot must say when it expires"),e.querySelector('[data-testid="wallet-reserved"]')||s("available and reserved are two numbers")}},x={name:"DS-6802 · Wallet · prepaid with an adjustment (Boreas)",parameters:{ds:"DS-6802"},render:()=>a(t.jsx(L,{wallet:M.org_boreas}))},g={name:"DS-6802 · Wallet · contract commitment (Halych)",parameters:{ds:"DS-6802"},render:()=>a(t.jsx(L,{wallet:M.org_halych}))},b={name:"DS-6802 · Wallet · fresh promo only (Lviv Coffee)",parameters:{ds:"DS-6802"},render:()=>a(t.jsx(L,{wallet:M.org_lviv_coffee}))},w={name:"DS-6803 · Cost · estimated and reconciled",parameters:{ds:"DS-6803"},render:()=>a(t.jsx(Y,{cost:K})),play:async({canvasElement:e})=>{e.querySelector('[data-testid="cost-export"]')?.textContent?.length||s("the card must say when the export last landed")}},E={name:"DS-6803 · Cost · the export is late (stale)",parameters:{ds:"DS-6803"},render:()=>a(t.jsx(Y,{cost:I})),play:async({canvasElement:e})=>{e.querySelector('[data-testid="cost-card"]')?.getAttribute("data-state")!=="stale"&&s("a missing reconciled number with a known export is the stale state"),e.querySelector('[data-testid="cost-reconciled"]')?.textContent?.includes("—")||s("the reconciled number must be shown as absent, never derived from the estimate")}},v={name:"DS-6803 · Cost · customer-operated infrastructure (BYOC)",parameters:{ds:"DS-6803"},render:()=>a(t.jsx(Y,{cost:N})),play:async({canvasElement:e})=>{e.querySelector('[data-testid="cost-estimated"]')&&s("a BYOC organization carries no NEXUS cost estimate")}},D={name:"DS-6803 · the five money numbers",parameters:{ds:"DS-6803"},render:()=>a(t.jsx(z,{cost:K}))},C={name:"DS-6803 · the five money numbers · BYOC",parameters:{ds:"DS-6803"},render:()=>a(t.jsx(z,{cost:N}))},A={name:"DS-6804 · Usage timeline · the widened vocabulary ()",parameters:{ds:"DS-6804"},render:()=>a(t.jsx(F,{rows:P,showSource:!0})),play:async({canvasElement:e})=>{const r=e.textContent??"";for(const n of["graph.pages_uploaded","graph.pages_processed","web.search_request","bi.query","execution.agent_ms"])r.includes(n)||s(`the owner's counted activities must be listed — missing ${n}`);r.includes("counted, not priced")||s("an unpriced code must say it is counted and not priced"),r.includes("VibeBan automation")||s("a VibeBan automation's agent time must be distinguishable by surface");const o=e.querySelectorAll('[data-testid^="spark-"]');o.length||s("the metered rows draw a sparkline");for(const n of o){n.getAttribute("aria-hidden")!=="true"&&s("a sparkline is decorative — aria-hidden");const V=n.parentElement?.querySelector(".nexus-sr-only")?.textContent??"";/lowest .+ highest .+ last/.test(V)||s("every sparkline carries the series' text alternative (lowest · highest · last)")}}},B={name:"DS-6804 · Usage timeline · as a table (a11y alternative)",parameters:{ds:"DS-6804"},render:()=>a(t.jsx(F,{rows:P})),play:async({canvasElement:e})=>{const r=e.querySelector(".nexus-cc-platform-toggle input");if(!r)return s("the toggle is a checkbox — reachable by keyboard");r.closest("label")?.textContent?.trim()||s("the toggle is named by its label"),r.click(),await new Promise(n=>setTimeout(n,0)),e.querySelector('[data-testid^="spark-"]')&&s("the table alternative hides the sparklines");const o=e.querySelectorAll('[data-testid^="trend-"]');o.length||s("the plain table keeps the trend column as text");for(const n of o)n.querySelector(".nexus-sr-only")&&s("in the plain table the series' numbers are visible, not screen-reader-only"),/lowest .+ highest .+ last/.test(n.textContent??"")||s("the plain table names the series' lowest · highest · last")}},k={name:"DS-6804 · Usage timeline · a source did not answer (rows stay, numbers do not)",parameters:{ds:"DS-6804"},render:()=>a(t.jsxs(t.Fragment,{children:[t.jsx(F,{rows:H,showSource:!0}),t.jsx(O,{sources:X,testId:"usage-sources"})]})),play:async({canvasElement:e})=>{const r=e.querySelectorAll('[data-testid^="unavailable-"]');r.length||s("a row whose source is down carries the *source unavailable* chip, never a zero ()"),r[0].closest("tr")?.querySelector('[data-testid^="spark-"]')&&s("no sparkline is drawn for a row without numbers")}},_={name:"DS-6804 · Usage timeline · empty",parameters:{ds:"DS-6804"},render:()=>a(t.jsx(F,{rows:J}))},q={name:"DS-6805 · Ledger · with a compensating pair",parameters:{ds:"DS-6805"},render:()=>a(t.jsx(G,{entries:Q})),play:async({canvasElement:e})=>{const r=e.querySelectorAll(".nexus-cc-platform-compensates");r.length<2&&s("a reversal and its adjustment must both name the row they compensate");for(const o of r){const n=o.getAttribute("href")?.replace(/^#/,"")??"";(!n||!e.querySelector(`[id="${n}"]`)?.closest("tr"))&&s(`the compensates link #${n} must land on a row of the ledger`)}}},U={name:"DS-6805 · Ledger · empty",parameters:{ds:"DS-6805"},render:()=>a(t.jsx(G,{entries:[]}))},pe=["Banner","KpiStrip","KpiStripNoSupportRead","KpiStripEmptyContour","KpiStripNotYet","Sources","SourcesNone","Alerts","AlertsFromServer","AlertsEmpty","WalletTrialLow","WalletPaid","WalletCommit","WalletFresh","CostReconciled","CostStale","CostCustomerCloud","MoneyFiveNumbers","MoneyFiveCustomer","Usage","UsageAsTable","UsageSourceUnavailable","UsageEmpty","Ledger","LedgerEmpty"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "DS-6806 · Operator scope banner",
  parameters: {
    ds: "DS-6806"
  },
  render: () => pad(<OperatorScopeBanner contour="qa" />)
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "DS-6801 · Fleet KPI strip",
  render: () => pad(<FleetKpiStrip summary={FLEET_SUMMARY} />),
  play: async ({
    canvasElement
  }) => {
    const owed = canvasElement.querySelector('[data-testid="kpi-owed"] abbr');
    if (!owed?.getAttribute("title")?.toLowerCase().includes("liability")) fails("NXC owed must carry its definition (a liability, not revenue)");
    const cost = canvasElement.querySelector('[data-testid="kpi-cost"]')?.textContent ?? "";
    if (!cost.includes("estimated") || !cost.includes("reconciled")) fails("the cost stat must name both numbers");
    //  S3 (): the incidents stat — open incidents and the organizations they touch
    const incidents = canvasElement.querySelector('[data-testid="kpi-incidents"]')?.textContent ?? "";
    if (!incidents.includes("1") || !incidents.includes("3")) fails("the incidents stat names the open count and the organizations affected");
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "DS-6801 · incidents withheld (no platform.support.read)",
  render: () => pad(<FleetKpiStrip summary={{
    ...FLEET_SUMMARY,
    support: null
  }} />),
  play: async ({
    canvasElement
  }) => {
    const incidents = canvasElement.querySelector('[data-testid="kpi-incidents"]')?.textContent ?? "";
    if (!incidents.includes("—") || !/not yet|ще ні/.test(incidents)) fails("a withheld incidents stat says not yet, never zero");
  }
}`,...i.parameters?.docs?.source},description:{story:" S3 (): a reader without `platform.support.read` sees *not yet* on the incidents stat — never a zero it did not read.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "DS-6801 · empty contour (only the provider)",
  render: () => pad(<FleetKpiStrip summary={FLEET_SUMMARY_EMPTY} />)
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "DS-6801 · S1 — credits and cost not yet (never a zero)",
  render: () => pad(<FleetKpiStrip summary={FLEET_SUMMARY_S1} />),
  play: async ({
    canvasElement
  }) => {
    for (const id of ["kpi-consumed", "kpi-reserved", "kpi-owed", "kpi-cost"]) {
      const text = canvasElement.querySelector(\`[data-testid="\${id}"]\`)?.textContent ?? "";
      // the label may carry "30 days"; the value may not carry an amount (an NXC or USD figure has a decimal point)
      if (!text.includes("—") || /\\d[.,]\\d/.test(text)) fails(\`\${id} must show *not yet*, not an amount, when the contour does not meter it ()\`);
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "DS-6801 · sources and freshness (ok · unavailable · not yet)",
  render: () => pad(<FleetSources sources={FLEET_SUMMARY_S1.sources ?? []} />),
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="fleet-sources"]')) fails("the sources list renders when the server names its sources");
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "DS-6801 · sources · none named (renders nothing)",
  render: () => pad(<FleetSources sources={[]} />)
}`,...u.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "DS-6801 · alerts",
  render: () => pad(<FleetAlerts alerts={FLEET_SUMMARY.alerts} />)
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "DS-6801 · alerts · from a text_key with params",
  render: () => pad(<FleetAlerts alerts={FLEET_SUMMARY_S1.alerts} />)
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "DS-6801 · nothing needs attention",
  render: () => pad(<FleetAlerts alerts={[]} />)
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "DS-6802 · Wallet · trial at 20 % with an expiring promo lot (ACME)",
  parameters: {
    ds: "DS-6802"
  },
  render: () => pad(<WalletBucketsBar wallet={WALLETS.org_acme} />),
  play: async ({
    canvasElement
  }) => {
    const promo = canvasElement.querySelector('[data-bucket="promo"]');
    if (!promo?.querySelector("small")) fails("an expiring promo lot must say when it expires");
    if (!canvasElement.querySelector('[data-testid="wallet-reserved"]')) fails("available and reserved are two numbers");
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "DS-6802 · Wallet · prepaid with an adjustment (Boreas)",
  parameters: {
    ds: "DS-6802"
  },
  render: () => pad(<WalletBucketsBar wallet={WALLETS.org_boreas} />)
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "DS-6802 · Wallet · contract commitment (Halych)",
  parameters: {
    ds: "DS-6802"
  },
  render: () => pad(<WalletBucketsBar wallet={WALLETS.org_halych} />)
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "DS-6802 · Wallet · fresh promo only (Lviv Coffee)",
  parameters: {
    ds: "DS-6802"
  },
  render: () => pad(<WalletBucketsBar wallet={WALLETS.org_lviv_coffee} />)
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "DS-6803 · Cost · estimated and reconciled",
  parameters: {
    ds: "DS-6803"
  },
  render: () => pad(<CostCard cost={COST_ACME} />),
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="cost-export"]')?.textContent?.length) fails("the card must say when the export last landed");
  }
}`,...w.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "DS-6803 · Cost · the export is late (stale)",
  parameters: {
    ds: "DS-6803"
  },
  render: () => pad(<CostCard cost={COST_ACME_STALE} />),
  play: async ({
    canvasElement
  }) => {
    const card = canvasElement.querySelector('[data-testid="cost-card"]');
    if (card?.getAttribute("data-state") !== "stale") fails("a missing reconciled number with a known export is the stale state");
    if (!canvasElement.querySelector('[data-testid="cost-reconciled"]')?.textContent?.includes("—")) fails("the reconciled number must be shown as absent, never derived from the estimate");
  }
}`,...E.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "DS-6803 · Cost · customer-operated infrastructure (BYOC)",
  parameters: {
    ds: "DS-6803"
  },
  render: () => pad(<CostCard cost={COST_VERKHOVYNA} />),
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="cost-estimated"]')) fails("a BYOC organization carries no NEXUS cost estimate");
  }
}`,...v.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "DS-6803 · the five money numbers",
  parameters: {
    ds: "DS-6803"
  },
  render: () => pad(<MoneyFive cost={COST_ACME} />)
}`,...D.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "DS-6803 · the five money numbers · BYOC",
  parameters: {
    ds: "DS-6803"
  },
  render: () => pad(<MoneyFive cost={COST_VERKHOVYNA} />)
}`,...C.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "DS-6804 · Usage timeline · the widened vocabulary ()",
  parameters: {
    ds: "DS-6804"
  },
  render: () => pad(<UsageTimeline rows={USAGE_ACME} showSource />),
  play: async ({
    canvasElement
  }) => {
    const text = canvasElement.textContent ?? "";
    for (const code of ["graph.pages_uploaded", "graph.pages_processed", "web.search_request", "bi.query", "execution.agent_ms"]) {
      if (!text.includes(code)) fails(\`the owner's counted activities must be listed — missing \${code}\`);
    }
    if (!text.includes("counted, not priced")) fails("an unpriced code must say it is counted and not priced");
    if (!text.includes("VibeBan automation")) fails("a VibeBan automation's agent time must be distinguishable by surface");
    // A11Y-3801: the sparkline is decorative (DS-3050, \`aria-hidden\`); the series' numbers stand beside it for a reader
    const sparks = canvasElement.querySelectorAll('[data-testid^="spark-"]');
    if (!sparks.length) fails("the metered rows draw a sparkline");
    for (const s of sparks) {
      if (s.getAttribute("aria-hidden") !== "true") fails("a sparkline is decorative — aria-hidden");
      const summary = s.parentElement?.querySelector(".nexus-sr-only")?.textContent ?? "";
      if (!/lowest .+ highest .+ last/.test(summary)) fails("every sparkline carries the series' text alternative (lowest · highest · last)");
    }
  }
}`,...A.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "DS-6804 · Usage timeline · as a table (a11y alternative)",
  parameters: {
    ds: "DS-6804"
  },
  render: () => pad(<UsageTimeline rows={USAGE_ACME} />),
  play: async ({
    canvasElement
  }) => {
    const box = canvasElement.querySelector<HTMLInputElement>('.nexus-cc-platform-toggle input');
    if (!box) return fails("the toggle is a checkbox — reachable by keyboard");
    if (!box.closest("label")?.textContent?.trim()) fails("the toggle is named by its label");
    box.click();
    await new Promise(r => setTimeout(r, 0));
    if (canvasElement.querySelector('[data-testid^="spark-"]')) fails("the table alternative hides the sparklines");
    const trends = canvasElement.querySelectorAll('[data-testid^="trend-"]');
    if (!trends.length) fails("the plain table keeps the trend column as text");
    for (const cell of trends) {
      if (cell.querySelector(".nexus-sr-only")) fails("in the plain table the series' numbers are visible, not screen-reader-only");
      if (!/lowest .+ highest .+ last/.test(cell.textContent ?? "")) fails("the plain table names the series' lowest · highest · last");
    }
  }
}`,...B.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "DS-6804 · Usage timeline · a source did not answer (rows stay, numbers do not)",
  parameters: {
    ds: "DS-6804"
  },
  render: () => pad(<><UsageTimeline rows={USAGE_ACME_PARTIAL} showSource /><FleetSources sources={USAGE_SOURCES_ACME} testId="usage-sources" /></>),
  play: async ({
    canvasElement
  }) => {
    const chips = canvasElement.querySelectorAll('[data-testid^="unavailable-"]');
    if (!chips.length) fails("a row whose source is down carries the *source unavailable* chip, never a zero ()");
    const row = chips[0].closest("tr");
    if (row?.querySelector('[data-testid^="spark-"]')) fails("no sparkline is drawn for a row without numbers");
  }
}`,...k.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "DS-6804 · Usage timeline · empty",
  parameters: {
    ds: "DS-6804"
  },
  render: () => pad(<UsageTimeline rows={USAGE_EMPTY} />)
}`,..._.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "DS-6805 · Ledger · with a compensating pair",
  parameters: {
    ds: "DS-6805"
  },
  render: () => pad(<LedgerTable entries={LEDGER_ACME} />),
  play: async ({
    canvasElement
  }) => {
    const links = canvasElement.querySelectorAll<HTMLAnchorElement>(".nexus-cc-platform-compensates");
    if (links.length < 2) fails("a reversal and its adjustment must both name the row they compensate");
    // A11Y-3801: the link is a real in-page target — Enter lands on the compensated row, never on nothing
    for (const a of links) {
      const id = a.getAttribute("href")?.replace(/^#/, "") ?? "";
      if (!id || !canvasElement.querySelector(\`[id="\${id}"]\`)?.closest("tr")) fails(\`the compensates link #\${id} must land on a row of the ledger\`);
    }
  }
}`,...q.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "DS-6805 · Ledger · empty",
  parameters: {
    ds: "DS-6805"
  },
  render: () => pad(<LedgerTable entries={[]} />)
}`,...U.parameters?.docs?.source}}};export{S as Alerts,y as AlertsEmpty,h as AlertsFromServer,c as Banner,v as CostCustomerCloud,w as CostReconciled,E as CostStale,l as KpiStrip,d as KpiStripEmptyContour,i as KpiStripNoSupportRead,m as KpiStripNotYet,q as Ledger,U as LedgerEmpty,C as MoneyFiveCustomer,D as MoneyFiveNumbers,p as Sources,u as SourcesNone,A as Usage,B as UsageAsTable,_ as UsageEmpty,k as UsageSourceUnavailable,g as WalletCommit,b as WalletFresh,x as WalletPaid,f as WalletTrialLow,pe as __namedExportsOrder,me as default};
