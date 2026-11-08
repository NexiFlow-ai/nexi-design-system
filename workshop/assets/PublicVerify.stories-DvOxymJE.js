import{r as p,j as e}from"./iframe-C_4ax-Jm.js";/* empty css                */import{w as B}from"./widget-i18n-C7Fbtz7X.js";import"./preload-helper-PPVm8Dsz.js";function s({lang:t,step:n,organization:i,error:c,busy:u,onSend:w,onVerify:A,onCancel:C}){const a=(l,q)=>B(t,l,q),f=p.useId(),[V,N]=p.useState(""),[j,T]=p.useState("");if(n==="verified")return e.jsxs("div",{className:"nx-care-widget-verify",role:"group","aria-label":a("supportVerifyTitle"),"data-testid":"public-verify","data-step":n,children:[e.jsx("strong",{children:a("supportVerifyAs",{org:i??""})}),e.jsx("p",{role:"status","data-testid":"public-verify-verified",children:a("supportVerifyNoContent")})]});if(n==="offline")return e.jsxs("div",{className:"nx-care-widget-verify",role:"group","aria-label":a("supportVerifyTitle"),"data-testid":"public-verify","data-step":n,children:[e.jsx("strong",{children:a("supportVerifyTitle")}),e.jsx("p",{role:"status","data-testid":"public-verify-offline",children:a("offline")})]});if(n==="cooldown")return e.jsxs("div",{className:"nx-care-widget-verify",role:"group","aria-label":a("supportVerifyTitle"),"data-testid":"public-verify","data-step":n,children:[e.jsx("strong",{children:a("supportVerifyTitle")}),e.jsx("p",{role:"status","data-testid":"public-verify-cooldown",children:a("supportVerifyCooldown")})]});const S=n==="ask-email";return e.jsxs("form",{className:"nx-care-widget-verify","aria-label":a("supportVerifyTitle"),"data-testid":"public-verify","data-step":n,onSubmit:l=>{l.preventDefault(),S?w?.(V.trim()):A?.(j.trim())},children:[e.jsx("strong",{children:a("supportVerifyTitle")}),e.jsx("p",{children:a("supportVerifyBody")}),S?e.jsxs("label",{htmlFor:`${f}-email`,children:[e.jsx("span",{children:a("supportVerifyEmail")}),e.jsx("input",{id:`${f}-email`,type:"email",required:!0,value:V,onChange:l=>N(l.target.value),autoComplete:"email",disabled:u,"data-testid":"public-verify-email"})]}):e.jsxs(e.Fragment,{children:[e.jsx("p",{role:"status","data-testid":"public-verify-neutral",children:a("supportVerifySent")}),e.jsxs("label",{htmlFor:`${f}-code`,children:[e.jsx("span",{children:a("verifyCode")}),e.jsx("input",{id:`${f}-code`,inputMode:"numeric",pattern:"[0-9]{6}",maxLength:6,required:!0,value:j,onChange:l=>T(l.target.value),autoComplete:"one-time-code",disabled:u,"data-testid":"public-verify-code"})]})]}),c?e.jsx("p",{className:"nx-care-widget-error",role:"alert","data-testid":"public-verify-error",children:a(c==="wrong-code"?"supportVerifyWrongCode":"invalidEmail")}):null,e.jsxs("div",{className:"nx-care-widget-verify-actions",children:[e.jsx("button",{type:"submit",className:"nx-care-widget-btn is-primary",disabled:u,"data-testid":"public-verify-submit",children:a(S?"verifySend":"supportVerifyConfirm")}),C?e.jsx("button",{type:"button",className:"nx-care-widget-btn",onClick:C,children:a("verifyCancel")}):null]})]})}s.__docgenInfo={description:"",methods:[],displayName:"PublicVerifyStep",props:{lang:{required:!0,tsType:{name:"Language"},description:""},step:{required:!0,tsType:{name:"PublicVerifyStep"},description:""},organization:{required:!1,tsType:{name:"string"},description:"named only once verified"},error:{required:!1,tsType:{name:"union",raw:'"wrong-code" | "invalid-email" | null',elements:[{name:"literal",value:'"wrong-code"'},{name:"literal",value:'"invalid-email"'},{name:"null"}]},description:"a wrong code — announced, never the reason the server knew"},busy:{required:!1,tsType:{name:"boolean"},description:""},onSend:{required:!1,tsType:{name:"signature",type:"function",raw:"(email: string) => void",signature:{arguments:[{type:{name:"string"},name:"email"}],return:{name:"void"}}},description:""},onVerify:{required:!1,tsType:{name:"signature",type:"function",raw:"(code: string) => void",signature:{arguments:[{type:{name:"string"},name:"code"}],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const R={title:"Apps/NexCare/Support/Public Verify",parameters:{ds:"DS-6914",layout:"centered",docs:{description:{component:`DS-6914 — the public support door's verify step for a member of a suspended organization (  ·
 ·  · ). Every rung of the ladder: ask-email · code-sent (the one neutral line, identical
known or not) · enter-code with a wrong code · verified (*speaking as ⟨organization⟩ — not signed in*; no content,
no balance) · cooldown · offline. Rendered inside the widget's frame so it speaks the widget's own catalogue.`}}}},r=t=>{throw new globalThis.Error(t)},d=t=>t.textContent??"",k=/ACME|balance|credits|NXC|PDP|grant|assertion/i,o=(t,n)=>e.jsx("div",{className:"nx-care-widget nexus-care-support-verify-story","data-mode":"maxi","data-scheme":"light",lang:t,children:n});function P({lang:t}){const[n,i]=p.useState("ask-email"),[c,u]=p.useState(0);return e.jsx(s,{lang:t,step:n,organization:"ACME Manufacturing",error:c>0&&n==="enter-code"?"wrong-code":null,onSend:()=>i("code-sent"),onVerify:w=>{w==="482913"?i("verified"):c+1>=3?i("cooldown"):(u(c+1),i("enter-code"))},onCancel:()=>i("ask-email")})}const m={name:"ask-email",render:()=>o("en",e.jsx(s,{lang:"en",step:"ask-email",onSend:()=>{},onCancel:()=>{}})),play:async({canvasElement:t})=>{const n=t.querySelector('[data-testid="public-verify-email"]');if(!n||n.type!=="email")return r("the e-mail input is an e-mail input");n.labels?.length||r("the input has a visible label"),k.test(d(t))&&r("nothing tenant-specific before verification ()")}},g={name:"code-sent · the neutral line",render:()=>o("en",e.jsx(s,{lang:"en",step:"code-sent",onVerify:()=>{},onCancel:()=>{}})),play:async({canvasElement:t})=>{const n=t.querySelector('[data-testid="public-verify-neutral"]');(!n||n.getAttribute("role")!=="status")&&r("the neutral line is role=status"),/If this address belongs to an organization on NEXUS/.test(d(n))||r("the line is the one neutral sentence");const i=t.querySelector('[data-testid="public-verify-code"]');(!i||i.getAttribute("inputmode")!=="numeric"||i.getAttribute("autocomplete")!=="one-time-code")&&r("the code input is numeric with one-time-code"),k.test(d(t))&&r("nothing tenant-specific before verification ()")}},y={name:"enter-code · wrong code",render:()=>o("en",e.jsx(s,{lang:"en",step:"enter-code",error:"wrong-code",onVerify:()=>{},onCancel:()=>{}})),play:async({canvasElement:t})=>{const n=t.querySelector('[data-testid="public-verify-error"]');(!n||n.getAttribute("role")!=="alert")&&r("a wrong code is announced as an alert")}},h={name:"verified · speaking as the organization",render:()=>o("en",e.jsx(s,{lang:"en",step:"verified",organization:"ACME Manufacturing"})),play:async({canvasElement:t})=>{const n=d(t);(!/speaking as ACME Manufacturing/.test(n)||!/not signed in/.test(n))&&r("the verified line names the organization and says not signed in"),/content and balance aren't available here/.test(n)||r("no content and no balance is available here")}},v={name:"cooldown · three wrong codes",render:()=>o("en",e.jsx(s,{lang:"en",step:"cooldown"})),play:async({canvasElement:t})=>{/15 minutes/.test(d(t))||r("the cooldown names its fifteen minutes")}},b={name:"offline",render:()=>o("en",e.jsx(s,{lang:"en",step:"offline"}))},x={name:"walkthrough (prototype code 482913)",render:()=>o("en",e.jsx(P,{lang:"en"}))},E={name:"code-sent · українською",render:()=>o("uk",e.jsx(s,{lang:"uk",step:"code-sent",onVerify:()=>{},onCancel:()=>{}})),play:async({canvasElement:t})=>{/Якщо ця адреса належить організації в NEXUS/.test(d(t))||r("uk = en: the neutral line exists in Ukrainian")}},z=["AskEmail","CodeSent","EnterCodeWrong","Verified","Cooldown","Offline","Interactive","Ukrainian"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "ask-email",
  render: () => frame("en", <PublicVerifyStep lang="en" step="ask-email" onSend={() => {}} onCancel={() => {}} />),
  play: async ({
    canvasElement
  }) => {
    const input = canvasElement.querySelector<HTMLInputElement>('[data-testid="public-verify-email"]');
    if (!input || input.type !== "email") return fails("the e-mail input is an e-mail input");
    if (!input.labels?.length) fails("the input has a visible label");
    if (PRE_VERIFY_FORBIDDEN.test(text(canvasElement))) fails("nothing tenant-specific before verification ()");
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "code-sent · the neutral line",
  render: () => frame("en", <PublicVerifyStep lang="en" step="code-sent" onVerify={() => {}} onCancel={() => {}} />),
  play: async ({
    canvasElement
  }) => {
    const line = canvasElement.querySelector('[data-testid="public-verify-neutral"]');
    if (!line || line.getAttribute("role") !== "status") fails("the neutral line is role=status");
    if (!/If this address belongs to an organization on NEXUS/.test(text(line as HTMLElement))) fails("the line is the one neutral sentence");
    const code = canvasElement.querySelector<HTMLInputElement>('[data-testid="public-verify-code"]');
    if (!code || code.getAttribute("inputmode") !== "numeric" || code.getAttribute("autocomplete") !== "one-time-code") fails("the code input is numeric with one-time-code");
    if (PRE_VERIFY_FORBIDDEN.test(text(canvasElement))) fails("nothing tenant-specific before verification ()");
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "enter-code · wrong code",
  render: () => frame("en", <PublicVerifyStep lang="en" step="enter-code" error="wrong-code" onVerify={() => {}} onCancel={() => {}} />),
  play: async ({
    canvasElement
  }) => {
    const err = canvasElement.querySelector('[data-testid="public-verify-error"]');
    if (!err || err.getAttribute("role") !== "alert") fails("a wrong code is announced as an alert");
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "verified · speaking as the organization",
  render: () => frame("en", <PublicVerifyStep lang="en" step="verified" organization="ACME Manufacturing" />),
  play: async ({
    canvasElement
  }) => {
    const t = text(canvasElement);
    if (!/speaking as ACME Manufacturing/.test(t) || !/not signed in/.test(t)) fails("the verified line names the organization and says not signed in");
    if (!/content and balance aren't available here/.test(t)) fails("no content and no balance is available here");
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "cooldown · three wrong codes",
  render: () => frame("en", <PublicVerifyStep lang="en" step="cooldown" />),
  play: async ({
    canvasElement
  }) => {
    if (!/15 minutes/.test(text(canvasElement))) fails("the cooldown names its fifteen minutes");
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "offline",
  render: () => frame("en", <PublicVerifyStep lang="en" step="offline" />)
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "walkthrough (prototype code 482913)",
  render: () => frame("en", <Walkthrough lang="en" />)
}`,...x.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "code-sent · українською",
  render: () => frame("uk", <PublicVerifyStep lang="uk" step="code-sent" onVerify={() => {}} onCancel={() => {}} />),
  play: async ({
    canvasElement
  }) => {
    if (!/Якщо ця адреса належить організації в NEXUS/.test(text(canvasElement))) fails("uk = en: the neutral line exists in Ukrainian");
  }
}`,...E.parameters?.docs?.source}}};export{m as AskEmail,g as CodeSent,v as Cooldown,y as EnterCodeWrong,x as Interactive,b as Offline,E as Ukrainian,h as Verified,z as __namedExportsOrder,R as default};
