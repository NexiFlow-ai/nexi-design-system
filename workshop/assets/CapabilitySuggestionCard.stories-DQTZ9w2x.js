import{ak as Q,r as X,j as n,F as Y,B as L,v as E,_ as Z,a as V,w as I}from"./iframe-C_4ax-Jm.js";import"./harness-p7-wY8XY.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */function ee(e){switch(e){case"drafted":return"agent.tools.request.chip.drafted";case"awaiting_approval":return"agent.tools.request.status.awaiting";case"approved":return"agent.tools.request.chip.approved";case"bound":return"agent.tools.request.chip.connected";case"rejected":return"agent.tools.request.chip.changes";case"expired":return"agent.tools.request.status.expired";case"cancelled":return"agent.tools.request.status.cancelled";default:return"agent.tools.request.chip.drafted"}}function ae(e){switch(e){case void 0:return null;case"classification":return"turn.capability.reason.ceiling";case"connection":return"turn.capability.reason.not_connected";default:return"turn.capability.reason.needs_admin"}}function G({view:e,onAction:o,testId:r="capability-suggestion"}){const{t:i}=Q(),T=X.useId(),P=`${T}-title`,u=a=>()=>o?.(a),H=e.nothingHere||e.rows.length===0,K=e.doors.connectNewApi||e.doors.askAdministrator,U=e.asking?"asking":H?"nothing_found":"done",W=a=>{const c=ae(a.reason);if(a.act==="add")return n.jsx(L,{size:"sm",onClick:u({kind:"add",row:a}),disabled:e.offline||e.busyRow===a.tool_uri,"aria-busy":e.busyRow===a.tool_uri||void 0,"data-testid":`${r}-add-${a.tool_id}`,children:e.agentName?i("turn.action.add_tool_to",{agent:e.agentName}):i("turn.action.add_tool")});if(a.act==="connect")return n.jsx(E,{onClick:u({kind:"connect",row:a}),disabled:e.offline,"data-testid":`${r}-connect-${a.tool_id}`,children:i("agent.tools.door.row.connect",{provider:a.provider??a.name})});const F=c??(a.act==="needs_admin"?"turn.capability.reason.needs_admin":null);return F?n.jsx(V,{tone:"muted",size:"xs",testId:`${r}-reason-${a.tool_id}`,children:i(F)}):null},J=a=>{a.preventDefault(),o?.({kind:"send"})};return n.jsxs("section",{className:"nexus-flow-turn nexus-turn-card nexus-capability-card",role:"region","aria-labelledby":P,"data-testid":r,"data-state":U,"data-offline":e.offline?"true":void 0,children:[n.jsx("div",{className:"nexus-live-head nexus-turn-head",children:n.jsx("strong",{id:P,className:"nexus-flow-turn-name","data-testid":`${r}-title`,children:i("turn.capability.title")})}),e.asking?n.jsxs("form",{className:"nexus-capability-ask",onSubmit:J,noValidate:!0,"aria-busy":e.asking.sending||void 0,"data-testid":`${r}-ask`,children:[n.jsx(Y,{id:`${T}-note`,label:i("agent.tools.setup.ask.note_label"),hint:i("agent.tools.ask.hint"),required:!0,error:e.asking.error,children:a=>n.jsx("textarea",{...a,className:"nexus-input",rows:3,maxLength:1e3,value:e.asking?.note??"",onChange:c=>o?.({kind:"note",value:c.target.value}),disabled:e.asking?.sending,autoFocus:!0,"data-testid":`${r}-note`})}),n.jsxs("div",{className:"nexus-capability-ask-actions",children:[n.jsx(L,{type:"submit",variant:"primary",size:"toolbar",disabled:e.asking.sending||e.offline,"data-testid":`${r}-send`,children:i(e.asking.sending?"agent.tools.setup.footer.sending":"agent.tools.setup.footer.send")}),n.jsx(E,{tone:"meta",onClick:u({kind:"cancel"}),disabled:e.asking.sending,"data-testid":`${r}-cancel`,children:i("action.cancel")})]})]}):H?n.jsx("p",{className:"nexus-turn-line",role:"status","data-testid":`${r}-nothing`,children:i("turn.capability.nothing_here")}):n.jsx("ul",{className:"nexus-capability-rows","aria-label":i("turn.capability.title"),"data-testid":`${r}-rows`,children:e.rows.map(a=>{const c=a.provider&&a.provider!==a.name?i("turn.capability.row",{provider:a.provider,name:a.name}):a.name;return n.jsxs("li",{className:"nexus-capability-row","data-act":a.act,"data-testid":`${r}-row-${a.tool_id}`,children:[n.jsx(Z,{name:a.provider??a.name,provider:a.provider_slug,size:"sm",testId:`${r}-mark-${a.tool_id}`}),n.jsx("span",{className:"nexus-capability-row-name is-truncate",title:c,children:c}),n.jsx("span",{className:"nexus-capability-row-act",children:W(a)})]},a.tool_uri)})}),e.receipt?n.jsxs("p",{className:"nexus-live-receipt-line nexus-capability-receipt",role:"status","data-testid":`${r}-receipt`,"data-kind":e.receipt.kind,children:[n.jsx("span",{className:"nexus-live-receipt-glyph","data-status":e.receipt.kind==="add_failed"?"failed":"done","aria-hidden":!0,children:e.receipt.kind==="add_failed"?"✕":"✓"}),e.receipt.kind==="added"?i("turn.capability.added",{agent:e.receipt.agent}):e.receipt.kind==="sent"?i("turn.capability.request_sent",{project:e.projectName}):i("turn.capability.add_failed",{reason:e.receipt.reason})]}):null,e.requests?.length?n.jsx("ul",{className:"nexus-capability-requests","aria-label":i("turn.capability.requests"),"data-testid":`${r}-requests`,children:e.requests.map(a=>n.jsxs("li",{className:"nexus-turn-line nexus-capability-request","data-status":a.status,"data-testid":`${r}-request-${a.uri.split("/").pop()}`,children:[n.jsx(V,{tone:a.status==="rejected"||a.status==="expired"||a.status==="cancelled"?"warn":a.status==="approved"||a.status==="bound"?"ok":"muted",size:"xs",children:a.status==="approved"||a.status==="bound"?a.agentName?i("agent.tools.request.status.approved",{agent:a.agentName}):i("agent.tools.request.chip.approved"):i(ee(a.status))}),a.href?n.jsx("a",{className:"nexus-turn-link",href:a.href,"data-testid":`${r}-request-open`,children:i("action.open")}):null]},a.uri))}):null,!e.asking&&K?n.jsxs(I,{className:"is-flush",label:i("turn.capability.title"),testId:`${r}-doors`,children:[e.doors.connectNewApi?n.jsx(E,{tone:"quiet",onClick:u({kind:"connect_new_api"}),disabled:e.offline,"data-testid":`${r}-door-connect_new_api`,children:i("turn.action.connect_new_api")}):null,e.doors.askAdministrator?n.jsx(E,{tone:"quiet",onClick:u({kind:"ask_administrator"}),disabled:e.offline,"data-testid":`${r}-door-ask_administrator`,children:i("turn.action.ask_administrator")}):null]}):null]})}G.__docgenInfo={description:` S4 ( ·  · …4572, DS-5024 proposed): **the chat's capability card** — the \`capability\`
arm's answer when the Project has no tool for the ask. The same object the agent's *Add tool* door reads
(\`capability-suggestion\`, one ranking, one decision row): at most five rows of the Project's projection, best first,
each a \`ProviderMark\` · *Provider · Name* · the one act the state word allows the person — *Add to ⟨agent⟩* (a
builder) · *Connect ⟨provider⟩ →* (a \`user_delegated\` connection) · *Needs an administrator* (a reason chip, no
button) — or *Nothing here does that yet* in one line; then the card's last door: *Connect a new API* (a builder → the
setup page; the thread waits) or *Ask an administrator* (a member → the  field **in place of the list**: one
note, *Send for review*, *Cancel*). The receipt is one line; the request's face follows beneath (*Awaiting review* →
the decision). A viewer gets the same rows with no act and no door; the sentence is nowhere in the card ().
Presentational: a view model in, actions out.`,methods:[],displayName:"CapabilitySuggestionCard",props:{view:{required:!0,tsType:{name:"CapabilityCardView"},description:""},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(action: CapabilityCardAction) => void",signature:{arguments:[{type:{name:"union",raw:`| { kind: "add"; row: CapabilitySuggestionRow }
| { kind: "connect"; row: CapabilitySuggestionRow }
| { kind: "connect_new_api" }
| { kind: "ask_administrator" }
| { kind: "note"; value: string }
| { kind: "send" }
| { kind: "cancel" }`,elements:[{name:"signature",type:"object",raw:'{ kind: "add"; row: CapabilitySuggestionRow }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"add"',required:!0}},{key:"row",value:{name:"CapabilitySuggestionRow",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "connect"; row: CapabilitySuggestionRow }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"connect"',required:!0}},{key:"row",value:{name:"CapabilitySuggestionRow",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "connect_new_api" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"connect_new_api"',required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "ask_administrator" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"ask_administrator"',required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "note"; value: string }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"note"',required:!0}},{key:"value",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "send" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"send"',required:!0}}]}},{name:"signature",type:"object",raw:'{ kind: "cancel" }',signature:{properties:[{key:"kind",value:{name:"literal",value:'"cancel"',required:!0}}]}}]},name:"action"}],return:{name:"void"}}},description:""},testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"capability-suggestion"',computed:!1}}}};const l=e=>({tool_uri:`nexus://tool/${e.tool_id}`,kind:"integration",side_effect:!1,score:.8,...e}),O=l({tool_id:"gmail.send_message",name:"Send an email",provider:"Gmail",provider_slug:"gmail",side_effect:!0,act:"needs_admin",reason:"disabled",score:.91}),te=l({tool_id:"gmail.search_messages",name:"Search messages",provider:"Gmail",provider_slug:"gmail",act:"add",score:.84,connection_mode:"user_delegated"}),j=l({tool_id:"open_meteo.forecast",name:"Forecast by coordinates",provider:"Open-Meteo",act:"add",score:.88}),B=l({tool_id:"open_meteo.marine",name:"Marine forecast",provider:"Open-Meteo",act:"add",score:.72}),$=l({tool_id:"slack.post_message",name:"Post a message",provider:"Slack",provider_slug:"slack",side_effect:!0,act:"connect",reason:"connection",connection_mode:"user_delegated",score:.66}),z=l({tool_id:"contracts.read",name:"Read contracts",provider:"Contracts",act:"none",reason:"classification",score:.5}),d={rows:[O],nothingHere:!1,doors:{connectNewApi:!1,askAdministrator:!0},projectName:"Operations",agentName:"Dispatcher"};function ne(e){switch(e){case"builder":return{...d,rows:[j,B,$],doors:{connectNewApi:!0,askAdministrator:!0}};case"mixed":return{...d,rows:[te,O,$,z],doors:{connectNewApi:!1,askAdministrator:!0}};case"nothing-here":return{...d,rows:[],nothingHere:!0,doors:{connectNewApi:!0,askAdministrator:!0}};case"nothing-here-member":return{...d,rows:[],nothingHere:!0,doors:{connectNewApi:!1,askAdministrator:!0}};case"viewer":return{...d,rows:[O,z],doors:{connectNewApi:!1,askAdministrator:!1},agentName:void 0};case"viewer-nothing":return{...d,rows:[],nothingHere:!0,doors:{connectNewApi:!1,askAdministrator:!1},agentName:void 0};case"asking":return{...d,asking:{note:"",sending:!1,error:null}};case"asking-error":return{...d,asking:{note:"",sending:!1,error:"Say what you need"}};case"sending":return{...d,asking:{note:"so the dispatcher can mail the carriers every morning",sending:!0,error:null}};case"sent":return{...d,doors:{connectNewApi:!1,askAdministrator:!1},receipt:{kind:"sent"},requests:[{uri:"nexus://chat/capability_request/cr_045_1",status:"awaiting_approval",href:"#request"}]};case"approved":return{...d,doors:{connectNewApi:!1,askAdministrator:!1},requests:[{uri:"nexus://chat/capability_request/cr_045_1",status:"approved",href:"#request",agentName:"Dispatcher"}]};case"declined":return{...d,doors:{connectNewApi:!1,askAdministrator:!1},requests:[{uri:"nexus://chat/capability_request/cr_045_1",status:"rejected",href:"#request"}]};case"added":return{...d,rows:[B,$],doors:{connectNewApi:!0,askAdministrator:!0},receipt:{kind:"added",agent:"Dispatcher"}};case"adding":return{...d,rows:[j,B],doors:{connectNewApi:!0,askAdministrator:!0},busyRow:j.tool_uri};case"add-failed":return{...d,rows:[j],doors:{connectNewApi:!0,askAdministrator:!0},receipt:{kind:"add_failed",reason:"The agent is not yours to change."}};case"offline":return{...d,rows:[O,$],offline:!0};default:return{...d}}}function se({face:e="member",narrow:o=!1}){return n.jsx("div",{className:"nexus-automation-s0-frame",style:o?{maxWidth:320}:void 0,children:n.jsx(G,{view:ne(e),onAction:()=>{}})})}const le={title:"Conversation/Capability card",component:se,parameters:{ds:"DS-5024",layout:"padded"}},s=(e,o)=>!!e.querySelector(o),R=(e,o)=>e.querySelectorAll(o).length,ie=e=>{const o=e.querySelector('[role="region"][aria-labelledby]');if(!o)throw new globalThis.Error("the card is not a labelled region");return o},t=e=>{throw new globalThis.Error(e)},p={name:"member",args:{face:"member"},play:async({canvasElement:e})=>{ie(e),s(e,'[data-testid="capability-suggestion-reason-gmail.send_message"]')||t("no Needs an administrator chip"),s(e,"button[data-testid^='capability-suggestion-add-']")&&t("an Add for a member on a disabled tool"),s(e,'[data-testid="capability-suggestion-door-ask_administrator"]')||t("no Ask an administrator"),s(e,'[data-testid="capability-suggestion-door-connect_new_api"]')&&t("Connect a new API on a needs-admin answer")}},g={name:"builder",args:{face:"builder"},play:async({canvasElement:e})=>{R(e,"button[data-testid^='capability-suggestion-add-']")!==2&&t("not two Add to Dispatcher"),e.querySelector('[data-testid="capability-suggestion-add-open_meteo.forecast"]')?.textContent?.includes("Dispatcher")||t("Add does not name the agent"),s(e,'[data-testid="capability-suggestion-connect-slack.post_message"]')||t("no Connect Slack →"),s(e,'[data-testid="capability-suggestion-door-connect_new_api"]')||t("no Connect a new API")}},m={name:"mixed",args:{face:"mixed"},play:async({canvasElement:e})=>{R(e,"[data-testid^='capability-suggestion-row-']")!==4&&t("not four rows"),s(e,'[data-testid="capability-suggestion-reason-contracts.read"]')||t("the ceiling row has no reason"),s(e,'[data-testid="capability-suggestion-add-contracts.read"]')&&t("an act on a row above the ceiling")}},f={name:"nothing-here",args:{face:"nothing-here"},play:async({canvasElement:e})=>{e.querySelector('[data-testid="capability-suggestion-nothing"]')?.getAttribute("role")!=="status"&&t("the nothing line is not a status"),s(e,'[data-testid="capability-suggestion-rows"]')&&t("rows on an empty answer"),(!s(e,'[data-testid="capability-suggestion-door-connect_new_api"]')||!s(e,'[data-testid="capability-suggestion-door-ask_administrator"]'))&&t("not both doors")}},y={name:"nothing-here-member",args:{face:"nothing-here-member"},play:async({canvasElement:e})=>{s(e,'[data-testid="capability-suggestion-door-connect_new_api"]')&&t("Connect a new API for a member"),s(e,'[data-testid="capability-suggestion-door-ask_administrator"]')||t("no Ask an administrator")}},h={name:"viewer",args:{face:"viewer"},play:async({canvasElement:e})=>{R(e,"[data-testid^='capability-suggestion-row-']")!==2&&t("not the same two rows"),s(e,"button")&&t("a button for a viewer"),s(e,'[data-testid="capability-suggestion-reason-gmail.send_message"]')||t("the reason is not named")}},b={name:"viewer-nothing",args:{face:"viewer-nothing"},play:async({canvasElement:e})=>{s(e,'[data-testid="capability-suggestion-nothing"]')||t("no nothing line"),s(e,'[data-testid="capability-suggestion-doors"]')&&t("a door for a viewer")}},k={name:"asking",args:{face:"asking"},play:async({canvasElement:e})=>{s(e,'textarea[data-testid="capability-suggestion-note"]')||t("no note field"),(s(e,'[data-testid="capability-suggestion-rows"]')||s(e,'[data-testid="capability-suggestion-doors"]'))&&t("the list or the doors stayed under the field"),(!s(e,'[data-testid="capability-suggestion-send"]')||!s(e,'[data-testid="capability-suggestion-cancel"]'))&&t("no Send for review · Cancel")}},_={name:"asking-error",args:{face:"asking-error"},play:async({canvasElement:e})=>{e.querySelector('textarea[data-testid="capability-suggestion-note"]')?.getAttribute("aria-invalid")!=="true"&&t("the note is not marked invalid")}},w={name:"sending",args:{face:"sending"},play:async({canvasElement:e})=>{e.querySelector('[data-testid="capability-suggestion-ask"]')?.getAttribute("aria-busy")!=="true"&&t("the form is not busy"),e.querySelector('[data-testid="capability-suggestion-send"]')?.disabled||t("Send is not held")}},v={name:"sent",args:{face:"sent"},play:async({canvasElement:e})=>{const o=e.querySelector('[data-testid="capability-suggestion-receipt"]');(o?.getAttribute("role")!=="status"||!o.textContent?.includes("Operations"))&&t("the receipt does not name the Project"),s(e,'[data-testid="capability-suggestion-request-cr_045_1"][data-status="awaiting_approval"]')||t("no Awaiting review face"),s(e,'[data-testid="capability-suggestion-doors"]')&&t("the door is offered again after sending")}},A={name:"approved",args:{face:"approved"},play:async({canvasElement:e})=>{e.querySelector('[data-testid="capability-suggestion-request-cr_045_1"]')?.textContent?.includes("Dispatcher")||t("Approved does not name the agent")}},x={name:"declined",args:{face:"declined"},play:async({canvasElement:e})=>{s(e,'[data-testid="capability-suggestion-request-cr_045_1"][data-status="rejected"]')||t("no declined face"),s(e,'[data-testid="capability-suggestion-request-open"]')||t("no Open")}},S={name:"added",args:{face:"added"},play:async({canvasElement:e})=>{e.querySelector('[data-testid="capability-suggestion-receipt"][data-kind="added"]')?.textContent?.includes("Dispatcher")||t("no Added to Dispatcher receipt"),R(e,"[data-testid^='capability-suggestion-row-']")!==2&&t("the added row stayed")}},q={name:"adding",args:{face:"adding"},play:async({canvasElement:e})=>{const o=e.querySelector('[data-testid="capability-suggestion-add-open_meteo.forecast"]');(!o?.disabled||o.getAttribute("aria-busy")!=="true")&&t("the Add in flight is not busy"),e.querySelector('[data-testid="capability-suggestion-add-open_meteo.marine"]')?.disabled&&t("the other Add is held")}},N={name:"add-failed",args:{face:"add-failed"},play:async({canvasElement:e})=>{s(e,'[data-testid="capability-suggestion-receipt"][data-kind="add_failed"]')||t("no failure line"),s(e,'[data-testid="capability-suggestion-add-open_meteo.forecast"]')||t("the row is gone after a failure")}},C={name:"offline",args:{face:"offline"},play:async({canvasElement:e})=>{const o=[...e.querySelectorAll("button")];(!o.length||o.some(r=>!r.disabled))&&t("an act is live offline")}},D={name:"uk",args:{face:"mixed"},globals:{locale:"uk"}},M={name:"narrow",args:{face:"mixed",narrow:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},ue=["Member","Builder","Mixed","NothingHere","NothingHereMember","Viewer","ViewerNothing","Asking","AskingError","Sending","Sent","Approved","Declined","Added","Adding","AddFailed","Offline","Uk","Narrow"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "member",
  args: {
    face: "member"
  },
  play: async ({
    canvasElement
  }) => {
    region(canvasElement);
    if (!has(canvasElement, '[data-testid="capability-suggestion-reason-gmail.send_message"]')) fail("no Needs an administrator chip");
    if (has(canvasElement, "button[data-testid^='capability-suggestion-add-']")) fail("an Add for a member on a disabled tool");
    if (!has(canvasElement, '[data-testid="capability-suggestion-door-ask_administrator"]')) fail("no Ask an administrator");
    if (has(canvasElement, '[data-testid="capability-suggestion-door-connect_new_api"]')) fail("Connect a new API on a needs-admin answer");
  }
}`,...p.parameters?.docs?.source},description:{story:": Dana (member) — *Gmail · Send an email — Needs an administrator* and the one door *Ask an administrator*",...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "builder",
  args: {
    face: "builder"
  },
  play: async ({
    canvasElement
  }) => {
    if (count(canvasElement, "button[data-testid^='capability-suggestion-add-']") !== 2) fail("not two Add to Dispatcher");
    if (!canvasElement.querySelector('[data-testid="capability-suggestion-add-open_meteo.forecast"]')?.textContent?.includes("Dispatcher")) fail("Add does not name the agent");
    if (!has(canvasElement, '[data-testid="capability-suggestion-connect-slack.post_message"]')) fail("no Connect Slack →");
    if (!has(canvasElement, '[data-testid="capability-suggestion-door-connect_new_api"]')) fail("no Connect a new API");
  }
}`,...g.parameters?.docs?.source},description:{story:": Olena (builder) — *Open-Meteo · Forecast by coordinates — Add to Dispatcher*, *Connect Slack →*, *Connect a new API*",...g.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "mixed",
  args: {
    face: "mixed"
  },
  play: async ({
    canvasElement
  }) => {
    if (count(canvasElement, "[data-testid^='capability-suggestion-row-']") !== 4) fail("not four rows");
    if (!has(canvasElement, '[data-testid="capability-suggestion-reason-contracts.read"]')) fail("the ceiling row has no reason");
    if (has(canvasElement, '[data-testid="capability-suggestion-add-contracts.read"]')) fail("an act on a row above the ceiling");
  }
}`,...m.parameters?.docs?.source},description:{story:"every act at once — Add · Needs an administrator · Connect → · the ceiling reason (named, never offered)",...m.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "nothing-here",
  args: {
    face: "nothing-here"
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="capability-suggestion-nothing"]')?.getAttribute("role") !== "status") fail("the nothing line is not a status");
    if (has(canvasElement, '[data-testid="capability-suggestion-rows"]')) fail("rows on an empty answer");
    if (!has(canvasElement, '[data-testid="capability-suggestion-door-connect_new_api"]') || !has(canvasElement, '[data-testid="capability-suggestion-door-ask_administrator"]')) fail("not both doors");
  }
}`,...f.parameters?.docs?.source},description:{story:"*Nothing here does that yet* — one line, both doors for a builder",...f.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "nothing-here-member",
  args: {
    face: "nothing-here-member"
  },
  play: async ({
    canvasElement
  }) => {
    if (has(canvasElement, '[data-testid="capability-suggestion-door-connect_new_api"]')) fail("Connect a new API for a member");
    if (!has(canvasElement, '[data-testid="capability-suggestion-door-ask_administrator"]')) fail("no Ask an administrator");
  }
}`,...y.parameters?.docs?.source},description:{story:"the same line for a member — *Ask an administrator* only",...y.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "viewer",
  args: {
    face: "viewer"
  },
  play: async ({
    canvasElement
  }) => {
    if (count(canvasElement, "[data-testid^='capability-suggestion-row-']") !== 2) fail("not the same two rows");
    if (has(canvasElement, "button")) fail("a button for a viewer");
    if (!has(canvasElement, '[data-testid="capability-suggestion-reason-gmail.send_message"]')) fail("the reason is not named");
  }
}`,...h.parameters?.docs?.source},description:{story:" · : Marta (viewer) — the same rows with their reason, no button, no door",...h.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "viewer-nothing",
  args: {
    face: "viewer-nothing"
  },
  play: async ({
    canvasElement
  }) => {
    if (!has(canvasElement, '[data-testid="capability-suggestion-nothing"]')) fail("no nothing line");
    if (has(canvasElement, '[data-testid="capability-suggestion-doors"]')) fail("a door for a viewer");
  }
}`,...b.parameters?.docs?.source},description:{story:"not-found sameness: the viewer's *nothing here* is the same line, with no door",...b.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "asking",
  args: {
    face: "asking"
  },
  play: async ({
    canvasElement
  }) => {
    if (!has(canvasElement, 'textarea[data-testid="capability-suggestion-note"]')) fail("no note field");
    if (has(canvasElement, '[data-testid="capability-suggestion-rows"]') || has(canvasElement, '[data-testid="capability-suggestion-doors"]')) fail("the list or the doors stayed under the field");
    if (!has(canvasElement, '[data-testid="capability-suggestion-send"]') || !has(canvasElement, '[data-testid="capability-suggestion-cancel"]')) fail("no Send for review · Cancel");
  }
}`,...k.parameters?.docs?.source},description:{story:" (): the one field in place of the list — *Send for review · Cancel*; the list and the doors are gone",...k.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "asking-error",
  args: {
    face: "asking-error"
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('textarea[data-testid="capability-suggestion-note"]')?.getAttribute("aria-invalid") !== "true") fail("the note is not marked invalid");
  }
}`,..._.parameters?.docs?.source},description:{story:"*Say what you need* — the field's own error, `aria-invalid`",..._.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "sending",
  args: {
    face: "sending"
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="capability-suggestion-ask"]')?.getAttribute("aria-busy") !== "true") fail("the form is not busy");
    if (!(canvasElement.querySelector('[data-testid="capability-suggestion-send"]') as HTMLButtonElement | null)?.disabled) fail("Send is not held");
  }
}`,...w.parameters?.docs?.source},description:{story:"*Sending…* — the form busy, both controls held",...w.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "sent",
  args: {
    face: "sent"
  },
  play: async ({
    canvasElement
  }) => {
    const receipt = canvasElement.querySelector('[data-testid="capability-suggestion-receipt"]');
    if (receipt?.getAttribute("role") !== "status" || !receipt.textContent?.includes("Operations")) fail("the receipt does not name the Project");
    if (!has(canvasElement, '[data-testid="capability-suggestion-request-cr_045_1"][data-status="awaiting_approval"]')) fail("no Awaiting review face");
    if (has(canvasElement, '[data-testid="capability-suggestion-doors"]')) fail("the door is offered again after sending");
  }
}`,...v.parameters?.docs?.source},description:{story:"the receipt — *Sent for review — the administrators of Operations will see it.* — and the face *Awaiting review*",...v.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "approved",
  args: {
    face: "approved"
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="capability-suggestion-request-cr_045_1"]')?.textContent?.includes("Dispatcher")) fail("Approved does not name the agent");
  }
}`,...A.parameters?.docs?.source},description:{story:"the face follows Taras's word — *Approved — added to Dispatcher*",...A.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "declined",
  args: {
    face: "declined"
  },
  play: async ({
    canvasElement
  }) => {
    if (!has(canvasElement, '[data-testid="capability-suggestion-request-cr_045_1"][data-status="rejected"]')) fail("no declined face");
    if (!has(canvasElement, '[data-testid="capability-suggestion-request-open"]')) fail("no Open");
  }
}`,...x.parameters?.docs?.source},description:{story:"declined — the kit's word *Needs changes*, the request's page as the door",...x.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "added",
  args: {
    face: "added"
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="capability-suggestion-receipt"][data-kind="added"]')?.textContent?.includes("Dispatcher")) fail("no Added to Dispatcher receipt");
    if (count(canvasElement, "[data-testid^='capability-suggestion-row-']") !== 2) fail("the added row stayed");
  }
}`,...S.parameters?.docs?.source},description:{story:"SC-4508: after *Add* — *Added to Dispatcher.*; the row is gone, the rest stay",...S.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "adding",
  args: {
    face: "adding"
  },
  play: async ({
    canvasElement
  }) => {
    const busy = canvasElement.querySelector('[data-testid="capability-suggestion-add-open_meteo.forecast"]') as HTMLButtonElement | null;
    if (!busy?.disabled || busy.getAttribute("aria-busy") !== "true") fail("the Add in flight is not busy");
    if ((canvasElement.querySelector('[data-testid="capability-suggestion-add-open_meteo.marine"]') as HTMLButtonElement | null)?.disabled) fail("the other Add is held");
  }
}`,...q.parameters?.docs?.source},description:{story:"the *Add* in flight — that button busy and held, the other untouched",...q.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "add-failed",
  args: {
    face: "add-failed"
  },
  play: async ({
    canvasElement
  }) => {
    if (!has(canvasElement, '[data-testid="capability-suggestion-receipt"][data-kind="add_failed"]')) fail("no failure line");
    if (!has(canvasElement, '[data-testid="capability-suggestion-add-open_meteo.forecast"]')) fail("the row is gone after a failure");
  }
}`,...N.parameters?.docs?.source},description:{story:"the server refused the bind — one line, the row stays for another try",...N.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "offline",
  args: {
    face: "offline"
  },
  play: async ({
    canvasElement
  }) => {
    const buttons = [...canvasElement.querySelectorAll("button")] as HTMLButtonElement[];
    if (!buttons.length || buttons.some(b => !b.disabled)) fail("an act is live offline");
  }
}`,...C.parameters?.docs?.source},description:{story:"offline — every act held (`disabled`), the words stay",...C.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "uk",
  args: {
    face: "mixed"
  },
  globals: {
    locale: "uk"
  }
}`,...D.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "narrow",
  args: {
    face: "mixed",
    narrow: true
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...M.parameters?.docs?.source}}};export{N as AddFailed,S as Added,q as Adding,A as Approved,k as Asking,_ as AskingError,g as Builder,x as Declined,p as Member,m as Mixed,M as Narrow,f as NothingHere,y as NothingHereMember,C as Offline,w as Sending,v as Sent,D as Uk,h as Viewer,b as ViewerNothing,ue as __namedExportsOrder,le as default};
