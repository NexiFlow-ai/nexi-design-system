import{j as n,V as N,ak as M,r as E}from"./iframe-C_4ax-Jm.js";import{a as t}from"./harness-CVmC89KY.js";import{C as a,a as A}from"./ConnectedChannels-DEYqMKgq.js";import{r as q,n as c,a as v,p as P,b as k,q as z,u as D,l as F,c as I,d as Q}from"./channelsFixtures-Dq-7QVz_.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */import"./CoreShell-LzluVnjy.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./nav-C8-c-HcF.js";import"./runtime-Cwmke1Hn.js";import"./credential-Ch26UJlM.js";import"./chatApi-DU7mAKQS.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./organizationRequests-CxMYSAGe.js";import"./store-C-il-aT_.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./metrics-XT_i2DSD.js";import"./modules-A3eXOreg.js";import"./sparkles-t9beIr0T.js";import"./boxes-Cqxx_HWk.js";import"./plug-B3-qTSSD.js";import"./wrench-DsSy05cC.js";import"./activity-CxYo1_mQ.js";import"./shield-check-Cac0BQ49.js";import"./layers-Dsj4tA4G.js";import"./building-2-GerxkJzZ.js";import"./format-CgRB8Fht.js";function Z({rung:e="populated",identity:r=I,nexi:j,preferences:O=Q}){const{t:R}=M(),[L,H]=E.useState(O),[_,x]=E.useState(r),[C,b]=E.useState(j);return n.jsx(N,{title:R("core.account.title"),layout:"dense",testId:"screen-account",children:n.jsx(A,{rung:e,identity:_,nexi:C?{identity:C,onConnect:()=>b(P),onDisconnect:()=>b(v),onCancelPending:()=>b(v)}:void 0,preferences:L,onPreferences:H,onConnect:()=>x(k),onDisconnect:()=>x(c),onCancelPending:()=>x(c)})})}const an={title:"Apps/NexCore/Connected channels",component:Z,parameters:{ds:"DS-6603",layout:"fullscreen",...t("/core/account","populated","owner",{tab:"channels"})}},l={args:{}},d={args:{identity:k},play:async({canvasElement:e})=>{if(!e.querySelector('[data-testid="account-channels-telegram-pending"]'))throw new globalThis.Error("the pending rung shows Open Telegram and the time left");if(/start=[A-Za-z0-9_-]{16,}/.test(e.innerHTML))throw new globalThis.Error("a link token is printed on the page ()")}},p={args:{identity:D}},m={args:{},play:async({canvasElement:e})=>{if(e.querySelector('[data-testid="account-channels-telegram-disconnect"]')?.click(),await new Promise(r=>setTimeout(r,0)),!e.querySelector('[data-testid="channel-disconnect"]'))throw new globalThis.Error("Disconnect asks in place, never a modal ()")}},g={args:{preferences:z}},o={args:{identity:q},play:async({canvasElement:e})=>{const r=e.querySelector('[data-testid="notify-approval_assigned"]');if(!r||!r.disabled)throw new globalThis.Error("a disconnected row's notification switches are disabled, never live");if(e.querySelector('[data-testid="account-channels-telegram-disconnect"]'))throw new globalThis.Error("nothing while revoked (DS-6603)")}},s={args:{nexi:F},play:async({canvasElement:e})=>{if(!e.querySelector('[data-testid="account-channels-nexi"]'))throw new globalThis.Error("the Nexi row is drawn when the contour has a Spin bot");if(!e.querySelector('[data-testid="account-channels-telegram"]'))throw new globalThis.Error("Telegram's row stays")}},u={args:{identity:c,nexi:v},play:async({canvasElement:e})=>{if(!e.querySelector('[data-testid="account-channels-nexi-connect"]'))throw new globalThis.Error("each row carries its own Connect when the panel has two providers");if(!e.querySelector('[data-testid="account-channels-telegram-connect"]'))throw new globalThis.Error("Telegram's Connect stays on its row")}},h={args:{nexi:P},play:async({canvasElement:e})=>{if(!e.querySelector('[data-testid="account-channels-nexi-pending"]'))throw new globalThis.Error("the pending rung shows Open in Nexi and the time left");if(/token=[A-Za-z0-9_-]{16,}/.test(e.innerHTML))throw new globalThis.Error("a link token is printed on the page ()")}},w={args:{rung:"empty",identity:c},parameters:t("/core/account","empty","owner",{tab:"channels"})},y={args:{rung:"loading"},parameters:t("/core/account","loading","owner",{tab:"channels"})},f={args:{rung:"error"},parameters:t("/core/account","error","owner",{tab:"channels"})},S={args:{rung:"denied"},parameters:t("/core/account","denied","owner",{tab:"channels"})},T={args:{rung:"offline"},parameters:t("/core/account","offline","owner",{tab:"channels"})},i={render:()=>n.jsx(N,{title:"DS-6603",layout:"dense",children:n.jsxs("div",{className:"nexus-cc-form",children:[n.jsx(a,{identity:I,testId:"row-linked"}),n.jsx(a,{identity:k,testId:"row-pending"}),n.jsx(a,{identity:D,testId:"row-unreachable"}),n.jsx(a,{identity:q,readOnly:!0,testId:"row-revoked"}),n.jsx(a,{identity:c,testId:"row-none"})]})})},on=["Populated","Pending","Unreachable","Disconnecting","QuietHours","Disconnected","WithNexi","NexiNotConnected","NexiPending","Empty","Loading","Error","Denied","Offline","RowStates"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    identity: pendingTelegram
  },
  play: async ({
    canvasElement
  }) => {
    const pending = canvasElement.querySelector('[data-testid="account-channels-telegram-pending"]');
    if (!pending) throw new globalThis.Error("the pending rung shows Open Telegram and the time left");
    if (/start=[A-Za-z0-9_-]{16,}/.test(canvasElement.innerHTML)) throw new globalThis.Error("a link token is printed on the page ()");
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    identity: unreachableTelegram
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvasElement
  }) => {
    (canvasElement.querySelector('[data-testid="account-channels-telegram-disconnect"]') as HTMLButtonElement | null)?.click();
    await new Promise(r => setTimeout(r, 0));
    if (!canvasElement.querySelector('[data-testid="channel-disconnect"]')) throw new globalThis.Error("Disconnect asks in place, never a modal ()");
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    preferences: quietPreferences
  }
}`,...g.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    identity: revokedTelegram
  },
  play: async ({
    canvasElement
  }) => {
    const sw = canvasElement.querySelector('[data-testid="notify-approval_assigned"]') as HTMLButtonElement | null;
    if (!sw || !sw.disabled) throw new globalThis.Error("a disconnected row's notification switches are disabled, never live");
    if (canvasElement.querySelector('[data-testid="account-channels-telegram-disconnect"]')) throw new globalThis.Error("nothing while revoked (DS-6603)");
  }
}`,...o.parameters?.docs?.source},description:{story:"After Disconnect: the row keeps its facts and offers nothing (DS-6603); the switches wait for a link again — disabled, never hidden (S5, ).",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    nexi: linkedNexi
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="account-channels-nexi"]')) throw new globalThis.Error("the Nexi row is drawn when the contour has a Spin bot");
    if (!canvasElement.querySelector('[data-testid="account-channels-telegram"]')) throw new globalThis.Error("Telegram's row stays");
  }
}`,...s.parameters?.docs?.source},description:{story:" S3-B (): the Nexi app's row beside Telegram's — Connect mints `nexi://link?token=…` (web-first; the\nNexi app on this Mac opens it); the pending rung says *Open in Nexi*; linked shows the key's name, never the key.",...s.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    identity: noTelegram,
    nexi: noNexi
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="account-channels-nexi-connect"]')) throw new globalThis.Error("each row carries its own Connect when the panel has two providers");
    if (!canvasElement.querySelector('[data-testid="account-channels-telegram-connect"]')) throw new globalThis.Error("Telegram's Connect stays on its row");
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    nexi: pendingNexi
  },
  play: async ({
    canvasElement
  }) => {
    const pending = canvasElement.querySelector('[data-testid="account-channels-nexi-pending"]');
    if (!pending) throw new globalThis.Error("the pending rung shows Open in Nexi and the time left");
    if (/token=[A-Za-z0-9_-]{16,}/.test(canvasElement.innerHTML)) throw new globalThis.Error("a link token is printed on the page ()");
  }
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "empty",
    identity: noTelegram
  },
  parameters: at("/core/account", "empty", "owner", {
    tab: "channels"
  })
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "loading"
  },
  parameters: at("/core/account", "loading", "owner", {
    tab: "channels"
  })
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "error"
  },
  parameters: at("/core/account", "error", "owner", {
    tab: "channels"
  })
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "denied"
  },
  parameters: at("/core/account", "denied", "owner", {
    tab: "channels"
  })
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "offline"
  },
  parameters: at("/core/account", "offline", "owner", {
    tab: "channels"
  })
}`,...T.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <PageFrame title="DS-6603" layout="dense">
      <div className="nexus-cc-form">
        <ChannelRow identity={linkedTelegram} testId="row-linked" />
        <ChannelRow identity={pendingTelegram} testId="row-pending" />
        <ChannelRow identity={unreachableTelegram} testId="row-unreachable" />
        <ChannelRow identity={revokedTelegram} readOnly testId="row-revoked" />
        <ChannelRow identity={noTelegram} testId="row-none" />
      </div>
    </PageFrame>
}`,...i.parameters?.docs?.source},description:{story:"The row alone, in every state — the part the People panel reuses read-only.",...i.parameters?.docs?.description}}};export{S as Denied,o as Disconnected,m as Disconnecting,w as Empty,f as Error,y as Loading,u as NexiNotConnected,h as NexiPending,T as Offline,d as Pending,l as Populated,g as QuietHours,i as RowStates,p as Unreachable,s as WithNexi,on as __namedExportsOrder,an as default};
