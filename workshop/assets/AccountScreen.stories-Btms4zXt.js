import{P as Ne}from"./fixtures-CBGdDB98.js";import{f as Qe,a as Ue,p as We,r as i,g as Se,c as g,b as x,s as S}from"./scene-CW26D-iP.js";import{af as Ke,as as Ye,r as u,j as e,a8 as Ge,a0 as Je,A as Xe,a2 as p,a4 as xe,z as f,L as Ze,b as k,S as we,t as ea,v as ke,w as j,B as aa,Q as sa}from"./iframe-WvhPuRF9.js";import{d as na,i as ie,c as je,t as ta,b as y,m as be}from"./format-Djfk7eK9.js";import{d as C,r as b}from"./routes-36j8zYvH.js";import{c as ra,a as ia}from"./NewLine-DbdUsufk.js";import{L as la,a as oa}from"./LogInteractionForm-BILMf9MZ.js";import{N as ca}from"./NewContactForm-BxZ5v2lk.js";import{S as le}from"./SourceChip-BR7BmiTf.js";import"./customFields-BTLjwQTu.js";import"./personas-BIiIeh3_.js";import"./preload-helper-PPVm8Dsz.js";import"./flags--SfV1VDA.js";import"./arrow-up-B8u2SNEL.js";import"./SaveLadder-C0mlfeTY.js";function _e(t,h){return t.find(d=>d.entity===h)??{entity:h,owner:"native",write_mode:"native",cache:"none",migration_required:!1}}function qe({view:t,provider:h,personName:d,canAct:w,approverName:J,save:Ce,reconcile:Ie,onSaved:oe,createContact:X,contactFields:ce=[],initialLog:De=!1,initialLadder:Fe,initialSummary:Te,initialTransfer:Ae=!1,initialNewContact:$e=!1,initialView:Be="activity"}){const{t:s,locale:l}=Ke(),{href:Pe,Link:Re}=Ye(),[q,Z]=u.useState(De),[c,ee]=u.useState(null),[Ve,ae]=u.useState($e),ue=u.useRef(null),[ze,se]=u.useState(Ae),[Oe,Ee]=u.useState(!1),[v,de]=u.useState(Be),me=u.useRef(null),[pe,ge]=u.useState(!1);u.useEffect(()=>{!q&&pe&&(me.current?.focus(),ge(!1))},[q,pe]);const ve=r=>{Z(!1),r&&ge(!0)},m=t.state==="ready"?t.data:null,He=u.useMemo(()=>{if(!m)return[];const r=[{key:"activity",label:s("sales.account.view.activity"),count:m.interactions.length+m.follow_ups.length},{key:"deals",label:s("sales.account.view.deals"),count:m.opportunities.length+m.requests.length}];return m.hidden.includes("quotes")||r.push({key:"quotes",label:s("sales.account.view.quotes"),count:m.quotes.length}),m.hidden.includes("documents")||r.push({key:"documents",label:s("sales.account.view.documents"),count:m.documents.length}),r},[m,s]);return e.jsx(Ge,{result:t,empty:{title:s("sales.state.notFound.title")},deniedBody:s("sales.state.denied.body"),children:r=>{const n=r.account,ne=n.source.kind==="external"&&n.source.state==="unavailable",he=n.source.kind==="external"&&n.source.state==="stale",fe=_e(r.policy,"interaction"),Me=[{key:"transfer",label:s("sales.account.transfer"),onSelect:()=>se(!0),disabled:!w},{key:"archive",label:s("sales.account.archive"),onSelect:()=>{},danger:!0,disabled:!w||n.source.kind==="external"}],te=[...r.interactions.filter(a=>a.status==="planned").map(a=>({key:`i-${a.id}`,due:a.at,kind:"planned",row:a})),...r.follow_ups.map(a=>({key:`f-${a.id}`,due:a.due,kind:"follow_up",row:a}))].sort((a,re)=>a.due.localeCompare(re.due)),L=r.interactions.filter(a=>a.status==="done"),ye=a=>a?r.contacts.find(re=>re.id===a)?.name??"":"";return e.jsxs(Je,{layout:"dense",width:"wide",back:{href:b.accounts(),label:s("sales.action.backToAccounts")},title:n.name,meta:e.jsxs(e.Fragment,{children:[e.jsx(k,{tone:n.relationship==="customer"?"ok":n.relationship==="former"?"muted":"neutral",children:s(`sales.relationship.${n.relationship}`)}),e.jsx(k,{children:s("sales.account.ownerChip",{name:d(n.owner_id)})}),e.jsx(le,{source:n.source})]}),actions:e.jsxs(e.Fragment,{children:[w&&!q?e.jsx(aa,{ref:me,variant:"primary",onClick:()=>{de("activity"),Z(!0)},"data-testid":"account-log",children:s("sales.action.log")}):null,e.jsx(sa,{label:s("sales.action.more"),items:Me,testId:"account-menu"})]}),testId:"account-page",children:[ze?e.jsx(Xe,{title:s("sales.transfer.title",{name:n.name}),onCancel:()=>se(!1),primary:{label:s("sales.transfer.ask"),onClick:()=>{se(!1),Ee(!0)},testId:"transfer-ask"},testId:"transfer-panel",children:e.jsx("p",{className:"nexus-sales-p",children:s("sales.transfer.body",{from:d(n.owner_id),who:J})})}):null,Oe?e.jsx("p",{className:"nexus-sales-note",role:"status","data-testid":"transfer-sent",children:s("sales.transfer.sent",{who:J})}):null,e.jsxs("div",{className:"nexus-cc-split nexus-sales-split",children:[e.jsxs("div",{className:"nexus-sales-account",children:[e.jsxs("aside",{className:"nexus-sales-rail","aria-label":s("sales.section.about"),children:[e.jsxs(p,{title:s("sales.section.about"),children:[e.jsx(xe,{items:[{label:s("sales.field.legalName"),value:n.legal_name},...n.tax_id?[{label:s("sales.field.taxId"),value:n.tax_id}]:[],{label:s("sales.field.city"),value:[n.city,n.country].filter(Boolean).join(" · ")},...n.industry?[{label:s("sales.field.industry"),value:n.industry}]:[],...n.since?[{label:s("sales.field.since"),value:na(n.since,l)}]:[],{label:s("sales.field.owner"),value:d(n.owner_id)},...n.backup_owner_id?[{label:s("sales.field.backup"),value:d(n.backup_owner_id)}]:[]]}),(()=>{const a=ra(r.fields??[],n.custom_fields,l,s("sales.yes"),s("sales.no"));return a.length?e.jsx(xe,{items:a,testId:"account-custom-facts"}):null})()]}),e.jsx(p,{title:s("sales.section.contacts"),aside:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"nexus-cc-section-aside",children:r.contacts.length}),w&&X&&_e(r.policy,"contact").write_mode!=="read_only"?e.jsx("button",{ref:ue,type:"button",className:"nexus-link-btn nexus-sales-section-add",onClick:()=>ae(!0),"data-testid":"account-new-contact",children:s("sales.action.newContact")}):null]}),children:r.contacts.length===0?e.jsx(f,{variant:"inline",title:s("sales.contacts.emptyInline")}):e.jsx("ul",{className:"nexus-sales-rail-list","aria-label":s("sales.section.contacts"),children:r.contacts.map(a=>e.jsxs("li",{className:"nexus-sales-rail-item",children:[e.jsx("button",{type:"button",className:"nexus-link-btn nexus-sales-rail-link",onClick:()=>ee(a),"aria-pressed":c?.id===a.id,"data-testid":`contact-${a.id}`,children:a.name}),e.jsxs("span",{className:"nexus-sales-rail-meta",children:[a.role,a.primary?` · ${s("sales.contacts.primary")}`:""]})]},a.id))})})]}),e.jsxs("div",{className:"nexus-sales-stream",children:[e.jsx(Ze,{tabs:He,current:v,onChange:de,label:s("sales.account.views"),id:"account",layout:"page"}),e.jsxs("div",{id:`account-panel-${v}`,role:"tabpanel","aria-labelledby":`account-tab-${v}`,className:"nexus-sales-stream-body",children:[v==="activity"?e.jsxs(e.Fragment,{children:[q?e.jsx(la,{account:n,contacts:r.contacts,provider:fe.owner==="external"?h:null,writeMode:fe.write_mode,approverName:J,save:Ce,reconcile:Ie,onSaved:()=>{ve(!1),oe()},onClose:()=>ve(!0),initialLadder:Fe,initialSummary:Te}):w?e.jsx(oa,{onOpen:()=>Z(!0)}):null,ne?e.jsx("p",{className:"nexus-sales-unavailable",role:"status","data-testid":"activity-unavailable",children:s("sales.source.listUnavailable",{provider:n.source.kind==="external"?n.source.provider:""})}):null,te.length>0?e.jsx(p,{title:s("sales.activity.next"),aside:e.jsx("span",{className:"nexus-cc-section-aside",children:te.length}),link:{href:C.tasks,label:s("sales.today.openTasks")},testId:"account-next",children:e.jsx("ol",{className:"nexus-sales-timeline","aria-label":s("sales.activity.next"),children:te.map(a=>a.kind==="planned"?e.jsxs("li",{className:"nexus-sales-tl-row","data-status":"planned","data-testid":`interaction-${a.row.id}`,children:[e.jsx("span",{className:"nexus-sales-tl-glyph","aria-hidden":!0}),e.jsx("span",{className:"nexus-sales-tl-when",children:ie(a.row.at,s)}),e.jsxs("span",{className:"nexus-sales-tl-body",children:[e.jsxs("span",{className:"nexus-sales-tl-head",children:[e.jsx("span",{className:"nexus-sales-tl-kind",children:s(`sales.kind.${a.row.kind}`)}),e.jsxs("span",{className:"nexus-sales-tl-meta",children:[je(a.row.at,l),a.row.contact_id?` · ${ye(a.row.contact_id)}`:""," · ",d(a.row.by_id)]})]}),e.jsx("span",{className:"nexus-sales-tl-text",children:a.row.summary})]})]},a.key):e.jsxs("li",{className:"nexus-sales-tl-row","data-status":"follow_up","data-overdue":new Date(a.row.due).getTime()<new Date(ta()).getTime()?"1":void 0,"data-testid":`followup-${a.row.id}`,children:[e.jsx("span",{className:"nexus-sales-tl-glyph","aria-hidden":!0}),e.jsx("span",{className:"nexus-sales-tl-when",children:ie(a.row.due,s)}),e.jsx("span",{className:"nexus-sales-tl-body",children:e.jsxs("span",{className:"nexus-sales-tl-head",children:[e.jsx("span",{className:"nexus-sales-tl-kind",children:a.row.title}),e.jsx("span",{className:"nexus-sales-tl-meta",children:d(a.row.assignee_id)}),a.row.task_ref?e.jsxs("a",{href:C.task(a.row.task_ref),className:"nexus-link is-meta nexus-sales-tl-door",children:[s("sales.task.inTasks")," ↗"]}):null]})})]},a.key))})}):null,ne?null:e.jsx(p,{title:s("sales.activity.history"),aside:e.jsx("span",{className:"nexus-cc-section-aside",children:L.length}),link:L.length>0?{href:b.activity(),label:s("sales.action.viewAll")}:void 0,testId:"account-history",children:L.length===0?e.jsx(f,{variant:"inline",title:s("sales.activity.emptyInline")}):e.jsx("ol",{className:"nexus-sales-timeline","aria-label":s("sales.activity.history"),"data-stale":he?"1":void 0,children:L.map(a=>e.jsxs("li",{className:"nexus-sales-tl-row","data-status":a.status,"data-testid":`interaction-${a.id}`,children:[e.jsx("span",{className:"nexus-sales-tl-glyph","aria-hidden":!0}),e.jsx("span",{className:"nexus-sales-tl-when",children:y(a.at,l)}),e.jsxs("span",{className:"nexus-sales-tl-body",children:[e.jsxs("span",{className:"nexus-sales-tl-head",children:[e.jsx("span",{className:"nexus-sales-tl-kind",children:s(`sales.kind.${a.kind}`)}),a.outcome?e.jsx(k,{tone:a.outcome==="declined"?"warn":"muted",children:s(`sales.outcome.${a.outcome}`)}):null,he?e.jsx(k,{tone:"warn",children:s("sales.source.staleShort")}):null,e.jsxs("span",{className:"nexus-sales-tl-meta",children:[je(a.at,l)," · ",d(a.by_id),a.contact_id?` · ${ye(a.contact_id)}`:""]})]}),e.jsx("span",{className:"nexus-sales-tl-text",children:a.summary}),a.next_step?e.jsxs("span",{className:"nexus-sales-tl-next",children:["→ ",a.next_step.title," · ",ie(a.next_step.due,s),a.next_step.task_ref?e.jsxs("a",{href:C.task(a.next_step.task_ref),className:"nexus-link is-meta",children:[" ",s("sales.task.inTasks")," ↗"]}):null]}):null]})]},a.id))})})]}):null,v==="deals"?e.jsxs(e.Fragment,{children:[e.jsx(p,{title:s("sales.section.opportunities"),aside:e.jsx("span",{className:"nexus-cc-section-aside",children:r.opportunities.length}),link:{href:b.pipeline(),label:s("sales.action.openPipeline")},children:r.opportunities.length===0?e.jsx(f,{variant:"inline",title:s("sales.opportunities.emptyInline")}):e.jsx("ul",{className:"nexus-sales-rows is-compact",children:r.opportunities.map(a=>e.jsxs("li",{className:"nexus-sales-row","data-testid":`opportunity-${a.id}`,children:[e.jsxs("span",{className:"nexus-sales-row-main",children:[e.jsx("span",{className:"nexus-sales-row-title",children:a.title}),e.jsxs("span",{className:"nexus-sales-row-meta",children:[s("sales.opportunity.closes",{when:y(a.expected_close,l)})," · ",d(a.owner_id)]})]}),e.jsx("span",{className:"nexus-sales-amount",children:be(a.amount,a.currency,l)}),e.jsx(k,{tone:"neutral",children:s(`sales.stage.${a.stage_id}`)})]},a.id))})}),r.requests.length>0||h?e.jsx(p,{title:s("sales.section.requests"),aside:e.jsx("span",{className:"nexus-cc-section-aside",children:r.requests.length}),children:ne?e.jsx("p",{className:"nexus-sales-unavailable",role:"status",children:s("sales.source.listUnavailable",{provider:h??""})}):r.requests.length===0?e.jsx(f,{variant:"inline",title:s("sales.requests.emptyInline")}):e.jsx("ul",{className:"nexus-sales-rows is-compact",children:r.requests.map(a=>e.jsxs("li",{className:"nexus-sales-row","data-testid":`request-${a.id}`,children:[e.jsx("span",{className:"nexus-sales-row-when",children:y(a.created_at,l)}),e.jsxs("span",{className:"nexus-sales-row-main",children:[e.jsx("span",{className:"nexus-sales-row-title",children:a.title}),e.jsx("span",{className:"nexus-sales-row-meta",children:a.lane})]}),e.jsx(we,{tone:a.status==="quoted"?"ok":a.status==="closed"?"muted":"neutral",children:s(`sales.requestStatus.${a.status}`)}),e.jsx(le,{source:a.source,testId:`source-${a.id}`})]},a.id))})}):null]}):null,v==="quotes"?e.jsx(p,{title:s("sales.section.quotes"),aside:e.jsx("span",{className:"nexus-cc-section-aside",children:r.quotes.length}),link:{href:b.quotes(),label:s("sales.action.viewAll")},children:r.quotes.length===0?e.jsx(f,{variant:"inline",title:s("sales.quotes.emptyInline")}):e.jsx("ul",{className:"nexus-sales-rows is-compact",children:r.quotes.map(a=>e.jsxs("li",{className:"nexus-sales-row","data-testid":`quote-${a.id}`,children:[e.jsx("span",{className:"nexus-sales-row-when",children:a.sent_at?y(a.sent_at,l):"—"}),e.jsxs("span",{className:"nexus-sales-row-main",children:[e.jsxs("span",{className:"nexus-sales-row-title",children:[a.title," · v",a.version]}),e.jsx("span",{className:"nexus-sales-row-meta",children:a.body_ref?e.jsxs("a",{href:a.body_ref.kind==="quote_draft"?C.quoteDraft(a.body_ref.ref):"#",className:"nexus-link is-meta",children:[a.body_ref.label," ↗"]}):null})]}),e.jsx("span",{className:"nexus-sales-amount",children:be(a.amount,a.currency,l)}),e.jsx(we,{tone:a.status==="accepted"?"ok":a.status==="declined"||a.status==="expired"?"muted":a.status==="sent"?"neutral":"warn",children:s(`sales.quoteStatus.${a.status}`)})]},a.id))})}):null,v==="documents"?e.jsx(p,{title:s("sales.section.documents"),aside:e.jsx("span",{className:"nexus-cc-section-aside",children:r.documents.length}),testId:"account-documents",children:r.documents.length===0?e.jsx(f,{variant:"inline",title:s("sales.documents.emptyInline")}):e.jsx("ul",{className:"nexus-sales-rows is-compact",children:r.documents.map(a=>e.jsxs("li",{className:"nexus-sales-row",children:[e.jsx("span",{className:"nexus-sales-row-when",children:y(a.at,l)}),e.jsxs("span",{className:"nexus-sales-row-main",children:[e.jsx("span",{className:"nexus-sales-row-title",children:a.name}),e.jsx("span",{className:"nexus-sales-row-meta",children:s(`sales.docKind.${a.kind}`)})]})]},a.id))})}):null]})]})]}),Ve&&X?e.jsx(ca,{accounts:[{id:n.id,name:n.name}],accountId:n.id,fields:ce,create:X,onClose:()=>ae(!1),onCreated:a=>{ae(!1),ee(a),oe()},returnFocusTo:ue.current}):c?e.jsxs(ea,{kind:s("sales.kind.contact"),title:c.name,subtitle:e.jsx(le,{source:c.source}),onClose:()=>ee(null),testId:"contact-inspector",children:[e.jsxs(ke,{idiom:"rule",title:s("sales.section.identity"),children:[e.jsx(j,{label:s("sales.field.role"),children:c.role}),c.email?e.jsx(j,{label:s("sales.field.email"),children:c.email}):null,c.phone?e.jsx(j,{label:s("sales.field.phone"),children:c.phone}):null,e.jsx(ia,{defs:ce,values:c.custom_fields,testIdPrefix:"contact-cf"}),e.jsx(j,{label:s("sales.field.account"),children:e.jsx(Re,{href:Pe(b.account(n.id)),className:"nexus-link",children:n.name})})]}),e.jsx(ke,{idiom:"rule",title:s("sales.section.activity"),children:r.interactions.filter(a=>a.contact_id===c.id).slice(0,3).map(a=>e.jsx(j,{label:`${y(a.at,l)} · ${s(`sales.kind.${a.kind}`)}`,children:a.summary},a.id))})]}):null]})]})}})}qe.__docgenInfo={description:`The account page — the centre of the product (08 §2), re-cut 2026-10-11 (owner: *"very overloaded"*). One header
line (DS-2005): title · relationship · owner · the source chip · **Log interaction** (the one primary action,
) · \`⋯\`. Then **one rail and one stream**: the rail holds *About* (identity and owners as \`Facts\`) and
*Contacts*; the stream is the account's views — **Activity · Deals · Quotes · Documents** (\`LocalTabs\`, DS-2006:
views of one page) — and Activity is where the work happens: the log composer (DS-6107) at the top, then *Next*
(planned interactions and follow-ups, soonest first) and *History* (DS-6104, newest first). A list the person may
not read is absent (08 §2). Both worlds, the same page: only the chip and the ladder's words differ.`,methods:[],displayName:"AccountScreen",props:{view:{required:!0,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"AccountView"}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:""},provider:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},personName:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => string",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"string"}}},description:""},personaId:{required:!0,tsType:{name:"string"},description:""},canAct:{required:!0,tsType:{name:"boolean"},description:""},approverName:{required:!0,tsType:{name:"string"},description:""},save:{required:!0,tsType:{name:"signature",type:"function",raw:"(input: LogInteractionInput & { force?: boolean }) => Promise<SaveOutcome>",signature:{arguments:[{type:{name:"intersection",raw:"LogInteractionInput & { force?: boolean }",elements:[{name:"LogInteractionInput"},{name:"signature",type:"object",raw:"{ force?: boolean }",signature:{properties:[{key:"force",value:{name:"boolean",required:!1}}]}}]},name:"input"}],return:{name:"Promise",elements:[{name:"union",raw:`| { status: "saved"; id: string; source: SourceRef }
| { status: "pending_approval"; approver_id: string; approval_ref: string }
| { status: "pending_external" }
| { status: "rejected"; errors: { field: string; message: string }[] }
| { status: "conflict"; diff: { field: string; mine: string; theirs: string }[] }
| { status: "unknown"; idempotency_key: string }
| { status: "unavailable" }
| { status: "denied"; reason: "read_only" | "no_relation" }`,elements:[{name:"signature",type:"object",raw:'{ status: "saved"; id: string; source: SourceRef }',signature:{properties:[{key:"status",value:{name:"literal",value:'"saved"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"source",value:{name:"union",raw:`| { kind: "native" }
| { kind: "external"; provider: string; external_id: string; verified_at: string; state: "live" | "stale" | "unavailable" }`,elements:[{name:"signature",type:"object",raw:'{ kind: "native" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"native"',required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "external"; provider: string; external_id: string; verified_at: string; state: "live" | "stale" | "unavailable" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"external"',required:!0}},{key:"provider",value:{name:"string",required:!0}},{key:"external_id",value:{name:"string",required:!0}},{key:"verified_at",value:{name:"string",required:!0}},{key:"state",value:{name:"union",raw:'"live" | "stale" | "unavailable"',elements:[{name:"literal",value:'"live"'},{name:"literal",value:'"stale"'},{name:"literal",value:'"unavailable"'}],required:!0}}]}}],required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "pending_approval"; approver_id: string; approval_ref: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"pending_approval"',required:!0}},{key:"approver_id",value:{name:"string",required:!0}},{key:"approval_ref",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "pending_external" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"pending_external"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "rejected"; errors: { field: string; message: string }[] }',signature:{properties:[{key:"status",value:{name:"literal",value:'"rejected"',required:!0}},{key:"errors",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ field: string; message: string }",signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"message",value:{name:"string",required:!0}}]}}],raw:"{ field: string; message: string }[]",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "conflict"; diff: { field: string; mine: string; theirs: string }[] }',signature:{properties:[{key:"status",value:{name:"literal",value:'"conflict"',required:!0}},{key:"diff",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ field: string; mine: string; theirs: string }",signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"mine",value:{name:"string",required:!0}},{key:"theirs",value:{name:"string",required:!0}}]}}],raw:"{ field: string; mine: string; theirs: string }[]",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "unknown"; idempotency_key: string }',signature:{properties:[{key:"status",value:{name:"literal",value:'"unknown"',required:!0}},{key:"idempotency_key",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "unavailable" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"unavailable"',required:!0}}]}},{name:"signature",type:"object",raw:'{ status: "denied"; reason: "read_only" | "no_relation" }',signature:{properties:[{key:"status",value:{name:"literal",value:'"denied"',required:!0}},{key:"reason",value:{name:"union",raw:'"read_only" | "no_relation"',elements:[{name:"literal",value:'"read_only"'},{name:"literal",value:'"no_relation"'}],required:!0}}]}}]}],raw:"Promise<SaveOutcome>"}}},description:""},reconcile:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => Promise<{ found: boolean; id?: string }>",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"Promise",elements:[{name:"signature",type:"object",raw:"{ found: boolean; id?: string }",signature:{properties:[{key:"found",value:{name:"boolean",required:!0}},{key:"id",value:{name:"string",required:!1}}]}}],raw:"Promise<{ found: boolean; id?: string }>"}}},description:""},onSaved:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},createContact:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: NewContactInput) => Promise<Contact>",signature:{arguments:[{type:{name:"NewContactInput"},name:"input"}],return:{name:"Promise",elements:[{name:"Contact"}],raw:"Promise<Contact>"}}},description:" (2): the contact door from the account's *Contacts* section (`PUT /accounts/{id}/contacts`)"},contactFields:{required:!1,tsType:{name:"Array",elements:[{name:"CustomFieldDef"}],raw:"CustomFieldDef[]"},description:": the contact record type's custom fields (the form asks them; the inspector shows them)",defaultValue:{value:"[]",computed:!1}},initialNewContact:{required:!1,tsType:{name:"boolean"},description:"a story: the contact door open",defaultValue:{value:"false",computed:!1}},initialLog:{required:!1,tsType:{name:"boolean"},description:"open the log composer on arrival (`?log=1`) or in a story",defaultValue:{value:"false",computed:!1}},initialLadder:{required:!1,tsType:{name:"union",raw:`| { kind: "draft" }
| { kind: "saving" }
| { kind: "pending_external" }
| { kind: "pending_approval"; approver: string }
| { kind: "saved"; provider: string | null }
| { kind: "rejected"; errors: { field: string; message: string }[] }
| { kind: "conflict"; diff: { field: string; mine: string; theirs: string }[] }
| { kind: "reconciling" }
| { kind: "not_saved" }
| { kind: "unavailable"; provider: string }
| { kind: "denied"; provider: string }`,elements:[{name:"signature",type:"object",raw:'{ kind: "draft" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"draft"',required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "saving" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"saving"',required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "pending_external" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"pending_external"',required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "pending_approval"; approver: string }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"pending_approval"',required:!0}},{key:"approver",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "saved"; provider: string | null }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"saved"',required:!0}},{key:"provider",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "rejected"; errors: { field: string; message: string }[] }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"rejected"',required:!0}},{key:"errors",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ field: string; message: string }",signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"message",value:{name:"string",required:!0}}]}}],raw:"{ field: string; message: string }[]",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "conflict"; diff: { field: string; mine: string; theirs: string }[] }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"conflict"',required:!0}},{key:"diff",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ field: string; mine: string; theirs: string }",signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"mine",value:{name:"string",required:!0}},{key:"theirs",value:{name:"string",required:!0}}]}}],raw:"{ field: string; mine: string; theirs: string }[]",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "reconciling" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"reconciling"',required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "not_saved" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"not_saved"',required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "unavailable"; provider: string }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"unavailable"',required:!0}},{key:"provider",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "denied"; provider: string }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"denied"',required:!0}},{key:"provider",value:{name:"string",required:!0}}]}}]},description:""},initialSummary:{required:!1,tsType:{name:"string"},description:""},initialTransfer:{required:!1,tsType:{name:"boolean"},description:"a story: the transfer panel open",defaultValue:{value:"false",computed:!1}},initialView:{required:!1,tsType:{name:"union",raw:'"activity" | "deals" | "quotes" | "documents"',elements:[{name:"literal",value:'"activity"'},{name:"literal",value:'"deals"'},{name:"literal",value:'"quotes"'},{name:"literal",value:'"documents"'}]},description:"a story: start on a view other than Activity",defaultValue:{value:'"activity"',computed:!1}}}};const Sa={title:"Apps/NexSales/Account page",component:qe,parameters:{ds:"DS-6104",layout:"fullscreen",workbench:{ns:"sales",path:"/sales/accounts/acc_agrolan"},docs:{description:{component:`Account page (DS-6104 timeline · DS-6107 log composer · composes DS-2005 header line · DS-2006 views · DS-3031),
re-cut 2026-10-11 (owner: *"very overloaded"*): one rail (About · Contacts) and one stream — Activity (the composer,
Next, History) · Deals · Quotes · Documents as views of the page; *Log interaction* is the one primary action and
opens the composer in the stream with the save ladder (DS-6102) in its footer.`}}},args:{provider:Ne,personName:We,personaId:"oksana",canAct:!0,approverName:"Ihor Savchuk",save:Ue,reconcile:Qe,onSaved:()=>{}}},o=()=>x(g("oksana"),"acc_agrolan"),ua=()=>{const t=o();return t.account.source.kind==="external"&&(t.account.source={...t.account.source,state:"stale"}),t},Le=()=>{const t=o();return t.account.source.kind==="external"&&(t.account.source={...t.account.source,state:"unavailable"}),t},I={name:"Populated · connected (BAS)",args:{view:i(o())}},D={name:"Populated · native",args:{provider:null,view:i(x(g("nazar"),"acc_sofia")),personaId:"nazar",approverName:"Nazar Holub"}},F={name:"Log interaction (draft)",args:{view:i(o()),initialLog:!0}},T={name:"Log interaction · conflict",args:{view:i(o()),initialLog:!0,initialSummary:"Asked for LCL rates.",initialLadder:{kind:"conflict",diff:[{field:"summary",mine:"Asked for LCL rates.",theirs:"Asked for LCL rates; also wants insurance."}]}}},A={name:"Log interaction · pending approval",args:{view:i(o()),initialLog:!0,initialSummary:"Meeting at their office.",initialLadder:{kind:"pending_approval",approver:"Ihor Savchuk"}}},$={name:"Log interaction · not saved",args:{view:i(o()),initialLog:!0,initialSummary:"Visit to the warehouse.",initialLadder:{kind:"not_saved"}}},B={name:"Log interaction · source unavailable",args:{view:i(Le()),initialLog:!0,initialSummary:"Short call.",initialLadder:{kind:"unavailable",provider:Ne}}},P={name:"Deals view",args:{view:i(o()),initialView:"deals"}},R={name:"Quotes view",args:{view:i(o()),initialView:"quotes"}},V={name:"Documents view",args:{view:i(o()),initialView:"documents"}},z={name:"Source stale",args:{view:i(ua())}},O={name:"Source unavailable · last copy",args:{view:i(Le())}},_={name:"New contact from the Contacts section",args:{provider:null,view:i(x(g("nazar"),"acc_sofia")),personaId:"nazar",approverName:"Nazar Holub",createContact:async t=>({id:"ct_new",account_id:t.account_id,name:t.name,role:t.role??"",email:t.email,phone:t.phone,primary:!1,source:{kind:"native"}}),initialNewContact:!0}},N={name:"Custom fields in the rail · head of sales",args:{view:i(x(g("ihor"),"acc_poltava")),personaId:"ihor",contactFields:Se(g("ihor")).schemas.find(t=>t.record_type==="contact").fields}},E={name:"Custom fields in the rail · rep (financial hidden)",args:{view:i(x(g("oksana"),"acc_poltava"))}},H={name:"New contact · custom fields (Department)",args:{view:i(x(g("ihor"),"acc_poltava")),personaId:"ihor",contactFields:Se(g("ihor")).schemas.find(t=>t.record_type==="contact").fields,createContact:async t=>({id:"ct_new",account_id:t.account_id,name:t.name,role:t.role??"",email:t.email,phone:t.phone,primary:!1,source:{kind:"native"},custom_fields:t.custom_fields}),initialNewContact:!0}},M={name:"Transfer ownership (ActionPanel)",args:{view:i(o()),initialTransfer:!0}},Q={name:"Member who cannot act",args:{view:i(o()),canAct:!1}},U={args:{view:S("loading")}},W={name:"Not found (= no access)",args:{view:S("notFound")}},K={args:{view:S("error")}},Y={args:{view:S("denied")}},G={args:{view:S("offline")}},qa=["Connected","Native","LogInteraction","LadderConflict","LadderPendingApproval","LadderNotSaved","LadderUnavailable","Deals","Quotes","Documents","Stale","SourceUnavailable","NewContact","CustomFieldsHead","CustomFieldsRep","NewContactWithFields","Transfer","ReadOnly","Loading","NotFound","Error","Denied","Offline"];I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Populated · connected (BAS)",
  args: {
    view: ready(agrolan())
  }
}`,...I.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Populated · native",
  args: {
    provider: null,
    view: ready(store.account(as("nazar"), "acc_sofia")),
    personaId: "nazar",
    approverName: "Nazar Holub"
  }
}`,...D.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Log interaction (draft)",
  args: {
    view: ready(agrolan()),
    initialLog: true
  }
}`,...F.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: "Log interaction · not saved",
  args: {
    view: ready(agrolan()),
    initialLog: true,
    initialSummary: "Visit to the warehouse.",
    initialLadder: {
      kind: "not_saved"
    }
  }
}`,...$.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Deals view",
  args: {
    view: ready(agrolan()),
    initialView: "deals"
  }
}`,...P.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Quotes view",
  args: {
    view: ready(agrolan()),
    initialView: "quotes"
  }
}`,...R.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Documents view",
  args: {
    view: ready(agrolan()),
    initialView: "documents"
  }
}`,...V.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Source stale",
  args: {
    view: ready(stale())
  }
}`,...z.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Source unavailable · last copy",
  args: {
    view: ready(unavailable())
  }
}`,...O.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:" (2): the contact door from the account's *Contacts* section — the account is given, the line first",..._.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Custom fields in the rail · head of sales",
  args: {
    view: ready(store.account(as("ihor"), "acc_poltava")),
    personaId: "ihor",
    contactFields: store.fields(as("ihor")).schemas.find(s => s.record_type === "contact")!.fields
  }
}`,...N.parameters?.docs?.source},description:{story:": the organization's custom fields in the rail's *About* (schema order) — a head of sales sees the financial one (Settlement), a rep does not ().",...N.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Custom fields in the rail · rep (financial hidden)",
  args: {
    view: ready(store.account(as("oksana"), "acc_poltava"))
  }
}`,...E.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Transfer ownership (ActionPanel)",
  args: {
    view: ready(agrolan()),
    initialTransfer: true
  }
}`,...M.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "Member who cannot act",
  args: {
    view: ready(agrolan()),
    canAct: false
  }
}`,...Q.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("loading")
  }
}`,...U.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Not found (= no access)",
  args: {
    view: state("notFound")
  }
}`,...W.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("error")
  }
}`,...K.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("denied")
  }
}`,...Y.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("offline")
  }
}`,...G.parameters?.docs?.source}}};export{I as Connected,N as CustomFieldsHead,E as CustomFieldsRep,P as Deals,Y as Denied,V as Documents,K as Error,T as LadderConflict,$ as LadderNotSaved,A as LadderPendingApproval,B as LadderUnavailable,U as Loading,F as LogInteraction,D as Native,_ as NewContact,H as NewContactWithFields,W as NotFound,G as Offline,R as Quotes,Q as ReadOnly,O as SourceUnavailable,z as Stale,M as Transfer,qa as __namedExportsOrder,Sa as default};
