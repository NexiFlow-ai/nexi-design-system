import{j as r,V as a}from"./iframe-C_4ax-Jm.js";import{A as i,G as s}from"./GraphShell-BqaAvdfg.js";import"./preload-helper-PPVm8Dsz.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./credential-Ch26UJlM.js";import"./errors-pXhwd8l7.js";import"./client-Bqz7dDrB.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./modules-A3eXOreg.js";import"./gauge-CBjfqXTD.js";import"./database-BGWOjs-M.js";import"./workflow-BGMWCDzG.js";import"./shield-check-Cac0BQ49.js";const sr={title:"Apps/NexGraph/Ask bar",component:i,parameters:{ds:"DS-4002",layout:"fullscreen",workbench:{ns:"graph",path:"/graph/sources"},docs:{description:{component:`The Ask entry of a NexGraph screen ( S3 · DS-4002 Ask surface · DS-5001): the kit's bar on the header line,
mounted once through \`WorkbenchConfig.ask\`. The stories render a page line in the real shell (the session comes from
core-api — absent in the workshop, so the bar renders its *not available* rung, never a redirect; ): on a
list screen it names the screen; on a claim, a run or a source it carries the resource chip, read by nobody yet
(). NexGraph joins the workshop's story glob with  S3-B; the file is the component's test until then.`}}},decorators:[n=>r.jsx(s,{children:r.jsx(n,{})})],render:n=>r.jsx(a,{title:n.title,layout:"dense",children:r.jsx("p",{})}),args:{title:"Sources"}},e={name:"On a list screen (Sources)"},t={name:"On a claim",args:{title:"Delivery term is 14 days"},parameters:{workbench:{ns:"graph",path:"/graph/claims/clm_1",params:{id:"clm_1"}}}},o={name:"On a pipeline run",args:{title:"Run 2026-10-11"},parameters:{workbench:{ns:"graph",path:"/graph/pipeline/run_1",params:{id:"run_1"}}}},pr=["OnAListScreen","OnAClaim","OnARun"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "On a list screen (Sources)"
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "On a claim",
  args: {
    title: "Delivery term is 14 days"
  },
  parameters: {
    workbench: {
      ns: "graph",
      path: "/graph/claims/clm_1",
      params: {
        id: "clm_1"
      }
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "On a pipeline run",
  args: {
    title: "Run 2026-10-11"
  },
  parameters: {
    workbench: {
      ns: "graph",
      path: "/graph/pipeline/run_1",
      params: {
        id: "run_1"
      }
    }
  }
}`,...o.parameters?.docs?.source}}};export{t as OnAClaim,e as OnAListScreen,o as OnARun,pr as __namedExportsOrder,sr as default};
