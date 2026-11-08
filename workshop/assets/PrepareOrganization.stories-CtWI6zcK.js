import{ak as Z,r as p,j as o,I as $,B as M}from"./iframe-C_4ax-Jm.js";import{S as _}from"./credential-Ch26UJlM.js";/* empty css                */import{D as s,P as X,a as W}from"./organizationRequests-CxMYSAGe.js";import{R as H,O as K}from"./OrganizationRequests-Ce3y0R7r.js";import"./AskBar-D6qFedOb.js";import"./AskPanel-DKkH7ynl.js";import"./AskSurface-B8PUJCZ9.js";import"./ConversationFrame-crdlsIAN.js";import{S as Y}from"./ScriptedDialogue-oDqMXlxB.js";import"./HandOver-BZSm7-D2.js";import"./LobbyThread-9xK7Bd9J.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import{i as J}from"./RequestIntake-CcWbVDTx.js";import{c as ee}from"./country-Dr6T60nu.js";import{u as ae}from"./chatApi-DU7mAKQS.js";import"./preload-helper-PPVm8Dsz.js";import"./Segmented-C4lbw349.js";import"./nav-C8-c-HcF.js";import"./navigation-BPhnWcXc.js";import"./Parts-BEjhtEyc.js";import"./format-DO9OmoTM.js";import"./VoiceWaves-CVFNr488.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./BrandMark-ZJnyD0IE.js";import"./Trace-BSKaAXMd.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./users-w3fldoSO.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";const te="nexus-scripted-dialogue-v1",ne="prepare-organization",re="product owner —  S3 UAT-1 (2026-10-20 22:21), S3-LEAD-UX §1 table ()",ie=[{id:"organization",kind:"text",ask:{en:"Let's prepare an organization. Which company is it?",uk:"Підготуймо організацію. Яка це компанія?"},placeholder:{en:"The company's name",uk:"Назва компанії"},validate:{min:2,max:120,code:"ORGANIZATION_REQUEST_ORGANIZATION_INVALID"},retry:{en:"The company's name, as they know it.",uk:"Назва компанії — так, як її знають вони."}},{id:"country",kind:"chips",ask:{en:"Where is {answers.organization} based?",uk:"Де знаходиться {answers.organization}?"},placeholder:{en:"Pick a country, or type its name",uk:"Оберіть країну або введіть її назву"},retry:{en:"Pick the country from the list, or type its name.",uk:"Оберіть країну зі списку або введіть її назву."},chips:[{id:"UA",label:{en:"Ukraine",uk:"Україна"},value:"UA"},{id:"PL",label:{en:"Poland",uk:"Польща"},value:"PL"},{id:"DE",label:{en:"Germany",uk:"Німеччина"},value:"DE"},{id:"GB",label:{en:"United Kingdom",uk:"Велика Британія"},value:"GB"},{id:"US",label:{en:"United States",uk:"США"},value:"US"},{id:"CA",label:{en:"Canada",uk:"Канада"},value:"CA"},{id:"NL",label:{en:"Netherlands",uk:"Нідерланди"},value:"NL"},{id:"FR",label:{en:"France",uk:"Франція"},value:"FR"},{id:"ES",label:{en:"Spain",uk:"Іспанія"},value:"ES"},{id:"LT",label:{en:"Lithuania",uk:"Литва"},value:"LT"},{id:"EE",label:{en:"Estonia",uk:"Естонія"},value:"EE"},{id:"CZ",label:{en:"Czechia",uk:"Чехія"},value:"CZ"},{id:"AU",label:{en:"Australia",uk:"Австралія"},value:"AU"}],validate:{code:"ORGANIZATION_REQUEST_COUNTRY_INVALID"}},{id:"size",kind:"chips",ask:{en:"How big is {answers.organization}?",uk:"Наскільки велика {answers.organization}?"},placeholder:{en:"Pick a band, or type how many people",uk:"Оберіть діапазон або введіть кількість людей"},retry:{en:"Pick one of the bands — or type a number of people.",uk:"Оберіть один із діапазонів — або введіть кількість людей."},chips:[{id:"1-10",label:{en:"1–10",uk:"1–10"},value:"1-10"},{id:"11-50",label:{en:"11–50",uk:"11–50"},value:"11-50"},{id:"51-200",label:{en:"51–200",uk:"51–200"},value:"51-200"},{id:"201-1000",label:{en:"201–1000",uk:"201–1000"},value:"201-1000"},{id:"1000+",label:{en:"1000+",uk:"1000+"},value:"1000+"}],validate:{code:"ORGANIZATION_REQUEST_SIZE_INVALID"}},{id:"name",kind:"text",ask:{en:"Who will own it on their side?",uk:"Хто буде власником з їхнього боку?"},placeholder:{en:"Their full name",uk:"Повне ім'я"},validate:{min:2,max:120,code:"ORGANIZATION_REQUEST_NAME_INVALID"},retry:{en:"Their name, as you'd address them.",uk:"Ім'я — так, як ви до них звертаєтесь."}},{id:"email",kind:"text",ask:{en:"Which e-mail should the invitation go to?",uk:"На який e-mail надіслати запрошення?"},placeholder:{en:"name@company.example",uk:"name@company.example"},validate:{min:5,max:254,pattern:"[^@\\s]+@[^@\\s]+\\.[^@\\s]+",code:"ORGANIZATION_REQUEST_EMAIL_INVALID"},retry:{en:"That doesn't look like an e-mail address — could you check it?",uk:"Це не схоже на e-mail — перевірте, будь ласка."}},{id:"lang",kind:"chips",ask:{en:"Which language should Nexi write to {answers.name} in?",uk:"Якою мовою Нексі писати до {answers.name}?"},chips:[{id:"en",label:{en:"English",uk:"Англійською"},value:"en"},{id:"uk",label:{en:"Ukrainian",uk:"Українською"},value:"uk"}],validate:{code:"ORGANIZATION_REQUEST_LANG_INVALID"}},{id:"starter_pack",kind:"chips",ask:{en:"Which starter pack should {answers.organization} begin with? The base is always in.",uk:"З якого стартового пакета почати {answers.organization}? Базовий є завжди."},chips:[{id:"base",label:{en:"Base only",uk:"Лише базовий"},value:"nexus://core/pack/nexus-base"},{id:"nexus-sales",label:{en:"NexSales",uk:"NexSales"},value:"nexus://core/pack/nexus-sales"},{id:"nexus-care",label:{en:"NexCare",uk:"NexCare"},value:"nexus://core/pack/nexus-care"}],validate:{code:"ORGANIZATION_REQUEST_STARTER_PACK_INVALID"}},{id:"credits",kind:"text",ask:{en:"How many NXC should they start with? 200 is the usual welcome.",uk:"Скільки NXC дати на старт? Зазвичай вітальні — 200."},placeholder:{en:"200",uk:"200"},validate:{min:1,max:5,pattern:"[0-9]{1,5}",code:"ORGANIZATION_REQUEST_CREDITS_INVALID"},retry:{en:"A whole number of NXC, up to the ceiling.",uk:"Ціле число NXC, не вище за межу."},chips:[{id:"default",label:{en:"200",uk:"200"},value:"200"},{id:"500",label:{en:"500",uk:"500"},value:"500"}]},{id:"note",kind:"text",optional:!0,ask:{en:"One line of yours for the invitation, if you like — or skip.",uk:"Один ваш рядок для запрошення, якщо хочете — або пропустіть."},placeholder:{en:"Great to meet you at the forum — here is the workspace we talked about.",uk:"Радий знайомству на форумі — ось робочий простір, про який ми говорили."},validate:{min:2,max:280,code:"ORGANIZATION_REQUEST_NOTE_INVALID"},retry:{en:"Up to 280 characters — or skip.",uk:"До 280 символів — або пропустіть."},chips:[{id:"skip",label:{en:"Skip",uk:"Пропустити"},value:null}]}],se={ask:{en:"Here's what I have — {answers.organization} ({country_label}, {size_label}), owned by {answers.name}, {answers.email}, in {lang_label}; {pack_label}; {answers.credits} NXC to start{note_line}. Send the invitation?",uk:"Ось що в мене є — {answers.organization} ({country_label}, {size_label}), власник {answers.name}, {answers.email}, {lang_label}; {pack_label}; {answers.credits} NXC на старт{note_line}. Надіслати запрошення?"},submit:{en:"Send the invitation",uk:"Надіслати запрошення"},change:{en:"Change",uk:"Змінити"},change_ask:{en:"What would you like to change?",uk:"Що змінити?"}},oe={submitting:{en:"Sending…",uk:"Надсилаю…"},offline:{en:"I can't reach NEXUS right now — your answers are here; try again in a moment.",uk:"Зараз не можу зв'язатися з NEXUS — ваші відповіді тут; спробуйте за хвилину."},error:{en:"I couldn't prepare it. Nothing was sent — try again.",uk:"Не вдалося підготувати. Нічого не надіслано — спробуйте ще раз."},retry:{en:"Try again",uk:"Спробувати ще раз"},done:{en:"The invitation is on its way to {answers.email}.",uk:"Запрошення вже летить на {answers.email}."},next:{en:"{answers.organization} is in Requests as Prepared. When {answers.name} opens the link, the organization is created and they own it — you'll see it here. The link lives 48 hours; you can revoke it until then.",uk:"{answers.organization} у Запитах зі статусом Підготовлено. Щойно {answers.name} відкриє посилання, організацію буде створено, і вона належатиме їм — ви побачите це тут. Посилання діє 48 годин; до того його можна відкликати."}},le={format:te,id:ne,reviewed_by:re,steps:ie,confirm:se,lines:oe},F=le;function j(e){return{organization:e.organization??"",country:e.country??"",size:e.size??"",name:e.name??"",email:e.email??"",lang:e.lang==="uk"?"uk":"en",starterPack:e.starter_pack??"",credits:Number(e.credits??0),note:e.note??""}}const ce={organization:"organization",organization_name:"organization",country:"country",size:"size",organization_size:"size",name:"name",display_name:"name",email:"email",lang:"lang",starter_pack:"starter_pack",starter_pack_ref:"starter_pack",credits:"credits",credits_on_activation:"credits",note:"note",owner_note:"note"};function ue(e){if(!(e instanceof _)||e.status!==422)return null;const t=e.details[0]?.path,n=typeof e.code=="string"?/^ORGANIZATION_REQUEST_([A-Z_]+)_INVALID$/.exec(e.code)?.[1]:void 0,m=(t??n??"").toLowerCase().replace(/^(body|\$)\.?/,"").split(".").pop()??"",k=ce[m];return(k&&F.steps.find(h=>h.id===k)?.validate?.code)??null}function Q({onClose:e,submit:t,onDone:n,offline:m=!1,returnFocusTo:k,testId:h="prepare-intake"}){const{t:d,locale:f}=Z(),E=p.useCallback(r=>{const y=F.steps.find(S=>S.id==="starter_pack")?.chips?.find(S=>S.value===r.starter_pack);return{size_label:r.size?d(`core.request.size.${r.size}`):"",country_label:r.country?ee(r.country,f):"",lang_label:r.lang?d(`core.platform.prepare.lang.${r.lang}`):"",pack_label:y?d("core.platform.prepare.confirm.pack",{pack:y.label[f==="uk"?"uk":"en"]}):"",note_line:r.note?d("core.platform.prepare.confirm.note",{note:r.note}):""}},[d,f]),B=p.useCallback((r,y)=>J(r,y,f),[f]),x=p.useMemo(()=>t??(async()=>{throw new _("http",501,{error_code:"NOT_IMPLEMENTED"})}),[t]),G=p.useCallback(async r=>{try{return await x(j(r)),{ok:!0}}catch(y){const S=ue(y);return S?{ok:!1,code:S}:{ok:!1,reason:ae(y)}}},[x]),i=p.useCallback(r=>n?.(j(r)),[n]);return o.jsx($,{kind:d("core.platform.requests.kind"),title:d("core.platform.prepare.title"),onClose:e,returnFocusTo:k,testId:"prepare-inspector",children:o.jsx(Y,{script:F,vars:E,onSubmit:G,onDone:i,interpret:B,offline:m,ariaLabel:d("core.platform.prepare.title"),testId:h})})}Q.__docgenInfo={description:"",methods:[],displayName:"PrepareOrganizationInspector",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submit:{required:!1,tsType:{name:"signature",type:"function",raw:"(draft: PreparedOrganizationDraft) => Promise<void>",signature:{arguments:[{type:{name:"PreparedOrganizationDraft"},name:"draft"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:"a story's door — the page uses S3's client (UAT-2)"},onDone:{required:!1,tsType:{name:"signature",type:"function",raw:"(draft: PreparedOrganizationDraft) => void",signature:{arguments:[{type:{name:"PreparedOrganizationDraft"},name:"draft"}],return:{name:"void"}}},description:"reached the receipt — the queue re-reads (the new *Prepared* row)"},offline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},returnFocusTo:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:""},testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"prepare-intake"',computed:!1}}}};const He={title:"Apps/NexCore/Platform Operations/Prepare an organization",parameters:{ds:"DS-5015",layout:"fullscreen",workbench:{ns:"core",path:"/core/platform/organizations?tab=requests&action=prepare&as=owner"},docs:{description:{component:" S3 «The Lead» (UAT-1, S3-LEAD-UX §2–§4) — **Prepare an organization** in the Requests tab (DS-6608): the\nheader's icon action opens the inspector (DS-3031) with Nexi's scripted intake (DS-5015, the suite's\n`prepare-organization` script) — nine questions one at a time, the country · size · language · starter pack ·\ncredits as chips a typed answer is read into, the confirmation with *Send the invitation* · *Change*, and the\nreceipt in the thread (DS-5014): *The invitation is on its way to …* + what follows. Every rung of the ladder\n(DS-7006), en and uk. The door is a story's; S3's client lands at UAT-2. Fixtures: Ruta's draft and the two\nprepared rows of `fixtures/organizationRequests.ts` — synthetic, `*.example`."}}}},a=e=>{throw new globalThis.Error(e)},V={globals:{locale:"uk"}},de=e=>async t=>{if(await new Promise(n=>setTimeout(n,e==="slow"?6e4:250)),e==="email_refused")throw new _("http",422,{error_code:"VALIDATION_FAILED",details:[{path:"body.email",code:"invalid"}]});if(e==="credits_refused")throw new _("http",422,{error_code:"ORGANIZATION_REQUEST_CREDITS_INVALID",details:[{path:"body.credits_on_activation",code:"above_ceiling"}]});if(e==="offline")throw new _("offline",0);if(e==="error")throw new _("http",500,{error_code:"INTERNAL"})};function u({door:e="ok",open:t=!0,offline:n=!1}){const[m,k]=p.useState([...X,...W]),[h,d]=p.useState("prepared"),[f,E]=p.useState(t),B=m.filter(i=>h==="all"||i.status===h).sort((i,r)=>r.confirmedAt.localeCompare(i.confirmedAt)),x=Object.fromEntries(H.map(i=>[i,m.filter(r=>i==="all"||r.status===i).length])),G=i=>k(r=>[{id:`oreq_new_${r.length}`,status:"prepared",origin:"prepared",name:i.name,email:i.email,organization:i.organization,role:"",size:i.size||"1-10",country:i.country,phone:null,lang:i.lang,goal:"",submittedAt:new Date().toISOString(),confirmedAt:new Date().toISOString(),decidedAt:null,decidedBy:null,organizationId:null,preparedBy:"usr_provider_owner_01",starterPack:i.starterPack,credits:i.credits,note:i.note,expiresAt:new Date(Date.now()+48*36e5).toISOString()},...r]);return o.jsx(K,{result:{state:"ready",data:B},scope:h,onScope:d,counts:x,actions:o.jsx(M,{size:"toolbar",onClick:()=>E(!0),"data-testid":"requests-prepare",children:"Prepare an organization"}),inspector:f?o.jsx(Q,{onClose:()=>E(!1),submit:de(e),onDone:G,offline:n}):null})}const w=(e=40)=>new Promise(t=>setTimeout(t,e));async function c(e,t){const n=e.querySelector('[data-testid="prepare-intake-bar-input"], [data-testid="prepare-intake"] textarea');if(!n)return a("no composer — the dialogue is not on screen");Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value")?.set?.call(n,t),n.dispatchEvent(new Event("input",{bubbles:!0})),await w(),n.form?.requestSubmit(),await w()}const L=(e,t)=>e.querySelector(`[data-chip="${t}"]`);async function l(e,t){const n=L(e,t);if(!n)return a(`no chip ${t}`);n.click(),await w()}const b=e=>e.querySelector('[data-testid="prepare-intake"]')?.getAttribute("data-step");async function g(e,{note:t=!0,credits:n="default"}={}){await c(e,s.organization),await l(e,s.country),await l(e,s.size),await c(e,s.name),await c(e,s.email),await l(e,s.lang),await l(e,"nexus-sales"),n==="default"?await l(e,"default"):await c(e,n),t?await c(e,s.note):await l(e,"skip"),L(e,"__submit")||a("the review with *Send the invitation* did not appear")}const pe=/keycloak|realm|token|tenant|invitation id|sales-api|crm/i,T={name:"The action · Prepared scope, the inspector closed",render:()=>o.jsx(u,{open:!1}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="requests-prepare"]')||a("the header's *Prepare an organization* action"),e.querySelector('[data-testid="prepare-inspector"]')&&a("closed until the action"),e.querySelector('[data-testid="request-status-prepared"]')||a("Ruta's row reads *Prepared*")}},A={name:"Greeting · Nexi's first question, the composer focused",render:()=>o.jsx(u,{}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="prepare-inspector"]')||a("the inspector (DS-3031) opens"),b(e)!=="organization"&&a("the first question is the company"),e.querySelectorAll('[data-testid="dialogue-turn-assistant"]').length!==1&&a("one line of Nexi's to start"),e.querySelector("form.nexus-cc-form, [data-testid='prepare-form']")&&a("no form — a conversation ()"),pe.test(e.querySelector('[data-testid="prepare-inspector"]')?.textContent??"")&&a("no mechanism word ()")}},R={...A,name:"Greeting · українською",...V},N={name:"Mid-dialogue · the company placed, the person named, the starter pack as chips",render:()=>o.jsx(u,{}),play:async({canvasElement:e})=>{await c(e,s.organization),await c(e,"lithuania"),await c(e,"120"),await c(e,s.name),await c(e,s.email),await l(e,"en"),b(e)!=="starter_pack"&&a(`the seventh question is the starter pack (at ${b(e)})`),e.querySelectorAll("[data-chip]").length!==3&&a("three packs as chips — the base is always in");const t=[...e.querySelectorAll('[data-testid="dialogue-turn-user"]')].map(n=>n.textContent??"");t.some(n=>/Lithuania|Литва/.test(n))||a("a typed country name is read as its chip ()"),t.includes("51–200")||a("a typed 120 is read as its band ()")}},q={name:"Validation retry · the e-mail re-asked, never a red field",render:()=>o.jsx(u,{}),play:async({canvasElement:e})=>{await c(e,s.organization),await l(e,"LT"),await l(e,"51-200"),await c(e,s.name),await c(e,"ruta-at-baltic-fleet"),e.querySelector('[data-turn="retry-email"]')||a("the e-mail retry line"),b(e)!=="email"&&a("the same question stays"),e.querySelector("[role='alert']")&&a("never a form error (DS-5015)")}},I={name:"Review · the answers repeated, Send the invitation · Change",render:()=>o.jsx(u,{}),play:async({canvasElement:e})=>{await g(e);const t=[...e.querySelectorAll('[data-testid="dialogue-turn-assistant"]')].at(-1)?.textContent??"";for(const n of[s.organization,s.name,s.email,"200","NexSales","Lithuania"])t.includes(n)||a(`the review repeats ${n}`);L(e,"__change")||a("*Change* beside *Send the invitation*")}},D={name:"Refused · credits above the ceiling re-ask the credits ()",render:()=>o.jsx(u,{door:"credits_refused"}),play:async({canvasElement:e})=>{await g(e,{credits:"9000"}),await l(e,"__submit"),await w(400),b(e)!=="credits"&&a(`the credits step is re-asked (at ${b(e)})`),e.querySelector('[data-turn="retry-credits"]')||a("the credits retry line")}},z={name:"Sending · one quiet line, the chips disabled",render:()=>o.jsx(u,{door:"slow"}),play:async({canvasElement:e})=>{await g(e),await l(e,"__submit"),e.querySelector('[data-testid="prepare-intake"]')?.getAttribute("data-phase")!=="submitting"&&a("the submitting phase")}},v={name:"Receipt · the invitation is on its way; the row appears as Prepared",render:()=>o.jsx(u,{}),play:async({canvasElement:e})=>{await g(e),await l(e,"__submit"),await w(500),e.querySelector('[data-testid="prepare-intake"]')?.getAttribute("data-phase")!=="done"&&a("the done phase (DS-5014)");const t=e.querySelector('[data-testid="prepare-intake"]')?.textContent??"";t.includes(s.email)||a("the receipt names the address"),/48 hours|48 годин/.test(t)||a("what follows: the link lives 48 hours, revocable until then"),e.querySelectorAll('[data-testid="request-status-prepared"]').length<2&&a("the new row joins the Prepared scope at once")}},C={...v,name:"Receipt · українською",...V},O={name:"Receipt · the owner's line skipped",render:()=>o.jsx(u,{}),play:async({canvasElement:e})=>{await g(e,{note:!1});const t=[...e.querySelectorAll('[data-testid="dialogue-turn-assistant"]')].at(-1)?.textContent??"";/your line|ваш рядок/.test(t)&&a("no line, no mention of it")}},P={name:"Offline · the answers stay, try again in a moment",render:()=>o.jsx(u,{door:"offline"}),play:async({canvasElement:e})=>{await g(e),await l(e,"__submit"),await w(400),e.querySelector('[data-testid="prepare-intake"]')?.getAttribute("data-phase")!=="failed"&&a("the failed phase"),/can't reach NEXUS|не можу зв'язатися/.test(e.textContent??"")||a("the offline line")}},U={name:"Error · nothing was sent, try again",render:()=>o.jsx(u,{door:"error"}),play:async({canvasElement:e})=>{await g(e),await l(e,"__submit"),await w(400),/Nothing was sent|Нічого не надіслано/.test(e.textContent??"")||a("the error line names what did not happen"),L(e,"__retry")||a("*Try again*")}},Ke=["Closed","Greeting","GreetingUkrainian","MidDialogue","ValidationRetry","Review","CreditsAboveCeiling","Sending","Receipt","ReceiptUkrainian","NoNote","Offline","Error"];T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "The action · Prepared scope, the inspector closed",
  render: () => <Tab open={false} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="requests-prepare"]')) fails("the header's *Prepare an organization* action");
    if (canvasElement.querySelector('[data-testid="prepare-inspector"]')) fails("closed until the action");
    if (!canvasElement.querySelector('[data-testid="request-status-prepared"]')) fails("Ruta's row reads *Prepared*");
  }
}`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Greeting · Nexi's first question, the composer focused",
  render: () => <Tab />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="prepare-inspector"]')) fails("the inspector (DS-3031) opens");
    if (step(canvasElement) !== "organization") fails("the first question is the company");
    if (canvasElement.querySelectorAll('[data-testid="dialogue-turn-assistant"]').length !== 1) fails("one line of Nexi's to start");
    if (canvasElement.querySelector("form.nexus-cc-form, [data-testid='prepare-form']")) fails("no form — a conversation ()");
    if (mechanism.test(canvasElement.querySelector('[data-testid="prepare-inspector"]')?.textContent ?? "")) fails("no mechanism word ()");
  }
}`,...A.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  ...Greeting,
  name: "Greeting · українською",
  ...uk
}`,...R.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Mid-dialogue · the company placed, the person named, the starter pack as chips",
  render: () => <Tab />,
  play: async ({
    canvasElement
  }) => {
    await say(canvasElement, DRAFT_RUTA.organization);
    await say(canvasElement, "lithuania");
    await say(canvasElement, "120");
    await say(canvasElement, DRAFT_RUTA.name);
    await say(canvasElement, DRAFT_RUTA.email);
    await tap(canvasElement, "en");
    if (step(canvasElement) !== "starter_pack") fails(\`the seventh question is the starter pack (at \${step(canvasElement)})\`);
    if (canvasElement.querySelectorAll("[data-chip]").length !== 3) fails("three packs as chips — the base is always in");
    const turns = [...canvasElement.querySelectorAll('[data-testid="dialogue-turn-user"]')].map(x => x.textContent ?? "");
    if (!turns.some(x => /Lithuania|Литва/.test(x))) fails("a typed country name is read as its chip ()");
    if (!turns.includes("51–200")) fails("a typed 120 is read as its band ()");
  }
}`,...N.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Validation retry · the e-mail re-asked, never a red field",
  render: () => <Tab />,
  play: async ({
    canvasElement
  }) => {
    await say(canvasElement, DRAFT_RUTA.organization);
    await tap(canvasElement, "LT");
    await tap(canvasElement, "51-200");
    await say(canvasElement, DRAFT_RUTA.name);
    await say(canvasElement, "ruta-at-baltic-fleet");
    if (!canvasElement.querySelector('[data-turn="retry-email"]')) fails("the e-mail retry line");
    if (step(canvasElement) !== "email") fails("the same question stays");
    if (canvasElement.querySelector("[role='alert']")) fails("never a form error (DS-5015)");
  }
}`,...q.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Review · the answers repeated, Send the invitation · Change",
  render: () => <Tab />,
  play: async ({
    canvasElement
  }) => {
    await answerAll(canvasElement);
    const review = [...canvasElement.querySelectorAll('[data-testid="dialogue-turn-assistant"]')].at(-1)?.textContent ?? "";
    for (const must of [DRAFT_RUTA.organization, DRAFT_RUTA.name, DRAFT_RUTA.email, "200", "NexSales", "Lithuania"]) if (!review.includes(must)) fails(\`the review repeats \${must}\`);
    if (!chip(canvasElement, "__change")) fails("*Change* beside *Send the invitation*");
  }
}`,...I.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Refused · credits above the ceiling re-ask the credits ()",
  render: () => <Tab door="credits_refused" />,
  play: async ({
    canvasElement
  }) => {
    await answerAll(canvasElement, {
      credits: "9000"
    });
    await tap(canvasElement, "__submit");
    await tick(400);
    if (step(canvasElement) !== "credits") fails(\`the credits step is re-asked (at \${step(canvasElement)})\`);
    if (!canvasElement.querySelector('[data-turn="retry-credits"]')) fails("the credits retry line");
  }
}`,...D.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Sending · one quiet line, the chips disabled",
  render: () => <Tab door="slow" />,
  play: async ({
    canvasElement
  }) => {
    await answerAll(canvasElement);
    await tap(canvasElement, "__submit");
    if (canvasElement.querySelector('[data-testid="prepare-intake"]')?.getAttribute("data-phase") !== "submitting") fails("the submitting phase");
  }
}`,...z.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Receipt · the invitation is on its way; the row appears as Prepared",
  render: () => <Tab />,
  play: async ({
    canvasElement
  }) => {
    await answerAll(canvasElement);
    await tap(canvasElement, "__submit");
    await tick(500);
    if (canvasElement.querySelector('[data-testid="prepare-intake"]')?.getAttribute("data-phase") !== "done") fails("the done phase (DS-5014)");
    const text = canvasElement.querySelector('[data-testid="prepare-intake"]')?.textContent ?? "";
    if (!text.includes(DRAFT_RUTA.email)) fails("the receipt names the address");
    if (!/48 hours|48 годин/.test(text)) fails("what follows: the link lives 48 hours, revocable until then");
    if (canvasElement.querySelectorAll('[data-testid="request-status-prepared"]').length < 2) fails("the new row joins the Prepared scope at once");
  }
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...Receipt,
  name: "Receipt · українською",
  ...uk
}`,...C.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Receipt · the owner's line skipped",
  render: () => <Tab />,
  play: async ({
    canvasElement
  }) => {
    await answerAll(canvasElement, {
      note: false
    });
    const review = [...canvasElement.querySelectorAll('[data-testid="dialogue-turn-assistant"]')].at(-1)?.textContent ?? "";
    if (/your line|ваш рядок/.test(review)) fails("no line, no mention of it");
  }
}`,...O.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Offline · the answers stay, try again in a moment",
  render: () => <Tab door="offline" />,
  play: async ({
    canvasElement
  }) => {
    await answerAll(canvasElement);
    await tap(canvasElement, "__submit");
    await tick(400);
    if (canvasElement.querySelector('[data-testid="prepare-intake"]')?.getAttribute("data-phase") !== "failed") fails("the failed phase");
    if (!/can't reach NEXUS|не можу зв'язатися/.test(canvasElement.textContent ?? "")) fails("the offline line");
  }
}`,...P.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Error · nothing was sent, try again",
  render: () => <Tab door="error" />,
  play: async ({
    canvasElement
  }) => {
    await answerAll(canvasElement);
    await tap(canvasElement, "__submit");
    await tick(400);
    if (!/Nothing was sent|Нічого не надіслано/.test(canvasElement.textContent ?? "")) fails("the error line names what did not happen");
    if (!chip(canvasElement, "__retry")) fails("*Try again*");
  }
}`,...U.parameters?.docs?.source}}};export{T as Closed,D as CreditsAboveCeiling,U as Error,A as Greeting,R as GreetingUkrainian,N as MidDialogue,O as NoNote,P as Offline,v as Receipt,C as ReceiptUkrainian,I as Review,z as Sending,q as ValidationRetry,Ke as __namedExportsOrder,He as default};
