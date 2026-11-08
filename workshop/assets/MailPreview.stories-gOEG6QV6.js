import{ak as k,j as r}from"./iframe-C_4ax-Jm.js";/* empty css                */import{o as C,M as _}from"./organizationRequests-CxMYSAGe.js";import{c as N}from"./country-Dr6T60nu.js";import"./preload-helper-PPVm8Dsz.js";function l({to:e,subject:t,children:i,button:u,link:n,footer:q,text:x,testId:s="mail-preview"}){const{t:a,locale:c}=k();return r.jsxs("div",{className:"nexus-cc-mail",lang:c,"data-testid":s,children:[r.jsxs("dl",{className:"nexus-cc-mail-envelope","data-testid":"mail-envelope",children:[r.jsx("dt",{children:a("core.mail.preview.to")}),r.jsx("dd",{children:e}),r.jsx("dt",{children:a("core.mail.preview.subject")}),r.jsx("dd",{"data-testid":"mail-subject",children:t})]}),r.jsx("div",{className:"nexus-cc-mail-brand","aria-hidden":"true",children:a("shell.brand")}),r.jsxs("article",{className:"nexus-cc-mail-card","aria-label":t,"data-testid":"mail-card",children:[r.jsx("h1",{children:t}),i,u?r.jsx("p",{children:r.jsx("a",{className:"nexus-cc-mail-button",href:u.href,"data-testid":"mail-button",children:u.label})}):null,n?r.jsx("p",{className:"nexus-cc-mail-quiet","data-testid":"mail-link",children:n}):null]}),q?r.jsx("p",{className:"nexus-cc-mail-footer","data-testid":"mail-footer",children:q}):null,r.jsxs("details",{className:"nexus-cc-mail-footer",children:[r.jsx("summary",{children:a("core.mail.preview.text")}),r.jsx("pre",{"data-testid":"mail-text",children:x})]})]})}function S({kind:e,request:t,links:i,operatorEmail:u}){const{t:n,locale:q}=k(),x={name:t.name,organization:t.organization,email:t.email};switch(e){case"confirm":{const s=n("core.mail.oreq.confirm.subject"),a=n("core.mail.oreq.confirm.body",x);return r.jsx(l,{to:t.email,subject:s,button:{label:n("core.mail.oreq.confirm.button"),href:i.confirm},link:i.confirm,footer:n("core.mail.footer"),text:`${a}

${i.confirm}

${n("core.mail.footer")}`,testId:"mail-confirm",children:r.jsx("p",{children:a})})}case"new_request":{const s=n("core.mail.oreq.new.subject",x),a=[[n("core.platform.requests.field.name"),t.name],[n("core.platform.requests.col.organization"),t.organization],[n("core.platform.requests.field.size"),n(`core.request.size.${t.size}`)],[n("core.platform.requests.field.country"),N(t.country,q)],[n("core.platform.requests.field.language"),n(`core.request.lang.${t.lang}`)]];return r.jsx(l,{to:u??"owner@provider.example",subject:s,button:{label:n("core.mail.oreq.new.button"),href:i.inspector},footer:n("core.mail.footer.operator"),text:`${s}

${a.map(([c,m])=>`${c}: ${m}`).join(`
`)}

${i.inspector}`,testId:"mail-new-request",children:r.jsx("dl",{"data-testid":"mail-facts",children:a.map(([c,m],R)=>r.jsxs("div",{className:"nexus-cc-mail-pair",children:[r.jsx("dt",{children:c}),r.jsx("dd",{children:m})]},`${R}-${c}`))})})}case"ready":{const s=n("core.mail.oreq.ready.subject"),[a,c]=n("core.mail.oreq.ready.body",{name:t.name}).split("{organization}"),m=`${a}${t.organization}${c??""}`;return r.jsx(l,{to:t.email,subject:s,button:{label:n("core.mail.oreq.ready.button"),href:i.invitation},link:i.invitation,footer:n("core.mail.footer"),text:`${m}

${i.invitation}

${n("core.mail.footer")}`,testId:"mail-ready",children:r.jsxs("p",{children:[a,r.jsx("strong",{children:t.organization}),c]})})}case"declined":{const s=n("core.mail.oreq.declined.subject"),a=n("core.mail.oreq.declined.body");return r.jsx(l,{to:t.email,subject:s,footer:n("core.mail.footer"),text:`${a}

${n("core.mail.footer")}`,testId:"mail-declined",children:r.jsx("p",{children:a})})}}}l.__docgenInfo={description:"",methods:[],displayName:"MailPreview",props:{to:{required:!0,tsType:{name:"string"},description:""},subject:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},button:{required:!1,tsType:{name:"signature",type:"object",raw:"{ label: string; href: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}},description:"the one button of the mail — never two (08-UX §6)"},link:{required:!1,tsType:{name:"string"},description:"the button's target printed as text under it (the invitation mail's idiom)"},footer:{required:!1,tsType:{name:"string"},description:""},text:{required:!0,tsType:{name:"string"},description:"the text/plain alternative ()"},testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"mail-preview"',computed:!1}}}};S.__docgenInfo={description:"The four mails of  over one request. `links` are the three targets a mail may carry; none holds a secret in a story ().",methods:[],displayName:"OrganizationRequestMail",props:{kind:{required:!0,tsType:{name:"union",raw:'"confirm" | "new_request" | "ready" | "declined"',elements:[{name:"literal",value:'"confirm"'},{name:"literal",value:'"new_request"'},{name:"literal",value:'"ready"'},{name:"literal",value:'"declined"'}]},description:""},request:{required:!0,tsType:{name:"OrganizationRequestView"},description:""},links:{required:!0,tsType:{name:"signature",type:"object",raw:"{ confirm: string; inspector: string; invitation: string }",signature:{properties:[{key:"confirm",value:{name:"string",required:!0}},{key:"inspector",value:{name:"string",required:!0}},{key:"invitation",value:{name:"string",required:!0}}]}},description:""},operatorEmail:{required:!1,tsType:{name:"string"},description:"the provider owner's address — the *new request* mail goes there, never to the person"}}};function E({kind:e,id:t}){return r.jsx(S,{kind:e,request:C(t),links:_,operatorEmail:"owner@nexi-provider.example"})}const B={title:"Apps/NexCore/Mails/Organization request",component:E,parameters:{ds:"DS-6609",layout:"fullscreen",workbench:{ns:"core",path:"/mail"}}},o=e=>{throw new globalThis.Error(e)},d=e=>{/token|keycloak|realm|invitation id/i.test(e.querySelector('[data-testid="mail-card"]')?.textContent??"")&&o("no mechanism word in a mail ()"),e.querySelectorAll("h1").length!==1&&o("one h1 per mail"),e.querySelectorAll('[data-testid="mail-button"]').length>1&&o("at most one button per mail (08-UX §6)"),e.querySelector('[data-testid="mail-text"]')||o("every mail has a text alternative ()")},z={globals:{locale:"uk"}},h={name:"Confirm your request · Marta (en)",args:{kind:"confirm",id:"oreq_01j9z2"},play:async({canvasElement:e,args:t})=>{d(e);const i=C(t.id).name;(e.querySelector('[data-testid="mail-card"]')?.textContent??"").includes(i)||o("the sentence names the person"),/^(Confirm|Підтвердити)$/.test(e.querySelector('[data-testid="mail-button"]')?.textContent??"")||o("one button — Confirm")}},b={...h,name:"Confirm your request · Olena (uk)",args:{kind:"confirm",id:"oreq_01j9z1"},...z},f={name:"New organization request · to the provider owner (en)",args:{kind:"new_request",id:"oreq_01j9z2"},play:async({canvasElement:e})=>{d(e);const t=e.querySelector('[data-testid="mail-card"]')?.textContent??"";/Dispatchers answer|where is the truck/.test(t)&&o("the operator mail never carries the goal text ( · )"),/\+\d{2} /.test(t)&&o("the operator mail never carries the phone ()");for(const i of["Marta Nowak","Boreas Logistics","201–1000","Poland","English"])t.includes(i)||o(`the mail names ${i}`);/Open in NexCore/.test(e.querySelector('[data-testid="mail-button"]')?.textContent??"")||o("the button opens the inspector in NexCore"),/Boreas Logistics/.test(e.querySelector('[data-testid="mail-subject"]')?.textContent??"")||o("the subject names the organization")}},j={...f,name:"New organization request · українською",args:{kind:"new_request",id:"oreq_01j9z1"},...z,play:async({canvasElement:e})=>d(e)},y={name:"Your organization is ready · Jonas (en)",args:{kind:"ready",id:"oreq_01j9y4"},play:async({canvasElement:e})=>{d(e);const t=e.querySelector('[data-testid="mail-card"]');t?.querySelector("strong")?.textContent!=="Dnipro Labs"&&o("the organization's name is bold inside the sentence"),e.querySelector('[data-testid="mail-button"]')?.textContent!=="Proceed to your organization"&&o("one button — Proceed to your organization ()"),/Owner/.test(t?.textContent??"")||o("the sentence says the person is the Owner")}},v={...y,name:"Your organization is ready · Олена (uk)",args:{kind:"ready",id:"oreq_01j9z1"},...z,play:async({canvasElement:e})=>d(e)},g={name:"About your request · declined, neutral (en)",args:{kind:"declined",id:"oreq_01j9x6"},play:async({canvasElement:e})=>{d(e),e.querySelector('[data-testid="mail-button"]')&&o("the declined mail has no button (08-UX §6)"),/reason|declined|outreach/i.test(e.querySelector('[data-testid="mail-card"]')?.textContent??"")&&o("the decline never carries the reason nor the word (00 §3.3)")}},w={...g,name:"About your request · українською",args:{kind:"declined",id:"oreq_01j9x7"},...z},p={name:"The chrome · one sentence, one button",args:{kind:"confirm",id:"oreq_01j9z1"},render:()=>r.jsx($,{})};function $(){const{t:e}=k(),t=e("shell.brand");return r.jsx(l,{to:"olena.kravets@verkhovyna-agro.example",subject:t,button:{label:t,href:"https://qa-nexi.example/"},footer:e("core.mail.footer"),text:`${t}: https://qa-nexi.example/`,children:r.jsx("p",{children:e("core.mail.preview.sample")})})}const I=["ConfirmYourRequest","ConfirmYourRequestUkrainian","NewOrganizationRequest","NewOrganizationRequestUkrainian","YourOrganizationIsReady","YourOrganizationIsReadyUkrainian","AboutYourRequest","AboutYourRequestUkrainian","Chrome"];h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Confirm your request · Marta (en)",
  args: {
    kind: "confirm",
    id: "oreq_01j9z2"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    noMechanism(canvasElement);
    const who = organizationRequest(args.id).name;
    if (!(canvasElement.querySelector('[data-testid="mail-card"]')?.textContent ?? "").includes(who)) fails("the sentence names the person");
    if (!/^(Confirm|Підтвердити)$/.test(canvasElement.querySelector('[data-testid="mail-button"]')?.textContent ?? "")) fails("one button — Confirm");
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...ConfirmYourRequest,
  name: "Confirm your request · Olena (uk)",
  args: {
    kind: "confirm",
    id: "oreq_01j9z1"
  },
  ...uk
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "New organization request · to the provider owner (en)",
  args: {
    kind: "new_request",
    id: "oreq_01j9z2"
  },
  play: async ({
    canvasElement
  }) => {
    noMechanism(canvasElement);
    const card = canvasElement.querySelector('[data-testid="mail-card"]')?.textContent ?? "";
    if (/Dispatchers answer|where is the truck/.test(card)) fails("the operator mail never carries the goal text ( · )");
    if (/\\+\\d{2} /.test(card)) fails("the operator mail never carries the phone ()");
    for (const word of ["Marta Nowak", "Boreas Logistics", "201–1000", "Poland", "English"]) if (!card.includes(word)) fails(\`the mail names \${word}\`);
    if (!/Open in NexCore/.test(canvasElement.querySelector('[data-testid="mail-button"]')?.textContent ?? "")) fails("the button opens the inspector in NexCore");
    if (!/Boreas Logistics/.test(canvasElement.querySelector('[data-testid="mail-subject"]')?.textContent ?? "")) fails("the subject names the organization");
  }
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  ...NewOrganizationRequest,
  name: "New organization request · українською",
  args: {
    kind: "new_request",
    id: "oreq_01j9z1"
  },
  ...uk,
  play: async ({
    canvasElement
  }) => noMechanism(canvasElement)
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Your organization is ready · Jonas (en)",
  args: {
    kind: "ready",
    id: "oreq_01j9y4"
  },
  play: async ({
    canvasElement
  }) => {
    noMechanism(canvasElement);
    const card = canvasElement.querySelector('[data-testid="mail-card"]');
    if (card?.querySelector("strong")?.textContent !== "Dnipro Labs") fails("the organization's name is bold inside the sentence");
    if (canvasElement.querySelector('[data-testid="mail-button"]')?.textContent !== "Proceed to your organization") fails("one button — Proceed to your organization ()");
    if (!/Owner/.test(card?.textContent ?? "")) fails("the sentence says the person is the Owner");
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...YourOrganizationIsReady,
  name: "Your organization is ready · Олена (uk)",
  args: {
    kind: "ready",
    id: "oreq_01j9z1"
  },
  ...uk,
  play: async ({
    canvasElement
  }) => noMechanism(canvasElement)
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "About your request · declined, neutral (en)",
  args: {
    kind: "declined",
    id: "oreq_01j9x6"
  },
  play: async ({
    canvasElement
  }) => {
    noMechanism(canvasElement);
    if (canvasElement.querySelector('[data-testid="mail-button"]')) fails("the declined mail has no button (08-UX §6)");
    if (/reason|declined|outreach/i.test(canvasElement.querySelector('[data-testid="mail-card"]')?.textContent ?? "")) fails("the decline never carries the reason nor the word (00 §3.3)");
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...AboutYourRequest,
  name: "About your request · українською",
  args: {
    kind: "declined",
    id: "oreq_01j9x7"
  },
  ...uk
}`,...w.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "The chrome · one sentence, one button",
  args: {
    kind: "confirm",
    id: "oreq_01j9z1"
  },
  render: () => <ChromeSample />
}`,...p.parameters?.docs?.source},description:{story:"The chrome alone — what every mail of core-api shares ().",...p.parameters?.docs?.description}}};export{g as AboutYourRequest,w as AboutYourRequestUkrainian,p as Chrome,h as ConfirmYourRequest,b as ConfirmYourRequestUkrainian,f as NewOrganizationRequest,j as NewOrganizationRequestUkrainian,y as YourOrganizationIsReady,v as YourOrganizationIsReadyUkrainian,I as __namedExportsOrder,B as default};
