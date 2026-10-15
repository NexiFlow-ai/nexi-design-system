import{j as e,a0 as _,a2 as c,r as f}from"./iframe-WvhPuRF9.js";import{i as b,a as k}from"./harness-Bc6rwYr8.js";import{R as a,d as R,S as T,a as D,b as A}from"./TraceInspector-Bkmfp1hf.js";import{C as s}from"./ProjectsScreen-z1OByKyI.js";import"./preload-helper-PPVm8Dsz.js";import"./CoreShell-C5AmFPHJ.js";import"./index--skdxcmK.js";import"./index-B_ScWQmE.js";import"./index-Cn-wIavP.js";import"./BrandMark-ZbGrFEPy.js";import"./FlowCanvas-Dcj5dXk8.js";import"./VoiceWaves-DXhX3WTC.js";import"./navigation-ngVPMPmt.js";import"./errors-pXhwd8l7.js";import"./AskSurface-W5viwlK3.js";import"./arrow-up-B8u2SNEL.js";import"./useAskThread-BHxAYYGB.js";import"./modules-B-Iex3jF.js";import"./sparkles-Bmich5Xl.js";import"./plug-a28xwBRD.js";import"./wrench-CpjEKpu_.js";import"./activity-D4LeXVdv.js";import"./shield-check-DjxhY3Gp.js";import"./layers-DqK1sHdN.js";import"./format-CgRB8Fht.js";import"./metrics-2srjSTEE.js";const se={title:"Apps/NexCore/Parts",decorators:[b],parameters:{ds:"DS-6601",layout:"fullscreen",...k("/core/observability"),docs:{description:{component:`NexCore's governance parts (DS-6601): the classification chip (five levels, tone + text), the record status dot
(a trace record's lifecycle word), and the trace Inspector's two halves — the span tree (turn → run → call, with
the time bar) and the span detail (the record as fields; payloads fetched on demand, redactions named,
classification shown — never content the viewer may not read).`}}}},h={display:"flex",gap:"var(--nexus-space-5)",alignItems:"center",flexWrap:"wrap"},t=p=>new Date(Date.UTC(2026,8,19,10,7,p)).toISOString(),v=[{id:"msg_a",kind:"turn",label:"Assistant turn",status:"complete",startedAt:t(0),durationMs:2e4,ref:"nexus://chat/message/msg_a",parentId:null,record:{thread_id:"thr_1",text_chars:400}},{id:"frun_1",kind:"flow_run",label:"Resolver flow",status:"completed",startedAt:t(1),durationMs:18e3,ref:"nexus://chat/flow_run/frun_1",parentId:"msg_a",record:{workflow_uri:"nexus://chat/flow/flw_1",steps:2}},{id:"step_1",kind:"flow_step",label:"Research",status:"completed",startedAt:t(2),durationMs:9e3,ref:"nexus://chat/flow_step/step_1",parentId:"frun_1"},{id:"arun_1",kind:"agent_run",label:"Research agent",status:"completed",startedAt:t(2),durationMs:8500,ref:"nexus://agent/run/arun_1",parentId:"step_1",record:{agent_uri:"nexus://agent/research",iterations:2}},{id:"inv_1",kind:"model_invocation",label:"gpt-5 · 2 148 tokens",status:"ok",startedAt:t(3),durationMs:4200,ref:"nexus://model/invocation/inv_1",parentId:"arun_1",payloadCount:2,record:{model:"gpt-5",tokens_in:1800,tokens_out:348,cost_units:12}},{id:"tin_1",kind:"tool_invocation",label:"web.search",status:"ok",startedAt:t(8),durationMs:1900,ref:"nexus://core/tool_invocation/tin_1",parentId:"arun_1",payloadCount:1},{id:"apr_1",kind:"approval",label:"Publish to project",status:"approved",startedAt:t(12),durationMs:null,ref:"nexus://tasks/approval/apr_1",parentId:"frun_1",record:{decided_by:"u_oksana"}},{id:"rcpt_1",kind:"receipt",label:"Receipt",status:"issued",startedAt:t(20),durationMs:null,ref:"nexus://chat/receipt/rcpt_1",parentId:"msg_a"}],S=[{id:"pl_1",kind:"input_messages",recordRef:"nexus://model/invocation/inv_1",classification:"confidential",bytes:7120,truncated:!1,redactions:[{rule:"email",path:"$.messages[1].content"}],preview:'[{"role":"system","content":"You are the research agent…"},{"role":"user","content":"Summarize the June delivery report for ▇▇▇▇"}]'},{id:"pl_2",kind:"completion",recordRef:"nexus://model/invocation/inv_1",classification:"confidential",bytes:1380,truncated:!0,redactions:[],preview:"June on-time rate improved to 93.1 %, three carriers remain below target…"}],x=A(v),r={render:()=>e.jsxs(_,{title:"Parts",children:[e.jsx(c,{title:"Classification",children:e.jsxs("div",{style:h,children:[e.jsx(s,{value:"public"}),e.jsx(s,{value:"confidential"}),e.jsx(s,{value:"dsk"}),e.jsx(s,{value:"secret"}),e.jsx(s,{value:"top_secret"})]})}),e.jsx(c,{title:"Record status",children:e.jsxs("div",{style:h,children:[e.jsx(a,{status:"complete"}),e.jsx(a,{status:"running"}),e.jsx(a,{status:"failed"}),e.jsx(a,{status:"approved"}),e.jsx(a,{status:"denied"}),e.jsx(a,{status:"pending"})]})})]})};function l({payloads:p}){const[u,y]=f.useState(R(x)?.record.id??null),[g,j]=f.useState(p),m=u?v.find(C=>C.id===u):null,w=m?{record:m,depth:0,children:[]}:null;return e.jsx(_,{title:"Parts",width:"wide",children:e.jsxs("div",{className:"nexus-cc-two",children:[e.jsx(c,{title:"Spans",children:e.jsx(T,{roots:x,selectedId:u,onSelect:y,t0:Date.parse(t(0)),total:2e4})}),e.jsx(c,{title:"Span",children:e.jsx(D,{node:w,locale:"en",payloads:g,onLoadPayloads:()=>j({state:"ready",payloads:S})})})]})})}const n={render:()=>e.jsx(l,{payloads:{state:"idle"}})},o={render:()=>e.jsx(l,{payloads:{state:"ready",payloads:S}})},i={render:()=>e.jsx(l,{payloads:{state:"denied"}})},d={render:()=>e.jsx(l,{payloads:{state:"off"}})},re=["Chips","Trace","TracePayloads","TraceDenied","TraceCaptureOff"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <TraceDemo payloads={{
    state: "idle"
  }} />
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <TraceDemo payloads={{
    state: "ready",
    payloads: PAYLOADS
  }} />
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <TraceDemo payloads={{
    state: "denied"
  }} />
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <TraceDemo payloads={{
    state: "off"
  }} />
}`,...d.parameters?.docs?.source}}};export{r as Chips,n as Trace,d as TraceCaptureOff,i as TraceDenied,o as TracePayloads,re as __namedExportsOrder,se as default};
