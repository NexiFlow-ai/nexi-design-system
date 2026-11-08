import{j as r,V as p,X as m}from"./iframe-C_4ax-Jm.js";import{i as u,a as y}from"./harness-BjrPJTNs.js";import{C as e}from"./fixtures-fTf8KY-s.js";import{S,T as h}from"./Timeline-Q5ulj5u4.js";import{C as x,a as c}from"./ConversationInspector-Cb3eZADN.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */import"./bff-BhLxIK9U.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./credential-Ch26UJlM.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./gauge-CBjfqXTD.js";import"./inbox-DIvJiTk7.js";import"./activity-CxYo1_mQ.js";import"./workflow-BGMWCDzG.js";import"./plug-B3-qTSSD.js";import"./sliders-horizontal-ooANA1YP.js";import"./format-9kPeCP5n.js";import"./info-Bk_zTNpg.js";import"./wrench-DsSy05cC.js";import"./user-CGy4k_zL.js";import"./sparkles-t9beIr0T.js";import"./sticky-note-QP4A__EZ.js";import"./at-sign-DxAm-yIt.js";import"./file-text-D2w4_mYA.js";import"./PlatformDiagnostics-DedOYmPn.js";import"./SupportGrant-CfRaNiNA.js";import"./SupportSignals-rqvqRcXq.js";import"./useRead-C-SU6fTG.js";const Dr={title:"Apps/NexCare/Parts",decorators:[u],parameters:{ds:"DS-6501",layout:"fullscreen",...y("/care/conversations"),docs:{description:{component:`NexCare's conversation parts (DS-6501): the timeline (customer · agent · assistant · tool and system entries, each
labelled by who said it and whether the customer saw it), the handoff summary card (what the assistant checked,
its reason codes, the sentiment as a labelled feature — rule 85), the composer (reply vs internal note; the
assistant's draft carries its provenance) and the conversation Inspector (identity · facts · case · journey).`}}}},s=e.find(n=>n.summary)??e[0],l=e.find(n=>!n.summary)??e[1]??e[0],d=async()=>{},t={render:()=>r.jsx(p,{title:"Parts",children:r.jsx(m,{title:"Timeline",children:r.jsx(h,{c:s})})})},o={render:()=>r.jsx(p,{title:"Parts",children:r.jsx(m,{title:"Handoff summary",children:r.jsx("ol",{className:"nexus-care-timeline-list",children:s.summary?r.jsx(S,{s:s.summary}):null})})})},a={render:()=>r.jsxs(p,{title:"Parts",children:[r.jsx(m,{title:"Composer · can reply",children:r.jsx(c,{c:l,canReply:!0,onSend:d,onError:()=>{}})}),r.jsx(m,{title:"Composer · read-only",children:r.jsx(c,{c:l,canReply:!1,onSend:d,onError:()=>{}})})]})},i={render:()=>r.jsx(x,{c:s,onClose:()=>{},onCreateCase:()=>{},canAct:!0})},Hr=["Thread","Summary","Reply","Inspector"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <PageFrame title="Parts">
      <Section title="Timeline">
        <Timeline c={withSummary} />
      </Section>
    </PageFrame>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <PageFrame title="Parts">
      <Section title="Handoff summary">
        <ol className="nexus-care-timeline-list">{withSummary.summary ? <SummaryCard s={withSummary.summary} /> : null}</ol>
      </Section>
    </PageFrame>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <PageFrame title="Parts">
      <Section title="Composer · can reply">
        <Composer c={plain} canReply onSend={noop} onError={() => {}} />
      </Section>
      <Section title="Composer · read-only">
        <Composer c={plain} canReply={false} onSend={noop} onError={() => {}} />
      </Section>
    </PageFrame>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <ConversationInspector c={withSummary} onClose={() => {}} onCreateCase={() => {}} canAct />
}`,...i.parameters?.docs?.source}}};export{i as Inspector,a as Reply,o as Summary,t as Thread,Hr as __namedExportsOrder,Dr as default};
