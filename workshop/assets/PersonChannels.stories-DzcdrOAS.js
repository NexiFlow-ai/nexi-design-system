import{j as l,I as h,r as S}from"./iframe-C_4ax-Jm.js";import{i as E,a as g}from"./harness-CVmC89KY.js";import{P as w,a as T}from"./PersonChannelsSection-C2uNusAe.js";import{n as f,b as P,r as y,u as b,c as B}from"./channelsFixtures-Dq-7QVz_.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */import"./CoreShell-LzluVnjy.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./nav-C8-c-HcF.js";import"./runtime-Cwmke1Hn.js";import"./credential-Ch26UJlM.js";import"./chatApi-DU7mAKQS.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./organizationRequests-CxMYSAGe.js";import"./store-C-il-aT_.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./metrics-XT_i2DSD.js";import"./modules-A3eXOreg.js";import"./sparkles-t9beIr0T.js";import"./boxes-Cqxx_HWk.js";import"./plug-B3-qTSSD.js";import"./wrench-DsSy05cC.js";import"./activity-CxYo1_mQ.js";import"./shield-check-Cac0BQ49.js";import"./layers-Dsj4tA4G.js";import"./building-2-GerxkJzZ.js";import"./channels-D3mxlk7M.js";import"./ConnectedChannels-DEYqMKgq.js";import"./format-CgRB8Fht.js";function R({rung:e="populated",identity:u=B}){const[k,v]=S.useState(u);return l.jsx(h,{title:"Oksana Bondar",kind:"person",onClose:()=>{},testId:"person-inspector",children:l.jsx(T,{rung:e,person:{name:"Oksana Bondar"},identity:k,onRevoke:()=>v(y)})})}const Ne={title:"Apps/NexCore/Person channels",component:R,parameters:{ds:"DS-6603",layout:"fullscreen",...g("/core/people")}},o={args:{},play:async({canvasElement:e})=>{if(!e.querySelector('[data-testid="channel-revoke-open"]'))throw new globalThis.Error("Revoke is the admin's one action ()");if(e.querySelector('[data-testid="person-channels-telegram-disconnect"]'))throw new globalThis.Error("the admin's row is read-only: no Disconnect of the person's ()")}},n={args:{identity:P}},t={args:{identity:b}},a={args:{identity:y}},s={args:{},play:async({canvasElement:e})=>{if(e.querySelector('[data-testid="channel-revoke-open"]')?.click(),await new Promise(u=>setTimeout(u,0)),!e.querySelector('[data-testid="channel-revoke"]'))throw new globalThis.Error("Revoke asks in place, never a modal ()")}},i={args:{rung:"empty",identity:f}},p={args:{rung:"loading"}},m={args:{rung:"error"}},c={args:{rung:"denied"}},r={parameters:g("/core/people","empty"),decorators:[E],render:()=>l.jsx(h,{title:"Oksana Bondar",kind:"person",onClose:()=>{},testId:"person-inspector",children:l.jsx(w,{person:{id:"usr_oksana",name:"Oksana Bondar"}})})},d={...r,parameters:g("/core/people","denied")},ze=["Populated","Pending","Unreachable","Revoked","Revoking","Empty","Loading","Error","Denied","BoundEmpty","BoundDenied"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="channel-revoke-open"]')) throw new globalThis.Error("Revoke is the admin's one action ()");
    if (canvasElement.querySelector('[data-testid="person-channels-telegram-disconnect"]')) throw new globalThis.Error("the admin's row is read-only: no Disconnect of the person's ()");
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    identity: pendingTelegram
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    identity: unreachableTelegram
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    identity: revokedTelegram
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvasElement
  }) => {
    (canvasElement.querySelector('[data-testid="channel-revoke-open"]') as HTMLButtonElement | null)?.click();
    await new Promise(r => setTimeout(r, 0));
    if (!canvasElement.querySelector('[data-testid="channel-revoke"]')) throw new globalThis.Error("Revoke asks in place, never a modal ()");
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "empty",
    identity: noTelegram
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "loading"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "error"
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "denied"
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: at("/core/people", "empty"),
  decorators: [inShell],
  render: () => <Inspector title="Oksana Bondar" kind="person" onClose={() => undefined} testId="person-inspector">
      <PersonChannelsSection person={{
      id: "usr_oksana",
      name: "Oksana Bondar"
    }} />
    </Inspector>
}`,...r.parameters?.docs?.source},description:{story:" S1 — the section as the People inspector mounts it (`PersonChannelsSection`): bound to core-api's admin\ndoors, drawn here through the `?uat=` view override (Q-G-6) — nothing is read; the populated rungs are the fixture\nstories above.",...r.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...BoundEmpty,
  parameters: at("/core/people", "denied")
}`,...d.parameters?.docs?.source}}};export{d as BoundDenied,r as BoundEmpty,c as Denied,i as Empty,m as Error,p as Loading,n as Pending,o as Populated,a as Revoked,s as Revoking,t as Unreachable,ze as __namedExportsOrder,Ne as default};
