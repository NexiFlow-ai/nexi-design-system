import{n as d,m as g,C as b,a as x}from"./scene-BIkkuSa8.js";import{ak as L,ao as $,r as V,j as t,V as T,ac as z,a as A,S as w,Z as M,L as U,D as N,B as G,M as K}from"./iframe-C_4ax-Jm.js";import{e as D,b as X}from"./format-CwKZ7-7k.js";import{r as i,d as F}from"./routes-CtGbDcx2.js";import{O as W,V as Z}from"./OrderStateChip-D77petS4.js";import{S as H}from"./SourceChip-ME9pM3wu.js";import{R as I}from"./ProductsScreen-r0rfkUZB.js";import"./world-D7bs8um4.js";import"./types-CBmIxQfA.js";import"./preload-helper-PPVm8Dsz.js";const J={approved:"ok",draft:"warn",unknown:"neutral"};function R({view:a,initialTab:k="revisions"}){const{t:r,locale:S}=L(),{href:C,go:_,Link:O}=$(),[n,E]=V.useState(k);if(a.state!=="ready")return t.jsx(T,{layout:"dense",width:"wide",back:{href:i.products(),label:r("factory.action.backToProducts")},title:r("factory.kind.product"),testId:"product-page",children:t.jsx(z,{result:a,empty:{title:r("factory.state.notFound.title")},deniedBody:r("factory.state.denied.body"),children:()=>null})});const{product:s,orders:v}=a.data,o=s.revisions.find(e=>e.rev===s.current_rev),B=[{key:"revisions",label:r("factory.field.revisions"),count:s.revisions.length},{key:"orders",label:r("factory.nav.orders"),count:v.length}],P=[{key:"rev",header:r("factory.field.revision"),width:"90px",render:e=>t.jsxs("span",{className:"nexus-factory-code",children:[e.rev,e.rev===s.current_rev?t.jsx(A,{size:"xs",tone:"neutral",children:r("factory.product.current")}):null]})},{key:"status",header:r("factory.field.state"),width:"140px",render:e=>t.jsx(w,{tone:I[e.status],size:"sm",children:r(`factory.revisionStatus.${e.status}`)})},{key:"effective",header:r("factory.field.effectiveFrom"),width:"140px",render:e=>D(e.effective_from,S)},{key:"instruction",header:r("factory.order.instruction"),render:e=>e.instruction_ref?t.jsxs("span",{children:[t.jsxs("a",{href:F.source(e.instruction_ref.ref),className:"nexus-link","data-testid":`instruction-${e.rev}`,children:[r("factory.order.instructionRef",{rev:e.rev})," ↗"]}),e.instruction_ref.hash?t.jsxs("span",{className:"nexus-factory-muted",children:[" · ",e.instruction_ref.hash.slice(0,8)]}):null," ",t.jsx(w,{tone:J[e.instruction_ref.status],size:"sm",children:r(`factory.instructionStatus.${e.instruction_ref.status}`)})]}):t.jsx("span",{className:"nexus-factory-muted",children:r("factory.product.noInstruction")})}],q=[{key:"number",header:r("factory.field.order"),width:"110px",render:e=>t.jsx(O,{href:C(i.order(e.id)),className:"nexus-link is-row",children:e.number})},{key:"rev",header:r("factory.field.revision"),width:"90px",render:e=>e.revision},{key:"qty",header:r("factory.field.qty"),align:"right",width:"90px",render:e=>`${e.qty} ${e.uom}`},{key:"due",header:r("factory.field.due"),width:"130px",render:e=>t.jsx("span",{title:D(e.due,S),children:X(e.due,r)})},{key:"state",header:r("factory.field.state"),width:"150px",render:e=>t.jsx(W,{state:e.state})},{key:"verdict",header:r("factory.field.readiness"),width:"170px",render:e=>t.jsx(Z,{verdict:e.verdict})}],j=o?.instruction_ref?[{key:"instruction",label:r("factory.action.openInstruction"),onSelect:()=>window.location.assign(F.source(o.instruction_ref.ref)),testId:"product-menu-instruction"}]:[];return t.jsx(T,{layout:"dense",width:"wide",back:{href:i.products(),label:r("factory.action.backToProducts")},title:s.code,meta:t.jsxs(t.Fragment,{children:[o?t.jsx(w,{tone:I[o.status],size:"sm",testId:"product-rev-status",children:r("factory.product.revStatus",{rev:o.rev,status:r(`factory.revisionStatus.${o.status}`)})}):null,t.jsx(H,{source:s.source,testId:"product-source"})]}),actions:j.length?t.jsx(K,{label:r("factory.action.more"),items:j,testId:"product-menu"}):void 0,testId:"product-page",children:t.jsxs("div",{className:"nexus-factory-order",children:[t.jsx("aside",{className:"nexus-factory-rail","aria-label":r("factory.product.identity"),children:t.jsx(M,{testId:"product-facts",items:[{label:r("factory.field.product"),value:s.name},{label:r("factory.field.family"),value:s.family||"—"},{label:r("factory.field.currentRevision"),value:s.current_rev||r("factory.product.noRevision")},{label:r("factory.nav.orders"),value:String(v.length)}]})}),t.jsxs("div",{className:"nexus-factory-stream",children:[t.jsx(U,{tabs:B,current:n,onChange:e=>E(e),label:r("factory.product.views"),id:"product",layout:"page"}),t.jsxs("div",{id:`product-panel-${n}`,role:"tabpanel","aria-labelledby":`product-tab-${n}`,className:"nexus-factory-stream-body",children:[n==="revisions"?t.jsx(N,{rows:s.revisions,columns:P,rowKey:e=>e.rev,caption:r("factory.field.revisions"),testId:"product-revisions",empty:{title:r("factory.product.noRevision")}}):null,n==="orders"?t.jsx(N,{rows:v,columns:q,rowKey:e=>e.id,caption:r("factory.nav.orders"),onActivate:e=>_(i.order(e.id)),testId:"product-orders",empty:{title:r("factory.product.noOrders"),action:t.jsx(G,{size:"sm",onClick:()=>_(i.orders()),children:r("factory.nav.orders")})}}):null]})]})]})})}R.__docgenInfo={description:`The **Product page** ( one header line · /): back · the code · the current revision's status chip ·
the source chip · \`⋯\` (*Open the work instruction* of the current revision). One rail (name · family · current
revision · how many orders) and one stream: **Revisions** (every revision with its status, its effective date and
the work instruction **by reference** — a door to NexGraph with the hash, ; an instruction whose source
does not answer reads *not reachable*, never a guess) · **Orders** (the orders drawn against this product, each a
door to the order page). Nothing here edits the product: the owner does, or the Import door in the Build world.`,methods:[],displayName:"ProductScreen",props:{view:{required:!0,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"ProductView"}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:""},initialTab:{required:!1,tsType:{name:"union",raw:'"revisions" | "orders"',elements:[{name:"literal",value:'"revisions"'},{name:"literal",value:'"orders"'}]},description:"",defaultValue:{value:'"revisions"',computed:!1}}}};const ce={title:"Apps/NexFactory/Product",component:R,parameters:{ds:"DS-7002",layout:"fullscreen",workbench:{ns:"factory",path:"/factory/products/prd_bd7_air"},docs:{description:{component:`The Product page ( one header line): the revisions with their status and the work instruction by reference
( — a door to NexGraph, the hash, *not reachable* when the PLM does not answer) · the orders drawn against it.`}}},args:{}},u={name:"Revisions · B obsolete · C current · D in change",args:{view:g(b(x("olena"),"prd_bd7_air"))},play:async({canvasElement:a})=>{if(a.querySelectorAll('[data-testid="product-revisions"] tbody tr').length!==3)throw new globalThis.Error("three revisions");if(!a.querySelector('[data-testid="instruction-C"]'))throw new globalThis.Error("the instruction of rev C is a door, by reference")}},c={name:"Instruction not reachable (BD-9)",args:{view:g(b(x("olena"),"prd_bd9_air"))}},l={name:"Orders drawn against the product",args:{view:g(b(x("olena"),"prd_bd7_air")),initialTab:"orders"}},p={args:{view:d("notFound")}},h={args:{view:d("loading")}},f={args:{view:d("error")}},m={args:{view:d("denied")}},y={args:{view:d("offline")}},de=["Revisions","Unreachable","Orders","NotFound","Loading","Error","Denied","Offline"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Revisions · B obsolete · C current · D in change",
  args: {
    view: ready(records.product(as("olena"), "prd_bd7_air"))
  },
  play: async ({
    canvasElement
  }) => {
    const rows = canvasElement.querySelectorAll('[data-testid="product-revisions"] tbody tr');
    if (rows.length !== 3) throw new globalThis.Error("three revisions");
    if (!canvasElement.querySelector('[data-testid="instruction-C"]')) throw new globalThis.Error("the instruction of rev C is a door, by reference");
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Instruction not reachable (BD-9)",
  args: {
    view: ready(records.product(as("olena"), "prd_bd9_air"))
  }
}`,...c.parameters?.docs?.source},description:{story:": the PLM does not answer this morning — the instruction's status reads *not reachable*, never a guess",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Orders drawn against the product",
  args: {
    view: ready(records.product(as("olena"), "prd_bd7_air")),
    initialTab: "orders"
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("notFound")
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("loading")
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("error")
  }
}`,...f.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("denied")
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("offline")
  }
}`,...y.parameters?.docs?.source}}};export{m as Denied,f as Error,h as Loading,p as NotFound,y as Offline,l as Orders,u as Revisions,c as Unreachable,de as __namedExportsOrder,ce as default};
