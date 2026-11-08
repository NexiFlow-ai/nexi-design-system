import{j as g}from"./iframe-C_4ax-Jm.js";import"./harness-p7-wY8XY.js";import{a as q}from"./ToolRequestStatus-Bq5zZxat.js";import{P as h,a as E}from"./capabilityDoor045Fixtures-D3yTuRAC.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */const a=()=>{},l=E.filter(e=>e.effect==="read").map(e=>({id:e.id,name:e.name,effect:e.effect})),{api:w,requestId:v,requestedAt:b}=h,C={title:"Apps/NexChat/Tool request status",component:q,parameters:{ds:"DS-6903",layout:"padded"},args:{api:w,requestId:v,requestedAt:b,status:"awaiting",connection:"requested",tools:l,onEdit:a,onCancel:a,onDone:a,onSendAgain:a,onStartAgain:a,onTryIt:a,onEnable:a}};function t(e,m,y){if(!e.querySelector(m))throw new globalThis.Error(`${y} is missing (${m})`)}const c={name:"awaiting",play:async({canvasElement:e})=>{if(t(e,'[data-testid="tool-request-status"][data-status="awaiting"] [data-testid="request-meta"]',"the request's meta line"),e.querySelector("h1, .nexus-cc-back"))throw new globalThis.Error("the body draws a line of its own (: the page's head is the screen's)");t(e,'button[data-testid="request-edit"]',"Edit request"),t(e,'button[data-testid="request-cancel"]',"Cancel request"),t(e,'button[data-testid="request-done"]',"Done")}},n={name:"approved",args:{status:"approved",connection:"connected"},play:async({canvasElement:e})=>{if(t(e,'[data-testid^="request-try-"]',"Try it"),e.querySelector('[data-testid="request-cancel"]'))throw new globalThis.Error("Cancel request on an approved request")}},s={name:"needs-changes",args:{status:"needs_changes"},play:async({canvasElement:e})=>{t(e,'button[data-testid="request-send-again"]',"Send again"),t(e,'[data-testid="tool-request-status"][data-status="needs_changes"] [data-testid="request-edit"]',"Edit request")}},p={name:"expired",args:{status:"expired"},play:async({canvasElement:e})=>t(e,'button[data-testid="request-start-again"]',"Start again from the draft")},u={name:"cancelled",args:{status:"cancelled"},play:async({canvasElement:e})=>{if(e.querySelector('[data-testid="request-edit"], [data-testid="request-cancel"]'))throw new globalThis.Error("an action on a cancelled request")}},r={name:"approved-waiting",args:{status:"approved_waiting",connection:"requested"},play:async({canvasElement:e})=>{if(t(e,'[data-testid="tool-request-status"][data-status="approved_waiting"] [data-testid="request-tool-getPortForecast"]',"the tool's row"),e.querySelector('[data-testid^="request-try-"], [data-testid="request-cancel"]'))throw new globalThis.Error("Try it or Cancel before the connection exists")}},o={name:"try-open",args:{status:"approved",connection:"connected",tryPanel:{toolId:l[0].id,node:g.jsx("div",{"data-testid":"try-panel-stub",children:"…"})}},play:async({canvasElement:e})=>{t(e,`[data-testid="request-try-panel-${l[0].id}"]`,"the try panel"),t(e,`[data-testid="request-try-${l[0].id}"][aria-expanded="true"]`,"the expanded Try it")}},d={name:"action-refused",args:{status:"awaiting",error:"Could not cancel the request (CAPABILITY_REQUEST_DECIDED)"},play:async({canvasElement:e})=>t(e,'[data-testid="request-error"][role="alert"]',"the refusal")},i={name:"admin-enable",args:{connection:"connected",adminEnable:!0},play:async({canvasElement:e})=>t(e,'button[data-testid="request-enable"]',"Enable N read actions")},_=["Awaiting","Approved","NeedsChanges","Expired","Cancelled","ApprovedWaiting","TryOpen","ActionRefused","AdminEnable"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "awaiting",
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="tool-request-status"][data-status="awaiting"] [data-testid="request-meta"]', "the request's meta line");
    if (canvasElement.querySelector("h1, .nexus-cc-back")) throw new globalThis.Error("the body draws a line of its own (: the page's head is the screen's)");
    expectOne(canvasElement, 'button[data-testid="request-edit"]', "Edit request");
    expectOne(canvasElement, 'button[data-testid="request-cancel"]', "Cancel request");
    expectOne(canvasElement, 'button[data-testid="request-done"]', "Done");
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "approved",
  args: {
    status: "approved",
    connection: "connected"
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid^="request-try-"]', "Try it");
    if (canvasElement.querySelector('[data-testid="request-cancel"]')) throw new globalThis.Error("Cancel request on an approved request");
  }
}`,...n.parameters?.docs?.source},description:{story:"Approved: the rows read *Connected*, *Try it* on the read tools (, re-homed here), *Done*.",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "needs-changes",
  args: {
    status: "needs_changes"
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, 'button[data-testid="request-send-again"]', "Send again");
    expectOne(canvasElement, '[data-testid="tool-request-status"][data-status="needs_changes"] [data-testid="request-edit"]', "Edit request");
  }
}`,...s.parameters?.docs?.source},description:{story:"*Edit request* reopens the sections with everything kept; *Send again* (the administrator's quoted note is the head's — the page stories).",...s.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "expired",
  args: {
    status: "expired"
  },
  play: async ({
    canvasElement
  }) => expectOne(canvasElement, 'button[data-testid="request-start-again"]', "Start again from the draft")
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "cancelled",
  args: {
    status: "cancelled"
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="request-edit"], [data-testid="request-cancel"]')) throw new globalThis.Error("an action on a cancelled request");
  }
}`,...u.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "approved-waiting",
  args: {
    status: "approved_waiting",
    connection: "requested"
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="tool-request-status"][data-status="approved_waiting"] [data-testid="request-tool-getPortForecast"]', "the tool's row");
    if (canvasElement.querySelector('[data-testid^="request-try-"], [data-testid="request-cancel"]')) throw new globalThis.Error("Try it or Cancel before the connection exists");
  }
}`,...r.parameters?.docs?.source},description:{story:"S2 ( §2.2): `approved` + `capability.connection_required` — *Approved — waiting for a connection*; no *Try it* yet.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "try-open",
  args: {
    status: "approved",
    connection: "connected",
    tryPanel: {
      toolId: TOOLS[0].id,
      node: <div data-testid="try-panel-stub">…</div>
    }
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, \`[data-testid="request-try-panel-\${TOOLS[0].id}"]\`, "the try panel");
    expectOne(canvasElement, \`[data-testid="request-try-\${TOOLS[0].id}"][aria-expanded="true"]\`, "the expanded Try it");
  }
}`,...o.parameters?.docs?.source},description:{story:"S2 (): *Try it* opened — the try panel under the tool's row.",...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "action-refused",
  args: {
    status: "awaiting",
    error: "Could not cancel the request (CAPABILITY_REQUEST_DECIDED)"
  },
  play: async ({
    canvasElement
  }) => expectOne(canvasElement, '[data-testid="request-error"][role="alert"]', "the refusal")
}`,...d.parameters?.docs?.source},description:{story:"S2: a refusal of an action (cancel · enable · copy) in the server's words; the actions wait while one is in flight.",...d.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "admin-enable",
  args: {
    connection: "connected",
    adminEnable: true
  },
  play: async ({
    canvasElement
  }) => expectOne(canvasElement, 'button[data-testid="request-enable"]', "Enable N read actions")
}`,...i.parameters?.docs?.source},description:{story:"Taras — an administrator's own request after *Save key*: *Enable 2 read actions* beside *Done* ().",...i.parameters?.docs?.description}}};export{d as ActionRefused,i as AdminEnable,n as Approved,r as ApprovedWaiting,c as Awaiting,u as Cancelled,p as Expired,s as NeedsChanges,o as TryOpen,_ as __namedExportsOrder,C as default};
