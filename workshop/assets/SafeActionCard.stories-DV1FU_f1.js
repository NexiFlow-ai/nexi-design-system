import{j as a,r as B}from"./iframe-C_4ax-Jm.js";/* empty css                */import{a as C,w as F}from"./widget-i18n-C7Fbtz7X.js";import"./preload-helper-PPVm8Dsz.js";function j(n,e){const i=n.label??{};return i[e]??i.en??""}function D(n){return n.approval?"safeActionApproval":n.outcome==="succeeded"?"safeActionDone":n.outcome==="failed"?"safeActionFailed":"safeActionRefused"}function r({lang:n,offer:e,state:i,result:c,onConfirm:_,onDismiss:k}){const u=(A,R)=>F(n,A,R),E=C(n,e.action_id),w=j(e,n)||E;if(i==="done"&&c){const A=u(D(c),{action:w});return a.jsx("p",{className:"nx-care-widget-notice",role:"status","data-testid":"safe-action-result","data-outcome":c.approval?"approval":c.outcome,children:A})}const l=i==="running";return a.jsxs("section",{className:"nx-care-widget-verify nx-care-widget-offer",role:"group","aria-label":u("safeActionTitle"),"data-testid":"safe-action-card","data-action":e.action_id,"data-state":i,children:[a.jsx("strong",{children:u("safeActionTitle")}),a.jsxs("p",{children:[a.jsx("span",{"data-testid":"safe-action-label",children:w}),e.resource_label?a.jsxs(a.Fragment,{children:[" · ",a.jsx("span",{"data-testid":"safe-action-resource",children:e.resource_label})]}):null]}),a.jsx("p",{className:"nx-care-widget-offer-as","data-testid":"safe-action-as",children:u("safeActionAs")}),a.jsxs("div",{className:"nx-care-widget-verify-actions",children:[a.jsx("button",{type:"button",className:"nx-care-widget-btn is-primary",disabled:l,"aria-busy":l,onClick:_,"data-testid":"safe-action-yes",children:l?u("safeActionRunning"):u("safeActionYes",{action:E||w})}),a.jsx("button",{type:"button",className:"nx-care-widget-btn",disabled:l,onClick:k,"data-testid":"safe-action-not-now",children:u("safeActionNotNow")})]})]})}r.__docgenInfo={description:"",methods:[],displayName:"SafeActionCard",props:{lang:{required:!0,tsType:{name:"Language"},description:""},offer:{required:!0,tsType:{name:"SafeActionOffer"},description:""},state:{required:!0,tsType:{name:"union",raw:'"offered" | "running" | "done"',elements:[{name:"literal",value:'"offered"'},{name:"literal",value:'"running"'},{name:"literal",value:'"done"'}]},description:""},result:{required:!1,tsType:{name:"union",raw:"SafeActionResult | null",elements:[{name:"signature",type:"object",raw:'{ outcome: "succeeded" | "failed" | "refused"; refusal?: string; approval?: boolean }',signature:{properties:[{key:"outcome",value:{name:"union",raw:'"succeeded" | "failed" | "refused"',elements:[{name:"literal",value:'"succeeded"'},{name:"literal",value:'"failed"'},{name:"literal",value:'"refused"'}],required:!0}},{key:"refusal",value:{name:"string",required:!1}},{key:"approval",value:{name:"boolean",required:!1}}]}},{name:"null"}]},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const I={title:"Apps/NexCare/Support/Safe Action Card",parameters:{ds:"DS-6917",layout:"centered",docs:{description:{component:`DS-6917 — the safe-action card beside the assistant's line ( S5; ;  · ; ).
The ladder: offered (the verb · the resource's short label · *as your organization, within your credits* · *Yes, …*
· *Not now*) · running · done — succeeded · failed · refused · a person will confirm (A3). Nothing on the card is
a ref, a mechanism word or content; uk = en; rendered inside the widget's frame so it speaks the widget's catalogue.`}}}};function t(n){throw new globalThis.Error(n)}const d=n=>n.textContent??"",N=/nexus:\/\/|prn_|sac_|sao_|consent_id|PDP|grant|assertion|fingerprint/i,s={offer_id:"sao_story_1",action_id:"flow_run.retry",resource_ref:"nexus://chat/flow_run/fr_story_1",resource_label:"Re-ingest Lviv · 29 Oct",consent_mode:"customer_yes",label:{en:"Retry the run",uk:"Повторити запуск"},expires_at:"2099-01-01T00:00:00Z"},q={...s,offer_id:"sao_story_2",action_id:"graph.binding.sync",resource_ref:"nexus://graph/project/p/binding/b",resource_label:"Warehouse catalogue · Lviv",label:{en:"Sync the source binding",uk:"Синхронізувати прив'язку джерела"}},o=(n,e)=>a.jsx("div",{className:"nx-care-widget nexus-care-support-verify-story","data-mode":"maxi","data-scheme":"light",lang:n,children:e});function O({lang:n,result:e}){const[i,c]=B.useState("offered");return a.jsx(r,{lang:n,offer:s,state:i,result:i==="done"?e:null,onConfirm:()=>{c("running"),setTimeout(()=>c("done"),400)},onDismiss:()=>c("done")})}const f={name:"offered · the verb, the resource, as your organization",render:()=>o("en",a.jsx(r,{lang:"en",offer:s,state:"offered",onConfirm:()=>{},onDismiss:()=>{}})),play:async({canvasElement:n})=>{const e=n.querySelector('[data-testid="safe-action-card"]');e||t("the card is drawn"),/Retry the run/.test(d(e))||t("the action is named"),/Re-ingest Lviv/.test(d(e))||t("the resource is named by its short label"),/As your organization, within your credits/.test(d(e))||t(": the organization line"),n.querySelector('[data-testid="safe-action-not-now"]')||t(": Not now is always present"),N.test(d(e))&&t("no ref, no mechanism word on the card")}},m={name:"offered · graph.binding.sync",render:()=>o("en",a.jsx(r,{lang:"en",offer:q,state:"offered",onConfirm:()=>{},onDismiss:()=>{}}))},p={name:"running · the buttons wait",render:()=>o("en",a.jsx(r,{lang:"en",offer:s,state:"running"})),play:async({canvasElement:n})=>{const e=n.querySelector('[data-testid="safe-action-yes"]');(!e?.disabled||e.getAttribute("aria-busy")!=="true")&&t("a running card cannot be pressed twice")}},g={name:"done · succeeded",render:()=>o("en",a.jsx(r,{lang:"en",offer:s,state:"done",result:{outcome:"succeeded"}})),play:async({canvasElement:n})=>{const e=n.querySelector('[data-testid="safe-action-result"]');(!e||e.getAttribute("role")!=="status")&&t("the outcome is one status line"),/Done — Retry the run completed\./.test(d(e))||t("the succeeded sentence")}},y={name:"done · failed",render:()=>o("en",a.jsx(r,{lang:"en",offer:s,state:"done",result:{outcome:"failed"}}))},h={name:"done · refused (a person confirms the next step)",render:()=>o("en",a.jsx(r,{lang:"en",offer:s,state:"done",result:{outcome:"refused",refusal:"resource_not_eligible"}})),play:async({canvasElement:n})=>{const e=n.querySelector('[data-testid="safe-action-result"]');(!e||/resource_not_eligible|budget|door/.test(d(e)))&&t("the refusal code never reaches the customer")}},x={name:"done · a person will confirm (A3)",render:()=>o("en",a.jsx(r,{lang:"en",offer:s,state:"done",result:{outcome:"refused",refusal:"budget",approval:!0}}))},b={name:"walkthrough · offered → running → done",render:()=>o("en",a.jsx(O,{lang:"en",result:{outcome:"succeeded"}}))},v={name:"offered · українською",render:()=>o("uk",a.jsx(r,{lang:"uk",offer:s,state:"offered",onConfirm:()=>{},onDismiss:()=>{}})),play:async({canvasElement:n})=>{const e=n.querySelector('[data-testid="safe-action-card"]');(!e||!/Повторити запуск/.test(d(e))||!/Не зараз/.test(d(e)))&&t("uk = en")}},S={name:"done · succeeded · українською",render:()=>o("uk",a.jsx(r,{lang:"uk",offer:s,state:"done",result:{outcome:"succeeded"}}))},H=["Offered","OfferedBindingSync","Running","Succeeded","Failed","Refused","NeedsApproval","WalkthroughEnglish","OfferedUkrainian","SucceededUkrainian"];f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "offered · the verb, the resource, as your organization",
  render: () => frame("en", <SafeActionCard lang="en" offer={OFFER} state="offered" onConfirm={() => {}} onDismiss={() => {}} />),
  play: async ({
    canvasElement
  }) => {
    const card = canvasElement.querySelector<HTMLElement>('[data-testid="safe-action-card"]');
    if (!card) fails("the card is drawn");
    if (!/Retry the run/.test(text(card))) fails("the action is named");
    if (!/Re-ingest Lviv/.test(text(card))) fails("the resource is named by its short label");
    if (!/As your organization, within your credits/.test(text(card))) fails(": the organization line");
    if (!canvasElement.querySelector('[data-testid="safe-action-not-now"]')) fails(": Not now is always present");
    if (FORBIDDEN.test(text(card))) fails("no ref, no mechanism word on the card");
  }
}`,...f.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "offered · graph.binding.sync",
  render: () => frame("en", <SafeActionCard lang="en" offer={BINDING} state="offered" onConfirm={() => {}} onDismiss={() => {}} />)
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "running · the buttons wait",
  render: () => frame("en", <SafeActionCard lang="en" offer={OFFER} state="running" />),
  play: async ({
    canvasElement
  }) => {
    const yes = canvasElement.querySelector<HTMLButtonElement>('[data-testid="safe-action-yes"]');
    if (!yes?.disabled || yes.getAttribute("aria-busy") !== "true") fails("a running card cannot be pressed twice");
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "done · succeeded",
  render: () => frame("en", <SafeActionCard lang="en" offer={OFFER} state="done" result={{
    outcome: "succeeded"
  }} />),
  play: async ({
    canvasElement
  }) => {
    const line = canvasElement.querySelector<HTMLElement>('[data-testid="safe-action-result"]');
    if (!line || line.getAttribute("role") !== "status") fails("the outcome is one status line");
    if (!/Done — Retry the run completed\\./.test(text(line))) fails("the succeeded sentence");
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "done · failed",
  render: () => frame("en", <SafeActionCard lang="en" offer={OFFER} state="done" result={{
    outcome: "failed"
  }} />)
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "done · refused (a person confirms the next step)",
  render: () => frame("en", <SafeActionCard lang="en" offer={OFFER} state="done" result={{
    outcome: "refused",
    refusal: "resource_not_eligible"
  }} />),
  play: async ({
    canvasElement
  }) => {
    const line = canvasElement.querySelector<HTMLElement>('[data-testid="safe-action-result"]');
    if (!line || /resource_not_eligible|budget|door/.test(text(line))) fails("the refusal code never reaches the customer");
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "done · a person will confirm (A3)",
  render: () => frame("en", <SafeActionCard lang="en" offer={OFFER} state="done" result={{
    outcome: "refused",
    refusal: "budget",
    approval: true
  }} />)
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "walkthrough · offered → running → done",
  render: () => frame("en", <Walkthrough lang="en" result={{
    outcome: "succeeded"
  }} />)
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "offered · українською",
  render: () => frame("uk", <SafeActionCard lang="uk" offer={OFFER} state="offered" onConfirm={() => {}} onDismiss={() => {}} />),
  play: async ({
    canvasElement
  }) => {
    const card = canvasElement.querySelector<HTMLElement>('[data-testid="safe-action-card"]');
    if (!card || !/Повторити запуск/.test(text(card)) || !/Не зараз/.test(text(card))) fails("uk = en");
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "done · succeeded · українською",
  render: () => frame("uk", <SafeActionCard lang="uk" offer={OFFER} state="done" result={{
    outcome: "succeeded"
  }} />)
}`,...S.parameters?.docs?.source}}};export{y as Failed,x as NeedsApproval,f as Offered,m as OfferedBindingSync,v as OfferedUkrainian,h as Refused,p as Running,g as Succeeded,S as SucceededUkrainian,b as WalkthroughEnglish,H as __namedExportsOrder,I as default};
