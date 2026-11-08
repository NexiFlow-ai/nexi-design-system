import{j as u}from"./iframe-C_4ax-Jm.js";import{o as g,a as m}from"./scene-BIkkuSa8.js";import{R as h}from"./ReadinessGates-D343tUtn.js";import"./preload-helper-PPVm8Dsz.js";import"./world-D7bs8um4.js";import"./types-CBmIxQfA.js";import"./format-CwKZ7-7k.js";import"./OrderStateChip-D77petS4.js";import"./SourceChip-ME9pM3wu.js";const R={title:"Apps/NexFactory/Readiness gates",component:h,parameters:{ds:"DS-6701",workbench:{ns:"factory",path:"/factory/orders/wo_1042"},docs:{description:{component:`DS-6701 (proposed) · the readiness gates: the verdict first, one row per gate in the policy's order — glyph and word
(never colour alone) · the reason · the evidence with its source chip · the evaluation's time and policy version.
The four verdicts of  are the four states; \`unknown\` reads *not ready* (). S2: *Changed by* names
the gate and the fact the engine recorded; *Re-evaluating* keeps the last record visible, dimmed, while the live
region says *Evaluating…* (A11Y-2903 · ).`}}},decorators:[e=>u.jsx("div",{className:"nexus-factory-story-pad",children:u.jsx(e,{})})]},a=e=>g(m("olena"),e).readiness,n={name:"Blocked · a required gate failed",args:{evaluation:a("wo_1042")}},o={name:"Unknown · a required fact is missing",args:{evaluation:a("wo_1043")}},r={name:"Ready · seven of seven",args:{evaluation:a("wo_1041")}},s={name:"Ready with risk · the optional gate",args:{evaluation:a("wo_1044")}},i={name:"Changed by · the gate and the fact the engine recorded",args:{evaluation:{...a("wo_1042"),changed_by_gate:"materials_available",changed_by:"lot_cm_2209",cause:"exception"}},play:async({canvasElement:e})=>{const t=e.querySelector('[data-testid="readiness-foot"]')?.textContent??"";if(!t.includes("Materials available")||!t.includes("lot_cm_2209"))throw new globalThis.Error("the foot does not name the gate and the fact that changed the verdict")}},d={name:"Re-evaluating · the last record stays, the live region speaks",args:{evaluation:a("wo_1043"),reevaluating:!0},play:async({canvasElement:e})=>{const t=e.querySelector('[data-testid="readiness-status"]');if(t?.getAttribute("role")!=="status"||!t.textContent?.includes("Evaluating"))throw new globalThis.Error("the live region does not say Evaluating…");if(!e.querySelector('[data-testid="gate-instruction_approved"]'))throw new globalThis.Error("the gates were blanked while the engine runs")}},c={name:"Not evaluated · a done order",args:{evaluation:null,why:"done"}},l={name:"Not evaluated yet · an open order the engine has not run over",args:{evaluation:null,why:"not_yet"}},k=["Populated","Unknown","Ready","ReadyWithRisk","ChangedBy","Reevaluating","NotEvaluated","NotYet"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Blocked · a required gate failed",
  args: {
    evaluation: of("wo_1042")
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Unknown · a required fact is missing",
  args: {
    evaluation: of("wo_1043")
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Ready · seven of seven",
  args: {
    evaluation: of("wo_1041")
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Ready with risk · the optional gate",
  args: {
    evaluation: of("wo_1044")
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Changed by · the gate and the fact the engine recorded",
  args: {
    evaluation: {
      ...of("wo_1042")!,
      changed_by_gate: "materials_available",
      changed_by: "lot_cm_2209",
      cause: "exception"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const foot = canvasElement.querySelector<HTMLElement>('[data-testid="readiness-foot"]')?.textContent ?? "";
    if (!foot.includes("Materials available") || !foot.includes("lot_cm_2209")) throw new globalThis.Error("the foot does not name the gate and the fact that changed the verdict");
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Re-evaluating · the last record stays, the live region speaks",
  args: {
    evaluation: of("wo_1043"),
    reevaluating: true
  },
  play: async ({
    canvasElement
  }) => {
    const status = canvasElement.querySelector<HTMLElement>('[data-testid="readiness-status"]');
    if (status?.getAttribute("role") !== "status" || !status.textContent?.includes("Evaluating")) throw new globalThis.Error("the live region does not say Evaluating…");
    if (!canvasElement.querySelector('[data-testid="gate-instruction_approved"]')) throw new globalThis.Error("the gates were blanked while the engine runs");
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Not evaluated · a done order",
  args: {
    evaluation: null,
    why: "done"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Not evaluated yet · an open order the engine has not run over",
  args: {
    evaluation: null,
    why: "not_yet"
  }
}`,...l.parameters?.docs?.source}}};export{i as ChangedBy,c as NotEvaluated,l as NotYet,n as Populated,r as Ready,s as ReadyWithRisk,d as Reevaluating,o as Unknown,k as __namedExportsOrder,R as default};
