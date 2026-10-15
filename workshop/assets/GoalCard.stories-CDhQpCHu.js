import{j as a,af as w}from"./iframe-WvhPuRF9.js";import{P as n,G as f,C as x,p as j}from"./ChatApiProvider-FPF4EJK3.js";import{g as k,a as t,G as E}from"./goalView-D3krwCdg.js";import{T as W}from"./TurnCard-_eDJGWkj.js";import"./preload-helper-PPVm8Dsz.js";import"./minus-n1yuWPpd.js";function I(){const{t:e}=w(),r=k(e).find(s=>s.id==="started"),y=[{id:"asked",label:"asked",view:t("asked",e)},{id:"started",label:"working · goal started",view:r.view},{id:"plan",label:"waiting on you · the plan",view:t("waiting_on_you",e)},{id:"working",label:"working · a first result",view:t("working",e)},{id:"done",label:"done · coverage",view:t("done",e)}];return a.jsx(f,{children:y.map(({id:s,label:R,view:T})=>a.jsx(x,{label:R,testId:`goal-journey-cell-${s}`,children:a.jsx(E,{view:T,testId:`goal-journey-${s}`,defaultOpen:s==="working"})},s))})}function G({state:e}){const{t:r}=w();return a.jsx(f,{children:a.jsx(x,{label:e.replace(/_/g," "),testId:`goal-state-cell-${e}`,children:a.jsx(E,{view:t(e,r),testId:`goal-${e}`,defaultOpen:e==="working"||e==="done"})})})}const N={edges:e=>!e.startsWith("reach-")&&!e.startsWith("situation-")&&!e.startsWith("harness-"),reach:e=>e.startsWith("reach-"),situation:e=>e.startsWith("situation-"),harness:e=>e.startsWith("harness-")};function v({prefix:e}){const{t:r}=w(),y=k(r).filter(s=>N[e](s.id));return a.jsx(f,{children:y.map(s=>a.jsxs(x,{label:s.title,testId:`goal-scene-cell-${s.id}`,children:[a.jsx(E,{view:s.view,testId:`goal-scene-${s.id}`,defaultOpen:s.open}),j(s.note)?a.jsx("p",{className:"nexus-goal-scene-note",children:j(s.note)}):null]},s.id))})}function D({scene:e,state:r}){return e==="journey"?a.jsx(I,{}):e==="state"?a.jsx(G,{state:r??"working"}):a.jsx(v,{prefix:e})}const A={title:"Conversation/Goal card",component:D,parameters:{ds:"DS-5002",layout:"padded"},argTypes:{state:{control:"select",options:W}}},o={args:{scene:"journey"},parameters:n,tags:["a11y-todo"]},c={args:{scene:"state",state:"asked"}},i={args:{scene:"state",state:"working"},parameters:n,tags:["a11y-todo"]},d={args:{scene:"state",state:"waiting_on_you"}},p={args:{scene:"state",state:"waiting_on_other"}},g={args:{scene:"state",state:"done"}},u={args:{scene:"state",state:"stopped"}},m={args:{scene:"state",state:"failed"}},l={args:{scene:"state",state:"nothing_found"}},h={args:{scene:"edges"},parameters:n,tags:["a11y-todo"]},S={args:{scene:"reach"},parameters:n,tags:["a11y-todo"]},O={args:{scene:"situation"}},_={args:{scene:"harness"},parameters:n,tags:["a11y-todo"]},J=["TheJourney","Asked","Working","WaitingOnYou","WaitingOnOther","Done","Stopped","Failed","NothingFound","TheEdges","ReachBeyondWhatExists","DidWeCheckOurOwnSystem","TheAuthoringHarness"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "journey"
  },
  parameters: PROGRESS_LINE_TODO,
  tags: ["a11y-todo"]
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "state",
    state: "asked"
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "state",
    state: "working"
  },
  parameters: PROGRESS_LINE_TODO,
  tags: ["a11y-todo"]
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "state",
    state: "waiting_on_you"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "state",
    state: "waiting_on_other"
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "state",
    state: "done"
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "state",
    state: "stopped"
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "state",
    state: "failed"
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "state",
    state: "nothing_found"
  }
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "edges"
  },
  parameters: PROGRESS_LINE_TODO,
  tags: ["a11y-todo"]
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "reach"
  },
  parameters: PROGRESS_LINE_TODO,
  tags: ["a11y-todo"]
}`,...S.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "situation"
  }
}`,...O.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    scene: "harness"
  },
  parameters: PROGRESS_LINE_TODO,
  tags: ["a11y-todo"]
}`,..._.parameters?.docs?.source}}};export{c as Asked,O as DidWeCheckOurOwnSystem,g as Done,m as Failed,l as NothingFound,S as ReachBeyondWhatExists,u as Stopped,_ as TheAuthoringHarness,h as TheEdges,o as TheJourney,p as WaitingOnOther,d as WaitingOnYou,i as Working,J as __namedExportsOrder,A as default};
