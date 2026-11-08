import{j as o,r as C}from"./iframe-C_4ax-Jm.js";import{A as D}from"./AskSurface-B8PUJCZ9.js";import{H as R}from"./HandOver-BZSm7-D2.js";import{S as T}from"./ScriptedDialogue-oDqMXlxB.js";import{a as O}from"./fixtures-CfJHxPtm.js";import"./preload-helper-PPVm8Dsz.js";import"./AskBar-D6qFedOb.js";import"./VoiceWaves-CVFNr488.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./AskPanel-DKkH7ynl.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./FadeOutReceipt-BaSNfslM.js";const _={format:"nexus-scripted-dialogue-v1",id:"workshop-intake",steps:[{id:"name",kind:"text",ask:{en:"Hi {first_name} — I'm Nexi. Let's set up your organization. What is it called?",uk:"Привіт, {first_name} — я Нексі. Налаштуймо вашу організацію. Як вона називається?"},placeholder:{en:"The organization's name",uk:"Назва організації"},validate:{min:2,max:200,code:"ORGANIZATION_NAME_INVALID"},retry:{en:"I need at least two characters for the name. What is the organization called?",uk:"Для назви потрібно щонайменше два символи. Як називається організація?"},chips:[{id:"join",label:{en:"I have an invitation",uk:"У мене є запрошення"},value:null,door:"join"}]},{id:"domain",kind:"text",optional:!0,ask:{en:"{answers.name} — good. Does your team share an e-mail domain, like acme.com? You can skip this.",uk:"{answers.name} — добре. Чи має ваша команда спільний поштовий домен, як-от acme.com? Це можна пропустити."},placeholder:{en:"acme.com",uk:"acme.com"},validate:{min:3,pattern:"[^\\s@/]+",code:"ORGANIZATION_DOMAIN_INVALID"},retry:{en:"That doesn't look like a domain. Try something like acme.com — or skip it.",uk:"Це не схоже на домен. Спробуйте щось на кшталт acme.com — або пропустіть."},chips:[{id:"skip",label:{en:"Skip",uk:"Пропустити"},value:null}]},{id:"region",kind:"chips",ask:{en:"Where should the organization's data live?",uk:"Де мають зберігатися дані організації?"},chips:[{id:"eu",label:{en:"Europe",uk:"Європа"},value:"eu"},{id:"us",label:{en:"United States",uk:"США"},value:"us"}]}],confirm:{ask:{en:"So: {answers.name}, data in {region_label}{domain_line}. Shall I create it?",uk:"Отже: {answers.name}, дані в {region_label}{domain_line}. Створити?"},submit:{en:"Create",uk:"Створити"},change:{en:"Change",uk:"Змінити"},change_ask:{en:"What would you like to change?",uk:"Що змінити?"}},lines:{submitting:{en:"Creating {answers.name}…",uk:"Створюю {answers.name}…"},offline:{en:"I can't reach NEXUS right now. Nothing was created — try again when you're back online.",uk:"Зараз не можу зв'язатися з NEXUS. Нічого не створено — спробуйте, коли з'явиться зв'язок."},error:{en:"I couldn't create the organization. Nothing was created — let's try again.",uk:"Не вдалося створити організацію. Нічого не створено — спробуймо ще раз."},retry:{en:"Try again",uk:"Спробувати ще раз"}}},q={eu:"Europe",us:"United States"},x=e=>({first_name:"Olena",region_label:q[e.region??""]??"",domain_line:e.domain?`, ${e.domain}`:""}),j={..._,id:"workshop-request",steps:[_.steps[0],{id:"size",kind:"chips",ask:{en:"How big is {answers.name}?",uk:"Наскільки велика {answers.name}?"},retry:{en:"Pick one of the bands — or type a number of people.",uk:"Оберіть один із діапазонів — або введіть кількість людей."},chips:[{id:"1-10",label:{en:"1–10",uk:"1–10"},value:"1-10"},{id:"11-50",label:{en:"11–50",uk:"11–50"},value:"11-50"},{id:"51-200",label:{en:"51–200",uk:"51–200"},value:"51-200"}]}],confirm:{..._.confirm,ask:{en:"{answers.name}, {answers.size} people. Send the request?",uk:"{answers.name}, {answers.size} людей. Надіслати запит?"},submit:{en:"Send",uk:"Надіслати"}},lines:{..._.lines,submitting:{en:"Sending…",uk:"Надсилаю…"},rate_limited:{en:"We've had a few requests from here today — please write to hello@workshop.example and we'll set you up.",uk:"Сьогодні звідси вже було кілька запитів — напишіть на hello@workshop.example, і ми все налаштуємо."},done:{en:"Your data is saved — thank you. A confirmation mail is on its way.",uk:"Ваші дані збережено — дякую. Лист для підтвердження вже летить."},next:{en:"Open it and confirm within 48 hours; the owner then reviews your request.",uk:"Відкрийте його й підтвердьте протягом 48 годин; далі власник розгляне ваш запит."}}},z=e=>e<=10?"1-10":e<=50?"11-50":"51-200",L=(e,r)=>e.id==="size"&&/^\d{1,6}$/.test(r.trim())?z(Number(r.trim())):null;function N({outcome:e="ok",context:r,offline:n=!1,receipt:S=!1}){const[E,I]=C.useState(null),v=async()=>(await new Promise(A=>setTimeout(A,300)),e==="name_refused"?{ok:!1,code:"ORGANIZATION_NAME_INVALID"}:e==="offline"?{ok:!1,reason:"offline"}:e==="error"?{ok:!1,reason:"error"}:e==="rate_limited"?{ok:!1,reason:"rate_limited"}:{ok:!0});return S?o.jsx(T,{script:j,vars:x,onSubmit:v,interpret:L,onDoor:()=>{},context:r,title:"Request access",offline:n,ariaLabel:"Request access"}):E?o.jsx(R,{state:"ready",receipt:`You created ${E.name} in ${q[E.region??""]??""}.`,folded:o.jsx("p",{children:"the script's turns, folded"}),children:o.jsx(D,{app:"core",layout:"inline",model:O("answered"),draft:"",onDraftChange:()=>{},onSend:()=>{},placeholder:"Ask Nexi"})}):o.jsx(T,{script:_,vars:x,onSubmit:v,onDone:I,onDoor:()=>{},context:r,offline:n,ariaLabel:"Create your organization"})}const K={title:"Conversation/Scripted dialogue",component:N,parameters:{ds:"DS-5015",layout:"padded"}},a=(e=30)=>new Promise(r=>setTimeout(r,e));async function i(e,r){const n=e.querySelector('[data-testid="scripted-dialogue-bar-input"], textarea');if(!n)throw new globalThis.Error("no composer");Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value")?.set?.call(n,r),n.dispatchEvent(new Event("input",{bubbles:!0})),await a(),n.form?.requestSubmit(),await a()}const t=(e,r)=>e.querySelector(`[data-chip="${r}"]`),s={},c={play:async({canvasElement:e})=>{if(await i(e,"Nexiflow"),!e.querySelector('[data-step="domain"]'))throw new globalThis.Error("the dialogue did not move to the domain step")}},l={play:async({canvasElement:e})=>{if(await i(e,"N"),!e.querySelector('[data-turn="retry-name"]'))throw new globalThis.Error("no retry line");if(e.querySelectorAll('[data-testid="dialogue-turn-user"]').length!==0)throw new globalThis.Error("a refused answer is not a turn")}},d={play:async({canvasElement:e})=>{if(await i(e,"Nexiflow"),t(e,"skip")?.click(),await a(),t(e,"eu")?.click(),await a(),!t(e,"__submit")||!t(e,"__change"))throw new globalThis.Error("no confirmation chips")}},p={play:async({canvasElement:e})=>{if(await i(e,"Nexiflow"),t(e,"skip")?.click(),await a(),t(e,"eu")?.click(),await a(),t(e,"__change")?.click(),await a(),t(e,"__edit:region")?.click(),await a(),t(e,"us")?.click(),await a(),!t(e,"__submit"))throw new globalThis.Error("did not return to the confirmation")}},u={args:{outcome:"name_refused"},play:async({canvasElement:e})=>{if(await i(e,"Nexiflow"),t(e,"skip")?.click(),await a(),t(e,"eu")?.click(),await a(),t(e,"__submit")?.click(),await a(400),!e.querySelector('[data-step="name"][data-phase="step"]'))throw new globalThis.Error("the refused field was not re-asked")}},h={args:{outcome:"offline"},play:async({canvasElement:e})=>{if(await i(e,"Nexiflow"),t(e,"skip")?.click(),await a(),t(e,"eu")?.click(),await a(),t(e,"__submit")?.click(),await a(400),!t(e,"__retry"))throw new globalThis.Error("no retry chip")}},m={args:{outcome:"error"}},w={args:{receipt:!0,context:"Request access"},render:e=>o.jsx("div",{className:"nexus-convo-page",children:o.jsx(N,{...e})})},y={play:async({canvasElement:e})=>{if(await i(e,"Nexiflow"),t(e,"skip")?.click(),await a(),t(e,"eu")?.click(),await a(),t(e,"__submit")?.click(),await a(500),!e.querySelector('[data-testid="hand-over"][data-state="ready"]'))throw new globalThis.Error("no hand-over")}},g={args:{receipt:!0},play:async({canvasElement:e})=>{await i(e,"Nexiflow"),await i(e,"120");const r=[...e.querySelectorAll('[data-testid="dialogue-turn-user"]')].map(n=>n.textContent);if(!r.includes("51–200"))throw new globalThis.Error(`the typed count did not become its band: ${r.join(" · ")}`);if(!t(e,"__submit"))throw new globalThis.Error("not at the confirmation")}},f={args:{receipt:!0},play:async({canvasElement:e})=>{if(await i(e,"Nexiflow"),await i(e,"a lot"),!e.querySelector('[data-turn="retry-size"]'))throw new globalThis.Error("no retry line on the chips step")}},k={args:{receipt:!0,outcome:"rate_limited"},play:async({canvasElement:e})=>{if(await i(e,"Nexiflow"),t(e,"11-50")?.click(),await a(),t(e,"__submit")?.click(),await a(400),!e.querySelector('[data-turn="failed"]'))throw new globalThis.Error("no rate-limited line");if(t(e,"__retry"))throw new globalThis.Error("a rate limit has no Try again");if(e.querySelector('[data-testid="scripted-dialogue-bar-input"]'))throw new globalThis.Error("the composer closes")}},b={args:{receipt:!0},play:async({canvasElement:e})=>{await i(e,"Nexiflow"),t(e,"11-50")?.click(),await a(),t(e,"__submit")?.click(),await a(400);const r=e.querySelector('[data-testid="scripted-dialogue-receipt"]');if(!r)throw new globalThis.Error("no receipt");if(!r.querySelector('[data-testid="scripted-dialogue-receipt-line"]')?.textContent?.includes("saved"))throw new globalThis.Error("the receipt line");if(!r.querySelector('[data-testid="scripted-dialogue-receipt-next"]'))throw new globalThis.Error("what happens next");if(e.querySelector('[data-testid="scripted-dialogue-bar-input"]'))throw new globalThis.Error("the composer is gone")}},ee=["Asking","Answered","Refused","Confirming","Changing","ServerRefused","Offline","Failed","InTheFrame","HandedOver","TypedIntoChip","TypedUnreadable","RateLimited","Receipt"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"the first question with the one door chip",...s.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await type(canvasElement, "Nexiflow");
    if (!canvasElement.querySelector('[data-step="domain"]')) throw new globalThis.Error("the dialogue did not move to the domain step");
  }
}`,...c.parameters?.docs?.source},description:{story:"the person's turn, the next question — the thread grows",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await type(canvasElement, "N");
    if (!canvasElement.querySelector('[data-turn="retry-name"]')) throw new globalThis.Error("no retry line");
    if (canvasElement.querySelectorAll('[data-testid="dialogue-turn-user"]').length !== 0) throw new globalThis.Error("a refused answer is not a turn");
  }
}`,...l.parameters?.docs?.source},description:{story:"the retry line under a refused answer; the same question, not a form error",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await type(canvasElement, "Nexiflow");
    chip(canvasElement, "skip")?.click();
    await tick();
    chip(canvasElement, "eu")?.click();
    await tick();
    if (!chip(canvasElement, "__submit") || !chip(canvasElement, "__change")) throw new globalThis.Error("no confirmation chips");
  }
}`,...d.parameters?.docs?.source},description:{story:"the confirmation turn: the facts in one sentence, Create · Change",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await type(canvasElement, "Nexiflow");
    chip(canvasElement, "skip")?.click();
    await tick();
    chip(canvasElement, "eu")?.click();
    await tick();
    chip(canvasElement, "__change")?.click();
    await tick();
    chip(canvasElement, "__edit:region")?.click();
    await tick();
    chip(canvasElement, "us")?.click();
    await tick();
    if (!chip(canvasElement, "__submit")) throw new globalThis.Error("did not return to the confirmation");
  }
}`,...p.parameters?.docs?.source},description:{story:"Change → the answered questions as chips → the one question again → back to the confirmation",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    outcome: "name_refused"
  },
  play: async ({
    canvasElement
  }) => {
    await type(canvasElement, "Nexiflow");
    chip(canvasElement, "skip")?.click();
    await tick();
    chip(canvasElement, "eu")?.click();
    await tick();
    chip(canvasElement, "__submit")?.click();
    await tick(400);
    if (!canvasElement.querySelector('[data-step="name"][data-phase="step"]')) throw new globalThis.Error("the refused field was not re-asked");
  }
}`,...u.parameters?.docs?.source},description:{story:"the server refused the name after Create → back on that step with its retry line",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    outcome: "offline"
  },
  play: async ({
    canvasElement
  }) => {
    await type(canvasElement, "Nexiflow");
    chip(canvasElement, "skip")?.click();
    await tick();
    chip(canvasElement, "eu")?.click();
    await tick();
    chip(canvasElement, "__submit")?.click();
    await tick(400);
    if (!chip(canvasElement, "__retry")) throw new globalThis.Error("no retry chip");
  }
}`,...h.parameters?.docs?.source},description:{story:"offline at Create: the honest line, nothing created, Try again",...h.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    outcome: "error"
  }
}`,...m.parameters?.docs?.source},description:{story:"another error at Create: the same honesty with its own line",...m.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    receipt: true,
    context: "Request access"
  },
  render: args => <div className="nexus-convo-page">
      <Demo {...args} />
    </div>
}`,...w.parameters?.docs?.source},description:{story:"Δ3 (): in the one conversation frame with its header — the request intake as the person meets it at `/request`",...w.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await type(canvasElement, "Nexiflow");
    chip(canvasElement, "skip")?.click();
    await tick();
    chip(canvasElement, "eu")?.click();
    await tick();
    chip(canvasElement, "__submit")?.click();
    await tick(500);
    if (!canvasElement.querySelector('[data-testid="hand-over"][data-state="ready"]')) throw new globalThis.Error("no hand-over");
  }
}`,...y.parameters?.docs?.source},description:{story:"done → DS-7017 hand-over: the receipt line, the folded script, the thread beneath",...y.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    receipt: true
  },
  play: async ({
    canvasElement
  }) => {
    await type(canvasElement, "Nexiflow");
    await type(canvasElement, "120");
    const user = [...canvasElement.querySelectorAll('[data-testid="dialogue-turn-user"]')].map(x => x.textContent);
    if (!user.includes("51–200")) throw new globalThis.Error(\`the typed count did not become its band: \${user.join(" · ")}\`);
    if (!chip(canvasElement, "__submit")) throw new globalThis.Error("not at the confirmation");
  }
}`,...g.parameters?.docs?.source},description:{story:" S2 (): a typed *120* on the size step is read as the `51–200` chip — the person's turn shows the band",...g.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    receipt: true
  },
  play: async ({
    canvasElement
  }) => {
    await type(canvasElement, "Nexiflow");
    await type(canvasElement, "a lot");
    if (!canvasElement.querySelector('[data-turn="retry-size"]')) throw new globalThis.Error("no retry line on the chips step");
  }
}`,...f.parameters?.docs?.source},description:{story:"a typed answer that is none of the chips gets the retry line, not silence",...f.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    receipt: true,
    outcome: "rate_limited"
  },
  play: async ({
    canvasElement
  }) => {
    await type(canvasElement, "Nexiflow");
    chip(canvasElement, "11-50")?.click();
    await tick();
    chip(canvasElement, "__submit")?.click();
    await tick(400);
    if (!canvasElement.querySelector('[data-turn="failed"]')) throw new globalThis.Error("no rate-limited line");
    if (chip(canvasElement, "__retry")) throw new globalThis.Error("a rate limit has no Try again");
    if (canvasElement.querySelector('[data-testid="scripted-dialogue-bar-input"]')) throw new globalThis.Error("the composer closes");
  }
}`,...k.parameters?.docs?.source},description:{story:"the door said *not today* (429): the line is the whole answer — no Try again ()",...k.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    receipt: true
  },
  play: async ({
    canvasElement
  }) => {
    await type(canvasElement, "Nexiflow");
    chip(canvasElement, "11-50")?.click();
    await tick();
    chip(canvasElement, "__submit")?.click();
    await tick(400);
    const receipt = canvasElement.querySelector('[data-testid="scripted-dialogue-receipt"]');
    if (!receipt) throw new globalThis.Error("no receipt");
    if (!receipt.querySelector('[data-testid="scripted-dialogue-receipt-line"]')?.textContent?.includes("saved")) throw new globalThis.Error("the receipt line");
    if (!receipt.querySelector('[data-testid="scripted-dialogue-receipt-next"]')) throw new globalThis.Error("what happens next");
    if (canvasElement.querySelector('[data-testid="scripted-dialogue-bar-input"]')) throw new globalThis.Error("the composer is gone");
  }
}`,...b.parameters?.docs?.source},description:{story:"done with `lines.done` → DS-5014: the thread folds into the receipt line, what happens next beneath ()",...b.parameters?.docs?.description}}};export{c as Answered,s as Asking,p as Changing,d as Confirming,m as Failed,y as HandedOver,w as InTheFrame,h as Offline,k as RateLimited,b as Receipt,l as Refused,u as ServerRefused,g as TypedIntoChip,f as TypedUnreadable,ee as __namedExportsOrder,K as default};
