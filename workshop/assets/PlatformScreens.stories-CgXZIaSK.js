import{j as a,ak as me,B as ge}from"./iframe-C_4ax-Jm.js";/* empty css                */import{W as l,C as fe,L as Se,U as se,O as ye,a as Oe,j as ve,f as oe,e as he,F as ze,l as Ce,h as Ee,i as be}from"./platform-BhtOchBX.js";import{O as ie}from"./Operators-B8c5w-d2.js";import{P as s,b as v,a as u}from"./Screens-ByteWJU4.js";import{B as c}from"./BillingCredits-CRKJXhpF.js";import"./preload-helper-PPVm8Dsz.js";import"./chatApi-DU7mAKQS.js";import"./credential-Ch26UJlM.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./organizationRequests-CxMYSAGe.js";import"./Parts-BEjhtEyc.js";import"./format-DO9OmoTM.js";import"./BillingParts-8YmDY42z.js";import"./CloudCost-DmWiTZUf.js";const Ve={title:"Apps/NexCore/Platform Operations",parameters:{ds:"DS-7006",layout:"fullscreen",workbench:{ns:"core",path:"/core/platform?as=owner"},docs:{description:{component:` S0 (UAT-1) — the composition screens over the synthetic fleet: Platform Operations › Overview ·
Organizations · Organization (7 tabs) and Core › Settings › Billing & credits — each at every rung of the ladder
(DS-7005), en and uk. UAT-3 compares the running screens to these.`}}}},n=e=>({state:"ready",data:e}),p=()=>{},r=e=>{throw new globalThis.Error(e)};function xe(e,t){Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value")?.set?.call(e,t),e.dispatchEvent(new Event("input",{bubbles:!0}))}async function we(e,t,h=50){for(let le=0;le<h;le++){if(e())return;await new Promise(pe=>setTimeout(pe,10))}r(t)}function de({action:e}){const{t}=me();return a.jsx(ge,{"data-testid":`org-${e}`,children:t(`core.platform.org.${e}.open`)})}const i={org:oe("org_acme"),wallet:l.org_acme,usage:se,ledger:Se,cost:fe},Ae={org:oe("org_verkhovyna"),wallet:null,usage:[],ledger:[],cost:be},m={render:()=>a.jsx(u,{result:n(he)}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="operator-scope-banner"]')||r("every operator screen carries the scope banner (DS-6806)"),e.querySelector('[data-testid="fleet-kpi-strip"]')||r("the overview opens with the fleet KPI strip")}},z={...m,name:"Overview · українською",globals:{locale:"uk"}},g={name:"Overview · S1 as it answers (credits and cost not yet; one source down)",render:()=>a.jsx(u,{result:n(ze)}),play:async({canvasElement:e})=>{const t=e.querySelector('[data-testid="kpi-consumed"]')?.textContent??"";/\b0\b|0\.0/.test(t)&&r("an unmetered number is *not yet*, never a zero ()"),e.querySelector('[data-testid="fleet-sources"]')||r("the overview names every source and its freshness"),(e.textContent??"").includes("Dnipro Labs")||r("a server alert renders through its text_key with its params")}},C={...g,name:"Overview · S1 · українською",globals:{locale:"uk"}},E={name:"Overview · first use (no provider bootstrapped)",render:()=>a.jsx(u,{result:{state:"loading"},firstUse:!0})},b={render:()=>a.jsx(u,{result:{state:"loading"}})},x={render:()=>a.jsx(u,{result:{state:"error",retry:p}})},w={render:()=>a.jsx(u,{result:{state:"offline",retry:p}})},f={render:()=>a.jsx(v,{result:n(Ce),wallets:l}),play:async({canvasElement:e})=>{const t=e.querySelectorAll("tbody tr");t.length!==7&&r(`the synthetic fleet has seven organizations, got ${t.length}`),e.querySelector('[data-testid="status-disagree"]')||r("Dnipro Labs' platform/commercial disagreement must be a badge ()")}},A={...f,name:"Organizations · українською",globals:{locale:"uk"}},B={render:()=>a.jsx(v,{result:{state:"empty"}})},M={render:()=>a.jsx(v,{result:{state:"loading"}})},k={name:"Organizations · denied (a URL without the operator scope is a 404 in the app — the view's denied rung)",render:()=>a.jsx(v,{result:{state:"denied"}})},_={render:()=>a.jsx(v,{result:{state:"offline",retry:p}})},P={name:"Organization · ACME · Overview",render:()=>a.jsx(s,{result:n(i)})},T={name:"Organization · ACME · People (counts, never the directory)",render:()=>a.jsx(s,{result:n(i),initialTab:"people"}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="people-note"]')||r("the People tab says it shows counts, not a directory ()"),/@/.test(e.querySelector('[data-testid="screen-platform-organization"]')?.textContent??"")&&r("no e-mail may appear on an operator screen")}},U={name:"Organization · ACME · Usage (by service, with sources)",render:()=>a.jsx(s,{result:n(i),initialTab:"usage"})},j={name:"Organization · ACME · NXC & Billing",render:()=>a.jsx(s,{result:n(i),initialTab:"billing"})},L={name:"Organization · ACME · Models & Connections (names and health only)",render:()=>a.jsx(s,{result:n(i),initialTab:"connections"}),play:async({canvasElement:e})=>{const t=e.textContent??"";/sk-[A-Za-z0-9]{8,}|AIza[0-9A-Za-z_-]{10,}|Bearer /.test(t)&&r("a credential leaked into the connections tab"),(!t.includes("own key")||!t.includes("managed"))&&r("credential ownership must be named (own key / managed) — the BYOM distinction")}},q={name:"Organization · ACME · Cost (reconciled)",render:()=>a.jsx(s,{result:n(i),initialTab:"cost"})},R={name:"Organization · ACME · Cost (export late)",render:()=>a.jsx(s,{result:n({...i,cost:Ee}),initialTab:"cost"})},D={name:"Organization · Verkhovyna Agro · Cost (BYOC — no NEXUS cost)",render:()=>a.jsx(s,{result:n(Ae),initialTab:"cost"})},F={name:"Organization · ACME · українською",render:()=>a.jsx(s,{result:n(i)}),globals:{locale:"uk"}},o={org:oe("org_acme"),wallet:null,usage:ve,usageSources:Oe,ledger:[],cost:null,audit:ye,errors:{}},ce={...o,org:oe("org_dnipro")},ue=async()=>{},Be=async()=>{throw new globalThis.Error("This organization is already suspended.")},N={name:"Organization · S1 · Usage (graph-api down: its rows stay, their numbers do not)",render:()=>a.jsx(s,{result:n(o),initialTab:"usage"}),play:async({canvasElement:e})=>{e.querySelector('[data-testid^="unavailable-"]')||r("a row whose source did not answer says so ()"),e.querySelector('[data-testid="usage-sources"]')||r("the usage tab names its sources")}},I={name:"Organization · S1 · Usage read failed (the organization still opens)",render:()=>a.jsx(s,{result:n({...o,usage:[],usageSources:[],errors:{usage:"error"}}),initialTab:"usage",retry:p})},Y={name:"Organization · S1 · NXC & Billing (arrives with S2)",render:()=>a.jsx(s,{result:n(o),initialTab:"billing"}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="billing-not-yet"]')||r("without a wallet the tab says *not yet*, never an empty table")}},G={name:"Organization · S1 · Cost (arrives with S4)",render:()=>a.jsx(s,{result:n(o),initialTab:"cost"}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="cost-not-yet"]')||r("without a cost export the tab says *not yet*")}},S={name:"Organization · S1 · Audit (by reference; an operator's own read is flagged)",render:()=>a.jsx(s,{result:n(o),initialTab:"audit"}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="org-audit"]')||r("the audit tab is a table of references"),e.querySelector('[data-testid^="operator-scope-"]')||r("an operator's read in the audit carries the operator-scope chip ()"),/@/.test(e.textContent??"")&&r("no e-mail on an operator screen — actors are ids")}},V={name:"Organization · S1 · Audit read offline",render:()=>a.jsx(s,{result:n({...o,audit:[],errors:{audit:"offline"}}),initialTab:"audit",retry:p})},W={...S,name:"Organization · S1 · Audit · українською",globals:{locale:"uk"}},y={name:"Organization · ACME · Suspend (provider owner, confirmation open)",render:()=>a.jsx(s,{result:n(o),actions:a.jsx(de,{action:"suspend"}),panel:a.jsx(ie,{org:o.org,action:"suspend",onConfirm:ue,onCancel:()=>{}})}),play:async({canvasElement:e})=>{const t=e.querySelector('[data-testid="org-suspend-panel"]');if(!t)return r("the suspend confirmation is an inline panel on the organization page (R4)");t.querySelector('[data-testid="reason-code"]')||r("a sensitive action asks for its reason code"),/billing, export and support|білінг, експорт і підтримка/.test(t.textContent??"")||r("the panel says billing, export and support stay reachable ()")}},H={name:"Organization · ACME · Suspend refused by the server (409 shown where it was taken)",render:()=>a.jsx(s,{result:n(o),panel:a.jsx(ie,{org:o.org,action:"suspend",onConfirm:Be,onCancel:()=>{}})}),play:async({canvasElement:e})=>{const t=e.querySelector('[data-testid="reason-code"]'),h=e.querySelector('[data-testid="reason-confirm"]');if(!t||!h)return r("the panel has a reason field and a confirm button");xe(t,"support_case_4421"),h.click(),await we(()=>!!e.querySelector('[data-testid="reason-error"]'),"the server's refusal is shown in the panel, where the action was taken")}},X={name:"Organization · Dnipro Labs · Reinstate (confirmation open)",render:()=>a.jsx(s,{result:n(ce),actions:a.jsx(de,{action:"reinstate"}),panel:a.jsx(ie,{org:ce.org,action:"reinstate",onConfirm:ue,onCancel:()=>{}})}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="org-reinstate-panel"]')||r("reinstate confirms inline, like suspend")}},K={...y,name:"Organization · Suspend · українською",globals:{locale:"uk"}},Z={render:()=>a.jsx(s,{result:{state:"loading"}})},$={name:"Organization · not found (a stranger's URL)",render:()=>a.jsx(s,{result:{state:"denied"}})},d={workbench:{ns:"core",path:"/core/settings/billing?as=owner"}},O={name:"Billing & credits · ACME owner (trial, 20 %, promo expiring)",parameters:d,render:()=>a.jsx(c,{result:n({wallet:l.org_acme,usage:se})}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="no-payment-line"]')||r("the customer page always says no payment method is stored");const t=e.textContent??"";/ledger|reservation|settlement|price-book id|per unit/i.test(t.replace(/Price book PB-v1/,""))&&r("no mechanism word in customer copy"),t.includes("20 %")||r("the low-balance line names the threshold")}},Q={...O,name:"Billing & credits · українською",globals:{locale:"uk"}},J={name:"Billing & credits · Boreas (prepaid)",parameters:d,render:()=>a.jsx(c,{result:n({wallet:l.org_boreas,usage:se})})},ee={name:"Billing & credits · credits used up (0 %)",parameters:d,render:()=>a.jsx(c,{result:n({wallet:{...l.org_acme,available:"0.000000",lowBalancePct:0,buckets:l.org_acme.buckets.map(e=>({...e,remaining:"0.000000"}))},usage:se})}),play:async({canvasElement:e})=>{e.textContent?.includes("stay available")||r("exhaustion must say billing, export and support stay available ()")}},ae={name:"Billing & credits · fresh organization, no usage yet",parameters:d,render:()=>a.jsx(c,{result:n({wallet:l.org_lviv_coffee,usage:[]})})},re={parameters:d,render:()=>a.jsx(c,{result:{state:"loading"}})},ne={name:"Billing & credits · a member (no entry — the denied rung)",parameters:d,render:()=>a.jsx(c,{result:{state:"denied"}})},te={parameters:d,render:()=>a.jsx(c,{result:{state:"offline",retry:p}})},We=["Overview","OverviewUkrainian","OverviewS1","OverviewS1Ukrainian","OverviewFirstUse","OverviewLoading","OverviewError","OverviewOffline","Organizations","OrganizationsUkrainian","OrganizationsEmpty","OrganizationsLoading","OrganizationsDenied","OrganizationsOffline","OrganizationOverview","OrganizationPeople","OrganizationUsage","OrganizationBilling","OrganizationConnections","OrganizationCost","OrganizationCostStale","OrganizationCostCustomerCloud","OrganizationUkrainian","OrganizationS1UsagePartial","OrganizationS1UsageFailed","OrganizationS1Billing","OrganizationS1Cost","OrganizationS1Audit","OrganizationS1AuditOffline","OrganizationS1Ukrainian","OrganizationSuspendAction","OrganizationSuspendRefused","OrganizationReinstateAction","OrganizationSuspendUkrainian","OrganizationLoading","OrganizationNotFound","BillingCredits","BillingCreditsUkrainian","BillingCreditsPaid","BillingCreditsExhausted","BillingCreditsEmpty","BillingCreditsLoading","BillingCreditsDenied","BillingCreditsOffline"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <PlatformOverviewScreen result={ready(FLEET_SUMMARY)} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="operator-scope-banner"]')) fails("every operator screen carries the scope banner (DS-6806)");
    if (!canvasElement.querySelector('[data-testid="fleet-kpi-strip"]')) fails("the overview opens with the fleet KPI strip");
  }
}`,...m.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  ...Overview,
  name: "Overview · українською",
  globals: {
    locale: "uk"
  }
}`,...z.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Overview · S1 as it answers (credits and cost not yet; one source down)",
  render: () => <PlatformOverviewScreen result={ready(FLEET_SUMMARY_S1)} />,
  play: async ({
    canvasElement
  }) => {
    const consumed = canvasElement.querySelector('[data-testid="kpi-consumed"]')?.textContent ?? "";
    if (/\\b0\\b|0\\.0/.test(consumed)) fails("an unmetered number is *not yet*, never a zero ()");
    if (!canvasElement.querySelector('[data-testid="fleet-sources"]')) fails("the overview names every source and its freshness");
    if (!(canvasElement.textContent ?? "").includes("Dnipro Labs")) fails("a server alert renders through its text_key with its params");
  }
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...OverviewS1,
  name: "Overview · S1 · українською",
  globals: {
    locale: "uk"
  }
}`,...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Overview · first use (no provider bootstrapped)",
  render: () => <PlatformOverviewScreen result={{
    state: "loading"
  }} firstUse />
}`,...E.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <PlatformOverviewScreen result={{
    state: "loading"
  }} />
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <PlatformOverviewScreen result={{
    state: "error",
    retry
  }} />
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <PlatformOverviewScreen result={{
    state: "offline",
    retry
  }} />
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <PlatformOrganizationsScreen result={ready(FLEET_ORGS)} wallets={WALLETS} />,
  play: async ({
    canvasElement
  }) => {
    const rows = canvasElement.querySelectorAll("tbody tr");
    if (rows.length !== 7) fails(\`the synthetic fleet has seven organizations, got \${rows.length}\`);
    if (!canvasElement.querySelector('[data-testid="status-disagree"]')) fails("Dnipro Labs' platform/commercial disagreement must be a badge ()");
  }
}`,...f.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...Organizations,
  name: "Organizations · українською",
  globals: {
    locale: "uk"
  }
}`,...A.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <PlatformOrganizationsScreen result={{
    state: "empty"
  }} />
}`,...B.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <PlatformOrganizationsScreen result={{
    state: "loading"
  }} />
}`,...M.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Organizations · denied (a URL without the operator scope is a 404 in the app — the view's denied rung)",
  render: () => <PlatformOrganizationsScreen result={{
    state: "denied"
  }} />
}`,...k.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <PlatformOrganizationsScreen result={{
    state: "offline",
    retry
  }} />
}`,..._.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Organization · ACME · Overview",
  render: () => <PlatformOrganizationScreen result={ready(ACME)} />
}`,...P.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Organization · ACME · People (counts, never the directory)",
  render: () => <PlatformOrganizationScreen result={ready(ACME)} initialTab="people" />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="people-note"]')) fails("the People tab says it shows counts, not a directory ()");
    if (/@/.test(canvasElement.querySelector('[data-testid="screen-platform-organization"]')?.textContent ?? "")) fails("no e-mail may appear on an operator screen");
  }
}`,...T.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Organization · ACME · Usage (by service, with sources)",
  render: () => <PlatformOrganizationScreen result={ready(ACME)} initialTab="usage" />
}`,...U.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Organization · ACME · NXC & Billing",
  render: () => <PlatformOrganizationScreen result={ready(ACME)} initialTab="billing" />
}`,...j.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Organization · ACME · Models & Connections (names and health only)",
  render: () => <PlatformOrganizationScreen result={ready(ACME)} initialTab="connections" />,
  play: async ({
    canvasElement
  }) => {
    const text = canvasElement.textContent ?? "";
    if (/sk-[A-Za-z0-9]{8,}|AIza[0-9A-Za-z_-]{10,}|Bearer /.test(text)) fails("a credential leaked into the connections tab");
    if (!text.includes("own key") || !text.includes("managed")) fails("credential ownership must be named (own key / managed) — the BYOM distinction");
  }
}`,...L.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Organization · ACME · Cost (reconciled)",
  render: () => <PlatformOrganizationScreen result={ready(ACME)} initialTab="cost" />
}`,...q.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Organization · ACME · Cost (export late)",
  render: () => <PlatformOrganizationScreen result={ready({
    ...ACME,
    cost: COST_ACME_STALE
  })} initialTab="cost" />
}`,...R.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Organization · Verkhovyna Agro · Cost (BYOC — no NEXUS cost)",
  render: () => <PlatformOrganizationScreen result={ready(VERKHOVYNA)} initialTab="cost" />
}`,...D.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Organization · ACME · українською",
  render: () => <PlatformOrganizationScreen result={ready(ACME)} />,
  globals: {
    locale: "uk"
  }
}`,...F.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Organization · S1 · Usage (graph-api down: its rows stay, their numbers do not)",
  render: () => <PlatformOrganizationScreen result={ready(ACME_S1)} initialTab="usage" />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid^="unavailable-"]')) fails("a row whose source did not answer says so ()");
    if (!canvasElement.querySelector('[data-testid="usage-sources"]')) fails("the usage tab names its sources");
  }
}`,...N.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Organization · S1 · Usage read failed (the organization still opens)",
  render: () => <PlatformOrganizationScreen result={ready({
    ...ACME_S1,
    usage: [],
    usageSources: [],
    errors: {
      usage: "error"
    }
  })} initialTab="usage" retry={retry} />
}`,...I.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Organization · S1 · NXC & Billing (arrives with S2)",
  render: () => <PlatformOrganizationScreen result={ready(ACME_S1)} initialTab="billing" />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="billing-not-yet"]')) fails("without a wallet the tab says *not yet*, never an empty table");
  }
}`,...Y.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Organization · S1 · Cost (arrives with S4)",
  render: () => <PlatformOrganizationScreen result={ready(ACME_S1)} initialTab="cost" />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="cost-not-yet"]')) fails("without a cost export the tab says *not yet*");
  }
}`,...G.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Organization · S1 · Audit (by reference; an operator's own read is flagged)",
  render: () => <PlatformOrganizationScreen result={ready(ACME_S1)} initialTab="audit" />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="org-audit"]')) fails("the audit tab is a table of references");
    if (!canvasElement.querySelector('[data-testid^="operator-scope-"]')) fails("an operator's read in the audit carries the operator-scope chip ()");
    if (/@/.test(canvasElement.textContent ?? "")) fails("no e-mail on an operator screen — actors are ids");
  }
}`,...S.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Organization · S1 · Audit read offline",
  render: () => <PlatformOrganizationScreen result={ready({
    ...ACME_S1,
    audit: [],
    errors: {
      audit: "offline"
    }
  })} initialTab="audit" retry={retry} />
}`,...V.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  ...OrganizationS1Audit,
  name: "Organization · S1 · Audit · українською",
  globals: {
    locale: "uk"
  }
}`,...W.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Organization · ACME · Suspend (provider owner, confirmation open)",
  render: () => <PlatformOrganizationScreen result={ready(ACME_S1)} actions={<OrgAction action="suspend" />} panel={<OrganizationActionPanel org={ACME_S1.org} action="suspend" onConfirm={noop} onCancel={() => undefined} />} />,
  play: async ({
    canvasElement
  }) => {
    const panel = canvasElement.querySelector('[data-testid="org-suspend-panel"]');
    if (!panel) return fails("the suspend confirmation is an inline panel on the organization page (R4)");
    if (!panel.querySelector('[data-testid="reason-code"]')) fails("a sensitive action asks for its reason code");
    //  in either language: the effect sentence names billing, export and support as staying reachable
    if (!/billing, export and support|білінг, експорт і підтримка/.test(panel.textContent ?? "")) fails("the panel says billing, export and support stay reachable ()");
  }
}`,...y.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Organization · ACME · Suspend refused by the server (409 shown where it was taken)",
  render: () => <PlatformOrganizationScreen result={ready(ACME_S1)} panel={<OrganizationActionPanel org={ACME_S1.org} action="suspend" onConfirm={refuses} onCancel={() => undefined} />} />,
  play: async ({
    canvasElement
  }) => {
    const input = canvasElement.querySelector<HTMLInputElement>('[data-testid="reason-code"]');
    const confirm = canvasElement.querySelector<HTMLButtonElement>('[data-testid="reason-confirm"]');
    if (!input || !confirm) return fails("the panel has a reason field and a confirm button");
    typeInto(input, "support_case_4421");
    confirm.click();
    await until(() => !!canvasElement.querySelector('[data-testid="reason-error"]'), "the server's refusal is shown in the panel, where the action was taken");
  }
}`,...H.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Organization · Dnipro Labs · Reinstate (confirmation open)",
  render: () => <PlatformOrganizationScreen result={ready(DNIPRO_S1)} actions={<OrgAction action="reinstate" />} panel={<OrganizationActionPanel org={DNIPRO_S1.org} action="reinstate" onConfirm={noop} onCancel={() => undefined} />} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="org-reinstate-panel"]')) fails("reinstate confirms inline, like suspend");
  }
}`,...X.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  ...OrganizationSuspendAction,
  name: "Organization · Suspend · українською",
  globals: {
    locale: "uk"
  }
}`,...K.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <PlatformOrganizationScreen result={{
    state: "loading"
  }} />
}`,...Z.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: "Organization · not found (a stranger's URL)",
  render: () => <PlatformOrganizationScreen result={{
    state: "denied"
  }} />
}`,...$.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Billing & credits · ACME owner (trial, 20 %, promo expiring)",
  parameters: billingMeta,
  render: () => <BillingCreditsScreen result={ready({
    wallet: WALLETS.org_acme,
    usage: USAGE_ACME
  })} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="no-payment-line"]')) fails("the customer page always says no payment method is stored");
    const text = canvasElement.textContent ?? "";
    if (/ledger|reservation|settlement|price-book id|per unit/i.test(text.replace(/Price book PB-v1/, ""))) fails("no mechanism word in customer copy");
    if (!text.includes("20 %")) fails("the low-balance line names the threshold");
  }
}`,...O.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  ...BillingCredits,
  name: "Billing & credits · українською",
  globals: {
    locale: "uk"
  }
}`,...Q.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Billing & credits · Boreas (prepaid)",
  parameters: billingMeta,
  render: () => <BillingCreditsScreen result={ready({
    wallet: WALLETS.org_boreas,
    usage: USAGE_ACME
  })} />
}`,...J.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  name: "Billing & credits · credits used up (0 %)",
  parameters: billingMeta,
  render: () => <BillingCreditsScreen result={ready({
    wallet: {
      ...WALLETS.org_acme,
      available: "0.000000",
      lowBalancePct: 0,
      buckets: WALLETS.org_acme.buckets.map(b => ({
        ...b,
        remaining: "0.000000"
      }))
    },
    usage: USAGE_ACME
  })} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.textContent?.includes("stay available")) fails("exhaustion must say billing, export and support stay available ()");
  }
}`,...ee.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  name: "Billing & credits · fresh organization, no usage yet",
  parameters: billingMeta,
  render: () => <BillingCreditsScreen result={ready({
    wallet: WALLETS.org_lviv_coffee,
    usage: []
  })} />
}`,...ae.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  parameters: billingMeta,
  render: () => <BillingCreditsScreen result={{
    state: "loading"
  }} />
}`,...re.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  name: "Billing & credits · a member (no entry — the denied rung)",
  parameters: billingMeta,
  render: () => <BillingCreditsScreen result={{
    state: "denied"
  }} />
}`,...ne.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  parameters: billingMeta,
  render: () => <BillingCreditsScreen result={{
    state: "offline",
    retry
  }} />
}`,...te.parameters?.docs?.source}}};export{O as BillingCredits,ne as BillingCreditsDenied,ae as BillingCreditsEmpty,ee as BillingCreditsExhausted,re as BillingCreditsLoading,te as BillingCreditsOffline,J as BillingCreditsPaid,Q as BillingCreditsUkrainian,j as OrganizationBilling,L as OrganizationConnections,q as OrganizationCost,D as OrganizationCostCustomerCloud,R as OrganizationCostStale,Z as OrganizationLoading,$ as OrganizationNotFound,P as OrganizationOverview,T as OrganizationPeople,X as OrganizationReinstateAction,S as OrganizationS1Audit,V as OrganizationS1AuditOffline,Y as OrganizationS1Billing,G as OrganizationS1Cost,W as OrganizationS1Ukrainian,I as OrganizationS1UsageFailed,N as OrganizationS1UsagePartial,y as OrganizationSuspendAction,H as OrganizationSuspendRefused,K as OrganizationSuspendUkrainian,F as OrganizationUkrainian,U as OrganizationUsage,f as Organizations,k as OrganizationsDenied,B as OrganizationsEmpty,M as OrganizationsLoading,_ as OrganizationsOffline,A as OrganizationsUkrainian,m as Overview,x as OverviewError,E as OverviewFirstUse,b as OverviewLoading,w as OverviewOffline,g as OverviewS1,C as OverviewS1Ukrainian,z as OverviewUkrainian,We as __namedExportsOrder,Ve as default};
