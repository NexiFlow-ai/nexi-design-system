import{r as h,j as l}from"./iframe-C_4ax-Jm.js";import{R as f}from"./RoomHeader-Dll_zJRu.js";import"./preload-helper-PPVm8Dsz.js";import"./BrandMark-ZJnyD0IE.js";import"./users-w3fldoSO.js";import"./search-Fa0aXA-H.js";function S(r){const[t,e]=h.useState([]),[p,u]=h.useState(r.menuOpen??!1),o=k=>e(x=>[...x,k]),w=[{id:"details",label:"Room details",onSelect:()=>o("details")},{id:"members",label:"Members",onSelect:()=>o("members")},{id:"mute",label:"Mute",onSelect:()=>o("mute")},{id:"leave",label:"Leave room",onSelect:()=>o("leave"),danger:!0}],{withMenu:g=!0,withSearch:b=!0,...y}=r;return l.jsxs("div",{style:{width:760,border:"1px solid var(--nexus-border)",minHeight:160},children:[l.jsx(f,{...y,menuOpen:p,onMenuOpenChange:u,actions:g?w:void 0,onMembers:()=>o("members"),onSearch:b?()=>o("search"):void 0,onClose:()=>o("close")}),l.jsx("output",{"data-testid":"header-log",style:{display:"none"},children:t.join("|")})]})}const O={title:"Apps/Nexi Spin/Room header",component:S,parameters:{ds:"DS-6921",layout:"padded"}},s={args:{kind:"room",title:"supply-desk",topic:"Rates, bookings and the week's shipments",members:6,nexiInRoom:!0}},n={args:{kind:"room",title:"warehouse",members:3}},a={args:{kind:"room",title:"supply-desk",topic:"Rates, bookings and the week's shipments",members:6,nexiInRoom:!0,menuOpen:!0},play:async({canvasElement:r})=>{const t=e=>r.querySelector(`[data-testid="${e}"]`);if(!t("room-header-menu"))throw new globalThis.Error("the menu is not open");if(t("room-header-action-mute")?.click(),await new Promise(e=>setTimeout(e,20)),!t("header-log")?.textContent?.includes("mute"))throw new globalThis.Error("the action did not reach the host");if(t("room-header-menu"))throw new globalThis.Error("the menu did not close")}},i={args:{kind:"direct",title:"Olena",person:{name:"Olena"},topic:"Supply desk · in the office until 18:00"}},c={args:{kind:"nexi",withMenu:!1}},m={args:{kind:"thread",withMenu:!1,withSearch:!1},play:async({canvasElement:r})=>{const t=e=>r.querySelector(`[data-testid="${e}"]`);if(t("room-header-close")?.click(),await new Promise(e=>setTimeout(e,20)),!t("header-log")?.textContent?.includes("close"))throw new globalThis.Error("close did not reach the host")}},d={args:{kind:"room",title:"supply-desk",members:6},play:async({canvasElement:r})=>{const t=e=>r.querySelector(`[data-testid="${e}"]`);if(t("room-header-members")?.click(),await new Promise(e=>setTimeout(e,20)),!t("header-log")?.textContent?.includes("members"))throw new globalThis.Error("the members chip did not reach the host")}},C=["Room","RoomPlain","MenuOpen","Direct","Nexi","Thread","MembersDoor"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "room",
    title: "supply-desk",
    topic: "Rates, bookings and the week's shipments",
    members: 6,
    nexiInRoom: true
  }
}`,...s.parameters?.docs?.source},description:{story:"A room — `#supply-desk`, its topic beside, *Nexi is here*, the members chip, search, `⋯`.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "room",
    title: "warehouse",
    members: 3
  }
}`,...n.parameters?.docs?.source},description:{story:"A room without Nexi and without a topic — the line stays one line.",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "room",
    title: "supply-desk",
    topic: "Rates, bookings and the week's shipments",
    members: 6,
    nexiInRoom: true,
    menuOpen: true
  },
  play: async ({
    canvasElement
  }) => {
    const q = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    if (!q("room-header-menu")) throw new globalThis.Error("the menu is not open");
    q("room-header-action-mute")?.click();
    await new Promise(r => setTimeout(r, 20));
    if (!q("header-log")?.textContent?.includes("mute")) throw new globalThis.Error("the action did not reach the host");
    if (q("room-header-menu")) throw new globalThis.Error("the menu did not close");
  }
}`,...a.parameters?.docs?.source},description:{story:"The `⋯` menu open — details · members · mute · leave (the host fills it).",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "direct",
    title: "Olena",
    person: {
      name: "Olena"
    },
    topic: "Supply desk · in the office until 18:00"
  }
}`,...i.parameters?.docs?.source},description:{story:"A chat with a person — the face, the name, their one line of status.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "nexi",
    withMenu: false
  }
}`,...c.parameters?.docs?.source},description:{story:"The chat with Nexi — the wordmark for a face; no members, no leave.",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "thread",
    withMenu: false,
    withSearch: false
  },
  play: async ({
    canvasElement
  }) => {
    const q = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    q("room-header-close")?.click();
    await new Promise(r => setTimeout(r, 20));
    if (!q("header-log")?.textContent?.includes("close")) throw new globalThis.Error("close did not reach the host");
  }
}`,...m.parameters?.docs?.source},description:{story:"A thread — *Thread* and its close; the root is pinned in the panel beneath (DS-5023).",...m.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "room",
    title: "supply-desk",
    members: 6
  },
  play: async ({
    canvasElement
  }) => {
    const q = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    q("room-header-members")?.click();
    await new Promise(r => setTimeout(r, 20));
    if (!q("header-log")?.textContent?.includes("members")) throw new globalThis.Error("the members chip did not reach the host");
  }
}`,...d.parameters?.docs?.source},description:{story:"Members — the chip is a door.",...d.parameters?.docs?.description}}};export{i as Direct,d as MembersDoor,a as MenuOpen,c as Nexi,s as Room,n as RoomPlain,m as Thread,C as __namedExportsOrder,O as default};
