import{j as e,a0 as c,a2 as n}from"./iframe-WvhPuRF9.js";import{i as u,a as y}from"./harness-c3mtKjLJ.js";import{C as r}from"./fixtures-Ddk4yKWf.js";import{S,T as h}from"./Timeline-BfXFmbrR.js";import{C as x,a as p}from"./ConversationInspector-Dy7Y_3kW.js";import"./preload-helper-PPVm8Dsz.js";import"./bff-fBRoWgiR.js";import"./index--skdxcmK.js";import"./index-B_ScWQmE.js";import"./index-Cn-wIavP.js";import"./BrandMark-ZbGrFEPy.js";import"./FlowCanvas-Dcj5dXk8.js";import"./VoiceWaves-DXhX3WTC.js";import"./navigation-ngVPMPmt.js";import"./errors-pXhwd8l7.js";import"./AskSurface-W5viwlK3.js";import"./arrow-up-B8u2SNEL.js";import"./useAskThread-BHxAYYGB.js";import"./gauge-DS4Joyoa.js";import"./inbox-B5_nynFX.js";import"./activity-D4LeXVdv.js";import"./workflow-lrXafeSm.js";import"./plug-a28xwBRD.js";import"./sliders-horizontal-l2A5BeBL.js";import"./format-DBRVOMNp.js";import"./wrench-CpjEKpu_.js";import"./search-BWeduLZD.js";import"./sparkles-Bmich5Xl.js";import"./file-text-BSPZAxsW.js";import"./useRead-Dlb4A33L.js";const U={title:"Apps/NexCare/Parts",decorators:[u],parameters:{ds:"DS-6501",layout:"fullscreen",...y("/care/conversations"),docs:{description:{component:`NexCare's conversation parts (DS-6501): the timeline (customer · agent · assistant · tool and system entries, each
labelled by who said it and whether the customer saw it), the handoff summary card (what the assistant checked,
its reason codes, the sentiment as a labelled feature — rule 85), the composer (reply vs internal note; the
assistant's draft carries its provenance) and the conversation Inspector (identity · facts · case · journey).`}}}},i=r.find(m=>m.summary)??r[0],l=r.find(m=>!m.summary)??r[1]??r[0],d=async()=>{},t={render:()=>e.jsx(c,{title:"Parts",children:e.jsx(n,{title:"Timeline",children:e.jsx(h,{c:i})})})},a={render:()=>e.jsx(c,{title:"Parts",children:e.jsx(n,{title:"Handoff summary",children:e.jsx("ol",{className:"nexus-care-timeline-list",children:i.summary?e.jsx(S,{s:i.summary}):null})})})},o={render:()=>e.jsxs(c,{title:"Parts",children:[e.jsx(n,{title:"Composer · can reply",children:e.jsx(p,{c:l,canReply:!0,onSend:d,onError:()=>{}})}),e.jsx(n,{title:"Composer · read-only",children:e.jsx(p,{c:l,canReply:!1,onSend:d,onError:()=>{}})})]})},s={render:()=>e.jsx(x,{c:i,onClose:()=>{},onCreateCase:()=>{},canAct:!0})},W=["Thread","Summary","Reply","Inspector"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <PageFrame title="Parts">
      <Section title="Timeline">
        <Timeline c={withSummary} />
      </Section>
    </PageFrame>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <PageFrame title="Parts">
      <Section title="Handoff summary">
        <ol className="nexus-care-timeline-list">{withSummary.summary ? <SummaryCard s={withSummary.summary} /> : null}</ol>
      </Section>
    </PageFrame>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <PageFrame title="Parts">
      <Section title="Composer · can reply">
        <Composer c={plain} canReply onSend={noop} onError={() => {}} />
      </Section>
      <Section title="Composer · read-only">
        <Composer c={plain} canReply={false} onSend={noop} onError={() => {}} />
      </Section>
    </PageFrame>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <ConversationInspector c={withSummary} onClose={() => {}} onCreateCase={() => {}} canAct />
}`,...s.parameters?.docs?.source}}};export{s as Inspector,o as Reply,a as Summary,t as Thread,W as __namedExportsOrder,U as default};
