import{j as r,r as l}from"./iframe-C_4ax-Jm.js";/* empty css                */import{B as u}from"./CoreShell-LzluVnjy.js";import{S as d,a as h,b as g,V as y,W as S,c as f}from"./AuthScreens-CPBAyE5i.js";import"./preload-helper-PPVm8Dsz.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./nav-C8-c-HcF.js";import"./runtime-Cwmke1Hn.js";import"./credential-Ch26UJlM.js";import"./chatApi-DU7mAKQS.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./organizationRequests-CxMYSAGe.js";import"./store-C-il-aT_.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./metrics-XT_i2DSD.js";import"./modules-A3eXOreg.js";import"./sparkles-t9beIr0T.js";import"./boxes-Cqxx_HWk.js";import"./plug-B3-qTSSD.js";import"./wrench-DsSy05cC.js";import"./activity-CxYo1_mQ.js";import"./shield-check-Cac0BQ49.js";import"./layers-Dsj4tA4G.js";import"./building-2-GerxkJzZ.js";const b=e=>r.jsx(u,{children:r.jsx(e,{})}),je={title:"Apps/NexCore/Auth",decorators:[b],parameters:{ds:"DS-6602",layout:"fullscreen",workbench:{ns:"core",path:"/signin"}}},t={render:()=>r.jsx(h,{}),parameters:{workbench:{ns:"core",path:"/signup"}}},o={name:"Sign up · by invitation (self-registration off)",render:()=>r.jsx(g,{offer:{google:!0,devInboxUrl:null,organizationCreation:"by_request",selfRegistration:"off"}}),parameters:{workbench:{ns:"core",path:"/signup"}},play:async({canvasElement:e})=>{if(e.querySelector('[data-testid="create-account"]'))throw new globalThis.Error("*Create account* is not offered when the realm registers nobody ()");if(!e.querySelector('[data-testid="signin-invited"]'))throw new globalThis.Error("the one primary is *Sign in*");if(e.querySelectorAll(".nexus-btn-primary").length!==1)throw new globalThis.Error("one primary — Sign in")}},a={...o,name:"Sign up · by invitation · українською",globals:{locale:"uk"}},i={render:()=>r.jsx(d,{})},s={render:()=>r.jsx(y,{}),parameters:{workbench:{ns:"core",path:"/verify?email=olena%40nexus.example"}}},c={render:()=>r.jsx(S,{}),parameters:{workbench:{ns:"core",path:"/welcome"}}};function w(){const[e,p]=l.useState("create");return r.jsx(f,{choice:e,onChoice:p,onContinue:()=>{},organizationCreation:"by_request"})}const n={name:"Welcome · by request ()",render:()=>r.jsx(w,{}),parameters:{workbench:{ns:"core",path:"/welcome"}},play:async({canvasElement:e})=>{if(!e.querySelector('[data-testid="choice-request"]'))throw new globalThis.Error("the first choice is *Request an organization* under by_request ()");if(e.querySelector('[data-testid="choice-create"]'))throw new globalThis.Error("*Create an organization* is not offered under by_request ()");if(!e.querySelector('[data-testid="choice-join"]'))throw new globalThis.Error("*Join an existing organization* stays (08-UX §4)");if(e.querySelectorAll(".nexus-btn-primary").length!==1)throw new globalThis.Error("one primary — Continue")}},m={...n,name:"Welcome · by request · українською",globals:{locale:"uk"}},Ae=["SignUp","SignUpByInvitation","SignUpByInvitationUkrainian","SignIn","Verify","Welcome","WelcomeByRequest","WelcomeByRequestUkrainian"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <SignUpScreen />,
  parameters: {
    workbench: {
      ns: "core",
      path: "/signup"
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Sign up · by invitation (self-registration off)",
  render: () => <SignUpCard offer={{
    google: true,
    devInboxUrl: null,
    organizationCreation: "by_request",
    selfRegistration: "off"
  }} />,
  parameters: {
    workbench: {
      ns: "core",
      path: "/signup"
    }
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="create-account"]')) throw new globalThis.Error("*Create account* is not offered when the realm registers nobody ()");
    if (!canvasElement.querySelector('[data-testid="signin-invited"]')) throw new globalThis.Error("the one primary is *Sign in*");
    if (canvasElement.querySelectorAll(".nexus-btn-primary").length !== 1) throw new globalThis.Error("one primary — Sign in");
  }
}`,...o.parameters?.docs?.source},description:{story:" × FS-B2 (QA, ): a contour whose realm registers nobody (`self_registration = off`) draws no\n*Create account* — the invite made the account, the realm's mail sets the password; the card offers *Sign in* (and\nGoogle when the contour has it) and says so in one line. The `signup` ceremony is never started from here.",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...SignUpByInvitation,
  name: "Sign up · by invitation · українською",
  globals: {
    locale: "uk"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <SignInScreen />
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <VerifyScreen />,
  parameters: {
    workbench: {
      ns: "core",
      path: "/verify?email=olena%40nexus.example"
    }
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <WelcomeScreen />,
  parameters: {
    workbench: {
      ns: "core",
      path: "/welcome"
    }
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Welcome · by request ()",
  render: () => <WelcomeByRequestCard />,
  parameters: {
    workbench: {
      ns: "core",
      path: "/welcome"
    }
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="choice-request"]')) throw new globalThis.Error("the first choice is *Request an organization* under by_request ()");
    if (canvasElement.querySelector('[data-testid="choice-create"]')) throw new globalThis.Error("*Create an organization* is not offered under by_request ()");
    if (!canvasElement.querySelector('[data-testid="choice-join"]')) throw new globalThis.Error("*Join an existing organization* stays (08-UX §4)");
    if (canvasElement.querySelectorAll(".nexus-btn-primary").length !== 1) throw new globalThis.Error("one primary — Continue");
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...WelcomeByRequest,
  name: "Welcome · by request · українською",
  globals: {
    locale: "uk"
  }
}`,...m.parameters?.docs?.source}}};export{i as SignIn,t as SignUp,o as SignUpByInvitation,a as SignUpByInvitationUkrainian,s as Verify,c as Welcome,n as WelcomeByRequest,m as WelcomeByRequestUkrainian,Ae as __namedExportsOrder,je as default};
