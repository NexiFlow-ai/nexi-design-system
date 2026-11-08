import{ak as ke,r as o,j as r,aK as Oe,B as ut,ab as mt}from"./iframe-C_4ax-Jm.js";import{S as Y}from"./credential-Ch26UJlM.js";import{i as qe,C as Qe}from"./errors-pXhwd8l7.js";/* empty css                */import{B as pt}from"./CoreShell-LzluVnjy.js";import{b as d}from"./organizationRequests-CxMYSAGe.js";import"./AskBar-D6qFedOb.js";import"./AskPanel-DKkH7ynl.js";import"./AskSurface-B8PUJCZ9.js";import"./ConversationFrame-crdlsIAN.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./HandOver-BZSm7-D2.js";import{L as ft}from"./LobbyThread-9xK7Bd9J.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./VoiceWaves-CVFNr488.js";import{d as ht,u as yt,e as wt,t as gt,A as Se}from"./AuthScreens-CPBAyE5i.js";import{R as w}from"./RequestIntake-CcWbVDTx.js";import{C as qt}from"./client-Bqz7dDrB.js";import{A as St,r as kt,L as vt,M as bt}from"./chatApi-DU7mAKQS.js";import{r as xt}from"./nav-C8-c-HcF.js";import{a as _t}from"./navigation-BPhnWcXc.js";import"./preload-helper-PPVm8Dsz.js";import"./link-CXIEul0Q.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./bell-Cmxh_C6X.js";import"./BrandMark-ZJnyD0IE.js";import"./Trace-BSKaAXMd.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./mic-BjJKnwV3.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./runtime-Cwmke1Hn.js";import"./store-C-il-aT_.js";import"./useAskThread-DXlvgUDF.js";import"./metrics-XT_i2DSD.js";import"./modules-A3eXOreg.js";import"./sparkles-t9beIr0T.js";import"./boxes-Cqxx_HWk.js";import"./plug-B3-qTSSD.js";import"./wrench-DsSy05cC.js";import"./activity-CxYo1_mQ.js";import"./shield-check-Cac0BQ49.js";import"./layers-Dsj4tA4G.js";import"./building-2-GerxkJzZ.js";import"./plus-Dc-VMSiJ.js";import"./arrow-up-bnIz7tua.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./country-Dr6T60nu.js";var Et={};const Pe="nexus.visitor";function Xe(){return Et.NEXT_PUBLIC_NEXUS_LANDING_URL||"https://nexiflow.ai"}function je(){try{return typeof window<"u"?window.sessionStorage:null}catch{return null}}function We(){const e=je()?.getItem(Pe);if(!e)return null;try{const t=JSON.parse(e);return typeof t.token!="string"||typeof t.threadId!="string"||typeof t.visitorId!="string"||typeof t.expiresAt!="string"?null:Date.parse(t.expiresAt)<=Date.now()+6e4?(X(),null):{token:t.token,threadId:t.threadId,visitorId:t.visitorId,expiresAt:t.expiresAt}}catch{return null}}function X(){je()?.removeItem(Pe)}function Dt(e){je()?.setItem(Pe,JSON.stringify(e))}const K=new qt({baseUrl:St,credential:()=>{const e=We();return e?`Bearer ${e.token}`:void 0}});async function At(e){const t=We();if(t)try{const m=await K.listMessages(t.threadId);return{...t,messages:m}}catch(m){if(qe(m)&&(m.status===404||m.kind==="unauthenticated"))X();else throw m}const n=await K.openVisitor(e),s={visitorId:n.visitor_id,threadId:n.thread.thread_id,token:n.token,expiresAt:n.expires_at};return Dt(s),{...s,messages:[n.opening]}}const Ie=6e3,Le=2e3,Rt=3e4,Ct={open:e=>At(e),send:(e,t)=>K.sendMessage(e,t),speak:e=>K.speakMessage(e),outcome:(e,t,n)=>K.recordSpeechOutcome(e,t,n)};function Tt(e){const t=new URLSearchParams(e.search).get("lang");return(t&&Oe(t)?t:e.stored&&Oe(e.stored)?e.stored:e.fallback)==="uk"?"uk":"en"}function A({leave:e,port:t=Ct}){const{t:n,locale:s}=ke(),m=o.useId(),[f,R]=o.useState(null),[E,k]=o.useState([]),[i,h]=o.useState("reading"),[D,C]=o.useState(""),[at,Ue]=o.useState(null),[xe,_e]=o.useState(null),[Ee,nt]=o.useState(""),ze=o.useRef(Ee);ze.current=Ee;const De=o.useRef(s);De.current=s;const Z=o.useCallback(c=>e?e(c):window.location.assign(c),[e]),J=o.useMemo(()=>new ht,[]),Ve=yt(J),[rt,Ae]=o.useState(!1);o.useEffect(()=>()=>J.stop("stopped"),[J]),o.useEffect(()=>{let c=!0;const y=window.setTimeout(async()=>{try{const u=Tt({search:window.location.search,stored:window.localStorage.getItem("nexus.locale"),fallback:De.current}),S=await t.open({locale:u,honeypot:ze.current});if(!c)return;R(S),k(S.messages),h(S.messages.some(x=>x.role==="assistant"&&x.client_action?.status==="done")?"done":"idle")}catch(u){if(!c)return;h(qe(u)&&u.kind==="offline"?"offline":"script")}},0);return()=>{c=!1,window.clearTimeout(y)}},[]);const T=o.useMemo(()=>[...E].reverse().find(c=>c.role==="assistant"),[E]),st=o.useCallback(async c=>{const y=c.trim();if(!(!f||!y||i==="thinking"||i==="working"||i==="voice"||i==="done")){C(""),Ue(null),_e(y),h(T?.client_action?.status==="proposed"?"working":"thinking");try{const u=await t.send(f.threadId,{text:y,idempotency_key:Ke()}),{user:S,assistant:x}=u.value;_e(null),k(Ce=>[...Ce,S,x]),h(x.client_action?.status==="done"?"voice":"idle")}catch(u){if(_e(null),C(y),qe(u)&&(u.kind==="unauthenticated"||u.status===404)){X(),h("script");return}const S=qe(u)&&u.kind==="offline";S||Ue(n("lobby.unavailable")),h(S?"offline":"idle")}}},[f,i,T,t,n]),$e=o.useRef(t.speak);$e.current=t.speak;const He=o.useRef(t.outcome);He.current=t.outcome,o.useEffect(()=>{if(i!=="voice")return;X();let c=!0,y;const u=b=>{c&&(c=!1,y!==void 0&&window.clearTimeout(y),window.setTimeout(()=>h("done"),b))},S=T,x=$e.current;if(!S||!x||!wt())return y=window.setTimeout(()=>u(0),Ie-Le),()=>{c=!1,y!==void 0&&window.clearTimeout(y)};y=window.setTimeout(()=>u(0),Rt),Ae(!0);const Ce=(b,j,Te)=>{const Ne=j==="completed"?"speech_completed":j==="stopped"?"speech_stopped":j==="barged_in"?"speech_barged_in":"speech_failed";He.current?.(b.id,Ne,Te).catch(()=>{})};return Promise.resolve().then(()=>x({message_id:S.message_id,language:De.current==="uk"?"uk":"en",idempotency_key:Ke()})).then(b=>{Ae(!1),c&&J.play({id:b.speech_id,text:b.text,audioBase64:b.audio_base64,mediaType:b.media_type,durationMs:b.duration_ms},(j,Te,Ne)=>{Ce(j,Te,Ne),u(0)})}).catch(()=>{Ae(!1),u(Ie-Le)}),()=>{c=!1,y!==void 0&&window.clearTimeout(y)}},[i]),o.useEffect(()=>{if(i!=="done")return;X();const c=Xe(),y=window.setTimeout(()=>Z(c),Le),u=()=>Z(c);return window.addEventListener("keydown",u),window.addEventListener("pointerdown",u),()=>{window.clearTimeout(y),window.removeEventListener("keydown",u),window.removeEventListener("pointerdown",u)}},[i,Z]);const it=o.useMemo(()=>{const c=gt(E);return xe&&c.push({id:"pending",role:"user",text:xe,pending:!0}),c},[E,xe]);if(i==="script")return r.jsx(w,{onDone:()=>window.setTimeout(()=>Z(Xe()),Ie)});const Re=T?.client_action?.proposal?.values.organization?.label??T?.client_action?.label,P=Re&&Re.trim()?Re:void 0,ot=(i==="done"||i==="voice")&&P?n("lobby.context.request",{org:P}):P?n("lobby.context.door",{org:P}):n("core.request.intake.title"),ct=P??n("core.request.intake.title"),dt=i==="done"?"handed_over":i==="voice"?"voice":i==="working"?"working":i==="offline"?"offline":i==="reading"?"reading":i==="thinking"?"thinking":"idle",Ge=i==="done"||i==="voice"?T?.text??"":void 0,lt=Ve.status==="playing";return r.jsxs("main",{className:"nexus-convo-page","data-testid":"screen-request",children:[r.jsx(ft,{title:ct,context:ot,status:dt,note:at??void 0,turns:it,workingLine:i==="working"?n("core.request.door.sending"):void 0,draft:D,onDraftChange:C,onSend:st,receipt:Ge,speech:i==="voice"||i==="done"?{status:lt?"speaking":rt?"fetching":"idle",text:Ve.clip?.text}:void 0,handOver:i==="done"?{receipt:Ge??"",state:"late",line:n("core.request.door.leaving")}:void 0,ariaLabel:n("core.request.intake.title"),testId:"request-door"}),r.jsxs("div",{className:"nexus-cc-request-trap","aria-hidden":"true",children:[r.jsx("label",{htmlFor:`${m}-website`,children:n("core.request.honeypot")}),r.jsx("input",{id:`${m}-website`,name:"website",tabIndex:-1,autoComplete:"off",value:Ee,onChange:c=>nt(c.target.value)})]}),r.jsx("p",{className:"nexus-convo-note nexus-convo-page-note","data-testid":"request-note",children:n("core.request.note")})]})}function Ke(){return typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`${Date.now()}-${Math.random().toString(16).slice(2)}`}A.__docgenInfo={description:"",methods:[],displayName:"DoorScreen",props:{leave:{required:!1,tsType:{name:"signature",type:"function",raw:"(href: string) => void",signature:{arguments:[{type:{name:"string"},name:"href"}],return:{name:"void"}}},description:"a story's / a test's landing — the page uses `NEXT_PUBLIC_NEXUS_LANDING_URL`"},port:{required:!1,tsType:{name:"DoorPort"},description:"a story's door — the page uses the visitor client",defaultValue:{value:`{
  open: (body) => openVisitorSession(body),
  send: (threadId, body) => visitorChat.sendMessage(threadId, body),
  speak: (body) => visitorChat.speakMessage(body),
  outcome: (speechId, signal, playedMs) => visitorChat.recordSpeechOutcome(speechId, signal, playedMs),
}`,computed:!1}}}};function L({state:e,name:t,email:n}){const{t:s}=ke();return e==="expired"?r.jsx(Se,{title:s("core.request.expired.title"),eyebrow:s("core.request.eyebrow"),testId:"screen-request-expired",children:r.jsx(ut,{variant:"primary",className:"nexus-cc-auth-primary",href:xt.request(),"data-testid":"request-again",children:s("core.request.expired.again")})}):r.jsx(Se,{title:t?s("core.request.confirmed.title",{name:t}):s("core.request.confirmed.title.noName"),eyebrow:s("core.request.eyebrow"),lead:n?s("core.request.confirmed.lead",{email:n}):s("core.request.confirmed.lead.noEmail"),testId:e==="confirmed"?"screen-request-confirmed":"screen-request-already-confirmed",children:null})}L.__docgenInfo={description:"`/request/confirm` ( · 08-UX §3): the one sentence for a confirmed link, the same for an already-used one, and the way back for a dead one.",methods:[],displayName:"RequestConfirmedScreen",props:{state:{required:!0,tsType:{name:"union",raw:'"confirmed" | "already_confirmed" | "expired"',elements:[{name:"literal",value:'"confirmed"'},{name:"literal",value:'"already_confirmed"'},{name:"literal",value:'"expired"'}]},description:""},name:{required:!1,tsType:{name:"string"},description:""},email:{required:!1,tsType:{name:"string"},description:""}}};function Ze(){const e=_t(),{setLocale:t}=ke(),n=e?.get("lang");o.useEffect(()=>{n&&Oe(n)&&t(n)},[n])}function Je(){return Ze(),r.jsx(w,{})}function Nt(e){const t=new URLSearchParams(e.hash.replace(/^#/,"")),n=new URLSearchParams(e.search);return t.get("t")??t.get("token")??n.get("token")??n.get("t")??""}function Ye(){Ze();const{t:e}=ke(),[t,n]=o.useState(null),[s,m]=o.useState({kind:"loading"}),[f,R]=o.useState(0);o.useEffect(()=>{const k=()=>{const h=Nt(window.location);if(h){const D=new URLSearchParams(window.location.search);D.delete("token"),D.delete("t");const C=D.toString();window.history.replaceState(window.history.state,"",`${window.location.pathname}${C?`?${C}`:""}`)}return h};n(k());const i=()=>{const h=k();h&&(n(h),R(D=>D+1))};return window.addEventListener("hashchange",i),()=>window.removeEventListener("hashchange",i)},[]);const E=o.useRef(null);return o.useEffect(()=>{if(t===null)return;if(!t.trim()){m({kind:"expired"});return}const k=`${t}#${f}`;if(E.current===k)return;E.current=k;let i=!0;return m({kind:"loading"}),kt.confirm(t).then(h=>{i&&m(vt(h))}).catch(h=>{i&&m(bt(h))}),()=>{i=!1}},[t,f]),s.kind==="loading"?r.jsx(Se,{title:e("core.request.eyebrow"),eyebrow:e("core.request.eyebrow"),testId:"screen-request-confirming",children:r.jsx("p",{role:"status",className:"nexus-cc-auth-note","data-testid":"request-confirming",children:e("core.request.confirming")})}):s.kind==="offline"||s.kind==="error"?r.jsx(Se,{title:e("core.request.eyebrow"),eyebrow:e("core.request.eyebrow"),testId:`screen-request-confirm-${s.kind}`,children:r.jsx(mt,{kind:s.kind,onRetry:()=>R(k=>k+1)})}):s.kind==="expired"?r.jsx(L,{state:"expired"}):r.jsx(L,{state:s.kind,name:s.name??void 0,email:s.email??void 0})}Je.__docgenInfo={description:"S2 (): the scripted conversation — the page only sets the language; the intake owns the dialogue and its one POST.",methods:[],displayName:"RequestDemoPage"};Ye.__docgenInfo={description:"",methods:[],displayName:"RequestConfirmPage"};const It=e=>r.jsx(pt,{children:r.jsx(e,{})}),W={title:"Apps/NexCore/Request a demo",decorators:[It],parameters:{ds:"DS-6607",layout:"fullscreen",workbench:{ns:"core",path:"/request"}}},a=e=>{throw new globalThis.Error(e)},Fe={globals:{locale:"uk"},parameters:{workbench:{ns:"core",path:"/request?lang=uk"}}},q=e=>async(t,n)=>{if(await new Promise(s=>setTimeout(s,e==="slow"?6e4:250)),e==="email_refused")throw new Y("http",422,{error_code:"VALIDATION_FAILED",details:[{path:"body.email",code:"invalid"}]});if(e==="rate_limited")throw new Y("http",429,{error_code:"RATE_LIMITED"});if(e==="offline")throw new Y("offline",0);if(e==="error")throw new Y("http",500,{error_code:"INTERNAL"})},l=(e=40)=>new Promise(t=>setTimeout(t,e));async function p(e,t){const n=e.querySelector('[data-testid="request-intake-bar-input"], textarea');if(!n)return a("no composer — the dialogue is not on screen");Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value")?.set?.call(n,t),n.dispatchEvent(new Event("input",{bubbles:!0})),await l(),n.form?.requestSubmit(),await l()}const _=(e,t)=>e.querySelector(`[data-chip="${t}"]`);async function g(e,t){const n=_(e,t);if(!n)return a(`no chip ${t}`);n.click(),await l()}async function v(e,{phone:t=!0}={}){await p(e,d.name),await p(e,d.email),await p(e,d.organization),await p(e,d.role),await g(e,d.size),await g(e,d.country),await p(e,d.goal),t?await p(e,"+380 67 000 00 01"):await g(e,"skip"),_(e,"__submit")||a("the review with *Send* did not appear")}const Be=/keycloak|realm|token|tenant|invitation id/i,z={name:"Greeting · Nexi's first line, the composer focused",render:()=>r.jsx(w,{submit:q("ok")}),play:async({canvasElement:e})=>{const t=e.querySelector('[data-testid="screen-request"]');if(!t)return a("the intake renders in the anonymous frame (DS-6601)");t.querySelectorAll("h1").length!==1&&a("one h1 on the door"),t.querySelector('[data-testid="request-intake"][data-step="name"]')||a("the first question is the name"),t.querySelector("form.nexus-cc-form, [data-testid='request-form']")&&a("no form — a conversation ()"),t.querySelectorAll('[data-testid="dialogue-turn-assistant"]').length!==1&&a("one line of Nexi's to start"),t.querySelector('[data-testid="request-intake-speaker"]')&&a("Δ3 (): no speaker toggle on the scripted intake"),t.querySelector('.nexus-cc-request-trap input[name="website"][tabindex="-1"]')||a("the honeypot is off the page and off the tab order ()"),Be.test(t.textContent??"")&&a("no mechanism word ()")}},ee={...z,name:"Greeting · українською",...Fe},te={name:"Mid-dialogue · four turns answered, the size as chips",render:()=>r.jsx(w,{submit:q("ok")}),play:async({canvasElement:e})=>{await p(e,d.name),await p(e,d.email),await p(e,d.organization),await p(e,d.role),e.querySelector('[data-step="size"]')||a("the fifth question is the size"),e.querySelectorAll("[data-chip]").length!==5&&a("five size bands as chips ()"),e.querySelectorAll('[data-testid="dialogue-turn-user"]').length!==4&&a("the person's four turns stay in the thread")}},ae={name:"Mid-dialogue · a typed 120 becomes 51–200 ()",render:()=>r.jsx(w,{submit:q("ok")}),play:async({canvasElement:e})=>{await p(e,d.name),await p(e,d.email),await p(e,d.organization),await p(e,d.role),await p(e,"120");const t=[...e.querySelectorAll('[data-testid="dialogue-turn-user"]')].map(n=>n.textContent);t.includes("51–200")||a(`the count was not read as its band: ${t.join(" · ")}`),e.querySelector('[data-step="country"]')||a("the country follows"),await p(e,"ukraine"),[...e.querySelectorAll('[data-testid="dialogue-turn-user"]')].some(n=>/Ukraine|Україна/.test(n.textContent??""))||a("a typed country name is read as its chip")}},ne={name:"Validation retry · the retry line under the visitor's turn",render:()=>r.jsx(w,{submit:q("ok")}),play:async({canvasElement:e})=>{await p(e,d.name),await p(e,"olena-at-verkhovyna"),e.querySelector('[data-turn="retry-email"]')||a("the e-mail retry line"),e.querySelector('[data-step="email"]')||a("the same question stays"),e.querySelector(".nexus-cc-auth-error, [role='alert']")&&a("never a form error, never a red field (DS-5015)")}},re={name:"Review · what I have, Send · Change",render:()=>r.jsx(w,{submit:q("ok")}),play:async({canvasElement:e})=>{await v(e);const t=e.querySelector('[data-turn="confirm"]')?.textContent??"";for(const n of[d.name,d.email,d.organization])t.includes(n)||a(`the review repeats ${n}`);_(e,"__change")||a("*Change* beside *Send*"),e.querySelectorAll('[data-chip="__submit"]').length!==1&&a("one *Send* (the only submit)")}},se={name:"Review · Change → the one question again → back to the review",render:()=>r.jsx(w,{submit:q("ok")}),play:async({canvasElement:e})=>{await v(e),await g(e,"__change"),await g(e,"__edit:organization"),e.querySelector('[data-step="organization"]')||a("the organization is asked again"),await p(e,"Verkhovyna Agro Holding"),_(e,"__submit")||a("back at the review after the one answer"),(e.querySelector('[data-turn="confirm"]')?.textContent??"").includes("Verkhovyna Agro Holding")||a("the review shows the new answer")}},ie={name:"Sending · one quiet line, the composer gone",render:()=>r.jsx(w,{submit:q("slow")}),play:async({canvasElement:e})=>{await v(e),await g(e,"__submit"),e.querySelector('[data-testid="request-intake"][data-phase="submitting"]')||a("the sending phase"),e.querySelector('[data-testid="request-intake-bar-input"]')&&a("the composer is closed while sending"),e.querySelector(".nexus-btn-primary")&&a("no second button ()")}},V={name:"Saved · the thread folds into the receipt, what happens next beneath (DS-5014)",render:()=>r.jsx(w,{submit:q("ok")}),play:async({canvasElement:e})=>{await v(e),await g(e,"__submit"),await l(400);const t=e.querySelector('[data-testid="request-intake-receipt"]');if(!t)return a("the receipt did not appear");(t.querySelector('[data-testid="request-intake-receipt-line"]')?.textContent??"").includes(d.email)||a("the receipt names the address the mail went to"),t.querySelector('[data-testid="request-intake-receipt-next"]')||a("what happens next (confirm within 48 h)"),await l(1e3),t.getAttribute("data-state")!=="folded"&&a("the thread folded after the fold's length"),e.querySelector('[role="log"]')&&a("the thread left the tree"),e.querySelector('[data-testid="request-intake-bar-input"]')&&a("the composer is gone — the dialogue is over"),Be.test(e.textContent??"")&&a("no mechanism word")}},oe={...V,name:"Saved · українською",...Fe},ce={name:"Honeypot · a script filled the hidden field — identical to Saved, nothing created ()",render:()=>r.jsx(w,{submit:async(e,t)=>{t.trap||a("the story fills the trap before Send"),await l(100)}}),play:async({canvasElement:e})=>{const t=e.querySelector('.nexus-cc-request-trap input[name="website"]');if(!t)return a("the honeypot");Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value")?.set?.call(t,"https://spam.example"),t.dispatchEvent(new Event("input",{bubbles:!0})),await v(e),await g(e,"__submit"),await l(300),e.querySelector('[data-testid="request-intake-receipt"]')||a("the same receipt as a person's")}},$={name:"Rate-limited · the line is the whole answer, no Try again",render:()=>r.jsx(w,{submit:q("rate_limited")}),play:async({canvasElement:e})=>{await v(e),await g(e,"__submit"),await l(400),e.querySelector('[data-testid="request-intake"][data-phase="failed"]')||a("the failed phase"),_(e,"__retry")&&a("a rate limit has no Try again ()"),e.querySelector('[data-turn="failed"]')||a("Nexi's rate-limited line")}},de={...$,name:"Rate-limited · українською",...Fe},le={name:"Offline · I can't reach NEXUS — the answers are here, Try again",render:()=>r.jsx(w,{submit:q("offline")}),play:async({canvasElement:e})=>{await v(e),await g(e,"__submit"),await l(400),_(e,"__retry")||a("Try again"),e.querySelectorAll('[data-testid="dialogue-turn-user"]').length<8&&a("the answers are kept in the thread")}},ue={name:"Error · the request did not go out — Try again, answers kept",render:()=>r.jsx(w,{submit:q("error")}),play:async({canvasElement:e})=>{await v(e),await g(e,"__submit"),await l(400),_(e,"__retry")||a("Try again"),await g(e,"__retry"),_(e,"__submit")||a("Try again returns to the review with Send")}},me={name:"Server refused the e-mail after Send → that one question again (S1's 422)",render:()=>r.jsx(w,{submit:q("email_refused")}),play:async({canvasElement:e})=>{await v(e),await g(e,"__submit"),await l(400),e.querySelector('[data-step="email"][data-phase="step"]')||a("the refused field is re-asked"),e.querySelector('[data-turn="retry-email"]')||a("with its retry line")}},pe={name:"Reduced motion · the receipt without the fade",parameters:{chromatic:{disableSnapshot:!0}},render:()=>r.jsx(w,{submit:q("ok")}),play:async({canvasElement:e})=>{await v(e,{phone:!1}),await g(e,"__submit"),await l(400),e.querySelector('[data-testid="request-intake-receipt"]')||a("the receipt — the fade is a CSS animation `prefers-reduced-motion` removes")}},F={name:"Page · the scripted intake as the browser gets it",render:()=>r.jsx(Je,{}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="request-intake"][data-step="name"]')||a("the page is the intake")}},Q=(e,t,n={})=>({message_id:e,role:"assistant",text:t,status:"complete",created_at:"2026-10-22T10:00:00Z",...n}),Lt=(e,t)=>({message_id:e,role:"user",text:t,status:"complete",created_at:"2026-10-22T10:00:00Z"}),et=Q("m0","Hi — I'm Nexi. I'll take your request for NexiFlow access; ask me anything about the platform on the way. What should I call you?"),Ot=Q("m0","Привіт — я Нексі. Я прийму ваш запит на доступ до NexiFlow; дорогою питайте мене про платформу. Як до вас звертатися?"),Me=e=>({open:async()=>(await l(250),{visitorId:"vis_story",threadId:"thr_story",token:"nxv_story",expiresAt:"2099-01-01T00:00:00Z",messages:[e]}),send:async(t,n)=>{await l(400);const s=n.text.trim(),m=Lt(`u${Date.now()}`,s),f={action_id:"core.organization_request.create",status:"proposed",label:"Panama Logistics"},R=/all good|так, все/i.test(s)?Q(`m${Date.now()}`,"Sent. A confirmation is on its way to your inbox — open it and the NexiFlow team reads your request next.",{client_action:{...f,status:"done"}}):/\?$/.test(s)?Q(`m${Date.now()}`,"NexiFlow runs on your infrastructure or ours; every organization's data stays in its own realm. — Which e-mail should the confirmation go to?",{route:{kind:"direct"}}):Q(`m${Date.now()}`,"Panama Logistics — noted. Which e-mail should the confirmation go to?",{client_action:f});return{value:{user:m,assistant:R},created:!0,accepted:!0,threadSeq:2}}}),tt=e=>({open:async()=>{throw await l(250),new Qe({kind:e===429?"rate_limited":"unavailable",status:e,body:{error_code:e===429?"VISITOR_LIMIT":"VISITOR_DOOR_OFF",user_message_key:"error.unavailable",correlation_id:"c_story"}})},send:async()=>a("nothing is sent when the door is closed")}),Pt={open:async()=>{throw new Qe({kind:"offline"})},send:async()=>a("offline sends nothing")},O=e=>{/^https:\/\/nexiflow\.ai/.test(e)||a(`the landing is nexiflow.ai, not ${e}`)},ve={workbench:{ns:"core",path:"/request"}},N={name:"Door · Nexi's opening (visitor session)",render:()=>r.jsx(A,{port:Me(et),leave:O}),parameters:{...W.parameters,ds:"DS-5015",...ve},play:async({canvasElement:e})=>{const t=e.querySelector('[data-testid="screen-request"]');if(!t)return a("the door renders in the anonymous frame");for(let n=0;n<40&&!t.querySelector('[data-testid="request-door"][data-status="idle"]');n+=1)await l(50);t.querySelector('[data-testid="request-door"][data-status="idle"]')||a("the opening did not arrive"),t.querySelectorAll('[data-testid="lobby-turn-assistant"]').length!==1&&a("one line of Nexi's to start"),t.querySelector('[data-testid="request-door-bar-mic"]')&&a("the door is written only ( §5)"),t.querySelector('[data-testid="request-door-voice-waves"]')&&a("no wave without a voice ()"),t.querySelector('.nexus-cc-request-trap input[name="website"][tabindex="-1"]')||a("the honeypot is off the page ()"),Be.test(t.textContent??"")&&a("no mechanism word ()")}},fe={...N,name:"Door · українською",render:()=>r.jsx(A,{port:Me(Ot),leave:O}),globals:{locale:"uk"},parameters:{...W.parameters,ds:"DS-5015",workbench:{ns:"core",path:"/request?lang=uk"}}},B={name:"Door · a fact sentence, then a question",render:()=>r.jsx(A,{port:Me(et),leave:O}),parameters:{...W.parameters,ds:"DS-5015",...ve},play:async({canvasElement:e})=>{const t=e.querySelector('[data-testid="screen-request"]');if(!t)return a("the door renders");for(let f=0;f<40&&!t.querySelector('[data-status="idle"]');f+=1)await l(50);const n=t.querySelector('[data-testid="request-door-bar-input"]');if(!n)return a("no composer");const s=Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value")?.set;s?.call(n,"I'm Dana from Panama Logistics"),n.dispatchEvent(new Event("input",{bubbles:!0})),await l(),t.querySelector('[data-testid="request-door-bar-send"]')?.click();for(let f=0;f<40&&t.querySelectorAll('[data-testid="lobby-turn-assistant"]').length<2;f+=1)await l(50);(t.textContent??"").includes("Panama Logistics · Request")||a("the header names the organization with the request");const m=t.querySelector('[data-testid="request-door-bar-input"]');if(!m)return a("the composer stays open");s?.call(m,"Where is the data kept?"),m.dispatchEvent(new Event("input",{bubbles:!0})),await l(),t.querySelector('[data-testid="request-door-bar-send"]')?.click();for(let f=0;f<40&&t.querySelectorAll('[data-testid="lobby-turn-assistant"]').length<3;f+=1)await l(50);t.querySelectorAll('[data-testid="lobby-turn-assistant"]').length<3&&a("the question on the way is answered"),t.querySelector('[data-testid="lobby-turn-knowledge"]')&&a("a caption beneath the answer ( e)"),(t.textContent??"").includes("stays in its own realm")||a("the answer is written")}},I={name:"Door · the script when the door will not open",render:()=>r.jsx(A,{port:tt(429),leave:O}),parameters:{...W.parameters,ds:"DS-5015",...ve},play:async({canvasElement:e})=>{for(let n=0;n<40&&!e.querySelector('[data-testid="request-intake"]');n+=1)await l(50);const t=e.querySelector('[data-testid="screen-request"]');if(!t)return a("the script renders in the anonymous frame");t.querySelector('[data-testid="request-intake"][data-step="name"]')||a("the script asks the first question"),t.querySelector('[data-testid="request-door"]')&&a("one frame — the script replaces the door"),/limit|429|rate/i.test(t.textContent??"")&&a("the person is not told why (the script is the same door)")}},he={...I,name:"Door · switched off (503) is the same script",render:()=>r.jsx(A,{port:tt(503),leave:O})},M={name:"Door · offline before the first line",render:()=>r.jsx(A,{port:Pt,leave:O}),parameters:{...W.parameters,ds:"DS-5015",...ve},play:async({canvasElement:e})=>{const t=e.querySelector('[data-testid="screen-request"]');if(!t)return a("the door renders");for(let n=0;n<40&&!t.querySelector('[data-status="offline"]');n+=1)await l(50);t.querySelector('[data-testid="request-door"][data-status="offline"]')||a("the offline face"),t.querySelector('[data-testid="request-intake"]')&&a("offline is not the script")}},be={workbench:{ns:"core",path:"/request/confirm"}},U={name:"Page · /request/confirm without a token",parameters:be,render:()=>r.jsx(Ye,{}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="screen-request-expired"]')||a("a missing token is the expired face")}},H={name:"Confirmed · we have your request",parameters:be,render:()=>r.jsx(L,{state:"confirmed",name:"Olena",email:d.email}),play:async({canvasElement:e})=>{(e.querySelector("h1")?.textContent??"").includes("Olena")||a("the sentence names the person"),(e.textContent??"").includes(d.email)||a("the sentence names the address we write back to"),e.querySelector(".nexus-btn")&&a("nothing to press — a human writes back ()")}},ye={...H,name:"Confirmed · українською",globals:{locale:"uk"}},we={name:"Already confirmed · the same sentence",parameters:be,render:()=>r.jsx(L,{state:"already_confirmed",name:"Olena",email:d.email}),play:async({canvasElement:e})=>{e.querySelector('[data-testid="screen-request-already-confirmed"]')||a("an already-used link reads exactly like a fresh one ()")}},G={name:"Expired or unknown link · send your request again",parameters:be,render:()=>r.jsx(L,{state:"expired"}),play:async({canvasElement:e})=>{const t=e.querySelector('[data-testid="request-again"]');if(!t)return a("the one way out is *Send your request again* → /request");(t.getAttribute("href")??"").includes("/request")||a("the link leads back to the dialogue"),/token|expired token|invalid/i.test(e.textContent??"")&&a("the dead link says one neutral sentence, no mechanism ()")}},ge={...G,name:"Expired · українською",globals:{locale:"uk"}},Wa=["Greeting","GreetingUkrainian","MidDialogue","TypedCount","ValidationRetry","Review","ReviewChange","Sending","Saved","SavedUkrainian","Honeypot","RateLimited","RateLimitedUkrainian","Offline","Error","ServerRefused","ReducedMotion","Page","DoorNexi","DoorNexiUkrainian","DoorFactsAndAQuestion","DoorScript","DoorOff","DoorOffline","ConfirmPageNoToken","Confirmed","ConfirmedUkrainian","AlreadyConfirmed","Expired","ExpiredUkrainian"];z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Greeting · Nexi's first line, the composer focused",
  render: () => <RequestIntake submit={door("ok")} />,
  play: async ({
    canvasElement
  }) => {
    const main = canvasElement.querySelector('[data-testid="screen-request"]');
    if (!main) return fails("the intake renders in the anonymous frame (DS-6601)");
    if (main.querySelectorAll("h1").length !== 1) fails("one h1 on the door");
    if (!main.querySelector('[data-testid="request-intake"][data-step="name"]')) fails("the first question is the name");
    if (main.querySelector("form.nexus-cc-form, [data-testid='request-form']")) fails("no form — a conversation ()");
    if (main.querySelectorAll('[data-testid="dialogue-turn-assistant"]').length !== 1) fails("one line of Nexi's to start");
    if (main.querySelector('[data-testid="request-intake-speaker"]')) fails("Δ3 (): no speaker toggle on the scripted intake");
    if (!main.querySelector('.nexus-cc-request-trap input[name="website"][tabindex="-1"]')) fails("the honeypot is off the page and off the tab order ()");
    if (mechanism.test(main.textContent ?? "")) fails("no mechanism word ()");
  }
}`,...z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  ...Greeting,
  name: "Greeting · українською",
  ...uk
}`,...ee.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  name: "Mid-dialogue · four turns answered, the size as chips",
  render: () => <RequestIntake submit={door("ok")} />,
  play: async ({
    canvasElement
  }) => {
    await say(canvasElement, DRAFT_OLENA.name);
    await say(canvasElement, DRAFT_OLENA.email);
    await say(canvasElement, DRAFT_OLENA.organization);
    await say(canvasElement, DRAFT_OLENA.role);
    if (!canvasElement.querySelector('[data-step="size"]')) fails("the fifth question is the size");
    if (canvasElement.querySelectorAll('[data-chip]').length !== 5) fails("five size bands as chips ()");
    if (canvasElement.querySelectorAll('[data-testid="dialogue-turn-user"]').length !== 4) fails("the person's four turns stay in the thread");
  }
}`,...te.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  name: "Mid-dialogue · a typed 120 becomes 51–200 ()",
  render: () => <RequestIntake submit={door("ok")} />,
  play: async ({
    canvasElement
  }) => {
    await say(canvasElement, DRAFT_OLENA.name);
    await say(canvasElement, DRAFT_OLENA.email);
    await say(canvasElement, DRAFT_OLENA.organization);
    await say(canvasElement, DRAFT_OLENA.role);
    await say(canvasElement, "120");
    const turns = [...canvasElement.querySelectorAll('[data-testid="dialogue-turn-user"]')].map(x => x.textContent);
    if (!turns.includes("51–200")) fails(\`the count was not read as its band: \${turns.join(" · ")}\`);
    if (!canvasElement.querySelector('[data-step="country"]')) fails("the country follows");
    await say(canvasElement, "ukraine");
    if (![...canvasElement.querySelectorAll('[data-testid="dialogue-turn-user"]')].some(x => /Ukraine|Україна/.test(x.textContent ?? ""))) fails("a typed country name is read as its chip");
  }
}`,...ae.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  name: "Validation retry · the retry line under the visitor's turn",
  render: () => <RequestIntake submit={door("ok")} />,
  play: async ({
    canvasElement
  }) => {
    await say(canvasElement, DRAFT_OLENA.name);
    await say(canvasElement, "olena-at-verkhovyna");
    if (!canvasElement.querySelector('[data-turn="retry-email"]')) fails("the e-mail retry line");
    if (!canvasElement.querySelector('[data-step="email"]')) fails("the same question stays");
    if (canvasElement.querySelector(".nexus-cc-auth-error, [role='alert']")) fails("never a form error, never a red field (DS-5015)");
  }
}`,...ne.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  name: "Review · what I have, Send · Change",
  render: () => <RequestIntake submit={door("ok")} />,
  play: async ({
    canvasElement
  }) => {
    await answerAll(canvasElement);
    const review = canvasElement.querySelector('[data-turn="confirm"]')?.textContent ?? "";
    for (const word of [DRAFT_OLENA.name, DRAFT_OLENA.email, DRAFT_OLENA.organization]) if (!review.includes(word)) fails(\`the review repeats \${word}\`);
    if (!chip(canvasElement, "__change")) fails("*Change* beside *Send*");
    if (canvasElement.querySelectorAll('[data-chip="__submit"]').length !== 1) fails("one *Send* (the only submit)");
  }
}`,...re.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  name: "Review · Change → the one question again → back to the review",
  render: () => <RequestIntake submit={door("ok")} />,
  play: async ({
    canvasElement
  }) => {
    await answerAll(canvasElement);
    await tap(canvasElement, "__change");
    await tap(canvasElement, "__edit:organization");
    if (!canvasElement.querySelector('[data-step="organization"]')) fails("the organization is asked again");
    await say(canvasElement, "Verkhovyna Agro Holding");
    if (!chip(canvasElement, "__submit")) fails("back at the review after the one answer");
    if (!(canvasElement.querySelector('[data-turn="confirm"]')?.textContent ?? "").includes("Verkhovyna Agro Holding")) fails("the review shows the new answer");
  }
}`,...se.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  name: "Sending · one quiet line, the composer gone",
  render: () => <RequestIntake submit={door("slow")} />,
  play: async ({
    canvasElement
  }) => {
    await answerAll(canvasElement);
    await tap(canvasElement, "__submit");
    if (!canvasElement.querySelector('[data-testid="request-intake"][data-phase="submitting"]')) fails("the sending phase");
    if (canvasElement.querySelector('[data-testid="request-intake-bar-input"]')) fails("the composer is closed while sending");
    if (canvasElement.querySelector(".nexus-btn-primary")) fails("no second button ()");
  }
}`,...ie.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Saved · the thread folds into the receipt, what happens next beneath (DS-5014)",
  render: () => <RequestIntake submit={door("ok")} />,
  play: async ({
    canvasElement
  }) => {
    await answerAll(canvasElement);
    await tap(canvasElement, "__submit");
    await tick(400);
    const receipt = canvasElement.querySelector('[data-testid="request-intake-receipt"]');
    if (!receipt) return fails("the receipt did not appear");
    const line = receipt.querySelector('[data-testid="request-intake-receipt-line"]')?.textContent ?? "";
    if (!line.includes(DRAFT_OLENA.email)) fails("the receipt names the address the mail went to");
    if (!receipt.querySelector('[data-testid="request-intake-receipt-next"]')) fails("what happens next (confirm within 48 h)");
    await tick(1000);
    if (receipt.getAttribute("data-state") !== "folded") fails("the thread folded after the fold's length");
    if (canvasElement.querySelector('[role="log"]')) fails("the thread left the tree");
    if (canvasElement.querySelector('[data-testid="request-intake-bar-input"]')) fails("the composer is gone — the dialogue is over");
    if (mechanism.test(canvasElement.textContent ?? "")) fails("no mechanism word");
  }
}`,...V.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  ...Saved,
  name: "Saved · українською",
  ...uk
}`,...oe.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  name: "Honeypot · a script filled the hidden field — identical to Saved, nothing created ()",
  render: () => <RequestIntake submit={async (_draft, meta) => {
    if (!meta.trap) fails("the story fills the trap before Send");
    await tick(100); // the server answers 202 and creates nothing — the page cannot tell
  }} />,
  play: async ({
    canvasElement
  }) => {
    const trap = canvasElement.querySelector<HTMLInputElement>('.nexus-cc-request-trap input[name="website"]');
    if (!trap) return fails("the honeypot");
    const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set;
    setter?.call(trap, "https://spam.example");
    trap.dispatchEvent(new Event("input", {
      bubbles: true
    }));
    await answerAll(canvasElement);
    await tap(canvasElement, "__submit");
    await tick(300);
    if (!canvasElement.querySelector('[data-testid="request-intake-receipt"]')) fails("the same receipt as a person's");
  }
}`,...ce.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: "Rate-limited · the line is the whole answer, no Try again",
  render: () => <RequestIntake submit={door("rate_limited")} />,
  play: async ({
    canvasElement
  }) => {
    await answerAll(canvasElement);
    await tap(canvasElement, "__submit");
    await tick(400);
    if (!canvasElement.querySelector('[data-testid="request-intake"][data-phase="failed"]')) fails("the failed phase");
    if (chip(canvasElement, "__retry")) fails("a rate limit has no Try again ()");
    if (!canvasElement.querySelector('[data-turn="failed"]')) fails("Nexi's rate-limited line");
  }
}`,...$.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
  ...RateLimited,
  name: "Rate-limited · українською",
  ...uk
}`,...de.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  name: "Offline · I can't reach NEXUS — the answers are here, Try again",
  render: () => <RequestIntake submit={door("offline")} />,
  play: async ({
    canvasElement
  }) => {
    await answerAll(canvasElement);
    await tap(canvasElement, "__submit");
    await tick(400);
    if (!chip(canvasElement, "__retry")) fails("Try again");
    if (canvasElement.querySelectorAll('[data-testid="dialogue-turn-user"]').length < 8) fails("the answers are kept in the thread");
  }
}`,...le.parameters?.docs?.source}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`{
  name: "Error · the request did not go out — Try again, answers kept",
  render: () => <RequestIntake submit={door("error")} />,
  play: async ({
    canvasElement
  }) => {
    await answerAll(canvasElement);
    await tap(canvasElement, "__submit");
    await tick(400);
    if (!chip(canvasElement, "__retry")) fails("Try again");
    await tap(canvasElement, "__retry");
    if (!chip(canvasElement, "__submit")) fails("Try again returns to the review with Send");
  }
}`,...ue.parameters?.docs?.source}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`{
  name: "Server refused the e-mail after Send → that one question again (S1's 422)",
  render: () => <RequestIntake submit={door("email_refused")} />,
  play: async ({
    canvasElement
  }) => {
    await answerAll(canvasElement);
    await tap(canvasElement, "__submit");
    await tick(400);
    if (!canvasElement.querySelector('[data-step="email"][data-phase="step"]')) fails("the refused field is re-asked");
    if (!canvasElement.querySelector('[data-turn="retry-email"]')) fails("with its retry line");
  }
}`,...me.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
  name: "Reduced motion · the receipt without the fade",
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => <RequestIntake submit={door("ok")} />,
  play: async ({
    canvasElement
  }) => {
    await answerAll(canvasElement, {
      phone: false
    });
    await tap(canvasElement, "__submit");
    await tick(400);
    if (!canvasElement.querySelector('[data-testid="request-intake-receipt"]')) fails("the receipt — the fade is a CSS animation \`prefers-reduced-motion\` removes");
  }
}`,...pe.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Page · the scripted intake as the browser gets it",
  render: () => <RequestDemoPage />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="request-intake"][data-step="name"]')) fails("the page is the intake");
  }
}`,...F.parameters?.docs?.source},description:{story:"S2's page (`RequestDemoPage` — the script with S1's client, the face `/request` keeps when the door will not open); S4's page is `DoorNexi`",...F.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Door · Nexi's opening (visitor session)",
  render: () => <DoorScreen port={nexiDoor(OPENING_EN)} leave={leaves} />,
  parameters: {
    ...meta.parameters,
    ds: "DS-5015",
    ...doorPath
  },
  play: async ({
    canvasElement
  }) => {
    const main = canvasElement.querySelector('[data-testid="screen-request"]');
    if (!main) return fails("the door renders in the anonymous frame");
    for (let i = 0; i < 40 && !main.querySelector('[data-testid="request-door"][data-status="idle"]'); i += 1) await tick(50);
    if (!main.querySelector('[data-testid="request-door"][data-status="idle"]')) fails("the opening did not arrive");
    if (main.querySelectorAll('[data-testid="lobby-turn-assistant"]').length !== 1) fails("one line of Nexi's to start");
    if (main.querySelector('[data-testid="request-door-bar-mic"]')) fails("the door is written only ( §5)");
    if (main.querySelector('[data-testid="request-door-voice-waves"]')) fails("no wave without a voice ()");
    if (!main.querySelector('.nexus-cc-request-trap input[name="website"][tabindex="-1"]')) fails("the honeypot is off the page ()");
    if (mechanism.test(main.textContent ?? "")) fails("no mechanism word ()");
  }
}`,...N.parameters?.docs?.source},description:{story:"the page as S4 serves it: Nexi's opening from the visitor session (DS-5015 DoorOpening), the composer focused, no mic, no wave",...N.parameters?.docs?.description}}};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`{
  ...DoorNexi,
  name: "Door · українською",
  render: () => <DoorScreen port={nexiDoor(OPENING_UK)} leave={leaves} />,
  globals: {
    locale: "uk"
  },
  parameters: {
    ...meta.parameters,
    ds: "DS-5015",
    workbench: {
      ns: "core",
      path: "/request?lang=uk"
    }
  }
}`,...fe.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Door · a fact sentence, then a question",
  render: () => <DoorScreen port={nexiDoor(OPENING_EN)} leave={leaves} />,
  parameters: {
    ...meta.parameters,
    ds: "DS-5015",
    ...doorPath
  },
  play: async ({
    canvasElement
  }) => {
    const main = canvasElement.querySelector<HTMLElement>('[data-testid="screen-request"]');
    if (!main) return fails("the door renders");
    for (let i = 0; i < 40 && !main.querySelector('[data-status="idle"]'); i += 1) await tick(50);
    const input = main.querySelector<HTMLTextAreaElement>('[data-testid="request-door-bar-input"]');
    if (!input) return fails("no composer");
    const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value")?.set;
    setter?.call(input, "I'm Dana from Panama Logistics");
    input.dispatchEvent(new Event("input", {
      bubbles: true
    }));
    await tick();
    main.querySelector<HTMLButtonElement>('[data-testid="request-door-bar-send"]')?.click();
    for (let i = 0; i < 40 && main.querySelectorAll('[data-testid="lobby-turn-assistant"]').length < 2; i += 1) await tick(50);
    if (!(main.textContent ?? "").includes("Panama Logistics · Request")) fails("the header names the organization with the request");
    const again = main.querySelector<HTMLTextAreaElement>('[data-testid="request-door-bar-input"]');
    if (!again) return fails("the composer stays open");
    setter?.call(again, "Where is the data kept?");
    again.dispatchEvent(new Event("input", {
      bubbles: true
    }));
    await tick();
    main.querySelector<HTMLButtonElement>('[data-testid="request-door-bar-send"]')?.click();
    //  (e): the engine's line is the provenance — no caption beneath the answer; the thread keeps every turn
    for (let i = 0; i < 40 && main.querySelectorAll('[data-testid="lobby-turn-assistant"]').length < 3; i += 1) await tick(50);
    if (main.querySelectorAll('[data-testid="lobby-turn-assistant"]').length < 3) fails("the question on the way is answered");
    if (main.querySelector('[data-testid="lobby-turn-knowledge"]')) fails("a caption beneath the answer ( e)");
    if (!(main.textContent ?? "").includes("stays in its own realm")) fails("the answer is written");
  }
}`,...B.parameters?.docs?.source},description:{story:"a fact sentence read back — the header moves to the organization; a question on the way is answered as one line of Nexi's, no caption (DS-5015 DoorFactsInAnyOrder · DoorKnowledgeAnswer ·  e)",...B.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Door · the script when the door will not open",
  render: () => <DoorScreen port={closedDoor(429)} leave={leaves} />,
  parameters: {
    ...meta.parameters,
    ds: "DS-5015",
    ...doorPath
  },
  play: async ({
    canvasElement
  }) => {
    // the script is its own frame — the door's \`<main>\` leaves the tree; query the canvas afresh
    for (let i = 0; i < 40 && !canvasElement.querySelector('[data-testid="request-intake"]'); i += 1) await tick(50);
    const main = canvasElement.querySelector('[data-testid="screen-request"]');
    if (!main) return fails("the script renders in the anonymous frame");
    if (!main.querySelector('[data-testid="request-intake"][data-step="name"]')) fails("the script asks the first question");
    if (main.querySelector('[data-testid="request-door"]')) fails("one frame — the script replaces the door");
    if (/limit|429|rate/i.test(main.textContent ?? "")) fails("the person is not told why (the script is the same door)");
  }
}`,...I.parameters?.docs?.source},description:{story:"the sixth mint of one address today (429) or the door switched off (503): the script — S2's intake, unchanged (DS-5015 DoorFallback → script states)",...I.parameters?.docs?.description}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`{
  ...DoorScript,
  name: "Door · switched off (503) is the same script",
  render: () => <DoorScreen port={closedDoor(503)} leave={leaves} />
}`,...he.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Door · offline before the first line",
  render: () => <DoorScreen port={offlineDoor} leave={leaves} />,
  parameters: {
    ...meta.parameters,
    ds: "DS-5015",
    ...doorPath
  },
  play: async ({
    canvasElement
  }) => {
    const main = canvasElement.querySelector('[data-testid="screen-request"]');
    if (!main) return fails("the door renders");
    for (let i = 0; i < 40 && !main.querySelector('[data-status="offline"]'); i += 1) await tick(50);
    if (!main.querySelector('[data-testid="request-door"][data-status="offline"]')) fails("the offline face");
    if (main.querySelector('[data-testid="request-intake"]')) fails("offline is not the script");
  }
}`,...M.parameters?.docs?.source},description:{story:"offline before the first line: the kit's offline composer — nothing sent, no script invented (DS-5015 offline)",...M.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Page · /request/confirm without a token",
  parameters: confirm,
  render: () => <RequestConfirmPage />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="screen-request-expired"]')) fails("a missing token is the expired face");
  }
}`,...U.parameters?.docs?.source},description:{story:"the page itself without a token: the same one sentence a dead link gets () — no door is knocked",...U.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Confirmed · we have your request",
  parameters: confirm,
  render: () => <RequestConfirmedScreen state="confirmed" name="Olena" email={DRAFT_OLENA.email} />,
  play: async ({
    canvasElement
  }) => {
    const h1 = canvasElement.querySelector("h1")?.textContent ?? "";
    if (!h1.includes("Olena")) fails("the sentence names the person");
    if (!(canvasElement.textContent ?? "").includes(DRAFT_OLENA.email)) fails("the sentence names the address we write back to");
    if (canvasElement.querySelector(".nexus-btn")) fails("nothing to press — a human writes back ()");
  }
}`,...H.parameters?.docs?.source}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`{
  ...Confirmed,
  name: "Confirmed · українською",
  globals: {
    locale: "uk"
  }
}`,...ye.parameters?.docs?.source}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`{
  name: "Already confirmed · the same sentence",
  parameters: confirm,
  render: () => <RequestConfirmedScreen state="already_confirmed" name="Olena" email={DRAFT_OLENA.email} />,
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.querySelector('[data-testid="screen-request-already-confirmed"]')) fails("an already-used link reads exactly like a fresh one ()");
  }
}`,...we.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Expired or unknown link · send your request again",
  parameters: confirm,
  render: () => <RequestConfirmedScreen state="expired" />,
  play: async ({
    canvasElement
  }) => {
    const again = canvasElement.querySelector<HTMLAnchorElement>('[data-testid="request-again"]');
    if (!again) return fails("the one way out is *Send your request again* → /request");
    if (!(again.getAttribute("href") ?? "").includes("/request")) fails("the link leads back to the dialogue");
    if (/token|expired token|invalid/i.test(canvasElement.textContent ?? "")) fails("the dead link says one neutral sentence, no mechanism ()");
  }
}`,...G.parameters?.docs?.source}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`{
  ...Expired,
  name: "Expired · українською",
  globals: {
    locale: "uk"
  }
}`,...ge.parameters?.docs?.source}}};export{we as AlreadyConfirmed,U as ConfirmPageNoToken,H as Confirmed,ye as ConfirmedUkrainian,B as DoorFactsAndAQuestion,N as DoorNexi,fe as DoorNexiUkrainian,he as DoorOff,M as DoorOffline,I as DoorScript,ue as Error,G as Expired,ge as ExpiredUkrainian,z as Greeting,ee as GreetingUkrainian,ce as Honeypot,te as MidDialogue,le as Offline,F as Page,$ as RateLimited,de as RateLimitedUkrainian,pe as ReducedMotion,re as Review,se as ReviewChange,V as Saved,oe as SavedUkrainian,ie as Sending,me as ServerRefused,ae as TypedCount,ne as ValidationRetry,Wa as __namedExportsOrder,W as default};
