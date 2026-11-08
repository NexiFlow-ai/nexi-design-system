import{j as r,V as b,X as B}from"./iframe-C_4ax-Jm.js";import{i as C,a as D}from"./harness-BjrPJTNs.js";import{G as l,a as I,b as G,c as F}from"./SupportGrant-CfRaNiNA.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */import"./bff-BhLxIK9U.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./credential-Ch26UJlM.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./gauge-CBjfqXTD.js";import"./inbox-DIvJiTk7.js";import"./activity-CxYo1_mQ.js";import"./workflow-BGMWCDzG.js";import"./plug-B3-qTSSD.js";import"./sliders-horizontal-ooANA1YP.js";import"./format-9kPeCP5n.js";import"./fixtures-fTf8KY-s.js";const He={title:"Apps/NexCare/Support/Grant",decorators:[C],parameters:{ds:"DS-6916",layout:"fullscreen",...D("/care/conversations","populated","yulia"),docs:{description:{component:"DS-6916 — **Support grant request & viewer** ( S4;  §3 · §4;  ·  ·  ·\nFR-3946 · ). The provider desk's face of a `SupportAccessGrant` under *Platform diagnostics* (DS-6911):\nthe request form (idle · validating · sent · error), the case's grant strip (every state; *Open run* / *Open\nconversation* only on `active`), and the two render-and-forget viewers (loading · populated · not-found · offline).\nFixtures are synthetic (*ACME Manufacturing*, `SUP-7`); the viewers' stories pass a preset state — no network, no\nstore; the plays assert the forget line, the 404's missing-run words and that nothing names the mechanism."}}}},t=e=>{throw new globalThis.Error(e)},o=e=>e.textContent??"",A=/\b(PDP|PEP|header|X-Nexus|admit|tenancy|RLS)\b/,P=["nexus://chat/flow_run/fr_0931","nexus://chat/thread/thr_44","nexus://org/acme/connections/conn_gws_01"],i={customer_org_id:"org_acme",case_ref:"nexus://tasks/work_item/wi_0007",grantee_principal_ref:"prn_"+"a".repeat(32),scope:[{kind:"flow_run",ref:"nexus://chat/flow_run/fr_0931"},{kind:"thread",ref:"nexus://chat/thread/thr_44"}],actions:["read"],reason:"to see why the run stopped at the Google Drive step",requested_hours:4,requested_by:"prn_"+"b".repeat(32),requested_at:"2026-10-27T13:05:00Z",classification_max:"internal"},N=[{...i,grant_id:"sag_0004",state:"active",approved_at:"2026-10-27T13:10:00Z",expires_at:"2026-10-27T17:10:00Z"},{...i,grant_id:"sag_0001",state:"pending",requested_at:"2026-10-27T14:00:00Z"},{...i,grant_id:"sag_0003",state:"pending_second",approved_at:"2026-10-27T12:00:00Z"},{...i,grant_id:"sag_0005",state:"expired",approved_at:"2026-10-26T10:00:00Z",expires_at:"2026-10-26T14:00:00Z"},{...i,grant_id:"sag_0006",state:"revoked",approved_at:"2026-10-26T09:00:00Z",revoked_at:"2026-10-26T10:00:00Z"},{...i,grant_id:"sag_0007",state:"refused",refused_at:"2026-10-25T09:00:00Z"}],n=e=>r.jsx(b,{title:"Platform diagnostics",children:r.jsx(B,{title:"Inspector · service case SUP-7",children:r.jsx("div",{className:"nexus-care-support-story",children:e})})}),s=()=>{},m={caseLabel:"SUP-7",customerOrgId:"org_acme",caseRef:i.case_ref,refs:P,onSubmit:s,onCancel:s},c={name:"Request form · idle",render:()=>n(r.jsx(l,{...m,state:{state:"idle"}})),play:async({canvasElement:e})=>{const a=e.querySelectorAll('[data-testid="grant-request-refs"] input[type="checkbox"]');a.length!==2&&t(`only the run and the conversation are offered (got ${a.length}) — a connection is not in the cut`);const k=e.querySelector('[data-testid="grant-request-hours"]');(!k||k.value!=="4"||k.max!=="24")&&t("hours default to 4 with a ceiling of 24"),A.test(o(e))&&t("no mechanism word on the form")}},f={name:"Request form · the diagnostics name nothing in the cut",render:()=>n(r.jsx(l,{...m,refs:["nexus://org/acme/connections/conn_gws_01"],state:{state:"idle"}})),play:async({canvasElement:e})=>{e.querySelector('[data-testid="grant-request-no-refs"]')||t("the form says there is nothing to pick and offers the paste field")}},g={name:"Request form · validating",render:()=>n(r.jsx(l,{...m,state:{state:"validating"}})),play:async({canvasElement:e})=>{e.querySelector('[data-testid="grant-request-send"]')?.disabled||t("Send is disabled while the request is in flight")}},h={name:"Request form · sent",render:()=>n(r.jsx(l,{...m,state:{state:"sent",grantId:"sag_0001"}})),play:async({canvasElement:e})=>{const a=e.querySelector('[data-testid="grant-request-sent"]');(!a||a.getAttribute("role")!=="status")&&t("the sent line is a status"),/SUP-7/.test(o(e))||t("the sent line names the case by its customer alias")}},y={name:"Request form · refused (422 outside the cut)",render:()=>n(r.jsx(l,{...m,state:{state:"error",message:"The request is outside what can be asked: only runs and conversations, at most 10, within the customer's hours ceiling."}})),play:async({canvasElement:e})=>{const a=e.querySelector('[data-testid="grant-request-error"]');(!a||a.getAttribute("role")!=="alert")&&t("the refusal is announced")}},_={...c,name:"Request form · українською",globals:{locale:"uk"}},u={name:"Grant strip · every state",parameters:{ds:"DS-6911"},render:()=>n(r.jsx(I,{grants:N,onOpen:s})),play:async({canvasElement:e})=>{const a=e.querySelectorAll('[data-testid^="grant-open-"]');a.length!==2&&t(`Open run / Open conversation only on the active grant's two refs (got ${a.length})`),e.querySelector('[data-testid="grant-open-sag_0004-fr_0931"]')||t("the active run can be opened"),e.querySelector('[data-testid="grant-open-sag_0001-fr_0931"]')&&t("a pending grant opens nothing"),e.querySelector('[data-testid="grant-until-sag_0004"]')||t("the active grant says when it ends"),/prn_|org_acme|wi_0007/.test(o(e))&&t("no principal ref, org id or work-item id is drawn"),A.test(o(e))&&t("no mechanism word on the strip")}},S={name:"Grant strip · no grants (renders nothing)",parameters:{ds:"DS-6911"},render:()=>n(r.jsx(I,{grants:[]})),play:async({canvasElement:e})=>{e.querySelector('[data-testid="grant-strip"]')&&t("an empty strip takes no room — the panel's button is the invitation")}},v={...u,name:"Grant strip · українською",globals:{locale:"uk"}},j={run:{run_id:"fr_0931",uri:"nexus://chat/flow_run/fr_0931",workflow_uri:"nexus://chat/flow/weekly_digest",workflow_version:3,status:"failed",started_at:"2026-10-26T06:00:00Z",updated_at:"2026-10-26T06:02:00Z",ended_at:"2026-10-26T06:02:00Z",failure:{code:"TOOL_FAILED"}},steps:[{node_id:"fetch_drive",attempt:1,status:"failed",created_at:"2026-10-26T06:00:00Z",failure:{code:"CREDENTIAL_REVOKED"}},{node_id:"fetch_drive",attempt:2,status:"failed",created_at:"2026-10-26T06:01:00Z",failure:{code:"CREDENTIAL_REVOKED"}}]},O={thread:{thread_id:"thr_44",uri:"nexus://chat/thread/thr_44",title:"Supplier risk, week 44",created_at:"2026-10-26T09:00:00Z"},messages:[{message_id:"m1",role:"user",text:"Why did the weekly digest stop?",status:"completed",created_at:"2026-10-26T09:00:00Z"},{message_id:"m2",role:"assistant",text:"The run stopped at the Google Drive step — the connection needs its credentials renewed.",status:"completed",created_at:"2026-10-26T09:00:20Z"}]},d=e=>{e.querySelector('[data-testid="granted-forget-line"]')||t("the viewer says nothing is kept"),e.querySelector('[data-testid="granted-close"]')||t("the viewer closes — and unmounts"),A.test(o(e))&&t("no mechanism word in the viewer")},x={name:"Granted run · populated",render:()=>n(r.jsx(G,{grantId:"sag_0004",runId:"fr_0931",onClose:s,preset:{state:"ready",data:j}})),play:async({canvasElement:e})=>{d(e),/CREDENTIAL_REVOKED/.test(o(e))||t("the steps' failure codes are drawn"),e.querySelectorAll('[data-testid="granted-run-steps"] li').length!==2&&t("two attempts of the step")}},q={name:"Granted run · loading",render:()=>n(r.jsx(G,{grantId:"sag_0004",runId:"fr_0931",onClose:s,preset:{state:"loading"}})),play:async({canvasElement:e})=>d(e)},w={name:"Granted run · 404 (the missing run's words, )",render:()=>n(r.jsx(G,{grantId:"sag_0004",runId:"fr_0999",onClose:s,preset:{state:"notFound"}})),play:async({canvasElement:e})=>{d(e),e.querySelector('[data-testid="granted-not-found"]')||t("a 404 is the not-found state"),/grant|access|revoked|expired|дозв|доступ/i.test(o(e.querySelector('[data-testid="granted-not-found"]')))&&t("the 404 never says the grant ended — the same words as a missing run")}},E={name:"Granted run · offline",render:()=>n(r.jsx(G,{grantId:"sag_0004",runId:"fr_0931",onClose:s,preset:{state:"offline"}})),play:async({canvasElement:e})=>d(e)},p={name:"Granted conversation · populated",render:()=>n(r.jsx(F,{grantId:"sag_0004",threadId:"thr_44",onClose:s,preset:{state:"ready",data:O}})),play:async({canvasElement:e})=>{d(e),e.querySelectorAll('[data-testid="granted-thread-messages"] li').length!==2&&t("both turns are drawn"),/Supplier risk, week 44/.test(o(e))||t("the thread's title as the customer named it")}},R={name:"Granted conversation · 404",render:()=>n(r.jsx(F,{grantId:"sag_0004",threadId:"thr_nope",onClose:s,preset:{state:"notFound"}})),play:async({canvasElement:e})=>{d(e),e.querySelector('[data-testid="granted-not-found"]')||t("a 404 is the not-found state")}},T={...p,name:"Granted conversation · українською",globals:{locale:"uk"}},Ke=["FormIdle","FormNoRefs","FormValidating","FormSent","FormError","FormUkrainian","Strip","StripEmpty","StripUkrainian","RunPopulated","RunLoading","RunNotFound","RunOffline","ThreadPopulated","ThreadNotFound","ThreadUkrainian"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Request form · idle",
  render: () => frame(<GrantRequestForm {...formProps} state={{
    state: "idle"
  }} />),
  play: async ({
    canvasElement
  }) => {
    const refs = canvasElement.querySelectorAll('[data-testid="grant-request-refs"] input[type="checkbox"]');
    if (refs.length !== 2) fails(\`only the run and the conversation are offered (got \${refs.length}) — a connection is not in the cut\`);
    const hours = canvasElement.querySelector<HTMLInputElement>('[data-testid="grant-request-hours"]');
    if (!hours || hours.value !== "4" || hours.max !== "24") fails("hours default to 4 with a ceiling of 24");
    if (MECHANISM.test(text(canvasElement))) fails("no mechanism word on the form");
  }
}`,...c.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Request form · the diagnostics name nothing in the cut",
  render: () => frame(<GrantRequestForm {...formProps} refs={["nexus://org/acme/connections/conn_gws_01"]} state={{
    state: "idle"
  }} />),
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="grant-request-no-refs"]')) fails("the form says there is nothing to pick and offers the paste field");
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Request form · validating",
  render: () => frame(<GrantRequestForm {...formProps} state={{
    state: "validating"
  }} />),
  play: async ({
    canvasElement
  }) => {
    const send = canvasElement.querySelector<HTMLButtonElement>('[data-testid="grant-request-send"]');
    if (!send?.disabled) fails("Send is disabled while the request is in flight");
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Request form · sent",
  render: () => frame(<GrantRequestForm {...formProps} state={{
    state: "sent",
    grantId: "sag_0001"
  }} />),
  play: async ({
    canvasElement
  }) => {
    const sent = canvasElement.querySelector('[data-testid="grant-request-sent"]');
    if (!sent || sent.getAttribute("role") !== "status") fails("the sent line is a status");
    if (!/SUP-7/.test(text(canvasElement))) fails("the sent line names the case by its customer alias");
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Request form · refused (422 outside the cut)",
  render: () => frame(<GrantRequestForm {...formProps} state={{
    state: "error",
    message: "The request is outside what can be asked: only runs and conversations, at most 10, within the customer's hours ceiling."
  }} />),
  play: async ({
    canvasElement
  }) => {
    const err = canvasElement.querySelector('[data-testid="grant-request-error"]');
    if (!err || err.getAttribute("role") !== "alert") fails("the refusal is announced");
  }
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...FormIdle,
  name: "Request form · українською",
  globals: {
    locale: "uk"
  }
}`,..._.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Grant strip · every state",
  parameters: {
    ds: "DS-6911"
  },
  render: () => frame(<GrantStrip grants={GRANTS} onOpen={noop} />),
  play: async ({
    canvasElement
  }) => {
    const opens = canvasElement.querySelectorAll('[data-testid^="grant-open-"]');
    if (opens.length !== 2) fails(\`Open run / Open conversation only on the active grant's two refs (got \${opens.length})\`);
    if (!canvasElement.querySelector('[data-testid="grant-open-sag_0004-fr_0931"]')) fails("the active run can be opened");
    if (canvasElement.querySelector('[data-testid="grant-open-sag_0001-fr_0931"]')) fails("a pending grant opens nothing");
    if (!canvasElement.querySelector('[data-testid="grant-until-sag_0004"]')) fails("the active grant says when it ends");
    if (/prn_|org_acme|wi_0007/.test(text(canvasElement))) fails("no principal ref, org id or work-item id is drawn");
    if (MECHANISM.test(text(canvasElement))) fails("no mechanism word on the strip");
  }
}`,...u.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Grant strip · no grants (renders nothing)",
  parameters: {
    ds: "DS-6911"
  },
  render: () => frame(<GrantStrip grants={[]} />),
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="grant-strip"]')) fails("an empty strip takes no room — the panel's button is the invitation");
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...Strip,
  name: "Grant strip · українською",
  globals: {
    locale: "uk"
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Granted run · populated",
  render: () => frame(<GrantedRunView grantId="sag_0004" runId="fr_0931" onClose={noop} preset={{
    state: "ready",
    data: RUN
  }} />),
  play: async ({
    canvasElement
  }) => {
    forgets(canvasElement);
    if (!/CREDENTIAL_REVOKED/.test(text(canvasElement))) fails("the steps' failure codes are drawn");
    if (canvasElement.querySelectorAll('[data-testid="granted-run-steps"] li').length !== 2) fails("two attempts of the step");
  }
}`,...x.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Granted run · loading",
  render: () => frame(<GrantedRunView grantId="sag_0004" runId="fr_0931" onClose={noop} preset={{
    state: "loading"
  }} />),
  play: async ({
    canvasElement
  }) => forgets(canvasElement)
}`,...q.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Granted run · 404 (the missing run's words, )",
  render: () => frame(<GrantedRunView grantId="sag_0004" runId="fr_0999" onClose={noop} preset={{
    state: "notFound"
  }} />),
  play: async ({
    canvasElement
  }) => {
    forgets(canvasElement);
    if (!canvasElement.querySelector('[data-testid="granted-not-found"]')) fails("a 404 is the not-found state");
    if (/grant|access|revoked|expired|дозв|доступ/i.test(text(canvasElement.querySelector('[data-testid="granted-not-found"]') as HTMLElement))) fails("the 404 never says the grant ended — the same words as a missing run");
  }
}`,...w.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Granted run · offline",
  render: () => frame(<GrantedRunView grantId="sag_0004" runId="fr_0931" onClose={noop} preset={{
    state: "offline"
  }} />),
  play: async ({
    canvasElement
  }) => forgets(canvasElement)
}`,...E.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Granted conversation · populated",
  render: () => frame(<GrantedThreadView grantId="sag_0004" threadId="thr_44" onClose={noop} preset={{
    state: "ready",
    data: THREAD
  }} />),
  play: async ({
    canvasElement
  }) => {
    forgets(canvasElement);
    if (canvasElement.querySelectorAll('[data-testid="granted-thread-messages"] li').length !== 2) fails("both turns are drawn");
    if (!/Supplier risk, week 44/.test(text(canvasElement))) fails("the thread's title as the customer named it");
  }
}`,...p.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Granted conversation · 404",
  render: () => frame(<GrantedThreadView grantId="sag_0004" threadId="thr_nope" onClose={noop} preset={{
    state: "notFound"
  }} />),
  play: async ({
    canvasElement
  }) => {
    forgets(canvasElement);
    if (!canvasElement.querySelector('[data-testid="granted-not-found"]')) fails("a 404 is the not-found state");
  }
}`,...R.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...ThreadPopulated,
  name: "Granted conversation · українською",
  globals: {
    locale: "uk"
  }
}`,...T.parameters?.docs?.source}}};export{y as FormError,c as FormIdle,f as FormNoRefs,h as FormSent,_ as FormUkrainian,g as FormValidating,q as RunLoading,w as RunNotFound,E as RunOffline,x as RunPopulated,u as Strip,S as StripEmpty,v as StripUkrainian,R as ThreadNotFound,p as ThreadPopulated,T as ThreadUkrainian,Ke as __namedExportsOrder,He as default};
