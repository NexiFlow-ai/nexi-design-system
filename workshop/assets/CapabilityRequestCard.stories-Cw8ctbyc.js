import{j as b}from"./iframe-C_4ax-Jm.js";import"./format-C2oZUADA.js";import{A as T,a as N,b as C,I as O,c as _,d as E,e as S,f as D,g as q,C as R,h as v,i as A,j as x,W as P,k as B}from"./capabilityRequest045Fixtures-BruDB7xu.js";import"./preload-helper-PPVm8Dsz.js";import"./errors-pXhwd8l7.js";import"./navigation-BPhnWcXc.js";const W={title:"Apps/NexTasks/Capability request card",component:R,parameters:{ds:"DS-6904",layout:"padded",a11y:{config:{rules:[{id:"heading-order",enabled:!1}]}},docs:{description:{component:`DS-6904 Capability request card ( S0, proposed — draft §4.4 · §15.5): the administrator's one card in the
Inbox. Two steps for an API — *Connect in Core →* then *Approve* (enabled once a healthy connection exists); the
same card enables an automation. Synthetic people, synthetic marks ().`}}},args:{request:q,onApprove:()=>{},onNeedsChanges:()=>{}},decorators:[e=>b.jsx("div",{style:{maxWidth:640},children:b.jsx(e,{})})]};function a(e,t,m){if(!e.querySelector(t))throw new globalThis.Error(`${m} is missing (${t})`)}const n={name:"integration-no-connection",play:async({canvasElement:e})=>{a(e,'a[data-testid="capability-connect-core"]',"Connect in Core →"),a(e,'button[data-testid="capability-approve"][aria-disabled="true"]',"Approve, waiting"),a(e,'[data-testid="capability-approve-why"]',"the reason beside Approve"),a(e,'button[data-testid="capability-needs-changes"]',"Needs changes")}},r={name:"integration-connected",args:{request:E},play:async({canvasElement:e})=>{const t=e.querySelector('button[data-testid="capability-approve"]');if(!t||t.getAttribute("aria-disabled"))throw new globalThis.Error("Approve is not enabled with a healthy connection");if(e.querySelector('[data-testid="capability-connect-core"]'))throw new globalThis.Error("Connect in Core → with a connection already there")}},i={name:"integration-approved",args:{request:O},play:async({canvasElement:e})=>{if(a(e,'[data-testid="capability-decided"][role="status"]',"the decided face"),e.querySelector('[data-testid="capability-approve"]'))throw new globalThis.Error("a button on a decided card")}},o={name:"automation",args:{request:N},play:async({canvasElement:e})=>{a(e,'[data-testid="capability-open-studio"]',"Open in Studio"),a(e,'button[data-testid="capability-approve"]:not([aria-disabled])',"Enable")}},s={name:"automation-needs-changes",args:{request:C},play:async({canvasElement:e})=>{if(!e.querySelector('[data-testid="capability-decided"]')?.textContent?.includes("Mondays"))throw new globalThis.Error("the note is not shown")}},d={name:"integration-approved-pending-bind",args:{request:_,onFinish:()=>{}},play:async({canvasElement:e})=>{if(a(e,'[data-testid="capability-finish-face"]',"the race face"),a(e,'a[data-testid="capability-connect-core"]',"Connect in Core →"),a(e,'button[data-testid="capability-finish"][aria-disabled="true"]',"Finish, waiting"),e.querySelector('[data-testid="capability-approve"]'))throw new globalThis.Error("Approve on an approved card")}},c={name:"integration-finish-ready",args:{request:D,onFinish:()=>{}},play:async({canvasElement:e})=>{const t=e.querySelector('button[data-testid="capability-finish"]');if(!t||t.getAttribute("aria-disabled"))throw new globalThis.Error("Finish is not enabled with a healthy connection");if(e.querySelector('[data-testid="capability-connect-core"]'))throw new globalThis.Error("Connect in Core → with a connection already there")}},p={name:"integration-decided-by-other",args:{request:S},play:async({canvasElement:e})=>{if(!e.querySelector('[data-testid="capability-decided"]')?.textContent?.includes("Iryna P."))throw new globalThis.Error("the decider is not named");if(e.querySelector('[data-testid="capability-approve"], [data-testid="capability-finish"]'))throw new globalThis.Error("a button on a decided card")}},l={name:"integration-decision-refused",args:{request:E,error:"Could not record the decision (expired)"},play:async({canvasElement:e})=>{a(e,'[data-testid="capability-error"][role="alert"]',"the refusal")}},w=x.find(e=>e.id==="ib_10").approval;async function f(e,t,m){for(let g=0;g<40;g++){if(e.querySelector(t))return;await new Promise(I=>setTimeout(I,25))}throw new globalThis.Error(`${m} is missing (${t})`)}const u={name:"live-from-card-door",render:()=>b.jsx(v,{approval:w,actorId:"u_dmytro",doors:A(P),onDecide:()=>({ok:!0})}),play:async({canvasElement:e})=>{await f(e,'[data-testid="capability-card-cr_045_7f3a"]',"the card from the door");const t=e.querySelector('button[data-testid="capability-approve"]');if(!t||t.getAttribute("aria-disabled"))throw new globalThis.Error("Approve is not enabled with the door's healthy connection")}},h={name:"live-approved-pending-bind",render:()=>b.jsx(v,{approval:w,actorId:"u_dmytro",doors:A(B),onDecide:()=>({ok:!0})}),play:async({canvasElement:e})=>{await f(e,'[data-testid="capability-finish-face"]',"the race face from the door"),a(e,'button[data-testid="capability-finish"][aria-disabled="true"]',"Finish, waiting")}},y={name:"admin-without-relation",args:{request:T},play:async({canvasElement:e})=>{if(a(e,'[data-testid="capability-projection"]',"the projection line"),e.querySelector('[data-testid="capability-note"]'))throw new globalThis.Error("thread content shown to an admin without a relation")}},k=["IntegrationNoConnection","IntegrationConnected","IntegrationApproved","Automation","AutomationNeedsChanges","IntegrationApprovedPendingBind","IntegrationFinishReady","IntegrationDecidedByOther","IntegrationDecisionRefused","LiveFromCardDoor","LiveApprovedPendingBind","AdminWithoutRelation"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "integration-no-connection",
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, 'a[data-testid="capability-connect-core"]', "Connect in Core →");
    expectOne(canvasElement, 'button[data-testid="capability-approve"][aria-disabled="true"]', "Approve, waiting");
    expectOne(canvasElement, '[data-testid="capability-approve-why"]', "the reason beside Approve");
    expectOne(canvasElement, 'button[data-testid="capability-needs-changes"]', "Needs changes");
  }
}`,...n.parameters?.docs?.source},description:{story:"Step 1: no connection yet — *Connect in Core →*; *Approve* waits with its reason beside it, never a bare disabled button.",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "integration-connected",
  args: {
    request: INTEGRATION_CONNECTED
  },
  play: async ({
    canvasElement
  }) => {
    const approve = canvasElement.querySelector('button[data-testid="capability-approve"]');
    if (!approve || approve.getAttribute("aria-disabled")) throw new globalThis.Error("Approve is not enabled with a healthy connection");
    if (canvasElement.querySelector('[data-testid="capability-connect-core"]')) throw new globalThis.Error("Connect in Core → with a connection already there");
  }
}`,...r.parameters?.docs?.source},description:{story:"Step 2: a healthy connection exists — *Approve* is enabled.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "integration-approved",
  args: {
    request: INTEGRATION_APPROVED
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="capability-decided"][role="status"]', "the decided face");
    if (canvasElement.querySelector('[data-testid="capability-approve"]')) throw new globalThis.Error("a button on a decided card");
  }
}`,...i.parameters?.docs?.source},description:{story:"Decided: *Approved by you · 09:40* — no buttons.",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "automation",
  args: {
    request: AUTOMATION
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="capability-open-studio"]', "Open in Studio");
    expectOne(canvasElement, 'button[data-testid="capability-approve"]:not([aria-disabled])', "Enable");
  }
}`,...o.parameters?.docs?.source},description:{story:"Kind `enable_automation`: the automation's line, *Open in Studio*, *Needs changes* · *Enable*.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "automation-needs-changes",
  args: {
    request: AUTOMATION_NEEDS_CHANGES
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="capability-decided"]')?.textContent?.includes("Mondays")) throw new globalThis.Error("the note is not shown");
  }
}`,...s.parameters?.docs?.source},description:{story:"Decided with a note: *Needs changes · 08:30* and the words sent back.",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "integration-approved-pending-bind",
  args: {
    request: INTEGRATION_APPROVED_PENDING_BIND,
    onFinish: () => undefined
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="capability-finish-face"]', "the race face");
    expectOne(canvasElement, 'a[data-testid="capability-connect-core"]', "Connect in Core →");
    expectOne(canvasElement, 'button[data-testid="capability-finish"][aria-disabled="true"]', "Finish, waiting");
    if (canvasElement.querySelector('[data-testid="capability-approve"]')) throw new globalThis.Error("Approve on an approved card");
  }
}`,...d.parameters?.docs?.source},description:{story:" §2.5 (S2, ): the race face — approved before the key existed: *Approved — connect to finish · Connect in Core → · Finish* (waiting).",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "integration-finish-ready",
  args: {
    request: INTEGRATION_FINISH_READY,
    onFinish: () => undefined
  },
  play: async ({
    canvasElement
  }) => {
    const finish = canvasElement.querySelector('button[data-testid="capability-finish"]');
    if (!finish || finish.getAttribute("aria-disabled")) throw new globalThis.Error("Finish is not enabled with a healthy connection");
    if (canvasElement.querySelector('[data-testid="capability-connect-core"]')) throw new globalThis.Error("Connect in Core → with a connection already there");
  }
}`,...c.parameters?.docs?.source},description:{story:"The race face with a healthy connection — *Finish* is enabled.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "integration-decided-by-other",
  args: {
    request: INTEGRATION_DECIDED_BY_OTHER
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="capability-decided"]')?.textContent?.includes("Iryna P.")) throw new globalThis.Error("the decider is not named");
    if (canvasElement.querySelector('[data-testid="capability-approve"], [data-testid="capability-finish"]')) throw new globalThis.Error("a button on a decided card");
  }
}`,...p.parameters?.docs?.source},description:{story:"*Already decided by ⟨name⟩* — the approval is no longer pending; no buttons.",...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "integration-decision-refused",
  args: {
    request: INTEGRATION_CONNECTED,
    error: "Could not record the decision (expired)"
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="capability-error"][role="alert"]', "the refusal");
  }
}`,...l.parameters?.docs?.source},description:{story:"A decision in flight — the buttons wait; a refusal renders in the server's words.",...l.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "live-from-card-door",
  render: () => <CapabilityRequestLive approval={LIVE_APPROVAL} actorId="u_dmytro" doors={fixtureCardDoors(WIRE_CARD_HEALTHY)} onDecide={() => ({
    ok: true
  })} />,
  play: async ({
    canvasElement
  }) => {
    await settled(canvasElement, '[data-testid="capability-card-cr_045_7f3a"]', "the card from the door");
    const approve = canvasElement.querySelector('button[data-testid="capability-approve"]');
    if (!approve || approve.getAttribute("aria-disabled")) throw new globalThis.Error("Approve is not enabled with the door's healthy connection");
  }
}`,...u.parameters?.docs?.source},description:{story:"S2 ( §2.4, ): the card wired to the card door — the approval's `capability_request_uri` read through `GET …/card`; *Approve* enabled by the door's `connection.state`.",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "live-approved-pending-bind",
  render: () => <CapabilityRequestLive approval={LIVE_APPROVAL} actorId="u_dmytro" doors={fixtureCardDoors(WIRE_CARD_APPROVED_PENDING_BIND)} onDecide={() => ({
    ok: true
  })} />,
  play: async ({
    canvasElement
  }) => {
    await settled(canvasElement, '[data-testid="capability-finish-face"]', "the race face from the door");
    expectOne(canvasElement, 'button[data-testid="capability-finish"][aria-disabled="true"]', "Finish, waiting");
  }
}`,...h.parameters?.docs?.source},description:{story:"S2 (): the door says `approved` and no connection yet — the race face, *Finish* waiting.",...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "admin-without-relation",
  args: {
    request: ADMIN_WITHOUT_RELATION
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="capability-projection"]', "the projection line");
    if (canvasElement.querySelector('[data-testid="capability-note"]')) throw new globalThis.Error("thread content shown to an admin without a relation");
  }
}`,...y.parameters?.docs?.source},description:{story:": an Organization Admin without a relation to the Project — the agent and the Project named, no thread content.",...y.parameters?.docs?.description}}};export{y as AdminWithoutRelation,o as Automation,s as AutomationNeedsChanges,i as IntegrationApproved,d as IntegrationApprovedPendingBind,r as IntegrationConnected,p as IntegrationDecidedByOther,l as IntegrationDecisionRefused,c as IntegrationFinishReady,n as IntegrationNoConnection,h as LiveApprovedPendingBind,u as LiveFromCardDoor,k as __namedExportsOrder,W as default};
