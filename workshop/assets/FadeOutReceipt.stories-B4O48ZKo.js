import{j as t}from"./iframe-C_4ax-Jm.js";import{N as s,P as i}from"./ConversationFrame-crdlsIAN.js";import{F as l}from"./FadeOutReceipt-BaSNfslM.js";import"./preload-helper-PPVm8Dsz.js";import"./BrandMark-ZJnyD0IE.js";import"./mic-BjJKnwV3.js";const c="Your data is saved — thank you. A confirmation mail is on its way to olena@verkhovyna-agro.example.",h="Open it and confirm within 48 hours. The owner then reviews your request and you get a second mail when your organization is ready.",u=t.jsxs("div",{className:"nexus-convo-log",role:"log","aria-label":"Request access",children:[t.jsx(s,{children:t.jsx("p",{children:"Hi — I'm Nexi. Let's set up your organization. What's your name?"})}),t.jsx(i,{text:"Olena Kovalenko"}),t.jsx(s,{children:t.jsx("p",{children:"Nice to meet you, Olena. Which e-mail should we write to?"})}),t.jsx(i,{text:"olena@verkhovyna-agro.example"})]}),E={title:"Conversation/Fade-out receipt",component:l,parameters:{ds:"DS-5014",layout:"padded"},args:{line:c,next:h,children:u}},o={args:{hold:!0},play:async({canvasElement:r})=>{const e=r.querySelector('[data-testid="fade-receipt"]');if(e?.getAttribute("data-state")!=="folding")throw new globalThis.Error("held → folding");if(!e.querySelector('[role="log"]'))throw new globalThis.Error("the thread is still on screen while folding")}},a={args:{duration:0},play:async({canvasElement:r})=>{await new Promise(d=>setTimeout(d,50));const e=r.querySelector('[data-testid="fade-receipt"]');if(e?.getAttribute("data-state")!=="folded")throw new globalThis.Error("the receipt did not fold");if(e.querySelector('[role="log"]'))throw new globalThis.Error("the thread must leave the tree when folded");if(!e.querySelector('[data-testid="fade-receipt-line"]')?.textContent?.includes("saved"))throw new globalThis.Error("the receipt line");if(!e.querySelector('[data-testid="fade-receipt-next"]'))throw new globalThis.Error("what happens next")}},n={args:{reducedMotion:!0},play:async({canvasElement:r})=>{const e=r.querySelector('[data-testid="fade-receipt"]');if(e?.getAttribute("data-state")!=="folded")throw new globalThis.Error("reduced motion folds at once");if(e.getAttribute("data-reduced")!=="true")throw new globalThis.Error("the reduced flag")}},b=["Folding","Folded","ReducedMotion"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    hold: true
  },
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector('[data-testid="fade-receipt"]');
    if (root?.getAttribute("data-state") !== "folding") throw new globalThis.Error("held → folding");
    if (!root.querySelector('[role="log"]')) throw new globalThis.Error("the thread is still on screen while folding");
  }
}`,...o.parameters?.docs?.source},description:{story:"the thread fading over the fold's length — held here so the state can be seen",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 0
  },
  play: async ({
    canvasElement
  }) => {
    await new Promise(r => setTimeout(r, 50));
    const root = canvasElement.querySelector('[data-testid="fade-receipt"]');
    if (root?.getAttribute("data-state") !== "folded") throw new globalThis.Error("the receipt did not fold");
    if (root.querySelector('[role="log"]')) throw new globalThis.Error("the thread must leave the tree when folded");
    if (!root.querySelector('[data-testid="fade-receipt-line"]')?.textContent?.includes("saved")) throw new globalThis.Error("the receipt line");
    if (!root.querySelector('[data-testid="fade-receipt-next"]')) throw new globalThis.Error("what happens next");
  }
}`,...a.parameters?.docs?.source},description:{story:"the fold complete: one line, what happens next, the thread gone from the tree",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    reducedMotion: true
  },
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector('[data-testid="fade-receipt"]');
    if (root?.getAttribute("data-state") !== "folded") throw new globalThis.Error("reduced motion folds at once");
    if (root.getAttribute("data-reduced") !== "true") throw new globalThis.Error("the reduced flag");
  }
}`,...n.parameters?.docs?.source},description:{story:"reduced motion: no fade — folded at once",...n.parameters?.docs?.description}}};export{a as Folded,o as Folding,n as ReducedMotion,b as __namedExportsOrder,E as default};
