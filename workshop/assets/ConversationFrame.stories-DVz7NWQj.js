import{j as e,r as x}from"./iframe-C_4ax-Jm.js";import{A as f}from"./AskBar-D6qFedOb.js";import{C as y,N as S,P as w}from"./ConversationFrame-crdlsIAN.js";import"./preload-helper-PPVm8Dsz.js";import"./VoiceWaves-CVFNr488.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./BrandMark-ZJnyD0IE.js";function N({context:r="Start with Nexi",turns:t=1,note:u=!1}){const o=["Hi Dana — I'm Nexi. There's no organization for you here yet. What should we call yours?","Panama — lovely. Where should its data live?","So: Panama, data in Europe. Say *all good* and I go ahead."],n=["Panama","Europe"],p=e.jsxs("div",{className:"nexus-convo-log",role:"log","aria-label":"Nexi",children:[o.slice(0,t).map((g,s)=>e.jsxs(x.Fragment,{children:[e.jsx(S,{"data-turn":`a${s}`,children:e.jsx("p",{children:g})}),s<t-1&&n[s]?e.jsx(w,{text:n[s],spoken:s===1}):null]},s)),u?e.jsx("p",{className:"nexus-convo-note",children:"I couldn't answer just now — your words are still here; send them again."}):null]});return e.jsx("div",{className:"nexus-convo-page",children:e.jsx(y,{context:r,title:"Welcome",ariaLabel:"Nexi",testId:"frame",live:o[Math.min(t,o.length)-1],log:p,foot:e.jsx("div",{className:"nexus-dialogue-composer",children:e.jsx(f,{placeholder:"Write or ask anything…",value:"",onChange:()=>{},onSend:()=>{},ariaLabel:"Ask Nexi",testId:"frame-bar"})})})})}const $={title:"Conversation/Conversation frame",component:N,parameters:{ds:"DS-5018",layout:"fullscreen"}},a={},i={args:{context:"Acme Logistics · Invitation"}},c={args:{context:"Request access"}},l={args:{turns:3}},d={args:{note:!0}},h={args:{context:""}},m={args:{turns:2},play:async({canvasElement:r})=>{const t=r.querySelector('[data-testid="frame-head"]');if(!t?.querySelector('[role="img"][aria-label="Nexi"]'))throw new globalThis.Error("no identity in the header");if(t.querySelector('[data-testid="frame-context"]')?.textContent!=="Start with Nexi")throw new globalThis.Error("no context in the header");const u=r.querySelectorAll('[role="log"] > .nexus-message-assistant'),o=r.querySelectorAll('[role="log"] > .nexus-message-user-wrap > .nexus-message-user');if(u.length!==2||o.length!==1)throw new globalThis.Error(`NexChat's turns: ${u.length} of Nexi's, ${o.length} of the person's`);const n=r.querySelectorAll('[role="log"] a, [role="log"] button');if(n.length)throw new globalThis.Error(`a control in the thread: ${n.length}`)}},k=["DirectVisit","Invitation","RequestAccess","Longer","TurnNotSent","InsideTheShell","Interaction"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source},description:{story:"A direct visit: the header says *Start with Nexi*; one line under her name; the composer at the bottom.",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    context: "Acme Logistics · Invitation"
  }
}`,...i.parameters?.docs?.source},description:{story:"An invitation: the header names the organization before the first word.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    context: "Request access"
  }
}`,...c.parameters?.docs?.source},description:{story:"The request intake: the same frame, a different intent.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    turns: 3
  }
}`,...l.parameters?.docs?.source},description:{story:"A longer thread grows from the top; the composer stays.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    note: true
  }
}`,...d.parameters?.docs?.source},description:{story:"A turn that did not go through: one line, the words stay in the composer.",...d.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    context: ""
  }
}`,...h.parameters?.docs?.source},description:{story:"Without a context the header is absent — a dialogue inside a page of the shell.",...h.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    turns: 2
  },
  play: async ({
    canvasElement
  }) => {
    const head = canvasElement.querySelector('[data-testid="frame-head"]');
    if (!head?.querySelector('[role="img"][aria-label="Nexi"]')) throw new globalThis.Error("no identity in the header");
    if (head.querySelector('[data-testid="frame-context"]')?.textContent !== "Start with Nexi") throw new globalThis.Error("no context in the header");
    const nexi = canvasElement.querySelectorAll('[role="log"] > .nexus-message-assistant');
    const person = canvasElement.querySelectorAll('[role="log"] > .nexus-message-user-wrap > .nexus-message-user');
    if (nexi.length !== 2 || person.length !== 1) throw new globalThis.Error(\`NexChat's turns: \${nexi.length} of Nexi's, \${person.length} of the person's\`);
    const controls = canvasElement.querySelectorAll('[role="log"] a, [role="log"] button');
    if (controls.length) throw new globalThis.Error(\`a control in the thread: \${controls.length}\`);
  }
}`,...m.parameters?.docs?.source},description:{story:"The interaction: the identity and the context in the header; NexChat's own turns (prose for Nexi, the bubble for the person); no link, no button in the thread.",...m.parameters?.docs?.description}}};export{a as DirectVisit,h as InsideTheShell,m as Interaction,i as Invitation,l as Longer,c as RequestAccess,d as TurnNotSent,k as __namedExportsOrder,$ as default};
