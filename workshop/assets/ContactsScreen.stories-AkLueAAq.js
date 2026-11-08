import{E as Ne}from"./fixtures-B65KySee.js";import{m as i,b as r,r as h,a as ye,l as u}from"./scene-CqiggoaI.js";import{ak as De,ao as _e,r as o,j as t,S as Te,B as Q,V as Pe,s as me,T as Re,c as qe,h as Fe,w as pe,v as G,ac as Be,D as ze,a as he,I as Le,A as Oe,H as ve,m as Ve,n as A}from"./iframe-C_4ax-Jm.js";import{r as J}from"./routes-DgN3bgVk.js";import{a as We}from"./CustomFields-Cxf7J07v.js";import{E as $e}from"./ExportPanel-CEnfUCSX.js";import{N as He}from"./NewContactForm-tbrb7SNh.js";import{S as fe}from"./SourceChip-DFGcc6Vx.js";import"./personas-BIiIeh3_.js";import"./preload-helper-PPVm8Dsz.js";import"./api-COPqCyrr.js";import"./flags--SfV1VDA.js";import"./format-BBzwDLam.js";function ge({view:s,initialSelected:U=null,canCreate:S=!1,accounts:f=[],fields:Z=[],create:E,onCreated:xe,initialCreating:Ce=!1,archive:z,onArchived:Se,onShowArchived:j,runExport:L,download:O,initialShowArchived:Ee=!1,initialExport:je=!1}){const{t:e}=De(),{href:V,Link:ee}=_e(),[m,ke]=o.useState(""),[te,W]=o.useState(Ee?"archived":""),l=te==="archived";o.useEffect(()=>{j?.(l)},[l,j]);const[Ae,ae]=o.useState(je),[Ie,$]=o.useState(!1),[H,se]=o.useState(!1),[k,ne]=o.useState(null),[re,X]=o.useState(U),[oe,Y]=o.useState(Ce),ce=o.useRef(null),d=S&&f.length>0&&!!E,ie=S&&!!E&&f.length===0,le=o.useMemo(()=>{if(s.state!=="ready")return[];const a=m.trim().toLowerCase(),v=s.data.filter(c=>l?c.status==="archived":c.status!=="archived");return a?v.filter(c=>c.name.toLowerCase().includes(a)||c.account_name.toLowerCase().includes(a)||(c.email??"").includes(a)):v},[s,m,l]),p=s.state==="ready"?s.data.filter(a=>l?a.status==="archived":a.status!=="archived").length:0,K=!!L&&!!O&&p>0;async function de(a,v){if(z){se(!0),ne(null);try{const c=await z(a.id,a.account_id,v);$(!1),Se?.(c)}catch(c){const M=c.body;ne(M?.code==="FORBIDDEN"?e("sales.state.denied.title"):M?.code==="CONFLICT"?e(`sales.archive.conflict.${M.message??"TRANSITION_INVALID"}`):e("sales.state.error.title"))}finally{se(!1)}}}const n=le.find(a=>a.id===re),be=[{key:"name",header:e("sales.field.name"),render:a=>t.jsx("span",{className:"nexus-sales-row-title",children:a.name})},{key:"role",header:e("sales.field.role"),render:a=>a.status==="archived"?t.jsx(Te,{tone:"muted",children:e("sales.status.archived")}):a.role,width:"160px"},{key:"account",header:e("sales.field.account"),render:a=>t.jsx(ee,{href:V(J.account(a.account_id)),className:"nexus-link is-row",onClick:v=>v.stopPropagation(),children:a.account_name})},{key:"email",header:e("sales.field.email"),render:a=>t.jsx("span",{className:"nexus-sales-muted",children:a.email??"—"})},{key:"phone",header:e("sales.field.phone"),render:a=>t.jsx("span",{className:"nexus-sales-muted",children:a.phone??"—"}),width:"160px"},{key:"source",header:e("sales.field.source"),render:a=>t.jsx(fe,{source:a.source,testId:`source-${a.id}`}),width:"190px"}],ue=d||ie?t.jsx(Q,{ref:d?ce:void 0,variant:"primary",href:d?void 0:V(`${J.accounts()}?new=1`),onClick:d?()=>Y(!0):void 0,"data-testid":d?p?"contacts-new":"contacts-new-first":"contacts-new-account",children:e(d?"sales.action.newContact":"sales.action.newAccount")}):void 0;return t.jsxs("div",{className:"nexus-cc-split","data-inspector":n||oe?"open":"closed",children:[t.jsx(Pe,{layout:"dense",width:"wide",title:e("sales.nav.contacts"),meta:p?t.jsx(he,{children:e("sales.count.n",{n:String(p)})}):void 0,actions:d&&p?ue:void 0,testId:"contacts-page",children:t.jsxs("div",{className:"nexus-sales-split-main",children:[me(p,m!==""||l)||K||l?t.jsxs(Re,{children:[t.jsx(qe,{value:m,onChange:ke,placeholder:e("sales.contacts.searchPlaceholder"),label:e("sales.contacts.search")}),j?t.jsx(Fe,{label:e("sales.filter.status"),value:te,onChange:a=>W(a==="archived"?"archived":""),compact:!0,options:[{value:"",label:e("sales.filter.active")},{value:"archived",label:e("sales.filter.archived")}],testId:"contacts-status"}):null,K?t.jsx(Q,{size:"sm",onClick:()=>ae(!0),"data-testid":"contacts-export",children:e("sales.action.export")}):null]}):null,!me(p,m!=="")&&!K&&j&&!l&&(s.state==="ready"||s.state==="empty")?t.jsx(pe,{children:t.jsx(G,{tone:"quiet",onClick:()=>W("archived"),"data-testid":"contacts-show-archived",children:e("sales.filter.showArchived")})}):null,Ae&&L&&O?t.jsx($e,{types:["contact"],run:L,download:O,onCancel:()=>ae(!1),testId:"contacts-export-panel"}):null,t.jsx(Be,{result:s,empty:{title:e("sales.contacts.emptyTitle"),body:d?void 0:e(ie?"sales.contacts.emptyNoAccounts":"sales.contacts.emptyBody"),action:ue},deniedBody:e("sales.state.denied.body"),children:()=>t.jsx(ze,{rows:le,columns:be,rowKey:a=>a.id,caption:e("sales.nav.contacts"),selected:re,onOpen:a=>X(a.id),testId:"contacts-table",empty:m?{title:e("sales.accounts.filteredEmpty",{q:m})}:l?{title:e("sales.contacts.noArchived"),action:t.jsx(Q,{size:"sm",onClick:()=>W(""),children:e("sales.action.clearFilter")})}:{title:e("sales.contacts.emptyTitle")}})})]})}),oe&&E?t.jsx(He,{accounts:f,fields:Z,create:E,onClose:()=>Y(!1),onCreated:a=>{Y(!1),X(a.id),xe?.(a)},returnFocusTo:ce.current}):n?t.jsxs(Le,{kind:e("sales.kind.contact"),title:n.name,subtitle:t.jsx(fe,{source:n.source}),onClose:()=>X(null),testId:"contact-inspector",children:[n.status==="archived"?t.jsx(he,{tone:"muted",testId:"archived-chip",children:e("sales.status.archived")}):null,z&&n.source.kind!=="external"?Ie?t.jsxs(Oe,{title:e("sales.archive.title",{name:n.name}),danger:!0,onCancel:()=>$(!1),primary:{label:e("sales.action.archive"),onClick:()=>{de(n,"archive")},disabled:H,testId:"archive-confirm"},testId:"archive-panel",children:[t.jsx("p",{className:"nexus-sales-p",children:e("sales.archive.contactBody")}),k?t.jsx(ve,{tone:"danger",children:k}):null]}):t.jsxs(t.Fragment,{children:[t.jsx(pe,{children:n.status==="archived"?t.jsx(G,{tone:"quiet",onClick:()=>{de(n,"restore")},disabled:H,"data-testid":"contact-restore",children:e("sales.action.restore")}):t.jsx(G,{tone:"quiet",onClick:()=>$(!0),disabled:H,"data-testid":"contact-archive",children:e("sales.action.archive")})}),k?t.jsx(ve,{tone:"danger",children:k}):null]}):null,t.jsxs(Ve,{idiom:"rule",title:e("sales.section.identity"),children:[t.jsx(A,{label:e("sales.field.role"),children:n.role}),n.email?t.jsx(A,{label:e("sales.field.email"),children:n.email}):null,n.phone?t.jsx(A,{label:e("sales.field.phone"),children:n.phone}):null,t.jsx(We,{defs:Z,values:n.custom_fields,testIdPrefix:"contact-cf"}),t.jsx(A,{label:e("sales.field.account"),children:t.jsx(ee,{href:V(J.account(n.account_id)),className:"nexus-link",children:n.account_name})})]})]}):null]})}ge.__docgenInfo={description:`Contacts — DS-7001 · DS-7010: one table across accounts, the Inspector for the person; the account is the row
link. *New contact* follows the Skills / Agents rule (one *New* — the empty state's when empty, the header's when
populated) and opens the \`FormInspector\` on the form (DS-7002 · ; the composer line of DS-6108 is withdrawn).
The Inspector is the suite's right column (DS-2007): the page sits inside the split, the panel beside it.`,methods:[],displayName:"ContactsScreen",props:{view:{required:!0,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"Array",elements:[{name:"intersection",raw:"Contact & { account_name: string }",elements:[{name:"Contact"},{name:"signature",type:"object",raw:"{ account_name: string }",signature:{properties:[{key:"account_name",value:{name:"string",required:!0}}]}}]}],raw:"Row[]"}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:""},initialSelected:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},canCreate:{required:!1,tsType:{name:"boolean"},description:" (2): the door — the person may write contacts and there is an account to put one on",defaultValue:{value:"false",computed:!1}},accounts:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"[]",computed:!1}},fields:{required:!1,tsType:{name:"Array",elements:[{name:"CustomFieldDef"}],raw:"CustomFieldDef[]"},description:": the contact record type's custom fields — the form asks them, the inspector shows them",defaultValue:{value:"[]",computed:!1}},create:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: NewContactInput) => Promise<Contact>",signature:{arguments:[{type:{name:"NewContactInput"},name:"input"}],return:{name:"Promise",elements:[{name:"Contact"}],raw:"Promise<Contact>"}}},description:""},onCreated:{required:!1,tsType:{name:"signature",type:"function",raw:"(c: Contact) => void",signature:{arguments:[{type:{name:"Contact"},name:"c"}],return:{name:"void"}}},description:""},initialCreating:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},archive:{required:!1,tsType:{name:"signature",type:"function",raw:'(id: string, accountId: string, door: "archive" | "restore") => Promise<Contact>',signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"string"},name:"accountId"},{type:{name:"union",raw:'"archive" | "restore"',elements:[{name:"literal",value:'"archive"'},{name:"literal",value:'"restore"'}]},name:"door"}],return:{name:"Promise",elements:[{name:"Contact"}],raw:"Promise<Contact>"}}},description:"archive or restore the contact from its Inspector (the account rides along — the BFF re-reads the row from it)"},onArchived:{required:!1,tsType:{name:"signature",type:"function",raw:"(c: Contact) => void",signature:{arguments:[{type:{name:"Contact"},name:"c"}],return:{name:"void"}}},description:""},onShowArchived:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"v"}],return:{name:"void"}}},description:"the *Archived* filter asks the page for the archived rows (`include_archived`)"},runExport:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: RunExportInput) => Promise<ExportRecord>",signature:{arguments:[{type:{name:"RunExportInput"},name:"input"}],return:{name:"Promise",elements:[{name:"ExportRecord"}],raw:"Promise<ExportRecord>"}}},description:""},download:{required:!1,tsType:{name:"signature",type:"function",raw:"(record: ExportRecord) => Promise<void>",signature:{arguments:[{type:{name:"ExportRecord"},name:"record"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},initialShowArchived:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},initialExport:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const B=async s=>({id:"ct_new",account_id:s.account_id,name:s.name,role:s.role??"",email:s.email,phone:s.phone,primary:!1,source:{kind:"native"}}),nt={title:"Apps/NexSales/Contacts",component:ge,parameters:{ds:"DS-7010",layout:"fullscreen",workbench:{ns:"sales",path:"/sales/contacts"},docs:{description:{component:"Contacts (composes DS-7010 · DS-3031): people across accounts; a row opens the Inspector with the account door."}}}},I={name:"Populated · connected (no door: contacts are the source's)",args:{view:h(i(r("oksana")))}},y={name:"Populated · native (New contact)",args:{view:h(i(r("nazar"))),canCreate:!0,accounts:ye(r("nazar")).map(s=>({id:s.id,name:s.name})),create:B}},g={name:"New contact · the form (account is a choice)",args:{view:h(i(r("nazar"))),canCreate:!0,accounts:ye(r("nazar")).map(s=>({id:s.id,name:s.name})),create:B,initialCreating:!0}},b={name:"Empty · the one door",args:{view:u("empty"),canCreate:!0,accounts:[{id:"acc_1",name:"Sofia Bakery"}],create:B}},N={name:"Empty · no account yet (the door is New account)",args:{view:u("empty"),canCreate:!0,accounts:[],create:B}},D={name:"Row selected · Inspector",args:{view:h(i(r("oksana"))),initialSelected:"ct_petro"}},_={args:{view:u("empty")}},w={name:"Empty · everyone archived (the door stays)",args:{view:u("empty"),onShowArchived:()=>{}}},T={args:{view:u("loading")}},P={args:{view:u("error")}},R={args:{view:u("denied")}},q={args:{view:u("offline")}},we=async(s,U,S)=>({...i(r("nazar"),!0).find(f=>f.id===s),status:S==="archive"?"archived":"active"}),x={name:"Filter · Archived (restore from the Inspector)",args:{view:h([...i(r("nazar")),{...i(r("nazar"))[0],id:"ct_old",name:"Yurii Left",status:"archived"}]),initialShowArchived:!0,initialSelected:"ct_old",archive:we,onShowArchived:()=>{}}},C={name:"Row · Archive (the question)",args:{view:h(i(r("nazar"))),initialSelected:i(r("nazar"))[0].id,archive:we,onShowArchived:()=>{}}},F={name:"Export this list (the panel)",args:{view:h(i(r("nazar"))),runExport:async()=>({...Ne,types:["contact"]}),download:async()=>{},initialExport:!0}},rt=["Populated","Native","Creating","EmptyCanCreate","EmptyNoAccounts","WithInspector","Empty","EmptyWithArchive","Loading","Error","Denied","Offline","Archived","ArchiveAsk","Export"];I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Populated · connected (no door: contacts are the source's)",
  args: {
    view: ready(store.contacts(as("oksana")))
  }
}`,...I.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Populated · native (New contact)",
  args: {
    view: ready(store.contacts(as("nazar"))),
    canCreate: true,
    accounts: store.accounts(as("nazar")).map(a => ({
      id: a.id,
      name: a.name
    })),
    create
  }
}`,...y.parameters?.docs?.source},description:{story:" (2): the Skills / Agents rule — one *New contact* in the header once there is something to list",...y.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "New contact · the form (account is a choice)",
  args: {
    view: ready(store.contacts(as("nazar"))),
    canCreate: true,
    accounts: store.accounts(as("nazar")).map(a => ({
      id: a.id,
      name: a.name
    })),
    create,
    initialCreating: true
  }
}`,...g.parameters?.docs?.source},description:{story:"DS-7002 · : the Inspector opens on the form; from the list the account is a choice",...g.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Empty · the one door",
  args: {
    view: state("empty"),
    canCreate: true,
    accounts: [{
      id: "acc_1",
      name: "Sofia Bakery"
    }],
    create
  }
}`,...b.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Empty · no account yet (the door is New account)",
  args: {
    view: state("empty"),
    canCreate: true,
    accounts: [],
    create
  }
}`,...N.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Row selected · Inspector",
  args: {
    view: ready(store.contacts(as("oksana"))),
    initialSelected: "ct_petro"
  }
}`,...D.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("empty")
  }
}`,..._.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Empty · everyone archived (the door stays)",
  args: {
    view: state("empty"),
    onShowArchived: () => {}
  }
}`,...w.parameters?.docs?.source},description:{story:" (e): every contact archived — the list is empty, the quiet *Show archived* line stays.",...w.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("loading")
  }
}`,...T.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("error")
  }
}`,...P.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("denied")
  }
}`,...R.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("offline")
  }
}`,...q.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Filter · Archived (restore from the Inspector)",
  args: {
    view: ready([...store.contacts(as("nazar")), {
      ...store.contacts(as("nazar"))[0],
      id: "ct_old",
      name: "Yurii Left",
      status: "archived" as const
    }]),
    initialShowArchived: true,
    initialSelected: "ct_old",
    archive,
    onShowArchived: () => {}
  }
}`,...x.parameters?.docs?.source},description:{story:": *Archived* in the toolbar lists only the archived contacts; the Inspector offers *Restore*.",...x.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Row · Archive (the question)",
  args: {
    view: ready(store.contacts(as("nazar"))),
    initialSelected: store.contacts(as("nazar"))[0].id,
    archive,
    onShowArchived: () => {}
  }
}`,...C.parameters?.docs?.source},description:{story:"P-27: archive asks once in the Inspector (danger); never a delete.",...C.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Export this list (the panel)",
  args: {
    view: ready(store.contacts(as("nazar"))),
    runExport: async () => ({
      ...EXPORT_RECORD,
      types: ["contact"]
    }),
    download: async () => {},
    initialExport: true
  }
}`,...F.parameters?.docs?.source}}};export{C as ArchiveAsk,x as Archived,g as Creating,R as Denied,_ as Empty,b as EmptyCanCreate,N as EmptyNoAccounts,w as EmptyWithArchive,P as Error,F as Export,T as Loading,y as Native,q as Offline,I as Populated,D as WithInspector,rt as __namedExportsOrder,nt as default};
