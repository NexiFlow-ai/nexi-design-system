import{j as n,V as b,X as v}from"./iframe-C_4ax-Jm.js";import{i as S,a as w}from"./harness-BjrPJTNs.js";import{P as s}from"./PlatformDiagnostics-DedOYmPn.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */import"./bff-BhLxIK9U.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./credential-Ch26UJlM.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./gauge-CBjfqXTD.js";import"./inbox-DIvJiTk7.js";import"./activity-CxYo1_mQ.js";import"./workflow-BGMWCDzG.js";import"./plug-B3-qTSSD.js";import"./sliders-horizontal-ooANA1YP.js";import"./format-9kPeCP5n.js";import"./fixtures-fTf8KY-s.js";const Ae={title:"Apps/NexCare/Support/Diagnostics",decorators:[S],parameters:{ds:"DS-6911",layout:"fullscreen",...w("/care/conversations","populated","yulia"),docs:{description:{component:`DS-6911 — the provider desk's *Platform diagnostics* Inspector section (  ·  ·  ·
). It draws \`SupportDiagnostics\` and nothing else — statuses, codes, counters, connections, refs; no message,
no prompt, no document, no person. Fixtures are synthetic (*ACME Manufacturing*); the story plays assert that the
panel carries the permanent *metadata only* line and never a content field.`}}}};function t(e){throw new globalThis.Error(e)}const E=e=>e.textContent??"",_=/@|\b(message|prompt|document|said|wrote)\b/i,o={org_id:"org_acme",org_name:"ACME Manufacturing",platform_status:"active",commercial_status:"active_paid",component:"synapse.connection",error_code:"CREDENTIAL_REVOKED",occurred_at:["2026-10-27T06:12:00Z","2026-10-27T07:40:00Z","2026-10-27T09:05:00Z"],refs:["nexus://org/acme/flow-runs/fr_0931","nexus://org/acme/flow-runs/fr_0944","nexus://org/acme/connections/conn_gws_01"],counters:{failed_runs_24h:7,mau:42,usage_by_service_7d:{"model.tokens":128400,"flow.run":311}},connections:[{name:"Google Workspace — sales",provider:"google-workspace",health:"unhealthy",last_probe_at:"2026-10-27T09:04:00Z"},{name:"Supplier portal",provider:"supplier_portal",health:"healthy",last_probe_at:"2026-10-27T09:00:00Z"},{name:"Telegram — support bot",provider:"telegram",health:"degraded",last_probe_at:"2026-10-27T08:55:00Z"}],nxc_available:"1240.500000"},r=e=>n.jsx(b,{title:"Platform diagnostics",children:n.jsx(v,{title:"Inspector · service case",children:n.jsx("div",{className:"nexus-care-support-story",children:e})})}),c={render:()=>r(n.jsx(s,{view:{state:"ready",data:o},onRequestAccess:()=>{},escalation:{state:"idle"},onEscalate:()=>{}})),play:async({canvasElement:e})=>{const a=E(e);e.querySelector('[data-testid="diagnostics-metadata-line"]')||t("the metadata-only line is permanent"),/CREDENTIAL_REVOKED/.test(a)||t("the error code is drawn as a code"),_.test(a)&&t("a content word reached the diagnostics panel ()"),e.querySelector('[data-testid="diagnostics-request-access"]')||t("Request access to content is a button"),e.querySelector('button[data-testid="diagnostics-escalate"]')||t("Escalate to engineering is a button (A4, )")}},i={name:"Populated · the S3 door (lowercase codes, never-probed connection, no grant request yet)",render:()=>r(n.jsx(s,{view:{state:"ready",data:{...o,component:"graph.ingestion",error_code:"binding.needs_credentials",occurred_at:Array.from({length:15},(e,a)=>`2026-10-27T06:${String(10+a).padStart(2,"0")}:00Z`),refs:["nexus://graph/run/gr_0a1b2c3d","nexus://graph/run/gr_1b2c3d4e"],connections:[{name:"Shared drive",provider:"google_drive",health:"unknown",last_probe_at:null}]}}})),play:async({canvasElement:e})=>{const a=E(e);/binding\.needs_credentials/.test(a)||t("the closed error code is drawn as a code"),/not probed yet|ще не перевірено/.test(a)||t("a never-probed connection says so — never an empty instant"),e.querySelector('[data-testid="diagnostics-request-access"]')&&t("no grant request before S4"),_.test(a)&&t("a content word reached the diagnostics panel ()")}},d={name:"Populated · suspended organization",render:()=>r(n.jsx(s,{view:{state:"ready",data:{...o,platform_status:"suspended",commercial_status:"past_due",component:"billing",error_code:"ORG_SUSPENDED",refs:[],connections:[]}},onRequestAccess:()=>{}}))},l={name:"escalating · the button waits",render:()=>r(n.jsx(s,{view:{state:"ready",data:o},onRequestAccess:()=>{},escalation:{state:"sending"},onEscalate:()=>{}})),play:async({canvasElement:e})=>{const a=e.querySelector('[data-testid="diagnostics-escalate"]');(!a?.disabled||a.getAttribute("aria-busy")!=="true")&&t("a sending escalation cannot be pressed twice")}},p={name:"escalated · being worked on by engineering",render:()=>r(n.jsx(s,{view:{state:"ready",data:o},onRequestAccess:()=>{},escalation:{state:"sent",incidentRef:"nexus://core/platform_incident/pin_esc_1"},onEscalate:()=>{}})),play:async({canvasElement:e})=>{const a=e.querySelector('[data-testid="diagnostics-escalated"]');(!a||a.getAttribute("role")!=="status")&&t("the escalated line is one status line"),/Being worked on by engineering/.test(a.textContent??"")||t("the customer-facing words, nothing of the incident's content"),e.querySelector('[data-testid="diagnostics-escalate"]')&&t("an escalated case offers no second escalation"),_.test(E(e))&&t("a content word reached the panel ()")}},m={name:"escalate · the door failed, the button again",render:()=>r(n.jsx(s,{view:{state:"ready",data:o},onRequestAccess:()=>{},escalation:{state:"error",message:"The escalation did not go through. Try again."},onEscalate:()=>{}})),play:async({canvasElement:e})=>{e.querySelector('[data-testid="diagnostics-escalate-error"][role="alert"]')||t("the failure is one alert sentence"),e.querySelector('button[data-testid="diagnostics-escalate"]')||t("the button is offered again")}},u={render:()=>r(n.jsx(s,{view:{state:"empty",orgName:"ACME Manufacturing"}}))},g={render:()=>r(n.jsx(s,{view:{state:"loading"}}))},f={render:()=>r(n.jsx(s,{view:{state:"error"},onRetry:()=>{}}))},y={name:"Permission denied · no platform support role",render:()=>r(n.jsx(s,{view:{state:"denied"}})),play:async({canvasElement:e})=>{e.querySelector('[data-testid="diagnostics-facts"]')&&t("a denied reader sees no facts")}},h={globals:{locale:"uk"},render:()=>r(n.jsx(s,{view:{state:"ready",data:o},onRequestAccess:()=>{}}))},Te=["Populated","FromTheS3Door","SuspendedOrganization","Escalating","Escalated","EscalateError","Empty","Loading","Error","Denied","Ukrainian"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => frame(<PlatformDiagnosticsPanel view={{
    state: "ready",
    data: DIAG
  }} onRequestAccess={() => {}} escalation={{
    state: "idle"
  }} onEscalate={() => {}} />),
  play: async ({
    canvasElement
  }) => {
    const t = text(canvasElement);
    if (!canvasElement.querySelector('[data-testid="diagnostics-metadata-line"]')) fails("the metadata-only line is permanent");
    if (!/CREDENTIAL_REVOKED/.test(t)) fails("the error code is drawn as a code");
    if (CONTENT_FORBIDDEN.test(t)) fails("a content word reached the diagnostics panel ()");
    if (!canvasElement.querySelector('[data-testid="diagnostics-request-access"]')) fails("Request access to content is a button");
    if (!canvasElement.querySelector('button[data-testid="diagnostics-escalate"]')) fails("Escalate to engineering is a button (A4, )");
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Populated · the S3 door (lowercase codes, never-probed connection, no grant request yet)",
  render: () => frame(<PlatformDiagnosticsPanel view={{
    state: "ready",
    data: {
      ...DIAG,
      component: "graph.ingestion",
      error_code: "binding.needs_credentials",
      occurred_at: Array.from({
        length: 15
      }, (_, i) => \`2026-10-27T06:\${String(10 + i).padStart(2, "0")}:00Z\`),
      refs: ["nexus://graph/run/gr_0a1b2c3d", "nexus://graph/run/gr_1b2c3d4e"],
      connections: [{
        name: "Shared drive",
        provider: "google_drive",
        health: "unknown",
        last_probe_at: null
      }]
    }
  }} />),
  play: async ({
    canvasElement
  }) => {
    const t = text(canvasElement);
    if (!/binding\\.needs_credentials/.test(t)) fails("the closed error code is drawn as a code");
    if (!/not probed yet|ще не перевірено/.test(t)) fails("a never-probed connection says so — never an empty instant");
    if (canvasElement.querySelector('[data-testid="diagnostics-request-access"]')) fails("no grant request before S4");
    if (CONTENT_FORBIDDEN.test(t)) fails("a content word reached the diagnostics panel ()");
  }
}`,...i.parameters?.docs?.source},description:{story:` S3 ( ·  — contracts 1.195.0): what core-api's door answers for an engine-filed case — the pack's
lowercase codes, a connection never probed says so, and no *Request access* until S4 brings the grant request.`,...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Populated · suspended organization",
  render: () => frame(<PlatformDiagnosticsPanel view={{
    state: "ready",
    data: {
      ...DIAG,
      platform_status: "suspended",
      commercial_status: "past_due",
      component: "billing",
      error_code: "ORG_SUSPENDED",
      refs: [],
      connections: []
    }
  }} onRequestAccess={() => {}} />)
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "escalating · the button waits",
  render: () => frame(<PlatformDiagnosticsPanel view={{
    state: "ready",
    data: DIAG
  }} onRequestAccess={() => {}} escalation={{
    state: "sending"
  }} onEscalate={() => {}} />),
  play: async ({
    canvasElement
  }) => {
    const b = canvasElement.querySelector<HTMLButtonElement>('[data-testid="diagnostics-escalate"]');
    if (!b?.disabled || b.getAttribute("aria-busy") !== "true") fails("a sending escalation cannot be pressed twice");
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "escalated · being worked on by engineering",
  render: () => frame(<PlatformDiagnosticsPanel view={{
    state: "ready",
    data: DIAG
  }} onRequestAccess={() => {}} escalation={{
    state: "sent",
    incidentRef: "nexus://core/platform_incident/pin_esc_1"
  }} onEscalate={() => {}} />),
  play: async ({
    canvasElement
  }) => {
    const line = canvasElement.querySelector<HTMLElement>('[data-testid="diagnostics-escalated"]');
    if (!line || line.getAttribute("role") !== "status") fails("the escalated line is one status line");
    if (!/Being worked on by engineering/.test(line.textContent ?? "")) fails("the customer-facing words, nothing of the incident's content");
    if (canvasElement.querySelector('[data-testid="diagnostics-escalate"]')) fails("an escalated case offers no second escalation");
    if (CONTENT_FORBIDDEN.test(text(canvasElement))) fails("a content word reached the panel ()");
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "escalate · the door failed, the button again",
  render: () => frame(<PlatformDiagnosticsPanel view={{
    state: "ready",
    data: DIAG
  }} onRequestAccess={() => {}} escalation={{
    state: "error",
    message: "The escalation did not go through. Try again."
  }} onEscalate={() => {}} />),
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="diagnostics-escalate-error"][role="alert"]')) fails("the failure is one alert sentence");
    if (!canvasElement.querySelector('button[data-testid="diagnostics-escalate"]')) fails("the button is offered again");
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => frame(<PlatformDiagnosticsPanel view={{
    state: "empty",
    orgName: "ACME Manufacturing"
  }} />)
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => frame(<PlatformDiagnosticsPanel view={{
    state: "loading"
  }} />)
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => frame(<PlatformDiagnosticsPanel view={{
    state: "error"
  }} onRetry={() => {}} />)
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Permission denied · no platform support role",
  render: () => frame(<PlatformDiagnosticsPanel view={{
    state: "denied"
  }} />),
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="diagnostics-facts"]')) fails("a denied reader sees no facts");
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  globals: {
    locale: "uk"
  },
  render: () => frame(<PlatformDiagnosticsPanel view={{
    state: "ready",
    data: DIAG
  }} onRequestAccess={() => {}} />)
}`,...h.parameters?.docs?.source}}};export{y as Denied,u as Empty,f as Error,m as EscalateError,p as Escalated,l as Escalating,i as FromTheS3Door,g as Loading,c as Populated,d as SuspendedOrganization,h as Ukrainian,Te as __namedExportsOrder,Ae as default};
