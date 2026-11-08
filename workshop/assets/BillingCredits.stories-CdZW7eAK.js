import{j as n}from"./iframe-C_4ax-Jm.js";/* empty css                */import{T as p,E as m,B as l,a as $,b as Q,c as J,d as V,e as H,f as X}from"./billing-1IaOy8Tp.js";import{U as s}from"./platform-BhtOchBX.js";import{B as r,C as Z,T as D,E}from"./BillingCredits-CRKJXhpF.js";import{i as j,a as ee,l as te}from"./harness-CVmC89KY.js";import{B as U}from"./BillingPages-DkeKo9Jt.js";import"./preload-helper-PPVm8Dsz.js";import"./Parts-BEjhtEyc.js";import"./format-DO9OmoTM.js";import"./credential-Ch26UJlM.js";import"./chatApi-DU7mAKQS.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./organizationRequests-CxMYSAGe.js";import"./CoreShell-LzluVnjy.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./nav-C8-c-HcF.js";import"./runtime-Cwmke1Hn.js";import"./store-C-il-aT_.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./metrics-XT_i2DSD.js";import"./modules-A3eXOreg.js";import"./sparkles-t9beIr0T.js";import"./boxes-Cqxx_HWk.js";import"./plug-B3-qTSSD.js";import"./wrench-DsSy05cC.js";import"./activity-CxYo1_mQ.js";import"./shield-check-Cac0BQ49.js";import"./layers-Dsj4tA4G.js";import"./building-2-GerxkJzZ.js";import"./PlatformBilling-Vuy2rkFR.js";import"./Operators-B8c5w-d2.js";import"./BillingParts-8YmDY42z.js";const Ct={title:"Apps/NexCore/Settings/Billing & credits",parameters:{ds:"DS-6802",layout:"fullscreen",workbench:{ns:"core",path:"/core/settings/billing?as=owner"},docs:{description:{component:" S2 — Customer › Settings › **Billing & credits** as billing-api answers it ( §9 · §10): `DS-6802`\nbuckets with available and reserved named · `DS-6804` usage with the NXC column (a row not priced says so — never a\nzero) · the quiet lines (promo expiry · no payment method · the low-balance line once a threshold passed) · *Export\nCSV*. The customer door does not name the price book, so there is no chip (the S0 composition kept it; the wire\ndecided). Copy rule (08): no mechanism word on this page. A member's page is the not-found page, like the API's 404.\nS5 (§4.3 · §6.2,  ·  · ): the transparency line (a date only) · the export opt-in switch (off by\ndefault; the deployment's floor named) · `⋯ › How credits work` — the guide as in-app copy, uk = en."}}}},o=e=>({state:"ready",data:e}),z=()=>{},t=e=>{throw new globalThis.Error(e)},a={href:"/core/settings",label:"Settings"},ne=/\bledger\b|\breservation\b|\bsettlement\b|price.book id|per unit|NXC.per.unit|книг[аи]|резервуванн|розрахун/i,i=async()=>{};async function d(e,c,W=50){for(let h=0;h<W;h++){if(e())return;await new Promise(F=>setTimeout(F,10))}t(c)}const y={name:"ACME owner · trial, 20 % passed, promo expiring, usage priced where the price book knows the service · the S5 lines",render:()=>n.jsx(r,{result:o({wallet:l,usage:s,policy:m,transparency:p}),onExport:()=>{},onSetExportPolicy:i,back:a}),play:async({canvasElement:e})=>{(!e.querySelector('[data-testid="wallet-available"]')||!e.querySelector('[data-testid="wallet-reserved"]'))&&t("available and reserved are named apart (DS-6802)"),(e.querySelector('[data-testid="billing-price-book"]')||e.querySelector('[data-testid="wallet-price-book"]'))&&t("the customer door names no price book — no chip, never a guess"),e.querySelector('[data-testid="no-payment-line"]')||t("the page always says no payment method is stored"),e.querySelector('[data-testid="billing-export"]')||t("Export CSV is on the header line"),e.querySelector('[data-testid="billing-usage"]')||t("usage by service is on the page (DS-6804)");const c=e.textContent??"";ne.test(c)&&t("no mechanism word in customer copy (08 · Copy rules)"),c.includes("20 %")||t("the low-balance line names the threshold"),Array.from(e.querySelectorAll("tbody tr")).filter(F=>/counted, not priced/.test(F.textContent??"")).length||t("an unpriced row says so instead of a zero ()");const h=e.querySelector('[data-testid="operator-viewed-line"]')?.textContent??"";h||t("the transparency line is on the page ()"),/usr_|@|wallet|ledger/i.test(h)&&t("the transparency line is a date only — never who or what"),e.querySelector('[data-testid="export-opt-in-switch"]')||t("the export opt-in switch is on the page ()"),e.querySelector('[data-testid="export-opt-in-switch"]')?.getAttribute("aria-checked")!=="false"&&t("off by default"),e.querySelector('[data-testid="billing-more"]')||t("⋯ holds *How credits work*"),e.querySelectorAll("h1").length!==1&&t("one header line ()")}},g={...y,name:"ACME owner · українською",globals:{locale:"uk"},play:async({canvasElement:e})=>{e.querySelector('[data-testid="no-payment-line"]')||t("uk = en: the same lines"),(e.textContent??"").includes("20 %")||t("the low-balance line names the threshold in uk too")}},f={name:"Boreas · prepaid against an invoice (no threshold passed, nothing expiring)",render:()=>n.jsx(r,{result:o({wallet:{...$,priceBookVersion:null},usage:s}),onExport:()=>{},back:a})},w={name:"ACME · credits used up (0 %) — export still offered ()",render:()=>n.jsx(r,{result:o({wallet:Q,usage:s}),onExport:()=>{},back:a}),play:async({canvasElement:e})=>{e.textContent?.includes("stay available")||t("exhaustion says billing, export and support stay available"),e.querySelector('[data-testid="billing-export"]')||t("the export is reachable at 0 %")}},S={name:"Lviv Coffee · fresh organization (promo only, no usage yet)",render:()=>n.jsx(r,{result:o({wallet:J,usage:[]}),onExport:()=>{},back:a}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="wallet-buckets"]')||t("the wallet is drawn even before any usage")}},x={name:"ACME owner · opted in (the choice is in effect)",render:()=>n.jsx(r,{result:o({wallet:l,usage:s,policy:H,transparency:V}),onExport:()=>{},onSetExportPolicy:i,back:a}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="export-opt-in-switch"]')?.getAttribute("aria-checked")!=="true"&&t("the switch reads the door's word"),e.querySelector('[data-testid="operator-viewed-line"]')||t("never viewed is still a line — the honest *no one has*")}},b={name:"ACME owner · opted in, the deployment has not opened it — the choice is kept, not in effect",render:()=>n.jsx(r,{result:o({wallet:l,usage:s,policy:X,transparency:p}),onExport:()=>{},onSetExportPolicy:i,back:a}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="export-opt-in-deployment-off"]')||t("the deployment's floor is named"),(e.querySelector('[data-testid="export-opt-in-state"]')?.textContent??"")==="On"&&t("the effective state is off while the deployment is shut")}},C={name:"ACME owner · flips the switch (the change is the commit; a saved note)",render:()=>n.jsx(r,{result:o({wallet:l,usage:s,policy:m,transparency:p}),onExport:()=>{},onSetExportPolicy:i,back:a}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="export-opt-in-switch"]')?.click(),await d(()=>/recorded|записано/i.test(e.querySelector('[data-testid="saved-note"]')?.textContent??""),"the saved note says the choice was recorded")}},v={name:"ACME admin · the server refuses the change (an Owner changes this)",render:()=>n.jsx(r,{result:o({wallet:l,usage:s,policy:m,transparency:p}),onExport:()=>{},onSetExportPolicy:async()=>{throw new globalThis.Error("An Owner changes this.")},back:a}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="export-opt-in-switch"]')?.click(),await d(()=>!!e.querySelector('[data-testid="export-opt-in-error"]'),"the refusal is shown beside the switch (R4)")}},A={name:"Read only · the switch is read, not changed",render:()=>n.jsx(r,{result:o({wallet:l,usage:s,policy:m,transparency:p}),onExport:()=>{},back:a}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="export-opt-in-readonly"]')||t("who may change it is said")}},k={name:"ACME owner · the two S5 doors did not answer (honest lines; the wallet and usage still true)",render:()=>n.jsx(r,{result:o({wallet:l,usage:s,policy:null,transparency:null}),onExport:()=>{},onSetExportPolicy:i,back:a}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="export-opt-in-unavailable"]')||t("the switch's door did not answer — said, not guessed"),e.querySelector('[data-testid="export-opt-in-switch"]')&&t("no switch drawn over an unknown state"),e.querySelector('[data-testid="operator-viewed-line"]')&&t("no transparency line invented")}},u={name:"⋯ › How credits work — the whole chapter in the product ()",render:()=>n.jsx(r,{result:o({wallet:l,usage:s,policy:m,transparency:p}),onExport:()=>{},onSetExportPolicy:i,back:a}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="billing-more"]')?.click(),await d(()=>!!e.querySelector('[data-testid="billing-guide-open"]'),"the menu opens"),e.querySelector('[data-testid="billing-guide-open"]')?.click(),await d(()=>!!e.querySelector('[data-testid="credits-guide"]'),"the guide opens in the Inspector");for(const c of["ledger","available","buckets","usage","priceBook","lines","refused","transparency","training","never"])e.querySelector(`[data-testid="credits-guide-${c}"]`)||t(`the guide has its ${c} section`)}},L={...u,name:"⋯ › Як працюють кредити — українською (uk = en)",globals:{locale:"uk"}},O={name:"⋯ › How credits work · Esc closes the guide and focus returns to ⋯ (A11Y-3801)",render:u.render,play:async({canvasElement:e})=>{e.querySelector('[data-testid="billing-more"]')?.click(),await d(()=>!!e.querySelector('[data-testid="billing-guide-open"]'),"the menu opens"),e.querySelector('[data-testid="billing-guide-open"]')?.click(),await d(()=>!!e.querySelector('[data-testid="credits-guide"]'),"the guide opens in the Inspector"),window.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:!0})),await d(()=>!e.querySelector('[data-testid="credits-guide"]'),"Esc closes the guide"),document.activeElement?.getAttribute("data-testid")!=="billing-more"&&t("focus returned to the ⋯ that opened the guide")}},_={render:()=>n.jsx(r,{result:{state:"loading"},back:a})},P={render:()=>n.jsx(r,{result:{state:"error",retry:z},back:a})},B={render:()=>n.jsx(r,{result:{state:"offline",retry:z},back:a})},I={name:"A member (the API's 404 — the page is the not-found page; the view's denied rung)",parameters:ee("/core/settings/billing","populated","member"),render:()=>n.jsx(r,{result:{state:"denied"},back:a})},K=e=>n.jsx("div",{className:"nexus-cc-page",children:e}),q={name:"Part · TransparencyLine (viewed on a date · never · the door did not answer)",render:()=>K(n.jsxs("ul",{className:"nexus-cc-platform-lines",children:[n.jsx(D,{transparency:p}),n.jsx(D,{transparency:V}),n.jsx(D,{transparency:null})]})),play:async({canvasElement:e})=>{e.querySelectorAll('[data-testid="operator-viewed-line"]').length!==2&&t("a door that did not answer draws nothing")}},T={name:"Part · ExportOptInSwitch (off · on · deployment shut · unavailable)",render:()=>K(n.jsxs("div",{className:"nexus-cc-platform-stack",children:[n.jsx(E,{policy:m,onChange:i}),n.jsx(E,{policy:H,onChange:i}),n.jsx(E,{policy:X,onChange:i}),n.jsx(E,{policy:null})]}))},N={name:"Part · CreditsGuide",render:()=>n.jsxs("div",{className:"nexus-cc-split","data-inspector":"open",children:[n.jsx("div",{className:"nexus-cc-page"}),n.jsx(Z,{onClose:()=>{},promoExpiresOn:"30 Nov 2026"})]})},Y=te("/core/settings/billing"),R={...Y.Loading,name:"Page · loading (in the shell)",decorators:[j],render:()=>n.jsx(U,{})},M={...Y.Error,name:"Page · error (in the shell)",decorators:[j],render:()=>n.jsx(U,{})},G={...Y.Offline,name:"Page · offline (in the shell)",decorators:[j],render:()=>n.jsx(U,{})},vt=["Populated","PopulatedUkrainian","Prepaid","Exhausted","Empty","OptInOn","OptInDeploymentOff","OptInToggled","OptInRefused","OptInReadOnly","DoorsUnavailable","GuideOpen","GuideOpenUkrainian","GuideClosedByKeyboard","Loading","Error","Offline","NotFound","PartTransparencyLine","PartExportOptInSwitch","PartCreditsGuide","PageLoading","PageError","PageOffline"];y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "ACME owner · trial, 20 % passed, promo expiring, usage priced where the price book knows the service · the S5 lines",
  render: () => <BillingCreditsScreen result={ready({
    wallet: BILLING_WALLET_ACME_CUSTOMER,
    usage: USAGE_ACME,
    policy: EXPORT_POLICY_OFF,
    transparency: TRANSPARENCY_VIEWED
  })} onExport={() => undefined} onSetExportPolicy={noop} back={back} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="wallet-available"]') || !canvasElement.querySelector('[data-testid="wallet-reserved"]')) fails("available and reserved are named apart (DS-6802)");
    if (canvasElement.querySelector('[data-testid="billing-price-book"]') || canvasElement.querySelector('[data-testid="wallet-price-book"]')) fails("the customer door names no price book — no chip, never a guess");
    if (!canvasElement.querySelector('[data-testid="no-payment-line"]')) fails("the page always says no payment method is stored");
    if (!canvasElement.querySelector('[data-testid="billing-export"]')) fails("Export CSV is on the header line");
    if (!canvasElement.querySelector('[data-testid="billing-usage"]')) fails("usage by service is on the page (DS-6804)");
    const text = canvasElement.textContent ?? "";
    if (MECHANISM.test(text)) fails("no mechanism word in customer copy (08 · Copy rules)");
    if (!text.includes("20 %")) fails("the low-balance line names the threshold");
    // a row the price book does not price is *counted, not priced* — never 0.00
    const unpriced = Array.from(canvasElement.querySelectorAll("tbody tr")).filter(r => /counted, not priced/.test(r.textContent ?? ""));
    if (!unpriced.length) fails("an unpriced row says so instead of a zero ()");
    // S5
    const line = canvasElement.querySelector('[data-testid="operator-viewed-line"]')?.textContent ?? "";
    if (!line) fails("the transparency line is on the page ()");
    if (/usr_|@|wallet|ledger/i.test(line)) fails("the transparency line is a date only — never who or what");
    if (!canvasElement.querySelector('[data-testid="export-opt-in-switch"]')) fails("the export opt-in switch is on the page ()");
    if (canvasElement.querySelector('[data-testid="export-opt-in-switch"]')?.getAttribute("aria-checked") !== "false") fails("off by default");
    if (!canvasElement.querySelector('[data-testid="billing-more"]')) fails("⋯ holds *How credits work*");
    if (canvasElement.querySelectorAll("h1").length !== 1) fails("one header line ()");
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Populated,
  name: "ACME owner · українською",
  globals: {
    locale: "uk"
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="no-payment-line"]')) fails("uk = en: the same lines");
    if (!(canvasElement.textContent ?? "").includes("20 %")) fails("the low-balance line names the threshold in uk too");
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Boreas · prepaid against an invoice (no threshold passed, nothing expiring)",
  render: () => <BillingCreditsScreen result={ready({
    wallet: {
      ...BILLING_WALLET_BOREAS,
      priceBookVersion: null
    },
    usage: USAGE_ACME
  })} onExport={() => undefined} back={back} />
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "ACME · credits used up (0 %) — export still offered ()",
  render: () => <BillingCreditsScreen result={ready({
    wallet: BILLING_WALLET_ACME_EXHAUSTED,
    usage: USAGE_ACME
  })} onExport={() => undefined} back={back} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.textContent?.includes("stay available")) fails("exhaustion says billing, export and support stay available");
    if (!canvasElement.querySelector('[data-testid="billing-export"]')) fails("the export is reachable at 0 %");
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Lviv Coffee · fresh organization (promo only, no usage yet)",
  render: () => <BillingCreditsScreen result={ready({
    wallet: BILLING_WALLET_LVIV_COFFEE,
    usage: []
  })} onExport={() => undefined} back={back} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="wallet-buckets"]')) fails("the wallet is drawn even before any usage");
  }
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "ACME owner · opted in (the choice is in effect)",
  render: () => <BillingCreditsScreen result={ready({
    wallet: BILLING_WALLET_ACME_CUSTOMER,
    usage: USAGE_ACME,
    policy: EXPORT_POLICY_ON,
    transparency: TRANSPARENCY_NEVER
  })} onExport={() => undefined} onSetExportPolicy={noop} back={back} />,
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="export-opt-in-switch"]')?.getAttribute("aria-checked") !== "true") fails("the switch reads the door's word");
    if (!canvasElement.querySelector('[data-testid="operator-viewed-line"]')) fails("never viewed is still a line — the honest *no one has*");
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "ACME owner · opted in, the deployment has not opened it — the choice is kept, not in effect",
  render: () => <BillingCreditsScreen result={ready({
    wallet: BILLING_WALLET_ACME_CUSTOMER,
    usage: USAGE_ACME,
    policy: EXPORT_POLICY_DEPLOYMENT_OFF,
    transparency: TRANSPARENCY_VIEWED
  })} onExport={() => undefined} onSetExportPolicy={noop} back={back} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="export-opt-in-deployment-off"]')) fails("the deployment's floor is named");
    if ((canvasElement.querySelector('[data-testid="export-opt-in-state"]')?.textContent ?? "") === "On") fails("the effective state is off while the deployment is shut");
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "ACME owner · flips the switch (the change is the commit; a saved note)",
  render: () => <BillingCreditsScreen result={ready({
    wallet: BILLING_WALLET_ACME_CUSTOMER,
    usage: USAGE_ACME,
    policy: EXPORT_POLICY_OFF,
    transparency: TRANSPARENCY_VIEWED
  })} onExport={() => undefined} onSetExportPolicy={noop} back={back} />,
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="export-opt-in-switch"]')?.click();
    // the note is the screen's (header line), so it survives the page's re-read after the write
    await until(() => /recorded|записано/i.test(canvasElement.querySelector('[data-testid="saved-note"]')?.textContent ?? ""), "the saved note says the choice was recorded");
  }
}`,...C.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "ACME admin · the server refuses the change (an Owner changes this)",
  render: () => <BillingCreditsScreen result={ready({
    wallet: BILLING_WALLET_ACME_CUSTOMER,
    usage: USAGE_ACME,
    policy: EXPORT_POLICY_OFF,
    transparency: TRANSPARENCY_VIEWED
  })} onExport={() => undefined} onSetExportPolicy={async () => {
    throw new globalThis.Error("An Owner changes this.");
  }} back={back} />,
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="export-opt-in-switch"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="export-opt-in-error"]'), "the refusal is shown beside the switch (R4)");
  }
}`,...v.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Read only · the switch is read, not changed",
  render: () => <BillingCreditsScreen result={ready({
    wallet: BILLING_WALLET_ACME_CUSTOMER,
    usage: USAGE_ACME,
    policy: EXPORT_POLICY_OFF,
    transparency: TRANSPARENCY_VIEWED
  })} onExport={() => undefined} back={back} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="export-opt-in-readonly"]')) fails("who may change it is said");
  }
}`,...A.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "ACME owner · the two S5 doors did not answer (honest lines; the wallet and usage still true)",
  render: () => <BillingCreditsScreen result={ready({
    wallet: BILLING_WALLET_ACME_CUSTOMER,
    usage: USAGE_ACME,
    policy: null,
    transparency: null
  })} onExport={() => undefined} onSetExportPolicy={noop} back={back} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="export-opt-in-unavailable"]')) fails("the switch's door did not answer — said, not guessed");
    if (canvasElement.querySelector('[data-testid="export-opt-in-switch"]')) fails("no switch drawn over an unknown state");
    if (canvasElement.querySelector('[data-testid="operator-viewed-line"]')) fails("no transparency line invented");
  }
}`,...k.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "⋯ › How credits work — the whole chapter in the product ()",
  render: () => <BillingCreditsScreen result={ready({
    wallet: BILLING_WALLET_ACME_CUSTOMER,
    usage: USAGE_ACME,
    policy: EXPORT_POLICY_OFF,
    transparency: TRANSPARENCY_VIEWED
  })} onExport={() => undefined} onSetExportPolicy={noop} back={back} />,
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="billing-more"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="billing-guide-open"]'), "the menu opens");
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="billing-guide-open"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="credits-guide"]'), "the guide opens in the Inspector");
    for (const k of ["ledger", "available", "buckets", "usage", "priceBook", "lines", "refused", "transparency", "training", "never"]) {
      if (!canvasElement.querySelector(\`[data-testid="credits-guide-\${k}"]\`)) fails(\`the guide has its \${k} section\`);
    }
  }
}`,...u.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  ...GuideOpen,
  name: "⋯ › Як працюють кредити — українською (uk = en)",
  globals: {
    locale: "uk"
  }
}`,...L.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "⋯ › How credits work · Esc closes the guide and focus returns to ⋯ (A11Y-3801)",
  render: GuideOpen.render,
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="billing-more"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="billing-guide-open"]'), "the menu opens");
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="billing-guide-open"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="credits-guide"]'), "the guide opens in the Inspector");
    window.dispatchEvent(new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: true
    }));
    await until(() => !canvasElement.querySelector('[data-testid="credits-guide"]'), "Esc closes the guide");
    // the menu item that opened the guide is gone with the menu — focus lands on the ⋯ itself, never on body
    if (document.activeElement?.getAttribute("data-testid") !== "billing-more") fails("focus returned to the ⋯ that opened the guide");
  }
}`,...O.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <BillingCreditsScreen result={{
    state: "loading"
  }} back={back} />
}`,..._.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <BillingCreditsScreen result={{
    state: "error",
    retry
  }} back={back} />
}`,...P.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <BillingCreditsScreen result={{
    state: "offline",
    retry
  }} back={back} />
}`,...B.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "A member (the API's 404 — the page is the not-found page; the view's denied rung)",
  parameters: at("/core/settings/billing", "populated", "member"),
  render: () => <BillingCreditsScreen result={{
    state: "denied"
  }} back={back} />
}`,...I.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Part · TransparencyLine (viewed on a date · never · the door did not answer)",
  render: () => pad(<ul className="nexus-cc-platform-lines"><TransparencyLine transparency={TRANSPARENCY_VIEWED} /><TransparencyLine transparency={TRANSPARENCY_NEVER} /><TransparencyLine transparency={null} /></ul>),
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelectorAll('[data-testid="operator-viewed-line"]').length !== 2) fails("a door that did not answer draws nothing");
  }
}`,...q.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Part · ExportOptInSwitch (off · on · deployment shut · unavailable)",
  render: () => pad(<div className="nexus-cc-platform-stack"><ExportOptInSwitch policy={EXPORT_POLICY_OFF} onChange={noop} /><ExportOptInSwitch policy={EXPORT_POLICY_ON} onChange={noop} /><ExportOptInSwitch policy={EXPORT_POLICY_DEPLOYMENT_OFF} onChange={noop} /><ExportOptInSwitch policy={null} /></div>)
}`,...T.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Part · CreditsGuide",
  render: () => <div className="nexus-cc-split" data-inspector="open"><div className="nexus-cc-page" /><CreditsGuide onClose={() => undefined} promoExpiresOn="30 Nov 2026" /></div>
}`,...N.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  ...L.Loading,
  name: "Page · loading (in the shell)",
  decorators: [inShell],
  render: () => <BillingCreditsPage />
}`,...R.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  ...L.Error,
  name: "Page · error (in the shell)",
  decorators: [inShell],
  render: () => <BillingCreditsPage />
}`,...M.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  ...L.Offline,
  name: "Page · offline (in the shell)",
  decorators: [inShell],
  render: () => <BillingCreditsPage />
}`,...G.parameters?.docs?.source}}};export{k as DoorsUnavailable,S as Empty,P as Error,w as Exhausted,O as GuideClosedByKeyboard,u as GuideOpen,L as GuideOpenUkrainian,_ as Loading,I as NotFound,B as Offline,b as OptInDeploymentOff,x as OptInOn,A as OptInReadOnly,v as OptInRefused,C as OptInToggled,M as PageError,R as PageLoading,G as PageOffline,N as PartCreditsGuide,T as PartExportOptInSwitch,q as PartTransparencyLine,y as Populated,g as PopulatedUkrainian,f as Prepaid,vt as __namedExportsOrder,Ct as default};
