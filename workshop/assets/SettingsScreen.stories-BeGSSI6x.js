import{p as Ve,l as h,r as i,s as r,b as t,h as xe}from"./scene-CqiggoaI.js";import{ak as Ke,r as c,j as a,S as g,V as Ye,ac as Ze,O as Qe,a as he,B as ae,D as _,i as ve,q as Ge,A as Je,w as We,y as Se,Q as Xe}from"./iframe-C_4ax-Jm.js";import{H as ie}from"./api-COPqCyrr.js";import{b as es,a as fe}from"./format-BBzwDLam.js";import{d as we}from"./routes-DgN3bgVk.js";import{F as ss}from"./FieldsSettings-C6JZFxf3.js";import"./fixtures-B65KySee.js";import"./personas-BIiIeh3_.js";import"./preload-helper-PPVm8Dsz.js";import"./flags--SfV1VDA.js";import"./types-D9fO6RJU.js";const ns={idle:"ok",running:"warn",rebuilding:"warn",failed:"danger",never:"muted"};function _e({view:o,personName:d,initialSection:Ne="source",initialApprove:je=!1,fields:be,putFields:Pe,applyPreset:ke,onFieldsChanged:Re,fieldsInitial:Ae,approveMapping:te,onMappingChanged:ee,runSync:re,reconcileSource:oe}){const{t:e,locale:Te}=Ke(),[m,Be]=c.useState(Ne),[Ee,j]=c.useState(je),[w,le]=c.useState(null),[Ie,ce]=c.useState(!1),[de,pe]=c.useState(null),De=async n=>{if(pe(null),!te){j(!1),le(n);return}ce(!0);try{const s=await te(n);j(!1),le(s.version),ee?.()}catch(s){pe(s instanceof ie&&s.status===403?e("sales.settings.deniedBody"):e("sales.settings.approveFailed"))}finally{ce(!1)}},[Oe,qe]=c.useState(!0),[Me,Ce]=c.useState(!0),[ue,b]=c.useState(null),[se,y]=c.useState(null),[ge,ze]=c.useState(void 0),me=n=>n instanceof ie&&n.status===403?e("sales.settings.deniedBody"):n instanceof ie&&n.status===409?e("sales.sync.pending"):e("sales.sync.failed"),Le=async n=>{if(y(null),!!re){b("sync");try{const s=await re({});s.sync&&ze(s.sync);const p=s.reports.find(x=>x.error_code),l=s.reports.reduce((x,ne)=>x+ne.records,0),u=s.reports.reduce((x,ne)=>x+ne.changed,0);y(p?{tone:"danger",text:e("sales.sync.ranFailed",{provider:n})}:{tone:"ok",text:e("sales.sync.ran",{records:String(l),changed:String(u)})}),ee?.()}catch(s){y({tone:"danger",text:me(s)})}finally{b(null)}}},$e=async(n,s)=>{if(y(null),!!oe){b("reconcile");try{const l=(await oe({record_type:s})).reports[0];y(!l||l.error_code?{tone:"danger",text:e("sales.sync.reconcileFailed",{provider:n})}:{tone:"ok",text:e("sales.sync.reconciled",{type:e(`sales.entity.${l.record_type}`),provider:n,fetched:String(l.fetched),changed:String(l.changed),missing:String(l.missing),deleted:String(l.deleted)})}),ee?.()}catch(p){y({tone:"danger",text:me(p)})}finally{b(null)}}},He=[{key:"source",label:e("sales.settings.source")},{key:"mapping",label:e("sales.settings.mapping"),count:o.state==="ready"&&w===null&&o.data.mapping_pending.length||void 0},{key:"pipeline",label:e("sales.settings.pipeline")},{key:"fields",label:e("sales.settings.fields")},{key:"policy",label:e("sales.settings.fieldPolicy")}],Ue=n=>[{key:"entity",header:e("sales.settings.recordType"),render:s=>a.jsx("span",{className:"nexus-sales-row-title",children:e(`sales.entity.${s.entity}`)}),width:"160px"},{key:"owner",header:e("sales.settings.owner"),render:s=>s.owner==="native"?e("sales.source.nexus"):n??"",width:"120px"},{key:"write",header:e("sales.settings.writes"),render:s=>a.jsx(g,{tone:s.write_mode==="read_only"?"muted":s.write_mode==="native"?"ok":"warn",children:e(`sales.writeMode.${s.write_mode}`)}),width:"200px"},{key:"cache",header:e("sales.settings.cache"),render:s=>e(`sales.cache.${s.cache}`),width:"120px"},{key:"note",header:"",render:s=>s.migration_required?a.jsx(Se,{children:e("sales.settings.needsMigration")}):null}],ye=[{key:"canonical",header:e("sales.settings.canonical"),render:n=>a.jsx("code",{className:"nexus-sales-code",children:n.canonical})},{key:"external",header:e("sales.settings.external"),render:n=>a.jsx("code",{className:"nexus-sales-code",children:n.external})},{key:"status",header:e("sales.field.status"),render:n=>a.jsx(g,{tone:n.status==="approved"?"ok":"warn",children:n.status==="approved"?e("sales.settings.approvedBy",{who:d(n.approved_by??""),when:es(n.approved_at,Te)}):e("sales.settings.unverified")}),width:"320px"},{key:"version",header:e("sales.field.version"),render:n=>`v${n.version}`,width:"80px"}];return a.jsx(Ye,{layout:"dense",width:"wide",title:e("sales.nav.settings"),testId:"settings-page",children:a.jsx(Ze,{result:o,empty:{title:e("sales.state.notFound.title")},deniedBody:e("sales.settings.deniedBody"),children:n=>a.jsxs(Qe,{nav:a.jsx(Xe,{items:He,current:m,onSelect:Be,label:e("sales.settings.sections"),testId:"settings-nav"}),testId:"settings-layout",children:[m==="source"?a.jsxs("div",{className:"nexus-sales-settings-section","data-testid":"settings-source",children:[n.health?a.jsxs("p",{className:"nexus-sales-health","data-testid":"settings-health",children:[a.jsx(g,{tone:n.health.connected?"ok":"danger",children:n.health.connected?e("sales.health.line",{provider:n.health.provider,age:fe(n.health.last_read_at,e),waiting:String(n.health.waiting),conflicts:String(n.health.conflicts)}):e("sales.health.unavailable",{provider:n.health.provider})}),typeof n.health.mapping_version=="number"?a.jsx(he,{tone:"neutral",children:e("sales.settings.mappingApproved",{version:String(n.health.mapping_version)})}):null,a.jsxs("a",{href:we.connections,className:"nexus-link is-meta",children:[e("sales.settings.openConnection")," ↗"]})]}):null,n.health?(()=>{const s=ge===void 0?n.health.sync??null:ge,p=n.health.provider,l=n.policy.find(u=>u.owner==="external")?.entity??"account";return a.jsxs("div",{className:"nexus-sales-health","data-testid":"settings-sync","data-state":s?.state??"none",children:[s?a.jsx(g,{tone:ns[s.state],children:s.synced_at?e("sales.sync.line",{state:e(`sales.sync.state.${s.state}`),age:fe(s.synced_at,e),records:String(s.records),types:s.types.map(u=>e(`sales.entity.${u}`)).join(", ")}):e("sales.sync.lineNever",{state:e(`sales.sync.state.${s.state}`),types:s.types.map(u=>e(`sales.entity.${u}`)).join(", ")})}):null,s?a.jsx(ae,{size:"sm",onClick:()=>{Le(p)},disabled:ue!==null||s.state==="running"||s.state==="rebuilding","data-testid":"sync-now",children:e("sales.sync.now")}):null,a.jsx(ae,{size:"sm",onClick:()=>{$e(p,l)},disabled:ue!==null,"data-testid":"source-reconcile",children:e("sales.sync.reconcile")}),se?a.jsx("span",{role:"status","data-testid":"sync-note",children:a.jsx(g,{tone:se.tone,children:se.text})}):null]})})():a.jsxs("p",{className:"nexus-sales-health","data-testid":"settings-health",children:[a.jsx(g,{tone:"ok",children:e("sales.health.native")}),a.jsxs("a",{href:we.connections,className:"nexus-link is-meta",children:[e("sales.settings.connectExisting")," ↗"]})]}),a.jsx(_,{rows:n.policy,columns:Ue(n.provider),rowKey:s=>s.entity,caption:e("sales.settings.source"),testId:"policy-table",empty:{title:e("sales.settings.noPolicy")}}),a.jsxs("div",{role:"group","aria-label":e("sales.settings.behaviour"),"data-testid":"settings-behaviour",children:[a.jsx("div",{className:"nexus-sales-switch-row",children:a.jsx(ve,{checked:Oe,onChange:qe,label:e("sales.settings.dedupe"),testId:"switch-dedupe"})}),a.jsx("div",{className:"nexus-sales-switch-row",children:a.jsx(ve,{checked:Me,onChange:Ce,label:e("sales.settings.reminders"),testId:"switch-reminders"})})]})]}):null,m==="mapping"?a.jsx("div",{className:"nexus-sales-settings-section","data-testid":"settings-mapping",children:n.mapping.length===0&&n.mapping_pending.length===0&&!n.mapping_problem?a.jsx(Ge,{variant:"quiet",title:e("sales.settings.noMappingTitle"),body:e("sales.settings.noMappingBody")}):a.jsxs(a.Fragment,{children:[n.mapping_problem?a.jsx("p",{className:"nexus-sales-health",role:"status","data-testid":"mapping-problem",children:a.jsx(g,{tone:"danger",children:e("sales.settings.mappingProblem")})}):null,a.jsx(_,{rows:w!==null?[...n.mapping,...n.mapping_pending.map(s=>({...s,status:"approved"}))]:n.mapping,columns:ye,rowKey:s=>s.canonical,caption:e("sales.settings.mapping"),testId:"mapping-table",empty:{title:e("sales.settings.noMappingTitle")}}),w===null&&n.mapping_pending.length&&n.mapping_pending_version!==null?a.jsxs("div",{className:"nexus-sales-pending",children:[a.jsxs("h3",{className:"nexus-sales-h3",children:[e("sales.settings.discoveredTitle",{n:String(n.mapping_pending.length)})," ",a.jsxs(he,{tone:"warn",children:["v",n.mapping_pending_version]})]}),a.jsx(_,{rows:n.mapping_pending,columns:ye,rowKey:s=>s.canonical,caption:e("sales.settings.discoveredTitle",{n:String(n.mapping_pending.length)}),testId:"mapping-pending"}),Ee?a.jsxs(Je,{title:e("sales.settings.approveTitle",{version:String(n.mapping_pending_version)}),onCancel:()=>j(!1),primary:{label:e("sales.settings.approveV2",{version:String(n.mapping_pending_version)}),onClick:()=>{De(n.mapping_pending_version)},disabled:Ie,testId:"mapping-approve-confirm"},testId:"mapping-approve-panel",children:[a.jsx("p",{className:"nexus-sales-p",children:e("sales.settings.approveBody")}),de?a.jsx("p",{className:"nexus-sales-note",role:"alert","data-testid":"mapping-approve-error",children:de}):null]}):a.jsx(We,{className:"is-flush",children:a.jsx(ae,{variant:"primary",onClick:()=>j(!0),"data-testid":"mapping-approve",children:e("sales.settings.approveV2",{version:String(n.mapping_pending_version)})})})]}):w!==null?a.jsx("p",{className:"nexus-sales-note",role:"status","data-testid":"mapping-approved",children:e("sales.settings.approvedNote",{version:String(w)})}):null]})}):null,m==="pipeline"?a.jsx("div",{className:"nexus-sales-settings-section","data-testid":"settings-pipeline",children:a.jsx(_,{rows:n.stages,columns:[{key:"order",header:"#",render:s=>String(s.order),width:"50px"},{key:"name",header:e("sales.settings.stage"),render:s=>e(`sales.stage.${s.id}`)},{key:"kind",header:e("sales.field.kind"),render:s=>e(`sales.stageKind.${s.kind}`),width:"120px"},{key:"wip",header:e("sales.settings.wip"),render:s=>s.wip_limit!==void 0?String(s.wip_limit):"—",width:"100px"}],rowKey:s=>s.id,caption:e("sales.settings.pipeline"),testId:"stages-table",empty:{title:e("sales.settings.noStages")}})}):null,m==="fields"?a.jsx(ss,{fields:be??{state:"ready",data:{schemas:[],presets:[],can_manage:!1}},builtin:n.fields,put:Pe,apply:ke,onChanged:Re,...Ae}):null,m==="policy"?a.jsxs("div",{className:"nexus-sales-settings-section","data-testid":"settings-policy",children:[a.jsx(_,{rows:n.field_policy,columns:[{key:"field",header:e("sales.import.field"),render:s=>a.jsx("code",{className:"nexus-sales-code",children:s.field}),width:"240px"},{key:"roles",header:e("sales.settings.visibleTo"),render:s=>s.roles.join(" · ")}],rowKey:s=>s.field,caption:e("sales.settings.fieldPolicy"),testId:"field-policy-table",empty:{title:e("sales.settings.noFieldPolicy")}}),a.jsx(Se,{children:e("sales.settings.fieldPolicyHint")})]}):null]})})})}_e.__docgenInfo={description:"Settings — DS-7009 *Two-level page* (`SideNav`): Source · Mapping · Pipeline · Fields · Field policy. **Source** is\nthe `SalesSourcePolicy` as a table — one row per record type, who owns it, what NexSales may write, what it caches;\nchanging an owner needs a migration (), so the row says so instead of offering a switch (DS-0004).\n**Mapping** shows the approved version and the discovered one; *Approve version 2* is the only write ().\n**Fields** (, S1-A5) is the organization's custom fields per record type — `FieldsSettings`: list · new ·\nedit · remove · apply an installed pack's preset. Every setting that is a switch commits on change (DS-7003); the\nhealth line is the one `StatusDot` on the page.",methods:[],displayName:"SettingsScreen",props:{view:{required:!0,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"SettingsView"}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:""},personName:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => string",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"string"}}},description:""},initialSection:{required:!1,tsType:{name:"union",raw:'"source" | "mapping" | "pipeline" | "fields" | "policy"',elements:[{name:"literal",value:'"source"'},{name:"literal",value:'"mapping"'},{name:"literal",value:'"pipeline"'},{name:"literal",value:'"fields"'},{name:"literal",value:'"policy"'}]},description:"",defaultValue:{value:'"source"',computed:!1}},initialApprove:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fields:{required:!1,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"FieldsView"}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:": the custom fields (their own read — `/settings/fields`), the writes and what a story opens"},putFields:{required:!1,tsType:{name:'FieldsSettingsProps["put"]',raw:'FieldsSettingsProps["put"]'},description:""},applyPreset:{required:!1,tsType:{name:'FieldsSettingsProps["apply"]',raw:'FieldsSettingsProps["apply"]'},description:""},onFieldsChanged:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},fieldsInitial:{required:!1,tsType:{name:"Pick",elements:[{name:"FieldsSettingsProps"},{name:"union",raw:'"initialRecordType" | "initialNew" | "initialEdit" | "initialApply" | "initialRemove"',elements:[{name:"literal",value:'"initialRecordType"'},{name:"literal",value:'"initialNew"'},{name:"literal",value:'"initialEdit"'},{name:"literal",value:'"initialApply"'},{name:"literal",value:'"initialRemove"'}]}],raw:'Pick<FieldsSettingsProps, "initialRecordType" | "initialNew" | "initialEdit" | "initialApply" | "initialRemove">'},description:""},approveMapping:{required:!1,tsType:{name:"signature",type:"function",raw:"(version: number) => Promise<{ version: number; status: string }>",signature:{arguments:[{type:{name:"number"},name:"version"}],return:{name:"Promise",elements:[{name:"signature",type:"object",raw:"{ version: number; status: string }",signature:{properties:[{key:"version",value:{name:"number",required:!0}},{key:"status",value:{name:"string",required:!0}}]}}],raw:"Promise<{ version: number; status: string }>"}}},description:"S3 (): the approval door — `POST /settings/mapping {version}` (human-only, an admin's); absent in a story"},onMappingChanged:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"after an approval: re-read the page (the approved rows, the health line's mapping version)"},runSync:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: { record_type?: string; full?: boolean }) => Promise<SyncRunResult>",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ record_type?: string; full?: boolean }",signature:{properties:[{key:"record_type",value:{name:"string",required:!1}},{key:"full",value:{name:"boolean",required:!1}}]}},name:"input"}],return:{name:"Promise",elements:[{name:"SyncRunResult"}],raw:"Promise<SyncRunResult>"}}},description:"S4-A (P-52): *Sync now* — `POST /settings/source/sync` (human-only, an admin's); absent in a story"},reconcileSource:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: { record_type?: string }) => Promise<SyncRunResult>",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ record_type?: string }",signature:{properties:[{key:"record_type",value:{name:"string",required:!1}}]}},name:"input"}],return:{name:"Promise",elements:[{name:"SyncRunResult"}],raw:"Promise<SyncRunResult>"}}},description:": *Reconcile* — `POST /settings/source/reconcile {record_type}`; absent in a story"}}};const ms={title:"Apps/NexSales/Settings",component:_e,parameters:{ds:"DS-7009",layout:"fullscreen",workbench:{ns:"sales",path:"/sales/settings"},docs:{description:{component:"Settings (DS-7009 two-level page): Source policy (who owns each record type, how writes go, migration notes) · Mapping (v2 approval) · Pipeline · Fields · Field policy. Sales admin only."}}},args:{personName:Ve}},P={name:"Source policy · connected",args:{view:i(r(t("yuliia")))}},k={name:"Source policy · native",args:{view:i(r(t("nazar")))}},R={name:"Mapping · v2 discovered",args:{view:i(r(t("yuliia"))),initialSection:"mapping"}},A={name:"Mapping · approve v2 (ActionPanel)",args:{view:i(r(t("yuliia"))),initialSection:"mapping",initialApprove:!0}},Fe=()=>{const o=r(t("yuliia"));return{...o,mapping:[...o.mapping,...o.mapping_pending.map(d=>({...d,status:"approved",approved_by:"yuliia",approved_at:"2026-10-14T09:00:00Z"}))],mapping_pending:[],mapping_pending_version:null,health:o.health?{...o.health,mapping_version:2}:null}},T={name:"Mapping · approved (nothing pending)",args:{view:i(Fe()),initialSection:"mapping"}},F={name:"Mapping · source unreachable",args:{view:i({...Fe(),mapping_problem:"CONNECTION_UNHEALTHY_ENDPOINT_UNREACHABLE"}),initialSection:"mapping"}},X=o=>{const d=r(t("yuliia"));return{...d,health:d.health?{...d.health,sync:o}:null}},N={runSync:async()=>({sync:{state:"idle",synced_at:new Date().toISOString(),records:4,types:["account"]},reports:[{record_type:"account",kind:"delta",fetched:4,changed:1,missing:0,deleted:0,records:4,error_code:null}]}),reconcileSource:async()=>({sync:null,reports:[{record_type:"account",kind:"reconcile",fetched:4,changed:0,missing:1,deleted:0,records:4,error_code:null}]})},B={name:"Source policy · sync idle (projection)",args:{view:i(r(t("yuliia"))),...N}},E={name:"Source policy · sync never ran",args:{view:i(X({state:"never",synced_at:null,records:0,types:["account"]})),...N}},I={name:"Source policy · sync running",args:{view:i(X({state:"running",synced_at:null,records:4,types:["account"]})),...N}},D={name:"Source policy · sync failed (last copy shown)",args:{view:i(X({state:"failed",synced_at:"2026-10-13T06:00:00Z",records:4,types:["account"]})),...N}},O={name:"Source policy · nothing projected (Reconcile only)",args:{view:i(X(null)),...N}},q={name:"Source policy · source unavailable",args:{view:i({...r(t("yuliia")),health:{...r(t("yuliia")).health,connected:!1,reason:"auth_failed"}})}},M={args:{view:i(r(t("yuliia"))),initialSection:"pipeline"}},v=o=>i(xe(t(o))),S=async o=>({...o,version:2}),f=async()=>({schemas:[]}),C={name:"Fields · connected (preset applied, v1)",args:{view:i(r(t("yuliia"))),initialSection:"fields",fields:v("yuliia"),putFields:S,applyPreset:f}},z={name:"Fields · native (none yet)",args:{view:i(r(t("nazar"))),initialSection:"fields",fields:v("nazar"),putFields:S,applyPreset:f}},L={name:"Fields · New field (FormInspector)",args:{view:i(r(t("nazar"))),initialSection:"fields",fields:v("nazar"),putFields:S,applyPreset:f,fieldsInitial:{initialNew:!0}}},$={name:"Fields · Edit field",args:{view:i(r(t("yuliia"))),initialSection:"fields",fields:v("yuliia"),putFields:S,applyPreset:f,fieldsInitial:{initialEdit:"settlement_kind"}}},H={name:"Fields · Remove (ActionPanel)",args:{view:i(r(t("yuliia"))),initialSection:"fields",fields:v("yuliia"),putFields:S,applyPreset:f,fieldsInitial:{initialRemove:"second_manager"}}},U={name:"Fields · Apply preset (ActionPanel)",args:{view:i(r(t("nazar"))),initialSection:"fields",fields:v("nazar"),putFields:S,applyPreset:f,fieldsInitial:{initialApply:!0}}},V={name:"Fields · reader without sales.field.manage",args:{view:i(r(t("yuliia"))),initialSection:"fields",fields:i({...xe(t("yuliia")),can_manage:!1})}},K={name:"Fields · loading",args:{view:i(r(t("yuliia"))),initialSection:"fields",fields:h("loading")}},Y={name:"Fields · error",args:{view:i(r(t("yuliia"))),initialSection:"fields",fields:h("error")}},Z={args:{view:i(r(t("yuliia"))),initialSection:"policy"}},Q={args:{view:h("loading")}},G={args:{view:h("error")}},J={name:"Denied (not a sales admin)",args:{view:h("denied")}},W={args:{view:h("offline")}},ys=["SourcePolicy","SourcePolicyNative","Mapping","MappingApprove","MappingApproved","MappingUnreachable","SyncIdle","SyncNever","SyncRunning","SyncFailed","SyncNothingProjected","SourcePolicyUnavailable","Pipeline","Fields","FieldsNative","FieldsNew","FieldsEdit","FieldsRemove","FieldsApplyPreset","FieldsReadOnly","FieldsLoading","FieldsError","FieldPolicy","Loading","Error","Denied","Offline"];P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Source policy · connected",
  args: {
    view: ready(store.settings(as("yuliia")))
  }
}`,...P.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Source policy · native",
  args: {
    view: ready(store.settings(as("nazar")))
  }
}`,...k.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Mapping · v2 discovered",
  args: {
    view: ready(store.settings(as("yuliia"))),
    initialSection: "mapping"
  }
}`,...R.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Mapping · approve v2 (ActionPanel)",
  args: {
    view: ready(store.settings(as("yuliia"))),
    initialSection: "mapping",
    initialApprove: true
  }
}`,...A.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Mapping · approved (nothing pending)",
  args: {
    view: ready(settingsApproved()),
    initialSection: "mapping"
  }
}`,...T.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Mapping · source unreachable",
  args: {
    view: ready({
      ...settingsApproved(),
      mapping_problem: "CONNECTION_UNHEALTHY_ENDPOINT_UNREACHABLE"
    }),
    initialSection: "mapping"
  }
}`,...F.parameters?.docs?.source},description:{story:"S3: the source could not be asked for its fields — the approved rows stay, the line says so (never an empty table as the truth)",...F.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Source policy · sync idle (projection)",
  args: {
    view: ready(store.settings(as("yuliia"))),
    ...syncDoors
  }
}`,...B.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Source policy · sync never ran",
  args: {
    view: ready(withSync({
      state: "never",
      synced_at: null,
      records: 0,
      types: ["account"]
    })),
    ...syncDoors
  }
}`,...E.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Source policy · sync running",
  args: {
    view: ready(withSync({
      state: "running",
      synced_at: null,
      records: 4,
      types: ["account"]
    })),
    ...syncDoors
  }
}`,...I.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Source policy · sync failed (last copy shown)",
  args: {
    view: ready(withSync({
      state: "failed",
      synced_at: "2026-10-13T06:00:00Z",
      records: 4,
      types: ["account"]
    })),
    ...syncDoors
  }
}`,...D.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Source policy · nothing projected (Reconcile only)",
  args: {
    view: ready(withSync(null)),
    ...syncDoors
  }
}`,...O.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Source policy · source unavailable",
  args: {
    view: ready({
      ...store.settings(as("yuliia")),
      health: {
        ...(store.settings(as("yuliia")).health as NonNullable<ReturnType<typeof store.settings>["health"]>),
        connected: false,
        reason: "auth_failed"
      }
    })
  }
}`,...q.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    view: ready(store.settings(as("yuliia"))),
    initialSection: "pipeline"
  }
}`,...M.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Fields · connected (preset applied, v1)",
  args: {
    view: ready(store.settings(as("yuliia"))),
    initialSection: "fields",
    fields: fieldsOf("yuliia"),
    putFields,
    applyPreset
  }
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Fields · native (none yet)",
  args: {
    view: ready(store.settings(as("nazar"))),
    initialSection: "fields",
    fields: fieldsOf("nazar"),
    putFields,
    applyPreset
  }
}`,...z.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Fields · New field (FormInspector)",
  args: {
    view: ready(store.settings(as("nazar"))),
    initialSection: "fields",
    fields: fieldsOf("nazar"),
    putFields,
    applyPreset,
    fieldsInitial: {
      initialNew: true
    }
  }
}`,...L.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: "Fields · Edit field",
  args: {
    view: ready(store.settings(as("yuliia"))),
    initialSection: "fields",
    fields: fieldsOf("yuliia"),
    putFields,
    applyPreset,
    fieldsInitial: {
      initialEdit: "settlement_kind"
    }
  }
}`,...$.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Fields · Remove (ActionPanel)",
  args: {
    view: ready(store.settings(as("yuliia"))),
    initialSection: "fields",
    fields: fieldsOf("yuliia"),
    putFields,
    applyPreset,
    fieldsInitial: {
      initialRemove: "second_manager"
    }
  }
}`,...H.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Fields · Apply preset (ActionPanel)",
  args: {
    view: ready(store.settings(as("nazar"))),
    initialSection: "fields",
    fields: fieldsOf("nazar"),
    putFields,
    applyPreset,
    fieldsInitial: {
      initialApply: true
    }
  }
}`,...U.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Fields · reader without sales.field.manage",
  args: {
    view: ready(store.settings(as("yuliia"))),
    initialSection: "fields",
    fields: ready({
      ...store.fields(as("yuliia")),
      can_manage: false
    })
  }
}`,...V.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Fields · loading",
  args: {
    view: ready(store.settings(as("yuliia"))),
    initialSection: "fields",
    fields: state("loading")
  }
}`,...K.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Fields · error",
  args: {
    view: ready(store.settings(as("yuliia"))),
    initialSection: "fields",
    fields: state("error")
  }
}`,...Y.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    view: ready(store.settings(as("yuliia"))),
    initialSection: "policy"
  }
}`,...Z.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("loading")
  }
}`,...Q.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("error")
  }
}`,...G.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Denied (not a sales admin)",
  args: {
    view: state("denied")
  }
}`,...J.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("offline")
  }
}`,...W.parameters?.docs?.source}}};export{J as Denied,G as Error,Z as FieldPolicy,C as Fields,U as FieldsApplyPreset,$ as FieldsEdit,Y as FieldsError,K as FieldsLoading,z as FieldsNative,L as FieldsNew,V as FieldsReadOnly,H as FieldsRemove,Q as Loading,R as Mapping,A as MappingApprove,T as MappingApproved,F as MappingUnreachable,W as Offline,M as Pipeline,P as SourcePolicy,k as SourcePolicyNative,q as SourcePolicyUnavailable,D as SyncFailed,B as SyncIdle,E as SyncNever,O as SyncNothingProjected,I as SyncRunning,ys as __namedExportsOrder,ms as default};
