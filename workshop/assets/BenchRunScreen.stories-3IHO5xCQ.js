import{i as A,l as H,s as o,a as c,B as i}from"./harness-BKnF6FGS.js";import{ak as C,r as I,j as r,ac as q,V as O,Z as T}from"./iframe-C_4ax-Jm.js";import{a as $,b as z}from"./navigation-BPhnWcXc.js";import{u as V,a as M,b as G,r as X}from"./GraphShell-BqaAvdfg.js";import{t as Q,a as W}from"./adapt-Bj0dS4B7.js";import{n as Z,f as D}from"./format-BXHDRv_8.js";import{b as J,a as K,s as N,S as Y,I as ee,B as re}from"./Bench-Bwe01cxT.js";import"./preload-helper-PPVm8Dsz.js";import"./link-CXIEul0Q.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./credential-Ch26UJlM.js";import"./errors-pXhwd8l7.js";import"./client-Bqz7dDrB.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./modules-A3eXOreg.js";import"./gauge-CBjfqXTD.js";import"./database-BGWOjs-M.js";import"./workflow-BGMWCDzG.js";import"./shield-check-Cac0BQ49.js";function L({runId:e}){const{t:v}=C(),t=$(),l=z(),{replace:y}=V(),{graph:d,scopeId:n}=M(),h=t?.get("section")??null,[m,R]=I.useState("fact"),U=G(async()=>{const a=Q(await d.getBenchRun(n,e)),s=a.external&&!a.referenceSystem?(await d.listBenchRuns(n,{arm:"reference",limit:50})).items.map(W):[];return{run:a,references:s}},{deps:[n,e]}),F=I.useCallback(a=>{const s=new URLSearchParams(t?.toString());a&&a!==h?s.set("section",a):s.delete("section");const P=s.toString();y(P?`${l}?${P}`:l)},[t,l,y,h]);return r.jsx(q,{result:U,empty:{title:v("graph.bench.run.empty")},deniedBody:v("graph.state.denied.content"),children:({run:a,references:s})=>r.jsx(ne,{run:a,references:s,section:h,sort:m,onSort:R,onSection:F})})}function ne({run:e,references:v,section:t,sort:l,onSort:y,onSection:d}){const{t:n}=C(),h=t?e.items.filter(m=>m.section===t):e.items;return r.jsxs(O,{layout:"dense",back:{href:X.bench(),label:n("graph.bench.title")},title:`${n("graph.bench.run.title")} ${N(e.id,12)}`,width:"wide",meta:r.jsxs(r.Fragment,{children:[r.jsx(re,{run:e}),r.jsx("span",{className:"nexus-cc-muted nexus-cc-time",children:D(e.startedAt)})]}),testId:"bench-run-page",children:[r.jsx(J,{run:e}),e.indicative?r.jsx("p",{role:"note",className:"nexus-cc-muted","data-testid":"bench-indicative-note",children:n("graph.bench.indicative.note")}):null,e.degraded?r.jsxs("p",{role:"note",className:"nexus-cc-muted","data-testid":"bench-degraded-note",children:["⚠ ",n("graph.bench.reranker.note",{n:String(e.rerankerUnavailable),total:String(e.questions)})]}):null,e.judgeDegraded?r.jsxs("p",{role:"note",className:"nexus-cc-muted","data-testid":"bench-judge-note",children:["⚠ ",n("graph.bench.judge.note",{n:String(e.judgeUnavailable),total:String(e.questions)})]}):null,e.suspect?r.jsx("p",{role:"note",className:"nexus-cc-muted","data-testid":"bench-suspect-note",children:n("graph.bench.suspect.note")}):null,e.external?r.jsx("p",{role:"note",className:"nexus-cc-muted","data-testid":"bench-external-note",children:n("graph.bench.external.note")}):null,e.rowsPurged?r.jsx("p",{role:"note",className:"nexus-cc-muted","data-testid":"bench-purged-note",children:n("graph.bench.purged.note")}):null,r.jsx(K,{run:e,references:v}),r.jsx(T,{columns:2,testId:"bench-record",items:[{label:n("graph.bench.record.run"),value:r.jsx("code",{"data-testid":"bench-run-id",children:e.id})},{label:n("graph.bench.record.corpus"),value:r.jsxs("span",{children:[r.jsx("code",{title:e.corpusRef,children:e.corpusRef}),e.corpusHash?r.jsxs(r.Fragment,{children:[" · ",r.jsx("code",{children:N(e.corpusHash)})]}):null,e.corpusVersionId?r.jsxs(r.Fragment,{children:[" · ",r.jsx("code",{children:e.corpusVersionId})]}):null]})},{label:n("graph.bench.record.policy"),value:r.jsxs("span",{children:[r.jsx("code",{children:e.processingProfile})," + ",r.jsx("code",{children:e.retrievalProfile})]})},{label:n("graph.bench.record.purpose"),value:e.purpose},{label:n("graph.bench.record.questionSet"),value:r.jsx("code",{"data-testid":"bench-state-ref",children:e.stateRef})},{label:n("graph.bench.record.labels"),value:Object.entries(e.byStatus).map(([m,R])=>`${n(`graph.bench.status.${m}`)} ${Z(R)}`).join(" · ")||"—"},{label:n("graph.bench.record.build"),value:r.jsxs("span",{children:[e.gitSha?r.jsx("code",{children:N(e.gitSha)}):"—",e.modelRef?r.jsxs(r.Fragment,{children:[" · ",r.jsx("code",{children:e.modelRef})]}):null]})},{label:n("graph.bench.record.published"),value:r.jsxs("span",{className:"nexus-cc-time",children:[D(e.publishedAt)," · v",e.versionNo]})}]}),r.jsx(Y,{rows:e.bySection,selected:t,onOpen:d,sort:l,onSort:y}),r.jsx(ee,{items:h,section:t,onClearSection:()=>d(null),total:e.questions})]})}L.__docgenInfo={description:"Bench run page ( S4 ·  · ): `/graph/runs/bench/{run_id}` — one header line (: back · the\nrun · its chips), the numbers as a fact row, the record (corpus · policy · versions · the question-set address as a\nURI), the per-section table and the items. `?section=` keeps one section's items — the whole run is read once (the\ndoor's `?section=` narrows the same way for a caller that wants less) and the per-section table stays complete, so a\nsection row is a filter and the chip on the items is its name; it is what a dashboard's section row deep-links to\n(UX §2). Read-only: the harness published it, nobody edits a measurement. While any row is `llm_proposed` the page\nsays *indicative until reviewed* (TBD-916) — a note, never a floor.",methods:[],displayName:"BenchRunScreen",props:{runId:{required:!0,tsType:{name:"string"},description:""}}};const or={title:"Apps/NexGraph/BenchRun",component:L,decorators:[A],args:{runId:"bench_r1"},parameters:{ds:"DS-6004",layout:"fullscreen",...c("/graph/runs/bench/bench_r1"),docs:{description:{component:`Bench run page (DS-6004 *Bench run reader*,  S4 ·  · ): one header line (back · the run · its
chips · when), the seven numbers as a fact row, the record, the per-section table ordered by the Sort control, the
items with their status word, cited page and reason codes — never a question, a gold fact or an answer ().`}}}},p=H("/graph/runs/bench/bench_r1"),w={...p.Populated,play:async({canvasElement:e})=>{await o(e,"bench-items-table")}},S=p.Empty,j=p.Loading,B=p.Error,k=p.Denied,E=p.Offline,u={name:"Populated · one section",parameters:c("/graph/runs/bench/bench_r1?section=technical"),play:async({canvasElement:e})=>{await o(e,"bench-section-filter")}},_={name:"Populated · indicative and reranker gaps",args:{runId:"bench_r2"},parameters:c("/graph/runs/bench/bench_r2"),play:async({canvasElement:e})=>{await o(e,"bench-degraded-note")}},b={name:"Populated · external benchmark run",args:{runId:"bench_ext_mine1"},parameters:c("/graph/runs/bench/bench_ext_mine1","populated",{benchRuns:[i("bench_ext_mine1",20,{corpus_ref:"external:mine1@0089147b6ecf",corpus_version_ref:null,corpus_hash:"33eeda06".padEnd(64,"0"),arm:"hybrid_graph_rerank",purpose:"knowledge",retrieval_profile_version:"rtp_default@1+judge:evaluator@e22aec47:batch15",judge_down:2})]}),play:async({canvasElement:e})=>{await o(e,"bench-judge-note")}},g={name:"Populated · external run with bench metrics and references",args:{runId:"bench_ext_ner"},parameters:c("/graph/runs/bench/bench_ext_ner","populated",{benchRuns:[i("bench_ext_ner",20,{corpus_ref:"external:multiconer_v2@2023.1",corpus_version_ref:null,corpus_hash:null,arm:"hybrid_graph_rerank",purpose:"knowledge",metric_set:{ner_f1_fine:.41,ner_f1_coarse:.55,ece:.39,unmapped:12}}),i("ref:10.18653/v1/2023.semeval-1.310",1,{corpus_ref:"external:multiconer_v2@2023.1",corpus_version_ref:null,corpus_hash:null,reference:"xlmr_large",metric_set:{ner_f1_fine:.61,ner_f1_coarse:.72}}),i("ref:10.18653/v1/2023.semeval-1.311",1,{corpus_ref:"external:multiconer_v2@2023.1",corpus_version_ref:null,corpus_hash:null,reference:"xlmr_base",metric_set:{ner_f1_fine:.66},references:{xlmr_base:{ner_f1_fine:.66},baseline_crf:{ner_f1_fine:.38}}})]}),play:async({canvasElement:e})=>{await o(e,"bench-metrics")}},x={name:"Populated · suspect run (every row returned nothing)",args:{runId:"bench_ext_zero"},parameters:c("/graph/runs/bench/bench_ext_zero","populated",{benchRuns:[i("bench_ext_zero",20,{corpus_ref:"external:mine1@0089147b6ecf",corpus_version_ref:null,corpus_hash:null,arm:"hybrid_graph_rerank",purpose:"knowledge",empty_items:!0,metric_set:{mine1_retention:0}})]}),play:async({canvasElement:e})=>{await o(e,"bench-suspect-note")}},f={name:"Populated · revoked",args:{runId:"bench_rx"},parameters:c("/graph/runs/bench/bench_rx","populated",{benchRuns:[i("bench_rx",12,{revoked:!0})]}),play:async({canvasElement:e})=>{await o(e,"bench-revoked")}},cr=["Populated","Empty","Loading","Error","Denied","Offline","Section","Flagged","ExternalRun","ExternalMetrics","Suspect","Revoked"];w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...L.Populated,
  play: async ({
    canvasElement
  }) => {
    await settled(canvasElement, "bench-items-table");
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"L.Empty",...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"L.Loading",...j.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:"L.Error",...B.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"L.Denied",...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"L.Offline",...E.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Populated · one section",
  parameters: at("/graph/runs/bench/bench_r1?section=technical"),
  play: async ({
    canvasElement
  }) => {
    await settled(canvasElement, "bench-section-filter");
  }
}`,...u.parameters?.docs?.source},description:{story:"`?section=` keeps one section's items — the chip names the filter; Remove brings every row back ().",...u.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Populated · indicative and reranker gaps",
  args: {
    runId: "bench_r2"
  },
  parameters: at("/graph/runs/bench/bench_r2"),
  play: async ({
    canvasElement
  }) => {
    await settled(canvasElement, "bench-degraded-note");
  }
}`,..._.parameters?.docs?.source},description:{story:"Indicative (rows still `llm_proposed`, TBD-916) and degraded (the reranker away on 4 of 24): both chips, both notes — words, never colour alone ().",..._.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Populated · external benchmark run",
  args: {
    runId: "bench_ext_mine1"
  },
  parameters: at("/graph/runs/bench/bench_ext_mine1", "populated", {
    benchRuns: [BENCH_RUN("bench_ext_mine1", 20, {
      corpus_ref: "external:mine1@0089147b6ecf",
      corpus_version_ref: null,
      corpus_hash: "33eeda06".padEnd(64, "0"),
      arm: "hybrid_graph_rerank",
      purpose: "knowledge",
      retrieval_profile_version: "rtp_default@1+judge:evaluator@e22aec47:batch15",
      judge_down: 2
    })]
  }),
  play: async ({
    canvasElement
  }) => {
    await settled(canvasElement, "bench-judge-note");
  }
}`,...b.parameters?.docs?.source},description:{story:" S9 (08 §S9): an external benchmark run — the *Bench* chip, the corpus line reads the dataset pin, the external note; `⚠ judge` and its note when the judge route was away on > 5 % (, the `reranker` idiom).",...b.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Populated · external run with bench metrics and references",
  args: {
    runId: "bench_ext_ner"
  },
  parameters: at("/graph/runs/bench/bench_ext_ner", "populated", {
    benchRuns: [BENCH_RUN("bench_ext_ner", 20, {
      corpus_ref: "external:multiconer_v2@2023.1",
      corpus_version_ref: null,
      corpus_hash: null,
      arm: "hybrid_graph_rerank",
      purpose: "knowledge",
      metric_set: {
        ner_f1_fine: 0.41,
        ner_f1_coarse: 0.55,
        ece: 0.39,
        unmapped: 12
      }
    }), BENCH_RUN("ref:10.18653/v1/2023.semeval-1.310", 1, {
      corpus_ref: "external:multiconer_v2@2023.1",
      corpus_version_ref: null,
      corpus_hash: null,
      reference: "xlmr_large",
      metric_set: {
        ner_f1_fine: 0.61,
        ner_f1_coarse: 0.72
      }
    }), BENCH_RUN("ref:10.18653/v1/2023.semeval-1.311", 1, {
      corpus_ref: "external:multiconer_v2@2023.1",
      corpus_version_ref: null,
      corpus_hash: null,
      reference: "xlmr_base",
      metric_set: {
        ner_f1_fine: 0.66
      },
      references: {
        xlmr_base: {
          ner_f1_fine: 0.66
        },
        baseline_crf: {
          ner_f1_fine: 0.38
        }
      }
    })]
  }),
  play: async ({
    canvasElement
  }) => {
    await settled(canvasElement, "bench-metrics");
  }
}`,...g.parameters?.docs?.source},description:{story:" (, DS-6004 amended): an external run's own numbers — the *Bench metrics* block under the five, each with the published reference systems' numbers beside it (*0.41 · xlmr_large 0.61 · xlmr_base 0.66 · baseline_crf 0.38* — a reference version naming several systems lists each, ); a platform run (`Populated`) shows no block.",...g.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Populated · suspect run (every row returned nothing)",
  args: {
    runId: "bench_ext_zero"
  },
  parameters: at("/graph/runs/bench/bench_ext_zero", "populated", {
    benchRuns: [BENCH_RUN("bench_ext_zero", 20, {
      corpus_ref: "external:mine1@0089147b6ecf",
      corpus_version_ref: null,
      corpus_hash: null,
      arm: "hybrid_graph_rerank",
      purpose: "knowledge",
      empty_items: true,
      metric_set: {
        mine1_retention: 0
      }
    })]
  }),
  play: async ({
    canvasElement
  }) => {
    await settled(canvasElement, "bench-suspect-note");
  }
}`,...x.parameters?.docs?.source},description:{story:" ( (a), ): every measured row returned nothing — the *suspect* chip, the note, the means greyed; a harness fault until proven otherwise, never a number.",...x.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Populated · revoked",
  args: {
    runId: "bench_rx"
  },
  parameters: at("/graph/runs/bench/bench_rx", "populated", {
    benchRuns: [BENCH_RUN("bench_rx", 12, {
      revoked: true
    })]
  }),
  play: async ({
    canvasElement
  }) => {
    await settled(canvasElement, "bench-revoked");
  }
}`,...f.parameters?.docs?.source},description:{story:"A revoked run (the source's readers changed, ): the chip on the line; the numbers stay readable until the purge.",...f.parameters?.docs?.description}}};export{k as Denied,S as Empty,B as Error,g as ExternalMetrics,b as ExternalRun,_ as Flagged,j as Loading,E as Offline,w as Populated,f as Revoked,u as Section,x as Suspect,cr as __namedExportsOrder,or as default};
