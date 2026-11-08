import{j as e,V as _,X as p,r as f}from"./iframe-C_4ax-Jm.js";import{i as b,a as k}from"./harness-CVmC89KY.js";import{a as r,d as R,b as T,S as D,c as A}from"./TraceInspector-CTM_18jk.js";import{C as a}from"./ProjectsScreen-C7z5gdcJ.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */import"./CoreShell-LzluVnjy.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./nav-C8-c-HcF.js";import"./runtime-Cwmke1Hn.js";import"./credential-Ch26UJlM.js";import"./chatApi-DU7mAKQS.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./organizationRequests-CxMYSAGe.js";import"./store-C-il-aT_.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./metrics-XT_i2DSD.js";import"./modules-A3eXOreg.js";import"./sparkles-t9beIr0T.js";import"./boxes-Cqxx_HWk.js";import"./plug-B3-qTSSD.js";import"./wrench-DsSy05cC.js";import"./activity-CxYo1_mQ.js";import"./shield-check-Cac0BQ49.js";import"./layers-Dsj4tA4G.js";import"./building-2-GerxkJzZ.js";import"./format-DO9OmoTM.js";import"./BillingParts-8YmDY42z.js";import"./format-CgRB8Fht.js";const qe={title:"Apps/NexCore/Parts",decorators:[b],parameters:{ds:"DS-6601",layout:"fullscreen",...k("/core/observability"),docs:{description:{component:`NexCore's governance parts (DS-6601): the classification chip (five levels, tone + text), the record status dot
(a trace record's lifecycle word), and the trace Inspector's two halves — the span tree (turn → run → call, with
the time bar) and the span detail (the record as fields; payloads fetched on demand, redactions named,
classification shown — never content the viewer may not read).`}}}},h={display:"flex",gap:"var(--nexus-space-5)",alignItems:"center",flexWrap:"wrap"},t=l=>new Date(Date.UTC(2026,8,19,10,7,l)).toISOString(),v=[{id:"msg_a",kind:"turn",label:"Assistant turn",status:"complete",startedAt:t(0),durationMs:2e4,ref:"nexus://chat/message/msg_a",parentId:null,record:{thread_id:"thr_1",text_chars:400}},{id:"frun_1",kind:"flow_run",label:"Resolver flow",status:"completed",startedAt:t(1),durationMs:18e3,ref:"nexus://chat/flow_run/frun_1",parentId:"msg_a",record:{workflow_uri:"nexus://chat/flow/flw_1",steps:2}},{id:"step_1",kind:"flow_step",label:"Research",status:"completed",startedAt:t(2),durationMs:9e3,ref:"nexus://chat/flow_step/step_1",parentId:"frun_1"},{id:"arun_1",kind:"agent_run",label:"Research agent",status:"completed",startedAt:t(2),durationMs:8500,ref:"nexus://agent/run/arun_1",parentId:"step_1",record:{agent_uri:"nexus://agent/research",iterations:2}},{id:"inv_1",kind:"model_invocation",label:"gpt-5 · 2 148 tokens",status:"ok",startedAt:t(3),durationMs:4200,ref:"nexus://model/invocation/inv_1",parentId:"arun_1",payloadCount:2,record:{model:"gpt-5",tokens_in:1800,tokens_out:348,cost_units:12}},{id:"tin_1",kind:"tool_invocation",label:"web.search",status:"ok",startedAt:t(8),durationMs:1900,ref:"nexus://core/tool_invocation/tin_1",parentId:"arun_1",payloadCount:1},{id:"apr_1",kind:"approval",label:"Publish to project",status:"approved",startedAt:t(12),durationMs:null,ref:"nexus://tasks/approval/apr_1",parentId:"frun_1",record:{decided_by:"u_oksana"}},{id:"rcpt_1",kind:"receipt",label:"Receipt",status:"issued",startedAt:t(20),durationMs:null,ref:"nexus://chat/receipt/rcpt_1",parentId:"msg_a"}],S=[{id:"pl_1",kind:"input_messages",recordRef:"nexus://model/invocation/inv_1",classification:"confidential",bytes:7120,truncated:!1,redactions:[{rule:"email",path:"$.messages[1].content"}],preview:'[{"role":"system","content":"You are the research agent…"},{"role":"user","content":"Summarize the June delivery report for ▇▇▇▇"}]'},{id:"pl_2",kind:"completion",recordRef:"nexus://model/invocation/inv_1",classification:"confidential",bytes:1380,truncated:!0,redactions:[],preview:"June on-time rate improved to 93.1 %, three carriers remain below target…"}],x=A(v),s={render:()=>e.jsxs(_,{title:"Parts",children:[e.jsx(p,{title:"Classification",children:e.jsxs("div",{style:h,children:[e.jsx(a,{value:"public"}),e.jsx(a,{value:"confidential"}),e.jsx(a,{value:"dsk"}),e.jsx(a,{value:"secret"}),e.jsx(a,{value:"top_secret"})]})}),e.jsx(p,{title:"Record status",children:e.jsxs("div",{style:h,children:[e.jsx(r,{status:"complete"}),e.jsx(r,{status:"running"}),e.jsx(r,{status:"failed"}),e.jsx(r,{status:"approved"}),e.jsx(r,{status:"denied"}),e.jsx(r,{status:"pending"})]})})]})};function c({payloads:l}){const[m,y]=f.useState(R(x)?.record.id??null),[g,j]=f.useState(l),u=m?v.find(C=>C.id===m):null,w=u?{record:u,depth:0,children:[]}:null;return e.jsx(_,{title:"Parts",width:"wide",children:e.jsxs("div",{className:"nexus-cc-two",children:[e.jsx(p,{title:"Spans",children:e.jsx(T,{roots:x,selectedId:m,onSelect:y,t0:Date.parse(t(0)),total:2e4})}),e.jsx(p,{title:"Span",children:e.jsx(D,{node:w,locale:"en",payloads:g,onLoadPayloads:()=>j({state:"ready",payloads:S})})})]})})}const o={render:()=>e.jsx(c,{payloads:{state:"idle"}})},i={render:()=>e.jsx(c,{payloads:{state:"ready",payloads:S}})},n={render:()=>e.jsx(c,{payloads:{state:"denied"}})},d={render:()=>e.jsx(c,{payloads:{state:"off"}})},Be=["Chips","Trace","TracePayloads","TraceDenied","TraceCaptureOff"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <PageFrame title="Parts">
      <Section title="Classification">
        <div style={row}>
          <ClassificationChip value="public" />
          <ClassificationChip value="confidential" />
          <ClassificationChip value="dsk" />
          <ClassificationChip value="secret" />
          <ClassificationChip value="top_secret" />
        </div>
      </Section>
      <Section title="Record status">
        <div style={row}>
          <RecordStatus status="complete" />
          <RecordStatus status="running" />
          <RecordStatus status="failed" />
          <RecordStatus status="approved" />
          <RecordStatus status="denied" />
          <RecordStatus status="pending" />
        </div>
      </Section>
    </PageFrame>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <TraceDemo payloads={{
    state: "idle"
  }} />
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <TraceDemo payloads={{
    state: "ready",
    payloads: PAYLOADS
  }} />
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <TraceDemo payloads={{
    state: "denied"
  }} />
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <TraceDemo payloads={{
    state: "off"
  }} />
}`,...d.parameters?.docs?.source}}};export{s as Chips,o as Trace,d as TraceCaptureOff,n as TraceDenied,i as TracePayloads,Be as __namedExportsOrder,qe as default};
