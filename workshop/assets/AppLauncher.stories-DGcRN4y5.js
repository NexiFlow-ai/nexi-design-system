import{a as s}from"./index-Cuiwh_tg.js";import"./iframe-C_4ax-Jm.js";import"./preload-helper-PPVm8Dsz.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";const i=["map","care","forge","sales","factory"],H={title:"Layout/App launcher",component:s,parameters:{ds:"DS-2003",layout:"fullscreen"},args:{open:!0,activeApp:"chat",enabledModules:i,docsHref:"https://docs.example.test",onClose:()=>{},onNavigate:()=>{}}};function c(e){return Array.from(e.querySelectorAll("button[data-app]"))}const o={name:"shell--launcher",play:async({canvasElement:e})=>{const r=c(e);if(r.length!==10)throw new globalThis.Error(`the launcher shows ${r.length} tiles, not ten`);if(r[0].getAttribute("aria-current")!=="page")throw new globalThis.Error("the current app's tile is not aria-current");if(r[0].focus(),r[0].dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowRight",bubbles:!0})),document.activeElement!==r[1])throw new globalThis.Error("ArrowRight from the first tile did not move focus to the second")}},n={name:"shell--launcher-current",args:{activeApp:"bi"},play:async({canvasElement:e})=>{if(e.querySelector('button[data-app="bi"]')?.getAttribute("aria-current")!=="page")throw new globalThis.Error("BI's tile is not aria-current")}},t={name:"shell--launcher-modules-off",args:{enabledModules:[]},play:async({canvasElement:e})=>{if(e.querySelector("button[data-app='factory']"))throw new globalThis.Error("a module tile shows while the module is off")}},l={name:"shell--launcher-graphite",globals:{theme:"graphite"}},a={name:"shell--narrow",parameters:{viewport:{defaultViewport:"mobile1"}}},U=["ShellLauncher","ShellLauncherCurrent","ShellLauncherModulesOff","ShellLauncherGraphite","ShellNarrow"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "shell--launcher",
  play: async ({
    canvasElement
  }) => {
    const all = tiles(canvasElement);
    if (all.length !== 10) throw new globalThis.Error(\`the launcher shows \${all.length} tiles, not ten\`);
    if (all[0].getAttribute("aria-current") !== "page") throw new globalThis.Error("the current app's tile is not aria-current");
    all[0].focus();
    all[0].dispatchEvent(new KeyboardEvent("keydown", {
      key: "ArrowRight",
      bubbles: true
    }));
    if (document.activeElement !== all[1]) throw new globalThis.Error("ArrowRight from the first tile did not move focus to the second");
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "shell--launcher-current",
  args: {
    activeApp: "bi"
  },
  play: async ({
    canvasElement
  }) => {
    const current = canvasElement.querySelector('button[data-app="bi"]');
    if (current?.getAttribute("aria-current") !== "page") throw new globalThis.Error("BI's tile is not aria-current");
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "shell--launcher-modules-off",
  args: {
    enabledModules: []
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector("button[data-app='factory']")) throw new globalThis.Error("a module tile shows while the module is off");
  }
}`,...t.parameters?.docs?.source},description:{story:"No module enabled: the applications alone — a module that is off is absent, never greyed ().",...t.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "shell--launcher-graphite",
  globals: {
    theme: "graphite"
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "shell--narrow",
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...a.parameters?.docs?.source},description:{story:"Below 720 px the grid is two columns; the arrow keys follow.",...a.parameters?.docs?.description}}};export{o as ShellLauncher,n as ShellLauncherCurrent,l as ShellLauncherGraphite,t as ShellLauncherModulesOff,a as ShellNarrow,U as __namedExportsOrder,H as default};
