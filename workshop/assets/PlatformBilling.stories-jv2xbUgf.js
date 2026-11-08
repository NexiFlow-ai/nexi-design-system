import{j as r}from"./iframe-C_4ax-Jm.js";/* empty css                */import{g as f,R as re,l as te,G as ee,h as se,n as i}from"./billing-1IaOy8Tp.js";import{P as oe}from"./platform-BhtOchBX.js";import{P as t}from"./PlatformBilling-Vuy2rkFR.js";import"./preload-helper-PPVm8Dsz.js";import"./Parts-BEjhtEyc.js";import"./format-DO9OmoTM.js";import"./credential-Ch26UJlM.js";import"./chatApi-DU7mAKQS.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./organizationRequests-CxMYSAGe.js";import"./Operators-B8c5w-d2.js";import"./BillingParts-8YmDY42z.js";const Be={title:"Apps/NexCore/Platform Operations/Billing",parameters:{ds:"DS-6806",layout:"fullscreen",workbench:{ns:"core",path:"/core/platform/billing?as=owner"},docs:{description:{component:" S2 — Platform Operations › **Billing** ( §10 · 08 §2): price books with *Propose version* and\n*Publish* under a second operator's approval · grants against an invoice reference · the adjustments queue ·\n*Run replay* per organization — at every rung of the ladder (DS-7006), as a provider owner, a billing operator\nand a platform operator (reads only). The refusals the server names (`APPROVER_IS_PROPOSER` ·\n`PRICE_BOOK_EFFECTIVE_TOO_SOON` · `GRANT_DUPLICATE`) are shown where the action was taken (R4)."}}}},l=e=>({state:"ready",data:e}),ne=()=>{},a=e=>{throw new globalThis.Error(e)};function d(e,c){Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value")?.set?.call(e,c),e.dispatchEvent(new Event("input",{bubbles:!0}))}async function s(e,c,v=50){for(let Z=0;Z<v;Z++){if(e())return;await new Promise(ae=>setTimeout(ae,10))}a(c)}const n=(e,c)=>e.querySelector(`[data-testid="${c}"]`),p=Date.parse(oe),m={publish:!0,grant:!0,adjust:!0,replay:!0},u={publish:!0,grant:!1,adjust:!0,replay:!0},Y={publish:!1,grant:!1,adjust:!1,replay:!1},J=e=>async()=>{throw new globalThis.Error(e)},o={onPropose:async()=>{},onPublish:async()=>{},onGrant:async()=>ee,onProposeAdjustment:async()=>{},onApprove:async()=>{},onReplay:async e=>e==="org_acme"?re:te,onDraft:async()=>({kind:"draft",draft:f}),onPromote:async()=>{},onReject:async()=>{}},ie={...o,onPublish:J("The person who proposed this cannot be the one to approve it.")},le={...o,onPropose:J("The effective date is too soon — a new price book needs the notice period.")},pe={...o,onGrant:async()=>({...ee,duplicate:!0})},h={name:"Price books · provider owner (PB-v1 effective · PB-v2 pending)",render:()=>r.jsx(t,{result:l(i),now:p,permissions:m,principal:"usr_owner_nexiflow",actions:o}),play:async({canvasElement:e})=>{n(e,"operator-scope-banner")||a("every operator screen carries the scope banner (DS-6806)"),n(e,"effective-book")||a("the header line names the effective price book"),n(e,"pricebook-propose")||a("an owner may propose a version"),n(e,"publish-PB-v2")||a("the pending version offers *Publish*")}},w={...h,name:"Price books · українською",globals:{locale:"uk"}},P={name:"Price books · platform operator (reads only — no action drawn)",render:()=>r.jsx(t,{result:l(i),now:p,permissions:Y,actions:o}),play:async({canvasElement:e})=>{(n(e,"pricebook-propose")||n(e,"publish-PB-v2"))&&a("without the role nothing is offered — the server would refuse anyway")}},R={name:"Price books · Propose version (Inspector: services with unit and NXC per unit as strings)",render:()=>r.jsx(t,{result:l(i),now:p,permissions:m,principal:"usr_owner_nexiflow",actions:o}),play:async({canvasElement:e})=>{n(e,"pricebook-propose")?.click(),await s(()=>!!n(e,"pricebook-form"),"the proposal opens in the Inspector (R4)");for(const v of["pb-version","pb-effective","pb-rate","pb-services","pb-approval","pb-price-model.managed","pb-unit-model.managed"])n(e,v)||a(`the form asks for ${v}`);const c=n(e,"pb-price-model.managed");(c?.inputMode!=="decimal"||c.type==="number")&&a("an NXC price is typed as a decimal string, never a number input ()")}},E={name:"Price books · Propose version · submitted empty",render:()=>r.jsx(t,{result:l(i),now:p,permissions:m,actions:o}),play:async({canvasElement:e})=>{n(e,"pricebook-propose")?.click(),await s(()=>!!n(e,"pricebook-submit"),"the proposal form opens"),n(e,"pricebook-submit")?.click(),await s(()=>e.querySelectorAll('[data-testid="pricebook-form"] [aria-invalid="true"]').length>=3,"version, effective date, rate and approval are required")}},k={name:"Price books · Propose version refused — PRICE_BOOK_EFFECTIVE_TOO_SOON (in the form)",render:()=>r.jsx(t,{result:l(i),now:p,permissions:m,principal:"usr_owner_nexiflow",actions:le}),play:async({canvasElement:e})=>{n(e,"pricebook-propose")?.click(),await s(()=>!!n(e,"pb-version"),"the proposal form opens"),d(n(e,"pb-version"),"PB-v3");const c=e.querySelector('[data-testid="pb-effective"] input, input[data-testid="pb-effective"]');c&&d(c,"2026-12-01T00:00"),d(n(e,"pb-rate"),"1.250000"),d(n(e,"pb-approval"),"nexus://tasks/approval/apr_pb_v3"),n(e,"pricebook-submit")?.click(),await s(()=>!!e.querySelector('[data-testid="pricebook-form"] [role="alert"]')||e.querySelectorAll('[data-testid="pricebook-form"] [aria-invalid="true"]').length>0,"the refusal (or the field it names) is shown in the form")}},y={name:"Price books · Publish refused — the proposer cannot publish (APPROVER_IS_PROPOSER)",render:()=>r.jsx(t,{result:l(i),now:p,permissions:u,principal:"usr_ihor",actions:ie}),play:async({canvasElement:e})=>{n(e,"publish-PB-v2")?.click(),await s(()=>!!n(e,"publish-panel"),"publish confirms inline, under the table (R4)"),d(n(e,"approval-ref"),"nexus://tasks/approval/apr_pb_v2"),n(e,"approval-confirm")?.click(),await s(()=>!!n(e,"approval-error"),"the refusal is the sentence in the panel — honestly, not a generic error"),/cannot be the one to approve/.test(n(e,"approval-error")?.textContent??"")||a("the sentence names APPROVER_IS_PROPOSER")}},O={...y,name:"Price books · Publish refused · українською",globals:{locale:"uk"},play:void 0},B={name:"Grants · provider owner (nothing granted in this session yet)",parameters:{workbench:{ns:"core",path:"/core/platform/billing?tab=grants&as=owner"}},render:()=>r.jsx(t,{result:l(i),now:p,permissions:m,principal:"usr_owner_nexiflow",initialTab:"grants",actions:o}),play:async({canvasElement:e})=>{n(e,"grant-open")||a("a provider owner may grant credits (platform.grant.manage)"),n(e,"grants-empty")||a("before a grant the tab says so")}},T={name:"Grants · billing operator (no grant role — no form)",render:()=>r.jsx(t,{result:l(i),now:p,permissions:u,initialTab:"grants",actions:o}),play:async({canvasElement:e})=>{n(e,"grant-open")&&a("only a provider owner holds platform.grant.manage (07 §3)")}},A={name:"Grants · form open (organization · bucket · amount · invoice ≤ 64 · reason · expiry · approval)",render:()=>r.jsx(t,{result:l(i),now:p,permissions:m,principal:"usr_owner_nexiflow",initialTab:"grants",actions:o}),play:async({canvasElement:e})=>{n(e,"grant-open")?.click(),await s(()=>!!n(e,"grant-form"),"the grant form opens in the Inspector (R4)");for(const c of["grant-org","grant-bucket","grant-amount","grant-invoice","grant-reason","grant-expires","grant-approval"])n(e,c)||a(`the grant form asks for ${c}`);n(e,"grant-invoice")?.maxLength!==64&&a("an invoice reference is at most 64 characters")}},_={name:"Grants · submitted empty (amount and invoice are required)",render:()=>r.jsx(t,{result:l(i),now:p,permissions:m,initialTab:"grants",actions:o}),play:async({canvasElement:e})=>{n(e,"grant-open")?.click(),await s(()=>!!n(e,"grant-submit"),"the grant form opens"),n(e,"grant-submit")?.click(),await s(()=>e.querySelectorAll('[data-testid="grant-form"] [aria-invalid="true"]').length>=2,"amount and invoice reference are marked required")}},L={name:"Grants · granted (the lot answered, amount as the Decimal it was typed)",render:()=>r.jsx(t,{result:l(i),now:p,permissions:m,principal:"usr_owner_nexiflow",initialTab:"grants",actions:o}),play:async({canvasElement:e})=>{n(e,"grant-open")?.click(),await s(()=>!!n(e,"grant-amount"),"the grant form opens"),d(n(e,"grant-amount"),"500.000000"),d(n(e,"grant-invoice"),"INV-2026-1104"),n(e,"grant-submit")?.click(),await s(()=>!!n(e,"grant-result"),"the grant's lot is shown on the tab"),(n(e,"grant-amount")?.textContent??"").includes("500")||a("the granted amount is the number typed")}},j={name:"Grants · the same invoice twice (GRANT_DUPLICATE answered as the existing lot)",render:()=>r.jsx(t,{result:l(i),now:p,permissions:m,principal:"usr_owner_nexiflow",initialTab:"grants",actions:pe}),play:async({canvasElement:e})=>{n(e,"grant-open")?.click(),await s(()=>!!n(e,"grant-amount"),"the grant form opens"),d(n(e,"grant-amount"),"500"),d(n(e,"grant-invoice"),"INV-2026-1104"),n(e,"grant-submit")?.click(),await s(()=>!!n(e,"grant-duplicate"),"a duplicate says nothing was added twice")}},b={name:"Adjustments · the queue across the fleet (billing operator)",parameters:{workbench:{ns:"core",path:"/core/platform/billing?tab=adjustments&as=owner"}},render:()=>r.jsx(t,{result:l(i),now:p,permissions:u,principal:"usr_ihor",initialTab:"adjustments",actions:o}),play:async({canvasElement:e})=>{n(e,"adjustment-propose")||a("a billing operator may propose an adjustment"),n(e,"approve-adj_0051")||a("the pending adjustment offers *Approve*"),e.querySelector('[data-testid^="model-draft-"]')||a("a model's draft is visibly a draft ()")}},I={...b,name:"Adjustments · українською",globals:{locale:"uk"}},x={name:"Adjustments · Propose (Inspector: organization · bucket · signed amount · reason · case)",render:()=>r.jsx(t,{result:l(i),now:p,permissions:u,principal:"usr_ihor",initialTab:"adjustments",actions:o}),play:async({canvasElement:e})=>{n(e,"adjustment-propose")?.click(),await s(()=>!!n(e,"adjustment-form"),"the proposal opens in the Inspector (R4)");for(const c of["adj-org","adj-bucket","adj-amount","adj-reason","adj-case"])n(e,c)||a(`the form asks for ${c}`)}},S={name:"Adjustments · Approve refused — APPROVER_IS_PROPOSER",render:()=>r.jsx(t,{result:l(i),now:p,permissions:u,principal:"usr_ihor",initialTab:"adjustments",actions:{...o,onApprove:J("The person who proposed this cannot be the one to approve it.")}}),play:async({canvasElement:e})=>{n(e,"approve-adj_0051")?.click(),await s(()=>!!n(e,"approve-panel"),"approve confirms inline (R4)"),d(n(e,"approval-ref"),"nexus://tasks/approval/apr_adj_0051"),n(e,"approval-confirm")?.click(),await s(()=>!!n(e,"approval-error"),"the refusal is shown in the panel")}},q={name:"Replay · per organization (not run yet)",parameters:{workbench:{ns:"core",path:"/core/platform/billing?tab=replay&as=owner"}},render:()=>r.jsx(t,{result:l(i),now:p,permissions:m,initialTab:"replay",actions:o}),play:async({canvasElement:e})=>{n(e,"replay-org")||a("the organization is chosen first"),n(e,"replay-run")||a("a billing read role may run the replay")}},N={name:"Replay · ACME ran and matches",render:()=>r.jsx(t,{result:l(i),now:p,permissions:m,initialTab:"replay",actions:o}),play:async({canvasElement:e})=>{n(e,"replay-run")?.click(),await s(()=>!!n(e,"replay-verdict"),"the verdict is drawn where the button is"),e.querySelector('[data-testid^="replay-differs-"]')&&a("ACME's replay matches in the fixture — no bucket is flagged")}},M={name:"Replay · platform operator (no billing read — no action)",render:()=>r.jsx(t,{result:l(i),now:p,permissions:Y,initialTab:"replay",actions:o}),play:async({canvasElement:e})=>{n(e,"replay-run")&&a("without platform.billing.read the replay is not offered")}},G={name:"Empty · no price book yet (the first version may still be proposed)",render:()=>r.jsx(t,{result:{state:"empty"},permissions:m,actions:o}),play:async({canvasElement:e})=>{n(e,"pricebook-propose")||a("an empty price-book list still offers *Propose version*")}},D={render:()=>r.jsx(t,{result:{state:"loading"},permissions:m})},F={render:()=>r.jsx(t,{result:{state:"error",retry:ne},permissions:m})},W={name:"Denied (a URL without the operator scope is a 404 in the app — the view's denied rung)",render:()=>r.jsx(t,{result:{state:"denied"},permissions:Y})},H={render:()=>r.jsx(t,{result:{state:"offline",retry:ne},permissions:m})};function ce(e,c){Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value")?.set?.call(e,c),e.dispatchEvent(new Event("input",{bubbles:!0}))}async function Q(e){n(e,"draft-open")?.click(),await s(()=>!!n(e,"draft-form"),"the draft form opens in the Inspector (R4)"),d(n(e,"draft-case"),"case_0231"),ce(n(e,"draft-settlements"),`nexus://core/billing/settlement/stl_boreas_0231
nexus://core/billing/settlement/stl_boreas_0232`),n(e,"draft-submit")?.click()}const C={name:"Adjustments · Draft an adjustment (the organization · the Inspector form)",parameters:{workbench:{ns:"core",path:"/core/platform/billing?tab=adjustments&as=owner"}},render:()=>r.jsx(t,{result:l(i),now:p,permissions:u,principal:"usr_ihor",initialTab:"adjustments",actions:o}),play:async({canvasElement:e})=>{n(e,"draft-line")||a("the draft line names the organization beside the action"),n(e,"adjustment-propose")||a("*Propose* stays the one primary on the header line; *Draft* is the row-level action"),n(e,"draft-open")?.click(),await s(()=>!!n(e,"draft-form"),"the draft form opens in the Inspector")}},V={name:"Adjustments · a draft comes back — the row is visibly *Draft* with its candidates",render:()=>r.jsx(t,{result:l(i),now:p,permissions:u,principal:"usr_ihor",initialTab:"adjustments",actions:o}),play:async({canvasElement:e})=>{await Q(e),await s(()=>!n(e,"draft-form"),"the form closes on a draft"),n(e,`draft-chip-${f.adjustment.id}`)||a("the draft row is visibly a draft"),n(e,`candidates-${f.adjustment.id}`)||a("the candidates the door returned sit beside the row for the session")}},U={name:"Adjustments · the model abstained",render:()=>r.jsx(t,{result:l(i),now:p,permissions:u,principal:"usr_ihor",initialTab:"adjustments",actions:{...o,onDraft:async()=>({kind:"abstained",output:se})}}),play:async({canvasElement:e})=>{await Q(e),await s(()=>!!n(e,"draft-abstained"),"the abstention is said in the form; nothing is invented")}},g={name:"Adjustments · Drafting unavailable (409 DRAFTING_UNAVAILABLE)",render:()=>r.jsx(t,{result:l(i),now:p,permissions:u,principal:"usr_ihor",initialTab:"adjustments",actions:{...o,onDraft:async()=>({kind:"unavailable"})}}),play:async({canvasElement:e})=>{await Q(e),await s(()=>!!n(e,"draft-unavailable"),"the honest face: no model on this deployment")}},$={...g,name:"Adjustments · Drafting unavailable · українською",globals:{locale:"uk"}},z={name:"Adjustments · Promote a draft (human 1) — pending afterwards, approved by another",render:()=>r.jsx(t,{result:l(i),now:p,permissions:u,principal:"usr_ihor",initialTab:"adjustments",actions:o}),play:async({canvasElement:e})=>{n(e,`promote-${f.adjustment.id}`)?.click(),await s(()=>!!n(e,"promote-panel"),"promote confirms inline (R4)"),n(e,"promote-confirm")?.click(),await s(()=>!n(e,"promote-panel"),"the panel closes; the queue is re-read")}},X={name:"Adjustments · Reject a draft with a reason code",render:()=>r.jsx(t,{result:l(i),now:p,permissions:u,principal:"usr_ihor",initialTab:"adjustments",actions:o}),play:async({canvasElement:e})=>{n(e,`reject-${f.adjustment.id}`)?.click(),await s(()=>!!n(e,"reject-panel"),"reject confirms inline (R4)"),n(e,"reject-reason")||a("the reason is a closed code")}},K={name:"Adjustments · as a platform operator — no draft, no promote, no reject",render:()=>r.jsx(t,{result:l(i),now:p,permissions:Y,initialTab:"adjustments",actions:o}),play:async({canvasElement:e})=>{(n(e,"draft-open")||e.querySelector('[data-testid^="promote-"]')||e.querySelector('[data-testid^="reject-"]'))&&a("the draft face is drawn only for the adjust role"),n(e,`draft-chip-${f.adjustment.id}`)||a("the draft row is still visibly a draft to a reader")}},Te=["PriceBooks","PriceBooksUkrainian","PriceBooksReadOnly","ProposeVersionOpen","ProposeVersionRequired","ProposeVersionTooSoon","PublishRefusedSameOperator","PublishRefusedUkrainian","Grants","GrantsBillingOperator","GrantOpen","GrantRequired","GrantDone","GrantDuplicate","Adjustments","AdjustmentsUkrainian","ProposeAdjustmentOpen","ApproveRefusedSameOperator","Replay","ReplayRan","ReplayReadOnly","Empty","Loading","Error","Denied","Offline","DraftOpen","DraftDone","DraftAbstained","DraftUnavailable","DraftUnavailableUkrainian","DraftPromote","DraftReject","DraftReadOnly"];h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Price books · provider owner (PB-v1 effective · PB-v2 pending)",
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={OWNER} principal="usr_owner_nexiflow" actions={ok} />,
  play: async ({
    canvasElement
  }) => {
    if (!q(canvasElement, "operator-scope-banner")) fails("every operator screen carries the scope banner (DS-6806)");
    if (!q(canvasElement, "effective-book")) fails("the header line names the effective price book");
    if (!q(canvasElement, "pricebook-propose")) fails("an owner may propose a version");
    if (!q(canvasElement, "publish-PB-v2")) fails("the pending version offers *Publish*");
  }
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...PriceBooks,
  name: "Price books · українською",
  globals: {
    locale: "uk"
  }
}`,...w.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Price books · platform operator (reads only — no action drawn)",
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={PLATFORM_OPERATOR} actions={ok} />,
  play: async ({
    canvasElement
  }) => {
    if (q(canvasElement, "pricebook-propose") || q(canvasElement, "publish-PB-v2")) fails("without the role nothing is offered — the server would refuse anyway");
  }
}`,...P.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Price books · Propose version (Inspector: services with unit and NXC per unit as strings)",
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={OWNER} principal="usr_owner_nexiflow" actions={ok} />,
  play: async ({
    canvasElement
  }) => {
    q<HTMLButtonElement>(canvasElement, "pricebook-propose")?.click();
    await until(() => !!q(canvasElement, "pricebook-form"), "the proposal opens in the Inspector (R4)");
    for (const id of ["pb-version", "pb-effective", "pb-rate", "pb-services", "pb-approval", "pb-price-model.managed", "pb-unit-model.managed"]) {
      if (!q(canvasElement, id)) fails(\`the form asks for \${id}\`);
    }
    const price = q<HTMLInputElement>(canvasElement, "pb-price-model.managed");
    if (price?.inputMode !== "decimal" || price.type === "number") fails("an NXC price is typed as a decimal string, never a number input ()");
  }
}`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Price books · Propose version · submitted empty",
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={OWNER} actions={ok} />,
  play: async ({
    canvasElement
  }) => {
    q<HTMLButtonElement>(canvasElement, "pricebook-propose")?.click();
    await until(() => !!q(canvasElement, "pricebook-submit"), "the proposal form opens");
    q<HTMLButtonElement>(canvasElement, "pricebook-submit")?.click();
    await until(() => canvasElement.querySelectorAll('[data-testid="pricebook-form"] [aria-invalid="true"]').length >= 3, "version, effective date, rate and approval are required");
  }
}`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Price books · Propose version refused — PRICE_BOOK_EFFECTIVE_TOO_SOON (in the form)",
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={OWNER} principal="usr_owner_nexiflow" actions={tooSoon} />,
  play: async ({
    canvasElement
  }) => {
    q<HTMLButtonElement>(canvasElement, "pricebook-propose")?.click();
    await until(() => !!q(canvasElement, "pb-version"), "the proposal form opens");
    typeInto(q<HTMLInputElement>(canvasElement, "pb-version")!, "PB-v3");
    const effective = canvasElement.querySelector<HTMLInputElement>('[data-testid="pb-effective"] input, input[data-testid="pb-effective"]');
    if (effective) typeInto(effective, "2026-12-01T00:00");
    typeInto(q<HTMLInputElement>(canvasElement, "pb-rate")!, "1.250000");
    typeInto(q<HTMLInputElement>(canvasElement, "pb-approval")!, "nexus://tasks/approval/apr_pb_v3");
    q<HTMLButtonElement>(canvasElement, "pricebook-submit")?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="pricebook-form"] [role="alert"]') || canvasElement.querySelectorAll('[data-testid="pricebook-form"] [aria-invalid="true"]').length > 0, "the refusal (or the field it names) is shown in the form");
  }
}`,...k.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Price books · Publish refused — the proposer cannot publish (APPROVER_IS_PROPOSER)",
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={BILLING_OPERATOR} principal="usr_ihor" actions={proposerPublishes} />,
  play: async ({
    canvasElement
  }) => {
    q<HTMLButtonElement>(canvasElement, "publish-PB-v2")?.click();
    await until(() => !!q(canvasElement, "publish-panel"), "publish confirms inline, under the table (R4)");
    typeInto(q<HTMLInputElement>(canvasElement, "approval-ref")!, "nexus://tasks/approval/apr_pb_v2");
    q<HTMLButtonElement>(canvasElement, "approval-confirm")?.click();
    await until(() => !!q(canvasElement, "approval-error"), "the refusal is the sentence in the panel — honestly, not a generic error");
    if (!/cannot be the one to approve/.test(q(canvasElement, "approval-error")?.textContent ?? "")) fails("the sentence names APPROVER_IS_PROPOSER");
  }
}`,...y.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  ...PublishRefusedSameOperator,
  name: "Price books · Publish refused · українською",
  globals: {
    locale: "uk"
  },
  play: undefined
}`,...O.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Grants · provider owner (nothing granted in this session yet)",
  parameters: {
    workbench: {
      ns: "core",
      path: "/core/platform/billing?tab=grants&as=owner"
    }
  },
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={OWNER} principal="usr_owner_nexiflow" initialTab="grants" actions={ok} />,
  play: async ({
    canvasElement
  }) => {
    if (!q(canvasElement, "grant-open")) fails("a provider owner may grant credits (platform.grant.manage)");
    if (!q(canvasElement, "grants-empty")) fails("before a grant the tab says so");
  }
}`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Grants · billing operator (no grant role — no form)",
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={BILLING_OPERATOR} initialTab="grants" actions={ok} />,
  play: async ({
    canvasElement
  }) => {
    if (q(canvasElement, "grant-open")) fails("only a provider owner holds platform.grant.manage (07 §3)");
  }
}`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Grants · form open (organization · bucket · amount · invoice ≤ 64 · reason · expiry · approval)",
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={OWNER} principal="usr_owner_nexiflow" initialTab="grants" actions={ok} />,
  play: async ({
    canvasElement
  }) => {
    q<HTMLButtonElement>(canvasElement, "grant-open")?.click();
    await until(() => !!q(canvasElement, "grant-form"), "the grant form opens in the Inspector (R4)");
    for (const id of ["grant-org", "grant-bucket", "grant-amount", "grant-invoice", "grant-reason", "grant-expires", "grant-approval"]) {
      if (!q(canvasElement, id)) fails(\`the grant form asks for \${id}\`);
    }
    if (q<HTMLInputElement>(canvasElement, "grant-invoice")?.maxLength !== 64) fails("an invoice reference is at most 64 characters");
  }
}`,...A.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Grants · submitted empty (amount and invoice are required)",
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={OWNER} initialTab="grants" actions={ok} />,
  play: async ({
    canvasElement
  }) => {
    q<HTMLButtonElement>(canvasElement, "grant-open")?.click();
    await until(() => !!q(canvasElement, "grant-submit"), "the grant form opens");
    q<HTMLButtonElement>(canvasElement, "grant-submit")?.click();
    await until(() => canvasElement.querySelectorAll('[data-testid="grant-form"] [aria-invalid="true"]').length >= 2, "amount and invoice reference are marked required");
  }
}`,..._.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Grants · granted (the lot answered, amount as the Decimal it was typed)",
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={OWNER} principal="usr_owner_nexiflow" initialTab="grants" actions={ok} />,
  play: async ({
    canvasElement
  }) => {
    q<HTMLButtonElement>(canvasElement, "grant-open")?.click();
    await until(() => !!q(canvasElement, "grant-amount"), "the grant form opens");
    typeInto(q<HTMLInputElement>(canvasElement, "grant-amount")!, "500.000000");
    typeInto(q<HTMLInputElement>(canvasElement, "grant-invoice")!, "INV-2026-1104");
    q<HTMLButtonElement>(canvasElement, "grant-submit")?.click();
    await until(() => !!q(canvasElement, "grant-result"), "the grant's lot is shown on the tab");
    if (!(q(canvasElement, "grant-amount")?.textContent ?? "").includes("500")) fails("the granted amount is the number typed");
  }
}`,...L.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Grants · the same invoice twice (GRANT_DUPLICATE answered as the existing lot)",
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={OWNER} principal="usr_owner_nexiflow" initialTab="grants" actions={duplicateGrant} />,
  play: async ({
    canvasElement
  }) => {
    q<HTMLButtonElement>(canvasElement, "grant-open")?.click();
    await until(() => !!q(canvasElement, "grant-amount"), "the grant form opens");
    typeInto(q<HTMLInputElement>(canvasElement, "grant-amount")!, "500");
    typeInto(q<HTMLInputElement>(canvasElement, "grant-invoice")!, "INV-2026-1104");
    q<HTMLButtonElement>(canvasElement, "grant-submit")?.click();
    await until(() => !!q(canvasElement, "grant-duplicate"), "a duplicate says nothing was added twice");
  }
}`,...j.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Adjustments · the queue across the fleet (billing operator)",
  parameters: {
    workbench: {
      ns: "core",
      path: "/core/platform/billing?tab=adjustments&as=owner"
    }
  },
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={BILLING_OPERATOR} principal="usr_ihor" initialTab="adjustments" actions={ok} />,
  play: async ({
    canvasElement
  }) => {
    if (!q(canvasElement, "adjustment-propose")) fails("a billing operator may propose an adjustment");
    if (!q(canvasElement, "approve-adj_0051")) fails("the pending adjustment offers *Approve*");
    if (!canvasElement.querySelector('[data-testid^="model-draft-"]')) fails("a model's draft is visibly a draft ()");
  }
}`,...b.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  ...Adjustments,
  name: "Adjustments · українською",
  globals: {
    locale: "uk"
  }
}`,...I.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Adjustments · Propose (Inspector: organization · bucket · signed amount · reason · case)",
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={BILLING_OPERATOR} principal="usr_ihor" initialTab="adjustments" actions={ok} />,
  play: async ({
    canvasElement
  }) => {
    q<HTMLButtonElement>(canvasElement, "adjustment-propose")?.click();
    await until(() => !!q(canvasElement, "adjustment-form"), "the proposal opens in the Inspector (R4)");
    for (const id of ["adj-org", "adj-bucket", "adj-amount", "adj-reason", "adj-case"]) {
      if (!q(canvasElement, id)) fails(\`the form asks for \${id}\`);
    }
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Adjustments · Approve refused — APPROVER_IS_PROPOSER",
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={BILLING_OPERATOR} principal="usr_ihor" initialTab="adjustments" actions={{
    ...ok,
    onApprove: refuse("The person who proposed this cannot be the one to approve it.")
  }} />,
  play: async ({
    canvasElement
  }) => {
    q<HTMLButtonElement>(canvasElement, "approve-adj_0051")?.click();
    await until(() => !!q(canvasElement, "approve-panel"), "approve confirms inline (R4)");
    typeInto(q<HTMLInputElement>(canvasElement, "approval-ref")!, "nexus://tasks/approval/apr_adj_0051");
    q<HTMLButtonElement>(canvasElement, "approval-confirm")?.click();
    await until(() => !!q(canvasElement, "approval-error"), "the refusal is shown in the panel");
  }
}`,...S.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Replay · per organization (not run yet)",
  parameters: {
    workbench: {
      ns: "core",
      path: "/core/platform/billing?tab=replay&as=owner"
    }
  },
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={OWNER} initialTab="replay" actions={ok} />,
  play: async ({
    canvasElement
  }) => {
    if (!q(canvasElement, "replay-org")) fails("the organization is chosen first");
    if (!q(canvasElement, "replay-run")) fails("a billing read role may run the replay");
  }
}`,...q.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Replay · ACME ran and matches",
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={OWNER} initialTab="replay" actions={ok} />,
  play: async ({
    canvasElement
  }) => {
    q<HTMLButtonElement>(canvasElement, "replay-run")?.click();
    await until(() => !!q(canvasElement, "replay-verdict"), "the verdict is drawn where the button is");
    if (canvasElement.querySelector('[data-testid^="replay-differs-"]')) fails("ACME's replay matches in the fixture — no bucket is flagged");
  }
}`,...N.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Replay · platform operator (no billing read — no action)",
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={PLATFORM_OPERATOR} initialTab="replay" actions={ok} />,
  play: async ({
    canvasElement
  }) => {
    if (q(canvasElement, "replay-run")) fails("without platform.billing.read the replay is not offered");
  }
}`,...M.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Empty · no price book yet (the first version may still be proposed)",
  render: () => <PlatformBillingScreen result={{
    state: "empty"
  }} permissions={OWNER} actions={ok} />,
  play: async ({
    canvasElement
  }) => {
    if (!q(canvasElement, "pricebook-propose")) fails("an empty price-book list still offers *Propose version*");
  }
}`,...G.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <PlatformBillingScreen result={{
    state: "loading"
  }} permissions={OWNER} />
}`,...D.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <PlatformBillingScreen result={{
    state: "error",
    retry
  }} permissions={OWNER} />
}`,...F.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Denied (a URL without the operator scope is a 404 in the app — the view's denied rung)",
  render: () => <PlatformBillingScreen result={{
    state: "denied"
  }} permissions={PLATFORM_OPERATOR} />
}`,...W.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <PlatformBillingScreen result={{
    state: "offline",
    retry
  }} permissions={OWNER} />
}`,...H.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Adjustments · Draft an adjustment (the organization · the Inspector form)",
  parameters: {
    workbench: {
      ns: "core",
      path: "/core/platform/billing?tab=adjustments&as=owner"
    }
  },
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={BILLING_OPERATOR} principal="usr_ihor" initialTab="adjustments" actions={ok} />,
  play: async ({
    canvasElement
  }) => {
    if (!q(canvasElement, "draft-line")) fails("the draft line names the organization beside the action");
    if (!q(canvasElement, "adjustment-propose")) fails("*Propose* stays the one primary on the header line; *Draft* is the row-level action");
    q<HTMLButtonElement>(canvasElement, "draft-open")?.click();
    await until(() => !!q(canvasElement, "draft-form"), "the draft form opens in the Inspector");
  }
}`,...C.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Adjustments · a draft comes back — the row is visibly *Draft* with its candidates",
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={BILLING_OPERATOR} principal="usr_ihor" initialTab="adjustments" actions={ok} />,
  play: async ({
    canvasElement
  }) => {
    await draftThrough(canvasElement);
    await until(() => !q(canvasElement, "draft-form"), "the form closes on a draft");
    if (!q(canvasElement, \`draft-chip-\${DRAFT_BOREAS.adjustment.id}\`)) fails("the draft row is visibly a draft");
    if (!q(canvasElement, \`candidates-\${DRAFT_BOREAS.adjustment.id}\`)) fails("the candidates the door returned sit beside the row for the session");
  }
}`,...V.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Adjustments · the model abstained",
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={BILLING_OPERATOR} principal="usr_ihor" initialTab="adjustments" actions={{
    ...ok,
    onDraft: async () => ({
      kind: "abstained",
      output: DRAFT_ABSTAINED
    })
  }} />,
  play: async ({
    canvasElement
  }) => {
    await draftThrough(canvasElement);
    await until(() => !!q(canvasElement, "draft-abstained"), "the abstention is said in the form; nothing is invented");
  }
}`,...U.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Adjustments · Drafting unavailable (409 DRAFTING_UNAVAILABLE)",
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={BILLING_OPERATOR} principal="usr_ihor" initialTab="adjustments" actions={{
    ...ok,
    onDraft: async () => ({
      kind: "unavailable"
    })
  }} />,
  play: async ({
    canvasElement
  }) => {
    await draftThrough(canvasElement);
    await until(() => !!q(canvasElement, "draft-unavailable"), "the honest face: no model on this deployment");
  }
}`,...g.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  ...DraftUnavailable,
  name: "Adjustments · Drafting unavailable · українською",
  globals: {
    locale: "uk"
  }
}`,...$.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Adjustments · Promote a draft (human 1) — pending afterwards, approved by another",
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={BILLING_OPERATOR} principal="usr_ihor" initialTab="adjustments" actions={ok} />,
  play: async ({
    canvasElement
  }) => {
    q<HTMLButtonElement>(canvasElement, \`promote-\${DRAFT_BOREAS.adjustment.id}\`)?.click();
    await until(() => !!q(canvasElement, "promote-panel"), "promote confirms inline (R4)");
    q<HTMLButtonElement>(canvasElement, "promote-confirm")?.click();
    await until(() => !q(canvasElement, "promote-panel"), "the panel closes; the queue is re-read");
  }
}`,...z.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Adjustments · Reject a draft with a reason code",
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={BILLING_OPERATOR} principal="usr_ihor" initialTab="adjustments" actions={ok} />,
  play: async ({
    canvasElement
  }) => {
    q<HTMLButtonElement>(canvasElement, \`reject-\${DRAFT_BOREAS.adjustment.id}\`)?.click();
    await until(() => !!q(canvasElement, "reject-panel"), "reject confirms inline (R4)");
    if (!q(canvasElement, "reject-reason")) fails("the reason is a closed code");
  }
}`,...X.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Adjustments · as a platform operator — no draft, no promote, no reject",
  render: () => <PlatformBillingScreen result={ready(PLATFORM_BILLING)} now={NOW} permissions={PLATFORM_OPERATOR} initialTab="adjustments" actions={ok} />,
  play: async ({
    canvasElement
  }) => {
    if (q(canvasElement, "draft-open") || canvasElement.querySelector('[data-testid^="promote-"]') || canvasElement.querySelector('[data-testid^="reject-"]')) fails("the draft face is drawn only for the adjust role");
    if (!q(canvasElement, \`draft-chip-\${DRAFT_BOREAS.adjustment.id}\`)) fails("the draft row is still visibly a draft to a reader");
  }
}`,...K.parameters?.docs?.source}}};export{b as Adjustments,I as AdjustmentsUkrainian,S as ApproveRefusedSameOperator,W as Denied,U as DraftAbstained,V as DraftDone,C as DraftOpen,z as DraftPromote,K as DraftReadOnly,X as DraftReject,g as DraftUnavailable,$ as DraftUnavailableUkrainian,G as Empty,F as Error,L as GrantDone,j as GrantDuplicate,A as GrantOpen,_ as GrantRequired,B as Grants,T as GrantsBillingOperator,D as Loading,H as Offline,h as PriceBooks,P as PriceBooksReadOnly,w as PriceBooksUkrainian,x as ProposeAdjustmentOpen,R as ProposeVersionOpen,E as ProposeVersionRequired,k as ProposeVersionTooSoon,y as PublishRefusedSameOperator,O as PublishRefusedUkrainian,q as Replay,N as ReplayRan,M as ReplayReadOnly,Te as __namedExportsOrder,Be as default};
