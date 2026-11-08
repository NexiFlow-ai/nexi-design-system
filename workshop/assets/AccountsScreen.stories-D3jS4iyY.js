import{P as et,E as $t}from"./fixtures-B65KySee.js";import{v as Wt,d as vt,p as zt,r as y,a as h,m as ae,S as Ht,h as xt,b as K,l as se}from"./scene-CqiggoaI.js";import{ak as tt,ao as bt,r as l,s as Ut,j as t,S as yt,B as P,V as Kt,T as Gt,c as Zt,h as F,y as Xt,d as Qt,e as te,k as Yt,w as Je,H as Oe,A as at,F as U,v as kt,ac as Jt,D as ea,a as St,o as ta,I as aa,m as Ye,n as M}from"./iframe-C_4ax-Jm.js";import{a as sa,i as na}from"./format-BBzwDLam.js";import{r as xe}from"./routes-DgN3bgVk.js";import{C as ra,a as ia}from"./CustomFields-Cxf7J07v.js";import{E as oa}from"./ExportPanel-CEnfUCSX.js";import{S as _t}from"./SourceChip-DFGcc6Vx.js";import"./personas-BIiIeh3_.js";import"./preload-helper-PPVm8Dsz.js";import"./flags--SfV1VDA.js";import"./api-COPqCyrr.js";const la={name:"sales.field.name",legal_name:"sales.field.legalName",tax_id:"sales.field.taxId",identifiers:"sales.field.taxId",city:"sales.field.city",country:"sales.field.country",website:"sales.field.website"};function ca(s,r){const i=la[s.replace(/^identifiers\..*/,"identifiers")];return i?r(i):s}const gt={relationship:"",owner:"",registry:"",contract:"",group:"",status:""},wt=50;function ua(s){const r=i=>typeof s[i]=="string"?s[i]:"";return{relationship:r("relationship"),owner:r("owner"),registry:r("registry"),contract:r("contract")||"",group:r("group")||"",status:r("status")==="archived"?"archived":""}}function da(s,r){return s.filter(i=>(r.status==="archived"?i.status==="archived":i.status!=="archived")&&(!r.relationship||i.relationship===r.relationship)&&(!r.owner||i.owner_id===r.owner||i.backup_owner_id===r.owner)&&(!r.registry||i.registry_status?.status===r.registry)&&(!r.contract||(r.contract==="none"?!(i.active_contracts??0):(i.active_contracts??0)>0))&&(!r.group||(r.group==="in"?!!i.parent_id||!!i.group_members:!i.parent_id&&!i.group_members)))}const pa=s=>s==="customer"?"ok":s==="partner"?"neutral":s==="former"?"muted":"warn";function jt({view:s,contacts:r=[],provider:i,writeMode:B,personName:g,fields:w=[],create:A,duplicates:ne,onCreated:d,projects:Z=[],initialSelected:q=null,initialCreating:o=!1,initialDraft:W=null,initialDuplicates:T,initialLookalikes:j,views:x,saveView:E,deleteView:b,onViewsChanged:D,bulkTransfer:z,people:Me=[],approverName:re="",initialFilters:$e,initialChecked:We=[],initialSaveView:X=!1,initialBulk:be=!1,archive:ke,onArchived:k,onShowArchived:C,runExport:N,download:R,initialExport:ie=!1}){const{t:a}=tt(),{href:Se,go:Q,Link:ze}=bt(),[L,Y]=l.useState(""),[u,v]=l.useState({...gt,...$e}),[c,f]=l.useState(""),[V,p]=l.useState(X),[He,st]=l.useState(""),[Tt,_e]=l.useState(null),[nt,Ue]=l.useState(null),[S,je]=l.useState(We),[Et,Ke]=l.useState(be),[Ce,Nt]=l.useState(""),[rt,Pt]=l.useState(""),[Ft,it]=l.useState(null),[Bt,ot]=l.useState(!1),[lt,qt]=l.useState(null),[Dt,ct]=l.useState(ie),Ge=Object.values(u).some(Boolean),J=u.status==="archived";l.useEffect(()=>{C?.(J)},[J,C]);const Ze=e=>{f(e);const n=x?.find(m=>m.id===e);v(n?ua(n.filters):{...gt})};async function Rt(){if(!E)return;const e=He.trim();if(!e){_e(a("sales.form.nameRequired"));return}_e(null);try{const n=x?.find(I=>I.name.toLowerCase()===e.toLowerCase()),m=await E({...n?{id:n.id}:{},screen:"accounts",name:e,filters:Object.fromEntries(Object.entries(u).filter(([,I])=>I)),columns:["name","relationship","owner","last","next","source"]});p(!1),st(""),f(m.id),Ue(a("sales.views.saved")),D?.()}catch(n){const m=n.body;_e(m?.code==="VALIDATION"||m?.code==="CONFLICT"?a("sales.form.invalid"):a("sales.state.error.title"))}}async function Lt(){if(!(!b||!c))try{await b(c),Ze(""),Ue(a("sales.views.deleted")),D?.()}catch{Ue(a("sales.state.error.title"))}}async function Vt(){if(!(!z||!Ce)){ot(!0),it(null);try{await z({account_ids:S,to_id:Ce,reason:rt.trim()||void 0}),Ke(!1),qt(S.length),je([])}catch(e){const n=e.body;it(n?.code==="FORBIDDEN"?a("sales.state.denied.title"):n?.code==="VALIDATION"?a(n.message==="account_refs"?"sales.bulk.oneProject":"sales.form.invalid"):a("sales.state.error.title"))}finally{ot(!1)}}}const[Xe,ut]=l.useState(q),[dt,Qe]=l.useState(o),pt=l.useRef(null),oe=B!=="read_only",ee=l.useMemo(()=>{if(s.state!=="ready")return[];const e=L.trim().toLowerCase(),n=s.data.filter(I=>I.status!=="merged"),m=e?n.filter(I=>I.name.toLowerCase().includes(e)||I.legal_name.toLowerCase().includes(e)||I.city.toLowerCase().includes(e)||(I.tax_id??"").includes(e)):n;return da(m,u)},[s,L,u]),O=s.state==="ready"?s.data.filter(e=>e.status!=="merged"&&(J?e.status==="archived":e.status!=="archived")).length:0,Ie=Ut(O,L!==""||Ge||!!x?.length),Ot=l.useMemo(()=>s.state==="ready"?[...new Set(s.data.flatMap(e=>[e.owner_id,e.backup_owner_id]).filter(e=>!!e))].sort((e,n)=>g(e).localeCompare(g(n))):[],[s,g]),mt=!!z,ht=ee.length>0&&ee.every(e=>S.includes(e.id)),H=ee.find(e=>e.id===Xe)??(s.state==="ready"?s.data.find(e=>e.id===Xe):void 0),Mt=[...mt?[{key:"select",header:t.jsx("input",{type:"checkbox","aria-label":a("sales.accounts.selectAll"),checked:ht,onChange:()=>je(ht?S.filter(e=>!ee.some(n=>n.id===e)):[...new Set([...S,...ee.map(e=>e.id)])]),"data-testid":"accounts-select-all"}),render:e=>t.jsx("input",{type:"checkbox","aria-label":a("sales.accounts.selectRow",{name:e.name}),checked:S.includes(e.id),onChange:()=>je(n=>n.includes(e.id)?n.filter(m=>m!==e.id):[...n,e.id]),onClick:n=>n.stopPropagation(),"data-testid":`select-${e.id}`}),width:"36px"}]:[],{key:"name",header:a("sales.field.name"),render:e=>t.jsx(ze,{href:Se(xe.account(e.id)),className:"nexus-link is-row",onClick:n=>n.stopPropagation(),children:e.name})},{key:"relationship",header:a("sales.field.relationship"),render:e=>e.status==="archived"?t.jsx(yt,{tone:"muted",children:a("sales.status.archived")}):t.jsx(yt,{tone:pa(e.relationship),children:a(`sales.relationship.${e.relationship}`)}),width:"140px"},{key:"owner",header:a("sales.field.owner"),render:e=>g(e.owner_id),width:"180px"},{key:"last",header:a("sales.field.lastTouch"),render:e=>t.jsx("span",{className:"nexus-sales-muted",children:sa(e.last_interaction_at,a)}),width:"130px"},{key:"next",header:a("sales.field.next"),render:e=>e.next_planned_at?na(e.next_planned_at,a):t.jsx("span",{className:"nexus-sales-muted",children:"—"}),width:"130px"},{key:"source",header:a("sales.field.source"),render:e=>t.jsx(_t,{source:e.source,testId:`source-${e.id}`}),width:"190px"}],ft=oe?t.jsx(P,{ref:pt,variant:"primary",onClick:()=>Qe(!0),"data-testid":O?"accounts-new":"accounts-new-first",children:a("sales.action.newAccount")}):void 0;return t.jsxs("div",{className:"nexus-cc-split","data-inspector":H||dt?"open":"closed",children:[t.jsx(Kt,{layout:"dense",width:"wide",title:a("sales.nav.accounts"),meta:O?t.jsx(St,{children:a("sales.count.n",{n:String(O)})}):void 0,actions:O?ft:void 0,testId:"accounts-page",children:t.jsxs("div",{className:"nexus-sales-split-main",children:[Ie||!oe&&i||N&&R&&O?t.jsxs(Gt,{children:[Ie?t.jsx(Zt,{value:L,onChange:Y,placeholder:a("sales.accounts.searchPlaceholder"),label:a("sales.accounts.search")}):null,x?t.jsx(F,{label:a("sales.views.mine"),value:c,onChange:Ze,compact:!0,options:[{value:"",label:a("sales.views.all")},...x.map(e=>({value:e.id,label:e.name}))],testId:"accounts-views"}):null,N&&R&&O?t.jsx(P,{size:"sm",onClick:()=>ct(!0),"data-testid":"accounts-export",children:a("sales.action.export")}):null,!oe&&i?t.jsx(Xt,{children:a("sales.accounts.createdIn",{provider:i})}):null]}):null,Ie&&O||J?t.jsxs(Qt,{label:a("sales.filter.label"),clearLabel:a("sales.action.clearFilter"),onClear:Ge?()=>Ze(""):void 0,active:[...u.relationship?[{key:"relationship",label:a(`sales.relationship.${u.relationship}`),onRemove:()=>v(e=>({...e,relationship:""}))}]:[],...u.owner?[{key:"owner",label:g(u.owner),onRemove:()=>v(e=>({...e,owner:""}))}]:[],...u.registry?[{key:"registry",label:a(`sales.registry.${u.registry}`),onRemove:()=>v(e=>({...e,registry:""}))}]:[],...u.contract?[{key:"contract",label:a(u.contract==="none"?"sales.filter.noContract":"sales.filter.activeContract"),onRemove:()=>v(e=>({...e,contract:""}))}]:[],...u.group?[{key:"group",label:a(u.group==="in"?"sales.filter.inGroup":"sales.filter.standalone"),onRemove:()=>v(e=>({...e,group:""}))}]:[],...u.status?[{key:"status",label:a("sales.filter.archived"),onRemove:()=>v(e=>({...e,status:""}))}]:[]],testId:"accounts-filters",children:[t.jsx(te,{label:a("sales.filter.relationship"),children:e=>t.jsx(F,{id:e,label:a("sales.filter.relationship"),value:u.relationship,onChange:n=>v(m=>({...m,relationship:n})),compact:!0,options:[{value:"",label:a("sales.filter.any")},...["customer","prospect","partner","former"].map(n=>({value:n,label:a(`sales.relationship.${n}`)}))],testId:"filter-relationship"})}),t.jsx(te,{label:a("sales.filter.owner"),children:e=>t.jsx(F,{id:e,label:a("sales.filter.owner"),value:u.owner,onChange:n=>v(m=>({...m,owner:n})),compact:!0,options:[{value:"",label:a("sales.filter.any")},...Ot.map(n=>({value:n,label:g(n)}))],testId:"filter-owner"})}),t.jsx(te,{label:a("sales.filter.registry"),children:e=>t.jsx(F,{id:e,label:a("sales.filter.registry"),value:u.registry,onChange:n=>v(m=>({...m,registry:n})),compact:!0,options:[{value:"",label:a("sales.filter.any")},...["active","in_liquidation","terminated","unknown"].map(n=>({value:n,label:a(`sales.registry.${n}`)}))],testId:"filter-registry"})}),t.jsx(te,{label:a("sales.filter.contract"),children:e=>t.jsx(F,{id:e,label:a("sales.filter.contract"),value:u.contract,onChange:n=>v(m=>({...m,contract:n})),compact:!0,options:[{value:"",label:a("sales.filter.any")},{value:"active",label:a("sales.filter.activeContract")},{value:"none",label:a("sales.filter.noContract")}],testId:"filter-contract"})}),t.jsx(te,{label:a("sales.filter.group"),children:e=>t.jsx(F,{id:e,label:a("sales.filter.group"),value:u.group,onChange:n=>v(m=>({...m,group:n})),compact:!0,options:[{value:"",label:a("sales.filter.any")},{value:"in",label:a("sales.filter.inGroup")},{value:"standalone",label:a("sales.filter.standalone")}],testId:"filter-group"})}),t.jsx(te,{label:a("sales.filter.status"),children:e=>t.jsx(F,{id:e,label:a("sales.filter.status"),value:u.status,onChange:n=>v(m=>({...m,status:n==="archived"?"archived":""})),compact:!0,options:[{value:"",label:a("sales.filter.active")},{value:"archived",label:a("sales.filter.archived")}],testId:"filter-status"})}),E&&Ge?t.jsx(P,{size:"sm",onClick:()=>p(!0),"data-testid":"accounts-save-view",children:a("sales.views.save")}):null,b&&c?t.jsx(P,{size:"sm",onClick:()=>{Lt()},"data-testid":"accounts-delete-view",children:a("sales.views.delete")}):null]}):null,V&&E?t.jsx(Yt,{labels:{title:a("sales.views.saveTitle"),name:a("sales.views.name"),description:a("sales.views.description"),replace:a("sales.views.replace"),save:a("sales.action.save")},name:He,onName:e=>{st(e),_e(null)},exists:!!x?.some(e=>e.name.toLowerCase()===He.trim().toLowerCase()),error:Tt,onSubmit:e=>{e.preventDefault(),Rt()},onCancel:()=>p(!1),testId:"save-view-panel"}):null,nt?t.jsx("p",{className:"nexus-sales-note",role:"status","data-testid":"views-note",children:nt}):null,mt&&S.length?t.jsxs(Je,{label:a("sales.accounts.selected",{n:String(S.length)}),lead:a("sales.accounts.selected",{n:String(S.length)}),testId:"accounts-selection",children:[t.jsx(P,{size:"sm",onClick:()=>Ke(!0),disabled:S.length>wt,"data-testid":"accounts-transfer-selected",children:a("sales.accounts.transferSelected",{n:String(S.length)})}),t.jsx(P,{size:"sm",onClick:()=>je([]),"data-testid":"accounts-clear-selection",children:a("sales.accounts.clearSelection")}),S.length>wt?t.jsx(Oe,{tone:"danger",children:a("sales.bulk.tooMany")}):null]}):null,Et&&z?t.jsxs(at,{title:a("sales.bulk.title",{n:String(S.length)}),onCancel:()=>Ke(!1),onSubmit:e=>{e.preventDefault(),Vt()},primary:{label:a("sales.transfer.ask"),disabled:Bt||!Ce,testId:"bulk-ask"},testId:"bulk-panel",children:[t.jsx("p",{className:"nexus-sales-p",children:a("sales.bulk.body",{who:re})}),t.jsx(U,{id:"bulk-to",label:a("sales.bulk.to"),required:!0,error:Ft,children:e=>t.jsx(F,{id:e.id,label:a("sales.bulk.to"),value:Ce,onChange:Nt,placeholder:"—",options:Me.map(n=>({value:n.id,label:n.name})),testId:"bulk-to"})}),t.jsx(U,{id:"bulk-reason",label:a("sales.bulk.reason"),children:e=>t.jsx("input",{...e,className:"nexus-input",value:rt,onChange:n=>Pt(n.target.value),"data-testid":"bulk-reason"})})]}):null,lt?t.jsx("p",{className:"nexus-sales-note",role:"status","data-testid":"bulk-sent",children:a("sales.bulk.sent",{who:re,n:String(lt)})}):null,Dt&&N&&R?t.jsx(oa,{types:["account"],scope:Object.fromEntries(Object.entries(u).filter(([,e])=>e).map(([e,n])=>[e,[n]])),run:N,download:R,onCancel:()=>ct(!1),testId:"accounts-export-panel"}):null,!Ie&&C&&!J&&(s.state==="ready"||s.state==="empty")?t.jsx(Je,{children:t.jsx(kt,{tone:"quiet",onClick:()=>v(e=>({...e,status:"archived"})),"data-testid":"accounts-show-archived",children:a("sales.filter.showArchived")})}):null,t.jsx(Jt,{result:s,empty:{title:a("sales.accounts.emptyTitle"),body:oe?a("sales.accounts.emptyBody"):void 0,action:ft},deniedBody:a("sales.state.denied.body"),children:()=>t.jsx(ea,{rows:ee,columns:Mt,rowKey:e=>e.id,caption:a("sales.nav.accounts"),selected:Xe,onOpen:e=>ut(e.id),onActivate:e=>Q(xe.account(e.id)),testId:"accounts-table",empty:L?{title:a("sales.accounts.filteredEmpty",{q:L}),action:t.jsx(P,{size:"sm",onClick:()=>Y(""),children:a("sales.action.clearFilter")})}:J?{title:a("sales.accounts.noArchived"),action:t.jsx(P,{size:"sm",onClick:()=>v(e=>({...e,status:""})),children:a("sales.action.clearFilter")})}:{title:a("sales.accounts.emptyTitle")}})})]})}),dt?t.jsx(ha,{create:A,duplicates:ne,projects:Z,fields:w,provider:i,initialDraft:W,onClose:()=>Qe(!1),onCreated:e=>{Qe(!1),d?.(e)},returnFocusTo:pt.current,initialDuplicates:T,initialLookalikes:j}):H?t.jsx(ma,{account:H,contacts:r.filter(e=>e.account_id===H.id),fields:w,personName:g,onOpen:()=>Q(xe.account(H.id)),onClose:()=>ut(null),archive:ke&&oe&&H.source.kind!=="external"&&H.status!=="merged"?ke:void 0,onArchived:k}):null]})}function ma({account:s,contacts:r,fields:i,personName:B,onOpen:g,onClose:w,archive:A,onArchived:ne}){const{t:d}=tt(),[Z,q]=l.useState(!1),[o,W]=l.useState(!1),[T,j]=l.useState(null),x=s.status==="archived"?"restore":"archive";async function E(){if(A){W(!0),j(null);try{const b=await A(s.id,x);q(!1),ne?.(b)}catch(b){const D=b.body;j(D?.code==="FORBIDDEN"?d("sales.state.denied.title"):D?.code==="CONFLICT"?d(`sales.archive.conflict.${D.message??"TRANSITION_INVALID"}`):d("sales.state.error.title"))}finally{W(!1)}}}return t.jsxs(aa,{kind:d("sales.kind.account"),title:s.name,subtitle:t.jsx(_t,{source:s.source}),primary:t.jsx(P,{variant:"primary",onClick:g,"data-testid":"inspector-open",children:d("sales.action.open")}),onClose:w,testId:"account-inspector",children:[s.status==="archived"?t.jsx(St,{tone:"muted",testId:"archived-chip",children:d("sales.status.archived")}):null,A?Z?t.jsxs(at,{title:d("sales.archive.title",{name:s.name}),danger:!0,onCancel:()=>q(!1),primary:{label:d("sales.action.archive"),onClick:()=>{E()},disabled:o,testId:"archive-confirm"},testId:"archive-panel",children:[t.jsx("p",{className:"nexus-sales-p",children:d("sales.archive.body")}),T?t.jsx(Oe,{tone:"danger",children:T}):null]}):t.jsxs(t.Fragment,{children:[t.jsx(Je,{children:t.jsx(kt,{tone:"quiet",onClick:()=>x==="archive"?q(!0):void E(),disabled:o,"data-testid":`account-${x}`,children:d(`sales.action.${x}`)})}),T?t.jsx(Oe,{tone:"danger",children:T}):null]}):null,t.jsxs(Ye,{idiom:"rule",title:d("sales.section.identity"),children:[t.jsx(M,{label:d("sales.field.legalName"),children:s.legal_name}),s.tax_id?t.jsx(M,{label:d("sales.field.taxId"),children:s.tax_id}):null,t.jsx(M,{label:d("sales.field.city"),children:[s.city,s.country].filter(Boolean).join(" · ")}),t.jsx(M,{label:d("sales.field.relationship"),children:d(`sales.relationship.${s.relationship}`)}),s.industry?t.jsx(M,{label:d("sales.field.industry"),children:s.industry}):null,t.jsx(ia,{defs:i,values:s.custom_fields,testIdPrefix:"account-cf"})]}),t.jsxs(Ye,{idiom:"rule",title:d("sales.section.owners"),children:[t.jsx(M,{label:d("sales.field.owner"),children:B(s.owner_id)}),s.backup_owner_id?t.jsx(M,{label:d("sales.field.backup"),children:B(s.backup_owner_id)}):null]}),t.jsx(Ye,{idiom:"rule",title:d("sales.section.contacts"),aside:String(r.length),children:r.map(b=>t.jsx(M,{label:b.role,children:b.name},b.id))})]})}function ha({create:s,duplicates:r,projects:i,fields:B,provider:g=null,initialDraft:w=null,onClose:A,onCreated:ne,returnFocusTo:d,initialDuplicates:Z,initialLookalikes:q}){const{t:o}=tt(),{href:W,Link:T}=bt(),j=l.useId(),[x,E]=l.useState(w?.name??(Z?.length||q?.length?"Horizon Hotels":"")),[b,D]=l.useState(w?.tax_id??""),[z,Me]=l.useState(w?.website??""),[re,$e]=l.useState(w?.city??""),We=i.length>1,[X,be]=l.useState(w?.project_id??i[0]?.id??"");l.useEffect(()=>{!X&&i[0]&&be(i[0].id)},[i,X]);const[ke,k]=l.useState(null),[C,N]=l.useState(Z??null),[R,ie]=l.useState(q??[]),[a,Se]=l.useState(!1),[Q,ze]=l.useState(w?.custom_fields??{}),[L,Y]=l.useState({});async function u(){const c=x.trim(),f=b.trim()||void 0;if(!r||!c&&!f){ie([]);return}try{ie(await r({name:c,tax_id:f}))}catch{ie([])}}async function v(c=!1){if(!x.trim()){k(o("sales.form.nameRequired"));return}const f=Wt(B,vt(Q));if(f.length){Y(Object.fromEntries(f.map(V=>[V.key,o(`sales.fields.issue.${V.code}`)]))),k(o("sales.form.invalid"));return}Y({}),k(null),Se(!0);try{const V=await s({name:x.trim(),tax_id:b.trim()||void 0,city:re.trim()||void 0,website:z.trim()||void 0,project_id:X||void 0,custom_fields:vt(Q),force:c});ne(V)}catch(V){const p=V.body;p?.code==="DUPLICATE"&&p.candidates?N(p.candidates):p?.code==="VALIDATION"&&p.message?.startsWith("custom_fields.")?(Y({[p.message.slice(14)]:o("sales.fields.issue.type")}),k(o("sales.form.invalid"))):p?.code==="VALIDATION"&&p.source_message?k(o("sales.account.newRejected",{provider:g??o("sales.brand"),field:ca(p.message??"",o),message:p.source_message})):p?.code==="VALIDATION"?k(p.message==="project_id"?o("sales.form.projectRequired"):o("sales.form.invalid")):p?.code==="CONFLICT"&&p.message==="WRITE_UNKNOWN"?k(o("sales.account.newUnknown",{provider:g??o("sales.brand")})):p?.code==="CONFLICT"&&p.message==="NO_OPERATION"?k(o("sales.account.newNoOperation",{provider:g??o("sales.brand")})):p?.code==="CONFLICT"&&p.message==="PENDING_APPROVAL"?k(o("sales.account.newPendingApproval",{provider:g??o("sales.brand")})):p?.code==="FORBIDDEN"?k(o("sales.state.denied.title")):k(o("sales.state.error.title"))}finally{Se(!1)}}return t.jsxs(ta,{kind:o("sales.kind.account"),title:o("sales.accounts.newTitle"),onClose:A,onSubmit:c=>{c.preventDefault(),C||v()},primary:{label:o("sales.action.create"),testId:"account-create",disabled:a||!!C},error:ke,returnFocusTo:d,testId:"account-form",children:[t.jsx(U,{id:`${j}-name`,label:o("sales.field.name"),required:!0,children:c=>t.jsx("input",{...c,className:"nexus-input",value:x,onChange:f=>{E(f.target.value),N(null)},onBlur:()=>{u()},"data-testid":"account-name",autoFocus:!0})}),R.length&&!C?t.jsx(Oe,{children:t.jsxs("span",{"data-testid":"account-lookalikes",children:[o("sales.duplicate.lookalike",{n:String(R.length)})," ",R.slice(0,3).map((c,f)=>t.jsxs("span",{children:[f?" · ":"",t.jsx(T,{href:W(xe.account(c.id)),className:"nexus-link","data-testid":`lookalike-${c.id}`,children:c.name})]},c.id))]})}):null,t.jsx(U,{id:`${j}-tax`,label:o("sales.field.taxId"),hint:o("sales.form.taxHint"),children:c=>t.jsx("input",{...c,className:"nexus-input",value:b,onChange:f=>{D(f.target.value),N(null)},onBlur:()=>{u()},"data-testid":"account-tax",inputMode:"numeric"})}),t.jsx(U,{id:`${j}-web`,label:o("sales.field.website"),children:c=>t.jsx("input",{...c,className:"nexus-input",value:z,onChange:f=>Me(f.target.value),"data-testid":"account-website",inputMode:"url"})}),t.jsx(U,{id:`${j}-city`,label:o("sales.field.city"),children:c=>t.jsx("input",{...c,className:"nexus-input",value:re,onChange:f=>$e(f.target.value),"data-testid":"account-city"})}),We?t.jsx(U,{id:`${j}-project`,label:o("sales.field.project"),hint:o("sales.form.projectHint"),children:c=>t.jsx(F,{id:c.id,label:o("sales.field.project"),value:X,onChange:be,options:i.map(f=>({value:f.id,label:f.name})),testId:"account-project"})}):null,t.jsx(ra,{defs:B,values:Q,onChange:ze,issues:L,testIdPrefix:"account-cf"}),C?t.jsxs(at,{title:o("sales.duplicate.title",{n:String(C.length)}),onCancel:()=>N(null),primary:{label:o("sales.duplicate.createAnyway"),onClick:()=>{v(!0)},testId:"duplicate-create-anyway"},cancelLabel:o("sales.action.back"),testId:"duplicate-panel",children:[t.jsx("ul",{className:"nexus-sales-dup-list",children:C.map(c=>t.jsxs("li",{children:[t.jsx(T,{href:W(xe.account(c.id)),className:"nexus-link is-row","data-testid":`duplicate-${c.id}`,children:c.name}),t.jsxs("span",{className:"nexus-sales-muted",children:[" · ",c.legal_name,c.tax_id?` · ${c.tax_id}`:""," · ",c.city]})]},c.id))}),t.jsx("p",{className:"nexus-sales-muted nexus-sales-p",children:o("sales.duplicate.body")})]}):null]})}jt.__docgenInfo={description:"Accounts — DS-7001 *Discovery list → Inspector* · DS-7010 *List with controls* (the toolbar appears above 12 rows,\nD1228) · DS-7002 *Create in the Inspector* with the duplicate review as an `ActionPanel` (). In the connected\nworld accounts are the source's: there is no *New account* — a `Restriction` says so (DS-0004), never a dead button.\nThe Inspector is the suite's right column (DS-2007, ): the page sits inside the split, the panel beside it.",methods:[],displayName:"AccountsScreen",props:{view:{required:!0,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"Array",elements:[{name:"Account"}],raw:"Account[]"}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:""},contacts:{required:!1,tsType:{name:"Array",elements:[{name:"Contact"}],raw:"Contact[]"},description:"",defaultValue:{value:"[]",computed:!1}},provider:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},writeMode:{required:!0,tsType:{name:"union",raw:'"native" | "read_only" | "approval_required" | "policy_controlled"',elements:[{name:"literal",value:'"native"'},{name:"literal",value:'"read_only"'},{name:"literal",value:'"approval_required"'},{name:"literal",value:'"policy_controlled"'}]},description:""},personName:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => string",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"string"}}},description:""},fields:{required:!1,tsType:{name:"Array",elements:[{name:"CustomFieldDef"}],raw:"CustomFieldDef[]"},description:": the account record type's custom fields — the form asks them, the inspector shows them",defaultValue:{value:"[]",computed:!1}},create:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: NewAccountInput) => Promise<Account>",signature:{arguments:[{type:{name:"NewAccountInput"},name:"input"}],return:{name:"Promise",elements:[{name:"Account"}],raw:"Promise<Account>"}}},description:'the write — the BFF in the app, a scripted answer in a story; rejects with `{ code: "DUPLICATE", candidates }`'},onCreated:{required:!1,tsType:{name:"signature",type:"function",raw:"(a: Account) => void",signature:{arguments:[{type:{name:"Account"},name:"a"}],return:{name:"void"}}},description:""},duplicates:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: { name: string; tax_id?: string }) => Promise<Account[]>",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ name: string; tax_id?: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"tax_id",value:{name:"string",required:!1}}]}},name:"input"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"Account"}],raw:"Account[]"}],raw:"Promise<Account[]>"}}},description:" before the create: the candidates the create would refuse on, asked quietly when Name or Tax id loses focus"},projects:{required:!1,tsType:{name:"unknown"},description:"the Projects the person may create in (): the form asks which only when there is more than one",defaultValue:{value:"[]",computed:!1}},initialSelected:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"a story may open the panel on a row or on the form",defaultValue:{value:"null",computed:!1}},initialCreating:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},initialDraft:{required:!1,tsType:{name:"union",raw:'Omit<NewAccountInput, "force"> | null',elements:[{name:"Omit",elements:[{name:"NewAccountInput"},{name:"literal",value:'"force"'}],raw:'Omit<NewAccountInput, "force">'},{name:"null"}]},description:`S4-B close-out (P-57 b ·  c): the kept draft of a declined (or not-saved) create the form opens from — a
 NEW request with the person's words back in the fields; nothing of the old intent travels`,defaultValue:{value:"null",computed:!1}},initialDuplicates:{required:!1,tsType:{name:"Array",elements:[{name:"Account"}],raw:"Account[]"},description:"a story: the create refused — the duplicate review open"},initialLookalikes:{required:!1,tsType:{name:"Array",elements:[{name:"Account"}],raw:"Account[]"},description:"a story: the quiet hint under Name — candidates the blur check found"},views:{required:!1,tsType:{name:"Array",elements:[{name:"SavedView"}],raw:"SavedView[]"},description:"the person's own views of this screen (P-24); absent = the door is not offered"},saveView:{required:!1,tsType:{name:"signature",type:"function",raw:'(input: Partial<SavedView> & { screen: "accounts"; name: string }) => Promise<SavedView>',signature:{arguments:[{type:{name:"intersection",raw:'Partial<SavedView> & { screen: "accounts"; name: string }',elements:[{name:"Partial",elements:[{name:"SavedView"}],raw:"Partial<SavedView>"},{name:"signature",type:"object",raw:'{ screen: "accounts"; name: string }',signature:{properties:[{key:"screen",value:{name:"literal",value:'"accounts"',required:!0}},{key:"name",value:{name:"string",required:!0}}]}}]},name:"input"}],return:{name:"Promise",elements:[{name:"SavedView"}],raw:"Promise<SavedView>"}}},description:""},deleteView:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => Promise<unknown>",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"Promise",elements:[{name:"unknown"}],raw:"Promise<unknown>"}}},description:""},onViewsChanged:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},bulkTransfer:{required:!1,tsType:{name:"signature",type:"function",raw:'(input: BulkTransferInput) => Promise<{ outcome: "pending_approval"; approval_ref: string }>',signature:{arguments:[{type:{name:"BulkTransferInput"},name:"input"}],return:{name:"Promise",elements:[{name:"signature",type:"object",raw:'{ outcome: "pending_approval"; approval_ref: string }',signature:{properties:[{key:"outcome",value:{name:"literal",value:'"pending_approval"',required:!0}},{key:"approval_ref",value:{name:"string",required:!0}}]}}],raw:'Promise<{ outcome: "pending_approval"; approval_ref: string }>'}}},description:": n accounts → one approval; absent = rows cannot be selected"},people:{required:!1,tsType:{name:"unknown"},description:"the colleagues an account may go to, and who approves",defaultValue:{value:"[]",computed:!1}},approverName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},initialFilters:{required:!1,tsType:{name:"Partial",elements:[{name:"Filters"}],raw:"Partial<Filters>"},description:"a story: filters open · rows selected · the save-view panel"},initialChecked:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},initialSaveView:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},initialBulk:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},archive:{required:!1,tsType:{name:"signature",type:"function",raw:'(id: string, door: "archive" | "restore") => Promise<Account>',signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"union",raw:'"archive" | "restore"',elements:[{name:"literal",value:'"archive"'},{name:"literal",value:'"restore"'}]},name:"door"}],return:{name:"Promise",elements:[{name:"Account"}],raw:"Promise<Account>"}}},description:"archive or restore one account from its row (the page's `⋯` has the same door); absent = not offered"},onArchived:{required:!1,tsType:{name:"signature",type:"function",raw:"(a: Account) => void",signature:{arguments:[{type:{name:"Account"},name:"a"}],return:{name:"void"}}},description:""},onShowArchived:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"v"}],return:{name:"void"}}},description:"the *Archived* filter needs the archived rows — the page re-reads with `include_archived`"},runExport:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: RunExportInput) => Promise<ExportRecord>",signature:{arguments:[{type:{name:"RunExportInput"},name:"input"}],return:{name:"Promise",elements:[{name:"ExportRecord"}],raw:"Promise<ExportRecord>"}}},description:"`sales.export` (the lead's): the list as a file; absent = the door is not offered"},download:{required:!1,tsType:{name:"signature",type:"function",raw:"(record: ExportRecord) => Promise<void>",signature:{arguments:[{type:{name:"ExportRecord"},name:"record"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},initialExport:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const fa=async()=>{throw{body:{code:"DUPLICATE",candidates:[]}}},Ta={title:"Apps/NexSales/Accounts",component:jt,parameters:{ds:"DS-7010",layout:"fullscreen",workbench:{ns:"sales",path:"/sales/accounts"}},args:{personName:zt,provider:et,writeMode:"read_only",create:fa,onCreated:()=>{}}},G=K("oksana"),$=K("nazar"),Ae={name:"Populated · connected (BAS)",args:{view:y(h(G)),contacts:ae(G)}},Te={name:"Row selected · Inspector",args:{view:y(h(G)),contacts:ae(G),initialSelected:"acc_agrolan"}},Ee={name:"Populated · native (New account)",args:{provider:null,writeMode:"native",view:y(h($)),contacts:ae($)}},le={name:"New account · the form",args:{provider:null,writeMode:"native",view:y(h($)),initialCreating:!0,duplicates:async()=>[]}},ce={name:"New account · from the kept draft (after a decline)",args:{provider:et,writeMode:"approval_required",view:y(h(G)),initialCreating:!0,initialDraft:{name:"Horizon Spa",tax_id:"45678901",city:"Львів",website:"https://horizon.example"},duplicates:async()=>[]},play:async({canvasElement:s})=>{const r=i=>s.querySelector(`[data-testid="${i}"]`);if(r("account-name")?.value!=="Horizon Spa"||r("account-tax")?.value!=="45678901"||r("account-city")?.value!=="Львів")throw new globalThis.Error("the form did not open from the kept draft")}},ue={name:"New account · refused by the source (the quoted words)",args:{provider:et,writeMode:"policy_controlled",view:y(h(G)),initialCreating:!0,duplicates:async()=>[],create:async()=>{throw new Ht(422,{code:"VALIDATION",message:"tax_id",source_message:"Код ЄДРПОУ має містити 8 цифр"})}},play:async({canvasElement:s})=>{const r=w=>s.querySelector(`[data-testid="${w}"]`),i=r("account-name");Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value")?.set?.call(i,"Zhytomyr Timber"),i.dispatchEvent(new Event("input",{bubbles:!0})),r("account-create")?.click();const g=r("account-form");for(let w=0;w<50&&!g?.textContent?.includes("Код ЄДРПОУ");w+=1)await new Promise(A=>setTimeout(A,20));if(!g?.textContent?.includes("BAS refused Tax id: “Код ЄДРПОУ має містити 8 цифр”"))throw new globalThis.Error("the source's quoted refusal did not appear on the form");if(r("account-name").value!=="Zhytomyr Timber")throw new globalThis.Error("the draft was not kept")}},de={name:"New account · a look-alike under Name",args:{provider:null,writeMode:"native",view:y(h($)),initialCreating:!0,initialLookalikes:h($).slice(0,1)}},pe={name:"New account form · several Projects",args:{provider:null,writeMode:"native",view:y(h($)),initialCreating:!0,projects:[{id:"prj_general",name:"General"},{id:"prj_sales_eu",name:"Sales · EU"}]}},me={name:"New account form · custom fields",args:{provider:null,writeMode:"native",view:y(h(G)),fields:xt(K("yuliia")).schemas.find(s=>s.record_type==="account").fields,initialCreating:!0}},Ne={name:"Row selected · custom fields in the Inspector",args:{view:y(h(K("ihor"))),contacts:ae(K("ihor")),fields:xt(K("ihor")).schemas.find(s=>s.record_type==="account").fields,initialSelected:"acc_poltava"}},Pe={name:"Duplicates found",args:{provider:null,writeMode:"native",view:y(h($)),initialCreating:!0,initialDuplicates:h($).slice(0,2)}},Fe={args:{provider:null,writeMode:"native",view:se("empty")}},he={name:"Empty · everything archived (the door stays)",args:{provider:null,writeMode:"native",view:se("empty"),onShowArchived:()=>{}}},Be={args:{view:se("loading")}},qe={args:{view:se("error")}},De={args:{view:se("denied")}},Re={args:{view:se("offline")}},_=K("ihor"),Ct=[{id:"oksana",name:"Oksana Marchenko"},{id:"ihor",name:"Ihor Savchuk"},{id:"taras",name:"Taras Melnyk"}],It=[{id:"sv_1",screen:"accounts",name:"My prospects",filters:{relationship:"prospect",owner:"oksana"},columns:["name"]}],fe={name:"Filters · relationship · owner · registry · contract · group",args:{view:y(h(_)),contacts:ae(_),views:It,saveView:async s=>({id:"sv_2",screen:"accounts",name:s.name,filters:s.filters??{},columns:s.columns??[]}),deleteView:async()=>({}),initialFilters:{relationship:"customer"}}},Le={name:"Save this view (SaveViewPanel)",args:{view:y(h(_)),views:It,saveView:async s=>({id:"sv_2",screen:"accounts",name:s.name,filters:s.filters??{},columns:s.columns??[]}),initialFilters:{relationship:"prospect"},initialSaveView:!0}},ve={name:"Bulk transfer · rows selected",args:{view:y(h(_)),contacts:ae(_),bulkTransfer:async()=>({outcome:"pending_approval",approval_ref:"nexus://tasks/work_item/WI-2601"}),people:Ct,approverName:"Ihor Savchuk",initialChecked:["acc_agrolan","acc_dnipro","acc_kyivtex"]}},Ve={name:"Bulk transfer · the panel (one approval)",args:{view:y(h(_)),bulkTransfer:async()=>({outcome:"pending_approval",approval_ref:"nexus://tasks/work_item/WI-2601"}),people:Ct,approverName:"Ihor Savchuk",initialChecked:["acc_agrolan","acc_dnipro","acc_kyivtex"],initialBulk:!0}},At=async(s,r)=>({...h(_,null,!0).find(i=>i.id===s),status:r==="archive"?"archived":"active"}),va={runExport:async()=>$t,download:async()=>{}},ye={name:"Filter · Archived (restore from the Inspector)",args:{view:y([...h(_),{...h(_)[0],id:"acc_old",name:"Old Mill LLC",status:"archived"}]),initialFilters:{status:"archived"},initialSelected:"acc_old",archive:At}},ge={name:"Row · Archive (the question)",args:{view:y(h(_)),initialSelected:"acc_agrolan",archive:At}},we={name:"Export this list (the panel)",args:{view:y(h(_)),...va,initialExport:!0}},Ea=["Connected","WithInspector","Native","Creating","CreatingFromKeptDraft","CreatingRefusedBySource","CreatingLookalike","CreatingInSeveralProjects","CreatingWithFields","InspectorWithFields","Duplicates","Empty","EmptyWithArchive","Loading","Error","Denied","Offline","Filters","SaveView","Selection","BulkTransfer","Archived","ArchiveAsk","Export"];Ae.parameters={...Ae.parameters,docs:{...Ae.parameters?.docs,source:{originalSource:`{
  name: "Populated · connected (BAS)",
  args: {
    view: ready(store.accounts(connected)),
    contacts: store.contacts(connected)
  }
}`,...Ae.parameters?.docs?.source}}};Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`{
  name: "Row selected · Inspector",
  args: {
    view: ready(store.accounts(connected)),
    contacts: store.contacts(connected),
    initialSelected: "acc_agrolan"
  }
}`,...Te.parameters?.docs?.source}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`{
  name: "Populated · native (New account)",
  args: {
    provider: null,
    writeMode: "native",
    view: ready(store.accounts(native)),
    contacts: store.contacts(native)
  }
}`,...Ee.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  name: "New account · the form",
  args: {
    provider: null,
    writeMode: "native",
    view: ready(store.accounts(native)),
    initialCreating: true,
    duplicates: async () => []
  }
}`,...le.parameters?.docs?.source},description:{story:"DS-7002 · : *New account* opens the Inspector on the form — the suite's one way in (NexCore's invite, NexCare's queue).",...le.parameters?.docs?.description}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  name: "New account · from the kept draft (after a decline)",
  args: {
    provider: PROVIDER,
    writeMode: "approval_required",
    view: ready(store.accounts(connected)),
    initialCreating: true,
    initialDraft: {
      name: "Horizon Spa",
      tax_id: "45678901",
      city: "Львів",
      website: "https://horizon.example"
    },
    duplicates: async () => []
  },
  play: async ({
    canvasElement
  }) => {
    const by = (id: string) => canvasElement.querySelector<HTMLInputElement>(\`[data-testid="\${id}"]\`);
    if (by("account-name")?.value !== "Horizon Spa" || by("account-tax")?.value !== "45678901" || by("account-city")?.value !== "Львів") throw new globalThis.Error("the form did not open from the kept draft");
  }
}`,...ce.parameters?.docs?.source},description:{story:`S4-B close-out (P-57 b ·  c): Today's *declined — the draft is kept* opens the form from the kept draft — the
 person's words back in the fields, a NEW request (nothing of the old intent travels).`,...ce.parameters?.docs?.description}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`{
  name: "New account · refused by the source (the quoted words)",
  args: {
    provider: PROVIDER,
    writeMode: "policy_controlled",
    view: ready(store.accounts(connected)),
    initialCreating: true,
    duplicates: async () => [],
    create: async () => {
      throw new store.StoreError(422, {
        code: "VALIDATION",
        message: "tax_id",
        source_message: "Код ЄДРПОУ має містити 8 цифр"
      });
    }
  },
  play: async ({
    canvasElement
  }) => {
    const by = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    const name = by("account-name") as HTMLInputElement;
    const set = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set;
    set?.call(name, "Zhytomyr Timber");
    name.dispatchEvent(new Event("input", {
      bubbles: true
    }));
    by("account-create")?.click();
    const form = by("account-form");
    for (let i = 0; i < 50 && !form?.textContent?.includes("Код ЄДРПОУ"); i += 1) await new Promise(r => setTimeout(r, 20));
    if (!form?.textContent?.includes("BAS refused Tax id: “Код ЄДРПОУ має містити 8 цифр”")) throw new globalThis.Error("the source's quoted refusal did not appear on the form");
    if ((by("account-name") as HTMLInputElement).value !== "Zhytomyr Timber") throw new globalThis.Error("the draft was not kept");
  }
}`,...ue.parameters?.docs?.source},description:{story:"S4-B close-out ( `rejected`): the source refuses a field in its own words — the form names the field by its label\n and quotes the source (text, never markup); the draft stays. Native world: NexSales is the one refusing.",...ue.parameters?.docs?.description}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
  name: "New account · a look-alike under Name",
  args: {
    provider: null,
    writeMode: "native",
    view: ready(store.accounts(native)),
    initialCreating: true,
    initialLookalikes: store.accounts(native).slice(0, 1)
  }
}`,...de.parameters?.docs?.source},description:{story:", quietly: Name lost focus and a look-alike exists — a hint under the field with the record as a link; nothing is blocked",...de.parameters?.docs?.description}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
  name: "New account form · several Projects",
  args: {
    provider: null,
    writeMode: "native",
    view: ready(store.accounts(native)),
    initialCreating: true,
    projects: [{
      id: "prj_general",
      name: "General"
    }, {
      id: "prj_sales_eu",
      name: "Sales · EU"
    }]
  }
}`,...pe.parameters?.docs?.source},description:{story:": the person works in more than one Project — the form asks which one the account lives in (kit `Select`).",...pe.parameters?.docs?.description}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`{
  name: "New account form · custom fields",
  args: {
    provider: null,
    writeMode: "native",
    view: ready(store.accounts(connected)),
    fields: store.fields(as("yuliia")).schemas.find(s => s.record_type === "account")!.fields,
    initialCreating: true
  }
}`,...me.parameters?.docs?.source},description:{story:": the organization's custom fields follow the account's own on the form — the forwarder preset's (schema order); a financial one only for a head or an admin.",...me.parameters?.docs?.description}}};Ne.parameters={...Ne.parameters,docs:{...Ne.parameters?.docs,source:{originalSource:`{
  name: "Row selected · custom fields in the Inspector",
  args: {
    view: ready(store.accounts(as("ihor"))),
    contacts: store.contacts(as("ihor")),
    fields: store.fields(as("ihor")).schemas.find(s => s.record_type === "account")!.fields,
    initialSelected: "acc_poltava"
  }
}`,...Ne.parameters?.docs?.source}}};Pe.parameters={...Pe.parameters,docs:{...Pe.parameters?.docs,source:{originalSource:`{
  name: "Duplicates found",
  args: {
    provider: null,
    writeMode: "native",
    view: ready(store.accounts(native)),
    initialCreating: true,
    initialDuplicates: store.accounts(native).slice(0, 2)
  }
}`,...Pe.parameters?.docs?.source}}};Fe.parameters={...Fe.parameters,docs:{...Fe.parameters?.docs,source:{originalSource:`{
  args: {
    provider: null,
    writeMode: "native",
    view: state("empty")
  }
}`,...Fe.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`{
  name: "Empty · everything archived (the door stays)",
  args: {
    provider: null,
    writeMode: "native",
    view: state("empty"),
    onShowArchived: () => {}
  }
}`,...he.parameters?.docs?.source},description:{story:" (e): every account archived — the list is empty, the quiet *Show archived* line stays.",...he.parameters?.docs?.description}}};Be.parameters={...Be.parameters,docs:{...Be.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("loading")
  }
}`,...Be.parameters?.docs?.source}}};qe.parameters={...qe.parameters,docs:{...qe.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("error")
  }
}`,...qe.parameters?.docs?.source}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("denied")
  }
}`,...De.parameters?.docs?.source}}};Re.parameters={...Re.parameters,docs:{...Re.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("offline")
  }
}`,...Re.parameters?.docs?.source}}};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`{
  name: "Filters · relationship · owner · registry · contract · group",
  args: {
    view: ready(store.accounts(head)),
    contacts: store.contacts(head),
    views,
    saveView: async i => ({
      id: "sv_2",
      screen: "accounts",
      name: i.name,
      filters: i.filters ?? {},
      columns: i.columns ?? []
    }),
    deleteView: async () => ({}),
    initialFilters: {
      relationship: "customer"
    }
  }
}`,...fe.parameters?.docs?.source},description:{story:"DS-7013: more than three closed filters leave the toolbar for a panel; a saved view (DS-3037) is these filters under a name — private (P-24).",...fe.parameters?.docs?.description}}};Le.parameters={...Le.parameters,docs:{...Le.parameters?.docs,source:{originalSource:`{
  name: "Save this view (SaveViewPanel)",
  args: {
    view: ready(store.accounts(head)),
    views,
    saveView: async i => ({
      id: "sv_2",
      screen: "accounts",
      name: i.name,
      filters: i.filters ?? {},
      columns: i.columns ?? []
    }),
    initialFilters: {
      relationship: "prospect"
    },
    initialSaveView: true
  }
}`,...Le.parameters?.docs?.source}}};ve.parameters={...ve.parameters,docs:{...ve.parameters?.docs,source:{originalSource:`{
  name: "Bulk transfer · rows selected",
  args: {
    view: ready(store.accounts(head)),
    contacts: store.contacts(head),
    bulkTransfer: async () => ({
      outcome: "pending_approval",
      approval_ref: "nexus://tasks/work_item/WI-2601"
    }),
    people,
    approverName: "Ihor Savchuk",
    initialChecked: ["acc_agrolan", "acc_dnipro", "acc_kyivtex"]
  }
}`,...ve.parameters?.docs?.source},description:{story:": select n → *Transfer n* → one approval item listing them all; the head of sales approves as for one.",...ve.parameters?.docs?.description}}};Ve.parameters={...Ve.parameters,docs:{...Ve.parameters?.docs,source:{originalSource:`{
  name: "Bulk transfer · the panel (one approval)",
  args: {
    view: ready(store.accounts(head)),
    bulkTransfer: async () => ({
      outcome: "pending_approval",
      approval_ref: "nexus://tasks/work_item/WI-2601"
    }),
    people,
    approverName: "Ihor Savchuk",
    initialChecked: ["acc_agrolan", "acc_dnipro", "acc_kyivtex"],
    initialBulk: true
  }
}`,...Ve.parameters?.docs?.source}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`{
  name: "Filter · Archived (restore from the Inspector)",
  args: {
    view: ready([...store.accounts(head), {
      ...store.accounts(head)[0],
      id: "acc_old",
      name: "Old Mill LLC",
      status: "archived" as const
    }]),
    initialFilters: {
      status: "archived"
    },
    initialSelected: "acc_old",
    archive
  }
}`,...ye.parameters?.docs?.source},description:{story:": the *Archived* filter shows only the archived rows (a muted dot in place of the relationship); the Inspector offers *Restore*.",...ye.parameters?.docs?.description}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`{
  name: "Row · Archive (the question)",
  args: {
    view: ready(store.accounts(head)),
    initialSelected: "acc_agrolan",
    archive
  }
}`,...ge.parameters?.docs?.source},description:{story:"P-27: archive asks once — an `ActionPanel` (danger) in the Inspector; never a delete.",...ge.parameters?.docs?.description}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`{
  name: "Export this list (the panel)",
  args: {
    view: ready(store.accounts(head)),
    ...exportDoors,
    initialExport: true
  }
}`,...we.parameters?.docs?.source},description:{story:": *Export* in the toolbar (the lead's door) → the format → the receipt with *Download*.",...we.parameters?.docs?.description}}};export{ge as ArchiveAsk,ye as Archived,Ve as BulkTransfer,Ae as Connected,le as Creating,ce as CreatingFromKeptDraft,pe as CreatingInSeveralProjects,de as CreatingLookalike,ue as CreatingRefusedBySource,me as CreatingWithFields,De as Denied,Pe as Duplicates,Fe as Empty,he as EmptyWithArchive,qe as Error,we as Export,fe as Filters,Ne as InspectorWithFields,Be as Loading,Ee as Native,Re as Offline,Le as SaveView,ve as Selection,Te as WithInspector,Ea as __namedExportsOrder,Ta as default};
