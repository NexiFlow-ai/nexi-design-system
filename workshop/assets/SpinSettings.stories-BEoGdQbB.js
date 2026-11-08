import{r as s,j as e,a9 as b}from"./iframe-C_4ax-Jm.js";import{B as D}from"./BrandMark-ZJnyD0IE.js";import{S as q,a as R,b as F,c as f}from"./SpinSettings-DNlEaodc.js";import{U as G}from"./user-CGy4k_zL.js";import{S as I}from"./sparkles-t9beIr0T.js";import{P as O}from"./palette-DzfNaVfP.js";import{G as z}from"./globe-DcMfC0yC.js";import{B as H}from"./bell-Cmxh_C6X.js";import{K}from"./keyboard-6y42Pb3I.js";import{R as Y}from"./refresh-cw-A2bjRiiQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Trace-BSKaAXMd.js";const $=[{id:"m_gpt",name:"GPT-5",provider:"OpenAI",state:"ready"},{id:"m_claude",name:"Claude Sonnet",provider:"Anthropic",state:"ready"},{id:"m_gemini",name:"Gemini Flash",provider:"Google",state:"needs_key"},{id:"m_local",name:"Qwen 7B (your laptop)",provider:"Local",state:"ready"}];function Q({size:n=14}){return e.jsx(D,{width:n,height:n})}function V({onBackup:n}){return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Profile"}),e.jsx("p",{children:"How you appear in rooms. Your picture comes from your organization's directory."}),e.jsxs("div",{className:"nexus-field",children:[e.jsx("label",{className:"nexus-field-label",htmlFor:"spin-profile-name",children:"Name"}),e.jsx("input",{id:"spin-profile-name",className:"nexus-input",defaultValue:"Dana"})]}),e.jsx("div",{role:"list",className:"nexus-spin-settings-rows",children:e.jsx(b,{title:"Your key",lines:["Kept on this device. A backup lets you sign in on another one."],testId:"profile-key",children:e.jsx("button",{type:"button",className:"nexus-btn nexus-btn-sm",onClick:n,children:"Back up…"})})})]})}function J({account:n={state:"connected",name:"Dana",organization:"Bench Lab",since:"on 31 Oct"},modelsStatus:o="ready",initialSection:a="models"}){const[N,w]=s.useState(!0),[j,k]=s.useState("system"),[A,v]=s.useState("en"),[M,C]=s.useState("mentions"),[E,L]=s.useState("auto"),[P,T]=s.useState([]),t=y=>T(B=>[...B,y]),_=n.state==="unbound",U=[{id:"profile",label:"Profile",icon:G,group:"Personal",content:e.jsx(V,{onBackup:()=>t("backup")})},{id:"nexi",label:"Nexi account",icon:Q,group:"Personal",content:e.jsx(R,{account:n,onConnect:()=>t("connect"),onDisconnect:()=>t("disconnect"),onCancel:()=>t("cancel"),onRetry:()=>t("retry")})},{id:"models",label:"Models",icon:I,group:"Personal",content:e.jsx(F,{models:$,value:E,onChange:y=>(L(y),t(`model:${y}`)),onManage:()=>t("manage"),status:o,unbound:_,onConnect:()=>t("connect")})},{id:"appearance",label:"Appearance",icon:O,group:"App",content:e.jsx(f,{title:"Theme",hint:"A preference for this device. System follows your operating system.",options:[{id:"system",label:"System",swatch:"system"},{id:"light",label:"Light",swatch:"light"},{id:"graphite",label:"Graphite",swatch:"graphite"}],value:j,onChange:k,testId:"settings-theme"})},{id:"language",label:"Language",icon:z,group:"App",content:e.jsx(f,{title:"Language",hint:"The language of the interface. Conversations are not translated.",options:[{id:"en",label:"English"},{id:"uk",label:"Українська"}],value:A,onChange:v,testId:"settings-locale"})},{id:"notifications",label:"Notifications",icon:H,group:"App",content:e.jsx(f,{title:"Notify me about",options:[{id:"all",label:"Every message"},{id:"mentions",label:"Mentions and chats with me",hint:"Recommended"},{id:"none",label:"Nothing"}],value:M,onChange:C,testId:"settings-notify"})},{id:"shortcuts",label:"Shortcuts",icon:K,group:"App",content:e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Shortcuts"}),e.jsxs("div",{role:"list",className:"nexus-spin-settings-rows",children:[e.jsx(b,{title:"Search",meta:"⌘K"}),e.jsx(b,{title:"New message",meta:"⌘N"}),e.jsx(b,{title:"Switch workspace",meta:"⌘⇧O"})]})]})},{id:"updates",label:"Updates",icon:Y,group:"App",content:e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Updates"}),e.jsx("div",{role:"list",className:"nexus-spin-settings-rows",children:e.jsx(b,{title:"Nexi 0.9.4",lines:["You're up to date."],children:e.jsx("button",{type:"button",className:"nexus-btn nexus-btn-sm",onClick:()=>t("check"),children:"Check now"})})})]})}];return e.jsxs("div",{style:{minHeight:560},children:[N?null:e.jsx("button",{type:"button",className:"nexus-btn",onClick:()=>w(!0),children:"Settings…"}),e.jsx(q,{open:N,onClose:()=>w(!1),sections:U,initialSection:a}),e.jsx("output",{"data-testid":"settings-log",style:{display:"none"},children:P.join("|")})]})}const le={title:"Apps/Nexi Spin/Settings",component:J,parameters:{ds:"DS-6922",layout:"fullscreen"}},i={args:{},play:async({canvasElement:n})=>{const o=a=>document.querySelector(`[data-testid="${a}"]`);if(o("settings-models-choice-m_claude")?.click(),await new Promise(a=>setTimeout(a,20)),!o("settings-log")?.textContent?.includes("model:m_claude"))throw new globalThis.Error("the pick did not reach the host");if(!o("settings-models-choice-m_gemini")?.disabled)throw new globalThis.Error("a model without a key must not be pickable")}},r={args:{modelsStatus:"loading"}},c={args:{modelsStatus:"error"}},l={args:{account:{state:"unbound"}}},d={args:{initialSection:"nexi"}},p={args:{initialSection:"nexi",account:{state:"unbound"}}},u={args:{initialSection:"nexi",account:{state:"linking"}}},m={args:{initialSection:"nexi",account:{state:"error"}}},g={args:{initialSection:"profile"}},h={args:{initialSection:"appearance"}},x={args:{initialSection:"notifications"}},S={args:{initialSection:"updates"}},de=["Models","ModelsLoading","ModelsError","ModelsUnbound","NexiAccount","NexiAccountUnbound","NexiAccountLinking","NexiAccountError","ProfileSection","Appearance","Notifications","Updates"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvasElement
  }) => {
    const q = (id: string) => document.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    void canvasElement;
    q("settings-models-choice-m_claude")?.click();
    await new Promise(r => setTimeout(r, 20));
    if (!q("settings-log")?.textContent?.includes("model:m_claude")) throw new globalThis.Error("the pick did not reach the host");
    if (!(q("settings-models-choice-m_gemini") as HTMLButtonElement | null)?.disabled) throw new globalThis.Error("a model without a key must not be pickable");
  }
}`,...i.parameters?.docs?.source},description:{story:"Models — the one place (-2): Auto first, the organization's connections, *needs a key in Nexi* on one, *Manage in Nexi*.",...i.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    modelsStatus: "loading"
  }
}`,...r.parameters?.docs?.source},description:{story:"Models — reading.",...r.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    modelsStatus: "error"
  }
}`,...c.parameters?.docs?.source},description:{story:"Models — could not be read.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    account: {
      state: "unbound"
    }
  }
}`,...l.parameters?.docs?.source},description:{story:"Models — the person has not connected their Nexi account: the sentence and the one button.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    initialSection: "nexi"
  }
}`,...d.parameters?.docs?.source},description:{story:"Nexi account — connected: who, where, since when; *Disconnect*.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    initialSection: "nexi",
    account: {
      state: "unbound"
    }
  }
}`,...p.parameters?.docs?.source},description:{story:"Nexi account — not connected: the one button (S3-B's ceremony behind it).",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    initialSection: "nexi",
    account: {
      state: "linking"
    }
  }
}`,...u.parameters?.docs?.source},description:{story:"Nexi account — linking: the trace and *Finish in the browser*; Cancel.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    initialSection: "nexi",
    account: {
      state: "error"
    }
  }
}`,...m.parameters?.docs?.source},description:{story:"Nexi account — the link failed: one sentence and *Try again*.",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    initialSection: "profile"
  }
}`,...g.parameters?.docs?.source},description:{story:"Profile — the name, the key's backup row; the picture comes from the directory (S8), never a URL.",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    initialSection: "appearance"
  }
}`,...h.parameters?.docs?.source},description:{story:"Appearance — the suite's theme choice on the same idiom.",...h.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    initialSection: "notifications"
  }
}`,...x.parameters?.docs?.source},description:{story:"Notifications.",...x.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    initialSection: "updates"
  }
}`,...S.parameters?.docs?.source},description:{story:"Shortcuts and Updates — Buzz's rows kept, on the sheet.",...S.parameters?.docs?.description}}};export{h as Appearance,i as Models,c as ModelsError,r as ModelsLoading,l as ModelsUnbound,d as NexiAccount,m as NexiAccountError,u as NexiAccountLinking,p as NexiAccountUnbound,x as Notifications,g as ProfileSection,S as Updates,de as __namedExportsOrder,le as default};
