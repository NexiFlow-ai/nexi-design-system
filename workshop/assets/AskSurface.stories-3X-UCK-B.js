import{j as a,af as C,r as k}from"./iframe-WvhPuRF9.js";import{A,a as T,b as H}from"./AskSurface-W5viwlK3.js";import{G as D,C as I}from"./ChatApiProvider-FPF4EJK3.js";import{b as R}from"./TurnCard-_eDJGWkj.js";import"./preload-helper-PPVm8Dsz.js";import"./VoiceWaves-DXhX3WTC.js";import"./arrow-up-B8u2SNEL.js";import"./minus-n1yuWPpd.js";const r={app:"bi",resourceRef:"nexus://bi/dashboard/dash_supply",label:"Supply control",kind:"dashboard",verified:!0,accent:"#1f6feb"},B="why did on-time delivery drop?",s=(e=B)=>({id:"u1",role:"user",text:e}),t=e=>({id:"a1",role:"assistant",text:e}),O="On-time delivery is 91.2 % for September, 4.1 points below August. Two blocks on the dashboard moved with it: Late shipments (+38) and Average lead time (+1.4 days). The dashboard itself doesn't say what caused the change.",j="On-time delivery usually drops when late shipments rise or lead times grow; the dashboard's blocks would show which. I can't see its numbers from here.",o="/projects/prj_bi/threads/thr_ask1";function P(e){switch(e){case"empty":return null;case"composing":return{state:e,context:r,turns:[]};case"streaming":return{state:e,context:r,turns:[s()],streamingText:"On-time delivery is 91.2 % for September, 4.1 points below",continueHref:o};case"answered":return{state:e,context:r,turns:[s("what does this dashboard track?"),t("Supply control tracks on-time delivery, late shipments and average lead time per supplier, by month.")],continueHref:o};case"answered_from_screen":return{state:e,context:r,turns:[s(),t(O)],provenance:{label:"Supply control",href:"/bi/dashboards/dash_supply",version:12,refreshedAt:"09:14",createdBy:"O. Kovalenko"},continueHref:o};case"not_on_screen":return{state:e,context:r,turns:[s("why did it drop over the last six months?"),t(O)],provenance:{label:"Supply control",href:"/bi/dashboards/dash_supply",version:12,refreshedAt:"09:14",createdBy:"O. Kovalenko"},notOnScreen:["the six-month history"],action:{id:"act_analyse",title:"Analyse on-time delivery over the last 6 months in NexBI?",detail:"dataset Deliveries · as you",state:"proposed"},continueHref:o};case"unreadable":return{state:e,context:{...r,app:"graph",resourceRef:"nexus://graph/object/obj_1",label:"Lithium battery rules",kind:"object"},turns:[s("what does this object say about customs?"),t(j)],continueHref:o};case"action_proposed":return{state:e,context:r,turns:[s("add on-time delivery by region to this dashboard"),t("I can add a block for that.")],action:{id:"act_add",title:'Add block "On-time delivery by region" to Supply control?',detail:"metric On-time delivery · by region · last 12 months",state:"proposed"},continueHref:o};case"action_done":return{state:e,context:r,turns:[s("add on-time delivery by region to this dashboard"),t("I can add a block for that.")],action:{id:"act_add",title:'Add block "On-time delivery by region" to Supply control?',detail:"metric On-time delivery · by region · last 12 months",state:"done",doneLabel:"Added"},continueHref:o};case"error":return{state:e,context:r,turns:[s()]};case"denied":return{state:e,context:{...r,verified:!1,kind:void 0},turns:[s(),t(j)],continueHref:o};case"offline":return{state:e,context:r,turns:[]};case"no_destination":return{state:e,context:{...r,label:"Board pay review"},turns:[s("who approved this?")],reason:"this dashboard is confidential and no conversation here may hold it",openChatHref:"/chat"};case"no_route":return{state:e,context:{...r,label:"Board pay review"},turns:[s("summarise this")]}}}const K=["empty","composing","streaming","answered","answered_from_screen","not_on_screen","unreadable","action_proposed","action_done","error","denied","offline","no_destination","no_route"],L=["bi","tasks","map","graph","core","care","forge","sales"];function U(e){return{kind:"agent",state:"done",title:"General",body:{kind:"prose",text:e.text??""}}}const $=e=>e.role==="assistant"?a.jsx(R,{view:U(e),testId:`ask-turn-${e.id}`}):a.jsx("p",{className:"nexus-ask-turn-user",children:e.text});function F({state:e}){const[n,E]=k.useState(e==="composing"?"why did on-time delivery":e==="offline"?"why did on-time delivery drop?":""),c=P(e),N=k.useMemo(()=>c?{...c,turns:c.turns.map(w=>w.role==="assistant"?{...w,view:{}}:w)}:null,[c]);return a.jsx("div",{className:"nexus-ask-catalogue-cell","data-testid":`ask-catalogue-${e}`,children:a.jsx("div",{className:"nexus-ask-catalogue-stage",children:a.jsx(H,{app:"bi",model:N,draft:n,onDraftChange:E,onSend:()=>{},onNew:()=>{},onStop:()=>{},onRetry:()=>{},onConfirm:()=>{},onChangeAction:()=>{},onCancelAction:()=>{},onAttach:()=>{},onVoiceUtterance:async()=>({kind:"no_speech"}),offline:e==="offline",open:e!=="empty"&&e!=="composing"&&e!=="offline",onOpenChange:()=>{},renderTurn:$,testId:`ask-surface-${e}`})})})}function G(){const{t:e}=C();return a.jsx(D,{children:L.map(n=>a.jsx(I,{label:A[n],testId:`ask-catalogue-host-${n}`,children:a.jsx(T,{placeholder:e(`ask.placeholder.${n}`),value:"",onChange:()=>{},onSend:()=>{},onAttach:()=>{},onVoiceUtterance:async()=>({kind:"no_speech"}),ariaLabel:e("ask.region",{app:A[n]}),testId:`ask-bar-${n}`})},n))})}function M({scene:e,state:n}){return e==="hosts"?a.jsx(G,{}):a.jsx(F,{state:n??"answered"})}const Z={title:"Conversation/Ask surface",component:M,parameters:{ds:"DS-4002",layout:"padded"},argTypes:{state:{control:"select",options:K}}},i={args:{scene:"hosts"},parameters:{ds:"DS-4001"}},d={args:{scene:"panel",state:"empty"}},p={args:{scene:"panel",state:"composing"}},l={args:{scene:"panel",state:"streaming"}},u={args:{scene:"panel",state:"answered"}},m={args:{scene:"panel",state:"answered_from_screen"}},h={args:{scene:"panel",state:"not_on_screen"}},g={args:{scene:"panel",state:"unreadable"}},f={args:{scene:"panel",state:"action_proposed"}},b={args:{scene:"panel",state:"action_done"}},y={args:{scene:"panel",state:"error"}},v={args:{scene:"panel",state:"denied"}},_={args:{scene:"panel",state:"offline"}},S={args:{scene:"panel",state:"no_destination"}},x={args:{scene:"panel",state:"no_route"}},ee=["TheBarInEveryHost","Empty","Composing","Streaming","Answered","AnsweredFromScreen","NotOnScreen","Unreadable","ActionProposed","ActionDone","Error","Denied","Offline","NoDestination","NoRoute"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "hosts"
  },
  parameters: {
    ds: "DS-4001"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "empty"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "composing"
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "streaming"
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "answered"
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "answered_from_screen"
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "not_on_screen"
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "unreadable"
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "action_proposed"
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "action_done"
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "error"
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "denied"
  }
}`,...v.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "offline"
  }
}`,..._.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "no_destination"
  }
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "no_route"
  }
}`,...x.parameters?.docs?.source}}};export{b as ActionDone,f as ActionProposed,u as Answered,m as AnsweredFromScreen,p as Composing,v as Denied,d as Empty,y as Error,S as NoDestination,x as NoRoute,h as NotOnScreen,_ as Offline,l as Streaming,i as TheBarInEveryHost,g as Unreadable,ee as __namedExportsOrder,Z as default};
