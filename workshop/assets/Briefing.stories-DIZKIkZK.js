import{ak as J,r as o,j as e,a as _,v as L,p as I,an as P,i as Q,w as Z,B,_ as ee}from"./iframe-C_4ax-Jm.js";import"./harness-p7-wY8XY.js";import{S as R,H as ne,a as se,b as te,M as re,W as ie,C as ae,c as oe,d as le}from"./waypoints-Bg-fYCe3.js";import{F as ce}from"./factory-Ck7b_c89.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */const de={chat:le,tasks:oe,bi:ae,graph:ie,core:R,map:re,care:te,forge:se,sales:ne,factory:ce},ue=3;function he({line:n,text:t}){const[r,a]=t.split("{entity}");return e.jsxs("span",{className:"nexus-briefing-sentence",children:[r,e.jsxs("a",{className:"nexus-briefing-entity",href:n.entity.href,children:[n.entity.label,e.jsx("span",{"aria-hidden":!0,children:" ↗"})]}),a??""]})}function ge({line:n}){if(n.provider)return e.jsx(ee,{name:n.provider.name,glyph:n.provider.glyph,color:n.provider.color});const t=de[n.app??"chat"];return e.jsx("span",{className:"nexus-briefing-app","data-app":n.app??"chat","aria-hidden":!0,children:e.jsx(t,{size:16,strokeWidth:1.75,"aria-hidden":!0})})}function T({title:n="yesterday",lines:t,state:r,asOf:a,connections:c,defaultSettingsOpen:D=!1,onAsk:U,onOpen:z,onDismiss:W,onToggleConnection:F,onTurnOff:V}){const{t:i}=J(),N=o.useId(),S=o.useId(),[d,v]=o.useState(D),j=o.useRef(null),q=o.useRef(null);if(o.useEffect(()=>{d&&q.current?.querySelector("button, [role='switch']")?.focus()},[d]),r==="absent")return null;const C=t.slice(0,ue);if(r!=="loading"&&C.length===0)return null;const X=n==="yesterday"?i("chat.briefing.since_yesterday"):i("chat.briefing.since_day",{day:n.day}),H=s=>typeof s.sentence=="string"?s.sentence:i(s.sentence.key,s.sentence.vars),O=()=>{v(!1),j.current?.querySelector("[aria-expanded]")?.focus()},Y=s=>{s.key==="Escape"&&(s.stopPropagation(),O())};return e.jsxs("section",{className:"nexus-briefing","aria-labelledby":N,"aria-busy":r==="loading"||void 0,"data-state":r,"data-testid":"briefing",children:[e.jsxs("div",{className:"nexus-briefing-head",children:[e.jsx("h2",{id:N,className:"nexus-briefing-title",children:X}),r==="offline"&&a?e.jsx(_,{size:"xs",tone:"muted",children:i("chat.briefing.as_of",{time:a})}):null,e.jsxs("span",{className:"nexus-briefing-settings",ref:j,children:[e.jsxs(L,{tone:"quiet",className:"nexus-briefing-gear","aria-expanded":d,"aria-controls":d?S:void 0,onClick:()=>v(s=>!s),"data-testid":"briefing-settings",children:[e.jsx("span",{children:i("chat.briefing.settings")}),e.jsx(R,{size:14,"aria-hidden":!0})]}),d?e.jsxs("div",{ref:q,id:S,className:"nexus-briefing-sheet",role:"dialog","aria-labelledby":`${S}-title`,onKeyDown:Y,"data-testid":"briefing-sheet",children:[e.jsxs("div",{className:"nexus-briefing-sheet-head",children:[e.jsx("h3",{id:`${S}-title`,className:"nexus-briefing-sheet-title",children:i("chat.briefing.settings_title")}),e.jsx(I,{label:i("chat.briefing.close"),onClick:O,children:e.jsx(P,{size:14,"aria-hidden":!0})})]}),c.length?e.jsxs("fieldset",{className:"nexus-briefing-connections",children:[e.jsx("legend",{className:"nexus-label",children:i("chat.briefing.show_in_briefing")}),c.map(s=>e.jsx(Q,{checked:s.on,label:s.name,onChange:K=>F(s.id,K),testId:`briefing-connection-${s.id}`},s.id))]}):null,e.jsx(Z,{label:i("chat.briefing.settings_title"),children:e.jsx(L,{tone:"quiet",onClick:V,"data-testid":"briefing-turn-off",children:i("chat.briefing.turn_off")})})]}):null]})]}),r==="loading"?e.jsx("ul",{className:"nexus-list nexus-briefing-lines","aria-hidden":!0,children:[0,1,2].map(s=>e.jsxs("li",{className:"nexus-briefing-line is-skeleton",children:[e.jsx("span",{className:"nexus-briefing-skeleton-mark"}),e.jsx("span",{className:"nexus-briefing-skeleton-text"})]},s))}):e.jsx("ul",{className:"nexus-list nexus-briefing-lines",children:C.map(s=>e.jsxs("li",{className:"nexus-briefing-line","data-source":s.source,"data-testid":`briefing-line-${s.id}`,children:[e.jsx(ge,{line:s}),e.jsx(he,{line:s,text:H(s)}),s.asked?e.jsx("span",{role:"status",className:"nexus-briefing-receipt",children:e.jsx(_,{size:"xs",tone:"ok",children:i("chat.briefing.asked")})}):s.action==="ask"?e.jsx(B,{size:"sm",onClick:()=>U(s),"data-testid":`briefing-ask-${s.id}`,children:i("chat.briefing.ask")}):e.jsx(B,{size:"sm",onClick:()=>z(s),"data-testid":`briefing-open-${s.id}`,children:i("chat.briefing.open")}),e.jsx(I,{className:"nexus-briefing-dismiss",label:i("chat.briefing.dismiss"),onClick:()=>W(s),children:e.jsx(P,{size:14,"aria-hidden":!0})})]},s.id))})]})}T.__docgenInfo={description:"",methods:[],displayName:"Briefing",props:{title:{required:!1,tsType:{name:"union",raw:'"yesterday" | { day: string }',elements:[{name:"literal",value:'"yesterday"'},{name:"signature",type:"object",raw:"{ day: string }",signature:{properties:[{key:"day",value:{name:"string",required:!0}}]}}]},description:"*Since yesterday*, or *Since {day}* after a weekend.",defaultValue:{value:'"yesterday"',computed:!1}},lines:{required:!0,tsType:{name:"Array",elements:[{name:"BriefingLine"}],raw:"BriefingLine[]"},description:""},state:{required:!0,tsType:{name:"union",raw:'"populated" | "loading" | "offline" | "absent"',elements:[{name:"literal",value:'"populated"'},{name:"literal",value:'"loading"'},{name:"literal",value:'"offline"'},{name:"literal",value:'"absent"'}]},description:""},asOf:{required:!1,tsType:{name:"string"},description:"Offline: the cached lines' time — *as of 07:40*."},connections:{required:!0,tsType:{name:"Array",elements:[{name:"BriefingConnection"}],raw:"BriefingConnection[]"},description:"The person's user-delegated connections — on by default (); the switch turns one off."},defaultSettingsOpen:{required:!1,tsType:{name:"boolean"},description:"The settings sheet open at mount (a story's state).",defaultValue:{value:"false",computed:!1}},onAsk:{required:!0,tsType:{name:"signature",type:"function",raw:"(line: BriefingLine) => void",signature:{arguments:[{type:{name:"BriefingLine"},name:"line"}],return:{name:"void"}}},description:""},onOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(line: BriefingLine) => void",signature:{arguments:[{type:{name:"BriefingLine"},name:"line"}],return:{name:"void"}}},description:""},onDismiss:{required:!0,tsType:{name:"signature",type:"function",raw:"(line: BriefingLine) => void",signature:{arguments:[{type:{name:"BriefingLine"},name:"line"}],return:{name:"void"}}},description:""},onToggleConnection:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string, on: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"boolean"},name:"on"}],return:{name:"void"}}},description:""},onTurnOff:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const me="M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20z",pe=[{id:"conn-gmail",name:"Gmail",on:!0},{id:"conn-m365",name:"Microsoft 365",on:!0},{id:"conn-atlassian",name:"Atlassian",on:!0}],M={id:"line-gmail-1",source:"gmail",provider:{name:"Gmail",glyph:me,color:"#c2410c"},sentence:"{entity} · Workspace billing starts 1 Nov — check the plan",entity:{label:"NexiFlow",href:"/chat?ref=mail-7f21"},action:"ask"},A={id:"line-nexus-run",source:"nexus",app:"chat",sentence:{key:"chat.briefing.line.ran",vars:{time:"07:02",n:"3"}},entity:{label:"Shipment ETA check",href:"/chat/projects/p-logistics/automations/a-eta"},action:"open"},x={id:"line-nexus-approvals",source:"nexus",app:"tasks",sentence:{key:"chat.briefing.line.approvals",vars:{n:"2"}},entity:{label:"VibeBan",href:"/tasks/inbox"},action:"open"},$={id:"line-nexus-task",source:"nexus",app:"tasks",sentence:{key:"chat.briefing.line.due_today",vars:{}},entity:{label:"Carrier contract draft",href:"/tasks/t-4471"},action:"open"},fe={id:"line-nexus-factory",source:"nexus",app:"factory",sentence:{key:"chat.briefing.line.exception",vars:{}},entity:{label:"Order 3310",href:"/factory/orders/3310"},action:"open"},ye=[M,A,x],be=[x,A,$],we=[x,$,fe];function G({children:n,narrow:t}){return e.jsxs("div",{className:"nexus-briefing-frame",style:t?{maxWidth:320}:void 0,"data-testid":"new-chat-frame",children:[e.jsx("h1",{className:"nexus-briefing-frame-greeting",children:"Hello, Olena"}),e.jsx("p",{className:"nexus-briefing-frame-lead",children:"You are in NexiFlow as a Member. What can I help you with?"}),e.jsx("textarea",{className:"nexus-briefing-frame-composer",rows:3,"aria-label":"Ask Nexi anything…",placeholder:"Ask Nexi anything…"}),n]})}const Ne={title:"Conversation/Briefing",component:T,parameters:{ds:"DS-5020",layout:"fullscreen"},args:{title:"yesterday",state:"populated",lines:ye,connections:pe,onAsk:()=>{},onOpen:()=>{},onDismiss:()=>{},onToggleConnection:()=>{},onTurnOff:()=>{}},render:n=>e.jsx(G,{children:e.jsx(T,{...n})})};function l(n){return n.querySelector('section[data-testid="briefing"]')}const u={name:"personal",play:async({canvasElement:n})=>{const t=l(n);if(!t)throw new globalThis.Error("the briefing section is missing");const r=t.querySelectorAll("li[data-source]");if(r.length!==3)throw new globalThis.Error(`three lines expected, ${r.length} drawn`);if(!t.querySelector('li[data-source="gmail"] a'))throw new globalThis.Error("the Gmail line's entity is not a link");if(!Array.from(t.querySelectorAll("button")).find(c=>c.textContent?.trim()==="chat.briefing.ask"||c.textContent?.trim()==="Ask"))throw new globalThis.Error("no Ask button on the briefing");if(!t.querySelector('[data-testid="briefing-settings"]'))throw new globalThis.Error("the ⚙ settings button is missing")}},h={name:"project",args:{lines:be,connections:[]},play:async({canvasElement:n})=>{const t=l(n);if(!t||t.querySelector('li[data-source]:not([data-source="nexus"])'))throw new globalThis.Error("a connected account's line inside a Project")}},g={name:"nexus-only",args:{lines:we,connections:[]}},m={name:"empty-absent",args:{lines:[],state:"absent"},play:async({canvasElement:n})=>{if(l(n))throw new globalThis.Error("a briefing section renders while there is nothing");if(n.textContent?.includes("chat.briefing.since_yesterday")||n.textContent?.includes("Since yesterday"))throw new globalThis.Error("the briefing title renders while there is nothing");if(!n.querySelector("textarea"))throw new globalThis.Error("the composer stand-in is missing")}},p={name:"loading-after-composer",args:{lines:[],state:"loading"},play:async({canvasElement:n})=>{const t=l(n);if(t?.getAttribute("aria-busy")!=="true")throw new globalThis.Error("the loading section is not aria-busy");const r=n.querySelector("textarea");if(!r||r.disabled)throw new globalThis.Error("the composer stand-in is not usable while the briefing loads");if(t.querySelectorAll(".is-skeleton").length!==3)throw new globalThis.Error("three skeleton lines expected")}},f={name:"asked",args:{lines:[{...M,asked:!0},A,x]},play:async({canvasElement:n})=>{const t=l(n);if(!t?.querySelector('li[data-source="gmail"] [role="status"]'))throw new globalThis.Error("the asked line has no receipt chip");if(t.querySelectorAll("li[data-source]").length!==3)throw new globalThis.Error("the other lines did not stay")}},y={name:"dismissed",args:{lines:[A,x]},play:async({canvasElement:n})=>{const t=l(n)?.querySelectorAll("li[data-source]").length;if(t!==2)throw new globalThis.Error(`two lines expected after a dismissal, ${t} drawn`)}},b={name:"settings-sheet",args:{defaultSettingsOpen:!0},play:async({canvasElement:n})=>{const t=n.querySelector('[role="dialog"][data-testid="briefing-sheet"]');if(!t)throw new globalThis.Error("the settings sheet is not open");const r=t.querySelectorAll('[role="switch"]');if(r.length!==3)throw new globalThis.Error(`three switches expected, ${r.length} drawn`);for(const a of Array.from(r))if(a.getAttribute("aria-checked")!=="true")throw new globalThis.Error("a connection is off by default");if(!t.querySelector('[data-testid="briefing-turn-off"]'))throw new globalThis.Error("the quiet way out is missing")}},w={name:"offline",args:{state:"offline",asOf:"07:40"}},k={name:"uk",globals:{locale:"uk"}},E={name:"narrow",parameters:{viewport:{defaultViewport:"mobile1"}},render:n=>e.jsx(G,{narrow:!0,children:e.jsx(T,{...n})})},ve=["Personal","Project","NexusOnly","EmptyAbsent","LoadingAfterComposer","Asked","Dismissed","SettingsSheet","Offline","Uk","Narrow"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "personal",
  play: async ({
    canvasElement
  }) => {
    const s = section(canvasElement);
    if (!s) throw new globalThis.Error("the briefing section is missing");
    const lines = s.querySelectorAll("li[data-source]");
    if (lines.length !== 3) throw new globalThis.Error(\`three lines expected, \${lines.length} drawn\`);
    if (!s.querySelector('li[data-source="gmail"] a')) throw new globalThis.Error("the Gmail line's entity is not a link");
    const ask = Array.from(s.querySelectorAll("button")).find(b => b.textContent?.trim() === "chat.briefing.ask" || b.textContent?.trim() === "Ask");
    if (!ask) throw new globalThis.Error("no Ask button on the briefing");
    if (!s.querySelector('[data-testid="briefing-settings"]')) throw new globalThis.Error("the ⚙ settings button is missing");
  }
}`,...u.parameters?.docs?.source},description:{story:"Personal new chat: a Gmail line, an automation's run, the approvals.",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "project",
  args: {
    lines: PROJECT_LINES,
    connections: []
  },
  play: async ({
    canvasElement
  }) => {
    const s = section(canvasElement);
    if (!s || s.querySelector('li[data-source]:not([data-source="nexus"])')) throw new globalThis.Error("a connected account's line inside a Project");
  }
}`,...h.parameters?.docs?.source},description:{story:"A Project's new chat: only that Project's NEXUS items — no mail inside a Project.",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "nexus-only",
  args: {
    lines: NEXUS_ONLY_LINES,
    connections: []
  }
}`,...g.parameters?.docs?.source},description:{story:"No connection: NEXUS's own lines only — the ⚙ sheet carries just *Turn off the briefing*.",...g.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "empty-absent",
  args: {
    lines: [],
    state: "absent"
  },
  play: async ({
    canvasElement
  }) => {
    if (section(canvasElement)) throw new globalThis.Error("a briefing section renders while there is nothing");
    if (canvasElement.textContent?.includes("chat.briefing.since_yesterday") || canvasElement.textContent?.includes("Since yesterday")) throw new globalThis.Error("the briefing title renders while there is nothing");
    if (!canvasElement.querySelector("textarea")) throw new globalThis.Error("the composer stand-in is missing");
  }
}`,...m.parameters?.docs?.source},description:{story:'Nothing since yesterday: the greeting and the composer alone — no section, no "nothing new" line.',...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "loading-after-composer",
  args: {
    lines: [],
    state: "loading"
  },
  play: async ({
    canvasElement
  }) => {
    const s = section(canvasElement);
    if (s?.getAttribute("aria-busy") !== "true") throw new globalThis.Error("the loading section is not aria-busy");
    const composer = canvasElement.querySelector<HTMLTextAreaElement>("textarea");
    if (!composer || composer.disabled) throw new globalThis.Error("the composer stand-in is not usable while the briefing loads");
    if (s.querySelectorAll(".is-skeleton").length !== 3) throw new globalThis.Error("three skeleton lines expected");
  }
}`,...p.parameters?.docs?.source},description:{story:"The title and three skeleton lines appear after the composer is usable — typing is never blocked.",...p.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "asked",
  args: {
    lines: [{
      ...GMAIL_BILLING,
      asked: true
    }, AUTOMATION_RAN, APPROVALS_WAIT]
  },
  play: async ({
    canvasElement
  }) => {
    const s = section(canvasElement);
    if (!s?.querySelector('li[data-source="gmail"] [role="status"]')) throw new globalThis.Error("the asked line has no receipt chip");
    if (s.querySelectorAll("li[data-source]").length !== 3) throw new globalThis.Error("the other lines did not stay");
  }
}`,...f.parameters?.docs?.source},description:{story:"*Ask* pressed on the first line: the line shows an *Asked* receipt chip; the other lines stay.",...f.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "dismissed",
  args: {
    lines: [AUTOMATION_RAN, APPROVALS_WAIT]
  },
  play: async ({
    canvasElement
  }) => {
    const n = section(canvasElement)?.querySelectorAll("li[data-source]").length;
    if (n !== 2) throw new globalThis.Error(\`two lines expected after a dismissal, \${n} drawn\`);
  }
}`,...y.parameters?.docs?.source},description:{story:"One line dismissed: two remain; nothing else changes.",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "settings-sheet",
  args: {
    defaultSettingsOpen: true
  },
  play: async ({
    canvasElement
  }) => {
    const sheet = canvasElement.querySelector('[role="dialog"][data-testid="briefing-sheet"]');
    if (!sheet) throw new globalThis.Error("the settings sheet is not open");
    const switches = sheet.querySelectorAll('[role="switch"]');
    if (switches.length !== 3) throw new globalThis.Error(\`three switches expected, \${switches.length} drawn\`);
    for (const s of Array.from(switches)) if (s.getAttribute("aria-checked") !== "true") throw new globalThis.Error("a connection is off by default");
    if (!sheet.querySelector('[data-testid="briefing-turn-off"]')) throw new globalThis.Error("the quiet way out is missing");
  }
}`,...b.parameters?.docs?.source},description:{story:"The ⚙ sheet: *Show in briefing* per connection — all on by default () — and *Turn off the briefing*.",...b.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "offline",
  args: {
    state: "offline",
    asOf: "07:40"
  }
}`,...w.parameters?.docs?.source},description:{story:"Offline: the cached lines with *as of 07:40*.",...w.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "uk",
  globals: {
    locale: "uk"
  }
}`,...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "narrow",
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  render: args => <NewChatFrame narrow>
      <Briefing {...args} />
    </NewChatFrame>
}`,...E.parameters?.docs?.source}}};export{f as Asked,y as Dismissed,m as EmptyAbsent,p as LoadingAfterComposer,E as Narrow,g as NexusOnly,w as Offline,u as Personal,h as Project,b as SettingsSheet,k as Uk,ve as __namedExportsOrder,Ne as default};
