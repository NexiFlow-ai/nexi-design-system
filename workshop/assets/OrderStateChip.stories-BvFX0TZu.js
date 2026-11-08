import{j as r}from"./iframe-C_4ax-Jm.js";import{O as a,V as n}from"./OrderStateChip-D77petS4.js";import"./preload-helper-PPVm8Dsz.js";import"./types-CBmIxQfA.js";const o=["draft","planned","readiness_review","released","in_progress","paused","quality_hold","rework","completed","closed","cancelled"],d=["ready","ready_with_risk","blocked","unknown",null],m={title:"Apps/NexFactory/Order state chip",component:a,parameters:{ds:"DS-6703",workbench:{ns:"factory",path:"/factory/orders"},docs:{description:{component:`DS-6703 (proposed · ) · the order state chip: the eleven canonical states (), one tone per family —
planning · running · held · done · cancelled. Beside it the verdict word of . The word carries the meaning;
the dot is redundant (DS-0001).`}}},args:{state:"released"}},t={name:"The eleven states",render:()=>r.jsx("ul",{className:"nexus-factory-story-pad nexus-factory-tree","aria-label":"states",children:o.map(e=>r.jsx("li",{children:r.jsx(a,{state:e,testId:`chip-${e}`})},e))})},s={name:"The verdicts (VerdictChip)",render:()=>r.jsx("ul",{className:"nexus-factory-story-pad nexus-factory-tree","aria-label":"verdicts",children:d.map(e=>r.jsx("li",{children:r.jsx(n,{verdict:e,testId:`verdict-${e??"none"}`})},e??"none"))})},u=["Populated","Verdicts"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "The eleven states",
  render: () => <ul className="nexus-factory-story-pad nexus-factory-tree" aria-label="states">
      {STATES.map(s => <li key={s}>
          <OrderStateChip state={s} testId={\`chip-\${s}\`} />
        </li>)}
    </ul>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "The verdicts (VerdictChip)",
  render: () => <ul className="nexus-factory-story-pad nexus-factory-tree" aria-label="verdicts">
      {VERDICTS.map(v => <li key={v ?? "none"}>
          <VerdictChip verdict={v} testId={\`verdict-\${v ?? "none"}\`} />
        </li>)}
    </ul>
}`,...s.parameters?.docs?.source}}};export{t as Populated,s as Verdicts,u as __namedExportsOrder,m as default};
