import{j as e,ak as P,r as B,ap as D,aq as z,ar as _}from"./iframe-C_4ax-Jm.js";import{C as H}from"./errors-pXhwd8l7.js";import"./harness-p7-wY8XY.js";import{E as F}from"./States-BZzUPC8s.js";import{P as R,R as q,A as J}from"./RecentRow-vIIwzJB1.js";import{p as d,a as L,R as V,t as O,P as T,O as K}from"./recentRow045Fixtures-CPaRCboF.js";import{S as A}from"./RoomSidebar-BgJ9u28b.js";import{S as U}from"./search-Fa0aXA-H.js";import{P as G}from"./plus-Dc-VMSiJ.js";import{F as Q}from"./folder-open-CUujCk9a.js";import{S as W}from"./star-BsQu2SB_.js";import{S as X}from"./settings-2-DzycKneG.js";import{P as Y}from"./pin-zHWwwtbl.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./user-CGy4k_zL.js";import"./compass-D5LaBgzz.js";const C=5,N=5;function Z(r,t){return t.projectId===T?r("sidebar.personal"):d(t.projectId).name}function ee(){const{t:r}=P();return e.jsxs("div",{className:"nexus-recent-skeleton",role:"status","aria-live":"polite","data-testid":"sidebar-recent-loading",children:[e.jsx("span",{className:"nexus-sr-only",children:r("state.loading")}),[0,1,2,3,4].map(t=>e.jsxs("span",{className:"nexus-recent-skeleton-row","aria-hidden":!0,children:[e.jsx("span",{className:"nexus-recent-skeleton-bar"}),e.jsx("span",{className:"nexus-recent-skeleton-bar is-place"})]},t))]})}function re({project:r,role:t,open:a}){const{t:o}=P(),c=o("sidebar.project.actionsFor",{name:r.name});return e.jsxs("span",{className:"nexus-project-menu-anchor",children:[e.jsx("button",{type:"button",className:"nexus-sidebar-icon-btn nexus-hover-reveal","aria-label":c,"aria-haspopup":"menu","aria-expanded":a,"data-testid":`project-more-${r.id}`,children:e.jsx(_,{size:14,"aria-hidden":!0})}),a?e.jsxs("div",{className:"nexus-menu",role:"menu","aria-label":c,"data-testid":`project-menu-${r.id}`,style:{right:0},"data-state":"open",children:[e.jsxs("button",{type:"button",role:"menuitem",children:[e.jsx(A,{size:14,"aria-hidden":!0}),o("project.newChat")]}),t==="editor"?e.jsxs("button",{type:"button",role:"menuitem","aria-label":o("sidebar.configureFor",{name:r.name}),"data-testid":`project-configure-${r.id}`,children:[e.jsx(X,{size:14,"aria-hidden":!0}),o("sidebar.configure")]}):null,e.jsx("hr",{}),e.jsxs("button",{type:"button",role:"menuitem",children:[e.jsx(Y,{size:14,"aria-hidden":!0}),o("project.pin")]})]}):null]})}function te({project:r,chats:t,expanded:a,role:o,activeThreadId:c,onToggle:i}){const{t:n}=P(),v=t.slice(0,N),k=`s0-project-threads-${r.id}`;return e.jsxs("div",{className:"nexus-project-item","data-testid":`project-row-${r.id}`,"data-pinned":r.pinned?"true":void 0,"data-expanded":a?"true":"false",children:[e.jsxs("div",{className:"nexus-project-row",style:{"--nexus-project-accent":r.accent},children:[e.jsx("button",{type:"button",className:"nexus-sidebar-icon-btn nexus-project-chevron nexus-hover-reveal","aria-label":a?n("sidebar.project.collapse",{name:r.name}):n("sidebar.project.expand",{name:r.name}),"aria-expanded":a,"aria-controls":k,onClick:i,children:a?e.jsx(D,{size:14,"aria-hidden":!0}):e.jsx(z,{size:14,"aria-hidden":!0})}),e.jsxs("a",{href:`#project-${r.id}`,className:"nexus-project-link",title:r.name,"data-testid":`project-link-${r.id}`,children:[e.jsx("span",{className:"nexus-project-dot","aria-hidden":!0}),e.jsx("span",{className:"nexus-project-name",children:r.name}),r.pinned?e.jsx(W,{size:12,className:"nexus-project-star","aria-label":n("project.pinned")}):null]}),e.jsx(re,{project:r,role:o,open:a&&r.id==="op"})]}),a?e.jsxs("div",{id:k,className:"nexus-project-threads","data-testid":`project-threads-${r.id}`,children:[t.length===0?e.jsx("p",{className:"nexus-sidebar-empty",children:n("sidebar.projectThreadsEmpty")}):null,v.map(l=>e.jsx("div",{className:"nexus-project-thread-item",children:e.jsx(q,{title:l.title,href:O(l),active:l.id===c,nested:!0,testId:`thread-row-${l.id}`})},l.id)),t.length>N?e.jsx("button",{type:"button",className:"nexus-chat-thread-btn is-nested nexus-sidebar-more","data-testid":`project-all-chats-${r.id}`,children:n("sidebar.projectChats.all",{count:String(t.length)})}):null]}):null]})}function ae({recentStatus:r="ready",recent:t=V,recentTotal:a=23,role:o="editor",expanded:c="op",activeThreadId:i}){const{t:n}=P(),[v,k]=B.useState(c),l=L.filter(s=>!s.personal),I=l.slice(0,1),$=r==="ready"?t.slice(0,C):[];return e.jsxs("aside",{className:"nexus-chat-sidebar nexus-sidebar-s0","aria-label":n("sidebar.label"),"data-testid":"project-sidebar","data-role":o,children:[e.jsxs("div",{className:"nexus-sidebar-top",children:[e.jsxs("a",{href:"#new-chat",className:"nexus-sidebar-row","data-testid":"sidebar-new-chat",children:[e.jsx(A,{size:15,"aria-hidden":!0}),n("sidebar.newChat")]}),e.jsxs("button",{type:"button",className:"nexus-sidebar-row","aria-keyshortcuts":"Meta+K Control+K","data-testid":"sidebar-search-open",children:[e.jsx(U,{size:15,"aria-hidden":!0}),n("sidebar.search"),e.jsx("kbd",{"aria-hidden":!0,children:"⌘K"})]})]}),e.jsxs("section",{className:"nexus-sidebar-section","aria-labelledby":"s0-sidebar-recent-heading","data-testid":"sidebar-recent","data-state":r,children:[e.jsx("div",{className:"nexus-chat-sidebar-group",id:"s0-sidebar-recent-heading",children:n("sidebar.recent")}),r==="loading"?e.jsx(ee,{}):null,r==="error"?e.jsx(F,{error:new H({kind:"unavailable"}),compact:!0,onRetry:()=>{}}):null,r==="empty"?e.jsx("p",{className:"nexus-sidebar-empty","data-testid":"sidebar-recent-empty",children:n("sidebar.recentEmpty")}):null,$.map(s=>e.jsx(q,{title:s.title,place:Z(n,s),placeKind:s.projectId===T?"personal":"project",placeAccent:s.projectId===T?void 0:d(s.projectId).accent,href:O(s),active:s.id===i,testId:`recent-row-${s.id}`,chip:s.id==="weekend"?e.jsx(J,{app:"tasks",screenKey:"board",testId:`recent-row-${s.id}-asked-from`}):void 0},s.id)),r==="ready"&&a>C?e.jsx("button",{type:"button",className:"nexus-chat-thread-btn nexus-sidebar-more","data-testid":"sidebar-all-chats",children:n("sidebar.chats.all",{count:String(a)})}):null]}),e.jsxs("section",{className:"nexus-sidebar-section","aria-labelledby":"s0-sidebar-projects-heading","data-testid":"sidebar-projects",children:[e.jsxs("div",{className:"nexus-chat-sidebar-group-row",children:[e.jsx("div",{className:"nexus-chat-sidebar-group",id:"s0-sidebar-projects-heading",children:n("sidebar.projects")}),e.jsx("button",{type:"button",className:"nexus-sidebar-icon-btn","aria-label":n("sidebar.newProject"),title:n("sidebar.newProject"),"data-testid":"sidebar-new-project",children:e.jsx(G,{size:14,"aria-hidden":!0})})]}),I.map(s=>e.jsx(te,{project:s,chats:s.id==="op"?K:[],expanded:v===s.id,role:o,activeThreadId:i,onToggle:()=>k(M=>M===s.id?null:s.id)},s.id)),e.jsxs("button",{type:"button",className:"nexus-project-row nexus-sidebar-all-projects","data-testid":"sidebar-all-projects",children:[e.jsx(Q,{size:14,"aria-hidden":!0}),n("sidebar.projects.all",{count:String(l.length)})]})]})]})}function se({children:r,note:t}){return e.jsxs("div",{className:"nexus-sidebar-s0-scene",children:[e.jsx("div",{className:"nexus-sidebar-s0-frame",style:{width:248,height:640},children:r}),t?e.jsx("p",{className:"nexus-sidebar-s0-note",children:t}):null]})}function ne(r){const{note:t,...a}=r;return e.jsx(se,{note:t,children:e.jsx(ae,{...a})})}const sr={title:"Apps/NexChat/Sidebar · Recent",component:ne,parameters:{ds:"DS-6907",layout:"padded"}};function S(r,t,a){const o=r.querySelector(`[data-testid="recent-row-${t}"] a`);if(!o)throw new globalThis.Error(`no Recent row ${t}`);const c=o.textContent?.replace(/\s+/g," ").trim()??"";if(!c.includes(`, ${a}`))throw new globalThis.Error(`the row's accessible name does not end with its place: "${c}"`);const i=o.querySelector(`[data-testid="recent-row-${t}-place"]`);if(!i||i.getAttribute("title")!==a)throw new globalThis.Error(`the row's place mark does not carry "${a}" in its tooltip`);if(i.dataset.kind==="project"&&!i.querySelector(".nexus-project-dot"))throw new globalThis.Error("a Project place without its dot");if(i.dataset.kind==="personal"&&i.querySelector(".nexus-project-dot"))throw new globalThis.Error("a Personal place with a Project dot")}const p={name:"recent-across-projects",args:{recentStatus:"ready",expanded:null},play:async({canvasElement:r})=>{if(S(r,"ker","Operations"),S(r,"weekend","Personal"),!r.querySelector('[data-testid="sidebar-all-chats"]'))throw new globalThis.Error("no All chats door")}},m={name:"recent-project-only",args:{expanded:"op",activeThreadId:"morning"},play:async({canvasElement:r})=>{if(!r.querySelector('[data-testid="project-all-chats-op"]'))throw new globalThis.Error("no View all chats door");if(r.querySelector('[data-testid="project-threads-op"] .nexus-recent-place'))throw new globalThis.Error("a place label inside the Project's own list")}},u={name:"recent-empty",args:{recentStatus:"empty",recentTotal:0,expanded:null}},h={name:"recent-loading",args:{recentStatus:"loading",expanded:null}},x={name:"recent-error",args:{recentStatus:"error",expanded:null}},j={name:"project-chats",args:{expanded:"op",role:"editor"}},w={name:"asked-from-mark",args:{expanded:null},play:async({canvasElement:r})=>{const t=r.querySelector('[data-testid="recent-row-weekend-asked-from"]');if(!t)throw new globalThis.Error("no asked-from mark on the hand-off row");if(!t.getAttribute("title")?.includes("Board"))throw new globalThis.Error("the mark's tooltip does not name the screen");if(r.querySelector(".nexus-ask-chip-from"))throw new globalThis.Error("the wide chip on a sidebar row");S(r,"weekend","Personal")}},b={name:"place-marks",args:{expanded:null},render:()=>e.jsxs("ul",{className:"nexus-list",style:{display:"flex",gap:"var(--nexus-space-5)",alignItems:"center"},"aria-label":"Place marks",children:[e.jsxs("li",{style:{display:"inline-flex",alignItems:"center",gap:"var(--nexus-space-2)"},children:[e.jsx(R,{place:d("op").name,kind:"project",accent:d("op").accent,testId:"place-mark-project"}),e.jsx("span",{children:d("op").name})]}),e.jsxs("li",{style:{display:"inline-flex",alignItems:"center",gap:"var(--nexus-space-2)"},children:[e.jsx(R,{place:"Personal",kind:"personal",testId:"place-mark-personal"}),e.jsx("span",{children:"Personal"})]})]}),play:async({canvasElement:r})=>{const t=r.querySelector('[data-testid="place-mark-project"]'),a=r.querySelector('[data-testid="place-mark-personal"]');if(!t?.querySelector(".nexus-project-dot"))throw new globalThis.Error("the Project mark has no accent dot");if(!a?.querySelector("svg"))throw new globalThis.Error("the personal mark has no glyph");if(!t.textContent?.includes(d("op").name)||!a.textContent?.includes("Personal"))throw new globalThis.Error("the place is not in the accessible name")}},g={name:"personal-hidden",args:{expanded:null,note:"PROJECTS lists Operations … (6) only — the personal Project is a context, never a row (); Recent still shows its chats as Personal."},play:async({canvasElement:r})=>{if([...r.querySelectorAll(".nexus-project-name")].map(a=>a.textContent).includes("Personal"))throw new globalThis.Error("a Personal row under PROJECTS");S(r,"weekend","Personal")}},y={name:"configure-row",args:{expanded:"op",role:"editor"},play:async({canvasElement:r})=>{const t=r.querySelector('[data-testid="project-configure-op"]');if(!t)throw new globalThis.Error("no Configure project item for an editor");if(t.getAttribute("role")!=="menuitem"||!t.closest("[role='menu']"))throw new globalThis.Error("Configure project is not a menu item");if(r.querySelector('[data-testid="project-threads-op"] [data-testid="project-configure-op"]'))throw new globalThis.Error("a Configure row under the chats");if(!(t.getAttribute("aria-label")??"").includes("Operations"))throw new globalThis.Error("the Configure item's label does not name the Project")}},f={name:"viewer",args:{expanded:"op",role:"viewer"},play:async({canvasElement:r})=>{if(r.querySelector('[data-testid="project-configure-op"]'))throw new globalThis.Error("a Configure item for a viewer");if(r.querySelector("[role='menu'] [aria-disabled]"))throw new globalThis.Error("a greyed menu item for a viewer")}},E={name:"uk",args:{expanded:"op",role:"editor"},globals:{locale:"uk"}},nr=["RecentAcrossProjects","RecentProjectOnly","RecentEmpty","RecentLoading","RecentError","ProjectChats","AskedFromMarkRow","PlaceMarks","PersonalHidden","ConfigureRow","Viewer","Uk"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "recent-across-projects",
  args: {
    recentStatus: "ready",
    expanded: null
  },
  play: async ({
    canvasElement
  }) => {
    expectRecentRow(canvasElement, "ker", "Operations");
    expectRecentRow(canvasElement, "weekend", "Personal");
    if (!canvasElement.querySelector('[data-testid="sidebar-all-chats"]')) throw new globalThis.Error("no All chats door");
  }
}`,...p.parameters?.docs?.source},description:{story:"Recent — mine, across Projects, the place at the right; *All chats (23)* beneath",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "recent-project-only",
  args: {
    expanded: "op",
    activeThreadId: "morning"
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="project-all-chats-op"]')) throw new globalThis.Error("no View all chats door");
    if (canvasElement.querySelector('[data-testid="project-threads-op"] .nexus-recent-place')) throw new globalThis.Error("a place label inside the Project's own list");
  }
}`,...m.parameters?.docs?.source},description:{story:"the Project's own list under its chevron — the same rows, the place implied, *View all chats (8)*",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "recent-empty",
  args: {
    recentStatus: "empty",
    recentTotal: 0,
    expanded: null
  }
}`,...u.parameters?.docs?.source},description:{story:"truly none — *No chats yet.* stays, now true ()",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "recent-loading",
  args: {
    recentStatus: "loading",
    expanded: null
  }
}`,...h.parameters?.docs?.source},description:{story:"five skeleton rows while the list loads",...h.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "recent-error",
  args: {
    recentStatus: "error",
    expanded: null
  }
}`,...x.parameters?.docs?.source},description:{story:"the list failed — the compact error with Retry; the Project list still renders",...x.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "project-chats",
  args: {
    expanded: "op",
    role: "editor"
  }
}`,...j.parameters?.docs?.source},description:{story:"PROJECTS — ★ Operations open: its chats, *View all chats (8)*; *Configure project* in the Project's `···` ()",...j.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "asked-from-mark",
  args: {
    expanded: null
  },
  play: async ({
    canvasElement
  }) => {
    const mark = canvasElement.querySelector<HTMLElement>('[data-testid="recent-row-weekend-asked-from"]');
    if (!mark) throw new globalThis.Error("no asked-from mark on the hand-off row");
    if (!mark.getAttribute("title")?.includes("Board")) throw new globalThis.Error("the mark's tooltip does not name the screen");
    if (canvasElement.querySelector(".nexus-ask-chip-from")) throw new globalThis.Error("the wide chip on a sidebar row");
    expectRecentRow(canvasElement, "weekend", "Personal");
  }
}`,...w.parameters?.docs?.source},description:{story:" — a hand-off chat's asked-from is the app's glyph in its accent, the words in the tooltip and the name",...w.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "place-marks",
  args: {
    expanded: null
  },
  render: () => <ul className="nexus-list" style={{
    display: "flex",
    gap: "var(--nexus-space-5)",
    alignItems: "center"
  }} aria-label="Place marks">
      <li style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--nexus-space-2)"
    }}>
        <PlaceMark place={projectOf("op").name} kind="project" accent={projectOf("op").accent} testId="place-mark-project" />
        <span>{projectOf("op").name}</span>
      </li>
      <li style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--nexus-space-2)"
    }}>
        <PlaceMark place="Personal" kind="personal" testId="place-mark-personal" />
        <span>Personal</span>
      </li>
    </ul>,
  play: async ({
    canvasElement
  }) => {
    const project = canvasElement.querySelector<HTMLElement>('[data-testid="place-mark-project"]');
    const personal = canvasElement.querySelector<HTMLElement>('[data-testid="place-mark-personal"]');
    if (!project?.querySelector(".nexus-project-dot")) throw new globalThis.Error("the Project mark has no accent dot");
    if (!personal?.querySelector("svg")) throw new globalThis.Error("the personal mark has no glyph");
    if (!project.textContent?.includes(projectOf("op").name) || !personal.textContent?.includes("Personal")) throw new globalThis.Error("the place is not in the accessible name");
  }
}`,...b.parameters?.docs?.source},description:{story:"S5 H1 (): `PlaceMark` — the Project's accent dot and the person glyph; the place is in the accessible name, never colour alone.",...b.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "personal-hidden",
  args: {
    expanded: null,
    note: "PROJECTS lists Operations … (6) only — the personal Project is a context, never a row (); Recent still shows its chats as Personal."
  },
  play: async ({
    canvasElement
  }) => {
    const names = [...canvasElement.querySelectorAll(".nexus-project-name")].map(n => n.textContent);
    if (names.includes("Personal")) throw new globalThis.Error("a Personal row under PROJECTS");
    expectRecentRow(canvasElement, "weekend", "Personal");
  }
}`,...g.parameters?.docs?.source},description:{story:" — Recent shows *Personal* chats; PROJECTS has no Personal row",...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "configure-row",
  args: {
    expanded: "op",
    role: "editor"
  },
  play: async ({
    canvasElement
  }) => {
    const item = canvasElement.querySelector<HTMLButtonElement>('[data-testid="project-configure-op"]');
    if (!item) throw new globalThis.Error("no Configure project item for an editor");
    if (item.getAttribute("role") !== "menuitem" || !item.closest("[role='menu']")) throw new globalThis.Error("Configure project is not a menu item");
    if (canvasElement.querySelector('[data-testid="project-threads-op"] [data-testid="project-configure-op"]')) throw new globalThis.Error("a Configure row under the chats");
    const label = item.getAttribute("aria-label") ?? "";
    if (!label.includes("Operations")) throw new globalThis.Error("the Configure item's label does not name the Project");
  }
}`,...y.parameters?.docs?.source},description:{story:" — an editor's *Configure project* is the second item of the Project's `···` menu, named for the Project",...y.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "viewer",
  args: {
    expanded: "op",
    role: "viewer"
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="project-configure-op"]')) throw new globalThis.Error("a Configure item for a viewer");
    if (canvasElement.querySelector("[role='menu'] [aria-disabled]")) throw new globalThis.Error("a greyed menu item for a viewer");
  }
}`,...f.parameters?.docs?.source},description:{story:"a viewer — no Configure item in the `···`, nothing greyed",...f.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "uk",
  args: {
    expanded: "op",
    role: "editor"
  },
  globals: {
    locale: "uk"
  }
}`,...E.parameters?.docs?.source}}};export{w as AskedFromMarkRow,y as ConfigureRow,g as PersonalHidden,b as PlaceMarks,j as ProjectChats,p as RecentAcrossProjects,u as RecentEmpty,x as RecentError,h as RecentLoading,m as RecentProjectOnly,E as Uk,f as Viewer,nr as __namedExportsOrder,sr as default};
