import{j as a,V as s}from"./iframe-C_4ax-Jm.js";import{i as n,a as i}from"./harness-CVmC89KY.js";import{A as m}from"./CoreShell-LzluVnjy.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./nav-C8-c-HcF.js";import"./runtime-Cwmke1Hn.js";import"./credential-Ch26UJlM.js";import"./chatApi-DU7mAKQS.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./organizationRequests-CxMYSAGe.js";import"./store-C-il-aT_.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./metrics-XT_i2DSD.js";import"./modules-A3eXOreg.js";import"./sparkles-t9beIr0T.js";import"./boxes-Cqxx_HWk.js";import"./plug-B3-qTSSD.js";import"./wrench-DsSy05cC.js";import"./activity-CxYo1_mQ.js";import"./shield-check-Cac0BQ49.js";import"./layers-Dsj4tA4G.js";import"./building-2-GerxkJzZ.js";const wr={title:"Apps/NexCore/Ask bar",component:m,parameters:{ds:"DS-4002",layout:"fullscreen",...i("/core/projects"),docs:{description:{component:`The Ask entry of a NexCore screen ( S3 · DS-4002 Ask surface · DS-5001): the kit's bar on the header line,
mounted once through \`WorkbenchConfig.ask\`. The stories render a page line in the real shell (fixture session) so
the bar shows exactly what the running screen shows: on a list screen it names the screen; on a resource page it
carries the resource chip (a Project — the one kind chat-api verifies in NexCore;  for the others).`}}},decorators:[n],render:p=>a.jsx(s,{title:p.title,layout:"dense",children:a.jsx("p",{})}),args:{title:"Projects"}},r={name:"On a list screen (Projects)"},e={name:"On a resource (a Project)",args:{title:"Flow Studio"},parameters:i("/core/projects/prj_flow","populated","owner",{id:"prj_flow"})},o={name:"On a capability (not read yet · )",args:{title:"Approve a quote"},parameters:i("/core/capabilities/cap_quote","populated","owner",{id:"cap_quote"})},t={name:"Offline",parameters:i("/core/projects","offline")},Sr=["OnAListScreen","OnAResource","OnAnUnverifiedResource","Offline"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "On a list screen (Projects)"
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "On a resource (a Project)",
  args: {
    title: "Flow Studio"
  },
  parameters: at("/core/projects/prj_flow", "populated", "owner", {
    id: "prj_flow"
  })
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "On a capability (not read yet · )",
  args: {
    title: "Approve a quote"
  },
  parameters: at("/core/capabilities/cap_quote", "populated", "owner", {
    id: "cap_quote"
  })
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Offline",
  parameters: at("/core/projects", "offline")
}`,...t.parameters?.docs?.source}}};export{t as Offline,r as OnAListScreen,e as OnAResource,o as OnAnUnverifiedResource,Sr as __namedExportsOrder,wr as default};
