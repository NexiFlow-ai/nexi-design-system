import{j as y}from"./iframe-C_4ax-Jm.js";import{i as f}from"./bff-BhLxIK9U.js";import{C as h}from"./ConnectedAccounts-Clqaz6zB.js";import{s as g,a as S}from"./fixtures-DBR6MuXP.js";import"./preload-helper-PPVm8Dsz.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";const p="/api/workshop/shell/v1";f(p,{"synapse/[...path]":()=>Promise.resolve(S)});const M={title:"Layout/Connected accounts",component:h,parameters:{ds:"DS-4003",layout:"fullscreen"},args:{open:!0,onClose:()=>{},config:{apiBase:p}},decorators:[(e,{parameters:o})=>(g(o.world??"ready"),y.jsx(e,{}))]},t=async(e,o=40)=>{for(let m=0;m<o;m++){const u=document.querySelector(`[data-testid="${e}"]`);if(u)return u;await new Promise(w=>setTimeout(w,25))}throw new globalThis.Error(`${e} did not appear`)},a={name:"populated",play:async()=>{const e=await t("connected-accounts-list"),o=e.querySelectorAll('[data-testid="connected-account-row"]');if(o.length!==3)throw new globalThis.Error(`${o.length} rows, not 3 (two connected, one not connected)`);if(!e.querySelector('[data-status="expired"] [data-testid="connected-accounts-reconnect"]'))throw new globalThis.Error("the expired row offers no Reconnect")}},n={name:"confirm",play:async()=>{if((await t("connected-accounts-list")).querySelector('[data-status="healthy"] [data-testid="connected-accounts-disconnect"]')?.click(),!(await t("connected-accounts-confirm")).querySelector('[data-testid="connected-accounts-confirm-disconnect"]'))throw new globalThis.Error("no danger primary in the confirmation")}},s={name:"empty",parameters:{world:"empty"},play:async()=>{await t("connected-accounts-empty")}},c={name:"loading",parameters:{world:"slow"},play:async()=>{await t("connected-accounts-loading")}},i={name:"error",parameters:{world:"error"},play:async()=>{await t("connected-accounts-error")}},r={name:"offline",args:{config:{apiBase:p,offline:!0}},play:async()=>{if(await t("connected-accounts-offline"),(await t("connected-accounts-list")).querySelector("button:not(:disabled)"))throw new globalThis.Error("an action is enabled while offline")}},l={name:"populated-graphite",globals:{theme:"graphite"},play:a.play},d={name:"populated-narrow",parameters:{viewport:{defaultViewport:"mobile1"}},play:a.play},W=["Populated","Confirm","Empty","Loading","ErrorState","Offline","PopulatedGraphite","PopulatedNarrow"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "populated",
  play: async () => {
    const list = await settled("connected-accounts-list");
    const rows = list.querySelectorAll('[data-testid="connected-account-row"]');
    if (rows.length !== 3) throw new globalThis.Error(\`\${rows.length} rows, not 3 (two connected, one not connected)\`);
    if (!list.querySelector('[data-status="expired"] [data-testid="connected-accounts-reconnect"]')) throw new globalThis.Error("the expired row offers no Reconnect");
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "confirm",
  play: async () => {
    const list = await settled("connected-accounts-list");
    list.querySelector<HTMLButtonElement>('[data-status="healthy"] [data-testid="connected-accounts-disconnect"]')?.click();
    const panel = await settled("connected-accounts-confirm");
    if (!panel.querySelector('[data-testid="connected-accounts-confirm-disconnect"]')) throw new globalThis.Error("no danger primary in the confirmation");
  }
}`,...n.parameters?.docs?.source},description:{story:"*Disconnect* asks once, inside the sheet, naming the integration — a `danger` primary, focus on the question.",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "empty",
  parameters: {
    world: "empty"
  },
  play: async () => void (await settled("connected-accounts-empty"))
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "loading",
  parameters: {
    world: "slow"
  },
  play: async () => void (await settled("connected-accounts-loading"))
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "error",
  parameters: {
    world: "error"
  },
  play: async () => void (await settled("connected-accounts-error"))
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "offline",
  args: {
    config: {
      apiBase: API,
      offline: true
    }
  },
  play: async () => {
    await settled("connected-accounts-offline");
    const list = await settled("connected-accounts-list");
    if (list.querySelector('button:not(:disabled)')) throw new globalThis.Error("an action is enabled while offline");
  }
}`,...r.parameters?.docs?.source},description:{story:"The browser is offline: the list reads, the actions are disabled, the sheet says why.",...r.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "populated-graphite",
  globals: {
    theme: "graphite"
  },
  play: Populated.play
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "populated-narrow",
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  play: Populated.play
}`,...d.parameters?.docs?.source}}};export{n as Confirm,s as Empty,i as ErrorState,c as Loading,r as Offline,a as Populated,l as PopulatedGraphite,d as PopulatedNarrow,W as __namedExportsOrder,M as default};
