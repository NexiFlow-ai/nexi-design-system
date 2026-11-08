import{j as c}from"./iframe-C_4ax-Jm.js";import{N as l}from"./index-Cuiwh_tg.js";import{b as m,i as d}from"./fixtures-DBR6MuXP.js";import"./preload-helper-PPVm8Dsz.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";function u(){return c.jsxs("div",{style:{padding:"var(--nexus-space-9)"},children:[c.jsx("h1",{style:{margin:0,fontSize:"var(--nexus-text-2xl)"},children:"Help & support"}),c.jsx("p",{style:{color:"var(--nexus-text-secondary)",maxWidth:640},children:"A page without an app navigation — the shell keeps the launcher and the account reachable from its own rail."})]})}const I={title:"Layout/Shell",component:l,parameters:{ds:"DS-2001",layout:"fullscreen"},args:{activeApp:"core",session:m,sessionState:"ready",workspaces:["Acme Logistics","Acme Retail"],onNavigate:()=>{},onSignOut:()=>{},accountHref:"/core/account",docsHref:"https://docs.example.test",enabledModules:["map","care","forge","sales","factory"],support:!1,children:c.jsx(u,{})}},s={name:"grid",play:async({canvasElement:e})=>{if(!e.querySelector(".nexus-skip-link"))throw new globalThis.Error("no skip link");if(!e.querySelector('[data-testid="shell-rail"]'))throw new globalThis.Error("the shell did not draw its rail");if(!e.querySelector("main#nexus-main"))throw new globalThis.Error("no main landmark")}},t={name:"grid-unread",args:{notifications:d()}},r={name:"offline",args:{offline:!0}},o={name:"session-loading",args:{session:null,sessionState:"loading"}},a={name:"app-dock",args:{dock:"app"}},n={name:"launcher",play:async()=>{if(window.dispatchEvent(new KeyboardEvent("keydown",{key:"a",altKey:!0})),await new Promise(e=>setTimeout(e,30)),!document.querySelector('.nexus-launcher[role="dialog"]'))throw new globalThis.Error("Alt+A did not open the launcher")}},i={name:"grid-graphite",globals:{theme:"graphite"}},p={name:"grid-narrow",parameters:{viewport:{defaultViewport:"mobile1"}}},J=["Grid","GridUnread","Offline","SessionLoading","AppDock","Launcher","GridGraphite","GridNarrow"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "grid",
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector(".nexus-skip-link")) throw new globalThis.Error("no skip link");
    if (!canvasElement.querySelector('[data-testid="shell-rail"]')) throw new globalThis.Error("the shell did not draw its rail");
    if (!canvasElement.querySelector("main#nexus-main")) throw new globalThis.Error("no main landmark");
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "grid-unread",
  args: {
    notifications: inbox()
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "offline",
  args: {
    offline: true
  }
}`,...r.parameters?.docs?.source},description:{story:"The browser is offline: the strip under the top edge, the rail unchanged.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "session-loading",
  args: {
    session: null,
    sessionState: "loading"
  }
}`,...o.parameters?.docs?.source},description:{story:"`GET /session` is still in flight — the dock shows a skeleton, nothing is invented.",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "app-dock",
  args: {
    dock: "app"
  }
}`,...a.parameters?.docs?.source},description:{story:'The app mounts the dock itself (`dock="app"`): the shell is the frame alone.',...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "launcher",
  play: async () => {
    window.dispatchEvent(new KeyboardEvent("keydown", {
      key: "a",
      altKey: true
    }));
    await new Promise(r => setTimeout(r, 30));
    if (!document.querySelector('.nexus-launcher[role="dialog"]')) throw new globalThis.Error("Alt+A did not open the launcher");
  }
}`,...n.parameters?.docs?.source},description:{story:"`Alt+A` from anywhere opens the launcher.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "grid-graphite",
  globals: {
    theme: "graphite"
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "grid-narrow",
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...p.parameters?.docs?.source}}};export{a as AppDock,s as Grid,i as GridGraphite,p as GridNarrow,t as GridUnread,n as Launcher,r as Offline,o as SessionLoading,J as __namedExportsOrder,I as default};
