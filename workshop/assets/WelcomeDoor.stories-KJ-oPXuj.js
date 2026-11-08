import{ak as d,j as o}from"./iframe-C_4ax-Jm.js";import"./BrandMark-ZJnyD0IE.js";import{T as p}from"./Trace-BSKaAXMd.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./AskBar-D6qFedOb.js";import"./AskPanel-DKkH7ynl.js";import"./AskSurface-B8PUJCZ9.js";import{C as h}from"./ConversationFrame-crdlsIAN.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./HandOver-BZSm7-D2.js";import"./LobbyThread-9xK7Bd9J.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./preload-helper-PPVm8Dsz.js";import"./transform-ZCU-3ITE.js";import"./VoiceWaves-CVFNr488.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./users-w3fldoSO.js";function m({state:e,context:a}){const{t}=d(),n=t(e==="failed"?"chat.welcome.failed":e==="late"?"chat.welcome.late":"chat.welcome.writing");return o.jsx("main",{className:"nexus-convo-page","data-testid":"screen-welcome-door",children:o.jsx(h,{context:a,title:t("chat.welcome.title"),ariaLabel:t("chat.welcome.title"),testId:"welcome-door",data:{state:e},busy:e!=="failed",live:n,log:o.jsxs("p",{className:"nexus-convo-working","data-testid":"welcome-door-line",children:[e==="failed"?null:o.jsx(p,{progress:null}),o.jsx("span",{children:n})]})})})}m.__docgenInfo={description:` S4 Δ5 ( d · h3; DS-7017 as amended) — the welcome door at \`/chat/welcome\`, where a new owner lands
the moment their organization exists (NexCore's lobby sends them here after the receipt). One line — *Nexi is
writing your first message…* — beside the suite's trace, nothing else: no sidebar, no composer, no link. *late* is
the same line's honest successor (the door opens the thread itself); *failed* is the one line that asks for a
reload. Presentational: the page owns the looking, the opening and the going.`,methods:[],displayName:"WelcomeDoor",props:{state:{required:!0,tsType:{name:"union",raw:'"waiting" | "late" | "failed"',elements:[{name:"literal",value:'"waiting"'},{name:"literal",value:'"late"'},{name:"literal",value:'"failed"'}]},description:""},context:{required:!1,tsType:{name:"string"},description:""}}};const P={title:"Patterns/DS-7017 Welcome door",component:m,parameters:{ds:"DS-7017",layout:"fullscreen",docs:{description:{component:`DS-7017 Hand-over, the NexChat side ( S4 Δ5 ·  d · h3): the welcome door a new owner lands on the
moment their organization exists — one line beside the suite's trace while Nexi's first message is written; the
same line's honest successor when it is late (the door opens the thread itself); one line asking for a reload when
it could not. No sidebar, no composer, no link, no spinner. Synthetic words; nothing here looks anything up.`}}},args:{context:"Northwind Traders"}};function l(e,a,t){const n=e.querySelector('[data-testid="welcome-door-line"]');if(!n?.textContent?.includes(t))throw new globalThis.Error(`the door's line is not "${t}": ${n?.textContent??"(none)"}`);if(e.querySelector('[data-testid="welcome-door"]')?.getAttribute("data-state")!==a)throw new globalThis.Error(`the door's state is not ${a}`);const c=e.querySelectorAll("textarea, input, a, button");if(c.length)throw new globalThis.Error(`a control on the welcome door: ${c.length}`)}const r={args:{state:"waiting"},play:async({canvasElement:e})=>l(e,"waiting","Nexi is writing your first message…")},s={args:{state:"late"},play:async({canvasElement:e})=>l(e,"late","taking longer than usual")},i={args:{state:"failed"},play:async({canvasElement:e})=>l(e,"failed","reload the page")},H=["Waiting","Late","Failed"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    state: "waiting"
  },
  play: async ({
    canvasElement
  }) => expectOneLineAndNothingElse(canvasElement, "waiting", "Nexi is writing your first message…")
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    state: "late"
  },
  play: async ({
    canvasElement
  }) => expectOneLineAndNothingElse(canvasElement, "late", "taking longer than usual")
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    state: "failed"
  },
  play: async ({
    canvasElement
  }) => expectOneLineAndNothingElse(canvasElement, "failed", "reload the page")
}`,...i.parameters?.docs?.source}}};export{i as Failed,s as Late,r as Waiting,H as __namedExportsOrder,P as default};
