import{j as n}from"./iframe-C_4ax-Jm.js";import{A as t,S as c}from"./AskBar-BZGuVKDt.js";import"./preload-helper-PPVm8Dsz.js";import"./navigation-BPhnWcXc.js";import"./AskBar-D6qFedOb.js";import"./VoiceWaves-CVFNr488.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./AskPanel-DKkH7ynl.js";import"./AskSurface-B8PUJCZ9.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./HandOver-BZSm7-D2.js";import"./LobbyThread-9xK7Bd9J.js";import"./Trace-BSKaAXMd.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./users-w3fldoSO.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./errors-pXhwd8l7.js";import"./credential-Ch26UJlM.js";import"./client-Bqz7dDrB.js";import"./api-COPqCyrr.js";import"./flags--SfV1VDA.js";import"./personas-BIiIeh3_.js";import"./routes-DgN3bgVk.js";const G={title:"Apps/NexSales/Ask bar",component:t,parameters:{ds:"DS-4002",workbench:{ns:"sales",path:"/sales/accounts?as=oksana"},docs:{description:{component:"The Ask entry of a NexSales screen ( S3 ·  · DS-4002 Ask surface · DS-5001): the kit's bar on the\nheader line, mounted once through `WorkbenchConfig.ask` (every `PageFrame` renders it before the screen's actions,\nD1023). The stories render the bar over the fixture session (`?as=` persona, no chat-api — the send is refused as\n*not available*, never a redirect; ): on a list screen it names the screen; on an account it carries the\naccount chip, read by nobody yet ( — sales-api's describe door joins at S3-B)."}}},decorators:[o=>n.jsx(c,{children:n.jsx(o,{})})],args:{title:"Accounts"}},a={name:"On a list screen (Accounts)"},e={name:"On an account",args:{title:"Agrolan"},parameters:{workbench:{ns:"sales",path:"/sales/accounts/acc_agrolan?as=oksana",params:{id:"acc_agrolan"}}}},s={name:"On Today",args:{title:"Today"},parameters:{workbench:{ns:"sales",path:"/sales?as=oksana"}}},r={name:"Offline",parameters:{workbench:{ns:"sales",path:"/sales/accounts?as=oksana&uat=offline"}}},H=["OnAListScreen","OnAnAccount","OnToday","Offline"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "On a list screen (Accounts)"
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "On an account",
  args: {
    title: "Agrolan"
  },
  parameters: {
    workbench: {
      ns: "sales",
      path: "/sales/accounts/acc_agrolan?as=oksana",
      params: {
        id: "acc_agrolan"
      }
    }
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "On Today",
  args: {
    title: "Today"
  },
  parameters: {
    workbench: {
      ns: "sales",
      path: "/sales?as=oksana"
    }
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Offline",
  parameters: {
    workbench: {
      ns: "sales",
      path: "/sales/accounts?as=oksana&uat=offline"
    }
  }
}`,...r.parameters?.docs?.source}}};export{r as Offline,a as OnAListScreen,e as OnAnAccount,s as OnToday,H as __namedExportsOrder,G as default};
