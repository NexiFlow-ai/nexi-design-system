import{p as Pe,n as r,m as i,c as ae,a as n,D as p,w as xe,t as Ee,u as be,x as Fe,E as z,l as te,j as G,r as ne,s as J,b as Te,d as De,k as Be,h as Z,i as je,e as qe}from"./scene-BIkkuSa8.js";import{ak as ke,r as Ie,j as e,V as Re,ac as d,O as Me,a as $,S as ee,Q as Ne}from"./iframe-C_4ax-Jm.js";import{d as Ae}from"./routes-CtGbDcx2.js";import{F as Ce}from"./FieldPolicyTable-DAw2ywZT.js";import{F as Le}from"./FieldSchemaEditor-2axlMfp6.js";import{I as Ve}from"./ImportPanel-CuMtHPop.js";import{R as _e}from"./ReadinessPolicyEditor-DYkxE-mE.js";import{S as He}from"./SourceHealthPanel-B1DmUQY-.js";import{S as Oe}from"./SourceMappingTable-BiYM_lcy.js";import"./world-D7bs8um4.js";import"./types-CBmIxQfA.js";import"./preload-helper-PPVm8Dsz.js";import"./format-CwKZ7-7k.js";import"./trash-2-qQksh-HK.js";import"./arrow-up-bnIz7tua.js";import"./arrow-down-CEX2ZLRK.js";function ie({view:a,policy:o,canManagePolicy:u,savePolicy:re,onPolicySaved:se,personName:g,initialSection:oe="readiness",policyInitial:le,health:Q,canAdminSource:K=!1,sourceDoors:ce,healthInitial:de,mapping:U,mappingDoors:pe,mappingInitial:me,fields:W,fieldDoors:ue,fieldsInitial:ge,fieldPolicy:X,imports:Y,canImport:ye=!1,projects:Se=[],importDoors:he,importInitial:fe}){const{t}=ke(),[c,ve]=Ie.useState(oe),we=[{key:"source",label:t("factory.settings.source")},{key:"mapping",label:t("factory.settings.mapping")},{key:"readiness",label:t("factory.settings.readiness")},{key:"fields",label:t("factory.settings.fields")},{key:"fieldPolicy",label:t("factory.settings.fieldPolicy")},{key:"import",label:t("factory.settings.import")}];return e.jsx(Re,{layout:"dense",width:"wide",title:t("factory.nav.settings"),testId:"settings-page",children:e.jsx(d,{result:a,empty:{title:t("factory.state.notFound.title")},deniedBody:t("factory.state.denied.body"),children:l=>e.jsxs(Me,{nav:e.jsx(Ne,{items:we,current:c,onSelect:ve,label:t("factory.settings.sections"),testId:"settings-nav"}),testId:"settings-layout",children:[c==="source"?e.jsxs("div",{className:"nexus-factory-settings-section","data-testid":"settings-source",children:[e.jsxs("p",{className:"nexus-factory-health","data-testid":"settings-health",children:[l.provider?Q?.state==="ready"?e.jsx($,{tone:"neutral",children:t("factory.settings.connectedTo",{provider:l.provider})}):e.jsxs(e.Fragment,{children:[e.jsx(ee,{tone:"ok",children:t("factory.settings.connectedTo",{provider:l.provider})}),e.jsx($,{tone:"neutral",children:t("factory.settings.mappingVersion",{version:String(l.mapping_version)})})]}):e.jsx(ee,{tone:"ok",children:t(l.world==="empty"?"factory.settings.noSource":"factory.settings.native")}),e.jsxs("a",{href:Ae.connections,className:"nexus-link is-meta",children:[t("factory.settings.openConnections")," ↗"]})]}),e.jsx("p",{className:"nexus-factory-p",children:t("factory.settings.sourceNote")}),Q&&l.provider?e.jsx(d,{result:Q,empty:{title:t("factory.settings.notConnected")},deniedBody:t("factory.state.denied.body"),children:s=>e.jsx(He,{health:s,canAdmin:K,...ce,...de})}):null]}):null,c==="mapping"?e.jsxs("div",{className:"nexus-factory-settings-section","data-testid":"settings-mapping",children:[e.jsx("p",{className:"nexus-factory-p",children:t("factory.settings.mappingNote")}),U?e.jsx(d,{result:U,empty:{title:t("factory.settings.noMapping")},deniedBody:t("factory.state.denied.body"),children:s=>e.jsx(Oe,{view:s,canAdmin:K,connected:!!l.provider,personName:g,...pe,...me})}):e.jsx("p",{className:"nexus-factory-p","data-testid":"mapping-none",children:l.provider?t("factory.settings.noMapping"):t("factory.settings.notConnected")})]}):null,c==="readiness"?e.jsxs("div",{className:"nexus-factory-settings-section","data-testid":"settings-readiness",children:[e.jsx("p",{className:"nexus-factory-p",children:t("factory.settings.readinessNote")}),e.jsx(d,{result:o,empty:{title:t("factory.policy.none")},deniedBody:t("factory.state.denied.body"),children:s=>e.jsx(_e,{policy:s,canEdit:u,save:re,onSaved:se,personName:g,...le})})]}):null,c==="fields"?e.jsxs("div",{className:"nexus-factory-settings-section","data-testid":"settings-fields",children:[e.jsx("p",{className:"nexus-factory-p",children:t("factory.settings.fieldsNote")}),W?e.jsx(d,{result:W,empty:{title:t("factory.fields.none")},deniedBody:t("factory.state.denied.body"),children:s=>e.jsx(Le,{view:s,canEdit:u&&s.can_manage,personName:g,...ue,...ge})}):null]}):null,c==="fieldPolicy"?e.jsxs("div",{className:"nexus-factory-settings-section","data-testid":"settings-field-policy",children:[e.jsx("p",{className:"nexus-factory-p",children:t("factory.settings.fieldPolicyNote")}),X?e.jsx(d,{result:X,empty:{title:t("factory.fieldPolicy.none")},deniedBody:t("factory.state.denied.body"),children:s=>e.jsx(Ce,{view:s})}):null]}):null,c==="import"?e.jsxs("div",{className:"nexus-factory-settings-section","data-testid":"settings-import",children:[e.jsx("p",{className:"nexus-factory-p",children:t("factory.settings.importNote")}),Y?e.jsx(d,{result:Y,empty:{title:t("factory.import.recentEmpty")},deniedBody:t("factory.state.denied.body"),children:s=>e.jsx(Ve,{batches:s.rows,canImport:ye,connected:!!l.provider,projects:Se,doors:he,personName:g,...fe})}):null]}):null]})})})}ie.__docgenInfo={description:"Settings — DS-7009 *Two-level page* (`SideNav`): **Source** (S3, …): the connection's display name,\nthe health line and the checkpoints, *Check now* · *Sync now* · *Reconcile* (`SourceHealthPanel`); *Open\nconnections* goes to NexCore and returns (). **Mapping** (S3, DS-6707): the source mapping table — *Discover*\n· *Edit* · *Approve*. **Readiness policy** (S2, DS-6705): the gates in order, `required` per gate, the versions; a\nnew version re-evaluates every open order (). Read by anyone of the module; written by `factory.policy.\nmanage` · `factory.source.admin` · `factory.mapping.approve` only — the PEP's word, never a client guess ().",methods:[],displayName:"SettingsScreen",props:{view:{required:!0,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"SettingsSummary"}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:""},policy:{required:!0,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"ReadinessPolicyView"}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:"S2: the readiness policy — its own read (`/readiness-policy`) and write"},canManagePolicy:{required:!0,tsType:{name:"boolean"},description:""},savePolicy:{required:!1,tsType:{name:'ReadinessPolicyEditorProps["save"]',raw:'ReadinessPolicyEditorProps["save"]'},description:""},onPolicySaved:{required:!1,tsType:{name:'ReadinessPolicyEditorProps["onSaved"]',raw:'ReadinessPolicyEditorProps["onSaved"]'},description:""},personName:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => string",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"string"}}},description:""},initialSection:{required:!1,tsType:{name:"union",raw:'"source" | "mapping" | "readiness" | "fields" | "fieldPolicy" | "import"',elements:[{name:"literal",value:'"source"'},{name:"literal",value:'"mapping"'},{name:"literal",value:'"readiness"'},{name:"literal",value:'"fields"'},{name:"literal",value:'"fieldPolicy"'},{name:"literal",value:'"import"'}]},description:"",defaultValue:{value:'"readiness"',computed:!1}},policyInitial:{required:!1,tsType:{name:"Pick",elements:[{name:"ReadinessPolicyEditorProps"},{name:"union",raw:'"initialEditing" | "initialSaving" | "initialError"',elements:[{name:"literal",value:'"initialEditing"'},{name:"literal",value:'"initialSaving"'},{name:"literal",value:'"initialError"'}]}],raw:'Pick<ReadinessPolicyEditorProps, "initialEditing" | "initialSaving" | "initialError">'},description:""},health:{required:!1,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"SourceHealthView"}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:"S3: the source's health — its own read (`/source/health`) and the admin's doors"},canAdminSource:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sourceDoors:{required:!1,tsType:{name:"Pick",elements:[{name:"SourceHealthPanelProps"},{name:"union",raw:'"probe" | "runSync" | "reconcile" | "onChanged"',elements:[{name:"literal",value:'"probe"'},{name:"literal",value:'"runSync"'},{name:"literal",value:'"reconcile"'},{name:"literal",value:'"onChanged"'}]}],raw:'Pick<SourceHealthPanelProps, "probe" | "runSync" | "reconcile" | "onChanged">'},description:""},healthInitial:{required:!1,tsType:{name:"Pick",elements:[{name:"SourceHealthPanelProps"},{name:"union",raw:'"initialBusy" | "initialError" | "initialReport"',elements:[{name:"literal",value:'"initialBusy"'},{name:"literal",value:'"initialError"'},{name:"literal",value:'"initialReport"'}]}],raw:'Pick<SourceHealthPanelProps, "initialBusy" | "initialError" | "initialReport">'},description:""},mapping:{required:!1,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"SourceMappingView"}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:"S3: the mapping — its own read (`/source/mapping`), *Discover* and *Approve*"},mappingDoors:{required:!1,tsType:{name:"Pick",elements:[{name:"SourceMappingTableProps"},{name:"union",raw:'"discover" | "approve" | "onChanged"',elements:[{name:"literal",value:'"discover"'},{name:"literal",value:'"approve"'},{name:"literal",value:'"onChanged"'}]}],raw:'Pick<SourceMappingTableProps, "discover" | "approve" | "onChanged">'},description:""},mappingInitial:{required:!1,tsType:{name:"Pick",elements:[{name:"SourceMappingTableProps"},{name:"union",raw:'"initialEditing" | "initialBusy" | "initialError" | "initialOpen"',elements:[{name:"literal",value:'"initialEditing"'},{name:"literal",value:'"initialBusy"'},{name:"literal",value:'"initialError"'},{name:"literal",value:'"initialOpen"'}]}],raw:'Pick<SourceMappingTableProps, "initialEditing" | "initialBusy" | "initialError" | "initialOpen">'},description:""},fields:{required:!1,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"FieldSchemasView"}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:"S3: Settings › Fields — the schema per record type (`/settings/fields`) and the admin's save"},fieldDoors:{required:!1,tsType:{name:"Pick",elements:[{name:"FieldSchemaEditorProps"},{name:"union",raw:'"save" | "onSaved"',elements:[{name:"literal",value:'"save"'},{name:"literal",value:'"onSaved"'}]}],raw:'Pick<FieldSchemaEditorProps, "save" | "onSaved">'},description:""},fieldsInitial:{required:!1,tsType:{name:"Pick",elements:[{name:"FieldSchemaEditorProps"},{name:"union",raw:'"initialRecordType" | "initialEditing" | "initialSaving" | "initialError"',elements:[{name:"literal",value:'"initialRecordType"'},{name:"literal",value:'"initialEditing"'},{name:"literal",value:'"initialSaving"'},{name:"literal",value:'"initialError"'}]}],raw:'Pick<FieldSchemaEditorProps, "initialRecordType" | "initialEditing" | "initialSaving" | "initialError">'},description:""},fieldPolicy:{required:!1,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"FieldPolicyView"}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:"S3: Settings › Field policy — read-only (`/settings/field-policy`)"},imports:{required:!1,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"signature",type:"object",raw:"{ rows: ImportBatch[]; total: number }",signature:{properties:[{key:"rows",value:{name:"Array",elements:[{name:"ImportBatch"}],raw:"ImportBatch[]",required:!0}},{key:"total",value:{name:"number",required:!0}}]}}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:"S3: Settings › Import — the recent batches (`/import`) and the doors; the person's Projects for the batch"},canImport:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},projects:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},importDoors:{required:!1,tsType:{name:'ImportPanelProps["doors"]',raw:'ImportPanelProps["doors"]'},description:""},importInitial:{required:!1,tsType:{name:"Pick",elements:[{name:"ImportPanelProps"},{name:"union",raw:'"initialBatch" | "initialRows" | "initialBusy" | "initialError" | "initialConfirming"',elements:[{name:"literal",value:'"initialBatch"'},{name:"literal",value:'"initialRows"'},{name:"literal",value:'"initialBusy"'},{name:"literal",value:'"initialError"'},{name:"literal",value:'"initialConfirming"'}]}],raw:'Pick<ImportPanelProps, "initialBatch" | "initialRows" | "initialBusy" | "initialError" | "initialConfirming">'},description:""}}};const ra={title:"Apps/NexFactory/Settings",component:ie,parameters:{ds:"DS-6705",layout:"fullscreen",workbench:{ns:"factory",path:"/factory/settings"},docs:{description:{component:`Settings (DS-7009 two-level page): Source live (S3 — the health line, the checkpoints, the admin's doors) ·
Mapping (DS-6707, S3) · Readiness policy (DS-6705, S2). The admin edits; the planner reads; the DS-7006 ladder on
each section's own read.`}}},args:{view:i(p(n("olena"))),policy:i(ne(n("olena"))),canManagePolicy:!0,personName:Pe,savePolicy:async(a,o)=>qe(n("olena"),{gates:a,note:o}),health:i(J(n("olena"))),canAdminSource:!0,sourceDoors:{probe:async()=>je(n("olena")),runSync:async a=>Z(n("olena"),a??{}),reconcile:async a=>Z(n("olena"),a??{},"reconcile")},mapping:i(G(n("olena"))),mappingDoors:{discover:async()=>te(n("olena")),approve:async a=>Be(n("olena"),a)},fields:i(ae(n("olena"))),fieldDoors:{save:async(a,o)=>De(n("olena"),{record_type:a,fields:o})},fieldPolicy:i(Te(n("olena"))),imports:i(z(n("olena"))),canImport:!0,projects:["airframes","avionics"]}},y={name:"Readiness policy · the admin (Olena)"},S={name:"Readiness policy · editing",args:{policyInitial:{initialEditing:!0}}},h={name:"Readiness policy · a planner reads (Dmytro)",args:{view:i(p(n("dmytro"))),policy:i(ne(n("dmytro"))),canManagePolicy:!1}},f={name:"Source · the connected world, live",args:{initialSection:"source"},play:async({canvasElement:a})=>{if(!a.querySelector('[data-testid="source-health-line"]'))throw new globalThis.Error("the health line");if(a.querySelectorAll('[data-testid="source-checkpoints"] tbody tr').length!==8)throw new globalThis.Error("eight checkpoints")}},v={name:"Source · unavailable since",args:{initialSection:"source",health:i(J(n("olena"),"down"))}},w={name:"Source · Build mode",args:{initialSection:"source",view:i(p(n("olena","native"))),health:i(J(n("olena","native"))),mapping:i(G(n("olena","native")))}},P={name:"Source · loading",args:{initialSection:"source",health:r("loading")}},x={name:"Source · error",args:{initialSection:"source",health:r("error")}},E={name:"Mapping · approved v3 (DS-6707)",args:{initialSection:"mapping"},play:async({canvasElement:a})=>{if(a.querySelectorAll('[data-testid^="mapping-row-"]').length!==8)throw new globalThis.Error("eight entities")}},b={name:"Mapping · proposed v4, approval blocked",args:{initialSection:"mapping",mapping:i(te(n("olena")))}},F={name:"Mapping · a planner reads (Dmytro)",args:{initialSection:"mapping",view:i(p(n("dmytro"))),mapping:i(G(n("dmytro"))),canAdminSource:!1}},T={name:"Mapping · loading",args:{initialSection:"mapping",mapping:r("loading")}},D={name:"Mapping · error",args:{initialSection:"mapping",mapping:r("error")}},B={args:{policy:r("loading")}},j={args:{policy:r("error")}},q={args:{view:r("loading")}},k={args:{view:r("denied")}},I={args:{view:r("offline")}},R={name:"Fields · material v1 (DS-6708)",args:{initialSection:"fields"},play:async({canvasElement:a})=>{if(!a.querySelector('[data-testid="field-schema"]'))throw new globalThis.Error("the schema editor");if(a.querySelectorAll('[data-testid="fields-table"] tbody tr').length!==2)throw new globalThis.Error("two custom fields on the material")}},M={name:"Fields · editing",args:{initialSection:"fields",fieldsInitial:{initialEditing:!0}}},N={name:"Fields · a planner reads (Dmytro)",args:{initialSection:"fields",view:i(p(n("dmytro"))),fields:i(ae(n("dmytro"))),canManagePolicy:!1}},A={name:"Fields · loading",args:{initialSection:"fields",fields:r("loading")}},C={name:"Fields · error",args:{initialSection:"fields",fields:r("error")}},L={name:"Field policy · read-only (DS-6709)",args:{initialSection:"fieldPolicy"},play:async({canvasElement:a})=>{if(!a.querySelector('[data-testid="field-policy-table"]'))throw new globalThis.Error("the policy table")}},V={name:"Field policy · denied",args:{initialSection:"fieldPolicy",fieldPolicy:r("denied")}},m={name:"Import · connected world · external owner (DS-6710)",args:{initialSection:"import"},play:async({canvasElement:a})=>{if(!a.querySelector('[data-testid="import-panel"] [data-testid="restriction"]'))throw new globalThis.Error("the external owner's Restriction");if(a.querySelector('[data-testid="import-file"]'))throw new globalThis.Error("no file step in the connected world")}},_={name:"Import · Build mode · the file step",args:{initialSection:"import",view:i(p(n("olena","native"))),imports:i(z(n("olena","native"))),importDoors:{preview:async(a,o,u)=>Fe(n("olena","native"),{filename:a.name,media_type:a.type||"text/csv",text:await a.text(),entity:o,project_id:u}),rows:async(a,o)=>be(n("olena","native"),a,0,100,o),commit:async(a,o)=>Ee(n("olena","native"),a,o),rollback:async a=>xe(n("olena","native"),a)}},play:async({canvasElement:a})=>{if(!a.querySelector('[data-testid="import-file"]'))throw new globalThis.Error("the file step in Build mode")}},H={name:"Import · a planner reads (Dmytro)",args:{initialSection:"import",view:i(p(n("dmytro","native"))),imports:i(z(n("dmytro","native"))),canImport:!1}},O={name:"Import · loading",args:{initialSection:"import",imports:r("loading")}},sa=["Populated","Editing","Reader","Source","SourceDown","SourceBuild","SourceLoading","SourceError","Mapping","MappingProposed","MappingReader","MappingLoading","MappingError","PolicyLoading","PolicyError","Loading","Denied","Offline","Fields","FieldsEditing","FieldsReader","FieldsLoading","FieldsError","FieldPolicy","FieldPolicyDenied","ImportExternal","ImportBuild","ImportReader","ImportLoading"];y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Readiness policy · the admin (Olena)"
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Readiness policy · editing",
  args: {
    policyInitial: {
      initialEditing: true
    }
  }
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Readiness policy · a planner reads (Dmytro)",
  args: {
    view: ready(store.settings(as("dmytro"))),
    policy: ready(store.readinessPolicy(as("dmytro"))),
    canManagePolicy: false
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Source · the connected world, live",
  args: {
    initialSection: "source"
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="source-health-line"]')) throw new globalThis.Error("the health line");
    if (canvasElement.querySelectorAll('[data-testid="source-checkpoints"] tbody tr').length !== 8) throw new globalThis.Error("eight checkpoints");
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Source · unavailable since",
  args: {
    initialSection: "source",
    health: ready(store.sourceHealth(as("olena"), "down"))
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Source · Build mode",
  args: {
    initialSection: "source",
    view: ready(store.settings(as("olena", "native"))),
    health: ready(store.sourceHealth(as("olena", "native"))),
    mapping: ready(store.sourceMapping(as("olena", "native")))
  }
}`,...w.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Source · loading",
  args: {
    initialSection: "source",
    health: state("loading")
  }
}`,...P.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Source · error",
  args: {
    initialSection: "source",
    health: state("error")
  }
}`,...x.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Mapping · approved v3 (DS-6707)",
  args: {
    initialSection: "mapping"
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelectorAll('[data-testid^="mapping-row-"]').length !== 8) throw new globalThis.Error("eight entities");
  }
}`,...E.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Mapping · proposed v4, approval blocked",
  args: {
    initialSection: "mapping",
    mapping: ready(store.discoverMapping(as("olena")))
  }
}`,...b.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Mapping · a planner reads (Dmytro)",
  args: {
    initialSection: "mapping",
    view: ready(store.settings(as("dmytro"))),
    mapping: ready(store.sourceMapping(as("dmytro"))),
    canAdminSource: false
  }
}`,...F.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Mapping · loading",
  args: {
    initialSection: "mapping",
    mapping: state("loading")
  }
}`,...T.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Mapping · error",
  args: {
    initialSection: "mapping",
    mapping: state("error")
  }
}`,...D.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    policy: state("loading")
  }
}`,...B.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    policy: state("error")
  }
}`,...j.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("loading")
  }
}`,...q.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("denied")
  }
}`,...k.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("offline")
  }
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Fields · material v1 (DS-6708)",
  args: {
    initialSection: "fields"
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="field-schema"]')) throw new globalThis.Error("the schema editor");
    if (canvasElement.querySelectorAll('[data-testid="fields-table"] tbody tr').length !== 2) throw new globalThis.Error("two custom fields on the material");
  }
}`,...R.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Fields · editing",
  args: {
    initialSection: "fields",
    fieldsInitial: {
      initialEditing: true
    }
  }
}`,...M.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Fields · a planner reads (Dmytro)",
  args: {
    initialSection: "fields",
    view: ready(store.settings(as("dmytro"))),
    fields: ready(records.fieldSchemas(as("dmytro"))),
    canManagePolicy: false
  }
}`,...N.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Fields · loading",
  args: {
    initialSection: "fields",
    fields: state("loading")
  }
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Fields · error",
  args: {
    initialSection: "fields",
    fields: state("error")
  }
}`,...C.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Field policy · read-only (DS-6709)",
  args: {
    initialSection: "fieldPolicy"
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="field-policy-table"]')) throw new globalThis.Error("the policy table");
  }
}`,...L.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Field policy · denied",
  args: {
    initialSection: "fieldPolicy",
    fieldPolicy: state("denied")
  }
}`,...V.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Import · connected world · external owner (DS-6710)",
  args: {
    initialSection: "import"
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="import-panel"] [data-testid="restriction"]')) throw new globalThis.Error("the external owner's Restriction");
    if (canvasElement.querySelector('[data-testid="import-file"]')) throw new globalThis.Error("no file step in the connected world");
  }
}`,...m.parameters?.docs?.source},description:{story:"the connected world: the owner is external — the door says so and offers nothing (DS-0004)",...m.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Import · Build mode · the file step",
  args: {
    initialSection: "import",
    view: ready(store.settings(as("olena", "native"))),
    imports: ready(records.importBatches(as("olena", "native"))),
    importDoors: {
      preview: async (file, entity, project) => records.previewImport(as("olena", "native"), {
        filename: file.name,
        media_type: file.type || "text/csv",
        text: await file.text(),
        entity,
        project_id: project
      }),
      rows: async (id, s) => records.importRows(as("olena", "native"), id, 0, 100, s),
      commit: async (id, body) => records.commitImport(as("olena", "native"), id, body),
      rollback: async id => records.rollbackImport(as("olena", "native"), id)
    }
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="import-file"]')) throw new globalThis.Error("the file step in Build mode");
  }
}`,..._.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Import · a planner reads (Dmytro)",
  args: {
    initialSection: "import",
    view: ready(store.settings(as("dmytro", "native"))),
    imports: ready(records.importBatches(as("dmytro", "native"))),
    canImport: false
  }
}`,...H.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Import · loading",
  args: {
    initialSection: "import",
    imports: state("loading")
  }
}`,...O.parameters?.docs?.source}}};export{k as Denied,S as Editing,L as FieldPolicy,V as FieldPolicyDenied,R as Fields,M as FieldsEditing,C as FieldsError,A as FieldsLoading,N as FieldsReader,_ as ImportBuild,m as ImportExternal,O as ImportLoading,H as ImportReader,q as Loading,E as Mapping,D as MappingError,T as MappingLoading,b as MappingProposed,F as MappingReader,I as Offline,j as PolicyError,B as PolicyLoading,y as Populated,h as Reader,f as Source,w as SourceBuild,v as SourceDown,x as SourceError,P as SourceLoading,sa as __namedExportsOrder,ra as default};
