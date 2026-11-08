import{j as r}from"./iframe-C_4ax-Jm.js";/* empty css                */import{B as k}from"./CoreShell-LzluVnjy.js";import{C as b,a}from"./ChannelLinkPage-YChsYSkS.js";import"./preload-helper-PPVm8Dsz.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./nav-C8-c-HcF.js";import"./runtime-Cwmke1Hn.js";import"./credential-Ch26UJlM.js";import"./chatApi-DU7mAKQS.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./organizationRequests-CxMYSAGe.js";import"./store-C-il-aT_.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./metrics-XT_i2DSD.js";import"./modules-A3eXOreg.js";import"./sparkles-t9beIr0T.js";import"./boxes-Cqxx_HWk.js";import"./plug-B3-qTSSD.js";import"./wrench-DsSy05cC.js";import"./activity-CxYo1_mQ.js";import"./shield-check-Cac0BQ49.js";import"./layers-Dsj4tA4G.js";import"./building-2-GerxkJzZ.js";import"./channels-D3mxlk7M.js";import"./channelsFixtures-Dq-7QVz_.js";const x=e=>r.jsx(k,{children:r.jsx(e,{})}),w={telegram:"Taras Melnyk · @taras_m",nexi:"Taras Melnyk · Taras Trading",returnHref:"https://t.me/nexi_demo_bot",selfHref:"https://core.nexus.example/account/channels/link",accountHref:"/core/account?tab=channels"};function E({rung:e}){return r.jsx(a,{rung:e,view:w})}const _e={title:"Apps/NexCore/Channel link",component:E,decorators:[x],parameters:{ds:"DS-6604",layout:"fullscreen",workbench:{ns:"core",path:"/account/channels/link"}}},t={args:{rung:"confirm"},play:async({canvasElement:e})=>{if(e.querySelectorAll(".nexus-btn-primary").length!==1)throw new globalThis.Error("one primary action on the card (DS-3001)");if(!e.querySelector('[data-testid="channel-link-identities"]'))throw new globalThis.Error("the two identity lines are shown before Link ()")}},i={args:{rung:"done"}},s={args:{rung:"expired"}},c={args:{rung:"already_telegram"}},l={args:{rung:"already_user"}},p={args:{rung:"webview"},play:async({canvasElement:e})=>{if(e.querySelector('[data-testid="channel-link-confirm"]'))throw new globalThis.Error("a WebView never sees the Link button ()")}},m={args:{rung:"error"}},d={args:{rung:"offline"}},f={...w,provider:"spin",telegram:"Olena · npub1qf4z6…h7kd",nexi:"Olena Ovcharenko · SupplyChain Guru"},u={args:{rung:"confirm"},render:()=>r.jsx(a,{rung:"confirm",view:f}),play:async({canvasElement:e})=>{if(e.querySelectorAll(".nexus-btn-primary").length!==1)throw new globalThis.Error("one primary action on the card (DS-3001)");if(/npub1[a-z0-9]{58}/.test(e.innerHTML))throw new globalThis.Error("the whole key is never printed ()")}},g={args:{rung:"done"},render:()=>r.jsx(a,{rung:"done",view:f}),play:async({canvasElement:e})=>{if(e.querySelector('[data-testid="channel-link-return"]'))throw new globalThis.Error("the Nexi app needs no way-back button — it is already polling")}},h={args:{rung:"expired"},render:()=>r.jsx(a,{rung:"expired",view:f})},n={args:{rung:"confirm"},render:()=>r.jsx(a,{rung:"confirm",view:{...f,organizationEnabled:!1}}),play:async({canvasElement:e})=>{if(!e.querySelector('[data-testid="channel-link-org-off"]'))throw new globalThis.Error("the page says the organization has not enabled Nexi yet ( e)");if(!e.querySelector('[data-testid="channel-link-confirm"]'))throw new globalThis.Error("Link stays — the person's act never flips the organization's block")}},o={args:{rung:"expired"},render:()=>r.jsx(b,{}),play:async({canvasElement:e})=>{if(await new Promise(y=>setTimeout(y,0)),e.querySelector('[data-testid="channel-link-confirm"]'))throw new globalThis.Error("no Link button without an open request")}},We=["Confirm","Done","Expired","AlreadyLinkedTelegram","AlreadyLinkedUser","WebViewRefused","Error","Offline","NexiConfirm","NexiDone","NexiExpired","NexiOrganizationOff","BoundWithoutToken"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "confirm"
  },
  play: async ({
    canvasElement
  }) => {
    const primaries = canvasElement.querySelectorAll(".nexus-btn-primary");
    if (primaries.length !== 1) throw new globalThis.Error("one primary action on the card (DS-3001)");
    if (!canvasElement.querySelector('[data-testid="channel-link-identities"]')) throw new globalThis.Error("the two identity lines are shown before Link ()");
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "done"
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "expired"
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "already_telegram"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "already_user"
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "webview"
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="channel-link-confirm"]')) throw new globalThis.Error("a WebView never sees the Link button ()");
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "error"
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "offline"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "confirm"
  },
  render: () => <ChannelLinkScreen rung="confirm" view={olenaNexi} />,
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelectorAll(".nexus-btn-primary").length !== 1) throw new globalThis.Error("one primary action on the card (DS-3001)");
    if (/npub1[a-z0-9]{58}/.test(canvasElement.innerHTML)) throw new globalThis.Error("the whole key is never printed ()");
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "done"
  },
  render: () => <ChannelLinkScreen rung="done" view={olenaNexi} />,
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="channel-link-return"]')) throw new globalThis.Error("the Nexi app needs no way-back button — it is already polling");
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "expired"
  },
  render: () => <ChannelLinkScreen rung="expired" view={olenaNexi} />
}`,...h.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "confirm"
  },
  render: () => <ChannelLinkScreen rung="confirm" view={{
    ...olenaNexi,
    organizationEnabled: false
  }} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="channel-link-org-off"]')) throw new globalThis.Error("the page says the organization has not enabled Nexi yet ( e)");
    if (!canvasElement.querySelector('[data-testid="channel-link-confirm"]')) throw new globalThis.Error("Link stays — the person's act never flips the organization's block");
  }
}`,...n.parameters?.docs?.source},description:{story:" (e): none of her organizations has enabled Nexi rooms yet — one honest line; Link still works.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "expired"
  },
  render: () => <ChannelLinkPage />,
  play: async ({
    canvasElement
  }) => {
    await new Promise(r => setTimeout(r, 0));
    if (canvasElement.querySelector('[data-testid="channel-link-confirm"]')) throw new globalThis.Error("no Link button without an open request");
  }
}`,...o.parameters?.docs?.source},description:{story:" S1 — the page as the route mounts it (`ChannelLinkPage`): the token comes from the URL, the session from\ncore-api, the two lines from `peek`. Opened without a token it is the one *expired* sentence before anything is\nread (a malformed link and a dead one are the same answer — ); nothing is fetched in the workshop.",...o.parameters?.docs?.description}}};export{c as AlreadyLinkedTelegram,l as AlreadyLinkedUser,o as BoundWithoutToken,t as Confirm,i as Done,m as Error,s as Expired,u as NexiConfirm,g as NexiDone,h as NexiExpired,n as NexiOrganizationOff,d as Offline,p as WebViewRefused,We as __namedExportsOrder,_e as default};
