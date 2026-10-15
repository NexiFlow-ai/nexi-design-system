import{j as s,a0 as i}from"./iframe-WvhPuRF9.js";import{i as c,A as m,a}from"./harness-c3mtKjLJ.js";import"./preload-helper-PPVm8Dsz.js";import"./bff-fBRoWgiR.js";import"./index--skdxcmK.js";import"./index-B_ScWQmE.js";import"./index-Cn-wIavP.js";import"./BrandMark-ZbGrFEPy.js";import"./FlowCanvas-Dcj5dXk8.js";import"./VoiceWaves-DXhX3WTC.js";import"./navigation-ngVPMPmt.js";import"./errors-pXhwd8l7.js";import"./AskSurface-W5viwlK3.js";import"./arrow-up-B8u2SNEL.js";import"./useAskThread-BHxAYYGB.js";import"./gauge-DS4Joyoa.js";import"./inbox-B5_nynFX.js";import"./activity-D4LeXVdv.js";import"./workflow-lrXafeSm.js";import"./plug-a28xwBRD.js";import"./sliders-horizontal-l2A5BeBL.js";const _={title:"Apps/NexCare/Ask bar",component:m,parameters:{ds:"DS-4002",layout:"fullscreen",...a("/care/conversations"),docs:{description:{component:"The Ask entry of a NexCare screen ( S3 · DS-4002 Ask surface · DS-5001): the kit's bar on the header line,\nmounted once through `WorkbenchConfig.ask` (: the header slot only — never inside the inbox's composer). The\nstories render a page line in the real shell (fixture session): on a list screen the bar names the screen; with a\nconversation open it names the conversation (`?c=`), read by nobody yet ()."}}},decorators:[c],render:t=>s.jsx(i,{title:t.title,layout:"dense",children:s.jsx("p",{})}),args:{title:"Conversations"}},e={name:"On a list screen (Conversations)"},r={name:"On a conversation",parameters:{workbench:{ns:"care",path:"/care/conversations?as=olena&c=cnv_1"}}},n={name:"In the Studio (Knowledge)",args:{title:"Knowledge"},parameters:a("/care/studio/knowledge")},o={name:"Offline",parameters:a("/care/conversations","offline")},B=["OnAListScreen","OnAConversation","InTheStudio","Offline"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "On a list screen (Conversations)"
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "On a conversation",
  parameters: {
    workbench: {
      ns: "care",
      path: "/care/conversations?as=olena&c=cnv_1"
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "In the Studio (Knowledge)",
  args: {
    title: "Knowledge"
  },
  parameters: at("/care/studio/knowledge")
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Offline",
  parameters: at("/care/conversations", "offline")
}`,...o.parameters?.docs?.source}}};export{n as InTheStudio,o as Offline,r as OnAConversation,e as OnAListScreen,B as __namedExportsOrder,_ as default};
