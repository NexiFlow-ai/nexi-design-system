/* empty css                */import{K as s}from"./KeyChip-C4OfVYd9.js";import"./iframe-C_4ax-Jm.js";import"./preload-helper-PPVm8Dsz.js";const y={title:"Apps/NexCore/Key chip",component:s,parameters:{ds:"DS-3003",workbench:{ns:"core",path:"/core/models"},docs:{description:{component:"Key chip (,  · ): whose key answers for the organization on a model provider — the kit's Chip\n(DS-3003) in its three words, and the `—` of a key-less local provider. Shown after Health on Core › Models and on\na provider copy row in Core › Connections; the same chip in both places, the same copy in uk."}}}},t=a=>{throw new globalThis.Error(a)},e={name:"managed · the deployment's key answers",args:{owner:"managed",testId:"key"},play:async({canvasElement:a})=>{a.querySelector('[data-testid="key"]')?.textContent?.trim()||t("the chip says a word, never colour alone")}},n={name:"own key · the organization's",args:{owner:"own",testId:"key"}},o={name:"needs key · nothing to probe with",args:{owner:"none",testId:"key"}},r={name:"— · a key-less local provider",args:{owner:void 0,testId:"key"}},l=["Managed","OwnKey","NeedsKey","KeyLessLocal"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "managed · the deployment's key answers",
  args: {
    owner: "managed",
    testId: "key"
  },
  play: async ({
    canvasElement
  }) => {
    const chip = canvasElement.querySelector('[data-testid="key"]');
    if (!chip?.textContent?.trim()) fails("the chip says a word, never colour alone");
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "own key · the organization's",
  args: {
    owner: "own",
    testId: "key"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "needs key · nothing to probe with",
  args: {
    owner: "none",
    testId: "key"
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "— · a key-less local provider",
  args: {
    owner: undefined,
    testId: "key"
  }
}`,...r.parameters?.docs?.source}}};export{r as KeyLessLocal,e as Managed,o as NeedsKey,n as OwnKey,l as __namedExportsOrder,y as default};
