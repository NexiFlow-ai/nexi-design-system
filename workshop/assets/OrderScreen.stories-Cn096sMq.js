import{p as fe,m as l,o as d,a as i,n as w,f as we}from"./scene-BIkkuSa8.js";import{ak as xe,r as h,j as e,V as Z,ac as ve,S as k,Z as be,X as J,L as ke,B as U,a as Q,D as Ee,q as Se,M as _e}from"./iframe-C_4ax-Jm.js";import{e as Te,b as je,c as Fe,a as qe}from"./format-CwKZ7-7k.js";import{r as ee,d as E}from"./routes-CtGbDcx2.js";import{O as S}from"./types-CBmIxQfA.js";import{A as Re}from"./AvailabilityRows-BfOnon3-.js";import{E as Be}from"./ExceptionFilingForm-CP0heWFI.js";import{O as Oe,V as Ce}from"./OrderStateChip-D77petS4.js";import{R as De}from"./ReadinessGates-D343tUtn.js";import{S as Ne}from"./SourceChip-ME9pM3wu.js";import"./world-D7bs8um4.js";import"./preload-helper-PPVm8Dsz.js";const $e={high:"danger",medium:"warn",low:"neutral"};function ae({view:s,personName:r,canAct:o,onReevaluate:u,fileException:te,onFiled:ne,initialTab:re="readiness",initialExplained:oe=!1,initialFiling:se=!1,filingInitialState:ie}){const{t:a,locale:V}=xe(),[p,z]=h.useState(re),[le,de]=h.useState(oe),[m,H]=h.useState(!1),[W,X]=h.useState(se),G=h.useRef(null);if(s.state!=="ready")return e.jsx(Z,{layout:"dense",width:"wide",back:{href:ee.orders(),label:a("factory.action.backToOrders")},title:a("factory.kind.order"),testId:"order-page",children:e.jsx(ve,{result:s,empty:{title:a("factory.state.notFound.title")},deniedBody:a("factory.state.denied.body"),children:()=>null})});const{order:n,product:L,site:Y,readiness:x,materials:K,exceptions:v,explanation:b}=s.data,ce=v.filter(t=>t.stage!=="resolved").length,ue=[{key:"readiness",label:a("factory.order.tab.readiness")},{key:"materials",label:a("factory.order.tab.materials"),count:K.length},{key:"operations",label:a("factory.order.tab.operations"),count:n.operations.length},{key:"exceptions",label:a("factory.order.tab.exceptions"),count:ce}],c=L.revisions.find(t=>t.rev===n.revision),pe=new Map(Y.areas.flatMap(t=>t.work_centers).map(t=>[t.id,t])),me=[{key:"seq",header:"#",width:"48px",align:"right",render:t=>String(t.seq)},{key:"name",header:a("factory.field.operation"),render:t=>t.name},{key:"wc",header:a("factory.field.workCenter"),width:"200px",render:t=>pe.get(t.work_center_id)?.name??t.work_center_id},{key:"std",header:a("factory.field.stdTime"),width:"120px",align:"right",render:t=>a("factory.time.min",{n:String(t.std_minutes)})},{key:"status",header:a("factory.field.state"),width:"130px",render:t=>e.jsx(k,{tone:t.status==="done"?"muted":t.status==="running"?"ok":"neutral",children:a(`factory.operationStatus.${t.status}`)})}],he=()=>{!u||m||(H(!0),Promise.resolve(u()).finally(()=>H(!1)))},ge=()=>{X(!1),G.current?.focus()},ye=[{key:"board",label:a("factory.action.openBoard"),onSelect:()=>window.location.assign(E.board(v[0]?.board??"FAC")),testId:"order-menu-board"},...c?.instruction_ref?[{key:"instruction",label:a("factory.action.openInstruction"),onSelect:()=>window.location.assign(E.source(c.instruction_ref.ref)),testId:"order-menu-instruction"}]:[]];return e.jsx(Z,{layout:"dense",width:"wide",back:{href:ee.orders(),label:a("factory.action.backToOrders")},title:n.number,meta:e.jsxs(e.Fragment,{children:[e.jsx(Oe,{state:n.state,testId:"order-state"}),e.jsx(Ce,{verdict:x?.verdict??null,testId:"order-verdict"}),e.jsx(Ne,{source:n.source,testId:"order-source"})]}),actions:e.jsxs(e.Fragment,{children:[o&&S[n.state]!=="done"&&S[n.state]!=="cancelled"?e.jsx(U,{onClick:he,disabled:m||!u,"aria-busy":m||void 0,"data-testid":"order-reevaluate",children:a(m?"factory.action.reevaluating":"factory.action.reevaluate")}):null,o?e.jsx(U,{ref:G,onClick:()=>X(!0),disabled:W,"aria-expanded":W,"data-testid":"order-file-exception",children:a("factory.action.fileException")}):null,e.jsx(_e,{label:a("factory.action.more"),items:ye,testId:"order-menu"})]}),testId:"order-page",children:e.jsxs("div",{className:"nexus-factory-order",children:[e.jsxs("aside",{className:"nexus-factory-rail","aria-label":a("factory.order.identity"),children:[e.jsx(be,{testId:"order-facts",items:[{label:a("factory.field.product"),value:e.jsxs("span",{children:[e.jsx("span",{className:"nexus-factory-code",children:L.code})," ",L.name]})},{label:a("factory.field.revision"),value:e.jsxs("span",{children:[n.revision,c?e.jsxs(e.Fragment,{children:[" · ",e.jsx(k,{tone:c.status==="approved"?"ok":c.status==="in_change"?"warn":"muted",size:"sm",children:a(`factory.revisionStatus.${c.status}`)})]}):null]})},{label:a("factory.field.qty"),value:`${n.qty} ${n.uom}`},{label:a("factory.field.due"),value:e.jsxs("span",{children:[Te(n.due,V)," · ",je(n.due,a)]})},...n.customer_label?[{label:a("factory.field.customer"),value:n.customer_label}]:[],{label:a("factory.field.site"),value:Y.name},...n.demand_ref?[{label:a("factory.field.demand"),value:e.jsx("span",{className:"nexus-factory-code",children:n.demand_ref.slice(n.demand_ref.lastIndexOf("/")+1)})}]:[]]}),c?.instruction_ref?e.jsxs(J,{title:a("factory.order.instruction"),testId:"order-instruction",children:[e.jsxs("p",{className:"nexus-factory-p",children:[e.jsx("a",{href:E.source(c.instruction_ref.ref),className:"nexus-link",children:a("factory.order.instructionRef",{rev:n.revision})}),c.instruction_ref.hash?e.jsxs("span",{className:"nexus-factory-muted",children:[" · ",c.instruction_ref.hash.slice(0,8)]}):null]}),e.jsx(k,{tone:c.instruction_ref.status==="approved"?"ok":c.instruction_ref.status==="draft"?"warn":"neutral",size:"sm",children:a(`factory.instructionStatus.${c.instruction_ref.status}`)})]}):null]}),e.jsxs("div",{className:"nexus-factory-stream",children:[W?e.jsx(Be,{orderId:n.id,orderNumber:n.number,gates:x?.gates??[],file:te??(async t=>({exception:{id:"exc_new",key:"FAC-?",type:"production_exception",title:`${t.kind} · ${n.number}`,order_id:n.id,severity:t.severity,stage:"open",opened_at:new Date().toISOString(),opened_by:"olena",board:"FAC",task_ref:"",project:n.project},existing:!1})),onFiled:t=>{ne?.(t),z("exceptions")},onClose:ge,initialState:ie}):null,e.jsx(ke,{tabs:ue,current:p,onChange:t=>z(t),label:a("factory.order.views"),id:"order",layout:"page"}),e.jsxs("div",{id:`order-panel-${p}`,role:"tabpanel","aria-labelledby":`order-tab-${p}`,className:"nexus-factory-stream-body",children:[p==="readiness"?e.jsxs(e.Fragment,{children:[e.jsx(De,{evaluation:x,why:S[n.state]==="done"||S[n.state]==="cancelled"?"done":"not_yet",reevaluating:m}),x&&b?e.jsx(J,{title:a("factory.order.explanation"),aside:e.jsx(Q,{tone:"muted",size:"xs",children:a("factory.order.explanationBy",{model:b.model})}),testId:"order-explanation",children:le?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"nexus-factory-explain","data-testid":"order-explanation-text",children:b.text[V==="uk"?"uk":"en"]}),e.jsx("p",{className:"nexus-factory-muted nexus-factory-small",children:a("factory.order.explanationNote",{at:Fe(b.at,V)})})]}):e.jsx(U,{size:"sm",onClick:()=>de(!0),"data-testid":"order-explain",children:a("factory.action.explain")})}):null]}):null,p==="materials"?e.jsx(Re,{rows:K}):null,p==="operations"?e.jsx(Ee,{rows:n.operations,columns:me,rowKey:t=>String(t.seq),caption:a("factory.order.tab.operations"),testId:"order-operations",empty:{title:a("factory.order.operationsEmpty")}}):null,p==="exceptions"?v.length===0?e.jsx(Se,{variant:"inline",title:a("factory.exception.none")}):e.jsx("ol",{className:"nexus-factory-exceptions","aria-label":a("factory.order.tab.exceptions"),children:v.map(t=>e.jsxs("li",{className:"nexus-factory-exception","data-stage":t.stage,"data-testid":`exception-${t.id}`,children:[e.jsxs("span",{className:"nexus-factory-exception-head",children:[e.jsx("span",{className:"nexus-factory-code",children:t.key}),e.jsx(k,{tone:t.stage==="resolved"?"muted":$e[t.severity],size:"sm",children:a(`factory.exceptionStage.${t.stage}`)}),t.gate_id?e.jsx(Q,{size:"xs",children:a(`factory.gate.${t.gate_id}`)}):null,e.jsxs("a",{href:E.task(t.task_ref),className:"nexus-link is-meta nexus-factory-exception-door",children:[a("factory.exception.inTasks")," ↗"]})]}),e.jsx("span",{className:"nexus-factory-exception-title",children:t.title}),e.jsxs("span",{className:"nexus-factory-muted nexus-factory-small",children:[t.owner_id?r(t.owner_id):a("factory.exception.unowned")," · ",a(`factory.exception.openedBy.${t.opened_by==="engine"?"engine":"person"}`)," · ",qe(t.opened_at,a)]})]},t.id))}):null]})]})]})})}ae.__docgenInfo={description:`The **Order page** (00 §H ·  one header line · /): back · the number · the state chip (DS-6703) ·
the verdict · the source chip · *Re-evaluate* (an icon-sized door; the engine runs, nothing else) · \`⋯\`. One rail
(identity · revision · demand · site) and one stream with the views as \`LocalTabs\` (DS-2006): **Readiness** (DS-6701
the gates, then the model's explanation — labelled, revealed on *Explain*, never a decision, ) · **Materials**
(DS-6702) · **Operations** · **Exceptions** (the VibeBan items of this order, each a door to the board). No door of
this epic transitions the order ().

S2 (): *Re-evaluate* asks the engine (\`POST /orders/{id}/readiness\`) and the block follows — *Evaluating…* in
the live region, then the new record (never the old one re-stamped); *File exception* (DS-6706) opens the filing
panel at the top of the stream, as the person, and the Exceptions tab re-reads once the board answered.`,methods:[],displayName:"OrderScreen",props:{view:{required:!0,tsType:{name:"union",raw:'DataState<T> | { state: "notFound" }',elements:[{name:"DataState",elements:[{name:"OrderView"}],raw:"DataState<T>"},{name:"signature",type:"object",raw:'{ state: "notFound" }',signature:{properties:[{key:"state",value:{name:"literal",value:'"notFound"',required:!0}}]}}]},description:""},personName:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => string",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"string"}}},description:""},canAct:{required:!0,tsType:{name:"boolean"},description:""},onReevaluate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => Promise<ReadinessEvaluation | void> | void",signature:{arguments:[],return:{name:"union",raw:"Promise<ReadinessEvaluation | void> | void",elements:[{name:"Promise",elements:[{name:"union",raw:"ReadinessEvaluation | void",elements:[{name:"ReadinessEvaluation"},{name:"void"}]}],raw:"Promise<ReadinessEvaluation | void>"},{name:"void"}]}}},description:"the engine's door — resolves with the new record; a story without it re-reads nothing"},fileException:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: FileExceptionInput) => Promise<FileExceptionOutcome>",signature:{arguments:[{type:{name:"FileExceptionInput"},name:"input"}],return:{name:"Promise",elements:[{name:"FileExceptionOutcome"}],raw:"Promise<FileExceptionOutcome>"}}},description:"the filing door — the BFF in the app, a scripted answer in a story"},onFiled:{required:!1,tsType:{name:"signature",type:"function",raw:"(outcome: FileExceptionOutcome) => void",signature:{arguments:[{type:{name:"FileExceptionOutcome"},name:"outcome"}],return:{name:"void"}}},description:""},initialTab:{required:!1,tsType:{name:"union",raw:'"readiness" | "materials" | "operations" | "exceptions"',elements:[{name:"literal",value:'"readiness"'},{name:"literal",value:'"materials"'},{name:"literal",value:'"operations"'},{name:"literal",value:'"exceptions"'}]},description:"",defaultValue:{value:'"readiness"',computed:!1}},initialExplained:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},initialFiling:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},filingInitialState:{required:!1,tsType:{name:"union",raw:'{ kind: "draft" } | { kind: "saving" } | { kind: "saved"; outcome: FileExceptionOutcome } | { kind: "error"; code: "denied" | "unavailable" | "board" | "validation" }',elements:[{name:"signature",type:"object",raw:'{ kind: "draft" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"draft"',required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "saving" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"saving"',required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "saved"; outcome: FileExceptionOutcome }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"saved"',required:!0}},{key:"outcome",value:{name:"FileExceptionOutcome",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "error"; code: "denied" | "unavailable" | "board" | "validation" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"error"',required:!0}},{key:"code",value:{name:"union",raw:'"denied" | "unavailable" | "board" | "validation"',elements:[{name:"literal",value:'"denied"'},{name:"literal",value:'"unavailable"'},{name:"literal",value:'"board"'},{name:"literal",value:'"validation"'}],required:!0}}]}}]},description:""}}};const Ye={title:"Apps/NexFactory/Order",component:ae,parameters:{ds:"DS-6701",layout:"fullscreen",workbench:{ns:"factory",path:"/factory/orders/wo_1042"},docs:{description:{component:"The Order page ( one header line · DS-7001): the state chip (DS-6703), the verdict, the source chip, then one\nrail and one stream — Readiness (DS-6701 the gates · the model's explanation, labelled, ) · Materials\n(DS-6702) · Operations · Exceptions. The four verdicts of  are four orders of the same plant; `unknown` is\nnever `ready` ()."}}},args:{personName:fe,canAct:!0,onReevaluate:()=>{}}},_={name:"Blocked · a lot in quarantine (WO-1042)",args:{view:l(d(i("olena"),"wo_1042"))},play:async({canvasElement:s})=>{const r=u=>s.querySelector(`[data-testid="${u}"]`);if(!r("order-verdict")?.textContent?.includes("Blocked"))throw new globalThis.Error("the verdict chip does not read Blocked");const o=r("gate-materials_available");if(o?.getAttribute("data-result")!=="failed")throw new globalThis.Error("the materials gate did not fail");if(!o?.textContent?.includes("quarantine"))throw new globalThis.Error("the reason does not name the quarantine");if(r("order-explanation-text"))throw new globalThis.Error("the explanation showed before anyone asked")}},T={name:"Unknown · the instruction's source does not answer (WO-1043)",args:{view:l(d(i("olena"),"wo_1043"))},play:async({canvasElement:s})=>{const r=u=>s.querySelector(`[data-testid="${u}"]`),o=r("order-verdict")?.textContent??"";if(!o.includes("Unknown")||!o.includes("not ready"))throw new globalThis.Error("an unknown verdict must say not ready");if(r("gate-instruction_approved")?.getAttribute("data-result")!=="unknown")throw new globalThis.Error("the instruction gate is not unknown")}},j={name:"Ready · seven of seven (WO-1041)",args:{view:l(d(i("olena"),"wo_1041"))}},F={name:"Ready with risk · the optional gate unknown (WO-1044)",args:{view:l(d(i("olena"),"wo_1044"))},play:async({canvasElement:s})=>{const r=u=>s.querySelector(`[data-testid="${u}"]`);if(!r("order-verdict")?.textContent?.includes("Ready with risk"))throw new globalThis.Error("the verdict does not read Ready with risk");const o=r("gate-equipment_status");if(o?.getAttribute("data-result")!=="unknown"||o?.getAttribute("data-required"))throw new globalThis.Error("the equipment gate is not the optional unknown")}},q={name:"Blocked · the revision is in change (WO-1045)",args:{view:l(d(i("olena"),"wo_1045"))}},g={name:"Explained · the model's reading, labelled",args:{view:l(d(i("olena"),"wo_1042")),initialExplained:!0},play:async({canvasElement:s})=>{const r=o=>s.querySelector(`[data-testid="${o}"]`);if(!r("order-explanation-text")?.textContent?.includes("quarantine"))throw new globalThis.Error("the explanation is not shown");if(!r("order-explanation")?.textContent?.includes("nexi-explain"))throw new globalThis.Error("the explanation is not labelled with its model")}},R={name:"Materials · the availability rows (DS-6702)",args:{view:l(d(i("olena"),"wo_1042")),initialTab:"materials"}},y={name:"Filing an exception · the panel (DS-6706)",args:{view:l(d(i("olena"),"wo_1042")),initialFiling:!0,fileException:async s=>we(i("olena"),s)},play:async({canvasElement:s})=>{const r=o=>s.querySelector(`[data-testid="${o}"]`);if(!r("file-exception"))throw new globalThis.Error("the filing panel did not open");if(!r("file-exception-gate")?.textContent?.includes("Materials available"))throw new globalThis.Error("the failed gate is not offered first")}},f={name:"Re-evaluating · the live region speaks",args:{view:l(d(i("olena"),"wo_1043")),onReevaluate:()=>new Promise(()=>{})},play:async({canvasElement:s})=>{const r=o=>s.querySelector(`[data-testid="${o}"]`);if(r("order-reevaluate")?.click(),await new Promise(o=>setTimeout(o,30)),!r("readiness-status")?.textContent?.includes("Evaluating"))throw new globalThis.Error("the live region does not say Evaluating…");if(!r("gate-instruction_approved"))throw new globalThis.Error("the gates were blanked while the engine runs")}},B={name:"Operations · the routing",args:{view:l(d(i("olena"),"wo_1038")),initialTab:"operations"}},O={name:"Exceptions · the order's VibeBan items",args:{view:l(d(i("olena"),"wo_1042")),initialTab:"exceptions"}},C={name:"Completed · not evaluated",args:{view:l(d(i("olena"),"wo_1035"))}},D={name:"Build mode · native records",args:{view:l(d(i("olena","native"),"wo_1042"))}},N={name:"Without the right to act",args:{canAct:!1,view:l(d(i("kateryna"),"wo_1042"))}},$={args:{view:w("notFound")}},I={args:{view:w("loading")}},M={args:{view:w("error")}},A={args:{view:w("denied")}},P={args:{view:w("offline")}},Ke=["Populated","Unknown","Ready","ReadyWithRisk","BlockedByRevision","Explained","Materials","Filing","Reevaluating","Operations","Exceptions","Done","Build","Viewer","NotFound","Loading","Error","Denied","Offline"];_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Blocked · a lot in quarantine (WO-1042)",
  args: {
    view: ready(store.order(as("olena"), "wo_1042"))
  },
  play: async ({
    canvasElement
  }) => {
    const by = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    if (!by("order-verdict")?.textContent?.includes("Blocked")) throw new globalThis.Error("the verdict chip does not read Blocked");
    const gate = by("gate-materials_available");
    if (gate?.getAttribute("data-result") !== "failed") throw new globalThis.Error("the materials gate did not fail");
    if (!gate?.textContent?.includes("quarantine")) throw new globalThis.Error("the reason does not name the quarantine");
    if (by("order-explanation-text")) throw new globalThis.Error("the explanation showed before anyone asked");
  }
}`,..._.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Unknown · the instruction's source does not answer (WO-1043)",
  args: {
    view: ready(store.order(as("olena"), "wo_1043"))
  },
  play: async ({
    canvasElement
  }) => {
    const by = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    const chip = by("order-verdict")?.textContent ?? "";
    if (!chip.includes("Unknown") || !chip.includes("not ready")) throw new globalThis.Error("an unknown verdict must say not ready");
    if (by("gate-instruction_approved")?.getAttribute("data-result") !== "unknown") throw new globalThis.Error("the instruction gate is not unknown");
  }
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Ready · seven of seven (WO-1041)",
  args: {
    view: ready(store.order(as("olena"), "wo_1041"))
  }
}`,...j.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Ready with risk · the optional gate unknown (WO-1044)",
  args: {
    view: ready(store.order(as("olena"), "wo_1044"))
  },
  play: async ({
    canvasElement
  }) => {
    const by = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    if (!by("order-verdict")?.textContent?.includes("Ready with risk")) throw new globalThis.Error("the verdict does not read Ready with risk");
    const gate = by("gate-equipment_status");
    if (gate?.getAttribute("data-result") !== "unknown" || gate?.getAttribute("data-required")) throw new globalThis.Error("the equipment gate is not the optional unknown");
  }
}`,...F.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Blocked · the revision is in change (WO-1045)",
  args: {
    view: ready(store.order(as("olena"), "wo_1045"))
  }
}`,...q.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Explained · the model's reading, labelled",
  args: {
    view: ready(store.order(as("olena"), "wo_1042")),
    initialExplained: true
  },
  play: async ({
    canvasElement
  }) => {
    const by = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    if (!by("order-explanation-text")?.textContent?.includes("quarantine")) throw new globalThis.Error("the explanation is not shown");
    if (!by("order-explanation")?.textContent?.includes("nexi-explain")) throw new globalThis.Error("the explanation is not labelled with its model");
  }
}`,...g.parameters?.docs?.source},description:{story:": *Explain* reveals the model's reading of the recorded evaluation — labelled with the model and the time; the verdict above does not move.",...g.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Materials · the availability rows (DS-6702)",
  args: {
    view: ready(store.order(as("olena"), "wo_1042")),
    initialTab: "materials"
  }
}`,...R.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Filing an exception · the panel (DS-6706)",
  args: {
    view: ready(store.order(as("olena"), "wo_1042")),
    initialFiling: true,
    fileException: async input => store.fileException(as("olena"), input)
  },
  play: async ({
    canvasElement
  }) => {
    const by = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    if (!by("file-exception")) throw new globalThis.Error("the filing panel did not open");
    if (!by("file-exception-gate")?.textContent?.includes("Materials available")) throw new globalThis.Error("the failed gate is not offered first");
  }
}`,...y.parameters?.docs?.source},description:{story:"S2 (DS-6706): *File exception* opens the filing panel at the top of the stream — the failed gate is offered first.",...y.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Re-evaluating · the live region speaks",
  args: {
    view: ready(store.order(as("olena"), "wo_1043")),
    onReevaluate: () => new Promise(() => {})
  },
  play: async ({
    canvasElement
  }) => {
    const by = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    by("order-reevaluate")?.click();
    await new Promise(r => setTimeout(r, 30));
    if (!by("readiness-status")?.textContent?.includes("Evaluating")) throw new globalThis.Error("the live region does not say Evaluating…");
    if (!by("gate-instruction_approved")) throw new globalThis.Error("the gates were blanked while the engine runs");
  }
}`,...f.parameters?.docs?.source},description:{story:"S2: *Re-evaluating* — the gates stay, dimmed; the live region says *Evaluating…* until the engine answers ().",...f.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Operations · the routing",
  args: {
    view: ready(store.order(as("olena"), "wo_1038")),
    initialTab: "operations"
  }
}`,...B.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Exceptions · the order's VibeBan items",
  args: {
    view: ready(store.order(as("olena"), "wo_1042")),
    initialTab: "exceptions"
  }
}`,...O.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Completed · not evaluated",
  args: {
    view: ready(store.order(as("olena"), "wo_1035"))
  }
}`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Build mode · native records",
  args: {
    view: ready(store.order(as("olena", "native"), "wo_1042"))
  }
}`,...D.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Without the right to act",
  args: {
    canAct: false,
    view: ready(store.order(as("kateryna"), "wo_1042"))
  }
}`,...N.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("notFound")
  }
}`,...$.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("loading")
  }
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("error")
  }
}`,...M.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("denied")
  }
}`,...A.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("offline")
  }
}`,...P.parameters?.docs?.source}}};export{q as BlockedByRevision,D as Build,A as Denied,C as Done,M as Error,O as Exceptions,g as Explained,y as Filing,I as Loading,R as Materials,$ as NotFound,P as Offline,B as Operations,_ as Populated,j as Ready,F as ReadyWithRisk,f as Reevaluating,T as Unknown,N as Viewer,Ke as __namedExportsOrder,Ye as default};
