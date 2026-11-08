import{ak as x,j as o,B as q}from"./iframe-C_4ax-Jm.js";import{C as v}from"./errors-pXhwd8l7.js";import"./harness-p7-wY8XY.js";import{E as S}from"./States-BZzUPC8s.js";import{C as A}from"./ConfigureHub-a_GSs_jQ.js";import{H as k,a as C}from"./configureHub045Fixtures-ByaJH8nN.js";import{B as y}from"./shared-BlqZGFEn.js";import{T as R,a as _}from"./ToolRequestStatus-Bq5zZxat.js";import{T as O,a as N}from"./ToolSetup-f7FSVUyz.js";import{P as r,a as T,b as P}from"./capabilityDoor045Fixtures-D3yTuRAC.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./ChatApiProvider-Dp0rzuLn.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./triangle-alert-DHjMhE4U.js";import"./ProjectHeaderView-D6sJuOrU.js";import"./pin-zHWwwtbl.js";import"./info-Bk_zTNpg.js";import"./file-text-D2w4_mYA.js";import"./settings-2-DzycKneG.js";import"./RecentRow-vIIwzJB1.js";import"./user-CGy4k_zL.js";const t=()=>{},j=T.filter(e=>e.effect==="read").map(e=>e.id),D=T.filter(e=>e.effect==="read").map(e=>({id:e.id,name:e.name,effect:e.effect})),I={agentName:r.agentName,step:2,source:{url:"https://api.portweather.example/openapi.yaml",parsed:P,target:"new"},actions:T,selected:j,connection:{shape:"ask_admin",note:""},onUrl:t,onChooseFile:t,onClearFile:t,onAdvanced:t,onRead:t,onTarget:t,onToggleAction:t,onConnectionChoice:t,onSaveKey:t,onNote:t,onRetryRights:t,onOnlyHost:t,onChangeStep:t,onSaveDraft:t,onStepBack:t,onContinue:t,onSend:t},E={awaiting:{kind:"awaiting",connection:"requested"},approved:{kind:"approved",connection:"connected"},"needs-changes":{kind:"needs_changes",connection:"requested",note:"please leave out the alerts endpoint"}};function H({state:e}){const{t:a}=x(),s=e==="from-agent"?{href:"/projects/prj_1/agents/agt_1?tab=tools",label:r.agentName}:{href:"/projects/prj_1/tools",label:a("agent.tools.setup.back")};let d=null,c;if(e==="permission-denied")c=o.jsx(S,{error:new v({kind:"denied",status:403}),action:o.jsx(q,{onClick:t,"data-testid":"tool-setup-back",children:a("agent.tools.setup.back")})});else if(e in E){const l=E[e];d=o.jsx(y,{back:s,backTestId:"tool-request-back",title:r.api,chips:o.jsx(R,{status:l.kind,agentName:r.agentName,note:l.note})}),c=o.jsx(_,{api:r.api,requestId:r.requestId,requestedAt:r.requestedAt,status:l.kind,connection:l.connection,tools:D,onEdit:t,onCancel:t,onDone:t,onSendAgain:t,onStartAgain:t,onTryIt:t,onEnable:t})}else{const l=e==="drafting"?void 0:"09:12";d=o.jsx(y,{back:s,backTestId:"tool-request-back",title:a("agent.tools.setup.title"),chips:o.jsx(O,{savedAt:l,restored:e==="draft-restored"})}),c=o.jsx(N,{...I})}return o.jsx("div",{className:"nexus-configure-s0-frame",children:o.jsx(A,{projectName:C,tab:"tools",onTab:t,catalogueCount:k,tabs:!1,children:o.jsxs("div",{className:"nexus-mgmt-layout","data-testid":"tool-request-page",children:[d,c]})})})}const Je={title:"Apps/NexChat/Tool request page",component:H,parameters:{ds:"DS-6902",layout:"padded"},argTypes:{state:{control:"select",options:["drafting","draft-saved","draft-restored","from-agent","awaiting","approved","needs-changes","permission-denied"]}}};function n(e,a,s){if(!e.querySelector(a))throw new globalThis.Error(`${s} is missing (${a})`)}function i(e,a){const s=[...e.querySelectorAll(".nexus-cc-back")].map(c=>c.getAttribute("data-testid"));if(s.join(" ")!=="configure-back tool-request-back")throw new globalThis.Error(`the back arrows are ${s.join(" · ")||"none"} — two, never three`);if(e.querySelector('[role="tablist"]'))throw new globalThis.Error("a tab row under a detail screen's breadcrumb");const d=e.querySelector('[data-testid="tool-request-back"]');if(d?.getAttribute("aria-label")!==a)throw new globalThis.Error(`the back arrow reads "${d?.getAttribute("aria-label")}", not "${a}"`);if(e.querySelector('[data-testid="tool-setup"] h1, [data-testid="tool-request-status"] h1, [data-testid="tool-setup"] .nexus-cc-back, [data-testid="tool-request-status"] .nexus-cc-back'))throw new globalThis.Error("the body draws a line of its own")}const p={name:"drafting",args:{state:"drafting"},play:async({canvasElement:e})=>{if(i(e,"Tools"),n(e,'.nexus-builder-head [data-testid="setup-draft-note"][aria-live="polite"]',"the polite draft note in the head"),n(e,'[data-testid="tool-setup"] [aria-current="step"]',"the open section"),!e.querySelector(".nexus-builder-head h1")?.textContent?.includes("Connect a new API"))throw new globalThis.Error("the head does not read Connect a new API")}},u={name:"draft-saved",args:{state:"draft-saved"},play:async({canvasElement:e})=>{if(i(e,"Tools"),!e.querySelector('.nexus-builder-head [data-testid="setup-draft-note"][aria-live="polite"]')?.textContent?.includes("09:12"))throw new globalThis.Error("Draft saved ⟨time⟩ is not in the head")}},m={name:"draft-restored",args:{state:"draft-restored"},play:async({canvasElement:e})=>{if(i(e,"Tools"),!e.querySelector('.nexus-builder-head [data-testid="setup-draft-note"][aria-live="polite"]')?.textContent?.includes("09:12"))throw new globalThis.Error("the restored note is not in the head")}},h={name:"from-agent",args:{state:"from-agent"},play:async({canvasElement:e})=>{if(i(e,r.agentName),!e.querySelector('[data-testid="tool-request-back"]')?.getAttribute("href")?.includes("/agents/agt_1"))throw new globalThis.Error("the back arrow does not return to the agent")}},g={name:"awaiting",args:{state:"awaiting"},play:async({canvasElement:e})=>{if(i(e,"Tools"),n(e,'.nexus-builder-head [data-testid="request-status-word"][role="status"]',"the status word in the head"),!e.querySelector(".nexus-builder-head h1")?.textContent?.includes(r.api))throw new globalThis.Error("the head does not read the API's name");n(e,'[data-testid="tool-request-status"][data-status="awaiting"] [data-testid="request-cancel"]',"Cancel request")}},w={name:"approved",args:{state:"approved"},play:async({canvasElement:e})=>{if(i(e,"Tools"),!e.querySelector('.nexus-builder-head [data-testid="request-status-word"]')?.textContent?.includes(r.agentName))throw new globalThis.Error("the status word does not name the agent");n(e,'[data-testid="tool-request-status"][data-status="approved"] [data-testid^="request-try-"]',"Try it")}},f={name:"needs-changes",args:{state:"needs-changes"},play:async({canvasElement:e})=>{if(i(e,"Tools"),!e.querySelector('.nexus-builder-head [data-testid="request-status-word"]')?.textContent?.includes("alerts endpoint"))throw new globalThis.Error("the note is not quoted in the head");n(e,'[data-testid="tool-request-status"][data-status="needs_changes"] [data-testid="request-send-again"]',"Send again")}},b={name:"permission-denied",args:{state:"permission-denied"},play:async({canvasElement:e})=>{if(n(e,'[data-testid="access-denied"][role="alert"]',"the denied state"),e.querySelector('[data-testid="tool-setup"], [data-testid="tool-request-back"]'))throw new globalThis.Error("a setup page or a head for a viewer");n(e,'[data-testid="configure-back"]',"the hub's breadcrumb")}},Ke=["Drafting","DraftSaved","DraftRestored","FromAgent","Awaiting","Approved","NeedsChanges","PermissionDenied"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "drafting",
  args: {
    state: "drafting"
  },
  play: async ({
    canvasElement
  }) => {
    expectTwoLines(canvasElement, "Tools");
    expectOne(canvasElement, '.nexus-builder-head [data-testid="setup-draft-note"][aria-live="polite"]', "the polite draft note in the head");
    expectOne(canvasElement, '[data-testid="tool-setup"] [aria-current="step"]', "the open section");
    const title = canvasElement.querySelector(".nexus-builder-head h1");
    if (!title?.textContent?.includes("Connect a new API")) throw new globalThis.Error("the head does not read Connect a new API");
  }
}`,...p.parameters?.docs?.source},description:{story:"`/tools/new` from the Tools tab: `← Tools · Connect a new API`, the note empty, section 2 open beneath.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "draft-saved",
  args: {
    state: "draft-saved"
  },
  play: async ({
    canvasElement
  }) => {
    expectTwoLines(canvasElement, "Tools");
    const note = canvasElement.querySelector('.nexus-builder-head [data-testid="setup-draft-note"][aria-live="polite"]');
    if (!note?.textContent?.includes("09:12")) throw new globalThis.Error("Draft saved ⟨time⟩ is not in the head");
  }
}`,...u.parameters?.docs?.source},description:{story:"S2 (): the draft auto-saved — *Draft saved ⟨time⟩* as the head's meta, in the polite live region.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "draft-restored",
  args: {
    state: "draft-restored"
  },
  play: async ({
    canvasElement
  }) => {
    expectTwoLines(canvasElement, "Tools");
    const note = canvasElement.querySelector('.nexus-builder-head [data-testid="setup-draft-note"][aria-live="polite"]');
    if (!note?.textContent?.includes("09:12")) throw new globalThis.Error("the restored note is not in the head");
  }
}`,...m.parameters?.docs?.source},description:{story:"A draft reopened: everything kept, the head says so (aria-live).",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "from-agent",
  args: {
    state: "from-agent"
  },
  play: async ({
    canvasElement
  }) => {
    expectTwoLines(canvasElement, PORT_WEATHER_REQUEST.agentName);
    const back = canvasElement.querySelector<HTMLAnchorElement>('[data-testid="tool-request-back"]');
    if (!back?.getAttribute("href")?.includes("/agents/agt_1")) throw new globalThis.Error("the back arrow does not return to the agent");
  }
}`,...h.parameters?.docs?.source},description:{story:"Started from the agent's Tools tab (`?agent=`): the back arrow is `← Port Weather Watch`, to that tab — no picker.",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "awaiting",
  args: {
    state: "awaiting"
  },
  play: async ({
    canvasElement
  }) => {
    expectTwoLines(canvasElement, "Tools");
    expectOne(canvasElement, '.nexus-builder-head [data-testid="request-status-word"][role="status"]', "the status word in the head");
    const title = canvasElement.querySelector(".nexus-builder-head h1");
    if (!title?.textContent?.includes(PORT_WEATHER_REQUEST.api)) throw new globalThis.Error("the head does not read the API's name");
    expectOne(canvasElement, '[data-testid="tool-request-status"][data-status="awaiting"] [data-testid="request-cancel"]', "Cancel request");
  }
}`,...g.parameters?.docs?.source},description:{story:"Sent: the API's name is the title, *Awaiting review* the chip; the rows and the action row beneath.",...g.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "approved",
  args: {
    state: "approved"
  },
  play: async ({
    canvasElement
  }) => {
    expectTwoLines(canvasElement, "Tools");
    const word = canvasElement.querySelector('.nexus-builder-head [data-testid="request-status-word"]');
    if (!word?.textContent?.includes(PORT_WEATHER_REQUEST.agentName)) throw new globalThis.Error("the status word does not name the agent");
    expectOne(canvasElement, '[data-testid="tool-request-status"][data-status="approved"] [data-testid^="request-try-"]', "Try it");
  }
}`,...w.parameters?.docs?.source},description:{story:"Approved: *Approved — added to ⟨agent⟩* in the head; the rows *Connected* with *Try it*.",...w.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "needs-changes",
  args: {
    state: "needs-changes"
  },
  play: async ({
    canvasElement
  }) => {
    expectTwoLines(canvasElement, "Tools");
    const word = canvasElement.querySelector('.nexus-builder-head [data-testid="request-status-word"]');
    if (!word?.textContent?.includes("alerts endpoint")) throw new globalThis.Error("the note is not quoted in the head");
    expectOne(canvasElement, '[data-testid="tool-request-status"][data-status="needs_changes"] [data-testid="request-send-again"]', "Send again");
  }
}`,...f.parameters?.docs?.source},description:{story:"Needs changes: the administrator's note quoted in the head's chip; *Edit request · Send again* beneath.",...f.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "permission-denied",
  args: {
    state: "permission-denied"
  },
  play: async ({
    canvasElement
  }) => {
    expectOne(canvasElement, '[data-testid="access-denied"][role="alert"]', "the denied state");
    if (canvasElement.querySelector('[data-testid="tool-setup"], [data-testid="tool-request-back"]')) throw new globalThis.Error("a setup page or a head for a viewer");
    expectOne(canvasElement, '[data-testid="configure-back"]', "the hub's breadcrumb");
  }
}`,...b.parameters?.docs?.source},description:{story:"A viewer on `/tools/new` (): the builders' door answers 403 — the existing denied state under the breadcrumb, no setup page.",...b.parameters?.docs?.description}}};export{w as Approved,g as Awaiting,m as DraftRestored,u as DraftSaved,p as Drafting,h as FromAgent,f as NeedsChanges,b as PermissionDenied,Ke as __namedExportsOrder,Je as default};
