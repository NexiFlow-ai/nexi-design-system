import{j as e}from"./iframe-C_4ax-Jm.js";import{D as r,g}from"./Diagram-DxVp995-.js";import"./preload-helper-PPVm8Dsz.js";const t={title:"Diagram",asText:"Diagram as text",failed:"The diagram could not be drawn — here is its text"},m=`flowchart LR
  A[Open the Counterparties list] --> B[Press New]
  B --> C[Fill the Legal entity tab]
  C --> D[Add a contact]
  D --> E[Save and close]`,S=`sequenceDiagram
  participant M as Manager
  participant N as Nexi
  participant S as NexSales
  M->>N: a customer's request
  N->>S: is the customer known?
  S-->>N: the account and its owner
  N-->>M: the situation and the next doors`,w=`C4Context
  title The suite around one request
  Person(manager, "Manager")
  System(chat, "NexChat")
  System(sales, "NexSales")
  Rel(manager, chat, "asks")
  Rel(chat, sales, "reads the account")`,u=`%%{init: {"securityLevel": "loose", "layout": "elk"}}%%
flowchart TD
  A[Start] --> B[Finish]
  click A "https://example.invalid" "never"
  B --> C[<b>bold</b> label]`,b=`gantt
  title Not in the subset
  section One
  Task :a1, 2026-10-01, 3d`,D={title:"Kit/Diagram",component:r,parameters:{ds:"DS-5012",docs:{description:{component:"Diagram (DS-5012): the suite's one Mermaid surface — rendered client-side at `strict` from the closed subset, its\ntext always beneath; a diagram the guard refuses or mermaid cannot parse is its text with one line saying so\n(never blank). The caption carries the answer's provenance words; the door and the receipt are NexChat's slots."}}}},o={render:()=>e.jsx(r,{source:m,labels:t,caption:e.jsx(e.Fragment,{children:"Drawn from this answer · [1] [2]"})})},n={render:()=>e.jsx(r,{source:S,labels:t,caption:"Drawn from this answer"})},i={render:()=>e.jsx(r,{source:w,labels:t,title:"The suite around one request"})},c={render:()=>e.jsx(r,{source:m,labels:t,forceStatus:"loading"})},d={render:()=>e.jsx(r,{source:`flowchart LR
  A --> B --> [[[`,labels:t,forceStatus:"text",caption:"Drawn from this answer"})},l={render:()=>e.jsx(r,{source:b,labels:t})},s={render:()=>e.jsx(r,{source:u,labels:t,forceStatus:"text",testId:"stripped"}),play:async({canvasElement:p})=>{const a=g(u);if(a.kind!=="flowchart"||a.removed!==2)throw new globalThis.Error(`the guard kept ${a.removed} removals, kind ${a.kind}`);if(/%%\{|click|<b>/.test(a.text))throw new globalThis.Error("a forbidden line survived the guard");const h=p.querySelector('[data-testid="stripped-text"]')?.textContent??"";if(/%%\{|click|<b>/.test(h))throw new globalThis.Error("the forbidden text was shown")}},L=["Flow","Sequence","C4Context","Loading","TextFallback","OutsideTheSubset","Stripped"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Diagram source={FLOW} labels={LABELS} caption={<>Drawn from this answer · [1] [2]</>} />
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Diagram source={SEQUENCE} labels={LABELS} caption="Drawn from this answer" />
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Diagram source={C4} labels={LABELS} title="The suite around one request" />
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Diagram source={FLOW} labels={LABELS} forceStatus="loading" />
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Diagram source={"flowchart LR\\n  A --> B --> [[["} labels={LABELS} forceStatus="text" caption="Drawn from this answer" />
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Diagram source={OUTSIDE} labels={LABELS} />
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Diagram source={WITH_DIRECTIVES} labels={LABELS} forceStatus="text" testId="stripped" />,
  play: async ({
    canvasElement
  }) => {
    const g = guardDiagram(WITH_DIRECTIVES);
    if (g.kind !== "flowchart" || g.removed !== 2) throw new globalThis.Error(\`the guard kept \${g.removed} removals, kind \${g.kind}\`);
    if (/%%\\{|click|<b>/.test(g.text)) throw new globalThis.Error("a forbidden line survived the guard");
    const shown = canvasElement.querySelector('[data-testid="stripped-text"]')?.textContent ?? "";
    if (/%%\\{|click|<b>/.test(shown)) throw new globalThis.Error("the forbidden text was shown");
  }
}`,...s.parameters?.docs?.source},description:{story:": the directive, the `click` and the HTML label never reach mermaid — the guard strips them before render.",...s.parameters?.docs?.description}}};export{i as C4Context,o as Flow,c as Loading,l as OutsideTheSubset,n as Sequence,s as Stripped,d as TextFallback,L as __namedExportsOrder,D as default};
