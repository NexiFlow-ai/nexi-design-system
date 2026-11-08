import{P as Xa,a as Vn}from"./fixtures-B65KySee.js";import{f as Qn,g as En,p as $n,r as i,c as u,b as l,a as Ja,h as en,l as re}from"./scene-CqiggoaI.js";import{ak as Mn,ao as On,r as o,j as e,ac as Hn,V as Un,A as Wa,X as f,Z as Ga,q as he,L as Wn,a as A,B as z,S as Gn,M as Yn,I as Zn,m as Ya,n as N}from"./iframe-C_4ax-Jm.js";import{b as Kn,i as ma,c as Za,t as Xn,d as R,m as Jn}from"./format-BBzwDLam.js";import{r as b,d as V}from"./routes-DgN3bgVk.js";import{c as et,a as at}from"./CustomFields-Cxf7J07v.js";import{A as nt}from"./AddDocumentForm-CqIPofoy.js";import{M as tt,G as st,c as rt,T as it,b as ot,R as ct,N as lt,a as ut,C as dt}from"./Requisites-DiZXmvJx.js";import{E as mt}from"./EditAccountForm-CsxiFfIa.js";import{L as pt,a as gt}from"./LogInteractionForm-DZlDlkkf.js";import{N as vt}from"./NewContactForm-tbrb7SNh.js";import{N as ht}from"./NewQuoteForm-Cso4OZbM.js";import{S as Ka}from"./SourceChip-DFGcc6Vx.js";import{a as ft,W as fe}from"./WorkRows-DShgTDfa.js";import{q as yt}from"./QuotesScreen-By4ibhqT.js";import"./personas-BIiIeh3_.js";import"./preload-helper-PPVm8Dsz.js";import"./flags--SfV1VDA.js";import"./types-D9fO6RJU.js";import"./SaveLadder-8DhFuzkV.js";import"./plus-Dc-VMSiJ.js";import"./external-link-BxhqZ-kj.js";import"./QuoteLadder-TIx9b8de.js";function Q(s,m){return s.find(c=>c.entity===m)??{entity:m,owner:"native",write_mode:"native",cache:"none",migration_required:!1}}function an({view:s,provider:m,personName:c,personaId:ga,canAct:g,approverName:Ue,save:rn,reconcile:on,resolveConflict:va,onSaved:k,createContact:oe,contactFields:ha=[],editAccount:D,createQuote:fa,addDocument:ya,initialEdit:cn=!1,initialNewQuote:ln=!1,initialForRequest:wa,initialNewDocument:un=!1,initialLog:dn=!1,initialLadder:mn,initialSummary:pn,initialTransfer:gn=!1,initialNewContact:vn=!1,initialView:hn="activity",isLead:j=!1,people:fn=[],accounts:We=[],verifyBankAccount:yn,createContract:ka,transitionContract:wn,mergeAccount:Ge,readChanges:xa,initialContract:kn=null,initialNewContract:xn=!1,initialChanges:bn=!1,initialMerge:_n=!1,archiveAccount:F,initialArchive:jn=!1}){const{t:n,locale:x}=Mn(),{href:T,Link:Ye}=On(),[ce,Ze]=o.useState(dn),[d,le]=o.useState(null),[ba,Ke]=o.useState(vn),_a=o.useRef(null),[Nn,Xe]=o.useState(gn),[ja,Je]=o.useState(cn),[qn,Cn]=o.useState(!1),[Na,ea]=o.useState(ln),[qa,ue]=o.useState(()=>wa&&s.state==="ready"?s.data.work.requests.find(r=>r.id===wa)??null:null),aa=o.useRef(null),[Ca,na]=o.useState(un),ta=o.useRef(null),[Sa,sa]=o.useState(xn),ra=o.useRef(null),[ia,de]=o.useState(kn),[Ia,Aa]=o.useState(bn),[Da,oa]=o.useState(null),[Sn,ca]=o.useState(_n),[Fa,In]=o.useState(null),[Ta,la]=o.useState(jn),[Pa,La]=o.useState(!1),[me,Ba]=o.useState(null),[za,An]=o.useState(null);async function Ra(r,t){if(F){La(!0),Ba(null);try{await F(r,t),la(!1),An(n(t==="archive"?"sales.archive.done":"sales.archive.restored")),k()}catch(ge){const C=ge.body;Ba(C?.code==="FORBIDDEN"?n("sales.state.denied.title"):C?.code==="CONFLICT"?n(`sales.archive.conflict.${C.message??"TRANSITION_INVALID"}`):n("sales.state.error.title"))}finally{La(!1)}}}const[pe,Dn]=o.useState(null),h=r=>{Je(r==="edit"),Ke(r==="contact"),ea(r==="quote"),r!=="quote"&&ue(null),na(r==="document"),sa(r==="contract"),Aa(r==="changes"),r&&(le(null),de(null))},Fn=()=>{if(h("changes"),!xa)return;oa({rows:[],state:"loading"});const r=s.state==="ready"?s.data.account.id:"";xa(r).then(t=>oa({rows:t}),()=>oa({rows:[],state:"error"}))},[Tn,Pn]=o.useState(!1),[_,q]=o.useState(hn),Va=o.useRef(null),[Qa,Ea]=o.useState(!1);o.useEffect(()=>{!ce&&Qa&&(Va.current?.focus(),Ea(!1))},[ce,Qa]);const $a=r=>{Ze(!1),r&&Ea(!0)},v=s.state==="ready"?s.data:null,Ln=o.useMemo(()=>{if(!v)return[];const r=[{key:"activity",label:n("sales.account.view.activity"),count:v.interactions.length+v.follow_ups.length},{key:"deals",label:n("sales.account.view.deals"),count:v.work.deals.length+v.work.requests.length+v.work.leads.length}];return v.hidden.includes("quotes")||r.push({key:"quotes",label:n("sales.account.view.quotes"),count:v.quotes.length}),v.hidden.includes("contracts")||r.push({key:"contracts",label:n("sales.account.view.contracts"),count:(v.contracts??[]).length}),v.hidden.includes("documents")||r.push({key:"documents",label:n("sales.account.view.documents"),count:v.documents.length}),r},[v,n]);return e.jsx(Hn,{result:s,empty:{title:n("sales.state.notFound.title")},deniedBody:n("sales.state.denied.body"),children:r=>{const t=pe&&pe.id===r.account.id&&(pe.revision??0)>=(r.account.revision??0)?{...r.account,bank_accounts:pe.bank_accounts}:r.account,ge=t.source.kind==="external"&&t.source.state==="unavailable",C=t.source.kind==="external"&&t.source.state==="stale",Ma=Q(r.policy,"interaction"),Bn=g&&!!D&&Q(r.policy,"account").write_mode!=="read_only",P=j&&g&&!!ka&&Q(r.policy,"account").write_mode!=="read_only",Oa=j&&g&&!!Ge&&t.source.kind!=="external"&&t.status!=="merged",S=r.contracts??[],ua=ia?S.find(a=>a.id===ia)??null:null,zn=[...D?[{key:"edit",label:n("sales.account.edit"),onSelect:()=>h("edit"),disabled:!Bn,testId:"account-edit"}]:[],{key:"transfer",label:n("sales.account.transfer"),onSelect:()=>Xe(!0),disabled:!g},{key:"changes",label:n("sales.account.changes"),onSelect:Fn,testId:"account-changes"},...Ge?[{key:"merge",label:n("sales.account.merge"),onSelect:()=>ca(!0),disabled:!Oa,testId:"account-merge"}]:[],...t.status==="archived"?[{key:"restore",label:n("sales.action.restore"),onSelect:()=>{Ra(t.id,"restore")},disabled:!g||!F||Pa,testId:"account-restore"}]:[{key:"archive",label:n("sales.account.archive"),onSelect:()=>la(!0),danger:!0,disabled:!g||!F||t.source.kind==="external"||t.status==="merged",testId:"account-archive"}]],da=[...r.interactions.filter(a=>a.status==="planned").map(a=>({key:`i-${a.id}`,due:a.at,kind:"planned",row:a})),...r.follow_ups.map(a=>({key:`f-${a.id}`,due:a.due,kind:"follow_up",row:a}))].sort((a,B)=>a.due.localeCompare(B.due)),ve=r.interactions.filter(a=>a.status==="done"),Ha=a=>a?r.contacts.find(B=>B.id===a)?.name??"":"",I=g&&!!fa&&Q(r.policy,"quote").write_mode!=="read_only",L=g&&!!ya,Rn=ja&&!!D||ba&&!!oe||Na&&I||Ca&&L||!!d||Sa&&P||!!ua||Ia,Ua=t.status==="merged"&&t.merged_into_id?We.find(a=>a.id===t.merged_into_id):null;return e.jsxs("div",{className:"nexus-cc-split","data-inspector":Rn?"open":"closed",children:[e.jsxs(Un,{layout:"dense",width:"wide",back:{href:b.accounts(),label:n("sales.action.backToAccounts")},title:t.name,meta:e.jsxs(e.Fragment,{children:[e.jsx(A,{tone:t.relationship==="customer"?"ok":t.relationship==="former"?"muted":"neutral",children:n(`sales.relationship.${t.relationship}`)}),c(t.owner_id)?e.jsx(A,{children:n("sales.account.ownerChip",{name:c(t.owner_id)})}):null,t.registry_status&&t.registry_status.status!=="unknown"?e.jsx(ct,{status:t.registry_status}):null,t.status==="merged"?e.jsx(A,{tone:"muted",testId:"merged-chip",children:n("sales.account.merged",{name:Ua?.name??t.merged_into_id??""})}):null,t.status==="archived"?e.jsx(A,{tone:"muted",testId:"archived-chip",children:n("sales.status.archived")}):null,e.jsx(Ka,{source:t.source})]}),actions:e.jsxs(e.Fragment,{children:[g&&!ce?e.jsx(z,{ref:Va,variant:"primary",onClick:()=>{q("activity"),Ze(!0)},"data-testid":"account-log",children:n("sales.action.log")}):null,e.jsx(Yn,{label:n("sales.action.more"),items:zn,testId:"account-menu"})]}),testId:"account-page",children:[t.status==="merged"&&t.merged_into_id?e.jsxs("p",{className:"nexus-sales-note",role:"status","data-testid":"account-merged-note",children:[n("sales.account.mergedInto")," ",e.jsx(Ye,{href:T(b.account(t.merged_into_id)),className:"nexus-link",children:Ua?.name??t.merged_into_id})]}):null,Sn&&Oa?e.jsx(tt,{keep:t,candidates:We.filter(a=>a.id!==t.id&&a.status!=="merged"&&(!a.project||!t.project||a.project===t.project)),provider:m,merge:Ge,onCancel:()=>ca(!1),onMerged:(a,B)=>{ca(!1),In(B.name),k()}}):null,Fa?e.jsx("p",{className:"nexus-sales-note",role:"status","data-testid":"account-merged",children:n("sales.merge.done",{name:Fa})}):null,Ta&&F?e.jsxs(Wa,{title:n("sales.archive.title",{name:t.name}),danger:!0,onCancel:()=>la(!1),primary:{label:n("sales.action.archive"),onClick:()=>{Ra(t.id,"archive")},disabled:Pa,testId:"archive-confirm"},testId:"archive-panel",children:[e.jsx("p",{className:"nexus-sales-p",children:n("sales.archive.body")}),me?e.jsx("p",{className:"nexus-sales-note",role:"alert",children:me}):null]}):null,za?e.jsx("p",{className:"nexus-sales-note",role:"status","data-testid":"archive-note",children:za}):null,me&&!Ta?e.jsx("p",{className:"nexus-sales-note",role:"alert","data-testid":"archive-error",children:me}):null,Nn?e.jsx(Wa,{title:n("sales.transfer.title",{name:t.name}),onCancel:()=>Xe(!1),primary:{label:n("sales.transfer.ask"),onClick:()=>{Xe(!1),Pn(!0)},testId:"transfer-ask"},testId:"transfer-panel",children:e.jsx("p",{className:"nexus-sales-p",children:n("sales.transfer.body",{from:c(t.owner_id),who:Ue})})}):null,Tn?e.jsx("p",{className:"nexus-sales-note",role:"status","data-testid":"transfer-sent",children:n("sales.transfer.sent",{who:Ue})}):null,qn?e.jsx("p",{className:"nexus-sales-note",role:"status","data-testid":"account-edited",children:n("sales.account.edited")}):null,e.jsx("div",{className:"nexus-sales-split",children:e.jsxs("div",{className:"nexus-sales-account",children:[e.jsxs("aside",{className:"nexus-sales-rail","aria-label":n("sales.section.about"),children:[e.jsxs(f,{title:n("sales.section.about"),children:[e.jsx(Ga,{items:[{label:n("sales.field.legalName"),value:t.legal_name},...t.tax_id?[{label:n("sales.field.taxId"),value:t.tax_id}]:[],{label:n("sales.field.city"),value:[t.city,t.country].filter(Boolean).join(" · ")},...t.industry?[{label:n("sales.field.industry"),value:t.industry}]:[],...t.legal_form?[{label:n("sales.field.legalForm"),value:`${n(`sales.legalForm.${t.legal_form}`)}${t.resident===!1?` · ${n("sales.field.resident").toLowerCase()}: ${n("sales.no").toLowerCase()}`:""}`}]:[],...t.since?[{label:n("sales.field.since"),value:Kn(t.since,x)}]:[],...c(t.owner_id)?[{label:n("sales.field.owner"),value:c(t.owner_id)}]:[],...t.backup_owner_id?[{label:n("sales.field.backup"),value:c(t.backup_owner_id)}]:[],...r.group&&(r.group.parents.length||r.group.members.length)?[{label:n("sales.field.partOf"),value:e.jsx(st,{group:r.group,members:r.group.members.length})}]:[]]}),t.notes?e.jsx("p",{className:"nexus-sales-p nexus-sales-notes","data-testid":"account-notes",children:t.notes}):null,(()=>{const a=et(r.fields??[],t.custom_fields,x,n("sales.yes"),n("sales.no"));return a.length?e.jsx(Ga,{items:a,testId:"account-custom-facts"}):null})()]}),e.jsx(rt,{account:t,personName:c,canVerify:j&&g,personaId:ga,verify:yn,onVerified:a=>{Dn(a),k()}}),e.jsx(f,{title:n("sales.section.contacts"),aside:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"nexus-cc-section-aside",children:r.contacts.length}),g&&oe&&Q(r.policy,"contact").write_mode!=="read_only"?e.jsx("button",{ref:_a,type:"button",className:"nexus-link-btn nexus-sales-section-add",onClick:()=>h("contact"),"data-testid":"account-new-contact",children:n("sales.action.newContact")}):null]}),children:r.unavailable.includes("contact")?e.jsx("p",{className:"nexus-sales-unavailable",role:"status","data-testid":"contacts-unavailable",children:n("sales.contacts.unavailable",{provider:t.source.kind==="external"?t.source.provider:""})}):r.contacts.length===0?e.jsx(he,{variant:"inline",title:n("sales.contacts.emptyInline")}):e.jsx("ul",{className:"nexus-sales-rail-list","aria-label":n("sales.section.contacts"),children:r.contacts.map(a=>e.jsxs("li",{className:"nexus-sales-rail-item",children:[e.jsx("button",{type:"button",className:"nexus-link-btn nexus-sales-rail-link",onClick:()=>le(a),"aria-pressed":d?.id===a.id,"data-testid":`contact-${a.id}`,children:a.name}),e.jsxs("span",{className:"nexus-sales-rail-meta",children:[a.role,a.primary?` · ${n("sales.contacts.primary")}`:""]})]},a.id))})}),r.team&&(r.team.length||j)?e.jsx(it,{members:r.team,personName:c}):null]}),e.jsxs("div",{className:"nexus-sales-stream",children:[e.jsx(Wn,{tabs:Ln,current:_,onChange:q,label:n("sales.account.views"),id:"account",layout:"page"}),e.jsxs("div",{id:`account-panel-${_}`,role:"tabpanel","aria-labelledby":`account-tab-${_}`,className:"nexus-sales-stream-body",children:[_==="activity"?e.jsxs(e.Fragment,{children:[ce?e.jsx(pt,{account:t,contacts:r.contacts,provider:Ma.owner==="external"?m:null,writeMode:Ma.write_mode,approverName:Ue,save:rn,reconcile:on,resolveConflict:va,onSaved:()=>{$a(!1),k()},onClose:()=>$a(!0),initialLadder:mn,initialSummary:pn}):g?e.jsx(gt,{onOpen:()=>Ze(!0)}):null,ge?e.jsx("p",{className:"nexus-sales-unavailable",role:"status","data-testid":"activity-unavailable",children:n("sales.source.listUnavailable",{provider:t.source.kind==="external"?t.source.provider:""})}):null,da.length>0?e.jsx(f,{title:n("sales.activity.next"),aside:e.jsx("span",{className:"nexus-cc-section-aside",children:da.length}),link:{href:V.tasks,label:n("sales.today.openTasks")},testId:"account-next",children:e.jsx("ol",{className:"nexus-sales-timeline","aria-label":n("sales.activity.next"),children:da.map(a=>a.kind==="planned"?e.jsxs("li",{className:"nexus-sales-tl-row","data-status":"planned","data-testid":`interaction-${a.row.id}`,children:[e.jsx("span",{className:"nexus-sales-tl-glyph","aria-hidden":!0}),e.jsx("span",{className:"nexus-sales-tl-when",children:ma(a.row.at,n)}),e.jsxs("span",{className:"nexus-sales-tl-body",children:[e.jsxs("span",{className:"nexus-sales-tl-head",children:[e.jsx("span",{className:"nexus-sales-tl-kind",children:n(`sales.kind.${a.row.kind}`)}),e.jsxs("span",{className:"nexus-sales-tl-meta",children:[Za(a.row.at,x),a.row.contact_id?` · ${Ha(a.row.contact_id)}`:""," · ",c(a.row.by_id)]})]}),e.jsx("span",{className:"nexus-sales-tl-text",children:a.row.summary})]})]},a.key):e.jsxs("li",{className:"nexus-sales-tl-row","data-status":"follow_up","data-overdue":new Date(a.row.due).getTime()<new Date(Xn()).getTime()?"1":void 0,"data-testid":`followup-${a.row.id}`,children:[e.jsx("span",{className:"nexus-sales-tl-glyph","aria-hidden":!0}),e.jsx("span",{className:"nexus-sales-tl-when",children:ma(a.row.due,n)}),e.jsx("span",{className:"nexus-sales-tl-body",children:e.jsxs("span",{className:"nexus-sales-tl-head",children:[e.jsx("span",{className:"nexus-sales-tl-kind",children:a.row.title}),e.jsx("span",{className:"nexus-sales-tl-meta",children:c(a.row.assignee_id)}),a.row.task_ref?e.jsxs("a",{href:V.task(a.row.task_ref),className:"nexus-link is-meta nexus-sales-tl-door",children:[n("sales.task.inTasks")," ↗"]}):null]})})]},a.key))})}):null,ge?null:e.jsx(f,{title:n("sales.activity.history"),aside:e.jsx("span",{className:"nexus-cc-section-aside",children:ve.length}),link:ve.length>0?{href:b.activity(),label:n("sales.action.viewAll")}:void 0,testId:"account-history",children:ve.length===0?e.jsx(he,{variant:"inline",title:n("sales.activity.emptyInline")}):e.jsx("ol",{className:"nexus-sales-timeline","aria-label":n("sales.activity.history"),"data-stale":C?"1":void 0,children:ve.map(a=>e.jsxs("li",{className:"nexus-sales-tl-row","data-status":a.status,"data-testid":`interaction-${a.id}`,children:[e.jsx("span",{className:"nexus-sales-tl-glyph","aria-hidden":!0}),e.jsx("span",{className:"nexus-sales-tl-when",children:R(a.at,x)}),e.jsxs("span",{className:"nexus-sales-tl-body",children:[e.jsxs("span",{className:"nexus-sales-tl-head",children:[e.jsx("span",{className:"nexus-sales-tl-kind",children:n(`sales.kind.${a.kind}`)}),a.outcome?e.jsx(A,{tone:a.outcome==="declined"?"warn":"muted",children:n(`sales.outcome.${a.outcome}`)}):null,C?e.jsx(A,{tone:"warn",children:n("sales.source.staleShort")}):null,e.jsxs("span",{className:"nexus-sales-tl-meta",children:[Za(a.at,x)," · ",c(a.by_id),a.contact_id?` · ${Ha(a.contact_id)}`:""]})]}),e.jsx("span",{className:"nexus-sales-tl-text",children:a.summary}),a.next_step?e.jsxs("span",{className:"nexus-sales-tl-next",children:["→ ",a.next_step.title," · ",ma(a.next_step.due,n),a.next_step.task_ref?e.jsxs("a",{href:V.task(a.next_step.task_ref),className:"nexus-link is-meta",children:[" ",n("sales.task.inTasks")," ↗"]}):null]}):null]})]},a.id))})})]}):null,_==="deals"?e.jsxs(e.Fragment,{children:[e.jsx(ft,{work:r.work,newBoardHref:V.newPipeline,canAct:g}),r.work.available&&r.work.boards.length>0?e.jsxs(e.Fragment,{children:[e.jsx(f,{title:n("sales.section.opportunities"),aside:e.jsx("span",{className:"nexus-cc-section-aside",children:r.work.deals.length}),link:{href:b.pipeline(),label:n("sales.action.openPipeline")},testId:"account-deals",children:e.jsx(fe,{rows:r.work.deals,personName:c,empty:{title:n("sales.opportunities.emptyInline"),body:n("sales.opportunities.emptyBody"),action:e.jsx(z,{size:"sm",href:T(b.pipeline()),"data-testid":"account-open-pipeline",children:n("sales.action.openPipeline")})},testId:"account-deal-rows"})}),e.jsx(f,{title:n("sales.section.requests"),aside:e.jsx("span",{className:"nexus-cc-section-aside",children:r.work.requests.length}),testId:"account-requests",children:e.jsx(fe,{rows:r.work.requests,quotes:r.quotes,personName:c,quoteHref:()=>T(`${b.account(t.id)}?view=quotes`),onOpenQuote:()=>q("quotes"),onQuote:I?a=>{ue(a),h("quote")}:void 0,empty:{title:n("sales.requests.emptyInline"),body:n("sales.requests.emptyBody")},testId:"account-request-rows"})}),r.work.leads.length>0?e.jsx(f,{title:n("sales.section.leads"),aside:e.jsx("span",{className:"nexus-cc-section-aside",children:r.work.leads.length}),testId:"account-leads",children:e.jsx(fe,{rows:r.work.leads,personName:c,empty:{title:n("sales.leads.emptyTitle")},testId:"account-lead-rows"})}):null,r.work.tasks.length>0?e.jsx(f,{title:n("sales.section.tasks"),aside:e.jsx("span",{className:"nexus-cc-section-aside",children:r.work.tasks.length}),testId:"account-tasks",children:e.jsx(fe,{rows:r.work.tasks,personName:c,empty:{title:n("sales.requests.emptyInline")},testId:"account-task-rows"})}):null]}):null]}):null,_==="quotes"?e.jsx(f,{title:n("sales.section.quotes"),aside:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"nexus-cc-section-aside",children:r.quotes.length}),I&&r.quotes.length?e.jsx("button",{ref:aa,type:"button",className:"nexus-link-btn nexus-sales-section-add",onClick:()=>h("quote"),"data-testid":"account-new-quote",children:n("sales.action.newQuote")}):null]}),link:r.quotes.length?{href:b.quotes(),label:n("sales.action.viewAll")}:void 0,children:r.quotes.length===0?e.jsx(he,{variant:"inline",title:n("sales.quotes.emptyInline"),body:I?n("sales.quotes.emptyBody"):void 0,action:I?e.jsx(z,{ref:aa,size:"sm",onClick:()=>h("quote"),"data-testid":"account-new-quote",children:n("sales.action.newQuote")}):void 0}):e.jsx("ul",{className:"nexus-sales-rows is-compact",children:r.quotes.map(a=>e.jsxs("li",{className:"nexus-sales-row","data-testid":`quote-${a.id}`,children:[e.jsx("span",{className:"nexus-sales-row-when",children:a.sent_at?R(a.sent_at,x):"—"}),e.jsxs("span",{className:"nexus-sales-row-main",children:[e.jsx("span",{className:"nexus-sales-row-title",children:e.jsxs(Ye,{href:T(`${b.quotes()}?quote=${encodeURIComponent(a.id)}`),className:"nexus-link is-row","data-testid":`quote-open-${a.id}`,children:[a.title," · v",a.version]})}),e.jsx("span",{className:"nexus-sales-row-meta",children:a.body_ref?e.jsxs("a",{href:a.body_ref.kind==="quote_draft"?V.quoteDraft(a.body_ref.ref):a.body_ref.ref,className:"nexus-link is-meta",target:a.body_ref.kind==="link"?"_blank":void 0,rel:a.body_ref.kind==="link"?"noopener noreferrer":void 0,children:[a.body_ref.label," ↗"]}):null})]}),e.jsx("span",{className:"nexus-sales-amount",children:a.amount===null?"—":Jn(a.amount,a.currency,x)}),e.jsx(Gn,{tone:yt(a.status),children:n(`sales.quoteStatus.${a.status}`)})]},a.id))})}):null,_==="contracts"?e.jsx(f,{title:n("sales.section.contracts"),aside:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"nexus-cc-section-aside",children:S.length}),P&&S.length?e.jsx("button",{ref:ra,type:"button",className:"nexus-link-btn nexus-sales-section-add",onClick:()=>h("contract"),"data-testid":"account-new-contract",children:n("sales.action.newContract")}):null]}),testId:"account-contracts",children:e.jsx(ot,{rows:S,selected:ia,onSelect:a=>{h(null),de(a.id)},empty:{title:n("sales.contracts.emptyInline"),body:P?n("sales.contracts.emptyBody"):void 0,action:P?e.jsx(z,{ref:ra,size:"sm",onClick:()=>h("contract"),"data-testid":"account-new-contract",children:n("sales.action.newContract")}):void 0}})}):null,_==="documents"?e.jsx(f,{title:n("sales.section.documents"),aside:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"nexus-cc-section-aside",children:r.documents.length}),L&&r.documents.length?e.jsx("button",{ref:ta,type:"button",className:"nexus-link-btn nexus-sales-section-add",onClick:()=>h("document"),"data-testid":"account-add-document",children:n("sales.action.addDocument")}):null]}),testId:"account-documents",children:r.documents.length===0?e.jsx(he,{variant:"inline",title:n("sales.documents.emptyInline"),body:L?n("sales.documents.emptyBody"):void 0,action:L?e.jsx(z,{ref:ta,size:"sm",onClick:()=>h("document"),"data-testid":"account-add-document",children:n("sales.action.addDocument")}):void 0}):e.jsx("ul",{className:"nexus-sales-rows is-compact",children:r.documents.map(a=>e.jsxs("li",{className:"nexus-sales-row","data-testid":`document-${a.id}`,children:[e.jsx("span",{className:"nexus-sales-row-when",children:R(a.at,x)}),e.jsxs("span",{className:"nexus-sales-row-main",children:[e.jsx("span",{className:"nexus-sales-row-title",children:a.href?e.jsxs("a",{href:a.href,className:"nexus-link",target:"_blank",rel:"noopener noreferrer",children:[a.name," ↗"]}):a.name}),e.jsx("span",{className:"nexus-sales-row-meta",children:n(`sales.docKind.${a.kind}`)})]})]},a.id))})}):null]})]})]})})]}),ja&&D?e.jsx(mt,{account:t,fields:r.fields??[],parents:We.filter(a=>a.id!==t.id&&a.status!=="merged"&&(!a.project||!t.project||a.project===t.project)).map(a=>({id:a.id,name:a.name})),people:fn,canBank:j&&t.bank_accounts!==void 0,canTeam:j||t.owner_id===ga,team:r.team??[],save:D,provider:m,resolveConflict:va,onClose:()=>Je(!1),onSaved:()=>{Je(!1),Cn(!0),k()}}):ba&&oe?e.jsx(vt,{accounts:[{id:t.id,name:t.name}],accountId:t.id,fields:ha,create:oe,onClose:()=>Ke(!1),onCreated:a=>{Ke(!1),le(a),k()},returnFocusTo:_a.current}):Na&&I?e.jsx(ht,{accounts:[{id:t.id,name:t.name}],accountId:t.id,request:qa??void 0,create:fa,onClose:()=>{ea(!1),ue(null)},onCreated:()=>{ea(!1),ue(null),q("quotes"),k()},returnFocusTo:aa.current},qa?.item_ref??"quote"):Ca&&L?e.jsx(nt,{accountId:t.id,create:ya,onClose:()=>na(!1),onCreated:()=>{na(!1),q("documents"),k()},returnFocusTo:ta.current}):Sa&&P?e.jsx(lt,{accountId:t.id,create:ka,defaults:{our_entity:S[0]?.our_entity,currency:S[0]?.currency},onClose:()=>sa(!1),onCreated:a=>{sa(!1),q("contracts"),de(a.id),k()},returnFocusTo:ra.current}):ua?e.jsx(ut,{contract:ua,personName:c,canTransition:j&&g,transition:wn,onTransitioned:()=>k(),onClose:()=>de(null)}):Ia?e.jsx(dt,{account:t,rows:Da?.rows??r.changes??[],state:Da?.state,personName:c,onClose:()=>Aa(!1)}):d?e.jsxs(Zn,{kind:n("sales.kind.contact"),title:d.name,subtitle:e.jsx(Ka,{source:d.source}),onClose:()=>le(null),testId:"contact-inspector",children:[e.jsxs(Ya,{idiom:"rule",title:n("sales.section.identity"),children:[e.jsx(N,{label:n("sales.field.role"),children:d.role}),d.reports_to_id?e.jsx(N,{label:n("sales.field.reportsTo"),children:r.contacts.find(a=>a.id===d.reports_to_id)?.name??d.reports_to_id}):null,d.left_at?e.jsx(N,{label:n("sales.field.leftAt"),children:R(d.left_at,x)}):null,d.email?e.jsx(N,{label:n("sales.field.email"),children:d.email}):null,d.phone?e.jsx(N,{label:n("sales.field.phone"),children:d.phone}):null,e.jsx(at,{defs:ha,values:d.custom_fields,testIdPrefix:"contact-cf"}),e.jsx(N,{label:n("sales.field.account"),children:e.jsx(Ye,{href:T(b.account(t.id)),className:"nexus-link",children:t.name})})]}),e.jsx(Ya,{idiom:"rule",title:n("sales.section.activity"),children:r.interactions.filter(a=>a.contact_id===d.id).slice(0,3).map(a=>e.jsx(N,{label:`${R(a.at,x)} · ${n(`sales.kind.${a.kind}`)}`,children:a.summary},a.id))})]}):null]})}})}an.__docgenInfo={description:`The account page — the centre of the product (08 §2), re-cut 2026-10-11 (owner: *"very overloaded"*). One header
line (DS-2005): title · relationship · owner · the source chip · **Log interaction** (the one primary action,
) · \`⋯\`. Then **one rail and one stream**: the rail holds *About* (identity and owners as \`Facts\`) and
*Contacts*; the stream is the account's views — **Activity · Deals · Quotes · Documents** (\`LocalTabs\`, DS-2006:
views of one page) — and Activity is where the work happens: the log composer (DS-6107) at the top, then *Next*
(planned interactions and follow-ups, soonest first) and *History* (DS-6104, newest first). A list the person may
not read is absent (08 §2). Both worlds, the same page: only the chip and the ladder's words differ.`,methods:[],displayName:"AccountScreen",props:{view:{required:!0,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"AccountView"}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:""},provider:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},personName:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => string",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"string"}}},description:""},personaId:{required:!0,tsType:{name:"string"},description:""},canAct:{required:!0,tsType:{name:"boolean"},description:""},approverName:{required:!0,tsType:{name:"string"},description:""},save:{required:!0,tsType:{name:"signature",type:"function",raw:"(input: LogInteractionInput & { force?: boolean }) => Promise<SaveOutcome>",signature:{arguments:[{type:{name:"intersection",raw:"LogInteractionInput & { force?: boolean }",elements:[{name:"LogInteractionInput"},{name:"signature",type:"object",raw:"{ force?: boolean }",signature:{properties:[{key:"force",value:{name:"boolean",required:!1}}]}}]},name:"input"}],return:{name:"Promise",elements:[{name:"union",raw:`| { status: "saved"; id: string; source: SourceRef }
| { status: "pending_approval"; approver_id: string; approval_ref: string }
| { status: "pending_external" }
| { status: "rejected"; errors: { field: string; message: string }[] }
/** S4-B (, ): the source's newer version — \`intent_id\` is the resolution door's; \`source_revision\` is
 *  what *keep mine* resubmits with (a NEW intent) */
| { status: "conflict"; diff: { field: string; mine: string; theirs: string }[]; intent_id?: string; source_revision?: string }
/** : the answer never came — \`idempotency_key\` is the intent the ladder polls (\`reconcile\`) */
| { status: "unknown"; idempotency_key: string }
| { status: "unavailable" }
/** S4-B ( · P-50): the source cannot take this write yet — nothing was sent; the draft stays */
| { status: "no_operation" }
| { status: "denied"; reason: "read_only" | "no_relation" }`,elements:[{name:"signature",type:"object",raw:'{ status: "saved"; id: string; source: SourceRef }',signature:{properties:[{key:"status",value:{name:"literal",value:'"saved"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"source",value:{name:"union",raw:`| { kind: "native" }
| { kind: "external"; provider: string; external_id: string; verified_at: string; state: "live" | "stale" | "unavailable" }`,elements:[{name:"signature",type:"object",raw:'{ kind: "native" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"native"',required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "external"; provider: string; external_id: string; verified_at: string; state: "live" | "stale" | "unavailable" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"external"',required:!0}},{key:"provider",value:{name:"string",required:!0}},{key:"external_id",value:{name:"string",required:!0}},{key:"verified_at",value:{name:"string",required:!0}},{key:"state",value:{name:"union",raw:'"live" | "stale" | "unavailable"',elements:[{name:"literal",value:'"live"'},{name:"literal",value:'"stale"'},{name:"literal",value:'"unavailable"'}],required:!0}}]}}],required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "pending_approval"; approver_id: string; approval_ref: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"pending_approval"',required:!0}},{key:"approver_id",value:{name:"string",required:!0}},{key:"approval_ref",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "pending_external" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"pending_external"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "rejected"; errors: { field: string; message: string }[] }',signature:{properties:[{key:"status",value:{name:"literal",value:'"rejected"',required:!0}},{key:"errors",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ field: string; message: string }",signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"message",value:{name:"string",required:!0}}]}}],raw:"{ field: string; message: string }[]",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "conflict"; diff: { field: string; mine: string; theirs: string }[]; intent_id?: string; source_revision?: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"conflict"',required:!0}},{key:"diff",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ field: string; mine: string; theirs: string }",signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"mine",value:{name:"string",required:!0}},{key:"theirs",value:{name:"string",required:!0}}]}}],raw:"{ field: string; mine: string; theirs: string }[]",required:!0}},{key:"intent_id",value:{name:"string",required:!1}},{key:"source_revision",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:'{ status: "unknown"; idempotency_key: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"unknown"',required:!0}},{key:"idempotency_key",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "unavailable" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"unavailable"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "no_operation" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"no_operation"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "denied"; reason: "read_only" | "no_relation" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"denied"',required:!0}},{key:"reason",value:{name:"union",raw:'"read_only" | "no_relation"',elements:[{name:"literal",value:'"read_only"'},{name:"literal",value:'"no_relation"'}],required:!0}}]}}]}],raw:"Promise<SaveOutcome>"}}},description:""},reconcile:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => Promise<ReconcileAnswer>",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"Promise",elements:[{name:"union",raw:"{ found: true; id: string } | { found: false; pending: boolean }",elements:[{name:"signature",type:"object",raw:"{ found: true; id: string }",signature:{properties:[{key:"found",value:{name:"literal",value:"true",required:!0}},{key:"id",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:"{ found: false; pending: boolean }",signature:{properties:[{key:"found",value:{name:"literal",value:"false",required:!0}},{key:"pending",value:{name:"boolean",required:!0}}]}}]}],raw:"Promise<ReconcileAnswer>"}}},description:""},resolveConflict:{required:!1,tsType:{name:"signature",type:"function",raw:"(intentId: string, choice: ConflictChoice) => Promise<unknown>",signature:{arguments:[{type:{name:"string"},name:"intentId"},{type:{name:"union",raw:'"keep_mine" | "take_theirs"',elements:[{name:"literal",value:'"keep_mine"'},{name:"literal",value:'"take_theirs"'}]},name:"choice"}],return:{name:"Promise",elements:[{name:"unknown"}],raw:"Promise<unknown>"}}},description:"S4-B (): the resolution door of a source conflict (`POST /write-intents/{id}/resolution`)"},onSaved:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},createContact:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: NewContactInput) => Promise<Contact>",signature:{arguments:[{type:{name:"NewContactInput"},name:"input"}],return:{name:"Promise",elements:[{name:"Contact"}],raw:"Promise<Contact>"}}},description:" (2): the contact door from the account's *Contacts* section (`PUT /accounts/{id}/contacts`)"},contactFields:{required:!1,tsType:{name:"Array",elements:[{name:"CustomFieldDef"}],raw:"CustomFieldDef[]"},description:": the contact record type's custom fields (the form asks them; the inspector shows them)",defaultValue:{value:"[]",computed:!1}},editAccount:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, input: EditAccountInput) => Promise<Account>",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"EditAccountInput"},name:"input"}],return:{name:"Promise",elements:[{name:"Account"}],raw:"Promise<Account>"}}},description:"the edit door (`⋯` → *Edit details* → `PATCH /accounts/{id}`): built-ins and the account's custom fields; absent = the door is not offered"},createQuote:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: NewQuoteInput) => Promise<Quote>",signature:{arguments:[{type:{name:"NewQuoteInput"},name:"input"}],return:{name:"Promise",elements:[{name:"Quote"}],raw:"Promise<Quote>"}}},description:": *New quote* from the Quotes view (the header; `sales.quote.write`); absent = the door is not offered"},addDocument:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: NewDocumentInput) => Promise<AccountDocument>",signature:{arguments:[{type:{name:"NewDocumentInput"},name:"input"}],return:{name:"Promise",elements:[{name:"AccountDocument"}],raw:"Promise<AccountDocument>"}}},description:": *Add document* from the Documents view; absent = the door is not offered"},initialEdit:{required:!1,tsType:{name:"boolean"},description:"a story: the edit door open",defaultValue:{value:"false",computed:!1}},initialNewQuote:{required:!1,tsType:{name:"boolean"},description:"a story: the quote or the document door open",defaultValue:{value:"false",computed:!1}},initialForRequest:{required:!1,tsType:{name:"string"},description:"a story: the quote door open for a request row (by its id) — S2-B *Quote this*"},initialNewDocument:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},initialNewContact:{required:!1,tsType:{name:"boolean"},description:"a story: the contact door open",defaultValue:{value:"false",computed:!1}},initialLog:{required:!1,tsType:{name:"boolean"},description:"open the log composer on arrival (`?log=1`) or in a story",defaultValue:{value:"false",computed:!1}},initialLadder:{required:!1,tsType:{name:"union",raw:`| { kind: "draft" }
| { kind: "saving" }
| { kind: "pending_external" }
| { kind: "pending_approval"; approver: string }
| { kind: "saved"; provider: string | null }
| { kind: "rejected"; errors: { field: string; message: string }[] }
| { kind: "conflict"; diff: { field: string; mine: string; theirs: string }[] }
| { kind: "reconciling" }
/** S4-B (, ): the reconciler has not decided within the form's patience — the row stays on Today
 *  under *waiting on me*; nothing is resent */
| { kind: "kept"; provider: string }
| { kind: "not_saved" }
| { kind: "unavailable"; provider: string }
/** S4-B ( · P-50): the source cannot take this write yet — nothing was sent, the draft stays */
| { kind: "no_operation"; provider: string }
| { kind: "denied"; provider: string }`,elements:[{name:"signature",type:"object",raw:'{ kind: "draft" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"draft"',required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "saving" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"saving"',required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "pending_external" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"pending_external"',required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "pending_approval"; approver: string }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"pending_approval"',required:!0}},{key:"approver",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "saved"; provider: string | null }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"saved"',required:!0}},{key:"provider",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "rejected"; errors: { field: string; message: string }[] }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"rejected"',required:!0}},{key:"errors",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ field: string; message: string }",signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"message",value:{name:"string",required:!0}}]}}],raw:"{ field: string; message: string }[]",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "conflict"; diff: { field: string; mine: string; theirs: string }[] }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"conflict"',required:!0}},{key:"diff",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ field: string; mine: string; theirs: string }",signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"mine",value:{name:"string",required:!0}},{key:"theirs",value:{name:"string",required:!0}}]}}],raw:"{ field: string; mine: string; theirs: string }[]",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "reconciling" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"reconciling"',required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "kept"; provider: string }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"kept"',required:!0}},{key:"provider",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "not_saved" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"not_saved"',required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "unavailable"; provider: string }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"unavailable"',required:!0}},{key:"provider",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "no_operation"; provider: string }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"no_operation"',required:!0}},{key:"provider",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "denied"; provider: string }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"denied"',required:!0}},{key:"provider",value:{name:"string",required:!0}}]}}]},description:""},initialSummary:{required:!1,tsType:{name:"string"},description:""},initialTransfer:{required:!1,tsType:{name:"boolean"},description:"a story: the transfer panel open",defaultValue:{value:"false",computed:!1}},initialView:{required:!1,tsType:{name:"union",raw:'"activity" | "deals" | "quotes" | "documents" | "contracts"',elements:[{name:"literal",value:'"activity"'},{name:"literal",value:'"deals"'},{name:"literal",value:'"quotes"'},{name:"literal",value:'"documents"'},{name:"literal",value:'"contracts"'}]},description:"a story: start on a view other than Activity",defaultValue:{value:'"activity"',computed:!1}},isLead:{required:!1,tsType:{name:"boolean"},description:"`sales.lead`: verify a bank account () · write and sign contracts (P-21/P-22) · merge (P-23)",defaultValue:{value:"false",computed:!1}},people:{required:!1,tsType:{name:"unknown"},description:"the colleagues the forms may name (team · merge candidates come from `accounts`)",defaultValue:{value:"[]",computed:!1}},accounts:{required:!1,tsType:{name:"unknown"},description:"the accounts in scope — parents for the hierarchy and candidates for a merge",defaultValue:{value:"[]",computed:!1}},verifyBankAccount:{required:!1,tsType:{name:"signature",type:"function",raw:"(accountId: string, bankAccountId: string) => Promise<Account>",signature:{arguments:[{type:{name:"string"},name:"accountId"},{type:{name:"string"},name:"bankAccountId"}],return:{name:"Promise",elements:[{name:"Account"}],raw:"Promise<Account>"}}},description:""},createContract:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: NewContractInput) => Promise<Contract>",signature:{arguments:[{type:{name:"NewContractInput"},name:"input"}],return:{name:"Promise",elements:[{name:"Contract"}],raw:"Promise<Contract>"}}},description:""},transitionContract:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, input: ContractTransitionInput) => Promise<Contract>",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"ContractTransitionInput"},name:"input"}],return:{name:"Promise",elements:[{name:"Contract"}],raw:"Promise<Contract>"}}},description:""},mergeAccount:{required:!1,tsType:{name:"signature",type:"function",raw:"(keepId: string, input: MergeInput) => Promise<Account>",signature:{arguments:[{type:{name:"string"},name:"keepId"},{type:{name:"MergeInput"},name:"input"}],return:{name:"Promise",elements:[{name:"Account"}],raw:"Promise<Account>"}}},description:""},readChanges:{required:!1,tsType:{name:"signature",type:"function",raw:"(accountId: string) => Promise<RecordChange[]>",signature:{arguments:[{type:{name:"string"},name:"accountId"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"RecordChange"}],raw:"RecordChange[]"}],raw:"Promise<RecordChange[]>"}}},description:": `⋯ › Changes` — read on open; absent = the page shows what the view carried"},initialContract:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"a story: the doors open",defaultValue:{value:"null",computed:!1}},initialNewContract:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},initialChanges:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},initialMerge:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},archiveAccount:{required:!1,tsType:{name:"signature",type:"function",raw:'(id: string, door: "archive" | "restore") => Promise<Account>',signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"union",raw:'"archive" | "restore"',elements:[{name:"literal",value:'"archive"'},{name:"literal",value:'"restore"'}]},name:"door"}],return:{name:"Promise",elements:[{name:"Account"}],raw:"Promise<Account>"}}},description:""},initialArchive:{required:!1,tsType:{name:"boolean"},description:"a story: the archive question open",defaultValue:{value:"false",computed:!1}}}};const ie=async s=>({id:"q_new",account_id:s.account_id,title:s.title,version:1,status:s.status??"draft",amount:s.amount,currency:s.currency,valid_until:s.valid_until,source:{kind:"native"}}),pa=async s=>({id:"doc_new",account_id:s.account_id,name:s.name,kind:s.kind,at:"2026-10-12T09:00:00Z",href:s.href,source:{kind:"native"}}),$t={title:"Apps/NexSales/Account page",component:an,parameters:{ds:"DS-6104",layout:"fullscreen",workbench:{ns:"sales",path:"/sales/accounts/acc_agrolan"}},args:{provider:Xa,personName:$n,personaId:"oksana",canAct:!0,approverName:"Ihor Savchuk",save:En,reconcile:Qn,onSaved:()=>{}}},p=()=>u(l("oksana"),"acc_agrolan"),nn=()=>{const s=p();return s.account.source.kind==="external"&&(s.account.source={...s.account.source,state:"stale"}),s},tn=()=>{const s=p();return s.account.source.kind==="external"&&(s.account.source={...s.account.source,state:"unavailable"}),s},ye={name:"Populated · connected (BAS)",args:{view:i(p())}},we={name:"Populated · native",args:{provider:null,view:i(u(l("nazar"),"acc_sofia")),personaId:"nazar",approverName:"Nazar Holub"}},ke={name:"Log interaction (draft)",args:{view:i(p()),initialLog:!0}},xe={name:"Log interaction · conflict",args:{view:i(p()),initialLog:!0,initialSummary:"Asked for LCL rates.",initialLadder:{kind:"conflict",diff:[{field:"summary",mine:"Asked for LCL rates.",theirs:"Asked for LCL rates; also wants insurance."}]}}},be={name:"Log interaction · pending approval",args:{view:i(p()),initialLog:!0,initialSummary:"Meeting at their office.",initialLadder:{kind:"pending_approval",approver:"Ihor Savchuk"}}},_e={name:"Log interaction · not saved",args:{view:i(p()),initialLog:!0,initialSummary:"Visit to the warehouse.",initialLadder:{kind:"not_saved"}}},je={name:"Log interaction · source unavailable",args:{view:i(tn()),initialLog:!0,initialSummary:"Short call.",initialLadder:{kind:"unavailable",provider:Xa}}},E={name:"Deals view · deals and requests (VibeBan rows)",args:{view:i(p()),initialView:"deals",createQuote:ie}},$={name:"Deals view · empty (the door is the Pipeline)",args:{provider:null,view:i(u(l("nazar"),"acc_nordic")),personaId:"nazar",approverName:"Nazar Holub",initialView:"deals"}},Ne={name:"Deals view · NexTasks away",args:{view:i({...p(),work:{available:!1,boards:[],deals:[],leads:[],requests:[],tasks:[]}}),initialView:"deals"}},qe={name:"Deals view · no board yet — the one door",args:{view:i({...p(),work:{available:!0,boards:[],deals:[],leads:[],requests:[],tasks:[]}}),initialView:"deals"}},Ce={name:"Deals view · a board the person may list but not read",args:{view:i((()=>{const s=p();return{...s,work:{...s.work,boards:s.work.boards.map((m,c)=>c===0?m:{...m,available:!1})}}})()),initialView:"deals"}},Se={name:"Quote this request (FormInspector, prefilled · )",args:{view:i(p()),initialView:"deals",createQuote:ie,initialNewQuote:!0,initialForRequest:"req_2"}},Ie={name:"Quotes view",args:{view:i(p()),initialView:"quotes",createQuote:ie}},M={name:"Quotes view · empty (New quote)",args:{provider:null,view:i(u(l("nazar"),"acc_sofia")),personaId:"nazar",approverName:"Nazar Holub",initialView:"quotes",createQuote:ie}},O={name:"New quote (FormInspector)",args:{provider:null,view:i(u(l("nazar"),"acc_sofia")),personaId:"nazar",approverName:"Nazar Holub",initialView:"quotes",createQuote:ie,initialNewQuote:!0}},Ae={name:"Documents view",args:{view:i(p()),initialView:"documents",addDocument:pa}},De={name:"Documents view · empty (Add document)",args:{provider:null,view:i({...u(l("nazar"),"acc_bukovel"),documents:[]}),personaId:"nazar",approverName:"Nazar Holub",initialView:"documents",addDocument:pa}},H={name:"Add document (FormInspector)",args:{provider:null,view:i(u(l("nazar"),"acc_sofia")),personaId:"nazar",approverName:"Nazar Holub",initialView:"documents",addDocument:pa,initialNewDocument:!0}},Fe={name:"Source stale",args:{view:i(nn())}},Te={name:"Source unavailable · last copy",args:{view:i(tn())}},U={name:"Source stale · projection, contacts unavailable",args:{view:i({...nn(),contacts:[],unavailable:["contact"]})}},W={name:"New contact from the Contacts section",args:{provider:null,view:i(u(l("nazar"),"acc_sofia")),personaId:"nazar",approverName:"Nazar Holub",createContact:async s=>({id:"ct_new",account_id:s.account_id,name:s.name,role:s.role??"",email:s.email,phone:s.phone,primary:!1,source:{kind:"native"}}),initialNewContact:!0}},G={name:"Custom fields in the rail · head of sales",args:{view:i(u(l("ihor"),"acc_poltava")),personaId:"ihor",contactFields:en(l("ihor")).schemas.find(s=>s.record_type==="contact").fields}},Pe={name:"Custom fields in the rail · rep (financial hidden)",args:{view:i(u(l("oksana"),"acc_poltava"))}},Le={name:"New contact · custom fields (Department)",args:{view:i(u(l("ihor"),"acc_poltava")),personaId:"ihor",contactFields:en(l("ihor")).schemas.find(s=>s.record_type==="contact").fields,createContact:async s=>({id:"ct_new",account_id:s.account_id,name:s.name,role:s.role??"",email:s.email,phone:s.phone,primary:!1,source:{kind:"native"},custom_fields:s.custom_fields}),initialNewContact:!0}},Y={name:"Edit details (FormInspector · custom fields)",args:{view:i(u(l("ihor"),"acc_poltava")),personaId:"ihor",editAccount:async(s,m)=>Vn(u(l("ihor"),"acc_poltava").account,m),initialEdit:!0}},Be={name:"Transfer ownership (ActionPanel)",args:{view:i(p()),initialTransfer:!0}},ze={name:"Member who cannot act",args:{view:i(p()),canAct:!1}},Re={args:{view:re("loading")}},Ve={name:"Not found (= no access)",args:{view:re("notFound")}},Qe={args:{view:re("error")}},Ee={args:{view:re("denied")}},$e={args:{view:re("offline")}},y=()=>u(l("nazar"),"acc_horizon"),w={provider:null,personaId:"nazar",approverName:"Nazar Holub",isLead:!0,people:[{id:"nazar",name:"Nazar Holub"},{id:"marta",name:"Marta Yarema"}],accounts:Ja(l("nazar")),verifyBankAccount:async s=>u(l("nazar"),s).account,createContract:async s=>({id:"con_new",account_id:s.account_id,number:s.number,our_entity:s.our_entity,currency:s.currency,settlement_kind:s.settlement_kind??"postpayment",payment_terms_days:s.payment_terms_days??0,auto_renew:!!s.auto_renew,status:"draft",source:{kind:"native"}}),transitionContract:async(s,m)=>({...y().contracts.find(c=>c.id===s),status:m.to}),mergeAccount:async s=>u(l("nazar"),s).account,readChanges:async s=>u(l("nazar"),s).changes},Z={name:"Counterparty 360 · head of sales (requisites · bank accounts · team)",args:{...w,view:i(y())}},K={name:"Counterparty 360 · a rep (no bank accounts, )",args:{...w,isLead:!1,view:i((()=>{const s=y(),{bank_accounts:m,...c}=s.account;return{...s,account:c}})())}},X={name:"Counterparty 360 · part of a group (Poltava → Agro-Lan)",args:{view:i(u(l("ihor"),"acc_poltava")),personaId:"ihor",isLead:!0,accounts:Ja(l("ihor"))}},J={name:"Contracts view",args:{...w,view:i(y()),initialView:"contracts"}},Me={name:"Contracts view · empty (New contract)",args:{...w,view:i(u(l("nazar"),"acc_dim")),initialView:"contracts"}},Oe={name:"Contracts view · a contract's Inspector",args:{...w,view:i(y()),initialView:"contracts",initialContract:"con_horizon_2025"}},He={name:"New contract (FormInspector)",args:{...w,view:i(y()),initialView:"contracts",initialNewContract:!0}},ee={name:"⋯ › Changes",args:{...w,view:i(y()),initialChanges:!0}},ae={name:"⋯ › Merge another account into this one",args:{...w,view:i(y()),initialMerge:!0}},ne={name:"A merged account (by reference)",args:{...w,view:i((()=>{const s=y();return{...s,account:{...s.account,status:"merged",merged_into_id:"acc_dim"}}})())}},sn=async(s,m)=>({...u(l("nazar"),s).account,status:m==="archive"?"archived":"active"}),te={name:"⋯ › Archive (the question)",args:{...w,view:i(y()),archiveAccount:sn,initialArchive:!0}},se={name:"An archived account (⋯ › Restore)",args:{...w,view:i((()=>{const s=y();return{...s,account:{...s.account,status:"archived"}}})()),archiveAccount:sn}},Mt=["Connected","Native","LogInteraction","LadderConflict","LadderPendingApproval","LadderNotSaved","LadderUnavailable","Deals","DealsEmpty","DealsTasksAway","DealsNoBoard","DealsBoardHidden","QuoteFromRequest","Quotes","QuotesEmpty","NewQuote","Documents","DocumentsEmpty","AddDocument","Stale","SourceUnavailable","StaleProjectionContactsUnavailable","NewContact","CustomFieldsHead","CustomFieldsRep","NewContactWithFields","EditAccount","Transfer","ReadOnly","Loading","NotFound","Error","Denied","Offline","Counterparty360Lead","Counterparty360Reader","GroupChild","Contracts","ContractsEmpty","ContractOpen","NewContract","Changes","Merge","MergedRecord","ArchiveAsk","ArchivedRecord"];ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`{
  name: "Populated · connected (BAS)",
  args: {
    view: ready(agrolan())
  }
}`,...ye.parameters?.docs?.source}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`{
  name: "Populated · native",
  args: {
    provider: null,
    view: ready(store.account(as("nazar"), "acc_sofia")),
    personaId: "nazar",
    approverName: "Nazar Holub"
  }
}`,...we.parameters?.docs?.source}}};ke.parameters={...ke.parameters,docs:{...ke.parameters?.docs,source:{originalSource:`{
  name: "Log interaction (draft)",
  args: {
    view: ready(agrolan()),
    initialLog: true
  }
}`,...ke.parameters?.docs?.source}}};xe.parameters={...xe.parameters,docs:{...xe.parameters?.docs,source:{originalSource:`{
  name: "Log interaction · conflict",
  args: {
    view: ready(agrolan()),
    initialLog: true,
    initialSummary: "Asked for LCL rates.",
    initialLadder: {
      kind: "conflict",
      diff: [{
        field: "summary",
        mine: "Asked for LCL rates.",
        theirs: "Asked for LCL rates; also wants insurance."
      }]
    }
  }
}`,...xe.parameters?.docs?.source}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`{
  name: "Log interaction · pending approval",
  args: {
    view: ready(agrolan()),
    initialLog: true,
    initialSummary: "Meeting at their office.",
    initialLadder: {
      kind: "pending_approval",
      approver: "Ihor Savchuk"
    }
  }
}`,...be.parameters?.docs?.source}}};_e.parameters={..._e.parameters,docs:{..._e.parameters?.docs,source:{originalSource:`{
  name: "Log interaction · not saved",
  args: {
    view: ready(agrolan()),
    initialLog: true,
    initialSummary: "Visit to the warehouse.",
    initialLadder: {
      kind: "not_saved"
    }
  }
}`,..._e.parameters?.docs?.source}}};je.parameters={...je.parameters,docs:{...je.parameters?.docs,source:{originalSource:`{
  name: "Log interaction · source unavailable",
  args: {
    view: ready(unavailable()),
    initialLog: true,
    initialSummary: "Short call.",
    initialLadder: {
      kind: "unavailable",
      provider: PROVIDER
    }
  }
}`,...je.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Deals view · deals and requests (VibeBan rows)",
  args: {
    view: ready(agrolan()),
    initialView: "deals",
    createQuote: fakeQuote
  }
}`,...E.parameters?.docs?.source},description:{story:"S2-B ( A2 · DS-6109): deals and requests are VibeBan rows read as the person; a request a quote answers names it, an open one offers *Quote this*",...E.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: "Deals view · empty (the door is the Pipeline)",
  args: {
    provider: null,
    view: ready(store.account(as("nazar"), "acc_nordic")),
    personaId: "nazar",
    approverName: "Nazar Holub",
    initialView: "deals"
  }
}`,...$.parameters?.docs?.source},description:{story:": a deal is a VibeBan item ( (3)) — the empty view's one door is the Pipeline, never a dead end",...$.parameters?.docs?.description}}};Ne.parameters={...Ne.parameters,docs:{...Ne.parameters?.docs,source:{originalSource:`{
  name: "Deals view · NexTasks away",
  args: {
    view: ready({
      ...agrolan(),
      work: {
        available: false,
        boards: [],
        deals: [],
        leads: [],
        requests: [],
        tasks: []
      }
    }),
    initialView: "deals"
  }
}`,...Ne.parameters?.docs?.source}}};qe.parameters={...qe.parameters,docs:{...qe.parameters?.docs,source:{originalSource:`{
  name: "Deals view · no board yet — the one door",
  args: {
    view: ready({
      ...agrolan(),
      work: {
        available: true,
        boards: [],
        deals: [],
        leads: [],
        requests: [],
        tasks: []
      }
    }),
    initialView: "deals"
  }
}`,...qe.parameters?.docs?.source}}};Ce.parameters={...Ce.parameters,docs:{...Ce.parameters?.docs,source:{originalSource:`{
  name: "Deals view · a board the person may list but not read",
  args: {
    view: ready((() => {
      const v = agrolan();
      return {
        ...v,
        work: {
          ...v.work,
          boards: v.work.boards.map((b, i) => i === 0 ? b : {
            ...b,
            available: false
          })
        }
      };
    })()),
    initialView: "deals"
  }
}`,...Ce.parameters?.docs?.source}}};Se.parameters={...Se.parameters,docs:{...Se.parameters?.docs,source:{originalSource:`{
  name: "Quote this request (FormInspector, prefilled · )",
  args: {
    view: ready(agrolan()),
    initialView: "deals",
    createQuote: fakeQuote,
    initialNewQuote: true,
    initialForRequest: "req_2"
  }
}`,...Se.parameters?.docs?.source}}};Ie.parameters={...Ie.parameters,docs:{...Ie.parameters?.docs,source:{originalSource:`{
  name: "Quotes view",
  args: {
    view: ready(agrolan()),
    initialView: "quotes",
    createQuote: fakeQuote
  }
}`,...Ie.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Quotes view · empty (New quote)",
  args: {
    provider: null,
    view: ready(store.account(as("nazar"), "acc_sofia")),
    personaId: "nazar",
    approverName: "Nazar Holub",
    initialView: "quotes",
    createQuote: fakeQuote
  }
}`,...M.parameters?.docs?.source},description:{story:": the Skills / Agents rule — the empty view carries *New quote*; populated, the section's aside does",...M.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "New quote (FormInspector)",
  args: {
    provider: null,
    view: ready(store.account(as("nazar"), "acc_sofia")),
    personaId: "nazar",
    approverName: "Nazar Holub",
    initialView: "quotes",
    createQuote: fakeQuote,
    initialNewQuote: true
  }
}`,...O.parameters?.docs?.source},description:{story:" · DS-7002: *New quote* — the header in the Inspector (title · amount and currency · status · valid until · a link to the body)",...O.parameters?.docs?.description}}};Ae.parameters={...Ae.parameters,docs:{...Ae.parameters?.docs,source:{originalSource:`{
  name: "Documents view",
  args: {
    view: ready(agrolan()),
    initialView: "documents",
    addDocument: fakeDocument
  }
}`,...Ae.parameters?.docs?.source}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`{
  name: "Documents view · empty (Add document)",
  args: {
    provider: null,
    view: ready({
      ...store.account(as("nazar"), "acc_bukovel"),
      documents: []
    }),
    personaId: "nazar",
    approverName: "Nazar Holub",
    initialView: "documents",
    addDocument: fakeDocument
  }
}`,...De.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Add document (FormInspector)",
  args: {
    provider: null,
    view: ready(store.account(as("nazar"), "acc_sofia")),
    personaId: "nazar",
    approverName: "Nazar Holub",
    initialView: "documents",
    addDocument: fakeDocument,
    initialNewDocument: true
  }
}`,...H.parameters?.docs?.source},description:{story:" · DS-7002: *Add document* — name · kind · link in the Inspector; the file joins through the  artifact door",...H.parameters?.docs?.description}}};Fe.parameters={...Fe.parameters,docs:{...Fe.parameters?.docs,source:{originalSource:`{
  name: "Source stale",
  args: {
    view: ready(stale())
  }
}`,...Fe.parameters?.docs?.source}}};Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`{
  name: "Source unavailable · last copy",
  args: {
    view: ready(unavailable())
  }
}`,...Te.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Source stale · projection, contacts unavailable",
  args: {
    view: ready({
      ...stale(),
      contacts: [],
      unavailable: ["contact"]
    })
  }
}`,...U.parameters?.docs?.source},description:{story:'S4-A (P-51): the account from the projection while the source is down — stale, and its contacts (`cache: none`) named unavailable, never "No contacts"',...U.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "New contact from the Contacts section",
  args: {
    provider: null,
    view: ready(store.account(as("nazar"), "acc_sofia")),
    personaId: "nazar",
    approverName: "Nazar Holub",
    createContact: async i => ({
      id: "ct_new",
      account_id: i.account_id,
      name: i.name,
      role: i.role ?? "",
      email: i.email,
      phone: i.phone,
      primary: false,
      source: {
        kind: "native"
      }
    }),
    initialNewContact: true
  }
}`,...W.parameters?.docs?.source},description:{story:" (2): the contact door from the account's *Contacts* section — the account is given, the line first",...W.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Custom fields in the rail · head of sales",
  args: {
    view: ready(store.account(as("ihor"), "acc_poltava")),
    personaId: "ihor",
    contactFields: store.fields(as("ihor")).schemas.find(s => s.record_type === "contact")!.fields
  }
}`,...G.parameters?.docs?.source},description:{story:": the organization's custom fields in the rail's *About* (schema order) — a head of sales sees the financial one (Settlement), a rep does not ().",...G.parameters?.docs?.description}}};Pe.parameters={...Pe.parameters,docs:{...Pe.parameters?.docs,source:{originalSource:`{
  name: "Custom fields in the rail · rep (financial hidden)",
  args: {
    view: ready(store.account(as("oksana"), "acc_poltava"))
  }
}`,...Pe.parameters?.docs?.source}}};Le.parameters={...Le.parameters,docs:{...Le.parameters?.docs,source:{originalSource:`{
  name: "New contact · custom fields (Department)",
  args: {
    view: ready(store.account(as("ihor"), "acc_poltava")),
    personaId: "ihor",
    contactFields: store.fields(as("ihor")).schemas.find(s => s.record_type === "contact")!.fields,
    createContact: async i => ({
      id: "ct_new",
      account_id: i.account_id,
      name: i.name,
      role: i.role ?? "",
      email: i.email,
      phone: i.phone,
      primary: false,
      source: {
        kind: "native"
      },
      custom_fields: i.custom_fields
    }),
    initialNewContact: true
  }
}`,...Le.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Edit details (FormInspector · custom fields)",
  args: {
    view: ready(store.account(as("ihor"), "acc_poltava")),
    personaId: "ihor",
    editAccount: async (_id, i) => applyEdit(store.account(as("ihor"), "acc_poltava").account, i),
    initialEdit: true
  }
}`,...Y.parameters?.docs?.source},description:{story:" close-out: the edit door (`⋯` → *Edit details*, DS-7002) — built-ins and the account's custom fields, prefilled; ownership stays a distinct door ().",...Y.parameters?.docs?.description}}};Be.parameters={...Be.parameters,docs:{...Be.parameters?.docs,source:{originalSource:`{
  name: "Transfer ownership (ActionPanel)",
  args: {
    view: ready(agrolan()),
    initialTransfer: true
  }
}`,...Be.parameters?.docs?.source}}};ze.parameters={...ze.parameters,docs:{...ze.parameters?.docs,source:{originalSource:`{
  name: "Member who cannot act",
  args: {
    view: ready(agrolan()),
    canAct: false
  }
}`,...ze.parameters?.docs?.source}}};Re.parameters={...Re.parameters,docs:{...Re.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("loading")
  }
}`,...Re.parameters?.docs?.source}}};Ve.parameters={...Ve.parameters,docs:{...Ve.parameters?.docs,source:{originalSource:`{
  name: "Not found (= no access)",
  args: {
    view: state("notFound")
  }
}`,...Ve.parameters?.docs?.source}}};Qe.parameters={...Qe.parameters,docs:{...Qe.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("error")
  }
}`,...Qe.parameters?.docs?.source}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("denied")
  }
}`,...Ee.parameters?.docs?.source}}};$e.parameters={...$e.parameters,docs:{...$e.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("offline")
  }
}`,...$e.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Counterparty 360 · head of sales (requisites · bank accounts · team)",
  args: {
    ...s2f,
    view: ready(horizon())
  }
}`,...Z.parameters?.docs?.source},description:{story:"…2768 ·  · : About gains the legal form and *Part of*; the rail gains *Requisites* (addresses · signatory · bank accounts for a lead, one unverified) and *Team*.",...Z.parameters?.docs?.description}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Counterparty 360 · a rep (no bank accounts, )",
  args: {
    ...s2f,
    isLead: false,
    view: ready((() => {
      const v = horizon();
      const {
        bank_accounts: _b,
        ...account
      } = v.account;
      return {
        ...v,
        account
      };
    })())
  }
}`,...K.parameters?.docs?.source},description:{story:"P-19: the same page for a reader — the bank accounts are absent, not hidden; nothing says they exist.",...K.parameters?.docs?.description}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Counterparty 360 · part of a group (Poltava → Agro-Lan)",
  args: {
    view: ready(store.account(as("ihor"), "acc_poltava")),
    personaId: "ihor",
    isLead: true,
    accounts: store.accounts(as("ihor"))
  }
}`,...X.parameters?.docs?.source},description:{story:": a child in a group — *Part of Agro-Lan* on About links up; the parent's page counts the members below.",...X.parameters?.docs?.description}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Contracts view",
  args: {
    ...s2f,
    view: ready(horizon()),
    initialView: "contracts"
  }
}`,...J.parameters?.docs?.source},description:{story:" · P-22: the Contracts view — an active one ending in 22 days, the status in words; *New contract* is the lead's.",...J.parameters?.docs?.description}}};Me.parameters={...Me.parameters,docs:{...Me.parameters?.docs,source:{originalSource:`{
  name: "Contracts view · empty (New contract)",
  args: {
    ...s2f,
    view: ready(store.account(as("nazar"), "acc_dim")),
    initialView: "contracts"
  }
}`,...Me.parameters?.docs?.source}}};Oe.parameters={...Oe.parameters,docs:{...Oe.parameters?.docs,source:{originalSource:`{
  name: "Contracts view · a contract's Inspector",
  args: {
    ...s2f,
    view: ready(horizon()),
    initialView: "contracts",
    initialContract: "con_horizon_2025"
  }
}`,...Oe.parameters?.docs?.source}}};He.parameters={...He.parameters,docs:{...He.parameters?.docs,source:{originalSource:`{
  name: "New contract (FormInspector)",
  args: {
    ...s2f,
    view: ready(horizon()),
    initialView: "contracts",
    initialNewContract: true
  }
}`,...He.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  name: "⋯ › Changes",
  args: {
    ...s2f,
    view: ready(horizon()),
    initialChanges: true
  }
}`,...ee.parameters?.docs?.source},description:{story:": `⋯ › Changes` — who changed which field when; the bank-account row says *restricted*, never the value.",...ee.parameters?.docs?.description}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  name: "⋯ › Merge another account into this one",
  args: {
    ...s2f,
    view: ready(horizon()),
    initialMerge: true
  }
}`,...ae.parameters?.docs?.source},description:{story:" · P-23: `⋯ › Merge` as an ActionPanel — pick the other account; everything repoints here, no undo door.",...ae.parameters?.docs?.description}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  name: "A merged account (by reference)",
  args: {
    ...s2f,
    view: ready((() => {
      const v = horizon();
      return {
        ...v,
        account: {
          ...v.account,
          status: "merged" as const,
          merged_into_id: "acc_dim"
        }
      };
    })())
  }
}`,...ne.parameters?.docs?.source},description:{story:"the merged record answers by reference (P-23): a chip and one line to the account it went into.",...ne.parameters?.docs?.description}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  name: "⋯ › Archive (the question)",
  args: {
    ...s2f,
    view: ready(horizon()),
    archiveAccount,
    initialArchive: true
  }
}`,...te.parameters?.docs?.source},description:{story:"the question (an `ActionPanel`, danger): the account leaves the lists and takes no changes; its contacts go with it.",...te.parameters?.docs?.description}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  name: "An archived account (⋯ › Restore)",
  args: {
    ...s2f,
    view: ready((() => {
      const v = horizon();
      return {
        ...v,
        account: {
          ...v.account,
          status: "archived" as const
        }
      };
    })()),
    archiveAccount
  }
}`,...se.parameters?.docs?.source},description:{story:"an archived account: the chip, the write doors off, `⋯ › Restore` one click away.",...se.parameters?.docs?.description}}};export{H as AddDocument,te as ArchiveAsk,se as ArchivedRecord,ee as Changes,ye as Connected,Oe as ContractOpen,J as Contracts,Me as ContractsEmpty,Z as Counterparty360Lead,K as Counterparty360Reader,G as CustomFieldsHead,Pe as CustomFieldsRep,E as Deals,Ce as DealsBoardHidden,$ as DealsEmpty,qe as DealsNoBoard,Ne as DealsTasksAway,Ee as Denied,Ae as Documents,De as DocumentsEmpty,Y as EditAccount,Qe as Error,X as GroupChild,xe as LadderConflict,_e as LadderNotSaved,be as LadderPendingApproval,je as LadderUnavailable,Re as Loading,ke as LogInteraction,ae as Merge,ne as MergedRecord,we as Native,W as NewContact,Le as NewContactWithFields,He as NewContract,O as NewQuote,Ve as NotFound,$e as Offline,Se as QuoteFromRequest,Ie as Quotes,M as QuotesEmpty,ze as ReadOnly,Te as SourceUnavailable,Fe as Stale,U as StaleProjectionContactsUnavailable,Be as Transfer,Mt as __namedExportsOrder,$t as default};
