import{r as i,u as t,b as o,l as u}from"./scene-CqiggoaI.js";import{ak as se,ao as ne,r as $,j as s,S as O,B as K,V as re,ac as te,q as l,D,L as oe}from"./iframe-C_4ax-Jm.js";import{m as z,d as F}from"./format-BBzwDLam.js";import{d,r as U}from"./routes-DgN3bgVk.js";import{c as ie,b as de,s as le}from"./WorkRows-DShgTDfa.js";import{E as H}from"./external-link-BxhqZ-kj.js";import"./fixtures-B65KySee.js";import"./personas-BIiIeh3_.js";import"./preload-helper-PPVm8Dsz.js";import"./flags--SfV1VDA.js";const c=r=>typeof r=="string"?r:"";function G({view:r,canAct:P,initialTab:M="board",personName:W=a=>a}){const{t:a,locale:m}=se(),{href:I,Link:R}=ne(),[p,J]=$.useState(M),Q=$.useMemo(()=>[{key:"board",label:a("sales.pipeline.board"),count:r.state==="ready"&&r.data.available?r.data.boards.reduce((e,n)=>e+n.open,0):void 0},{key:"leads",label:a("sales.pipeline.leads"),count:r.state==="ready"?r.data.leads.length:void 0},{key:"requests",label:a("sales.pipeline.requests"),count:r.state==="ready"?r.data.requests.length:void 0}],[r,a]),X=[{key:"name",header:a("sales.pipeline.boardName"),render:e=>s.jsxs("a",{href:d.board(e.key),className:"nexus-link is-row",onClick:n=>n.stopPropagation(),"data-testid":`board-open-${e.key}`,children:[e.name," ",s.jsx(H,{size:12,"aria-hidden":!0}),s.jsxs("span",{className:"nexus-visually-hidden",children:[" ",a("sales.pipeline.opensInTasks")]})]})},{key:"key",header:a("sales.pipeline.boardKey"),render:e=>s.jsx("span",{className:"nexus-sales-muted",children:e.key}),width:"100px"},{key:"open",header:a("sales.pipeline.openDeals"),render:e=>e.available?s.jsx("span",{"data-testid":`board-open-count-${e.key}`,children:e.open}):s.jsx(O,{tone:"muted",children:a("sales.pipeline.boardHidden")}),width:"140px"},{key:"amount",header:a("sales.pipeline.sum"),render:e=>e.available?s.jsx("span",{className:"nexus-sales-amount","data-testid":`board-sum-${e.key}`,children:e.amount.currency?z(e.amount.amount,e.amount.currency,m):e.open?a("sales.pipeline.mixed"):"—"}):null,width:"160px"}],E=e=>s.jsxs("a",{href:d.task(e.item_ref),className:"nexus-link is-row",onClick:n=>n.stopPropagation(),"data-testid":`work-open-${e.id}`,children:[e.title," ",s.jsx(H,{size:12,"aria-hidden":!0}),s.jsxs("span",{className:"nexus-visually-hidden",children:[" ",a("sales.pipeline.opensInTasks")]})]}),C=e=>e.stage.name?s.jsx(O,{tone:le(e.stage.category),children:e.stage.name}):null,Y=[{key:"key",header:a("sales.pipeline.boardKey"),render:e=>s.jsx("span",{className:"nexus-sales-muted",children:e.key}),width:"100px"},{key:"title",header:a("sales.field.name"),render:E},{key:"company",header:a("sales.field.company"),render:e=>c(e.fields.company)||"—"},{key:"channel",header:a("sales.field.channel"),render:e=>ie(a,c(e.fields.channel))||"—",width:"120px"},{key:"stage",header:a("sales.field.status"),render:C,width:"140px"},{key:"who",header:a("sales.pipeline.owner"),render:e=>e.assignee_ids[0]?W(e.assignee_ids[0]):"—",width:"160px"},{key:"updated",header:a("sales.field.created"),render:e=>e.updated_at?F(e.updated_at,m):"—",width:"100px"}],Z=[{key:"key",header:a("sales.pipeline.boardKey"),render:e=>s.jsx("span",{className:"nexus-sales-muted",children:e.key}),width:"100px"},{key:"title",header:a("sales.field.request"),render:E},{key:"account",header:a("sales.field.account"),render:e=>e.account_id?s.jsx(R,{href:I(U.account(e.account_id)),className:"nexus-link is-row",onClick:n=>n.stopPropagation(),children:e.account_name||e.account_id}):"—"},{key:"wanted",header:a("sales.field.validUntil"),render:e=>c(e.fields.wanted_by)?F(c(e.fields.wanted_by),m):"—",width:"120px"},{key:"stage",header:a("sales.field.status"),render:C,width:"140px"},{key:"amount",header:a("sales.field.amount"),render:e=>{const n=de(e);return n?s.jsx("span",{className:"nexus-sales-amount",children:z(n.value,n.currency,m)}):null},width:"140px"},{key:"quote",header:a("sales.section.quotes"),render:e=>{const n=c(e.fields.quote_ref);if(!n)return s.jsx("span",{className:"nexus-sales-muted",children:"—"});const V=e.quote?.id??n.slice(n.lastIndexOf("/")+1);return s.jsx(R,{href:I(`${U.quotes()}?quote=${encodeURIComponent(V)}`),className:"nexus-link is-row",onClick:ae=>ae.stopPropagation(),"data-testid":`work-quote-${e.id}`,children:a("sales.work.quoted",{title:e.quote?.title??V})})},width:"220px"}],ee=P?s.jsx(K,{href:d.newPipeline,"data-testid":"pipeline-new-leads-board",children:a("sales.leads.newBoard")}):void 0,A=P?s.jsx(K,{variant:"primary",href:d.newPipeline,"data-testid":"pipeline-new-board",children:a("sales.pipeline.newBoard")}):void 0;return s.jsx(re,{layout:"dense",width:"wide",title:a("sales.nav.pipeline"),tabs:s.jsx(oe,{tabs:Q,current:p,onChange:J,label:a("sales.pipeline.views"),id:"pipeline",layout:"page"}),testId:"pipeline-page",children:s.jsx("div",{id:`pipeline-panel-${p}`,role:"tabpanel","aria-labelledby":`pipeline-tab-${p}`,className:"nexus-sales-pipeline-panel",children:s.jsx(te,{result:r,empty:{title:a("sales.pipeline.emptyTitle"),body:a("sales.pipeline.emptyBody"),action:A},deniedBody:a("sales.state.denied.body"),children:e=>p==="leads"?e.available?e.leads_boards.length===0?s.jsx(l,{variant:"quiet",title:a("sales.leads.emptyTitle"),body:a("sales.leads.emptyBody"),action:ee,testId:"leads-no-board"}):s.jsx(D,{rows:e.leads,columns:Y,rowKey:n=>n.item_ref,caption:a("sales.pipeline.leads"),onOpen:n=>{window.location.assign(d.task(n.item_ref))},testId:"leads-table",empty:{title:a("sales.leads.emptyTitle"),body:a("sales.leads.emptyBody")}}):s.jsx(l,{variant:"quiet",title:a("sales.work.unavailableTitle"),body:a("sales.work.unavailableBody"),testId:"leads-unavailable"}):p==="requests"?e.available?e.boards.length===0?s.jsx(l,{variant:"quiet",title:a("sales.requests.emptyTitle"),body:a("sales.requests.emptyBody"),action:A,testId:"requests-no-board"}):s.jsx(D,{rows:e.requests,columns:Z,rowKey:n=>n.item_ref,caption:a("sales.pipeline.requests"),onOpen:n=>{window.location.assign(d.task(n.item_ref))},testId:"requests-table",empty:{title:a("sales.requests.emptyTitle"),body:a("sales.requests.emptyBody")}}):s.jsx(l,{variant:"quiet",title:a("sales.work.unavailableTitle"),body:a("sales.work.unavailableBody"),testId:"requests-unavailable"}):e.available?e.boards.length===0?s.jsx(l,{variant:"quiet",title:a("sales.pipeline.emptyTitle"),body:a("sales.pipeline.emptyBody"),action:A,testId:"pipeline-empty"}):s.jsx(D,{rows:e.boards,columns:X,rowKey:n=>n.key,caption:a("sales.pipeline.boards"),onOpen:n=>{window.location.assign(d.board(n.key))},testId:"boards-table",empty:{title:a("sales.pipeline.emptyTitle")}}):s.jsx(l,{variant:"quiet",title:a("sales.pipeline.unavailableTitle"),body:a("sales.pipeline.unavailableBody"),testId:"pipeline-unavailable"})})})})}G.__docgenInfo={description:`Pipeline — **VibeBan's** ( A1 ·  (3)): an opportunity is a VibeBan item of the pack's type on a
*Pipeline* board, and the board — stages, cards, drag, limits, the sum — is NexTasks' own screen. NexSales keeps
no pipeline and draws no board: this screen is the projection sales-api composes as the person (\`GET
/sales/pipeline\`) — every board of the pack's template as one row (*name · open deals · pipeline*), a door into
NexTasks (DS-7001 the row opens; \`↗\` the owning app, ). No board yet → one door, *New board in NexTasks*
( · the Skills / Agents rule); NexTasks away → said as such. **Leads** and **Requests** (S2-B ·  A2)
are two more views of the same screen (\`LocalTabs\`, DS-2006): the open leads off the person's *Leads* boards and
the open requests off their Pipeline boards — VibeBan rows (key · title · the type's facts · stage), each a door
into the item; a lead converts into a deal in VibeBan (declared conversion,  A5), never here.`,methods:[],displayName:"PipelineScreen",props:{view:{required:!0,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"PipelineView"}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:""},canAct:{required:!0,tsType:{name:"boolean"},description:"the person may create a board (a Project in NexTasks) — the empty state's one door"},initialTab:{required:!1,tsType:{name:"union",raw:'"board" | "leads" | "requests"',elements:[{name:"literal",value:'"board"'},{name:"literal",value:'"leads"'},{name:"literal",value:'"requests"'}]},description:"",defaultValue:{value:'"board"',computed:!1}},personName:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => string",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"string"}}},description:"`person(id)` for the rows' assignees",defaultValue:{value:"(id) => id",computed:!1}}}};const fe={title:"Apps/NexSales/Pipeline",component:G,parameters:{ds:"DS-6105",layout:"fullscreen",workbench:{ns:"sales",path:"/sales/pipeline"},docs:{description:{component:`Pipeline (DS-6105 · DS-2006 LocalTabs) — **VibeBan's** since  A1 (owner 2026-10-12: *"the pipeline must be
a VibeBan capability, not a duplicate in the sales system"*): the screen lists the person's Pipeline boards
(name · open deals · sum) as doors into NexTasks and draws no board of its own. No board → one door, *New board
in NexTasks*; NexTasks away → said as such. **Leads** and **Requests** (S2-B ·  A2) are two more views of
the same screen: the open leads off the Leads boards and the open requests off the Pipeline boards — VibeBan rows,
each a door into the item; a request that a quote answers names the quote.`}}},args:{canAct:!0}},pe=()=>{const r=t(o("oksana"));return{...r,boards:[...r.boards,{project_ref:"nexus://tasks/work_project/wp_pipe_eu",key:"PIPEEU",name:"Sales pipeline · EU",context_project_ref:null,open:3,amount:{amount:0,currency:null},available:!0}]}},y={name:"Boards · connected",args:{view:i(t(o("oksana")))}},b={name:"Boards · native",args:{view:i(t(o("nazar")))}},h={name:"Two boards · one in mixed currencies",args:{view:i(pe())}},w={name:"A board the person may list but not read",args:{view:i({...t(o("oksana")),boards:t(o("oksana")).boards.map(r=>({...r,available:!1,open:0}))})}},k={name:"No board yet — the one door",args:{view:i({...t(o("oksana")),boards:[]})}},g={name:"No board · member who cannot create",args:{view:i({...t(o("oksana")),boards:[]}),canAct:!1}},x={name:"NexTasks away",args:{view:i({...t(o("oksana")),available:!1,boards:[]})}},f={name:"Leads · open leads off the Leads board",args:{view:i(t(o("oksana"))),initialTab:"leads"}},v={name:"Leads · no Leads board yet — the one door",args:{view:i({...t(o("oksana")),leads_boards:[],leads:[]}),initialTab:"leads"}},q={name:"Leads · NexTasks away",args:{view:i({...t(o("oksana")),available:!1,boards:[],leads_boards:[],leads:[],requests:[]}),initialTab:"leads"}},B={name:"Requests · open requests, one quoted",args:{view:i(t(o("oksana"))),initialTab:"requests"}},T={name:"Requests · none open",args:{view:i({...t(o("oksana")),requests:[]}),initialTab:"requests"}},N={args:{view:u("empty")}},j={args:{view:u("loading")}},S={args:{view:u("error")}},L={args:{view:u("denied")}},_={args:{view:u("offline")}},ve=["Boards","BoardsNative","BoardsTwo","BoardHidden","NoBoard","NoBoardCannotAct","TasksAway","Leads","LeadsNoBoard","LeadsTasksAway","Requests","RequestsEmpty","Empty","Loading","Error","Denied","Offline"];y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Boards · connected",
  args: {
    view: ready(store.pipeline(as("oksana")))
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Boards · native",
  args: {
    view: ready(store.pipeline(as("nazar")))
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Two boards · one in mixed currencies",
  args: {
    view: ready(two())
  }
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "No board yet — the one door",
  args: {
    view: ready({
      ...store.pipeline(as("oksana")),
      boards: []
    })
  }
}`,...k.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "No board · member who cannot create",
  args: {
    view: ready({
      ...store.pipeline(as("oksana")),
      boards: []
    }),
    canAct: false
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "NexTasks away",
  args: {
    view: ready({
      ...store.pipeline(as("oksana")),
      available: false,
      boards: []
    })
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Leads · open leads off the Leads board",
  args: {
    view: ready(store.pipeline(as("oksana"))),
    initialTab: "leads"
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Leads · no Leads board yet — the one door",
  args: {
    view: ready({
      ...store.pipeline(as("oksana")),
      leads_boards: [],
      leads: []
    }),
    initialTab: "leads"
  }
}`,...v.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Leads · NexTasks away",
  args: {
    view: ready({
      ...store.pipeline(as("oksana")),
      available: false,
      boards: [],
      leads_boards: [],
      leads: [],
      requests: []
    }),
    initialTab: "leads"
  }
}`,...q.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Requests · open requests, one quoted",
  args: {
    view: ready(store.pipeline(as("oksana"))),
    initialTab: "requests"
  }
}`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Requests · none open",
  args: {
    view: ready({
      ...store.pipeline(as("oksana")),
      requests: []
    }),
    initialTab: "requests"
  }
}`,...T.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("empty")
  }
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("loading")
  }
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("error")
  }
}`,...S.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("denied")
  }
}`,...L.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("offline")
  }
}`,..._.parameters?.docs?.source}}};export{w as BoardHidden,y as Boards,b as BoardsNative,h as BoardsTwo,L as Denied,N as Empty,S as Error,f as Leads,v as LeadsNoBoard,q as LeadsTasksAway,j as Loading,k as NoBoard,g as NoBoardCannotAct,_ as Offline,B as Requests,T as RequestsEmpty,x as TasksAway,ve as __namedExportsOrder,fe as default};
