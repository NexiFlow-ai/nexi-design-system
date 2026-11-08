import{P as et,I as h,b as le}from"./fixtures-B65KySee.js";import{ak as tt,r as o,j as s,S as je,B as Ie,h as B,V as Be,q as V,w as $,v as M,F as oe,y as st,H as Re,D as Te,A as at,L as it,a as nt}from"./iframe-C_4ax-Jm.js";import{a as R,H as rt}from"./api-COPqCyrr.js";import{d as ot,c as lt}from"./format-BBzwDLam.js";import"./preload-helper-PPVm8Dsz.js";import"./flags--SfV1VDA.js";const ct={preview:(r,l,n)=>R.previewImport(r,l,n),rows:(r,l,n)=>R.importRows(r,l,n),commit:(r,l)=>R.commitImport(r,l),rollback:r=>R.rollbackImport(r),list:r=>R.importBatches(r)},dt=new Set(["committed","failed","partially_rolled_back","rolled_back"]),pt=new Set(["committed","failed","partially_rolled_back"]),mt={account:["name","legal_name","identifiers.UA_EDRPOU","identifiers.UA_IPN","identifiers.EU_VAT","country","city","website","industry","relationship","tags","notes","legal_form"],contact:["display_name","account","title","methods.email","methods.phone","methods.messaging","language","roles"]},Ae=100,ut=["ok","invalid","exact_duplicate","possible_duplicate"];function ht(r,l){let n=r.ok+r.possible_duplicates;for(const c of Object.values(l))c.from==="exact_duplicate"&&c.decision!=="skip"&&(n+=1),c.from==="possible_duplicate"&&c.decision==="skip"&&(n-=1);return Math.max(n,0)}function Ce(r){return Object.fromEntries(Object.entries(r).map(([l,{decision:n,id:c}])=>[l,{decision:n,...c?{id:c}:{}}]))}function H(r){return r instanceof rt?r.body??(r.status===403?{code:"FORBIDDEN"}:{code:"UNAVAILABLE"}):{code:"UNAVAILABLE"}}function De({writeMode:r,provider:l,doors:n=ct,projects:c=[],initialBatch:ee=null,initialRows:D=null,initialStep:Ee="file",initialRecent:te=null,initialError:Ne=null}){const{t,locale:ce}=tt(),_=o.useId(),[p,b]=o.useState(Ee),[se,Oe]=o.useState(ee?.record_type??"account"),[ae,Fe]=o.useState(null),Pe=c.length>1,[E,de]=o.useState(c[0]?.id??"");o.useEffect(()=>{!E&&c[0]&&de(c[0].id)},[c,E]);const[i,v]=o.useState(ee),[k,pe]=o.useState(ee?.mapping??{}),[N,me]=o.useState(D??[]),[ue,he]=o.useState(D?.length??0),[O,Ue]=o.useState(""),[F,fe]=o.useState({}),[Le,P]=o.useState(!1),[g,y]=o.useState(!1),[d,w]=o.useState(Ne),qe=o.useRef(null),[Ve,ie]=o.useState(te??[]),[$e,ge]=o.useState(null),[S,xe]=o.useState(null);o.useEffect(()=>{if(p!=="file"||te||!n.list)return;const e=new AbortController;return n.list(e.signal).then(a=>ie(a),()=>{}),()=>e.abort()},[p,n,te]);const Me=r==="native"||r==="policy_controlled",be=mt[i?.record_type??se],ye=i?.columns??[],we=ye.filter(e=>!k[e.column]).length,m=i?.counts,U=m?ht(m,F):0;o.useEffect(()=>{if(p!=="review"||!i||D)return;const e=new AbortController;return y(!0),n.rows(e.signal,i.id,{offset:0,limit:Ae,state:O||void 0}).then(a=>{me(a.rows),he(a.total),w(null)},a=>{e.signal.aborted||w(H(a))}).finally(()=>{e.signal.aborted||y(!1)}),()=>e.abort()},[p,i,O,n,D]);async function L(e,a){y(!0),w(null);try{a(await e())}catch(f){w(H(f))}finally{y(!1)}}const He=()=>ae&&L(()=>n.preview(ae,se,E||void 0),e=>{v(e),pe(e.mapping),fe({}),b("map")}),We=()=>i&&L(()=>n.commit(i.id,{mapping:k,decisions:Ce(F),dry_run:!0}),e=>{v(e),b("review")}),Xe=async()=>{if(i){y(!0),w(null);try{const e=await n.commit(i.id,{mapping:k,decisions:Ce(F),dry_run:!1});v(e),P(!1),b("done")}catch(e){const a=H(e);w(a),a.code==="VALIDATION"&&(v({...i,state:"failed"}),P(!1),b("done"))}finally{y(!1)}}},_e=()=>i&&L(()=>n.rollback(i.id),e=>{v(e),ie(a=>a.map(f=>f.id===e.id?e:f))});async function Ke(e){ge(e),xe(null);try{const a=await n.rollback(e);ie(f=>f.map(x=>x.id===a.id?a:x))}catch(a){xe(H(a))}finally{ge(null)}}const ve=Ve.filter(e=>dt.has(e.state)),ze=[{key:"when",header:t("sales.import.when"),render:e=>s.jsxs("span",{className:"nexus-sales-muted",children:[ot(e.committed_at??e.created_at,ce)," · ",lt(e.committed_at??e.created_at,ce)]}),width:"150px"},{key:"file",header:t("sales.import.file"),render:e=>s.jsx("span",{className:"nexus-sales-row-title",children:e.file.name})},{key:"type",header:t("sales.import.recordType"),render:e=>t(`sales.import.type.${e.record_type}`),width:"120px"},{key:"state",header:t("sales.import.batchState"),render:e=>s.jsx(je,{tone:e.state==="committed"?"ok":e.state==="failed"?"danger":"muted",children:t(`sales.import.batch.${e.state}`)}),width:"170px"},{key:"counts",header:t("sales.import.result"),render:e=>s.jsx("span",{className:"nexus-sales-muted",children:t("sales.import.receiptShort",{created:String(e.counts.created),merged:String(e.counts.merged),skipped:String(e.counts.skipped)})}),width:"220px"},{key:"undo",header:"",render:e=>pt.has(e.state)?s.jsx(Ie,{size:"sm",variant:"destructive",onClick:()=>{Ke(e.id)},disabled:$e!==null,"data-testid":`import-recent-undo-${e.id}`,children:t("sales.import.undo")}):null,width:"130px"}],Ge=()=>i&&L(()=>n.rows(new AbortController().signal,i.id,{offset:N.length,limit:Ae,state:O||void 0}),e=>{me(a=>[...a,...e.rows]),he(e.total)}),Je=[{key:"file",label:t("sales.import.stepFile")},{key:"map",label:t("sales.import.stepMap")},{key:"review",label:t("sales.import.stepReview"),count:m&&m.invalid+m.exact_duplicates+m.possible_duplicates||void 0},{key:"done",label:t("sales.import.stepDone")}],Qe=e=>e==="ok"?"ok":e==="possible_duplicate"?"warn":"danger",ne=e=>be.includes(e)?t(`sales.import.f.${e}`):e.startsWith("custom_fields.")?e.slice(14):e==="account"?t("sales.import.f.account"):e,Ye=[{key:"row",header:t("sales.import.row"),render:e=>String(e.row_no),width:"70px"},{key:"name",header:t("sales.field.name"),render:e=>e.name||"—"},{key:"state",header:t("sales.import.verdict"),render:e=>s.jsx(je,{tone:Qe(e.state),children:t(`sales.import.state.${e.state}`)}),width:"180px"},{key:"note",header:t("sales.import.decision"),render:e=>{if(e.state==="invalid")return s.jsx("span",{className:"nexus-sales-muted",children:e.invalid.map(I=>`${ne(I.field)} · ${t(`sales.import.reason.${I.reason}`)}`).join(" · ")});if(e.state==="ok")return s.jsx("span",{className:"nexus-sales-muted",children:t("sales.import.decision.create")});const a=e.state==="exact_duplicate"?"skip":"create",f=F[e.row_no]?.decision??a,x=[{value:"create",label:t("sales.import.decision.create")},{value:"skip",label:t("sales.import.decision.skip")},...e.duplicate?.id?[{value:"merge_into",label:t("sales.import.decision.merge_into")}]:[]];return s.jsxs("span",{className:"nexus-sales-import-decision",children:[s.jsx(B,{quiet:!0,label:t("sales.import.decisionFor",{row:String(e.row_no)}),value:f,onChange:I=>fe(Ze=>({...Ze,[e.row_no]:{decision:I,from:e.state,...I==="merge_into"&&e.duplicate?.id?{id:e.duplicate.id}:{}}})),options:x,testId:`decision-${e.row_no}`}),e.duplicate?s.jsx("span",{className:"nexus-sales-muted",children:e.duplicate.row?t("sales.import.sameAsRow",{row:String(e.duplicate.row)}):t("sales.import.matches",{score:String(Math.round(e.duplicate.score*100))})}):null]})},wrap:!0}];if(!Me)return s.jsx(Be,{layout:"dense",title:t("sales.nav.import"),testId:"import-page",children:s.jsx(V,{variant:"quiet",title:t("sales.import.connectedTitle",{provider:l??""}),body:t("sales.import.connectedBody",{provider:l??""}),testId:"import-connected"})});const ke=d?d.code==="VALIDATION"&&d.message?.startsWith("file:")?t(`sales.import.file.${d.message.slice(5)}`):d.code==="VALIDATION"&&d.message==="project_id"?t("sales.import.projectRequired"):d.code==="VALIDATION"&&p==="review"?t("sales.import.refused",{field:d.message?ne(d.message):"—"}):d.code==="CONFLICT"&&d.message?t(`sales.import.conflict.${d.message}`):d.code==="FORBIDDEN"?t("sales.state.denied.title"):t("sales.state.error.title"):null,j=p==="file"?{label:t(g?"sales.import.checking":"sales.import.continue"),onClick:He,disabled:!ae||g,testId:"import-next-map",back:null}:p==="map"?{label:we?t("sales.import.continueSkipping",{n:String(we)}):t("sales.import.continue"),onClick:We,disabled:g,testId:"import-next-review",back:"file"}:{label:t("sales.import.importN",{n:String(U)}),onClick:()=>P(!0),disabled:g||U<=0,testId:"import-next-commit",back:"map"},Se=j.back,re=s.jsxs($,{className:"is-flush",children:[s.jsx(Ie,{variant:"primary",onClick:j.onClick,disabled:j.disabled,"data-testid":j.testId,children:j.label}),Se?s.jsx(M,{tone:"quiet",onClick:()=>b(Se),children:t("sales.action.back")}):null]}),q=ke?s.jsx(Re,{tone:"danger",children:s.jsx("span",{"data-testid":"import-error",children:ke})}):null;return s.jsx(Be,{layout:"dense",title:t("sales.nav.import"),meta:i?s.jsx(nt,{children:i.file.name}):null,tabs:s.jsx(it,{tabs:Je,current:p,onChange:e=>{(e==="file"||i)&&b(e)},label:t("sales.import.steps"),id:"import",layout:"page"}),testId:"import-page",children:s.jsxs("div",{id:`import-panel-${p}`,role:"tabpanel","aria-labelledby":`import-tab-${p}`,"aria-busy":g||void 0,children:[p==="file"?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"nexus-sales-import-file",children:[s.jsx(oe,{label:t("sales.import.recordType"),id:`${_}-type`,children:e=>s.jsx(B,{id:e.id,label:t("sales.import.recordType"),value:se,onChange:a=>Oe(a),options:[{value:"account",label:t("sales.import.type.account")},{value:"contact",label:t("sales.import.type.contact")}],testId:"import-type"})}),Pe?s.jsx(oe,{id:`${_}-project`,label:t("sales.field.project"),hint:t("sales.import.projectHint"),children:e=>s.jsx(B,{id:e.id,label:t("sales.field.project"),value:E,onChange:de,options:c.map(a=>({value:a.id,label:a.name})),testId:"import-project"})}):null,s.jsx(oe,{label:t("sales.import.file"),id:`${_}-file`,hint:t("sales.import.typesHint"),children:e=>s.jsx("input",{...e,ref:qe,type:"file",className:"nexus-input",accept:".csv,.txt,.xlsx,text/csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",onChange:a=>Fe(a.target.files?.[0]??null),"data-testid":"import-file"})}),q,re,s.jsx(st,{children:t("sales.import.fileRule")})]}),ve.length?s.jsxs("section",{className:"nexus-sales-import-recent","aria-labelledby":`${_}-recent`,"data-testid":"import-recent",children:[s.jsx("h2",{id:`${_}-recent`,className:"nexus-sales-h3",children:t("sales.import.recentTitle")}),S?s.jsx(Re,{tone:"danger",children:s.jsx("span",{"data-testid":"import-recent-error",children:S.code==="CONFLICT"&&S.message?t(`sales.import.conflict.${S.message}`):S.code==="FORBIDDEN"?t("sales.state.denied.title"):t("sales.state.error.title")})}):null,s.jsx(Te,{rows:ve,columns:ze,rowKey:e=>e.id,caption:t("sales.import.recentTitle"),testId:"import-recent-table"})]}):null]}):null,p==="map"&&i?s.jsxs("div",{className:"nexus-sales-import-map",children:[s.jsx("p",{className:"nexus-sales-p",children:t("sales.import.fileBody",{file:i.file.name,n:String(i.counts.rows)})}),s.jsxs("table",{className:"nexus-cc-table","data-testid":"import-mapping",children:[s.jsx("caption",{className:"nexus-visually-hidden",children:t("sales.import.stepMap")}),s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:t("sales.import.column")}),s.jsx("th",{scope:"col",children:t("sales.import.field")})]})}),s.jsx("tbody",{children:ye.map(e=>s.jsxs("tr",{children:[s.jsx("td",{children:e.column}),s.jsxs("td",{children:[s.jsx(B,{quiet:!0,label:t("sales.import.fieldFor",{column:e.column}),value:k[e.column]??"",onChange:a=>pe(f=>{const x={...f};return a?x[e.column]=a:delete x[e.column],x}),options:[{value:"",label:t("sales.import.skipColumn")},...be.map(a=>({value:a,label:t(`sales.import.f.${a}`)}))],testId:`map-${e.column}`}),e.proposed_field&&k[e.column]===e.proposed_field?s.jsxs("span",{className:"nexus-sales-muted",children:[" ",t("sales.import.proposed")]}):null]})]},e.column))})]}),q,re]}):null,p==="review"&&i&&m?s.jsxs("div",{className:"nexus-sales-import-review",children:[s.jsx("p",{className:"nexus-sales-p","data-testid":"import-counts",children:t("sales.import.counts",{rows:String(m.rows),ok:String(m.ok),invalid:String(m.invalid),exact:String(m.exact_duplicates),possible:String(m.possible_duplicates)})}),s.jsx(B,{compact:!0,label:t("sales.import.verdict"),value:O,onChange:Ue,options:[{value:"",label:t("sales.filter.any")},...ut.map(e=>({value:e,label:t(`sales.import.state.${e}`)}))],testId:"import-row-filter"}),s.jsx(Te,{rows:N,columns:Ye,rowKey:e=>String(e.row_no),caption:t("sales.import.stepReview"),testId:"import-review"}),N.length<ue?s.jsx($,{children:s.jsx(M,{tone:"quiet",onClick:Ge,disabled:g,"data-testid":"import-more",children:t("sales.import.showMore",{n:String(ue-N.length)})})}):null,q,Le?s.jsx(at,{title:t("sales.import.confirmTitle",{n:String(U)}),onCancel:()=>P(!1),primary:{label:t("sales.import.commit"),onClick:Xe,disabled:g,testId:"import-commit"},testId:"import-confirm",children:s.jsx("p",{className:"nexus-sales-p",children:t("sales.import.confirmBody",{skipped:String(m.rows-U)})})}):re]}):null,p==="done"&&i?s.jsx("div",{className:"nexus-sales-import-done",role:"status","data-testid":"import-done",children:i.state==="rolled_back"?s.jsx(V,{variant:"quiet",title:t("sales.import.undoneTitle"),body:t("sales.import.undoneBody")}):i.state==="partially_rolled_back"?s.jsx(V,{variant:"quiet",title:t("sales.import.partlyUndoneTitle"),body:t("sales.import.partlyUndoneBody",{n:String(i.rollback_blocked_ids.length)})}):i.state==="failed"?s.jsxs(s.Fragment,{children:[s.jsx(V,{variant:"quiet",title:t("sales.import.failedTitle"),body:d?.code==="VALIDATION"?t("sales.import.refused",{field:d.message?ne(d.message):"—"}):t("sales.import.failedBody")}),s.jsx($,{children:s.jsx(M,{tone:"quiet",onClick:_e,disabled:g,"data-testid":"import-undo",children:t("sales.import.undo")})})]}):s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"nexus-sales-receipt",children:t("sales.import.receipt",{created:String(i.counts.created),merged:String(i.counts.merged),skipped:String(i.counts.skipped),batch:i.id})}),q,s.jsx($,{children:s.jsx(M,{tone:"quiet",onClick:_e,disabled:g,"data-testid":"import-undo",children:t("sales.import.undo")})})]})}):null]})})}De.__docgenInfo={description:`Import (…2733 ·  · P-28 · P-30): four steps the person walks in order — the file (CSV · XLSX, checked
server-side) · the mapping (sales-api's proposal, the person's word is final) · the review (every row's verdict:
ok · invalid · exact duplicate · possible duplicate — each duplicate with its decision) · the receipt (created ·
merged · skipped · the batch id) that can be undone as one batch; a batch edited since says which rows stay (P-30).
In the connected world the source owns the records and the screen says so (DS-0004) instead of offering a dead upload.`,methods:[],displayName:"ImportScreen",props:{writeMode:{required:!0,tsType:{name:"union",raw:'"native" | "read_only" | "approval_required" | "policy_controlled"',elements:[{name:"literal",value:'"native"'},{name:"literal",value:'"read_only"'},{name:"literal",value:'"approval_required"'},{name:"literal",value:'"policy_controlled"'}]},description:""},provider:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},doors:{required:!1,tsType:{name:"ImportDoors"},description:"",defaultValue:{value:"{ preview: (file, recordType, projectId) => api.previewImport(file, recordType, projectId), rows: (signal, id, page) => api.importRows(signal, id, page), commit: (id, input) => api.commitImport(id, input), rollback: (id) => api.rollbackImport(id), list: (signal) => api.importBatches(signal) }",computed:!1}},projects:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"[]",computed:!1}},initialBatch:{required:!1,tsType:{name:"union",raw:"ImportBatch | null",elements:[{name:"ImportBatch"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},initialRows:{required:!1,tsType:{name:"union",raw:"ImportRow[] | null",elements:[{name:"Array",elements:[{name:"ImportRow"}],raw:"ImportRow[]"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},initialStep:{required:!1,tsType:{name:"union",raw:'"file" | "map" | "review" | "done"',elements:[{name:"literal",value:'"file"'},{name:"literal",value:'"map"'},{name:"literal",value:'"review"'},{name:"literal",value:'"done"'}]},description:"",defaultValue:{value:'"file"',computed:!1}},initialError:{required:!1,tsType:{name:"union",raw:"ApiError | null",elements:[{name:"ApiError"},{name:"null"}]},description:"stories: the error line as a door left it (denied · unavailable)",defaultValue:{value:"null",computed:!1}},initialRecent:{required:!1,tsType:{name:"union",raw:"ImportBatch[] | null",elements:[{name:"Array",elements:[{name:"ImportBatch"}],raw:"ImportBatch[]"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}}}};const ft={preview:async()=>h,rows:async(r,l,n)=>({rows:le.filter(c=>!n.state||c.state===n.state),total:le.length}),commit:async(r,l)=>({...h,mapping:l.mapping,state:l.dry_run?"dry_run":"committed",counts:{...h.counts,created:33,merged:1,skipped:4},committed_at:l.dry_run?null:h.created_at}),rollback:async()=>({...h,state:"rolled_back",rolled_back_at:h.created_at})},u={...h,state:"committed",counts:{...h.counts,created:33,merged:1,skipped:4},committed_at:h.created_at},vt={title:"Apps/NexSales/Import",component:De,parameters:{ds:"DS-3040",layout:"fullscreen",workbench:{ns:"sales",path:"/sales/import"},docs:{description:{component:`Import (composes DS-3024 steps · DS-3030 table · DS-3040 ActionPanel · DS-7004 inline confirm): file (CSV · XLSX,
checked server-side — ) → map columns (the service's proposal, the person's word) → review (every row's
verdict; a duplicate with its decision — P-28) → confirm → receipt with *Undo batch* (P-30: a batch edited since is
undone partly, and says which). In the connected world the file goes to the source.`}}},args:{writeMode:"native",provider:null,doors:ft}},W={name:"1 · File (what the file holds · the file)"},T={name:"1a · File — Recent imports (Undo per batch)",args:{initialRecent:[u,{...u,id:"imb_old1",state:"partially_rolled_back",rollback_blocked_ids:["acc_1"],file:{...u.file,name:"leads-q3.xlsx"}},{...u,id:"imb_old2",state:"rolled_back",file:{...u.file,name:"contacts.csv"},record_type:"contact"},{...u,id:"imb_old3",state:"failed",counts:{...u.counts,created:1,merged:0}}]}},X={name:"1b · File — the Project asked (more than one,  a)",args:{projects:[{id:"prj_ua",name:"Ukraine"},{id:"prj_eu",name:"EU"}]}},K={name:"2 · Map columns (the proposal · skip a column)",args:{initialBatch:h,initialStep:"map"}},z={name:"3 · Review (ok · invalid · exact · possible duplicate — with decisions)",args:{initialBatch:h,initialRows:le,initialStep:"review"}},G={name:"4 · Receipt · Undo batch",args:{initialBatch:u,initialStep:"done"}},J={name:"4b · Partly undone (edited since — P-30)",args:{initialBatch:{...u,state:"partially_rolled_back",rollback_blocked_ids:["acc_1","acc_2"]},initialStep:"done"}},Q={name:"4c · Undone",args:{initialBatch:{...u,state:"rolled_back"},initialStep:"done"}},Y={name:"4d · Refused by the store ( c) · Undo batch",args:{initialBatch:{...u,state:"failed",counts:{...u.counts,created:1,merged:0}},initialStep:"done"}},Z={name:"Connected world · goes to BAS",args:{writeMode:"read_only",provider:et}},A={name:"Denied (the store refused the check)",args:{initialError:{code:"FORBIDDEN"}}},C={name:"Offline (sales-api did not answer)",args:{initialError:{code:"UNAVAILABLE"}}},kt=["File","FileRecent","FileTwoProjects","Map","Review","Done","PartlyUndone","Undone","Refused","Connected","Denied","Offline"];W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "1 · File (what the file holds · the file)"
}`,...W.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "1a · File — Recent imports (Undo per batch)",
  args: {
    initialRecent: [committed, {
      ...committed,
      id: "imb_old1",
      state: "partially_rolled_back",
      rollback_blocked_ids: ["acc_1"],
      file: {
        ...committed.file,
        name: "leads-q3.xlsx"
      }
    }, {
      ...committed,
      id: "imb_old2",
      state: "rolled_back",
      file: {
        ...committed.file,
        name: "contacts.csv"
      },
      record_type: "contact"
    }, {
      ...committed,
      id: "imb_old3",
      state: "failed",
      counts: {
        ...committed.counts,
        created: 1,
        merged: 0
      }
    }]
  }
}`,...T.parameters?.docs?.source},description:{story:": the file step lists the person's earlier batches — *Undo* stays reachable after the receipt is gone ().",...T.parameters?.docs?.description}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "1b · File — the Project asked (more than one,  a)",
  args: {
    projects: [{
      id: "prj_ua",
      name: "Ukraine"
    }, {
      id: "prj_eu",
      name: "EU"
    }]
  }
}`,...X.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "2 · Map columns (the proposal · skip a column)",
  args: {
    initialBatch: IMPORT_BATCH,
    initialStep: "map"
  }
}`,...K.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "3 · Review (ok · invalid · exact · possible duplicate — with decisions)",
  args: {
    initialBatch: IMPORT_BATCH,
    initialRows: IMPORT_ROWS,
    initialStep: "review"
  }
}`,...z.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "4 · Receipt · Undo batch",
  args: {
    initialBatch: committed,
    initialStep: "done"
  }
}`,...G.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "4b · Partly undone (edited since — P-30)",
  args: {
    initialBatch: {
      ...committed,
      state: "partially_rolled_back",
      rollback_blocked_ids: ["acc_1", "acc_2"]
    },
    initialStep: "done"
  }
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "4c · Undone",
  args: {
    initialBatch: {
      ...committed,
      state: "rolled_back"
    },
    initialStep: "done"
  }
}`,...Q.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "4d · Refused by the store ( c) · Undo batch",
  args: {
    initialBatch: {
      ...committed,
      state: "failed",
      counts: {
        ...committed.counts,
        created: 1,
        merged: 0
      }
    },
    initialStep: "done"
  }
}`,...Y.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Connected world · goes to BAS",
  args: {
    writeMode: "read_only",
    provider: PROVIDER
  }
}`,...Z.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Denied (the store refused the check)",
  args: {
    initialError: {
      code: "FORBIDDEN"
    }
  }
}`,...A.parameters?.docs?.source},description:{story:"The ladder's `denied` (DS-7006): the store refused the check — the line names the access, the step stays.",...A.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Offline (sales-api did not answer)",
  args: {
    initialError: {
      code: "UNAVAILABLE"
    }
  }
}`,...C.parameters?.docs?.source},description:{story:"The ladder's `offline`: sales-api did not answer — *Could not load*, the file is kept, *Continue* tries again.",...C.parameters?.docs?.description}}};export{Z as Connected,A as Denied,G as Done,W as File,T as FileRecent,X as FileTwoProjects,K as Map,C as Offline,J as PartlyUndone,Y as Refused,z as Review,Q as Undone,kt as __namedExportsOrder,vt as default};
