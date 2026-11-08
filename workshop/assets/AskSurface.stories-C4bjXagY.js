import{j as s,r as j,ak as F}from"./iframe-C_4ax-Jm.js";import{A as O}from"./AskBar-D6qFedOb.js";import"./AskPanel-DKkH7ynl.js";import{A as C,a as M}from"./AskSurface-B8PUJCZ9.js";import{a as I}from"./fixtures-CfJHxPtm.js";import"./ConversationFrame-crdlsIAN.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./HandOver-BZSm7-D2.js";import"./LobbyThread-9xK7Bd9J.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import{G as P,C as T}from"./harness-p7-wY8XY.js";import{a as L}from"./TurnCard-DAtPNCeb.js";import"./preload-helper-PPVm8Dsz.js";import"./VoiceWaves-CVFNr488.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./BrandMark-ZJnyD0IE.js";import"./Trace-BSKaAXMd.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./users-w3fldoSO.js";/* empty css                */import"./ChatApiProvider-Dp0rzuLn.js";import"./square-CY8wW9K4.js";import"./minus-8B1Z9tTG.js";const $=["empty","composing","streaming","answered","answered_from_screen","not_on_screen","unreadable","action_proposed","action_done","error","denied","offline","no_destination","no_route"],B=["bi","tasks","map","graph","core","care","forge","sales"];function H(e){return{kind:"agent",state:"done",title:"General",body:{kind:"prose",text:e.text??""}}}const R=e=>e.role==="assistant"?s.jsx(L,{view:H(e),testId:`ask-turn-${e.id}`}):s.jsx("p",{className:"nexus-ask-turn-user",children:e.text});function U({state:e}){const[r,a]=j.useState(e==="composing"?"why did on-time delivery":e==="offline"?"why did on-time delivery drop?":""),n=I(e),N=j.useMemo(()=>n?{...n,turns:n.turns.map(t=>t.role==="assistant"?{...t,view:{}}:t)}:null,[n]);return s.jsx("div",{className:"nexus-ask-catalogue-cell","data-testid":`ask-catalogue-${e}`,children:s.jsx("div",{className:"nexus-ask-catalogue-stage",children:s.jsx(C,{app:"bi",model:N,draft:r,onDraftChange:a,onSend:()=>{},onNew:()=>{},onStop:()=>{},onRetry:()=>{},onConfirm:()=>{},onChangeAction:()=>{},onCancelAction:()=>{},onAttach:()=>{},onVoiceUtterance:async()=>({kind:"no_speech"}),offline:e==="offline",open:e!=="empty"&&e!=="composing"&&e!=="offline",onOpenChange:()=>{},renderTurn:R,testId:`ask-surface-${e}`})})})}function G(){const{t:e}=F();return s.jsx(P,{children:B.map(r=>s.jsx(T,{label:M[r],testId:`ask-catalogue-host-${r}`,children:s.jsx(O,{placeholder:e(`ask.placeholder.${r}`),value:"",onChange:()=>{},onSend:()=>{},onAttach:()=>{},onVoiceUtterance:async()=>({kind:"no_speech"}),ariaLabel:e("ask.region",{app:M[r]}),testId:`ask-bar-${r}`})},r))})}const V={proposed:"proposed",done:"done",blocked:"blocked",dismissed:"dismissed",declined:"declined"};function K({door:e,empty:r}){const[a,n]=j.useState(""),[N,t]=j.useState(!1),o=N?"dismissed":e,E={state:"answered",context:null,turns:r?[]:[{id:"m2",role:"assistant",text:"Hi Olena — I'm Nexi. Nexiflow is ready: General is your first project, the base pack is installed, and your agents answer as soon as a model has a key. Shall we start with your team?",proposal:o==="done"?{id:"m2",title:"Invite your team",state:o,doneLabel:"Marko joined as a Member."}:o==="blocked"?{id:"m2",title:"Add a model key",detail:"OpenAI is waiting for a key — your agents answer once it has one.",state:o,door:"/core/connections?open=cpy_openai&tab=credentials",doorLabel:"Open Models"}:o==="dismissed"?{id:"m2",title:"Invite your team",state:o}:{id:"m2",title:"Invite your team",detail:"Two people see this organization today — Nexiflow has room.",state:o,door:"/core/people?invite=1",doorLabel:"Open People"}}],continueHref:"/chat/thr_welcome"};return s.jsx("div",{className:"nexus-ask-catalogue-cell","data-testid":`ask-first-minute-${V[e]}`,children:s.jsx(C,{app:"core",layout:"inline",model:E,draft:a,onDraftChange:n,onSend:()=>{},onStop:()=>{},onContinue:()=>{},onDismissProposal:()=>t(!0),onOpenDoor:()=>{},onAttach:()=>{},onVoiceUtterance:async()=>({kind:"no_speech"}),placeholder:"Ask Nexi anything about setting up Nexiflow…",testId:"ask-surface-first-minute"})})}function z({scene:e,state:r,door:a,empty:n}){return e==="first_minute"?s.jsx(K,{door:a??"proposed",empty:n}):e==="hosts"?s.jsx(G,{}):s.jsx(U,{state:r??"answered"})}const Ae={title:"Conversation/Ask surface",component:z,parameters:{ds:"DS-4002",layout:"padded"},argTypes:{state:{control:"select",options:$}}},i={args:{scene:"hosts"},parameters:{ds:"DS-4001"}},c={args:{scene:"panel",state:"empty"}},d={args:{scene:"panel",state:"composing"}},p={args:{scene:"panel",state:"streaming"}},m={args:{scene:"panel",state:"answered"}},l={args:{scene:"panel",state:"answered_from_screen"}},u={args:{scene:"panel",state:"not_on_screen"}},g={args:{scene:"panel",state:"unreadable"}},f={args:{scene:"panel",state:"action_proposed"}},S={args:{scene:"panel",state:"action_done"}},_={args:{scene:"panel",state:"error"}},h={args:{scene:"panel",state:"denied"}},k={args:{scene:"panel",state:"offline"}},y={args:{scene:"panel",state:"no_destination"}},x={args:{scene:"panel",state:"no_route"}},v={args:{scene:"first_minute",door:"proposed"},parameters:{ds:"DS-7011"}},D={args:{scene:"first_minute",door:"done"},parameters:{ds:"DS-7011"}},A={args:{scene:"first_minute",door:"blocked"},parameters:{ds:"DS-7011"}},w={args:{scene:"first_minute",door:"dismissed"},parameters:{ds:"DS-7011"}},b={args:{scene:"first_minute",door:"proposed",empty:!0},parameters:{ds:"DS-2008"}},we=["TheBarInEveryHost","Empty","Composing","Streaming","Answered","AnsweredFromScreen","NotOnScreen","Unreadable","ActionProposed","ActionDone","Error","Denied","Offline","NoDestination","NoRoute","FirstMinuteProposed","FirstMinuteDone","FirstMinuteBlocked","FirstMinuteDismissed","FirstMinuteEmpty"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "hosts"
  },
  parameters: {
    ds: "DS-4001"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "empty"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "composing"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "streaming"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "answered"
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "answered_from_screen"
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "not_on_screen"
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "unreadable"
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "action_proposed"
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "action_done"
  }
}`,...S.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "error"
  }
}`,..._.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "denied"
  }
}`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "offline"
  }
}`,...k.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "no_destination"
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "panel",
    state: "no_route"
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "first_minute",
    door: "proposed"
  },
  parameters: {
    ds: "DS-7011"
  }
}`,...v.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "first_minute",
    door: "done"
  },
  parameters: {
    ds: "DS-7011"
  }
}`,...D.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "first_minute",
    door: "blocked"
  },
  parameters: {
    ds: "DS-7011"
  }
}`,...A.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "first_minute",
    door: "dismissed"
  },
  parameters: {
    ds: "DS-7011"
  }
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "first_minute",
    door: "proposed",
    empty: true
  },
  parameters: {
    ds: "DS-2008"
  }
}`,...b.parameters?.docs?.source}}};export{S as ActionDone,f as ActionProposed,m as Answered,l as AnsweredFromScreen,d as Composing,h as Denied,c as Empty,_ as Error,A as FirstMinuteBlocked,w as FirstMinuteDismissed,D as FirstMinuteDone,b as FirstMinuteEmpty,v as FirstMinuteProposed,y as NoDestination,x as NoRoute,u as NotOnScreen,k as Offline,p as Streaming,i as TheBarInEveryHost,g as Unreadable,we as __namedExportsOrder,Ae as default};
