import{j as n}from"./iframe-C_4ax-Jm.js";import{C as j}from"./errors-pXhwd8l7.js";import"./format-C2oZUADA.js";import{Q as N,a as A}from"./QuestionReviewLive-DKnka2wz.js";import"./preload-helper-PPVm8Dsz.js";import"./api-B-OyiypP.js";function c(e,r,a,s,p,O,l=!0){const i=`gc-${String(e).padStart(3,"0")}`;return[{row_id:`${i}-en`,lang:"en",category:r,question:a,gold_facts:p,gold_page:O,answerable:!0,twin_id:`${i}-uk`,confirmed:l},{row_id:`${i}-uk`,lang:"uk",category:r,question:s,gold_facts:p,gold_page:O,answerable:!0,twin_id:`${i}-en`,confirmed:l}]}const L=[...c(1,"navigation","Where does a new thread start in NexChat?","Де в NexChat починається новий тред?",["New thread","the composer"],"guide/chat/threads"),...c(2,"composer","What does the Ask bar send a question to?","Куди Ask-рядок надсилає запитання?",["chat-api"],"guide/chat/ask"),...c(3,"approvals","Which app shows a Flow's approval request?","Який застосунок показує запит на погодження від Flow?",["NexTasks","the Inbox"],"guide/chat/approvals"),...c(4,"voice","Which key stops a voice answer?","Яка клавіша зупиняє голосову відповідь?",["Escape"],"guide/chat/voice",!1),...c(5,"canvas","Where does a generated chart open?","Де відкривається згенерована діаграма?",["the Canvas"],"guide/chat/canvas"),...c(6,"history","How long does a thread stay in Recent?","Скільки тред лишається в Нещодавніх?",["30 days"],"guide/chat/history"),{row_id:"gc-007-en",lang:"en",category:"negative",question:"What is the price of the Enterprise plan?",gold_facts:[],gold_page:"",answerable:!1,twin_id:"gc-007-uk",confirmed:!0},{row_id:"gc-007-uk",lang:"uk",category:"negative",question:"Яка ціна плану Enterprise?",gold_facts:[],gold_page:"",answerable:!1,twin_id:"gc-007-en",confirmed:!0}],P={batch_ref:"nexus://graph/question_batch/qb_guidechat_01",section:"guide/chat",source_version_ref:"nexus://graph/source_version/sv_docs_2026_11_01",validator:{problems:0,twin_consistent:!0,negatives:2},rows:L},S={approvalId:"apr_qb_01",batch:P,classification:"confidential",requester:"Oleksandr Dovhal",at:{iso:"2026-11-01T14:10:00Z",label:"16:10"},expiresAt:{iso:"2026-11-04T14:10:00Z",label:"Nov 4, 16:10"},status:"pending"},W={...S,approvalId:"apr_qb_02",refusal:"self_approval"},F={...S,approvalId:"apr_qb_03",status:"expired",refusal:"expired"},Q={...S,approvalId:"apr_qb_04",status:"approved",decision:{decision:"approve",byYou:!1,by:"Olena Marchenko",at:"17:02",rows:L.map(e=>e.row_id.startsWith("gc-004")?{row_id:e.row_id,decision:"drop",reason:"bad_gold"}:{row_id:e.row_id,decision:"keep"})}},B={...S,approvalId:"apr_qb_05",status:"rejected",decision:{decision:"reject",byYou:!0,by:"you",at:"17:05"}},D={approval_id:"apr_qb_01",uri:"nexus://tasks/approval/apr_qb_01",project_id:"prj_docs",classification:"confidential",subject:{kind:"question_batch",title_key:"approval.question_batch",node_id:"review",batch:P},requested_by:{run_ref:"nexus://chat/flow-run/run_qa_01",step_id:"review",on_behalf_of:"nexus://core/user/usr_oleksandr"},deciders:{relation:"editor",allow_self_approval:!1,user_ids:["usr_olena"]},status:"pending",correlation_id:"11111111-1111-4111-8111-111111111111",created_at:"2026-11-01T14:10:00Z",expires_at:"2026-11-04T14:10:00Z"},Y={title:"Apps/NexTasks/Question review card",component:N,parameters:{ds:"DS-6918",layout:"padded",a11y:{config:{rules:[{id:"heading-order",enabled:!1}]}},docs:{description:{component:"DS-6918 Question review card ( S5, proposed —  ·  · , ): the reviewer's one\nscreen for a `question_batch` approval — the row table, `keep | drop` with a reason, the validator's line, Approve\nand Reject. Synthetic rows, synthetic people ()."}}},args:{model:S,onApprove:()=>{},onReject:()=>{}},decorators:[e=>n.jsx("div",{style:{maxWidth:1040},children:n.jsx(e,{})})]};function t(e,r,a){const s=e.querySelector(r);if(!s)throw new globalThis.Error(`${a} is missing (${r})`);return s}function u(e,r,a={}){e.dispatchEvent(new KeyboardEvent("keydown",{key:r,bubbles:!0,cancelable:!0,...a}))}const o=()=>new Promise(e=>setTimeout(e,0)),h={name:"populated",play:async({canvasElement:e})=>{if(t(e,'table[data-testid="question-rows"]',"the row table"),e.querySelectorAll("tbody tr").length!==14)throw new globalThis.Error("14 rows expected");if(t(e,'button[data-testid="question-approve"]',"Approve").getAttribute("aria-disabled"))throw new globalThis.Error("Approve must be enabled when every row is keep");t(e,'[data-testid="row-gc-007-en"] [data-testid*="question-decision"]',"the negative row's decision"),t(e,'[data-testid="question-validator"]',"the validator's line")}},w={name:"keyboard-path",render:e=>n.jsxs("div",{children:[n.jsx(N,{...e,onApprove:r=>{document.getElementById("qr-out").textContent=JSON.stringify(r)}}),n.jsx("output",{id:"qr-out","data-testid":"qr-out",hidden:!0})]}),play:async({canvasElement:e})=>{const r=t(e,'[data-testid="question-review-apr_qb_01"]',"the card"),a=t(e,'tr[data-testid="row-gc-001-en"]',"the first row");a.focus(),u(a,"ArrowDown"),await o();const s=t(e,'tr[data-testid="row-gc-001-uk"]',"the second row");if(document.activeElement!==s)throw new globalThis.Error("↓ did not move the focus to the second row");u(s,"d"),await o();const p=t(e,'[data-testid="question-reason-gc-001-uk"] [role="combobox"]',"the reason combobox after d"),O=t(e,'[data-testid="question-approve-why"]',"the *needs a reason* line");if(!/1/.test(O.textContent??""))throw new globalThis.Error("the line must count the one drop");const l=t(e,'button[data-testid="question-approve"]',"Approve");if(l.getAttribute("aria-disabled")!=="true")throw new globalThis.Error("Approve must wait on a drop without a reason");if(u(r,"Enter",{metaKey:!0}),await o(),(e.querySelector('[data-testid="qr-out"]')?.textContent??"")!=="")throw new globalThis.Error("⌘⏎ must not approve with a reason missing");if(s.focus(),u(s,"r"),document.activeElement!==p)throw new globalThis.Error("r did not focus the reason");p.click(),await o();const i=Array.from(document.querySelectorAll('[role="option"]')).find(d=>/bad gold/i.test(d.textContent??""));if(!i)throw new globalThis.Error("the reason list did not open");if(i.click(),await o(),l.getAttribute("aria-disabled"))throw new globalThis.Error("Approve must be enabled once the drop has its reason");u(r,"Enter",{metaKey:!0}),await o();const C=JSON.parse(e.querySelector('[data-testid="qr-out"]')?.textContent||"null");if(!C||C.length!==14)throw new globalThis.Error("⌘⏎ must hand every row's pick to Approve");const I=C.find(d=>d.row_id==="gc-001-uk");if(!I||I.decision!=="drop"||I.reason!=="bad_gold")throw new globalThis.Error("the dropped twin must carry its reason");if(C.find(d=>d.row_id==="gc-001-en")?.decision!=="keep")throw new globalThis.Error("a decision on one twin must not move the other");await new Promise(d=>setTimeout(d,250))}},m={name:"drop-needs-reason",play:async({canvasElement:e})=>{t(e,'[data-testid="question-drop-gc-002-en"] input',"the drop radio").click(),await o(),t(e,'[data-testid="question-approve-why"]',"the reason line"),t(e,'button[data-testid="question-approve"][aria-disabled="true"]',"Approve, waiting")}},v={name:"page-chrome",args:{chrome:"page"},play:async({canvasElement:e})=>{if(e.querySelector("h2"))throw new globalThis.Error("no h2 in page chrome — the page line is the title");t(e,'[data-chrome="page"] .nexus-tasks-question-meta',"the meta line"),t(e,'table[data-testid="question-rows"]',"the row table")}},g={name:"permission-denied-self-review",args:{model:W},play:async({canvasElement:e})=>{if(t(e,'[data-testid="restriction"]',"the restriction sentence"),e.querySelector('button[data-testid="question-approve"]'))throw new globalThis.Error("no Approve for the requester");t(e,'[data-testid="question-pick-gc-001-en"]',"the read-only pick")}},y={name:"expired",args:{model:F},play:async({canvasElement:e})=>{if(t(e,'[data-testid="question-expired"][role="status"]',"the expired line"),e.querySelector('button[data-testid="question-approve"]'))throw new globalThis.Error("no Approve on an expired batch")}},b={name:"decided",args:{model:Q},play:async({canvasElement:e})=>{const r=t(e,'[data-testid="question-decided"][role="status"]',"the decided line");if(!/Olena/.test(r.textContent??""))throw new globalThis.Error("the decider's name");const a=t(e,'[data-testid="question-pick-gc-004-en"]',"the dropped twin");if(!/Bad gold/.test(a.textContent??""))throw new globalThis.Error("the drop reason must show")}},f={name:"rejected",args:{model:B},play:async({canvasElement:e})=>{t(e,'[data-testid="question-decided"][role="status"]',"the rejected line")}},_={name:"decision-refused",args:{error:"Already decided — refresh to see who and when."},play:async({canvasElement:e})=>{t(e,'[data-testid="question-error"][role="alert"]',"the refusal")}},K=()=>new Promise(()=>{}),R=e=>({get:e,decide:async(r,a)=>({...D,status:"approved",decision:{decision:"approve",decided_by:"usr_olena",decided_at:"2026-11-01T15:02:00Z",rows:a.rows}})}),E={name:"loading",render:()=>n.jsx(A,{approvalId:"apr_qb_01",principal:"usr_olena",doors:R(K)}),play:async({canvasElement:e})=>{t(e,'[data-testid="loading-state"]',"the loading state")}},q={name:"error",render:()=>n.jsx(A,{approvalId:"apr_qb_01",principal:"usr_olena",doors:R(async()=>{throw j.fromResponse(500,{error_code:"INTERNAL",correlation_id:"c"},"c")})}),play:async({canvasElement:e})=>{await o(),await o(),t(e,'[data-testid="error-state"]',"the error state")}},x={name:"offline",render:()=>n.jsx(A,{approvalId:"apr_qb_01",principal:"usr_olena",doors:R(async()=>{throw j.offline("c",new Error("offline"))})}),play:async({canvasElement:e})=>{await o(),await o(),t(e,'[data-testid="offline-state"]',"the offline state")}},k={name:"live-from-record",render:()=>n.jsx(A,{approvalId:"apr_qb_01",principal:"usr_olena",doors:R(async()=>D),nameOf:e=>e?.endsWith("usr_oleksandr")?"Oleksandr Dovhal":e??""}),play:async({canvasElement:e})=>{await o(),await o(),t(e,'button[data-testid="question-approve"]',"Approve for the decider")}},T={name:"live-self-review",render:()=>n.jsx(A,{approvalId:"apr_qb_01",principal:"usr_oleksandr",doors:R(async()=>D)}),play:async({canvasElement:e})=>{await o(),await o(),t(e,'[data-testid="restriction"]',"the self-review restriction")}},V=["Populated","KeyboardPath","DropNeedsReason","PageChrome","PermissionDeniedSelfReview","Expired","Decided","Rejected","DecisionRefused","Loading","ErrorFace","Offline","LiveFromRecord","LiveSelfReview"];h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "populated",
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, 'table[data-testid="question-rows"]', "the row table");
    if (canvasElement.querySelectorAll('tbody tr').length !== 14) throw new globalThis.Error("14 rows expected");
    const approve = expectOne(canvasElement, 'button[data-testid="question-approve"]', "Approve");
    if (approve.getAttribute("aria-disabled")) throw new globalThis.Error("Approve must be enabled when every row is keep");
    expectOne(canvasElement, '[data-testid="row-gc-007-en"] [data-testid*="question-decision"]', "the negative row's decision");
    expectOne(canvasElement, '[data-testid="question-validator"]', "the validator's line");
  }
}`,...h.parameters?.docs?.source},description:{story:"Every row *keep* by default; *Approve 14 · Drop 0* enabled; the twins adjacent; negatives without gold.",...h.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "keyboard-path",
  render: args => <div>
      <QuestionReviewCard {...args} onApprove={rows => {
      (document.getElementById("qr-out") as HTMLElement).textContent = JSON.stringify(rows);
    }} />
      <output id="qr-out" data-testid="qr-out" hidden />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const root = expectOne(canvasElement, '[data-testid="question-review-apr_qb_01"]', "the card");
    const first = expectOne(canvasElement, 'tr[data-testid="row-gc-001-en"]', "the first row");
    first.focus();
    key(first, "ArrowDown");
    await tick();
    const second = expectOne(canvasElement, 'tr[data-testid="row-gc-001-uk"]', "the second row");
    if (document.activeElement !== second) throw new globalThis.Error("↓ did not move the focus to the second row");
    key(second, "d");
    await tick();
    const reason = expectOne(canvasElement, '[data-testid="question-reason-gc-001-uk"] [role="combobox"]', "the reason combobox after d");
    const why = expectOne(canvasElement, '[data-testid="question-approve-why"]', "the *needs a reason* line");
    if (!/1/.test(why.textContent ?? "")) throw new globalThis.Error("the line must count the one drop");
    const approve = expectOne(canvasElement, 'button[data-testid="question-approve"]', "Approve");
    if (approve.getAttribute("aria-disabled") !== "true") throw new globalThis.Error("Approve must wait on a drop without a reason");
    key(root, "Enter", {
      metaKey: true
    });
    await tick();
    if ((canvasElement.querySelector('[data-testid="qr-out"]')?.textContent ?? "") !== "") throw new globalThis.Error("⌘⏎ must not approve with a reason missing");
    // \`r\` on the dropped row lands on its reason
    second.focus();
    key(second, "r");
    if (document.activeElement !== reason) throw new globalThis.Error("r did not focus the reason");
    // choose the reason through the kit's combobox
    reason.click();
    await tick();
    const option = Array.from(document.querySelectorAll('[role="option"]')).find(o => /bad gold/i.test(o.textContent ?? "")) as HTMLElement | undefined;
    if (!option) throw new globalThis.Error("the reason list did not open");
    option.click();
    await tick();
    if (approve.getAttribute("aria-disabled")) throw new globalThis.Error("Approve must be enabled once the drop has its reason");
    key(root, "Enter", {
      metaKey: true
    });
    await tick();
    const out = JSON.parse(canvasElement.querySelector('[data-testid="qr-out"]')?.textContent || "null") as {
      row_id: string;
      decision: string;
      reason?: string;
    }[] | null;
    if (!out || out.length !== 14) throw new globalThis.Error("⌘⏎ must hand every row's pick to Approve");
    const dropped = out.find(r => r.row_id === "gc-001-uk");
    if (!dropped || dropped.decision !== "drop" || dropped.reason !== "bad_gold") throw new globalThis.Error("the dropped twin must carry its reason");
    if (out.find(r => r.row_id === "gc-001-en")?.decision !== "keep") throw new globalThis.Error("a decision on one twin must not move the other");
    // let the kit's picker finish its closing animation before axe reads the tree
    await new Promise(r => setTimeout(r, 250));
  }
}`,...w.parameters?.docs?.source},description:{story:"The keyboard path (): `↓` moves the focus, `d` drops and opens the reason, a drop without a reason blocks Approve, `r` returns to the reason, the reason chosen → `⌘⏎` approves with every row.",...w.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "drop-needs-reason",
  play: async ({
    canvasElement
  }) => {
    const drop = expectOne(canvasElement, '[data-testid="question-drop-gc-002-en"] input', "the drop radio");
    (drop as HTMLInputElement).click();
    await tick();
    expectOne(canvasElement, '[data-testid="question-approve-why"]', "the reason line");
    expectOne(canvasElement, 'button[data-testid="question-approve"][aria-disabled="true"]', "Approve, waiting");
  }
}`,...m.parameters?.docs?.source},description:{story:"A drop without a reason: Approve waits with *1 drop needs a reason* beside it, never a bare disabled button.",...m.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "page-chrome",
  args: {
    chrome: "page"
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector("h2")) throw new globalThis.Error("no h2 in page chrome — the page line is the title");
    expectOne(canvasElement, '[data-chrome="page"] .nexus-tasks-question-meta', "the meta line");
    expectOne(canvasElement, 'table[data-testid="question-rows"]', "the row table");
  }
}`,...v.parameters?.docs?.source},description:{story:'`chrome="page"` (): the Inbox opens a batch as a resource page whose one header line names it — the card keeps\n only the meta line (requester · time · expiry), no h2, no chip; the table has the page\'s width.',...v.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "permission-denied-self-review",
  args: {
    model: SELF_REVIEW
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="restriction"]', "the restriction sentence");
    if (canvasElement.querySelector('button[data-testid="question-approve"]')) throw new globalThis.Error("no Approve for the requester");
    expectOne(canvasElement, '[data-testid="question-pick-gc-001-en"]', "the read-only pick");
  }
}`,...g.parameters?.docs?.source},description:{story:": the requester opens their own batch — the picks read-only, *You cannot review your own batch*.",...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "expired",
  args: {
    model: EXPIRED
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="question-expired"][role="status"]', "the expired line");
    if (canvasElement.querySelector('button[data-testid="question-approve"]')) throw new globalThis.Error("no Approve on an expired batch");
  }
}`,...y.parameters?.docs?.source},description:{story:": an expired batch — the standard expired line, nothing to press.",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "decided",
  args: {
    model: DECIDED
  },
  play: async ({
    canvasElement
  }) => {
    const line = expectOne(canvasElement, '[data-testid="question-decided"][role="status"]', "the decided line");
    if (!/Olena/.test(line.textContent ?? "")) throw new globalThis.Error("the decider's name");
    const dropped = expectOne(canvasElement, '[data-testid="question-pick-gc-004-en"]', "the dropped twin");
    if (!/Bad gold/.test(dropped.textContent ?? "")) throw new globalThis.Error("the drop reason must show");
  }
}`,...b.parameters?.docs?.source},description:{story:"Decided by another editor: the picks read-only with the reason, who and when, the tally.",...b.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "rejected",
  args: {
    model: REJECTED
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="question-decided"][role="status"]', "the rejected line");
  }
}`,...f.parameters?.docs?.source},description:{story:"Rejected whole ( a): no row was decided — every pick shows as it stood, the line says rejected.",...f.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "decision-refused",
  args: {
    error: "Already decided — refresh to see who and when."
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="question-error"][role="alert"]', "the refusal");
  }
}`,..._.parameters?.docs?.source},description:{story:"tasks-api refused the decision — its words as `role=alert`, the picks kept.",..._.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "loading",
  render: () => <QuestionReviewLive approvalId="apr_qb_01" principal="usr_olena" doors={doors(never)} />,
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="loading-state"]', "the loading state");
  }
}`,...E.parameters?.docs?.source},description:{story:"The live face while `GET /tasks/approvals/{id}` is on its way.",...E.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "error",
  render: () => <QuestionReviewLive approvalId="apr_qb_01" principal="usr_olena" doors={doors(async () => {
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
}`,...q.parameters?.docs?.source},description:{story:"The read failed — the standard error state with *Retry*.",...q.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "offline",
  render: () => <QuestionReviewLive approvalId="apr_qb_01" principal="usr_olena" doors={doors(async () => {
    throw ChatApiError.offline("c", new Error("offline"));
  })} />,
  play: async ({
    canvasElement
  }) => {
    await tick();
    await tick();
    expectOne(canvasElement, '[data-testid="offline-state"]', "the offline state");
  }
}`,...x.parameters?.docs?.source},description:{story:"No network — the standard offline state.",...x.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "live-from-record",
  render: () => <QuestionReviewLive approvalId="apr_qb_01" principal="usr_olena" doors={doors(async () => WIRE_PENDING)} nameOf={ref => ref?.endsWith("usr_oleksandr") ? "Oleksandr Dovhal" : ref ?? ""} />,
  play: async ({
    canvasElement
  }) => {
    await tick();
    await tick();
    expectOne(canvasElement, 'button[data-testid="question-approve"]', "Approve for the decider");
  }
}`,...k.parameters?.docs?.source},description:{story:"The live face from the wire record: the reader is a decider and not the requester → the live card.",...k.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "live-self-review",
  render: () => <QuestionReviewLive approvalId="apr_qb_01" principal="usr_oleksandr" doors={doors(async () => WIRE_PENDING)} />,
  play: async ({
    canvasElement
  }) => {
    await tick();
    await tick();
    expectOne(canvasElement, '[data-testid="restriction"]', "the self-review restriction");
  }
}`,...T.parameters?.docs?.source},description:{story:"The live face read by the requester (): tasks-api lets them read it; the card refuses the decision.",...T.parameters?.docs?.description}}};export{b as Decided,_ as DecisionRefused,m as DropNeedsReason,q as ErrorFace,y as Expired,w as KeyboardPath,k as LiveFromRecord,T as LiveSelfReview,E as Loading,x as Offline,v as PageChrome,g as PermissionDeniedSelfReview,h as Populated,f as Rejected,V as __namedExportsOrder,Y as default};
