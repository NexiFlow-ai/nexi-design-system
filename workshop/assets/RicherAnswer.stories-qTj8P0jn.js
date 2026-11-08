import{ak as S,j as t}from"./iframe-C_4ax-Jm.js";import{G as j,C}from"./harness-p7-wY8XY.js";import"./BrandMark-ZJnyD0IE.js";import"./Trace-BSKaAXMd.js";import{F as A}from"./FigureStrip-CZuAN5sV.js";import{D as R}from"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                */import"./transform-ZCU-3ITE.js";const k=3;function v({view:e,inlineMax:r=k,testId:n="answer-figures"}){const{t:a}=S(),{figures:s,rescuedFrom:i}=e;if(s.length===0)return null;const o={strip:a("turn.figures.strip",{n:String(s.length)}),open:a("turn.figures.open"),close:a("turn.figures.close"),described:a("turn.figures.described"),unavailable:a("turn.figures.unavailable")};return t.jsxs("section",{className:"nexus-answer-figures","data-testid":n,"aria-label":o.strip,children:[i?t.jsx("h4",{className:"nexus-answer-figures-rescued",children:a("turn.figures.rescued")}):null,s.length>r?t.jsx(A,{items:s,labels:o,testId:`${n}-strip`}):t.jsx("div",{className:"nexus-answer-figures-inline",children:s.map(d=>t.jsx(_,{figure:d,describedLabel:o.described,unavailableLabel:o.unavailable,testId:`${n}-${d.id}`},d.id))}),i?t.jsx("p",{className:"nexus-turn-line nexus-answer-figures-receipt","data-testid":`${n}-receipt`,children:a("turn.figures.rescued_receipt",{document:i})}):null]})}function _({figure:e,describedLabel:r,unavailableLabel:n,testId:a}){const s=e.status??(e.src?"ok":"loading"),i=s!=="ok"&&s!=="loading"&&!e.caption;return t.jsxs("figure",{className:"nexus-md-figure","data-testid":a,"data-status":s,children:[s==="ok"&&e.src?t.jsx("img",{src:e.src,alt:e.caption===e.alt?"":e.alt,loading:"lazy"}):s==="loading"?t.jsx("span",{className:"nexus-md-figure-loading nexus-md-figure-loading-block",role:"img","aria-busy":"true","aria-label":e.alt}):i?t.jsx("span",{className:"nexus-answer-figures-unavailable",title:n,children:e.alt}):t.jsx("span",{className:"nexus-answer-figures-unavailable",role:"img","aria-label":e.alt,title:n}),e.caption?t.jsxs("figcaption",{children:[e.caption,e.describedByModel?t.jsxs("span",{className:"nexus-answer-figures-described",children:[" · ",r]}):null]}):null]})}v.__docgenInfo={description:` S9-a ( ·  · DS-5011;  … ) — **Answer figures**: the screens an answer's
evidence holds, inline where the step is when there are few, folded into the strip when there are many. The author's
caption is the author's; a model-described one says so (). A 404 from the figure door is the alt text —
no gap, no count (). The engine's rescue () is the block *Screens for these steps* with its receipt.`,methods:[],displayName:"AnswerFigures",props:{view:{required:!0,tsType:{name:"AnswerFiguresView"},description:""},inlineMax:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"answer-figures"',computed:!1}}}};function N({view:e,onOpenInForge:r,busy:n=!1,errorKey:a=null,online:s=!0,testId:i="answer-diagram"}){const{t:o}=S(),d={title:o("turn.diagram.title"),asText:o("turn.diagram.as_text"),failed:o("turn.diagram.failed")},y=e.status??"rendered";if(y==="dropped")return t.jsx("p",{className:"nexus-turn-line nexus-diagram-dropped","data-testid":`${i}-dropped`,role:"status",children:o("turn.diagram.dropped")});const D=e.cited?.length?e.cited.map($=>`[${$}]`).join(" "):"",T=D?`${o("turn.diagram.caption")} · ${D}`:o("turn.diagram.caption"),E=y==="rendered"?void 0:y,F=e.door==="forge"&&!e.opened;return t.jsxs("div",{className:"nexus-diagram-card","data-testid":i,children:[t.jsx(R,{source:e.source,labels:d,caption:T,forceStatus:E,testId:`${i}-diagram`}),F||e.opened?t.jsxs("nav",{className:"nexus-turn-actions nexus-diagram-card-doors","aria-label":o("turn.diagram.title"),children:[F?t.jsx("span",{className:"nexus-turn-actions-item",children:t.jsx("button",{type:"button",className:"nexus-turn-link",disabled:n||!s,onClick:r,"data-testid":`${i}-forge`,children:o("turn.diagram.open_forge")})}):null,e.opened?t.jsxs("p",{className:"nexus-turn-line nexus-diagram-card-receipt","data-testid":`${i}-opened`,children:[o("turn.diagram.opened",{title:e.opened.title})," ",t.jsx("a",{href:e.opened.href,"data-testid":`${i}-scene`,children:o("turn.diagram.open_scene")})]}):null]}):null,a?t.jsx("p",{className:"nexus-turn-line nexus-route-error",role:"alert","data-testid":`${i}-error`,children:o(a)}):null]})}N.__docgenInfo={description:" S9-b ( ·  · DS-5012;  … ) — **Diagram card**: the ```mermaid fence an answer\ndrew from its own words, rendered by the kit's `Diagram` with the caption *Drawn from this answer · [n]* and the text\nalways beneath. A diagram whose node the answer never stated is removed — one receipt line, the prose untouched\n(). The door *Open in NexForge* exists only with the pack installed and the PEP's yes (); after the\nperson confirmed in NexForge, the receipt names the scene.",methods:[],displayName:"DiagramCard",props:{view:{required:!0,tsType:{name:"DiagramCardView"},description:""},onOpenInForge:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"The door to NexForge — the preview `POST /forge/scenes/import` and the confirmation in NexForge (S9-b, )."},busy:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},errorKey:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},online:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"answer-diagram"',computed:!1}}}};function q(e,r=640,n=400){const a=`<svg xmlns="http://www.w3.org/2000/svg" width="${r}" height="${n}" viewBox="0 0 ${r} ${n}"><rect width="${r}" height="${n}" fill="#f7f7f6"/><rect x="16" y="16" width="${r-32}" height="40" fill="#e6e6e4"/><rect x="16" y="72" width="${r/3}" height="${n-88}" fill="#efefee"/><text x="${r/2}" y="${n/2+12}" font-family="system-ui" font-size="48" text-anchor="middle" fill="#5c5d61">${e}</text></svg>`;return`data:image/svg+xml;utf8,${encodeURIComponent(a)}`}const I=["The Counterparties list with the New button","The new counterparty form, empty","The Legal entity tab filled in","The Contacts tab with one contact","The Bank accounts tab","The Save and close button","The counterparty card after saving"],L=["Список контрагентів із кнопкою Створити","Порожня форма нового контрагента","Заповнена вкладка Юридична особа","Вкладка Контакти з одним контактом","Вкладка Банківські рахунки","Кнопка Записати і закрити","Картка контрагента після збереження"];function l(e,r=7){return(e==="uk"?L:I).slice(0,r).map((a,s)=>({id:`fig_${s+1}`,alt:a,caption:s%2?a:`${e==="uk"?"Рис.":"Figure"} ${s+1}. ${a}`,describedByModel:s%2===1,src:q(s+1)}))}const P=`flowchart LR
  A[Open the Counterparties list] --> B[Press New]
  B --> C[Fill the Legal entity tab]
  C --> D[Add a contact]
  D --> E[Save and close]`,B=`flowchart LR
  A[Відкрити список контрагентів] --> B[Натиснути Створити]
  B --> C[Заповнити вкладку Юридична особа]
  C --> D[Додати контакт]
  D --> E[Записати і закрити]`;function O(e){const r=e==="uk",n=r?B:P,a=r?"База знань ЄФ — 1С":"EF knowledge base — 1C";return[{id:"figures-inline",label:r?"три екрани — у тексті":"three screens — inline",note:r?"До порога (3) екрани стоять там, де крок; підпис автора або «описано моделлю».":"At or under the threshold (3) the screens sit where the step is; the author's caption or *described by the model*.",figures:{figures:l(e,3)}},{id:"figures-strip",label:r?"сім екранів — смужка":"seven screens — the strip",note:r?"Понад поріг — смужка мініатюр; одна відкривається великою, Esc закриває, фокус повертається.":"Beyond the threshold — the strip; one opens large, Esc closes, focus returns.",figures:{figures:l(e,7)}},{id:"figures-rescued",label:r?"екрани, додані движком":"screens the engine added",note:r?"Модель не поставила жодного екрана — блок «Екрани до цих кроків» і квитанція, яка це каже ().":"The model placed none — the block *Screens for these steps* and the receipt that says so ().",figures:{figures:l(e,4),rescuedFrom:a}},{id:"figures-loading",label:r?"екрани в дорозі":"screens on their way",note:r?"Тихі рамки, поки байти йдуть дверима фігур.":"Quiet boxes while the bytes come through the figure door.",figures:{figures:l(e,5).map((s,i)=>i?{...s,src:null,status:"loading"}:s)}},{id:"figures-not-available",label:r?"екран, якого не видно":"a screen the reader may not see",note:r?"404 з дверей — alt‑текст замість рамки; без пропуску, без лічильника ().":"A 404 from the door — the alt text stands in; no gap, no count ().",figures:{figures:l(e,3).map((s,i)=>i===2?{...s,src:null,status:"failed"}:s)}},{id:"diagram",label:r?"схема з відповіді":"a diagram from the answer",note:r?"Намальовано з власних слів відповіді; підпис несе її [n]; «Схема текстом» завжди поруч.":"Drawn from the answer's own words; the caption carries its [n]; *Diagram as text* is always beneath.",diagram:{source:n,cited:[1,2],status:"rendered"}},{id:"diagram-with-door",label:r?"схема з дверима у NexForge":"a diagram with the door to NexForge",note:r?"Пак NexForge встановлено, PEP дозволяє — одна кнопка.":"The NexForge pack is installed and the PEP allows — one button.",diagram:{source:n,cited:[1,2],status:"rendered",door:"forge"}},{id:"diagram-opened",label:r?"сцену відкрито у NexForge":"the scene opened in NexForge",note:r?"Після підтвердження у NexForge — квитанція і посилання на сцену.":"After the confirmation in NexForge — the receipt and the scene's link.",diagram:{source:n,cited:[1,2],status:"rendered",door:"forge",opened:{title:r?"Реєстрація клієнта":"Customer registration",href:"/forge/scenes/scn_fixture"}}},{id:"diagram-text",label:r?"схему не намальовано — текст":"not drawn — the text",note:r?"Збій рендеру — текст схеми з одним рядком, чому; ніколи не порожньо.":"A render failure — the text with one line saying why; never blank.",diagram:{source:n,status:"text"}},{id:"diagram-dropped",label:r?"схему прибрано":"the diagram removed",note:r?"Вузол, якого немає у словах відповіді — схему прибрано, квитанція каже чому; текст відповіді без змін ().":"A node the answer's words do not state — the diagram is removed, the receipt says why; the prose is untouched ().",diagram:{source:n,status:"dropped"}}]}function V({id:e}){const{locale:r}=S(),a=O(r==="uk"?"uk":"en").find(s=>s.id===e);return t.jsx(j,{children:t.jsxs(C,{label:a.label,testId:`richer-scene-cell-${a.id}`,children:[a.figures?t.jsx(v,{view:a.figures,testId:`richer-${a.id}`}):null,a.diagram?t.jsx(N,{view:a.diagram,testId:`richer-${a.id}`}):null,t.jsx("p",{className:"nexus-goal-scene-note",children:a.note})]})})}const Y={title:"Conversation/Richer answer",component:V,parameters:{ds:"DS-5011",layout:"padded"}},c={args:{id:"figures-inline"}},u={args:{id:"figures-strip"}},g={args:{id:"figures-rescued"}},m={args:{id:"figures-loading"}},p={args:{id:"figures-not-available"},play:async({canvasElement:e})=>{const r=e.querySelector('[data-testid="richer-figures-not-available-fig_3"]');if(!r||r.getAttribute("data-status")!=="failed")throw new globalThis.Error("the unavailable figure is not the alt text");if(r.querySelector("img"))throw new globalThis.Error("a 404 figure drew an image");if(/not available|недоступн/i.test(e.querySelector('[data-testid="richer-figures-not-available"]')?.textContent??""))throw new globalThis.Error("the strip counted the missing one aloud (: no gap, no count)")}},h={args:{id:"diagram"},parameters:{ds:"DS-5012"}},f={args:{id:"diagram-with-door"},parameters:{ds:"DS-5012"}},x={args:{id:"diagram-opened"},parameters:{ds:"DS-5012"}},w={args:{id:"diagram-text"},parameters:{ds:"DS-5012"}},b={args:{id:"diagram-dropped"},parameters:{ds:"DS-5012"},play:async({canvasElement:e})=>{if(e.querySelector('[data-testid="richer-diagram-dropped-diagram"]'))throw new globalThis.Error("a removed diagram was drawn");if(!e.querySelector('[data-testid="richer-diagram-dropped-dropped"]')?.textContent?.trim())throw new globalThis.Error("the removal has no receipt")}},Z=["FiguresInline","FiguresStrip","FiguresRescued","FiguresLoading","FiguresNotAvailable","Diagram","DiagramWithDoor","DiagramOpened","DiagramText","DiagramDropped"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: "figures-inline"
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: "figures-strip"
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "figures-rescued"
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: "figures-loading"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: "figures-not-available"
  },
  play: async ({
    canvasElement
  }) => {
    const cell = canvasElement.querySelector('[data-testid="richer-figures-not-available-fig_3"]');
    if (!cell || cell.getAttribute("data-status") !== "failed") throw new globalThis.Error("the unavailable figure is not the alt text");
    if (cell.querySelector("img")) throw new globalThis.Error("a 404 figure drew an image");
    if (/not available|недоступн/i.test(canvasElement.querySelector('[data-testid="richer-figures-not-available"]')?.textContent ?? "")) {
      throw new globalThis.Error("the strip counted the missing one aloud (: no gap, no count)");
    }
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: "diagram"
  },
  parameters: {
    ds: "DS-5012"
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: "diagram-with-door"
  },
  parameters: {
    ds: "DS-5012"
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: "diagram-opened"
  },
  parameters: {
    ds: "DS-5012"
  }
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    id: "diagram-text"
  },
  parameters: {
    ds: "DS-5012"
  }
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: "diagram-dropped"
  },
  parameters: {
    ds: "DS-5012"
  },
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="richer-diagram-dropped-diagram"]')) throw new globalThis.Error("a removed diagram was drawn");
    const line = canvasElement.querySelector('[data-testid="richer-diagram-dropped-dropped"]');
    if (!line?.textContent?.trim()) throw new globalThis.Error("the removal has no receipt");
  }
}`,...b.parameters?.docs?.source}}};export{h as Diagram,b as DiagramDropped,x as DiagramOpened,w as DiagramText,f as DiagramWithDoor,c as FiguresInline,m as FiguresLoading,p as FiguresNotAvailable,g as FiguresRescued,u as FiguresStrip,Z as __namedExportsOrder,Y as default};
