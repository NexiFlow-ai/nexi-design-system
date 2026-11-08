import{j as a,r as _,ak as P,a0 as C,_ as E,$ as v,a1 as H}from"./iframe-C_4ax-Jm.js";import"./harness-p7-wY8XY.js";import{T as O,R as M,K as I,a as W,b as $}from"./ToolsScreen-ERDdecc8.js";import{T as b,a as B,G,S as z,b as K,c as Y,C as F,P as U}from"./toolsScreen045Fixtures-0e6sbhDQ.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */import"./boxes-Cqxx_HWk.js";import"./workflow-BGMWCDzG.js";import"./factory-Ck7b_c89.js";import"./building-2-GerxkJzZ.js";import"./globe-DcMfC0yC.js";import"./database-BGWOjs-M.js";import"./compass-D5LaBgzz.js";import"./file-text-D2w4_mYA.js";import"./pencil-CCPuQVYt.js";import"./arrow-up-right-Ba_U-eY4.js";import"./play-D-gzWo7v.js";import"./plus-Dc-VMSiJ.js";const R=["actions","artifacts","resolver","dataset","web","core","factory","flows","goal","graph","builder","tasks","platform"];function V(){const{t:e}=P(),r=[G,z,K,Y,F,U[4]];return a.jsxs("div",{style:{display:"grid",gap:"var(--nexus-space-6)"},children:[a.jsx("ul",{className:"nexus-list",style:{display:"flex",gap:"var(--nexus-space-5)",flexWrap:"wrap"},"aria-label":"Provider marks",children:r.map(o=>a.jsxs("li",{style:{display:"inline-flex",alignItems:"center",gap:"var(--nexus-space-3)"},children:[a.jsx(M,{row:o}),a.jsx("span",{children:o.name})]},o.id))}),a.jsx("ul",{className:"nexus-list",style:{display:"flex",gap:"var(--nexus-space-5)",flexWrap:"wrap"},"aria-label":"Platform kind glyphs",children:R.map(o=>a.jsxs("li",{style:{display:"inline-flex",alignItems:"center",gap:"var(--nexus-space-3)"},children:[a.jsx(I,{kind:o}),a.jsx("span",{children:o})]},o))}),a.jsx("ul",{className:"nexus-list",style:{display:"flex",gap:"var(--nexus-space-4)",flexWrap:"wrap"},"aria-label":"Every provider glyph of the subset",children:Object.keys(C).map(o=>a.jsxs("li",{style:{display:"inline-flex",alignItems:"center",gap:"var(--nexus-space-2)",fontSize:"var(--nexus-text-sm)"},children:[a.jsx(E,{name:C[o].title,provider:o,size:"sm"}),a.jsx("span",{children:C[o].title})]},o))}),a.jsx("ul",{className:"nexus-list",style:{display:"flex",gap:"var(--nexus-space-4)",flexWrap:"wrap"},"aria-label":"First-party marks (BRAND-4501)",children:Object.keys(v).map(o=>a.jsxs("li",{style:{display:"inline-flex",alignItems:"center",gap:"var(--nexus-space-2)",fontSize:"var(--nexus-text-sm)"},children:[a.jsx(E,{name:v[o].title,provider:o,size:"sm"}),a.jsx("span",{children:v[o].title})]},o))}),a.jsx("ul",{className:"nexus-list",style:{display:"flex",gap:"var(--nexus-space-4)",flexWrap:"wrap"},"aria-label":"Monogram-only providers",children:Object.keys(H).filter(o=>!(o in v)).map(o=>a.jsxs("li",{style:{display:"inline-flex",alignItems:"center",gap:"var(--nexus-space-2)",fontSize:"var(--nexus-text-sm)"},children:[a.jsx(E,{name:o,provider:o,size:"sm"}),a.jsx("span",{children:o})]},o))}),a.jsx("ul",{className:"nexus-list",style:{display:"grid",gap:"var(--nexus-space-3)"},"aria-label":"Posture chips",children:r.map(o=>a.jsxs("li",{style:{display:"inline-flex",alignItems:"center",gap:"var(--nexus-space-4)"},children:[a.jsx("span",{style:{flex:"0 0 16ch"},children:o.name}),a.jsx(W,{row:o,t:e})]},o.id))})]})}const ge={title:"Apps/NexChat/Tools screen",component:O,parameters:{ds:"DS-6906",layout:"padded",docs:{description:{component:`DS-6906 the Configure hub — the *Tools* tab body ( S0 · draft §23 · ; **redrawn S3 · **, the owner
on the running S2 stack). One line per row: mark · name · *· N actions* · *· N agents* (only when > 0) · the state
word only where it differs from the group's default · the acts as icon buttons in fixed columns (the owner, 16:50).
The effect and ceiling chips live in the Inspector
(DS-6908). *Platform* is one collapsed disclosure — *Platform · 11 — always available* — whose rows carry the
Lucide glyph of their kind. A barred row (above the ceiling · blocked) is last in its group with one reason chip
and nothing to press. These stories render the body alone; the hub frame (\`ConfigureHub.tsx\`) wraps it in the hub's
composition story. Synthetic rows; nothing here looks anything up.`}}},args:{rows:B,state:"populated",query:"",onQuery:()=>{},canBuild:!0,onOpen:()=>{},onConnectNewApi:()=>{},onAskAdmin:()=>{},onRetry:()=>{},onRowAction:()=>{}}};function n(e){const[r,o]=_.useState(e.query);return a.jsx("div",{style:{maxWidth:1040},children:a.jsx(O,{...e,query:r,onQuery:o})})}function t(e){throw new globalThis.Error(e)}function L(e,r){const o=[...e.querySelectorAll("button")];o.find(s=>r.test(s.textContent??""))||t(`no button named ${r}: ${o.map(s=>s.textContent).join(" | ")}`)}function D(){return new Promise(e=>setTimeout(e,0))}const i={name:"hub--tools",render:e=>a.jsx(n,{...e}),play:async({canvasElement:e})=>{L(e,/Connect a new API|project\.configure\.tools\.connect_new/);const r=e.querySelectorAll("[data-group]");r.length!==3&&t(`three groups expected, ${r.length} rendered`);const o=e.querySelector('[data-testid="tools-platform-toggle"]')??t("the Platform disclosure is missing");o.getAttribute("aria-expanded")!=="false"&&t("Platform starts open"),/11/.test(o.textContent??"")||t(`the disclosure does not count its rows: ${o.textContent}`),e.querySelector('[data-testid="tool-row-tool-actions"]')&&t("a Platform row is drawn while the group is collapsed"),e.querySelector('[data-testid="tool-row-state-tool-slack"]')&&t("Connected · shared is drawn on a row of the CONNECTED group");const s=e.querySelector('[data-testid="tool-row-state-tool-gmail"]')??t("Gmail does not say it is the person's own");/yours|ваше/.test(s.textContent??"")||t(`Gmail's state word: ${s.textContent}`),e.querySelector('[data-testid^="tool-row-"] .nexus-chips')&&t("effect chips on a row"),/2 agents|2 агент/.test(e.querySelector('[data-testid="tool-row-meta-tool-slack"]')?.textContent??"")||t("Slack's agents are missing"),/agent|агент/.test(e.querySelector('[data-testid="tool-row-meta-tool-port-weather"]')?.textContent??"")&&t("0 agents is drawn"),e.querySelector('[data-testid="search"]')&&t("a search field under 12 rows"),e.querySelector('[data-testid="tool-row-reason-tool-snowflake"]')??t("the barred row has no reason chip"),e.querySelector('[data-testid="tool-row-icons-tool-snowflake"]')&&t("acts on a row with nothing allowed");const l=e.querySelector('[data-testid="tool-row-icons-tool-slack"]')??t("Slack has no icon actions");(l.querySelectorAll('button[data-act="add"], button[data-act="openInCore"]').length!==2||l.querySelector('[data-act="tryIt"]'))&&t("Slack's acts"),[...e.querySelectorAll('[data-group="custom"] [data-testid^="tool-row-tool-"]')].at(-1)?.getAttribute("data-testid")!=="tool-row-tool-snowflake"&&t("the barred row is not last in CUSTOM")}},c={name:"hub--tools-platform-open",args:{platformOpen:!0},render:e=>a.jsx(n,{...e}),play:async({canvasElement:e})=>{const r=e.querySelector('[data-testid="tools-platform-toggle"]')??t("the Platform disclosure is missing");r.getAttribute("aria-expanded")!=="true"&&t("Platform is not open");const o=[...e.querySelectorAll('[data-group="platform"] [data-testid^="tool-row-tool-"]')];o.length!==11&&t(`eleven platform rows expected, ${o.length} rendered`);const s=e.querySelector('[data-testid="tool-row-mark-tool-web"]')??t("the Web row has no mark");(s.getAttribute("data-kind")!=="icon"||!s.querySelector("svg"))&&t("a platform row does not carry its kind's glyph"),s.querySelector(".nexus-provider-mark-monogram")&&t("a monogram on a platform row"),e.querySelector('[data-testid="tool-row-state-tool-web"]')&&t("Always available is drawn on a Platform row");const l=o.slice(-2).map(k=>k.getAttribute("data-testid")).sort();l.join()!=="tool-row-tool-core-lobby,tool-row-tool-resolver"&&t(`the blocked collections are not last: ${l.join()}`),e.querySelector('[data-testid="tool-row-icons-tool-resolver"]')&&t("acts on a blocked row"),e.querySelector('[data-testid="tool-row-reason-tool-resolver"]')??t("the blocked row has no reason chip"),r.click(),await D(),e.querySelector('[data-testid="tool-row-tool-web"]')&&t("the group did not close")}},d={name:"hub--tools-row-actions",args:{rows:b,platformOpen:!0},render:e=>a.jsx(n,{...e}),play:async({canvasElement:e})=>{const o=[...(e.querySelector('[data-testid="tool-row-icons-tool-slack"]')??t("Slack has no icon actions")).querySelectorAll("button")].map(l=>l.getAttribute("aria-label"));(o.length!==2||/Try/.test(o.join()))&&t(`Slack's acts: ${o.join(" | ")}`),(e.querySelector('[data-testid="tool-row-icons-tool-gmail"]')??t("Gmail has no icon actions")).querySelectorAll("button").length!==2&&t("Gmail's acts"),e.querySelector('[data-testid="tool-row-icon-cancelRequest-tool-port-weather"]')??t("the request row has no cancel act"),e.querySelector('[data-testid="tool-row-icons-tool-snowflake"]')&&t("acts on a barred row")}},u={name:"hub--tools-platform-toggle",render:e=>a.jsx(n,{...e}),play:async({canvasElement:e})=>{const r=e.querySelector('[data-testid="tools-platform-toggle"]')??t("the Platform disclosure is missing");r.click(),await D(),r.getAttribute("aria-expanded")!=="true"&&t("the disclosure did not open"),e.querySelector("#tools-group-platform-rows")||t("aria-controls points at nothing")}},q={name:"hub--tools-empty",args:{rows:[],state:"empty"},render:e=>a.jsx(n,{...e}),play:async({canvasElement:e})=>{L(e,/Connect a new API|project\.configure\.tools\.connect_new/),e.querySelectorAll("button").length!==1&&t("the empty state has one door")}},A={name:"hub--tools-error",args:{rows:[],state:"error"},render:e=>a.jsx(n,{...e})},T={name:"hub--tools-loading",args:{rows:[],state:"loading"},render:e=>a.jsx(n,{...e})},m={name:"hub--tools-search",args:{rows:b,query:"weather",catalogueCount:31},render:e=>a.jsx(n,{...e}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="search"]')||t("the search field is missing past 12 rows");const r=e.querySelectorAll('[data-testid^="tool-row-tool-"]');r.length!==1&&t(`one row matches "weather", ${r.length} rendered`)}},p={name:"hub--tools-search-platform",args:{rows:b,query:"web"},render:e=>a.jsx(n,{...e}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="tool-row-tool-web"]')??t("the Platform match is hidden behind the disclosure"),e.querySelector('[data-testid="tools-platform-toggle"]')&&t("the disclosure stays a toggle during a search")}},h={name:"hub--tools-search-no-match",args:{rows:b,query:"zzz"},render:e=>a.jsx(n,{...e}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="tools-no-match"]')||t("the no-match line is missing"),e.querySelector('[data-testid="tools-empty"]')&&t("no match rendered the empty state")}},g={name:"hub--tools-many",args:{rows:b,catalogueCount:31},render:e=>a.jsx(n,{...e}),play:async({canvasElement:e})=>{const r=e.querySelector('[data-testid="tool-row-meta-tool-google-calendar"]')?.textContent??"";/3 actions|3 дії|3 дій/.test(r)||t(`a long-named row does not fold to a count: ${r}`),/date range/.test(r)&&t("a sentence-long action name spills onto the row");const o=e.querySelector('[data-testid="tool-row-reason-tool-legacy-feed"]')?.textContent??"";/governance/.test(o)||t(`the blocked row's reason is not the server's words: ${o}`),e.querySelector('[data-testid="tool-row-icons-tool-legacy-feed"]')&&t("acts on a governance-blocked row");const s=e.querySelector('[data-testid="tool-row-state-tool-teams"]')?.textContent??"";/Connect Teams|Під'єднати Teams|Teams/.test(s)||t(`Teams does not offer its connect link: ${s}`);const l=[...e.querySelectorAll('[data-testid^="tool-row-tool-"] .nexus-cc-row-target')].filter(k=>k.getBoundingClientRect().height>56);l.length&&t(`${l.length} rows wrap onto a second line`)}},f={name:"hub--tools-setup",args:{state:"setup"},render:e=>a.jsx(n,{...e,children:a.jsx("div",{style:{border:"1px dashed var(--nexus-border)",borderRadius:"var(--nexus-radius-sm)",padding:"var(--nexus-space-8)",color:"var(--nexus-text-secondary)"},"aria-label":"Setup page (DS-6902) renders here",children:"Setup page (DS-6902) renders here"})}),play:async({canvasElement:e})=>{e.querySelector('[data-slot="setup"]')||t("the setup slot is missing"),e.querySelector('[data-testid="tools-head"]')&&t("the head line stays while the setup page is open")}},w={name:"hub--tools-member",args:{canBuild:!1,rows:B.map(e=>({...e,can:{add:!1,connect:!1,tryIt:!1,openInCore:!1,editRequest:!1,cancelRequest:!1}}))},render:e=>a.jsx(n,{...e}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="tools-connect-new"]')&&t("a door for a non-builder"),e.querySelector('[data-testid^="tool-row-icons-"]')&&t("an act with nothing allowed")}},N=[{kind:"connected",scope:"shared"},{kind:"connected",scope:"yours"},{kind:"always_available"},{kind:"not_connected",provider:"slack",userDelegated:!1},{kind:"awaiting_review",requestedBy:"Dana Kowalski",requestId:"capreq_045_awaiting"},{kind:"needs_changes",note:"Name the hosts",requestId:"capreq_045_needs"},{kind:"above_ceiling"},{kind:"blocked",reason:"Disabled by policy"}];function Q(){const{t:e}=P();return a.jsx("dl",{className:"nexus-list",style:{display:"grid",gridTemplateColumns:"max-content 1fr",gap:"var(--nexus-space-2) var(--nexus-space-5)"},"aria-label":"Tool state words",children:N.map((r,o)=>a.jsxs("div",{style:{display:"contents"},children:[a.jsxs("dt",{style:{fontSize:"var(--nexus-text-sm)",color:"var(--nexus-text-muted)"},children:[r.kind,"scope"in r?` · ${r.scope}`:""]}),a.jsx("dd",{"data-testid":`state-word-${o}`,children:a.jsx($,{state:r,t:e})})]},o))})}const y={name:"state-words",render:()=>a.jsx(Q,{}),play:async({canvasElement:e})=>{const r=[...e.querySelectorAll("dd")].map(o=>o.textContent?.trim()??"");(r.length!==N.length||r.some(o=>!o))&&t("a state kind has no word"),r[4].includes("Dana Kowalski")||t("the awaiting word does not name the asker"),r[5].includes("Name the hosts")||t("the needs-changes word does not quote the note"),new Set(r).size!==r.length&&t("two states share one word")}},S={name:"marks-and-chips",render:()=>a.jsx(V,{}),play:async({canvasElement:e})=>{e.querySelectorAll('.nexus-provider-mark[data-kind="icon"]').length<R.length&&t("a platform kind has no glyph");const r=e.querySelector('[data-testid="tool-row-mark-tool-slack"]')??t("no Slack mark");(r.getAttribute("data-kind")!=="brand"||r.querySelectorAll("path").length!==4)&&t("Slack is not the four-colour brand mark (BRAND-4501)"),e.querySelector('[data-testid="tool-row-mark-tool-gmail"] .nexus-provider-mark-monogram')&&t("Gmail fell back to a monogram"),e.querySelector('[data-testid="tool-row-mark-tool-supplier-feed"] .nexus-provider-mark-monogram')||t("the custom feed is not a monogram")}},j={name:"uk",globals:{locale:"uk"},args:{platformOpen:!0},render:e=>a.jsx(n,{...e})},x={name:"narrow",parameters:{viewport:{defaultViewport:"mobile1"}},render:e=>a.jsx("div",{style:{maxWidth:320},children:a.jsx(O,{...e})})},fe=["HubTools","HubToolsPlatformOpen","HubToolsRowActions","HubToolsPlatformToggle","HubToolsEmpty","HubToolsError","HubToolsLoading","HubToolsSearch","HubToolsSearchPlatform","HubToolsSearchNoMatch","HubToolsMany","HubToolsSetup","HubToolsMember","StateWordsStory","MarksAndChips","Uk","Narrow"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "hub--tools",
  render: args => <Live {...args} />,
  play: async ({
    canvasElement
  }) => {
    expectPrimary(canvasElement, /Connect a new API|project\\.configure\\.tools\\.connect_new/);
    const groups = canvasElement.querySelectorAll("[data-group]");
    if (groups.length !== 3) fail(\`three groups expected, \${groups.length} rendered\`);
    // : the Platform group is collapsed — one toggle, none of its rows
    const toggle = canvasElement.querySelector<HTMLButtonElement>('[data-testid="tools-platform-toggle"]') ?? fail("the Platform disclosure is missing");
    if (toggle.getAttribute("aria-expanded") !== "false") fail("Platform starts open");
    if (!/11/.test(toggle.textContent ?? "")) fail(\`the disclosure does not count its rows: \${toggle.textContent}\`);
    if (canvasElement.querySelector('[data-testid="tool-row-tool-actions"]')) fail("a Platform row is drawn while the group is collapsed");
    // : a shared connection is the group's default — no state word on Slack; *yours* on Gmail
    if (canvasElement.querySelector('[data-testid="tool-row-state-tool-slack"]')) fail("Connected · shared is drawn on a row of the CONNECTED group");
    const gmail = canvasElement.querySelector('[data-testid="tool-row-state-tool-gmail"]') ?? fail("Gmail does not say it is the person's own");
    if (!/yours|ваше/.test(gmail.textContent ?? "")) fail(\`Gmail's state word: \${gmail.textContent}\`);
    // : no effect or ceiling chips on a row — they live in the Inspector
    if (canvasElement.querySelector('[data-testid^="tool-row-"] .nexus-chips')) fail("effect chips on a row");
    // : agents only when > 0 — Slack has 2, Port Weather none
    if (!/2 agents|2 агент/.test(canvasElement.querySelector('[data-testid="tool-row-meta-tool-slack"]')?.textContent ?? "")) fail("Slack's agents are missing");
    if (/agent|агент/.test(canvasElement.querySelector('[data-testid="tool-row-meta-tool-port-weather"]')?.textContent ?? "")) fail("0 agents is drawn");
    // no search under 12 rows (); the above-ceiling row has one reason chip and nothing to press
    if (canvasElement.querySelector('[data-testid="search"]')) fail("a search field under 12 rows");
    canvasElement.querySelector('[data-testid="tool-row-reason-tool-snowflake"]') ?? fail("the barred row has no reason chip");
    if (canvasElement.querySelector('[data-testid="tool-row-icons-tool-snowflake"]')) fail("acts on a row with nothing allowed");
    // the acts are icon buttons in fixed columns: Slack (changes) adds and opens Core, never tries
    const slack = canvasElement.querySelector('[data-testid="tool-row-icons-tool-slack"]') ?? fail("Slack has no icon actions");
    if (slack.querySelectorAll('button[data-act="add"], button[data-act="openInCore"]').length !== 2 || slack.querySelector('[data-act="tryIt"]')) fail("Slack's acts");
    // the barred row is the last of its group
    const custom = [...canvasElement.querySelectorAll('[data-group="custom"] [data-testid^="tool-row-tool-"]')];
    if (custom.at(-1)?.getAttribute("data-testid") !== "tool-row-tool-snowflake") fail("the barred row is not last in CUSTOM");
  }
}`,...i.parameters?.docs?.source},description:{story:"The page as the owner sees it first: Platform collapsed, the connected rows saying nothing about a shared connection.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "hub--tools-platform-open",
  args: {
    platformOpen: true
  },
  render: args => <Live {...args} />,
  play: async ({
    canvasElement
  }) => {
    const toggle = canvasElement.querySelector<HTMLButtonElement>('[data-testid="tools-platform-toggle"]') ?? fail("the Platform disclosure is missing");
    if (toggle.getAttribute("aria-expanded") !== "true") fail("Platform is not open");
    const rows = [...canvasElement.querySelectorAll('[data-group="platform"] [data-testid^="tool-row-tool-"]')];
    if (rows.length !== 11) fail(\`eleven platform rows expected, \${rows.length} rendered\`);
    // the kind's glyph, never a monogram
    const mark = canvasElement.querySelector('[data-testid="tool-row-mark-tool-web"]') ?? fail("the Web row has no mark");
    if (mark.getAttribute("data-kind") !== "icon" || !mark.querySelector("svg")) fail("a platform row does not carry its kind's glyph");
    if (mark.querySelector(".nexus-provider-mark-monogram")) fail("a monogram on a platform row");
    // *Always available* is the group's default — no state word on an open row
    if (canvasElement.querySelector('[data-testid="tool-row-state-tool-web"]')) fail("Always available is drawn on a Platform row");
    // the governance-blocked collections: one reason chip, no ···, last
    const last = rows.slice(-2).map(r => r.getAttribute("data-testid")).sort();
    if (last.join() !== "tool-row-tool-core-lobby,tool-row-tool-resolver") fail(\`the blocked collections are not last: \${last.join()}\`);
    if (canvasElement.querySelector('[data-testid="tool-row-icons-tool-resolver"]')) fail("acts on a blocked row");
    canvasElement.querySelector('[data-testid="tool-row-reason-tool-resolver"]') ?? fail("the blocked row has no reason chip");
    // the toggle closes the group again
    toggle.click();
    await tick();
    if (canvasElement.querySelector('[data-testid="tool-row-tool-web"]')) fail("the group did not close");
  }
}`,...c.parameters?.docs?.source},description:{story:"The Platform disclosure opened: eleven rows, each with the Lucide glyph of its kind; the two blocked ones last.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "hub--tools-row-actions",
  args: {
    rows: TOOL_ROWS_MANY,
    platformOpen: true
  },
  render: args => <Live {...args} />,
  play: async ({
    canvasElement
  }) => {
    const slack = canvasElement.querySelector('[data-testid="tool-row-icons-tool-slack"]') ?? fail("Slack has no icon actions");
    // Slack makes changes: Add · Open in Core, no Try it ()
    const labels = [...slack.querySelectorAll("button")].map(b => b.getAttribute("aria-label"));
    if (labels.length !== 2 || /Try/.test(labels.join())) fail(\`Slack's acts: \${labels.join(" | ")}\`);
    // Gmail is read-only and the person's own: Add · Try it, no Core (not an admin)
    const gmail = canvasElement.querySelector('[data-testid="tool-row-icons-tool-gmail"]') ?? fail("Gmail has no icon actions");
    if (gmail.querySelectorAll("button").length !== 2) fail("Gmail's acts");
    // a request row: Edit request · Cancel request (danger)
    canvasElement.querySelector('[data-testid="tool-row-icon-cancelRequest-tool-port-weather"]') ?? fail("the request row has no cancel act");
    // a barred row keeps nothing to press
    if (canvasElement.querySelector('[data-testid="tool-row-icons-tool-snowflake"]')) fail("acts on a barred row");
  }
}`,...d.parameters?.docs?.source},description:{story:"The row's acts as icon buttons (the owner at UAT-1 (S3), 2026-11-01 16:50 — icons, the `···` removed): *Add to an\nagent* (+) · *Try it* (▶) · *Open in Core* (↗) · *Edit request* · *Cancel request*, each in its own column; every one\nnamed, in the tab order, quiet until the row is hovered or focused; nothing on a barred row.",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "hub--tools-platform-toggle",
  render: args => <Live {...args} />,
  play: async ({
    canvasElement
  }) => {
    const toggle = canvasElement.querySelector<HTMLButtonElement>('[data-testid="tools-platform-toggle"]') ?? fail("the Platform disclosure is missing");
    toggle.click();
    await tick();
    if (toggle.getAttribute("aria-expanded") !== "true") fail("the disclosure did not open");
    if (!canvasElement.querySelector("#tools-group-platform-rows")) fail("aria-controls points at nothing");
  }
}`,...u.parameters?.docs?.source},description:{story:"The disclosure from the keyboard: Enter on the label opens the rows and the chevron turns.",...u.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "hub--tools-empty",
  args: {
    rows: [],
    state: "empty"
  },
  render: args => <Live {...args} />,
  play: async ({
    canvasElement
  }) => {
    expectPrimary(canvasElement, /Connect a new API|project\\.configure\\.tools\\.connect_new/);
    if (canvasElement.querySelectorAll("button").length !== 1) fail("the empty state has one door");
  }
}`,...q.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "hub--tools-error",
  args: {
    rows: [],
    state: "error"
  },
  render: args => <Live {...args} />
}`,...A.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "hub--tools-loading",
  args: {
    rows: [],
    state: "loading"
  },
  render: args => <Live {...args} />
}`,...T.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "hub--tools-search",
  args: {
    rows: TOOL_ROWS_MANY,
    query: "weather",
    catalogueCount: 31
  },
  render: args => <Live {...args} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="search"]')) fail("the search field is missing past 12 rows");
    const rows = canvasElement.querySelectorAll('[data-testid^="tool-row-tool-"]');
    if (rows.length !== 1) fail(\`one row matches "weather", \${rows.length} rendered\`);
  }
}`,...m.parameters?.docs?.source},description:{story:'Past 12 rows: the search field appears and "weather" leaves one row. A search opens the Platform group (a hidden match is no match).',...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "hub--tools-search-platform",
  args: {
    rows: TOOL_ROWS_MANY,
    query: "web"
  },
  render: args => <Live {...args} />,
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector('[data-testid="tool-row-tool-web"]') ?? fail("the Platform match is hidden behind the disclosure");
    if (canvasElement.querySelector('[data-testid="tools-platform-toggle"]')) fail("the disclosure stays a toggle during a search");
  }
}`,...p.parameters?.docs?.source},description:{story:"A search that lands in the collapsed group: *Web* is drawn, the disclosure is not a toggle while a query is on.",...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "hub--tools-search-no-match",
  args: {
    rows: TOOL_ROWS_MANY,
    query: "zzz"
  },
  render: args => <Live {...args} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="tools-no-match"]')) fail("the no-match line is missing");
    if (canvasElement.querySelector('[data-testid="tools-empty"]')) fail("no match rendered the empty state");
  }
}`,...h.parameters?.docs?.source},description:{story:"No match: the inline line, not the empty state's door.",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "hub--tools-many",
  args: {
    rows: TOOL_ROWS_MANY,
    catalogueCount: 31
  },
  render: args => <Live {...args} />,
  play: async ({
    canvasElement
  }) => {
    const meta = canvasElement.querySelector('[data-testid="tool-row-meta-tool-google-calendar"]')?.textContent ?? "";
    if (!/3 actions|3 дії|3 дій/.test(meta)) fail(\`a long-named row does not fold to a count: \${meta}\`);
    if (/date range/.test(meta)) fail("a sentence-long action name spills onto the row");
    const reason = canvasElement.querySelector('[data-testid="tool-row-reason-tool-legacy-feed"]')?.textContent ?? "";
    if (!/governance/.test(reason)) fail(\`the blocked row's reason is not the server's words: \${reason}\`);
    if (canvasElement.querySelector('[data-testid="tool-row-icons-tool-legacy-feed"]')) fail("acts on a governance-blocked row");
    const teams = canvasElement.querySelector('[data-testid="tool-row-state-tool-teams"]')?.textContent ?? "";
    if (!/Connect Teams|Під'єднати Teams|Teams/.test(teams)) fail(\`Teams does not offer its connect link: \${teams}\`);
    // no row wraps onto a second line at 1040 px: every row target is a single flex line
    const tall = [...canvasElement.querySelectorAll<HTMLElement>('[data-testid^="tool-row-tool-"] .nexus-cc-row-target')].filter(el => el.getBoundingClientRect().height > 56);
    if (tall.length) fail(\`\${tall.length} rows wrap onto a second line\`);
  }
}`,...g.parameters?.docs?.source},description:{story:"The fuller page (): a sentence-named registry row says *· 3 actions*; a custom row blocked by governance carries the server's words; Teams offers *Connect Teams →* in its state cell.",...g.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "hub--tools-setup",
  args: {
    state: "setup"
  },
  render: args => <Live {...args}>
      <div style={{
      border: "1px dashed var(--nexus-border)",
      borderRadius: "var(--nexus-radius-sm)",
      padding: "var(--nexus-space-8)",
      color: "var(--nexus-text-secondary)"
    }} aria-label="Setup page (DS-6902) renders here">
        Setup page (DS-6902) renders here
      </div>
    </Live>,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-slot="setup"]')) fail("the setup slot is missing");
    if (canvasElement.querySelector('[data-testid="tools-head"]')) fail("the head line stays while the setup page is open");
  }
}`,...f.parameters?.docs?.source},description:{story:"*Connect a new API* pressed: the Track A setup page (DS-6902, another story) takes the body's place.",...f.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "hub--tools-member",
  args: {
    canBuild: false,
    rows: TOOL_ROWS.map(r => ({
      ...r,
      can: {
        add: false,
        connect: false,
        tryIt: false,
        openInCore: false,
        editRequest: false,
        cancelRequest: false
      }
    }))
  },
  render: args => <Live {...args} />,
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="tools-connect-new"]')) fail("a door for a non-builder");
    if (canvasElement.querySelector('[data-testid^="tool-row-icons-"]')) fail("an act with nothing allowed");
  }
}`,...w.parameters?.docs?.source},description:{story:"A member who may not build: no doors, no acts, the list as it is.",...w.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "state-words",
  render: () => <StateWords />,
  play: async ({
    canvasElement
  }) => {
    const words = [...canvasElement.querySelectorAll("dd")].map(dd => dd.textContent?.trim() ?? "");
    if (words.length !== STATE_WORDS.length || words.some(w => !w)) fail("a state kind has no word");
    if (!words[4]!.includes("Dana Kowalski")) fail("the awaiting word does not name the asker");
    if (!words[5]!.includes("Name the hosts")) fail("the needs-changes word does not quote the note");
    if (new Set(words).size !== words.length) fail("two states share one word");
  }
}`,...y.parameters?.docs?.source},description:{story:"S5 H1 (): `ToolStateWord` — every kind of `ToolRowState` as its word; the awaiting word names the asker and the needs-changes word quotes the note.",...y.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "marks-and-chips",
  render: () => <Marks />,
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelectorAll('.nexus-provider-mark[data-kind="icon"]').length < KINDS.length) fail("a platform kind has no glyph");
    // Slack: a first-party mark since BRAND-4501 (2026-11-01) — four coloured paths, no monogram
    const slack = canvasElement.querySelector('[data-testid="tool-row-mark-tool-slack"]') ?? fail("no Slack mark");
    if (slack.getAttribute("data-kind") !== "brand" || slack.querySelectorAll("path").length !== 4) fail("Slack is not the four-colour brand mark (BRAND-4501)");
    if (canvasElement.querySelector('[data-testid="tool-row-mark-tool-gmail"] .nexus-provider-mark-monogram')) fail("Gmail fell back to a monogram");
    // a provider in neither set stays a monogram
    if (!canvasElement.querySelector('[data-testid="tool-row-mark-tool-supplier-feed"] .nexus-provider-mark-monogram')) fail("the custom feed is not a monogram");
  }
}`,...S.parameters?.docs?.source},description:{story:"'s vocabulary on one page: the row marks (a subset glyph · a first-party brand mark · a monogram · the platform kinds) and the posture chips.",...S.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "uk",
  globals: {
    locale: "uk"
  },
  args: {
    platformOpen: true
  },
  render: args => <Live {...args} />
}`,...j.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "narrow",
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  render: args => <div style={{
    maxWidth: 320
  }}>
      <ToolsScreen {...args} />
    </div>
}`,...x.parameters?.docs?.source},description:{story:"Below 720 px the row may wrap its state cell under the name; the disclosure and the marks stay.",...x.parameters?.docs?.description}}};export{i as HubTools,q as HubToolsEmpty,A as HubToolsError,T as HubToolsLoading,g as HubToolsMany,w as HubToolsMember,c as HubToolsPlatformOpen,u as HubToolsPlatformToggle,d as HubToolsRowActions,m as HubToolsSearch,h as HubToolsSearchNoMatch,p as HubToolsSearchPlatform,f as HubToolsSetup,S as MarksAndChips,x as Narrow,y as StateWordsStory,j as Uk,fe as __namedExportsOrder,ge as default};
