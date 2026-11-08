import{j as p}from"./iframe-C_4ax-Jm.js";import"./harness-p7-wY8XY.js";import{P as d}from"./ProjectHeaderView-D6sJuOrU.js";import{H as f,a as w,P as g,O as j}from"./projectHeader045Fixtures-CdGC8kc7.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */import"./pin-zHWwwtbl.js";import"./info-Bk_zTNpg.js";import"./file-text-D2w4_mYA.js";import"./settings-2-DzycKneG.js";function h({role:e,personal:n=!1,offline:t=!1,thread:o=!0}){return p.jsx("div",{className:"nexus-project-header-s0-frame",children:p.jsx(d,{project:n?g:j,threadTitle:o?w:void 0,role:e,counts:f,offline:t,onPick:()=>{}})})}const D={title:"Apps/NexChat/Project header",component:h,parameters:{ds:"DS-6905",layout:"padded"},argTypes:{role:{control:"select",options:["viewer","editor","owner","pending"]}}},y=(e=30)=>new Promise(n=>setTimeout(n,e));async function m(e){const n=e.querySelector('[data-testid="project-menu"]');if(!n)throw new globalThis.Error("no Project name button");n.click(),await y();const o=e.ownerDocument.querySelector('[role="menu"]');if(!o)throw new globalThis.Error("the name menu did not open");return[...o.querySelectorAll('[role="menuitem"]')]}const l=e=>e.map(n=>n.getAttribute("data-testid")),r={name:"viewer",args:{role:"viewer"},play:async({canvasElement:e})=>{const n=await m(e),t=l(n),o=["project-menu-details","project-menu-view-artifacts","project-menu-automations","project-menu-pin"];if(t.join()!==o.join())throw new globalThis.Error(`viewer menu: ${t.join(" · ")}`);if(!(n[2].textContent??"").includes("3"))throw new globalThis.Error("Automations does not carry its count")}},a={name:"editor-menu",args:{role:"editor"},play:async({canvasElement:e})=>{const n=await m(e),t=l(n),o=["project-menu-details","project-menu-view-artifacts","project-menu-automations","project-menu-configure","project-menu-pin"];if(t.join()!==o.join())throw new globalThis.Error(`editor menu: ${t.join(" · ")}`)}},i={name:"personal",args:{role:"owner",personal:!0,thread:!0},play:async({canvasElement:e})=>{if(e.querySelector('[data-testid="project-classification"]'))throw new globalThis.Error("a classification on the personal header");const n=await m(e);if(l(n).join()!=="project-menu-pin")throw new globalThis.Error(`personal menu: ${l(n).join(" · ")}`)}},s={name:"role-pending",args:{role:"pending"},play:async({canvasElement:e})=>{const n=await m(e);if(l(n).includes("project-menu-configure"))throw new globalThis.Error("a Configure door before the role is known")}},c={name:"offline",args:{role:"owner",offline:!0},play:async({canvasElement:e})=>{if((await m(e)).find(o=>o.getAttribute("data-testid")==="project-menu-configure")?.getAttribute("aria-disabled")!=="true")throw new globalThis.Error("Configure is not aria-disabled offline")}},u={name:"uk",args:{role:"editor"},globals:{locale:"uk"}},B=["Viewer","EditorMenu","Personal","RolePending","Offline","Uk"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "viewer",
  args: {
    role: "viewer"
  },
  play: async ({
    canvasElement
  }) => {
    const items = await openMenu(canvasElement);
    const got = ids(items);
    const want = ["project-menu-details", "project-menu-view-artifacts", "project-menu-automations", "project-menu-pin"];
    if (got.join() !== want.join()) throw new globalThis.Error(\`viewer menu: \${got.join(" · ")}\`);
    // the count is part of \`project.menu.automations\` — until the key is merged the key itself stands in (brief rule 4)
    const text = items[2].textContent ?? "";
    if (!text.includes("3")) throw new globalThis.Error("Automations does not carry its count");
  }
}`,...r.parameters?.docs?.source},description:{story:"a viewer — *Project details · View artifacts · 8 · Automations · 3 · Pin*; no Configure ()",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "editor-menu",
  args: {
    role: "editor"
  },
  play: async ({
    canvasElement
  }) => {
    const items = await openMenu(canvasElement);
    const got = ids(items);
    const want = ["project-menu-details", "project-menu-view-artifacts", "project-menu-automations", "project-menu-configure", "project-menu-pin"];
    if (got.join() !== want.join()) throw new globalThis.Error(\`editor menu: \${got.join(" · ")}\`);
  }
}`,...a.parameters?.docs?.source},description:{story:"an editor — *Configure project…* between *Automations* and *Pin*",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "personal",
  args: {
    role: "owner",
    personal: true,
    thread: true
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="project-classification"]')) throw new globalThis.Error("a classification on the personal header");
    const items = await openMenu(canvasElement);
    if (ids(items).join() !== "project-menu-pin") throw new globalThis.Error(\`personal menu: \${ids(items).join(" · ")}\`);
  }
}`,...i.parameters?.docs?.source},description:{story:" — `● Personal`, no classification; the menu is *Pin* only",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "role-pending",
  args: {
    role: "pending"
  },
  play: async ({
    canvasElement
  }) => {
    const items = await openMenu(canvasElement);
    if (ids(items).includes("project-menu-configure")) throw new globalThis.Error("a Configure door before the role is known");
  }
}`,...s.parameters?.docs?.source},description:{story:"the role is not known yet — no Configure door (fail closed)",...s.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "offline",
  args: {
    role: "owner",
    offline: true
  },
  play: async ({
    canvasElement
  }) => {
    const items = await openMenu(canvasElement);
    const configure = items.find(i => i.getAttribute("data-testid") === "project-menu-configure");
    if (configure?.getAttribute("aria-disabled") !== "true") throw new globalThis.Error("Configure is not aria-disabled offline");
  }
}`,...c.parameters?.docs?.source},description:{story:"offline — the Configure item stays, disabled in words for assistive tech",...c.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "uk",
  args: {
    role: "editor"
  },
  globals: {
    locale: "uk"
  }
}`,...u.parameters?.docs?.source}}};export{a as EditorMenu,c as Offline,i as Personal,s as RolePending,u as Uk,r as Viewer,B as __namedExportsOrder,D as default};
