import{ak as A,r as u,j as r,B as T,ab as j}from"./iframe-C_4ax-Jm.js";/* empty css                */import{B as W}from"./CoreShell-LzluVnjy.js";import{a as B}from"./navigation-BPhnWcXc.js";import{r as H}from"./nav-C8-c-HcF.js";import{c as V}from"./channels-D3mxlk7M.js";import{h as q}from"./chatApi-DU7mAKQS.js";import{u as O}from"./store-C-il-aT_.js";import{i as P}from"./ChannelLinkPage-YChsYSkS.js";import{a as D}from"./BrandMark-ZJnyD0IE.js";import"./Trace-BSKaAXMd.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./preload-helper-PPVm8Dsz.js";import"./link-CXIEul0Q.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./ConversationFrame-crdlsIAN.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./runtime-Cwmke1Hn.js";import"./credential-Ch26UJlM.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./errors-pXhwd8l7.js";import"./metrics-XT_i2DSD.js";import"./modules-A3eXOreg.js";import"./sparkles-t9beIr0T.js";import"./boxes-Cqxx_HWk.js";import"./plug-B3-qTSSD.js";import"./wrench-DsSy05cC.js";import"./activity-CxYo1_mQ.js";import"./shield-check-Cac0BQ49.js";import"./layers-Dsj4tA4G.js";import"./building-2-GerxkJzZ.js";import"./channelsFixtures-Dq-7QVz_.js";import"./client-Bqz7dDrB.js";import"./organizationRequests-CxMYSAGe.js";import"./transform-ZCU-3ITE.js";function _({rung:e="verify",view:n,onVerify:a,onReturn:S}){const{t}=A(),[o,s]=u.useState(!1),i=t(e==="verify"||e==="verifying"?"core.channels.step_up.title":e==="done"?"core.channels.step_up.done.title":e==="expired"?"core.channels.step_up.expired.title":e==="mismatch"?"core.channels.step_up.mismatch.title":e==="not_fresh"?"core.channels.step_up.not_fresh.title":e==="webview"?"core.channels.step_up.webview.title":"core.channels.step_up.error.title"),E=()=>{navigator.clipboard?.writeText(n.selfHref),s(!0)};return r.jsx("main",{className:"nexus-cc-auth","data-testid":"screen-channel-step-up","data-rung":e,"aria-busy":e==="verifying"||void 0,children:r.jsxs("div",{className:"nexus-cc-auth-card",children:[r.jsx("div",{className:"nexus-cc-auth-brand",children:r.jsx(D,{})}),r.jsx("h1",{className:"nexus-cc-auth-title",children:i}),e==="verify"||e==="verifying"||e==="not_fresh"?r.jsxs(r.Fragment,{children:[r.jsx("p",{className:"nexus-cc-auth-lead",role:e==="not_fresh"?"alert":void 0,children:t(e==="not_fresh"?"core.channels.step_up.not_fresh.body":"core.channels.step_up.body")}),r.jsx("div",{className:"nexus-cc-actions-row",children:r.jsx(T,{variant:"primary",onClick:a,disabled:e==="verifying","data-testid":"channel-step-up-verify",children:t(e==="verifying"?"core.channels.step_up.verifying":"core.channels.step_up.action")})})]}):null,e==="done"?r.jsxs(r.Fragment,{children:[r.jsx("p",{className:"nexus-cc-auth-lead",role:"status",children:t("core.channels.step_up.done.body")}),r.jsx("div",{className:"nexus-cc-actions-row",children:r.jsx(T,{variant:"primary",href:n.returnHref,onClick:S,"data-testid":"channel-step-up-return",children:t("core.channels.step_up.done.action")})})]}):null,e==="expired"||e==="mismatch"?r.jsx("p",{className:"nexus-cc-auth-lead",role:"alert",children:t(`core.channels.step_up.${e}.body`)}):null,e==="webview"?r.jsxs(r.Fragment,{children:[r.jsx("p",{className:"nexus-cc-auth-lead",role:"alert",children:t("core.channels.step_up.webview.body")}),r.jsx("div",{className:"nexus-cc-actions-row",children:r.jsx(T,{onClick:E,"data-testid":"channel-step-up-copy",children:t(o?"core.channels.link.webview.copied":"core.channels.link.webview.copy")})})]}):null,e==="error"?r.jsx(j,{kind:"error",body:t("core.channels.step_up.error.body")}):null,e==="offline"?r.jsx(j,{kind:"offline",onRetry:()=>window.location.reload()}):null]})})}_.__docgenInfo={description:"Channel step-up (DS-6604, the step-up face —  S5-B, ,  A1): the one page of the in-Telegram\nstep-up. A level-4 approval in Telegram shows *Verify and approve*; the press opens this page in the system\nbrowser. **Verify it is you** sends the person through the provider again (`flow=step_up` → `prompt=login`); back\nhere, `:complete` lifts her channel session to `aal = 2` and *Return to Telegram* takes her to the card, which now\nreads *Approve · Reject*. Refusals are one sentence each: expired · not yours (mismatch) · one more sign-in (a\nstale session) · a WebView · error · offline. Nothing on the page is a secret: the token stays in the URL ().",methods:[],displayName:"ChannelStepUpScreen",props:{rung:{required:!1,tsType:{name:"union",raw:'"verify" | "verifying" | "done" | "expired" | "mismatch" | "not_fresh" | "webview" | "error" | "offline"',elements:[{name:"literal",value:'"verify"'},{name:"literal",value:'"verifying"'},{name:"literal",value:'"done"'},{name:"literal",value:'"expired"'},{name:"literal",value:'"mismatch"'},{name:"literal",value:'"not_fresh"'},{name:"literal",value:'"webview"'},{name:"literal",value:'"error"'},{name:"literal",value:'"offline"'}]},description:"",defaultValue:{value:'"verify"',computed:!1}},view:{required:!0,tsType:{name:"ChannelStepUpView"},description:""},onVerify:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onReturn:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const F=/^[A-Za-z0-9_-]{32,64}$/;function N(e){const n=e;return n?.kind==="offline"?"offline":n?.status===410?"expired":n?.status===403?"mismatch":n?.status===409?"not_fresh":"error"}function R(){const n=B().get("token")??"",{state:a}=O(),[S,t]=u.useState("https://t.me/"),[o,s]=u.useState("booting"),i=`${H.channelStepUp()}?token=${encodeURIComponent(n)}`,E=typeof window<"u"?window.location.href:"",k=u.useMemo(()=>typeof navigator<"u"?P(navigator.userAgent):!1,[]),C=()=>{s("verifying"),window.location.assign(q.loginUrl({flow:"step_up",returnTo:i}))};u.useEffect(()=>{if(k){s("webview");return}if(!F.test(n)){s("expired");return}if(!a.hydrated)return;if(a.identity==="unavailable"){s("offline");return}if(!a.session){s("signin"),window.location.assign(q.loginUrl({flow:"step_up",returnTo:i}));return}let c=!1;return V.peekStepUp(n).then(async p=>{if(!c){if(p.bot?.username&&t(`https://t.me/${p.bot.username}`),!p.fresh){s("verify");return}s("verifying");try{const h=await V.completeStepUp(n);if(c)return;h.bot?.username&&t(`https://t.me/${h.bot.username}`),s("done")}catch(h){c||s(N(h))}}}).catch(p=>{c||s(N(p))}),()=>{c=!0}},[n,k,a.hydrated,a.identity,a.session,i]);const U={returnHref:S,selfHref:E};return o==="booting"||o==="signin"?r.jsx("main",{className:"nexus-cc-auth","data-testid":"screen-channel-step-up","data-rung":o,"aria-busy":"true",children:r.jsx("div",{className:"nexus-cc-auth-card"})}):r.jsx(_,{rung:o,view:U,onVerify:C})}R.__docgenInfo={description:"`/channels/telegram/step-up?token=…` (DS-6604 step-up face ·  ·  A1): the browser half of the\nin-Telegram step-up. The page peeks the token as the signed-in person; when her session predates the mint it asks\nher to **Verify it is you** — `flow=step_up` sends her through the provider with `prompt=login` and back to this\nvery URL; a fresh session completes the step-up at once and shows *Verified — return to Telegram*. Without a\nsession the step-up sign-in is started directly (she is linked, so she has an account). The token lives in the\nURL and travels in a request body; nothing on the page prints it.",methods:[],displayName:"ChannelStepUpPage"};const L=e=>r.jsx(W,{children:r.jsx(e,{})}),$={returnHref:"https://t.me/nexi_demo_bot",selfHref:"https://core.nexus.example/channels/telegram/step-up"};function I({rung:e}){return r.jsx(_,{rung:e,view:$})}const sr={title:"Apps/NexCore/Channel step-up",component:I,decorators:[L],parameters:{ds:"DS-6604",layout:"fullscreen",workbench:{ns:"core",path:"/channels/telegram/step-up"}}},m={args:{rung:"verify"},play:async({canvasElement:e})=>{if(e.querySelectorAll(".nexus-btn-primary").length!==1)throw new globalThis.Error("one primary action on the card (DS-3001)");if(!e.querySelector('[data-testid="channel-step-up-verify"]'))throw new globalThis.Error("the Verify button is the one way forward ()")}},d={args:{rung:"verifying"},play:async({canvasElement:e})=>{if(!e.querySelector('[data-testid="channel-step-up-verify"]')?.disabled)throw new globalThis.Error("the button is disabled while the provider is being asked")}},f={args:{rung:"done"},play:async({canvasElement:e})=>{if(!e.querySelector('[role="status"]'))throw new globalThis.Error("the done line is a status");if(!e.querySelector('[data-testid="channel-step-up-return"]'))throw new globalThis.Error("the way back to Telegram is the only action")}},y={args:{rung:"expired"}},g={args:{rung:"mismatch"},play:async({canvasElement:e})=>{if(e.querySelector('[data-testid="channel-step-up-verify"]'))throw new globalThis.Error("another person's token offers no way forward ()");if(!e.querySelector('[role="alert"]'))throw new globalThis.Error("the refusal is an alert")}},w={args:{rung:"not_fresh"}},v={args:{rung:"webview"},play:async({canvasElement:e})=>{if(e.querySelector('[data-testid="channel-step-up-verify"]'))throw new globalThis.Error("a WebView never sees the Verify button ()")}},b={args:{rung:"error"}},x={args:{rung:"offline"}},l={args:{rung:"expired"},render:()=>r.jsx(R,{}),play:async({canvasElement:e})=>{if(await new Promise(n=>setTimeout(n,0)),e.querySelector('[data-testid="channel-step-up-verify"]'))throw new globalThis.Error("no Verify button without an open request")}},ar=["Verify","Verifying","Verified","Expired","NotYours","OneMoreSignIn","WebViewRefused","Error","Offline","BoundWithoutToken"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "verify"
  },
  play: async ({
    canvasElement
  }) => {
    const primaries = canvasElement.querySelectorAll(".nexus-btn-primary");
    if (primaries.length !== 1) throw new globalThis.Error("one primary action on the card (DS-3001)");
    if (!canvasElement.querySelector('[data-testid="channel-step-up-verify"]')) throw new globalThis.Error("the Verify button is the one way forward ()");
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "verifying"
  },
  play: async ({
    canvasElement
  }) => {
    const button = canvasElement.querySelector<HTMLButtonElement>('[data-testid="channel-step-up-verify"]');
    if (!button?.disabled) throw new globalThis.Error("the button is disabled while the provider is being asked");
  }
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "done"
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[role="status"]')) throw new globalThis.Error("the done line is a status");
    if (!canvasElement.querySelector('[data-testid="channel-step-up-return"]')) throw new globalThis.Error("the way back to Telegram is the only action");
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "expired"
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "mismatch"
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="channel-step-up-verify"]')) throw new globalThis.Error("another person's token offers no way forward ()");
    if (!canvasElement.querySelector('[role="alert"]')) throw new globalThis.Error("the refusal is an alert");
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "not_fresh"
  }
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "webview"
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="channel-step-up-verify"]')) throw new globalThis.Error("a WebView never sees the Verify button ()");
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "error"
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "offline"
  }
}`,...x.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    rung: "expired"
  },
  render: () => <ChannelStepUpPage />,
  play: async ({
    canvasElement
  }) => {
    await new Promise(r => setTimeout(r, 0));
    if (canvasElement.querySelector('[data-testid="channel-step-up-verify"]')) throw new globalThis.Error("no Verify button without an open request");
  }
}`,...l.parameters?.docs?.source},description:{story:"The page as the route mounts it (`ChannelStepUpPage`): the token comes from the URL, the session from core-api.\nOpened without a token it is the one *expired* sentence before anything is read (a malformed link and a dead one\nare the same answer — ); nothing is fetched in the workshop.",...l.parameters?.docs?.description}}};export{l as BoundWithoutToken,b as Error,y as Expired,g as NotYours,x as Offline,w as OneMoreSignIn,f as Verified,m as Verify,d as Verifying,v as WebViewRefused,ar as __namedExportsOrder,sr as default};
