import{P as _e}from"./fixtures-CBGdDB98.js";import{p as be,d as ie,r as p,e as u,g as we,c as b,s as $}from"./scene-CW26D-iP.js";import{af as ye,as as ve,r as o,j as e,S as Ie,a0 as Ae,f as ke,g as Ne,U as Fe,a8 as De,c as Pe,B as G,t as Te,v as pe,w as h,b as qe,s as Le,x as Ee,F as L,n as Be,A as Me}from"./iframe-WvhPuRF9.js";import{a as Re,i as $e}from"./format-Djfk7eK9.js";import{r as re}from"./routes-36j8zYvH.js";import{v as Oe,c as he}from"./customFields-BTLjwQTu.js";import{a as Ve,N as We,C as Ue,b as ze}from"./NewLine-DbdUsufk.js";import{S as ge}from"./SourceChip-BR7BmiTf.js";import"./personas-BIiIeh3_.js";import"./preload-helper-PPVm8Dsz.js";import"./flags--SfV1VDA.js";import"./arrow-up-B8u2SNEL.js";const He=i=>i==="customer"?"ok":i==="partner"?"neutral":i==="former"?"muted":"warn";function xe({view:i,contacts:I=[],provider:l,writeMode:A,personName:k,fields:O=[],create:oe,duplicates:N,onCreated:ce,projects:n=[],initialSelected:le=null,initialCreating:de=!1,initialDuplicates:g,initialStage:F}){const{t:a}=ye(),{href:D,go:V,Link:P}=ve(),[m,T]=o.useState(""),[C,q]=o.useState(le),[W,w]=o.useState(de),U=o.useRef(null),y=A==="native"||A==="policy_controlled",v=o.useMemo(()=>{if(i.state!=="ready")return[];const t=m.trim().toLowerCase();return t?i.data.filter(d=>d.name.toLowerCase().includes(t)||d.legal_name.toLowerCase().includes(t)||d.city.toLowerCase().includes(t)||(d.tax_id??"").includes(t)):i.data},[i,m]),x=i.state==="ready"?i.data.length:0,z=Le(x,m!==""),r=v.find(t=>t.id===C)??(i.state==="ready"?i.data.find(t=>t.id===C):void 0),j=[{key:"name",header:a("sales.field.name"),render:t=>e.jsx(P,{href:D(re.account(t.id)),className:"nexus-link is-row",onClick:d=>d.stopPropagation(),children:t.name})},{key:"relationship",header:a("sales.field.relationship"),render:t=>e.jsx(Ie,{tone:He(t.relationship),children:a(`sales.relationship.${t.relationship}`)}),width:"140px"},{key:"owner",header:a("sales.field.owner"),render:t=>k(t.owner_id),width:"180px"},{key:"last",header:a("sales.field.lastTouch"),render:t=>e.jsx("span",{className:"nexus-sales-muted",children:Re(t.last_interaction_at,a)}),width:"130px"},{key:"next",header:a("sales.field.next"),render:t=>t.next_planned_at?$e(t.next_planned_at,a):e.jsx("span",{className:"nexus-sales-muted",children:"—"}),width:"130px"},{key:"source",header:a("sales.field.source"),render:t=>e.jsx(ge,{source:t.source,testId:`source-${t.id}`}),width:"190px"}];return e.jsx(Ae,{layout:"dense",width:"wide",title:a("sales.nav.accounts"),meta:x?e.jsx(qe,{children:a("sales.count.n",{n:String(x)})}):void 0,actions:y&&x?e.jsx(G,{ref:U,variant:"primary",onClick:()=>w(!0),"data-testid":"accounts-new",children:a("sales.action.newAccount")}):void 0,testId:"accounts-page",children:e.jsxs("div",{className:"nexus-cc-split nexus-sales-split",children:[e.jsxs("div",{className:"nexus-sales-split-main",children:[z||!y&&l?e.jsxs(ke,{children:[z?e.jsx(Ne,{value:m,onChange:T,placeholder:a("sales.accounts.searchPlaceholder"),label:a("sales.accounts.search")}):null,!y&&l?e.jsx(Fe,{children:a("sales.accounts.createdIn",{provider:l})}):null]}):null,e.jsx(De,{result:i,empty:{title:a("sales.accounts.emptyTitle"),body:y?a("sales.accounts.emptyBody"):void 0,action:y?e.jsx(G,{variant:"primary",onClick:()=>w(!0),"data-testid":"accounts-new-first",children:a("sales.action.newAccount")}):void 0},deniedBody:a("sales.state.denied.body"),children:()=>e.jsx(Pe,{rows:v,columns:j,rowKey:t=>t.id,caption:a("sales.nav.accounts"),selected:C,onOpen:t=>q(t.id),onActivate:t=>V(re.account(t.id)),testId:"accounts-table",empty:m?{title:a("sales.accounts.filteredEmpty",{q:m}),action:e.jsx(G,{size:"sm",onClick:()=>T(""),children:a("sales.action.clearFilter")})}:{title:a("sales.accounts.emptyTitle")}})})]}),r?e.jsxs(Te,{kind:a("sales.kind.account"),title:r.name,subtitle:e.jsx(ge,{source:r.source}),primary:e.jsx(G,{variant:"primary",onClick:()=>V(re.account(r.id)),"data-testid":"inspector-open",children:a("sales.action.open")}),onClose:()=>q(null),testId:"account-inspector",children:[e.jsxs(pe,{idiom:"rule",title:a("sales.section.identity"),children:[e.jsx(h,{label:a("sales.field.legalName"),children:r.legal_name}),r.tax_id?e.jsx(h,{label:a("sales.field.taxId"),children:r.tax_id}):null,e.jsx(h,{label:a("sales.field.city"),children:[r.city,r.country].filter(Boolean).join(" · ")}),e.jsx(h,{label:a("sales.field.relationship"),children:a(`sales.relationship.${r.relationship}`)}),r.industry?e.jsx(h,{label:a("sales.field.industry"),children:r.industry}):null,e.jsx(Ve,{defs:O,values:r.custom_fields,testIdPrefix:"account-cf"})]}),e.jsxs(pe,{idiom:"rule",title:a("sales.section.owners"),children:[e.jsx(h,{label:a("sales.field.owner"),children:k(r.owner_id)}),r.backup_owner_id?e.jsx(h,{label:a("sales.field.backup"),children:k(r.backup_owner_id)}):null]}),e.jsx(pe,{idiom:"rule",title:a("sales.section.contacts"),aside:String(I.filter(t=>t.account_id===r.id).length),children:I.filter(t=>t.account_id===r.id).map(t=>e.jsx(h,{label:t.role,children:t.name},t.id))})]}):null,W?e.jsx(Ge,{create:oe,duplicates:N,projects:n,fields:O,onClose:()=>w(!1),onCreated:t=>{w(!1),ce?.(t)},returnFocusTo:U.current,initialDuplicates:g,initialStage:F}):null]})})}function Ge({create:i,duplicates:I,projects:l,fields:A,onClose:k,onCreated:O,returnFocusTo:oe,initialDuplicates:N,initialStage:ce}){const{t:n}=ye(),{href:le,Link:de}=ve(),g=o.useId(),[F,a]=o.useState(ce??(N?.length?"form":"line")),[D,V]=o.useState(""),[P,m]=o.useState(N?.length?"Horizon Hotels":""),[T,C]=o.useState(""),[q,W]=o.useState(""),[w,U]=o.useState(""),y=l.length>1,[v,x]=o.useState(l[0]?.id??"");o.useEffect(()=>{!v&&l[0]&&x(l[0].id)},[l,v]);const[z,r]=o.useState(null),[j,t]=o.useState(N??null),[d,H]=o.useState(!1),[ue,je]=o.useState({}),[Se,me]=o.useState({});async function Ce(){const s=ze(D);if(m(s.name),C(s.tax_id??""),W(s.website??""),r(null),!s.name&&!s.tax_id){a("form");return}H(!0);try{const c=I?await I({name:s.name,tax_id:s.tax_id}):[];t(c.length?c:null)}catch{t(null)}finally{H(!1),a("form")}}async function fe(s=!1){if(!P.trim()){r(n("sales.form.nameRequired"));return}const c=Oe(A,he(ue));if(c.length){me(Object.fromEntries(c.map(_=>[_.key,n(`sales.fields.issue.${_.code}`)]))),r(n("sales.form.invalid"));return}me({}),r(null),H(!0);try{const _=await i({name:P.trim(),tax_id:T.trim()||void 0,city:w.trim()||void 0,website:q.trim()||void 0,project_id:v||void 0,custom_fields:he(ue),force:s});O(_)}catch(_){const f=_.body;f?.code==="DUPLICATE"&&f.candidates?t(f.candidates):f?.code==="VALIDATION"&&f.message?.startsWith("custom_fields.")?(me({[f.message.slice(14)]:n("sales.fields.issue.type")}),r(n("sales.form.invalid"))):f?.code==="VALIDATION"?r(f.message==="project_id"?n("sales.form.projectRequired"):n("sales.form.invalid")):r(n("sales.state.error.title"))}finally{H(!1)}}return e.jsx(Ee,{kind:n("sales.kind.account"),title:n("sales.accounts.newTitle"),onClose:k,onSubmit:s=>{s.preventDefault(),F==="line"?Ce():j||fe()},primary:F==="line"?{label:n("sales.action.continue"),testId:"account-continue",disabled:d||!D.trim()}:{label:n("sales.action.create"),testId:"account-create",disabled:d||!!j},error:z,returnFocusTo:oe,testId:"account-form",children:F==="line"?e.jsx(We,{value:D,onChange:V,placeholder:n("sales.accounts.linePlaceholder"),label:n("sales.accounts.lineLabel"),onEmptyForm:()=>a("form"),busy:d,testId:"account-line"}):e.jsxs(e.Fragment,{children:[e.jsx(L,{id:`${g}-name`,label:n("sales.field.name"),required:!0,children:s=>e.jsx("input",{...s,className:"nexus-input",value:P,onChange:c=>{m(c.target.value),t(null)},"data-testid":"account-name",autoFocus:!0})}),e.jsx(L,{id:`${g}-tax`,label:n("sales.field.taxId"),hint:n("sales.form.taxHint"),children:s=>e.jsx("input",{...s,className:"nexus-input",value:T,onChange:c=>{C(c.target.value),t(null)},"data-testid":"account-tax"})}),e.jsx(L,{id:`${g}-web`,label:n("sales.field.website"),children:s=>e.jsx("input",{...s,className:"nexus-input",value:q,onChange:c=>W(c.target.value),"data-testid":"account-website",inputMode:"url"})}),e.jsx(L,{id:`${g}-city`,label:n("sales.field.city"),children:s=>e.jsx("input",{...s,className:"nexus-input",value:w,onChange:c=>U(c.target.value),"data-testid":"account-city"})}),y?e.jsx(L,{id:`${g}-project`,label:n("sales.field.project"),hint:n("sales.form.projectHint"),children:s=>e.jsx(Be,{id:s.id,label:n("sales.field.project"),value:v,onChange:x,options:l.map(c=>({value:c.id,label:c.name})),testId:"account-project"})}):null,e.jsx(Ue,{defs:A,values:ue,onChange:je,issues:Se,testIdPrefix:"account-cf"}),j?e.jsxs(Me,{title:n("sales.duplicate.title",{n:String(j.length)}),onCancel:()=>t(null),primary:{label:n("sales.duplicate.createAnyway"),onClick:()=>{fe(!0)},testId:"duplicate-create-anyway"},cancelLabel:n("sales.action.back"),testId:"duplicate-panel",children:[e.jsx("ul",{className:"nexus-sales-dup-list",children:j.map(s=>e.jsxs("li",{children:[e.jsx(de,{href:le(re.account(s.id)),className:"nexus-link is-row","data-testid":`duplicate-${s.id}`,children:s.name}),e.jsxs("span",{className:"nexus-sales-muted",children:[" · ",s.legal_name,s.tax_id?` · ${s.tax_id}`:""," · ",s.city]})]},s.id))}),e.jsx("p",{className:"nexus-sales-muted nexus-sales-p",children:n("sales.duplicate.body")})]}):null]})})}xe.__docgenInfo={description:"Accounts — DS-7001 *Discovery list → Inspector* · DS-7010 *List with controls* (the toolbar appears above 12 rows,\nD1228) · DS-7002 *Create in the Inspector* with the duplicate review as an `ActionPanel` (). In the connected\nworld accounts are the source's: there is no *New account* — a `Restriction` says so (DS-0004), never a dead button.",methods:[],displayName:"AccountsScreen",props:{view:{required:!0,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"Array",elements:[{name:"Account"}],raw:"Account[]"}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:""},contacts:{required:!1,tsType:{name:"Array",elements:[{name:"Contact"}],raw:"Contact[]"},description:"",defaultValue:{value:"[]",computed:!1}},provider:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},writeMode:{required:!0,tsType:{name:"union",raw:'"native" | "read_only" | "approval_required" | "policy_controlled"',elements:[{name:"literal",value:'"native"'},{name:"literal",value:'"read_only"'},{name:"literal",value:'"approval_required"'},{name:"literal",value:'"policy_controlled"'}]},description:""},personName:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => string",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"string"}}},description:""},fields:{required:!1,tsType:{name:"Array",elements:[{name:"CustomFieldDef"}],raw:"CustomFieldDef[]"},description:": the account record type's custom fields — the form asks them, the inspector shows them",defaultValue:{value:"[]",computed:!1}},create:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: NewAccountInput) => Promise<Account>",signature:{arguments:[{type:{name:"NewAccountInput"},name:"input"}],return:{name:"Promise",elements:[{name:"Account"}],raw:"Promise<Account>"}}},description:'the write — the BFF in the app, a scripted answer in a story; rejects with `{ code: "DUPLICATE", candidates }`'},onCreated:{required:!1,tsType:{name:"signature",type:"function",raw:"(a: Account) => void",signature:{arguments:[{type:{name:"Account"},name:"a"}],return:{name:"void"}}},description:""},duplicates:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: { name: string; tax_id?: string }) => Promise<Account[]>",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ name: string; tax_id?: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"tax_id",value:{name:"string",required:!1}}]}},name:"input"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"Account"}],raw:"Account[]"}],raw:"Promise<Account[]>"}}},description:" on the composer line: the candidates the create would refuse on ( (1))"},projects:{required:!1,tsType:{name:"unknown"},description:"the Projects the person may create in (): the form asks which only when there is more than one",defaultValue:{value:"[]",computed:!1}},initialSelected:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"a story may open the panel on a row or on the form",defaultValue:{value:"null",computed:!1}},initialCreating:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},initialDuplicates:{required:!1,tsType:{name:"Array",elements:[{name:"Account"}],raw:"Account[]"},description:""},initialStage:{required:!1,tsType:{name:"union",raw:'"line" | "form"',elements:[{name:"literal",value:'"line"'},{name:"literal",value:'"form"'}]},description:"a story may open the door on the line (the default) or straight on the form"}}};const Ke=async()=>{throw{body:{code:"DUPLICATE",candidates:[]}}},ot={title:"Apps/NexSales/Accounts",component:xe,parameters:{ds:"DS-7010",layout:"fullscreen",workbench:{ns:"sales",path:"/sales/accounts"}},args:{personName:be,provider:_e,writeMode:"read_only",create:Ke,onCreated:()=>{}}},R=b("oksana"),S=b("nazar"),K={name:"Populated · connected (BAS)",args:{view:p(u(R)),contacts:ie(R)}},Q={name:"Row selected · Inspector",args:{view:p(u(R)),contacts:ie(R),initialSelected:"acc_agrolan"}},J={name:"Populated · native (New account)",args:{provider:null,writeMode:"native",view:p(u(S)),contacts:ie(S)}},E={name:"New account · the line",args:{provider:null,writeMode:"native",view:p(u(S)),initialCreating:!0,duplicates:async()=>[]}},X={name:"New account · the form",args:{provider:null,writeMode:"native",view:p(u(S)),initialCreating:!0,initialStage:"form"}},B={name:"New account form · several Projects",args:{provider:null,writeMode:"native",view:p(u(S)),initialCreating:!0,initialStage:"form",projects:[{id:"prj_general",name:"General"},{id:"prj_sales_eu",name:"Sales · EU"}]}},M={name:"New account form · custom fields",args:{provider:null,writeMode:"native",view:p(u(R)),fields:we(b("yuliia")).schemas.find(i=>i.record_type==="account").fields,initialCreating:!0,initialStage:"form"}},Y={name:"Row selected · custom fields in the Inspector",args:{view:p(u(b("ihor"))),contacts:ie(b("ihor")),fields:we(b("ihor")).schemas.find(i=>i.record_type==="account").fields,initialSelected:"acc_poltava"}},Z={name:"Duplicates found",args:{provider:null,writeMode:"native",view:p(u(S)),initialCreating:!0,initialDuplicates:u(S).slice(0,2)}},ee={args:{provider:null,writeMode:"native",view:$("empty")}},te={args:{view:$("loading")}},ae={args:{view:$("error")}},se={args:{view:$("denied")}},ne={args:{view:$("offline")}},ct=["Connected","WithInspector","Native","Creating","CreatingForm","CreatingInSeveralProjects","CreatingWithFields","InspectorWithFields","Duplicates","Empty","Loading","Error","Denied","Offline"];K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Populated · connected (BAS)",
  args: {
    view: ready(store.accounts(connected)),
    contacts: store.contacts(connected)
  }
}`,...K.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "Row selected · Inspector",
  args: {
    view: ready(store.accounts(connected)),
    contacts: store.contacts(connected),
    initialSelected: "acc_agrolan"
  }
}`,...Q.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Populated · native (New account)",
  args: {
    provider: null,
    writeMode: "native",
    view: ready(store.accounts(native)),
    contacts: store.contacts(native)
  }
}`,...J.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "New account · the line",
  args: {
    provider: null,
    writeMode: "native",
    view: ready(store.accounts(native)),
    initialCreating: true,
    duplicates: async () => []
  }
}`,...E.parameters?.docs?.source},description:{story:" (1) · : the door opens on the composer line — *Name, ЄДРПОУ or a website…*; Enter sorts it into the form",...E.parameters?.docs?.description}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "New account · the form",
  args: {
    provider: null,
    writeMode: "native",
    view: ready(store.accounts(native)),
    initialCreating: true,
    initialStage: "form"
  }
}`,...X.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "New account form · several Projects",
  args: {
    provider: null,
    writeMode: "native",
    view: ready(store.accounts(native)),
    initialCreating: true,
    initialStage: "form",
    projects: [{
      id: "prj_general",
      name: "General"
    }, {
      id: "prj_sales_eu",
      name: "Sales · EU"
    }]
  }
}`,...B.parameters?.docs?.source},description:{story:": the person works in more than one Project — the form asks which one the account lives in (kit `Select`).",...B.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "New account form · custom fields",
  args: {
    provider: null,
    writeMode: "native",
    view: ready(store.accounts(connected)),
    fields: store.fields(as("yuliia")).schemas.find(s => s.record_type === "account")!.fields,
    initialCreating: true,
    initialStage: "form"
  }
}`,...M.parameters?.docs?.source},description:{story:": the organization's custom fields follow the account's own on the form — the forwarder preset's (schema order); a financial one only for a head or an admin.",...M.parameters?.docs?.description}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Row selected · custom fields in the Inspector",
  args: {
    view: ready(store.accounts(as("ihor"))),
    contacts: store.contacts(as("ihor")),
    fields: store.fields(as("ihor")).schemas.find(s => s.record_type === "account")!.fields,
    initialSelected: "acc_poltava"
  }
}`,...Y.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Duplicates found",
  args: {
    provider: null,
    writeMode: "native",
    view: ready(store.accounts(native)),
    initialCreating: true,
    initialDuplicates: store.accounts(native).slice(0, 2)
  }
}`,...Z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  args: {
    provider: null,
    writeMode: "native",
    view: state("empty")
  }
}`,...ee.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("loading")
  }
}`,...te.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("error")
  }
}`,...ae.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("denied")
  }
}`,...se.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("offline")
  }
}`,...ne.parameters?.docs?.source}}};export{K as Connected,E as Creating,X as CreatingForm,B as CreatingInSeveralProjects,M as CreatingWithFields,se as Denied,Z as Duplicates,ee as Empty,ae as Error,Y as InspectorWithFields,te as Loading,J as Native,ne as Offline,Q as WithInspector,ct as __namedExportsOrder,ot as default};
