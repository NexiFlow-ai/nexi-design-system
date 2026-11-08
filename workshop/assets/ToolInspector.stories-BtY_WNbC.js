import{ak as $,r as I,j as t,v as l,B as U,w as se,I as re,m as S,a as _,S as ae,q as ie,h as ce}from"./iframe-C_4ax-Jm.js";import"./harness-p7-wY8XY.js";import{e as le,a as de,b as L,s as pe,R as he}from"./ToolsScreen-ERDdecc8.js";import{U as c,b as ue,R as M,d as W,P as G,e as Y,G as me,C as P,f as ge,c as ye,g as we,h as Te,S as B}from"./toolsScreen045Fixtures-0e6sbhDQ.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */import"./boxes-Cqxx_HWk.js";import"./workflow-BGMWCDzG.js";import"./factory-Ck7b_c89.js";import"./building-2-GerxkJzZ.js";import"./globe-DcMfC0yC.js";import"./database-BGWOjs-M.js";import"./compass-D5LaBgzz.js";import"./file-text-D2w4_mYA.js";import"./pencil-CCPuQVYt.js";import"./arrow-up-right-Ba_U-eY4.js";import"./play-D-gzWo7v.js";import"./plus-Dc-VMSiJ.js";function Ee(e,n){if(!e)return!1;const o=s=>s.trim().toLowerCase().replace(/[.\s]+$/g,"").replace(/\s+/g," ");return o(e)!==o(n)&&o(e).length>0}function H(e){return[e.method&&e.path?`${e.method} ${e.path}`:null,e.operationId??null].filter(Boolean).join(" · ")}function fe({action:e,technical:n,t:o}){const s=H(e);return t.jsxs("li",{className:"nexus-tool-inspector-action","data-testid":`tool-action-${e.id}`,children:[t.jsxs("div",{className:"nexus-tool-inspector-action-head",children:[t.jsx("span",{className:"nexus-tool-inspector-action-name",children:e.name}),t.jsxs("span",{className:"nexus-chips",children:[t.jsx(_,{size:"xs",tone:e.effect==="change"?"warn":"neutral",children:o(e.effect==="change"?"project.configure.tools.chip.changes":"project.configure.tools.chip.read_only")}),e.approval?t.jsx(_,{size:"xs",tone:"warn",children:o("project.configure.tools.chip.approval")}):null]})]}),Ee(e.summary,e.name)?t.jsx("p",{className:"nexus-tool-inspector-action-summary",children:e.summary}):null,n&&s?t.jsx("code",{className:"nexus-tool-inspector-technical","data-testid":`tool-action-technical-${e.id}`,children:s}):null]})}function xe({agents:e,onAdd:n,onCancel:o}){const{t:s}=$(),[d,q]=I.useState(e[0]?.id??"");return t.jsxs("div",{className:"nexus-tool-inspector-choose","data-testid":"tool-inspector-choose",children:[t.jsx(ce,{label:s("agent.tools.inspector.add_to_agent.select"),value:d,onChange:q,options:e.map(f=>({value:f.id,label:f.name})),size:"toolbar",testId:"tool-inspector-agent"}),t.jsx(U,{variant:"primary",size:"toolbar",onClick:()=>n(d),disabled:!d,"data-testid":"tool-inspector-add",children:s("agent.tools.inspector.add")}),t.jsx(l,{tone:"quiet",onClick:o,children:s("agent.tools.inspector.cancel")})]})}function F({row:e,agents:n,usedBy:o,request:s,onClose:d,onAddToAgent:q,onTryIt:f,onOpenInCore:O,onConnect:K,narrow:z,returnFocusTo:Q,agentHref:V=r=>`/agents/${r}`,testId:J="tool-inspector"}){const{t:r}=$(),[X,R]=I.useState(!1),[x,Z]=I.useState(!1),ee=e.actions.some(i=>H(i)),b=e.state.kind==="above_ceiling",te=le(e.actions)==="read",D=e.can.add&&!b&&n.length>0,k=e.can.tryIt&&te&&!b,v=e.can.openInCore,ne=v?t.jsx(l,{tone:"inline",onClick:O,"data-testid":"tool-inspector-connect-core",children:r("agent.tools.inspector.connect_in_core")}):e.can.connect&&e.state.kind==="not_connected"?t.jsx(l,{tone:"inline",onClick:K,"data-testid":"tool-inspector-connect",children:r("project.configure.tools.row.connect",{provider:e.state.provider})}):null,oe=b?null:D||k||v?t.jsxs("div",{className:"nexus-tool-inspector-footer",children:[D?X?t.jsx(xe,{agents:n,onAdd:q,onCancel:()=>R(!1)}):t.jsx(U,{variant:"primary",size:"toolbar",onClick:()=>R(!0),"data-testid":"tool-inspector-add-to-agent",children:r("agent.tools.inspector.add_to_agent")}):null,k||v?t.jsxs(se,{label:r("agent.tools.inspector.more"),children:[k?t.jsx(l,{tone:"quiet",onClick:f,"data-testid":"tool-inspector-try",children:r("agent.tools.inspector.try")}):null,v?t.jsx(l,{tone:"quiet",onClick:O,"data-testid":"tool-inspector-open-core",children:r("agent.tools.inspector.open_core")}):null]}):null]}):null;return t.jsx("div",{className:"nexus-tool-inspector","data-narrow":z?"true":void 0,"data-testid":J,children:t.jsxs(re,{kind:r("agent.tools.inspector.kind"),title:e.name,subtitle:e.provider!==e.name?e.provider:void 0,avatar:t.jsx(he,{row:e}),onClose:d,returnFocusTo:Q,footer:oe,children:[t.jsx("div",{className:"nexus-tool-inspector-posture","data-testid":"tool-inspector-posture",children:t.jsx(de,{row:e,t:r})}),t.jsx(S,{idiom:"rule",title:r("agent.tools.inspector.actions"),aside:t.jsxs("span",{className:"nexus-tool-inspector-actions-aside",children:[t.jsx("span",{children:e.actions.length}),ee?t.jsx(l,{tone:"meta","aria-expanded":x,"aria-controls":"tool-inspector-action-list",onClick:()=>Z(i=>!i),"data-testid":"tool-inspector-technical",children:r(x?"agent.tools.inspector.technical_hide":"agent.tools.inspector.technical")}):null]}),testId:"tool-inspector-actions",children:t.jsx("ul",{id:"tool-inspector-action-list",className:"nexus-list nexus-tool-inspector-actions","data-technical":x?"true":void 0,children:e.actions.map(i=>t.jsx(fe,{action:i,technical:x,t:r},i.id))})}),t.jsx(S,{idiom:"rule",title:r("agent.tools.inspector.connection"),testId:"tool-inspector-connection",children:t.jsxs("div",{className:"nexus-tool-inspector-connection",children:[b||e.state.kind==="blocked"?t.jsx(_,{tone:"danger",testId:"tool-inspector-state",children:t.jsx(L,{state:e.state,t:r})}):t.jsx(ae,{tone:pe(e.state),testId:"tool-inspector-state",children:t.jsx(L,{state:e.state,t:r})}),ne]})}),t.jsx(S,{idiom:"rule",title:r("agent.tools.inspector.used_by"),aside:o.length?t.jsx("span",{children:o.length}):void 0,testId:"tool-inspector-used-by",children:o.length?t.jsx("ul",{className:"nexus-list nexus-tool-inspector-used-by",children:o.map(i=>t.jsx("li",{children:t.jsx(l,{tone:"inline",href:V(i.id),children:i.name})},i.id))}):t.jsx(ie,{variant:"inline",title:r("agent.tools.inspector.used_by.none"),testId:"tool-inspector-used-by-none"})}),s?t.jsx(S,{idiom:"rule",title:r("agent.tools.inspector.request"),testId:"tool-inspector-request",children:t.jsxs("div",{className:"nexus-tool-inspector-request",children:[t.jsx(_,{tone:s.status==="approved"?"ok":s.status==="expired"?"muted":"warn",testId:"tool-inspector-request-status",children:r(`agent.tools.inspector.request.${s.status}`,{note:s.note??""})}),t.jsx("span",{className:"nexus-tool-inspector-request-meta",children:r("agent.tools.inspector.request.by",{name:s.requestedBy,time:s.when,id:s.id})})]})}):null]})})}F.__docgenInfo={description:"",methods:[],displayName:"ToolInspector",props:{row:{required:!0,tsType:{name:"ToolRowModel"},description:""},agents:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: string; name: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:"{ id: string; name: string }[]"},description:"The Project's agents — the *Add to an agent…* select."},usedBy:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: string; name: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:"{ id: string; name: string }[]"},description:"The Project's agents that bind this tool — the *Used by* section."},request:{required:!1,tsType:{name:"ToolRequestModel"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onAddToAgent:{required:!0,tsType:{name:"signature",type:"function",raw:"(agentId: string) => void",signature:{arguments:[{type:{name:"string"},name:"agentId"}],return:{name:"void"}}},description:""},onTryIt:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onOpenInCore:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onConnect:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},narrow:{required:!1,tsType:{name:"boolean"},description:"Below 720 px the panel is full-screen (draft §7); the story sets it, the hub's media query sets it in S1."},returnFocusTo:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:""},agentHref:{required:!1,tsType:{name:"signature",type:"function",raw:"(agentId: string) => string",signature:{arguments:[{type:{name:"string"},name:"agentId"}],return:{name:"string"}}},description:"S1 (): where a *Used by* agent lives — the wired page hands the Project's route; the stories keep `/agents/{id}`.",defaultValue:{value:"(id) => `/agents/${id}`",computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"tool-inspector"',computed:!1}}}};const Ue={title:"Apps/NexChat/Tool inspector",component:F,parameters:{ds:"DS-6908",layout:"fullscreen",a11y:{config:{rules:[{id:"heading-order",enabled:!1}]}},docs:{description:{component:`DS-6908 Tool Inspector ( S0 · draft §23; **redrawn S3 · **): the panel a row of the Tools tab opens —
the posture line (the effect · *Approval* · \`≤ ceiling\` chips that left the row) · *Actions* (one line per action:
name · its chip; the description only when it says more than the name; **one** *Technical* toggle for the list) ·
*Connection* · *Used by* · *Request*; the footer carries only what the server allows (). Synthetic rows.`}}},args:{row:B,agents:Y,usedBy:Te,onClose:()=>{},onAddToAgent:()=>{},onTryIt:()=>{},onOpenInCore:()=>{},onConnect:()=>{}},decorators:[e=>t.jsx("div",{style:{display:"flex",minHeight:560,justifyContent:"flex-end"},children:t.jsx(e,{})})]};function a(e,n){const o=e.querySelector(`[data-testid="${n}"]`);if(!o)throw new globalThis.Error(`${n} is missing`);return o}const A={name:"connected",play:async({canvasElement:e})=>{if(a(e,"tool-inspector-add-to-agent"),a(e,"tool-inspector-open-core"),e.querySelector('[data-testid="tool-inspector-try"]'))throw new globalThis.Error("Try it on a tool that makes changes");if(e.querySelectorAll('[data-testid^="tool-action-"]').length<2)throw new globalThis.Error("the actions are missing");const n=a(e,"tool-inspector-posture").textContent??"";if(!/Makes changes/.test(n)||!/Approval/.test(n))throw new globalThis.Error(`the posture line: ${n}`);if(e.querySelector('[data-testid^="tool-action-technical-"]'))throw new globalThis.Error("a technical line is open by default");a(e,"tool-inspector-technical")}},p={name:"technical-open",play:async({canvasElement:e})=>{const n=a(e,"tool-inspector-technical");if(n.click(),await new Promise(s=>setTimeout(s,0)),n.getAttribute("aria-expanded")!=="true")throw new globalThis.Error("the toggle did not open");const o=e.querySelectorAll('[data-testid^="tool-action-technical-"]');if(o.length!==B.actions.length)throw new globalThis.Error(`${o.length} technical lines for ${B.actions.length} actions`);if(!/POST \/chat\.postMessage/.test(o[0]?.textContent??""))throw new globalThis.Error(`the technical line: ${o[0]?.textContent}`)}},h={name:"descriptions",args:{row:P,usedBy:c},play:async({canvasElement:e})=>{const n=e.querySelectorAll(".nexus-tool-inspector-action-summary");if(n.length!==P.actions.length)throw new globalThis.Error(`a description that says more than its name is missing (${n.length})`)}},u={name:"platform",args:{row:G[4],usedBy:c},play:async({canvasElement:e})=>{const n=e.querySelector('[data-testid="tool-row-mark-tool-web"]');if(!n||n.getAttribute("data-kind")!=="icon")throw new globalThis.Error("the avatar is not the kind's glyph");if(e.querySelector('[data-testid="tool-inspector-open-core"]'))throw new globalThis.Error("Open in Core on a platform collection");if(!/Read-only/.test(a(e,"tool-inspector-posture").textContent??""))throw new globalThis.Error("the posture line is missing Read-only")}},m={name:"blocked",args:{row:G[2],usedBy:c},play:async({canvasElement:e})=>{const n=a(e,"tool-inspector-state");if(!n.classList.contains("nexus-cc-chip"))throw new globalThis.Error("the reason is not a chip");if(!/governance/.test(n.textContent??""))throw new globalThis.Error(`the reason is not the server's words: ${n.textContent}`);if(e.querySelector('[data-testid="tool-inspector-add-to-agent"]'))throw new globalThis.Error("Add to an agent on a blocked row")}},g={name:"connected-yours",args:{row:me,usedBy:[Y[1]]},play:async({canvasElement:e})=>{if(a(e,"tool-inspector-try"),e.querySelector('[data-testid="tool-inspector-open-core"]'))throw new globalThis.Error("Open in Core for a non-admin")}},C={name:"awaiting",args:{row:W,usedBy:c,request:M},play:async({canvasElement:e})=>{if(a(e,"tool-inspector-request"),a(e,"tool-inspector-used-by-none"),e.querySelector('[data-testid="tool-inspector-add-to-agent"]'))throw new globalThis.Error("Add to an agent on a tool awaiting review")}},j={name:"needs-changes",args:{row:ye,usedBy:c,request:ge}},y={name:"not-connected",args:{row:we,usedBy:c},play:async({canvasElement:e})=>{a(e,"tool-inspector-connect")}},w={name:"above-ceiling",args:{row:ue,usedBy:c},play:async({canvasElement:e})=>{if(!a(e,"tool-inspector-state").classList.contains("nexus-cc-chip"))throw new globalThis.Error("the reason is not a chip");if(e.querySelector(".nexus-cc-inspector-actions"))throw new globalThis.Error("a footer on a row above the ceiling");const o=[...e.querySelectorAll(".nexus-cc-chip")].filter(s=>/≤/.test(s.textContent??""));if(o.length!==1)throw new globalThis.Error(`the ceiling chip is drawn ${o.length} times`)}},T={name:"add-to-agent",play:async({canvasElement:e})=>{a(e,"tool-inspector-add-to-agent").click(),await new Promise(n=>setTimeout(n,0)),a(e,"tool-inspector-choose"),a(e,"tool-inspector-agent"),a(e,"tool-inspector-add")}},N={name:"uk",globals:{locale:"uk"},args:{row:W,usedBy:c,request:M}},E={name:"narrow",parameters:{viewport:{defaultViewport:"mobile1"}},args:{narrow:!0},decorators:[e=>t.jsx("div",{style:{maxWidth:320},children:t.jsx(e,{})})]},Me=["Connected","TechnicalOpen","Descriptions","Platform","Blocked","ConnectedYours","Awaiting","NeedsChanges","NotConnected","AboveCeiling","AddToAgent","Uk","Narrow"];A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "connected",
  play: async ({
    canvasElement
  }) => {
    byTestId(canvasElement, "tool-inspector-add-to-agent");
    byTestId(canvasElement, "tool-inspector-open-core");
    // Slack makes changes: no *Try it* (, read tools only)
    if (canvasElement.querySelector('[data-testid="tool-inspector-try"]')) throw new globalThis.Error("Try it on a tool that makes changes");
    if (canvasElement.querySelectorAll('[data-testid^="tool-action-"]').length < 2) throw new globalThis.Error("the actions are missing");
    // : the posture line carries the chips the row lost — *Makes changes* · *Approval*
    const posture = byTestId(canvasElement, "tool-inspector-posture").textContent ?? "";
    if (!/Makes changes/.test(posture) || !/Approval/.test(posture)) throw new globalThis.Error(\`the posture line: \${posture}\`);
    // : the technical lines are closed until the one toggle opens them
    if (canvasElement.querySelector('[data-testid^="tool-action-technical-"]')) throw new globalThis.Error("a technical line is open by default");
    byTestId(canvasElement, "tool-inspector-technical");
  }
}`,...A.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "technical-open",
  play: async ({
    canvasElement
  }) => {
    const toggle = byTestId(canvasElement, "tool-inspector-technical");
    toggle.click();
    await new Promise(r => setTimeout(r, 0));
    if (toggle.getAttribute("aria-expanded") !== "true") throw new globalThis.Error("the toggle did not open");
    const lines = canvasElement.querySelectorAll('[data-testid^="tool-action-technical-"]');
    if (lines.length !== SLACK.actions.length) throw new globalThis.Error(\`\${lines.length} technical lines for \${SLACK.actions.length} actions\`);
    if (!/POST \\/chat\\.postMessage/.test(lines[0]?.textContent ?? "")) throw new globalThis.Error(\`the technical line: \${lines[0]?.textContent}\`);
  }
}`,...p.parameters?.docs?.source},description:{story:"The one *Technical* toggle (): every action's `METHOD /path · operationId` opens and closes together.",...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "descriptions",
  args: {
    row: CALENDAR_LONG,
    usedBy: USED_BY_NONE
  },
  play: async ({
    canvasElement
  }) => {
    const summaries = canvasElement.querySelectorAll(".nexus-tool-inspector-action-summary");
    if (summaries.length !== CALENDAR_LONG.actions.length) throw new globalThis.Error(\`a description that says more than its name is missing (\${summaries.length})\`);
  }
}`,...h.parameters?.docs?.source},description:{story:"A registry row whose descriptions say more than the names: the description is drawn; a row whose description repeats the name is not ().",...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "platform",
  args: {
    row: PLATFORM_ROWS[4]!,
    usedBy: USED_BY_NONE
  },
  play: async ({
    canvasElement
  }) => {
    const mark = canvasElement.querySelector('[data-testid="tool-row-mark-tool-web"]');
    if (!mark || mark.getAttribute("data-kind") !== "icon") throw new globalThis.Error("the avatar is not the kind's glyph");
    if (canvasElement.querySelector('[data-testid="tool-inspector-open-core"]')) throw new globalThis.Error("Open in Core on a platform collection");
    if (!/Read-only/.test(byTestId(canvasElement, "tool-inspector-posture").textContent ?? "")) throw new globalThis.Error("the posture line is missing Read-only");
  }
}`,...u.parameters?.docs?.source},description:{story:"A platform collection: the kind's Lucide glyph as the avatar, *Always available*, no *Open in Core*; a repeated description is not drawn.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "blocked",
  args: {
    row: PLATFORM_ROWS[2]!,
    usedBy: USED_BY_NONE
  },
  play: async ({
    canvasElement
  }) => {
    const chip = byTestId(canvasElement, "tool-inspector-state");
    if (!chip.classList.contains("nexus-cc-chip")) throw new globalThis.Error("the reason is not a chip");
    if (!/governance/.test(chip.textContent ?? "")) throw new globalThis.Error(\`the reason is not the server's words: \${chip.textContent}\`);
    if (canvasElement.querySelector('[data-testid="tool-inspector-add-to-agent"]')) throw new globalThis.Error("Add to an agent on a blocked row");
  }
}`,...m.parameters?.docs?.source},description:{story:"A collection blocked by governance: the server's words as a chip in *Connection*, nothing to press ().",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "connected-yours",
  args: {
    row: GMAIL,
    usedBy: [PROJECT_AGENTS[1]]
  },
  play: async ({
    canvasElement
  }) => {
    byTestId(canvasElement, "tool-inspector-try");
    if (canvasElement.querySelector('[data-testid="tool-inspector-open-core"]')) throw new globalThis.Error("Open in Core for a non-admin");
  }
}`,...g.parameters?.docs?.source},description:{story:"A read-only tool the person connected: *Try it*, no *Open in Core* (not an admin).",...g.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "awaiting",
  args: {
    row: PORT_WEATHER,
    usedBy: USED_BY_NONE,
    request: REQUEST_AWAITING
  },
  play: async ({
    canvasElement
  }) => {
    byTestId(canvasElement, "tool-inspector-request");
    byTestId(canvasElement, "tool-inspector-used-by-none");
    if (canvasElement.querySelector('[data-testid="tool-inspector-add-to-agent"]')) throw new globalThis.Error("Add to an agent on a tool awaiting review");
  }
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "needs-changes",
  args: {
    row: SUPPLIER_FEED,
    usedBy: USED_BY_NONE,
    request: REQUEST_NEEDS_CHANGES
  }
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "not-connected",
  args: {
    row: TEAMS_NOT_CONNECTED,
    usedBy: USED_BY_NONE
  },
  play: async ({
    canvasElement
  }) => {
    byTestId(canvasElement, "tool-inspector-connect");
  }
}`,...y.parameters?.docs?.source},description:{story:"A user-delegated provider the person has not consented to: *Connect Teams →* in the Connection section.",...y.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "above-ceiling",
  args: {
    row: SNOWFLAKE,
    usedBy: USED_BY_NONE
  },
  play: async ({
    canvasElement
  }) => {
    const chip = byTestId(canvasElement, "tool-inspector-state");
    if (!chip.classList.contains("nexus-cc-chip")) throw new globalThis.Error("the reason is not a chip");
    if (canvasElement.querySelector(".nexus-cc-inspector-actions")) throw new globalThis.Error("a footer on a row above the ceiling");
    // : the ceiling is a chip of the posture line, once
    const ceilings = [...canvasElement.querySelectorAll(".nexus-cc-chip")].filter(c => /≤/.test(c.textContent ?? ""));
    if (ceilings.length !== 1) throw new globalThis.Error(\`the ceiling chip is drawn \${ceilings.length} times\`);
  }
}`,...w.parameters?.docs?.source},description:{story:"Above the Project's ceiling: the reason is a chip, the footer has nothing to press ().",...w.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "add-to-agent",
  play: async ({
    canvasElement
  }) => {
    byTestId(canvasElement, "tool-inspector-add-to-agent").click();
    await new Promise(r => setTimeout(r, 0));
    byTestId(canvasElement, "tool-inspector-choose");
    byTestId(canvasElement, "tool-inspector-agent");
    byTestId(canvasElement, "tool-inspector-add");
  }
}`,...T.parameters?.docs?.source},description:{story:"The primary pressed: the Project's agents in a `Select`, *Add* and the quiet *Cancel*.",...T.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "uk",
  globals: {
    locale: "uk"
  },
  args: {
    row: PORT_WEATHER,
    usedBy: USED_BY_NONE,
    request: REQUEST_AWAITING
  }
}`,...N.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "narrow",
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  args: {
    narrow: true
  },
  decorators: [Story => <div style={{
    maxWidth: 320
  }}><Story /></div>]
}`,...E.parameters?.docs?.source},description:{story:"Below 720 px the panel is the screen (draft §7).",...E.parameters?.docs?.description}}};export{w as AboveCeiling,T as AddToAgent,C as Awaiting,m as Blocked,A as Connected,g as ConnectedYours,h as Descriptions,E as Narrow,j as NeedsChanges,y as NotConnected,u as Platform,p as TechnicalOpen,N as Uk,Me as __namedExportsOrder,Ue as default};
