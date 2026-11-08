import{i as $,l as F,a as w,s as v,B as y,g as B}from"./harness-BKnF6FGS.js";import{ak as O,r as o,j as a,V as q,ac as M,s as Z,T as K,h as R,D as G}from"./iframe-C_4ax-Jm.js";import{u as z,a as Q,b as V,r as j,f as W}from"./GraphShell-BqaAvdfg.js";import{a as J}from"./adapt-Bj0dS4B7.js";import{f as X,n as Y}from"./format-BXHDRv_8.js";import{s as m,B as ee,r as N,c as re,l as ae}from"./Bench-Bwe01cxT.js";import"./preload-helper-PPVm8Dsz.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./credential-Ch26UJlM.js";import"./errors-pXhwd8l7.js";import"./client-Bqz7dDrB.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./modules-A3eXOreg.js";import"./gauge-CBjfqXTD.js";import"./database-BGWOjs-M.js";import"./workflow-BGMWCDzG.js";import"./shield-check-Cac0BQ49.js";function P(){const{t:r,tn:n}=O(),{go:A}=z(),{graph:C,scopeId:x}=Q(),[h,L]=o.useState("all"),[d,T]=o.useState("all"),E=x!==W,s=V(async()=>E?{runs:(await C.listBenchRuns(x,{limit:200})).items.map(J)}:{runs:[]},{deps:[x],isEmpty:e=>e.runs.length===0}),t=o.useMemo(()=>s.state==="ready"?s.data.runs:[],[s]),D=o.useMemo(()=>Array.from(new Set(t.map(e=>e.arm))).sort(),[t]),H=o.useMemo(()=>Array.from(new Set(t.map(e=>e.corpusHash).filter(e=>!!e))),[t]),I=t.filter(e=>(h==="all"||e.arm===h)&&(d==="all"||e.corpusHash===d)),S=t.filter(e=>e.indicative).length,k=t.filter(e=>e.degraded).length,U=[{key:"when",header:r("graph.bench.col.when"),width:"96px",render:e=>a.jsx("span",{className:"nexus-cc-time",title:e.startedAt,children:X(e.startedAt)})},{key:"run",header:r("graph.bench.col.run"),render:e=>a.jsxs("span",{className:"nexus-gr-truncate-cell",title:e.id,children:[a.jsx("code",{children:m(e.id,12)})," ",a.jsx(ee,{run:e,idSuffix:`-${e.id}`})]})},{key:"corpus",header:r("graph.bench.col.corpus"),width:"84px",render:e=>a.jsx("code",{title:`${e.corpusRef} · ${e.processingProfile} + ${e.retrievalProfile}`,children:e.external?m(e.corpusRef.slice(9),16):m(e.corpusHash)})},{key:"questions",header:r("graph.bench.stat.questions"),align:"right",width:"64px",render:e=>Y(e.questions)},{key:"fact",header:r("graph.bench.stat.factCoverage"),align:"right",width:"72px",render:e=>N(e.aggregate.factCoverage)},{key:"cite",header:r("graph.bench.stat.citation"),align:"right",width:"60px",render:e=>N(e.aggregate.citationHitK)},{key:"false",header:r("graph.bench.stat.falseEvidence"),align:"right",width:"72px",render:e=>re(e.aggregate.falseEvidenceRate)},{key:"p50",header:r("graph.bench.stat.p50"),align:"right",width:"56px",render:e=>ae(e.aggregate.latencyP50Ms)}];return a.jsx(q,{title:r("graph.bench.title"),width:"wide",back:{href:j.pipeline(),label:r("graph.pipeline.title")},meta:s.state==="ready"?a.jsx("span",{className:"nexus-cc-muted","data-testid":"bench-summary",children:[n("graph.bench.summary",t.length),S?n("graph.bench.summary.indicative",S):null,k?n("graph.bench.summary.degraded",k):null].filter(Boolean).join(" · ")}):null,testId:"bench-page",children:a.jsx(M,{result:s,empty:E?{title:r("graph.bench.empty.title"),body:r("graph.bench.empty.body")}:{title:r("graph.bench.empty.allKnowledge.title"),body:r("graph.bench.empty.allKnowledge.body")},deniedBody:r("graph.state.denied.content"),children:()=>a.jsxs(a.Fragment,{children:[Z(t.length,h!=="all"||d!=="all")?a.jsxs(K,{children:[a.jsx(R,{compact:!0,label:r("graph.bench.col.arm"),value:h,onChange:L,options:[{value:"all",label:r("graph.bench.filter.allArms")},...D.map(e=>({value:e,label:e}))],testId:"bench-arm-filter"}),a.jsx(R,{compact:!0,label:r("graph.bench.col.corpus"),value:d,onChange:T,options:[{value:"all",label:r("graph.bench.filter.allCorpora")},...H.map(e=>({value:e,label:m(e)}))],testId:"bench-corpus-filter"})]}):null,a.jsx(G,{rows:I,columns:U,rowKey:e=>e.id,onOpen:e=>A(j.benchRun(e.id)),caption:r("graph.bench.caption"),testId:"bench-table",empty:{title:r("graph.bench.filter.none")}})]})})})}P.__docgenInfo={description:"Runs → bench ( S4 ·  ·  — the Runs area hosts the bench page, no new navigation item):\n`/graph/runs/bench` — every benchmark run the harness published into this Project (`GET …/bench/runs`, PEP\n`bench_run.read`), newest first: when · the run with its chips (arm · *Indicative* · `⚠ reranker`) · corpus hash (the policy pair in its title) · questions · the numbers. A row\nopens the run page. The list is one Project's (): in *All knowledge* it says so instead of asking a door\nthat does not exist. No question text anywhere () — the page never sees the question set.",methods:[],displayName:"BenchScreen"};const or={title:"Apps/NexGraph/Bench",component:P,decorators:[$],parameters:{ds:"DS-6004",layout:"fullscreen",...w("/graph/runs/bench"),docs:{description:{component:"Runs → bench (DS-6004 *Bench run reader*,  S4 · ): the Project's published benchmark runs, newest first,\nwith the chips a reader needs before a number — *Indicative* while rows are model-labelled, `⚠ reranker` when the\nreranker was away on > 5 %. A row opens the run page. The list is one Project's ()."}}}},l=F("/graph/runs/bench"),u={...l.Populated,play:async({canvasElement:r})=>{await v(r,"bench-degraded-bench_r2")}},i={parameters:w("/graph/runs/bench","populated",{benchRuns:[]})},g=l.Loading,b=l.Error,_=l.Denied,f=l.Offline,p={name:"Populated · many runs",parameters:w("/graph/runs/bench","populated",{benchRuns:[...B(),...Array.from({length:10},(r,n)=>y(`bench_old_${n}`,12,{started_at:`2026-09-${String(10-n%9).padStart(2,"0")}T01:59:00Z`,arm:n%2?"dense":"hybrid_graph"}))]}),play:async({canvasElement:r})=>{await v(r,"bench-arm-filter")}},c={name:"Populated · external benchmark runs",parameters:w("/graph/runs/bench","populated",{benchRuns:[y("bench_ext_mine1",20,{corpus_ref:"external:mine1@0089147b6ecf",corpus_version_ref:null,corpus_hash:"33eeda06".padEnd(64,"0"),arm:"hybrid_graph_rerank",purpose:"knowledge",retrieval_profile_version:"rtp_default@1+judge:evaluator@e22aec47:batch15",judge_down:2}),y("bench_ext_ner",12,{corpus_ref:"external:multiconer_v2@4be2d62c9129",corpus_version_ref:null,corpus_hash:"93a38b56".padEnd(64,"0"),arm:"hybrid_graph_rerank",purpose:"knowledge",retrieval_profile_version:"rtp_default@1+map:multiconer_v2@1",started_at:"2026-11-01T06:34:07Z"}),y("bench_ext_zero",20,{corpus_ref:"external:mine1@0089147b6ecf",corpus_version_ref:null,corpus_hash:null,arm:"hybrid_graph_rerank",purpose:"knowledge",empty_items:!0,started_at:"2026-11-01T08:37:00Z"}),...B()]}),play:async({canvasElement:r})=>{await v(r,"bench-judge-bench_ext_mine1")}},ir=["Populated","Empty","Loading","Error","Denied","Offline","Many","External"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...L.Populated,
  play: async ({
    canvasElement
  }) => {
    await settled(canvasElement, "bench-degraded-bench_r2");
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: at("/graph/runs/bench", "populated", {
    benchRuns: []
  })
}`,...i.parameters?.docs?.source},description:{story:"No run published yet — the empty state names the one thing that fills it (the harness publishes), no sample numbers ().",...i.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"L.Loading",...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"L.Error",...b.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"L.Denied",..._.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"L.Offline",...f.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Populated · many runs",
  parameters: at("/graph/runs/bench", "populated", {
    benchRuns: [...BENCH_RUNS(), ...Array.from({
      length: 10
    }, (_, i) => BENCH_RUN(\`bench_old_\${i}\`, 12, {
      started_at: \`2026-09-\${String(10 - i % 9).padStart(2, "0")}T01:59:00Z\`,
      arm: i % 2 ? "dense" : "hybrid_graph"
    }))]
  }),
  play: async ({
    canvasElement
  }) => {
    await settled(canvasElement, "bench-arm-filter");
  }
}`,...p.parameters?.docs?.source},description:{story:"Twelve runs and more — the arm and corpus filters return (), a run of a second arm among them.",...p.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Populated · external benchmark runs",
  parameters: at("/graph/runs/bench", "populated", {
    benchRuns: [BENCH_RUN("bench_ext_mine1", 20, {
      corpus_ref: "external:mine1@0089147b6ecf",
      corpus_version_ref: null,
      corpus_hash: "33eeda06".padEnd(64, "0"),
      arm: "hybrid_graph_rerank",
      purpose: "knowledge",
      retrieval_profile_version: "rtp_default@1+judge:evaluator@e22aec47:batch15",
      judge_down: 2
    }), BENCH_RUN("bench_ext_ner", 12, {
      corpus_ref: "external:multiconer_v2@4be2d62c9129",
      corpus_version_ref: null,
      corpus_hash: "93a38b56".padEnd(64, "0"),
      arm: "hybrid_graph_rerank",
      purpose: "knowledge",
      retrieval_profile_version: "rtp_default@1+map:multiconer_v2@1",
      started_at: "2026-11-01T06:34:07Z"
    }),
    //  (): a run whose every measured row returned nothing carries the *suspect* word on the list too
    BENCH_RUN("bench_ext_zero", 20, {
      corpus_ref: "external:mine1@0089147b6ecf",
      corpus_version_ref: null,
      corpus_hash: null,
      arm: "hybrid_graph_rerank",
      purpose: "knowledge",
      empty_items: true,
      started_at: "2026-11-01T08:37:00Z"
    }), ...BENCH_RUNS()]
  }),
  play: async ({
    canvasElement
  }) => {
    await settled(canvasElement, "bench-judge-bench_ext_mine1");
  }
}`,...c.parameters?.docs?.source},description:{story:" S9 (08 §S9): an external benchmark run is one more row — the *Bench* chip names the dataset, the corpus cell reads the pin (`mine1@0089147b…`), `⚠ judge` when the judge route was away on > 5 % ().",...c.parameters?.docs?.description}}};export{_ as Denied,i as Empty,b as Error,c as External,g as Loading,p as Many,f as Offline,u as Populated,ir as __namedExportsOrder,or as default};
