import{j as o}from"./iframe-C_4ax-Jm.js";import{C as k}from"./errors-pXhwd8l7.js";import"./format-C2oZUADA.js";import{T as C,a as T}from"./TuningProposalLive-B7RVMzfl.js";import"./preload-helper-PPVm8Dsz.js";const r=(e,n,a,i)=>({section:e,baseline:n,candidate:a,delta:Number((a-n).toFixed(3)),state:i}),d={decision_ref:"nexus://graph/decision/dec_tuning_01",change:[{profile:"retrieval",dial:"rerank_confident",from:.62,to:.55}],goal:{floor:.6,ceiling:.05,tolerance:.02,met:11,total:14,negatives:26},baseline:{bench_run_ref:"nexus://graph/dataset_version/dsv_bench_baseline_01",retrieval_profile_version:"rtp_default@1",processing_profile_version:"prf_default@1"},candidate:{bench_run_ref:"nexus://graph/dataset_version/dsv_bench_cand_06",retrieval_profile_version:"rtp_default@2",processing_profile_version:"prf_default@1"},overall:[{metric:"fact_coverage",baseline:.61,candidate:.68,delta:.07},{metric:"citation_hit_at_k",baseline:.74,candidate:.79,delta:.05},{metric:"false_evidence",baseline:.082,candidate:.077,delta:-.005},{metric:"latency_p50_ms",baseline:412,candidate:438,delta:26}],sections:[r("guide/forge",.64,.63,"regression"),r("guide/chat",.58,.71,"met"),r("guide/core",.62,.69,"met"),r("guide/graph",.66,.72,"met"),r("guide/tasks",.61,.66,"met"),r("guide/bi",.67,.7,"met"),r("guide/map",.6,.65,"met"),r("guide/care",.63,.68,"met"),r("guide/sales",.59,.64,"met"),r("guide/factory",.62,.67,"met"),r("guide/spin",.65,.73,"met"),r("guide/home",.6,.62,"met"),r("guide/studio",.52,.57,"unmet"),r("guide/synapse",.49,.56,"unmet")],tried:6,approvable:!0},P={...d,sections:[r("guide/forge",.64,.61,"regression"),...d.sections.slice(1)],goal:{...d.goal,met:10},approvable:!1,not_approvable_reason:"regression_over_tolerance"},I={...d,change:[{profile:"retrieval",dial:"rerank_confident",from:.62,to:.55},{profile:"processing",dial:"chunk_chars",from:1200,to:900}],candidate:{...d.candidate,processing_profile_version:"prf_default@2",shadow_version_ref:"nexus://graph/source_version/sv_docs_shadow_02"}},p={approvalId:"apr_tp_01",proposal:d,classification:"confidential",requester:"Oleksandr Dovhal",at:{iso:"2026-11-03T09:10:00Z",label:"11:10"},expiresAt:{iso:"2026-11-10T09:10:00Z",label:"Nov 10, 11:10"},status:"pending",hrefs:{decision:null,baselineRun:"/graph/runs/bench/dsv_bench_baseline_01",candidateRun:"/graph/runs/bench/dsv_bench_cand_06"}},D={...p,approvalId:"apr_tp_02",proposal:P},R={...p,approvalId:"apr_tp_03",proposal:I},N={...p,approvalId:"apr_tp_04",refusal:"not_decider"},j={...p,approvalId:"apr_tp_05",status:"expired",refusal:"expired"},q={...p,approvalId:"apr_tp_06",status:"approved",decision:{decision:"approve",byYou:!0,by:"you",at:"11:42"}},L={...p,approvalId:"apr_tp_07",status:"rejected",decision:{decision:"reject",byYou:!1,by:"Olena Marchenko",at:"11:50"}},O={approval_id:"apr_tp_01",uri:"nexus://tasks/approval/apr_tp_01",project_id:"prj_docs",classification:"confidential",subject:{kind:"tuning_proposal",title_key:"approval.tuning_proposal",node_id:"review",proposal:d},requested_by:{run_ref:"nexus://chat/flow_run/run_tuner_01",step_id:"review",on_behalf_of:"nexus://core/user/usr_oleksandr"},deciders:{relation:"owner",allow_self_approval:!0,user_ids:["usr_oleksandr"]},status:"pending",correlation_id:"22222222-2222-4222-8222-222222222222",created_at:"2026-11-03T09:10:00Z",expires_at:"2026-11-10T09:10:00Z"},Q={title:"Apps/NexTasks/Tuning proposal card",component:C,parameters:{ds:"DS-6924",layout:"padded",a11y:{config:{rules:[{id:"heading-order",enabled:!1}]}},docs:{description:{component:"DS-6924 Tuning proposal card ( S6, proposed —  · , ): the owner's one screen for a\n`tuning_proposal` approval — the change, the goal, two runs side by side, sections regressions first, Approve and\nDecline. Synthetic numbers, synthetic people ()."}}},args:{model:p,onApprove:()=>{},onReject:()=>{}},decorators:[e=>o.jsx("div",{style:{maxWidth:960},children:o.jsx(e,{})})]};function t(e,n,a){const i=e.querySelector(n);if(!i)throw new globalThis.Error(`${a} is missing (${n})`);return i}function S(e,n,a={}){e.dispatchEvent(new KeyboardEvent("keydown",{key:n,bubbles:!0,cancelable:!0,...a}))}const s=()=>new Promise(e=>setTimeout(e,0)),c={name:"populated",play:async({canvasElement:e})=>{const n=t(e,'[data-testid="tuning-change-rerank_confident"]',"the dial change");if(!/0\.62 → 0\.55/.test(n.textContent??""))throw new globalThis.Error("the change must read old → new");if(!/11 \/ 14/.test(t(e,'[data-testid="tuning-met"]',"the goal line").textContent??""))throw new globalThis.Error("met 11 / 14");if(!/26/.test(t(e,'[data-testid="tuning-ceiling"]',"the ceiling line").textContent??""))throw new globalThis.Error("ceiling · 26 negatives");if(e.querySelectorAll('[data-testid="tuning-overall"] tbody tr').length!==4)throw new globalThis.Error("four overall rows");const a=Array.from(e.querySelectorAll('[data-testid="tuning-sections"] tbody tr'));if(a.length!==14)throw new globalThis.Error("fourteen sections");const i=t(a[0],'[data-testid="tuning-section-guide/forge"]',"the first section's state");if(i.getAttribute("data-state")!=="regression"||!/regression/i.test(i.textContent??""))throw new globalThis.Error("the regression comes first and is named in text");if(t(e,'button[data-testid="tuning-approve"]',"Approve").getAttribute("aria-disabled"))throw new globalThis.Error("Approve must be enabled on an approvable proposal");if(t(e,'a[data-testid="tuning-run-baseline"]',"the baseline run door"),t(e,'a[data-testid="tuning-run-candidate"]',"the candidate run door"),!/6/.test(t(e,'[data-testid="tuning-tried"]',"the tried line").textContent??""))throw new globalThis.Error("tried 6")}},l={name:"keyboard-approve",render:e=>o.jsxs("div",{children:[o.jsx(C,{...e,onApprove:()=>{document.getElementById("tp-out").textContent="approved"}}),o.jsx("output",{id:"tp-out","data-testid":"tp-out",hidden:!0})]}),play:async({canvasElement:e})=>{const n=t(e,'[data-testid="tuning-proposal-apr_tp_01"]',"the card");if(S(n,"Enter",{metaKey:!0}),await s(),(e.querySelector('[data-testid="tp-out"]')?.textContent??"")!=="approved")throw new globalThis.Error("⌘⏎ must approve")}},u={name:"not-approvable",args:{model:D},render:e=>o.jsxs("div",{children:[o.jsx(C,{...e,onApprove:()=>{document.getElementById("tp-out2").textContent="approved"}}),o.jsx("output",{id:"tp-out2","data-testid":"tp-out2",hidden:!0})]}),play:async({canvasElement:e})=>{const n=t(e,'[data-testid="tuning-approve-why"]',"the reason beside Approve");if(!/guide\/forge/.test(n.textContent??"")||!/0\.02/.test(n.textContent??""))throw new globalThis.Error("the reason names the section and the tolerance");if(t(e,'button[data-testid="tuning-approve"][aria-disabled="true"]',"Approve, waiting"),t(e,'button[data-testid="tuning-decline"]:not([disabled])',"Decline"),S(t(e,'[data-testid="tuning-proposal-apr_tp_02"]',"the card"),"Enter",{metaKey:!0}),await s(),(e.querySelector('[data-testid="tp-out2"]')?.textContent??"")!=="")throw new globalThis.Error("⌘⏎ must not approve a proposal that cannot be approved")}},h={name:"processing-candidate",args:{model:R},play:async({canvasElement:e})=>{if(t(e,'[data-testid="tuning-change-chunk_chars"]',"the processing dial"),!/prf_default@2/.test(t(e,"h2","the title").textContent??""))throw new globalThis.Error("the title names the processing version")}},g={name:"page-chrome",args:{chrome:"page"},play:async({canvasElement:e})=>{if(e.querySelector("h2"))throw new globalThis.Error("no h2 in page chrome — the page line is the title");t(e,'[data-chrome="page"] .nexus-tasks-question-meta',"the meta line")}},m={name:"permission-denied",args:{model:N},play:async({canvasElement:e})=>{if(t(e,'[data-testid="restriction"]',"the restriction sentence"),e.querySelector('button[data-testid="tuning-approve"]'))throw new globalThis.Error("no Approve for a non-decider")}},v={name:"expired",args:{model:j},play:async({canvasElement:e})=>{if(t(e,'[data-testid="tuning-expired"][role="status"]',"the expired line"),e.querySelector('button[data-testid="tuning-approve"]'))throw new globalThis.Error("no Approve on an expired proposal")}},f={name:"decided-approved",args:{model:q},play:async({canvasElement:e})=>{const n=t(e,'[data-testid="tuning-decided"][role="status"]',"the decided line");if(!/rtp_default@2/.test(n.textContent??""))throw new globalThis.Error("the activated version")}},y={name:"decided-declined",args:{model:L},play:async({canvasElement:e})=>{const n=t(e,'[data-testid="tuning-decided"][role="status"]',"the declined line");if(!/Olena/.test(n.textContent??""))throw new globalThis.Error("the decider's name")}},_={name:"decision-refused",args:{error:"This proposal cannot be approved — a section regressed beyond the tolerance."},play:async({canvasElement:e})=>{t(e,'[data-testid="tuning-error"][role="alert"]',"the refusal")}},B=()=>new Promise(()=>{}),A=e=>({get:e,decide:async(n,a)=>({...O,status:a.decision==="approve"?"approved":"rejected",decision:{decision:a.decision,decided_by:"usr_oleksandr",decided_at:"2026-11-03T09:42:00Z"}})}),w={name:"loading",render:()=>o.jsx(T,{approvalId:"apr_tp_01",principal:"usr_oleksandr",doors:A(B)}),play:async({canvasElement:e})=>{t(e,'[data-testid="loading-state"]',"the loading state")}},b={name:"live-approve",render:()=>o.jsx(T,{approvalId:"apr_tp_01",principal:"usr_oleksandr",doors:A(async()=>O),graphWeb:""}),play:async({canvasElement:e})=>{await s(),await s();const n=t(e,'button[data-testid="tuning-approve"]',"Approve");if(n.getAttribute("aria-disabled"))throw new globalThis.Error("the requesting owner may approve");if(n.click(),await s(),await s(),!/you/i.test(t(e,'[data-testid="tuning-decided"]',"the decided line").textContent??""))throw new globalThis.Error("approved by you")}},E={name:"error",render:()=>o.jsx(T,{approvalId:"apr_tp_01",principal:"usr_oleksandr",doors:A(async()=>{throw k.fromResponse(500,{error_code:"INTERNAL",correlation_id:"c"},"c")})}),play:async({canvasElement:e})=>{await s(),await s(),t(e,'[data-testid="error-state"]',"the error state")}},x={name:"offline",render:()=>o.jsx(T,{approvalId:"apr_tp_01",principal:"usr_oleksandr",doors:A(async()=>{throw k.offline("c",new Error("offline"))})}),play:async({canvasElement:e})=>{await s(),await s(),t(e,'[data-testid="offline-state"]',"the offline state")}},V=["Populated","KeyboardApprove","NotApprovable","ProcessingCandidate","PageChrome","PermissionDenied","Expired","Approved","Declined","DecisionRefused","Loading","LiveApprove","ErrorFace","Offline"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "populated",
  play: async ({
    canvasElement
  }) => {
    const change = expectOne(canvasElement, '[data-testid="tuning-change-rerank_confident"]', "the dial change");
    if (!/0\\.62 → 0\\.55/.test(change.textContent ?? "")) throw new globalThis.Error("the change must read old → new");
    if (!/11 \\/ 14/.test(expectOne(canvasElement, '[data-testid="tuning-met"]', "the goal line").textContent ?? "")) throw new globalThis.Error("met 11 / 14");
    //  ( a): the ceiling line names the loop's evaluator and the negatives it stands on
    if (!/26/.test(expectOne(canvasElement, '[data-testid="tuning-ceiling"]', "the ceiling line").textContent ?? "")) throw new globalThis.Error("ceiling · 26 negatives");
    if (canvasElement.querySelectorAll('[data-testid="tuning-overall"] tbody tr').length !== 4) throw new globalThis.Error("four overall rows");
    const rows = Array.from(canvasElement.querySelectorAll('[data-testid="tuning-sections"] tbody tr'));
    if (rows.length !== 14) throw new globalThis.Error("fourteen sections");
    const first = expectOne(rows[0] as HTMLElement, '[data-testid="tuning-section-guide/forge"]', "the first section's state");
    if (first.getAttribute("data-state") !== "regression" || !/regression/i.test(first.textContent ?? "")) throw new globalThis.Error("the regression comes first and is named in text");
    const approve = expectOne(canvasElement, 'button[data-testid="tuning-approve"]', "Approve");
    if (approve.getAttribute("aria-disabled")) throw new globalThis.Error("Approve must be enabled on an approvable proposal");
    expectOne(canvasElement, 'a[data-testid="tuning-run-baseline"]', "the baseline run door");
    expectOne(canvasElement, 'a[data-testid="tuning-run-candidate"]', "the candidate run door");
    if (!/6/.test(expectOne(canvasElement, '[data-testid="tuning-tried"]', "the tried line").textContent ?? "")) throw new globalThis.Error("tried 6");
  }
}`,...c.parameters?.docs?.source},description:{story:"The change as `dial old → new`, the goal met 11 / 14, four overall rows, fourteen sections with the regression first and marked in text, Approve enabled.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "keyboard-approve",
  render: args => <div>
      <TuningProposalCard {...args} onApprove={() => {
      (document.getElementById("tp-out") as HTMLElement).textContent = "approved";
    }} />
      <output id="tp-out" data-testid="tp-out" hidden />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const root = expectOne(canvasElement, '[data-testid="tuning-proposal-apr_tp_01"]', "the card");
    key(root, "Enter", {
      metaKey: true
    });
    await tick();
    if ((canvasElement.querySelector('[data-testid="tp-out"]')?.textContent ?? "") !== "approved") throw new globalThis.Error("⌘⏎ must approve");
  }
}`,...l.parameters?.docs?.source},description:{story:"`⌘⏎` approves an approvable proposal ().",...l.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "not-approvable",
  args: {
    model: NOT_APPROVABLE
  },
  render: args => <div>
      <TuningProposalCard {...args} onApprove={() => {
      (document.getElementById("tp-out2") as HTMLElement).textContent = "approved";
    }} />
      <output id="tp-out2" data-testid="tp-out2" hidden />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const why = expectOne(canvasElement, '[data-testid="tuning-approve-why"]', "the reason beside Approve");
    if (!/guide\\/forge/.test(why.textContent ?? "") || !/0\\.02/.test(why.textContent ?? "")) throw new globalThis.Error("the reason names the section and the tolerance");
    expectOne(canvasElement, 'button[data-testid="tuning-approve"][aria-disabled="true"]', "Approve, waiting");
    expectOne(canvasElement, 'button[data-testid="tuning-decline"]:not([disabled])', "Decline");
    key(expectOne(canvasElement, '[data-testid="tuning-proposal-apr_tp_02"]', "the card"), "Enter", {
      metaKey: true
    });
    await tick();
    if ((canvasElement.querySelector('[data-testid="tp-out2"]')?.textContent ?? "") !== "") throw new globalThis.Error("⌘⏎ must not approve a proposal that cannot be approved");
  }
}`,...u.parameters?.docs?.source},description:{story:": a section regressed beyond the tolerance — Approve waits `aria-disabled` with the reason beside it; `⌘⏎` does nothing; Decline stands.",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "processing-candidate",
  args: {
    model: PROCESSING
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="tuning-change-chunk_chars"]', "the processing dial");
    if (!/prf_default@2/.test(expectOne(canvasElement, "h2", "the title").textContent ?? "")) throw new globalThis.Error("the title names the processing version");
  }
}`,...h.parameters?.docs?.source},description:{story:"A processing candidate (): two dials in the change, the title names both versions.",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "page-chrome",
  args: {
    chrome: "page"
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector("h2")) throw new globalThis.Error("no h2 in page chrome — the page line is the title");
    expectOne(canvasElement, '[data-chrome="page"] .nexus-tasks-question-meta', "the meta line");
  }
}`,...g.parameters?.docs?.source},description:{story:'`chrome="page"` (): the Inbox opens a proposal as a resource page whose one header line names it — the card keeps the meta line only.',...g.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "permission-denied",
  args: {
    model: NOT_DECIDER
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="restriction"]', "the restriction sentence");
    if (canvasElement.querySelector('button[data-testid="tuning-approve"]')) throw new globalThis.Error("no Approve for a non-decider");
  }
}`,...m.parameters?.docs?.source},description:{story:"Not a decider (another owner's project): read-only, the standard restriction sentence.",...m.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "expired",
  args: {
    model: EXPIRED
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="tuning-expired"][role="status"]', "the expired line");
    if (canvasElement.querySelector('button[data-testid="tuning-approve"]')) throw new globalThis.Error("no Approve on an expired proposal");
  }
}`,...v.parameters?.docs?.source},description:{story:": an expired proposal — the standard expired line, nothing to press.",...v.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "decided-approved",
  args: {
    model: APPROVED
  },
  play: async ({
    canvasElement
  }) => {
    const line = expectOne(canvasElement, '[data-testid="tuning-decided"][role="status"]', "the decided line");
    if (!/rtp_default@2/.test(line.textContent ?? "")) throw new globalThis.Error("the activated version");
  }
}`,...f.parameters?.docs?.source},description:{story:"Approved by you ( a — the owner approved their own tuner's proposal): the line names the version now live.",...f.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "decided-declined",
  args: {
    model: DECLINED
  },
  play: async ({
    canvasElement
  }) => {
    const line = expectOne(canvasElement, '[data-testid="tuning-decided"][role="status"]', "the declined line");
    if (!/Olena/.test(line.textContent ?? "")) throw new globalThis.Error("the decider's name");
  }
}`,...y.parameters?.docs?.source},description:{story:"Declined by another owner: nothing changed, the draft stays a draft.",...y.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "decision-refused",
  args: {
    error: "This proposal cannot be approved — a section regressed beyond the tolerance."
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="tuning-error"][role="alert"]', "the refusal");
  }
}`,..._.parameters?.docs?.source},description:{story:"tasks-api refused the decision — its words as `role=alert`.",..._.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "loading",
  render: () => <TuningProposalLive approvalId="apr_tp_01" principal="usr_oleksandr" doors={doors(never)} />,
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="loading-state"]', "the loading state");
  }
}`,...w.parameters?.docs?.source},description:{story:"The live face while `GET /tasks/approvals/{id}` is on its way.",...w.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "live-approve",
  render: () => <TuningProposalLive approvalId="apr_tp_01" principal="usr_oleksandr" doors={doors(async () => WIRE_PENDING)} graphWeb="" />,
  play: async ({
    canvasElement
  }) => {
    await tick();
    await tick();
    const approve = expectOne(canvasElement, 'button[data-testid="tuning-approve"]', "Approve");
    if (approve.getAttribute("aria-disabled")) throw new globalThis.Error("the requesting owner may approve");
    approve.click();
    await tick();
    await tick();
    if (!/you/i.test(expectOne(canvasElement, '[data-testid="tuning-decided"]', "the decided line").textContent ?? "")) throw new globalThis.Error("approved by you");
  }
}`,...b.parameters?.docs?.source},description:{story:"The live face on the record: the owner is the requester and may approve ( a); Approve → the decided line.",...b.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "error",
  render: () => <TuningProposalLive approvalId="apr_tp_01" principal="usr_oleksandr" doors={doors(async () => {
    throw ChatApiError.fromResponse(500, {
      error_code: "INTERNAL",
      correlation_id: "c"
    }, "c");
  })} />,
  play: async ({
    canvasElement
  }) => {
    await tick();
    await tick();
    expectOne(canvasElement, '[data-testid="error-state"]', "the error state");
  }
}`,...E.parameters?.docs?.source},description:{story:"The read failed — the standard error state with *Retry*.",...E.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "offline",
  render: () => <TuningProposalLive approvalId="apr_tp_01" principal="usr_oleksandr" doors={doors(async () => {
    throw ChatApiError.offline("c", new Error("offline"));
  })} />,
  play: async ({
    canvasElement
  }) => {
    await tick();
    await tick();
    expectOne(canvasElement, '[data-testid="offline-state"]', "the offline state");
  }
}`,...x.parameters?.docs?.source},description:{story:"No network — the standard offline state.",...x.parameters?.docs?.description}}};export{f as Approved,_ as DecisionRefused,y as Declined,E as ErrorFace,v as Expired,l as KeyboardApprove,b as LiveApprove,w as Loading,u as NotApprovable,x as Offline,g as PageChrome,m as PermissionDenied,c as Populated,h as ProcessingCandidate,V as __namedExportsOrder,Q as default};
