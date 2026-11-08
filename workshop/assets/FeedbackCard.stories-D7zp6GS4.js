import{F as e,n as r}from"./fixtures-Tp3WgICc.js";import{o as d}from"./harness-hHeQurk0.js";import{F as m}from"./FeedbackCard-DHVFYkoq.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-C_4ax-Jm.js";import"./bff-BhLxIK9U.js";import"./ForgeShell-BXa4k2EW.js";import"./link-CXIEul0Q.js";import"./navigation-BPhnWcXc.js";import"./index-Cuiwh_tg.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";import"./credential-Ch26UJlM.js";import"./client-Bqz7dDrB.js";import"./errors-pXhwd8l7.js";import"./AskSurface-B8PUJCZ9.js";import"./ScriptedDialogue-oDqMXlxB.js";import"./FadeOutReceipt-BaSNfslM.js";import"./RoomThread-3DUdsNgg.js";import"./RoomSidebar-BgJ9u28b.js";import"./search-Fa0aXA-H.js";import"./compass-D5LaBgzz.js";import"./RoomHeader-Dll_zJRu.js";import"./SpinSettings-DNlEaodc.js";import"./useAskThread-DXlvgUDF.js";import"./square-kanban-1DGdpNhu.js";import"./workflow-BGMWCDzG.js";const le={title:"Apps/NexForge/Feedback card",component:m,decorators:[d],parameters:{ds:"DS-6022",workbench:{ns:"forge",path:"/forge/scenes/sc-q4?as=maria",params:{id:"sc-q4"}},docs:{description:{component:`The feedback card (DS-6022 · 08 §3.3 ·  one card): the one card over the composer that answers a turn — a
proposal to apply or modify (the engine's level names the weight: a level-3 change asks to be read), a *Which one?*
with its options, *Done* with undo, an answer, *I did not understand* with three things to say, an error with the
 wording. One card, one primary, the \`Why\` fold beneath.`}}},args:{busy:!1,onApply:r,onModify:r,onCancel:r,onChoose:r,onUndo:r,onSuggest:r,onDismiss:r}},o={args:{feedback:e.proposal}},s={name:"Proposal · level 3",args:{feedback:e.level3}},t={name:"Proposal · applying",args:{feedback:e.proposal,busy:!0}},a={args:{feedback:e.choice}},n={args:{feedback:e.done}},i={args:{feedback:e.answer}},p={name:"Not understood",args:{feedback:e.notUnderstood}},c={args:{feedback:e.error}},he=["Proposal","Level3","Busy","Choice","Done","Answer","NotUnderstood","Error"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    feedback: FEEDBACKS.proposal
  }
}`,...o.parameters?.docs?.source},description:{story:"A level-2 proposal from a spoken turn: the utterance quoted, *Apply* the primary, *Modify* and *Cancel* beside it.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Proposal · level 3",
  args: {
    feedback: FEEDBACKS.level3
  }
}`,...s.parameters?.docs?.source},description:{story:"A level-3 proposal (a deletion across six objects): the same card, the weight named, the affected objects listed.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Proposal · applying",
  args: {
    feedback: FEEDBACKS.proposal,
    busy: true
  }
}`,...t.parameters?.docs?.source},description:{story:"The engine is applying: the primary busy, the others disabled.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    feedback: FEEDBACKS.choice
  }
}`,...a.parameters?.docs?.source},description:{story:"*Which one?* — the options as buttons with their hints; the candidates glow on the canvas meanwhile.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    feedback: FEEDBACKS.done
  }
}`,...n.parameters?.docs?.source},description:{story:"*Done* with undo — the receipt of a turn that needed no confirmation.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    feedback: FEEDBACKS.answer
  }
}`,...i.parameters?.docs?.source},description:{story:"An answer to a question about the scene; nothing to apply.",...i.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Not understood",
  args: {
    feedback: FEEDBACKS.notUnderstood
  }
}`,...p.parameters?.docs?.source},description:{story:"Not understood: the reason, three things one could say instead (each a button that sends it).",...p.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    feedback: FEEDBACKS.error
  }
}`,...c.parameters?.docs?.source},description:{story:"An error (a 409: someone else moved first): the  wording, dismissable.",...c.parameters?.docs?.description}}};export{i as Answer,t as Busy,a as Choice,n as Done,c as Error,s as Level3,p as NotUnderstood,o as Proposal,he as __namedExportsOrder,le as default};
