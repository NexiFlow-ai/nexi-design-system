import{p as S,n as o,m as h,z as x,a as f}from"./scene-BIkkuSa8.js";import{ak as b,j as a,V as E,ac as j,X as _,q as B,ae as D,B as $,a as k}from"./iframe-C_4ax-Jm.js";import{a as N}from"./format-CwKZ7-7k.js";import{r as T,d as V}from"./routes-CtGbDcx2.js";import"./world-D7bs8um4.js";import"./types-CBmIxQfA.js";import"./preload-helper-PPVm8Dsz.js";const P=["open","investigating","waiting","resolved"],F={high:"danger",medium:"warn",low:"neutral"};function w({view:r,personName:v}){const{t}=b(),y=r.state==="ready"?r.data.rows.filter(l=>l.stage!=="resolved").length:0;return a.jsx(E,{layout:"dense",width:"wide",title:t("factory.nav.exceptions"),meta:y?a.jsx(k,{children:t("factory.count.open",{n:String(y)})}):void 0,actions:r.state==="ready"?a.jsxs($,{href:V.board(r.data.board.key),"data-testid":"exceptions-board",children:[t("factory.action.openBoard")," ↗"]}):void 0,testId:"exceptions-page",children:a.jsx(j,{result:r,empty:{title:t("factory.exceptions.emptyTitle"),body:t("factory.exceptions.emptyBody")},deniedBody:t("factory.state.denied.body"),children:l=>a.jsx("div",{className:"nexus-factory-stages","data-testid":"exceptions-stages",children:P.map(s=>{const g=l.rows.filter(e=>e.stage===s);return a.jsx(_,{title:t(`factory.exceptionStage.${s}`),aside:a.jsx("span",{className:"nexus-cc-section-aside",children:g.length}),testId:`stage-${s}`,children:g.length===0?a.jsx(B,{variant:"inline",title:t("factory.exceptions.stageEmpty")}):a.jsx(D,{rows:g.map(e=>({key:e.id,name:`${e.key} · ${e.title}`,meta:`${e.order_number} · ${e.product_code}${e.gate_id?` · ${t(`factory.gate.${e.gate_id}`)}`:""} · ${e.owner_id?v(e.owner_id):t("factory.exception.unowned")}`,tone:s==="resolved"?"muted":F[e.severity],status:t(`factory.severity.${e.severity}`),detail:N(e.opened_at,t),href:T.order(e.order_id)}))})},s)})})})})}w.__docgenInfo={description:`Exceptions ( · ): the production exceptions are VibeBan items of the pack's type on the *Production
exceptions* board — NexFactory shows them by stage, each row a door to the order and to the item; the board itself
opens in VibeBan (↗, the header's one action). Nothing is edited here; the kit's one-header-line ().`,methods:[],displayName:"ExceptionsScreen",props:{view:{required:!0,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"ExceptionsView"}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:""},personName:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => string",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"string"}}},description:""}}};const X={title:"Apps/NexFactory/Exceptions",component:w,parameters:{ds:"DS-7001",layout:"fullscreen",workbench:{ns:"factory",path:"/factory/exceptions"},docs:{description:{component:`Exceptions ( · ): the production exceptions are VibeBan items on the *Production exceptions* board —
shown here by stage, each row a door to the order; the board opens in VibeBan (↗). Nothing is edited here.`}}},args:{personName:S}},n={name:"Populated · by stage",args:{view:h(x(f("olena")))}},i={name:"Quality lead · one project",args:{view:h(x(f("kateryna")))}},c={args:{view:o("empty")}},d={args:{view:o("loading")}},p={args:{view:o("error")}},m={args:{view:o("denied")}},u={args:{view:o("offline")}},z=["Populated","QualityLead","Empty","Loading","Error","Denied","Offline"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Populated · by stage",
  args: {
    view: ready(store.exceptions(as("olena")))
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Quality lead · one project",
  args: {
    view: ready(store.exceptions(as("kateryna")))
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("empty")
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("loading")
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};export{m as Denied,c as Empty,p as Error,d as Loading,u as Offline,n as Populated,i as QualityLead,z as __namedExportsOrder,X as default};
