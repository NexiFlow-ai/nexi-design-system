import{j as a}from"./iframe-C_4ax-Jm.js";/* empty css                */import{g as ce,h as Te,A as pe,i as l,G as Ae,O as Se,F as De,j as fe,k as Pe,a as ke,S as qe,P as ye,R as Ee,l as _e}from"./billing-1IaOy8Tp.js";import{D as E,A as d,G as be,a as Le,b as je,c as p,d as Ne,W as ue,L as xe,S as Re,P as me,R as b,e as Ce,f as Me}from"./BillingParts-8YmDY42z.js";import"./preload-helper-PPVm8Dsz.js";import"./platform-BhtOchBX.js";import"./format-DO9OmoTM.js";import"./credential-Ch26UJlM.js";import"./chatApi-DU7mAKQS.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./organizationRequests-CxMYSAGe.js";const Ze={title:"Apps/NexCore/Platform Operations/Billing parts",parameters:{ds:"DS-6805",layout:"fullscreen",docs:{description:{component:" S2 — the billing parts of Platform Operations (operator-only), each at its states (DS-7006). They are\ncompositions of kit primitives (`DS-4xxx` Facts · DataTable · Chip · StatusDot · ActionPanel · Stat) over the S0\nrows `DS-6802` (wallet) and `DS-6805` (ledger); no new idiom. Every amount is a Decimal string the display rounds\nwith integer arithmetic (); every number names what it is. Fixtures: `fixtures/billing.ts` (synthetic)."}}}},r=e=>a.jsx("div",{className:"nexus-cc-page","data-width":"wide",children:e}),t=e=>{throw new globalThis.Error(e)},s=async()=>{},he=async()=>{throw new globalThis.Error("The person who proposed this cannot be the one to approve it.")};function m(e,n){Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value")?.set?.call(e,n),e.dispatchEvent(new Event("input",{bubbles:!0}))}async function o(e,n,u=50){for(let ge=0;ge<u;ge++){if(e())return;await new Promise(Be=>setTimeout(Be,10))}t(n)}const c=Object.fromEntries(De.map(e=>[e.id,e.name])),j={name:"Amount · Decimal strings as the display rounds them (en · uk · not yet)",render:()=>r(a.jsxs("ul",{className:"nexus-cc-platform-lines",children:[a.jsx("li",{children:a.jsx(p,{value:"12.500000",locale:"en",testId:"amount-en"})}),a.jsx("li",{children:a.jsx(p,{value:"1234567.891234",locale:"en",testId:"amount-big"})}),a.jsx("li",{children:a.jsx(p,{value:"-0.005000",locale:"en",testId:"amount-neg"})}),a.jsx("li",{children:a.jsx(p,{value:"12.500000",locale:"uk",testId:"amount-uk"})}),a.jsx("li",{children:a.jsx(p,{value:null,locale:"en",testId:"amount-null"})})]})),play:async({canvasElement:e})=>{const n=u=>e.querySelector(`[data-testid="${u}"]`)?.textContent??"";n("amount-en")!=="12.50"&&t(`"12.500000" draws as 12.50, got ${n("amount-en")}`),n("amount-big")!=="1,234,567.89"&&t(`a big amount keeps every digit and the locale's separators, got ${n("amount-big")}`),n("amount-neg")!=="-0.01"&&t(`a negative rounds half-up away from zero, got ${n("amount-neg")}`),/^12,50$/.test(n("amount-uk"))||t(`uk draws a comma, got ${n("amount-uk")}`),n("amount-null")!=="—"&&t("an absent amount is a dash — never a zero ()")}},x={name:"Approval panel · a second operator's act (reference required; refusal shown in place)",render:()=>r(a.jsx(Ne,{title:"Publish price book PB-v2",body:"Signed on publication; effective from its date for every organization.",confirmLabel:"Publish",pendingLabel:"Publishing…",onConfirm:he,onCancel:()=>{}})),play:async({canvasElement:e})=>{e.querySelector('[data-testid="approval-confirm"]')?.click(),await o(()=>!!e.querySelector('[data-testid="approval-panel"] [aria-invalid="true"]'),"without a reference nothing is sent"),m(e.querySelector('[data-testid="approval-ref"]'),"nexus://tasks/approval/apr_pb_v2"),e.querySelector('[data-testid="approval-confirm"]')?.click(),await o(()=>!!e.querySelector('[data-testid="approval-error"]'),"the server's refusal is the sentence in the panel")}},f={name:"Wallet facts · ACME (trial, prepaid, observe mode — nothing refused yet, S2 F11)",render:()=>r(a.jsx(ue,{wallet:fe,enforce:!1})),play:async({canvasElement:e})=>{(e.querySelector('[data-testid="wallet-granted-total"]')?.textContent??"").includes("300")||t("granted in total is the Decimal string drawn as a number (300.000000 → 300.00)");const u=e.textContent??"";u.includes("20 %")||t("the threshold passed is named"),u.includes("nothing is refused yet")||t("observe mode says usage is recorded and nothing is refused ()"),u.includes("stop at 0")&&t("observe mode never promises that runs stop at 0")}},R={name:"Wallet facts · ACME (trial, prepaid, enforcing — runs stop at 0)",render:()=>r(a.jsx(ue,{wallet:fe,enforce:!0})),play:async({canvasElement:e})=>{(e.textContent??"").includes("stop at 0")||t("an enforcing deployment says runs stop at 0")}},w={name:"Wallet facts · ACME (health door did not answer — the honest default)",render:()=>r(a.jsx(ue,{wallet:fe,enforce:null})),play:async({canvasElement:e})=>{(e.textContent??"").includes("nothing is refused yet")||t("an unknown mode is drawn as the observe line, never as a promise to stop")}},B={name:"Wallet facts · Halych (contract commitment with a floor — )",render:()=>r(a.jsx(ue,{wallet:Pe}))},T={...f,name:"Wallet facts · українською",globals:{locale:"uk"},play:async({canvasElement:e})=>{const n=e.textContent??"";n.includes("20 %")||t("the threshold passed is named"),n.includes("нічого не відхиляється")||t("uk says the same: usage is recorded, nothing is refused yet (uk = en)")}},D={name:"Lots · Boreas (promo spent · invoice lot · adjustment lot)",render:()=>r(a.jsx(xe,{lots:ke.lots}))},P={name:"Lots · empty",render:()=>r(a.jsx(xe,{lots:[]}))},k={name:"Reservations open · ACME (one run holding 12 NXC)",render:()=>r(a.jsx(je,{reservations:Se.reservations,reservedTotal:Se.wallet.reserved})),play:async({canvasElement:e})=>{(e.querySelector('[data-testid="reserved-total"]')?.textContent??"").includes("12")||t("the reserved total is named above the list")}},q={name:"Reservations open · none",render:()=>r(a.jsx(je,{reservations:[],reservedTotal:"0.000000"}))},y={name:"Settlements · ACME (an unmetered child · an observed denial · a shortfall)",render:()=>r(a.jsx(Re,{settlements:qe})),play:async({canvasElement:e})=>{e.querySelector('[data-testid^="unmetered-"]')||t("a settlement with an unmetered child carries the chip ()"),e.querySelector('[data-testid^="observed-denial-"]')||t("a run that went on past a denial carries the chip ()")}},_={name:"Settlements · none yet",render:()=>r(a.jsx(Re,{settlements:[]}))},L={...y,name:"Settlements · українською",globals:{locale:"uk"}},N={name:"Adjustments · the queue (pending · applied · a model's draft · rejected)",render:()=>r(a.jsx(d,{adjustments:l,orgNames:c,showOrg:!0,onApprove:s})),play:async({canvasElement:e})=>{e.querySelector('[data-testid^="model-draft-"]')||t("a model's draft is visibly a draft ()"),e.querySelectorAll('[data-testid^="approve-adj_"]').length!==1&&t("only a pending adjustment offers *Approve*")}},C={name:"Adjustments · Approve · needs an approval reference",render:()=>r(a.jsx(d,{adjustments:l,orgNames:c,showOrg:!0,onApprove:s})),play:async({canvasElement:e})=>{e.querySelector('[data-testid="approve-adj_0051"]')?.click(),await o(()=>!!e.querySelector('[data-testid="approve-panel"]'),"approve confirms inline, where the row is (R4)"),e.querySelector('[data-testid="approval-confirm"]')?.click(),await o(()=>!!e.querySelector('[data-testid="approve-panel"] [aria-invalid="true"]'),"an approval without a reference does not go")}},M={name:"Adjustments · Approve refused — APPROVER_IS_PROPOSER (shown where it was taken)",render:()=>r(a.jsx(d,{adjustments:l,orgNames:c,showOrg:!0,onApprove:he})),play:async({canvasElement:e})=>{e.querySelector('[data-testid="approve-adj_0051"]')?.click(),await o(()=>!!e.querySelector('[data-testid="approval-ref"]'),"the approve panel opens"),m(e.querySelector('[data-testid="approval-ref"]'),"nexus://tasks/approval/apr_adj_0051"),e.querySelector('[data-testid="approval-confirm"]')?.click(),await o(()=>!!e.querySelector('[data-testid="approval-error"]'),"the server's refusal is the sentence in the panel")}},O={name:"Adjustments · read only (no adjust role — no action drawn)",render:()=>r(a.jsx(d,{adjustments:l,orgNames:c,showOrg:!0}))},F={name:"Adjustments · empty",render:()=>r(a.jsx(d,{adjustments:[],onApprove:s}))},h={name:"Price books · PB-v1 published and signed · PB-v2 pending",render:()=>r(a.jsx(me,{books:ye,effectiveVersion:"PB-v1",onPublish:s})),play:async({canvasElement:e})=>{e.querySelector('[data-testid="signed-PB-v1"]')||t("a published book shows its signature and key id ()"),e.querySelector('[data-testid="effective-PB-v1"]')||t("the effective version is marked"),e.querySelector('[data-testid="publish-PB-v2"]')||t("a pending version offers *Publish*")}},I={name:"Price books · Publish refused — the proposer cannot publish (APPROVER_IS_PROPOSER)",render:()=>r(a.jsx(me,{books:ye,effectiveVersion:"PB-v1",onPublish:he})),play:async({canvasElement:e})=>{e.querySelector('[data-testid="publish-PB-v2"]')?.click(),await o(()=>!!e.querySelector('[data-testid="publish-panel"]'),"publish confirms inline (R4)"),m(e.querySelector('[data-testid="approval-ref"]'),"nexus://tasks/approval/apr_pb_v2"),e.querySelector('[data-testid="approval-confirm"]')?.click(),await o(()=>!!e.querySelector('[data-testid="approval-error"]'),"the refusal names itself in the panel")}},W={name:"Price books · read only (no publish role)",render:()=>r(a.jsx(me,{books:ye,effectiveVersion:"PB-v1"}))},U={name:"Price books · none yet",render:()=>r(a.jsx(me,{books:[],onPublish:s}))},G={...h,name:"Price books · українською",globals:{locale:"uk"}},H={name:"Replay · not run yet (action drawn)",render:()=>r(a.jsx(b,{result:null,onRun:s,orgName:"ACME Manufacturing"}))},$={name:"Replay · ACME matches",render:()=>r(a.jsx(b,{result:Ee,onRun:s})),play:async({canvasElement:e})=>{e.querySelector('[data-testid="replay-verdict"]')||t("the verdict is named"),e.querySelector('[data-testid^="replay-differs-"]')&&t("a matched replay flags no bucket")}},J={name:"Replay · ACME differs (nothing corrected — )",render:()=>r(a.jsx(b,{result:_e,onRun:s})),play:async({canvasElement:e})=>{e.querySelector('[data-testid="replay-differs-promo"]')||t("the bucket that differs is flagged")}},V={name:"Replay · billing did not answer (BILLING_UNAVAILABLE)",render:()=>r(a.jsx(b,{result:null,onRun:async()=>{throw new globalThis.Error("Billing did not answer; nothing was recorded. Try again.")}})),play:async({canvasElement:e})=>{e.querySelector('[data-testid="replay-run"]')?.click(),await o(()=>!!e.querySelector('[data-testid="replay-error"]'),"a failed replay says so where the button is")}},Y={name:"Replay · result only (no action for this role)",render:()=>r(a.jsx(b,{result:Ee}))},z={name:"Grant result · Boreas, 500 NXC prepaid against an invoice",render:()=>r(a.jsx(be,{result:Ae,orgName:"Boreas Dynamics"}))},K={name:"Grant result · the same invoice twice (GRANT_DUPLICATE as the existing lot)",render:()=>r(a.jsx(be,{result:{...Ae,duplicate:!0},orgName:"Boreas Dynamics"})),play:async({canvasElement:e})=>{e.querySelector('[data-testid="grant-duplicate"]')||t("a duplicate grant says nothing was added twice")}},i=ce.adjustment,we=async()=>({kind:"draft",draft:ce}),Oe=async()=>({kind:"abstained",output:Te}),Fe=async()=>({kind:"unavailable"}),Ie=async()=>{throw new globalThis.Error("Not a settlement reference.")};function ve(e,n){Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value")?.set?.call(e,n),e.dispatchEvent(new Event("input",{bubbles:!0}))}const v={name:"Adjustments · a draft row (visibly *Draft* · model draft · the candidates · promote and reject)",render:()=>r(a.jsx(d,{adjustments:l,orgNames:c,showOrg:!0,drafts:{[i.id]:ce.output},onApprove:s,onPromote:s,onReject:s})),play:async({canvasElement:e})=>{e.querySelector(`[data-testid="draft-chip-${i.id}"]`)||t("a draft is visibly a draft — a chip, not a status dot"),e.querySelector(`[data-testid="model-draft-${i.id}"]`)||t("its origin is said (llm_proposed → model draft; rule 85)"),e.querySelector(`[data-testid="candidates-${i.id}"]`)||t("the candidates the draft also considered are disclosed"),e.querySelector(`[data-testid="promote-${i.id}"]`)||t("a draft offers *Promote*"),e.querySelector(`[data-testid="reject-${i.id}"]`)||t("a draft offers *Reject*"),e.querySelector(`[data-testid="approve-${i.id}"]`)&&t("a draft is never approved directly — a person promotes it first ()"),e.querySelector('[data-testid="approve-adj_0051"]')||t("a pending row still offers *Approve* (the S3 idiom)"),e.querySelector('[data-testid="reject-adj_0051"]')||t("a pending row may be rejected with a reason")}},X={...v,name:"Adjustments · a draft row · українською",globals:{locale:"uk"}},Q={name:"Adjustments · a rejected draft stays, with who and why",render:()=>r(a.jsx(d,{adjustments:[pe,...l],orgNames:c,showOrg:!0,onApprove:s,onPromote:s,onReject:s})),play:async({canvasElement:e})=>{e.querySelector(`[data-testid="rejected-${pe.id}"]`)||t("the rejection names who and the reason code"),e.querySelector(`[data-testid="promote-${pe.id}"]`)&&t("a rejected row offers nothing")}},Z={name:"Adjustments · Promote (inline — human 1 takes the draft; it is pending afterwards)",render:()=>r(a.jsx(d,{adjustments:l,orgNames:c,showOrg:!0,onPromote:s,onReject:s})),play:async({canvasElement:e})=>{e.querySelector(`[data-testid="promote-${i.id}"]`)?.click(),await o(()=>!!e.querySelector('[data-testid="promote-panel"]'),"promote confirms inline, on the page (R4)"),e.querySelector('[data-testid="promote-confirm"]')||t("one primary in the panel")}},ee={name:"Adjustments · Promote refused by the server (ADJUSTMENT_NOT_DRAFT)",render:()=>r(a.jsx(d,{adjustments:l,orgNames:c,showOrg:!0,onPromote:async()=>{throw new globalThis.Error("This adjustment is not a draft any more.")},onReject:s})),play:async({canvasElement:e})=>{e.querySelector(`[data-testid="promote-${i.id}"]`)?.click(),await o(()=>!!e.querySelector('[data-testid="promote-confirm"]'),"the panel opens"),e.querySelector('[data-testid="promote-confirm"]')?.click(),await o(()=>!!e.querySelector('[data-testid="promote-error"]'),"the refusal is shown where the action was taken")}},g={name:"Adjustments · Reject (inline — a closed reason code, never free text)",render:()=>r(a.jsx(d,{adjustments:l,orgNames:c,showOrg:!0,onPromote:s,onReject:s})),play:async({canvasElement:e})=>{e.querySelector(`[data-testid="reject-${i.id}"]`)?.click(),await o(()=>!!e.querySelector('[data-testid="reject-panel"]'),"reject confirms inline (R4)"),e.querySelector('[data-testid="reject-reason"] [role="combobox"]')||t("the reason is a closed select (AdjustmentReasonCode)"),e.querySelector('[data-testid="reject-panel"] input[type="text"]')&&t("no free-text reason")}},ae={...g,name:"Adjustments · Reject · українською",globals:{locale:"uk"}},S={name:"Draft an adjustment · the form (case · settlement refs · execution refs · the hint)",render:()=>a.jsxs("div",{className:"nexus-cc-split","data-inspector":"open",children:[a.jsx("div",{className:"nexus-cc-page"}),a.jsx(E,{orgId:"org_boreas",orgName:"Boreas Logistics",onClose:()=>{},onDraft:we})]}),play:async({canvasElement:e})=>{for(const n of["draft-case","draft-settlements","draft-executions","draft-hint-bucket","draft-hint-amount","draft-hint-reason","draft-submit"])e.querySelector(`[data-testid="${n}"]`)||t(`the form has ${n}`)}},te={...S,name:"Draft an adjustment · українською",globals:{locale:"uk"}},re={name:"Draft an adjustment · submitted empty (a case and at least one reference)",render:()=>a.jsxs("div",{className:"nexus-cc-split","data-inspector":"open",children:[a.jsx("div",{className:"nexus-cc-page"}),a.jsx(E,{orgId:"org_boreas",onClose:()=>{},onDraft:we})]}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="draft-submit"]')?.click(),await o(()=>e.querySelectorAll('[data-testid="draft-form"] [aria-invalid="true"]').length>=2,"the case and the references are marked; nothing is sent")}},ne={name:"Draft an adjustment · a reference that is not a settlement's is refused before the door",render:()=>a.jsxs("div",{className:"nexus-cc-split","data-inspector":"open",children:[a.jsx("div",{className:"nexus-cc-page"}),a.jsx(E,{orgId:"org_boreas",onClose:()=>{},onDraft:Ie})]}),play:async({canvasElement:e})=>{m(e.querySelector('[data-testid="draft-case"]'),"case_0231"),ve(e.querySelector('[data-testid="draft-settlements"]'),"https://example.test/not-a-ref"),e.querySelector('[data-testid="draft-submit"]')?.click(),await o(()=>!!e.querySelector('[data-testid="draft-settlements"][aria-invalid="true"]'),"the shape is checked in the browser; the door still decides")}},se={name:"Draft an adjustment · the model abstained (no row — propose by hand)",render:()=>a.jsxs("div",{className:"nexus-cc-split","data-inspector":"open",children:[a.jsx("div",{className:"nexus-cc-page"}),a.jsx(E,{orgId:"org_boreas",onClose:()=>{},onDraft:Oe})]}),play:async({canvasElement:e})=>{m(e.querySelector('[data-testid="draft-case"]'),"case_0231"),ve(e.querySelector('[data-testid="draft-settlements"]'),"nexus://core/billing/settlement/stl_boreas_0231"),e.querySelector('[data-testid="draft-submit"]')?.click(),await o(()=>!!e.querySelector('[data-testid="draft-abstained"]'),"the abstention is said; no draft is invented")}},A={name:"Draft an adjustment · Drafting unavailable (409 DRAFTING_UNAVAILABLE — no model on this deployment)",render:()=>a.jsxs("div",{className:"nexus-cc-split","data-inspector":"open",children:[a.jsx("div",{className:"nexus-cc-page"}),a.jsx(E,{orgId:"org_boreas",onClose:()=>{},onDraft:Fe})]}),play:async({canvasElement:e})=>{m(e.querySelector('[data-testid="draft-case"]'),"case_0231"),ve(e.querySelector('[data-testid="draft-settlements"]'),"nexus://core/billing/settlement/stl_boreas_0231"),e.querySelector('[data-testid="draft-submit"]')?.click(),await o(()=>!!e.querySelector('[data-testid="draft-unavailable"]'),"the honest *Drafting unavailable* face, not an error sentence"),e.querySelector('[data-testid="draft-submit"]')?.disabled||t("the door said no model — the button is not offered again ()")}},oe={...A,name:"Draft an adjustment · Drafting unavailable · українською",globals:{locale:"uk"}},ie={name:"Part · DraftCandidates (two candidates with basis and confidence)",render:()=>r(a.jsx(Le,{output:ce.output,adjustmentId:i.id}))},de={name:"Part · PromotePanel",render:()=>r(a.jsx(Ce,{adjustment:i,orgName:"Boreas Logistics",onConfirm:s,onCancel:()=>{}}))},le={name:"Part · RejectPanel",render:()=>r(a.jsx(Me,{adjustment:i,orgName:"Boreas Logistics",onConfirm:s,onCancel:()=>{}}))},ea=["Amounts","Approval","WalletFactsTrial","WalletFactsTrialEnforced","WalletFactsTrialModeUnknown","WalletFactsPostpaid","WalletFactsUkrainian","Lots","LotsEmpty","Reservations","ReservationsEmpty","Settlements","SettlementsEmpty","SettlementsUkrainian","Adjustments","AdjustmentsApprove","AdjustmentsApproveRefused","AdjustmentsReadOnly","AdjustmentsEmpty","PriceBooks","PriceBooksPublishRefused","PriceBooksReadOnly","PriceBooksEmpty","PriceBooksUkrainian","ReplayNotRun","ReplayMatched","ReplayMismatch","ReplayRefused","ReplayReadOnly","GrantResult","GrantResultDuplicate","DraftRow","DraftRowUkrainian","DraftRejected","DraftPromote","DraftPromoteRefused","DraftReject","DraftRejectUkrainian","DraftForm","DraftFormUkrainian","DraftFormRequired","DraftFormBadRef","DraftFormAbstained","DraftFormUnavailable","DraftFormUnavailableUkrainian","PartDraftCandidates","PartPromotePanel","PartRejectPanel"];j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Amount · Decimal strings as the display rounds them (en · uk · not yet)",
  render: () => pad(<ul className="nexus-cc-platform-lines">
        <li><Amount value="12.500000" locale="en" testId="amount-en" /></li>
        <li><Amount value="1234567.891234" locale="en" testId="amount-big" /></li>
        <li><Amount value="-0.005000" locale="en" testId="amount-neg" /></li>
        <li><Amount value="12.500000" locale="uk" testId="amount-uk" /></li>
        <li><Amount value={null} locale="en" testId="amount-null" /></li>
      </ul>),
  play: async ({
    canvasElement
  }) => {
    const text = (id: string) => canvasElement.querySelector(\`[data-testid="\${id}"]\`)?.textContent ?? "";
    if (text("amount-en") !== "12.50") fails(\`"12.500000" draws as 12.50, got \${text("amount-en")}\`);
    if (text("amount-big") !== "1,234,567.89") fails(\`a big amount keeps every digit and the locale's separators, got \${text("amount-big")}\`);
    if (text("amount-neg") !== "-0.01") fails(\`a negative rounds half-up away from zero, got \${text("amount-neg")}\`);
    if (!/^12,50$/.test(text("amount-uk"))) fails(\`uk draws a comma, got \${text("amount-uk")}\`);
    if (text("amount-null") !== "—") fails("an absent amount is a dash — never a zero ()");
  }
}`,...j.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Approval panel · a second operator's act (reference required; refusal shown in place)",
  render: () => pad(<ApprovalPanel title="Publish price book PB-v2" body="Signed on publication; effective from its date for every organization." confirmLabel="Publish" pendingLabel="Publishing…" onConfirm={sameOperator} onCancel={() => undefined} />),
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="approval-confirm"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="approval-panel"] [aria-invalid="true"]'), "without a reference nothing is sent");
    typeInto(canvasElement.querySelector<HTMLInputElement>('[data-testid="approval-ref"]')!, "nexus://tasks/approval/apr_pb_v2");
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="approval-confirm"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="approval-error"]'), "the server's refusal is the sentence in the panel");
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Wallet facts · ACME (trial, prepaid, observe mode — nothing refused yet, S2 F11)",
  render: () => pad(<WalletFacts wallet={BILLING_WALLET_ACME} enforce={false} />),
  play: async ({
    canvasElement
  }) => {
    const granted = canvasElement.querySelector('[data-testid="wallet-granted-total"]')?.textContent ?? "";
    if (!granted.includes("300")) fails("granted in total is the Decimal string drawn as a number (300.000000 → 300.00)");
    const text = canvasElement.textContent ?? "";
    if (!text.includes("20 %")) fails("the threshold passed is named");
    if (!text.includes("nothing is refused yet")) fails("observe mode says usage is recorded and nothing is refused ()");
    if (text.includes("stop at 0")) fails("observe mode never promises that runs stop at 0");
  }
}`,...f.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Wallet facts · ACME (trial, prepaid, enforcing — runs stop at 0)",
  render: () => pad(<WalletFacts wallet={BILLING_WALLET_ACME} enforce />),
  play: async ({
    canvasElement
  }) => {
    if (!(canvasElement.textContent ?? "").includes("stop at 0")) fails("an enforcing deployment says runs stop at 0");
  }
}`,...R.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Wallet facts · ACME (health door did not answer — the honest default)",
  render: () => pad(<WalletFacts wallet={BILLING_WALLET_ACME} enforce={null} />),
  play: async ({
    canvasElement
  }) => {
    if (!(canvasElement.textContent ?? "").includes("nothing is refused yet")) fails("an unknown mode is drawn as the observe line, never as a promise to stop");
  }
}`,...w.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Wallet facts · Halych (contract commitment with a floor — )",
  render: () => pad(<WalletFacts wallet={BILLING_WALLET_HALYCH} />)
}`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...WalletFactsTrial,
  name: "Wallet facts · українською",
  globals: {
    locale: "uk"
  },
  play: async ({
    canvasElement
  }) => {
    const text = canvasElement.textContent ?? "";
    if (!text.includes("20 %")) fails("the threshold passed is named");
    if (!text.includes("нічого не відхиляється")) fails("uk says the same: usage is recorded, nothing is refused yet (uk = en)");
  }
}`,...T.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Lots · Boreas (promo spent · invoice lot · adjustment lot)",
  render: () => pad(<LotsTable lots={BILLING_WALLET_BOREAS.lots} />)
}`,...D.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Lots · empty",
  render: () => pad(<LotsTable lots={[]} />)
}`,...P.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Reservations open · ACME (one run holding 12 NXC)",
  render: () => pad(<ReservationsList reservations={ORG_BILLING_ACME.reservations} reservedTotal={ORG_BILLING_ACME.wallet.reserved} />),
  play: async ({
    canvasElement
  }) => {
    if (!(canvasElement.querySelector('[data-testid="reserved-total"]')?.textContent ?? "").includes("12")) fails("the reserved total is named above the list");
  }
}`,...k.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Reservations open · none",
  render: () => pad(<ReservationsList reservations={[]} reservedTotal="0.000000" />)
}`,...q.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Settlements · ACME (an unmetered child · an observed denial · a shortfall)",
  render: () => pad(<SettlementsTable settlements={SETTLEMENTS_ACME} />),
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid^="unmetered-"]')) fails("a settlement with an unmetered child carries the chip ()");
    if (!canvasElement.querySelector('[data-testid^="observed-denial-"]')) fails("a run that went on past a denial carries the chip ()");
  }
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Settlements · none yet",
  render: () => pad(<SettlementsTable settlements={[]} />)
}`,..._.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  ...Settlements,
  name: "Settlements · українською",
  globals: {
    locale: "uk"
  }
}`,...L.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Adjustments · the queue (pending · applied · a model's draft · rejected)",
  render: () => pad(<AdjustmentsTable adjustments={ADJUSTMENTS} orgNames={ORG_NAMES} showOrg onApprove={noop} />),
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid^="model-draft-"]')) fails("a model's draft is visibly a draft ()");
    if (canvasElement.querySelectorAll('[data-testid^="approve-adj_"]').length !== 1) fails("only a pending adjustment offers *Approve*");
  }
}`,...N.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Adjustments · Approve · needs an approval reference",
  render: () => pad(<AdjustmentsTable adjustments={ADJUSTMENTS} orgNames={ORG_NAMES} showOrg onApprove={noop} />),
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="approve-adj_0051"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="approve-panel"]'), "approve confirms inline, where the row is (R4)");
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="approval-confirm"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="approve-panel"] [aria-invalid="true"]'), "an approval without a reference does not go");
  }
}`,...C.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Adjustments · Approve refused — APPROVER_IS_PROPOSER (shown where it was taken)",
  render: () => pad(<AdjustmentsTable adjustments={ADJUSTMENTS} orgNames={ORG_NAMES} showOrg onApprove={sameOperator} />),
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="approve-adj_0051"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="approval-ref"]'), "the approve panel opens");
    typeInto(canvasElement.querySelector<HTMLInputElement>('[data-testid="approval-ref"]')!, "nexus://tasks/approval/apr_adj_0051");
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="approval-confirm"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="approval-error"]'), "the server's refusal is the sentence in the panel");
  }
}`,...M.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Adjustments · read only (no adjust role — no action drawn)",
  render: () => pad(<AdjustmentsTable adjustments={ADJUSTMENTS} orgNames={ORG_NAMES} showOrg />)
}`,...O.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Adjustments · empty",
  render: () => pad(<AdjustmentsTable adjustments={[]} onApprove={noop} />)
}`,...F.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Price books · PB-v1 published and signed · PB-v2 pending",
  render: () => pad(<PriceBooksTable books={PRICE_BOOKS} effectiveVersion="PB-v1" onPublish={noop} />),
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="signed-PB-v1"]')) fails("a published book shows its signature and key id ()");
    if (!canvasElement.querySelector('[data-testid="effective-PB-v1"]')) fails("the effective version is marked");
    if (!canvasElement.querySelector('[data-testid="publish-PB-v2"]')) fails("a pending version offers *Publish*");
  }
}`,...h.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Price books · Publish refused — the proposer cannot publish (APPROVER_IS_PROPOSER)",
  render: () => pad(<PriceBooksTable books={PRICE_BOOKS} effectiveVersion="PB-v1" onPublish={sameOperator} />),
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="publish-PB-v2"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="publish-panel"]'), "publish confirms inline (R4)");
    typeInto(canvasElement.querySelector<HTMLInputElement>('[data-testid="approval-ref"]')!, "nexus://tasks/approval/apr_pb_v2");
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="approval-confirm"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="approval-error"]'), "the refusal names itself in the panel");
  }
}`,...I.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Price books · read only (no publish role)",
  render: () => pad(<PriceBooksTable books={PRICE_BOOKS} effectiveVersion="PB-v1" />)
}`,...W.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Price books · none yet",
  render: () => pad(<PriceBooksTable books={[]} onPublish={noop} />)
}`,...U.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  ...PriceBooks,
  name: "Price books · українською",
  globals: {
    locale: "uk"
  }
}`,...G.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Replay · not run yet (action drawn)",
  render: () => pad(<ReplayPanel result={null} onRun={noop} orgName="ACME Manufacturing" />)
}`,...H.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: "Replay · ACME matches",
  render: () => pad(<ReplayPanel result={REPLAY_ACME_MATCHED} onRun={noop} />),
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="replay-verdict"]')) fails("the verdict is named");
    if (canvasElement.querySelector('[data-testid^="replay-differs-"]')) fails("a matched replay flags no bucket");
  }
}`,...$.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Replay · ACME differs (nothing corrected — )",
  render: () => pad(<ReplayPanel result={REPLAY_ACME_MISMATCH} onRun={noop} />),
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="replay-differs-promo"]')) fails("the bucket that differs is flagged");
  }
}`,...J.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Replay · billing did not answer (BILLING_UNAVAILABLE)",
  render: () => pad(<ReplayPanel result={null} onRun={async () => {
    throw new globalThis.Error("Billing did not answer; nothing was recorded. Try again.");
  }} />),
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="replay-run"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="replay-error"]'), "a failed replay says so where the button is");
  }
}`,...V.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Replay · result only (no action for this role)",
  render: () => pad(<ReplayPanel result={REPLAY_ACME_MATCHED} />)
}`,...Y.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Grant result · Boreas, 500 NXC prepaid against an invoice",
  render: () => pad(<GrantResultCard result={GRANT_RESULT_BOREAS} orgName="Boreas Dynamics" />)
}`,...z.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Grant result · the same invoice twice (GRANT_DUPLICATE as the existing lot)",
  render: () => pad(<GrantResultCard result={{
    ...GRANT_RESULT_BOREAS,
    duplicate: true
  }} orgName="Boreas Dynamics" />),
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="grant-duplicate"]')) fails("a duplicate grant says nothing was added twice");
  }
}`,...K.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Adjustments · a draft row (visibly *Draft* · model draft · the candidates · promote and reject)",
  render: () => pad(<AdjustmentsTable adjustments={ADJUSTMENTS} orgNames={ORG_NAMES} showOrg drafts={{
    [DRAFT_ROW.id]: DRAFT_BOREAS.output
  }} onApprove={noop} onPromote={noop} onReject={noop} />),
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector(\`[data-testid="draft-chip-\${DRAFT_ROW.id}"]\`)) fails("a draft is visibly a draft — a chip, not a status dot");
    if (!canvasElement.querySelector(\`[data-testid="model-draft-\${DRAFT_ROW.id}"]\`)) fails("its origin is said (llm_proposed → model draft; rule 85)");
    if (!canvasElement.querySelector(\`[data-testid="candidates-\${DRAFT_ROW.id}"]\`)) fails("the candidates the draft also considered are disclosed");
    if (!canvasElement.querySelector(\`[data-testid="promote-\${DRAFT_ROW.id}"]\`)) fails("a draft offers *Promote*");
    if (!canvasElement.querySelector(\`[data-testid="reject-\${DRAFT_ROW.id}"]\`)) fails("a draft offers *Reject*");
    if (canvasElement.querySelector(\`[data-testid="approve-\${DRAFT_ROW.id}"]\`)) fails("a draft is never approved directly — a person promotes it first ()");
    if (!canvasElement.querySelector('[data-testid="approve-adj_0051"]')) fails("a pending row still offers *Approve* (the S3 idiom)");
    if (!canvasElement.querySelector('[data-testid="reject-adj_0051"]')) fails("a pending row may be rejected with a reason");
  }
}`,...v.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  ...DraftRow,
  name: "Adjustments · a draft row · українською",
  globals: {
    locale: "uk"
  }
}`,...X.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "Adjustments · a rejected draft stays, with who and why",
  render: () => pad(<AdjustmentsTable adjustments={[ADJUSTMENT_DRAFT_REJECTED, ...ADJUSTMENTS]} orgNames={ORG_NAMES} showOrg onApprove={noop} onPromote={noop} onReject={noop} />),
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector(\`[data-testid="rejected-\${ADJUSTMENT_DRAFT_REJECTED.id}"]\`)) fails("the rejection names who and the reason code");
    if (canvasElement.querySelector(\`[data-testid="promote-\${ADJUSTMENT_DRAFT_REJECTED.id}"]\`)) fails("a rejected row offers nothing");
  }
}`,...Q.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Adjustments · Promote (inline — human 1 takes the draft; it is pending afterwards)",
  render: () => pad(<AdjustmentsTable adjustments={ADJUSTMENTS} orgNames={ORG_NAMES} showOrg onPromote={noop} onReject={noop} />),
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>(\`[data-testid="promote-\${DRAFT_ROW.id}"]\`)?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="promote-panel"]'), "promote confirms inline, on the page (R4)");
    if (!canvasElement.querySelector('[data-testid="promote-confirm"]')) fails("one primary in the panel");
  }
}`,...Z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  name: "Adjustments · Promote refused by the server (ADJUSTMENT_NOT_DRAFT)",
  render: () => pad(<AdjustmentsTable adjustments={ADJUSTMENTS} orgNames={ORG_NAMES} showOrg onPromote={async () => {
    throw new globalThis.Error("This adjustment is not a draft any more.");
  }} onReject={noop} />),
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>(\`[data-testid="promote-\${DRAFT_ROW.id}"]\`)?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="promote-confirm"]'), "the panel opens");
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="promote-confirm"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="promote-error"]'), "the refusal is shown where the action was taken");
  }
}`,...ee.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Adjustments · Reject (inline — a closed reason code, never free text)",
  render: () => pad(<AdjustmentsTable adjustments={ADJUSTMENTS} orgNames={ORG_NAMES} showOrg onPromote={noop} onReject={noop} />),
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>(\`[data-testid="reject-\${DRAFT_ROW.id}"]\`)?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="reject-panel"]'), "reject confirms inline (R4)");
    if (!canvasElement.querySelector('[data-testid="reject-reason"] [role="combobox"]')) fails("the reason is a closed select (AdjustmentReasonCode)");
    if (canvasElement.querySelector('[data-testid="reject-panel"] input[type="text"]')) fails("no free-text reason");
  }
}`,...g.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  ...DraftReject,
  name: "Adjustments · Reject · українською",
  globals: {
    locale: "uk"
  }
}`,...ae.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Draft an adjustment · the form (case · settlement refs · execution refs · the hint)",
  render: () => <div className="nexus-cc-split" data-inspector="open"><div className="nexus-cc-page" /><DraftAdjustmentForm orgId="org_boreas" orgName="Boreas Logistics" onClose={() => undefined} onDraft={draftOk} /></div>,
  play: async ({
    canvasElement
  }) => {
    for (const id of ["draft-case", "draft-settlements", "draft-executions", "draft-hint-bucket", "draft-hint-amount", "draft-hint-reason", "draft-submit"]) {
      if (!canvasElement.querySelector(\`[data-testid="\${id}"]\`)) fails(\`the form has \${id}\`);
    }
  }
}`,...S.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  ...DraftForm,
  name: "Draft an adjustment · українською",
  globals: {
    locale: "uk"
  }
}`,...te.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  name: "Draft an adjustment · submitted empty (a case and at least one reference)",
  render: () => <div className="nexus-cc-split" data-inspector="open"><div className="nexus-cc-page" /><DraftAdjustmentForm orgId="org_boreas" onClose={() => undefined} onDraft={draftOk} /></div>,
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="draft-submit"]')?.click();
    await until(() => canvasElement.querySelectorAll('[data-testid="draft-form"] [aria-invalid="true"]').length >= 2, "the case and the references are marked; nothing is sent");
  }
}`,...re.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  name: "Draft an adjustment · a reference that is not a settlement's is refused before the door",
  render: () => <div className="nexus-cc-split" data-inspector="open"><div className="nexus-cc-page" /><DraftAdjustmentForm orgId="org_boreas" onClose={() => undefined} onDraft={draftRefused} /></div>,
  play: async ({
    canvasElement
  }) => {
    typeInto(canvasElement.querySelector<HTMLInputElement>('[data-testid="draft-case"]')!, "case_0231");
    typeArea(canvasElement.querySelector<HTMLTextAreaElement>('[data-testid="draft-settlements"]')!, "https://example.test/not-a-ref");
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="draft-submit"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="draft-settlements"][aria-invalid="true"]'), "the shape is checked in the browser; the door still decides");
  }
}`,...ne.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  name: "Draft an adjustment · the model abstained (no row — propose by hand)",
  render: () => <div className="nexus-cc-split" data-inspector="open"><div className="nexus-cc-page" /><DraftAdjustmentForm orgId="org_boreas" onClose={() => undefined} onDraft={draftAbstains} /></div>,
  play: async ({
    canvasElement
  }) => {
    typeInto(canvasElement.querySelector<HTMLInputElement>('[data-testid="draft-case"]')!, "case_0231");
    typeArea(canvasElement.querySelector<HTMLTextAreaElement>('[data-testid="draft-settlements"]')!, "nexus://core/billing/settlement/stl_boreas_0231");
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="draft-submit"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="draft-abstained"]'), "the abstention is said; no draft is invented");
  }
}`,...se.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Draft an adjustment · Drafting unavailable (409 DRAFTING_UNAVAILABLE — no model on this deployment)",
  render: () => <div className="nexus-cc-split" data-inspector="open"><div className="nexus-cc-page" /><DraftAdjustmentForm orgId="org_boreas" onClose={() => undefined} onDraft={draftUnavailable} /></div>,
  play: async ({
    canvasElement
  }) => {
    typeInto(canvasElement.querySelector<HTMLInputElement>('[data-testid="draft-case"]')!, "case_0231");
    typeArea(canvasElement.querySelector<HTMLTextAreaElement>('[data-testid="draft-settlements"]')!, "nexus://core/billing/settlement/stl_boreas_0231");
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="draft-submit"]')?.click();
    await until(() => !!canvasElement.querySelector('[data-testid="draft-unavailable"]'), "the honest *Drafting unavailable* face, not an error sentence");
    if (!canvasElement.querySelector<HTMLButtonElement>('[data-testid="draft-submit"]')?.disabled) fails("the door said no model — the button is not offered again ()");
  }
}`,...A.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  ...DraftFormUnavailable,
  name: "Draft an adjustment · Drafting unavailable · українською",
  globals: {
    locale: "uk"
  }
}`,...oe.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  name: "Part · DraftCandidates (two candidates with basis and confidence)",
  render: () => pad(<DraftCandidates output={DRAFT_BOREAS.output} adjustmentId={DRAFT_ROW.id} />)
}`,...ie.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
  name: "Part · PromotePanel",
  render: () => pad(<PromotePanel adjustment={DRAFT_ROW} orgName="Boreas Logistics" onConfirm={noop} onCancel={() => undefined} />)
}`,...de.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  name: "Part · RejectPanel",
  render: () => pad(<RejectPanel adjustment={DRAFT_ROW} orgName="Boreas Logistics" onConfirm={noop} onCancel={() => undefined} />)
}`,...le.parameters?.docs?.source}}};export{N as Adjustments,C as AdjustmentsApprove,M as AdjustmentsApproveRefused,F as AdjustmentsEmpty,O as AdjustmentsReadOnly,j as Amounts,x as Approval,S as DraftForm,se as DraftFormAbstained,ne as DraftFormBadRef,re as DraftFormRequired,te as DraftFormUkrainian,A as DraftFormUnavailable,oe as DraftFormUnavailableUkrainian,Z as DraftPromote,ee as DraftPromoteRefused,g as DraftReject,ae as DraftRejectUkrainian,Q as DraftRejected,v as DraftRow,X as DraftRowUkrainian,z as GrantResult,K as GrantResultDuplicate,D as Lots,P as LotsEmpty,ie as PartDraftCandidates,de as PartPromotePanel,le as PartRejectPanel,h as PriceBooks,U as PriceBooksEmpty,I as PriceBooksPublishRefused,W as PriceBooksReadOnly,G as PriceBooksUkrainian,$ as ReplayMatched,J as ReplayMismatch,H as ReplayNotRun,Y as ReplayReadOnly,V as ReplayRefused,k as Reservations,q as ReservationsEmpty,y as Settlements,_ as SettlementsEmpty,L as SettlementsUkrainian,B as WalletFactsPostpaid,f as WalletFactsTrial,R as WalletFactsTrialEnforced,w as WalletFactsTrialModeUnknown,T as WalletFactsUkrainian,ea as __namedExportsOrder,Ze as default};
