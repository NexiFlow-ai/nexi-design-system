import{r as i,i as t,c as o,s as l}from"./scene-CW26D-iP.js";import{af as F,as as K,r as D,j as s,S as T,B as O,a0 as H,a8 as U,c as N,z as A,L as G}from"./iframe-WvhPuRF9.js";import{m as M,b as W}from"./format-Djfk7eK9.js";import{d as B,r as J}from"./routes-36j8zYvH.js";import{S as Q}from"./SourceChip-BR7BmiTf.js";import{E as X}from"./external-link-CZ8t1cnO.js";import"./customFields-BTLjwQTu.js";import"./fixtures-CBGdDB98.js";import"./personas-BIiIeh3_.js";import"./preload-helper-PPVm8Dsz.js";import"./flags--SfV1VDA.js";function E({view:r,canAct:P,initialTab:L="board"}){const{t:a,locale:j}=F(),{href:_,Link:I}=K(),[d,$]=D.useState(L),C=D.useMemo(()=>[{key:"board",label:a("sales.pipeline.board"),count:r.state==="ready"&&r.data.available?r.data.boards.reduce((e,n)=>e+n.open,0):void 0},{key:"leads",label:a("sales.pipeline.leads"),count:r.state==="ready"?r.data.leads.filter(e=>e.status==="new").length:void 0},{key:"requests",label:a("sales.pipeline.requests"),count:r.state==="ready"?r.data.requests.length:void 0}],[r,a]),R=[{key:"name",header:a("sales.pipeline.boardName"),render:e=>s.jsxs("a",{href:B.board(e.key),className:"nexus-link is-row",onClick:n=>n.stopPropagation(),"data-testid":`board-open-${e.key}`,children:[e.name," ",s.jsx(X,{size:12,"aria-hidden":!0}),s.jsxs("span",{className:"nexus-visually-hidden",children:[" ",a("sales.pipeline.opensInTasks")]})]})},{key:"key",header:a("sales.pipeline.boardKey"),render:e=>s.jsx("span",{className:"nexus-sales-muted",children:e.key}),width:"100px"},{key:"open",header:a("sales.pipeline.openDeals"),render:e=>e.available?s.jsx("span",{"data-testid":`board-open-count-${e.key}`,children:e.open}):s.jsx(T,{tone:"muted",children:a("sales.pipeline.boardHidden")}),width:"140px"},{key:"amount",header:a("sales.pipeline.sum"),render:e=>e.available?s.jsx("span",{className:"nexus-sales-amount","data-testid":`board-sum-${e.key}`,children:e.amount.currency?M(e.amount.amount,e.amount.currency,j):e.open?a("sales.pipeline.mixed"):"—"}):null,width:"160px"}],V=[{key:"name",header:a("sales.field.name"),render:e=>s.jsx("span",{className:"nexus-sales-row-title",children:e.name})},{key:"company",header:a("sales.field.company"),render:e=>e.company},{key:"channel",header:a("sales.field.channel"),render:e=>a(`sales.channel.${e.channel}`),width:"120px"},{key:"status",header:a("sales.field.status"),render:e=>s.jsx(T,{tone:e.status==="qualified"?"ok":e.status==="disqualified"?"muted":"neutral",children:a(`sales.leadStatus.${e.status}`)}),width:"140px"},{key:"note",header:a("sales.field.note"),render:e=>s.jsx("span",{className:"nexus-sales-muted",children:e.note??"—"}),wrap:!0},{key:"created",header:a("sales.field.created"),render:e=>W(e.created_at,j),width:"100px"}],z=[{key:"title",header:a("sales.field.request"),render:e=>s.jsx("span",{className:"nexus-sales-row-title",children:e.title})},{key:"account",header:a("sales.field.account"),render:e=>s.jsx(I,{href:_(J.account(e.account_id)),className:"nexus-link is-row",children:e.account_name})},{key:"lane",header:a("sales.field.lane"),render:e=>e.lane,width:"200px"},{key:"status",header:a("sales.field.status"),render:e=>s.jsx(T,{tone:e.status==="quoted"?"ok":e.status==="closed"?"muted":"neutral",children:a(`sales.requestStatus.${e.status}`)}),width:"130px"},{key:"source",header:a("sales.field.source"),render:e=>s.jsx(Q,{source:e.source,testId:`source-${e.id}`}),width:"190px"}],q=P?s.jsx(O,{variant:"primary",href:B.newPipeline,"data-testid":"pipeline-new-board",children:a("sales.pipeline.newBoard")}):void 0;return s.jsx(H,{layout:"dense",width:"wide",title:a("sales.nav.pipeline"),tabs:s.jsx(G,{tabs:C,current:d,onChange:$,label:a("sales.pipeline.views"),id:"pipeline",layout:"page"}),testId:"pipeline-page",children:s.jsx("div",{id:`pipeline-panel-${d}`,role:"tabpanel","aria-labelledby":`pipeline-tab-${d}`,className:"nexus-sales-pipeline-panel",children:s.jsx(U,{result:r,empty:{title:a("sales.pipeline.emptyTitle"),body:a("sales.pipeline.emptyBody"),action:q},deniedBody:a("sales.state.denied.body"),children:e=>d==="leads"?s.jsx(N,{rows:e.leads,columns:V,rowKey:n=>n.id,caption:a("sales.pipeline.leads"),testId:"leads-table",empty:{title:a("sales.leads.emptyTitle")}}):d==="requests"?s.jsx(N,{rows:e.requests,columns:z,rowKey:n=>n.id,caption:a("sales.pipeline.requests"),testId:"requests-table",empty:{title:a("sales.requests.emptyTitle")}}):e.available?e.boards.length===0?s.jsx(A,{variant:"quiet",title:a("sales.pipeline.emptyTitle"),body:a("sales.pipeline.emptyBody"),action:q,testId:"pipeline-empty"}):s.jsx(N,{rows:e.boards,columns:R,rowKey:n=>n.key,caption:a("sales.pipeline.boards"),onOpen:n=>{window.location.assign(B.board(n.key))},testId:"boards-table",empty:{title:a("sales.pipeline.emptyTitle")}}):s.jsx(A,{variant:"quiet",title:a("sales.pipeline.unavailableTitle"),body:a("sales.pipeline.unavailableBody"),testId:"pipeline-unavailable"})})})})}E.__docgenInfo={description:"Pipeline — **VibeBan's** (ADR-0066 A1 ·  (3)): an opportunity is a VibeBan item of the pack's type on a\n*Pipeline* board, and the board — stages, cards, drag, limits, the sum — is NexTasks' own screen. NexSales keeps\nno pipeline and draws no board: this screen is the projection sales-api composes as the person (`GET\n/sales/pipeline`) — every board of the pack's template as one row (*name · open deals · pipeline*), a door into\nNexTasks (DS-7001 the row opens; `↗` the owning app, ). No board yet → one door, *New board in NexTasks*\n( · the Skills / Agents rule); NexTasks away → said as such. *Leads* and *Requests* stay two more views of the\nsame screen (`LocalTabs`, DS-2006) until their slice (S2).",methods:[],displayName:"PipelineScreen",props:{view:{required:!0,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"PipelineView"}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:""},canAct:{required:!0,tsType:{name:"boolean"},description:"the person may create a board (a Project in NexTasks) — the empty state's one door"},initialTab:{required:!1,tsType:{name:"union",raw:'"board" | "leads" | "requests"',elements:[{name:"literal",value:'"board"'},{name:"literal",value:'"leads"'},{name:"literal",value:'"requests"'}]},description:"",defaultValue:{value:'"board"',computed:!1}}}};const pe={title:"Apps/NexSales/Pipeline",component:E,parameters:{ds:"DS-6105",layout:"fullscreen",workbench:{ns:"sales",path:"/sales/pipeline"},docs:{description:{component:`Pipeline (DS-6105 · DS-2006 LocalTabs) — **VibeBan's** since ADR-0066 A1 (owner 2026-10-12: *"the pipeline must be
a VibeBan capability, not a duplicate in the sales system"*): the screen lists the person's Pipeline boards
(name · open deals · sum) as doors into NexTasks and draws no board of its own. No board → one door, *New board
in NexTasks*; NexTasks away → said as such. *Leads* and *Requests* stay two more views of the same screen (S2).`}}},args:{canAct:!0}},Y=()=>{const r=t(o("oksana"));return{...r,boards:[...r.boards,{project_ref:"nexus://tasks/work_project/wp_pipe_eu",key:"PIPEEU",name:"Sales pipeline · EU",context_project_ref:null,open:3,amount:{amount:0,currency:null},available:!0}]}},p={name:"Boards · connected",args:{view:i(t(o("oksana")))}},c={name:"Boards · native",args:{view:i(t(o("nazar")))}},u={name:"Two boards · one in mixed currencies",args:{view:i(Y())}},m={name:"A board the person may list but not read",args:{view:i({...t(o("oksana")),boards:t(o("oksana")).boards.map(r=>({...r,available:!1,open:0}))})}},y={name:"No board yet — the one door",args:{view:i({...t(o("oksana")),boards:[]})}},b={name:"No board · member who cannot create",args:{view:i({...t(o("oksana")),boards:[]}),canAct:!1}},w={name:"NexTasks away",args:{view:i({...t(o("oksana")),available:!1,boards:[]})}},h={args:{view:i(t(o("oksana"))),initialTab:"leads"}},k={args:{view:i(t(o("oksana"))),initialTab:"requests"}},x={args:{view:l("empty")}},g={args:{view:l("loading")}},v={args:{view:l("error")}},f={args:{view:l("denied")}},S={args:{view:l("offline")}},ce=["Boards","BoardsNative","BoardsTwo","BoardHidden","NoBoard","NoBoardCannotAct","TasksAway","Leads","Requests","Empty","Loading","Error","Denied","Offline"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Boards · connected",
  args: {
    view: ready(store.pipeline(as("oksana")))
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Boards · native",
  args: {
    view: ready(store.pipeline(as("nazar")))
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Two boards · one in mixed currencies",
  args: {
    view: ready(two())
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "A board the person may list but not read",
  args: {
    view: ready({
      ...store.pipeline(as("oksana")),
      boards: store.pipeline(as("oksana")).boards.map(b => ({
        ...b,
        available: false,
        open: 0
      }))
    })
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "No board yet — the one door",
  args: {
    view: ready({
      ...store.pipeline(as("oksana")),
      boards: []
    })
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "No board · member who cannot create",
  args: {
    view: ready({
      ...store.pipeline(as("oksana")),
      boards: []
    }),
    canAct: false
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "NexTasks away",
  args: {
    view: ready({
      ...store.pipeline(as("oksana")),
      available: false,
      boards: []
    })
  }
}`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    view: ready(store.pipeline(as("oksana"))),
    initialTab: "leads"
  }
}`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    view: ready(store.pipeline(as("oksana"))),
    initialTab: "requests"
  }
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("empty")
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("loading")
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("error")
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("denied")
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("offline")
  }
}`,...S.parameters?.docs?.source}}};export{m as BoardHidden,p as Boards,c as BoardsNative,u as BoardsTwo,f as Denied,x as Empty,v as Error,h as Leads,g as Loading,y as NoBoard,b as NoBoardCannotAct,S as Offline,k as Requests,w as TasksAway,ce as __namedExportsOrder,pe as default};
