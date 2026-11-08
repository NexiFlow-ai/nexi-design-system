import{j as a}from"./iframe-C_4ax-Jm.js";/* empty css                */import{g as f,O as i,m as D,l as P}from"./billing-1IaOy8Tp.js";import{O as F,C as z,a as H,U as G,f as R}from"./platform-BhtOchBX.js";import{P as r,O as U}from"./Screens-ByteWJU4.js";import"./preload-helper-PPVm8Dsz.js";import"./Parts-BEjhtEyc.js";import"./format-DO9OmoTM.js";import"./credential-Ch26UJlM.js";import"./chatApi-DU7mAKQS.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./organizationRequests-CxMYSAGe.js";import"./BillingParts-8YmDY42z.js";import"./CloudCost-DmWiTZUf.js";import"./BillingCredits-CRKJXhpF.js";const oe={title:"Apps/NexCore/Platform Operations/Organization · NXC & Billing",parameters:{ds:"DS-6802",layout:"fullscreen",workbench:{ns:"core",path:"/core/platform/organizations/org_acme?tab=billing&as=owner"},docs:{description:{component:" S2 — Platform Operations › Organization › **NXC & Billing** as billing-api answers it ( §10):\n`DS-6802` four buckets with available and reserved apart · the wallet's facts and lots · `DS-6805` ledger ·\nreservations open · settlements · the adjustments queue · replay. Each sub-read fails apart and its section says so\n(DS-7006); the wallet's 404 is *no wallet yet*. The S1 placeholder (*arrives with S2*) stays in the S1 stories."}}}},l=e=>({state:"ready",data:e}),n=()=>{},s=async()=>{},t=e=>{throw new globalThis.Error(e)};async function B(e,y,c=50){for(let g=0;g<c;g++){if(e())return;await new Promise(I=>setTimeout(I,10))}t(y)}const o={org:R("org_acme"),wallet:i.wallet,usage:G,usageSources:H,ledger:i.ledger,cost:z,audit:F,errors:{},billing:i},X={org:R("org_lviv_coffee"),wallet:D.wallet,usage:[],usageSources:[],ledger:D.ledger,cost:null,audit:[],errors:{},billing:D},N={org:R("org_verkhovyna"),wallet:null,usage:[],usageSources:[],ledger:[],cost:null,audit:[],errors:{billing:"notFound"}},d={canAdjust:!0,canReplay:!0,onApprove:s,onReplay:s},u={name:"The tab alone · ACME (every section)",render:()=>a.jsx("div",{className:"nexus-cc-page","data-width":"wide",children:a.jsx(U,{billing:i,canAdjust:!0,canReplay:!0,onApprove:s,onReplay:s,retry:n})}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="org-billing"]')||t("the tab renders its stack"),e.querySelector('[data-testid="wallet-facts"]')||t("the wallet's facts are drawn"),e.querySelector('[data-testid="lots-table"]')||t("the lots are drawn")}},m={name:"ACME · NXC & Billing (billing operator)",render:()=>a.jsx(r,{result:l(o),initialTab:"billing",billingActions:d,retry:n}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="wallet-buckets"]')||t("the tab opens with the four buckets (DS-6802)"),(!e.querySelector('[data-testid="wallet-available"]')||!e.querySelector('[data-testid="wallet-reserved"]'))&&t("available and reserved are named apart"),e.querySelector('[data-testid="ledger-table"]')||t("the ledger is a table (DS-6805)"),e.querySelector('[data-testid="reservations"]')||t("reservations open are listed"),e.querySelector('[data-testid="settlements-table"]')||t("the settlements are listed"),e.querySelector('[data-testid="adjustments"]')||t("the adjustments queue is listed"),e.querySelector('[data-testid="replay-run"]')||t("a billing operator may run a replay"),e.querySelector('[data-testid="wallet-price-book"]')||t("the operator's wallet names its price book")}},b={...m,name:"ACME · NXC & Billing · українською",globals:{locale:"uk"}},S={name:"ACME · NXC & Billing · platform operator (reads only, no action drawn)",render:()=>a.jsx(r,{result:l(o),initialTab:"billing",retry:n}),play:async({canvasElement:e})=>{(e.querySelector('[data-testid="replay-run"]')||e.querySelector('[data-testid^="approve-adj_"]'))&&t("without the role no action is drawn — the server would refuse anyway")}},h={name:"ACME · after a replay that differs (nothing corrected)",render:()=>a.jsx(r,{result:l({...o,billing:{...i,replay:P}}),initialTab:"billing",billingActions:d,retry:n}),play:async({canvasElement:e})=>{await B(()=>!!e.querySelector('[data-testid="replay-differs-promo"]'),"the bucket that differs is flagged")}},A={name:"Lviv Coffee · fresh wallet (promo only, nothing settled)",render:()=>a.jsx(r,{result:l(X),initialTab:"billing",billingActions:d,retry:n})},E={name:"ACME · ledger read failed (the wallet still shows; the section says so)",render:()=>a.jsx(r,{result:l({...o,billing:{...i,ledger:[],reservations:[]},billingErrors:{ledger:"error"}}),initialTab:"billing",billingActions:d,retry:n}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="wallet-buckets"]')||t("the wallet is still drawn"),e.querySelector('[data-testid="ledger-table"]')&&t("a failed ledger read is not an empty table")}},w={name:"ACME · settlements read offline",render:()=>a.jsx(r,{result:l({...o,billing:{...i,settlements:[]},billingErrors:{settlements:"offline"}}),initialTab:"billing",billingActions:d,retry:n})},v={name:"Verkhovyna Agro · no wallet yet (the wallet door's 404)",render:()=>a.jsx(r,{result:l(N),initialTab:"billing",retry:n}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="billing-no-wallet"]')||t("a wallet the door does not have is *no wallet yet*, never an empty table")}},T={name:"ACME · billing did not answer (the tab's error rung)",render:()=>a.jsx(r,{result:l({...N,org:R("org_acme"),errors:{billing:"error"}}),initialTab:"billing",retry:n})},q={render:()=>a.jsx(r,{result:{state:"loading"},initialTab:"billing"})},C={name:"Not found (a stranger's URL — the page's 404)",render:()=>a.jsx(r,{result:{state:"denied"},initialTab:"billing"})},M={render:()=>a.jsx(r,{result:{state:"offline",retry:n},initialTab:"billing"})},L={...o,billing:{...i,adjustments:[{...f.adjustment,orgId:"org_acme"},...i.adjustments]}},k={...d,onDraft:async()=>({kind:"draft",draft:f}),onPromote:s,onReject:s},p={name:"ACME · NXC & Billing · a draft in the queue (Draft an adjustment · promote · reject)",render:()=>a.jsx(r,{result:l(L),initialTab:"billing",billingActions:k,retry:n}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="draft-open"]')||t("*Draft an adjustment* sits on the queue's section line"),e.querySelector(`[data-testid="draft-chip-${f.adjustment.id}"]`)||t("the draft row is visibly a draft"),(!e.querySelector(`[data-testid="promote-${f.adjustment.id}"]`)||!e.querySelector(`[data-testid="reject-${f.adjustment.id}"]`))&&t("promote and reject are offered to the adjust role"),e.querySelector('[data-testid="approve-adj_0051"]')||t("the pending row keeps the two-human idiom of S3")}},_={...p,name:"ACME · a draft in the queue · українською",globals:{locale:"uk"}},j={name:"ACME · Draft an adjustment — the form opens in the Inspector",render:()=>a.jsx(r,{result:l(L),initialTab:"billing",billingActions:k,retry:n}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="draft-open"]')?.click(),await B(()=>!!e.querySelector('[data-testid="draft-form"]'),"the draft form opens (R4)")}},x={name:"ACME · Drafting unavailable (409 DRAFTING_UNAVAILABLE)",render:()=>a.jsx(r,{result:l(L),initialTab:"billing",billingActions:{...k,onDraft:async()=>({kind:"unavailable"})},retry:n}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="draft-open"]')?.click(),await B(()=>!!e.querySelector('[data-testid="draft-case"]'),"the form opens");const y=(c,g)=>{Object.getOwnPropertyDescriptor(c instanceof HTMLTextAreaElement?HTMLTextAreaElement.prototype:HTMLInputElement.prototype,"value")?.set?.call(c,g),c.dispatchEvent(new Event("input",{bubbles:!0}))};y(e.querySelector('[data-testid="draft-case"]'),"case_0231"),y(e.querySelector('[data-testid="draft-settlements"]'),"nexus://core/billing/settlement/stl_acme_0231"),e.querySelector('[data-testid="draft-submit"]')?.click(),await B(()=>!!e.querySelector('[data-testid="draft-unavailable"]'),"the honest face, where the action was taken")}},O={name:"ACME · NXC & Billing · read only — the draft row is seen, nothing offered",render:()=>a.jsx(r,{result:l(L),initialTab:"billing",billingActions:{canAdjust:!1,canReplay:!0,onReplay:s},retry:n}),play:async({canvasElement:e})=>{(e.querySelector('[data-testid="draft-open"]')||e.querySelector('[data-testid^="promote-"]'))&&t("drawn only for the adjust role")}},de=["Tab","Populated","PopulatedUkrainian","ReadOnly","ReplayRan","Fresh","LedgerFailed","SettlementsOffline","NoWallet","WalletError","Loading","NotFound","Offline","DraftFace","DraftFaceUkrainian","DraftFormOpen","DraftUnavailable","DraftReadOnly"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "The tab alone · ACME (every section)",
  render: () => <div className="nexus-cc-page" data-width="wide"><OrganizationBillingTab billing={ORG_BILLING_ACME} canAdjust canReplay onApprove={noop} onReplay={noop} retry={retry} /></div>,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="org-billing"]')) fails("the tab renders its stack");
    if (!canvasElement.querySelector('[data-testid="wallet-facts"]')) fails("the wallet's facts are drawn");
    if (!canvasElement.querySelector('[data-testid="lots-table"]')) fails("the lots are drawn");
  }
}`,...u.parameters?.docs?.source},description:{story:"The tab on its own (what the Organization screen mounts under *NXC & Billing*).",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "ACME · NXC & Billing (billing operator)",
  render: () => <PlatformOrganizationScreen result={ready(ACME)} initialTab="billing" billingActions={owner} retry={retry} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="wallet-buckets"]')) fails("the tab opens with the four buckets (DS-6802)");
    if (!canvasElement.querySelector('[data-testid="wallet-available"]') || !canvasElement.querySelector('[data-testid="wallet-reserved"]')) fails("available and reserved are named apart");
    if (!canvasElement.querySelector('[data-testid="ledger-table"]')) fails("the ledger is a table (DS-6805)");
    if (!canvasElement.querySelector('[data-testid="reservations"]')) fails("reservations open are listed");
    if (!canvasElement.querySelector('[data-testid="settlements-table"]')) fails("the settlements are listed");
    if (!canvasElement.querySelector('[data-testid="adjustments"]')) fails("the adjustments queue is listed");
    if (!canvasElement.querySelector('[data-testid="replay-run"]')) fails("a billing operator may run a replay");
    if (!canvasElement.querySelector('[data-testid="wallet-price-book"]')) fails("the operator's wallet names its price book");
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...Populated,
  name: "ACME · NXC & Billing · українською",
  globals: {
    locale: "uk"
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "ACME · NXC & Billing · platform operator (reads only, no action drawn)",
  render: () => <PlatformOrganizationScreen result={ready(ACME)} initialTab="billing" retry={retry} />,
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="replay-run"]') || canvasElement.querySelector('[data-testid^="approve-adj_"]')) fails("without the role no action is drawn — the server would refuse anyway");
  }
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "ACME · after a replay that differs (nothing corrected)",
  render: () => <PlatformOrganizationScreen result={ready({
    ...ACME,
    billing: {
      ...ORG_BILLING_ACME,
      replay: REPLAY_ACME_MISMATCH
    }
  })} initialTab="billing" billingActions={owner} retry={retry} />,
  play: async ({
    canvasElement
  }) => {
    await until(() => !!canvasElement.querySelector('[data-testid="replay-differs-promo"]'), "the bucket that differs is flagged");
  }
}`,...h.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Lviv Coffee · fresh wallet (promo only, nothing settled)",
  render: () => <PlatformOrganizationScreen result={ready(LVIV)} initialTab="billing" billingActions={owner} retry={retry} />
}`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "ACME · ledger read failed (the wallet still shows; the section says so)",
  render: () => <PlatformOrganizationScreen result={ready({
    ...ACME,
    billing: {
      ...ORG_BILLING_ACME,
      ledger: [],
      reservations: []
    },
    billingErrors: {
      ledger: "error"
    }
  })} initialTab="billing" billingActions={owner} retry={retry} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="wallet-buckets"]')) fails("the wallet is still drawn");
    if (canvasElement.querySelector('[data-testid="ledger-table"]')) fails("a failed ledger read is not an empty table");
  }
}`,...E.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "ACME · settlements read offline",
  render: () => <PlatformOrganizationScreen result={ready({
    ...ACME,
    billing: {
      ...ORG_BILLING_ACME,
      settlements: []
    },
    billingErrors: {
      settlements: "offline"
    }
  })} initialTab="billing" billingActions={owner} retry={retry} />
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Verkhovyna Agro · no wallet yet (the wallet door's 404)",
  render: () => <PlatformOrganizationScreen result={ready(NO_WALLET)} initialTab="billing" retry={retry} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="billing-no-wallet"]')) fails("a wallet the door does not have is *no wallet yet*, never an empty table");
  }
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "ACME · billing did not answer (the tab's error rung)",
  render: () => <PlatformOrganizationScreen result={ready({
    ...NO_WALLET,
    org: fleetOrg("org_acme"),
    errors: {
      billing: "error"
    }
  })} initialTab="billing" retry={retry} />
}`,...T.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <PlatformOrganizationScreen result={{
    state: "loading"
  }} initialTab="billing" />
}`,...q.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Not found (a stranger's URL — the page's 404)",
  render: () => <PlatformOrganizationScreen result={{
    state: "denied"
  }} initialTab="billing" />
}`,...C.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <PlatformOrganizationScreen result={{
    state: "offline",
    retry
  }} initialTab="billing" />
}`,...M.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "ACME · NXC & Billing · a draft in the queue (Draft an adjustment · promote · reject)",
  render: () => <PlatformOrganizationScreen result={ready(ACME_WITH_DRAFT)} initialTab="billing" billingActions={drafts} retry={retry} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="draft-open"]')) fails("*Draft an adjustment* sits on the queue's section line");
    if (!canvasElement.querySelector(\`[data-testid="draft-chip-\${DRAFT_BOREAS.adjustment.id}"]\`)) fails("the draft row is visibly a draft");
    if (!canvasElement.querySelector(\`[data-testid="promote-\${DRAFT_BOREAS.adjustment.id}"]\`) || !canvasElement.querySelector(\`[data-testid="reject-\${DRAFT_BOREAS.adjustment.id}"]\`)) fails("promote and reject are offered to the adjust role");
    if (!canvasElement.querySelector('[data-testid="approve-adj_0051"]')) fails("the pending row keeps the two-human idiom of S3");
  }
}`,...p.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...DraftFace,
  name: "ACME · a draft in the queue · українською",
  globals: {
    locale: "uk"
  }
}`,..._.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "ACME · Draft an adjustment — the form opens in the Inspector",
  render: () => <PlatformOrganizationScreen result={ready(ACME_WITH_DRAFT)} initialTab="billing" billingActions={drafts} retry={retry} />,
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="draft-open"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="draft-form"]'), "the draft form opens (R4)");
  }
}`,...j.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "ACME · Drafting unavailable (409 DRAFTING_UNAVAILABLE)",
  render: () => <PlatformOrganizationScreen result={ready(ACME_WITH_DRAFT)} initialTab="billing" billingActions={{
    ...drafts,
    onDraft: async () => ({
      kind: "unavailable" as const
    })
  }} retry={retry} />,
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="draft-open"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="draft-case"]'), "the form opens");
    const set = (el: HTMLInputElement | HTMLTextAreaElement, v: string) => {
      Object.getOwnPropertyDescriptor(el instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype, "value")?.set?.call(el, v);
      el.dispatchEvent(new Event("input", {
        bubbles: true
      }));
    };
    set(canvasElement.querySelector<HTMLInputElement>('[data-testid="draft-case"]')!, "case_0231");
    set(canvasElement.querySelector<HTMLTextAreaElement>('[data-testid="draft-settlements"]')!, "nexus://core/billing/settlement/stl_acme_0231");
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="draft-submit"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="draft-unavailable"]'), "the honest face, where the action was taken");
  }
}`,...x.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "ACME · NXC & Billing · read only — the draft row is seen, nothing offered",
  render: () => <PlatformOrganizationScreen result={ready(ACME_WITH_DRAFT)} initialTab="billing" billingActions={{
    canAdjust: false,
    canReplay: true,
    onReplay: noop
  }} retry={retry} />,
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="draft-open"]') || canvasElement.querySelector('[data-testid^="promote-"]')) fails("drawn only for the adjust role");
  }
}`,...O.parameters?.docs?.source}}};export{p as DraftFace,_ as DraftFaceUkrainian,j as DraftFormOpen,O as DraftReadOnly,x as DraftUnavailable,A as Fresh,E as LedgerFailed,q as Loading,v as NoWallet,C as NotFound,M as Offline,m as Populated,b as PopulatedUkrainian,S as ReadOnly,h as ReplayRan,w as SettlementsOffline,u as Tab,T as WalletError,de as __namedExportsOrder,oe as default};
