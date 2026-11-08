import{ak as oe,r as I,s as te,j as t,I as re,c as ae,w as ne,v as g,ad as B,ab as P,q as F,a3 as K,a4 as se,a as p,B as ie}from"./iframe-C_4ax-Jm.js";import"./harness-p7-wY8XY.js";import{A as de}from"./AskBar-D6qFedOb.js";import"./AskPanel-DKkH7ynl.js";import"./AskSurface-B8PUJCZ9.js";import"./ConversationFrame-crdlsIAN.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./HandOver-BZSm7-D2.js";import"./LobbyThread-9xK7Bd9J.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import{m as le,r as ce,o as pe,R as me,e as ue}from"./ToolsScreen-ERDdecc8.js";import{D as m,c as he}from"./capabilityDoor045Fixtures-D3yTuRAC.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */import"./VoiceWaves-CVFNr488.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./BrandMark-ZJnyD0IE.js";import"./Trace-BSKaAXMd.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./users-w3fldoSO.js";import"./boxes-Cqxx_HWk.js";import"./workflow-BGMWCDzG.js";import"./factory-Ck7b_c89.js";import"./building-2-GerxkJzZ.js";import"./globe-DcMfC0yC.js";import"./database-BGWOjs-M.js";import"./file-text-D2w4_mYA.js";import"./pencil-CCPuQVYt.js";import"./arrow-up-right-Ba_U-eY4.js";import"./play-D-gzWo7v.js";const ge=["connected","platform","custom"];function L({agentName:o,rows:i,state:n,viewer:c,ask:a,onAdd:z,onConnect:H,onConnectNewApi:O,onAskAdmin:N,onClose:W,onRetry:X,returnFocusTo:U}){const{t:r}=oe(),[h,V]=I.useState(""),D=I.useMemo(()=>i.filter(e=>le(e,h)),[i,h]),M=I.useMemo(()=>ce(D),[D]),G=te(i.length,h.length>0),E=n==="offline",Q=e=>{const d=e.state;return d.kind==="awaiting_review"?t.jsx(p,{tone:"warn",size:"xs",children:r("agent.tools.door.reason.awaiting_review")}):d.kind==="needs_changes"?t.jsx(p,{tone:"warn",size:"xs",children:r("agent.tools.door.reason.needs_changes")}):d.kind==="above_ceiling"?t.jsx(p,{tone:"muted",size:"xs",testId:`door-reason-${e.id}`,children:r("agent.tools.door.reason.above_ceiling")}):d.kind==="blocked"?t.jsx(p,{tone:"muted",size:"xs",testId:`door-reason-${e.id}`,children:r(d.reason)}):d.kind==="not_connected"?d.userDelegated&&e.can.connect&&!c?t.jsx(g,{onClick:()=>H(e),disabled:E,"data-testid":`door-connect-${e.id}`,children:r("agent.tools.door.row.connect",{provider:d.provider})}):t.jsx(p,{tone:"muted",size:"xs",testId:`door-reason-${e.id}`,children:r(d.userDelegated||c?"agent.tools.door.reason.not_connected":"agent.tools.door.reason.needs_admin")}):c||!e.can.add?null:t.jsx(ie,{size:"sm",onClick:()=>z(e),disabled:E,"data-testid":`door-add-${e.id}`,children:r("agent.tools.door.row.add")})},Y=e=>{const d=e.actions.some(ee=>ee.approval);return t.jsxs("span",{className:"nexus-chips nexus-tool-door-chips",children:[t.jsx(p,{size:"xs",tone:"muted",children:r(ue(e.actions)==="change"?"agent.tools.door.chip.changes":"agent.tools.door.chip.read_only")}),d?t.jsx(p,{size:"xs",tone:"muted",children:r("agent.tools.door.chip.approval")}):null,e.ceiling?t.jsx(p,{size:"xs",tone:"muted",children:r("agent.tools.door.chip.ceiling",{ceiling:e.ceiling})}):null]})},J=()=>n==="loading"?t.jsxs("div",{className:"nexus-tool-door-loading","aria-busy":"true","data-testid":"door-loading",children:[t.jsx(B,{label:r("agent.tools.door.loading")}),t.jsx("ul",{className:"nexus-list nexus-tool-door-skeleton","aria-hidden":!0,children:[0,1,2,3,4].map(e=>t.jsx("li",{},e))})]}):n==="error"?t.jsx(P,{kind:"error",body:r("agent.tools.door.error.body"),onRetry:X}):n==="empty"||i.length===0?t.jsx(F,{title:r("agent.tools.door.empty.title"),starting:c?[]:[{label:r("agent.tools.door.connect_new"),onClick:O},{label:r("agent.tools.door.ask_admin"),onClick:N}],testId:"door-empty"}):D.length===0?t.jsx(F,{variant:"inline",title:r("agent.tools.door.search.none",{query:h}),testId:"door-no-match"}):ge.filter(e=>M[e].length>0).map(e=>t.jsxs("div",{className:"nexus-tool-door-group","data-group":e,children:[t.jsx("div",{className:"nexus-tool-door-group-label","aria-hidden":!0,children:r(`agent.tools.door.group.${e}`)}),t.jsx(K,{label:r(`agent.tools.door.group.${e}`),testId:`door-group-${e}`,children:pe(M[e]).map($)})]},e)),$=e=>t.jsx(se,{testId:`door-row-${e.id}`,title:t.jsxs("span",{className:"nexus-row-flex nexus-tool-door-name",children:[t.jsx(me,{row:e}),t.jsx("span",{className:"is-truncate",title:e.provider===e.name?e.name:`${e.provider} · ${e.name}`,children:e.provider===e.name?e.name:`${e.provider} · ${e.name}`})]}),aside:t.jsxs(t.Fragment,{children:[Y(e),Q(e)]})},e.id),Z=()=>{if(!a||a.state==="idle")return null;if(a.state==="asking")return t.jsx("div",{className:"nexus-tool-door-ask-answer","data-state":"asking","aria-busy":"true","data-testid":"door-ask-loading",children:t.jsx(B,{label:r("agent.tools.door.ask.loading",{agent:o})})});if(a.state==="error")return t.jsxs("div",{className:"nexus-tool-door-ask-answer","data-state":"error","data-testid":"door-ask-error",children:[t.jsx(P,{kind:"error",body:r("agent.tools.door.ask.error"),onRetry:a.onRetry}),t.jsx(g,{onClick:a.onShowAll,"data-testid":"door-ask-show-all",children:r("agent.tools.door.ask.show_all")})]});const e=a.answer;if(!e)return null;const d=r("agent.tools.door.ask.answer_label",{text:a.text??""});return t.jsxs("div",{className:"nexus-tool-door-ask-answer","data-state":"answered","data-testid":"door-ask-answer",children:[t.jsx("div",{className:"nexus-tool-door-group-label","aria-hidden":!0,children:d}),e.nothingHere||e.rows.length===0?t.jsx(F,{title:r("agent.tools.door.ask.nothing"),starting:[...e.doors.connectNewApi?[{label:r("agent.tools.door.connect_new"),onClick:O}]:[],...e.doors.askAdministrator?[{label:r("agent.tools.door.ask_admin"),onClick:N}]:[]],testId:"door-ask-nothing"}):t.jsx(K,{label:d,testId:"door-ask-rows",children:e.rows.map($)}),t.jsx(g,{onClick:a.onShowAll,"data-testid":"door-ask-show-all",children:r("agent.tools.door.ask.show_all")})]})};return t.jsx(re,{title:r("agent.tools.door.title",{agent:o}),onClose:W,returnFocusTo:U,testId:"add-tool-door",footer:c||n==="empty"||i.length===0?void 0:t.jsxs(ne,{label:r("agent.tools.door.title",{agent:o}),className:"is-flush",testId:"door-actions",children:[t.jsx(g,{onClick:O,"data-testid":"door-connect-new",children:r("agent.tools.door.connect_new")}),t.jsx(g,{onClick:N,"data-testid":"door-ask-admin",children:r("agent.tools.door.ask_admin")})]}),children:t.jsxs("div",{className:"nexus-tool-door","data-state":n,"data-viewer":c?"true":void 0,children:[a&&!c&&n!=="loading"&&n!=="error"?t.jsx("div",{className:"nexus-tool-door-ask","data-state":a.state,"data-testid":"door-ask-line",children:t.jsx(de,{placeholder:r("agent.tools.door.ask_placeholder",{agent:o}),ariaLabel:r("agent.tools.door.ask.label",{agent:o}),value:a.value,onChange:a.onChange,onSend:a.onSend,running:a.state==="asking",offline:E,testId:"door-ask"})}):null,G&&n!=="loading"&&n!=="error"&&(!a||a.state==="idle")?t.jsx(ae,{value:h,onChange:V,placeholder:r("agent.tools.door.search"),label:r("agent.tools.door.search")}):null,E?t.jsx("p",{className:"nexus-tool-door-offline",role:"status","data-testid":"door-offline",children:r("agent.tools.door.offline")}):null,a&&a.state!=="idle"&&n!=="loading"&&n!=="error"?Z():J()]})})}L.__docgenInfo={description:"The capability door (DS-6901 ·  S0, proposed): *Add tool* opens an Inspector over the Tools tab with what the\norganization already has — CONNECTED · PLATFORM · CUSTOM — one row per tool, one trailing control per row as the\nserver's state word says (`Add` · `Connect ⟨provider⟩ →` · a reason chip · `Awaiting review`), and the quiet way\nout at the bottom (*Connect a new API · Ask an administrator*). The search appears past twelve rows (). The\ncomponent renders a view model; nothing here reads the network (S2 wires it).",methods:[],displayName:"AddToolDoor",props:{agentName:{required:!0,tsType:{name:"string"},description:""},rows:{required:!0,tsType:{name:"Array",elements:[{name:"ToolRowModel"}],raw:"ToolRowModel[]"},description:""},state:{required:!0,tsType:{name:"union",raw:'"loading" | "populated" | "empty" | "error" | "offline"',elements:[{name:"literal",value:'"loading"'},{name:"literal",value:'"populated"'},{name:"literal",value:'"empty"'},{name:"literal",value:'"error"'},{name:"literal",value:'"offline"'}]},description:""},viewer:{required:!1,tsType:{name:"boolean"},description:"A viewer sees the list only — no *Add*, no action row (: nothing greyed out)."},ask:{required:!1,tsType:{name:"AddToolDoorAsk"},description:"S4 (): the Ask line at the top — *Ask ⟨agent⟩ for a tool* — and its answer in place of the list."},onAdd:{required:!0,tsType:{name:"signature",type:"function",raw:"(row: ToolRowModel) => void",signature:{arguments:[{type:{name:"ToolRowModel"},name:"row"}],return:{name:"void"}}},description:""},onConnect:{required:!0,tsType:{name:"signature",type:"function",raw:"(row: ToolRowModel) => void",signature:{arguments:[{type:{name:"ToolRowModel"},name:"row"}],return:{name:"void"}}},description:""},onConnectNewApi:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onAskAdmin:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},returnFocusTo:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:""}}};const eo={title:"Apps/NexChat/Add tool door",component:L,parameters:{ds:"DS-6901",layout:"fullscreen",a11y:{config:{rules:[{id:"heading-order",enabled:!1}]}},docs:{description:{component:`DS-6901 Capability door ( S0, proposed — draft §4.1): *Add tool* opens the Inspector with what the
organization already has, grouped CONNECTED · PLATFORM · CUSTOM, one trailing control per row as the server's state
word says; the quiet way out at the bottom. Synthetic providers, synthetic marks ().`}}},args:{agentName:"Port Weather Watch",rows:m,state:"populated",onAdd:()=>{},onConnect:()=>{},onConnectNewApi:()=>{},onAskAdmin:()=>{},onClose:()=>{},onRetry:()=>{}}};function we({children:o,narrow:i}){return t.jsx("div",{style:i?{display:"flex",minHeight:480,maxWidth:320}:{display:"flex",minHeight:480,justifyContent:"flex-end"},children:o})}const l=o=>i=>t.jsx(we,{narrow:o,children:t.jsx(i,{})});function s(o,i,n,c){const a=o.querySelectorAll(i).length;if(a<n)throw new globalThis.Error(`expected ${n}+ ${c}, found ${a}`)}const T={name:"populated",decorators:[l()],play:async({canvasElement:o})=>{if(s(o,'button[data-testid^="door-add-"]',1,"Add buttons"),s(o,'[role="dialog"], aside[aria-label]',1,"Inspector"),!o.querySelector('[data-testid="door-connect-new"]'))throw new globalThis.Error("the action row's Connect a new API is missing");const i=o.querySelector('[data-testid="tool-row-mark-web-search"]');if(!i||i.getAttribute("data-kind")!=="icon")throw new globalThis.Error("the platform row's mark is not its kind's glyph");const n=[...o.querySelectorAll('[data-group="custom"] [data-testid^="door-row-"]')];if(n.length&&n.at(-1)?.getAttribute("data-testid")!=="door-row-snowflake-query")throw new globalThis.Error(`the barred row is not last in CUSTOM: ${n.at(-1)?.getAttribute("data-testid")}`)}},j={name:"empty",args:{rows:[],state:"empty"},decorators:[l()]},_={name:"loading",args:{state:"loading"},decorators:[l()]},R={name:"error",args:{state:"error"},decorators:[l()]},w={name:"viewer",args:{viewer:!0},decorators:[l()],play:async({canvasElement:o})=>{if(o.querySelector('button[data-testid^="door-add-"]'))throw new globalThis.Error("a viewer sees an Add button");if(o.querySelector('[data-testid="door-actions"]'))throw new globalThis.Error("a viewer sees the action row")}},y={name:"connect-provider",args:{rows:m.filter(o=>o.id==="slack-post"||o.id==="gmail-read")},decorators:[l()],play:async({canvasElement:o})=>s(o,'[data-testid="door-connect-slack-post"]',1,"Connect Slack → link")},k={name:"reason-chip",args:{rows:m.filter(o=>o.id==="snowflake-query"||o.id==="web-search")},decorators:[l()],play:async({canvasElement:o})=>{if(s(o,'[data-testid="door-reason-snowflake-query"]',1,"reason chip"),o.querySelector('[data-testid="door-add-snowflake-query"]'))throw new globalThis.Error("a blocked row has an Add button")}},f={name:"search-past-12",args:{rows:he},decorators:[l()],play:async({canvasElement:o})=>s(o,'input[type="search"]',1,"search field")},C={value:"",onChange:()=>{},onSend:()=>{},onShowAll:()=>{},onRetry:()=>{}},u="read the port's weather and mail the forecast",x={name:"ask-idle",args:{ask:{...C,state:"idle"}},decorators:[l()],play:async({canvasElement:o})=>{s(o,'[data-testid="door-ask-line"] [role="search"]',1,"the Ask line"),s(o,'button[data-testid^="door-add-"]',1,"the list is still there")}},v={name:"ask-asking",args:{ask:{...C,value:u,state:"asking",text:u}},decorators:[l()],play:async({canvasElement:o})=>s(o,'[data-testid="door-ask-loading"][aria-busy="true"]',1,"progress")},A={name:"ask-answer",args:{ask:{...C,value:u,state:"answered",text:u,answer:{rows:[m[5],m[0],m[1]],nothingHere:!1,doors:{connectNewApi:!1,askAdministrator:!0}}}},decorators:[l()],play:async({canvasElement:o})=>{if(s(o,'[data-testid="door-ask-answer"] [data-testid^="door-row-"]',3,"ranked rows"),s(o,'[data-testid="door-ask-answer"] button[data-testid^="door-add-"]',1,"Add on a ranked row"),s(o,'[data-testid="door-ask-show-all"]',1,"Show all"),o.querySelector('[data-testid^="door-group-"]'))throw new globalThis.Error("the grouped list is shown under the answer")}},S={name:"ask-nothing-here",args:{ask:{...C,value:"book a flight",state:"answered",text:"book a flight",answer:{rows:[],nothingHere:!0,doors:{connectNewApi:!0,askAdministrator:!0}}}},decorators:[l()],play:async({canvasElement:o})=>{s(o,'[data-testid="door-ask-nothing"]',1,"the nothing-here line"),s(o,'[data-testid="door-ask-nothing"] button',2,"the two doors")}},b={name:"ask-error",args:{ask:{...C,value:u,state:"error",text:u}},decorators:[l()],play:async({canvasElement:o})=>{s(o,'[data-testid="door-ask-error"]',1,"the error line"),s(o,'[data-testid="door-ask-show-all"]',1,"Show all")}},q={name:"narrow",parameters:{viewport:{defaultViewport:"mobile1"}},decorators:[l(!0)]},oo=["Populated","Empty","Loading","Error","Viewer","ConnectProvider","ReasonChip","SearchPast12","AskIdle","AskAsking","AskAnswer","AskNothingHere","AskError","Narrow"];T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "populated",
  decorators: [inFrame()],
  play: async ({
    canvasElement
  }) => {
    // the primary act of the door: a real button named Add on a row the person may bind
    expectControls(canvasElement, 'button[data-testid^="door-add-"]', 1, "Add buttons");
    expectControls(canvasElement, '[role="dialog"], aside[aria-label]', 1, "Inspector");
    if (!canvasElement.querySelector('[data-testid="door-connect-new"]')) throw new globalThis.Error("the action row's Connect a new API is missing");
    // : a platform row carries the Lucide glyph of its kind, never a monogram
    const mark = canvasElement.querySelector('[data-testid="tool-row-mark-web-search"]');
    if (!mark || mark.getAttribute("data-kind") !== "icon") throw new globalThis.Error("the platform row's mark is not its kind's glyph");
    // : the barred row is last in its group
    const custom = [...canvasElement.querySelectorAll('[data-group="custom"] [data-testid^="door-row-"]')];
    if (custom.length && custom.at(-1)?.getAttribute("data-testid") !== "door-row-snowflake-query") throw new globalThis.Error(\`the barred row is not last in CUSTOM: \${custom.at(-1)?.getAttribute("data-testid")}\`);
  }
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "empty",
  args: {
    rows: [],
    state: "empty"
  },
  decorators: [inFrame()]
}`,...j.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "loading",
  args: {
    state: "loading"
  },
  decorators: [inFrame()]
}`,..._.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "error",
  args: {
    state: "error"
  },
  decorators: [inFrame()]
}`,...R.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "viewer",
  args: {
    viewer: true
  },
  decorators: [inFrame()],
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('button[data-testid^="door-add-"]')) throw new globalThis.Error("a viewer sees an Add button");
    if (canvasElement.querySelector('[data-testid="door-actions"]')) throw new globalThis.Error("a viewer sees the action row");
  }
}`,...w.parameters?.docs?.source},description:{story:"A viewer: the rows, no *Add*, no action row — nothing greyed out ().",...w.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "connect-provider",
  args: {
    rows: DOOR_ROWS.filter(r => r.id === "slack-post" || r.id === "gmail-read")
  },
  decorators: [inFrame()],
  play: async ({
    canvasElement
  }) => expectControls(canvasElement, '[data-testid="door-connect-slack-post"]', 1, "Connect Slack → link")
}`,...y.parameters?.docs?.source},description:{story:"A user-delegated provider the person has not connected: the row's one control is *Connect Slack →*.",...y.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "reason-chip",
  args: {
    rows: DOOR_ROWS.filter(r => r.id === "snowflake-query" || r.id === "web-search")
  },
  decorators: [inFrame()],
  play: async ({
    canvasElement
  }) => {
    expectControls(canvasElement, '[data-testid="door-reason-snowflake-query"]', 1, "reason chip");
    if (canvasElement.querySelector('[data-testid="door-add-snowflake-query"]')) throw new globalThis.Error("a blocked row has an Add button");
  }
}`,...k.parameters?.docs?.source},description:{story:"Above the Project's ceiling: the reason is a chip, there is no button ().",...k.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "search-past-12",
  args: {
    rows: DOOR_ROWS_MANY
  },
  decorators: [inFrame()],
  play: async ({
    canvasElement
  }) => expectControls(canvasElement, 'input[type="search"]', 1, "search field")
}`,...f.parameters?.docs?.source},description:{story:"Fourteen rows: the search appears ( — past twelve).",...f.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "ask-idle",
  args: {
    ask: {
      ...ASK_BASE,
      state: "idle"
    }
  },
  decorators: [inFrame()],
  play: async ({
    canvasElement
  }) => {
    expectControls(canvasElement, '[data-testid="door-ask-line"] [role="search"]', 1, "the Ask line");
    expectControls(canvasElement, 'button[data-testid^="door-add-"]', 1, "the list is still there");
  }
}`,...x.parameters?.docs?.source},description:{story:"S4 (): the Ask line at the top of the door — the list underneath until the person asks.",...x.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "ask-asking",
  args: {
    ask: {
      ...ASK_BASE,
      value: ASK_TEXT,
      state: "asking",
      text: ASK_TEXT
    }
  },
  decorators: [inFrame()],
  play: async ({
    canvasElement
  }) => expectControls(canvasElement, '[data-testid="door-ask-loading"][aria-busy="true"]', 1, "progress")
}`,...v.parameters?.docs?.source},description:{story:"S4 (): the Ask line is asking — one line of progress in place of the list.",...v.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "ask-answer",
  args: {
    ask: {
      ...ASK_BASE,
      value: ASK_TEXT,
      state: "answered",
      text: ASK_TEXT,
      answer: {
        rows: [DOOR_ROWS[5]!, DOOR_ROWS[0]!, DOOR_ROWS[1]!],
        nothingHere: false,
        doors: {
          connectNewApi: false,
          askAdministrator: true
        }
      }
    }
  },
  decorators: [inFrame()],
  play: async ({
    canvasElement
  }) => {
    expectControls(canvasElement, '[data-testid="door-ask-answer"] [data-testid^="door-row-"]', 3, "ranked rows");
    expectControls(canvasElement, '[data-testid="door-ask-answer"] button[data-testid^="door-add-"]', 1, "Add on a ranked row");
    expectControls(canvasElement, '[data-testid="door-ask-show-all"]', 1, "Show all");
    if (canvasElement.querySelector('[data-testid^="door-group-"]')) throw new globalThis.Error("the grouped list is shown under the answer");
  }
}`,...A.parameters?.docs?.source},description:{story:`S4 (, SC-4501): the answer — the ranked rows of the list, best first, with the same controls (Add · Connect ·
a reason chip); *Show all tools* returns to the list.`,...A.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "ask-nothing-here",
  args: {
    ask: {
      ...ASK_BASE,
      value: "book a flight",
      state: "answered",
      text: "book a flight",
      answer: {
        rows: [],
        nothingHere: true,
        doors: {
          connectNewApi: true,
          askAdministrator: true
        }
      }
    }
  },
  decorators: [inFrame()],
  play: async ({
    canvasElement
  }) => {
    expectControls(canvasElement, '[data-testid="door-ask-nothing"]', 1, "the nothing-here line");
    expectControls(canvasElement, '[data-testid="door-ask-nothing"] button', 2, "the two doors");
  }
}`,...S.parameters?.docs?.source},description:{story:"S4 (, SC-4502): nothing here — one line and the doors; the same answer for a tool that exists where she may not see it.",...S.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "ask-error",
  args: {
    ask: {
      ...ASK_BASE,
      value: ASK_TEXT,
      state: "error",
      text: ASK_TEXT
    }
  },
  decorators: [inFrame()],
  play: async ({
    canvasElement
  }) => {
    expectControls(canvasElement, '[data-testid="door-ask-error"]', 1, "the error line");
    expectControls(canvasElement, '[data-testid="door-ask-show-all"]', 1, "Show all");
  }
}`,...b.parameters?.docs?.source},description:{story:"S4 (): the suggestion could not be read — one line, *Try again*, *Show all tools*.",...b.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "narrow",
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  decorators: [inFrame(true)]
}`,...q.parameters?.docs?.source}}};export{A as AskAnswer,v as AskAsking,b as AskError,x as AskIdle,S as AskNothingHere,y as ConnectProvider,j as Empty,R as Error,_ as Loading,q as Narrow,T as Populated,k as ReasonChip,f as SearchPast12,w as Viewer,oo as __namedExportsOrder,eo as default};
