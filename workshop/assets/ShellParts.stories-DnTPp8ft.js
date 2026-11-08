import{j as a}from"./iframe-C_4ax-Jm.js";import{b as l,A as c,S as p,O as u}from"./index-Cuiwh_tg.js";import{w as x}from"./fixtures-DBR6MuXP.js";import"./preload-helper-PPVm8Dsz.js";import"./ShellDock-HLKM_5B0.js";import"./SettingsSheet-Bu5CIwR-.js";import"./palette-DzfNaVfP.js";import"./globe-DcMfC0yC.js";import"./SupportDrawerHost-Cw3uCbc8.js";import"./SupportDrawer-BxX_JNRa.js";import"./LobbyThread-9xK7Bd9J.js";import"./VoiceWaves-CVFNr488.js";import"./AskBar-D6qFedOb.js";import"./plus-Dc-VMSiJ.js";import"./mic-BjJKnwV3.js";import"./arrow-up-bnIz7tua.js";import"./Trace-BSKaAXMd.js";import"./ConversationFrame-crdlsIAN.js";import"./BrandMark-ZJnyD0IE.js";import"./HandOver-BZSm7-D2.js";import"./AskPanel-DKkH7ynl.js";import"./bell-Cmxh_C6X.js";import"./FigureStrip-CZuAN5sV.js";import"./Diagram-DxVp995-.js";import"./FlowCanvas-DjDnQRpY.js";import"./transform-ZCU-3ITE.js";import"./waypoints-Bg-fYCe3.js";import"./factory-Ck7b_c89.js";import"./users-w3fldoSO.js";import"./ConnectedAccounts-Clqaz6zB.js";import"./VoiceDock-Bocykek7.js";import"./keyboard-6y42Pb3I.js";import"./arrow-up-right-Ba_U-eY4.js";const K={title:"Layout/Shell parts",parameters:{ds:"DS-2001",layout:"padded",docs:{description:{component:"The shell's small parts (DS-2001 · DS-1061 · DS-1050): the brand — the wordmark `Nexi` in the expanded nav, the\nbare glyph in a 32 px rail target — *is* the launcher (); the app icon is the Lucide glyph of an app id (the\nlauncher tile, the rail's active-app mark, a row mark at 14); the offline strip is the one line under the top edge\nwhile the browser is offline (`role=status`, uk = en)."}}},decorators:[x()]},n={name:"brand",render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--nexus-space-5)",alignItems:"flex-start"},children:[a.jsx(p,{variant:"expanded"}),a.jsx(p,{variant:"rail"})]}),play:async({canvasElement:e})=>{const[d,m]=Array.from(e.querySelectorAll('[data-testid="shell-brand"]'));if(!d?.getAttribute("aria-label")||!m?.getAttribute("aria-keyshortcuts"))throw new globalThis.Error("the brand is not a named launcher button")}},s={...n,name:"brand-graphite",globals:{theme:"graphite"}},i={name:"app-icons",render:()=>a.jsx("ul",{style:{display:"flex",flexWrap:"wrap",gap:"var(--nexus-space-6)",listStyle:"none",margin:0,padding:0},children:l.map(e=>a.jsxs("li",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--nexus-space-2)",fontSize:"var(--nexus-text-sm)",color:"var(--nexus-text-secondary)"},children:[a.jsx("span",{className:"nexus-launcher-tile is-active","data-app":e.id,style:{minHeight:0,padding:"var(--nexus-space-4)"},children:a.jsx("span",{className:"nexus-launcher-icon-wrap",children:a.jsx(c,{appId:e.id})})}),e.name]},e.id))})},r={name:"app-icons-row",render:()=>a.jsx("ul",{style:{display:"flex",gap:"var(--nexus-space-4)",listStyle:"none",margin:0,padding:0,color:"var(--nexus-text-secondary)"},children:l.map(e=>a.jsx("li",{title:e.name,children:a.jsx(c,{appId:e.id,size:14})},e.id))})},t={name:"offline-strip",parameters:{layout:"fullscreen"},render:()=>a.jsx(u,{}),play:async({canvasElement:e})=>{if(e.querySelector('[data-testid="shell-offline-strip"]')?.getAttribute("role")!=="status")throw new globalThis.Error("the strip is not a status")}},o={...t,name:"offline-strip-uk",globals:{locale:"uk"}},Q=["Brand","BrandGraphite","AppIcons","AppIconsRow","Offline","OfflineUk"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "brand",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--nexus-space-5)",
    alignItems: "flex-start"
  }}>
      <ShellBrand variant="expanded" />
      <ShellBrand variant="rail" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const [expanded, rail] = Array.from(canvasElement.querySelectorAll<HTMLButtonElement>('[data-testid="shell-brand"]'));
    if (!expanded?.getAttribute("aria-label") || !rail?.getAttribute("aria-keyshortcuts")) throw new globalThis.Error("the brand is not a named launcher button");
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Brand,
  name: "brand-graphite",
  globals: {
    theme: "graphite"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "app-icons",
  render: () => <ul style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--nexus-space-6)",
    listStyle: "none",
    margin: 0,
    padding: 0
  }}>
      {NEXUS_APPS.map(app => <li key={app.id} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--nexus-space-2)",
      fontSize: "var(--nexus-text-sm)",
      color: "var(--nexus-text-secondary)"
    }}>
          <span className="nexus-launcher-tile is-active" data-app={app.id} style={{
        minHeight: 0,
        padding: "var(--nexus-space-4)"
      }}>
            <span className="nexus-launcher-icon-wrap">
              <AppIcon appId={app.id} />
            </span>
          </span>
          {app.name}
        </li>)}
    </ul>
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "app-icons-row",
  render: () => <ul style={{
    display: "flex",
    gap: "var(--nexus-space-4)",
    listStyle: "none",
    margin: 0,
    padding: 0,
    color: "var(--nexus-text-secondary)"
  }}>
      {NEXUS_APPS.map(app => <li key={app.id} title={app.name}>
          <AppIcon appId={app.id} size={14} />
        </li>)}
    </ul>
}`,...r.parameters?.docs?.source},description:{story:"The row mark (NexChat's Recent, ) asks for 14.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "offline-strip",
  parameters: {
    layout: "fullscreen"
  },
  render: () => <OfflineStrip />,
  play: async ({
    canvasElement
  }) => {
    if (canvasElement.querySelector('[data-testid="shell-offline-strip"]')?.getAttribute("role") !== "status") throw new globalThis.Error("the strip is not a status");
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Offline,
  name: "offline-strip-uk",
  globals: {
    locale: "uk"
  }
}`,...o.parameters?.docs?.source}}};export{i as AppIcons,r as AppIconsRow,n as Brand,s as BrandGraphite,t as Offline,o as OfflineUk,Q as __namedExportsOrder,K as default};
