import{m as p,q as l,a as m,n as r}from"./scene-BIkkuSa8.js";import{P as y}from"./ProductsScreen-r0rfkUZB.js";import"./world-D7bs8um4.js";import"./types-CBmIxQfA.js";import"./iframe-C_4ax-Jm.js";import"./preload-helper-PPVm8Dsz.js";import"./format-CwKZ7-7k.js";import"./routes-CtGbDcx2.js";import"./SourceChip-ME9pM3wu.js";const D={title:"Apps/NexFactory/Products",component:y,parameters:{ds:"DS-7001",layout:"fullscreen",workbench:{ns:"factory",path:"/factory/products"},docs:{description:{component:`Products (DS-7001 *Discovery list → Inspector* · DS-7010): the catalog as the owner holds it — code · name · family ·
the current revision with its status word · the source chip (DS-6101); the row opens the Inspector, *Open* the page.`}}},args:{}},a={name:"Populated · connected (Plant ERP)",args:{view:p(l(m("olena")))}},o={name:"Populated · Build mode (native)",args:{view:p(l(m("olena","native")))}},e={name:"A project relation (Kateryna · avionics only)",args:{view:p(l(m("kateryna")))},play:async({canvasElement:u})=>{if(u.querySelectorAll('[data-testid="products-table"] tbody tr').length!==2)throw new globalThis.Error("the quality lead sees the two avionics products, no more")}},t={name:"Row selected · the Inspector",args:{view:p(l(m("olena"))),initialSelected:"prd_bd7_air"},play:async({canvasElement:u})=>{const g=h=>u.querySelector(`[data-testid="${h}"]`);if(!g("product-inspector"))throw new globalThis.Error("the Inspector did not open on the selected row");if(!g("product-inspector")?.textContent?.includes("in change"))throw new globalThis.Error("rev D reads in change")}},s={args:{view:r("empty")}},n={args:{view:r("loading")}},c={args:{view:r("error")}},i={args:{view:r("denied")}},d={args:{view:r("offline")}},q=["Populated","Build","Avionics","WithInspector","Empty","Loading","Error","Denied","Offline"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Populated · connected (Plant ERP)",
  args: {
    view: ready(records.products(as("olena")))
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Populated · Build mode (native)",
  args: {
    view: ready(records.products(as("olena", "native")))
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "A project relation (Kateryna · avionics only)",
  args: {
    view: ready(records.products(as("kateryna")))
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelectorAll('[data-testid="products-table"] tbody tr').length !== 2) throw new globalThis.Error("the quality lead sees the two avionics products, no more");
  }
}`,...e.parameters?.docs?.source},description:{story:": the quality lead holds avionics only — two of four products",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Row selected · the Inspector",
  args: {
    view: ready(records.products(as("olena"))),
    initialSelected: "prd_bd7_air"
  },
  play: async ({
    canvasElement
  }) => {
    const by = (id: string) => canvasElement.querySelector<HTMLElement>(\`[data-testid="\${id}"]\`);
    if (!by("product-inspector")) throw new globalThis.Error("the Inspector did not open on the selected row");
    if (!by("product-inspector")?.textContent?.includes("in change")) throw new globalThis.Error("rev D reads in change");
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("empty")
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("loading")
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("error")
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("denied")
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    view: state("offline")
  }
}`,...d.parameters?.docs?.source}}};export{e as Avionics,o as Build,i as Denied,s as Empty,c as Error,n as Loading,d as Offline,a as Populated,t as WithInspector,q as __namedExportsOrder,D as default};
