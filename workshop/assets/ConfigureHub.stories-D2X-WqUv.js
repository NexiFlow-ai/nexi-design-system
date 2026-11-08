import{ak as _,j as o,a as O,aD as L,w as $,v as B,B as P,X as F,D as U,r as H,ad as M,ab as R}from"./iframe-C_4ax-Jm.js";import"./harness-p7-wY8XY.js";import{P as V}from"./plus-Dc-VMSiJ.js";import{C as z}from"./ConfigureHub-a_GSs_jQ.js";import{H as I,a as W,A as G}from"./configureHub045Fixtures-ByaJH8nN.js";import{T as J}from"./ToolsScreen-ERDdecc8.js";import{a as K}from"./toolsScreen045Fixtures-0e6sbhDQ.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */import"./boxes-Cqxx_HWk.js";import"./workflow-BGMWCDzG.js";import"./factory-Ck7b_c89.js";import"./building-2-GerxkJzZ.js";import"./globe-DcMfC0yC.js";import"./database-BGWOjs-M.js";import"./compass-D5LaBgzz.js";import"./file-text-D2w4_mYA.js";import"./pencil-CCPuQVYt.js";import"./arrow-up-right-Ba_U-eY4.js";import"./play-D-gzWo7v.js";const Q={enabled:"ok",paused:"muted",awaiting:"warn",draft:"muted"};function v({rows:t,variant:n="builders",state:r,onNew:i,onAction:u,onRetry:q,testId:l="automations"}){const{t:a}=_(),T=n==="builders",s=e=>e.face==="enabled"?e.nextRun?a("automation.face.enabled",{when:e.nextRun}):a("automation.list.face.enabled"):e.face==="paused"?a("automation.face.paused"):e.face==="draft"?a("automation.list.face.draft"):a("automation.face.awaiting"),D={pause:a("automation.list.action.pause"),resume:a("automation.list.action.resume"),open:a("automation.list.action.open"),enable:a("automation.list.action.enable"),needs_changes:a("automation.list.action.needs_changes")},N=e=>e.actions?e.actions.map(c=>({id:c,label:D[c]})):e.face==="awaiting"?[{id:"enable",label:a("automation.list.action.enable")},{id:"needs_changes",label:a("automation.list.action.needs_changes")}]:[{id:e.face==="enabled"?"pause":"resume",label:e.face==="enabled"?a("automation.list.action.pause"):a("automation.list.action.resume")},{id:"open",label:a("automation.list.action.open")}],j=[{key:"name",header:a("automation.list.col.name"),render:e=>o.jsx("span",{className:"nexus-cc-primary",children:e.name})},{key:"schedule",header:a("automation.list.col.schedule"),render:e=>e.technical?o.jsxs("span",{className:"nexus-automations-schedule",children:[e.schedule,o.jsxs("code",{className:"nexus-live-meta nexus-automations-technical",children:[a("agent.tools.inspector.technical")," · ",e.technical]})]}):e.schedule},{key:"face",header:a("automation.list.col.status"),render:e=>o.jsx(O,{tone:Q[e.face],testId:`${l}-face-${e.id}`,children:s(e)})},{key:"lastRun",header:a("automation.list.col.lastRun"),render:e=>e.lastRun?o.jsxs("span",{className:"nexus-automations-run","data-ok":e.lastRun.ok?"true":"false",children:[e.lastRun.when,e.lastRun.ok?o.jsx(L,{size:12,role:"img","aria-label":a("automation.list.runOk")}):o.jsx("span",{className:"nexus-live-meta",children:a("automation.list.runFailed")})]}):o.jsx("span",{className:"nexus-live-meta",children:"—"})},{key:"owner",header:a("automation.list.col.owner"),render:e=>e.owner}];T&&j.push({key:"actions",header:o.jsx("span",{className:"nexus-visually-hidden",children:a("automation.list.col.actions")}),align:"right",render:e=>N(e).length===0?null:o.jsx($,{className:"is-flush",label:a("automation.list.actionsFor",{name:e.name}),testId:`${l}-actions-${e.id}`,children:N(e).map(c=>o.jsx(B,{tone:"quiet",onClick:()=>u?.(e,c.id),"data-testid":`${l}-${c.id}-${e.id}`,children:c.label},c.id))})});const C=T&&i?o.jsxs(P,{size:"toolbar",onClick:i,"data-testid":`${l}-new`,children:[o.jsx(V,{size:14,"aria-hidden":!0}),a("automation.list.new")]}):void 0;return o.jsx("div",{className:"nexus-automations","data-testid":l,"data-variant":n,children:o.jsx(F,{title:a("automation.list.title",{count:String(t.length)}),aside:r?void 0:C,testId:`${l}-section`,children:o.jsx(U,{rows:t,columns:j,rowKey:e=>e.id,caption:a("automation.list.caption"),state:r,onRetry:q,empty:{title:a("automation.list.empty"),action:C},testId:`${l}-table`})})})}v.__docgenInfo={description:` S0 (DS-6906 · draft §15.3 · ): the Automations tab's body — the head *Automations · N* with *+ New
automation* (builders), the \`DataTable\` name · schedule · face · last run · owner · actions. \`variant="members"\`
drops the primary and the actions column; the rows are identical (). The three list states are the table's
own (DS-3030): loading · error with Retry · *No automations yet* with the one door.`,methods:[],displayName:"AutomationsTable",props:{rows:{required:!0,tsType:{name:"Array",elements:[{name:"AutomationRow"}],raw:"AutomationRow[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"builders" | "members"',elements:[{name:"literal",value:'"builders"'},{name:"literal",value:'"members"'}]},description:"",defaultValue:{value:'"builders"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"loading" | "error"',elements:[{name:"literal",value:'"loading"'},{name:"literal",value:'"error"'}]},description:""},onNew:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: AutomationRow, action: AutomationRowAction) => void",signature:{arguments:[{type:{name:"AutomationRow"},name:"row"},{type:{name:"union",raw:'"pause" | "resume" | "open" | "enable" | "needs_changes"',elements:[{name:"literal",value:'"pause"'},{name:"literal",value:'"resume"'},{name:"literal",value:'"open"'},{name:"literal",value:'"enable"'},{name:"literal",value:'"needs_changes"'}]},name:"action"}],return:{name:"void"}}},description:""},onRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"automations"',computed:!1}}}};const m=()=>{};function X(){return o.jsx(J,{rows:K,state:"populated",query:"",onQuery:m,canBuild:!0,onOpen:m,onConnectNewApi:m,onAskAdmin:m,onRetry:m,onRowAction:m})}function Y({slot:t,name:n}){return o.jsxs("div",{className:"nexus-configure-placeholder","data-slot":t,"data-testid":`placeholder-${t}`,children:[n," renders here, unchanged"]})}const Z={agents:"AgentsScreen",skills:"SkillsScreen",flows:"FlowsScreen",tools:"ToolsScreen",automations:"AutomationsTable"};function ee({tab:t="agents",body:n="screen",variant:r="builders",narrow:i=!1}){const[u,q]=H.useState(t),a=r==="members"?"automations":u,T=r;let s;return n==="loading"?s=a==="automations"?o.jsx(v,{rows:[],variant:r,state:"loading"}):o.jsx(M,{}):n==="error"?s=a==="automations"?o.jsx(v,{rows:[],variant:r,state:"error",onRetry:()=>{}}):o.jsx(R,{kind:"error",onRetry:()=>{}}):n==="denied"?s=o.jsx(R,{kind:"denied"}):n==="tools"?s=o.jsx(X,{}):a==="automations"?s=o.jsx(v,{rows:n==="automations-empty"?[]:G,variant:r,onNew:()=>{},onAction:()=>{}}):s=o.jsx(Y,{slot:a,name:Z[a]}),o.jsx("div",{className:"nexus-configure-s0-frame",style:i?{maxWidth:320}:void 0,children:o.jsx(z,{projectName:W,tab:a,onTab:q,catalogueCount:I,variant:T,narrow:i,children:s})})}const Se={title:"Apps/NexChat/Configure hub",component:ee,parameters:{ds:"DS-6906",layout:"padded"},argTypes:{tab:{control:"select",options:["agents","skills","flows","tools","automations"]}}};function k(t,{tabs:n,catalogue:r}){if(!t.querySelector('[data-testid="configure-back"]'))throw new globalThis.Error("no back link");const i=t.querySelector('[role="tablist"]');if(n&&!i)throw new globalThis.Error("no tab row");if(!n&&i)throw new globalThis.Error("a tab row in the members' chrome");const u=t.querySelector('[data-testid="configure-catalogue"]');if(r&&!u)throw new globalThis.Error("no catalogue link");if(!r&&u)throw new globalThis.Error("a catalogue link in the members' chrome")}const d={name:"agents",args:{tab:"agents"},play:async({canvasElement:t})=>{k(t,{tabs:!0,catalogue:!0});const n=[...t.querySelectorAll('[role="tab"]')];if(n.length!==5)throw new globalThis.Error(`${n.length} tabs`);if(n[4].getAttribute("data-key")!=="automations")throw new globalThis.Error("Automations is not the last tab ( · )");if(n[0].getAttribute("aria-selected")!=="true")throw new globalThis.Error("Agents is not the selected tab");if(!t.querySelector('[data-slot="agents"]'))throw new globalThis.Error("no Agents body")}},S={name:"skills",args:{tab:"skills"}},h={name:"tools",args:{tab:"tools",body:"tools"},play:async({canvasElement:t})=>{if(k(t,{tabs:!0,catalogue:!0}),!t.querySelector('[role="tab"][aria-selected="true"]')?.textContent?.includes("Tools"))throw new globalThis.Error("Tools is not the selected tab");if(t.querySelectorAll("[data-group]").length!==3)throw new globalThis.Error("fewer than three tool groups");if(!t.querySelector('[data-testid="tools-platform-toggle"]'))throw new globalThis.Error("the Platform disclosure is missing")}},E={name:"flows",args:{tab:"flows"}},p={name:"automations",args:{tab:"automations",body:"automations"},play:async({canvasElement:t})=>{if(k(t,{tabs:!0,catalogue:!0}),t.querySelector('[role="tab"][aria-selected="true"]')?.getAttribute("data-key")!=="automations")throw new globalThis.Error("Automations is not the selected tab");if(!t.querySelector('[data-testid="automations-new"]'))throw new globalThis.Error("no New automation");if(t.querySelectorAll('[data-testid^="automations-table"] tbody tr').length!==3)throw new globalThis.Error("not three rows");if(!t.querySelector('[data-testid="automations-enable-ports"]'))throw new globalThis.Error("no Enable on the awaiting row");if(!t.querySelector('[data-testid="automations-pause-eta"]'))throw new globalThis.Error("no Pause on the enabled row")}},b={name:"automations-member",args:{body:"automations",variant:"members"},play:async({canvasElement:t})=>{if(k(t,{tabs:!1,catalogue:!1}),t.querySelector('[data-testid="automations-new"]'))throw new globalThis.Error("New automation for a member");if(t.querySelector('[data-testid^="automations-actions-"]'))throw new globalThis.Error("a row action for a member");if(t.querySelectorAll('[data-testid^="automations-table"] tbody tr').length!==3)throw new globalThis.Error("not three rows")}},g={name:"automations-empty",args:{tab:"automations",body:"automations-empty"},play:async({canvasElement:t})=>{if(!t.querySelector('[data-testid="table-empty"]'))throw new globalThis.Error("no empty row")}},w={name:"catalogue-link",args:{tab:"agents"},play:async({canvasElement:t})=>{if(!(t.querySelector('[data-testid="configure-catalogue"]')?.textContent??"").includes("14"))throw new globalThis.Error("the catalogue link does not carry its count")}},A={name:"loading",args:{tab:"automations",body:"loading"}},x={name:"error",args:{tab:"automations",body:"error"}},y={name:"denied",args:{tab:"agents",body:"denied"}},f={name:"narrow",args:{tab:"flows",narrow:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},Ee=["Agents","Skills","Tools","Flows","Automations","AutomationsMember","AutomationsEmpty","CatalogueLink","Loading","Error_","Denied","Narrow"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "agents",
  args: {
    tab: "agents"
  },
  play: async ({
    canvasElement
  }) => {
    expectChrome(canvasElement, {
      tabs: true,
      catalogue: true
    });
    const tabs = [...canvasElement.querySelectorAll('[role="tab"]')];
    if (tabs.length !== 5) throw new globalThis.Error(\`\${tabs.length} tabs\`); // : the Automations tab is back with S4
    if (tabs[4].getAttribute("data-key") !== "automations") throw new globalThis.Error("Automations is not the last tab ( · )");
    if (tabs[0].getAttribute("aria-selected") !== "true") throw new globalThis.Error("Agents is not the selected tab");
    if (!canvasElement.querySelector('[data-slot="agents"]')) throw new globalThis.Error("no Agents body");
  }
}`,...d.parameters?.docs?.source},description:{story:"Agents — the existing AgentsScreen as the tab's body",...d.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "skills",
  args: {
    tab: "skills"
  }
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "tools",
  args: {
    tab: "tools",
    body: "tools"
  },
  play: async ({
    canvasElement
  }) => {
    expectChrome(canvasElement, {
      tabs: true,
      catalogue: true
    });
    const selected = canvasElement.querySelector('[role="tab"][aria-selected="true"]');
    if (!selected?.textContent?.includes("Tools")) throw new globalThis.Error("Tools is not the selected tab");
    // : three groups — Platform is a collapsed disclosure, so two row lists are drawn
    if (canvasElement.querySelectorAll("[data-group]").length !== 3) throw new globalThis.Error("fewer than three tool groups");
    if (!canvasElement.querySelector('[data-testid="tools-platform-toggle"]')) throw new globalThis.Error("the Platform disclosure is missing");
  }
}`,...h.parameters?.docs?.source},description:{story:" — the Tools tab with the real `ToolsScreen` body under the hub's chrome: three groups, the two doors",...h.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "flows",
  args: {
    tab: "flows"
  }
}`,...E.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "automations",
  args: {
    tab: "automations",
    body: "automations"
  },
  play: async ({
    canvasElement
  }) => {
    expectChrome(canvasElement, {
      tabs: true,
      catalogue: true
    });
    const selected = canvasElement.querySelector('[role="tab"][aria-selected="true"]');
    if (selected?.getAttribute("data-key") !== "automations") throw new globalThis.Error("Automations is not the selected tab");
    if (!canvasElement.querySelector('[data-testid="automations-new"]')) throw new globalThis.Error("no New automation");
    if (canvasElement.querySelectorAll('[data-testid^="automations-table"] tbody tr').length !== 3) throw new globalThis.Error("not three rows");
    if (!canvasElement.querySelector('[data-testid="automations-enable-ports"]')) throw new globalThis.Error("no Enable on the awaiting row");
    if (!canvasElement.querySelector('[data-testid="automations-pause-eta"]')) throw new globalThis.Error("no Pause on the enabled row");
  }
}`,...p.parameters?.docs?.source},description:{story:"the Automations tab for builders — under the full chrome () — the head, *+ New automation*, the rows with their\nactions; the page `/projects/{id}/automations` is `AutomationsScreen` (the read model's rows through `AutomationsTable`,\nthe chrome by role), proven live by `s45-automation.spec.ts` SC-4516",...p.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "automations-member",
  args: {
    body: "automations",
    variant: "members"
  },
  play: async ({
    canvasElement
  }) => {
    expectChrome(canvasElement, {
      tabs: false,
      catalogue: false
    });
    if (canvasElement.querySelector('[data-testid="automations-new"]')) throw new globalThis.Error("New automation for a member");
    if (canvasElement.querySelector('[data-testid^="automations-actions-"]')) throw new globalThis.Error("a row action for a member");
    if (canvasElement.querySelectorAll('[data-testid^="automations-table"] tbody tr').length !== 3) throw new globalThis.Error("not three rows");
  }
}`,...b.parameters?.docs?.source},description:{story:" — a member's view: `← Operations · Automations`, no other tab, no primary, no row action; the rows identical",...b.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "automations-empty",
  args: {
    tab: "automations",
    body: "automations-empty"
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="table-empty"]')) throw new globalThis.Error("no empty row");
  }
}`,...g.parameters?.docs?.source},description:{story:"*No automations yet* · *New automation* inside the table",...g.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "catalogue-link",
  args: {
    tab: "agents"
  },
  play: async ({
    canvasElement
  }) => {
    const link = canvasElement.querySelector<HTMLAnchorElement>('[data-testid="configure-catalogue"]');
    const text = link?.textContent ?? "";
    if (!text.includes("14")) throw new globalThis.Error("the catalogue link does not carry its count");
  }
}`,...w.parameters?.docs?.source},description:{story:"the trailing link — *Available from the organization · 14 →* (Core › Capabilities)",...w.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "loading",
  args: {
    tab: "automations",
    body: "loading"
  }
}`,...A.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "error",
  args: {
    tab: "automations",
    body: "error"
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "denied",
  args: {
    tab: "agents",
    body: "denied"
  }
}`,...y.parameters?.docs?.source},description:{story:"a direct `/agents` URL as a viewer — the existing 403 state under the chrome",...y.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "narrow",
  args: {
    tab: "flows",
    narrow: true
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...f.parameters?.docs?.source},description:{story:"320 px — the tabs scroll, the line keeps one row",...f.parameters?.docs?.description}}};export{d as Agents,p as Automations,g as AutomationsEmpty,b as AutomationsMember,w as CatalogueLink,y as Denied,x as Error_,E as Flows,A as Loading,f as Narrow,S as Skills,h as Tools,Ee as __namedExportsOrder,Se as default};
