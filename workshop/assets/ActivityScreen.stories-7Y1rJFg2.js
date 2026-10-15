import{p as L,s as n,r as v,h,c as w}from"./scene-CW26D-iP.js";import{af as A,as as _,r as $,j as s,b as F,a0 as N,a8 as q,c as I,L as P}from"./iframe-WvhPuRF9.js";import{b as y,c as g,i as B}from"./format-Djfk7eK9.js";import{r as C}from"./routes-36j8zYvH.js";import{S as O}from"./SourceChip-BR7BmiTf.js";import"./customFields-BTLjwQTu.js";import"./fixtures-CBGdDB98.js";import"./personas-BIiIeh3_.js";import"./preload-helper-PPVm8Dsz.js";import"./flags--SfV1VDA.js";function f({view:r,personName:b,initialTab:x="planned"}){const{t:a,locale:o}=A(),{href:k,Link:S}=_(),[t,j]=$.useState(x),D=[{key:"planned",label:a("sales.status.planned"),count:r.state==="ready"?r.data.planned.length:void 0},{key:"done",label:a("sales.status.done"),count:r.state==="ready"?r.data.done.length:void 0}],T=[{key:"when",header:a("sales.field.when"),render:e=>t==="planned"?s.jsxs("span",{children:[y(e.at,o)," ",g(e.at,o)," ",s.jsxs("span",{className:"nexus-sales-muted",children:["· ",B(e.at,a)]})]}):s.jsxs("span",{children:[y(e.at,o)," ",g(e.at,o)]}),width:"220px"},{key:"account",header:a("sales.field.account"),render:e=>s.jsx(S,{href:k(`${C.account(e.account_id)}${t==="planned"?"?log=1":""}`),className:"nexus-link is-row",children:e.account_name}),width:"200px"},{key:"kind",header:a("sales.field.kind"),render:e=>a(`sales.kind.${e.kind}`),width:"110px"},{key:"summary",header:a("sales.field.summary"),render:e=>s.jsxs("span",{children:[e.summary,e.outcome?s.jsxs(s.Fragment,{children:[" ",s.jsx(F,{tone:"muted",children:a(`sales.outcome.${e.outcome}`)})]}):null]}),wrap:!0},{key:"by",header:a("sales.field.by"),render:e=>b(e.by_id),width:"160px"},{key:"source",header:a("sales.field.source"),render:e=>s.jsx(O,{source:e.source,testId:`source-${e.id}`}),width:"190px"}];return s.jsx(N,{layout:"dense",width:"wide",title:a("sales.nav.activity"),tabs:s.jsx(P,{tabs:D,current:t,onChange:j,label:a("sales.activity.views"),id:"activity",layout:"page"}),testId:"activity-page",children:s.jsx("div",{id:`activity-panel-${t}`,role:"tabpanel","aria-labelledby":`activity-tab-${t}`,children:s.jsx(q,{result:r,empty:{title:a("sales.activity.emptyTitle"),body:a("sales.activity.emptyBody")},deniedBody:a("sales.state.denied.body"),children:e=>s.jsx("div",{children:s.jsx(I,{rows:t==="planned"?e.planned:e.done,columns:T,rowKey:E=>E.id,caption:a("sales.nav.activity"),testId:"activity-table",empty:{title:a(t==="planned"?"sales.today.plannedEmpty":"sales.activity.doneEmpty")}})})})})})}f.__docgenInfo={description:"Activity — every interaction across accounts: *Planned* and *Done* as two views of one table (DS-3023 `LocalTabs`). Logging happens on the account ().",methods:[],displayName:"ActivityScreen",props:{view:{required:!0,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"ActivityView"}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:""},personName:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => string",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"string"}}},description:""},initialTab:{required:!1,tsType:{name:"union",raw:'"planned" | "done"',elements:[{name:"literal",value:'"planned"'},{name:"literal",value:'"done"'}]},description:"",defaultValue:{value:'"planned"',computed:!1}}}};const U={title:"Apps/NexSales/Activity",component:f,parameters:{ds:"DS-3035",layout:"fullscreen",workbench:{ns:"sales",path:"/sales/activity"},docs:{description:{component:"Activity (composes DS-3024 · DS-3035): planned and done interactions across accounts, each with its provenance chip."}}},args:{personName:L}},i={args:{view:v(h(w("oksana")))}},d={args:{view:v(h(w("oksana"))),initialTab:"done"}},c={args:{view:n("empty")}},l={args:{view:n("loading")}},p={args:{view:n("error")}},m={args:{view:n("denied")}},u={args:{view:n("offline")}},X=["Planned","Done","Empty","Loading","Error","Denied","Offline"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    view: ready(store.activity(as("oksana")))
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    view: ready(store.activity(as("oksana"))),
    initialTab: "done"
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("empty")
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("loading")
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("error")
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("denied")
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("offline")
  }
}`,...u.parameters?.docs?.source}}};export{m as Denied,d as Done,c as Empty,p as Error,l as Loading,u as Offline,i as Planned,X as __namedExportsOrder,U as default};
