import{j as n}from"./iframe-C_4ax-Jm.js";import{F as r}from"./FigureStrip-CZuAN5sV.js";import"./preload-helper-PPVm8Dsz.js";function g(t,e=640,s=400){const a=`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${s}" viewBox="0 0 ${e} ${s}"><rect width="${e}" height="${s}" fill="#f7f7f6"/><rect x="16" y="16" width="${e-32}" height="40" fill="#e6e6e4"/><rect x="16" y="72" width="${e/3}" height="${s-88}" fill="#efefee"/><text x="${e/2}" y="${s/2+12}" font-family="system-ui" font-size="48" text-anchor="middle" fill="#5c5d61">${t}</text></svg>`;return`data:image/svg+xml;utf8,${encodeURIComponent(a)}`}const o={strip:"Screens · 7",open:"Open",close:"Close",described:"described by the model",unavailable:"This screen is not available to you"},p=["The Counterparties list with the New button","The new counterparty form, empty","The Legal entity tab filled in","The Contacts tab with one contact","The Bank accounts tab","The Save and close button","The counterparty card after saving"],i=p.map((t,e)=>({id:`fig_${e+1}`,alt:t,caption:e%2?t:`Figure ${e+1}. ${t}`,describedByModel:e%2===1,src:g(e+1)})),S={title:"Kit/FigureStrip",component:r,parameters:{ds:"DS-5011",docs:{description:{component:`FigureStrip (DS-5011): the answer's screens beyond the inline threshold — thumbnails with captions, one opens
large in a dialog named by its alt text; Esc closes and focus returns; a screen on its way is a quiet box; a screen
the reader may not see is its alt text (no gap, no count — ); a model-written caption says so ().`}}}},l={render:()=>n.jsx(r,{items:i,labels:o})},c={render:()=>n.jsx(r,{items:i.map((t,e)=>e>1?{...t,src:null,status:"loading"}:t),labels:{...o,strip:"Screens · 7"}})},d={render:()=>n.jsx(r,{items:i.map((t,e)=>e===2||e===5?{...t,src:null,status:"failed"}:t),labels:o})},u={render:()=>n.jsx(r,{items:i,labels:o,initialOpenId:"fig_3"})},m={render:()=>n.jsx(r,{items:i,labels:o,testId:"fs"}),play:async({canvasElement:t})=>{const e=t.querySelector('[data-testid="fs-thumb-fig_4"]');e?.focus(),e?.click(),await new Promise(a=>setTimeout(a,20));const s=t.querySelector('[data-testid="fs-dialog"]');if(!s||s.getAttribute("aria-label")!==p[3])throw new globalThis.Error("the dialog did not open with the figure's name");if(s.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:!0})),await new Promise(a=>setTimeout(a,20)),t.querySelector('[data-testid="fs-dialog"]'))throw new globalThis.Error("Esc did not close the dialog");if(document.activeElement!==e)throw new globalThis.Error("focus did not return to the thumbnail")}},w=["Populated","Loading","SomeNotAvailable","Opened","OpenAndClose"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <FigureStrip items={ITEMS} labels={LABELS} />
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <FigureStrip items={ITEMS.map((it, i) => i > 1 ? {
    ...it,
    src: null,
    status: "loading" as const
  } : it)} labels={{
    ...LABELS,
    strip: "Screens · 7"
  }} />
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <FigureStrip items={ITEMS.map((it, i) => i === 2 || i === 5 ? {
    ...it,
    src: null,
    status: "failed" as const
  } : it)} labels={LABELS} />
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <FigureStrip items={ITEMS} labels={LABELS} initialOpenId="fig_3" />
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <FigureStrip items={ITEMS} labels={LABELS} testId="fs" />,
  play: async ({
    canvasElement
  }) => {
    const thumb = canvasElement.querySelector<HTMLButtonElement>('[data-testid="fs-thumb-fig_4"]');
    thumb?.focus();
    thumb?.click();
    await new Promise(r => setTimeout(r, 20));
    const dialog = canvasElement.querySelector<HTMLElement>('[data-testid="fs-dialog"]');
    if (!dialog || dialog.getAttribute("aria-label") !== STEPS[3]) throw new globalThis.Error("the dialog did not open with the figure's name");
    dialog.dispatchEvent(new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: true
    }));
    await new Promise(r => setTimeout(r, 20));
    if (canvasElement.querySelector('[data-testid="fs-dialog"]')) throw new globalThis.Error("Esc did not close the dialog");
    if (document.activeElement !== thumb) throw new globalThis.Error("focus did not return to the thumbnail");
  }
}`,...m.parameters?.docs?.source}}};export{c as Loading,m as OpenAndClose,u as Opened,l as Populated,d as SomeNotAvailable,w as __namedExportsOrder,S as default};
