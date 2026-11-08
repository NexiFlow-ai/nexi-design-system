import{ak as F,j as t,r as ue,a as me,B as U,V as ke,ac as be,X as le,D as Re,q as de}from"./iframe-C_4ax-Jm.js";/* empty css                */import{A as xe,s as Ae}from"./AuthScreens-CPBAyE5i.js";import{O as l}from"./OrganizationSupport-Ca5rdkUX.js";import"./preload-helper-PPVm8Dsz.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./BrandMark-ZJnyD0IE.js";import"./Trace-BSKaAXMd.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./chatApi-DU7mAKQS.js";import"./credential-Ch26UJlM.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./organizationRequests-CxMYSAGe.js";import"./nav-C8-c-HcF.js";import"./store-C-il-aT_.js";import"./runtime-Cwmke1Hn.js";import"./AskBar-D6qFedOb.js";import"./VoiceWaves-CVFNr488.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./AskPanel-DKkH7ynl.js";import"./AskSurface-B8PUJCZ9.js";import"./ConversationFrame-crdlsIAN.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./HandOver-BZSm7-D2.js";import"./LobbyThread-9xK7Bd9J.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./users-w3fldoSO.js";import"./SpinSettings-DNlEaodc.js";const Ee={pending:"warn",pending_second:"warn",active:"ok",expired:"muted",revoked:"muted",refused:"muted"};function E(e,s){try{return new Intl.DateTimeFormat(s,{dateStyle:"medium",timeStyle:"short"}).format(new Date(e))}catch{return e}}function ge({grant:e,onApprove:s,onRefuse:i,onRevoke:d,testId:x}){const{t:o,locale:u}=F(),a=ue.useId(),Z=ue.useId(),v=e.resources.map(A=>A.label).join(" · "),n=e.canApprove!==!1,f=e.canRevoke!==!1,ve=`${v} · ${o(`core.support.access.state.${e.state}`)}`;return t.jsxs("li",{className:"nexus-cc-support-access-row","aria-label":ve,"data-state":e.state,"data-testid":x??`support-access-${e.grantId}`,children:[t.jsxs("div",{className:"nexus-cc-support-access-head",children:[t.jsx("p",{className:"nexus-cc-support-access-ask",children:o("core.support.access.ask",{resources:v,hours:String(e.hours),reason:e.reason})}),t.jsx(me,{tone:Ee[e.state],size:"xs",children:o(`core.support.access.state.${e.state}`)})]}),t.jsx("p",{className:"nexus-cc-platform-quiet",children:o("core.support.access.who",{case:e.caseKey,name:e.requestedBy,when:E(e.requestedAt,u)})}),e.state==="pending"?t.jsxs("div",{className:"nexus-cc-support-access-actions",children:[t.jsx(U,{size:"sm",variant:"primary","aria-disabled":!n||void 0,"aria-describedby":n?void 0:a,onClick:n&&s?()=>s(e.grantId):void 0,"aria-label":o("core.support.access.approveName",{resources:v}),"data-testid":"support-access-approve",children:o("core.support.access.approve")}),t.jsx(U,{size:"sm",onClick:i?()=>i(e.grantId):void 0,"aria-label":o("core.support.access.refuseName",{resources:v}),"data-testid":"support-access-refuse",children:o("core.support.access.refuse")}),n?null:t.jsx("p",{id:a,className:"nexus-cc-platform-quiet","data-testid":"support-access-cannot",children:o("core.support.access.cannotApprove")})]}):null,e.state==="pending_second"?t.jsx("p",{className:"nexus-cc-platform-quiet","data-testid":"support-access-second",children:o("core.support.access.secondApproval")}):null,e.state==="active"?t.jsxs("div",{className:"nexus-cc-support-access-actions",children:[e.expiresAt?t.jsx("p",{className:"nexus-cc-platform-quiet","aria-live":"off","data-testid":"support-access-until",children:o("core.support.access.until",{when:E(e.expiresAt,u)})}):null,t.jsx(U,{size:"sm","aria-disabled":!f||void 0,"aria-describedby":f?void 0:Z,onClick:f&&d?()=>d(e.grantId):void 0,"aria-label":o("core.support.access.revokeName",{resources:v}),"data-testid":"support-access-revoke",children:o("core.support.access.revoke")}),f?null:t.jsx("p",{id:Z,className:"nexus-cc-platform-quiet","data-testid":"support-access-cannot-revoke",children:o("core.support.access.cannotRevoke")})]}):null,e.state==="revoked"&&e.revokedAt?t.jsx("p",{className:"nexus-cc-platform-quiet","data-testid":"support-access-revoked",children:e.revokedBy?o("core.support.access.revokedBy",{name:e.revokedBy,when:E(e.revokedAt,u)}):o("core.support.access.revokedAt",{when:E(e.revokedAt,u)})}):null,e.reads&&e.reads.length?t.jsxs("div",{className:"nexus-cc-support-access-reads",children:[t.jsx("p",{className:"nexus-cc-platform-quiet",children:o("core.support.access.reads",{n:String(e.reads.length)})}),t.jsx("ul",{className:"nexus-cc-support-access-readlist",children:e.reads.map((A,we)=>t.jsx("li",{children:o("core.support.access.read",{label:A.label,when:E(A.at,u),name:A.by})},we))})]}):null]})}function k({grants:e,onApprove:s,onRefuse:i,onRevoke:d,testId:x="support-access-list"}){const{t:o}=F();return t.jsx("ul",{className:"nexus-cc-support-access-list","aria-label":o("core.support.access.title"),"data-testid":x,children:e.map(u=>t.jsx(ge,{grant:u,onApprove:s,onRefuse:i,onRevoke:d},u.grantId))})}ge.__docgenInfo={description:"",methods:[],displayName:"SupportAccessRow",props:{grant:{required:!0,tsType:{name:"SupportGrantView"},description:""},onApprove:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onRefuse:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onRevoke:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};k.__docgenInfo={description:"",methods:[],displayName:"SupportAccessList",props:{grants:{required:!0,tsType:{name:"Array",elements:[{name:"SupportGrantView"}],raw:"SupportGrantView[]"},description:""},onApprove:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onRefuse:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onRevoke:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"support-access-list"',computed:!1}}}};const Oe={new:"neutral",triage:"neutral",in_progress:"ok",waiting_on_customer:"warn",resolved:"ok",closed:"muted"};function _e(e,s){try{return new Intl.DateTimeFormat(s,{dateStyle:"medium",timeStyle:"short"}).format(new Date(e))}catch{return e}}function m({result:e,onNewRequest:s,onOpenCase:i,onApprove:d,onRefuse:x,onRevoke:o,actionError:u}){const{t:a,locale:Z}=F(),v=[{key:"key",header:a("core.support.cases.col.case"),render:n=>t.jsx("strong",{children:n.key}),width:"6rem"},{key:"title",header:a("core.support.cases.col.title"),render:n=>n.title,wrap:!0},{key:"state",header:a("core.support.cases.col.state"),render:n=>t.jsx(me,{tone:Oe[n.state],size:"xs",children:a(`core.support.cases.state.${n.state}`)})},{key:"expected",header:a("core.support.cases.col.expected"),render:n=>n.expectedReplyAt?_e(n.expectedReplyAt,Z):"—"},{key:"update",header:a("core.support.cases.col.update"),render:n=>n.lastUpdate??"—",wrap:!0}];return t.jsx(ke,{width:"wide",layout:"dense",title:a("core.support.help.title"),actions:t.jsx(U,{variant:"primary",size:"toolbar",onClick:s,"aria-label":a("core.support.help.newRequestName"),"data-testid":"support-new-request",children:a("core.support.help.newRequest")}),testId:"screen-help-support",children:t.jsx(be,{result:e,empty:{title:a("core.support.cases.empty.title"),body:a("core.support.cases.empty.body")},children:n=>t.jsxs(t.Fragment,{children:[n.suspended?t.jsx("p",{className:"nexus-cc-support-notice",role:"status","data-testid":"support-suspended-notice",children:a("core.support.help.suspended")}):null,t.jsx(le,{title:a("core.support.cases.title"),testId:"support-cases-section",children:n.cases.length?t.jsx(Re,{rows:n.cases,columns:v,rowKey:f=>f.key,onOpen:i?f=>i(f.key):void 0,caption:a("core.support.cases.title"),testId:"support-cases-table"}):n.unavailable?t.jsx(de,{title:a("core.support.cases.unavailable.title"),body:a("core.support.cases.unavailable.body"),variant:"inline",testId:"support-cases-unavailable"}):t.jsx(de,{title:a("core.support.cases.empty.title"),body:a("core.support.cases.empty.body"),variant:"inline",testId:"support-cases-empty"})}),t.jsxs(le,{title:a("core.support.access.title"),testId:"support-access-section",children:[u?t.jsx("p",{className:"nexus-cc-support-notice",role:"alert","data-testid":"support-access-action-error",children:u}):null,n.grants.length?t.jsx(k,{grants:n.grants,onApprove:d,onRefuse:x,onRevoke:o}):t.jsx(de,{title:a("core.support.access.empty.title"),body:a("core.support.access.empty.body"),variant:"inline",testId:"support-access-empty"})]})]})})})}m.__docgenInfo={description:"",methods:[],displayName:"HelpSupportScreen",props:{result:{required:!0,tsType:{name:"DataState",elements:[{name:"HelpSupportData"}],raw:"DataState<HelpSupportData>"},description:""},onNewRequest:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onOpenCase:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:""},onApprove:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onRefuse:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onRevoke:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},actionError:{required:!1,tsType:{name:"string"},description:"the last decision's refusal in the reader's words (a 409: someone decided first · the window closed)"}}};const Rt={title:"Apps/NexCore/Support",parameters:{ds:"DS-6909",layout:"fullscreen",workbench:{ns:"core",path:"/core/help?as=owner"},docs:{description:{component:` S0 — the NexCore side of Platform Customer Care, as UAT-1 composition stories (rule 32):
**DS-6909 Help & support** · **DS-6910 Support access row** · **DS-6913 Organization › Support** · the suspended
organization's public support door (). Every line is a synthetic fixture — *ACME Manufacturing*, Bohdan
(member), Olena (administrator), Yulia (NEXUS support, first name only). A customer surface never shows an
internal item key, a mechanism word or a balance; an operator surface never shows a secret, a prompt or a payload.`}}}},p=e=>({state:"ready",data:e}),pe=()=>{},r=e=>{throw new globalThis.Error(e)},c=e=>t.jsx("div",{className:"nexus-cc-page","data-width":"wide",children:e}),S=e=>e.textContent??"",Te=/\b(PDP|grant row|assertion|fingerprint|OPS-\d+|wi_[a-z0-9]+|credits? left|balance)\b|@/i,h=async({canvasElement:e})=>{Te.test(S(e))&&r("a customer surface shows no mechanism, balance, internal key or e-mail")},w={grantId:"sag_0001",caseKey:"SUP-7",resources:[{kind:"flow_run",label:"the run “Weekly digest” of 26 Oct"}],hours:4,reason:"to see why the run stopped at the Google Drive step",requestedBy:"Yulia",requestedAt:"2026-10-27T13:05:00Z",state:"pending"},Ne={...w,grantId:"sag_0002",resources:[{kind:"thread",label:"the chat “Q3 forecast” of the Finance project"}],reason:"to read the turn that failed",canApprove:!1},qe={...w,grantId:"sag_0003",state:"pending_second",resources:[{kind:"source_version",label:"the source “Supplier contracts v4”"}],reason:"to check the file that did not index"},b={...w,grantId:"sag_0004",state:"active",expiresAt:"2026-10-27T18:05:00Z",reads:[{label:"the run “Weekly digest” of 26 Oct",at:"2026-10-27T14:12:00Z",by:"Yulia"},{label:"the run “Weekly digest” of 26 Oct",at:"2026-10-27T14:20:00Z",by:"Yulia"}]},he={...b,grantId:"sag_0005",state:"expired",reads:[{label:"the run “Weekly digest” of 26 Oct",at:"2026-10-26T10:12:00Z",by:"Yulia"}]},ye={...b,grantId:"sag_0006",state:"revoked",revokedBy:"Olena",revokedAt:"2026-10-27T15:00:00Z"},je={...w,grantId:"sag_0007",state:"refused",reads:void 0},He=[{key:"SUP-7",title:"Document processing stopped",state:"in_progress",openedAt:"2026-10-27T13:00:00Z",expectedReplyAt:"2026-10-27T16:00:00Z",lastUpdate:"Yulia asked your administrator to re-check the Google Drive connection."},{key:"SUP-6",title:"Who can see the Finance project?",state:"waiting_on_customer",openedAt:"2026-10-26T09:00:00Z",lastUpdate:"Waiting for your answer: which person should be added?"},{key:"SUP-4",title:"Question about monthly usage",state:"resolved",openedAt:"2026-10-20T09:00:00Z",lastUpdate:"Resolved — the usage page explains the five counted activities."},{key:"SUP-2",title:"Cannot open a shared board",state:"closed",openedAt:"2026-10-12T09:00:00Z"}],L={cases:He,grants:[w,b,he]},y={onNewRequest:()=>{},onOpenCase:()=>{},onApprove:()=>{},onRefuse:()=>{},onRevoke:()=>{}},B={organizationId:"org_acme",asOf:"2026-10-27T13:00:00Z",project:{linked:!0,key:"CUST-ACME",linkedAt:"2026-10-20T09:00:00Z"},engagement:{autonomyCeiling:"A2_safe_repair",firstReplyHours:8},health:[{kind:"connection.unhealthy",severity:"warn",observedAt:"2026-10-27T12:40:00Z",count:3,caseKey:"SUP-7",component:"synapse.connection",errorCode:"auth_failed"},{kind:"graph.run.failed",severity:"critical",observedAt:"2026-10-27T12:10:00Z",count:15,caseKey:"SUP-5",component:"graph.ingestion",errorCode:"binding.needs_credentials",widerIncident:!0},{kind:"flow_run.failed",severity:"info",observedAt:"2026-10-27T06:00:00Z",count:2,component:"flow.run",errorCode:"tool_failed"}],healthAsOf:"2026-10-27T13:00:00Z",lastCaseAt:"2026-10-27T13:00:00Z",cases:[{key:"SUP-7",title:"Document processing stopped",state:"in_progress",slaState:"AT_RISK",expectedReplyAt:"2026-10-27T16:00:00Z",openedAt:"2026-10-27T13:00:00Z",updatedAt:"2026-10-27T14:20:00Z"},{key:"SUP-6",title:"Who can see the Finance project?",state:"waiting_on_customer",slaState:"PAUSED",openedAt:"2026-10-26T09:00:00Z",updatedAt:"2026-10-26T15:00:00Z"},{key:"SUP-5",title:"Slow answers since this morning",state:"triage",slaState:"OK",widerIncident:!0,expectedReplyAt:"2026-10-27T20:00:00Z",openedAt:"2026-10-27T12:00:00Z",updatedAt:"2026-10-27T12:00:00Z"}],grants:[{grantId:"sag_0004",caseKey:"SUP-7",resources:1,state:"active",approvedBy:"Olena",expiresAt:"2026-10-27T18:05:00Z"},{grantId:"sag_0001",caseKey:"SUP-7",resources:1,state:"pending"}],counts:{open:3,waitingOnCustomer:1,slaAtRisk:1,breachedReply:0,incidentsAffecting:1,activeGrants:1}},fe={...B,engagement:void 0,health:[],healthAsOf:void 0,grants:[],counts:{...B.counts,activeGrants:0}},Se={...fe,project:{linked:!1},cases:[],lastCaseAt:void 0,counts:{open:0,waitingOnCustomer:0,slaAtRisk:0,breachedReply:0,incidentsAffecting:0,activeGrants:0}},R={boardHref:e=>`/tasks/p/${e}`,deskHref:e=>`/care/cases?customer=cu_org_${e}`},z={name:"Help & support · cases and access (DS-6909)",render:()=>t.jsx(m,{result:p(L),...y}),play:async e=>{await h(e),e.canvasElement.querySelector('[data-testid="support-new-request"]')||r("one header line with New request"),/SUP-7/.test(S(e.canvasElement))||r("the customer alias is shown")}},V={name:"Help & support · no requests yet",render:()=>t.jsx(m,{result:p({cases:[],grants:[]}),...y}),play:h},K={render:()=>t.jsx(m,{result:{state:"loading"},...y})},M={render:()=>t.jsx(m,{result:{state:"error",retry:pe},...y})},$={render:()=>t.jsx(m,{result:{state:"offline",retry:pe},...y})},O={render:()=>t.jsx(m,{result:{state:"denied"},...y})},_={name:"Help & support · at 0 % credits (identical, )",render:()=>t.jsx(m,{result:p(L),...y}),play:h},T={name:"Help & support · suspended organization, running session",render:()=>t.jsx(m,{result:p({...L,suspended:!0}),...y}),play:async e=>{await h(e),e.canvasElement.querySelector('[data-testid="support-suspended-notice"]')||r("the suspended line is shown"),e.canvasElement.querySelector('[data-testid="support-new-request"]')||r("New request stays available")}},W={...z,name:"Help & support · українською",globals:{locale:"uk"}},P={name:"Support access rows · every state (DS-6910)",parameters:{ds:"DS-6910"},render:()=>c(t.jsx(k,{grants:[w,Ne,qe,b,he,ye,je],onApprove:()=>{},onRefuse:()=>{},onRevoke:()=>{}})),play:async e=>{await h(e);const s=e.canvasElement.querySelector('[data-testid="support-access-sag_0002"] [data-testid="support-access-approve"]');(!s||s.getAttribute("aria-disabled")!=="true")&&r("a reader without read on the resource cannot approve ()"),e.canvasElement.querySelector('[data-testid="support-access-sag_0002"] [data-testid="support-access-cannot"]')||r("the disabled Approve says why");const i=e.canvasElement.querySelector('[data-testid="support-access-sag_0004"]');(!i||!/Revoke|Відкликати/.test(S(i)))&&r("an active grant can be revoked"),/2 /.test(S(i))||r("the reads under the grant are listed")}},Y={name:"Support access row · pending",parameters:{ds:"DS-6910"},render:()=>c(t.jsx(k,{grants:[w],onApprove:()=>{},onRefuse:()=>{}})),play:h},X={name:"Support access row · active with reads",parameters:{ds:"DS-6910"},render:()=>c(t.jsx(k,{grants:[b],onRevoke:()=>{}})),play:h},Q={...P,name:"Support access rows · українською",globals:{locale:"uk"}},De={...b,grantId:"sag_0008",canRevoke:!1,reads:[]},ze={...ye,grantId:"sag_0009",revokedBy:void 0},J={name:"Support access row · active, this reader cannot revoke (S4)",parameters:{ds:"DS-6910"},render:()=>c(t.jsx(k,{grants:[De,ze],onRevoke:()=>{}})),play:async e=>{await h(e);const s=e.canvasElement.querySelector('[data-testid="support-access-sag_0008"] [data-testid="support-access-revoke"]');(!s||s.getAttribute("aria-disabled")!=="true")&&r("a reader without read on every resource (and not the owner) cannot revoke"),e.canvasElement.querySelector('[data-testid="support-access-sag_0008"] [data-testid="support-access-cannot-revoke"]')||r("the disabled Revoke says why"),e.canvasElement.querySelector('[data-testid="support-access-sag_0009"] [data-testid="support-access-revoked"]')||r("a revoked row says when, with no staff name on the wire")}},ee={name:"Help & support · the desk did not answer (S4, `available: false`)",render:()=>t.jsx(m,{result:p({...L,cases:[],unavailable:!0}),...y}),play:async e=>{await h(e),e.canvasElement.querySelector('[data-testid="support-cases-unavailable"]')||r("an unavailable desk is said, not shown as 'no requests'"),e.canvasElement.querySelector('[data-testid="support-cases-empty"]')&&r("the empty state is not the unavailable state"),e.canvasElement.querySelector('[data-testid="support-new-request"]')||r("New request stays available")}},I={name:"Help & support · a decision was refused (S4, 409)",render:()=>{const{t:e}=F();return t.jsx(m,{result:p(L),...y,actionError:e("core.support.access.error.GRANT_NOT_PENDING")})},play:async e=>{await h(e);const s=e.canvasElement.querySelector('[data-testid="support-access-action-error"]');(!s||s.getAttribute("role")!=="alert")&&r("the refusal is one sentence, announced")}},te={...I,name:"Help & support · a decision was refused · українською",globals:{locale:"uk"}},g={ds:"DS-6913",workbench:{ns:"core",path:"/core/platform/organizations/org_acme?as=owner"}},C={name:"Organization › Support · health, cases, access, engagement (DS-6913)",parameters:g,render:()=>c(t.jsx(l,{result:p(B),actions:R,onOpenCase:()=>{}})),play:async({canvasElement:e})=>{const s=S(e);/sk-|Bearer |password|BEGIN PRIVATE/i.test(s)&&r("never a secret on an operator surface"),e.querySelector('[data-testid="health-connection.unhealthy"]')||r("a health signal from the closed vocabulary ()"),/A2/.test(s)||r("the autonomy ceiling is shown ()")}},N={name:"Organization › Support · health from the S3 wire ()",parameters:g,render:()=>c(t.jsx(l,{result:p(B),actions:R,onOpenCase:()=>{}})),play:async({canvasElement:e})=>{const s=S(e);e.querySelector('[data-testid="health-graph.run.failed"]')||r("the fingerprint's kind from the closed vocabulary ()"),/graph\.ingestion · binding\.needs_credentials/.test(s)||r("the closed component · error_code are shown ()"),e.querySelector('[data-testid="health-wider-1"]')||r("a fingerprint linked to an incident carries the wider-incident chip ()"),/15 times|15 разів/.test(s)||r("the count is the total occurrences"),/traceback|payload|message:/i.test(s)&&r("never a message or a traceback ()")}},re={name:"Organization › Support · nothing to report",parameters:g,render:()=>c(t.jsx(l,{result:p({...B,health:[],cases:[],grants:[],counts:{open:0,waitingOnCustomer:0,slaAtRisk:0,breachedReply:0,incidentsAffecting:0,activeGrants:0}}),actions:R}))},q={name:"Organization › Support · linked project, the S2 wire",parameters:g,render:()=>c(t.jsx(l,{result:p(fe),actions:R,onOpenCase:()=>{}})),play:async({canvasElement:e})=>{const s=S(e),i=e.querySelector('[data-testid="org-support-open-board"]'),d=e.querySelector('[data-testid="org-support-open-desk"]');(!i||!/\/tasks\/p\/CUST-ACME$/.test(i.getAttribute("href")??""))&&r("*Open board* is the provider board's registry path ()"),(!d||!/\/care\/cases\?customer=cu_org_org_acme$/.test(d.getAttribute("href")??""))&&r("*Open in the desk* filters the desk to this customer ( §3)"),e.querySelector('[data-testid="org-support-link-project"]')&&r("a linked project offers no *Link project*"),(!/SUP-7/.test(s)||/Yulia|Olena/.test(s))&&r("the rows carry the alias and never a person ()"),e.querySelector('[data-testid="org-support-wider-SUP-5"]')||r("a wider incident is marked ()"),e.querySelector('[data-testid="org-support-as-of"]')||r("the counts name their freshness ()")}},j={name:"Organization › Support · not linked yet · Link project",parameters:g,render:()=>c(t.jsx(l,{result:p(Se),actions:{...R,onLinkProject:async()=>{throw new globalThis.Error("The provider board could not be made now; try again later.")}}})),play:async({canvasElement:e})=>{e.querySelector('[data-testid="org-support-project-notyet"]')||r("an unlinked organization says *not yet*"),e.querySelector('[data-testid="org-support-open-board"]')&&r("no board door before the link");const s=e.querySelector('[data-testid="org-support-link-project"]');if(!s)return r("*Link project* is offered to the roles that may ()");s.click();for(let i=0;i<20&&!e.querySelector('[data-testid="org-support-link-error"]');i+=1)await new Promise(d=>setTimeout(d,10));e.querySelector('[data-testid="org-support-link-error"]')||r("the refusal is the sentence under the button (R4)")}},H={name:"Organization › Support · not linked yet · a role that may not link",parameters:g,render:()=>c(t.jsx(l,{result:p(Se),actions:R})),play:async({canvasElement:e})=>{e.querySelector('[data-testid="org-support-link-project"]')&&r("no *Link project* without the role")}},se={parameters:g,render:()=>c(t.jsx(l,{result:{state:"empty"}}))},ae={parameters:g,render:()=>c(t.jsx(l,{result:{state:"loading"}}))},ne={parameters:g,render:()=>c(t.jsx(l,{result:{state:"error",retry:pe}}))},D={parameters:g,render:()=>c(t.jsx(l,{result:{state:"denied"}}))},oe={parameters:g,render:()=>c(t.jsx(l,{result:{state:"offline",retry:pe}}))},ie={...C,name:"Organization › Support · українською",globals:{locale:"uk"}};function Pe(){const{t:e}=F();return t.jsxs(xe,{title:e("core.auth.welcome.suspended.title",{name:"ACME Manufacturing"}),lead:e("core.auth.welcome.suspended.lead"),testId:"screen-welcome-suspended",children:[t.jsx("p",{className:"nexus-cc-hint",children:e("core.support.suspended.hint")}),t.jsx(U,{className:"nexus-cc-auth-primary",href:Ae("https://care.example/care/portal/inst_platform_support","acme")??"#","data-testid":"welcome-support-door",children:e("core.support.suspended.door")})]})}const G={name:"Suspended organization · the public support door ()",parameters:{ds:"DS-6909",workbench:{ns:"core",path:"/core/welcome?as=owner"}},render:()=>t.jsx(Pe,{}),play:async({canvasElement:e})=>{const s=e.querySelector('[data-testid="welcome-support-door"]');(!s||s.tagName!=="A")&&r("the support door is a real link — a suspended organization is never walled off from support"),/@|credits|balance/i.test(S(e))&&r("no e-mail, no balance on the door")}},ce={...G,name:"Suspended organization · українською",globals:{locale:"uk"}},xt=["Help","HelpEmpty","HelpLoading","HelpError","HelpOffline","HelpDenied","HelpNoCredits","HelpSuspended","HelpUkrainian","AccessRows","AccessRowPending","AccessRowActive","AccessRowsUkrainian","AccessRowCannotRevoke","HelpDeskUnavailable","HelpDecisionRefused","HelpDecisionRefusedUkrainian","OrganizationSupport","OrganizationSupportHealth","OrganizationSupportHealthy","OrganizationSupportLinked","OrganizationSupportUnlinked","OrganizationSupportUnlinkedReadOnly","OrganizationSupportEmpty","OrganizationSupportLoading","OrganizationSupportError","OrganizationSupportDenied","OrganizationSupportOffline","OrganizationSupportUkrainian","SuspendedOrganizationDoor","SuspendedOrganizationDoorUkrainian"];z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Help & support · cases and access (DS-6909)",
  render: () => <HelpSupportScreen result={ready(HELP)} {...handlers} />,
  play: async ctx => {
    await customerHonest(ctx);
    if (!ctx.canvasElement.querySelector('[data-testid="support-new-request"]')) fails("one header line with New request");
    if (!/SUP-7/.test(text(ctx.canvasElement))) fails("the customer alias is shown");
  }
}`,...z.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Help & support · no requests yet",
  render: () => <HelpSupportScreen result={ready({
    cases: [],
    grants: []
  })} {...handlers} />,
  play: customerHonest
}`,...V.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <HelpSupportScreen result={{
    state: "loading"
  }} {...handlers} />
}`,...K.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <HelpSupportScreen result={{
    state: "error",
    retry
  }} {...handlers} />
}`,...M.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <HelpSupportScreen result={{
    state: "offline",
    retry
  }} {...handlers} />
}`,...$.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <HelpSupportScreen result={{
    state: "denied"
  }} {...handlers} />
}`,...O.parameters?.docs?.source},description:{story:"Help & support never denies a member — the page is a right of membership (); shown for the ladder's completeness.",...O.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Help & support · at 0 % credits (identical, )",
  render: () => <HelpSupportScreen result={ready(HELP)} {...handlers} />,
  play: customerHonest
}`,..._.parameters?.docs?.source},description:{story:"0 % credits: identical to Help () — nothing on this page depends on credits.",..._.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Help & support · suspended organization, running session",
  render: () => <HelpSupportScreen result={ready({
    ...HELP,
    suspended: true
  })} {...handlers} />,
  play: async ctx => {
    await customerHonest(ctx);
    if (!ctx.canvasElement.querySelector('[data-testid="support-suspended-notice"]')) fails("the suspended line is shown");
    if (!ctx.canvasElement.querySelector('[data-testid="support-new-request"]')) fails("New request stays available");
  }
}`,...T.parameters?.docs?.source},description:{story:"A suspended organization's running session: the page works, one status line says what that means here ().",...T.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  ...Help,
  name: "Help & support · українською",
  globals: {
    locale: "uk"
  }
}`,...W.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Support access rows · every state (DS-6910)",
  parameters: {
    ds: "DS-6910"
  },
  render: () => pad(<SupportAccessList grants={[GRANT_PENDING, GRANT_PENDING_CANNOT, GRANT_PENDING_SECOND, GRANT_ACTIVE, GRANT_EXPIRED, GRANT_REVOKED, GRANT_REFUSED]} onApprove={() => undefined} onRefuse={() => undefined} onRevoke={() => undefined} />),
  play: async ctx => {
    await customerHonest(ctx);
    const cannot = ctx.canvasElement.querySelector('[data-testid="support-access-sag_0002"] [data-testid="support-access-approve"]');
    if (!cannot || cannot.getAttribute("aria-disabled") !== "true") fails("a reader without read on the resource cannot approve ()");
    if (!ctx.canvasElement.querySelector('[data-testid="support-access-sag_0002"] [data-testid="support-access-cannot"]')) fails("the disabled Approve says why");
    const active = ctx.canvasElement.querySelector('[data-testid="support-access-sag_0004"]');
    if (!active || !/Revoke|Відкликати/.test(text(active as HTMLElement))) fails("an active grant can be revoked");
    if (!/2 /.test(text(active as HTMLElement))) fails("the reads under the grant are listed");
  }
}`,...P.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Support access row · pending",
  parameters: {
    ds: "DS-6910"
  },
  render: () => pad(<SupportAccessList grants={[GRANT_PENDING]} onApprove={() => undefined} onRefuse={() => undefined} />),
  play: customerHonest
}`,...Y.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Support access row · active with reads",
  parameters: {
    ds: "DS-6910"
  },
  render: () => pad(<SupportAccessList grants={[GRANT_ACTIVE]} onRevoke={() => undefined} />),
  play: customerHonest
}`,...X.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  ...AccessRows,
  name: "Support access rows · українською",
  globals: {
    locale: "uk"
  }
}`,...Q.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Support access row · active, this reader cannot revoke (S4)",
  parameters: {
    ds: "DS-6910"
  },
  render: () => pad(<SupportAccessList grants={[GRANT_ACTIVE_CANNOT_REVOKE, GRANT_REVOKED_NO_NAME]} onRevoke={() => undefined} />),
  play: async ctx => {
    await customerHonest(ctx);
    const revoke = ctx.canvasElement.querySelector('[data-testid="support-access-sag_0008"] [data-testid="support-access-revoke"]');
    if (!revoke || revoke.getAttribute("aria-disabled") !== "true") fails("a reader without read on every resource (and not the owner) cannot revoke");
    if (!ctx.canvasElement.querySelector('[data-testid="support-access-sag_0008"] [data-testid="support-access-cannot-revoke"]')) fails("the disabled Revoke says why");
    if (!ctx.canvasElement.querySelector('[data-testid="support-access-sag_0009"] [data-testid="support-access-revoked"]')) fails("a revoked row says when, with no staff name on the wire");
  }
}`,...J.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  name: "Help & support · the desk did not answer (S4, \`available: false\`)",
  render: () => <HelpSupportScreen result={ready({
    ...HELP,
    cases: [],
    unavailable: true
  })} {...handlers} />,
  play: async ctx => {
    await customerHonest(ctx);
    if (!ctx.canvasElement.querySelector('[data-testid="support-cases-unavailable"]')) fails("an unavailable desk is said, not shown as 'no requests'");
    if (ctx.canvasElement.querySelector('[data-testid="support-cases-empty"]')) fails("the empty state is not the unavailable state");
    if (!ctx.canvasElement.querySelector('[data-testid="support-new-request"]')) fails("New request stays available");
  }
}`,...ee.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Help & support · a decision was refused (S4, 409)",
  render: () => {
    const {
      t
    } = useLocale();
    return <HelpSupportScreen result={ready(HELP)} {...handlers} actionError={t("core.support.access.error.GRANT_NOT_PENDING")} />;
  },
  play: async ctx => {
    await customerHonest(ctx);
    const alert = ctx.canvasElement.querySelector('[data-testid="support-access-action-error"]');
    if (!alert || alert.getAttribute("role") !== "alert") fails("the refusal is one sentence, announced");
  }
}`,...I.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  ...HelpDecisionRefused,
  name: "Help & support · a decision was refused · українською",
  globals: {
    locale: "uk"
  }
}`,...te.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Organization › Support · health, cases, access, engagement (DS-6913)",
  parameters: orgParams,
  render: () => pad(<OrganizationSupportTab result={ready(ORG_SUPPORT)} actions={ORG_HREFS} onOpenCase={() => undefined} />),
  play: async ({
    canvasElement
  }) => {
    const s = text(canvasElement);
    if (/sk-|Bearer |password|BEGIN PRIVATE/i.test(s)) fails("never a secret on an operator surface");
    if (!canvasElement.querySelector('[data-testid="health-connection.unhealthy"]')) fails("a health signal from the closed vocabulary ()");
    if (!/A2/.test(s)) fails("the autonomy ceiling is shown ()");
  }
}`,...C.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Organization › Support · health from the S3 wire ()",
  parameters: orgParams,
  render: () => pad(<OrganizationSupportTab result={ready(ORG_SUPPORT)} actions={ORG_HREFS} onOpenCase={() => undefined} />),
  play: async ({
    canvasElement
  }) => {
    const s = text(canvasElement);
    if (!canvasElement.querySelector('[data-testid="health-graph.run.failed"]')) fails("the fingerprint's kind from the closed vocabulary ()");
    if (!/graph\\.ingestion · binding\\.needs_credentials/.test(s)) fails("the closed component · error_code are shown ()");
    if (!canvasElement.querySelector('[data-testid="health-wider-1"]')) fails("a fingerprint linked to an incident carries the wider-incident chip ()");
    if (!/15 times|15 разів/.test(s)) fails("the count is the total occurrences");
    if (/traceback|payload|message:/i.test(s)) fails("never a message or a traceback ()");
  }
}`,...N.parameters?.docs?.source},description:{story:"S3 ( ·  — 1.195.0): the Health list is the organization's fingerprints — the kind's sentence, the closed `component · error_code`, the count, the last instant, the case alias, the *wider incident* chip; never a message or a traceback.",...N.parameters?.docs?.description}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  name: "Organization › Support · nothing to report",
  parameters: orgParams,
  render: () => pad(<OrganizationSupportTab result={ready({
    ...ORG_SUPPORT,
    health: [],
    cases: [],
    grants: [],
    counts: {
      open: 0,
      waitingOnCustomer: 0,
      slaAtRisk: 0,
      breachedReply: 0,
      incidentsAffecting: 0,
      activeGrants: 0
    }
  })} actions={ORG_HREFS} />)
}`,...re.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Organization › Support · linked project, the S2 wire",
  parameters: orgParams,
  render: () => pad(<OrganizationSupportTab result={ready(ORG_SUPPORT_S2)} actions={ORG_HREFS} onOpenCase={() => undefined} />),
  play: async ({
    canvasElement
  }) => {
    const s = text(canvasElement);
    const board = canvasElement.querySelector<HTMLAnchorElement>('[data-testid="org-support-open-board"]');
    const desk = canvasElement.querySelector<HTMLAnchorElement>('[data-testid="org-support-open-desk"]');
    if (!board || !/\\/tasks\\/p\\/CUST-ACME$/.test(board.getAttribute("href") ?? "")) fails("*Open board* is the provider board's registry path ()");
    if (!desk || !/\\/care\\/cases\\?customer=cu_org_org_acme$/.test(desk.getAttribute("href") ?? "")) fails("*Open in the desk* filters the desk to this customer ( §3)");
    if (canvasElement.querySelector('[data-testid="org-support-link-project"]')) fails("a linked project offers no *Link project*");
    if (!/SUP-7/.test(s) || /Yulia|Olena/.test(s)) fails("the rows carry the alias and never a person ()");
    if (!canvasElement.querySelector('[data-testid="org-support-wider-SUP-5"]')) fails("a wider incident is marked ()");
    if (!canvasElement.querySelector('[data-testid="org-support-as-of"]')) fails("the counts name their freshness ()");
  }
}`,...q.parameters?.docs?.source},description:{story:"S2 ( · ): the project line is linked — *Open board ↗* and *Open in the desk ↗* are the two doors, both in the provider tenant (); the rows are the 1.194.0 metadata — alias · title · state · SLA; never a person, never a note.",...q.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Organization › Support · not linked yet · Link project",
  parameters: orgParams,
  render: () => pad(<OrganizationSupportTab result={ready(ORG_SUPPORT_UNLINKED)} actions={{
    ...ORG_HREFS,
    onLinkProject: async () => {
      throw new globalThis.Error("The provider board could not be made now; try again later.");
    }
  }} />),
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="org-support-project-notyet"]')) fails("an unlinked organization says *not yet*");
    if (canvasElement.querySelector('[data-testid="org-support-open-board"]')) fails("no board door before the link");
    const btn = canvasElement.querySelector<HTMLButtonElement>('[data-testid="org-support-link-project"]');
    if (!btn) return fails("*Link project* is offered to the roles that may ()");
    btn.click();
    for (let i = 0; i < 20 && !canvasElement.querySelector('[data-testid="org-support-link-error"]'); i += 1) await new Promise(r => setTimeout(r, 10));
    if (!canvasElement.querySelector('[data-testid="org-support-link-error"]')) fails("the refusal is the sentence under the button (R4)");
  }
}`,...j.parameters?.docs?.source},description:{story:"S2 (): nothing linked yet — *Link project* for a `support_supervisor` · `provider_owner`; a 409 is the sentence under the button, never a modal.",...j.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Organization › Support · not linked yet · a role that may not link",
  parameters: orgParams,
  render: () => pad(<OrganizationSupportTab result={ready(ORG_SUPPORT_UNLINKED)} actions={ORG_HREFS} />),
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="org-support-link-project"]')) fails("no *Link project* without the role");
  }
}`,...H.parameters?.docs?.source},description:{story:"S2: the same organization read by a `support_agent` — the tab, without the action.",...H.parameters?.docs?.description}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  parameters: orgParams,
  render: () => pad(<OrganizationSupportTab result={{
    state: "empty"
  }} />)
}`,...se.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  parameters: orgParams,
  render: () => pad(<OrganizationSupportTab result={{
    state: "loading"
  }} />)
}`,...ae.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  parameters: orgParams,
  render: () => pad(<OrganizationSupportTab result={{
    state: "error",
    retry
  }} />)
}`,...ne.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: orgParams,
  render: () => pad(<OrganizationSupportTab result={{
    state: "denied"
  }} />)
}`,...D.parameters?.docs?.source},description:{story:"Without `platform.support.read` the tab says who may read it ().",...D.parameters?.docs?.description}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  parameters: orgParams,
  render: () => pad(<OrganizationSupportTab result={{
    state: "offline",
    retry
  }} />)
}`,...oe.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  ...OrganizationSupport,
  name: "Organization › Support · українською",
  globals: {
    locale: "uk"
  }
}`,...ie.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Suspended organization · the public support door ()",
  parameters: {
    ds: "DS-6909",
    workbench: {
      ns: "core",
      path: "/core/welcome?as=owner"
    }
  },
  render: () => <SuspendedDoor />,
  play: async ({
    canvasElement
  }) => {
    const door = canvasElement.querySelector('[data-testid="welcome-support-door"]');
    if (!door || door.tagName !== "A") fails("the support door is a real link — a suspended organization is never walled off from support");
    if (/@|credits|balance/i.test(text(canvasElement))) fails("no e-mail, no balance on the door");
  }
}`,...G.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  ...SuspendedOrganizationDoor,
  name: "Suspended organization · українською",
  globals: {
    locale: "uk"
  }
}`,...ce.parameters?.docs?.source}}};export{X as AccessRowActive,J as AccessRowCannotRevoke,Y as AccessRowPending,P as AccessRows,Q as AccessRowsUkrainian,z as Help,I as HelpDecisionRefused,te as HelpDecisionRefusedUkrainian,O as HelpDenied,ee as HelpDeskUnavailable,V as HelpEmpty,M as HelpError,K as HelpLoading,_ as HelpNoCredits,$ as HelpOffline,T as HelpSuspended,W as HelpUkrainian,C as OrganizationSupport,D as OrganizationSupportDenied,se as OrganizationSupportEmpty,ne as OrganizationSupportError,N as OrganizationSupportHealth,re as OrganizationSupportHealthy,q as OrganizationSupportLinked,ae as OrganizationSupportLoading,oe as OrganizationSupportOffline,ie as OrganizationSupportUkrainian,j as OrganizationSupportUnlinked,H as OrganizationSupportUnlinkedReadOnly,G as SuspendedOrganizationDoor,ce as SuspendedOrganizationDoorUkrainian,xt as __namedExportsOrder,Rt as default};
