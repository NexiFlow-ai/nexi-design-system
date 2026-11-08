import{j as e,am as g,r as h,w as f,v as y}from"./iframe-C_4ax-Jm.js";import{a as w,u as x,b}from"./SupportDrawerHost-Cw3uCbc8.js";import"./preload-helper-PPVm8Dsz.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";const S=()=>Promise.resolve({assertion:"synthetic",frame_url:"about:blank",expires_at:"2026-10-29T10:00:00Z"}),v=()=>new Promise(()=>{}),k=()=>Promise.resolve(null);function d({openOnMount:r}){const a=x(),{t:s}=g();return h.useEffect(()=>{r&&a.enabled&&a.open({app:"NexChat",label:"Thread · Weekly digest"})},[r,a.enabled]),e.jsxs("div",{className:"nexus-shell-body",style:{minHeight:480},children:[e.jsxs("main",{className:"nexus-shell-main",style:{padding:"var(--nexus-space-9)"},children:[e.jsx("h1",{style:{margin:0,fontSize:"var(--nexus-text-2xl)"},children:"Weekly digest"}),e.jsx(f,{children:a.enabled?e.jsx(y,{tone:"quiet",onClick:()=>a.open({app:"NexChat",label:"Thread · Weekly digest"}),"data-testid":"story-support-open",children:s("support.menu.get")}):e.jsxs("span",{"data-testid":"story-support-none",children:[s("support.menu.get")," — ∅"]})})]}),e.jsx(b,{})]})}const A={title:"Layout/Support host",component:w,parameters:{ds:"DS-5021",layout:"fullscreen"},args:{config:{mint:S,helpHref:"/core/help",helloTimeoutMs:6e4},orgName:"Acme Logistics",lang:"en",offline:!1,sessionReady:!0,children:e.jsx(d,{openOnMount:!0})}},m=async(r,a=40)=>{for(let s=0;s<a;s++){if(document.querySelector(r))return;await new Promise(u=>setTimeout(u,25))}throw new globalThis.Error(`${r} did not appear`)},o={name:"door",args:{children:e.jsx(d,{})}},n={name:"waiting-for-hello",parameters:{a11y:{disable:!0}},play:async()=>m('[data-testid="support-frame"][data-support="hello"]')},l={name:"minting",args:{config:{mint:v}},play:async()=>m('[data-support-state="loading"], [data-state="loading"]').catch(()=>{})},p={name:"offline",args:{offline:!0}},t={name:"unavailable",args:{config:{mint:k,helpHref:"/core/help"}}},i={name:"visitor",args:{sessionReady:!1,children:e.jsx(d,{})},play:async({canvasElement:r})=>{if(!r.querySelector('[data-testid="story-support-none"]'))throw new globalThis.Error("a Visitor was offered the door")}},c={name:"waiting-for-hello-uk",args:{lang:"uk"},globals:{locale:"uk"},parameters:{a11y:{disable:!0}}},C=["Door","WaitingForHello","Minting","Offline","Unavailable","Visitor","WaitingUk"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "door",
  args: {
    children: <Screen />
  }
}`,...o.parameters?.docs?.source},description:{story:"The door, closed: the row that opens it.",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "waiting-for-hello",
  parameters: {
    a11y: {
      disable: true
    }
  },
  play: async () => drawerShows('[data-testid="support-frame"][data-support="hello"]')
}`,...n.parameters?.docs?.source},description:{story:"Opened: the context minted, the drawer waiting for the frame's hello.\naxe cannot message the desk's frame under jsdom (`about:blank` here) — : the frame rung is audited in the browser (S3 screenshots).",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "minting",
  args: {
    config: {
      mint: never
    }
  },
  play: async () => drawerShows('[data-support-state="loading"], [data-state="loading"]').catch(() => undefined)
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "offline",
  args: {
    offline: true
  }
}`,...p.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "unavailable",
  args: {
    config: {
      mint: none,
      helpHref: "/core/help"
    }
  }
}`,...t.parameters?.docs?.source},description:{story:"404 — the person may not have a context (a service bearer, a suspended organization): the Help & support door.",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "visitor",
  args: {
    sessionReady: false,
    children: <Screen />
  },
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="story-support-none"]')) throw new globalThis.Error("a Visitor was offered the door");
  }
}`,...i.parameters?.docs?.source},description:{story:"A Visitor: no door, no row.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "waiting-for-hello-uk",
  args: {
    lang: "uk"
  },
  globals: {
    locale: "uk"
  },
  parameters: {
    a11y: {
      disable: true
    }
  }
}`,...c.parameters?.docs?.source}}};export{o as Door,l as Minting,p as Offline,t as Unavailable,i as Visitor,n as WaitingForHello,c as WaitingUk,C as __namedExportsOrder,A as default};
