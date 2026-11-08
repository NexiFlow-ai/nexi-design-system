import{j as r}from"./iframe-C_4ax-Jm.js";/* empty css                */import{i as c}from"./harness-CVmC89KY.js";import{F as u}from"./platform-BhtOchBX.js";import{O as p,a as h}from"./OperatorGate-wGq4uD0w.js";import{a as m}from"./Screens-ByteWJU4.js";import"./preload-helper-PPVm8Dsz.js";import"./CoreShell-LzluVnjy.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./nav-C8-c-HcF.js";import"./runtime-Cwmke1Hn.js";import"./credential-Ch26UJlM.js";import"./chatApi-DU7mAKQS.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./organizationRequests-CxMYSAGe.js";import"./store-C-il-aT_.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./metrics-XT_i2DSD.js";import"./modules-A3eXOreg.js";import"./sparkles-t9beIr0T.js";import"./boxes-Cqxx_HWk.js";import"./plug-B3-qTSSD.js";import"./wrench-DsSy05cC.js";import"./activity-CxYo1_mQ.js";import"./shield-check-Cac0BQ49.js";import"./layers-Dsj4tA4G.js";import"./building-2-GerxkJzZ.js";import"./Parts-BEjhtEyc.js";import"./format-DO9OmoTM.js";import"./BillingParts-8YmDY42z.js";import"./CloudCost-DmWiTZUf.js";import"./BillingCredits-CRKJXhpF.js";const Fe={title:"Apps/NexCore/Platform Operations/Operator gate",parameters:{ds:"DS-6806",layout:"fullscreen",workbench:{ns:"core",path:"/core/platform?as=owner"},docs:{description:{component:" S1 () — the door of Platform Operations. The session's `operator_roles[]` decides whether the pages\nexist for this browser: `granted` draws the page; `loading` and `offline` are the kit's states; `denied` is Next's\n`notFound()` in the app — the same answer a stranger gets from the API — shown here as the view's not-found rung.\nScope: the operator scope banner row (DS-6806); ladder DS-7006."}}}},l=e=>{throw new globalThis.Error(e)},f=()=>{},a={name:"Granted · a platform operator sees the page",render:()=>r.jsx(p,{access:{state:"granted",roles:["platform_operator"]},children:e=>r.jsx(m,{result:{state:"ready",data:u},firstUse:e.length===0})}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="screen-platform-overview"]')||l("a granted gate renders its page")}},n={name:"Loading · until /session/context answers",render:()=>r.jsx(p,{access:{state:"loading"},children:()=>null})},s={name:"Offline · core-api did not answer (not a denial)",render:()=>r.jsx(p,{access:{state:"offline",retry:f},children:()=>null})},o={name:"Denied · no operator role → the app's notFound() (never a banner naming the scope)",render:()=>r.jsx(p,{access:{state:"denied"},children:()=>null}),play:async({canvasElement:e})=>{const d=(e.textContent??"").toLowerCase();/operator|platform operations/.test(d)&&l("a denied gate must not name what it hides (: a 404 identical to an unknown route)")}},i={...o,name:"Denied · українською",globals:{locale:"uk"}},t={name:"In the shell · core-api unreachable",decorators:[c],render:()=>r.jsx(h,{children:()=>r.jsx(m,{result:{state:"loading"}})})},Pe=["Granted","Loading","Offline","Denied","DeniedUkrainian","InShell"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Granted · a platform operator sees the page",
  render: () => <OperatorGateView access={{
    state: "granted",
    roles: ["platform_operator"]
  }}>
      {roles => <PlatformOverviewScreen result={{
      state: "ready",
      data: FLEET_SUMMARY_S1
    }} firstUse={roles.length === 0} />}
    </OperatorGateView>,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="screen-platform-overview"]')) fails("a granted gate renders its page");
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Loading · until /session/context answers",
  render: () => <OperatorGateView access={{
    state: "loading"
  }}>{() => null}</OperatorGateView>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Offline · core-api did not answer (not a denial)",
  render: () => <OperatorGateView access={{
    state: "offline",
    retry
  }}>{() => null}</OperatorGateView>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Denied · no operator role → the app's notFound() (never a banner naming the scope)",
  render: () => <OperatorGateView access={{
    state: "denied"
  }}>{() => null}</OperatorGateView>,
  play: async ({
    canvasElement
  }) => {
    const text = (canvasElement.textContent ?? "").toLowerCase();
    if (/operator|platform operations/.test(text)) fails("a denied gate must not name what it hides (: a 404 identical to an unknown route)");
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...Denied,
  name: "Denied · українською",
  globals: {
    locale: "uk"
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "In the shell · core-api unreachable",
  decorators: [inShell],
  render: () => <OperatorGate>{() => <PlatformOverviewScreen result={{
      state: "loading"
    }} />}</OperatorGate>
}`,...t.parameters?.docs?.source},description:{story:"The real gate inside the real shell reads the store's session. The workshop has no core-api, so the shell's\nhydration lands on *unavailable* — the honest rung this story shows; the granted rung needs a session with\n`operator_roles` ( S4's fixture core-api).",...t.parameters?.docs?.description}}};export{o as Denied,i as DeniedUkrainian,a as Granted,t as InShell,n as Loading,s as Offline,Pe as __namedExportsOrder,Fe as default};
