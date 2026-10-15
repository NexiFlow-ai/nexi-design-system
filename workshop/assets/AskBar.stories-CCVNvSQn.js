import{j as s,a0 as i}from"./iframe-WvhPuRF9.js";import{i as p,a}from"./harness-Bc6rwYr8.js";import{A as c}from"./CoreShell-C5AmFPHJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index--skdxcmK.js";import"./index-B_ScWQmE.js";import"./index-Cn-wIavP.js";import"./BrandMark-ZbGrFEPy.js";import"./FlowCanvas-Dcj5dXk8.js";import"./VoiceWaves-DXhX3WTC.js";import"./navigation-ngVPMPmt.js";import"./errors-pXhwd8l7.js";import"./AskSurface-W5viwlK3.js";import"./arrow-up-B8u2SNEL.js";import"./useAskThread-BHxAYYGB.js";import"./modules-B-Iex3jF.js";import"./sparkles-Bmich5Xl.js";import"./plug-a28xwBRD.js";import"./wrench-CpjEKpu_.js";import"./activity-D4LeXVdv.js";import"./shield-check-DjxhY3Gp.js";import"./layers-DqK1sHdN.js";const B={title:"Apps/NexCore/Ask bar",component:c,parameters:{ds:"DS-4002",layout:"fullscreen",...a("/core/projects"),docs:{description:{component:`The Ask entry of a NexCore screen ( S3 · DS-4002 Ask surface · DS-5001): the kit's bar on the header line,
mounted once through \`WorkbenchConfig.ask\`. The stories render a page line in the real shell (fixture session) so
the bar shows exactly what the running screen shows: on a list screen it names the screen; on a resource page it
carries the resource chip (a Project — the one kind chat-api verifies in NexCore;  for the others).`}}},decorators:[p],render:n=>s.jsx(i,{title:n.title,layout:"dense",children:s.jsx("p",{})}),args:{title:"Projects"}},e={name:"On a list screen (Projects)"},r={name:"On a resource (a Project)",args:{title:"Flow Studio"},parameters:a("/core/projects/prj_flow","populated","owner",{id:"prj_flow"})},o={name:"On a capability (not read yet · )",args:{title:"Approve a quote"},parameters:a("/core/capabilities/cap_quote","populated","owner",{id:"cap_quote"})},t={name:"Offline",parameters:a("/core/projects","offline")},C=["OnAListScreen","OnAResource","OnAnUnverifiedResource","Offline"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "On a list screen (Projects)"
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "On a resource (a Project)",
  args: {
    title: "Flow Studio"
  },
  parameters: at("/core/projects/prj_flow", "populated", "owner", {
    id: "prj_flow"
  })
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};export{t as Offline,e as OnAListScreen,r as OnAResource,o as OnAnUnverifiedResource,C as __namedExportsOrder,B as default};
