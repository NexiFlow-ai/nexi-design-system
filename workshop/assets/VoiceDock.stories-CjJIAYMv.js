import{j as B}from"./iframe-C_4ax-Jm.js";import{V as C,a as T}from"./VoiceDock-Bocykek7.js";import"./preload-helper-PPVm8Dsz.js";import"./VoiceWaves-CVFNr488.js";import"./mic-BjJKnwV3.js";import"./keyboard-6y42Pb3I.js";const V={title:"Layout/Voice dock",component:C,parameters:{ds:"DS-4004",layout:"fullscreen",docs:{description:{component:"The shared Voice Dock (DS-4004 ·  S0, 08-UX_UAT §3): one component for every app — the compact line\n(mic · language · mic state · context · screen) and the expanded panel (transcript · understood as · proposal /\nchoice / context-missing · session route + retention · controls). Rendered on the synthetic scenes of\n`VOICE_SCENES` — no microphone, no media, no request (`?voice_demo=<scene>` on a running app shows the same).\nMute · Stop sharing · End & clear are three distinct controls (); the proposal card has one primary\n(*Confirm*, or the step-up door at L4) and its change step is its own surface. Every state has its text and\nkeyboard equivalent (); the state line is an `aria-live` region."}}},decorators:[r=>B.jsx("div",{style:{minHeight:480,position:"relative"},children:B.jsx(r,{})})]},e=r=>{const s=T[r];if(!s)throw new globalThis.Error(`no voice scene ${r}`);return s},d={name:"idle",args:{scene:e("idle")}},m={name:"listening",args:{scene:e("listening")}},n={name:"j2-open",args:{scene:e("j2-open")}},l={name:"j2-choice",args:{scene:e("j2-choice")}},u={name:"j2-not-found",args:{scene:e("j2-not-found")}},a={name:"j3-dictation",args:{scene:e("j3-dictation")}},o={name:"j1-no-context",args:{scene:e("j1-no-context")}},g={name:"j1-sharing",args:{scene:e("j1-sharing")}},h={name:"j1-proposal",args:{scene:e("j1-proposal")},play:async({canvasElement:r})=>{const s=r.querySelector('[data-testid="voice-proposal"]');if(!s)throw new globalThis.Error("no proposal card");if(s.querySelectorAll(".nexus-btn-primary").length!==1)throw new globalThis.Error("the proposal card does not have exactly one primary")}},t={name:"j1-proposal-change",args:{scene:e("j1-proposal")},play:async({canvasElement:r})=>{if(r.querySelector('[data-testid="voice-change"]')?.click(),await new Promise(s=>setTimeout(s,20)),!r.querySelector('[data-testid="voice-change-inline"]'))throw new globalThis.Error("Change did not open the inline step")}},y={name:"j1-created",args:{scene:e("j1-created")}},j={name:"j1-cleared",args:{scene:e("j1-cleared")}},c={name:"l3-others",args:{scene:e("l3-others")}},f={name:"l4-step-up",args:{scene:e("l4-step-up")}},i={name:"denied",args:{scene:e("denied")}},x={name:"provider-unavailable",args:{scene:e("provider-unavailable")}},S={name:"offline",args:{scene:e("offline")}},v={name:"unsupported",args:{scene:e("unsupported")}},w={name:"org-switched",args:{scene:e("org-switched")}},p={name:"text-only",args:{scene:e("text-only")}},b={name:"hands-free",args:{scene:e("hands-free")}},E={name:"j1-proposal-graphite",args:{scene:e("j1-proposal")},globals:{theme:"graphite"}},F=["Idle","Listening","OpenByVoice","Choice","NotFound","Dictation","NoContext","Sharing","Proposal","ProposalChange","Created","Cleared","LevelThree","LevelFour","Denied","ProviderUnavailable","Offline","Unsupported","OrgSwitched","TextOnly","HandsFree","ProposalGraphite"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "idle",
  args: {
    scene: scene("idle")
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "listening",
  args: {
    scene: scene("listening")
  }
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "j2-open",
  args: {
    scene: scene("j2-open")
  }
}`,...n.parameters?.docs?.source},description:{story:"J2 — open by voice: the answer, a choice between look-alikes, a not-found, a view state.",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "j2-choice",
  args: {
    scene: scene("j2-choice")
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "j2-not-found",
  args: {
    scene: scene("j2-not-found")
  }
}`,...u.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "j3-dictation",
  args: {
    scene: scene("j3-dictation")
  }
}`,...a.parameters?.docs?.source},description:{story:"J3 — dictation into the field that has focus.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "j1-no-context",
  args: {
    scene: scene("j1-no-context")
  }
}`,...o.parameters?.docs?.source},description:{story:"J1 — a proposal to create: no context yet, the screen shared, the proposal, created, cleared.",...o.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "j1-sharing",
  args: {
    scene: scene("j1-sharing")
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "j1-proposal",
  args: {
    scene: scene("j1-proposal")
  },
  play: async ({
    canvasElement
  }) => {
    const card = canvasElement.querySelector('[data-testid="voice-proposal"]');
    if (!card) throw new globalThis.Error("no proposal card");
    if (card.querySelectorAll(".nexus-btn-primary").length !== 1) throw new globalThis.Error("the proposal card does not have exactly one primary");
  }
}`,...h.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "j1-proposal-change",
  args: {
    scene: scene("j1-proposal")
  },
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>('[data-testid="voice-change"]')?.click();
    await new Promise(r => setTimeout(r, 20));
    if (!canvasElement.querySelector('[data-testid="voice-change-inline"]')) throw new globalThis.Error("Change did not open the inline step");
  }
}`,...t.parameters?.docs?.source},description:{story:"The change step: its own surface with its own primary (*Re-propose*).",...t.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "j1-created",
  args: {
    scene: scene("j1-created")
  }
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "j1-cleared",
  args: {
    scene: scene("j1-cleared")
  }
}`,...j.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "l3-others",
  args: {
    scene: scene("l3-others")
  }
}`,...c.parameters?.docs?.source},description:{story:"Confirmation levels: L3 names the others affected; L4 asks for a step-up before anything happens.",...c.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "l4-step-up",
  args: {
    scene: scene("l4-step-up")
  }
}`,...f.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "denied",
  args: {
    scene: scene("denied")
  }
}`,...i.parameters?.docs?.source},description:{story:"The ladder: microphone denied · provider unavailable · offline · unsupported browser · the organization switched.",...i.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "provider-unavailable",
  args: {
    scene: scene("provider-unavailable")
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "offline",
  args: {
    scene: scene("offline")
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "unsupported",
  args: {
    scene: scene("unsupported")
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "org-switched",
  args: {
    scene: scene("org-switched")
  }
}`,...w.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "text-only",
  args: {
    scene: scene("text-only")
  }
}`,...p.parameters?.docs?.source},description:{story:"Modes: text-only (the dock speaks nothing) · hands-free.",...p.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "hands-free",
  args: {
    scene: scene("hands-free")
  }
}`,...b.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "j1-proposal-graphite",
  args: {
    scene: scene("j1-proposal")
  },
  globals: {
    theme: "graphite"
  }
}`,...E.parameters?.docs?.source}}};export{l as Choice,j as Cleared,y as Created,i as Denied,a as Dictation,b as HandsFree,d as Idle,f as LevelFour,c as LevelThree,m as Listening,o as NoContext,u as NotFound,S as Offline,n as OpenByVoice,w as OrgSwitched,h as Proposal,t as ProposalChange,E as ProposalGraphite,x as ProviderUnavailable,g as Sharing,p as TextOnly,v as Unsupported,F as __namedExportsOrder,V as default};
