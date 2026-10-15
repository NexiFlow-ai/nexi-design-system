import{e as q,c as r,r as m,d as u,s as o}from"./scene-CW26D-iP.js";import{af as Y,as as Z,r as l,j as t,a0 as ee,s as ae,f as te,g as ne,a8 as se,c as re,B,t as oe,v as ce,w,b as ie}from"./iframe-WvhPuRF9.js";import{r as P}from"./routes-36j8zYvH.js";import{a as le}from"./NewLine-DbdUsufk.js";import{N as de}from"./NewContactForm-BxZ5v2lk.js";import{S as $}from"./SourceChip-BR7BmiTf.js";import"./customFields-BTLjwQTu.js";import"./fixtures-CBGdDB98.js";import"./personas-BIiIeh3_.js";import"./preload-helper-PPVm8Dsz.js";import"./arrow-up-B8u2SNEL.js";import"./format-Djfk7eK9.js";import"./flags--SfV1VDA.js";function K({view:n,initialSelected:M=null,canCreate:z=!1,accounts:E=[],fields:A=[],create:h,onCreated:Q,initialCreating:G=!1,initialStage:H}){const{t:a}=Y(),{href:I,Link:L}=Z(),[c,J]=l.useState(""),[R,T]=l.useState(M),[U,f]=l.useState(G),V=l.useRef(null),F=z&&E.length>0&&!!h,O=z&&!!h&&E.length===0,W=l.useMemo(()=>{if(n.state!=="ready")return[];const e=c.trim().toLowerCase();return e?n.data.filter(i=>i.name.toLowerCase().includes(e)||i.account_name.toLowerCase().includes(e)||(i.email??"").includes(e)):n.data},[n,c]),g=n.state==="ready"?n.data.length:0,s=W.find(e=>e.id===R),X=[{key:"name",header:a("sales.field.name"),render:e=>t.jsx("span",{className:"nexus-sales-row-title",children:e.name})},{key:"role",header:a("sales.field.role"),render:e=>e.role,width:"160px"},{key:"account",header:a("sales.field.account"),render:e=>t.jsx(L,{href:I(P.account(e.account_id)),className:"nexus-link is-row",onClick:i=>i.stopPropagation(),children:e.account_name})},{key:"email",header:a("sales.field.email"),render:e=>t.jsx("span",{className:"nexus-sales-muted",children:e.email??"—"})},{key:"phone",header:a("sales.field.phone"),render:e=>t.jsx("span",{className:"nexus-sales-muted",children:e.phone??"—"}),width:"160px"},{key:"source",header:a("sales.field.source"),render:e=>t.jsx($,{source:e.source,testId:`source-${e.id}`}),width:"190px"}];return t.jsx(ee,{layout:"dense",width:"wide",title:a("sales.nav.contacts"),meta:g?t.jsx(ie,{children:a("sales.count.n",{n:String(g)})}):void 0,actions:F&&g?t.jsx(B,{ref:V,variant:"primary",onClick:()=>f(!0),"data-testid":"contacts-new",children:a("sales.action.newContact")}):void 0,testId:"contacts-page",children:t.jsxs("div",{className:"nexus-cc-split nexus-sales-split",children:[t.jsxs("div",{className:"nexus-sales-split-main",children:[ae(g,c!=="")?t.jsx(te,{children:t.jsx(ne,{value:c,onChange:J,placeholder:a("sales.contacts.searchPlaceholder"),label:a("sales.contacts.search")})}):null,t.jsx(se,{result:n,empty:{title:a("sales.contacts.emptyTitle"),body:F?void 0:a(O?"sales.contacts.emptyNoAccounts":"sales.contacts.emptyBody"),action:F?t.jsx(B,{variant:"primary",onClick:()=>f(!0),"data-testid":"contacts-new-first",children:a("sales.action.newContact")}):O?t.jsx(B,{variant:"primary",href:I(`${P.accounts()}?new=1`),"data-testid":"contacts-new-account",children:a("sales.action.newAccount")}):void 0},deniedBody:a("sales.state.denied.body"),children:()=>t.jsx(re,{rows:W,columns:X,rowKey:e=>e.id,caption:a("sales.nav.contacts"),selected:R,onOpen:e=>T(e.id),testId:"contacts-table",empty:c?{title:a("sales.accounts.filteredEmpty",{q:c})}:{title:a("sales.contacts.emptyTitle")}})})]}),s?t.jsx(oe,{kind:a("sales.kind.contact"),title:s.name,subtitle:t.jsx($,{source:s.source}),onClose:()=>T(null),testId:"contact-inspector",children:t.jsxs(ce,{idiom:"rule",title:a("sales.section.identity"),children:[t.jsx(w,{label:a("sales.field.role"),children:s.role}),s.email?t.jsx(w,{label:a("sales.field.email"),children:s.email}):null,s.phone?t.jsx(w,{label:a("sales.field.phone"),children:s.phone}):null,t.jsx(le,{defs:A,values:s.custom_fields,testIdPrefix:"contact-cf"}),t.jsx(w,{label:a("sales.field.account"),children:t.jsx(L,{href:I(P.account(s.account_id)),className:"nexus-link",children:s.account_name})})]})}):null,U&&h?t.jsx(de,{accounts:E,fields:A,create:h,onClose:()=>f(!1),onCreated:e=>{f(!1),T(e.id),Q?.(e)},returnFocusTo:V.current,initialStage:H}):null]})})}K.__docgenInfo={description:`Contacts — DS-7001 · DS-7010: one table across accounts, the Inspector for the person; the account is the row
link. *New contact* follows the Skills / Agents rule (one *New* — the empty state's when empty, the header's when
populated) and opens the composer-line door (DS-6108,  (2)).`,methods:[],displayName:"ContactsScreen",props:{view:{required:!0,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"Array",elements:[{name:"intersection",raw:"Contact & { account_name: string }",elements:[{name:"Contact"},{name:"signature",type:"object",raw:"{ account_name: string }",signature:{properties:[{key:"account_name",value:{name:"string",required:!0}}]}}]}],raw:"Row[]"}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:""},initialSelected:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},canCreate:{required:!1,tsType:{name:"boolean"},description:" (2): the door — the person may write contacts and there is an account to put one on",defaultValue:{value:"false",computed:!1}},accounts:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"[]",computed:!1}},fields:{required:!1,tsType:{name:"Array",elements:[{name:"CustomFieldDef"}],raw:"CustomFieldDef[]"},description:": the contact record type's custom fields — the form asks them, the inspector shows them",defaultValue:{value:"[]",computed:!1}},create:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: NewContactInput) => Promise<Contact>",signature:{arguments:[{type:{name:"NewContactInput"},name:"input"}],return:{name:"Promise",elements:[{name:"Contact"}],raw:"Promise<Contact>"}}},description:""},onCreated:{required:!1,tsType:{name:"signature",type:"function",raw:"(c: Contact) => void",signature:{arguments:[{type:{name:"Contact"},name:"c"}],return:{name:"void"}}},description:""},initialCreating:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},initialStage:{required:!1,tsType:{name:"union",raw:'"line" | "form"',elements:[{name:"literal",value:'"line"'},{name:"literal",value:'"form"'}]},description:""}}};const p=async n=>({id:"ct_new",account_id:n.account_id,name:n.name,role:n.role??"",email:n.email,phone:n.phone,primary:!1,source:{kind:"native"}}),ke={title:"Apps/NexSales/Contacts",component:K,parameters:{ds:"DS-7010",layout:"fullscreen",workbench:{ns:"sales",path:"/sales/contacts"},docs:{description:{component:"Contacts (composes DS-7010 · DS-3031): people across accounts; a row opens the Inspector with the account door."}}}},y={name:"Populated · connected (no door: contacts are the source's)",args:{view:m(u(r("oksana")))}},d={name:"Populated · native (New contact)",args:{view:m(u(r("nazar"))),canCreate:!0,accounts:q(r("nazar")).map(n=>({id:n.id,name:n.name})),create:p}},C={name:"New contact · the line",args:{view:m(u(r("nazar"))),canCreate:!0,accounts:q(r("nazar")).map(n=>({id:n.id,name:n.name})),create:p,initialCreating:!0}},x={name:"New contact · the form (account is a choice)",args:{view:m(u(r("nazar"))),canCreate:!0,accounts:q(r("nazar")).map(n=>({id:n.id,name:n.name})),create:p,initialCreating:!0,initialStage:"form"}},v={name:"Empty · the one door",args:{view:o("empty"),canCreate:!0,accounts:[{id:"acc_1",name:"Sofia Bakery"}],create:p}},S={name:"Empty · no account yet (the door is New account)",args:{view:o("empty"),canCreate:!0,accounts:[],create:p}},j={name:"Row selected · Inspector",args:{view:m(u(r("oksana"))),initialSelected:"ct_petro"}},k={args:{view:o("empty")}},N={args:{view:o("loading")}},_={args:{view:o("error")}},b={args:{view:o("denied")}},D={args:{view:o("offline")}},Ne=["Populated","Native","Creating","CreatingForm","EmptyCanCreate","EmptyNoAccounts","WithInspector","Empty","Loading","Error","Denied","Offline"];y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Populated · connected (no door: contacts are the source's)",
  args: {
    view: ready(store.contacts(as("oksana")))
  }
}`,...y.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:" (2): the Skills / Agents rule — one *New contact* in the header once there is something to list",...d.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "New contact · the line",
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
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "New contact · the form (account is a choice)",
  args: {
    view: ready(store.contacts(as("nazar"))),
    canCreate: true,
    accounts: store.accounts(as("nazar")).map(a => ({
      id: a.id,
      name: a.name
    })),
    create,
    initialCreating: true,
    initialStage: "form"
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Empty · no account yet (the door is New account)",
  args: {
    view: state("empty"),
    canCreate: true,
    accounts: [],
    create
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Row selected · Inspector",
  args: {
    view: ready(store.contacts(as("oksana"))),
    initialSelected: "ct_petro"
  }
}`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("empty")
  }
}`,...k.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("loading")
  }
}`,...N.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("error")
  }
}`,..._.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("denied")
  }
}`,...b.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("offline")
  }
}`,...D.parameters?.docs?.source}}};export{C as Creating,x as CreatingForm,b as Denied,k as Empty,v as EmptyCanCreate,S as EmptyNoAccounts,_ as Error,N as Loading,d as Native,D as Offline,y as Populated,j as WithInspector,Ne as __namedExportsOrder,ke as default};
