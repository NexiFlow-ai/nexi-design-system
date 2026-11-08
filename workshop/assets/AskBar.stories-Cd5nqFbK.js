import{j as e,V as n}from"./iframe-C_4ax-Jm.js";import{A as a,F as i}from"./ForgeShell-BXa4k2EW.js";import"./preload-helper-PPVm8Dsz.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./credential-Ch26UJlM.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./square-kanban-1DGdpNhu.js";import"./workflow-BGMWCDzG.js";const se={title:"Apps/NexForge/Ask bar",component:a,parameters:{ds:"DS-4002",layout:"fullscreen",workbench:{ns:"forge",path:"/forge?as=maria"},docs:{description:{component:"The Ask entry of a NexForge screen ( S3 · DS-4002 Ask surface · DS-5001): the kit's bar on the header line,\nmounted once through `WorkbenchConfig.ask` (: the header slot only — never inside a scene's own conversation).\nThe stories render a page line in the real shell (fixture session, `?as=` persona): on the scenes list the bar\nnames the screen; on a scene it carries the scene chip, read by nobody yet (). NexForge joins the workshop's\nstory glob with  S3-B; the file is the component's test until then."}}},decorators:[s=>e.jsx(i,{children:e.jsx(s,{})})],render:s=>e.jsx(n,{title:s.title,layout:"dense",children:e.jsx("p",{})}),args:{title:"Scenes"}},r={name:"On the scenes list"},t={name:"On a scene",args:{title:"Quarterly review rehearsal"},parameters:{workbench:{ns:"forge",path:"/forge/scenes/scn_1?as=maria",params:{id:"scn_1"}}}},o={name:"Offline",parameters:{workbench:{ns:"forge",path:"/forge?as=maria&uat=offline"}}},ne=["OnTheScenesList","OnAScene","Offline"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "On the scenes list"
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "On a scene",
  args: {
    title: "Quarterly review rehearsal"
  },
  parameters: {
    workbench: {
      ns: "forge",
      path: "/forge/scenes/scn_1?as=maria",
      params: {
        id: "scn_1"
      }
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Offline",
  parameters: {
    workbench: {
      ns: "forge",
      path: "/forge?as=maria&uat=offline"
    }
  }
}`,...o.parameters?.docs?.source}}};export{o as Offline,t as OnAScene,r as OnTheScenesList,ne as __namedExportsOrder,se as default};
