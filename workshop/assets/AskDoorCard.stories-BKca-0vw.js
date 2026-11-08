import{j as r,r as w}from"./iframe-C_4ax-Jm.js";import{A as D,S as x,a as b}from"./AskPanel-DKkH7ynl.js";import"./preload-helper-PPVm8Dsz.js";const g={proposed:{id:"m2",title:"Invite your team",detail:"Two people see this organization today — Nexiflow has room.",state:"proposed",door:"/core/people?invite=1",doorLabel:"Open People"},done:{id:"m2",title:"Invite your team",state:"done",doneLabel:"Marko joined as a Member."},blocked:{id:"m2",title:"Add a model key",detail:"OpenAI is waiting for a key — your agents answer once it has one.",state:"blocked",door:"/core/connections?open=cpy_openai&tab=credentials",doorLabel:"Open Models"},dismissed:{id:"m2",title:"Invite your team",state:"dismissed"},declined:{id:"m2",title:"Invite your team",state:"declined"}};function y({state:e}){const[o,s]=w.useState(!1);return r.jsx(D,{card:o?g.dismissed:g[e],onDismiss:()=>s(!0),onOpen:()=>{}})}const P={title:"Conversation/Ask door card",component:y,parameters:{ds:"DS-7011",layout:"padded"},excludeStories:/^SUPPORT_DOOR/},a={args:{state:"proposed"}},n={args:{state:"done"}},d={args:{state:"blocked"}},i={args:{state:"dismissed"}},k={id:"sd1",title:"Ask NEXUS support",detail:"Your question travels only if you choose to carry it over.",state:"proposed",door:"#support",doorLabel:"Ask NEXUS support →"},v={id:"sd1",title:"Запитати підтримку NEXUS",detail:"Ваше запитання передається лише тоді, коли ви самі вирішите його перенести.",state:"proposed",door:"#support",doorLabel:"Запитати підтримку NEXUS →"},p={name:"Support door · the words (fixture)",args:{state:"proposed"},render:()=>r.jsx(D,{card:k,onOpen:()=>{},onDismiss:()=>{}})};function t({reason:e="no_route",door:o=!0}){const[s,f]=w.useState(null);return r.jsxs(x.Provider,{value:o?{open:h=>f(`${h.app} · ${h.label??""} · ${h.text??""}`)}:null,children:[r.jsx(b,{reason:e,from:{app:"NexGraph",label:"Processing"},text:"why did our processing stop?",turnKey:"t1"}),s?r.jsx("p",{"data-testid":"opened",children:s}):null]})}const c={name:"Support door · after a dead-end answer ()",args:{state:"proposed"},render:()=>r.jsx(t,{}),play:async({canvasElement:e})=>{const o=e.querySelector("a");if(!o||!/Ask NEXUS support/.test(o.textContent??""))throw new globalThis.Error("the door is a real link that names its destination");if(/credits|balance|frame|assertion/i.test(e.textContent??""))throw new globalThis.Error("no mechanism word, no balance on the door");if(o.getAttribute("href")!=="#support")throw new globalThis.Error("the door opens the drawer, never a route");if(o.click(),await new Promise(s=>setTimeout(s,0)),!/NexGraph · Processing · why did our processing stop\?/.test(e.textContent??""))throw new globalThis.Error("the press carries the app, the label and the person's question")}},l={name:"Support door · after a refusal for credits",args:{state:"proposed"},render:()=>r.jsx(t,{reason:"credits"})},u={name:"Support door · Not now",args:{state:"dismissed"},render:()=>r.jsx(t,{}),play:async({canvasElement:e})=>{if(e.querySelector("button")?.click(),await new Promise(o=>setTimeout(o,0)),!e.querySelector('[data-state="dismissed"]'))throw new globalThis.Error("Not now folds the card to one line")}},m={name:"Support door · a Visitor sees nothing",args:{state:"proposed"},render:()=>r.jsx(t,{door:!1}),play:async({canvasElement:e})=>{if(e.querySelector("[data-testid='support-door']"))throw new globalThis.Error("no door for a Visitor — nothing renders")}},S={name:"Support door · українською",args:{state:"proposed"},render:()=>r.jsx(t,{}),globals:{locale:"uk"}},N=["Proposed","Done","Blocked","Dismissed","SUPPORT_DOOR","SUPPORT_DOOR_UK","SupportDoorWords","SupportDoor","SupportDoorCredits","SupportDoorDismissed","SupportDoorNoDoor","SupportDoorUkrainian"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    state: "proposed"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    state: "done"
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    state: "blocked"
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    state: "dismissed"
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Support door · the words (fixture)",
  args: {
    state: "proposed"
  },
  render: () => <AskDoorCardView card={SUPPORT_DOOR} onOpen={() => undefined} onDismiss={() => undefined} />
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Support door · after a dead-end answer ()",
  args: {
    state: "proposed"
  },
  render: () => <SupportDoorDemo />,
  play: async ({
    canvasElement
  }) => {
    const link = canvasElement.querySelector("a");
    if (!link || !/Ask NEXUS support/.test(link.textContent ?? "")) throw new globalThis.Error("the door is a real link that names its destination");
    if (/credits|balance|frame|assertion/i.test(canvasElement.textContent ?? "")) throw new globalThis.Error("no mechanism word, no balance on the door");
    if (link.getAttribute("href") !== "#support") throw new globalThis.Error("the door opens the drawer, never a route");
    link.click();
    await new Promise(r => setTimeout(r, 0));
    if (!/NexGraph · Processing · why did our processing stop\\?/.test(canvasElement.textContent ?? "")) throw new globalThis.Error("the press carries the app, the label and the person's question");
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Support door · after a refusal for credits",
  args: {
    state: "proposed"
  },
  render: () => <SupportDoorDemo reason="credits" />
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Support door · Not now",
  args: {
    state: "dismissed"
  },
  render: () => <SupportDoorDemo />,
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>("button")?.click();
    await new Promise(r => setTimeout(r, 0));
    if (!canvasElement.querySelector('[data-state="dismissed"]')) throw new globalThis.Error("Not now folds the card to one line");
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Support door · a Visitor sees nothing",
  args: {
    state: "proposed"
  },
  render: () => <SupportDoorDemo door={false} />,
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector("[data-testid='support-door']")) throw new globalThis.Error("no door for a Visitor — nothing renders");
  }
}`,...m.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Support door · українською",
  args: {
    state: "proposed"
  },
  render: () => <SupportDoorDemo />,
  globals: {
    locale: "uk"
  }
}`,...S.parameters?.docs?.source}}};export{d as Blocked,i as Dismissed,n as Done,a as Proposed,k as SUPPORT_DOOR,v as SUPPORT_DOOR_UK,c as SupportDoor,l as SupportDoorCredits,u as SupportDoorDismissed,m as SupportDoorNoDoor,S as SupportDoorUkrainian,p as SupportDoorWords,N as __namedExportsOrder,P as default};
