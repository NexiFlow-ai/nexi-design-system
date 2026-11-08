import{j as e,r as _}from"./iframe-C_4ax-Jm.js";import{i as w,a as T,b as t,B as n,w as j}from"./harness-BKnF6FGS.js";import{t as s}from"./adapt-Bj0dS4B7.js";import{B as f,I as S,a as x,S as I,b as k}from"./Bench-Bwe01cxT.js";import"./preload-helper-PPVm8Dsz.js";import"./GraphShell-BqaAvdfg.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./credential-Ch26UJlM.js";import"./errors-pXhwd8l7.js";import"./client-Bqz7dDrB.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./modules-A3eXOreg.js";import"./gauge-CBjfqXTD.js";import"./database-BGWOjs-M.js";import"./workflow-BGMWCDzG.js";import"./shield-check-Cac0BQ49.js";import"./format-BXHDRv_8.js";const Ae={title:"Apps/NexGraph/Parts/Bench",decorators:[w],parameters:{ds:"DS-6004",layout:"fullscreen",...T("/graph/runs/bench/bench_r1"),docs:{description:{component:"The parts of DS-6004 *Bench run reader* ( S4, ): the run's chips, its numbers as a fact row, the\nper-section table with its Sort control, the items list. Every cell is an id, a code or a number — never a\nquestion, a gold fact or an answer (). The composed pages are `Apps/NexGraph/Bench` and `…/BenchRun`."}}}},o=j(),r=s(t(n("bench_r1",24),o,null)),C=s(t(n("bench_r2",24,{reranker_down:4,indicative:!0,version_no:3}),o,null)),R=s(t(n("bench_rx",12,{revoked:!0}),o,null)),u={corpus_ref:"external:multiconer_v2@2023.1",corpus_version_ref:null,corpus_hash:null,arm:"hybrid_graph_rerank",purpose:"knowledge"},E=s(t(n("bench_ext_ner",20,{...u,metric_set:{ner_f1_fine:.41,ner_f1_coarse:.55,ece:.39,unmapped:12}}),o,null)),g=[s(t(n("ref:10.18653/v1/2023.semeval-1.310",1,{...u,reference:"xlmr_large",metric_set:{ner_f1_fine:.61,ner_f1_coarse:.72}}),o,null)),s(t(n("ref:10.18653/v1/2023.semeval-1.311",1,{...u,reference:"xlmr_base",metric_set:{ner_f1_fine:.66},references:{xlmr_base:{ner_f1_fine:.66},baseline_crf:{ner_f1_fine:.38}}}),o,null))],M=s(t(n("bench_ext_sus",20,{...u,empty_items:!0,metric_set:{ner_f1_fine:0,ece:1}}),o,null)),i={name:"BenchRunChips",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[e.jsx("div",{children:e.jsx(f,{run:r})}),e.jsx("div",{children:e.jsx(f,{run:C,idSuffix:"-flagged"})}),e.jsx("div",{children:e.jsx(f,{run:R,idSuffix:"-revoked"})})]})},a={name:"BenchStats",render:()=>e.jsx(k,{run:r})},c={name:"BenchMetrics · external run, references, platform run (nothing), suspect",render:()=>e.jsxs("div",{style:{display:"grid",gap:24},children:[e.jsx(x,{run:E,references:g}),e.jsx(x,{run:r,references:[]}),e.jsx(x,{run:M,references:g})]})},m={name:"SectionTable",render:function(){const[h,v]=_.useState("technical"),[B,y]=_.useState("fact");return e.jsx(I,{rows:r.bySection,selected:h,onOpen:v,sort:B,onSort:y})}},p={name:"ItemsTable",render:()=>e.jsx(S,{items:r.items,section:null,onClearSection:()=>{},total:r.items.length})},l={name:"ItemsTable · one section",render:()=>{const b=r.items.filter(h=>h.section==="technical");return e.jsx(S,{items:b,section:"technical",onClearSection:()=>{},total:r.items.length})}},d={name:"ItemsTable · empty",render:()=>e.jsx(S,{items:[],section:"nowhere",onClearSection:()=>{},total:r.items.length})},qe=["Chips","Stats","Metrics","Sections","Items","ItemsOfOneSection","ItemsEmpty"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "BenchRunChips",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-3)"
  }}>
      <div><BenchRunChips run={run} /></div>
      <div><BenchRunChips run={flagged} idSuffix="-flagged" /></div>
      <div><BenchRunChips run={revoked} idSuffix="-revoked" /></div>
    </div>
}`,...i.parameters?.docs?.source},description:{story:"The arm alone (a clean run) · *indicative* + `⚠ reranker` (rows still `llm_proposed`, the reranker away on 4 of 24) · revoked — words beside a glyph, never colour alone ().",...i.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "BenchStats",
  render: () => <BenchStats run={run} />
}`,...a.parameters?.docs?.source},description:{story:"The seven numbers of a run as a fact row — questions (and negatives) · fact coverage · cite@k · false evidence · p50 · p95 · reranked.",...a.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "BenchMetrics · external run, references, platform run (nothing), suspect",
  render: () => <div style={{
    display: "grid",
    gap: 24
  }}>
      <BenchMetrics run={external} references={references} />
      <BenchMetrics run={run} references={[]} />
      <BenchMetrics run={suspect} references={references} />
    </div>
}`,...c.parameters?.docs?.source},description:{story:" (, DS-6004 amended): the benchmark's own numbers on an **external** run — one fact per non-null `metric_set` column, the published reference systems' numbers of the same bench beside it; a platform run renders nothing; a suspect run's numbers are greyed ().",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "SectionTable",
  render: function SectionsStory() {
    const [selected, setSelected] = useState<string | null>("technical");
    const [sort, setSort] = useState<SectionSort>("fact");
    return <SectionTable rows={run.bySection} selected={selected} onOpen={setSelected} sort={sort} onSort={setSort} />;
  }
}`,...m.parameters?.docs?.source},description:{story:"Per section, ordered by the Sort control (fact coverage first); a row opens the items of that section — here the selection is state.",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "ItemsTable",
  render: () => <ItemsTable items={run.items} section={null} onClearSection={() => {}} total={run.items.length} />
}`,...p.parameters?.docs?.source},description:{story:"The items: question id · section · language · status word · hits/total · cited page · latency · reason codes.",...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "ItemsTable · one section",
  render: () => {
    const items = run.items.filter(i => i.section === "technical");
    return <ItemsTable items={items} section="technical" onClearSection={() => {}} total={run.items.length} />;
  }
}`,...l.parameters?.docs?.source},description:{story:"One section kept (`?section=technical`): the filter chip names it; Remove brings every row back ().",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "ItemsTable · empty",
  render: () => <ItemsTable items={[]} section="nowhere" onClearSection={() => {}} total={run.items.length} />
}`,...d.parameters?.docs?.source},description:{story:"No item matches (a section nobody answered in): the table's own empty line, the filter still removable.",...d.parameters?.docs?.description}}};export{i as Chips,p as Items,d as ItemsEmpty,l as ItemsOfOneSection,c as Metrics,m as Sections,a as Stats,qe as __namedExportsOrder,Ae as default};
