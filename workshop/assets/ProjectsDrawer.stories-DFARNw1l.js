import{j as e,ak as x,r as p,s as S,an as A,a as v}from"./iframe-C_4ax-Jm.js";import"./harness-p7-wY8XY.js";import{P as T}from"./ProjectHeaderView-D6sJuOrU.js";import{H as N,a as q,O as P}from"./projectHeader045Fixtures-CdGC8kc7.js";import{P as w,A as y,p as g,t as C}from"./recentRow045Fixtures-CPaRCboF.js";import{S as L}from"./search-Fa0aXA-H.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */import"./pin-zHWwwtbl.js";import"./info-Bk_zTNpg.js";import"./file-text-D2w4_mYA.js";import"./settings-2-DzycKneG.js";const m="__all";function _(r,t){return t.projectId===w?r("sidebar.personal"):g(t.projectId).name}function D({places:r,value:t,onChange:s}){const{t:n}=x(),i=p.useId();return e.jsxs("fieldset",{className:"nexus-drawer-filter nexus-chips","data-testid":"drawer-place-filter",children:[e.jsx("legend",{className:"nexus-sr-only",children:n("drawer.filter.place")}),[{id:m,label:n("drawer.filter.all")},...r].map(o=>{const l=t===o.id;return e.jsxs("label",{className:"nexus-drawer-filter-chip","data-on":l?"true":void 0,children:[e.jsx("input",{type:"radio",name:i,value:o.id,checked:l,onChange:()=>s(o.id),className:"nexus-sr-only"}),e.jsx(v,{tone:l?"ok":"neutral",testId:`drawer-filter-${o.id}`,children:o.label})]},o.id)})]})}function R({threads:r}){const{t}=x(),[s,n]=p.useState(m),[i,o]=p.useState(""),l=t("drawer.chats.title"),E=[...new Set(r.map(a=>a.projectId))].map(a=>({id:a,label:a===w?t("sidebar.personal"):g(a).name})),b=S(r.length,s!==m),h=i.trim().toLowerCase(),f=r.filter(a=>(s===m||a.projectId===s)&&(!h||a.title.toLowerCase().includes(h)));return e.jsxs("aside",{className:"nexus-drawer nexus-drawer-s0",role:"dialog","aria-modal":"true","aria-label":l,"data-testid":"projects-drawer","data-mode":"chats",children:[e.jsxs("header",{className:"nexus-drawer-head",children:[e.jsx("h2",{children:l}),e.jsx("button",{type:"button",className:"nexus-sidebar-icon-btn","aria-label":t("action.close"),"data-testid":"drawer-close",children:e.jsx(A,{size:16,"aria-hidden":!0})})]}),b?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"nexus-sidebar-search nexus-drawer-search",role:"search",children:[e.jsx(L,{size:14,"aria-hidden":!0}),e.jsx("input",{type:"search",value:i,placeholder:t("drawer.search.chats"),"aria-label":t("drawer.search.chats"),"data-testid":"drawer-search",onChange:a=>o(a.target.value)})]}),e.jsx(D,{places:E,value:s,onChange:n})]}):null,e.jsx("div",{className:"nexus-drawer-body",children:f.length===0?e.jsx("p",{className:"nexus-sidebar-empty",role:"status","data-testid":"drawer-empty",children:h?t("drawer.empty",{query:i.trim()}):t("sidebar.recentEmpty")}):e.jsx("ul",{className:"nexus-drawer-list","data-testid":"drawer-all",children:f.map(a=>e.jsx("li",{children:e.jsx("a",{href:C(a),className:"nexus-drawer-row",title:a.title,"data-testid":`drawer-thread-${a.id}`,children:e.jsxs("span",{className:"nexus-drawer-text",children:[e.jsx("span",{className:"nexus-drawer-title",children:a.title}),e.jsx("small",{className:"nexus-drawer-meta",children:_(t,a)})]})})},a.id))})})]})}function k({scene:r}){return r==="automations-readonly"?e.jsx("div",{className:"nexus-project-header-s0-frame",children:e.jsx(T,{project:P,threadTitle:q,role:"viewer",counts:N,onPick:()=>{}})}):e.jsx("div",{className:"nexus-drawer-s0-frame",style:{height:640},children:e.jsx(R,{threads:r==="filter"?y:y.slice(0,8)})})}const X={title:"Apps/NexChat/All chats drawer",component:k,parameters:{ds:"DS-6907",layout:"padded"}},j=(r=30)=>new Promise(t=>setTimeout(t,r)),c={name:"all-chats-filter",args:{scene:"filter"},play:async({canvasElement:r})=>{if(r.querySelectorAll('[data-testid^="drawer-thread-"]').length!==23)throw new globalThis.Error("not 23 rows");if(!r.querySelector('[data-testid="drawer-place-filter"]'))throw new globalThis.Error("no Project filter past twelve rows");const s=r.querySelector(`input[value="${w}"]`);if(!s)throw new globalThis.Error("no Personal chip");s.click(),await j();const n=r.querySelectorAll('[data-testid^="drawer-thread-"]');if(n.length===0||n.length===23)throw new globalThis.Error(`the Personal filter did not narrow the list: ${n.length}`)}},d={name:"all-chats-under-12",args:{scene:"under-12"},play:async({canvasElement:r})=>{if(r.querySelector('[data-testid="drawer-place-filter"]')||r.querySelector('[data-testid="drawer-search"]'))throw new globalThis.Error("a control over a list that fits");if(r.querySelectorAll('[data-testid^="drawer-thread-"]').length!==8)throw new globalThis.Error("not 8 rows")}},u={name:"automations-readonly",args:{scene:"automations-readonly"},play:async({canvasElement:r})=>{r.querySelector('[data-testid="project-menu"]')?.click(),await j();const t=[...r.ownerDocument.querySelectorAll('[role="menu"] [role="menuitem"]')].map(s=>s.getAttribute("data-testid"));if(!t.includes("project-menu-automations")||t.includes("project-menu-configure"))throw new globalThis.Error(`viewer menu: ${t.join(" · ")}`)}},G=["AllChatsFilter","AllChatsUnder12","AutomationsReadonly"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "all-chats-filter",
  args: {
    scene: "filter"
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelectorAll('[data-testid^="drawer-thread-"]').length !== 23) throw new globalThis.Error("not 23 rows");
    const filter = canvasElement.querySelector('[data-testid="drawer-place-filter"]');
    if (!filter) throw new globalThis.Error("no Project filter past twelve rows");
    const personal = canvasElement.querySelector<HTMLInputElement>(\`input[value="\${PERSONAL_PROJECT_ID}"]\`);
    if (!personal) throw new globalThis.Error("no Personal chip");
    personal.click();
    await tick();
    const rows = canvasElement.querySelectorAll('[data-testid^="drawer-thread-"]');
    if (rows.length === 0 || rows.length === 23) throw new globalThis.Error(\`the Personal filter did not narrow the list: \${rows.length}\`);
  }
}`,...c.parameters?.docs?.source},description:{story:"23 chats — the search and the Project chips appear (: past twelve rows)",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "all-chats-under-12",
  args: {
    scene: "under-12"
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="drawer-place-filter"]') || canvasElement.querySelector('[data-testid="drawer-search"]')) throw new globalThis.Error("a control over a list that fits");
    if (canvasElement.querySelectorAll('[data-testid^="drawer-thread-"]').length !== 8) throw new globalThis.Error("not 8 rows");
  }
}`,...d.parameters?.docs?.source},description:{story:"eight chats fit on one screen — no search, no filter, the list is the whole chrome",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "automations-readonly",
  args: {
    scene: "automations-readonly"
  },
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="project-menu"]')?.click();
    await tick();
    const items = [...canvasElement.ownerDocument.querySelectorAll<HTMLElement>('[role="menu"] [role="menuitem"]')].map(i => i.getAttribute("data-testid"));
    if (!items.includes("project-menu-automations") || items.includes("project-menu-configure")) throw new globalThis.Error(\`viewer menu: \${items.join(" · ")}\`);
  }
}`,...u.parameters?.docs?.source},description:{story:" — not a drawer any more: a member's door to the read-only Automations page is the name menu's *Automations · 3*",...u.parameters?.docs?.description}}};export{c as AllChatsFilter,d as AllChatsUnder12,u as AutomationsReadonly,G as __namedExportsOrder,X as default};
