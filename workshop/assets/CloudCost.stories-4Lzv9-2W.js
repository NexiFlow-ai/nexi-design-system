import{j as a,r as P}from"./iframe-C_4ax-Jm.js";/* empty css                */import{C as B,a as L,b as G,c as I,O as k,d as X,e as Y,f as V,g as F,h as H,i as W}from"./cost-GbfRQYcg.js";import{f as D,W as j,C as $,L as K,U as Q}from"./platform-BhtOchBX.js";import{P as s}from"./Screens-ByteWJU4.js";import{C as i,a as J}from"./CloudCost-DmWiTZUf.js";import"./preload-helper-PPVm8Dsz.js";import"./Parts-BEjhtEyc.js";import"./format-DO9OmoTM.js";import"./credential-Ch26UJlM.js";import"./chatApi-DU7mAKQS.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./organizationRequests-CxMYSAGe.js";import"./BillingParts-8YmDY42z.js";import"./BillingCredits-CRKJXhpF.js";const ye={title:"Apps/NexCore/Platform Operations/Cloud & Reliability",parameters:{ds:"DS-6803",layout:"fullscreen",workbench:{ns:"core",path:"/core/platform/cloud?as=owner"},docs:{description:{component:` S4 — Platform Operations › **Cloud & Reliability** and Organization › **Cost** (S4-ARCHITECTURE §5,
 · ): the contour strip (estimated vs reconciled per day, the budget line, the lag badge *export through
<date>*), the variance issue card (one per contour and day), the bindings table; the organization's five numbers
with the daily rows and their *drivers and buckets* expander, the *customer-hosted* face, the estimated-only face
until the first reconciled day — at every rung of the ladder (DS-7006), en and uk. UAT-3 compares the running
screens to these.`}}}},r=e=>({state:"ready",data:e}),U=()=>{},n=e=>{throw new globalThis.Error(e)},t=(e,o)=>e.querySelector(`[data-testid="${o}"]`),l={name:"Cloud & Reliability · two contours (one reconciled, one estimated only)",render:()=>a.jsx(i,{result:r(B)}),play:async({canvasElement:e})=>{t(e,"export-through-laptop")?.textContent?.includes("2026")!==!0&&n("the lag badge names the day the export covers"),t(e,"strip-laptop")||n("the contour strip"),e.querySelectorAll('[data-testid^="issue-ref-"]').length!==1&&n("exactly one variance issue"),t(e,"variance-2026-11-10")?.getAttribute("data-tone")?.includes("warn")||n("the day over the threshold is a warning"),t(e,"pending-2026-11-12")||n("the day the export does not cover yet says so"),e.querySelectorAll('[data-testid="bindings-laptop"] tbody tr').length!==2&&n("the two bindings of laptop"),t(e,"export-through-qa")?.textContent?.length||n("the qa contour's badge"),t(e,"issues-none-qa")||n("no issue on qa")}},C={...l,name:"Cloud & Reliability · українською",globals:{locale:"uk"}},g={name:"Cloud & Reliability · the export has not landed (estimated only)",render:()=>a.jsx(i,{result:r({...B,contours:[G]})})},y={name:"Cloud & Reliability · empty (no contour bound)",render:()=>a.jsx(i,{result:r(I)}),play:async({canvasElement:e})=>{t(e,"cloud-no-binding")||n("the empty face")}},f={render:()=>a.jsx(i,{result:{state:"loading"}})},h={render:()=>a.jsx(i,{result:{state:"error",retry:U}})},x={render:()=>a.jsx(i,{result:{state:"offline",retry:U}})},O={name:"Cloud & Reliability · not for you (a tenant Owner's or an sre_operator's URL)",render:()=>a.jsx(i,{result:{state:"denied"}})},c=e=>({org:D("org_acme"),wallet:j.org_acme,usage:Q,ledger:K,cost:$,costDetail:e}),d={name:"Organization · ACME · Cost (two days reconciled, one estimated)",render:()=>a.jsx(s,{result:r(c(k)),initialTab:"cost"}),play:async({canvasElement:e})=>{const o=t(e,"cost-five");(!o||o.querySelectorAll(".nexus-cc-stat").length!==5)&&n("five separate numbers ()"),e.querySelectorAll('[data-testid="cost-days"] tbody tr').length!==3&&n("three daily rows");const N=t(e,"expander-2026-11-10");N||n("the drivers and buckets expander"),N.open=!0,N.textContent?.includes("model.managed")||n("the drivers are disclosed ()"),t(e,"pending-2026-11-12")||n("the estimated-only day says so")}},E={...d,name:"Organization · ACME · Cost · українською",globals:{locale:"uk"}},b={name:"Organization · ACME · Cost (every day reconciled — the margin from the reconciled cost)",render:()=>a.jsx(s,{result:r(c(X)),initialTab:"cost"})},S={name:"Organization · ACME · Cost (first day — the export has not landed)",render:()=>a.jsx(s,{result:r(c(Y)),initialTab:"cost"}),play:async({canvasElement:e})=>{t(e,"cost-estimated-only")||n("the estimated-only line")}},v={name:"Organization · Boreas · Cost (dedicated project — the lines 1:1)",render:()=>a.jsx(s,{result:r({...c(V),org:D("org_boreas"),wallet:j.org_boreas??null}),initialTab:"cost"})},A={name:"Organization · Verkhovyna Agro · Cost (customer-hosted — no NEXUS cost)",render:()=>a.jsx(s,{result:r({org:D("org_verkhovyna"),wallet:null,usage:[],ledger:[],cost:null,costDetail:F}),initialTab:"cost"}),play:async({canvasElement:e})=>{t(e,"cost-customer")||n("the customer-hosted face"),t(e,"cost-five")&&n("no numbers invented for a customer's infrastructure ()")}},R={name:"Organization · ACME · Cost (billing-api did not answer)",render:()=>a.jsx(s,{result:r({...c(void 0),cost:null,errors:{cost:"error"}}),initialTab:"cost",retry:U})},T={name:"Organization · ACME · Cost (offline)",render:()=>a.jsx(s,{result:r({...c(void 0),cost:null,errors:{cost:"offline"}}),initialTab:"cost",retry:U})},u={name:"Cloud & Reliability · two contours in two currencies (USD · EUR) — every money names its currency",render:()=>a.jsx(i,{result:r(H)}),play:async({canvasElement:e})=>{(!t(e,"currency-laptop")||!t(e,"currency-eu-west"))&&n("each contour names its currency"),t(e,"currency-laptop")?.textContent===t(e,"currency-eu-west")?.textContent&&n("USD and EUR are told apart");const o=e.textContent??"";(!/€|EUR/.test(o)||!/\$|USD/.test(o))&&n("money is formatted in its own currency, never blended")}},_={...u,name:"Cloud & Reliability · two currencies · українською",globals:{locale:"uk"}},m={name:"Cloud & Reliability · shown as NXC equivalent (the door's number; absent where the door gave none)",render:()=>a.jsx(i,{result:r(B),initialMode:"nxc"}),play:async({canvasElement:e})=>{t(e,"cost-view")||n("the toggle is on the toolbar");const o=t(e,"estimated-laptop")?.textContent??"";o.includes(L.nxcEquivalent.estimated.replace(/\.\d+$/,""))||n("the figure is the door's `nxc_equivalent`, never a division in the client"),/NXC/.test(o)||n("the NXC word names the unit"),(t(e,"estimated-qa")?.textContent??"").includes("€")&&n("in NXC mode no money is shown"),(t(e,"estimated-qa")?.textContent??"").includes("—")||n("a contour the door gave no equivalent for is a dash with the note — nothing invented")}},q={...m,name:"Cloud & Reliability · NXC equivalent · українською",globals:{locale:"uk"}},p={name:"Organization · ACME · Cost — revenue in USD, cost in EUR: no margin, the mismatch named ()",render:()=>a.jsx(s,{result:r(c(W)),initialTab:"cost"}),play:async({canvasElement:e})=>{t(e,"cost-currency-mismatch")||n("the mismatch face is a line, not a number"),(t(e,"cost-margin")?.textContent??"").match(/\d+(?:[.,]\d+)?\s*%/)&&n("no margin is derived across currencies"),t(e,"cost-currency")||n("the cost's currency is a chip on the section")}},w={...p,name:"Organization · ACME · Cost — currency mismatch · українською",globals:{locale:"uk"}},M={name:"Organization · ACME · Cost shown as NXC equivalent (the door's figures)",render:()=>a.jsx(s,{result:r(c(k)),initialTab:"cost"}),play:async({canvasElement:e})=>{t(e,"org-cost-view")||n("the toggle sits on the section line")}};function Z(){const[e,o]=P.useState("money");return a.jsxs("div",{className:"nexus-cc-page","data-width":"wide",children:[a.jsx(J,{mode:e,onChange:o}),a.jsx("p",{"data-testid":"toggle-mode",children:e})]})}const z={name:"Part · CostViewToggle (money · NXC equivalent)",render:()=>a.jsx(Z,{}),play:async({canvasElement:e})=>{t(e,"cost-view")?.querySelector('[role="combobox"]')||n("one compact closed control")}},fe=["Cloud","CloudUkrainian","CloudEstimatedOnly","CloudNoBinding","CloudLoading","CloudError","CloudOffline","CloudNotForYou","OrganizationCost","OrganizationCostUkrainian","OrganizationCostReconciled","OrganizationCostEstimatedOnly","OrganizationCostDedicated","OrganizationCostCustomer","OrganizationCostUnavailable","OrganizationCostOffline","CloudTwoCurrencies","CloudTwoCurrenciesUkrainian","CloudNxcEquivalent","CloudNxcEquivalentUkrainian","OrganizationCostCurrencyMismatch","OrganizationCostCurrencyMismatchUkrainian","OrganizationCostNxcEquivalent","PartCostViewToggle"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Cloud & Reliability · two contours (one reconciled, one estimated only)",
  render: () => <CloudReliabilityScreen result={ready(COST_SUMMARY)} />,
  play: async ({
    canvasElement
  }) => {
    // the lag badge, the strip, exactly one issue (day 10 at +19.6 %), the bindings — and the qa contour saying *no export read yet*
    if (q(canvasElement, "export-through-laptop")?.textContent?.includes("2026") !== true) fails("the lag badge names the day the export covers");
    if (!q(canvasElement, "strip-laptop")) fails("the contour strip");
    if (canvasElement.querySelectorAll('[data-testid^="issue-ref-"]').length !== 1) fails("exactly one variance issue");
    if (!q(canvasElement, "variance-2026-11-10")?.getAttribute("data-tone")?.includes("warn")) fails("the day over the threshold is a warning");
    if (!q(canvasElement, "pending-2026-11-12")) fails("the day the export does not cover yet says so");
    if (canvasElement.querySelectorAll('[data-testid="bindings-laptop"] tbody tr').length !== 2) fails("the two bindings of laptop");
    if (!q(canvasElement, "export-through-qa")?.textContent?.length) fails("the qa contour's badge");
    if (!q(canvasElement, "issues-none-qa")) fails("no issue on qa");
  }
}`,...l.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...Cloud,
  name: "Cloud & Reliability · українською",
  globals: {
    locale: "uk"
  }
}`,...C.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Cloud & Reliability · the export has not landed (estimated only)",
  render: () => <CloudReliabilityScreen result={ready({
    ...COST_SUMMARY,
    contours: [CONTOUR_QA_ESTIMATED_ONLY]
  })} />
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Cloud & Reliability · empty (no contour bound)",
  render: () => <CloudReliabilityScreen result={ready(COST_SUMMARY_NO_BINDING)} />,
  play: async ({
    canvasElement
  }) => {
    if (!q(canvasElement, "cloud-no-binding")) fails("the empty face");
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <CloudReliabilityScreen result={{
    state: "loading"
  }} />
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <CloudReliabilityScreen result={{
    state: "error",
    retry
  }} />
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <CloudReliabilityScreen result={{
    state: "offline",
    retry
  }} />
}`,...x.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Cloud & Reliability · not for you (a tenant Owner's or an sre_operator's URL)",
  render: () => <CloudReliabilityScreen result={{
    state: "denied"
  }} />
}`,...O.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Organization · ACME · Cost (two days reconciled, one estimated)",
  render: () => <PlatformOrganizationScreen result={ready(acme(ORG_COST_ACME))} initialTab="cost" />,
  play: async ({
    canvasElement
  }) => {
    const five = q(canvasElement, "cost-five");
    if (!five || five.querySelectorAll(".nexus-cc-stat").length !== 5) fails("five separate numbers ()");
    if (canvasElement.querySelectorAll('[data-testid="cost-days"] tbody tr').length !== 3) fails("three daily rows");
    const expander = q(canvasElement, "expander-2026-11-10") as HTMLDetailsElement | null;
    if (!expander) fails("the drivers and buckets expander");
    expander!.open = true;
    if (!expander!.textContent?.includes("model.managed")) fails("the drivers are disclosed ()");
    if (!q(canvasElement, "pending-2026-11-12")) fails("the estimated-only day says so");
  }
}`,...d.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  ...OrganizationCost,
  name: "Organization · ACME · Cost · українською",
  globals: {
    locale: "uk"
  }
}`,...E.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Organization · ACME · Cost (every day reconciled — the margin from the reconciled cost)",
  render: () => <PlatformOrganizationScreen result={ready(acme(ORG_COST_ACME_RECONCILED))} initialTab="cost" />
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Organization · ACME · Cost (first day — the export has not landed)",
  render: () => <PlatformOrganizationScreen result={ready(acme(ORG_COST_ACME_ESTIMATED_ONLY))} initialTab="cost" />,
  play: async ({
    canvasElement
  }) => {
    if (!q(canvasElement, "cost-estimated-only")) fails("the estimated-only line");
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Organization · Boreas · Cost (dedicated project — the lines 1:1)",
  render: () => <PlatformOrganizationScreen result={ready({
    ...acme(ORG_COST_BOREAS_DEDICATED),
    org: fleetOrg("org_boreas"),
    wallet: WALLETS.org_boreas ?? null
  })} initialTab="cost" />
}`,...v.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Organization · Verkhovyna Agro · Cost (customer-hosted — no NEXUS cost)",
  render: () => <PlatformOrganizationScreen result={ready({
    org: fleetOrg("org_verkhovyna"),
    wallet: null,
    usage: [],
    ledger: [],
    cost: null,
    costDetail: ORG_COST_VERKHOVYNA_CUSTOMER
  })} initialTab="cost" />,
  play: async ({
    canvasElement
  }) => {
    if (!q(canvasElement, "cost-customer")) fails("the customer-hosted face");
    if (q(canvasElement, "cost-five")) fails("no numbers invented for a customer's infrastructure ()");
  }
}`,...A.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Organization · ACME · Cost (billing-api did not answer)",
  render: () => <PlatformOrganizationScreen result={ready({
    ...acme(undefined),
    cost: null,
    errors: {
      cost: "error"
    }
  })} initialTab="cost" retry={retry} />
}`,...R.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Organization · ACME · Cost (offline)",
  render: () => <PlatformOrganizationScreen result={ready({
    ...acme(undefined),
    cost: null,
    errors: {
      cost: "offline"
    }
  })} initialTab="cost" retry={retry} />
}`,...T.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Cloud & Reliability · two contours in two currencies (USD · EUR) — every money names its currency",
  render: () => <CloudReliabilityScreen result={ready(COST_SUMMARY_TWO_CURRENCIES)} />,
  play: async ({
    canvasElement
  }) => {
    if (!q(canvasElement, "currency-laptop") || !q(canvasElement, "currency-eu-west")) fails("each contour names its currency");
    if (q(canvasElement, "currency-laptop")?.textContent === q(canvasElement, "currency-eu-west")?.textContent) fails("USD and EUR are told apart");
    const text = canvasElement.textContent ?? "";
    if (!/€|EUR/.test(text) || !/\\$|USD/.test(text)) fails("money is formatted in its own currency, never blended");
  }
}`,...u.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...CloudTwoCurrencies,
  name: "Cloud & Reliability · two currencies · українською",
  globals: {
    locale: "uk"
  }
}`,..._.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Cloud & Reliability · shown as NXC equivalent (the door's number; absent where the door gave none)",
  render: () => <CloudReliabilityScreen result={ready(COST_SUMMARY)} initialMode="nxc" />,
  play: async ({
    canvasElement
  }) => {
    if (!q(canvasElement, "cost-view")) fails("the toggle is on the toolbar");
    const laptop = q(canvasElement, "estimated-laptop")?.textContent ?? "";
    if (!laptop.includes(CONTOUR_LAPTOP.nxcEquivalent!.estimated.replace(/\\.\\d+$/, ""))) fails("the figure is the door's \`nxc_equivalent\`, never a division in the client");
    if (!/NXC/.test(laptop)) fails("the NXC word names the unit");
    if ((q(canvasElement, "estimated-qa")?.textContent ?? "").includes("€")) fails("in NXC mode no money is shown");
    if (!(q(canvasElement, "estimated-qa")?.textContent ?? "").includes("—")) fails("a contour the door gave no equivalent for is a dash with the note — nothing invented");
  }
}`,...m.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  ...CloudNxcEquivalent,
  name: "Cloud & Reliability · NXC equivalent · українською",
  globals: {
    locale: "uk"
  }
}`,...q.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Organization · ACME · Cost — revenue in USD, cost in EUR: no margin, the mismatch named ()",
  render: () => <PlatformOrganizationScreen result={ready(acme(ORG_COST_ACME_EUR_MISMATCH))} initialTab="cost" />,
  play: async ({
    canvasElement
  }) => {
    if (!q(canvasElement, "cost-currency-mismatch")) fails("the mismatch face is a line, not a number");
    if ((q(canvasElement, "cost-margin")?.textContent ?? "").match(/\\d+(?:[.,]\\d+)?\\s*%/)) fails("no margin is derived across currencies");
    if (!q(canvasElement, "cost-currency")) fails("the cost's currency is a chip on the section");
  }
}`,...p.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...OrganizationCostCurrencyMismatch,
  name: "Organization · ACME · Cost — currency mismatch · українською",
  globals: {
    locale: "uk"
  }
}`,...w.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Organization · ACME · Cost shown as NXC equivalent (the door's figures)",
  render: () => <PlatformOrganizationScreen result={ready(acme(ORG_COST_ACME))} initialTab="cost" />,
  play: async ({
    canvasElement
  }) => {
    if (!q(canvasElement, "org-cost-view")) fails("the toggle sits on the section line");
  }
}`,...M.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Part · CostViewToggle (money · NXC equivalent)",
  render: () => <ToggleDemo />,
  play: async ({
    canvasElement
  }) => {
    if (!q(canvasElement, "cost-view")?.querySelector('[role="combobox"]')) fails("one compact closed control");
  }
}`,...z.parameters?.docs?.source}}};export{l as Cloud,h as CloudError,g as CloudEstimatedOnly,f as CloudLoading,y as CloudNoBinding,O as CloudNotForYou,m as CloudNxcEquivalent,q as CloudNxcEquivalentUkrainian,x as CloudOffline,u as CloudTwoCurrencies,_ as CloudTwoCurrenciesUkrainian,C as CloudUkrainian,d as OrganizationCost,p as OrganizationCostCurrencyMismatch,w as OrganizationCostCurrencyMismatchUkrainian,A as OrganizationCostCustomer,v as OrganizationCostDedicated,S as OrganizationCostEstimatedOnly,M as OrganizationCostNxcEquivalent,T as OrganizationCostOffline,b as OrganizationCostReconciled,E as OrganizationCostUkrainian,R as OrganizationCostUnavailable,z as PartCostViewToggle,fe as __namedExportsOrder,ye as default};
