import{_ as o,$ as s,j as r,a0 as t,a1 as w,a2 as b}from"./iframe-C_4ax-Jm.js";import"./preload-helper-PPVm8Dsz.js";const h=["dropbox","atlassian","telegram","postgresql","google-workspace"],x=[{provider:"canva",name:"Canva"},{provider:"tavily",name:"Tavily"},{provider:null,name:"Port Weather API"}],f={title:"Kit/Provider mark",component:o,parameters:{ds:"DS-3066"},args:{name:"Dropbox",provider:"dropbox"}};function u({children:e,label:a}){return r.jsxs("li",{className:"nexus-row-flex",style:{padding:"var(--nexus-space-2) 0"},children:[e,r.jsx("span",{children:a})]})}const l={name:"mark",render:()=>r.jsx("ul",{className:"nexus-list","aria-label":"Connected providers",children:h.map(e=>r.jsx(u,{label:t[e].title,children:r.jsx(o,{name:t[e].title,provider:e})},e))}),play:async({canvasElement:e})=>{const a=e.querySelectorAll('.nexus-provider-mark[data-kind="mark"]');if(a.length!==h.length)throw new globalThis.Error(`${h.length} marks expected, ${a.length} drawn`);if(!e.textContent?.includes("Dropbox"))throw new globalThis.Error("the provider's name is not beside its mark");const n=a[0];if(n.style.getPropertyValue("--nexus-provider-color").toLowerCase()!==t.dropbox.hex.toLowerCase())throw new globalThis.Error("the brand's colour is not the subset's");if(n.getAttribute("aria-hidden")!=="true")throw new globalThis.Error("the mark is not aria-hidden");if(e.querySelector(".nexus-provider-mark svg")?.closest(".nexus-provider-mark")!==n)throw new globalThis.Error("the glyph is not inside the square")}},i={name:"monogram",render:()=>r.jsx("ul",{className:"nexus-list","aria-label":"Providers without a glyph",children:x.map(e=>r.jsx(u,{label:e.name,children:r.jsx(o,{name:e.name,provider:e.provider})},e.name))}),play:async({canvasElement:e})=>{const a=Array.from(e.querySelectorAll(".nexus-provider-mark-monogram")).map(n=>n.textContent);if(a.join(",")!=="CA,TA,PW")throw new globalThis.Error(`monograms are ${a.join(",")}, not CA,TA,PW`);if(e.querySelector('[data-kind="mark"], [data-kind="brand"]'))throw new globalThis.Error("a mark drawn for a monogram-only provider");if(!("tavily"in w))throw new globalThis.Error("tavily is not recorded as monogram-only");if(!("canva"in b))throw new globalThis.Error("canva is not recorded as left out of the brand marks")}},d={name:"brand",render:()=>r.jsx("ul",{className:"nexus-list","aria-label":"First-party marks",style:{display:"flex",flexWrap:"wrap",gap:"var(--nexus-space-4)"},children:Object.keys(s).map(e=>r.jsxs("li",{className:"nexus-row-flex",style:{padding:"var(--nexus-space-1) 0"},children:[r.jsx(o,{name:s[e].title,provider:e}),r.jsx("span",{children:s[e].title})]},e))}),play:async({canvasElement:e})=>{const a=e.querySelectorAll('.nexus-provider-mark[data-kind="brand"]'),n=Object.keys(s).length;if(a.length!==n)throw new globalThis.Error(`${n} brand marks expected, ${a.length} drawn`);if(e.querySelector(".nexus-provider-mark-monogram"))throw new globalThis.Error("a monogram among the brand marks");if(e.querySelector("script, foreignObject, image, text"))throw new globalThis.Error("an element outside the allow-list reached the page");for(const y of e.querySelectorAll("[id]"))if(!y.id.startsWith("nx-"))throw new globalThis.Error(`an unprefixed id: ${y.id}`);const g=e.querySelector('[data-provider="slack"] svg');if(!g||g.querySelectorAll("path").length!==4)throw new globalThis.Error("Slack is not the four-colour mark");if(!s.slack.source.startsWith("https://")||!s.slack.guidelines.startsWith("https://"))throw new globalThis.Error("Slack's notice is incomplete")}},c={name:"graphite-only",globals:{theme:"graphite"},render:()=>r.jsx("ul",{className:"nexus-list","aria-label":"Coloured and graphite-only",children:h.map(e=>r.jsxs(u,{label:t[e].title,children:[r.jsx(o,{name:t[e].title,provider:e}),r.jsx(o,{name:t[e].title,provider:e,graphiteOnly:!0})]},e))}),play:async({canvasElement:e})=>{const a=e.querySelectorAll('.nexus-provider-mark[data-graphite-only="true"]');if(a.length!==h.length)throw new globalThis.Error("no graphite-only twins");if(Array.from(a).some(n=>n.style.getPropertyValue("--nexus-provider-color")))throw new globalThis.Error("a graphite-only mark carries the brand's colour")}},m={name:"sizes",render:()=>r.jsx("ul",{className:"nexus-list","aria-label":"Mark sizes",children:["md","sm"].map(e=>r.jsxs(u,{label:`Dropbox · ${e}`,children:[r.jsx(o,{name:"Dropbox",provider:"dropbox",size:e}),r.jsx(o,{name:"Port Weather API",size:e})]},e))})},p={name:"own-glyph",render:()=>r.jsx("ul",{className:"nexus-list","aria-label":"A caller's own glyph",children:r.jsx(u,{label:"Circle Mail",children:r.jsx(o,{name:"Circle Mail",provider:"dropbox",glyph:"M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20z",color:"#c2410c"})})}),play:async({canvasElement:e})=>{const a=e.querySelector(".nexus-provider-mark");if(a?.getAttribute("data-provider"))throw new globalThis.Error("the subset's glyph drawn over the caller's own");if(a?.style.getPropertyValue("--nexus-provider-color")!=="#c2410c")throw new globalThis.Error("the caller's colour lost")}},E=["Mark","Monogram","Brand","GraphiteOnly","Sizes","OwnGlyph"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "mark",
  render: () => <ul className="nexus-list" aria-label="Connected providers">
      {MARKED.map(p => <Line key={p} label={PROVIDER_GLYPHS[p].title}>
          <ProviderMark name={PROVIDER_GLYPHS[p].title} provider={p} />
        </Line>)}
    </ul>,
  play: async ({
    canvasElement
  }) => {
    const marks = canvasElement.querySelectorAll<HTMLElement>('.nexus-provider-mark[data-kind="mark"]');
    if (marks.length !== MARKED.length) throw new globalThis.Error(\`\${MARKED.length} marks expected, \${marks.length} drawn\`);
    if (!canvasElement.textContent?.includes("Dropbox")) throw new globalThis.Error("the provider's name is not beside its mark");
    const first = marks[0];
    if (first.style.getPropertyValue("--nexus-provider-color").toLowerCase() !== PROVIDER_GLYPHS.dropbox.hex.toLowerCase()) throw new globalThis.Error("the brand's colour is not the subset's");
    if (first.getAttribute("aria-hidden") !== "true") throw new globalThis.Error("the mark is not aria-hidden");
    if (canvasElement.querySelector(".nexus-provider-mark svg")?.closest(".nexus-provider-mark") !== first) throw new globalThis.Error("the glyph is not inside the square");
  }
}`,...l.parameters?.docs?.source},description:{story:"Five providers of the generated subset, each in its brand's colour, beside their names.",...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "monogram",
  render: () => <ul className="nexus-list" aria-label="Providers without a glyph">
      {MONOGRAMS.map(m => <Line key={m.name} label={m.name}>
          <ProviderMark name={m.name} provider={m.provider} />
        </Line>)}
    </ul>,
  play: async ({
    canvasElement
  }) => {
    const text = Array.from(canvasElement.querySelectorAll(".nexus-provider-mark-monogram")).map(m => m.textContent);
    if (text.join(",") !== "CA,TA,PW") throw new globalThis.Error(\`monograms are \${text.join(",")}, not CA,TA,PW\`);
    if (canvasElement.querySelector('[data-kind="mark"], [data-kind="brand"]')) throw new globalThis.Error("a mark drawn for a monogram-only provider");
    if (!("tavily" in PROVIDER_MONOGRAM_ONLY)) throw new globalThis.Error("tavily is not recorded as monogram-only");
    if (!("canva" in BRAND_MARKS_LEFT_OUT)) throw new globalThis.Error("canva is not recorded as left out of the brand marks");
  }
}`,...i.parameters?.docs?.source},description:{story:"No glyph: the monogram — a provider the set deliberately lacks (`PROVIDER_MONOGRAM_ONLY`) or an unknown one.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "brand",
  render: () => <ul className="nexus-list" aria-label="First-party marks" style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--nexus-space-4)"
  }}>
      {Object.keys(BRAND_MARKS).map(p => <li key={p} className="nexus-row-flex" style={{
      padding: "var(--nexus-space-1) 0"
    }}>
          <ProviderMark name={BRAND_MARKS[p].title} provider={p} />
          <span>{BRAND_MARKS[p].title}</span>
        </li>)}
    </ul>,
  play: async ({
    canvasElement
  }) => {
    const marks = canvasElement.querySelectorAll<HTMLElement>('.nexus-provider-mark[data-kind="brand"]');
    const n = Object.keys(BRAND_MARKS).length;
    if (marks.length !== n) throw new globalThis.Error(\`\${n} brand marks expected, \${marks.length} drawn\`);
    if (canvasElement.querySelector(".nexus-provider-mark-monogram")) throw new globalThis.Error("a monogram among the brand marks");
    // the tree is rendered through React: no script, no foreignObject, no image, every id prefixed per brand
    if (canvasElement.querySelector("script, foreignObject, image, text")) throw new globalThis.Error("an element outside the allow-list reached the page");
    for (const el of canvasElement.querySelectorAll("[id]")) if (!el.id.startsWith("nx-")) throw new globalThis.Error(\`an unprefixed id: \${el.id}\`);
    const slack = canvasElement.querySelector('[data-provider="slack"] svg');
    if (!slack || slack.querySelectorAll("path").length !== 4) throw new globalThis.Error("Slack is not the four-colour mark");
    // the notice travels with the mark
    if (!BRAND_MARKS.slack.source.startsWith("https://") || !BRAND_MARKS.slack.guidelines.startsWith("https://")) throw new globalThis.Error("Slack's notice is incomplete");
  }
}`,...d.parameters?.docs?.source},description:{story:`The first-party marks (BRAND-4501): every brand of \`packages/ui/brand/marks.json\` in its own colours inside the same
square — a tree of allow-listed nodes rendered through React, never markup. Slack and Microsoft 365, monograms until
2026-11-01, are marks now; a lockup is cropped to the brand's standalone symbol where it has one (Twilio · monday.com ·
ServiceNow); the pure wordmarks (Oracle · monobank · AWS) are drawn whole.`,...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "graphite-only",
  globals: {
    theme: "graphite"
  },
  render: () => <ul className="nexus-list" aria-label="Coloured and graphite-only">
      {MARKED.map(p => <Line key={p} label={PROVIDER_GLYPHS[p].title}>
          <ProviderMark name={PROVIDER_GLYPHS[p].title} provider={p} />
          <ProviderMark name={PROVIDER_GLYPHS[p].title} provider={p} graphiteOnly />
        </Line>)}
    </ul>,
  play: async ({
    canvasElement
  }) => {
    const twins = canvasElement.querySelectorAll<HTMLElement>('.nexus-provider-mark[data-graphite-only="true"]');
    if (twins.length !== MARKED.length) throw new globalThis.Error("no graphite-only twins");
    if (Array.from(twins).some(t => t.style.getPropertyValue("--nexus-provider-color"))) throw new globalThis.Error("a graphite-only mark carries the brand's colour");
  }
}`,...c.parameters?.docs?.source},description:{story:"Graphite theme, the coloured mark beside its `graphiteOnly` twin — the glyph takes the text colour.",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "sizes",
  render: () => <ul className="nexus-list" aria-label="Mark sizes">
      {(["md", "sm"] as ProviderMarkSize[]).map(size => <Line key={size} label={\`Dropbox · \${size}\`}>
          <ProviderMark name="Dropbox" provider="dropbox" size={size} />
          <ProviderMark name="Port Weather API" size={size} />
        </Line>)}
    </ul>
}`,...m.parameters?.docs?.source},description:{story:"`md` (28 / 20) for rows and cards; `sm` (24 / 16) for a dense line or a chip.",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "own-glyph",
  render: () => <ul className="nexus-list" aria-label="A caller's own glyph">
      <Line label="Circle Mail">
        <ProviderMark name="Circle Mail" provider="dropbox" glyph="M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20z" color="#c2410c" />
      </Line>
    </ul>,
  play: async ({
    canvasElement
  }) => {
    const mark = canvasElement.querySelector<HTMLElement>(".nexus-provider-mark");
    if (mark?.getAttribute("data-provider")) throw new globalThis.Error("the subset's glyph drawn over the caller's own");
    if (mark?.style.getPropertyValue("--nexus-provider-color") !== "#c2410c") throw new globalThis.Error("the caller's colour lost");
  }
}`,...p.parameters?.docs?.source},description:{story:"A caller's own path wins over the subset (a custom API's mark later; a synthetic fixture today).",...p.parameters?.docs?.description}}};export{d as Brand,c as GraphiteOnly,l as Mark,i as Monogram,p as OwnGlyph,m as Sizes,E as __namedExportsOrder,f as default};
