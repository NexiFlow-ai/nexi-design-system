import{j as r,V as t,X as s}from"./iframe-C_4ax-Jm.js";import{i as b,a as R}from"./harness-BjrPJTNs.js";import{A as _,R as i}from"./SupportSignals-rqvqRcXq.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */import"./bff-BhLxIK9U.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./credential-Ch26UJlM.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./gauge-CBjfqXTD.js";import"./inbox-DIvJiTk7.js";import"./activity-CxYo1_mQ.js";import"./workflow-BGMWCDzG.js";import"./plug-B3-qTSSD.js";import"./sliders-horizontal-ooANA1YP.js";const ke={title:"Apps/NexCare/Support/Signals",decorators:[b],parameters:{ds:"DS-6912",layout:"fullscreen",...R("/care/conversations","populated","yulia"),docs:{description:{component:`DS-6912 — the autonomy badge (the level the engine chose — a model never chooses it;  · ) and the
red-line banner ( ·  · ): a supervisor reads the red line's name, *routed to the security queue*
and *the assistant said its one line and nothing more*; a \`support_agent\` reads only *restricted — handled by a
supervisor*. The agent story asserts the red line's name never reaches the agent's surface.`}}}},n=e=>{throw new globalThis.Error(e)},x=e=>e.textContent??"",y=["A0_answer","A1_diagnose","A2_safe_repair","A3_approval","A4_engineering"],f=["suspected_data_leak","account_takeover","legal_dispute","refund_abuse","data_deletion","security_policy_change"],o=e=>({render:()=>r.jsx(t,{title:"Support signals",children:r.jsx(s,{title:"Autonomy badge",children:r.jsx(_,{level:e})})}),play:async({canvasElement:a})=>{const S=a.querySelector('[data-testid="autonomy-badge"]');if(!S||S.getAttribute("data-level")!==e)return n(`the badge carries ${e}`);S.getAttribute("title")||n("the badge has a one-line meaning as its title")}}),p={...o("A0_answer"),name:"A0 · Answer"},d={...o("A1_diagnose"),name:"A1 · Diagnose"},l={...o("A2_safe_repair"),name:"A2 · Safe repair"},u={...o("A3_approval"),name:"A3 · Needs approval"},c={...o("A4_engineering"),name:"A4 · Engineering"},m={name:"The ladder",render:()=>r.jsx(t,{title:"Support signals",children:r.jsx(s,{title:"Autonomy ladder",children:r.jsx("div",{className:"nexus-care-reason",children:y.map(e=>r.jsx(_,{level:e},e))})})})},g={name:"Red line · supervisor",render:()=>r.jsx(t,{title:"Support signals",children:r.jsx(s,{title:"Red-line banner — supervisor",children:r.jsx(i,{redLine:"suspected_data_leak",audience:"supervisor"})})}),play:async({canvasElement:e})=>{const a=e.querySelector('[data-testid="redline-banner"]');(!a||a.getAttribute("role")!=="status")&&n("the banner is role=status"),/Suspected data leak/.test(x(e))||n("a supervisor reads the red line's name"),/security queue/.test(x(e))||n("the banner says where it was routed")}},A={name:"Red line · support agent",render:()=>r.jsx(t,{title:"Support signals",children:r.jsx(s,{title:"Red-line banner — support agent",children:r.jsx(i,{redLine:"suspected_data_leak",audience:"agent"})})}),play:async({canvasElement:e})=>{const a=x(e);/data leak|takeover|dispute|abuse|deletion|policy change/i.test(a)&&n("an agent never reads the red line's name ()"),/supervisor/i.test(a)||n("the agent reads only that a supervisor handles it")}},v={name:"Every red line · supervisor",render:()=>r.jsx(t,{title:"Support signals",children:r.jsx(s,{title:"Red lines",children:f.map(e=>r.jsx(i,{redLine:e,audience:"supervisor"},e))})})},h={globals:{locale:"uk"},render:()=>r.jsx(t,{title:"Сигнали підтримки",children:r.jsxs(s,{title:"Автономність і червоні лінії",children:[r.jsx("div",{className:"nexus-care-reason",children:y.map(e=>r.jsx(_,{level:e},e))}),r.jsx(i,{redLine:"account_takeover",audience:"supervisor"}),r.jsx(i,{redLine:"account_takeover",audience:"agent"})]})})},Be=["A0Answer","A1Diagnose","A2SafeRepair","A3Approval","A4Engineering","AllLevels","RedLineSupervisor","RedLineAgent","AllRedLines","Ukrainian"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...badge("A0_answer"),
  name: "A0 · Answer"
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...badge("A1_diagnose"),
  name: "A1 · Diagnose"
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...badge("A2_safe_repair"),
  name: "A2 · Safe repair"
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...badge("A3_approval"),
  name: "A3 · Needs approval"
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...badge("A4_engineering"),
  name: "A4 · Engineering"
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "The ladder",
  render: () => <PageFrame title="Support signals">
      <Section title="Autonomy ladder">
        <div className="nexus-care-reason">{LEVELS.map(l => <AutonomyBadge key={l} level={l} />)}</div>
      </Section>
    </PageFrame>
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Red line · supervisor",
  render: () => <PageFrame title="Support signals">
      <Section title="Red-line banner — supervisor">
        <RedLineBanner redLine="suspected_data_leak" audience="supervisor" />
      </Section>
    </PageFrame>,
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector('[data-testid="redline-banner"]');
    if (!el || el.getAttribute("role") !== "status") fails("the banner is role=status");
    if (!/Suspected data leak/.test(text(canvasElement))) fails("a supervisor reads the red line's name");
    if (!/security queue/.test(text(canvasElement))) fails("the banner says where it was routed");
  }
}`,...g.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Red line · support agent",
  render: () => <PageFrame title="Support signals">
      <Section title="Red-line banner — support agent">
        <RedLineBanner redLine="suspected_data_leak" audience="agent" />
      </Section>
    </PageFrame>,
  play: async ({
    canvasElement
  }) => {
    const t = text(canvasElement);
    if (/data leak|takeover|dispute|abuse|deletion|policy change/i.test(t)) fails("an agent never reads the red line's name ()");
    if (!/supervisor/i.test(t)) fails("the agent reads only that a supervisor handles it");
  }
}`,...A.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Every red line · supervisor",
  render: () => <PageFrame title="Support signals">
      <Section title="Red lines">
        {RED_LINES.map(r => <RedLineBanner key={r} redLine={r} audience="supervisor" />)}
      </Section>
    </PageFrame>
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  globals: {
    locale: "uk"
  },
  render: () => <PageFrame title="Сигнали підтримки">
      <Section title="Автономність і червоні лінії">
        <div className="nexus-care-reason">{LEVELS.map(l => <AutonomyBadge key={l} level={l} />)}</div>
        <RedLineBanner redLine="account_takeover" audience="supervisor" />
        <RedLineBanner redLine="account_takeover" audience="agent" />
      </Section>
    </PageFrame>
}`,...h.parameters?.docs?.source}}};export{p as A0Answer,d as A1Diagnose,l as A2SafeRepair,u as A3Approval,c as A4Engineering,m as AllLevels,v as AllRedLines,A as RedLineAgent,g as RedLineSupervisor,h as Ukrainian,Be as __namedExportsOrder,ke as default};
