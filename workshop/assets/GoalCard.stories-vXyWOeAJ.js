import{j as s,ak as k}from"./iframe-C_4ax-Jm.js";import{G as y,C as N,p as f}from"./harness-p7-wY8XY.js";import{g as O,a as t,G as W,n as A,N as E}from"./goalView-h1_iRd1X.js";import{T as b}from"./TurnCard-DAtPNCeb.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */import"./minus-8B1Z9tTG.js";import"./ChatApiProvider-Dp0rzuLn.js";import"./square-CY8wW9K4.js";function C(){const{t:e}=k(),r=O(e).find(a=>a.id==="started"),_=[{id:"asked",label:"asked",view:t("asked",e)},{id:"started",label:"working · goal started",view:r.view},{id:"plan",label:"waiting on you · the plan",view:t("waiting_on_you",e)},{id:"working",label:"working · a first result",view:t("working",e)},{id:"done",label:"done · coverage",view:t("done",e)}];return s.jsx(y,{children:_.map(({id:a,label:v,view:T})=>s.jsx(N,{label:v,testId:`goal-journey-cell-${a}`,children:s.jsx(W,{view:T,testId:`goal-journey-${a}`,defaultOpen:a==="working"})},a))})}function I({state:e}){const{t:r}=k();return s.jsx(y,{children:s.jsx(N,{label:e.replace(/_/g," "),testId:`goal-state-cell-${e}`,children:s.jsx(W,{view:t(e,r),testId:`goal-${e}`,defaultOpen:e==="working"||e==="done"})})})}const $={edges:e=>!e.startsWith("reach-")&&!e.startsWith("situation-")&&!e.startsWith("harness-"),reach:e=>e.startsWith("reach-"),credits:e=>e==="limit-credits",situation:e=>e.startsWith("situation-"),harness:e=>e.startsWith("harness-")};function G({prefix:e}){const{t:r}=k(),_=O(r).filter(a=>$[e](a.id));return s.jsx(y,{children:_.map(a=>s.jsxs(N,{label:a.title,testId:`goal-scene-cell-${a.id}`,children:[s.jsx(W,{view:a.view,testId:`goal-scene-${a.id}`,defaultOpen:a.open}),f(a.note)?s.jsx("p",{className:"nexus-goal-scene-note",children:f(a.note)}):null]},a.id))})}function F(){const{t:e}=k();return s.jsx(y,{children:A(e).map(r=>s.jsxs(N,{label:r.title,testId:`next-line-cell-${r.id}`,children:[s.jsxs("div",{className:"nexus-message-assistant","data-testid":`next-line-${r.id}`,children:[s.jsx("p",{className:"nexus-turn-line",children:"FOB Dalian → Gdańsk, 20GP: the ocean leg is quoted in ; the local charges and the re-loading into our truck come on top."}),s.jsx("div",{className:"nexus-turn-next-line",children:s.jsx(E,{next:r.next,person:r.person,done:r.done,testId:`next-line-${r.id}`})})]}),f(r.note)?s.jsx("p",{className:"nexus-goal-scene-note",children:f(r.note)}):null]},r.id))})}function D({scene:e,state:r}){return e==="journey"?s.jsx(C,{}):e==="state"?s.jsx(I,{state:r??"working"}):e==="next-line"?s.jsx(F,{}):s.jsx(G,{prefix:e})}const Q={title:"Conversation/Goal card",component:D,parameters:{ds:"DS-5002",layout:"padded"},argTypes:{state:{control:"select",options:b}}},n={args:{scene:"journey"}},o={args:{scene:"state",state:"asked"}},c={args:{scene:"state",state:"working"}},i={args:{scene:"state",state:"waiting_on_you"}},d={args:{scene:"state",state:"waiting_on_other"}},l={args:{scene:"state",state:"done"}},u={args:{scene:"state",state:"stopped"}},p={args:{scene:"state",state:"failed"}},g={args:{scene:"state",state:"nothing_found"}},m={args:{scene:"edges"}},h={args:{scene:"reach"}},x={args:{scene:"situation"}},w={args:{scene:"next-line"}},j={args:{scene:"harness"}},S={args:{scene:"credits"}},X=["TheJourney","Asked","Working","WaitingOnYou","WaitingOnOther","Done","Stopped","Failed","NothingFound","TheEdges","ReachBeyondWhatExists","DidWeCheckOurOwnSystem","TheNextLineUnderAnAnswer","TheAuthoringHarness","NoCredits"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "journey"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "state",
    state: "asked"
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "state",
    state: "working"
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "state",
    state: "waiting_on_you"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "state",
    state: "waiting_on_other"
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "state",
    state: "done"
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "state",
    state: "stopped"
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "state",
    state: "failed"
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "state",
    state: "nothing_found"
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "edges"
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "reach"
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "situation"
  }
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "next-line"
  }
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "harness"
  }
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "credits"
  }
}`,...S.parameters?.docs?.source}}};export{o as Asked,x as DidWeCheckOurOwnSystem,l as Done,p as Failed,S as NoCredits,g as NothingFound,h as ReachBeyondWhatExists,u as Stopped,j as TheAuthoringHarness,m as TheEdges,n as TheJourney,w as TheNextLineUnderAnAnswer,d as WaitingOnOther,i as WaitingOnYou,c as Working,X as __namedExportsOrder,Q as default};
