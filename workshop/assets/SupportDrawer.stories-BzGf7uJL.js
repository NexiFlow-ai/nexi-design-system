import{r as O,j as C}from"./iframe-C_4ax-Jm.js";import{S as B}from"./SupportDrawer-BxX_JNRa.js";import"./preload-helper-PPVm8Dsz.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";const x=(e,s)=>({id:e,role:"assistant",text:s}),b=(e,s)=>({id:e,role:"user",text:s,spoken:!1}),A=[x("s1","Hi Bohdan — this is NEXUS support for ACME Manufacturing. Ask me about NEXUS, or say *talk to a person* at any time.")],l=[...A,b("u1","Why did our document processing stop working?")],k=[...l,x("s2",`Document processing runs through the Google Drive connection of your organization. When that connection reports an authorization problem, every processing run stops until an administrator re-checks it in NexCore › Connections.

— from the platform documentation

If that is not it, say *talk to a person* and someone from NEXUS joins here.`)],M=[...k,b("u2","talk to a person"),x("s3","Alright — a person from NEXUS will join this conversation. Your expected first reply is within 1 hour. You can keep writing here.")],T=[...M,x("y1","Hi Bohdan, Yulia here. I see three failed runs today from the same connection — I'll ask your administrator to re-check it, and I've opened SUP-7 so you can follow this.")],I=[{key:"SUP-7",title:"Document processing stopped",state:"in_progress",expectedReplyAt:"2026-10-27T16:00:00Z",lastUpdate:"Yulia: asked your administrator to re-check the Google Drive connection."},{key:"SUP-4",title:"Question about monthly usage",state:"resolved",lastUpdate:"Resolved — the usage page explains the five counted activities."},{key:"SUP-2",title:"Cannot open a shared board",state:"closed"}];function H({state:e,conversation:s,cases:N,initialTab:D,from:U}){const[R,P]=O.useState("");return C.jsxs("div",{className:"nexus-cc-split",style:{display:"flex",height:"80vh"},children:[C.jsx("div",{style:{flex:1}}),C.jsx(B,{onClose:()=>{},orgName:"ACME Manufacturing",from:U,state:e,conversation:s,draft:R,onDraftChange:P,onSend:()=>{},cases:N,onOpenCase:()=>{},helpHref:"/core/help",initialTab:D,onRetry:()=>{}})]})}const u=e=>{throw new globalThis.Error(e)},F=/\b(frame|assertion|pdp|grant row|fingerprint|balance|credits? left)\b/i,a=async({canvasElement:e})=>{const s=e.textContent??"";F.test(s)&&u("the drawer must not name a mechanism or a balance ( · )"),/@/.test(s)&&u("no e-mail in the drawer")},K={title:"Conversation/Support drawer",component:H,parameters:{ds:"DS-5021",layout:"fullscreen"},args:{state:"ready",conversation:{status:"idle",turns:A},cases:{state:"ready",rows:I}}},r={name:"Empty · opened from +",play:a},t={name:"Carried · from a door card in NexGraph",args:{conversation:{status:"idle",turns:l},from:{app:"NexGraph",label:"Sources"}},play:a},m={args:{conversation:{status:"thinking",turns:l}}},n={args:{conversation:{status:"idle",turns:k}},play:a},g={name:"Handed off · waiting for a person",args:{conversation:{status:"idle",turns:M,person:{state:"waiting"}}},play:a},y={name:"Person active · Yulia joined (first name only)",args:{conversation:{status:"idle",turns:T,person:{state:"active",firstName:"Yulia"}}},play:async e=>{await a(e);const s=e.canvasElement.querySelector('[data-testid="support-drawer-person"]');(!s||s.getAttribute("role")!=="status")&&u("the person line is a status")}},d={name:"My cases · SUP-n · expected reply",args:{initialTab:"cases"},play:async e=>{await a(e),/SUP-7/.test(e.canvasElement.textContent??"")||u("the alias SUP-7 is shown"),/OPS-|wi_/.test(e.canvasElement.textContent??"")&&u("never an internal item key")}},h={name:"My cases · none yet",args:{initialTab:"cases",cases:{state:"ready",rows:[]}}},f={args:{initialTab:"cases",cases:{state:"loading"}}},v={args:{initialTab:"cases",cases:{state:"error",retry:()=>{}}}},S={args:{state:"loading"}},o={args:{state:"offline",conversation:{status:"idle",turns:l}}},i={name:"Support unavailable · Help & support door",args:{state:"frame-unavailable"},play:a},c={name:"No credits · identical to Carried ()",args:{conversation:{status:"idle",turns:l}},play:a},p={name:"Suspended organization · running session keeps the drawer",args:{conversation:{status:"idle",turns:A}},play:a},E={...n,name:"Answered · українською",globals:{locale:"uk"}},w={...d,name:"My cases · українською",globals:{locale:"uk"}},$=["Empty","Carried","Thinking","Answered","HandedOff","PersonActive","MyCases","MyCasesEmpty","MyCasesLoading","MyCasesError","Loading","Offline","FrameUnavailable","NoCredits","SuspendedSession","AnsweredUkrainian","MyCasesUkrainian"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Empty · opened from +",
  play: noMechanism
}`,...r.parameters?.docs?.source},description:{story:"Opened from the `+` row: the opening line, nothing carried over.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Carried · from a door card in NexGraph",
  args: {
    conversation: {
      status: "idle",
      turns: CARRIED
    },
    from: {
      app: "NexGraph",
      label: "Sources"
    }
  },
  play: noMechanism
}`,...t.parameters?.docs?.source},description:{story:"Opened from the door card after a dead-end answer in NexGraph: the question travels only because the person chose it.",...t.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    conversation: {
      status: "thinking",
      turns: CARRIED
    }
  }
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    conversation: {
      status: "idle",
      turns: ANSWERED
    }
  },
  play: noMechanism
}`,...n.parameters?.docs?.source},description:{story:"A0: the answer with its provenance line and the way to a person in words.",...n.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Handed off · waiting for a person",
  args: {
    conversation: {
      status: "idle",
      turns: HANDED_OFF,
      person: {
        state: "waiting"
      }
    }
  },
  play: noMechanism
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Person active · Yulia joined (first name only)",
  args: {
    conversation: {
      status: "idle",
      turns: PERSON_ACTIVE,
      person: {
        state: "active",
        firstName: "Yulia"
      }
    }
  },
  play: async ctx => {
    await noMechanism(ctx);
    const status = ctx.canvasElement.querySelector('[data-testid="support-drawer-person"]');
    if (!status || status.getAttribute("role") !== "status") fails("the person line is a status");
  }
}`,...y.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "My cases · SUP-n · expected reply",
  args: {
    initialTab: "cases"
  },
  play: async ctx => {
    await noMechanism(ctx);
    if (!/SUP-7/.test(ctx.canvasElement.textContent ?? "")) fails("the alias SUP-7 is shown");
    if (/OPS-|wi_/.test(ctx.canvasElement.textContent ?? "")) fails("never an internal item key");
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "My cases · none yet",
  args: {
    initialTab: "cases",
    cases: {
      state: "ready",
      rows: []
    }
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    initialTab: "cases",
    cases: {
      state: "loading"
    }
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    initialTab: "cases",
    cases: {
      state: "error",
      retry: () => undefined
    }
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    state: "loading"
  }
}`,...S.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    state: "offline",
    conversation: {
      status: "idle",
      turns: CARRIED
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"Offline: the words stay in the composer; sending again is the retry.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Support unavailable · Help & support door",
  args: {
    state: "frame-unavailable"
  },
  play: noMechanism
}`,...i.parameters?.docs?.source},description:{story:"The frame could not load: the honest line and the door to Help & support.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "No credits · identical to Carried ()",
  args: {
    conversation: {
      status: "idle",
      turns: CARRIED
    }
  },
  play: noMechanism
}`,...c.parameters?.docs?.source},description:{story:"At 0 % credits the drawer is identical — nothing here depends on credits ().",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Suspended organization · running session keeps the drawer",
  args: {
    conversation: {
      status: "idle",
      turns: OPENING
    }
  },
  play: noMechanism
}`,...p.parameters?.docs?.source},description:{story:"A suspended organization's running session keeps the drawer ().",...p.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  ...Answered,
  name: "Answered · українською",
  globals: {
    locale: "uk"
  }
}`,...E.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...MyCases,
  name: "My cases · українською",
  globals: {
    locale: "uk"
  }
}`,...w.parameters?.docs?.source}}};export{n as Answered,E as AnsweredUkrainian,t as Carried,r as Empty,i as FrameUnavailable,g as HandedOff,S as Loading,d as MyCases,h as MyCasesEmpty,v as MyCasesError,f as MyCasesLoading,w as MyCasesUkrainian,c as NoCredits,o as Offline,y as PersonActive,p as SuspendedSession,m as Thinking,$ as __namedExportsOrder,K as default};
