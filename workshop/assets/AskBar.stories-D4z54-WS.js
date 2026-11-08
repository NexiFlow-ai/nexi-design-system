import{j as a,V as i}from"./iframe-C_4ax-Jm.js";import{i as m,A as p,a as n}from"./harness-BjrPJTNs.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */import"./bff-BhLxIK9U.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./credential-Ch26UJlM.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./gauge-CBjfqXTD.js";import"./inbox-DIvJiTk7.js";import"./activity-CxYo1_mQ.js";import"./workflow-BGMWCDzG.js";import"./plug-B3-qTSSD.js";import"./sliders-horizontal-ooANA1YP.js";const de={title:"Apps/NexCare/Ask bar",component:p,parameters:{ds:"DS-4002",layout:"fullscreen",...n("/care/conversations"),docs:{description:{component:"The Ask entry of a NexCare screen ( S3 · DS-4002 Ask surface · DS-5001): the kit's bar on the header line,\nmounted once through `WorkbenchConfig.ask` (: the header slot only — never inside the inbox's composer). The\nstories render a page line in the real shell (fixture session): on a list screen the bar names the screen; with a\nconversation open it names the conversation (`?c=`), read by nobody yet ()."}}},decorators:[m],render:s=>a.jsx(i,{title:s.title,layout:"dense",children:a.jsx("p",{})}),args:{title:"Conversations"}},e={name:"On a list screen (Conversations)"},r={name:"On a conversation",parameters:{workbench:{ns:"care",path:"/care/conversations?as=olena&c=cnv_1"}}},o={name:"In the Studio (Knowledge)",args:{title:"Knowledge"},parameters:n("/care/studio/knowledge")},t={name:"Offline",parameters:n("/care/conversations","offline")},ue=["OnAListScreen","OnAConversation","InTheStudio","Offline"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "On a list screen (Conversations)"
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "On a conversation",
  parameters: {
    workbench: {
      ns: "care",
      path: "/care/conversations?as=olena&c=cnv_1"
    }
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "In the Studio (Knowledge)",
  args: {
    title: "Knowledge"
  },
  parameters: at("/care/studio/knowledge")
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Offline",
  parameters: at("/care/conversations", "offline")
}`,...t.parameters?.docs?.source}}};export{o as InTheStudio,t as Offline,r as OnAConversation,e as OnAListScreen,ue as __namedExportsOrder,de as default};
