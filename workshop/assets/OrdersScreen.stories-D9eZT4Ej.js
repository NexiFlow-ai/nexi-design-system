import{m as k,B as S,a as j,n as p}from"./scene-BIkkuSa8.js";import{ak as H,ao as K,r as m,j as t,a as O,V as Q,T as G,c as J,d as X,B as I,ac as Y,D as Z,I as ee,m as q,n,s as re}from"./iframe-C_4ax-Jm.js";import{b as L,e as te}from"./format-CwKZ7-7k.js";import{r as _}from"./routes-CtGbDcx2.js";import{O as R,V as N}from"./OrderStateChip-D77petS4.js";import{S as V}from"./SourceChip-ME9pM3wu.js";import"./world-D7bs8um4.js";import"./types-CBmIxQfA.js";import"./preload-helper-PPVm8Dsz.js";const U=["ready","ready_with_risk","blocked","unknown"];function z({view:o,initialState:d="",initialSelected:B=null}){const{t:r}=H(),{href:A,go:C,Link:W}=K(),[c,T]=m.useState(""),[s,u]=m.useState(U.includes(d)?d:""),[D,P]=m.useState(B),$=m.useMemo(()=>{if(o.state!=="ready")return[];const e=c.trim().toLowerCase();return o.data.filter(i=>(!e||i.number.toLowerCase().includes(e)||i.product_code.toLowerCase().includes(e)||i.product_name.toLowerCase().includes(e))&&(!s||i.verdict===s))},[o,c,s]),E=o.state==="ready"?o.data.length:0,F=re(E,c!==""||s!==""),a=$.find(e=>e.id===D)??(o.state==="ready"?o.data.find(e=>e.id===D):void 0),M=[{key:"number",header:r("factory.field.order"),width:"110px",render:e=>t.jsx(W,{href:A(_.order(e.id)),className:"nexus-link is-row",onClick:i=>i.stopPropagation(),children:e.number})},{key:"product",header:r("factory.field.product"),render:e=>t.jsxs("span",{className:"nexus-factory-material",children:[t.jsx("span",{className:"nexus-factory-code",children:e.product_code})," ",e.product_name," ",t.jsxs("span",{className:"nexus-factory-muted",children:["· rev ",e.revision]})]})},{key:"qty",header:r("factory.field.qty"),align:"right",width:"90px",render:e=>`${e.qty} ${e.uom}`},{key:"due",header:r("factory.field.due"),width:"130px",render:e=>t.jsx("span",{title:te(e.due,"en"),children:L(e.due,r)})},{key:"state",header:r("factory.field.state"),width:"150px",render:e=>t.jsx(R,{state:e.state,testId:`state-${e.id}`})},{key:"verdict",header:r("factory.field.readiness"),width:"170px",render:e=>t.jsx(N,{verdict:e.verdict,testId:`verdict-${e.id}`})},{key:"exceptions",header:r("factory.nav.exceptions"),align:"right",width:"100px",render:e=>e.exceptions_open?t.jsx(O,{tone:"warn",size:"xs",children:String(e.exceptions_open)}):t.jsx("span",{className:"nexus-factory-muted",children:"—"})},{key:"source",header:r("factory.field.source"),width:"190px",render:e=>t.jsx(V,{source:e.source,testId:`source-${e.id}`})}];return t.jsxs("div",{className:"nexus-cc-split","data-inspector":a?"open":"closed",children:[t.jsx(Q,{layout:"dense",width:"wide",title:r("factory.nav.orders"),meta:E?t.jsx(O,{children:r("factory.count.n",{n:String(E)})}):void 0,testId:"orders-page",children:t.jsxs("div",{className:"nexus-factory-split-main",children:[F?t.jsx(G,{children:t.jsx(J,{value:c,onChange:T,placeholder:r("factory.orders.searchPlaceholder"),label:r("factory.orders.search")})}):null,F?t.jsx(X,{label:r("factory.filter.label"),clearLabel:r("factory.action.clearFilter"),onClear:s?()=>u(""):void 0,active:s?[{key:"verdict",label:r(`factory.verdict.${s}`),onRemove:()=>u("")}]:[],testId:"orders-filters",children:t.jsx("div",{className:"nexus-factory-filter-row",role:"group","aria-label":r("factory.field.readiness"),children:U.map(e=>t.jsx(I,{size:"sm",variant:s===e?"primary":"default","aria-pressed":s===e,onClick:()=>u(s===e?"":e),"data-testid":`filter-${e}`,children:r(`factory.verdict.${e}`)},e))})}):null,t.jsx(Y,{result:o,empty:{title:r("factory.orders.emptyTitle"),body:r("factory.orders.emptyBody")},deniedBody:r("factory.state.denied.body"),children:()=>t.jsx(Z,{rows:$,columns:M,rowKey:e=>e.id,caption:r("factory.nav.orders"),selected:D,onOpen:e=>P(e.id),onActivate:e=>C(_.order(e.id)),testId:"orders-table",empty:c||s?{title:r("factory.orders.filteredEmpty"),action:t.jsx(I,{size:"sm",onClick:()=>{T(""),u("")},children:r("factory.action.clearFilter")})}:{title:r("factory.orders.emptyTitle")}})})]})}),a?t.jsxs(ee,{kind:r("factory.kind.order"),title:a.number,subtitle:t.jsx(V,{source:a.source}),primary:t.jsx(I,{variant:"primary",onClick:()=>C(_.order(a.id)),"data-testid":"inspector-open",children:r("factory.action.open")}),onClose:()=>P(null),testId:"order-inspector",children:[t.jsxs(q,{title:r("factory.order.identity"),idiom:"rule",children:[t.jsx(n,{label:r("factory.field.product"),children:`${a.product_code} ${a.product_name}`}),t.jsx(n,{label:r("factory.field.revision"),children:a.revision}),t.jsx(n,{label:r("factory.field.qty"),children:`${a.qty} ${a.uom}`}),t.jsx(n,{label:r("factory.field.due"),children:L(a.due,r)})]}),t.jsxs(q,{title:r("factory.field.state"),idiom:"rule",children:[t.jsx(n,{label:r("factory.field.state"),children:t.jsx(R,{state:a.state})}),t.jsx(n,{label:r("factory.field.readiness"),children:t.jsx(N,{verdict:a.verdict})}),t.jsx(n,{label:r("factory.nav.exceptions"),children:a.exceptions_open?r("factory.count.open",{n:String(a.exceptions_open)}):r("factory.exception.none")})]})]}):null]})}z.__docgenInfo={description:`Orders — DS-7001 *Discovery list → Inspector* · DS-7010 *List with controls* (the toolbar appears above 12 rows,
, or while a filter is in use — the pulse's *Blocked* lands here with \`?state=blocked\` and the chip that
produced the count stays). Every row carries the state (DS-6703), the verdict and the source chip (DS-6101). In the
connected world orders are the source's: there is no *New order* door in this epic ( — no door transitions
the state; the Build world's create arrives with ). The Inspector is the suite's right column (DS-2007).`,methods:[],displayName:"OrdersScreen",props:{view:{required:!0,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"Array",elements:[{name:"OrderRow"}],raw:"OrderRow[]"}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:""},initialState:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},initialSelected:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}}}};const ue={title:"Apps/NexFactory/Orders",component:z,parameters:{ds:"DS-7001",layout:"fullscreen",workbench:{ns:"factory",path:"/factory/orders"},docs:{description:{component:`Orders (DS-7001 *Discovery list → Inspector* · DS-7010 the controls above 12 rows or while a filter is in use): the
state chip (DS-6703), the verdict and the source chip (DS-6101) on every row; the pulse's *Blocked* lands here with
the filter chip that produced the count ().`}}},args:{}},h={name:"Populated · connected (Plant ERP)",args:{view:k(S(j("olena")))}},y={name:"Populated · Build mode (native)",args:{view:k(S(j("olena","native")))}},l={name:"Filtered · blocked (from the pulse)",args:{view:k(S(j("olena"))),initialState:"blocked"}},f={name:"Row selected · the Inspector",args:{view:k(S(j("olena"))),initialSelected:"wo_1042"},play:async({canvasElement:o})=>{const d=B=>o.querySelector(`[data-testid="${B}"]`);if(!d("order-inspector"))throw new globalThis.Error("the Inspector did not open on the selected row");if(!d("verdict-wo_1042")?.textContent?.includes("Blocked"))throw new globalThis.Error("the blocked order does not read Blocked");if(!d("verdict-wo_1043")?.textContent?.includes("Unknown"))throw new globalThis.Error("the unknown order does not read Unknown — never Ready")}},w={args:{view:p("empty")}},x={args:{view:p("loading")}},v={args:{view:p("error")}},g={args:{view:p("denied")}},b={args:{view:p("offline")}},me=["Populated","Build","Blocked","WithInspector","Empty","Loading","Error","Denied","Offline"];h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Populated · connected (Plant ERP)",
  args: {
    view: ready(store.orders(as("olena")))
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Populated · Build mode (native)",
  args: {
    view: ready(store.orders(as("olena", "native")))
  }
}`,...y.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Filtered · blocked (from the pulse)",
  args: {
    view: ready(store.orders(as("olena"))),
    initialState: "blocked"
  }
}`,...l.parameters?.docs?.source},description:{story:"The pulse's *Blocked* door: the list filtered by the verdict, the chip that produced the count stays.",...l.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Row selected · the Inspector",
  args: {
    view: ready(store.orders(as("olena"))),
    initialSelected: "wo_1042"
  },
  play: async ({
    canvasElement
  }) => {
    const by = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    if (!by("order-inspector")) throw new globalThis.Error("the Inspector did not open on the selected row");
    if (!by("verdict-wo_1042")?.textContent?.includes("Blocked")) throw new globalThis.Error("the blocked order does not read Blocked");
    if (!by("verdict-wo_1043")?.textContent?.includes("Unknown")) throw new globalThis.Error("the unknown order does not read Unknown — never Ready");
  }
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("empty")
  }
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("loading")
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("error")
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("denied")
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("offline")
  }
}`,...b.parameters?.docs?.source}}};export{l as Blocked,y as Build,g as Denied,w as Empty,v as Error,x as Loading,b as Offline,h as Populated,f as WithInspector,me as __namedExportsOrder,ue as default};
