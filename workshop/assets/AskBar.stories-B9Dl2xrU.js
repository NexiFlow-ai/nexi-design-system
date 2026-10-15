import{j as r}from"./iframe-WvhPuRF9.js";import{A as t,S as c}from"./AskBar-D_3uOD89.js";import"./preload-helper-PPVm8Dsz.js";import"./navigation-ngVPMPmt.js";import"./errors-pXhwd8l7.js";import"./AskSurface-W5viwlK3.js";import"./VoiceWaves-DXhX3WTC.js";import"./arrow-up-B8u2SNEL.js";import"./useAskThread-BHxAYYGB.js";import"./flags--SfV1VDA.js";import"./personas-BIiIeh3_.js";import"./routes-36j8zYvH.js";const b={title:"Apps/NexSales/Ask bar",component:t,parameters:{ds:"DS-4002",workbench:{ns:"sales",path:"/sales/accounts?as=oksana"},docs:{description:{component:"The Ask entry of a NexSales screen ( S3 ·  · DS-4002 Ask surface · DS-5001): the kit's bar on the\nheader line, mounted once through `WorkbenchConfig.ask` (every `PageFrame` renders it before the screen's actions,\nD1023). The stories render the bar over the fixture session (`?as=` persona, no chat-api — the send is refused as\n*not available*, never a redirect; ): on a list screen it names the screen; on an account it carries the\naccount chip, read by nobody yet ( — sales-api's describe door joins at S3-B)."}}},decorators:[o=>r.jsx(c,{children:r.jsx(o,{})})],args:{title:"Accounts"}},a={name:"On a list screen (Accounts)"},e={name:"On an account",args:{title:"Agrolan"},parameters:{workbench:{ns:"sales",path:"/sales/accounts/acc_agrolan?as=oksana",params:{id:"acc_agrolan"}}}},s={name:"On Today",args:{title:"Today"},parameters:{workbench:{ns:"sales",path:"/sales?as=oksana"}}},n={name:"Offline",parameters:{workbench:{ns:"sales",path:"/sales/accounts?as=oksana&uat=offline"}}},S=["OnAListScreen","OnAnAccount","OnToday","Offline"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Offline",
  parameters: {
    workbench: {
      ns: "sales",
      path: "/sales/accounts?as=oksana&uat=offline"
    }
  }
}`,...n.parameters?.docs?.source}}};export{n as Offline,a as OnAListScreen,e as OnAnAccount,s as OnToday,S as __namedExportsOrder,b as default};
